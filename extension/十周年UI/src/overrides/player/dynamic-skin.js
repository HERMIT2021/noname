import { game, _status } from "noname";
import "../../animation/utils.js";
import { DynamicPlayer as i } from "../../animation/DynamicPlayer.js";

/**
 * 兼容性兜底说明（千幻聆音 / 皮肤切换 同时启用时）：
 *
 * 本扩展的 playerPlayDynamic / playerStopDynamic 会被千幻聆音的
 * game.qhly_changeDynamicSkin 在对局内反复调用（每次切肤都会先 stopDynamic
 * 再 playDynamic 一个新的 skinCopy，且 skinCopy 上带有 player=self 的自引用）。
 *
 * 旧实现存在两个会导致“切一次后无法再切 / 卡在当前动皮”的隐患：
 *  1. playDynamic 里只在 t.primary / t.deputy 存在时才 stop，而千幻会先单独
 *     调 stopDynamic(true,false) 把 primary 置空，随后 playDynamic 进来时
 *     primary 已为空，stop 分支被跳过——这本身没问题；但如果上一次播放因为
 *     骨骼未加载等原因没有真正建立 primary，旧的骨骼节点仍残留在渲染队列里，
 *     就会“卡在当前皮肤”。
 *  2. playDynamic 直接把传入对象当作 sprite 交给 DynamicPlayer.play，play 会
 *     往它上面写 id/loop 等字段。千幻传入的 skinCopy 带有 player=self 自引用，
 *     若上一次的 id 残留，stopSpine 会按 id 找到错的节点。
 *
 * 下面在保持原行为的前提下做兜底：
 *  - 播放前无条件把同侧残留的 primary/deputy 停掉，并清掉传入对象上可能残留
 *    的 id，保证每次 playDynamic 都是一次干净的播放。
 *  - 停止后若 primary/deputy 都已清空，确保 d-skin / d-skin2 class 与
 *    $dynamicWrap 一并被清理，避免“已停但还显示”。
 */

// 双将裁剪：与原逻辑一致，主将/副将各占一半并做 clip。
function clipForDoubleAvatar(anim, deputy) {
	const result = { ...anim };
	if (Array.isArray(result.x)) {
		result.x = [...result.x];
		result.x[1] += deputy ? 0.25 : -0.25;
	} else if (result.x === undefined) {
		result.x = [0, deputy ? 0.75 : 0.25];
	} else {
		result.x = [result.x, deputy ? 0.25 : -0.25];
	}
	result.clip = { x: [0, deputy ? 0.5 : 0], y: 0, width: [0, 0.5], height: [0, 1], clipParent: true };
	return result;
}

function playerPlayDynamic(n, e) {
	e = e === true;
	if (n === undefined) {
		console.error("playDynamic: 参数1不能为空");
		return;
	}

	let t = this.dynamic;

	// 兜底1：若已存在 DynamicPlayer，先把同侧残留的动皮停干净，避免上一次
	// 播放残留的骨骼节点继续显示导致“卡在当前皮肤”。
	if (t) {
		if (e) {
			if (t.deputy) {
				try {
					t.stop(t.deputy);
				} catch (err) {
					console.error("playDynamic: stop deputy 失败", err);
				}
				t.deputy = null;
			}
		} else {
			if (t.primary) {
				try {
					t.stop(t.primary);
				} catch (err) {
					console.error("playDynamic: stop primary 失败", err);
				}
				t.primary = null;
			}
		}
	} else {
		t = new i(window.decadeUIPath + "assets/dynamic/");
		t.dprAdaptive = true;
		this.dynamic = t;
		this.$dynamicWrap.appendChild(t.canvas);
	}

	if (typeof n === "string") {
		n = { name: n };
	}

	// 兜底2：清掉传入对象上可能残留的 id/loop 等播放态字段，防止 stopSpine 按
	// 旧 id 找到错误的骨骼节点（千幻传入的 skinCopy 带有 player=self 自引用，
	// 且可能被上一轮 play 写过 id）。
	if (n && typeof n === "object") {
		try {
			delete n.id;
		} catch (err) {}
	}

	if (this.doubleAvatar) {
		n = clipForDoubleAvatar(n, e);
	}

	if (this.$dynamicWrap.parentNode !== this) {
		this.appendChild(this.$dynamicWrap);
	}

	t.outcropMask = window.decadeUI?.config?.dynamicSkinOutcrop;

	let a;
	try {
		a = t.play(n);
	} catch (err) {
		console.error("playDynamic: DynamicPlayer.play 失败", err);
		return;
	}

	if (e) {
		t.deputy = a;
	} else {
		t.primary = a;
	}
	this.classList.add(e ? "d-skin2" : "d-skin");
}

function playerStopDynamic(i, n) {
	const e = this.dynamic;
	if (!e) return;

	n = n === true;
	i = i === true;

	if (i && e.primary) {
		try {
			e.stop(e.primary);
		} catch (err) {
			console.error("stopDynamic: stop primary 失败", err);
		}
		e.primary = null;
	} else if (n && e.deputy) {
		try {
			e.stop(e.deputy);
		} catch (err) {
			console.error("stopDynamic: stop deputy 失败", err);
		}
		e.deputy = null;
	} else if (!i && !n) {
		try {
			e.stopAll();
		} catch (err) {
			console.error("stopDynamic: stopAll 失败", err);
		}
		e.primary = null;
		e.deputy = null;
	}

	// 主线程渲染器下，清理掉仍引用本玩家的骨骼节点，避免残留显示。
	if (!e.offscreen && e.renderer) {
		try {
			(function (renderer, player) {
				if (!renderer.spine || !renderer.spine.skeletons) return;
				for (const s of renderer.spine.skeletons) {
					if (s.node && s.node.referNode === player) {
						s.completed = true;
						s.node = void 0;
					}
				}
			})(e.renderer, this);
		} catch (err) {
			console.error("stopDynamic: 清理骨骼节点失败", err);
		}
	}

	// 兜底3：两侧都停掉后，确保 class 与 $dynamicWrap 同步清理，避免“已停仍显示”。
	if (!e.primary && !e.deputy) {
		this.classList.remove("d-skin", "d-skin2");
		this.$dynamicWrap.remove();
	}
}

function playerApplyDynamicSkin() {
	const i = window.decadeUI;

	// 千幻聆音接管动皮切换时走它自己的 game.qhly_changeDynamicSkin。
	if (typeof game.qhly_changeDynamicSkin === "function") {
		this.name1 && game.qhly_changeDynamicSkin(this, void 0, this.name1, !1, !0);
		if (this.doubleAvatar && this.name2) {
			game.qhly_changeDynamicSkin(this, void 0, this.name2, !0, !0);
		}
		return;
	}

	if (!i?.config?.dynamicSkin || null === _status.mode) return;

	if (i.CUR_DYNAMIC ??= 0, (i.MAX_DYNAMIC ??= function () {
		const m = window.decadeUI?.isMobile?.() ? 2 : 10;
		const n = window.OffscreenCanvas ? 8 : 0;
		return m + n;
	}()), !this.dynamic && i.CUR_DYNAMIC >= i.MAX_DYNAMIC) return;

	const n = i.dynamicSkin;
	if (!n) return;

	const e = this.doubleAvatar && this.name2 ? [this.name1, this.name2] : [this.name1];
	let increased = false;

	e.forEach((name, a) => {
		const r = n[name];
		if (!r) return;
		const o = Object.keys(r);
		if (!o.length) return;
		const s = r[o[0]];
		if (!s?.name) return;

		const d = (function (skin) {
			const cfg = {
				name: skin.name,
				action: skin.action,
				loop: true,
				loopCount: -1,
				speed: skin.speed ?? 1,
				filpX: skin.filpX,
				filpY: skin.filpY,
				opacity: skin.opacity,
				x: skin.x,
				y: skin.y,
				scale: skin.scale,
				angle: skin.angle,
				hideSlots: skin.hideSlots,
				clipSlots: skin.clipSlots,
			};
			if (skin.alpha !== undefined) cfg.alpha = skin.alpha;
			if (skin.unpackPremultipliedAlpha !== undefined) cfg.unpackPremultipliedAlpha = skin.unpackPremultipliedAlpha;
			if (skin.player || skin._transform !== undefined) {
				cfg.player = { ...(skin.player || {}), ...(skin._transform !== undefined && { _transform: skin._transform }) };
			}
			return cfg;
		})(s);

		this.playDynamic(d, a === 1);

		if (s.background) {
			this.$dynamicWrap.style.backgroundImage = `url("${window.decadeUIPath}assets/dynamic/${s.background}")`;
		} else {
			this.$dynamicWrap.style.removeProperty("background-image");
		}

		if (!increased) {
			increased = true;
			i.CUR_DYNAMIC++;
		}
	});
}

export { playerApplyDynamicSkin, playerPlayDynamic, playerStopDynamic };

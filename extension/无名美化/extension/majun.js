import { lib, game, ui, get, ai, _status } from "../../../noname.js";

export function majun() {
	window._ThunderMajun = {
		qs_0: {
			name: "../../../无名美化/animation/majun/king",
		},
		qs_1: {
			name: "../../../无名美化/animation/majun/shangren",
		},
		qs_2: {
			name: "../../../无名美化/animation/majun/tiejiang",
		},
		qs_3: {
			name: "../../../无名美化/animation/majun/nongmin",
		},
		qs_4: {
			name: "../../../无名美化/animation/majun/shi",
		},
		qs_5: {
			name: "../../../无名美化/animation/majun/jiang",
		},
		qs_tishi: {
			name: "../../../无名美化/animation/majun/renoudianjitishi",
		},
		qs_guang: {
			name: "../../../无名美化/animation/majun/renou_guang",
		},
		jx_baiyin: {
			name: "../../../无名美化/animation/majun/ZYSZK_da",
		},
		jx_renwang: {
			name: "../../../无名美化/animation/majun/RWJGD_da",
		},
		jx_tengjia: {
			name: "../../../无名美化/animation/majun/TYBLJ_da",
		},
		jx_zhuge: {
			name: "../../../无名美化/animation/majun/XRJXN_da",
		},
		jx_bagua: {
			name: "../../../无名美化/animation/majun/XTBGZ_da",
		},
	};
	lib.translate.qiaosi_info = "出牌阶段限一次，你可以表演“水转百戏图”来赢取相应的牌，然后你选择一项：1.弃置等量的牌；2.将等量的牌交给一名其他角色。";
	Object.assign(lib.skill.qiaosi, {
		filter: function (event, player) {
			if (!window.qiaosixiao) {
				window.qiaosixiao = true;
				dcdAnim.loadSpine(_ThunderMajun.qs_tishi.name, "skel");
				dcdAnim.loadSpine(window._ThunderMajun.qs_0.name, "skel");
				dcdAnim.loadSpine(window._ThunderMajun.qs_1.name, "skel");
				dcdAnim.loadSpine(window._ThunderMajun.qs_2.name, "skel");
				dcdAnim.loadSpine(window._ThunderMajun.qs_3.name, "skel");
				dcdAnim.loadSpine(window._ThunderMajun.qs_4.name, "skel");
				dcdAnim.loadSpine(window._ThunderMajun.qs_5.name, "skel");
				dcdAnim.loadSpine(_ThunderMajun.qs_guang.name, "skel");
			}
			return true;
		},
		content: function () {
			"step 0";
			game.pause();
			game.thunderForbidTouch();
			event.threpeatAudio = lib.config.repeat_audio;
			lib.config.repeat_audio = false;
			event.canvas = document.createElement("canvas");
			event.canvas.classList.add("th-szbxtbg");
			event.canvas.id = "th-szbxt";
			event.canvas.width = 945;
			event.canvas.height = 540;
			document.body.appendChild(event.canvas);
			event.ctx = event.canvas.getContext("2d");
			event.ctx.font = '28px "shousha"';
			event.ctx.strokeStyle = "black";
			event.ctx.fillStyle = "white";
			event.ctx.lineWidth = 3;
			event.shoushaJDT = document.getElementById("jindutiao");
			if (event.shoushaJDT) {
				event.shoushaJDT.style.cssText += "transition:none;";
				event.shoushaJDT.hide();
			}
			var H = 0;
			event._result = {
				bool: false,
				index: [],
			};
			var frame = 380;
			var num = 0;
			var balls = [[], [], [], [], [], []];
			event.blackbg = ui.create.div(".th-dibeijing", document.body);
			event.blackbg.style.cssText += 'background:rgba(0,0,0,0.4);font-family:"th-zhongli";font-size:15px';
			var bxtbg = new Image();
			if (player == game.me) bxtbg.src = lib.assetURL + "extension/无名美化/image/qiaosi/baixitu_bg.png";
			else bxtbg.src = lib.assetURL + "extension/无名美化/image/qiaosi/baixitu_view_bg2.png";
			event.canvas.addEventListener(lib.config.touchscreen ? "touchstart" : "mousedown", function (e) {
				if (event.bxtFinished || !event.isMine()) return;
				if (lib.config.touchscreen) {
					//var rect = event.canvas.getBoundingClientRect();
					var x = (e.touches[0].clientX - event.canvas.offsetLeft * game.documentZoom) / game.documentZoom;
					var y = (e.touches[0].clientY - event.canvas.offsetTop * game.documentZoom) / game.documentZoom;
				} else {
					var x = e.clientX / game.documentZoom - event.canvas.offsetLeft;
					var y = e.clientY / game.documentZoom - event.canvas.offsetTop;
				}
				if (tipAnim) dcdAnim.stopSpine(tipAnim);
				if (y > 170 || y < 110) return;
				for (let i = 0; i < 6; i++) {
					if (x < 120 + i * 131 || x > 180 + i * 131) continue;
					clickPipe(i);
				}
			});
			function clickPipe(index) {
				if (player == game.me) game.playAudio("..", "extension", "无名美化", "audio", "qiaosi", "water");
				bxtInfo[index][3] = true;
				bxtInfo[index][2].speed = 1;
			}
			function rotateCanvas(x, y, angle, img, size) {
				event.ctx.save();
				event.ctx.translate(x, y);
				event.ctx.rotate(angle);
				event.ctx.drawImage(img, 0, 0, img.width, img.height, -size * 0.5, -size * 0.5, size * 3.1, size);
				event.ctx.restore();
			}
			function getRandom(min, max) {
				return Math.random() * (max - min);
			}
			function createBall(init_x, init_y, init_w, num) {
				for (var i = 0; i < num; i++) {
					const width = init_w * 0.45;
					let dx = -width * 0.2 + i * Math.random() * 4;
					let dy = 2 + Math.random() * 2;
					for (let j = 0; j < 3; j++) {
						balls.push(new ball(init_x + Math.sin(i), init_y + j * 5, dx, dy, width));
					}
				}
			}
			function ball(init_x, init_y, dx, dy, width) {
				this.x = init_x;
				this.y = init_y;
				this.color = "#497cab";
				this.dx = dx;
				this.dy = dy;
				this.draw = function () {
					event.ctx.save();
					event.ctx.beginPath();
					event.ctx.fillStyle = this.color;
					event.ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
					event.ctx.fill();
					event.ctx.closePath();
					event.ctx.restore();
				};
				this.update = function () {
					const xLeft = this.x + this.dx - 2.5;
					const xRight = this.x + this.dx + 2.5;
					//const yBottom = this.y + this.dy + this.radius + g;
					this.dy += getRandom(1, 3);
					if (xLeft < init_x - width || xRight > init_x + width) {
						this.dx = -this.dx;
					}
					this.y += this.dy;
					this.x += this.dx;
					if (this.y <= 360) this.draw();
					else balls.remove(this);
				};
			}
			var bxtInfo = [];
			const characterPercent = [22.1, 48.2, 100, 100, 41.3, 20.2];
			for (var i = 0; i < 6; i++) {
				bxtInfo[i] = [0, 0, null, false, characterPercent[i], false];
			}
			var pipe = new Image();
			pipe.src = lib.assetURL + "extension/无名美化/image/qiaosi/baixitu_water_pip.png";
			var pipebg = new Image();
			pipebg.src = lib.assetURL + "extension/无名美化/image/qiaosi/baixitu_water_bg.png";
			var disc = new Image();
			disc.src = lib.assetURL + "extension/无名美化/image/qiaosi/baixitu_onoff_bg.png";
			var handle = new Image();
			handle.src = lib.assetURL + "extension/无名美化/image/qiaosi/baixitu_onoff_handle.png";
			event.timer = new Image();
			event.timer.src = lib.assetURL + "extension/无名美化/image/effect/time.png";
			event.timecover = new Image();
			event.timecover.src = lib.assetURL + "extension/无名美化/image/effect/timeX.png";
			var timetotal = frame;
			var tipAnim = null;
			bxtbg.onload = function () {
				H = (bxtbg.height * event.canvas.width) / bxtbg.width;
				event.bgLoaded = true;
			};
			var bxtRender = new game.thunderRAF(function () {
				if (!event.bgLoaded) return;
				event.ctx.clearRect(0, 0, event.canvas.width, event.canvas.height);
				event.ctx.drawImage(bxtbg, 0, (event.canvas.height - H) * 0.5, event.canvas.width, H);
				for (let i = 0; i < 6; i++) {
					let index = i > 2 ? 6 - i : i + 1;
					let pipewidth = Math.max(12, index * 8);
					if (player == game.me) {
						event.ctx.drawImage(pipebg, 149 - pipewidth * 0.5 + i * 130, 140, pipewidth, 260);
						event.ctx.drawImage(pipe, 0, 0, 10, pipe.height, 146 - pipewidth * 0.5 + i * 130, 140, 10, 260);
						event.ctx.drawImage(pipe, 11, 0, 10, pipe.height, 142 + pipewidth * 0.5 + i * 130, 140, 10, 260);
						event.ctx.drawImage(disc, 118 + i * 130, 109, 62, 62);
						rotateCanvas(149 + i * 130, 140, bxtInfo[i][0], handle, 14);
						if (bxtInfo[i][0] >= Math.PI * 2) {
							bxtInfo[i][0] = 0;
							bxtInfo[i][3] = false;
						}

						let str = Math.round(bxtInfo[i][1]) + "%";
						event.ctx.strokeText(str, 136 + i * 130 - str.length * 0.5 * 8, 500);
						event.ctx.fillText(str, 136 + i * 130 - str.length * 0.5 * 8, 500);

						if (!_status.szbxtFirst) {
							_status.szbxtFirst = true;
							tipAnim = dcdAnim.loopSpine({ name: _ThunderMajun.qs_tishi.name, loopCount: 2 }, { x: 409, y: 402, scale: 0.6, parent: event.canvas });
						}
					}
					if (bxtInfo[i][3] == true) {
						bxtInfo[i][0] += Math.PI / (index * 15);
						bxtInfo[i][1] += bxtInfo[i][4] / (index * 30);
						if (player == game.me) {
							createBall(149 + i * 130, 160 + Math.random(), pipewidth, index);
						}
						if (bxtInfo[i][1] >= 100) {
							bxtInfo[i][1] = 100;
							if (!bxtInfo[i][5]) {
								bxtInfo[i][5] = true;
								num++;
								game.playAudio("..", "extension", "无名美化", "audio", "qiaosi", "qs_" + i);
								if (player == game.me)
									dcdAnim.playSpine(_ThunderMajun.qs_guang, {
										x: 149 + i * 130,
										y: 56,
										scale: 0.9,
										parent: event.canvas,
									});
								bxtInfo[i][2].setAction("TeShu");
							}
						}
					}
					if (!event.characterLoad) {
						let X = player == game.me ? 149 + i * 130 : 158 + i * 128;
						let Y = player == game.me ? 64 : 110;
						bxtInfo[i][2] = dcdAnim.loopSpine({ name: window._ThunderMajun["qs_" + i].name, speed: 0 }, { x: X, y: Y, scale: 0.75, parent: event.canvas });
					}
				}
				if (player == game.me)
					balls.forEach(e => {
						if (e.update) e.update();
					});
				event.ctx.drawImage(event.timer, 245, 514, 458, 22);
				event.ctx.drawImage(event.timecover, 0, 0, event.timecover.width * (frame / timetotal), event.timecover.height, 247, 516, 454 * (frame / timetotal), 18);
				event.characterLoad = true;
				frame--;
				if (frame == 0 || num == 3) {
					num = 100;
					bxtRender.stop = true;
					event.bxtFinished = true;
					var scuess = [];
					bxtInfo.forEach((item, index) => {
						if (item[5] == true) scuess.push(index);
					});
					event._result = {
						bool: scuess.length > 0,
						index: scuess,
					};
					if (!scuess.length) game.playAudio("..", "extension", "无名美化", "audio", "qiaosi", "fail");
					dcdAnim.stopSpineAll();
					game.resume();
				}
				if (!event.isMine() && !event.bxtFinished && event.characterLoad && frame % 20 == 0) {
					var randClick = get.rand(0, 5);
					clickPipe(randClick);
				}
			});
			("step 1");
			lib.config.repeat_audio = event.threpeatAudio;
			game.pause();
			if (player == game.me) {
				var frame = 100,
					timetotal = 100;
				var resultbg = new Image();
				resultbg.src = lib.assetURL + "extension/无名美化/image/qiaosi/baixitu_view_bg2.png";
				var character = [];
				var H = 0;
				resultbg.onload = function () {
					H = (resultbg.height * event.canvas.width) / resultbg.width;
				};
				var bxtRender = new game.thunderRAF(function () {
					event.ctx.clearRect(0, 0, event.canvas.width, event.canvas.height);
					event.ctx.drawImage(resultbg, 0, (event.canvas.height - H) * 0.5, event.canvas.width, H);
					event.ctx.drawImage(event.timer, 245, 514, 458, 22);
					event.ctx.drawImage(event.timecover, 0, 0, event.timecover.width * (frame / timetotal), event.timecover.height, 247, 516, 454 * (frame / timetotal), 18);
					frame--;
					if (frame == 0) {
						bxtRender.stop = true;
						dcdAnim.stopSpineAll();
						game.resume();
					}
				});
				for (var i = 0; i < 6; i++) {
					character[i] = dcdAnim.loopSpine({ name: window._ThunderMajun["qs_" + i].name, speed: 0 }, { x: 158 + i * 128, y: 110, scale: 0.75, parent: event.canvas });
					if (result.bool) {
						if (result.index.contains(i)) {
							game.playAudio("..", "extension", "无名美化", "audio", "qiaosi", "qs_" + i);
							character[i].speed = 1;
							character[i].setAction("TeShu");
						}
					}
				}
				if (!result.bool) {
					setTimeout(function () {
						game.playAudio("..", "extension", "无名美化", "audio", "qiaosi", "fail");
					}, 1000);
				}
			} else game.resume();
			("step 2");
			event.canvas.remove();
			event.blackbg.style.background = "rgba(0,0,0,0)";
			event.blackbg.remove();
			var list = result.index;
			var cards = [];
			var list2 = [];
			if (list.contains(0)) {
				list2.push("trick");
				list2.push("trick");
			}
			if (list.contains(1)) {
				if (list.contains(0)) list2.push(["sha", "jiu"]);
				else list2.push(Math.random() < 0.66 ? "equip" : ["sha", "jiu"]);
			}
			if (list.contains(2)) {
				list2.push([Math.random() < 0.66 ? "sha" : "jiu"]);
			}
			if (list.contains(3)) {
				list2.push([Math.random() < 0.66 ? "shan" : "tao"]);
			}
			if (list.contains(4)) {
				if (list.contains(5)) list2.push(["shan", "tao"]);
				else list2.push(Math.random() < 0.66 ? "trick" : ["shan", "tao"]);
			}
			if (list.contains(5)) {
				list2.push("equip");
				list2.push("equip");
			}
			while (list2.length) {
				var filter = list2.shift();
				var card = get.cardPile(function (x) {
					if (cards.contains(x)) return false;
					if (typeof filter == "string" && get.type(x, "trick") == filter) return true;
					if (typeof filter == "object" && filter.contains(x.name)) return true;
				});
				if (card) cards.push(card);
				else {
					var card = get.cardPile(function (x) {
						return !cards.contains(x);
					});
					if (card) cards.push(card);
				}
			}
			if (cards.length) {
				event.cards = cards;
				event.num = cards.length;
				player.showCards(cards);
			} else event.finish();
			("step 3");
			game.thunderAllowTouch();
			player.gain(event.cards, "gain2");
			player
				.chooseControl()
				.set("choiceList", ["将" + get.cnNumber(event.num) + "张牌交给一名其他角色", "弃置" + get.cnNumber(event.num) + "张牌"])
				.set("ai", function () {
					if (
						game.hasPlayer(function (current) {
							return current != player && get.attitude(player, current) > 2;
						})
					)
						return 0;
					return 1;
				});
			("step 4");
			if (result.index == 0) {
				player.chooseCardTarget({
					position: "he",
					filterCard: true,
					selectCard: event.num,
					filterTarget: function (card, player, target) {
						return player != target;
					},
					ai1: function (card) {
						return 1;
					},
					ai2: function (target) {
						var att = get.attitude(_status.event.player, target);
						if (target.hasSkillTag("nogain")) att /= 10;
						if (target.hasJudge("lebu")) att /= 5;
						return att;
					},
					prompt: "选择1名角色，并选择" + get.cnNumber(event.num) + "张牌交给他",
					forced: true,
				});
			} else {
				player.chooseToDiscard(event.num, true, "he");
				event.finish();
			}
			("step 5");
			if (result.bool) {
				var target = result.targets[0];
				player.give(result.cards, target);
			}
		},
	});
	Object.assign(lib.skill.xinfu_jingxie, {
		content() {
			"step 0";
			player.showCards(cards);
			("step 1");
			var card = cards[0];
			var bool = get.position(card) == "e";
			if (bool) {
				player.removeEquipTrigger(card.card || card);
			}
			let cardName = card.card ? card.card.name : card.name;
			dcdAnim.loadSpine(_ThunderMajun["jx_" + cardName].name, "skel", function () {
				dcdAnim.playSpine(_ThunderMajun["jx_" + cardName]);
			});
			game.addVideo("skill", player, ["xinfu_jingxie", [bool, get.cardInfo(card)]]);
			game.broadcastAll(
				function (card, bool) {
					card.init([card.suit, card.number, "rewrite_" + card.name]);
					if (bool && card.card && player.vcardsMap?.equips) {
						const cardx = game.createCard("rewrite_" + card.card.name, card.card.suit, card.card.number);
						player.vcardsMap.equips[player.vcardsMap.equips.indexOf(card.card)] = cardx;
						card.card = cardx;
					}
				},
				card.card || card,
				bool
			);
			if (bool) {
				player.addEquipTrigger(card.card || card);
			}
		},
	});
}

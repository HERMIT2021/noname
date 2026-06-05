import { lib, game, ui, get, ai, _status } from "../../../noname.js";

export function olspzhugeliang() {
	window.HuoGongKuang = {
		name: "无名美化",
		url: lib.assetURL + "extension/无名美化",
		huoqiu_zhanchangbeijing: {
			name: "../../../无名美化/animation/huogongkuang/huoqiu_zhanchangbeijing",
			loop: false,
		},
	};
	Object.assign(lib.card.huogong, {
		init() {
			dcdAnim.loadSpine(HuoGongKuang.huoqiu_zhanchangbeijing.name, "skel", function () {
				//火攻战场特效
				dcdAnim.prepSpine(HuoGongKuang.huoqiu_zhanchangbeijing.name);
			});
		},
		contentBefore() {
			//火攻战场特效
			window.HuoGongKuang.hgan = dcdAnim.loopSpine(HuoGongKuang.huoqiu_zhanchangbeijing, { speed: 1.2, scale: 1.0, x: [0, 0.5], y: [0, 0.5] });
			window.HuoGongKuang.hgan.oncomplete = () => {
				if (window.HuoGongKuang.hgan) {
					dcdAnim.stopSpine(window.HuoGongKuang.hgan);
					window.HuoGongKuang.hgan = undefined;
				}
			};
		},
		contentAfter() {
			if (window.HuoGongKuang.hgan) {
				try {
					dcdAnim.stopSpine(window.HuoGongKuang.hgan);
				} catch (error) {
					console.error("Error stopping spine animation:", error);
				}
			}
		},
	});
}

//未经允许擅自修改弹窗内容、改作者名的全价包庇
import { lib, game, ui, get, ai, _status } from "../../noname.js";
import { attack_zhishixian } from "./extension/zhishixian.js";
import { mosimayi } from "./extension/mosimayi.js";
import { mbsunhanhua, initCXCss } from "./extension/sunhanhua.js";
import { _ThunderFn, initThunder } from "./utils/Thunder.js";
import { wolongyance } from "./extension/wolongyance.js";
import { zhengxuan } from "./extension/zhengxuan.js";
import { nanhualaoxian, initNhlxCss } from "./extension/nanhualaoxian.js";
import { majun } from "./extension/majun.js";
import { weilvbu } from "./extension/weilvbu.js";
import { zhouqun } from "./extension/zhouqun.js";
import { puyuan } from "./extension/puyuan.js";
import { olspzhugeliang } from "./extension/olspzhugeliang.js";
import { pangdegong } from "./extension/pangdegong.js";
import { mbcaomao } from "./extension/mbcaomao.js";
import { jsrgsimazhao } from "./extension/jsrgsimazhao.js";
import { shitaishici } from "./extension/shitaishici.js";
import { weizhangliao } from "./extension/weizhangliao.js";
import { weidongzhuo } from "./extension/weidongzhuo.js";
import { mbshichangshi, initSCSCss } from "./extension/shichangshi.js";
import { caojinyu } from "./extension/caojinyu.js";
import { sbspzhugeliang } from "./extension/sbspzhugeliang.js";
import { mouguanyu } from "./extension/mouguanyu.js";
import { shenlusu } from "./extension/shenlusu.js";
import { shenhuatuo, initWuLingXiss } from "./extension/shenhuatuo.js";
import { sbmachao } from "./extension/sbmachao.js";
import { sbxuhuang } from "./extension/sbxuhuang.js";
import { shenpei } from "./extension/shenpei.js";
import { caoyi } from "./extension/caoyi.js";
import { sunlingluan } from "./extension/sunlingluan.js";
import { huanzhugeliang } from "./extension/huanzhugeliang.js";
import { huancaoang } from "./extension/huancaoang.js";
import { simashi } from "./extension/simashi.js";
import { xinzhangyi } from "./extension/xinzhangyi.js";
import { dcsbjiaxu } from "./extension/dcsbjiaxu.js";
import { pangfengyi } from "./extension/pangfengyi.js";
import { xiaoqiao } from "./extension/xiaoqiao.js";
import { zhangqiying } from "./extension/zhangqiying.js";
import { liuye } from "./extension/liuye.js";
import { ssyangfeng } from "./extension/ssyangfeng.js";
// import { yinni } from "./extension/yinni.js";
import { zhouchu } from "./extension/zhouchu.js";
import { shentaishici } from "./extension/shentaishici.js";
import { spmifuren } from "./extension/spmifuren.js";
import { wangling } from "./extension/wangling.js";
import { agreement } from "./utils/agreement.js";
import { sbsunshangxiang } from "./extension/sbsunshangxiang.js";
import { kanze } from "./extension/kanze.js";
import { zhuangbei } from "./extension/zhuangbei.js";
import { globaltexiao, globalTool } from "./extension/globaltexiao.js";
import { config } from "./config/index.js";
import { olmouzhangxiu } from "./extension/olmouzhangxiu.js";
import { spliubei } from "./extension/spliubei.js";
import { shenhuangzhong } from "./extension/shenhuangzhong.js";
import { shenzhonghui } from "./extension/shenzhonghui.js";
import { olcaochun } from "./extension/olcaochun.js";
import { dagongche } from "./extension/dagongche.js";
import { shiyuji } from "./extension/shiyuji.js";
import { shiweiyan } from "./extension/shiweiyan.js";
import { qiaogong } from "./extension/qiaogong.js";
import { olmiheng } from "./extension/olmiheng.js";
import { juexingji1, juexingji2, juexingji3 } from "./extension/juexingji.js";
import { skilltexiao } from "./extension/skilltexiao.js";
import { skilltexiaoPC } from "./extension/skilltexiaoPC.js";
import { modiaochan } from "./extension/modiaochan.js";
import { weimachao } from "./extension/weimachao.js";
import { mosunquan } from "./extension/mosunquan.js";
import { mocaocao } from "./extension/mocaocao.js";
import { shenjiangwei } from "./extension/shenjiangwei.js";
import { checkMode, installDcdAnimCompat } from "./utils/utils.js";
import { weigongsunzan } from "./extension/weigongsunzan.js";
import {shenmachao} from "./extension/shenmachao.js"
import {mozhangfei} from "./extension/mozhangfei.js"
//调试ctrl+j 或者控制台lib.node.debug()
game.import("extension", async function () {
	const baseUrl = `${lib.assetURL}extension/无名美化/`;
	const extensionInfo = await lib.init.promises.json(`${baseUrl}info.json`);
	const CONFIG = await config();
	return {
		name: "无名美化",
		precontent: function () {
			window._Thunder = _ThunderFn;
		},
		arenaReady() {
			if (!checkMode()) return;
			installDcdAnimCompat();
			console.log("arenaReady globaltexiao");
			globaltexiao();
			if (lib.device || get.mode() == "taixuhuanjing") {
				skilltexiao();
			} else {
				skilltexiaoPC();
			}
			if (lib.config.extension_无名美化_juexingji == "shousha45") {
				juexingji1();
			} else if (lib.config.extension_无名美化_juexingji == "shousha") {
				juexingji2();
			} else if (lib.config.extension_无名美化_juexingji == "ol") {
				juexingji3();
			}
		},
		content: function (config, pack) {
			if (!checkMode()) return;
			installDcdAnimCompat();
			const safeRun = function (name, fn) {
				try {
					fn();
				} catch (error) {
					console.warn("无名美化：加载" + name + "特效失败，已跳过：" + (error?.message || error));
				}
			};
			const runIf = function (condition, name, fn) {
				if (condition) safeRun(name, fn);
			};
			//4.0骨骼播放css
			lib.init.css(lib.assetURL + "extension/无名美化/css", "common");
			globalTool();
			agreement(extensionInfo);
			// jsArr.forEach(js => {
			// 	new js.default(lib, game, ui, get, ai, _status);
			// 	console.log("js--------------", js);
			// });
			//雷佬
			if (!game.hasExtension("Thunder")) {
				// 让步 Thunder
				safeRun("Thunder", initThunder);
			}
			safeRun("魔张飞", mozhangfei);
			safeRun("神马超", shenmachao);
			runIf(lib.config.extension_无名美化_modiaochan, "魔貂蝉", modiaochan);
			if (!game.hasExtension("皮肤切换")) {
				alert("无名美化需要搭配皮肤切换扩展使用，请先安装皮肤切换扩展！");
			}
			if (lib.config.extension_无名美化_wmmh_close_top && !["off", "othersOn"].includes(lib.config.extension_十周年UI_newDecadeStyle)) {
				lib.init.css(lib.assetURL + "extension/无名美化/css", "qianhuan");
			}
			runIf(lib.config.extension_无名美化_shenjiangwei, "神姜维", shenjiangwei);
			runIf(lib.config.extension_无名美化_mosimayi, "魔司马懿", mosimayi);
			runIf(lib.config.extension_无名美化_shiyuji, "势于吉", shiyuji);
			runIf(lib.config.extension_无名美化_shiweiyan, "势魏延", shiweiyan);
			runIf(lib.config.extension_无名美化_qiaogong, "桥公", qiaogong);
			runIf(lib.config.extension_无名美化_olmiheng, "OL祢衡", olmiheng);
			runIf(lib.config.extension_无名美化_mosunquan, "魔孙权", mosunquan);
			runIf(lib.config.extension_无名美化_mocaocao, "魔曹操", mocaocao);
			runIf(lib.config.extension_无名美化_dagongche, "大攻车", dagongche);
			runIf(lib.config.extension_无名美化_olcaochun, "OL曹纯", olcaochun);
			runIf(lib.config.extension_无名美化_shenhuangzhong, "神黄忠", shenhuangzhong);
			runIf(lib.config.extension_无名美化_shenzhonghui, "神钟会", shenzhonghui);
			runIf(lib.config.extension_无名美化_olmouzhangxiu, "OL谋张绣", olmouzhangxiu);
			runIf(lib.config.extension_无名美化_wolongyance, "友诸葛卧龙演策", wolongyance);
			runIf(lib.config.extension_无名美化_spliubei, "OL-SP刘备", spliubei);
			runIf(lib.config.extension_无名美化_ssyangfeng, "手杀杨奉", ssyangfeng);
			runIf(lib.config.extension_无名美化_olhuoji, "OL-SP诸葛亮", olspzhugeliang);
			runIf(lib.config.extension_无名美化_zhungbei, "装备", zhuangbei);
			runIf(lib.config.extension_无名美化_simazhao, "界司马昭", jsrgsimazhao);
			runIf(lib.config.extension_无名美化_mbcaomao != "off", "曹髦", mbcaomao);
			runIf(lib.config.extension_无名美化_newshitaishici != "off", "势太史慈", shitaishici);
			runIf(lib.config.extension_无名美化_weizhangliao, "威张辽", weizhangliao);
			runIf(lib.config.extension_无名美化_weilvbu, "威吕布", weilvbu);
			runIf(lib.config.extension_无名美化_weigongsunzan, "威公孙瓒", weigongsunzan);
			runIf(lib.config.extension_无名美化_weimachao, "威马超", weimachao);
			runIf(lib.config.extension_无名美化_weidongzhuo, "威董卓", weidongzhuo);
			runIf(lib.config.extension_无名美化_mbshichangshi, "十常侍", () => {
				initSCSCss();
				mbshichangshi();
			});

			runIf(lib.config.extension_无名美化_caojinyu, "曹金玉", caojinyu);
			//谋关羽
			runIf(lib.config.extension_无名美化_mouguanyu, "谋关羽", mouguanyu);
			//谋诸葛伙计失败
			runIf(lib.config.extension_无名美化_sbspzhugeliang, "手杀SP诸葛亮", sbspzhugeliang);
			//
			runIf(lib.config.extension_无名美化_shenlusu, "神鲁肃", shenlusu);
			runIf(lib.config.extension_无名美化_shenhuatuo, "神华佗", () => {
				initWuLingXiss();
				shenhuatuo();
			});

			runIf(lib.config.extension_无名美化_moumachao, "谋马超", sbmachao);
			runIf(lib.config.extension_无名美化_mouxuhuang, "谋徐晃", sbxuhuang);
			runIf(lib.config.extension_无名美化_shenpei, "审配", shenpei);
			runIf(lib.config.extension_无名美化_caoyi != "off", "曹轶", caoyi);
			runIf(lib.config.extension_无名美化_sunlingluan, "孙翎鸾", sunlingluan);
			runIf(lib.config.extension_无名美化_huanzhugeliang, "幻诸葛亮", huanzhugeliang);
			runIf(lib.config.extension_无名美化_huancaoang, "幻曹昂", huancaoang);
			// huancaoang
			runIf(lib.config.extension_无名美化_simashi, "司马师", simashi);
			runIf(lib.config.extension_无名美化_xinzhangyi, "张翼", xinzhangyi);
			runIf(lib.config.extension_无名美化_moujiaxu, "谋贾诩", dcsbjiaxu);
			runIf(lib.config.extension_无名美化_pangfengyi, "庞凤仪", pangfengyi);
			runIf(lib.config.extension_无名美化_xiaoqiao, "小乔", xiaoqiao);
			runIf(lib.config.extension_无名美化_zhangqiying, "张琪瑛", zhangqiying);
			runIf(lib.config.extension_无名美化_liuye, "刘晔", liuye);
			runIf(lib.config.extension_无名美化_zhouchu, "周处", zhouchu);
			runIf(lib.config.extension_无名美化_shentaishici, "神太史慈", shentaishici);
			runIf(lib.config.extension_无名美化_spmifuren, "SP糜夫人", spmifuren);
			runIf(lib.config.extension_无名美化_wangling, "王凌", wangling);
			runIf(lib.config.extension_无名美化_sbsunshangxiang, "手杀孙尚香", sbsunshangxiang);
			runIf(lib.config.extension_无名美化_kanze, "阚泽", kanze);

			runIf(lib.config.extension_无名美化_nanhualaoxian, "南华老仙", () => {
				initNhlxCss();
				nanhualaoxian();
			});
			runIf(lib.config.extension_无名美化_zhengxuan, "郑玄", zhengxuan);
			runIf(lib.config.extension_无名美化_majun, "马钧", majun);
			runIf(lib.config.extension_无名美化_zhouqun, "周群", zhouqun);
			runIf(lib.config.extension_无名美化_puyuan, "蒲元", puyuan);
			runIf(lib.config.extension_无名美化_pangdegong, "庞德公", pangdegong);

			//孙寒华冲虚
			runIf(lib.config.extension_无名美化_mbchongxu, "孙寒华冲虚", () => {
				initCXCss();
				mbsunhanhua();
			});
			// //攻击指示线
			runIf(lib.config.extension_无名美化_attack_zhishixian != "off", "攻击指示线", attack_zhishixian);
			// // 拖拽只指示线
			// if (lib.config.extension_无名美化_zhishixian) {
			// 	tuozhuaizhishixian();
			// }

			lib.init.css(lib.assetURL + "extension/无名美化/css", "uiPatch");
		},
		config: CONFIG,
		help: {},
		package: {
			character: {
				character: {},
				translate: {},
			},
			card: {
				card: {},
				translate: {},
				list: [],
			},
			skill: {
				skill: {},
				translate: {},
			},
			// <span style='color: pink; font-weight: bold;'>开启至臻动皮需要安装皮切。</span>
			intro: extensionInfo.intro,
			author: extensionInfo.author,
			diskURL: "",
			forumURL: "",
			version: extensionInfo.version,
		},
		files: { character: [], card: [], skill: [], audio: [] },
	};
});

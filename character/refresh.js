import { lib, get, _status, game, ui } from "noname";
const characters = {
  re_xushu: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["zhuhai", "qianxin"]
  },
  re_lidian: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["xunxun", "xinwangxi"],
    dieAudios: ["lidian"]
  },
  re_zhongyao: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["rehuomo", "zuoding"],
    clans: ["颍川钟氏"]
  },
  xin_zhangliang: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["rejijun", "refangtong"]
  },
  re_simalang: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["requji", "rejunbing"],
    names: "司马|朗"
  },
  re_zhugedan: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["regongao", "rejuyi"],
    names: "诸葛|诞"
  },
  re_caorui: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["huituo", "remingjian", "xingshuai"],
    isZhugong: true
  },
  re_caochong: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["rechengxiang", "renxin"]
  },
  ol_zhangzhang: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["olzhijian", "olguzheng"],
    names: "张|昭-张|纮"
  },
  re_jsp_huangyueying: {
    sex: "female",
    group: "qun",
    hp: 3,
    skills: ["rejiqiao", "relinglong"]
  },
  re_zhangsong: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["qiangzhi", "rexiantu"]
  },
  re_zhuzhi: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["reanguo"]
  },
  dc_caozhi: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["reluoying", "dcjiushi"]
  },
  ol_huangzhong: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["xinliegong", "remoshi"]
  },
  re_wenpin: {
    sex: "male",
    group: "wei",
    hp: 5,
    skills: ["rezhenwei"]
  },
  re_guanzhang: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["fuhun", "retongxin"],
    names: "关|兴-张|苞"
  },
  re_mazhong: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["refuman"]
  },
  dc_chenqun: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["repindi", "dcfaen"],
    clans: ["颍川陈氏"]
  },
  re_sundeng: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["rekuangbi"]
  },
  re_caiyong: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["rebizhuan", "retongbo"]
  },
  re_chengong: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["remingce", "zhichi"]
  },
  re_xunyou: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["reqice", "rezhiyu"],
    clans: ["颍川荀氏"]
  },
  dc_liru: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["xinjuece", "dcmieji", "dcfencheng"]
  },
  re_zhuhuan: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["refenli", "repingkou"]
  },
  ol_dianwei: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["olqiangxi", "olninge"]
  },
  re_sp_taishici: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["rejixu"],
    names: "太史|慈"
  },
  re_liufeng: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["rexiansi"]
  },
  ol_xunyu: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["quhu", "oljieming"],
    clans: ["颍川荀氏"]
  },
  re_liuchen: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["rezhanjue", "reqinwang"],
    isZhugong: true
  },
  dc_gongsunzan: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["dcyicong", "dcqiaomeng"],
    names: "公孙|瓒"
  },
  re_duji: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["reandong", "reyingshi"]
  },
  re_jushou: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["dcjianying", "dcshibei"]
  },
  re_zhanghe: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["reqiaobian"]
  },
  dc_xushu: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["rezhuhai", "xsqianxin"]
  },
  xin_gaoshun: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["decadexianzhen", "decadejinjiu"]
  },
  re_guohuanghou: {
    sex: "female",
    group: "wei",
    hp: 3,
    skills: ["rejiaozhao", "redanxin"],
    names: "郭|null"
  },
  re_xiahoushi: {
    sex: "female",
    group: "shu",
    hp: 3,
    skills: ["reqiaoshi", "reyanyu"],
    names: "夏侯|null"
  },
  ol_lusu: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["olhaoshi", "oldimeng"]
  },
  re_jiaxu: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["rewansha", "reluanwu", "reweimu"]
  },
  re_guyong: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["reshenxing", "rebingyi"]
  },
  xin_zhonghui: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["xinquanji", "xinzili"],
    clans: ["颍川钟氏"]
  },
  re_caifuren: {
    sex: "female",
    group: "qun",
    hp: 3,
    skills: ["reqieting", "rexianzhou"],
    names: "蔡|null"
  },
  re_guanping: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["relongyin", "jiezhong"]
  },
  re_guotufengji: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["rejigong", "shifei"],
    names: "郭|图-逢|记"
  },
  re_zhoucang: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["rezhongyong"]
  },
  ol_zhurong: {
    sex: "female",
    group: "shu",
    hp: 4,
    skills: ["juxiang", "lieren", "changbiao"],
    doubleGroup: ["shu", "qun"],
    names: "null|null"
  },
  re_zhangchunhua: {
    sex: "female",
    group: "wei",
    hp: 3,
    skills: ["rejueqing", "shangshi"]
  },
  re_gongsunyuan: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["rehuaiyi"],
    names: "公孙|渊"
  },
  re_caozhen: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["residi"]
  },
  re_fuhuanghou: {
    sex: "female",
    group: "qun",
    hp: 3,
    skills: ["rezhuikong", "reqiuyuan"]
  },
  re_fazheng: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["reenyuan", "rexuanhuo"]
  },
  xin_lingtong: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["decadexuanfeng", "yongjin"]
  },
  xin_liubiao: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["decadezishou", "decadezongshi"]
  },
  re_caoxiu: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["qianju", "reqingxi"]
  },
  re_sunxiu: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["reyanzhu", "rexingxue", "zhaofu"],
    isZhugong: true
  },
  ol_dengai: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["oltuntian", "olzaoxian"]
  },
  re_gongsunzan: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["reqiaomeng", "reyicong"],
    names: "公孙|瓒"
  },
  re_manchong: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["rejunxing", "yuce"]
  },
  xin_yufan: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["xinzhiyan", "xinzongxuan"]
  },
  dc_bulianshi: {
    sex: "female",
    group: "wu",
    hp: 3,
    skills: ["dcanxu", "dczhuiyi"]
  },
  re_hanhaoshihuan: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["reshenduan", "reyonglve"],
    names: "韩|浩-史|涣"
  },
  re_panzhangmazhong: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["reduodao", "reanjian"],
    names: "潘|璋-马|忠"
  },
  re_wangyi: {
    sex: "female",
    group: "wei",
    hp: 4,
    skills: ["zhenlie", "miji"]
  },
  re_madai: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["mashu", "reqianxi"]
  },
  xin_xusheng: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["decadepojun"]
  },
  re_taishici: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["tianyi", "hanzhan"],
    names: "太史|慈"
  },
  re_masu: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["resanyao", "rezhiman"]
  },
  re_sunluban: {
    sex: "female",
    group: "wu",
    hp: 3,
    skills: ["rechanhui", "rejiaojin"]
  },
  xin_handang: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["xingongji", "xinjiefan"]
  },
  yujin_yujin: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["decadezhenjun"],
    dieAudios: ["xin_yujin.mp3"]
  },
  re_caozhang: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["xinjiangchi"]
  },
  re_chengpu: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["ollihuo", "rechunlao"]
  },
  re_quancong: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["xinyaoming"]
  },
  re_liaohua: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["xindangxian", "xinfuli"]
  },
  re_guohuai: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["decadejingce"]
  },
  re_wuyi: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["xinbenxi"],
    clans: ["陈留吴氏"]
  },
  re_zhuran: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["xindanshou"]
  },
  ol_pangtong: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["ollianhuan", "olniepan"]
  },
  re_zhangyi: {
    sex: "male",
    group: "shu",
    hp: 5,
    skills: ["rewurong", "reshizhi"]
  },
  xin_wuguotai: {
    sex: "female",
    group: "wu",
    hp: 3,
    skills: ["xinganlu", "xinbuyi"],
    names: "丁|null"
  },
  re_caocao: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["new_rejianxiong", "rehujia"],
    isZhugong: true
  },
  re_simayi: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["refankui", "reguicai"],
    names: "司马|懿"
  },
  re_guojia: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["tiandu", "new_reyiji"]
  },
  re_zhangliao: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["new_retuxi"]
  },
  re_xuzhu: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["new_reluoyi"]
  },
  re_xiahoudun: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["reganglie", "new_qingjian"],
    names: "夏侯|惇"
  },
  re_zhangfei: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["olpaoxiao", "oltishen"]
  },
  re_zhaoyun: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["ollongdan", "olyajiao"]
  },
  re_guanyu: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["new_rewusheng", "new_yijue"]
  },
  re_machao: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["mashu", "retieji"]
  },
  re_zhouyu: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["reyingzi", "refanjian"]
  },
  re_lvmeng: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["keji", "qinxue", "rebotu"]
  },
  re_ganning: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["qixi", "fenwei"]
  },
  re_luxun: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["reqianxun", "relianying"],
    clans: ["吴郡陆氏"]
  },
  re_daqiao: {
    sex: "female",
    group: "wu",
    hp: 3,
    skills: ["reguose", "liuli"],
    names: "桥|null"
  },
  re_huanggai: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["rekurou", "zhaxiang"]
  },
  re_lvbu: {
    sex: "male",
    group: "qun",
    hp: 5,
    skills: ["wushuang", "new_liyu"]
  },
  re_huatuo: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["jijiu", "new_reqingnang"]
  },
  re_liubei: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["rerende", "rejijiang"],
    isZhugong: true
  },
  re_diaochan: {
    sex: "female",
    group: "qun",
    hp: 3,
    skills: ["lijian", "rebiyue"],
    names: "null|null"
  },
  re_huangyueying: {
    sex: "female",
    group: "shu",
    hp: 3,
    skills: ["rejizhi", "reqicai"]
  },
  re_sunquan: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["rezhiheng", "rejiuyuan"],
    isZhugong: true
  },
  re_sunshangxiang: {
    sex: "female",
    group: "wu",
    hp: 3,
    skills: ["xiaoji", "rejieyin"]
  },
  re_zhenji: {
    sex: "female",
    group: "wei",
    hp: 3,
    skills: ["reluoshen", "qingguo"]
  },
  re_zhugeliang: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["reguanxing", "kongcheng"],
    names: "诸葛|亮"
  },
  re_huaxiong: {
    sex: "male",
    group: "qun",
    hp: 6,
    skills: ["reyaowu", "shizhan"]
  },
  re_zhangjiao: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["xinleiji", "xinguidao", "xinhuangtian"],
    isZhugong: true
  },
  xin_yuji: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["reguhuo"]
  },
  re_zuoci: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["rehuashen", "rexinsheng"]
  },
  ol_xiahouyuan: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["xinshensu", "shebian"],
    names: "夏侯|渊"
  },
  caoren: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["xinjushou", "xinjiewei"]
  },
  ol_weiyan: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["xinkuanggu", "reqimou"]
  },
  ol_xiaoqiao: {
    sex: "female",
    group: "wu",
    hp: 3,
    skills: ["oltianxiang", "olhongyan", "piaoling"],
    names: "桥|null"
  },
  zhoutai: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["buqu", "fenji"]
  },
  ol_pangde: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["mashu", "rejianchu"]
  },
  ol_xuhuang: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["olduanliang", "oljiezi"]
  },
  ol_sp_zhugeliang: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["bazhen", "olhuoji", "olkanpo", "cangzhuo"],
    names: "诸葛|亮"
  },
  ol_yanwen: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["olshuangxiong"],
    names: "颜|良-文|丑"
  },
  ol_yuanshao: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["olluanji", "olxueyi"],
    isZhugong: true
  },
  re_menghuo: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["huoshou", "rezaiqi", "twqiushou"],
    isZhugong: true,
    doubleGroup: ["shu", "qun"]
  },
  ol_dongzhuo: {
    sex: "male",
    group: "qun",
    hp: 8,
    skills: ["oljiuchi", "roulin", "benghuai", "olbaonue"],
    isZhugong: true
  },
  ol_sunjian: {
    sex: "male",
    group: "wu",
    hp: 4,
    maxHp: 5,
    skills: ["gzyinghun", "wulie", "twpolu"],
    isZhugong: true
  },
  re_caopi: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["rexingshang", "refangzhu", "songwei"],
    isZhugong: true
  },
  ol_jiangwei: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["oltiaoxin", "olzhiji"]
  },
  ol_caiwenji: {
    sex: "female",
    group: "qun",
    hp: 3,
    skills: ["olbeige", "duanchang"]
  },
  ol_liushan: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["xiangle", "olfangquan", "olruoyu"],
    isZhugong: true
  },
  re_sunce: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["oljiang", "olhunzi", "olzhiba"],
    isZhugong: true
  },
  re_jianyong: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["reqiaoshui", "jyzongshi"]
  }
};
const cards$1 = {};
const pinyins = {};
const skills = {
  ollianhuan: {
    audio: "xinlianhuan",
    audioname: ["ol_pangtong"],
    hiddenCard: (player2, name2) => {
      return name2 == "tiesuo" && player2.hasCard((card2) => get.suit(card2) == "club", "she");
    },
    filter(event2, player2) {
      if (!player2.hasCard((card2) => get.suit(card2) == "club", "she")) {
        return false;
      }
      return event2.type == "phase" || event2.filterCard({ name: "tiesuo" }, player2, event2);
    },
    position: "hes",
    inherit: "lianhuan",
    group: "ollianhuan_add",
    subSkill: {
      add: {
        audio: "xinlianhuan",
        audioname: ["ol_pangtong"],
        trigger: { player: "useCard2" },
        filter(event2, player2) {
          if (event2.card.name != "tiesuo") {
            return false;
          }
          var info = get.info(event2.card);
          if (info.allowMultiple == false) {
            return false;
          }
          if (event2.targets && !info.multitarget) {
            if (game.hasPlayer((current) => {
              return !event2.targets.includes(current) && lib.filter.targetEnabled2(event2.card, player2, current);
            })) {
              return true;
            }
          }
          return false;
        },
        charlotte: true,
        forced: true,
        popup: false,
        async content(event2, trigger2, player2) {
          const result2 = await player2.chooseTarget(get.prompt("ollianhuan"), "为" + get.translation(trigger2.card) + "额外指定一个目标", (card2, player3, target2) => {
            return !_status.event.sourcex.includes(target2) && lib.filter.targetEnabled2(_status.event.card, player3, target2);
          }).set("sourcex", trigger2.targets).set("ai", function(target2) {
            var player3 = _status.event.player;
            return get.effect(target2, _status.event.card, player3, player3);
          }).set("card", trigger2.card).forResult();
          if (result2?.bool) {
            if (!event2.isMine() && !event2.isOnline()) {
              await game.delayex();
            }
            const targets2 = result2.targets;
            player2.logSkill("ollianhuan_add", targets2);
            trigger2.targets.addArray(targets2);
            game.log(targets2, "也成为了", trigger2.card, "的目标");
          }
        }
      }
    }
  },
  rehuomo: {
    audio: "huomo",
    audioname: ["huzhao", "re_zhongyao"],
    enable: "chooseToUse",
    hiddenCard(player2, name2) {
      if (get.type(name2) != "basic") {
        return false;
      }
      const list = player2.getStorage("rehuomo");
      if (list.includes(name2)) {
        return false;
      }
      return player2.hasCard(function(card2) {
        return get.color(card2) == "black" && get.type(card2) != "basic";
      }, "eh");
    },
    filter(event2, player2) {
      if (event2.type == "wuxie" || !player2.hasCard(function(card2) {
        return get.color(card2) == "black" && get.type(card2) != "basic";
      }, "eh")) {
        return false;
      }
      const list = player2.getStorage("rehuomo");
      for (let name2 of lib.inpile) {
        if (get.type(name2) != "basic" || list.includes(name2)) {
          continue;
        }
        let card2 = { name: name2, isCard: true };
        if (event2.filterCard(card2, player2, event2)) {
          return true;
        }
        if (name2 == "sha") {
          for (let nature of lib.inpile_nature) {
            card2.nature = nature;
            if (event2.filterCard(card2, player2, event2)) {
              return true;
            }
          }
        }
      }
      return false;
    },
    chooseButton: {
      dialog(event2, player2) {
        const vcards = [];
        const list = player2.getStorage("rehuomo");
        for (let name2 of lib.inpile) {
          if (get.type(name2) != "basic" || list.includes(name2)) {
            continue;
          }
          let card2 = { name: name2, isCard: true };
          if (event2.filterCard(card2, player2, event2)) {
            vcards.push(["基本", "", name2]);
          }
          if (name2 == "sha") {
            for (let nature of lib.inpile_nature) {
              card2.nature = nature;
              if (event2.filterCard(card2, player2, event2)) {
                vcards.push(["基本", "", name2, nature]);
              }
            }
          }
        }
        return ui.create.dialog("活墨", [vcards, "vcard"], "hidden");
      },
      check(button) {
        const player2 = _status.event.player;
        const card2 = { name: button.link[2], nature: button.link[3] };
        if (game.hasPlayer(function(current) {
          return player2.canUse(card2, current) && get.effect(current, card2, player2, player2) > 0;
        })) {
          switch (button.link[2]) {
            case "tao":
              return 5;
            case "jiu":
              return 3.01;
            case "sha":
              if (button.link[3] == "fire") {
                return 2.95;
              } else if (button.link[3] == "thunder") {
                return 2.92;
              } else {
                return 2.9;
              }
            case "shan":
              return 1;
          }
        }
        return 0;
      },
      backup(links, player2) {
        return {
          check(card2) {
            return 1 / Math.max(0.1, get.value(card2));
          },
          filterCard(card2) {
            return get.type(card2) != "basic" && get.color(card2) == "black";
          },
          viewAs: {
            name: links[0][2],
            nature: links[0][3],
            suit: "none",
            number: null,
            isCard: true
          },
          position: "he",
          popname: true,
          ignoreMod: true,
          async precontent(event2, trigger2, player3) {
            player3.logSkill("rehuomo");
            const card2 = event2.result.cards[0];
            game.log(player3, "将", card2, "置于牌堆顶");
            await player3.loseToDiscardpile(card2, ui.cardPile, "visible", "insert").set("log", false);
            const viewAs = {
              name: event2.result.card.name,
              nature: event2.result.card.nature,
              isCard: true
            };
            event2.result.card = viewAs;
            event2.result.cards = [];
            if (!player3.storage.rehuomo) {
              player3.when({ global: "phaseAfter" }).step(async (event3, trigger3, player4) => {
                player4.unmarkSkill("rehuomo");
              });
            }
            player3.markAuto("rehuomo", viewAs.name);
          }
        };
      },
      prompt(links, player2) {
        return "将一张黑色非基本牌置于牌堆顶并视为使用一张" + get.translation(links[0][3] || "") + get.translation(links[0][2]);
      }
    },
    marktext: "墨",
    intro: {
      content: "本回合已因〖活墨〗使用过$",
      onunmark: true
    },
    ai: {
      order() {
        var player2 = _status.event.player;
        var event2 = _status.event;
        var list = player2.getStorage("rehuomo");
        if (!list.includes("jiu") && event2.filterCard({ name: "jiu" }, player2, event2) && get.effect(player2, { name: "jiu" }) > 0) {
          return 3.1;
        }
        return 2.9;
      },
      respondSha: true,
      fireAttack: true,
      respondShan: true,
      skillTagFilter(player2, tag, arg) {
        if (tag == "fireAttack") {
          return true;
        }
        if (player2.hasCard(function(card2) {
          return get.color(card2) == "black" && get.type(card2) != "basic";
        }, "he")) {
          if (arg === "respond") {
            return false;
          }
          var list = player2.getStorage("rehuomo");
          if (tag == "respondSha") {
            if (list.includes("sha")) {
              return false;
            }
          } else if (tag == "respondShan") {
            if (list.includes("shan")) {
              return false;
            }
          }
        } else {
          return false;
        }
      },
      result: {
        player: 1
      }
    }
  },
  //界张梁
  rejijun: {
    audio: 2,
    trigger: { player: "useCardAfter" },
    filter(event2, player2) {
      return event2.targets && event2.targets.includes(player2);
    },
    frequent: true,
    content() {
      player.judge((card2) => 1).callback = lib.skill.rejijun.callback;
    },
    callback() {
      if (typeof card.number == "number") {
        player.addToExpansion(card, "gain2").gaintag.add("rejijun");
      }
    },
    onremove(player2, skill) {
      var cards2 = player2.getExpansions(skill);
      if (cards2.length) {
        player2.loseToDiscardpile(cards2);
      }
    },
    intro: {
      content: "expansion",
      markcount: "expansion"
    },
    marktext: "方",
    ai: { combo: "refangtong" }
  },
  refangtong: {
    audio: 2,
    trigger: { player: "phaseJieshuBegin" },
    filter(event2, player2) {
      return player2.countCards("h");
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseCard(get.prompt2("refangtong"), (card2, player3) => typeof card2.number == "number").set("ai", (card2) => {
        var player3 = _status.event.player;
        if (!game.hasPlayer((target2) => target2 != player3 && get.damageEffect(target2, player3, player3, "thunder") > 0)) {
          return 0;
        }
        if (player3.getExpansions("rejijun").reduce(function(num2, card3) {
          return num2 + get.number(card3, false);
        }, 0) > 36) {
          return 1 / (get.value(card2) || 0.5);
        } else {
          if (lib.skill.refangtong.thunderEffect(card2, player3)) {
            return 10 - get.value(card2);
          }
          return 5 - get.value(card2);
        }
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const cards2 = event2.cards;
      await player2.addToExpansion(cards2, player2, "give").set("gaintag", ["rejijun"]);
      const result2 = await player2.chooseButton(["###是否移去任意张“方”，对一名其他角色造成1点雷属性伤害？###若你移去的“方”的点数和大于36，则改为造成3点雷属性伤害", player2.getExpansions("rejijun")], [1, player2.getExpansions("rejijun").length], "allowChooseAll").set("ai", (button) => {
        var player3 = _status.event.player;
        var cards3 = player3.getExpansions("rejijun");
        if (cards3.reduce(function(num3, card2) {
          return num3 + get.number(card2, false);
        }, 0) <= 36) {
          if (!ui.selected.buttons.length) {
            return 1 / get.number(button.link, false);
          }
          return 0;
        } else {
          var num2 = 0, list = [];
          cards3.sort((a, b) => get.number(b, false) - get.number(a, false));
          for (var i = 0; i < cards3.length; i++) {
            list.push(cards3[i]);
            num2 += get.number(cards3[i], false);
            if (num2 > 36) {
              break;
            }
          }
          return list.includes(button.link) ? 1 : 0;
        }
      }).forResult();
      if (result2?.bool) {
        const bool = result2.links.reduce(function(num2, card2) {
          return num2 + get.number(card2, false);
        }, 0) > 36;
        await player2.loseToDiscardpile(result2.links);
        const result22 = await player2.chooseTarget("请选择一名其他角色", "对其造成" + (bool ? 3 : 1) + "点雷属性伤害", lib.filter.notMe).set("ai", (target2) => get.damageEffect(target2, _status.event.player, _status.event.player, "thunder")).forResult();
        if (result22?.bool) {
          const target2 = result22.targets[0];
          player2.line(target2, "thunder");
          target2.damage(bool ? 3 : 1, "thunder");
        }
      }
    },
    thunderEffect(card2, player2) {
      let cards2 = player2.getExpansions("rejijun"), num2 = 0;
      cards2.push(card2);
      if (cards2.reduce(function(num3, card3) {
        return num3 + get.number(card3, false);
      }, 0) <= 36) {
        return false;
      }
      cards2.sort((a, b) => get.number(b, false) - get.number(a, false));
      let bool = false;
      for (let i = 0; i < cards2.length; i++) {
        if (cards2[i] == card2) {
          bool = true;
        }
        num2 += get.number(cards2[i], false);
        if (num2 > 36) {
          break;
        }
      }
      return bool;
    }
  },
  //界司马朗
  requji: {
    inherit: "quji",
    async content(event2, trigger2, player2) {
      const { target: target2, targets: targets2, cards: cards2 } = event2;
      await target2.recover();
      if (target2.isDamaged()) {
        await target2.draw();
      }
      if (target2 == targets2[targets2.length - 1] && cards2.some((card2) => get.color(card2, player2) == "black")) {
        await player2.loseHp();
      }
    }
  },
  rejunbing: {
    audio: 2,
    trigger: { global: "phaseJieshuBegin" },
    filter(event2, player2) {
      return event2.player.countCards("h") < event2.player.getHp();
    },
    async cost(event2, trigger2, player2) {
      event2.result = await trigger2.player.chooseBool(player2 == trigger2.player ? get.prompt(event2.skill) : "是否响应" + get.translation(player2) + "的【郡兵】？", "摸一张牌" + (player2 == trigger2.player ? "" : "，将所有手牌交给" + get.translation(player2) + "，然后其可以交给你等量张牌")).set("ai", () => get.event().choice).set("choice", get.attitude(trigger2.player, player2) > 0).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = trigger2.player;
      if (target2 != player2) {
        game.log(target2, "响应了", player2, "的", "#g【郡兵】");
      }
      await target2.draw();
      let cards2 = target2.getCards("h");
      if (target2 == player2 || !cards2.length) {
        return;
      }
      await target2.give(cards2, player2);
      const num2 = cards2.length;
      if (player2.countCards("he") >= num2) {
        const result2 = await player2.chooseCard("郡兵：是否还给" + get.translation(target2) + get.translation(num2) + "张牌？", "he", num2).set("ai", (card2) => {
          let player3 = _status.event.player, target3 = get.event().target;
          if (get.attitude(player3, target3) <= 0) {
            if (card2.name == "du") {
              return 1145141919810;
            }
            return -get.value(card2);
          }
          return 8 - Math.sqrt(target3.hp) - get.value(card2);
        }).set("target", target2).forResult();
        if (result2.bool) {
          await player2.give(result2.cards, target2);
        }
      }
    }
  },
  //界诸葛诞
  regongao: {
    audio: 2,
    trigger: { global: "dying" },
    filter(event2, player2) {
      if (player2 == event2.player) {
        return false;
      }
      return !player2.getAllHistory("useSkill", (evt) => evt.skill == "regongao" && evt.targets[0] == event2.player).length;
    },
    forced: true,
    logTarget: "player",
    async content(event2, trigger2, player2) {
      await player2.gainMaxHp();
      await player2.recover();
    }
  },
  rejuyi: {
    audio: 2,
    derivation: ["benghuai", "reweizhong"],
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return player2.maxHp > game.countPlayer() && player2.isDamaged();
    },
    forced: true,
    juexingji: true,
    skillAnimation: true,
    animationColor: "thunder",
    async content(event2, trigger2, player2) {
      player2.awakenSkill(event2.name);
      await player2.drawTo(player2.maxHp);
      await player2.addSkills(["benghuai", "reweizhong"]);
    }
  },
  reweizhong: {
    audio: 1,
    inherit: "weizhong",
    content() {
      player.draw(2);
    }
  },
  benghuai_re_zhugedan: { audio: 1 },
  //堪比界曹冲的界曹叡
  remingjian: {
    inherit: "mingjian",
    content() {
      player.give(cards, target);
      target.addTempSkill("remingjian_buff", { player: "phaseAfter" });
      if (!target.storage.remingjian_buff) {
        target.storage.remingjian_buff = [];
      }
      target.storage.remingjian_buff.push(player);
      target.markSkill("remingjian_buff");
    },
    derivation: "huituo",
    subSkill: {
      buff: {
        charlotte: true,
        mark: true,
        marktext: "鉴",
        intro: {
          content: (storage, player2) => {
            const num2 = storage.length;
            return `<li>被${get.translation(storage.toUniqued())}鉴识<li>手牌上限+${num2}，出杀次数+${num2}`;
          }
        },
        onremove: true,
        trigger: {
          source: "damageSource"
        },
        filter(event2, player2) {
          if (_status.currentPhase != player2) {
            return false;
          }
          return player2.getHistory("sourceDamage").indexOf(event2) == 0 && player2.getStorage("remingjian_buff").some((i) => i.isIn());
        },
        direct: true,
        async content(event2, trigger2, player2) {
          const masters = player2.getStorage("remingjian_buff").filter((i) => i.isIn()).toUniqued().sortBySeat(_status.currentPhase);
          while (masters.length) {
            const master = masters.shift();
            if (!master.isIn()) {
              continue;
            }
            const next = game.createEvent("huituo");
            next.setContent(lib.skill.huituo.content);
            next.player = master;
            next.forced = true;
            next._trigger = trigger2;
            await next;
          }
        },
        mod: {
          maxHandcard(player2, num2) {
            return num2 + player2.getStorage("remingjian_buff").length;
          },
          cardUsable(card2, player2, num2) {
            if (card2.name == "sha") {
              return num2 + player2.getStorage("remingjian_buff").length;
            }
          }
        }
      }
    }
  },
  rexingshuai: {
    audio: 2,
    skillAnimation: true,
    animationColor: "thunder",
    trigger: { player: "dying" },
    zhuSkill: true,
    filter(event2, player2) {
      if (player2.hp > 0) {
        return false;
      }
      if (!player2.hasZhuSkill("rexingshuai")) {
        return false;
      }
      return game.hasPlayer(function(current) {
        return current != player2 && current.group == "wei";
      });
    },
    limited: true,
    async content(event2, trigger2, player2) {
      player2.awakenSkill(event2.name);
      const targets2 = game.filterPlayer();
      targets2.sortBySeat(_status.currentPhase);
      targets2.remove(player2);
      const damages = [];
      player2.addSkill("rexingshuai_restore");
      while (targets2.length) {
        const current = targets2.shift();
        if (current.group == "wei") {
          const result2 = await current.chooseBool("是否令" + get.translation(player2) + "回复1点体力？").set("ai", function() {
            return get.attitude(_status.event.player, _status.event.target) > 2;
          }).set("target", player2).forResult();
          if (result2?.bool) {
            damages.push(event2.current);
            current.line(player2, "green");
            game.log(current, "令", player2, "回复1点体力");
            await player2.recover(current);
          }
        }
      }
      if (damages.length) {
        const next = game.createEvent("rexingshuai_next");
        event2.next.remove(next);
        trigger2.after.push(next);
        next.targets = damages;
        next.setContent(function() {
          targets2.shift().damage();
          if (targets2.length) {
            event2.redo();
          }
        });
      }
    },
    subSkill: {
      restore: {
        audio: "rexingshuai",
        trigger: {
          global: "dieAfter"
        },
        charlotte: true,
        forced: true,
        filter(event2, player2) {
          return event2.source && event2.source.isIn() && event2.source.hasSkill("remingjian_buff");
        },
        content() {
          player.restoreSkill("rexingshuai");
          game.log(player, "重置了", "#g【兴衰】");
        }
      }
    }
  },
  //不想突破可以不突破的界曹冲
  rechengxiang: {
    audio: 2,
    inherit: "chengxiang",
    async callback(event2, trigger2, player2) {
      if (event2.cards2?.length && event2.cards2.map((card2) => {
        return get.number(card2);
      }).reduce((sum, num2) => {
        return sum += num2;
      }, 0) == 13) {
        await player2.link(false);
        await player2.turnOver(false);
      }
    }
  },
  //OL界二张
  olzhijian: {
    audio: 2,
    enable: "phaseUse",
    filter(event2, player2) {
      return player2.countCards("he", { type: "equip" }) > 0;
    },
    filterCard(card2) {
      return get.type(card2) == "equip";
    },
    position: "he",
    check(card2) {
      var player2 = _status.currentPhase;
      if (player2.countCards("he", { subtype: get.subtype(card2) }) > 1) {
        return 11 - get.equipValue(card2);
      }
      return 6 - get.value(card2);
    },
    filterTarget(card2, player2, target2) {
      if (target2.isMin()) {
        return false;
      }
      return player2 != target2 && target2.canEquip(card2, true);
    },
    async content(event2, trigger2, player2) {
      await event2.target.equip(event2.cards[0]);
      await player2.draw();
    },
    discard: false,
    lose: false,
    prepare(cards2, player2, targets2) {
      player2.$give(cards2, targets2[0], false);
    },
    ai: {
      basic: {
        order: 10
      },
      result: {
        target(player2, target2) {
          var card2 = ui.selected.cards[0];
          if (card2) {
            return get.effect(target2, card2, target2, target2);
          }
          return 0;
        }
      },
      threaten: 1.35
    }
  },
  olguzheng: {
    audio: 2,
    trigger: {
      global: ["loseAfter", "loseAsyncAfter"]
    },
    filter(event2, player2) {
      if (event2.type != "discard") {
        return false;
      }
      if (player2.hasSkill("olguzheng_used")) {
        return false;
      }
      var phaseName;
      for (var name2 of lib.phaseName) {
        var evt = event2.getParent(name2);
        if (!evt || evt.name != name2) {
          continue;
        }
        phaseName = name2;
        break;
      }
      if (!phaseName) {
        return false;
      }
      return game.hasPlayer((current) => {
        if (current == player2) {
          return false;
        }
        var evt2 = event2.getl(current);
        if (!evt2 || !evt2.cards2 || evt2.cards2.filterInD("d").length < 2) {
          return false;
        }
        return true;
      });
    },
    checkx(event2, player2, cards2) {
      if (cards2.length > 2 || get.attitude(player2, event2.player) > 0) {
        return true;
      }
      for (var i = 0; i < cards2.length; i++) {
        if (get.value(cards2[i], event2.player, "raw") < 0) {
          return true;
        }
      }
      return false;
    },
    direct: true,
    preHidden: true,
    async content(event2, trigger2, player2) {
      const targets2 = [], cardsList = [], players = game.filterPlayer().sortBySeat(_status.currentPhase);
      for (const current of players) {
        if (current == player2) {
          continue;
        }
        const cards2 = [];
        const evt = trigger2.getl(current);
        if (!evt || !evt.cards2) {
          continue;
        }
        const cardsx = evt.cards2.filterInD("d");
        cards2.addArray(cardsx);
        if (cards2.length) {
          targets2.push(current);
          cardsList.push(cards2);
        }
      }
      while (targets2.length) {
        const target2 = targets2.shift();
        let cards2 = cardsList.shift();
        const result2 = await player2.chooseButton(2, [get.prompt("olguzheng", target2), '<span class="text center">被选择的牌将成为对方收回的牌</span>', cards2, [["获得剩余的牌", "放弃剩余的牌"], "tdnodes"]]).set("filterButton", function(button) {
          const type = typeof button.link;
          if (ui.selected.buttons.length && type == typeof ui.selected.buttons[0].link) {
            return false;
          }
          return true;
        }).set("check", lib.skill.olguzheng.checkx(trigger2, player2, cards2)).set("ai", function(button) {
          if (typeof button.link == "string") {
            return button.link == "获得剩余的牌" ? 1 : 0;
          }
          if (_status.event.check) {
            return 20 - get.value(button.link, _status.event.getTrigger().player);
          }
          return 0;
        }).setHiddenSkill("olguzheng").forResult();
        if (result2?.links) {
          player2.logSkill("olguzheng", target2);
          const links = result2.links;
          player2.addTempSkill("olguzheng_used", ["phaseZhunbeiAfter", "phaseDrawAfter", "phaseJudgeAfter", "phaseUseAfter", "phaseDiscardAfter", "phaseJieshuAfter"]);
          if (typeof links[0] != "string") {
            links.reverse();
          }
          const card2 = links[1];
          await target2.gain(card2, "gain2");
          cards2.remove(card2);
          cards2 = cards2.filterInD("d");
          if (cards2.length > 0 && links[0] == "获得剩余的牌") {
            await player2.gain(cards2, "gain2");
          }
          break;
        }
      }
    },
    ai: {
      threaten: 1.3,
      expose: 0.2
    },
    subSkill: {
      used: {
        charlotte: true
      }
    }
  },
  //SP黄月英
  rejiqiao: {
    audio: 2,
    trigger: { player: "phaseUseBegin" },
    filter(event2, player2) {
      return player2.countCards("he") > 0;
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseToDiscard(get.prompt2("rejiqiao"), [1, player2.countCards("he")], "he", "chooseonly", "allowChooseAll").set("ai", function(card2) {
        if (card2.name == "bagua") {
          return 10;
        }
        return 7 - get.value(card2);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const { cards: cards2 } = event2;
      await player2.modedDiscard(cards2);
      const num2 = cards2.length + cards2.filter((card2) => get.type(card2) == "equip").length;
      const showCards = get.cards(num2);
      await game.cardsGotoOrdering(showCards);
      await player2.showCards(showCards);
      await player2.gain(
        showCards.filter((card2) => get.type(card2) != "equip"),
        "gain2"
      );
    },
    ai: {
      threaten: 1.6
    }
  },
  relinglong: {
    audio: 2,
    trigger: {
      player: ["loseAfter", "disableEquipAfter", "enableEquipAfter"],
      global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter", "phaseBefore"]
    },
    init(player2, skill) {
      player2.addExtraEquip(skill, "bagua", true, (player3) => player3.hasEmptySlot(2) && lib.card.bagua);
    },
    onremove(player2, skill) {
      delete player2.storage[skill];
      player2.removeExtraEquip(skill);
    },
    forced: true,
    derivation: "reqicai",
    filter(event2, player2) {
      if (event2.name == "disableEquip" || event2.name == "enableEquip") {
        if (!event2.slots.includes("equip5")) {
          return false;
        }
      } else if (event2.name != "phase" && (event2.name != "equip" || event2.player != player2)) {
        var evt = event2.getl(player2);
        if (!evt || !evt.es || !evt.es.some((i) => get.subtypes(i).includes("equip5"))) {
          return false;
        }
      }
      var skills2 = player2.additionalSkills["relinglong"];
      return (skills2 && skills2.length > 0) != player2.hasEmptySlot(5);
    },
    direct: true,
    content() {
      player.removeAdditionalSkill("relinglong");
      if (player.hasEmptySlot(5)) {
        player.addAdditionalSkill("relinglong", ["reqicai"]);
      }
    },
    group: ["linglong_bagua", "relinglong_directhit"],
    mod: {
      maxHandcard(player2, num2) {
        if (!player2.hasEmptySlot(3) || !player2.hasEmptySlot(4)) {
          return;
        }
        return num2 + 2;
      }
    },
    subSkill: {
      directhit: {
        audio: "relinglong",
        trigger: { player: "useCard" },
        forced: true,
        filter(event2, player2) {
          if (event2.card.name != "sha" && get.type(event2.card, null, false) != "trick") {
            return false;
          }
          for (var i = 2; i < 6; i++) {
            if (!player2.hasEmptySlot(i)) {
              return false;
            }
          }
          return true;
        },
        content() {
          trigger.directHit.addArray(game.players);
          game.log(trigger.card, "不可被响应");
        },
        ai: {
          directHit_ai: true,
          skillTagFilter(player2, tag, arg) {
            if (!arg || !arg.card || !arg.target || arg.card.name != "sha" && get.type(arg.card, null, false) != "trick") {
              return false;
            }
            for (var i = 2; i < 6; i++) {
              if (!player2.hasEmptySlot(i)) {
                return false;
              }
            }
            return true;
          }
        }
      }
    }
  },
  //张松
  rexiantu: {
    audio: 2,
    trigger: { global: "phaseUseBegin" },
    filter(event2, player2) {
      return event2.player != player2;
    },
    logTarget: "player",
    check(event2, player2) {
      if (get.attitude(_status.event.player, event2.player) < 1) {
        return false;
      }
      return player2.hp > 1 || player2.hasCard((card2) => (get.name(card2) === "tao" || get.name(card2) === "jiu") && lib.filter.cardEnabled(card2, player2), "hs");
    },
    async content(event2, trigger2, player2) {
      if (get.mode() !== "identity" || player2.identity !== "nei") {
        player2.addExpose(0.2);
      }
      await player2.draw(2);
      if (!player2.countCards("he")) {
        return;
      }
      const result2 = await player2.chooseCard(2, "he", true, "交给" + get.translation(trigger2.player) + "两张牌").set("ai", function(card2) {
        if (ui.selected.cards.length && card2.name == ui.selected.cards[0].name) {
          return -1;
        }
        if (get.tag(card2, "damage")) {
          return 1;
        }
        if (get.type(card2) == "equip") {
          return 1;
        }
        return 0;
      }).forResult();
      if (result2?.cards?.length) {
        const target2 = trigger2.player;
        await player2.give(result2.cards, target2);
        target2.addTempSkill("rexiantu_check", "phaseUseAfter");
        target2.markAuto("rexiantu_check", [player2]);
      }
    },
    ai: {
      threaten(player2, target2) {
        return 1 + game.countPlayer((current) => {
          if (current != target2 && get.attitude(target2, current) > 0) {
            return 0.5;
          }
          return 0;
        });
      },
      expose: 0.3
    },
    subSkill: {
      check: {
        charlotte: true,
        trigger: { player: "phaseUseEnd" },
        forced: true,
        popup: false,
        onremove: true,
        filter(event2, player2) {
          return !player2.getHistory("sourceDamage", (evt) => {
            return evt.getParent("phaseUse") == event2;
          }).length;
        },
        content() {
          var targets2 = player.getStorage("rexiantu_check");
          targets2.sortBySeat();
          for (var i of targets2) {
            if (i.isIn()) {
              i.loseHp();
            }
          }
          player.removeSkill("rexiantu_check");
        }
      }
    }
  },
  //新服公孙瓒
  dcyicong: {
    trigger: {
      player: ["changeHp"]
    },
    audio: 2,
    forced: true,
    filter(event2, player2) {
      return get.sgn(player2.getDamagedHp() - 1.5) != get.sgn(player2.getDamagedHp() - 1.5 + event2.num);
    },
    content() {
    },
    mod: {
      globalFrom(from, to, current) {
        return current - 1;
      },
      globalTo(from, to, current) {
        if (to.getDamagedHp() >= 2) {
          return current + 1;
        }
      }
    },
    ai: {
      threaten: 0.8
    }
  },
  //朱治
  reanguo: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filterTarget: lib.filter.notMe,
    async content(event2, trigger2, player2) {
      const { target: target2 } = event2;
      let draw, recover, equip;
      if (target2.isMinHandcard()) {
        await target2.draw();
        draw = true;
      }
      if (target2.isMinHp() && target2.isDamaged()) {
        await target2.recover();
        recover = true;
      }
      if (target2.isMinEquip()) {
        const cardx = get.cardPile(
          function(card2) {
            return get.type(card2) == "equip" && target2.hasUseTarget(card2);
          },
          false,
          "random"
        );
        if (cardx) {
          await target2.chooseUseTarget(cardx, "nothrow", "nopopup", true);
          equip = true;
        }
      }
      game.updateRoundNumber();
      if (!draw && player2.isMinHandcard()) {
        await player2.draw();
        draw = true;
      }
      if (!recover && player2.isMinHp() && player2.isDamaged()) {
        await player2.recover();
        recover = true;
      }
      if (!equip && player2.isMinEquip()) {
        const cardx = get.cardPile(function(card2) {
          return get.type(card2) == "equip" && player2.hasUseTarget(card2);
        });
        if (cardx) {
          await player2.chooseUseTarget(cardx, "nothrow", "nopopup", true);
          equip = true;
        }
      }
      if (draw && recover && equip) {
        const result2 = await player2.chooseCard("安国：是否重铸任意张牌？", [1, Infinity], lib.filter.cardRecastable, "he", "allowChooseAll").set("ai", (card2) => {
          return 6 - get.value(card2);
        }).forResult();
        if (result2?.bool) {
          await player2.recast(result2.cards);
        }
      }
    },
    ai: {
      threaten: 1.65,
      order: 9,
      result: {
        player(player2, target2) {
          if (get.attitude(player2, target2) <= 0) {
            if (target2.isMinHandcard() || target2.isMinEquip() || target2.isMinHp()) {
              return -1;
            }
          }
          let num2 = 0;
          if (player2.isMinHandcard() || target2.isMinHandcard()) {
            num2++;
          }
          if (player2.isMinEquip() || target2.isMinEquip()) {
            num2++;
          }
          if (player2.isMinHp() && player2.isDamaged() || target2.isMinHp() && target2.isDamaged()) {
            num2 += 2.1;
          }
          return num2;
        }
      }
    }
  },
  //颜良文丑
  olshuangxiong: {
    audio: 2,
    trigger: { player: "phaseDrawEnd" },
    filter: (event2, player2) => player2.countCards("he") > 0,
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseToDiscard("he", get.prompt("olshuangxiong"), "弃置一张牌，然后你本回合内可以将一张与此牌颜色不同的牌当做【决斗】使用", "chooseonly").set("ai", function(card2) {
        let player3 = _status.event.player;
        if (!_status.event.goon || player3.skipList.includes("phaseUse")) {
          return -get.value(card2);
        }
        let color = get.color(card2), effect = 0, cards2 = player3.getCards("hes"), sha = false;
        for (const cardx of cards2) {
          if (cardx == card2 || get.color(cardx) == color) {
            continue;
          }
          const cardy = get.autoViewAs({ name: "juedou" }, [cardx]), eff1 = player3.getUseValue(cardy);
          if (get.position(cardx) == "e") {
            let eff22 = get.value(cardx);
            if (eff1 > eff22) {
              effect += eff1 - eff22;
            }
            continue;
          } else if (get.name(cardx) == "sha") {
            if (sha) {
              effect += eff1;
              continue;
            } else {
              sha = true;
            }
          }
          let eff2 = player3.getUseValue(cardx, null, true);
          if (eff1 > eff2) {
            effect += eff1 - eff2;
          }
        }
        return effect - get.value(card2);
      }).set("goon", player2.hasValueTarget({ name: "juedou" }) && !player2.hasSkill("olshuangxiong_effect")).forResult();
    },
    async content(event2, trigger2, player2) {
      const { cards: cards2 } = event2, color = get.color(cards2[0], player2);
      await player2.modedDiscard(cards2);
      player2.markAuto("olshuangxiong_effect", [color]);
      player2.addTempSkill("olshuangxiong_effect");
    },
    group: "olshuangxiong_jianxiong",
    subSkill: {
      effect: {
        audio: "olshuangxiong",
        enable: "chooseToUse",
        viewAs: { name: "juedou" },
        position: "hes",
        viewAsFilter(player2) {
          return player2.hasCard((card2) => lib.skill.olshuangxiong_effect.filterCard(card2, player2), "hes");
        },
        filterCard(card2, player2) {
          const color = get.color(card2), colors = player2.getStorage("olshuangxiong_effect");
          for (const i of colors) {
            if (color != i) {
              return true;
            }
          }
          return false;
        },
        prompt() {
          const colors = _status.event.player.getStorage("olshuangxiong_effect");
          let str = "将一张颜色";
          for (let i = 0; i < colors.length; i++) {
            if (i > 0) {
              str += "或";
            }
            str += "不为";
            str += get.translation(colors[i]);
          }
          str += "的牌当做【决斗】使用";
          return str;
        },
        check(card2) {
          const player2 = _status.event.player;
          if (get.position(card2) == "e") {
            const raw2 = get.value(card2);
            const eff2 = player2.getUseValue(get.autoViewAs({ name: "juedou" }, [card2]));
            return eff2 - raw2;
          }
          const raw = player2.getUseValue(card2, null, true);
          const eff = player2.getUseValue(get.autoViewAs({ name: "juedou" }, [card2]));
          return eff - raw;
        },
        onremove: true,
        charlotte: true,
        ai: { order: 7 }
      },
      jianxiong: {
        audio: "olshuangxiong",
        trigger: { player: "phaseJieshuBegin" },
        forced: true,
        locked: false,
        filter(event2, player2) {
          return player2.hasHistory("damage", function(evt) {
            return evt.card && evt.cards && evt.cards.some((card2) => get.position(card2, true));
          });
        },
        content() {
          const cards2 = [];
          player.getHistory("damage", function(evt) {
            if (evt.card && evt.cards) {
              cards2.addArray(evt.cards.filterInD("d"));
            }
          });
          if (cards2.length) {
            player.gain(cards2, "gain2");
          }
        }
      }
    }
  },
  //新李典
  xinwangxi: {
    audio: "wangxi",
    inherit: "wangxi",
    async content(event2, trigger2, player2) {
      const target2 = get.info(event2.name).logTarget(trigger2, player2);
      await player2.draw(2);
      if (player2.countCards("he") && target2.isIn()) {
        await player2.chooseToGive(target2, "he", true);
      }
    }
  },
  //OL界火诸葛
  olhuoji: {
    audio: "rehuoji",
    audioname: ["ol_sp_zhugeliang", "ol_pangtong"],
    trigger: { player: "huogongBegin" },
    forced: true,
    locked: false,
    popup: false,
    group: "olhuoji_viewAs",
    async content(event2, trigger2, player2) {
      trigger2.set("chooseToShow", async (event3, player3, target2) => {
        const { showPosition = "h" } = event3;
        const cards2 = target2.getCards(showPosition).randomGets(1);
        return { bool: true, cards: cards2 };
      });
      trigger2.set("filterDiscard", (card2) => {
        const { cards2 } = get.event().getParent("huogong", true);
        return get.color(card2) == get.color(cards2[0]);
      });
    },
    async huogongContent(event2, trigger2, player2) {
      const { target: target2 } = event2;
      if (target2.countCards("h") == 0) {
        return;
      }
      const cards2 = target2.getCards("h").randomGets(1), card2 = cards2[0];
      await target2.showCards(cards2).setContent(function() {
      });
      event2.dialog = ui.create.dialog(get.translation(target2) + "展示的手牌", cards2);
      event2.videoId = lib.status.videoId++;
      game.broadcast("createDialog", event2.videoId, get.translation(target2) + "展示的手牌", cards2);
      game.addVideo("cardDialog", null, [get.translation(target2) + "展示的手牌", get.cardsInfo(cards2), event2.videoId]);
      game.log(target2, "展示了", card2);
      const result2 = await player2.chooseToDiscard({ color: get.color(card2) }, "h", function(card3) {
        var evt = _status.event.getParent();
        if (get.damageEffect(evt.target, evt.player, evt.player, "fire") > 0) {
          return 7 - get.value(card3, evt.player);
        }
        return -1;
      }).set("prompt", false).forResult();
      if (result2?.bool) {
        await target2.damage("fire");
      } else {
        target2.addTempSkill("huogong2");
      }
      event2.dialog.close();
      game.addVideo("cardDialog", null, event2.videoId);
      game.broadcast("closeDialog", event2.videoId);
    },
    subSkill: { viewAs: { inherit: "rehuoji", audio: "rehuoji" } }
  },
  olkanpo: {
    audio: "rekanpo",
    audioname: ["ol_sp_zhugeliang", "ol_pangtong"],
    trigger: { player: "useCard" },
    forced: true,
    locked: false,
    popup: false,
    group: "olkanpo_viewAs",
    filter(event2, player2) {
      return event2.card.name == "wuxie";
    },
    content() {
      trigger.directHit.addArray(game.players);
    },
    subSkill: { viewAs: { inherit: "rekanpo", audio: "rekanpo" } }
  },
  //新杀界曹植
  dcjiushi: {
    audio: 2,
    trigger: {
      player: "useCardAfter"
    },
    filter(event2, player2) {
      return event2.card.name == "jiu";
    },
    forced: true,
    locked: false,
    content() {
      player.addTempSkill("dcjiushi_sha", { player: "phaseEnd" });
      player.addMark("dcjiushi_sha", 1, false);
    },
    group: ["dcjiushi_use", "dcjiushi_damage"],
    subSkill: {
      use: {
        audio: "dcjiushi",
        enable: "chooseToUse",
        hiddenCard(player2, name2) {
          if (name2 == "jiu") {
            return !player2.isTurnedOver();
          }
          return false;
        },
        filter(event2, player2) {
          if (player2.isTurnedOver()) {
            return false;
          }
          return event2.filterCard({ name: "jiu", isCard: true }, player2, event2);
        },
        async content(event2, trigger2, player2) {
          if (_status.event.getParent(2).type == "dying") {
            event2.dying = player2;
            event2.type = "dying";
          }
          await player2.turnOver();
          await player2.useCard({ name: "jiu", isCard: true }, player2);
        },
        ai: {
          save: true,
          skillTagFilter(player2, tag, arg) {
            return !player2.isTurnedOver() && _status.event?.dying == player2;
          },
          order: 5,
          result: {
            player(player2) {
              if (_status.event.parent.name == "phaseUse") {
                if (player2.countCards("h", "jiu") > 0) {
                  return 0;
                }
                if (player2.getEquip("zhuge") && player2.countCards("h", "sha") > 1) {
                  return 0;
                }
                if (!player2.countCards("h", "sha")) {
                  return 0;
                }
                var targets2 = [];
                var target2;
                var players = game.filterPlayer();
                for (var i = 0; i < players.length; i++) {
                  if (get.attitude(player2, players[i]) < 0) {
                    if (player2.canUse("sha", players[i], true, true)) {
                      targets2.push(players[i]);
                    }
                  }
                }
                if (targets2.length) {
                  target2 = targets2[0];
                } else {
                  return 0;
                }
                var num2 = get.effect(target2, { name: "sha" }, player2, player2);
                for (var i = 1; i < targets2.length; i++) {
                  var num22 = get.effect(targets2[i], { name: "sha" }, player2, player2);
                  if (num22 > num2) {
                    target2 = targets2[i];
                    num2 = num22;
                  }
                }
                if (num2 <= 0) {
                  return 0;
                }
                var e2 = target2.getEquip(2);
                if (e2) {
                  if (e2.name == "tengjia") {
                    if (!player2.countCards("h", {
                      name: "sha",
                      nature: "fire"
                    }) && !player2.getEquip("zhuque")) {
                      return 0;
                    }
                  }
                  if (e2.name == "renwang") {
                    if (!player2.countCards("h", { name: "sha", color: "red" })) {
                      return 0;
                    }
                  }
                  if (e2.name == "baiyin") {
                    return 0;
                  }
                }
                if (player2.getEquip("guanshi") && player2.countCards("he") > 2) {
                  return 1;
                }
                return target2.countCards("h") > 3 ? 0 : 1;
              }
              if (player2 == _status.event.dying || player2.isTurnedOver()) {
                return 3;
              }
            }
          },
          effect: {
            target(card2, player2, target2) {
              if (target2.isTurnedOver()) {
                if (get.tag(card2, "damage")) {
                  if (player2.hasSkillTag("jueqing", false, target2)) {
                    return [1, -2];
                  }
                  if (target2.hp == 1) {
                    return;
                  }
                  return [1, target2.countCards("h") / 2];
                }
              }
            }
          }
        }
      },
      damage: {
        audio: "dcjiushi",
        trigger: { player: "damageEnd" },
        check(event2, player2) {
          return player2.isTurnedOver();
        },
        prompt: "是否发动【酒诗】，将武将牌翻面？",
        filter(event2, player2) {
          if (event2.checkJiushi) {
            return true;
          }
          return false;
        },
        content() {
          player.turnOver();
        }
      },
      sha: {
        charlotte: true,
        onremove: true,
        mod: {
          cardUsable(card2, player2, num2) {
            if (card2.name == "sha") {
              return num2 + player2.countMark("dcjiushi_sha");
            }
          }
        }
      }
    }
  },
  //OL界黄忠
  remoshi: {
    trigger: { source: "damageSource" },
    forced: true,
    filter(event2, player2) {
      return event2.player.isIn() && event2.card && event2.card.name == "sha" && event2.cards.filterInD("od").length && event2.notLink() && [2, 3, 4].some((i) => event2.player.getEquips(i).length > 0);
    },
    group: "remoshi_retrieve",
    content() {
      trigger.player.addSkill("remoshi_stuck");
      trigger.player.addToExpansion(trigger.cards.filterInD("od"), "gain2").gaintag.add("remoshi_stuck");
    },
    subSkill: {
      retrieve: {
        audio: "remoshi",
        trigger: {
          global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"]
        },
        filter(event2, player2, name2, target2) {
          return target2.isIn() && target2.countExpansions("remoshi_stuck");
        },
        getIndex(event2, player2) {
          const keys = ["equip2", "equip3", "equip4"];
          return game.filterPlayer((current) => {
            if (event2.name == "gain" && current == player2) {
              return false;
            }
            const cards2 = current.getExpansions("remoshi_stuck");
            if (!cards2.length) {
              return false;
            }
            const evt = event2.getl(current);
            if (evt && evt.cards2 && evt.cards2.some((i) => get.subtypes(i).some((slot) => keys.includes(slot)))) {
              return true;
            }
          }).sortBySeat();
        },
        forced: true,
        logTarget: (event2, player2, name2, target2) => target2,
        async content(event2, trigger2, player2) {
          const target2 = event2.indexedData;
          const cards2 = target2.getExpansions("remoshi_stuck");
          await player2.gain(cards2, target2, "give", "bySelf");
        }
      },
      stuck: {
        marktext: "矢",
        charlotte: true,
        intro: {
          name: "没矢",
          name2: "矢",
          content: "expansion",
          markcount: "expansion"
        },
        onremove(player2, skill) {
          var cards2 = player2.getExpansions(skill);
          if (cards2.length) {
            player2.loseToDiscardpile(cards2);
          }
        }
      }
    }
  },
  //界文聘
  rezhenwei: {
    audio: "zhenwei",
    inherit: "zhenwei",
    filter(event2, player2) {
      if (player2 == event2.target) {
        return false;
      }
      if (!player2.countCards("he")) {
        return false;
      }
      if (event2.targets.length > 1) {
        return false;
      }
      if (!event2.target) {
        return false;
      }
      if (event2.target.hp > player2.hp) {
        return false;
      }
      var card2 = event2.card;
      if (card2.name == "sha") {
        return true;
      }
      if (get.color(card2) == "black" && get.type(card2, "trick") == "trick") {
        return true;
      }
      return false;
    }
  },
  //界关张……
  retongxin: {
    mod: {
      attackRange: (player2, num2) => num2 + 2
    }
  },
  //马忠
  refuman: {
    audio: 2,
    enable: "phaseUse",
    filterTarget(card2, player2, target2) {
      return !player2.getStorage("refuman_used").includes(target2);
    },
    filter(event2, player2) {
      return player2.countCards("he") > 0 && game.hasPlayer((current) => lib.skill.refuman.filterTarget(null, player2, current));
    },
    filterCard: lib.filter.cardDiscardable,
    position: "he",
    async content(event2, trigger2, player2) {
      const card2 = get.discardPile((card3) => card3.name == "sha"), { target: target2 } = event2;
      if (card2) {
        target2.addTempSkill("refuman2", { player: "phaseAfter" });
        player2.addSkill("refuman_draw");
        const next = target2.gain(card2, "gain2");
        next.gaintag.add("refuman");
        await next;
      }
      player2.addTempSkill(event2.name + "_used", "phaseChange");
      player2.markAuto(event2.name + "_used", target2);
    },
    check(card2) {
      return get.discardPile((card3) => card3.name == "sha") ? 6 - get.value(card2) : 0;
    },
    ai: {
      order: 2,
      result: {
        target(player2, target2) {
          if (!target2.hasSha()) {
            return 1.2;
          }
          return 1;
        }
      }
    },
    subSkill: {
      used: {
        charlotte: true,
        onremove: true,
        intro: {
          content: "已发动过角色：$"
        }
      },
      draw: {
        charlotte: true,
        audio: "refuman",
        trigger: { global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"] },
        getIndex(event2, player2) {
          return game.filterPlayer2((target2) => {
            const evt = event2.getParent();
            if (!["useCard", "respond"].includes(evt?.name) && !target2.isIn()) {
              return false;
            }
            if (event2.name == "lose") {
              if (target2 !== event2.player || event2.refuman_active) {
                return false;
              }
              return Object.values(event2.gaintag_map).flat().includes("refuman");
            }
            return target2.hasHistory("lose", (evt2) => {
              if (event2 !== evt2.getParent() || evt2.refuman_active) {
                return false;
              }
              return Object.values(evt2.gaintag_map).flat().includes("refuman");
            });
          }).sortBySeat();
        },
        forced: true,
        filter: (event2, player2, name2, target2) => target2,
        logTarget: (event2, player2, name2, target2) => target2,
        async content(event2, trigger2, player2) {
          const [target2] = event2.targets, evt = trigger2.getParent();
          if (["useCard", "respond"].includes(evt?.name)) {
            await game.asyncDraw([target2, player2]);
          } else {
            await target2.draw();
          }
          trigger2.refuman_active = true;
        }
      }
    }
  },
  refuman2: {
    charlotte: true,
    onremove(player2) {
      player2.removeGaintag("refuman");
    },
    mod: {
      aiOrder(player2, card2, num2) {
        if (get.itemtype(card2) == "card" && card2.hasGaintag("refuman")) {
          return num2 + 1;
        }
      }
    }
  },
  //十周年陈群
  repindi: {
    audio: 2,
    enable: "phaseUse",
    filterTarget(card2, player2, target2) {
      return !player2.getStorage("repindi_target").includes(target2);
    },
    filterCard(card2, player2) {
      return !player2.getStorage("repindi_type").includes(get.type2(card2));
    },
    check(card2) {
      var num2 = _status.event.player.getStat("skill").repindi || 0;
      return 6 + num2 - get.value(card2);
    },
    position: "he",
    async content(event2, trigger2, player2) {
      const { target: target2, cards: cards2 } = event2, num2 = player2.getStat("skill").repindi;
      player2.addTempSkill("repindi_clear", ["phaseUseAfter", "phaseAfter"]);
      player2.markAuto("repindi_target", [target2]);
      player2.markAuto("repindi_type", [get.type2(cards2[0], cards2[0].original == "h" ? player2 : false)]);
      player2.syncStorage();
      let result2;
      if (target2.countCards("he") == 0) {
        result2 = { index: 0 };
      } else {
        result2 = await player2.chooseControlList(true, ["令" + get.translation(target2) + "摸" + get.cnNumber(num2) + "张牌", "令" + get.translation(target2) + "弃置" + get.cnNumber(num2) + "张牌"], function() {
          return _status.event.choice;
        }).set("choice", get.attitude(player2, target2) > 0 ? 0 : 1).forResult();
      }
      if (result2?.index == 0) {
        await target2.draw(num2);
      } else {
        await target2.chooseToDiscard(num2, "he", true);
      }
      if (target2.isDamaged()) {
        await player2.link();
      }
    },
    subSkill: {
      clear: {
        trigger: { player: "phaseAfter" },
        charlotte: true,
        silent: true,
        onremove(player2) {
          delete player2.storage.repindi_target;
          delete player2.storage.repindi_type;
        }
      }
    },
    ai: {
      order: 8,
      threaten: 1.9,
      result: {
        target(player2, target2) {
          var att = get.attitude(player2, target2);
          var num2 = (player2.getStat("skill").repindi || 0) + 1;
          if (att <= 0 && target2.countCards("he") < num2) {
            return 0;
          }
          return get.sgn(att);
        }
      }
    }
  },
  //十周年孙登
  rekuangbi: {
    audio: 2,
    trigger: { player: "phaseUseBegin" },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2("rekuangbi"), (card2, player3, target2) => {
        return target2.countCards("he") > 0 && target2 != player3;
      }).set("ai", (target2) => {
        var player3 = _status.event.player, att = get.attitude(player3, target2);
        if (_status.event.goon) {
          if (att > 0) {
            return att * Math.sqrt(target2.countCards("he"));
          }
          return (1 - att) / (target2.countCards("he") + 1);
        }
        return -10 * att / (target2.countCards("he") + 1);
      }).set("goon", player2.countCards("hs", (card2) => player2.hasValueTarget(card2)) >= 2).forResult();
    },
    async content(event2, trigger2, player2) {
      const {
        targets: [target2]
      } = event2;
      const result2 = await target2.chooseCard("匡弼：将至多三张牌置于" + get.translation(player2) + "的武将牌上", "he", [1, 3], true).set("ai", (card2) => {
        if (get.attitude(_status.event.player, _status.event.getParent().player) > 0) {
          return 7 - get.value(card2);
        }
        return -get.value(card2);
      }).forResult();
      if (result2?.bool) {
        await player2.addToExpansion(result2.cards, target2, "give").set("gaintag", ["rekuangbi_effect"]);
        player2.addTempSkill("rekuangbi_effect", "phaseUseEnd");
        player2.markAuto("rekuangbi_effect", [target2]);
      }
    },
    subSkill: {
      effect: {
        audio: "rekuangbi",
        mod: {
          aiOrder(player2, card2, num2) {
            if (num2 <= 0 || !player2.getExpansions("rekuangbi_effect").length) {
              return;
            }
            let suit = get.suit(card2);
            if (player2.getExpansions("rekuangbi_effect").some((i) => get.suit(i) == suit)) {
              return num2 + 10;
            }
            return num2 / 4;
          }
        },
        trigger: { player: "useCard" },
        charlotte: true,
        forced: true,
        filter(event2, player2) {
          return player2.getExpansions("rekuangbi_effect").length > 0;
        },
        async content(event2, trigger2, player2) {
          const cards2 = player2.getExpansions("rekuangbi_effect");
          const suit = get.suit(trigger2.card), cardsx = cards2.filter((card2) => get.suit(card2) == suit);
          const len = cardsx.length;
          let result2;
          if (len > 1) {
            result2 = await player2.chooseButton(["匡弼：移去一张同花色的“匡弼”牌", cards2], true).set("filterButton", (button) => {
              return get.suit(button.link) == _status.event.suit;
            }).set("suit", suit).forResult();
          } else if (len == 1) {
            result2 = { bool: true, links: cardsx };
          } else {
            result2 = { bool: false, links: [cards2.randomGet()] };
          }
          if (result2?.links?.length) {
            await player2.loseToDiscardpile(result2.links);
            await game.delayx();
          }
          if (result2?.bool) {
            await player2.draw("nodelay");
            const target2 = player2.getStorage("rekuangbi_effect")[0];
            if (target2?.isIn()) {
              await target2.draw();
            }
          } else {
            await player2.draw();
          }
        },
        intro: {
          content: "expansion",
          markcount: "expansion"
        },
        onremove(player2, skill) {
          var cards2 = player2.getExpansions(skill);
          if (cards2.length) {
            player2.loseToDiscardpile(cards2);
          }
          delete player2.storage[skill];
        }
      }
    }
  },
  //十周年蔡邕
  rebizhuan: {
    audio: 2,
    trigger: {
      player: "useCard",
      target: "useCardToTargeted"
    },
    filter(event2, player2) {
      if (event2.name != "useCard" && event2.player == event2.target) {
        return false;
      }
      var num2 = 4 + Math.min(player2.countMark("retongbo"), game.countPlayer());
      if (player2.getExpansions("rebizhuan").length >= num2) {
        return false;
      }
      return get.suit(event2.card) == "spade";
    },
    marktext: "书",
    intro: {
      name: "辟撰(书)",
      name2: "书",
      content: "expansion",
      markcount: "expansion"
    },
    frequent: true,
    locked: false,
    content() {
      player.addToExpansion(get.cards(), "gain2").gaintag.add("rebizhuan");
    },
    mod: {
      maxHandcard(player2, num2) {
        return num2 + player2.getExpansions("rebizhuan").length;
      }
    },
    ai: {
      notemp: true
    }
  },
  retongbo: {
    audio: 2,
    trigger: { player: "phaseDrawAfter" },
    direct: true,
    filter(event2, player2) {
      return player2.getExpansions("rebizhuan").length > 0 && player2.countCards("he") > 0;
    },
    async content(event2, trigger2, player2) {
      const next = player2.chooseToMove("通博：是否交换“书”和手牌？");
      next.set("list", [
        [get.translation(player2) + "（你）的“书”", player2.getExpansions("rebizhuan")],
        ["你的牌", player2.getCards("he")]
      ]);
      next.set("filterMove", function(from, to) {
        return typeof to != "number";
      });
      next.set("processAI", function(list) {
        const player3 = _status.event.player;
        let cards2 = list[0][1].concat(list[1][1]), cards22 = [];
        cards2.sort((a, b) => {
          return get.useful(a) - get.useful(b);
        });
        cards22 = cards2.splice(0, player3.getExpansions("rebizhuan").length);
        return [cards22, cards2];
      });
      const result2 = await next.forResult();
      if (result2?.bool) {
        const pushs = result2.moved[0], gains = result2.moved[1];
        pushs.removeArray(player2.getExpansions("rebizhuan"));
        gains.removeArray(player2.getCards("he"));
        if (!pushs.length || pushs.length != gains.length) {
          return;
        }
        player2.logSkill("retongbo");
        await player2.addToExpansion(pushs, "give", player2).set("gaintag", ["rebizhuan"]);
        await player2.gain(gains, "gain2");
        const cards2 = player2.getExpansions("rebizhuan").slice(0);
        if (cards2.length < 4) {
          return;
        }
        event2.given = [];
        const list = cards2.map((card2) => get.suit(card2)).unique();
        if (list.length >= 4 && player2.hp <= 2) {
          event2.four = true;
        }
        while (event2.given.length < 4) {
          const resultx = await player2.chooseCardButton("是否将" + get.cnNumber(4 - event2.given.length) + "张“书”交给任意名其他角色？", cards2, [1, 4 - event2.given.length], event2.given.length > 0).set("ai", function(button) {
            if (!_status.event.goon) {
              return 0;
            }
            var four = _status.event.getParent().four, given = _status.event.getParent().given;
            if (four) {
              return get.value(button.link) + (given.map((i2) => get.suit(i2)).includes(get.suit(button.link)) ? 0 : 10);
            }
            if (ui.selected.buttons.length == 0) {
              return get.value(button.link);
            }
            return 0;
          }).set(
            "goon",
            game.hasPlayer((current) => current != player2 && get.attitude(player2, current) > 0)
          ).forResult();
          if (resultx?.bool) {
            for (var i = 0; i < resultx.links.length; i++) {
              cards2.remove(resultx.links[i]);
            }
            const togive = resultx.links.slice(0);
            event2.given.addArray(togive);
            const resulty = await player2.chooseTarget("将" + get.translation(resultx.links) + "交给一名其他角色", true, function(card2, player3, target2) {
              return target2 != player3;
            }).set("ai", function(target2) {
              var att = get.attitude(_status.event.player, target2);
              if (_status.event.enemy) {
                return -att;
              } else if (att > 0) {
                return att / (1 + target2.countCards("h"));
              } else {
                return att / 100;
              }
            }).set("enemy", get.value(togive[0], player2, "raw") < 0).forResult();
            if (resulty?.targets?.length) {
              const target2 = resulty.targets[0];
              player2.line(target2, "green");
              game.log(target2, "获得了" + get.cnNumber(togive.length) + "张", "#g“书”");
              await target2.gain(togive, "draw").set("giver", player2);
            }
          } else {
            return;
          }
        }
        if (event2.given.length == 4) {
          const suits = lib.suit.slice(0);
          event2.given.forEach((i2) => suits.remove(get.suit(i2, player2)));
          if (suits.length == 0) {
            await player2.recover();
            player2.addMark("retongbo", 1, false);
          }
        }
      }
    },
    marktext: "博",
    intro: {
      content(storage, player2) {
        var num2 = 4 + Math.min(storage, game.countPlayer());
        return "“书”的上限+" + num2;
      }
    },
    ai: {
      combo: "rebizhuan"
    }
  },
  //十周年陈宫
  remingce: {
    enable: "phaseUse",
    usable: 1,
    audio: 2,
    position: "he",
    filterCard(card2) {
      return get.name(card2) == "sha" || get.type(card2) == "equip";
    },
    filter(event2, player2) {
      return player2.countCards("h", "sha") > 0 || player2.countCards("he", { type: "equip" }) > 0;
    },
    check(card2) {
      return 8 - get.value(card2);
    },
    selectTarget: 2,
    multitarget: true,
    discard: false,
    lose: false,
    targetprompt: ["得到牌", "出杀目标"],
    filterTarget(card2, player2, target2) {
      if (ui.selected.targets.length == 0) {
        return player2 != target2;
      }
      return true;
    },
    delay: false,
    async content(event2, trigger2, player2) {
      const { cards: cards2, targets: targets2 } = event2;
      await player2.give(cards2, targets2[0], "visible");
      let result2;
      if (!targets2[0].canUse({ name: "sha", isCard: true }, targets2[1], false, false)) {
        result2 = { control: "选项二" };
      } else {
        result2 = await targets2[0].chooseControl().set("ai", function() {
          var player3 = _status.event.player, target2 = _status.event.target;
          return get.effect(target2, { name: "sha", isCard: true }, player3, player3) > 0 ? 0 : 1;
        }).set("choiceList", ["视为对" + get.translation(targets2[1]) + "使用一张【杀】，若此杀造成伤害则执行选项二", "你与" + get.translation(player2) + "各摸一张牌"]).set("target", targets2[1]).set("prompt", "对" + get.translation(targets2[1]) + "使用一张杀，或摸一张牌").forResult();
      }
      if (result2?.control == "选项二") {
        await game.asyncDraw([player2, targets2[0]]);
        return;
      } else {
        await targets2[0].useCard({ name: "sha", isCard: true }, targets2[1]);
        if (targets2[0].hasHistory("useCard", (evt) => {
          return evt.getParent() == event2 && targets2[0].hasHistory("sourceDamage", (evtx) => evt.card == evtx.card);
        })) {
          await game.asyncDraw([player2, targets2[0]]);
        }
      }
    },
    ai: {
      result: {
        player(player2) {
          var players = game.filterPlayer();
          for (var i = 0; i < players.length; i++) {
            if (players[i] != player2 && get.attitude(player2, players[i]) > 1 && get.attitude(players[i], player2) > 1) {
              return 1;
            }
          }
          return 0;
        },
        target(player2, target2) {
          if (ui.selected.targets.length) {
            return -0.1;
          }
          return 1;
        }
      },
      order: 8.5,
      expose: 0.2
    }
  },
  // 界荀攸
  reqice: {
    audio: 2,
    enable: "phaseUse",
    usable(skill, player2) {
      return player2.countMark("reqice_mark") + 1;
    },
    filter(event2, player2) {
      const hs = player2.getCards("h");
      if (!hs.length) {
        return false;
      }
      if (hs.some((card2) => {
        const mod2 = game.checkMod(card2, player2, "unchanged", "cardEnabled2", player2);
        return mod2 === false;
      })) {
        return false;
      }
      return lib.inpile.some((name2) => {
        if (get.type(name2) != "trick") {
          return false;
        }
        const card2 = get.autoViewAs({ name: name2 }, hs);
        return event2.filterCard(card2, player2, event2);
      });
    },
    chooseButton: {
      dialog(event2, player2) {
        var list = [];
        for (var i = 0; i < lib.inpile.length; i++) {
          if (get.type(lib.inpile[i]) == "trick") {
            list.push(["锦囊", "", lib.inpile[i]]);
          }
        }
        return ui.create.dialog(get.translation("reqice"), [list, "vcard"]);
      },
      filter(button, player2) {
        const event2 = _status.event.getParent(), card2 = get.autoViewAs(
          {
            name: button.link[2]
          },
          player2.getCards("h")
        );
        return event2.filterCard(card2, player2, event2);
      },
      check(button) {
        var player2 = _status.event.player;
        var effect = player2.getUseValue(button.link[2]);
        if (player2.countCards("hs", button.link[2]) > 0) {
          return 0;
        }
        if ((player2.getStat("skill").reqice || 0) < player2.countMark("reqice_mark") + 1) {
          if (["draw", "gain"].some((i) => get.tag(button.link[2], i) >= 1)) {
            return effect * 5;
          }
        }
        if (effect > 0) {
          return effect;
        }
        return 0;
      },
      backup(links, player2) {
        return {
          filterCard: true,
          selectCard: -1,
          position: "h",
          audio: "reqice",
          popname: true,
          viewAs: { name: links[0][2] }
        };
      },
      prompt(links, player2) {
        return "将所有手牌当【" + get.translation(links[0][2]) + "】使用";
      }
    },
    ai: {
      order: 1,
      result: {
        player(player2) {
          var num2 = 0;
          var cards2 = player2.getCards("h");
          if (cards2.length >= 3 && player2.hp >= 3 && player2.countMark("reqice_mark") < 2) {
            return 0;
          }
          for (var i = 0; i < cards2.length; i++) {
            num2 += Math.max(0, get.value(cards2[i], player2, "raw"));
          }
          num2 /= cards2.length;
          num2 /= (player2.countMark("reqice_mark") + 1) * 1.3;
          num2 *= Math.min(cards2.length, player2.hp);
          return 13 - num2;
        }
      },
      nokeep: true,
      skillTagFilter(player2, tag, arg) {
        if (tag === "nokeep") {
          return (!arg || arg.card && get.name(arg.card) === "tao") && player2.isPhaseUsing() && !player2.getStat("skill").reqice && player2.hasCard((card2) => get.name(card2) != "tao", "h");
        }
      },
      threaten: 1.7
    },
    subSkill: {
      backup: {},
      mark: {
        charlotte: true,
        onremove: true,
        intro: {
          name2: "奇策",
          content: "mark"
        }
      }
    }
  },
  rezhiyu: {
    audio: 2,
    trigger: { player: "damageEnd" },
    async content(event2, trigger2, player2) {
      await player2.draw();
      if (!player2.countCards("h")) {
        return;
      } else {
        await player2.showHandcards();
      }
      let result2;
      if (!trigger2.source?.isIn()) {
        result2 = { bool: false, cards: [] };
      } else {
        result2 = await trigger2.source.chooseToDiscard("智愚：请弃置一张手牌", true).forResult();
      }
      let cards2 = player2.getCards("h");
      const bool = cards2.map((card2) => get.color(card2, player2)).unique().length == 1;
      if (bool) {
        cards2 = result2.cards.filterInD("d");
        if (cards2.length) {
          await player2.gain(cards2, "gain2");
        }
        player2.addMark("reqice_mark", 1);
        player2.addTempSkill("reqice_mark", { player: "phaseAfter" });
      }
    },
    ai: {
      maixie_defend: true,
      threaten: 0.85
    }
  },
  oljiang: {
    audio: "jiang",
    inherit: "jiang",
    group: "oljiang_gain",
    subSkill: {
      gain: {
        audio: "jiang",
        audioname: ["sp_lvmeng", "re_sunben", "re_sunce"],
        trigger: { global: ["loseAfter", "loseAsyncAfter"] },
        usable: 1,
        filter(event2, player2) {
          if (player2.hp < 1 || event2.type != "discard" || event2.position != ui.discardPile) {
            return false;
          }
          var filter = (card2) => card2.name == "juedou" || card2.name == "sha" && get.color(card2, false) == "red";
          var cards2 = event2.getd().filter(filter);
          if (!cards2.filter((card2) => get.position(card2, true) == "d").length) {
            return false;
          }
          var searched = false;
          if (game.getGlobalHistory("cardMove", function(evt) {
            if (searched || evt.type != "discard" || evt.position != ui.discardPile) {
              return false;
            }
            var evtx = evt;
            if (evtx.getlx === false) {
              evtx = evt.getParent();
            }
            var cards3 = evtx.getd().filter(filter);
            if (!cards3.length) {
              return false;
            }
            searched = true;
            return evtx != event2;
          }).length > 0) {
            return false;
          }
          return true;
        },
        prompt2(event2, player2) {
          var cards2 = event2.getd().filter(function(card2) {
            return (card2.name == "juedou" || card2.name == "sha" && get.color(card2, false) == "red") && get.position(card2, true) == "d";
          });
          return "失去1点体力并获得" + get.translation(cards2);
        },
        check(event2, player2) {
          return player2.hp > 1 && !player2.storage.olhunzi;
        },
        content() {
          player.loseHp();
          var cards2 = trigger.getd().filter(function(card2) {
            return (card2.name == "juedou" || card2.name == "sha" && get.color(card2, false) == "red") && get.position(card2, true) == "d";
          });
          if (cards2.length > 0) {
            player.gain(cards2, "gain2");
          }
        }
      }
    }
  },
  //李儒
  dcmieji: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return player2.hasCard(lib.skill.dcmieji.filterCard, "eh");
    },
    position: "he",
    filterCard(card2) {
      if (get.subtype(card2) == "equip1") {
        return true;
      }
      return get.color(card2) == "black" && get.type(card2, "trick") == "trick";
    },
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.countCards("h") > 0;
    },
    discard: false,
    delay: false,
    check(card2) {
      return 8 - get.value(card2);
    },
    loseTo: "cardPile",
    insert: true,
    visible: true,
    async content(event2, trigger2, player2) {
      const { cards: cards2, target: target2 } = event2;
      await player2.showCards(cards2);
      const result2 = await target2.chooseToDiscard("he", true).set("prompt", "请弃置一张锦囊牌，或依次弃置两张非锦囊牌。").forResult();
      if ((!result2.cards || get.type(result2.cards[0], "trick", result2.cards[0].original == "h" ? target2 : false) != "trick") && target2.countCards("he", function(card2) {
        return get.type(card2, "trick") != "trick";
      })) {
        await target2.chooseToDiscard("he", true, function(card2) {
          return get.type(card2, "trick") != "trick";
        }).set("prompt", "请弃置第二张非锦囊牌");
      }
    },
    ai: {
      order: 9,
      result: {
        target: -1
      }
    }
  },
  dcfencheng: {
    audio: 2,
    audioname: ["ol_liru"],
    audioname2: {
      ol_sb_dongzhuo: "dcfencheng_ol_sb_dongzhuo"
    },
    enable: "phaseUse",
    filterTarget: lib.filter.notMe,
    limited: true,
    line: "fire",
    skillAnimation: "epic",
    animationColor: "fire",
    async content(event2, trigger2, player2) {
      player2.awakenSkill(event2.name);
      let targets2 = game.filterPlayer((current) => current != player2);
      targets2.sortBySeat(event2.target);
      let num2 = 1;
      if (targets2.length) {
        for (const target2 of targets2) {
          if (target2.isIn()) {
            player2.line(target2, "fire");
            const result2 = await target2.chooseToDiscard("he", "焚城：弃置至少" + get.cnNumber(num2) + "张牌，或受到2点火焰伤害", [num2, Infinity], "allowChooseAll").set("ai", (card2) => {
              if (ui.selected.cards.length >= get.event().num) {
                return -1;
              }
              if (get.player().hasSkillTag("nofire")) {
                return -1;
              }
              if (get.event().res >= 0) {
                return 6 - get.value(card2);
              }
              if (get.type(card2) != "basic") {
                return 10 - get.value(card2);
              }
              return 8 - get.value(card2);
            }).set("num", num2).set("res", get.damageEffect(target2, player2, target2, "fire")).forResult();
            if (!result2.bool) {
              await target2.damage(2, "fire");
              num2 = 1;
            } else {
              num2 = result2.cards.length + 1;
            }
          }
        }
      }
    },
    subSkill: { ol_sb_dongzhuo: { audio: 1 } },
    ai: {
      order: 1,
      result: {
        player(player2, target2) {
          if (player2.hasUnknown(2)) {
            return 0;
          }
          let num2 = 0, eff = 0, players = game.filterPlayer((current) => {
            return current != player2;
          }).sortBySeat(target2);
          for (const target3 of players) {
            if (get.damageEffect(target3, player2, target3, "fire") >= 0) {
              num2 = 0;
              continue;
            }
            let shao = false;
            num2++;
            if (target3.countCards("he", (card2) => {
              if (get.type(card2) != "basic") {
                return get.value(card2) < 10;
              }
              return get.value(card2) < 8;
            }) < num2) {
              shao = true;
            }
            if (shao) {
              eff -= 4 * (get.realAttitude || get.attitude)(player2, target3);
              num2 = 0;
            } else {
              eff -= num2 * (get.realAttitude || get.attitude)(player2, target3) / 4;
            }
          }
          if (eff < 4) {
            return 0;
          }
          return eff;
        }
      }
    }
  },
  //朱桓
  refenli: {
    audio: 2,
    group: ["refenli_draw", "refenli_use", "refenli_discard"],
    subfrequent: ["discard"],
    subSkill: {
      draw: {
        audio: "refenli",
        trigger: { player: "phaseJudgeBefore" },
        prompt: "是否发动【奋励】跳过判定和摸牌阶段？",
        filter(event2, player2) {
          return player2.isMaxHandcard();
        },
        check(event2, player2) {
          if (player2.hasJudge("lebu") || player2.hasJudge("bingliang")) {
            return true;
          }
          if (!player2.hasSkill("repingkou") || player2.getHistory("skipped").length > 0) {
            return false;
          }
          return game.hasPlayer(function(current) {
            return get.attitude(player2, current) < 0 && current.hp == 1 && get.damageEffect(current, player2, player2) > 0;
          });
        },
        content() {
          trigger.cancel();
          player.skip("phaseDraw");
        }
      },
      use: {
        audio: "refenli",
        trigger: { player: "phaseUseBefore" },
        prompt: "是否发动【奋励】跳过出牌阶段？",
        filter(event2, player2) {
          return player2.isMaxHp();
        },
        check(event2, player2) {
          if (!player2.hasSkill("repingkou")) {
            return false;
          }
          if (!player2.needsToDiscard() || player2.countCards("e") && player2.isMaxEquip()) {
            return true;
          }
          if (player2.getHistory("skipped").length > 0) {
            return false;
          }
          return game.hasPlayer(function(current) {
            return get.attitude(player2, current) < 0 && current.hp == 1 && get.damageEffect(current, player2, player2) > 0;
          });
        },
        content() {
          trigger.cancel();
        }
      },
      discard: {
        audio: "refenli",
        trigger: { player: "phaseDiscardBefore" },
        prompt: "是否发动【奋励】跳过弃牌阶段？",
        frequent: true,
        filter(event2, player2) {
          return player2.isMaxEquip() && player2.countCards("e");
        },
        content() {
          trigger.cancel();
        }
      }
    },
    ai: {
      combo: "repingkou"
    }
  },
  repingkou: {
    audio: 2,
    trigger: { player: "phaseEnd" },
    filter(event2, player2) {
      return player2.getHistory("skipped").length > 0;
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget([1, player2.getHistory("skipped").length], get.prompt2("repingkou"), "对至多" + get.cnNumber(player2.getHistory("skipped").length) + "名其他角色各造成1点伤害。若你选择的角色数小于最大角色数，则你可以弃置其中一名目标角色装备区内的一张牌", function(card2, player3, target2) {
        return target2 != player3;
      }).set("ai", function(target2) {
        var player3 = _status.event.player;
        return get.damageEffect(target2, player3, player3);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const targets2 = event2.targets.slice(0).sortBySeat();
      for (const target2 of targets2) {
        if (target2.isIn()) {
          await target2.damage();
        }
      }
      if (targets2.length >= player2.getHistory("skipped").length) {
        return;
      }
      const targets22 = targets2.filter(function(target2) {
        return target2.countDiscardableCards(player2, "e") > 0;
      });
      if (targets22.length > 0) {
        const result2 = await player2.chooseTarget("是否弃置一名目标角色的一张装备牌？", function(card2, player3, target2) {
          return _status.event.targets.includes(target2);
        }).set("targets", targets22).set("ai", function(target2) {
          var att = get.attitude(player2, target2), eff = 0;
          target2.getCards("e", function(card2) {
            var val = get.value(card2, target2);
            eff = Math.max(eff, -val * att);
          });
          return eff;
        }).forResult();
        if (result2.bool) {
          const target2 = result2.targets[0];
          player2.line(target2, "green");
          const card2 = target2.getDiscardableCards(player2, "e").randomGet();
          if (card2) {
            await target2.discard(card2);
          }
        }
      }
    },
    ai: {
      effect: {
        target(card2) {
          if (card2.name == "lebu" || card2.name == "bingliang") {
            return 0.5;
          }
        }
      },
      combo: "refenli"
    }
  },
  //典韦
  olqiangxi: {
    audio: "qiangxi",
    audioname: ["ol_dianwei", "boss_lvbu3"],
    enable: "phaseUse",
    usable: 2,
    filter(event2, player2) {
      if (player2.hp < 1 && !player2.hasCard((card2) => lib.skill.olqiangxi.filterCard(card2), "he")) {
        return false;
      }
      return game.hasPlayer((current) => lib.skill.olqiangxi.filterTarget(null, player2, current));
    },
    filterCard(card2) {
      return get.subtype(card2) == "equip1";
    },
    position: "he",
    filterTarget(card2, player2, target2) {
      if (target2 == player2) {
        return false;
      }
      var stat = player2.getStat()._olqiangxi;
      return !stat || !stat.includes(target2);
    },
    selectCard() {
      if (_status.event.player.hp < 1) {
        return 1;
      }
      return [0, 1];
    },
    content() {
      var stat = player.getStat();
      if (!stat._olqiangxi) {
        stat._olqiangxi = [];
      }
      stat._olqiangxi.push(target);
      if (!cards.length) {
        player.damage("nosource", "nocard");
      }
      target.damage("nocard");
    },
    ai: {
      damage: true,
      order: 8,
      result: {
        player(player2, target2) {
          if (ui.selected.cards.length) {
            return 0;
          }
          if (player2.hp >= target2.hp) {
            return -0.9;
          }
          if (player2.hp <= 2) {
            return -10;
          }
          return get.damageEffect(player2, player2, player2);
        },
        target(player2, target2) {
          if (!ui.selected.cards.length) {
            if (player2.hp < 2) {
              return 0;
            }
            if (player2.hp == 2 && target2.hp >= 2) {
              return 0;
            }
            if (target2.hp > player2.hp) {
              return 0;
            }
          }
          return get.damageEffect(target2, player2, target2);
        }
      },
      threaten: 1.5
    }
  },
  olninge: {
    audio: 2,
    trigger: { global: "damageEnd" },
    filter(event2, player2) {
      if (player2 != event2.player && player2 != event2.source) {
        return false;
      }
      return event2.player.getHistory("damage").indexOf(event2) == 1;
    },
    logTarget: "player",
    forced: true,
    content() {
      player.draw();
      player.discardPlayerCard(trigger.player, true, "ej");
    }
  },
  //群太史慈
  rejixu: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return player2.hp > 0 && player2.countCards("h") > 0;
    },
    filterTarget: lib.filter.notMe,
    selectTarget() {
      return [1, _status.event.player.hp];
    },
    multitarget: true,
    multiline: true,
    async content(event2, trigger2, player2) {
      const { targets: targets2 } = event2;
      if (!event2.caicuolist) {
        event2.caicuolist = [];
      }
      for (const target2 of targets2) {
        const result2 = await target2.chooseBool("是否押杀？").set("ai", function() {
          const evt = _status.event.getParent(), player3 = get.player();
          if (get.attitude(player3, evt.player) > 0) {
            return evt.player.countCards("h", "sha") ? false : true;
          }
          if (evt.player.hasKnownCards(target2, (c) => {
            return c.name == "sha";
          })) {
            return true;
          }
          return Math.random() < evt.player.countCards("h") / 4;
        }).forResult();
        if (!result2) {
          continue;
        }
        if (result2.bool) {
          target2.chat("有杀");
          game.log(target2, "认为", player2, "#g有杀");
          if (!player2.countCards("h", "sha")) {
            event2.caicuolist.add(target2);
          }
        } else {
          target2.chat("没杀");
          game.log(target2, "认为", player2, "#y没有杀");
          if (player2.countCards("h", "sha")) {
            event2.caicuolist.add(target2);
          }
        }
      }
      player2.popup(player2.countCards("h", "sha") ? "有杀" : "没杀");
      game.log(player2, player2.countCards("h", "sha") ? "有杀" : "没杀");
      if (event2.caicuolist.length > 0) {
        if (player2.countCards("h", "sha")) {
          player2.markAuto("rejixu_sha", event2.caicuolist);
          player2.addTempSkill("rejixu_sha", "phaseUseAfter");
        } else {
          for (const target2 of event2.caicuolist) {
            if (target2.countDiscardableCards(player2, "he") > 0) {
              player2.line(target2);
              await player2.discardPlayerCard(true, "he", target2);
            }
          }
        }
        await player2.draw(event2.caicuolist.length);
      }
    },
    ai: {
      order() {
        return get.order({ name: "sha" }) + 0.6;
      },
      result: {
        target(player2, target2) {
          if (player2.countCards("h", "sha")) {
            return get.effect(target2, { name: "sha" }, player2, target2);
          } else {
            return get.effect(target2, { name: "guohe_copy2" }, player2, target2);
          }
        }
      },
      expose: 0.4
    },
    subSkill: {
      sha: {
        audio: "rejixu",
        mod: {
          cardUsable(card2, player2, num2) {
            if (card2.name == "sha") {
              return num2 + player2.getStorage("rejixu_sha").length;
            }
          }
        },
        charlotte: true,
        onremove: true,
        trigger: { player: "useCard2" },
        filter(event2, player2) {
          if (event2.card.name != "sha") {
            return false;
          }
          for (var target2 of player2.getStorage("rejixu_sha")) {
            if (event2.targets.includes(target2) || !target2.isIn()) {
              return false;
            }
            if (lib.filter.targetEnabled2(event2.card, player2, target2)) {
              return true;
            }
          }
          return false;
        },
        prompt: "是否发动【击虚】？",
        prompt2(event2, player2) {
          var list = player2.getStorage("rejixu_sha").filter(function(target2) {
            if (event2.targets.includes(target2) || !target2.isIn()) {
              return false;
            }
            return lib.filter.targetEnabled2(event2.card, player2, target2);
          });
          return "令" + get.translation(list) + "也成为" + get.translation(event2.card) + "的目标";
        },
        logTarget(event2, player2) {
          return player2.getStorage("rejixu_sha").filter(function(target2) {
            if (event2.targets.includes(target2) || !target2.isIn()) {
              return false;
            }
            return lib.filter.targetEnabled2(event2.card, player2, target2);
          });
        },
        check(event2, player2) {
          var eff = 0;
          var list = player2.getStorage("rejixu_sha").filter(function(target2) {
            if (event2.targets.includes(target2) || !target2.isIn()) {
              return false;
            }
            return lib.filter.targetEnabled2(event2.card, player2, target2);
          });
          for (var i of list) {
            eff += get.effect(i, event2.card, player2, player2);
          }
          return eff > 0;
        },
        content() {
          var list = player.getStorage("rejixu_sha").filter(function(target2) {
            if (trigger.targets.includes(target2) || !target2.isIn()) {
              return false;
            }
            return lib.filter.targetEnabled2(trigger.card, player, target2);
          });
          if (list.length > 0) {
            trigger.targets.addArray(list);
            game.log(list, "也成为了", trigger.card, "的目标");
          }
        }
      }
    }
  },
  //界刘封
  rexiansi: {
    inherit: "xiansi",
    audio: "xiansi",
    audioname: ["re_liufeng"],
    group: ["rexiansi2", "xiansix"]
  },
  rexiansi2: {
    enable: "chooseToUse",
    sourceSkill: "rexiansi",
    filter(event2, player2) {
      return player2.getExpansions("xiansi").length > Math.max(0, player2.hp) && event2.filterCard({ name: "sha", isCard: true }, player2, event2);
    },
    chooseButton: {
      dialog(event2, player2) {
        return ui.create.dialog("陷嗣", player2.getExpansions("xiansi"), "hidden");
      },
      backup(links, player2) {
        return {
          viewAs: { name: "sha", isCard: true },
          filterCard: () => false,
          selectCard: -1,
          card: links[0],
          log: false,
          precontent() {
            player2.logSkill("rexiansi");
            player2.loseToDiscardpile(lib.skill.rexiansi2_backup.card);
          }
        };
      },
      prompt: () => "请选择【杀】的目标"
    },
    ai: {
      order() {
        return get.order({ name: "sha" }) + 0.6;
      },
      result: { player: 1 }
    }
  },
  //界荀彧
  oljieming: {
    audio: 2,
    trigger: { player: ["damageEnd", "die"] },
    forceDie: true,
    filter(event2, player2) {
      if (event2.name == "die") {
        return true;
      }
      return player2.isIn() && event2.num > 0;
    },
    getIndex(event2) {
      return event2.num || 1;
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), (card2, player3, target2) => {
        return target2.maxHp > 0;
      }).set("ai", (target2) => {
        const player3 = get.player();
        let att = get.attitude(player3, target2);
        let draw = Math.min(5, target2.maxHp) - target2.countCards("h");
        if (draw >= 0) {
          if (target2.hasSkillTag("nogain")) {
            att /= 6;
          }
          if (att > 2) {
            return Math.sqrt(draw + 1) * att;
          }
          return att / 3;
        }
        if (draw < -1) {
          if (target2.hasSkillTag("nogain")) {
            att *= 6;
          }
          if (att < -2) {
            return -Math.sqrt(1 - draw) * att;
          }
        }
        return 0;
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const {
        targets: [target2]
      } = event2;
      await target2.draw(Math.min(5, target2.maxHp));
      let num2 = target2.countCards("h") - Math.min(5, target2.maxHp);
      if (num2 > 0) {
        await target2.chooseToDiscard("h", true, num2, "allowChooseAll");
      }
    },
    ai: {
      expose: 0.2,
      maixie: true,
      maixie_hp: true,
      effect: {
        target(card2, player2, target2, current) {
          if (get.tag(card2, "damage") && target2.hp > 1) {
            if (player2.hasSkillTag("jueqing", false, target2)) {
              return [1, -2];
            }
            var max = 0;
            var players = game.filterPlayer();
            for (var i = 0; i < players.length; i++) {
              if (get.attitude(target2, players[i]) > 0) {
                max = Math.max(Math.min(5, players[i].hp) - players[i].countCards("h"), max);
              }
            }
            switch (max) {
              case 0:
                return 2;
              case 1:
                return 1.5;
              case 2:
                return [1, 2];
              default:
                return [0, max];
            }
          }
          if ((card2.name == "tao" || card2.name == "caoyao") && target2.hp > 1 && target2.countCards("h") <= target2.hp) {
            return [0, 0];
          }
        }
      }
    }
  },
  //OL华雄
  shizhan: {
    audio: 2,
    enable: "phaseUse",
    usable: 2,
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.canUse("juedou", player2);
    },
    content() {
      target.useCard({ name: "juedou", isCard: true }, player, "noai");
    },
    ai: {
      order: 2,
      result: {
        player(player2, target2) {
          return get.effect(player2, { name: "juedou", isCard: true }, target2, player2);
        }
      }
    }
  },
  //刘谌
  rezhanjue: {
    audio: 2,
    enable: "phaseUse",
    filterCard(card2) {
      return !card2.hasGaintag("reqinwang");
    },
    selectCard: -1,
    position: "h",
    filter(event2, player2) {
      var stat = player2.getStat().skill;
      if (stat.rezhanjue_draw && stat.rezhanjue_draw >= 3) {
        return false;
      }
      var hs = player2.getCards("h", function(card2) {
        return !card2.hasGaintag("reqinwang");
      });
      if (!hs.length) {
        return false;
      }
      for (var i = 0; i < hs.length; i++) {
        var mod2 = game.checkMod(hs[i], player2, "unchanged", "cardEnabled2", player2);
        if (mod2 === false) {
          return false;
        }
      }
      return event2.filterCard(get.autoViewAs({ name: "juedou" }, hs));
    },
    viewAs: { name: "juedou" },
    onuse(links, player2) {
      player2.addTempSkill("rezhanjue_effect", "phaseUseEnd");
    },
    ai: {
      order(item, player2) {
        if (player2.countCards("h") > 1) {
          return 0.8;
        }
        return 8;
      },
      tag: {
        respond: 2,
        respondSha: 2,
        damage: 1
      },
      result: {
        player(player2, target2) {
          let td = get.damageEffect(target2, player2, target2);
          if (!td) {
            return 0;
          }
          let hs = player2.getCards("h"), val = hs.reduce((acc, i) => acc - get.value(i, player2), 0) / 6 + 1;
          if (td > 0) {
            return val;
          }
          if (player2.hasSkillTag("directHit_ai", true, {
            target: target2,
            card: get.autoViewAs({ name: "juedou" }, hs)
          })) {
            return val;
          }
          let pd = get.damageEffect(player2, target2, player2), att = get.attitude(player2, target2);
          if (att > 0 && get.damageEffect(target2, player2, player2) > pd) {
            return val;
          }
          let ts = target2.mayHaveSha(player2, "respond", null, "count");
          if (ts < 1 && ts * 8 < Math.pow(player2.hp, 2)) {
            return val;
          }
          let damage = pd / get.attitude(player2, player2), ps = player2.mayHaveSha(player2, "respond", hs, "count");
          if (att > 0) {
            if (ts < 1) {
              return val;
            }
            return val + damage + 1;
          }
          if (pd >= 0) {
            return val + damage + 1;
          }
          if (ts - ps + Math.exp(0.8 - player2.hp) < 1) {
            return val - ts;
          }
          return val + damage + 1 - ts;
        },
        target(player2, target2) {
          let td = get.damageEffect(target2, player2, target2) / get.attitude(target2, target2);
          if (!td) {
            return 0;
          }
          let hs = player2.getCards("h");
          if (td > 0 || player2.hasSkillTag("directHit_ai", true, {
            target: target2,
            card: get.autoViewAs({ name: "juedou" }, hs)
          })) {
            return td + 1;
          }
          let pd = get.damageEffect(player2, target2, player2), att = get.attitude(player2, target2);
          if (att > 0) {
            return td + 1;
          }
          let ts = target2.mayHaveSha(player2, "respond", null, "count"), ps = player2.mayHaveSha(player2, "respond", hs, "count");
          if (ts < 1) {
            return td + 1;
          }
          if (pd >= 0) {
            return 0;
          }
          if (ts - ps < 1) {
            return td + 1 - ts;
          }
          return -ts;
        }
      },
      nokeep: true,
      skillTagFilter(player2, tag, arg) {
        if (tag === "nokeep") {
          return (!arg || arg.card && get.name(arg.card) === "tao") && player2.isPhaseUsing() && get.skillCount("rezhanjue_draw", player2) < 3 && player2.hasCard((card2) => {
            return get.name(card2) !== "tao" && !card2.hasGaintag("reqinwang");
          }, "h");
        }
      }
    }
  },
  rezhanjue_effect: {
    audio: false,
    trigger: { player: "useCardAfter" },
    forced: true,
    popup: false,
    charlotte: true,
    sourceSkill: "rezhanjue",
    onremove(player2) {
      delete player2.getStat().skill.rezhanjue_draw;
    },
    filter(event2, player2) {
      return event2.skill == "rezhanjue";
    },
    async content(event2, trigger2, player2) {
      let stat = player2.getStat().skill;
      if (!stat.rezhanjue_draw) {
        stat.rezhanjue_draw = 0;
      }
      stat.rezhanjue_draw++;
      await player2.draw("nodelay");
      const list = game.filterPlayer(function(current) {
        if (current.getHistory("damage", function(evt) {
          return evt.card == trigger2.card;
        }).length > 0) {
          if (current == player2) {
            stat.rezhanjue_draw++;
          }
          return true;
        }
        return false;
      });
      if (list.length) {
        list.sortBySeat();
        await game.asyncDraw(list);
      }
      game.delay();
    }
  },
  reqinwang: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    zhuSkill: true,
    filter(event2, player2) {
      if (!player2.hasZhuSkill("reqinwang")) {
        return false;
      }
      return game.hasPlayer(function(current) {
        return current != player2 && current.group == "shu" && player2.hasZhuSkill("reqinwang", current);
      });
    },
    selectTarget: -1,
    filterTarget(card2, player2, current) {
      return current != player2 && current.group == "shu" && player2.hasZhuSkill("reqinwang", current);
    },
    async content(event2, trigger2, player2) {
      const { target: target2 } = event2;
      if (target2.hasCard(function(card2) {
        return _status.connectMode || get.name(card2, target2) == "sha";
      }, "h")) {
        const result2 = await target2.chooseCard(
          "是否交给" + get.translation(player2) + "一张【杀】？",
          function(card2, player3) {
            return get.name(card2, player3) == "sha";
          },
          "h"
        ).set("goon", get.attitude(target2, player2) > 0).set("ai", function(card2) {
          return _status.event.goon ? 1 : 0;
        }).forResult();
        if (result2?.bool) {
          const card2 = result2.cards[0];
          await target2.give(card2, player2).set("gaintag", ["reqinwang"]);
          player2.addTempSkill("reqinwang_clear");
          const result22 = await player2.chooseBool("是否令" + get.translation(target2) + "摸一张牌？").forResult();
          if (result22?.bool) {
            await target2.draw();
          }
        }
      }
    },
    ai: {
      order: 5,
      result: { player: 1 }
    },
    subSkill: {
      clear: {
        charlotte: true,
        onremove(player2) {
          player2.removeGaintag("reqinwang");
        }
      }
    }
  },
  //公孙瓒
  dcqiaomeng: {
    audio: 2,
    trigger: { player: "useCardToPlayered" },
    filter(event2, player2) {
      if (!event2.isFirstTarget || get.color(event2.card) != "black") {
        return false;
      }
      for (var i of event2.targets) {
        if (i != player2 && i.hasCard(function(card2) {
          return lib.filter.canBeDiscarded(card2, player2, i);
        }, "he")) {
          return true;
        }
      }
      return false;
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt("dcqiaomeng"), "选择一名不为自己的目标角色，然后弃置其一张牌。若以此法弃置的牌为：装备牌，你获得此牌；锦囊牌，你令" + get.translation(trigger2.card) + "不可被响应。", function(card2, player3, target2) {
        return target2 != player3 && _status.event.getTrigger().targets.includes(target2) && target2.hasCard(function(card3) {
          return lib.filter.canBeDiscarded(card3, player3, target2);
        }, "he");
      }).set("ai", function(target2) {
        const player3 = _status.event.player;
        return get.effect(target2, { name: "guohe_copy2" }, player3, player3);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const {
        targets: [target2]
      } = event2;
      const result2 = await player2.discardPlayerCard(target2, true, "he").forResult();
      if (result2?.bool && result2.cards?.length) {
        const card2 = result2.cards[0], type = get.type2(card2, false);
        if (type == "trick") {
          trigger2.directHit.addArray(game.filterPlayer((current) => current != player2));
        }
        if (type == "equip" && get.position(card2, true) == "d") {
          await player2.gain(card2, "gain2");
        }
      }
    }
  },
  //杜畿
  reandong: {
    audio: 2,
    trigger: { player: "damageBegin2" },
    filter(event2, player2) {
      return event2.source && event2.source.isIn();
    },
    logTarget: "source",
    async content(event2, trigger2, player2) {
      const target2 = trigger2.source, bool = player2.storage.reandong;
      let str = get.translation(player2), result2;
      if (bool) {
        str = "自己";
      }
      let choiceList = ["防止" + str + "即将受到的伤害，且本回合内红桃牌不计入" + (bool ? get.translation(target2) : "自己") + "的手牌上限。"];
      if (!target2.countCards("h")) {
        choiceList.push("令" + str + "下次发动〖安东〗时改为自行选择");
      } else {
        choiceList.push("令" + str + "观看你的手牌并获得所有红桃牌");
      }
      if (bool) {
        delete player2.storage.reandong;
        result2 = await player2.chooseControl().set("choiceList", choiceList).set("prompt", "安东：请选择一项").forResult();
      } else {
        result2 = await target2.chooseControl().set("choiceList", choiceList).set("prompt", "安东：请选择一项").set("ai", function(event3, player3) {
          var target3 = _status.event.getParent().player;
          var player3 = _status.event.player;
          if (get.attitude(player3, target3) > 0) {
            return 0;
          }
          return 1;
        }).forResult();
      }
      if (result2?.index == 0) {
        target2.addTempSkill("reandong_ignore");
        trigger2.cancel();
        await game.delayx();
      } else {
        if (!target2.countCards("h")) {
          player2.storage.reandong = true;
          await game.delayx();
        } else {
          await player2.viewHandcards(target2);
          const cards2 = target2.getCards("h", function(card2) {
            return get.suit(card2, target2) == "heart";
          });
          if (cards2.length > 0) {
            await player2.gain(cards2, target2, "give", "bySelf");
          }
        }
      }
    },
    ai: {
      maixie: true,
      effect: {
        target(card2, player2, target2) {
          if (player2.hasSkillTag("jueqing", false, target2)) {
            return [1, -1];
          }
          if (get.tag(card2, "damage") && player2 != target2 && get.attitude(player2, target2) < 0) {
            var cards2 = player2.getCards("h", function(cardx) {
              return card2 != cardx && (!card2.cards || !card2.cards.includes(cardx)) && get.suit(cardx) == "heart";
            });
            if (!cards2.length) {
              return;
            }
            for (var i of cards2) {
              if (get.name(i, target2) == "tao") {
                return "zeroplayertarget";
              }
            }
            if (get.value(cards2, target2) >= 6 + target2.getDamagedHp()) {
              return "zeroplayertarget";
            }
            return [1, 0.6];
          }
        }
      }
    },
    subSkill: {
      ignore: {
        mod: {
          ignoredHandcard(card2, player2) {
            if (get.suit(card2) == "heart") {
              return true;
            }
          },
          cardDiscardable(card2, player2, name2) {
            if (name2 == "phaseDiscard" && get.suit(card2) == "heart") {
              return false;
            }
          }
        },
        charlotte: true,
        marktext: "♥",
        intro: "红桃牌于本回合内不计入手牌上限"
      }
    }
  },
  reyingshi: {
    audio: 2,
    trigger: { player: "phaseUseBegin" },
    direct: true,
    filter(event2, player2) {
      return player2.countCards("h") > 0 && game.countPlayer() > 1;
    },
    async content(event2, trigger2, player2) {
      const result2 = await player2.chooseCardTarget({
        prompt: get.prompt("reyingshi"),
        prompt2: "操作提示：选择一张作为赏金的手牌，然后选择作为赏金猎人的角色A和作为出杀目标的其他角色B",
        filterCard: true,
        selectTarget: 2,
        position: "h",
        filterTarget(card2, player3, target2) {
          if (!ui.selected.targets.length) {
            return true;
          }
          return target2 != player3;
        },
        complexTarget: true,
        targetprompt: ["出杀", "被杀"],
        complexSelect: true,
        ai1(card2) {
          return 1 / Math.max(1, get.value(card2));
        },
        ai2(target2) {
          var player3 = _status.event.player;
          if (!ui.selected.targets.length) {
            var att = get.attitude(player3, target2);
            if (att < 0) {
              return 0;
            }
            if (target2.hasSha()) {
              return Math.pow(target2.countCards("h") + 1, 1.1) * (player3 == target2 ? 3 : 1);
            }
            return Math.sqrt(1 + target2.countCards("h"));
          }
          return get.effect(target2, { name: "sha" }, ui.selected.targets[0], player3);
        }
      }).forResult();
      if (result2?.bool) {
        const targets2 = result2.targets;
        player2.logSkill("reyingshi", targets2[1]);
        const card2 = result2.cards[0];
        player2.showCards(card2, get.translation(player2) + "对" + get.translation(targets2[1]) + "发动了【应势】");
        player2.line(targets2[0], "fire");
        const next = targets2[0].chooseToUse(
          function(card3, player3, event3) {
            if (get.name(card3) != "sha") {
              return false;
            }
            return lib.filter.cardEnabled.apply(this, arguments) && lib.filter.targetEnabled(card3, player3, (event3 || _status.event).sourcex);
          },
          "###是否对" + get.translation(targets2[1]) + "使用一张【杀】？###若选择使用，则获得赏金（" + get.translation(card2) + "）。若造成伤害，则再从牌堆中获得与此牌花色点数相同的牌作为额外赏金。"
        );
        next.set("addCount", false);
        next.set("complexSelect", true);
        next.set("filterTarget", function(card3, player3, target3) {
          if (target3 != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) {
            return false;
          }
          return lib.filter.targetEnabled.apply(this, arguments);
        });
        next.set("sourcex", targets2[1]);
        const result22 = await next.forResult();
        const target2 = targets2[0];
        if (result22?.bool && target2.isIn()) {
          let cards2 = [], slice = 0;
          if (player2 != target2 && player2.getCards("h").includes(card2)) {
            cards2.push(card2);
            slice++;
          }
          if (target2.hasHistory("useCard", function(evt) {
            if (evt.getParent(2) != event2) {
              return false;
            }
            return target2.hasHistory("sourceDamage", function(evtx) {
              return evtx.card == evt.card;
            });
          })) {
            const suit = get.suit(card2), number = get.number(card2);
            cards2.addArray(
              Array.from(ui.cardPile.childNodes).filter((cardx) => {
                if (cardx.suit == suit && cardx.number == number) {
                  return true;
                }
              })
            );
            if (cards2.length > 0) {
              if (!slice) {
                await target2.gain(cards2, "gain2");
              } else {
                setTimeout(
                  function() {
                    target2.$gain2(cards2.slice(slice), true);
                  },
                  get.delayx(200, 200)
                );
                await target2.gain(cards2, player2, "give");
              }
            }
          } else {
            if (cards2.length > 0) {
              await target2.gain(cards2, player2, "give");
            }
          }
        }
      }
    }
  },
  //十周年沮授
  dcshibei: {
    trigger: { player: "damageEnd" },
    forced: true,
    audio: 2,
    check(event2, player2) {
      return player2.getHistory("damage").indexOf(event2) == 0;
    },
    filter(event2, player2) {
      var index = player2.getHistory("damage").indexOf(event2);
      return index == 0 || index == 1;
    },
    content() {
      if (player.getHistory("damage").indexOf(trigger) > 0) {
        player.loseHp();
      } else {
        player.recover();
      }
    },
    subSkill: {
      damaged: {},
      ai: {}
    },
    ai: {
      maixie_defend: true,
      threaten: 0.9,
      effect: {
        target(card2, player2, target2) {
          if (player2.hasSkillTag("jueqing", false, target2)) {
            return;
          }
          if (target2.hujia) {
            return;
          }
          if (player2._shibei_tmp) {
            return;
          }
          if (target2.hasSkill("shibei_ai")) {
            return;
          }
          if (_status.event.getParent("useCard", true) || _status.event.getParent("_wuxie", true)) {
            return;
          }
          if (get.tag(card2, "damage")) {
            if (target2.getHistory("damage").length > 0) {
              return [1, -2];
            } else {
              if (get.attitude(player2, target2) > 0 && target2.hp > 1) {
                return 0;
              }
              if (get.attitude(player2, target2) < 0 && !player2.hasSkillTag("damageBonus", "e", {
                target: target2,
                card: card2
              })) {
                if (card2.name == "sha") {
                  return;
                }
                var sha = false;
                player2._shibei_tmp = true;
                var num2 = player2.countCards("h", function(card3) {
                  if (card3.name == "sha") {
                    if (sha) {
                      return false;
                    } else {
                      sha = true;
                    }
                  }
                  return get.tag(card3, "damage") && player2.canUse(card3, target2) && get.effect(target2, card3, player2, player2) > 0;
                });
                delete player2._shibei_tmp;
                if (player2.hasSkillTag("damage")) {
                  num2++;
                }
                if (num2 < 2) {
                  var enemies = player2.getEnemies();
                  if (enemies.length == 1 && enemies[0] == target2 && player2.needsToDiscard()) {
                    return;
                  }
                  return 0;
                }
              }
            }
          }
        }
      }
    }
  },
  dcjianying: {
    audio: 2,
    locked: false,
    mod: {
      aiOrder(player2, card2, num2) {
        if (typeof card2 == "object" && player2.isPhaseUsing()) {
          var evt = lib.skill.dcjianying.getLastUsed(player2);
          if (evt && evt.card && (get.suit(evt.card) && get.suit(evt.card) == get.suit(card2) || evt.card.number && evt.card.number == get.number(card2))) {
            return num2 + 10;
          }
        }
      }
    },
    trigger: { player: "useCard" },
    frequent: true,
    getLastUsed(player2, event2) {
      var history = player2.getAllHistory("useCard");
      var index;
      if (event2) {
        index = history.indexOf(event2) - 1;
      } else {
        index = history.length - 1;
      }
      if (index >= 0) {
        return history[index];
      }
      return false;
    },
    filter(event2, player2) {
      var evt = lib.skill.dcjianying.getLastUsed(player2, event2);
      if (!evt || !evt.card) {
        return false;
      }
      return lib.suit.includes(get.suit(evt.card)) && get.suit(evt.card) == get.suit(event2.card) || typeof get.number(evt.card, false) == "number" && get.number(evt.card, false) == get.number(event2.card);
    },
    content() {
      player.draw("nodelay");
    },
    group: "dcjianying_mark",
    init(player2) {
      var history = player2.getAllHistory("useCard");
      if (history.length) {
        var trigger2 = history[history.length - 1];
        if (get.suit(trigger2.card, player2) == "none" || typeof get.number(trigger2.card, player2) != "number") {
          return;
        }
        player2.storage.dcjianying_mark = trigger2.card;
        player2.markSkill("dcjianying_mark");
        game.broadcastAll(
          function(player3, suit) {
            if (player3.marks.dcjianying_mark) {
              player3.marks.dcjianying_mark.firstChild.innerHTML = get.translation(suit);
            }
          },
          player2,
          get.suit(trigger2.card, player2)
        );
      }
    },
    onremove(player2) {
      player2.unmarkSkill("dcjianying_mark");
      delete player2.storage.dcjianying_mark;
    },
    subSkill: {
      mark: {
        charlotte: true,
        trigger: { player: "useCard1" },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
          if (get.suit(trigger.card, player) == "none" || typeof get.number(trigger.card, player) != "number") {
            player.unmarkSkill("dcjianying_mark");
          } else {
            player.storage.dcjianying_mark = trigger.card;
            player.markSkill("dcjianying_mark");
            game.broadcastAll(
              function(player2, suit) {
                if (player2.marks.dcjianying_mark) {
                  player2.marks.dcjianying_mark.firstChild.innerHTML = get.translation(suit);
                }
              },
              player,
              get.suit(trigger.card, player)
            );
          }
        },
        intro: {
          markcount(card2, player2) {
            return get.strNumber(get.number(card2, player2));
          },
          content(card2, player2) {
            var suit = get.suit(card2, player2);
            var num2 = get.number(card2, player2);
            var str = "<li>上一张牌的花色：" + get.translation(suit);
            str += "<br><li>上一张牌的点数：" + get.strNumber(num2);
            return str;
          }
        }
      }
    }
  },
  //十周年步练师
  dcanxu: {
    enable: "phaseUse",
    usable: 1,
    multitarget: true,
    audio: 2,
    filterTarget(card2, player2, target2) {
      if (player2 == target2) {
        return false;
      }
      var num2 = target2.countCards("h");
      if (ui.selected.targets.length) {
        return num2 < ui.selected.targets[0].countCards("h");
      }
      var players = game.filterPlayer();
      for (var i = 0; i < players.length; i++) {
        if (num2 > players[i].countCards("h")) {
          return true;
        }
      }
      return false;
    },
    selectTarget: 2,
    async content(event2, trigger2, player2) {
      let gainner, giver;
      const { targets: targets2 } = event2;
      if (targets2[0].countCards("h") < targets2[1].countCards("h")) {
        gainner = targets2[0];
        giver = targets2[1];
      } else {
        gainner = targets2[1];
        giver = targets2[0];
      }
      const result2 = await gainner.gainPlayerCard(giver, true, "h", "visibleMove").forResult();
      if (result2?.cards?.length) {
        const card2 = result2.cards[0];
        if (gainner.getCards("h").includes(card2) && get.suit(card2, gainner) != "spade") {
          await player2.draw();
        }
      }
      if (gainner.countCards("h") == giver.countCards("h")) {
        await player2.recover();
      }
    },
    ai: {
      order: 10.5,
      threaten: 2.3,
      result: {
        target(player2, target2) {
          var num2 = target2.countCards("h");
          var att = get.attitude(player2, target2);
          if (ui.selected.targets.length == 0) {
            if (att > 0) {
              return -1;
            }
            var players = game.filterPlayer();
            for (var i = 0; i < players.length; i++) {
              var num22 = players[i].countCards("h");
              var att2 = get.attitude(player2, players[i]);
              if (num22 < num2) {
                if (att2 > 0) {
                  return -3;
                }
                return -1;
              }
            }
            return 0;
          } else {
            return 1;
          }
        },
        player: 1
      }
    }
  },
  dczhuiyi: {
    audio: 2,
    trigger: { player: "die" },
    skillAnimation: true,
    animationColor: "wood",
    forceDie: true,
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2("dczhuiyi"), function(card2, player3, target2) {
        return player3 != target2 && _status.event.sourcex != target2;
      }).set("forceDie", true).set("ai", function(target2) {
        var num2 = get.attitude(_status.event.player, target2);
        if (num2 > 0) {
          if (target2.hp == 1) {
            num2 += 2;
          }
          if (target2.hp < target2.maxHp) {
            num2 += 2;
          }
        }
        return num2;
      }).set("sourcex", trigger2.source).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      await target2.recover();
      await target2.draw(game.countPlayer());
    },
    ai: {
      expose: 0.5
    }
  },
  //OL界蔡文姬
  olbeige: {
    audio: "beige",
    audioname: ["ol_caiwenji"],
    trigger: { global: "damageEnd" },
    logTarget: "player",
    filter(event2, player2) {
      return event2.card && event2.card.name == "sha" && event2.player.isIn() && player2.countCards("he") > 0;
    },
    check(event2, player2) {
      let att = get.attitude(player2, event2.player);
      if (event2.player.hasSkill("xinleiji")) {
        return att > 0;
      }
      if (att > 0 || event2.player.isHealthy()) {
        return true;
      }
      if (!event2.source) {
        return true;
      }
      att = get.attitude(player2, event2.source);
      return att <= 0 || event2.source.isTurnedOver();
    },
    prompt2: "令其进行判定，然后你可根据判定结果，弃置一张牌并令其执行对应效果。",
    content() {
      "step 0";
      event.target = trigger.player;
      event.source = trigger.source;
      trigger.player.judge();
      event.judgeResult = get.copy(result);
      var str = "是否弃置一张牌", strt = get.translation(target), strs = get.translation(source), goon = 0;
      switch (result.suit) {
        case "heart":
          if (target.isIn() && target.isDamaged()) {
            str += "，令" + strt + "回复1点体力";
            goon = get.recoverEffect(target, player, player);
          }
          break;
        case "diamond":
          if (target.isIn()) {
            str += "，令" + strt + "摸两张牌";
            goon = 2 * get.effect(target, { name: "draw" }, player, player);
          }
          break;
        case "spade":
          if (source && source.isIn()) {
            str += "，令" + strs + "翻" + (source.isTurnedOver() ? "回正" : "") + "面";
            goon = get.attitude(player, source) * (source.isTurnedOver() ? 2 : -2);
          }
          break;
        case "club":
          if (source && source.isIn()) {
            str += "，令" + strs + "弃置两张牌";
            var cards2 = source.getCards("he").sort(function(a, b) {
              return get.value(a, source) - get.value(b, source);
            }).slice(0, 2);
            for (var i of cards2) {
              goon += get.value(i, source);
            }
            goon *= -get.sgn(get.attitude(player, source));
          }
          break;
      }
      str += "？";
      var str2 = "若弃置点数为" + get.strNumber(result.number) + "的牌则收回自己弃置的牌";
      if (get.position(result.card, true) == "d") {
        str2 += "；若弃置花色为" + get.translation(result.suit) + "的牌则获得" + get.translation(result.card);
      }
      player.chooseToDiscard("he", str, str2).set("goon", goon).set("ai", function(card2) {
        var goon2 = _status.event.goon;
        var player2 = _status.event.player;
        var result2 = _status.event.getParent().judgeResult;
        var eff = Math.min(7, goon2);
        if (eff <= 0) {
          return 0;
        }
        if (get.suit(card2, player2) == result2.suit) {
          eff += get.value(result2.card, player2);
        }
        if (get.number(card2, player2) == result2.number) {
          return eff;
        }
        return eff - get.value(card2);
      });
      if (result.bool) {
        event.card = result.cards[0];
        switch (event.judgeResult.suit) {
          case "heart":
            if (target.isIn() && target.isDamaged()) {
              target.recover();
            }
            break;
          case "diamond":
            if (target.isIn()) {
              target.draw(2);
            }
            break;
          case "spade":
            if (source && source.isIn()) {
              source.turnOver();
            }
            player.addExpose(0.1);
            break;
          case "club":
            if (source && source.isIn() && source.countCards("he") > 0) {
              source.chooseToDiscard(2, "he", true);
            }
            player.addExpose(0.1);
            break;
        }
      } else {
        event.finish();
      }
      var gains = [];
      if (get.position(event.judgeResult.card, true) == "d" && get.suit(card, player) == event.judgeResult.suit) {
        gains.push(event.judgeResult.card);
      }
      if (get.position(card, true) == "d" && get.number(card, player) == event.judgeResult.number) {
        gains.push(card);
      }
      if (gains.length) {
        player.gain(gains, "gain2");
      }
    }
  },
  //OL界张郃
  reqiaobian: {
    audio: 2,
    trigger: {
      global: "phaseBefore",
      player: "enterGame"
    },
    forced: true,
    locked: false,
    filter(event2, player2) {
      return event2.name != "phase" || game.phaseNumber == 0;
    },
    content() {
      player.addMark("reqiaobian", 2);
      game.delayx();
    },
    marktext: "变",
    intro: {
      name2: "变",
      content(storage, player2) {
        var str = "共有" + (storage || 0) + "个标记";
        if (player2.storage.reqiaobian_jieshu) {
          str = "<li>" + str + "<br><li>已记录手牌数：" + get.translation(player2.storage.reqiaobian_jieshu);
        }
        return str;
      }
    },
    group: ["reqiaobian_judge", "reqiaobian_draw", "reqiaobian_use", "reqiaobian_discard", "reqiaobian_jieshu"],
    subSkill: {
      judge: {
        audio: "reqiaobian",
        trigger: { player: "phaseJudgeBefore" },
        direct: true,
        filter(event2, player2) {
          return player2.hasMark("reqiaobian") || player2.hasCard((card2) => lib.filter.cardDiscardable(card2, player2, "reqiaobian_judge"), "he");
        },
        check(event2, player2) {
          return player2.hasCard(function(card2) {
            return get.effect(
              player2,
              {
                name: card2.viewAs || card2.name,
                cards: [card2]
              },
              player2,
              player2
            ) < 0;
          }, "j");
        },
        content() {
          "step 0";
          var choices = [];
          if (player.hasMark("reqiaobian")) {
            choices.push("弃置标记");
          }
          if (player.hasCard((card2) => lib.filter.cardDiscardable(card2, player, "reqiaobian_judge"), "he")) {
            choices.push("弃置牌");
          }
          choices.push("cancel2");
          player.chooseControl(choices).set("prompt", "巧变：是否跳过判定阶段？").set("ai", function() {
            var evt = _status.event;
            if (lib.skill[evt.getParent().name].check(evt.getTrigger(), evt.player)) {
              return 0;
            }
            return "cancel2";
          });
          if (result.control != "cancel2") {
            if (result.control == "弃置牌") {
              player.chooseToDiscard("he", true).logSkill = event.name;
            } else {
              player.logSkill(event.name);
              player.removeMark("reqiaobian", 1);
            }
          } else {
            event.finish();
          }
          trigger.cancel();
        }
      },
      draw: {
        audio: "reqiaobian",
        trigger: { player: "phaseDrawBefore" },
        direct: true,
        filter(event2, player2) {
          return player2.hasMark("reqiaobian") || player2.hasCard((card2) => lib.filter.cardDiscardable(card2, player2, "reqiaobian_judge"), "he");
        },
        check(event2, player2) {
          return game.countPlayer(function(current) {
            if (current == player2 || current.countGainableCards(player2, "h") == 0) {
              return false;
            }
            var att = get.attitude(player2, current);
            if (current.hasSkill("tuntian")) {
              return att > 0;
            }
            return att < 1;
          }) > 1;
        },
        content() {
          "step 0";
          var choices = [];
          if (player.hasMark("reqiaobian")) {
            choices.push("弃置标记");
          }
          if (player.hasCard((card2) => lib.filter.cardDiscardable(card2, player, "reqiaobian_draw"), "he")) {
            choices.push("弃置牌");
          }
          choices.push("cancel2");
          player.chooseControl(choices).set("prompt", "巧变：是否跳过摸牌阶段？").set("ai", function() {
            var evt = _status.event;
            if (lib.skill[evt.getParent().name].check(evt.getTrigger(), evt.player)) {
              return 0;
            }
            return "cancel2";
          });
          if (result.control != "cancel2") {
            if (result.control == "弃置牌") {
              player.chooseToDiscard("he", true).logSkill = event.name;
            } else {
              player.logSkill(event.name);
              player.removeMark("reqiaobian", 1);
            }
          } else {
            event.finish();
          }
          trigger.cancel();
          if (game.hasPlayer((current) => current.countGainableCards(player, "h") > 0)) {
            player.chooseTarget("是否获得至多两名其他角色的各一张手牌？", [1, 2], function(card2, player2, target2) {
              return target2 != player2 && target2.countGainableCards(player2, "h") > 0;
            }).set("ai", function(target2) {
              var att = get.attitude(_status.event.player, target2);
              if (target2.hasSkill("tuntian")) {
                return att / 10;
              }
              return 1 - att;
            });
          } else {
            event.finish();
          }
          if (result.bool) {
            var targets2 = result.targets.sortBySeat();
            player.line(targets2, "green");
            player.gainMultiple(targets2);
          }
        }
      },
      use: {
        audio: "reqiaobian",
        trigger: { player: "phaseUseBefore" },
        direct: true,
        filter(event2, player2) {
          return player2.hasMark("reqiaobian") || player2.hasCard((card2) => lib.filter.cardDiscardable(card2, player2, "reqiaobian_judge"), "he");
        },
        check(event2, player2) {
          if (player2.countCards("h", function(card2) {
            return player2.hasValueTarget(card2, null, true);
          }) > 1) {
            return false;
          }
          return game.hasPlayer(function(current) {
            var att = get.sgn(get.attitude(player2, current));
            if (att != 0) {
              var es = current.getCards("e");
              for (var i = 0; i < es.length; i++) {
                if (game.hasPlayer(function(current2) {
                  if (get.sgn(get.value(es[i], current)) != -att || get.value(es[i], current) < 5) {
                    return false;
                  }
                  var att2 = get.sgn(get.attitude(player2, current2));
                  if (att == att2 || att2 != get.sgn(get.effect(current2, es[i], player2, current2))) {
                    return false;
                  }
                  return current != current2 && !current2.isMin() && current2.canEquip(es[i]);
                })) {
                  return true;
                }
              }
            }
            if (att > 0) {
              var js = current.getCards("j", function(card2) {
                return get.effect(
                  current,
                  {
                    name: card2.viewAs || card2.name,
                    cards: [card2]
                  },
                  current,
                  current
                ) < -2;
              });
              for (var i = 0; i < js.length; i++) {
                if (game.hasPlayer(function(current2) {
                  var att2 = get.attitude(player2, current2);
                  if (att2 >= 0) {
                    return false;
                  }
                  return current != current2 && current2.canAddJudge(js[i]);
                })) {
                  return true;
                }
              }
            }
          });
        },
        content() {
          "step 0";
          var choices = [];
          if (player.hasMark("reqiaobian")) {
            choices.push("弃置标记");
          }
          if (player.hasCard((card2) => lib.filter.cardDiscardable(card2, player, "reqiaobian_use"), "he")) {
            choices.push("弃置牌");
          }
          choices.push("cancel2");
          player.chooseControl(choices).set("prompt", "巧变：是否跳过出牌阶段？").set("ai", function() {
            var evt = _status.event;
            if (lib.skill[evt.getParent().name].check(evt.getTrigger(), evt.player)) {
              return 0;
            }
            return "cancel2";
          });
          if (result.control != "cancel2") {
            if (result.control == "弃置牌") {
              player.chooseToDiscard("he", true).logSkill = event.name;
            } else {
              player.logSkill(event.name);
              player.removeMark("reqiaobian", 1);
            }
          } else {
            event.finish();
          }
          trigger.cancel();
          player.moveCard();
        }
      },
      discard: {
        audio: "reqiaobian",
        trigger: { player: "phaseDiscardBefore" },
        direct: true,
        filter(event2, player2) {
          return player2.hasMark("reqiaobian") || player2.hasCard((card2) => lib.filter.cardDiscardable(card2, player2, "reqiaobian_judge"), "he");
        },
        check(event2, player2) {
          return player2.needsToDiscard();
        },
        content() {
          "step 0";
          var choices = [];
          if (player.hasMark("reqiaobian")) {
            choices.push("弃置标记");
          }
          if (player.hasCard((card2) => lib.filter.cardDiscardable(card2, player, "reqiaobian_discard"), "he")) {
            choices.push("弃置牌");
          }
          choices.push("cancel2");
          player.chooseControl(choices).set("prompt", "巧变：是否跳过弃牌阶段？").set("ai", function() {
            var evt = _status.event;
            if (lib.skill[evt.getParent().name].check(evt.getTrigger(), evt.player)) {
              return 0;
            }
            return "cancel2";
          });
          if (result.control != "cancel2") {
            if (result.control == "弃置牌") {
              player.chooseToDiscard("he", true).logSkill = event.name;
            } else {
              player.logSkill(event.name);
              player.removeMark("reqiaobian", 1);
            }
          } else {
            event.finish();
          }
          trigger.cancel();
        }
      },
      jieshu: {
        audio: "reqiaobian",
        trigger: { player: "phaseJieshuBegin" },
        forced: true,
        filter(event2, player2) {
          return !player2.getStorage("reqiaobian_jieshu").includes(player2.countCards("h"));
        },
        content() {
          player.addMark("reqiaobian", 1);
          player.markAuto("reqiaobian_jieshu", [player.countCards("h")]);
          player.storage.reqiaobian_jieshu.sort();
        }
      }
    }
  },
  //十周年徐庶
  rezhuhai: {
    audio: 2,
    trigger: { global: "phaseJieshuBegin" },
    direct: true,
    filter(event2, player2) {
      return player2 != event2.player && event2.player.getHistory("sourceDamage").length > 0 && event2.player.isIn() && (player2.countCards("h") > 0 || player2.canUse("guohe", event2.player));
    },
    content() {
      "step 0";
      var target2 = trigger.player;
      var choiceList = ["将一张手牌当做【杀】对其使用", "视为对其使用一张【过河拆桥】"];
      var bool = false, hs = player.getCards("h");
      for (var i of hs) {
        if (game.checkMod(i, player, "unchanged", "cardEnabled2", player) !== false && player.canUse(get.autoViewAs({ name: "sha" }, [i]), target2, false)) {
          bool = true;
          break;
        }
      }
      var choices = [];
      if (bool) {
        choices.push("选项一");
      } else {
        choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
      }
      if (player.canUse("guohe", target2)) {
        choices.push("选项二");
      } else {
        choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
      }
      choices.push("cancel2");
      player.chooseControl(choices).set("choiceList", choiceList).set("prompt", get.prompt("rezhuhai", target2)).set("ai", function() {
        var choices2 = _status.event.controls;
        var eff1 = 0, eff2 = 0;
        var player2 = _status.event.player, target3 = _status.event.getTrigger().player;
        if (choices2.includes("选项一")) {
          eff1 = get.effect(target3, { name: "sha" }, player2, player2);
        }
        if (choices2.includes("选项二")) {
          eff2 = get.effect(target3, { name: "guohe" }, player2, player2);
        }
        if (eff1 > 0 && (player2.hasSkill("xsqianxin") && player2.isDamaged() || eff1 > eff2)) {
          return "选项一";
        }
        if (eff2 > 0) {
          return "选项二";
        }
        return "cancel2";
      });
      if (result.control != "cancel2") {
        if (result.control == "选项一") {
          player.chooseCard(
            "h",
            true,
            function(card2, player2) {
              if (!game.checkMod(card2, player2, "unchanged", "cardEnabled2", player2)) {
                return false;
              }
              return player2.canUse(get.autoViewAs({ name: "sha" }, [card2]), _status.event.getTrigger().player, false);
            },
            "选择一张手牌当做【杀】对" + get.translation(trigger.player) + "使用"
          ).set("ai", function(card2) {
            var player2 = _status.event.player;
            return get.effect(_status.event.getTrigger().player, get.autoViewAs({ name: "sha" }, [card2]), player2, player2) / Math.max(1, get.value(card2));
          });
        } else {
          player.useCard({ name: "guohe", isCard: true }, trigger.player, "rezhuhai");
          event.finish();
        }
      } else {
        event.finish();
      }
      if (result.bool) {
        player.useCard({ name: "sha" }, result.cards, "rezhuhai", trigger.player, false);
      }
    }
  },
  xsqianxin: {
    audio: 2,
    trigger: { source: "damageSource" },
    juexingji: true,
    forced: true,
    skillAnimation: true,
    animationColor: "orange",
    filter(event2, player2) {
      return player2.isDamaged();
    },
    content() {
      player.awakenSkill(event.name);
      player.loseMaxHp();
      player.addSkills("rejianyan");
    },
    derivation: "rejianyan"
  },
  rejianyan: {
    audio: 2,
    enable: "phaseUse",
    usable: 2,
    filter(event2, player2) {
      return game.hasPlayer((current) => current.group == "key" || current.hasSex("male"));
    },
    chooseButton: {
      dialog() {
        return ui.create.dialog("###荐言###" + get.translation("rejianyan_info"));
      },
      chooseControl(event2, player2) {
        const list = [], storage = player2.getStorage("rejianyan_used");
        if (!storage.includes("color")) {
          list.addArray(["red", "black"]);
        }
        if (!storage.includes("type")) {
          list.addArray(["basic", "trick", "equip"]);
        }
        list.push("cancel2");
        return list;
      },
      check() {
        if (!_status.event.player.getStorage("rejianyan_used").includes("color")) {
          return "red";
        }
        return "trick";
      },
      backup(result2, player2) {
        return {
          audio: "rejianyan",
          filterCard: () => false,
          selectCard: -1,
          info: result2.control,
          content() {
            "step 0";
            let card2 = false, info = lib.skill.rejianyan_backup.info;
            player2.addTempSkill("rejianyan_used", "phaseUseEnd");
            if (info == "red" || info == "black") {
              player2.markAuto("rejianyan_used", "color");
              card2 = get.cardPile2(function(card3) {
                return get.color(card3) == info;
              }, "top");
            } else {
              player2.markAuto("rejianyan_used", "type");
              card2 = get.cardPile2(function(card3) {
                return get.type(card3) == info;
              }, "top");
            }
            if (card2) {
              event.card = card2;
              player2.showCards(card2, get.translation(player2) + "发动了【荐言】");
            } else {
              event.finish();
            }
            player2.chooseTarget(true, "选择一名角色获得" + get.translation(card2), function(card3, player3, target3) {
              return target3.group == "key" || target3.hasSex("male");
            }).set("ai", function(target3) {
              var player3 = _status.event.player, att = get.attitude(player3, target3);
              if (target3.hasSkill("nogain")) {
                att /= 10;
              }
              return att / Math.sqrt(get.distance(player3, target3, "absolute"));
            });
            if (result2.bool) {
              var target2 = result2.targets[0];
              player2.line(target2, "green");
              target2.gain(card2, "gain2");
            }
          },
          ai: { result: { player: 1 } }
        };
      }
    },
    ai: {
      order: 8,
      result: {
        player(player2, target2) {
          if (game.hasPlayer((current) => (current.group == "key" || current.hasSex("male")) && get.attitude(player2, current) > 0)) {
            return 1;
          }
          return 0;
        }
      }
    },
    subSkill: { used: { charlotte: true, onremove: true }, backup: {} }
  },
  //野兽高顺
  decadexianzhen: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filterTarget(card2, player2, target2) {
      return player2.canCompare(target2);
    },
    filter(event2, player2) {
      return player2.countCards("h") > 0 && !player2.hasSkill("decadexianzhen2") && !player2.hasSkill("decadexianzhen3");
    },
    content() {
      "step 0";
      player.chooseToCompare(target);
      if (result.bool) {
        player.storage.decadexianzhen2 = target;
        player.addTempSkill("decadexianzhen2");
      } else {
        player.addTempSkill("decadexianzhen3");
      }
    },
    ai: {
      order(name2, player2) {
        var cards2 = player2.getCards("h");
        if (player2.countCards("h", "sha") == 0) {
          return 1;
        }
        for (var i = 0; i < cards2.length; i++) {
          if (cards2[i].name != "sha" && get.number(cards2[i]) > 11 && get.value(cards2[i]) < 7) {
            return 9;
          }
        }
        return get.order({ name: "sha" }) - 1;
      },
      result: {
        player(player2) {
          if (player2.countCards("h", "sha") > 0) {
            return 0;
          }
          var num2 = player2.countCards("h");
          if (num2 > player2.hp) {
            return 0;
          }
          if (num2 == 1) {
            return -2;
          }
          if (num2 == 2) {
            return -1;
          }
          return -0.7;
        },
        target(player2, target2) {
          var num2 = target2.countCards("h");
          if (num2 == 1) {
            return -1;
          }
          if (num2 == 2) {
            return -0.7;
          }
          return -0.5;
        }
      },
      threaten: 1.3
    }
  },
  decadexianzhen2: {
    audio: "decadexianzhen",
    charlotte: true,
    onremove: true,
    sourceSkill: "decadexianzhen",
    mod: {
      targetInRange(card2, player2, target2) {
        if (target2 == player2.storage.decadexianzhen2) {
          return true;
        }
      },
      cardUsableTarget(card2, player2, target2) {
        if (target2 == player2.storage.decadexianzhen2) {
          return true;
        }
      }
    },
    ai: {
      unequip: true,
      skillTagFilter(player2, tag, arg) {
        if (arg.target != player2.storage.decadexianzhen2) {
          return false;
        }
      }
    },
    group: "decadexianzhen2_damage",
    subSkill: {
      damage: {
        audio: "decadexianzhen",
        trigger: { source: "damageBegin1" },
        forced: true,
        filter(event2, player2) {
          return event2.card && event2.player == player2.storage.decadexianzhen2 && !player2.hasHistory("custom", function(evt) {
            return evt.name == "decadexianzhen" && evt.cardname == event2.card.name;
          });
        },
        logTarget: "player",
        content() {
          trigger.num++;
          player.getHistory("custom").push({
            name: "decadexianzhen",
            cardname: trigger.card.name
          });
        }
      }
    }
  },
  decadexianzhen3: {
    charlotte: true,
    mod: {
      cardEnabled(card2) {
        if (card2.name == "sha") {
          return false;
        }
      },
      ignoredHandcard(card2, player2) {
        if (get.name(card2) == "sha") {
          return true;
        }
      },
      cardDiscardable(card2, player2, name2) {
        if (name2 == "phaseDiscard" && get.name(card2) == "sha") {
          return false;
        }
      }
    }
  },
  decadejinjiu: {
    global: "decadejinjiu_global",
    mod: {
      cardname(card2) {
        if (card2.name == "jiu") {
          return "sha";
        }
      },
      cardnumber(card2) {
        if (card2.name == "jiu") {
          return 13;
        }
      }
    },
    audio: 2,
    audioname2: {
      ol_gaoshun: "rejinjiu"
    },
    trigger: { player: ["useCard1", "respond"] },
    filter(event2, player2) {
      return event2.card.name == "sha" && !event2.skill && event2.cards && event2.cards.length == 1 && event2.cards[0].name == "jiu";
    },
    forced: true,
    firstDo: true,
    content() {
    },
    subSkill: {
      global: {
        mod: {
          cardEnabled(card2, player2) {
            if (card2.name == "jiu") {
              var source2 = _status.currentPhase;
              if (source2 && source2 != player2 && source2.hasSkill("decadejinjiu")) {
                return false;
              }
            }
          },
          cardSavable(card2, player2) {
            if (card2.name == "jiu") {
              var source2 = _status.currentPhase;
              if (source2 && source2 != player2 && source2.hasSkill("decadejinjiu")) {
                return false;
              }
            }
          }
        }
      }
    }
  },
  rebotu: {
    audio: "botu",
    trigger: { player: "phaseEnd" },
    frequent: true,
    filter(event2, player2) {
      if (player2.countMark("rebotu_used") >= Math.min(3, game.countPlayer())) {
        return false;
      }
      var suits = [];
      game.getGlobalHistory("cardMove", function(evt) {
        if (suits.length >= 4) {
          return;
        }
        if (evt.name == "lose") {
          if (evt.position == ui.discardPile) {
            for (var i of evt.cards) {
              suits.add(get.suit(i, false));
            }
          }
        } else {
          if (evt.name == "cardsDiscard") {
            for (var i of evt.cards) {
              suits.add(get.suit(i, false));
            }
          }
        }
      });
      return suits.length >= 4;
    },
    content() {
      player.addTempSkill("rebotu_used", "roundStart");
      player.addMark("rebotu_used", 1, false);
      player.insertPhase();
    },
    group: "rebotu_mark",
    subSkill: {
      used: {
        onremove: true,
        charlotte: true
      },
      mark: {
        trigger: {
          global: ["loseAfter", "cardsDiscardAfter"],
          player: "phaseAfter"
        },
        forced: true,
        firstDo: true,
        silent: true,
        filter(event2, player2) {
          if (event2.name == "phase") {
            return true;
          }
          if (player2 != _status.currentPhase) {
            return false;
          }
          if (event2.name == "lose") {
            return event2.position == ui.discardPile;
          }
          return true;
        },
        content() {
          if (trigger.name == "phase") {
            player.unmarkSkill("rebotu_mark");
            return;
          }
          var suits = [];
          game.getGlobalHistory("cardMove", function(evt) {
            if (suits.length >= 4) {
              return;
            }
            if (evt.name == "lose") {
              if (evt.position == ui.discardPile) {
                for (var i of evt.cards) {
                  suits.add(get.suit(i, false));
                }
              }
            } else {
              if (evt.name == "cardsDiscard") {
                for (var i of evt.cards) {
                  suits.add(get.suit(i, false));
                }
              }
            }
          });
          player.storage.rebotu_mark = suits;
          player.markSkill("rebotu_mark");
        },
        intro: {
          onunmark: true,
          content: "本回合已有$花色的牌进入过弃牌堆"
        }
      }
    }
  },
  xinganlu: {
    enable: "phaseUse",
    usable: 1,
    audio: 2,
    selectTarget: 2,
    delay: 0,
    filterTarget(card2, player2, target2) {
      if (target2.isMin()) {
        return false;
      }
      if (ui.selected.targets.length == 0) {
        return true;
      }
      if (ui.selected.targets[0].countCards("e") == 0 && target2.countCards("e") == 0) {
        return false;
      }
      return true;
    },
    multitarget: true,
    multiline: true,
    content() {
      "step 0";
      targets[0].swapEquip(targets[1]);
      game.delayx();
      var num2 = Math.abs(targets[0].countCards("e") - targets[1].countCards("e"));
      if (num2 > player.getDamagedHp()) {
        player.chooseToDiscard("h", 2, true);
      }
    },
    ai: {
      order: 10,
      expose: 0.2,
      threaten(player2, target2) {
        return 0.8 * Math.max(1 + target2.maxHp - target2.hp);
      },
      result: {
        target(player2, target2) {
          if (!ui.selected.targets.length) {
            return -get.value(target2.getCards("e"), target2);
          }
          var target22 = ui.selected.targets[0];
          var eff_target = get.value(target22.getCards("e"), target2) - get.value(target2.getCards("e"), target2);
          if (get.sgn(eff_target) == get.sgn(-get.value(target22.getCards("e"), target22))) {
            return 0;
          }
          return eff_target;
        }
      }
    }
  },
  xinbuyi: {
    audio: 2,
    trigger: { global: "dying" },
    filter(event2, player2) {
      return event2.player.countCards("h") > 0;
    },
    check(event2, player2) {
      return get.attitude(player2, event2.player) > 0;
    },
    content() {
      "step 0";
      if (player == trigger.player) {
        player.chooseCard("h", true).set("ai", function(card3) {
          if (get.type(card3) != "basic") {
            return 100 - get.value(card3);
          }
          return 0;
        });
      } else {
        player.choosePlayerCard("h", trigger.player, true);
      }
      var card2 = result.cards[0], target2 = trigger.player;
      player.showCards(card2, get.translation(player) + "对" + (player == target2 ? "自己" : get.translation(target2)) + "发动了【补益】");
      if (get.type(card2, null, target2) != "basic") {
        target2.discard(card2);
        target2.recover();
        if (target2.countCards("h") == 1) {
          target2.draw();
        }
      }
    },
    logTarget: "player"
  },
  rejiaozhao: {
    audio: 2,
    enable: "phaseUse",
    group: "rejiaozhao_base",
    locked: false,
    mod: {
      targetEnabled(card2, player2, target2) {
        if (player2 == target2 && card2.storage && card2.storage.rejiaozhao) {
          return false;
        }
      }
    },
    filter(event2, player2) {
      return player2.hasMark("redanxin") && player2.countCards("h") && player2.getStorage("rejiaozhao_clear").length < player2.countMark("redanxin");
    },
    chooseButton: {
      dialog(event2, player2) {
        var list = [], storage = player2.getStorage("rejiaozhao_clear");
        for (var name2 of lib.inpile) {
          var type = get.type(name2);
          if ((type == "basic" || type == "trick") && !storage.includes(type)) {
            list.push([type, "", name2]);
            if (name2 == "sha") {
              for (var nature of lib.inpile_nature) {
                list.push([type, "", name2, nature]);
              }
            }
          }
        }
        return ui.create.dialog("矫诏", [list, "vcard"]);
      },
      filter(button, player2) {
        var card2 = { name: button.link[2], nature: button.link[3] };
        if (player2.countMark("redanxin") < 2) {
          card2.storage = { rejiaozhao: true };
        }
        var evt = _status.event.getParent();
        return evt.filterCard(card2, player2, evt);
      },
      check(button) {
        var card2 = { name: button.link[2], nature: button.link[3] }, player2 = _status.event.player;
        if (player2.countMark("redanxin") < 2) {
          card2.storage = { rejiaozhao: true };
        }
        return player2.getUseValue(card2, null, true);
      },
      backup(links, player2) {
        var next = {
          audio: "redanxin",
          viewAs: { name: links[0][2], nature: links[0][3] },
          filterCard: true,
          position: "h",
          popname: true,
          ai1: (card2) => 8 - get.value(card2),
          onuse(result2, player3) {
            player3.addTempSkill("rejiaozhao_clear", "phaseUseAfter");
            player3.markAuto("rejiaozhao_clear", [get.type(result2.card)]);
          }
        };
        if (player2.countMark("redanxin") < 2) {
          next.viewAs.storage = { rejiaozhao: true };
        }
        return next;
      },
      prompt(links) {
        return "将一张手牌当做" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) + "使用";
      }
    },
    ai: {
      order: 6,
      result: {
        player: 1
      }
    },
    derivation: ["rejiaozhao_lv2", "rejiaozhao_lv3"],
    subSkill: {
      clear: { onremove: true },
      base: {
        audio: "rejiaozhao",
        enable: "phaseUse",
        usable: 1,
        filter(event2, player2) {
          if (player2.hasMark("redanxin")) {
            return false;
          }
          return player2.countCards("h") > 0 && game.hasPlayer((current) => current != player2);
        },
        filterCard: true,
        position: "h",
        discard: false,
        lose: false,
        check(card2) {
          return 1 / Math.max(1, _status.event.player.getUseValue(card2));
        },
        prompt: "出牌阶段限一次。你可以展示一张手牌，并令一名距离你最近的角色选择一种基本牌或普通锦囊牌的牌名。你可将此牌当做其声明的牌使用直到此阶段结束（你不是此牌的合法目标）。",
        content() {
          "step 0";
          player.showCards(cards);
          var targets2 = game.filterPlayer();
          targets2.remove(player);
          targets2.sort(function(a, b) {
            return Math.max(1, get.distance(player, a)) - Math.max(1, get.distance(player, b));
          });
          var distance = Math.max(1, get.distance(player, targets2[0]));
          for (var i = 1; i < targets2.length; i++) {
            if (Math.max(1, get.distance(player, targets2[i])) > distance) {
              targets2.splice(i);
              break;
            }
          }
          player.chooseTarget("请选择【矫诏】的目标", true, function(card2, player2, target3) {
            return _status.event.targets.includes(target3);
          }).set("ai", function(target3) {
            return get.attitude(_status.event.player, target3);
          }).set("targets", targets2);
          if (!result.bool) {
            event.finish();
            return;
          }
          var target2 = result.targets[0];
          event.target = target2;
          var list = [];
          for (var i = 0; i < lib.inpile.length; i++) {
            var name2 = lib.inpile[i];
            if (name2 == "sha") {
              list.push(["基本", "", "sha"]);
              for (var j of lib.inpile_nature) {
                list.push(["基本", "", "sha", j]);
              }
            } else if (get.type(name2) == "basic") {
              list.push(["基本", "", name2]);
            } else if (get.type(name2) == "trick") {
              list.push(["锦囊", "", name2]);
            }
          }
          target2.chooseButton(["矫诏", [list, "vcard"]], true).set("ai", function(button) {
            var player2 = _status.event.getParent().player, card2 = {
              name: button.link[2],
              nature: button.link[3],
              storage: {
                rejiaozhao: true
              }
            };
            return player2.getUseValue(card2, null, true) * _status.event.att;
          }).set("att", get.attitude(event.target, player) > 0 ? 1 : -1);
          var chosen = result.links[0][2];
          var nature = result.links[0][3];
          var fakecard = {
            name: chosen,
            storage: { rejiaozhao: true }
          };
          if (nature) {
            fakecard.nature = nature;
          }
          event.target.showCards(
            game.createCard({
              name: chosen,
              nature,
              suit: cards[0].suit,
              number: cards[0].number
            }),
            get.translation(event.target) + "声明了" + get.translation(chosen)
          );
          game.broadcastAll(
            (player2, fakecard2) => {
              player2.storage.rejiaozhao_viewas = fakecard2;
            },
            player,
            fakecard
          );
          cards[0].addGaintag("rejiaozhao");
          player.addTempSkill("rejiaozhao_viewas", "phaseUseEnd");
        },
        ai: {
          order: 9,
          result: {
            player: 1
          }
        }
      },
      backup: { audio: "rejiaozhao" },
      viewas: {
        enable: "phaseUse",
        mod: {
          targetEnabled(card2, player2, target2) {
            if (player2 == target2 && card2.storage && card2.storage.rejiaozhao) {
              return false;
            }
          }
        },
        filter(event2, player2) {
          if (!player2.storage.rejiaozhao_viewas) {
            return false;
          }
          var cards2 = player2.getCards("h", function(card3) {
            return card3.hasGaintag("rejiaozhao");
          });
          if (!cards2.length) {
            return false;
          }
          if (!game.checkMod(cards2[0], player2, "unchanged", "cardEnabled2", player2)) {
            return false;
          }
          var card2 = get.autoViewAs(player2.storage.rejiaozhao_viewas, cards2);
          return event2.filterCard(card2, player2, event2);
        },
        viewAs(cards2, player2) {
          return player2.storage.rejiaozhao_viewas;
        },
        filterCard(card2) {
          return card2.hasGaintag("rejiaozhao");
        },
        selectCard: -1,
        position: "h",
        popname: true,
        prompt() {
          return "将“矫诏”牌当做" + get.translation(_status.event.player.storage.rejiaozhao_viewas) + "使用";
        },
        onremove(player2) {
          player2.removeGaintag("rejiaozhao");
          delete player2.storage.rejiaozhao_viewas;
        },
        ai: { order: 8 }
      }
    }
  },
  redanxin: {
    audio: 2,
    trigger: { player: "damageEnd" },
    frequent: true,
    content() {
      player.draw();
      if (player.countMark("redanxin") < 2) {
        player.addMark("redanxin", 1, false);
      }
    },
    intro: { content: "当前升级等级：Lv#" },
    ai: {
      maixie: true,
      effect: {
        target: (card2, player2, target2) => {
          if (!get.tag(card2, "damage")) {
            return;
          }
          if (target2.hp + target2.hujia < 2 || player2.hasSkillTag("jueqing", false, target2)) {
            return 2;
          }
          if (!target2.hasSkill("rejiaozhao") || target2.countMark("redanxin") > 1) {
            return [1, 1];
          }
          return [1, 0.8 * target2.hp - 0.4];
        }
      }
    }
  },
  //马岱
  reqianxi: {
    audio: 2,
    trigger: { player: "phaseZhunbeiBegin" },
    frequent: true,
    content() {
      "step 0";
      player.draw();
      if (player.hasCard((card2) => {
        return lib.filter.cardDiscardable(card2, player, "reqianxi");
      }, "he")) {
        player.chooseToDiscard("he", true).set("ai", (card2) => {
          let player2 = get.event().player;
          if (get.color(card2, player2)) {
            return 7 - get.value(card2, player2);
          }
          return 4 - get.value(card2, player2);
        });
      } else {
        event.finish();
      }
      if (result.bool && game.hasPlayer((current) => current != player && get.distance(player, current) <= 1)) {
        var color = get.color(result.cards[0], player);
        event.color = color;
        color = get.translation(color);
        player.chooseTarget(true, "选择【潜袭】的目标", "令其本回合不能使用或打出" + color + "牌，且" + color + "防具失效，且回复体力时，你摸两张牌", function(card2, player2, target3) {
          return target3 != player2 && get.distance(player2, target3) <= 1;
        }).set("ai", function(target3) {
          return -get.attitude(_status.event.player, target3) * Math.sqrt(1 + target3.countCards("he"));
        });
      } else {
        event.finish();
      }
      if (result.bool) {
        var target2 = result.targets[0];
        player.line(target2, "green");
        target2.storage.reqianxi_effect = [event.color, player];
        target2.addTempSkill("reqianxi_effect");
        target2.markSkill("reqianxi_effect");
      }
    },
    subSkill: {
      effect: {
        mark: true,
        intro: {
          markcount: () => 0,
          content(storage, player2) {
            var color = get.translation(storage[0]), source2 = get.translation(storage[1]);
            return "本回合不能使用或打出" + color + "牌，且" + color + "防具失效，且回复体力时，" + source2 + "摸两张牌";
          }
        },
        charlotte: true,
        onremove: true,
        mod: {
          cardEnabled2(card2, player2) {
            if (get.itemtype(card2) == "card" && get.color(card2) == player2.getStorage("reqianxi_effect")[0]) {
              return false;
            }
          }
        },
        trigger: { player: "recoverEnd" },
        forced: true,
        popup: false,
        filter(event2, player2) {
          return player2.storage.reqianxi_effect && player2.storage.reqianxi_effect[1].isIn();
        },
        content() {
          var target2 = player.storage.reqianxi_effect[1];
          target2.logSkill("reqianxi", player);
          target2.draw(2);
        },
        ai: {
          unequip2: true,
          skillTagFilter(player2) {
            var evt = _status.event, color = player2.getStorage("reqianxi_effect")[0];
            if (evt.name == "lose" && evt.loseEquip) {
              var card2 = evt.cards[evt.num];
              if (card2 && get.subtype(card2, false) == "equip2" && get.color(card2) == color) {
                return true;
              }
              return false;
            } else {
              var equip = player2.getEquip(2);
              if (equip && get.color(equip) == color) {
                return true;
              }
              return false;
            }
          }
        }
      }
    }
  },
  //徐晃
  olduanliang: {
    audio: 2,
    locked: false,
    enable: "chooseToUse",
    filterCard(card2) {
      return get.type2(card2) != "trick" && get.color(card2) == "black";
    },
    filter(event2, player2) {
      return player2.hasCard((card2) => get.type2(card2) != "trick" && get.color(card2) == "black", "hes");
    },
    position: "hes",
    viewAs: { name: "bingliang" },
    prompt: "将一张黑色非锦囊牌当做兵粮寸断使用",
    check(card2) {
      return 6 - get.value(card2);
    },
    ai: {
      order: 9
    },
    mod: {
      targetInRange(card2, player2, target2) {
        if (card2.name == "bingliang" && !player2.getStat("damage")) {
          return true;
        }
      }
    }
  },
  oljiezi: {
    audio: 2,
    trigger: { global: ["phaseDrawSkipped", "phaseDrawCancelled"] },
    direct: true,
    content() {
      "step 0";
      player.chooseTarget(get.prompt("oljiezi"), "你可选择一名角色。若该角色：手牌数为全场最少且没有“辎”，则其获得一枚“辎”。否则其摸一张牌。").set("ai", function(target3) {
        var att = get.attitude(_status.event.player, target3);
        if (!target3.hasMark("oljiezi") && target3.isMinHandcard()) {
          att *= 2;
        }
        return att;
      });
      if (result.bool) {
        var target2 = result.targets[0];
        player.logSkill("oljiezi", target2);
        if (!target2.hasMark("oljiezi") && target2.isMinHandcard()) {
          target2.addMark("oljiezi", 1);
        } else {
          target2.draw();
        }
      }
    },
    marktext: "辎",
    intro: {
      name2: "辎",
      content: "mark",
      onunmark: true
    },
    group: "oljiezi_extra",
    subSkill: {
      extra: {
        audio: "oljiezi",
        trigger: { global: "phaseDrawAfter" },
        forced: true,
        filter(event2, player2) {
          return event2.player.hasMark("oljiezi");
        },
        logTarget: "player",
        content() {
          const evt = trigger.getParent("phase", true, true);
          if (evt?.phaseList) {
            evt.phaseList.splice(evt.num + 1, 0, "phaseDraw|oljiezi");
          }
          trigger.player.removeMark("oljiezi", trigger.player.countMark("oljiezi"));
        }
      }
    }
  },
  //界护驾
  rehujia: {
    audio: "hujia",
    inherit: "hujia",
    filter(event2, player2) {
      if (event2.responded) {
        return false;
      }
      if (player2.storage.hujiaing) {
        return false;
      }
      if (!player2.hasZhuSkill("rehujia")) {
        return false;
      }
      if (!event2.filterCard({ name: "shan" }, player2, event2)) {
        return false;
      }
      return game.hasPlayer((current) => current != player2 && current.group == "wei");
    },
    ai: {
      respondShan: true,
      skillTagFilter(player2) {
        if (player2.storage.hujiaing) {
          return false;
        }
        if (!player2.hasZhuSkill("rehujia")) {
          return false;
        }
        return game.hasPlayer((current) => current != player2 && current.group == "wei");
      }
    },
    group: "rehujia_draw",
    subSkill: {
      draw: {
        trigger: { global: ["useCard", "respond"] },
        usable: 1,
        filter(event2, player2) {
          return event2.card.name == "shan" && event2.player != player2 && event2.player.group == "wei" && event2.player.isIn() && event2.player != _status.currentPhase && player2.hasZhuSkill("rehujia");
        },
        async cost(event2, trigger2, player2) {
          event2.result = await trigger2.player.chooseBool(`护驾：是否令${get.translation(player2)}摸一张牌？`).set("ai", () => {
            const evt = _status.event;
            return get.attitude(evt.player, evt.getParent().player) > 0;
          }).forResult();
        },
        async content(event2, trigger2, player2) {
          trigger2.player.line(player2, "fire");
          await player2.draw();
        }
      }
    }
  },
  //夏侯氏
  reqiaoshi: {
    audio: 2,
    trigger: { global: "phaseJieshuBegin" },
    filter(event2, player2) {
      return event2.player != player2 && event2.player.countCards("h") == player2.countCards("h") && event2.player.isIn();
    },
    check(event2, player2) {
      return get.attitude(player2, event2.player) >= 0;
    },
    logTarget: "player",
    async content(event2, trigger2, player2) {
      const {
        targets: [target2]
      } = event2;
      while (player2.isIn() && target2.isIn()) {
        const list1 = (await player2.draw("nodelay").forResult()).cards;
        const list2 = (await target2.draw().forResult()).cards;
        await game.delayx();
        if ([list1, list2].every((cards2) => get.itemtype(cards2) == "cards") && list1.length == list2.length && list1.map((card2) => get.suit(card2, player2)).toUniqued().every((suit) => list2.some((card2) => get.suit(card2, target2) == suit))) {
          const result2 = await player2.chooseBool("是否继续发动【樵拾】？", `和${get.translation(target2)}各摸一张牌`).forResult();
          if (!result2?.bool) {
            break;
          }
        } else {
          break;
        }
      }
    },
    ai: { expose: 0.1 }
  },
  reyanyu: {
    audio: 2,
    enable: "phaseUse",
    filter(event2, player2) {
      return player2.hasCard((card2) => lib.skill.reyanyu.filterCard(card2, player2), "h");
    },
    filterCard: (card2, player2) => get.name(card2) == "sha" && player2.canRecast(card2),
    discard: false,
    lose: false,
    delay: false,
    content() {
      player.recast(cards);
    },
    ai: {
      basic: {
        order: 1
      },
      result: {
        player: 1
      }
    },
    group: "reyanyu2"
  },
  reyanyu2: {
    trigger: { player: "phaseUseEnd" },
    direct: true,
    sourceSkill: "reyanyu",
    filter: (event2, player2) => player2.hasHistory("useSkill", (evt) => evt.skill == "reyanyu" && evt.event.getParent(2) == event2) && game.hasPlayer((target2) => target2.hasSex("male") && target2 != player2),
    content() {
      "step 0";
      event.num = Math.min(3, player.getHistory("useSkill", (evt) => evt.skill == "reyanyu" && evt.event.getParent(2) == trigger).length);
      player.chooseTarget(get.prompt("reyanyu"), "令一名男性角色摸" + get.cnNumber(event.num) + "张牌", function(card2, player2, target2) {
        return target2.hasSex("male") && target2 != player2;
      }).set("ai", function(target2) {
        return get.attitude(_status.event.player, target2);
      });
      if (result.bool) {
        player.logSkill("reyanyu", result.targets);
        result.targets[0].draw(event.num);
      }
    }
  },
  //虞翻
  xinzongxuan: {
    audio: 2,
    trigger: {
      player: "loseAfter",
      global: "loseAsyncAfter"
    },
    filter(event2, player2) {
      if (event2.type != "discard") {
        return false;
      }
      var evt = event2.getl(player2);
      if (!evt || !evt.cards2) {
        return false;
      }
      for (var i = 0; i < evt.cards2.length; i++) {
        if (get.position(evt.cards2[i]) == "d") {
          return true;
        }
      }
      return false;
    },
    check(trigger2, player2) {
      if (trigger2.getParent(3).name == "phaseDiscard") {
        return true;
      }
      if (!game.hasPlayer(function(current) {
        return current != player2 && get.attitude(player2, current) > 0 && !current.hasSkillTag("nogain");
      })) {
        return false;
      }
      var cards2 = trigger2.getl(player2).cards2;
      for (var i = 0; i < cards2.length; i++) {
        if (get.position(cards2[i], true) == "d" && get.type2(cards2[i], false) == "trick") {
          return true;
        }
      }
      return false;
    },
    async content(event2, trigger2, player2) {
      const cards2 = [], cards22 = trigger2.getl(player2).cards2;
      cards2.push(...cards22.filter((card2) => get.position(card2, true) == "d"));
      const result2 = await player2.chooseToMove("纵玄：将任意张牌置于牌堆顶（左边的牌更接近牌堆顶）", true, "allowChooseAll").set("list", [["本次弃置的牌（请将要给出的锦囊牌留在这里）", cards2], ["牌堆顶"]]).set("filterOk", function(moved) {
        if (moved[0].length == 1 && get.type2(moved[0][0], false) == "trick") {
          return true;
        }
        return moved[1].length > 0;
      }).set("processAI", function(list) {
        const cards3 = list[0][1].slice(0), player3 = _status.event.player;
        let result3 = [[], []];
        if (game.hasPlayer(function(current) {
          return current != player3 && get.attitude(player3, current) > 0 && !current.hasSkillTag("nogain");
        })) {
          var max_val = 0;
          var max_card = false;
          for (var i of cards3) {
            if (get.type2(i, false) == "trick") {
              var val = get.value(i, "raw");
              if (val > max_val) {
                max_card = i;
                max_val = val;
              }
            }
          }
          if (max_card) {
            result3[0].push(max_card);
            cards3.remove(max_card);
          }
        }
        if (cards3.length) {
          var max_val = 0;
          var max_card = false;
          var equip = game.hasPlayer(function(current) {
            return current.isDamaged() && get.recoverEffect(current, player3, player3) > 0;
          });
          for (var i of cards3) {
            var val = get.value(i);
            var type = get.type2(i, false);
            if (type == "basic") {
              val += 3;
            }
            if (type == "equip" && equip) {
              val += 9;
            }
            if (max_val == 0 || val > max_val) {
              max_card = i;
              max_val = val;
            }
          }
          if (max_card) {
            result3[1].push(max_card);
            cards3.remove(max_card);
          }
          result3[0].addArray(cards3);
        }
        return result3;
      }).forResult();
      if (result2.bool) {
        const cards3 = result2.moved[1].slice(0);
        if (cards3?.length) {
          cards3.reverse();
          game.log(player2, "将", cards3, "置于牌堆顶");
          await game.cardsGotoPile(cards3, "insert");
        }
        const list = result2.moved[0].filter(function(i) {
          return get.type2(i, false) == "trick";
        });
        if (!list.length || !game.hasPlayer((current) => current != player2)) {
          return;
        }
        const result22 = await player2.chooseButtonTarget({
          createDialog: ["纵玄：是否将一张锦囊牌交给一名其他角色？", list],
          filterButton: true,
          filterTarget: lib.filter.notMe,
          ai1(button) {
            if (_status.event.goon) {
              return Math.max(0.1, get.value(button.link, "raw"));
            }
            return 0;
          },
          forced: !result2.moved[1].length,
          goon: game.hasPlayer(function(current) {
            return current != player2 && get.attitude(player2, current) > 0 && !current.hasSkillTag("nogain");
          }),
          ai2(target2) {
            const card2 = ui.selected.button[0].link, player3 = get.player();
            let eff = Math.max(0.1, get.value(card2, target2)) * get.attitude(player3, target2);
            if (target2.hasSkill("nogain")) {
              eff /= 10;
            }
            return eff;
          }
        }).forResult();
        if (result22.bool && result22.links?.length && result22.targets?.length) {
          const {
            links: cards4,
            targets: [target2]
          } = result22;
          player2.line(target2, "green");
          await target2.gain(cards4, "gain2");
        }
      }
    }
  },
  xinzhiyan: {
    audio: "zhiyan",
    audioname: ["re_yufan", "xin_yufan"],
    audioname2: { gexuan: "zhiyan_gexuan" },
    trigger: { player: "phaseJieshuBegin" },
    direct: true,
    content() {
      "step 0";
      player.chooseTarget(get.prompt("zhiyan"), "令一名角色摸一张牌并展示之。若为基本牌则你摸一张牌；若为装备牌，则其回复1点体力").set("ai", function(target2) {
        return get.attitude(_status.event.player, target2) * (target2.isDamaged() ? 2 : 1);
      });
      if (result.bool) {
        event.target = result.targets[0];
        player.logSkill("xinzhiyan", result.targets);
        event.bool = false;
        event.target.draw("visible");
      } else {
        event.finish();
      }
      var card2 = result[0];
      event.card = card2;
      if (get.type(card2) == "basic") {
        player.draw();
      }
      if (get.type(card2) == "equip") {
        if (target.getCards("h").includes(card2) && target.hasUseTarget(card2)) {
          event.target.chooseUseTarget(card2, true, "nopopup");
          game.delay();
        }
        event.bool = true;
      }
      if (event.bool) {
        target.recover();
      }
    },
    ai: {
      expose: 0.2,
      threaten: 1.2
    }
  },
  //新主公技
  xinhuangtian: {
    audio: "xinhuangtian2",
    audioname: ["zhangjiao", "re_zhangjiao"],
    global: "xinhuangtian2",
    zhuSkill: true
  },
  xinhuangtian2: {
    audio: 2,
    enable: "phaseUse",
    discard: false,
    lose: false,
    delay: false,
    line: true,
    prepare(cards2, player2, targets2) {
      targets2[0].logSkill("xinhuangtian");
    },
    prompt() {
      var player2 = _status.event.player;
      var list = game.filterPlayer(function(target2) {
        return target2 != player2 && target2.hasZhuSkill("xinhuangtian", player2);
      });
      var str = "将一张【闪】或黑桃手牌交给" + get.translation(list);
      if (list.length > 1) {
        str += "中的一人";
      }
      return str;
    },
    filter(event2, player2) {
      if (player2.group != "qun") {
        return false;
      }
      if (!game.hasPlayer(function(target2) {
        return target2 != player2 && target2.hasZhuSkill("xinhuangtian", player2) && !target2.hasSkill("xinhuangtian3");
      })) {
        return false;
      }
      return player2.hasCard(function(card2) {
        return lib.skill.xinhuangtian2.filterCard(card2, player2);
      }, "h");
    },
    filterCard(card2, player2) {
      return get.name(card2, player2) == "shan" || get.suit(card2, player2) == "spade";
    },
    log: false,
    visible: true,
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.hasZhuSkill("xinhuangtian", player2) && !target2.hasSkill("xinhuangtian3");
    },
    //usable:1,
    //forceaudio:true,
    content() {
      player.give(cards, target);
      target.addTempSkill("xinhuangtian3", "phaseUseEnd");
    },
    ai: {
      expose: 0.3,
      order: 10,
      result: {
        target: 5
      }
    }
  },
  xinhuangtian3: {},
  rejijiang: {
    audio: "jijiang1",
    audioname: ["liushan", "re_liubei", "re_liushan", "ol_liushan"],
    group: ["rejijiang1", "rejijiang3"],
    zhuSkill: true,
    filter(event2, player2) {
      if (!player2.hasZhuSkill("rejijiang") || !game.hasPlayer(function(current) {
        return current != player2 && current.group == "shu";
      })) {
        return false;
      }
      return !event2.jijiang && (event2.type != "phase" || !player2.hasSkill("jijiang3"));
    },
    enable: ["chooseToUse", "chooseToRespond"],
    viewAs: { name: "sha" },
    filterCard: () => false,
    selectCard: -1,
    ai: {
      order() {
        return get.order({ name: "sha" }) + 0.3;
      },
      respondSha: true,
      skillTagFilter(player2) {
        if (!player2.hasZhuSkill("rejijiang") || !game.hasPlayer(function(current) {
          return current != player2 && current.group == "shu";
        })) {
          return false;
        }
      }
    }
  },
  rejijiang1: {
    audio: "jijiang1",
    audioname: ["liushan", "re_liubei", "re_liushan", "ol_liushan"],
    trigger: { player: ["useCardBegin", "respondBegin"] },
    logTarget: "targets",
    sourceSkill: "rejijiang",
    filter(event2, player2) {
      return event2.skill == "rejijiang";
    },
    forced: true,
    content() {
      "step 0";
      delete trigger.skill;
      trigger.getParent().set("jijiang", true);
      if (event.current == void 0) {
        event.current = player.next;
      }
      if (event.current == player) {
        player.addTempSkill("jijiang3");
        event.finish();
        trigger.cancel();
        trigger.getParent().goto(0);
      } else if (event.current.group == "shu") {
        var next = event.current.chooseToRespond("是否替" + get.translation(player) + "打出一张杀？", { name: "sha" });
        next.set("ai", function() {
          var event2 = _status.event;
          return get.attitude(event2.player, event2.source) - 2;
        });
        next.set("source", player);
        next.set("jijiang", true);
        next.set("skillwarn", "替" + get.translation(player) + "打出一张杀");
        next.noOrdering = true;
        next.autochoose = lib.filter.autoRespondSha;
      } else {
        event.current = event.current.next;
        event.redo();
      }
      if (result.bool) {
        event.finish();
        trigger.card = result.card;
        trigger.cards = result.cards;
        trigger.throw = false;
        if (typeof event.current.ai.shown == "number" && event.current.ai.shown < 0.95) {
          event.current.ai.shown += 0.3;
          if (event.current.ai.shown > 0.95) {
            event.current.ai.shown = 0.95;
          }
        }
      } else {
        event.current = event.current.next;
        event.goto(1);
      }
    }
  },
  rejijiang3: {
    trigger: { global: ["useCard", "respond"] },
    usable: 1,
    sourceSkill: "rejijiang",
    filter(event2, player2) {
      return event2.card.name == "sha" && event2.player != player2 && event2.player.group == "shu" && event2.player.isIn() && event2.player != _status.currentPhase && player2.hasZhuSkill("rejijiang");
    },
    async cost(event2, trigger2, player2) {
      event2.result = await trigger2.player.chooseBool(`激将：是否令${get.translation(player2)}摸一张牌？`).set("ai", () => {
        const evt = _status.event;
        return get.attitude(evt.player, evt.getParent().player) > 0;
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      trigger2.player.line(player2, "fire");
      await player2.draw();
    }
  },
  //鲁肃
  olhaoshi: {
    audio: 2,
    trigger: { player: "phaseDrawBegin2" },
    filter(event2, player2) {
      return !event2.numFixed;
    },
    check(event2, player2) {
      return player2.countCards("h") + 2 + event2.num <= 5 || game.hasPlayer(function(target2) {
        return player2 !== target2 && !game.hasPlayer(function(current) {
          return current !== player2 && current !== target2 && current.countCards("h") < target2.countCards("h");
        }) && get.attitude(player2, target2) > 0;
      });
    },
    content() {
      trigger.num += 2;
      player.addTempSkill("olhaoshi_give", "phaseDrawAfter");
    },
    subSkill: {
      give: {
        trigger: { player: "phaseDrawEnd" },
        forced: true,
        charlotte: true,
        popup: false,
        filter(event2, player2) {
          return player2.countCards("h") > 5;
        },
        content() {
          "step 0";
          var targets2 = game.filterPlayer(function(target3) {
            return target3 != player && !game.hasPlayer(function(current) {
              return current != player && current != target3 && current.countCards("h") < target3.countCards("h");
            });
          }), num2 = Math.floor(player.countCards("h") / 2);
          player.chooseCardTarget({
            position: "h",
            filterCard: true,
            filterTarget(card2, player2, target3) {
              return _status.event.targets.includes(target3);
            },
            targets: targets2,
            selectTarget: targets2.length == 1 ? -1 : 1,
            selectCard: num2,
            prompt: "将" + get.cnNumber(num2) + "张手牌交给一名手牌数最少的其他角色",
            forced: true,
            ai1(card2) {
              var goon = false, player2 = _status.event.player;
              for (var i of _status.event.targets) {
                if (get.attitude(i, player2) > 0 && get.attitude(player2, i) > 0) {
                  goon = true;
                }
                break;
              }
              if (goon) {
                if (!player2.hasValueTarget(card2) || card2.name == "sha" && player2.countCards("h", function(cardx) {
                  return cardx.name == "sha" && !ui.selected.cards.includes(cardx);
                }) > player2.getCardUsable("sha")) {
                  return 2;
                }
                return Math.max(2, get.value(card2) / 4);
              }
              return 1 / Math.max(1, get.value(card2));
            },
            ai2(target3) {
              return get.attitude(_status.event.player, target3);
            }
          });
          if (result.bool) {
            var target2 = result.targets[0];
            player.line(target2, "green");
            player.give(result.cards, target2);
            player.markAuto("olhaoshi_help", [target2]);
            player.addTempSkill("olhaoshi_help", { player: "phaseBeginStart" });
          }
        }
      },
      help: {
        trigger: { target: "useCardToTargeted" },
        direct: true,
        charlotte: true,
        onremove: true,
        filter(event2, player2) {
          if (!player2.storage.olhaoshi_help || !player2.storage.olhaoshi_help.length) {
            return false;
          }
          if (event2.card.name != "sha" && get.type(event2.card) != "trick") {
            return false;
          }
          for (var i of player2.storage.olhaoshi_help) {
            if (i.countCards("h") > 0) {
              return true;
            }
          }
          return false;
        },
        content() {
          "step 0";
          if (!event.targets) {
            event.targets = player.storage.olhaoshi_help.slice(0).sortBySeat();
          }
          event.target = event.targets.shift();
          event.target.chooseCard("h", "好施：是否将一张手牌交给" + get.translation(player) + "？").set("ai", function(card2) {
            var player2 = _status.event.player, target2 = _status.event.getTrigger().player;
            if (!_status.event.goon) {
              if (get.value(card2, player2) < 0 || get.value(card2, target2) < 0) {
                return 1;
              }
              return 0;
            }
            var cardx = _status.event.getTrigger().card;
            if (card2.name == "shan" && get.tag(cardx, "respondShan") && target2.countCards("h", "shan") < player2.countCards("h", "shan")) {
              return 2;
            }
            if (card2.name == "sha" && (cardx.name == "juedou" || get.tag(card2, "respondSha") && target2.countCards("h", "sha") < player2.countCards("h", "sha"))) {
              return 2;
            }
            if (get.value(card2, target2) > get.value(card2, player2) || target2.getUseValue(card2) > player2.getUseValue(card2)) {
              return 1;
            }
            if (player2.hasSkillTag("noh")) {
              return 0.5 / Math.max(1, get.value(card2, player2));
            }
            return 0;
          }).set("goon", get.attitude(event.target, player) > 0);
          if (result.bool) {
            target.logSkill("olhaoshi_help", player);
            target.give(result.cards, player);
          }
          if (targets.length) {
            event.goto(0);
          }
        }
      }
    }
  },
  oldimeng: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return game.hasPlayer((current) => lib.skill.oldimeng.filterTarget(null, player2, current));
    },
    selectTarget: 2,
    complexTarget: true,
    filterTarget(card2, player2, target2) {
      if (target2 == player2) {
        return false;
      }
      var ps = player2.countCards("he");
      if (!ui.selected.targets.length) {
        var hs = target2.countCards("h");
        return game.hasPlayer(function(current2) {
          if (current2 == player2 || current2 == target2) {
            return false;
          }
          var cs2 = current2.countCards("h");
          return (hs > 0 || cs2 > 0) && Math.abs(hs - cs2) <= ps;
        });
      }
      var current = ui.selected.targets[0], hs = target2.countCards("h"), cs = current.countCards("h");
      return (hs > 0 || cs > 0) && Math.abs(hs - cs) <= ps;
    },
    multitarget: true,
    multiline: true,
    content() {
      targets[0].swapHandcards(targets[1]);
      player.addTempSkill("oldimeng_discard", "phaseUseAfter");
      player.markAuto("oldimeng_discard", [targets]);
    },
    ai: {
      threaten: 4.5,
      pretao: true,
      nokeep: true,
      order: 1,
      expose: 0.2,
      result: {
        target(player2, target2) {
          if (!ui.selected.targets.length) {
            return -Math.sqrt(target2.countCards("h"));
          }
          var h1 = ui.selected.targets[0].getCards("h"), h2 = target2.getCards("h");
          if (h2.length > h1.length) {
            return 0;
          }
          var delval = get.value(h2, target2) - get.value(h1, ui.selected.targets[0]);
          if (delval >= 0) {
            return 0;
          }
          return -delval * (h1.length - h2.length);
        }
      }
    },
    subSkill: {
      discard: {
        audio: "oldimeng",
        trigger: { player: "phaseUseEnd" },
        forced: true,
        charlotte: true,
        onremove: true,
        filter(event2, player2) {
          return player2.countCards("he") > 0;
        },
        async content(event2, trigger2, player2) {
          for (let targets2 of player2.getStorage("oldimeng_discard")) {
            if (targets2.length < 2) {
              continue;
            }
            const num2 = Math.abs(targets2[0].countCards("h") - targets2[1].countCards("h"));
            if (num2 > 0 && player2.countCards("he") > 0) {
              await player2.chooseToDiscard("he", true, num2);
            }
          }
        }
      }
    }
  },
  //贾诩
  rewansha: {
    audio: "wansha",
    audioname: ["re_jiaxu", "boss_lvbu3", "new_simayi"],
    audioname2: { shen_simayi: "jilue_wansha" },
    global: "rewansha_global",
    trigger: { global: "dyingBegin" },
    forced: true,
    logTarget: "player",
    filter(event2, player2) {
      return player2 == _status.currentPhase;
    },
    content() {
      game.countPlayer(function(current) {
        if (current != player && current != trigger.player) {
          current.addSkillBlocker("rewansha_fengyin");
        }
      });
      player.addTempSkill("rewansha_clear");
    },
    subSkill: {
      global: {
        mod: {
          cardEnabled(card2, player2) {
            var source2 = _status.currentPhase;
            if (card2.name == "tao" && source2 && source2 != player2 && source2.hasSkill("rewansha") && !player2.isDying()) {
              return false;
            }
          },
          cardSavable(card2, player2) {
            var source2 = _status.currentPhase;
            if (card2.name == "tao" && source2 && source2 != player2 && source2.hasSkill("rewansha") && !player2.isDying()) {
              return false;
            }
          }
        }
      },
      fengyin: {
        inherit: "fengyin"
      },
      clear: {
        trigger: { global: "dyingAfter" },
        forced: true,
        charlotte: true,
        popup: false,
        filter(event2, player2) {
          return !_status.dying.length;
        },
        content() {
          player.removeSkill("rewansha_clear");
        },
        onremove() {
          game.countPlayer2(function(current) {
            current.removeSkillBlocker("rewansha_fengyin");
          });
        }
      }
    }
  },
  reluanwu: {
    audio: "luanwu",
    inherit: "luanwu",
    async contentAfter(event2, trigger2, player2) {
      await player2.chooseUseTarget("sha", "是否使用一张【杀】？", false, "nodistance");
    }
  },
  reweimu: {
    audio: 2,
    mod: {
      targetEnabled(card2) {
        if (get.type2(card2) == "trick" && get.color(card2) == "black") {
          return false;
        }
      }
    },
    trigger: { player: "damageBegin4" },
    forced: true,
    filter(event2, player2) {
      return player2 == _status.currentPhase;
    },
    content() {
      trigger.cancel();
      var num2 = trigger.num;
      player.draw(2 * num2);
    },
    ai: {
      effect: {
        target(card2, player2, target2) {
          if (target2 == _status.currentPhase && get.tag(card2, "damage")) {
            return [0, 2, 0, 0];
          }
        }
      }
    },
    group: "reweimu_log",
    subSkill: {
      log: {
        audio: "reweimu",
        trigger: { global: "useCard1" },
        forced: true,
        firstDo: true,
        filter(event2, player2) {
          if (event2.player == player2) {
            return false;
          }
          if (get.color(event2.card) != "black" || get.type(event2.card) != "trick") {
            return false;
          }
          var info = lib.card[event2.card.name];
          return info && info.selectTarget && info.selectTarget == -1 && !info.toself;
        },
        content() {
        }
      }
    }
  },
  //顾雍
  reshenxing: {
    audio: 2,
    enable: "phaseUse",
    filter(event2, player2) {
      return player2.countCards("he") >= Math.min(2, player2.countMark("reshenxing_used"));
    },
    selectCard() {
      return Math.min(2, _status.event.player.countMark("reshenxing_used"));
    },
    prompt() {
      return "弃置" + get.cnNumber(Math.min(2, _status.event.player.countMark("reshenxing_used"))) + "张牌并摸一张牌";
    },
    check(card2) {
      var num2 = _status.event.player.countCards("h", { color: get.color(card2) });
      if (get.position(card2) == "e") {
        num2++;
      }
      return (Math.max(4, 7.1 - num2) - get.value(card2)) / num2;
    },
    filterCard: true,
    position: "he",
    content() {
      player.draw();
      player.addTempSkill(event.name + "_used", "phaseUseAfter");
      player.addMark(event.name + "_used", 1, false);
    },
    ai: {
      order(item, player2) {
        if (!player2.hasMark("reshenxing_used")) {
          return 10;
        }
        return 1;
      },
      result: { player: 1 }
    },
    subSkill: {
      used: {
        charlotte: true,
        onremove: true,
        intro: {
          content: "已发动过#次"
        }
      }
    }
  },
  rebingyi: {
    audio: 2,
    trigger: { player: "phaseJieshuBegin" },
    filter(event2, player2) {
      return player2.countCards("h") > 0;
    },
    filterx(player2) {
      var cards2 = player2.getCards("h");
      if (cards2.length == 1) {
        return true;
      }
      var color = get.color(cards2[0], player2);
      for (var i = 1; i < cards2.length; i++) {
        if (get.color(cards2[i], player2) != color) {
          return false;
        }
      }
      return true;
    },
    filtery(player2) {
      var cards2 = player2.getCards("h");
      if (cards2.length == 1) {
        return true;
      }
      var color = get.number(cards2[0], player2);
      for (var i = 1; i < cards2.length; i++) {
        if (get.number(cards2[i], player2) != color) {
          return false;
        }
      }
      return true;
    },
    async cost(event2, trigger2, player2) {
      const selfDraw = get.info(event2.skill).filterx(player2) && get.info(event2.skill).filtery(player2), asyncDraw = get.info(event2.skill).filterx(player2);
      if (asyncDraw) {
        const num2 = player2.countCards("h");
        const result2 = await player2.chooseTarget(get.prompt(event2.skill), `展示所有手牌，并选择至多${get.cnNumber(num2)}名角色各摸一张牌${selfDraw ? "，然后你摸一张牌" : ""}`, [0, num2]).set("ai", function(target2) {
          return get.attitude(get.player(), target2);
        }).forResult();
        if (result2.bool) {
          event2.result = {
            bool: result2.bool,
            cost_data: {
              asyncDraw,
              selfDraw,
              targets: result2.targets
            }
          };
        }
      } else {
        event2.result = await player2.chooseBool(get.prompt(event2.skill), `展示所有手牌${selfDraw ? "，然后你摸一张牌" : ""}`).set("choice", selfDraw).set("ai", () => get.event().choice).forResult();
        event2.result.cost_data = { selfDraw };
      }
    },
    async content(event2, trigger2, player2) {
      await player2.showHandcards(get.translation(player2) + "发动了【秉壹】");
      const data = event2.cost_data;
      if (data.asyncDraw && data.targets && data.targets.length) {
        const targets2 = data.targets.sortBySeat();
        await game.asyncDraw(targets2);
      }
      if (data.selfDraw) {
        player2.draw();
      }
    }
  },
  //钟会
  xinquanji: {
    audio: 2,
    trigger: {
      player: ["damageEnd"],
      global: ["gainAfter", "loseAsyncAfter"]
    },
    getIndex(event2, player2, triggername) {
      return event2.name == "damage" ? event2.num : 1;
    },
    filter(event2, player2) {
      if (event2.name == "damage") {
        return event2.num > 0;
      }
      if (event2.name == "loseAsync") {
        if (event2.type != "gain" || event2.giver) {
          return false;
        }
        return game.hasPlayer((current) => {
          if (current == player2) {
            return false;
          }
          return event2.getg?.(current).some((card2) => event2.getl?.(player2)?.cards2?.includes(card2));
        });
      }
      if (player2 == event2.player) {
        return false;
      }
      if (event2.giver || event2.getParent().name == "gift") {
        return false;
      }
      return event2.getl?.(player2)?.cards2?.length;
    },
    frequent: true,
    async content(event2, trigger2, player2) {
      await player2.draw();
      const hs = player2.getCards("h");
      if (!hs.length) {
        return;
      }
      const result2 = hs.length == 1 ? { bool: true, cards: hs } : await player2.chooseCard("h", true, "选择一张手牌作为“权”").forResult();
      if (result2?.bool && result2?.cards?.length) {
        const next = player2.addToExpansion(result2.cards, player2, "give");
        next.gaintag.add(event2.name);
        await next;
      }
    },
    locked: false,
    onremove(player2, skill) {
      const cards2 = player2.getExpansions(skill);
      if (cards2.length) {
        player2.loseToDiscardpile(cards2);
      }
    },
    intro: {
      content: "expansion",
      markcount: "expansion"
    },
    mod: {
      maxHandcard(player2, num2) {
        return num2 + player2.getExpansions("xinquanji").length;
      }
    },
    ai: {
      maixie: true,
      maixie_hp: true,
      notemp: true,
      threaten: 0.8,
      effect: {
        target(card2, player2, target2) {
          if (get.tag(card2, "damage") && !target2.storage.xinzili) {
            if (player2.hasSkillTag("jueqing", false, target2)) {
              return [1, -2];
            }
            if (!target2.hasFriend()) {
              return;
            }
            if (target2.hp >= 4) {
              return [0.5, get.tag(card2, "damage") * 2];
            }
            if (!target2.hasSkill("xinpaiyi") && target2.hp > 1) {
              return [0.5, get.tag(card2, "damage") * 1.5];
            }
            if (target2.hp == 3) {
              return [0.5, get.tag(card2, "damage") * 1.5];
            }
            if (target2.hp == 2) {
              return [1, get.tag(card2, "damage") * 0.5];
            }
          }
        }
      }
    }
  },
  xinzili: {
    derivation: "xinpaiyi",
    audio: 2,
    trigger: { player: "phaseZhunbeiBegin" },
    forced: true,
    juexingji: true,
    skillAnimation: true,
    animationColor: "thunder",
    filter(event2, player2) {
      return player2.getExpansions("xinquanji").length > 2;
    },
    content() {
      player.awakenSkill(event.name);
      player.recover();
      player.draw(2);
      player.loseMaxHp();
      player.addSkills("xinpaiyi");
    },
    ai: {
      combo: "xinquanji"
    }
  },
  xinpaiyi: {
    audio: 2,
    enable: "phaseUse",
    filter(event2, player2) {
      if (player2.getStorage("xinpaiyi_used").length > 1) {
        return false;
      }
      return player2.getExpansions("xinquanji").length > 0;
    },
    chooseButton: {
      check(button) {
        if (typeof button.link == "object") {
          return 1;
        }
        var player2 = _status.event.player, num2 = player2.getExpansions("xinquanji").length - 1;
        if (button.link == 1) {
          if (game.countPlayer(function(current) {
            return get.damageEffect(current, player2, player2) > 0;
          }) < num2) {
            return 0.5;
          }
          return 2;
        }
        if (num2 < 2) {
          return 0;
        }
        return 1;
      },
      dialog(event2, player2) {
        var dialog = ui.create.dialog("权计", "hidden");
        var table = document.createElement("div");
        table.classList.add("add-setting");
        table.style.margin = "0";
        table.style.width = "100%";
        table.style.position = "relative";
        var list = ["摸牌", "造成伤害"];
        dialog.add([
          list.map((item, i) => {
            return [i, item];
          }),
          "tdnodes"
        ]);
        dialog.add(player2.getExpansions("xinquanji"));
        return dialog;
      },
      select: 2,
      filter(button, player2) {
        if (typeof button.link == "number" && player2.getStorage("xinpaiyi_used").includes(button.link)) {
          return false;
        }
        if (ui.selected.buttons.length) {
          return typeof ui.selected.buttons[0].link != typeof button.link;
        }
        return true;
      },
      backup(links) {
        if (typeof links[0] == "object") {
          links.reverse();
        }
        var next = get.copy(lib.skill["xinpaiyi_backup" + links[0]]);
        next.card = links[1];
        return next;
      },
      prompt(links, player2) {
        if (typeof links[0] == "object") {
          links.reverse();
        }
        var num2 = get.cnNumber(Math.max(1, player2.getExpansions("xinquanji").length - 1)), card2 = get.translation(links[1]);
        if (links[0] == 0) {
          return "移去" + card2 + "并令一名角色摸" + num2 + "张牌";
        }
        return "移去" + card2 + "并对至多" + num2 + "名角色造成1点伤害";
      }
    },
    ai: {
      order: 1,
      result: { player: 1 },
      combo: "xinquanji"
    },
    subSkill: {
      used: {
        charlotte: true,
        onremove: true
      },
      backup0: {
        audio: "xinpaiyi",
        filterCard: () => false,
        selectCard: -1,
        filterTarget: true,
        delay: false,
        content() {
          "step 0";
          player.addTempSkill("xinpaiyi_used", "phaseUseEnd");
          player.markAuto("xinpaiyi_used", [0]);
          var card2 = lib.skill.xinpaiyi_backup.card;
          player.loseToDiscardpile(card2);
          target.draw(Math.max(1, player.getExpansions("xinquanji").length));
        },
        ai: {
          result: {
            target(player2, target2) {
              if (target2.hasSkill("nogain")) {
                return 0;
              }
              if (player2 == target2 && !player2.needsToDiscard()) {
                return 3;
              }
              return 1;
            }
          }
        }
      },
      backup1: {
        audio: "xinpaiyi",
        filterCard: () => false,
        selectCard: -1,
        filterTarget: true,
        delay: false,
        multitarget: true,
        multiline: true,
        selectTarget() {
          return [1, Math.max(1, _status.event.player.getExpansions("xinquanji").length - 1)];
        },
        content() {
          "step 0";
          targets.sortBySeat();
          player.addTempSkill("xinpaiyi_used", "phaseUseEnd");
          player.markAuto("xinpaiyi_used", [1]);
          var card2 = lib.skill.xinpaiyi_backup.card;
          player.loseToDiscardpile(card2);
          for (var i of targets) {
            i.damage();
          }
        },
        ai: {
          tag: {
            damage: 1
          },
          result: {
            target: -1.5
          }
        }
      }
    }
  },
  //界蔡夫人
  reqieting: {
    audio: 2,
    trigger: { global: "phaseEnd" },
    direct: true,
    filter(event2, player2) {
      var target2 = event2.player;
      if (player2 == target2) {
        return false;
      }
      if (!target2.getHistory("sourceDamage").length) {
        var cards2 = target2.getCards("e");
        for (var i of cards2) {
          if (player2.canEquip(i)) {
            return true;
          }
        }
      }
      return target2.getHistory("useCard", function(evt) {
        return evt.targets && evt.targets.filter(function(i2) {
          return i2 != target2;
        }).length > 0;
      }).length == 0;
    },
    frequent: true,
    content() {
      "step 0";
      var target2 = trigger.player;
      event.target = target2;
      event.logged = false;
      var list = [];
      if (!target2.getHistory("sourceDamage").length) {
        var cards2 = target2.getCards("e");
        for (var i of cards2) {
          if (player.canEquip(i)) {
            list.push(i);
          }
        }
      }
      if (list.length) {
        player.choosePlayerCard(target2, "e", get.prompt("reqieting", target2)).set("list", list).set("filterButton", function(button) {
          return _status.event.list.includes(button.link);
        }).set("ai", function(button) {
          var evt = _status.event, val = get.value(button.link);
          if (evt.target.hasSkillTag("noe")) {
            val -= 4;
          }
          if (evt.att > 0 == val > 0) {
            return 0;
          }
          return get.effect(evt.player, button.link, evt.player, evt.player);
        }).set("att", get.attitude(player, target2));
      } else {
        event.goto(2);
      }
      if (result.bool) {
        player.logSkill("reqieting", target2);
        event.logged = true;
        var card2 = result.links[0];
        target2.$give(card2, player, false);
        game.delay(0.5);
        player.equip(card2);
      }
      if (target2.getHistory("useCard", function(evt) {
        return evt.targets && evt.targets.filter(function(i2) {
          return i2 != target2;
        }).length > 0;
      }).length != 0) {
        event.finish();
      }
      player.chooseBool("是否发动【窃听】摸一张牌？").set("frequentSkill", "reqieting");
      if (result.bool) {
        if (!event.logged) {
          player.logSkill("reqieting", target2);
        }
        player.draw();
      }
    }
  },
  rexianzhou: {
    audio: 2,
    enable: "phaseUse",
    limited: true,
    skillAnimation: true,
    animationColor: "gray",
    filter(event2, player2) {
      return player2.countCards("e") > 0;
    },
    filterCard: true,
    position: "e",
    selectCard: -1,
    filterTarget: lib.filter.notMe,
    discard: false,
    lose: false,
    delay: false,
    content() {
      "step 0";
      player.awakenSkill(event.name);
      player.give(cards, target);
      player.recover(cards.length);
      var list = game.filterPlayer(function(current) {
        return target.inRange(current);
      });
      if (list.length) {
        var max = Math.min(list.length, cards.length);
        target.chooseTarget(true, [1, max], "对至多" + get.cnNumber(max) + "名范围内的角色各造成1点伤害", function(card2, player2, target2) {
          return _status.event.list.includes(target2);
        }).set("list", list).set("ai", function(target2) {
          var player2 = _status.event.player;
          return get.damageEffect(target2, player2, player2);
        });
      } else {
        event.finish();
      }
      if (result.bool) {
        var targets2 = result.targets.sortBySeat();
        player.line(targets2, "green");
        for (var i of targets2) {
          i.damage("nocard");
        }
      }
    },
    ai: {
      order: 1,
      result: {
        target: 1,
        player(player2) {
          var bool = true, players = game.filterPlayer();
          for (var i = 0; i < players.length; i++) {
            if (players[i] != player2 && get.attitude(player2, players[i]) > 2 && get.attitude(players[i], player2) > 2) {
              bool = false;
              break;
            }
          }
          if (bool) {
            return -10;
          }
          if (player2.hp == 1) {
            return 1;
          }
          if (game.phaseNumber < game.players.length) {
            return -10;
          }
          if (player2.countCards("e") + player2.hp <= player2.maxHp) {
            return 1;
          }
          return -10;
        }
      }
    }
  },
  //界关平
  relongyin: {
    audio: 2,
    init: (player2) => {
      game.addGlobalSkill("relongyin_order");
    },
    onremove: (player2) => {
      if (!game.hasPlayer((current) => current.hasSkill("relongyin", null, null, false), true)) {
        game.removeGlobalSkill("relongyin_order");
      }
    },
    trigger: { global: "useCard" },
    direct: true,
    filter(event2, player2) {
      return event2.card.name == "sha" && player2.countCards("he") > 0 && event2.player.isPhaseUsing();
    },
    content() {
      "step 0";
      var go = false;
      if (get.attitude(player, trigger.player) > 0) {
        if (get.color(trigger.card) == "red") {
          go = true;
        } else if (trigger.addCount === false || !trigger.player.isPhaseUsing()) {
          go = false;
        } else if (!trigger.player.hasSkill("paoxiao") && !trigger.player.hasSkill("tanlin3") && !trigger.player.hasSkill("zhaxiang2") && !trigger.player.hasSkill("fengnu") && !trigger.player.getEquip("zhuge")) {
          var nh = trigger.player.countCards("h");
          if (player == trigger.player) {
            go = player.countCards("h", "sha") > 0;
          } else if (nh >= 4) {
            go = true;
          } else if (player.countCards("h", "sha")) {
            if (nh == 3) {
              go = Math.random() < 0.8;
            } else if (nh == 2) {
              go = Math.random() < 0.5;
            }
          } else if (nh >= 3) {
            if (nh == 3) {
              go = Math.random() < 0.5;
            } else if (nh == 2) {
              go = Math.random() < 0.2;
            }
          }
        }
      }
      if (go && !event.isMine() && !event.isOnline() && player.hasCard(function(card2) {
        return get.value(card2) < 6 && lib.filter.cardDiscardable(card2, player, event.name);
      }, "he")) {
        game.delayx();
      }
      var next = player.chooseToDiscard(get.prompt("longyin"), "弃置一张牌" + (get.color(trigger.card) == "red" ? "并摸一张牌" : "") + "，令" + get.translation(trigger.player) + "本次使用的【杀】不计入使用次数", "he");
      next.logSkill = ["relongyin", trigger.player];
      next.set("ai", function(card2) {
        if (_status.event.go) {
          return 6 - get.value(card2);
        }
        return 0;
      });
      next.set("go", go);
      if (result.bool) {
        if (trigger.addCount !== false) {
          trigger.addCount = false;
          const stat = trigger.player.getStat().card, name2 = trigger.card.name;
          if (typeof stat[name2] === "number") {
            stat[name2]--;
          }
        }
        if (get.color(trigger.card) == "red") {
          player.draw();
        }
        if (get.number(result.cards[0], player) == get.number(trigger.card)) {
          player.restoreSkill("jiezhong");
        }
      }
    },
    ai: {
      expose: 0.2
    },
    subSkill: {
      order: {
        mod: {
          aiOrder: (player2, card2, num2) => {
            if (num2 && card2.name === "sha" && get.color(card2) === "red") {
              let gp = game.findPlayer((current) => {
                return current.hasSkill("relongyin") && current.hasCard((i) => true, "he");
              });
              if (gp) {
                return num2 + 0.15 * Math.sign(get.attitude(player2, gp));
              }
            }
          }
        },
        trigger: { player: "dieAfter" },
        filter: (event2, player2) => {
          return !game.hasPlayer((current) => current.hasSkill("relongyin", null, null, false), true);
        },
        silent: true,
        forceDie: true,
        charlotte: true,
        content: () => {
          game.removeGlobalSkill("relongyin_order");
        }
      }
    }
  },
  jiezhong: {
    audio: 2,
    trigger: { player: "phaseUseBegin" },
    limited: true,
    skillAnimation: true,
    animationColor: "orange",
    filter(event2, player2) {
      return player2.countCards("h") < player2.maxHp;
    },
    content() {
      player.awakenSkill(event.name);
      player.draw(Math.min(5, player.maxHp - player.countCards("h")));
    }
  },
  //新郭淮
  decadejingce: {
    audio: 2,
    trigger: { player: "phaseJieshuBegin" },
    frequent: true,
    filter(event2, player2) {
      return player2.getHistory("useCard").length >= player2.hp;
    },
    content() {
      "step 0";
      var list = [], history = player.getHistory("useCard");
      for (var i of history) {
        let suit = get.suit(i.card);
        if (lib.suit.includes(suit)) {
          list.add(suit);
        }
        if (list.length >= player.hp) {
          break;
        }
      }
      if (list.length >= player.hp) {
        event.goon = true;
      } else {
        player.chooseControl("摸牌阶段", "出牌阶段").set("prompt", "精策：选择要执行的额外阶段");
      }
      const evt = trigger.getParent("phase", true, true);
      if (event.goon || result.index == 1) {
        if (evt?.phaseList) {
          evt.phaseList.splice(evt.num + 1, 0, `phaseUse|${event.name}`);
        }
      }
      if (event.goon || result.index == 0) {
        if (evt?.phaseList) {
          evt.phaseList.splice(evt.num + 1, 0, `phaseDraw|${event.name}`);
        }
      }
    }
  },
  //新于禁
  decadezhenjun: {
    audio: 2,
    trigger: {
      player: ["phaseZhunbeiBegin", "phaseJieshuBegin"]
    },
    filter(event2, player2) {
      return game.hasPlayer(function(current) {
        return current.countDiscardableCards(player2, "he") > 0;
      });
    },
    direct: true,
    content() {
      "step 0";
      player.chooseTarget(get.prompt2("decadezhenjun"), function(card2, player2, target3) {
        return target3.countDiscardableCards(player2, "he") > 0;
      }).set("ai", function(target3) {
        const player2 = get.player();
        return -get.attitude(player2, target3) * (target3.countDiscardableCards(player2, "e") + 1);
      });
      if (result.bool) {
        var target2 = result.targets[0];
        event.target = target2;
        var num2 = Math.min(Math.max(target2.countCards("h") - target2.hp, 1), target2.countDiscardableCards(player, "he"));
        player.logSkill("decadezhenjun", target2);
        player.discardPlayerCard(num2, target2, true, "allowChooseAll");
      }
      if (result.cards && result.cards.length) {
        for (var i = 0; i < result.cards.length; i++) {
          if (get.type(result.cards[i]) == "equip") {
            event.finish();
            return;
          }
        }
        event.num = result.cards.length;
        if (event.num > 0) {
          var prompt = "弃置一张牌，或令" + get.translation(event.target) + "摸" + get.cnNumber(event.num) + "张牌";
          player.chooseToDiscard(prompt, "he").ai = function(card2) {
            return 7 - get.value(card2);
          };
        } else {
          event.finish();
        }
      } else {
        event.finish();
      }
      if (!result.bool) {
        event.target.draw(event.num);
      }
    }
  },
  //界姜维
  oltiaoxin: {
    audio: "tiaoxin",
    audioname: ["sp_jiangwei", "xiahouba", "re_jiangwei", "gz_jiangwei", "ol_jiangwei"],
    enable: "phaseUse",
    usable(skill, player2) {
      return 1 + (player2.hasSkill(skill + "_rewrite", null, null, false) ? 1 : 0);
    },
    filter(event2, player2) {
      return game.hasPlayer((target2) => lib.skill.oltiaoxin.filterTarget(null, player2, target2));
    },
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.inRange(player2) && target2.countCards("he") > 0;
    },
    async content(event2, trigger2, player2) {
      const { target: target2 } = event2;
      const result2 = await target2.chooseToUse(
        function(card2, player3, event3) {
          if (get.name(card2) != "sha") {
            return false;
          }
          return lib.filter.filterCard.apply(this, arguments);
        },
        "挑衅：对" + get.translation(player2) + "使用一张杀，或令其弃置你的一张牌"
      ).set("targetRequired", true).set("complexSelect", true).set("complexTarget", true).set("filterTarget", function(card2, player3, target3) {
        if (target3 != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) {
          return false;
        }
        return lib.filter.filterTarget.apply(this, arguments);
      }).set("sourcex", player2).forResult();
      if (!result2.bool || !player2.hasHistory("damage", (evt) => {
        return evt.getParent().type == "card" && evt.getParent(4) == event2;
      })) {
        if (target2.countDiscardableCards(player2, "he") > 0) {
          await player2.discardPlayerCard(target2, "he", true).set("boolline", true);
        }
        player2.addTempSkill(event2.name + "_rewrite", "phaseUseEnd");
      }
    },
    ai: {
      order: 4,
      expose: 0.2,
      result: {
        target: -1,
        player(player2, target2) {
          if (target2.countCards("h") == 0) {
            return 0;
          }
          if (target2.countCards("h") == 1) {
            return -0.1;
          }
          if (player2.hp <= 2) {
            return -2;
          }
          if (player2.countCards("h", "shan") == 0) {
            return -1;
          }
          return -0.5;
        }
      },
      threaten: 1.1
    },
    subSkill: { rewrite: { charlotte: true } }
  },
  olzhiji: {
    skillAnimation: true,
    animationColor: "fire",
    audio: 2,
    juexingji: true,
    //priority:-10,
    derivation: "reguanxing",
    trigger: { player: ["phaseZhunbeiBegin", "phaseJieshuBegin"] },
    forced: true,
    filter(event2, player2) {
      return player2.countCards("h") == 0;
    },
    content() {
      "step 0";
      player.awakenSkill(event.name);
      player.chooseDrawRecover(2, true);
      player.loseMaxHp();
      player.addSkills("reguanxing");
    }
  },
  //界郭图张嶷
  rejigong: {
    audio: 2,
    direct: true,
    trigger: { player: "phaseUseBegin" },
    content() {
      "step 0";
      player.chooseControl("一张", "两张", "三张", "cancel2").set("prompt", get.prompt2("rejigong")).set("ai", () => "三张");
      if (result.control != "cancel2") {
        player.logSkill("rejigong");
        player.addTempSkill("rejigong2");
        player.draw(1 + result.index);
      }
    }
  },
  rejigong2: {
    audio: "rejigong",
    mod: {
      maxHandcardBase(player2) {
        if (game.online) {
          return player2.getStat("damage") || 0;
        }
        var num2 = 0;
        player2.getHistory("sourceDamage", function(evt) {
          num2 += evt.num;
        });
        return num2;
      }
    },
    trigger: { player: "phaseDiscardEnd" },
    forced: true,
    charlotte: true,
    sourceSkill: "rejigong",
    filter(event2, player2) {
      if (player2.isHealthy()) {
        return false;
      }
      var num2 = 0;
      player2.getHistory("sourceDamage", function(evt) {
        num2 += evt.num;
      });
      if (!num2) {
        return false;
      }
      var num22 = 0;
      player2.getHistory("gain", function(evt) {
        var evtx = evt.getParent(2);
        if (evtx.name == "rejigong" && evtx.player == player2) {
          num22 += evt.cards.length;
        }
      });
      return num2 >= num22;
    },
    content() {
      player.recover();
    }
  },
  reshizhi: {
    audio: 2,
    mod: {
      cardname(card2, player2) {
        if (card2.name == "shan" && player2.hp == 1) {
          return "sha";
        }
      }
    },
    trigger: { source: "damageEnd" },
    forced: true,
    filter(event2, player2) {
      return event2.card && event2.card.name == "sha" && player2.hp == 1 && event2.cards && event2.cards.length == 1 && event2.cards[0].name == "shan";
    },
    content() {
      player.recover();
    },
    ai: {
      halfneg: true
    }
  },
  //界陈群
  redingpin: {
    audio: 2,
    enable: "phaseUse",
    onChooseToUse(event2) {
      if (event2.type != "phase" || game.online) {
        return;
      }
      var list = [], player2 = event2.player;
      player2.getHistory("useCard", function(evt) {
        list.add(get.type2(evt.card));
      });
      player2.getHistory("lose", function(evt) {
        if (evt.type != "discard" || evt.getParent(2).redingpin_ignore) {
          return;
        }
        for (var i of evt.cards2) {
          list.add(get.type2(i, evt.hs.includes(i) ? player2 : false));
        }
      });
      event2.set("redingpin_types", list);
    },
    filter(event2, player2) {
      var list = event2.redingpin_types || [];
      return player2.countCards("he", function(card2) {
        return !list.includes(get.type2(card2));
      }) > 0;
    },
    filterCard(card2) {
      var list = _status.event.redingpin_types || [];
      return !list.includes(get.type2(card2));
    },
    position: "he",
    filterTarget(card2, player2, target2) {
      return !target2.hasSkill("redingpin2");
    },
    content() {
      "step 0";
      target.judge(function(card2) {
        var evt = _status.event.getParent("redingpin"), suit = get.suit(card2);
        switch (suit) {
          case "club":
          case "spade":
            return evt.target.hp;
          case "diamond":
            return get.sgn(get.attitude(evt.target, evt.player)) * -3;
        }
        return 0;
      }).judge2 = function(result2) {
        if (result2.color == "black") {
          return true;
        }
        return false;
      };
      switch (result.suit) {
        case "spade":
        case "club":
          if (target.hp > 0) {
            target.draw(Math.min(3, target.hp));
          }
          target.addTempSkill("redingpin2");
          break;
        case "heart":
          event.getParent().redingpin_ignore = true;
          break;
        case "diamond":
          player.turnOver();
          break;
      }
    },
    ai: {
      order: 9,
      result: {
        target(player2, target2) {
          if (player2.isTurnedOver()) {
            return target2.hp;
          }
          var card2 = ui.cardPile.firstChild;
          if (!card2) {
            return;
          }
          if (get.color(card2) == "black") {
            return target2.hp;
          }
          return 0;
        }
      }
    }
  },
  redingpin2: { charlotte: true },
  refaen: {
    audio: 2,
    audioname: ["dc_chenqun"],
    trigger: { global: ["turnOverAfter", "linkAfter"] },
    logTarget: "player",
    filter(event2, player2) {
      if (event2.name == "link") {
        return event2.player.isLinked();
      }
      return true;
    },
    check(event2, player2) {
      return get.attitude(player2, event2.player) > 0;
    },
    content() {
      trigger.player.draw();
    },
    global: "faen_global"
  },
  dcfaen: {
    audio: "refaen",
    audioname: ["dc_chenqun"],
    trigger: { global: ["turnOverAfter", "linkAfter"] },
    logTarget: "player",
    filter(event2, player2) {
      if (event2.name == "link") {
        return event2.player.isLinked();
      }
      return !event2.player.isTurnedOver();
    },
    check(event2, player2) {
      return get.attitude(player2, event2.player) > 0;
    },
    content() {
      trigger.player.draw();
    },
    global: "faen_global"
  },
  //界曹彰
  xinjiangchi: {
    audio: 2,
    trigger: { player: "phaseUseBegin" },
    direct: true,
    content() {
      "step 0";
      var list = ["摸一张牌", "摸两张牌，本回合内不能使用或打出【杀】"];
      if (player.countCards("he", function(card2) {
        return lib.filter.cardDiscardable(card2, player, "xinjiangchi") > 0;
      }) > 0) {
        list.push("弃置一张牌，本回合可以多使用一张【杀】且无距离限制");
      }
      player.chooseControl("cancel2").set("prompt", get.prompt("xinjiangchi")).set("choiceList", list).set("ai", function() {
        var player2 = _status.event.player;
        if (!player2.countCards("hs", function(card2) {
          return get.name(card2) == "sha" && player2.hasValueTarget(card2, false);
        })) {
          return 1;
        }
        return 0;
      });
      if (result.control != "cancel2") {
        player.logSkill("xinjiangchi");
        switch (result.index) {
          case 0: {
            player.draw();
            break;
          }
          case 1: {
            player.draw(2);
            player.addTempSkill("xinjiangchi_less");
            break;
          }
          case 2: {
            player.chooseToDiscard("he", true);
            player.addTempSkill("xinjiangchi_more");
            break;
          }
        }
      }
    },
    subSkill: {
      less: {
        mod: {
          cardEnabled(card2) {
            if (card2.name == "sha") {
              return false;
            }
          },
          cardRespondable(card2) {
            if (card2.name == "sha") {
              return false;
            }
          }
        },
        charlotte: true
      },
      more: {
        mod: {
          cardUsable(card2, player2, num2) {
            if (card2.name == "sha") {
              return num2 + 1;
            }
          },
          targetInRange(card2) {
            if (card2.name == "sha") {
              return true;
            }
          }
        },
        charlotte: true
      }
    }
  },
  //界周仓和程普
  ollihuo: {
    mod: {
      aiOrder(player2, card2, num2) {
        if (card2.name == "sha" && !player2.getHistory("useCard").length) {
          return num2 + 7;
        }
      }
    },
    trigger: { player: "useCard1" },
    filter(event2, player2) {
      if (event2.card.name == "sha" && !game.hasNature(event2.card)) {
        return true;
      }
      return false;
    },
    audio: "lihuo",
    locked: false,
    prompt2(event2) {
      return "将" + get.translation(event2.card) + "改为火属性";
    },
    audioname: ["re_chengpu"],
    check(event2, player2) {
      return (event2.baseDamage > 1 || player2.getHistory("useCard").indexOf(event2) == 0) && (player2.hp > 1 || player2.getExpansions("rechunlao").length) && game.hasPlayer(function(current) {
        return !event2.targets.includes(current) && player2.canUse(event2.card, current) && get.attitude(player2, current) < 0 && !current.hasShan() && get.effect(current, { name: "sha", nature: "fire" }, player2, player2) > 0;
      });
    },
    content() {
      game.setNature(trigger.card, "fire");
      trigger.lihuo_changed = true;
    },
    group: ["ollihuo2", "ollihuo3", "ollihuo4"],
    ai: {
      fireAttack: true
    }
  },
  ollihuo2: {
    trigger: { player: "useCard2" },
    sourceSkill: "ollihuo",
    filter(event2, player2) {
      if (event2.card.name != "sha" || !game.hasNature(event2.card, "fire")) {
        return false;
      }
      return game.hasPlayer(function(current) {
        return !event2.targets.includes(current) && lib.filter.targetEnabled(event2.card, player2, current) && lib.filter.targetInRange(event2.card, player2, current);
      });
    },
    direct: true,
    content() {
      "step 0";
      player.chooseTarget(get.prompt("ollihuo"), "为" + get.translation(trigger.card) + "增加一个目标", function(card2, player2, target2) {
        return !_status.event.sourcex.includes(target2) && lib.filter.targetInRange(_status.event.card, player2, target2) && lib.filter.targetEnabled(_status.event.card, player2, target2);
      }).set("sourcex", trigger.targets).set("card", trigger.card).set("ai", function(target2) {
        var player2 = _status.event.player;
        return get.effect(target2, _status.event.card, player2, player2);
      });
      if (result.bool) {
        if (!event.isMine() && !_status.connectMode) {
          game.delayx();
        }
        event.target = result.targets[0];
      } else {
        event.finish();
      }
      player.logSkill("ollihuo", event.target);
      trigger.targets.push(event.target);
    }
  },
  ollihuo3: {
    trigger: { player: "useCardEnd" },
    sourceSkill: "ollihuo",
    filter(event2, player2) {
      return event2.lihuo_changed == true && player2.getHistory("sourceDamage", function(evt) {
        return evt.card == event2.card;
      }).length > 0;
    },
    forced: true,
    audio: "lihuo",
    audioname: ["re_chengpu"],
    content() {
      player.loseHp();
    }
  },
  ollihuo4: {
    trigger: { player: "useCardAfter" },
    frequent: true,
    audio: "lihuo",
    audioname: ["re_chengpu"],
    sourceSkill: "ollihuo",
    filter(event2, player2) {
      return event2.card.name == "sha" && player2.getHistory("useCard").indexOf(event2) == 0 && event2.cards.filterInD().length > 0;
    },
    content() {
      var cards2 = trigger.cards.filterInD();
      player.addToExpansion("gain2", cards2).gaintag.add("rechunlao");
    }
  },
  rezhongyong: {
    trigger: { player: "useCardAfter" },
    audio: 2,
    direct: true,
    filter(event2, player2) {
      return event2.card.name == "sha";
    },
    content() {
      "step 0";
      event.cards = trigger.cards.filterInD();
      game.countPlayer2(function(current) {
        current.getHistory("useCard", function(evt) {
          if (evt.card.name == "shan" && evt.getParent(3) == trigger) {
            event.cards.addArray(evt.cards.filterInD("od"));
          }
        });
      });
      if (!event.cards.length) {
        event.finish();
      }
      player.chooseTarget(get.prompt2("rezhongyong"), "令一名其他角色获得" + get.translation(event.cards), function(card2, player2, target3) {
        return !_status.event.source.includes(target3) && target3 != player2;
      }).set("ai", function(target3) {
        return get.attitude(_status.event.player, target3);
      }).set("source", trigger.targets);
      if (result.bool) {
        var target2 = result.targets[0];
        player.logSkill("rezhongyong", target2);
        target2.gain(cards, "gain2");
        var red = false, black = false;
        for (var i of cards) {
          var color = get.color(i, false);
          if (color == "red") {
            red = true;
          }
          if (color == "black") {
            black = true;
          }
          if (red && black) {
            break;
          }
        }
        if (red) {
          target2.chooseToUse("是否使用一张杀？", { name: "sha" }).set("filterTarget", function(card2, player2, target3) {
            return target3 != _status.event.sourcex && _status.event.sourcex.inRange(target3) && lib.filter.targetEnabled.apply(this, arguments);
          }).set("sourcex", player).set("addCount", false);
        }
        if (black) {
          target2.draw();
        }
      }
    }
  },
  //长标
  changbiao: {
    audio: 2,
    mod: {
      targetInRange(card2, player2, target2) {
        if (card2.changbiao) {
          return true;
        }
      }
    },
    enable: "phaseUse",
    usable: 1,
    viewAs: {
      name: "sha",
      changbiao: true
    },
    locked: false,
    filter(event2, player2) {
      return player2.countCards("hs") > 0;
    },
    filterCard: true,
    selectCard: [1, Infinity],
    allowChooseAll: true,
    position: "hs",
    check(card2) {
      let player2 = _status.event.player;
      if (ui.selected.cards.length) {
        let list = game.filterPlayer(function(current) {
          return current !== player2 && player2.canUse("sha", current, false) && get.effect(current, { name: "sha" }, player2, player2) > 0;
        }).sort(function(a, b) {
          return get.effect(b, { name: "sha" }, player2, player2) - get.effect(a, { name: "sha" }, player2, player2);
        });
        if (!list.length) {
          return 0;
        }
        let target2 = list[0], cards2 = ui.selected.cards.concat([card2]), color = [];
        for (let i of cards2) {
          if (!color.includes(get.color(i, player2))) {
            color.add(get.color(i, player2));
          }
        }
        if (color.length !== 1) {
          color[0] = "none";
        }
        if (player2.hasSkillTag(
          "directHit_ai",
          true,
          {
            target: target2,
            card: {
              name: "sha",
              suit: "none",
              color: color[0],
              cards: cards2,
              isCard: true
            }
          },
          true
        )) {
          return 6.5 - get.value(card2, player2);
        }
        if (Math.random() * target2.countCards("hs") < 1 || player2.needsToDiscard(0, (i, player3) => {
          return !ui.selected.cards.includes(i) && !player3.canIgnoreHandcard(i);
        })) {
          return 6 - get.value(card2, player2);
        }
        return 0;
      }
      return 6.3 - get.value(card2);
    },
    onuse(result2, player2) {
      player2.addTempSkill("changbiao_draw");
    },
    subSkill: {
      draw: {
        audio: "changbiao",
        trigger: { player: "phaseUseEnd" },
        forced: true,
        charlotte: true,
        filter(event2, player2) {
          return player2.hasHistory("sourceDamage", function(evxt) {
            var evt = evxt.getParent();
            return evt && evt.name == "sha" && evt.skill == "changbiao" && evt.getParent("phaseUse") == event2;
          });
        },
        content() {
          let cards2 = [];
          player.getHistory("sourceDamage", function(evxt) {
            var evt = evxt.getParent();
            if (evt && evt.name == "sha" && evt.skill == "changbiao" && evt.getParent("phaseUse") == trigger) {
              cards2.addArray(evt.cards);
            }
          });
          if (cards2.length) {
            player.draw(cards2.length);
          }
        }
      }
    },
    ai: {
      order(item, player2) {
        return get.order({ name: "sha" }, player2) + 0.3 * (Math.min(
          player2.getCardUsable("sha"),
          player2.countCards("hs", "sha") + player2.hasCard(function(card2) {
            return card2.name != "sha" && get.value(card2, player2) < 6.3;
          }, "hs") ? 1 : 0
        ) > 1 ? -1 : 1);
      },
      nokeep: true,
      skillTagFilter(player2, tag, arg) {
        if (tag === "nokeep") {
          let num2 = 0;
          if (arg && (!arg.card || get.name(arg.card) !== "tao")) {
            return false;
          }
          player2.getHistory("sourceDamage", function(evxt) {
            let evt = evxt.getParent();
            if (evt && evt.name == "sha" && evt.skill == "changbiao") {
              num2 += evt.cards.length;
            }
          });
          return player2.needsToDiscard(num2) > 0;
        }
      }
    }
  },
  //国钟会
  gzquanji: {
    audio: 2,
    trigger: {
      player: "damageEnd",
      source: "damageSource"
    },
    frequent: true,
    preHidden: true,
    filter(event2, player2, name2) {
      if (player2.getStorage("gzquanji_used").includes(name2)) {
        return false;
      }
      return true;
    },
    content() {
      "step 0";
      player.addTempSkill("gzquanji_used");
      player.markAuto("gzquanji_used", event.triggername);
      player.draw();
      var hs = player.getCards("he");
      if (hs.length > 0) {
        if (hs.length == 1) {
          event._result = { bool: true, cards: hs };
        } else {
          player.chooseCard("he", true, "选择一张牌作为“权”");
        }
      } else {
        event.finish();
      }
      if (result.bool) {
        var cs = result.cards;
        player.addToExpansion(cs, player, "give").gaintag.add("gzquanji");
      }
    },
    intro: {
      content: "expansion",
      markcount: "expansion"
    },
    onremove(player2, skill) {
      var cards2 = player2.getExpansions(skill);
      if (cards2.length) {
        player2.loseToDiscardpile(cards2);
      }
    },
    locked: false,
    mod: {
      maxHandcard(player2, num2) {
        return num2 + player2.getExpansions("gzquanji").length;
      }
    },
    ai: {
      notemp: true
    },
    subSkill: {
      used: {
        onremove: true,
        charlotte: true
      }
    }
  },
  gzpaiyi: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return player2.getExpansions("gzquanji").length > 0;
    },
    chooseButton: {
      dialog(event2, player2) {
        return ui.create.dialog("排异", player2.getExpansions("gzquanji"), "hidden");
      },
      backup(links, player2) {
        return {
          audio: "gzpaiyi",
          filterTarget: true,
          filterCard() {
            return false;
          },
          selectCard: -1,
          card: links[0],
          delay: false,
          content: lib.skill.gzpaiyi.contentx,
          ai: {
            order: 10,
            result: {
              target(player3, target2) {
                if (target2 != player3) {
                  return 0;
                }
                if (player3.getExpansions("gzquanji").length <= 1 || player3.needsToDiscard() && !player3.getEquip("zhuge") && !player3.hasSkill("new_paoxiao")) {
                  return 0;
                }
                return 1;
              }
            }
          }
        };
      },
      prompt() {
        return "请选择【排异】的目标";
      }
    },
    contentx() {
      "step 0";
      var card2 = lib.skill.gzpaiyi_backup.card;
      player.loseToDiscardpile(card2);
      var num2 = player.getExpansions("gzquanji").length;
      if (num2 > 0) {
        target.draw(Math.min(7, num2));
      }
      if (target.countCards("h") > player.countCards("h")) {
        target.damage();
      }
    },
    ai: {
      order(item, player2) {
        var num2 = player2.getExpansions("gzquanji").length;
        if (num2 == 1) {
          return 8;
        }
        return 1;
      },
      result: {
        player: 1
      },
      combo: "gzquanji"
    }
  },
  gzquanji2: { charlotte: true },
  xingongji: {
    enable: "phaseUse",
    usable: 1,
    audio: 2,
    position: "he",
    filterCard: true,
    filter(event2, player2) {
      return player2.countCards("he") > 0;
    },
    check(card2) {
      var base = 0, player2 = _status.event.player, suit = get.suit(card2, player2), added = false, added2 = false, added3;
      if (get.type(card2) == "equip" && game.hasPlayer(function(target2) {
        var att = get.attitude(player2, target2);
        if (att >= 0) {
          return 0;
        }
        if (target2.countCards("he", function(card3) {
          return get.value(card3) > 5;
        })) {
          return -att;
        }
      })) {
        base += 6;
      }
      var hs = player2.getCards("h");
      var muniu = player2.getEquip("muniu");
      if (muniu && card2 != muniu && muniu.cards) {
        hs = hs.concat(muniu.cards);
      }
      for (var i of hs) {
        if (i != card2 && get.name(i) == "sha") {
          if (get.suit(i, player2) == suit) {
            if (player2.hasValueTarget(i, false)) {
              added3 = true;
              base += 5.5;
            }
          } else {
            if (player2.hasValueTarget(i, false)) {
              added2 = true;
            }
            if (!added && !player2.hasValueTarget(i, null, true) && player2.hasValueTarget(i, false, true)) {
              base += 4;
              added = true;
            }
          }
        }
      }
      if (added3 && !added2) {
        base -= 4.5;
      }
      return base - get.value(card2);
    },
    content() {
      "step 0";
      if (!player.storage.xingongji2) {
        player.storage.xingongji2 = [];
      }
      player.storage.xingongji2.add(get.suit(cards[0], player));
      player.addTempSkill("xingongji2");
      if (get.type(cards[0], null, cards[0].original == "h" ? player : false) == "equip") {
        player.chooseTarget("是否弃置一名角色的一张牌？", function(card2, player2, target2) {
          return player2 != target2 && target2.countCards("he") > 0;
        }).set("ai", function(target2) {
          var att = get.attitude(player, target2);
          if (att >= 0) {
            return 0;
          }
          if (target2.countCards("he", function(card2) {
            return get.value(card2) > 5;
          })) {
            return -att;
          }
          return -att * 0.8;
        });
      } else {
        event.finish();
      }
      if (result.bool) {
        player.line(result.targets, "green");
        player.discardPlayerCard(result.targets[0], "he", true);
      }
    },
    ai: {
      order: 4.5,
      result: {
        player: 1
      }
    }
  },
  xingongji2: {
    charlotte: true,
    onremove: true,
    mod: {
      attackRangeBase() {
        return Infinity;
      },
      cardUsable(card2, player2) {
        if (card2.name == "sha") {
          const suit = get.suit(card2);
          if (suit === "unsure" || player2.storage.xingongji2.includes(suit)) {
            return Infinity;
          }
        }
      },
      aiOrder(player2, card2, num2) {
        if (get.name(card2) == "sha" && !player2.storage.xingongji2.includes(get.suit(card2))) {
          return num2 + 1;
        }
      }
    },
    mark: true,
    intro: {
      content: "使用$花色的杀无次数限制"
    }
  },
  xinjiefan: {
    skillAnimation: true,
    animationColor: "wood",
    audio: 2,
    limited: true,
    enable: "phaseUse",
    filterTarget: true,
    content() {
      "step 0";
      player.awakenSkill(event.name);
      event.players = game.filterPlayer(function(current) {
        return current != target && current.inRange(target);
      });
      event.players.sortBySeat();
      if (event.players.length) {
        event.current = event.players.shift();
        event.current.addTempClass("target");
        player.line(event.current, "green");
        if (event.current.countCards("he") && target.isIn()) {
          event.current.chooseToDiscard({ subtype: "equip1" }, "he", "弃置一张武器牌或让" + get.translation(target) + "摸一张牌").set("ai", function(card2) {
            if (get.attitude(_status.event.player, _status.event.target) < 0) {
              return 7 - get.value(card2);
            }
            return -1;
          }).set("target", target);
          event.tempbool = false;
        } else {
          event.tempbool = true;
        }
      } else {
        if (game.roundNumber <= 1) {
          player.addTempSkill("xinjiefan2");
        }
        event.finish();
      }
      if (event.tempbool || result.bool == false) {
        target.draw();
      }
      event.goto(1);
    },
    ai: {
      order: 5,
      result: {
        target(player2, target2) {
          if (player2.hp > 2 && game.roundNumber > 1) {
            if (game.phaseNumber < game.players.length * 2) {
              return 0;
            }
          }
          var num2 = 0, players = game.filterPlayer();
          for (var i = 0; i < players.length; i++) {
            if (players[i] != target2 && players[i].inRange(target2)) {
              num2++;
            }
          }
          return num2;
        }
      }
    }
  },
  xinjiefan2: {
    trigger: { player: "phaseEnd" },
    forced: true,
    popup: false,
    sourceSkill: "xinjiefan",
    content() {
      player.restoreSkill("xinjiefan");
    }
  },
  residi: {
    trigger: { player: "phaseJieshuBegin" },
    direct: true,
    audio: 2,
    filter(event2, player2) {
      return player2.countCards("he", function(card2) {
        if (_status.connectMode) {
          return true;
        }
        return get.type(card2) != "basic";
      }) > 0;
    },
    content() {
      "step 0";
      player.chooseCard("he", get.prompt("residi"), "将一张非基本牌置于武将牌上作为“司”", function(card2, player2) {
        return get.type(card2) != "basic";
      }).set("ai", function(card2) {
        if (get.position(card2) == "e") {
          return 5 + player.hp - get.value(card2);
        }
        return 7 - get.value(card2);
      });
      if (result.bool) {
        player.logSkill("residi");
        player.addToExpansion(result.cards, "give", player).gaintag.add("residi");
      }
    },
    intro: {
      content: "expansion",
      markcount: "expansion"
    },
    onremove(player2, skill) {
      var cards2 = player2.getExpansions(skill);
      if (cards2.length) {
        player2.loseToDiscardpile(cards2);
      }
    },
    group: "residi_push",
    ai: {
      notemp: true
    }
  },
  residi_push: {
    trigger: { global: "phaseUseBegin" },
    direct: true,
    sourceSkill: "residi",
    filter(event2, player2) {
      return event2.player != player2 && player2.getExpansions("residi").length > 0;
    },
    content() {
      "step 0";
      player.chooseButton([get.prompt("residi", trigger.player), player.getExpansions("residi")]).set("ai", function(button) {
        var player2 = _status.event.player;
        var target3 = _status.event.getTrigger().player;
        if (get.attitude(player2, target3) > -1) {
          return 0;
        }
        button.link;
        var color2 = get.color(button.link, false);
        var eff = target3.countCards("h", function(card3) {
          return get.color(card3, target3) == color2 && target3.hasValueTarget(card3);
        });
        if (!target3.countCards("h", function(card3) {
          return get.color(card3, target3) == color2 && get.name(card3, target3) == "sha" && target3.hasValueTarget(card3);
        })) {
          eff += 1.5;
        }
        if (!target3.countCards("h", function(card3) {
          return get.color(card3, target3) == color2 && get.type2(card3, target3) == "trick" && target3.hasValueTarget(card3);
        })) {
          eff += 1.5;
        }
        return eff - 1;
      });
      if (result.bool) {
        if (!trigger.residi) {
          trigger.residi = [];
        }
        trigger.residi.push(player);
        var card2 = result.links[0];
        var target2 = trigger.player;
        player.logSkill("residi", target2);
        player.loseToDiscardpile(card2);
        var color = get.color(card2, false);
        if (!target2.storage.residi2) {
          target2.storage.residi2 = [];
        }
        target2.storage.residi2.add(color);
        target2.addTempSkill("residi2", "phaseUseAfter");
        target2.markSkill("residi2");
        player.addTempSkill("residi3", "phaseUseAfter");
      }
    }
  },
  residi2: {
    onremove: true,
    mod: {
      cardEnabled(card2, player2) {
        if (player2.getStorage("residi2").includes(get.color(card2, player2))) {
          return false;
        }
      },
      cardRespondable(card2, player2) {
        if (player2.getStorage("residi2").includes(get.color(card2, player2))) {
          return false;
        }
      },
      cardSavable(card2, player2) {
        if (player2.getStorage("residi2").includes(get.color(card2, player2))) {
          return false;
        }
      }
    },
    intro: {
      content: "不能使用或打出$牌"
    },
    marktext: "敌"
  },
  residi3: {
    audio: "residi",
    trigger: { global: "phaseUseEnd" },
    forced: true,
    sourceSkill: "residi",
    filter(event2, player2) {
      if (!event2.residi || !event2.residi.includes(player2)) {
        return false;
      }
      var sha = player2.canUse("sha", event2.player, false), trick = true;
      event2.player.getHistory("useCard", function(evt) {
        if (evt.getParent("phaseUse") != event2) {
          return false;
        }
        if (sha && evt.card.name == "sha") {
          sha = false;
        }
        if (trick && get.type2(evt.card, false) == "trick") {
          trick = false;
        }
      });
      return sha || trick;
    },
    content() {
      var sha = player.canUse("sha", trigger.player, false), trick = true;
      trigger.player.getHistory("useCard", function(evt) {
        if (evt.getParent("phaseUse") != trigger) {
          return false;
        }
        if (sha && evt.card.name == "sha") {
          sha = false;
        }
        if (trick && get.type2(evt.card, false) == "trick") {
          trick = false;
        }
      });
      if (sha) {
        player.useCard({ name: "sha", isCard: true }, trigger.player);
      }
      if (trick) {
        player.draw(2);
      }
    }
  },
  rehuaiyi: {
    audio: 2,
    enable: "phaseUse",
    usable(skill, player2) {
      return 1 + (player2.hasSkill(skill + "_rewrite", null, null, false) ? 1 : 0);
    },
    delay: false,
    filter(event2, player2) {
      return player2.countCards("h");
    },
    async content(event2, trigger2, player2) {
      await player2.showHandcards();
      const hs = player2.getCards("h"), color = get.color(hs[0], player2);
      if (hs.length === 1 || !hs.some((card2, index) => {
        return index > 0 && get.color(card2) !== color;
      })) {
        await player2.draw();
        player2.addTempSkill(event2.name + "_rewrite", "phaseUseEnd");
      } else {
        const list = [], bannedList = [], indexs = Object.keys(lib.color);
        player2.getCards("h").forEach((card2) => {
          const color2 = get.color(card2, player2);
          list.add(color2);
          if (!lib.filter.cardDiscardable(card2, player2, "rehuaiyi")) {
            bannedList.add(color2);
          }
        });
        list.removeArray(bannedList);
        list.sort((a, b) => indexs.indexOf(a) - indexs.indexOf(b));
        let result2;
        if (!list.length) {
          return;
        } else if (list.length === 1) {
          result2 = { control: list[0] };
        } else {
          result2 = await player2.chooseControl(list.map((i) => `${i}2`)).set("ai", () => {
            const player3 = get.player();
            if (player3.countCards("h", { color: "red" }) == 1 && player3.countCards("h", { color: "black" }) > 1) {
              return 1;
            }
            return 0;
          }).set("prompt", "请选择弃置一种颜色的所有手牌").forResult();
        }
        const control = result2.control.slice(0, -1);
        const cards2 = player2.getCards("h", { color: control }), num2 = cards2.length;
        await player2.discard(cards2);
        const { targets: targets2 } = await player2.chooseTarget(`请选择至多${get.cnNumber(num2)}名有牌的其他角色，获得这些角色的各一张牌。`, [1, num2], (card2, player3, target2) => {
          return target2 != player3 && target2.countGainableCards(player3, "he");
        }).set("ai", (target2) => {
          return -get.attitude(get.player(), target2) + 0.5;
        }).forResult();
        if (!targets2 || !targets2.length) {
          return;
        }
        player2.line(targets2, "green");
        for (const target2 of targets2.sortBySeat()) {
          if (target2.isIn() && target2.countGainableCards(player2, "he")) {
            await player2.gainPlayerCard(target2, "he", true);
          }
        }
        if (player2.getHistory("gain", (evt) => evt.getParent(2) == event2).reduce((sum, evt) => sum + evt.cards.length, 0) > 1) {
          await player2.loseHp();
        }
      }
    },
    ai: {
      order(item, player2) {
        if (player2.countCards("h", { color: "red" }) == 0) {
          return 10;
        }
        if (player2.countCards("h", { color: "black" }) == 0) {
          return 10;
        }
        return 1;
      },
      result: {
        player: 1
      }
    },
    subSkill: { rewrite: { charlotte: true } }
  },
  rezhuikong: {
    audio: 2,
    audioname: ["ol_fuhuanghou"],
    audioname2: { tw_fuhuanghou: "xinzhuikong" },
    trigger: { global: "phaseZhunbeiBegin" },
    check(event2, player2) {
      if (get.attitude(player2, event2.player) < -2) {
        var cards2 = player2.getCards("h");
        if (cards2.length > player2.hp) {
          return true;
        }
        for (var i = 0; i < cards2.length; i++) {
          var useful = get.useful(cards2[i]);
          if (useful < 5) {
            return true;
          }
          if (get.number(cards2[i]) > 7 && useful < 7) {
            return true;
          }
        }
      }
      return false;
    },
    logTarget: "player",
    filter(event2, player2) {
      return player2.hp < player2.maxHp && player2.canCompare(event2.player);
    },
    async content(event2, trigger2, player2) {
      const { player: target2 } = trigger2;
      const result2 = await player2.chooseToCompare(target2).set("small", player2.hp > 1 && get.effect(player2, { name: "sha" }, target2, player2) > 0 && Math.random() < 0.9).forResult();
      if (result2.bool) {
        target2.addTempSkill("zishou2");
      } else {
        if (result2.target && get.position(result2.target) == "d") {
          await player2.gain(result2.target, "gain2", "log");
        }
        const card2 = { name: "sha", isCard: true };
        if (target2.canUse(card2, player2, false)) {
          await target2.useCard(card2, player2, false);
        }
      }
    }
  },
  reqiuyuan: {
    inherit: "qiuyuan",
    async content(event2, trigger2, player2) {
      const {
        targets: [target2]
      } = event2;
      const { card: card2 } = trigger2;
      const result2 = await target2.chooseToGive(
        (card3, player3) => {
          const name2 = get.name(card3, player3);
          return name2 != "sha" && get.type(name2) == "basic";
        },
        `交给${get.translation(player2)}一张不为【杀】的基本牌，或成为${get.translation(card2)}的额外目标且不可响应此牌`,
        player2
      ).set("ai", (card3) => {
        const { player: player3, target: target3 } = get.event();
        return get.attitude(player3, target3) >= 0 ? 1 : -1;
      }).forResult();
      if (!result2?.bool) {
        trigger2.getParent().targets.push(target2);
        trigger2.getParent().triggeredTargets2.push(target2);
        trigger2.directHit.push(target2);
        game.log(target2, "成为了", card2, "的额外目标");
      }
    }
  },
  reenyuan: {
    audio: 2,
    group: ["reenyuan1", "reenyuan2"]
  },
  reenyuan1: {
    audio: "reenyuan",
    inherit: "xinenyuan1",
    sourceSkill: "reenyuan"
  },
  reenyuan2: {
    audio: "reenyuan",
    inherit: "xinenyuan2",
    sourceSkill: "reenyuan",
    prompt2: (event2) => `令${get.translation(event2.source)}选择一项：1.失去1点体力；2.交给你一张手牌，若此牌的花色不为♥，你摸一张牌。`,
    async content(event2, trigger2, player2) {
      const result2 = await trigger2.source.chooseToGive(`恩怨：交给${get.translation(player2)}一张手牌，或失去1点体力`, "h", player2).set("ai", (card2) => {
        const { player: player3, target: target2 } = get.event();
        if (get.attitude(player3, target2) > 0) {
          if (get.suit(card2) != "heart") {
            return 15 - get.value(card2);
          }
          return 11 - get.value(card2);
        } else {
          let num2 = 12 - player3.hp * 2;
          if (get.suit(card2) != "heart") {
            num2 -= 2;
          }
          return num2 - get.value(card2);
        }
      }).forResult();
      if (!result2?.bool || !result2?.cards?.length) {
        await trigger2.source.loseHp();
      } else if (result2?.cards?.length && get.suit(result2.cards[0]) !== "heart") {
        await player2.draw();
      }
    }
  },
  rexuanhuo: {
    audio: 2,
    trigger: { player: "phaseDrawEnd" },
    direct: true,
    filter(event2, player2) {
      return player2.countCards("h") > 1 && game.countPlayer() > 2;
    },
    content() {
      "step 0";
      var ai2 = function(target3) {
        var player2 = _status.event.player;
        if (get.attitude(player2, target3) <= 0) {
          return 0;
        }
        var list2 = [null, "juedou"].concat(lib.inpile_nature);
        if (target3.hasSkill("ayato_zenshen")) {
          list2.push("kami");
        }
        var num2 = Math.max.apply(
          Math,
          list2.map(function(i2) {
            if (i2 == "juedou") {
              return target3.getUseValue({ name: "juedou", isCard: true }, false);
            }
            var card2 = { name: "sha", nature: i2, isCard: true };
            return target3.getUseValue(card2, false);
          })
        );
        if (target3.hasSkillTag("nogain")) {
          num2 /= 4;
        }
        return num2;
      };
      player.chooseCardTarget({
        prompt: get.prompt2("rexuanhuo"),
        filterCard: true,
        selectCard: 2,
        position: "h",
        filterTarget: lib.filter.notMe,
        goon: game.hasPlayer(function(current) {
          return current != player && ai2(player) > 0;
        }),
        ai1(card2) {
          if (!_status.event.goon) {
            return 0;
          }
          return 7 - get.value(card2);
        },
        ai2
      });
      if (result.bool) {
        var target2 = result.targets[0];
        event.target = target2;
        player.logSkill("rexuanhuo", target2);
        player.give(result.cards, target2);
      } else {
        event.finish();
      }
      if (game.hasPlayer(function(current) {
        return current != player && current != target2;
      })) {
        player.chooseTarget(
          function(card2, player2, target3) {
            return target3 != player2 && target3 != _status.event.target;
          },
          "选择" + get.translation(target2) + "使用【杀】或【决斗】的目标",
          true
        ).set("target", target2).set("ai", function(target3) {
          var evt = _status.event;
          var list2 = [null, "juedou"].concat(lib.inpile_nature);
          if (evt.target.hasSkill("ayato_zenshen")) {
            list2.push("kami");
          }
          return Math.max.apply(
            Math,
            list2.map(function(i2) {
              var card2 = { name: "sha", isCard: true };
              if (i2 == "juedou") {
                card2.name = "juedou";
              } else if (i2) {
                card2.nature = i2;
              }
              if (!evt.target.canUse(card2, target3, false)) {
                return 0;
              }
              return get.effect(target3, card2, evt.target, evt.player);
            })
          );
        });
      } else {
        event.finish();
      }
      var target22 = result.targets[0];
      event.target2 = target22;
      player.line(target22);
      game.log(player, "选择了", target22);
      var list = lib.inpile_nature.slice(0);
      list.unshift(null);
      var vcards = [];
      if (target2.hasSkill("ayato_zenshen")) {
        list.add("kami");
      }
      for (var i of list) {
        if (target2.canUse({ name: "sha", isCard: true, nature: i }, target22, false)) {
          vcards.push(["基本", "", "sha", i]);
        }
      }
      if (target2.canUse({ name: "juedou", isCard: true }, target22, false)) {
        vcards.push(["基本", "", "juedou"]);
      }
      if (!vcards.length) {
        if (!target2.countCards("h")) {
          event.finish();
        } else {
          event._result = { index: 1 };
        }
      } else if (!target2.countCards("h")) {
        event.vcards = vcards;
        event._result = { index: 0 };
      } else {
        event.vcards = vcards;
        target2.chooseControl().set("choiceList", ["视为对" + get.translation(target22) + "使用任意一种【杀】或【决斗】", "将所有手牌交给" + get.translation(player)]);
      }
      if (result.index == 0) {
        if (event.vcards.length == 1) {
          event._result = { links: event.vcards, bool: true };
        } else {
          target2.chooseButton(["请选择要对" + get.translation(event.target2) + "使用的牌", [event.vcards, "vcard"]], true).set("ai", function(button) {
            var player2 = _status.event.player;
            return get.effect(_status.event.getParent().target2, { name: button.link[2], isCard: true, nature: button.link[3] }, player2, player2);
          });
        }
      } else {
        target2.give(target2.getCards("h"), player, "giveAuto");
        event.finish();
      }
      if (result.bool) {
        target2.useCard({ name: result.links[0][2], isCard: true, nature: result.links[0][3] }, false, event.target2);
      }
    },
    ai: {
      expose: 0.17,
      fireAttack: true,
      skillTagFilter(player2) {
        return player2.hasFriend();
      }
    }
  },
  decadezongshi: {
    audio: 2,
    mod: {
      maxHandcard(player2, num2) {
        return num2 + game.countGroup();
      }
    },
    trigger: { target: "useCardToTargeted" },
    forced: true,
    filter(event2, player2) {
      return player2 != _status.currentPhase && player2.countCards("h") >= player2.getHandcardLimit() && (get.type(event2.card) == "delay" || get.color(event2.card) == "none");
    },
    content() {
      trigger.excluded.add(player);
    },
    ai: {
      effect: {
        target(card2, player2, target2) {
          if (target2 != _status.currentPhase && target2.countCards("h") >= target2.getHandcardLimit() && (get.type(card2) == "delay" || get.color(card2) == "none")) {
            return "zeroplayertarget";
          }
        }
      }
    }
  },
  decadezishou: {
    audio: 2,
    inherit: "rezishou",
    group: "decadezishou_zhiheng",
    ai: {
      threaten: 1.8
    }
  },
  decadezishou_zhiheng: {
    trigger: { player: "phaseJieshuBegin" },
    direct: true,
    sourceSkill: "decadezishou",
    filter(event2, player2) {
      return player2.countCards("h") > 0 && !player2.getHistory("useCard", function(evt) {
        return evt.targets.filter(function(target2) {
          return target2 != player2;
        }).length > 0;
      }).length;
    },
    content() {
      "step 0";
      var list = [];
      var hs = player.getCards("h");
      for (var i of hs) {
        list.add(get.suit(i, player));
      }
      player.chooseToDiscard("h", get.prompt("decadezishou"), "弃置任意张花色不同的手牌并摸等量的牌", [1, list.length], function(card2, player2) {
        if (ui.selected.cards.length) {
          var suit = get.suit(card2, player2);
          for (var i2 of ui.selected.cards) {
            if (get.suit(i2, player2) == suit) {
              return false;
            }
          }
        }
        return true;
      }).set("ai", lib.skill.zhiheng.check).set("complexCard", true).logSkill = "decadezishou";
      if (result.bool) {
        player.draw(result.cards.length);
      }
    }
  },
  yongjin: {
    audio: 2,
    audioname: ["xin_lingtong"],
    limited: true,
    skillAnimation: true,
    animationColor: "wood",
    enable: "phaseUse",
    filter(event2, player2, cards2) {
      return game.hasPlayer(function(current) {
        var es = current.getCards("e", function(card2) {
          return !cards2 || !cards2.includes(card2);
        });
        for (var i = 0; i < es.length; i++) {
          if (game.hasPlayer(function(current2) {
            return current != current2 && !current2.isMin() && current2.canEquip(es[i]);
          })) {
            return true;
          }
        }
      });
    },
    content() {
      "step 0";
      player.awakenSkill(event.name);
      event.count = 3;
      event.cards = [];
      event.count--;
      if (!lib.skill.yongjin.filter(null, player, cards)) {
        event.finish();
        return;
      }
      var next = player.chooseTarget(2, function(card2, player2, target2) {
        if (ui.selected.targets.length) {
          var from = ui.selected.targets[0];
          if (target2.isMin()) {
            return false;
          }
          var es = from.getCards("e", function(card3) {
            return !_status.event.cards.includes(card3);
          });
          for (var i = 0; i < es.length; i++) {
            if (target2.canEquip(es[i])) {
              return true;
            }
          }
          return false;
        } else {
          return target2.countCards("e", function(card3) {
            return !_status.event.cards.includes(card3);
          }) > 0;
        }
      });
      next.set("ai", function(target2) {
        var player2 = _status.event.player;
        var att = get.attitude(player2, target2);
        var sgnatt = get.sgn(att);
        if (ui.selected.targets.length == 0) {
          if (target2 == player2 && player2.hasSkill("decadexuanfeng")) {
            if (player2.countCards("e", function(card2) {
              return !_status.event.cards.includes(card2) && game.hasPlayer(function(current) {
                return current != target2 && current.canEquip(card2) && get.effect(current, card2, player2, player2) < 0;
              });
            }) > 0) {
              return 18;
            }
            return 7;
          } else if (att > 0) {
            if (target2.countCards("e", function(card2) {
              return get.value(card2, target2) < 0 && !_status.event.cards.includes(card2) && game.hasPlayer(function(current) {
                return current != target2 && current.canEquip(card2) && get.effect(current, card2, player2, player2) < 0;
              });
            }) > 0) {
              return 9;
            }
          } else if (att < 0) {
            if (game.hasPlayer(function(current) {
              if (current != target2 && get.attitude(player2, current) > 0) {
                var es2 = target2.getCards("e", function(card2) {
                  return !_status.event.cards.includes(card2);
                });
                for (var i2 = 0; i2 < es2.length; i2++) {
                  if (get.value(es2[i2], target2) > 0 && current.canEquip(card) && get.effect(current, es2[i2], player2, current) > 0) {
                    return true;
                  }
                }
              }
            })) {
              return -att;
            }
          }
          return 0;
        }
        var es = ui.selected.targets[0].getCards("e", function(card2) {
          return !_status.event.cards.includes(card2);
        });
        var i;
        var att2 = get.sgn(get.attitude(player2, ui.selected.targets[0]));
        for (i = 0; i < es.length; i++) {
          if (ui.selected.targets[0] == player2 && player2.hasSkill("decadexuanfeng")) {
            var bool = game.hasPlayer(function(current) {
              return get.attitude(player2, current) < 0 && current.countDiscardableCards(player2, "he") > 0 && get.damageEffect(current, player2, player2) > 0;
            });
            if (bool && player2.countCards("e", function(card2) {
              return !_status.event.cards.includes(card2) && target2.canEquip(card2) && get.effect(target2, card2, player2, player2) > 0;
            })) {
              return 2.5 * Math.abs(att);
            } else if (bool) {
              return 1 / Math.max(1, Math.abs(att));
            } else {
              return get.damageEffect(target2, player2, player2);
            }
          }
          if (sgnatt != 0 && att2 != 0 && sgnatt != att2 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.effect(target2, es[i], player2, target2)) == sgnatt && target2.canEquip(es[i])) {
            return Math.abs(att);
          }
        }
        if (i == es.length) {
          return 0;
        }
        return -att * get.attitude(player2, ui.selected.targets[0]);
      });
      next.set("multitarget", true);
      next.set("cards", cards);
      next.set("targetprompt", ["被移走", "移动目标"]);
      next.set("prompt", "移动场上的一张装备牌");
      if (result.bool) {
        player.line2(result.targets, "green");
        event.targets = result.targets;
      } else {
        event.finish();
      }
      game.delay();
      if (targets.length == 2) {
        player.choosePlayerCard(
          "e",
          true,
          function(button) {
            var player2 = _status.event.player;
            var targets0 = _status.event.targets0;
            var targets1 = _status.event.targets1;
            if (get.attitude(player2, targets0) > 0 && get.attitude(player2, targets1) < 0) {
              if (get.value(button.link, targets0) < 0 && get.effect(targets1, button.link, player2, targets1) > 0) {
                return 10;
              }
              return 0;
            } else {
              return get.value(button.link) * get.effect(targets1, button.link, player2, player2);
            }
          },
          targets[0]
        ).set("nojudge", event.nojudge || false).set("targets0", targets[0]).set("targets1", targets[1]).set("filterButton", function(button) {
          if (_status.event.cards.includes(button.link)) {
            return false;
          }
          var targets1 = _status.event.targets1;
          return targets1.canEquip(button.link);
        }).set("cards", cards);
      } else {
        event.finish();
      }
      if (result.bool && result.links.length) {
        var link = result.links[0];
        cards.add(link);
        event.targets[1].equip(link);
        event.targets[0].$give(link, event.targets[1]);
        game.delay();
      } else {
        event.finish();
      }
      if (event.count > 0) {
        event.goto(1);
      }
    },
    ai: {
      order: 7,
      result: {
        player(player2) {
          var num2 = 0;
          var friends = game.filterPlayer(function(current) {
            return get.attitude(player2, current) >= 4;
          });
          var vacancies = {
            equip1: 0,
            equip2: 0,
            equip3: 0,
            equip4: 0,
            equip5: 0
          };
          for (var i = 0; i < friends.length; i++) {
            for (var j = 1; j <= 5; j++) {
              if (friends[i].hasEmptySlot(j)) {
                vacancies["equip" + j]++;
              }
            }
          }
          var sources = game.filterPlayer(function(current) {
            return (current == player2 && current.hasSkill("decadexuanfeng") || get.attitude(player2, current) < 0) && current.countCards("e");
          });
          for (var i = 0; i < sources.length; i++) {
            var es = sources[i].getCards("e");
            for (var j = 0; j < es.length; j++) {
              var type = get.subtype(es[j]);
              if (sources[i] == player2 || vacancies[type] > 0 && get.value(es[j]) > 0) {
                num2++;
                if (sources[i] == player2 && vacancies[type] && game.hasPlayer(function(current) {
                  return get.attitude(player2, current) < 0 && current.countDiscardableCards(player2, "he") > 0 && get.damageEffect(current, player2, player2) > 0;
                })) {
                  num2 += 0.5;
                }
                if (num2 >= 3) {
                  return 1;
                }
                vacancies[type]--;
              }
            }
          }
          if (num2 && player2.hp == 1) {
            return 0.5;
          }
          return 0;
        }
      }
    }
  },
  decadexuanfeng: {
    audio: "xuanfeng",
    audioname: ["boss_lvbu3", "re_heqi", "xin_lingtong"],
    mod: {
      aiOrder(player2, card2, num2) {
        if (num2 <= 0 || !player2.isPhaseUsing() || player2.needsToDiscard() !== 2 || !card2.cards || !card2.cards.some((i) => {
          return get.position(i) === "h";
        }) || get.tag(card2, "draw") || get.tag(card2, "gain")) {
          return;
        }
        if (get.type(card2) == "equip" && player2.hasCard((cardx) => card2 != cardx && (!card2.cards || !card2.cards.includes(cardx)) && (player2.hasSkill("yongjin") || get.subtype(card2) == get.subtype(cardx)) && (get.position(cardx) == "e" || player2.canUse(cardx, player2)), "hes")) {
          return;
        }
        if (!game.hasPlayer((current) => get.attitude(player2, current) < 0 && current.countDiscardableCards(player2, "he") > 0 && get.damageEffect(current, player2, player2) > 0)) {
          return;
        }
        return 0;
      }
    },
    trigger: {
      player: ["loseAfter", "phaseDiscardEnd"],
      global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"]
    },
    filter(event2, player2) {
      if (_status.dying.length) {
        return false;
      }
      if (event2.name == "phaseDiscard") {
        var cards2 = [];
        player2.getHistory("lose", function(evt2) {
          if (evt2 && evt2.type == "discard" && evt2.getParent("phaseDiscard") == event2 && evt2.hs) {
            cards2.addArray(evt2.hs);
          }
        });
        return cards2.length > 1;
      } else {
        var evt = event2.getl(player2);
        return evt && evt.es && evt.es.length > 0;
      }
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(
        get.prompt2(event2.skill),
        (card2, player3, target2) => {
          if (player3 == target2) {
            return false;
          }
          return target2.countDiscardableCards(player3, "he");
        },
        [1, 2]
      ).set("ai", (target2) => {
        let player3 = get.event().player, att = get.attitude(player3, target2), hs = target2.countCards("h"), es = target2.countCards("e");
        if (hs && target2.hasSkillTag("noh") || es && target2.hasSkillTag("noe")) {
          att *= 0.8;
        } else {
          att = -att;
        }
        if (ui.selected.targets.length) {
          let pre = ui.selected.targets[0], damage = get.event().damage;
          if (get.attitude(player3, pre) < 0 && (damage ? get.damageEffect(pre, player3, player3) > 0 : true) && pre.countCards("he") >= 2) {
            return 0;
          }
          if (damage) {
            return att + get.damageEffect(target2, player3, player3);
          }
        }
        return att;
      }).set("damage", player2 == _status.currentPhase).set("complexTarget", true).forResult();
    },
    locked: false,
    async content(event2, trigger2, player2) {
      const targets2 = event2.targets;
      for (const target2 of targets2) {
        let num2 = targets2.length > 1 ? 1 : 2;
        if (get.mode() !== "identity" || player2.identity !== "nei") {
          player2.addExpose(0.2);
        }
        for (let i = 0; i < num2; i++) {
          if (!target2.countDiscardableCards(player2, "he")) {
            break;
          }
          const next = player2.discardPlayerCard(target2, "he");
          if (i > 0) {
            next.set("prompt", `旋风：是否继续弃置${get.translation(target2)}一张牌？`);
          } else {
            next.set("forced", true);
          }
        }
      }
      if (player2 !== _status.currentPhase) {
        return;
      }
      const result2 = await player2.chooseTarget("是否对一名目标角色造成1点伤害？", (card2, player3, target2) => {
        return _status.event.targets.includes(target2);
      }).set("targets", targets2).set("ai", (target2) => {
        const player3 = get.event().player;
        return get.damageEffect(target2, player3, player3);
      }).forResult();
      if (result2.bool) {
        player2.line(result2.targets[0], "thunder");
        await result2.targets[0].damage();
      }
    },
    ai: {
      effect: {
        target(card2, player2, target2, current) {
          if (get.type(card2) == "equip" && !get.cardtag(card2, "gifts")) {
            return [1, 3];
          }
          if (get.tag(card2, "damage") && target2.hp > 2) {
            var num1 = target2.countCards("h"), num2 = target2.getHandcardLimit();
            if (num1 > num2) {
              return [1, 1];
            }
            if (num1 == num2) {
              return [1.1, _status.event.player == target2 ? 3 : 0.5];
            }
            if (num1 == num2 - 1) {
              return [0.1, _status.event.player == target2 ? 4.5 : 0.1];
            }
          }
          if (typeof card2 !== "object") {
            return;
          }
          if ((get.tag(card2, "discard") || get.tag(card2, "loseCard")) && target2.countCards("h") > 0 && get.attitude(player2, target2) < 0) {
            return [1, -1];
          }
        }
      },
      reverseEquip: true,
      noe: true,
      threaten(player2, target2) {
        return target2.countCards("e") + target2.countCards("h") / 3;
      }
    }
  },
  oltuntian: {
    inherit: "tuntian",
    filter(event2, player2) {
      if (player2 == _status.currentPhase) {
        if (event2.type != "discard") {
          return false;
        }
        var evt = event2.getl(player2);
        return evt && evt.cards2 && evt.cards2.filter(function(i) {
          return get.name(i, evt.hs.includes(i) ? player2 : false) == "sha";
        }).length > 0;
      }
      if (event2.name == "gain" && event2.player == player2) {
        return false;
      }
      var evt = event2.getl(player2);
      return evt && evt.cards2 && evt.cards2.length > 0;
    }
  },
  olzaoxian: {
    inherit: "zaoxian",
    content() {
      player.awakenSkill(event.name);
      player.loseMaxHp();
      player.addSkills("jixi");
      player.insertPhase();
    },
    ai: {
      combo: "oltuntian"
    }
  },
  rejunxing: {
    enable: "phaseUse",
    audio: 2,
    usable: 1,
    filterCard: lib.filter.cardDiscardable,
    selectCard: [1, Infinity],
    filter(event2, player2) {
      return player2.countCards("h") > 0;
    },
    check(card2) {
      if (ui.selected.cards.length) {
        return -1;
      }
      return 6 - get.value(card2);
    },
    filterTarget(card2, player2, target2) {
      return player2 != target2;
    },
    allowChooseAll: true,
    content() {
      "step 0";
      target.chooseToDiscard(cards.length, "弃置" + get.cnNumber(cards.length) + "张牌并失去1点体力，或点取消将武将牌翻面并摸" + get.cnNumber(cards.length) + "张牌", "he").set("ai", function(card2) {
        const player2 = get.event().player;
        if (get.event().cardsx?.length > 3 || player2.hasSkillTag("noturn") || player2.isTurnedOver() || (get.name(card2) == "tao" || get.name(card2) == "jiu") && lib.filter.cardSavable(card2, player2, player2)) {
          return -1;
        }
        if (player2.hp <= 1) {
          if (cards.length < player2.getEnemies().length && player2.hasCard((cardx) => {
            return (get.name(cardx) == "tao" || get.name(cardx) == "jiu") && lib.filter.cardSavable(cardx, player2, player2);
          }, "hs")) {
            return 7 - get.value(card2);
          }
          return -1;
        }
        return 24 - 5 * cards.length - 2 * Math.min(4, player2.hp) - get.value(card2);
      }).set("cardsx", cards);
      if (!result.bool) {
        target.turnOver();
        target.draw(cards.length);
      } else {
        target.loseHp();
      }
    },
    ai: {
      order: 2,
      threaten: 1.8,
      result: {
        target(player2, target2) {
          if (target2.hasSkillTag("noturn")) {
            return 0;
          }
          if (target2.isTurnedOver()) {
            return 2;
          }
          return -1 / (target2.countCards("h") + 1);
        }
      }
    }
  },
  rejuece: {
    audio: 2,
    trigger: { player: "phaseJieshuBegin" },
    direct: true,
    filter(event2, player2) {
      return game.hasPlayer(function(current) {
        return current != player2 && current.getHistory("lose", function(evt) {
          return evt.cards2 && evt.cards2.length > 0;
        }).length > 0;
      });
    },
    content() {
      "step 0";
      player.chooseTarget(get.prompt("rejuece"), "对一名本回合失去过牌的其他角色造成1点伤害", function(card2, player2, target3) {
        return _status.event.targets.includes(target3);
      }).set(
        "targets",
        game.filterPlayer(function(current) {
          return current != player && current.getHistory("lose", function(evt) {
            return evt.cards2 && evt.cards2.length > 0;
          }).length > 0;
        })
      ).set("ai", function(target3) {
        var player2 = _status.event.player;
        return get.damageEffect(target3, player2, player2);
      });
      if (result.bool) {
        var target2 = result.targets[0];
        player.logSkill("rejuece", target2);
        target2.damage();
      }
    }
  },
  remieji: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return player2.countCards("h", { type: ["trick", "delay"], color: "black" });
    },
    filterCard(card2) {
      return get.color(card2) == "black" && get.type(card2, "trick") == "trick";
    },
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.countCards("he") > 0;
    },
    discard: false,
    delay: false,
    loseTo: "cardPile",
    insert: true,
    visible: true,
    check(card2) {
      return 8 - get.value(card2);
    },
    async content(event2, trigger2, player2) {
      const { target: target2, cards: cards2 } = event2;
      await player2.showCards(cards2, `${get.translation(player2)}对${get.translation(target2)}发动了【${get.translation(event2.name)}】`);
      if (!target2.countCards("he", function(card2) {
        if (get.type2(card2) == "trick") {
          return true;
        }
        return lib.filter.cardDiscardable(card2, target2, "remieji");
      })) {
        return;
      } else {
        const result2 = await target2.chooseCard("he", true, function(card2, player3) {
          if (get.type2(card2) == "trick") {
            return true;
          }
          return lib.filter.cardDiscardable(card2, player3, "remieji");
        }).set("prompt", "选择交给" + get.translation(player2) + "一张锦囊牌，或依次弃置两张非锦囊牌。").forResult();
        if (result2.cards?.length) {
          const {
            cards: [card2]
          } = result2;
          if (get.type2(card2) == "trick") {
            await target2.give(card2, player2);
          } else {
            await target2.discard(card2);
            await target2.chooseToDiscard("he", true, function(card3) {
              return get.type2(card3) != "trick";
            });
          }
        }
      }
    },
    ai: {
      order: 9,
      result: {
        target: -1
      }
    }
  },
  decadelihuo: {
    trigger: { player: "useCard1" },
    filter(event2, player2) {
      if (event2.card.name == "sha" && !game.hasNature(event2.card)) {
        return true;
      }
      return false;
    },
    audio: "lihuo",
    prompt2(event2) {
      return "将" + get.translation(event2.card) + "改为火属性";
    },
    audioname: ["re_chengpu"],
    check(event2, player2) {
      return event2.baseDamage > 1 && game.hasPlayer(function(current) {
        return !event2.targets.includes(current) && player2.canUse(event2.card, current) && get.attitude(player2, current) < 0 && !current.hasShan() && get.effect(current, { name: "sha", nature: "fire" }, player2, player2) > 0;
      });
    },
    content() {
      game.setNature(trigger.card, "fire");
    },
    group: ["decadelihuo2", "decadelihuo3"],
    ai: {
      fireAttack: true
    }
  },
  decadelihuo2: {
    trigger: { player: "useCard2" },
    sourceSkill: "decadelihuo",
    filter(event2, player2) {
      if (event2.card.name != "sha" || !game.hasNature(event2.card, "fire")) {
        return false;
      }
      return game.hasPlayer(function(current) {
        return !event2.targets.includes(current) && player2.canUse(event2.card, current);
      });
    },
    direct: true,
    content() {
      "step 0";
      player.chooseTarget(get.prompt("decadelihuo"), "为" + get.translation(trigger.card) + "增加一个目标", function(card2, player2, target2) {
        return !_status.event.sourcex.includes(target2) && player2.canUse(_status.event.card, target2);
      }).set("sourcex", trigger.targets).set("card", trigger.card).set("ai", function(target2) {
        var player2 = _status.event.player;
        return get.effect(target2, _status.event.card, player2, player2);
      });
      if (result.bool) {
        if (!event.isMine() && !_status.connectMode) {
          game.delayx();
        }
        event.target = result.targets[0];
      } else {
        event.finish();
      }
      player.logSkill("decadelihuo", event.target);
      trigger.targets.push(event.target);
    }
  },
  decadelihuo3: {
    trigger: { player: "useCardAfter" },
    sourceSkill: "decadelihuo",
    filter(event2, player2) {
      return event2.card.name == "sha" && game.hasNature(event2.card, "fire") && event2.targets.length > 1 && player2.getHistory("sourceDamage", function(evt) {
        return evt.card == event2.card;
      }).length > 0;
    },
    forced: true,
    audio: "lihuo",
    audioname: ["re_chengpu"],
    content() {
      player.loseHp();
    }
  },
  decadechunlao: {
    audio: "chunlao",
    audioname: ["re_chengpu"],
    enable: "chooseToUse",
    viewAs: { name: "jiu", isCard: true },
    viewAsFilter(player2) {
      return !player2.isLinked();
    },
    filter(event2, player2) {
      return !player2.isLinked();
    },
    filterCard: () => false,
    selectCard: -1,
    log: false,
    precontent() {
      player.logSkill("decadechunlao");
      player.link();
    },
    group: ["decadechunlao2", "decadechunlaox"],
    ai: { jiuOther: true }
  },
  decadechunlaox: {
    trigger: { player: "damageBegin2" },
    silent: true,
    lastDo: true,
    sourceSkill: "decadechunlao",
    filter(event2, player2) {
      return !player2.isLinked();
    },
    content() {
      trigger.decadechunlaox = true;
    }
  },
  decadechunlao2: {
    trigger: {
      source: "damageSource",
      player: "damageEnd"
    },
    prompt: "是否发动【醇醪】将武将牌重置？",
    sourceSkill: "decadechunlao",
    filter(event2, player2) {
      return player2.isLinked() && event2.num > 1 && !event2.decadechunlaox;
    },
    content() {
      player.link();
    }
  },
  oltianxiang: {
    audio: "tianxiang",
    audioname: ["daxiaoqiao", "re_xiaoqiao", "ol_xiaoqiao"],
    trigger: { player: "damageBegin4" },
    direct: true,
    filter(event2, player2) {
      return player2.countCards("he", function(card2) {
        if (_status.connectMode && get.position(card2) == "h") {
          return true;
        }
        return get.suit(card2, player2) == "heart";
      }) > 0 && event2.num > 0;
    },
    content() {
      "step 0";
      player.chooseCardTarget({
        filterCard(card2, player2) {
          return get.suit(card2) == "heart" && lib.filter.cardDiscardable(card2, player2);
        },
        filterTarget(card2, player2, target3) {
          return player2 != target3;
        },
        position: "he",
        ai1(card2) {
          return 10 - get.value(card2);
        },
        ai2(target3) {
          var att = get.attitude(_status.event.player, target3);
          var trigger2 = _status.event.getTrigger();
          var da = 0;
          if (_status.event.player.hp == 1) {
            da = 10;
          }
          var eff = get.damageEffect(target3, trigger2.source, target3);
          if (att == 0) {
            return 0.1 + da;
          }
          if (eff >= 0 && att > 0) {
            return att + da;
          }
          if (att > 0 && target3.hp > 1) {
            if (target3.maxHp - target3.hp >= 3) {
              return att * 1.1 + da;
            }
            if (target3.maxHp - target3.hp >= 2) {
              return att * 0.9 + da;
            }
          }
          return -att + da;
        },
        prompt: get.prompt("oltianxiang"),
        prompt2: lib.translate.oltianxiang_info
      });
      if (result.bool) {
        player.discard(result.cards);
        var target2 = result.targets[0];
        player.chooseControlList(
          true,
          function(event2, player2) {
            var target3 = _status.event.target;
            var att = get.attitude(player2, target3);
            if (target3.hasSkillTag("maihp")) {
              att = -att;
            }
            if (att > 0) {
              return 0;
            } else {
              return 1;
            }
          },
          ["令" + get.translation(target2) + "受到伤害来源对其造成的1点伤害，然后摸X张牌（X为其已损失体力值且至多为5）", "令" + get.translation(target2) + "失去1点体力，然后获得" + get.translation(result.cards)]
        ).set("target", target2);
        player.logSkill(event.name, target2);
        trigger.cancel();
        event.target = target2;
        event.card = result.cards[0];
      } else {
        event.finish();
      }
      if (typeof result.index == "number") {
        event.index = result.index;
        if (result.index) {
          event.related = event.target.loseHp();
        } else {
          event.related = event.target.damage(trigger.source || "nosource", "nocard");
        }
      } else {
        event.finish();
      }
      if (event.related.cancelled || target2.isDead()) {
        return;
      }
      if (event.index && card.isInPile()) {
        target2.gain(card, "gain2");
      } else if (target2.getDamagedHp()) {
        target2.draw(Math.min(5, target2.getDamagedHp()));
      }
    },
    ai: {
      maixie_defend: true,
      effect: {
        target(card2, player2, target2) {
          if (player2.hasSkillTag("jueqing", false, target2)) {
            return;
          }
          if (get.tag(card2, "damage") && target2.countCards("he") > 1) {
            return 0.7;
          }
        }
      }
    }
  },
  olhongyan: {
    audio: "rehongyan",
    mod: {
      suit(card2, suit) {
        if (suit == "spade") {
          return "heart";
        }
      },
      maxHandcardBase(player2, num2) {
        if (player2.countCards("e", function(card2) {
          return get.suit(card2, player2) == "heart";
        })) {
          return player2.maxHp;
        }
      }
    }
  },
  piaoling: {
    audio: 2,
    trigger: { player: "phaseJieshuBegin" },
    frequent: true,
    async content(event2, trigger2, player2) {
      const result2 = await player2.judge(function(card2) {
        return get.suit(card2) == "heart" ? 2 : 0;
      }).set("judge2", function(result3) {
        return result3.bool ? true : false;
      }).forResult();
      if (result2?.card && result2.suit == "heart") {
        const { card: card2 } = result2;
        if (get.position(card2, true) == "d") {
          const result22 = await player2.chooseTarget("飘零：令一名角色获得" + get.translation(card2) + "，或点【取消】将其置于牌堆顶").set("ai", function(target2) {
            var player3 = _status.event.player;
            var att = get.attitude(player3, target2);
            if (player3 == target2) {
              att /= 2;
            }
            return att;
          }).forResult();
          if (result22.bool && result22.targets?.length) {
            const {
              targets: [target2]
            } = result22;
            player2.line(target2, "green");
            await target2.gain(card2, "gain2");
            if (player2 == target2) {
              await player2.chooseToDiscard("he", true);
            }
          } else {
            game.log(player2, "将", card2, "置于牌堆顶");
            await game.cardsGotoPile(card2, "insert");
          }
        }
      }
    }
  },
  xinyicong: {
    audio: "yicong",
    mod: {
      globalFrom(from, to, current) {
        return current - Math.max(0, from.hp - 1);
      },
      globalTo(from, to, current) {
        return current + Math.max(0, to.getDamagedHp() - 1);
      }
    },
    ai: {
      threaten: 0.8
    }
  },
  rezongshi: {
    audio: 2,
    mod: {
      maxHandcard(player2, num2) {
        return num2 + game.countGroup();
      }
    },
    trigger: { player: "phaseZhunbeiBegin" },
    forced: true,
    filter(event2, player2) {
      return player2.countCards("h") > player2.hp;
    },
    content() {
      player.addTempSkill("rezongshi_paoxiao");
    }
  },
  rezongshi_paoxiao: {
    mod: {
      cardUsable(card2, player2, num2) {
        if (card2.name == "sha") {
          return Infinity;
        }
      }
    }
  },
  olbaonue: {
    audio: 2,
    zhuSkill: true,
    trigger: { global: "damageSource" },
    filter(event2, player2) {
      if (player2 == event2.source || !event2.source || event2.source.group != "qun") {
        return false;
      }
      return player2.hasZhuSkill("olbaonue", event2.source);
    },
    getIndex: (event2) => event2.num,
    logTarget: "source",
    async content(event2, trigger2, player2) {
      const next = player2.judge((card2) => {
        if (get.suit(card2) == "spade") {
          return 4;
        }
        return 0;
      });
      next.set("callback", async (event3) => {
        if (event3.judgeResult.suit == "spade") {
          await player2.recover();
          if (get.position(event3.judgeResult.card, true) == "o") {
            await player2.gain(event3.judgeResult.card, "gain2", "log");
          }
        }
      });
      next.judge2 = (result2) => result2.bool;
      await next;
    }
  },
  rezishou: {
    audio: "zishou",
    audioname: ["re_liubiao"],
    trigger: { player: "phaseDrawBegin2" },
    check(event2, player2) {
      return player2.countCards("h") <= (player2.hasSkill("zongshi") ? player2.maxHp : player2.hp - 2) || player2.skipList.includes("phaseUse") || !player2.countCards("h", function(card2) {
        return get.tag(card2, "damage") && player2.hasUseTarget(card2);
      });
    },
    filter(event2, player2) {
      return !event2.numFixed;
    },
    content() {
      trigger.num += game.countGroup();
      player.addTempSkill("rezishou2");
    },
    ai: {
      threaten: 1.5
    }
  },
  rezishou2: {
    audio: "rezishou",
    trigger: {
      source: "damageBegin2"
      //player:'phaseJieshuBegin',
    },
    forced: true,
    sourceSkill: "rezishou",
    filter(event2, player2) {
      if (event2.name == "damage") {
        return event2.player != player2;
      }
      if (player2.getHistory("skipped").includes("phaseUse")) {
        return false;
      }
      return player2.getHistory("useCard", function(evt) {
        if (evt.targets && evt.targets.length && evt.isPhaseUsing()) {
          var targets2 = evt.targets.slice(0);
          while (targets2.includes(player2)) {
            targets2.remove(player2);
          }
          return targets2.length > 0;
        }
        return false;
      }).length == 0;
    },
    popup: false,
    content() {
      "step 0";
      if (trigger.name == "damage") {
        player.logSkill("rezishou", trigger.player);
        trigger.cancel();
        event.finish();
        return;
      } else {
        var filterTarget = function(card2, player2, target3) {
          return target3 != player2 && target3.countCards("e", function(card3) {
            return player2.canEquip(card3);
          });
        };
        if (game.hasPlayer(function(current) {
          return filterTarget(null, player, current);
        })) {
          player.chooseTarget(filterTarget, "是否将一名其他角色装备区内的一张牌移动到自己的装备区？").set("ai", function(target3) {
            var player2 = _status.event.player;
            var att = get.attitude(player2, target3);
            if (att > 0 && !target3.hasSkillTag("noe")) {
              return 0;
            }
            var num2 = 0;
            target3.countCards("e", function(card2) {
              if (player2.canEquip(card2)) {
                var eff = get.effect(player2, card2, player2, player2);
                if (eff > num2) {
                  num2 = eff;
                }
              }
            });
            if (num2 <= 0) {
              return 0;
            }
            if (att < 0) {
              return num2 * -att;
            }
            return 1 / num2;
          });
        } else {
          event.finish();
        }
      }
      if (result.bool) {
        var target2 = result.targets[0];
        event.target = target2;
        player.logSkill("rezishou", target2);
        player.choosePlayerCard(target2, "e", "将一张装备牌移至你的装备区").set("filterButton", function(button) {
          return _status.event.player.canEquip(button.link);
        });
      } else {
        event.finish();
      }
      if (result && result.links && result.links.length) {
        game.delay(2);
        target2.$give(result.links[0], player, false);
        player.equip(result.links[0]);
        player.addExpose(0.2);
      }
    },
    ai: {
      effect: {
        player(card2, player2, target2) {
          if (get.tag(card2, "damage")) {
            return "zeroplayertarget";
          }
        }
      }
    }
  },
  decadepojun: {
    audio: 2,
    trigger: { player: "useCardToPlayered" },
    direct: true,
    filter(event2, player2) {
      return event2.card.name == "sha" && event2.target.hp > 0 && event2.target.countCards("he") > 0;
    },
    content() {
      "step 0";
      var next = player.choosePlayerCard(trigger.target, "he", [1, Math.min(trigger.target.hp, trigger.target.countCards("he"))], get.prompt("decadepojun", trigger.target), "allowChooseAll");
      next.set("ai", function(button) {
        if (!_status.event.goon) {
          return 0;
        }
        var val = get.value(button.link);
        if (button.link == _status.event.target.getEquip(2)) {
          return 2 * (val + 3);
        }
        return val;
      });
      next.set("goon", get.attitude(player, trigger.target) <= 0);
      next.set("forceAuto", true);
      if (result.bool) {
        event.cards = result.cards;
        var target2 = trigger.target;
        player.logSkill("decadepojun", trigger.target);
        target2.addSkill("decadepojun2");
        target2.addToExpansion(result.cards, "giveAuto", target2).gaintag.add("decadepojun2");
      } else {
        event.finish();
      }
      var discard = false, draw = false;
      for (var i of cards) {
        var type = get.type2(i);
        if (type == "equip") {
          discard = true;
        }
        if (type == "trick") {
          draw = true;
        }
      }
      if (discard) {
        event.equip = true;
        player.chooseButton(
          [
            "选择一张牌置入弃牌堆",
            cards.filter(function(card2) {
              return get.type(card2) == "equip";
            })
          ],
          true
        ).set("ai", function(button) {
          return get.value(button.link, _status.event.getTrigger().target);
        });
      }
      if (draw) {
        event.draw = true;
      }
      if (event.equip && result.links && result.links.length) {
        trigger.target.loseToDiscardpile(result.links);
      }
      if (event.draw) {
        player.draw();
      }
    },
    ai: {
      unequip_ai: true,
      directHit_ai: true,
      skillTagFilter(player2, tag, arg) {
        if (get.attitude(player2, arg.target) > 0) {
          return false;
        }
        if (tag == "directHit_ai") {
          return arg.target.hp >= Math.max(1, arg.target.countCards("h") - 1);
        }
        if (arg && arg.name == "sha" && arg.target.getEquip(2)) {
          return true;
        }
        return false;
      }
    }
  },
  decadepojun2: {
    trigger: { global: "phaseEnd" },
    forced: true,
    popup: false,
    charlotte: true,
    sourceSkill: "decadepojun",
    filter(event2, player2) {
      return player2.getExpansions("decadepojun2").length > 0;
    },
    content() {
      "step 0";
      var cards2 = player.getExpansions("decadepojun2");
      player.gain(cards2, "draw");
      game.log(player, "收回了" + get.cnNumber(cards2.length) + "张“破军”牌");
      player.removeSkill("decadepojun2");
    },
    intro: {
      markcount: "expansion",
      mark(dialog, storage, player2) {
        var cards2 = player2.getExpansions("decadepojun2");
        if (player2.isUnderControl(true)) {
          dialog.addAuto(cards2);
        } else {
          return "共有" + get.cnNumber(cards2.length) + "张牌";
        }
      }
    }
  },
  hanzhan: {
    audio: 2,
    trigger: {
      global: "chooseToCompareBegin"
    },
    filter(event2, player2) {
      if (player2 == event2.player) {
        return true;
      }
      if (event2.targets) {
        return event2.targets.includes(player2);
      }
      return player2 == event2.target;
    },
    logTarget(event2, player2) {
      if (player2 != event2.player) {
        return event2.player;
      }
      return event2.targets || event2.target;
    },
    prompt2(event2, player2) {
      return "令其改为使用随机的手牌进行拼点";
    },
    check(trigger2, player2) {
      var num2 = 0;
      var targets2 = player2 == trigger2.player ? trigger2.targets ? trigger2.targets.slice(0) : [trigger2.target] : [trigger2.player];
      while (targets2.length) {
        var target2 = targets2.shift();
        if (target2.getCards("h").length > 1) {
          num2 -= get.attitude(player2, target2);
        }
      }
      return num2 > 0;
    },
    content() {
      var targets2 = player == trigger.player ? trigger.targets ? trigger.targets.slice(0) : [trigger.target] : [trigger.player];
      if (!trigger.fixedResult) {
        trigger.fixedResult = {};
      }
      while (targets2.length) {
        var target2 = targets2.shift();
        var hs = target2.getCards("h");
        if (hs.length) {
          trigger.fixedResult[target2.playerid] = hs.randomGet();
        }
      }
    },
    group: "hanzhan_gain",
    subfrequent: ["gain"]
  },
  hanzhan_gain: {
    trigger: {
      global: "chooseToCompareAfter"
    },
    audio: "hanzhan",
    sourceSkill: "hanzhan",
    filter(event2, player2) {
      if (event2.preserve) {
        return false;
      }
      if (player2 != event2.player && player2 != event2.target && (!event2.targets || !event2.targets.includes(player2))) {
        return false;
      }
      for (var i of event2.lose_list) {
        if (Array.isArray(i[1])) {
          for (var j of i[1]) {
            if (get.name(j, i[0]) == "sha" && get.position(j, true) == "o") {
              return true;
            }
          }
        } else {
          var j = i[1];
          if (get.name(j, i[0]) == "sha" && get.position(j, true) == "o") {
            return true;
          }
        }
      }
      return false;
    },
    frequent: true,
    prompt2(event2, player2) {
      var cards2 = [], max = 0;
      for (var i of event2.lose_list) {
        if (Array.isArray(i[1])) {
          for (var j of i[1]) {
            if (get.name(j, i[0]) == "sha" && get.position(j, true) == "o") {
              var num2 = get.number(j, i[0]);
              if (num2 > max) {
                cards2 = [];
                max = num2;
              }
              if (num2 == max) {
                cards2.push(j);
              }
            }
          }
        } else {
          var j = i[1];
          if (get.name(j, i[0]) == "sha" && get.position(j, true) == "o") {
            var num2 = get.number(j, i[0]);
            if (num2 > max) {
              cards2 = [];
              max = num2;
            }
            if (num2 == max) {
              cards2.push(j);
            }
          }
        }
      }
      return "获得" + get.translation(cards2);
    },
    content() {
      var cards2 = [], max = 0;
      for (var i of trigger.lose_list) {
        if (Array.isArray(i[1])) {
          for (var j of i[1]) {
            if (get.name(j, i[0]) == "sha" && get.position(j, true) == "o") {
              var num2 = get.number(j, i[0]);
              if (num2 > max) {
                cards2 = [];
                max = num2;
              }
              if (num2 == max) {
                cards2.push(j);
              }
            }
          }
        } else {
          var j = i[1];
          if (get.name(j, i[0]) == "sha" && get.position(j, true) == "o") {
            var num2 = get.number(j, i[0]);
            if (num2 > max) {
              cards2 = [];
              max = num2;
            }
            if (num2 == max) {
              cards2.push(j);
            }
          }
        }
      }
      player.gain(cards2, "gain2");
    }
  },
  rejianchu: {
    audio: 2,
    audioname: ["re_pangde"],
    trigger: { player: "useCardToPlayered" },
    filter(event2, player2) {
      return event2.card.name == "sha" && event2.target.countDiscardableCards(player2, "he") > 0;
    },
    direct: true,
    content() {
      "step 0";
      player.discardPlayerCard(trigger.target, get.prompt("rejianchu", trigger.target)).set("ai", function(button) {
        if (!_status.event.att) {
          return 0;
        }
        if (get.position(button.link) == "e") {
          if (get.subtype(button.link) == "equip2") {
            return 5 * get.value(button.link);
          }
          return get.value(button.link);
        }
        return 1;
      }).set("logSkill", ["rejianchu", trigger.target]).set("att", get.attitude(player, trigger.target) <= 0);
      if (result.bool && result.links && result.links.length) {
        if (get.type(result.links[0], null, result.links[0].original == "h" ? player : false) != "basic") {
          trigger.getParent().directHit.add(trigger.target);
          player.addTempSkill("rejianchu2");
          player.addMark("rejianchu2", 1, false);
        } else if (trigger.cards) {
          var list = [];
          for (var i = 0; i < trigger.cards.length; i++) {
            if (get.position(trigger.cards[i], true) == "o") {
              list.push(trigger.cards[i]);
            }
          }
          if (list.length) {
            trigger.target.gain(list, "gain2", "log");
          }
        }
      }
    },
    ai: {
      unequip_ai: true,
      directHit_ai: true,
      skillTagFilter(player2, tag, arg) {
        if (tag == "directHit_ai") {
          return arg.card.name == "sha" && arg.target.countCards("e", function(card2) {
            return get.value(card2) > 1;
          }) > 0;
        }
        if (arg && arg.name == "sha" && arg.target.getEquip(2)) {
          return true;
        }
        return false;
      }
    }
  },
  rejianchu2: {
    mod: {
      cardUsable(card2, player2, num2) {
        if (card2.name == "sha") {
          return num2 + player2.countMark("rejianchu2");
        }
      }
    },
    onremove: true
  },
  wulie: {
    trigger: { player: "phaseJieshuBegin" },
    audio: 2,
    direct: true,
    limited: true,
    skillAnimation: true,
    animationColor: "wood",
    filter(event2, player2) {
      return player2.hp > 0;
    },
    content() {
      "step 0";
      player.chooseTarget([1, player.hp], get.prompt2("wulie"), lib.filter.notMe).set("ai", function(target2) {
        var player2 = _status.event.player;
        if (player2.hasUnknown()) {
          return 0;
        }
        if (player2.hp - ui.selected.targets.length > 1 + player2.countCards("hs", (card2) => player2.canSaveCard(card2, player2))) {
          return get.attitude(player2, target2);
        }
        return 0;
      });
      if (result.bool) {
        var targets2 = result.targets.sortBySeat();
        player.logSkill("wulie", targets2);
        player.awakenSkill(event.name);
        player.loseHp(targets2.length);
        while (targets2.length) {
          targets2[0].addSkill("wulie2");
          targets2.shift().addMark("wulie2");
        }
      }
    }
  },
  wulie2: {
    marktext: "烈",
    intro: { name2: "烈", content: "mark" },
    trigger: { player: "damageBegin3" },
    forced: true,
    sourceSkill: "wulie",
    content() {
      trigger.cancel();
      player.removeMark("wulie2", 1);
      if (!player.storage.wulie2) {
        player.removeSkill("wulie2");
      }
    }
  },
  regongji: {
    mod: {
      attackRangeBase(player2) {
        if (player2.getEquips(3).length > 0 || player2.getEquips(4).length > 0) {
          return Infinity;
        }
      }
    },
    locked: false,
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    position: "he",
    filter(event2, player2) {
      return player2.hasCard(function(card2) {
        return lib.skill.regongji.filterCard(card2);
      }, "eh");
    },
    filterCard(card2, player2) {
      return get.type(card2) != "basic";
    },
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.countDiscardableCards(player2, "he") > 0;
    },
    check(card2) {
      return 4.5 - get.value(card2);
    },
    content() {
      if (target.countDiscardableCards(player, "he") > 0) {
        player.discardPlayerCard(target, "he", true);
      }
    },
    ai: {
      order: 5,
      result: {
        target(player2, target2) {
          var att = get.attitude(player2, target2);
          var nh = target2.countCards("h");
          if (att > 0) {
            if (target2.getEquip("baiyin") && target2.isDamaged() && get.recoverEffect(target2, player2, player2) > 0) {
              if (target2.hp == 1 && !target2.hujia) {
                return 1.6;
              }
              if (target2.hp == 2) {
                return 0.01;
              }
              return 0;
            }
          }
          var es = target2.getCards("e");
          var noe = es.length == 0 || target2.hasSkillTag("noe");
          var noe2 = es.length == 1 && es[0].name != "tengjia" && get.value(es[0]) <= 0;
          var noh = nh == 0 || target2.hasSkillTag("noh");
          if (noh && (noe || noe2)) {
            return 0;
          }
          if (att <= 0 && !target2.countCards("he")) {
            return 1.5;
          }
          return -1.5;
        }
      },
      tag: {
        loseCard: 1,
        discard: 1
      }
    }
  },
  ollongdan: {
    mod: {
      aiValue(player2, card2, num2) {
        if (card2.name != "sha" && card2.name != "shan") {
          return;
        }
        var geti = function() {
          var cards2 = player2.getCards("hs", function(card3) {
            return card3.name == "sha" || card3.name == "shan";
          });
          if (cards2.includes(card2)) {
            return cards2.indexOf(card2);
          }
          return cards2.length;
        };
        return Math.max(num2, [7, 5, 5, 3][Math.min(geti(), 3)]);
      },
      aiUseful() {
        return lib.skill.ollongdan.mod.aiValue.apply(this, arguments);
      }
    },
    locked: false,
    audio: "longdan_sha",
    audioname: ["re_zhaoyun", "huan_zhaoyun", "sp_zhaoyun"],
    audioname2: { tongyuan: "longdan_tongyuan" },
    hiddenCard(player2, name2) {
      if (name2 == "tao") {
        return player2.countCards("hs", "jiu") > 0;
      }
      if (name2 == "jiu") {
        return player2.countCards("hs", "tao") > 0;
      }
      return false;
    },
    enable: ["chooseToUse", "chooseToRespond"],
    position: "hs",
    prompt: "将杀当做闪，或将闪当做杀，或将桃当做酒，或将酒当做桃使用或打出",
    viewAs(cards2, player2) {
      if (cards2.length) {
        var name2 = false;
        switch (get.name(cards2[0], player2)) {
          case "sha":
            name2 = "shan";
            break;
          case "shan":
            name2 = "sha";
            break;
          case "tao":
            name2 = "jiu";
            break;
          case "jiu":
            name2 = "tao";
            break;
        }
        if (name2) {
          return { name: name2 };
        }
      }
      return null;
    },
    check(card2) {
      var player2 = _status.event.player;
      if (_status.event.type == "phase") {
        var max = 0;
        var name2;
        var list = ["sha", "tao", "jiu"];
        var map = { sha: "shan", tao: "jiu", jiu: "tao" };
        for (var i = 0; i < list.length; i++) {
          var name3 = list[i];
          if (player2.countCards("hs", map[name3]) > (name3 == "jiu" ? 1 : 0) && player2.getUseValue({ name: name3 }) > 0) {
            var temp = get.order({ name: name3 });
            if (temp > max) {
              max = temp;
              name2 = map[name3];
            }
          }
        }
        if (name2 == get.name(card2, player2)) {
          return 1;
        }
        return 0;
      }
      return 1;
    },
    filterCard(card2, player2, event2) {
      event2 = event2 || _status.event;
      var filter = event2._backup.filterCard;
      var name2 = get.name(card2, player2);
      if (name2 == "sha" && filter({ name: "shan", cards: [card2] }, player2, event2)) {
        return true;
      }
      if (name2 == "shan" && filter({ name: "sha", cards: [card2] }, player2, event2)) {
        return true;
      }
      if (name2 == "tao" && filter({ name: "jiu", cards: [card2] }, player2, event2)) {
        return true;
      }
      if (name2 == "jiu" && filter({ name: "tao", cards: [card2] }, player2, event2)) {
        return true;
      }
      return false;
    },
    filter(event2, player2) {
      var filter = event2.filterCard;
      if (filter(get.autoViewAs({ name: "sha" }, "unsure"), player2, event2) && player2.countCards("hs", "shan")) {
        return true;
      }
      if (filter(get.autoViewAs({ name: "shan" }, "unsure"), player2, event2) && player2.countCards("hs", "sha")) {
        return true;
      }
      if (filter(get.autoViewAs({ name: "tao" }, "unsure"), player2, event2) && player2.countCards("hs", "jiu")) {
        return true;
      }
      if (filter(get.autoViewAs({ name: "jiu" }, "unsure"), player2, event2) && player2.countCards("hs", "tao")) {
        return true;
      }
      return false;
    },
    ai: {
      respondSha: true,
      respondShan: true,
      skillTagFilter(player2, tag) {
        var name2;
        switch (tag) {
          case "respondSha":
            name2 = "shan";
            break;
          case "respondShan":
            name2 = "sha";
            break;
        }
        if (!player2.countCards("hs", name2)) {
          return false;
        }
      },
      order(item, player2) {
        if (player2 && _status.event.type == "phase") {
          var max = 0;
          var list = ["sha", "tao", "jiu"];
          var map = { sha: "shan", tao: "jiu", jiu: "tao" };
          for (var i = 0; i < list.length; i++) {
            var name2 = list[i];
            if (player2.countCards("hs", map[name2]) > (name2 == "jiu" ? 1 : 0) && player2.getUseValue({ name: name2 }) > 0) {
              var temp = get.order({ name: name2 });
              if (temp > max) {
                max = temp;
              }
            }
          }
          if (max > 0) {
            max += 0.3;
          }
          return max;
        }
        return 4;
      }
    }
  },
  olyajiao: {
    audio: "reyajiao",
    trigger: {
      player: "loseAfter",
      global: "loseAsyncAfter"
    },
    frequent: true,
    filter(event2, player2) {
      if (player2 == _status.currentPhase) {
        return false;
      }
      return ["useCard", "respond"].includes(event2.getParent().name) && event2.getl(player2)?.hs?.length;
    },
    async content(event2, trigger2, player2) {
      const cards2 = get.cards(1, true);
      await player2.showCards(cards2, get.translation(player2) + "发动了【涯角】", true).set("type", get.type2(trigger2.getParent().card)).set("clearArena", false).set("removeHighlight", false).set("callback", async (event3, trigger3, player3) => {
        const { cards: cards3 } = event3;
        const [card2] = cards3;
        const evt = event3.getParent();
        const { type, videoId, highlightRemove } = evt;
        if (get.type2(card2) == type) {
          const result2 = await player3.chooseTarget("涯角：选择获得此牌的角色").set("ai", function(target2) {
            var att = get.attitude(_status.event.player, target2);
            if (_status.event.du) {
              if (target2.hasSkillTag("nodu")) {
                return 0;
              }
              return -att;
            }
            if (att > 0) {
              return att + Math.max(0, 5 - target2.countCards("h"));
            }
            return att;
          }).set("du", get.name(card2) == "du").forResult();
          if (result2?.bool && result2.targets?.length) {
            const {
              targets: [target2]
            } = result2;
            player3.line(target2, "green");
            highlightRemove();
            await target2.gain(cards3, "gain2");
          }
        } else {
          const result2 = await player3.chooseTarget("涯角：是否弃置攻击范围内包含你的一名角色区域内的一张牌？", function(card3, player4, target2) {
            return target2.inRange(player4) && target2.countDiscardableCards(player4, "hej") > 0;
          }).set("ai", function(target2) {
            var player4 = _status.event.player;
            return get.effect(target2, { name: "guohe" }, player4, player4);
          }).forResult();
          if (result2?.bool && result2.targets?.length) {
            const {
              targets: [target2]
            } = result2;
            player3.line(target2, "green");
            highlightRemove();
            await player3.discardPlayerCard(target2, "hej", true);
          }
        }
        game.broadcastAll(ui.clear);
        game.addVideo("judge2", null, videoId);
        if (cards3.someInD()) {
          await game.cardsGotoPile(cards3.filterInD(), "insert");
        }
      });
    },
    ai: {
      effect: {
        target(card2, player2, target2) {
          if (get.tag(card2, "respond") && target2.countCards("h") > 1) {
            return [1, 0.2];
          }
        }
      }
    }
  },
  olpaoxiao: {
    audio: "paoxiao",
    audioname: ["re_zhangfei", "xiahouba", "re_guanzhang"],
    audioname2: { guanzhang: "paoxiao_guanzhang", ol_guanzhang: "paoxiao_ol_guanzhang" },
    trigger: { player: "shaMiss" },
    forced: true,
    content() {
      player.addTempSkill("olpaoxiao2");
      player.addMark("olpaoxiao2", 1, false);
    },
    mod: {
      cardUsable(card2, player2, num2) {
        if (card2.name == "sha") {
          return Infinity;
        }
      }
    }
  },
  olpaoxiao2: {
    trigger: { source: "damageBegin1" },
    forced: true,
    audio: "paoxiao",
    audioname: ["re_zhangfei", "xiahouba", "re_guanzhang"],
    audioname2: { guanzhang: "paoxiao_guanzhang", ol_guanzhang: "paoxiao_ol_guanzhang" },
    sourceSkill: "olpaoxiao",
    filter(event2, player2) {
      return event2.card && event2.card.name == "sha" && player2.countMark("olpaoxiao2") > 0;
    },
    onremove: true,
    content() {
      trigger.num += player.countMark("olpaoxiao2");
      player.removeSkill("olpaoxiao2");
    },
    intro: { content: "本回合内下一次使用【杀】造成伤害时令伤害值+#" }
  },
  paoxiao_ol_guanzhang: { audio: 1 },
  oltishen: {
    audio: "retishen",
    skillAnimation: true,
    animationColor: "soil",
    limited: true,
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return player2.isDamaged();
    },
    check(event2, player2) {
      if (player2.hp <= 2 || player2.getDamagedHp() > 2) {
        return true;
      }
      if (player2.getDamagedHp() <= 1) {
        return false;
      }
      return player2.getDamagedHp() < game.roundNumber;
    },
    content() {
      player.awakenSkill(event.name);
      player.recover(player.maxHp - player.hp);
      player.draw(player.maxHp - player.hp);
    }
  },
  rexuanfeng: {
    audio: "xuanfeng",
    audioname: ["boss_lvbu3", "re_lingtong"],
    audioname2: { re_heqi: "fenwei_heqi" },
    trigger: {
      player: ["loseAfter", "phaseDiscardEnd"],
      global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"]
    },
    filter(event2, player2) {
      if (!game.hasPlayer(function(current) {
        return current != player2 && current.countCards("he") > 0;
      })) {
        return false;
      }
      if (event2.name == "phaseDiscard") {
        var cards2 = [];
        player2.getHistory("lose", function(evt2) {
          if (evt2 && evt2.type == "discard" && evt2.getParent("phaseDiscard") == event2 && evt2.hs) {
            cards2.addArray(evt2.hs);
          }
        });
        return cards2.length > 1;
      }
      var evt = event2.getl(player2);
      return evt && evt.es && evt.es.length > 0;
    },
    async cost(event2, trigger2, player2) {
      const list = ["弃置至多两名其他角色的合计两张牌"];
      const choices = ["选项一"];
      if (player2.canMoveCard(
        null,
        true,
        game.filterPlayer((target2) => target2 != player2),
        game.filterPlayer((target2) => target2 != player2)
      )) {
        list.push("将一名其他角色装备区内的一张牌移动到另一名角色的装备区内");
        choices.push("选项二");
      }
      if (list.length > 1 && player2.countEnabledSlot()) {
        list.push("背水：废除你的一个装备栏");
        choices.push("背水！");
      }
      choices.push("cancel2");
      const result2 = await player2.chooseControl(choices).set("choiceList", list).set("prompt", get.prompt(event2.skill)).set("ai", function() {
        if (get.player().canMoveCard(
          null,
          true,
          game.filterPlayer((target2) => target2 != player2),
          game.filterPlayer((target2) => target2 != player2)
        )) {
          return 1;
        }
        return 0;
      }).forResult();
      if (result2?.control != "cancel2") {
        event2.result = {
          bool: true,
          cost_data: result2.index
        };
      }
    },
    async content(event2, trigger2, player2) {
      const index = event2.cost_data;
      if (index % 2 == 0) {
        for (let i = 0; i < 2; i++) {
          const result2 = await player2.chooseTarget("弃置一名其他角色的一张牌", function(card2, player3, target2) {
            if (player3 == target2) {
              return false;
            }
            return target2.countDiscardableCards(player3, "he");
          }).set("ai", function(target2) {
            return -get.attitude(_status.event.player, target2);
          }).forResult();
          if (result2?.bool && result2.targets?.length) {
            player2.line(result2.targets[0], "green");
            await player2.discardPlayerCard(result2.targets[0], "he", true);
          }
        }
      }
      if (index > 0 && player2.canMoveCard(
        null,
        true,
        game.filterPlayer((target2) => target2 != player2),
        game.filterPlayer((target2) => target2 != player2)
      )) {
        await player2.moveCard(
          true,
          game.filterPlayer((target2) => target2 != player2),
          game.filterPlayer((target2) => target2 != player2)
        ).set("noJudge", true);
      }
      if (index == 2) {
        await player2.chooseToDisable();
      }
    },
    ai: {
      effect: {
        target(card2, player2, target2, current) {
          if (get.type(card2) == "equip" && !get.cardtag(card2, "gifts")) {
            return [1, 3];
          }
        }
      },
      reverseEquip: true,
      noe: true
    }
  },
  reyongjin: {
    audio: "yongjin",
    trigger: {
      global: "phaseAnyEnd"
    },
    filter(event2, player2) {
      const count = (current) => {
        let cards2 = [];
        current.getHistory("lose", (evt) => {
          if (evt.getParent(event2.name) == event2) {
            cards2.addArray(evt.cards2);
          }
        });
        return cards2.length;
      };
      const num2 = count(player2), card2 = new lib.element.VCard({ name: "sha", isCard: true });
      return num2 > 0 && game.hasPlayer((current) => {
        return count(current) == num2 && player2.canUse(card2, current, false);
      });
    },
    async cost(event2, trigger2, player2) {
      const count = (current) => {
        let cards2 = [];
        current.getHistory("lose", (evt) => {
          if (evt.getParent(trigger2.name) == trigger2) {
            cards2.addArray(evt.cards2);
          }
        });
        return cards2.length;
      };
      const num2 = count(player2), card2 = new lib.element.VCard({ name: "sha", isCard: true });
      const targets2 = game.filterPlayer((current) => {
        return count(current) == num2 && player2.canUse(card2, current, false);
      });
      event2.result = await player2.chooseTarget(
        get.prompt2(event2.skill),
        (card3, player3, target2) => {
          return get.event().targetx.includes(target2);
        },
        [1, Infinity]
      ).set("targetx", targets2).set("ai", (target2) => {
        const card3 = new lib.element.VCard({ name: "sha", isCard: true }), player3 = get.player();
        return get.effect(target2, card3, player3, player3);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const card2 = new lib.element.VCard({ name: "sha", storage: { reyongjin: true }, isCard: true }), targets2 = event2.targets.filter((target2) => player2.canUse(card2, target2, false));
      if (!targets2.length) {
        return;
      }
      const skill = "reyongjin_effect";
      player2.addSkill(skill);
      const next = player2.useCard(card2, targets2, false);
      player2.markAuto(skill, next);
      await next;
    },
    subSkill: {
      effect: {
        trigger: {
          player: "useCardAfter",
          source: "damageSource"
        },
        charlotte: true,
        filter(event2, player2) {
          const evt = event2.name == "damage" ? event2.getParent(2) : event2;
          return player2.getStorage("reyongjin_effect").includes(evt);
        },
        async cost(event2, trigger2, player2) {
          if (trigger2.name == "useCard") {
            player2.unmarkAuto(event2.skill, trigger2);
            return;
          }
          event2.result = {
            bool: true
          };
        },
        async content(event2, trigger2, player2) {
          const slots = Array.from(Array(13)).map((v, i) => `equip${parseFloat(i + 1)}`).filter((i) => player2.hasDisabledSlot(i));
          if (slots.length) {
            const slot = slots.randomGet();
            await player2.enableEquip(slot);
            return;
          }
          const card2 = get.discardPile((card3) => get.type(card3) == "equip" && player2.canEquip(card3) && !get.tag(card3, "gifts"));
          if (card2) {
            player2.$gain2(card2, false);
            await player2.equip(card2);
          }
        }
      }
    }
  },
  rechunlao: {
    trigger: { player: "phaseUseEnd" },
    direct: true,
    audio: 2,
    filter(event2, player2) {
      return player2.countCards("h") > 0 && (_status.connectMode || player2.countCards("h", "sha") > 0) && !player2.getExpansions("rechunlao").length;
    },
    intro: {
      content: "expansion",
      markcount: "expansion"
    },
    onremove(player2, skill) {
      var cards2 = player2.getExpansions(skill);
      if (cards2.length) {
        player2.loseToDiscardpile(cards2);
      }
    },
    content() {
      "step 0";
      player.chooseCard([1, Math.max(1, player.countCards("h", "sha"))], get.prompt("rechunlao"), "将任意张【杀】置于武将牌上作为“醇”", { name: "sha" }, "allowChooseAll").set("ai", function() {
        return 1;
      });
      if (result.bool) {
        player.logSkill("rechunlao");
        player.addToExpansion("gain2", result.cards).gaintag.add("rechunlao");
      }
    },
    ai: {
      threaten: 1.4
    },
    group: "rechunlao2"
  },
  rechunlao2: {
    enable: "chooseToUse",
    sourceSkill: "rechunlao",
    filter(event2, player2) {
      return event2.type == "dying" && event2.dying && event2.dying.hp <= 0 && player2.getExpansions("rechunlao").length > 0;
    },
    filterTarget(card2, player2, target2) {
      return target2 == _status.event.dying;
    },
    direct: true,
    delay: false,
    selectTarget: -1,
    content() {
      "step 0";
      player.chooseCardButton(get.translation("rechunlao"), player.getExpansions("rechunlao"), true);
      if (result.bool) {
        player.logSkill("rechunlao");
        event.type = "dying";
        player.loseToDiscardpile(result.links);
        target.useCard({ name: "jiu", isCard: true }, target);
        var natures = get.natureList(result.links[0]);
        if (natures.includes("fire")) {
          player.recover();
        }
        if (natures.includes("thunder")) {
          player.draw(2);
        }
      }
    },
    ai: {
      order: 6,
      skillTagFilter(player2) {
        return player2.getExpansions("rechunlao").length > 0;
      },
      save: true,
      result: {
        target: 3
      },
      threaten: 1.6
    }
  },
  reluoying: {
    audio: 2,
    audioname: ["dc_caozhi", "ol_caozhi"],
    group: ["reluoying_discard", "reluoying_judge"],
    subfrequent: ["judge"],
    subSkill: {
      discard: {
        audio: "reluoying",
        audioname: ["dc_caozhi", "ol_caozhi"],
        trigger: { global: ["loseAfter", "loseAsyncAfter"] },
        filter(event2, player2) {
          if (event2.type != "discard" || event2.getlx === false) {
            return false;
          }
          var cards2 = event2.cards.slice(0);
          var evt = event2.getl(player2);
          if (evt && evt.cards) {
            cards2.removeArray(evt.cards);
          }
          for (var i = 0; i < cards2.length; i++) {
            if (cards2[i].original != "j" && get.suit(cards2[i], event2.player) == "club" && get.position(cards2[i], true) == "d") {
              return true;
            }
          }
          return false;
        },
        direct: true,
        content() {
          "step 0";
          if (trigger.delay == false) {
            game.delay();
          }
          var cards2 = [], cards22 = trigger.cards.slice(0), evt = trigger.getl(player);
          if (evt && evt.cards) {
            cards22.removeArray(evt.cards);
          }
          for (var i = 0; i < cards22.length; i++) {
            if (cards22[i].original != "j" && get.suit(cards22[i], trigger.player) == "club" && get.position(cards22[i], true) == "d") {
              cards2.push(cards22[i]);
            }
          }
          if (cards2.length) {
            player.chooseButton(["落英：选择要获得的牌", cards2], [1, cards2.length]).set("ai", function(button) {
              return get.value(button.link, _status.event.player, "raw");
            });
          }
          if (result.bool) {
            player.logSkill(event.name);
            player.gain(result.links, "gain2", "log");
          }
        }
      },
      judge: {
        audio: "reluoying",
        audioname: ["dc_caozhi", "ol_caozhi"],
        trigger: { global: "cardsDiscardAfter" },
        direct: true,
        filter(event2, player2) {
          var evt = event2.getParent().relatedEvent;
          if (!evt || evt.name != "judge") {
            return;
          }
          if (evt.player == player2) {
            return false;
          }
          if (get.position(event2.cards[0], true) != "d") {
            return false;
          }
          return get.suit(event2.cards[0]) == "club";
        },
        content() {
          "step 0";
          player.chooseButton(["落英：选择要获得的牌", trigger.cards], [1, trigger.cards.length]).set("ai", function(button) {
            return get.value(button.link, _status.event.player, "raw");
          });
          if (result.bool) {
            player.logSkill(event.name);
            player.gain(result.links, "gain2", "log");
          }
        }
      }
    }
  },
  chengzhang: {
    audio: 2,
    trigger: { player: "phaseZhunbeiBegin" },
    derivation: "rejiushi_mark",
    forced: true,
    juexingji: true,
    skillAnimation: true,
    animationColor: "water",
    filter(event2, player2) {
      var num2 = 0;
      player2.getAllHistory("sourceDamage", function(evt) {
        num2 += evt.num;
      });
      if (num2 >= 7) {
        return true;
      }
      player2.getAllHistory("damage", function(evt) {
        num2 += evt.num;
      });
      return num2 >= 7;
    },
    content() {
      player.markSkill("rejiushi_mark");
      player.awakenSkill(event.name);
      player.storage.chengzhang = true;
      player.recover();
      player.draw();
    },
    ai: {
      combo: "rejiushi"
    }
  },
  rejiushi: {
    audio: 2,
    group: ["rejiushi1", "rejiushi3", "rejiushi_gain"],
    subfrequent: ["gain"],
    subSkill: {
      gain: {
        audio: "rejiushi",
        trigger: { player: "turnOverAfter" },
        frequent: true,
        filter(event2, player2) {
          return player2.storage.chengzhang == true;
        },
        prompt: "是否发动【酒诗】，从牌堆中随机获得一张锦囊牌？",
        content() {
          var card2 = get.cardPile2(function(card3) {
            return get.type2(card3) == "trick";
          }, "random");
          if (card2) {
            player.gain(card2, "gain2", "log");
          }
        }
      }
    }
  },
  rejiushi1: {
    hiddenCard(player2, name2) {
      if (name2 == "jiu") {
        return !player2.isTurnedOver();
      }
      return false;
    },
    audio: "rejiushi",
    enable: "chooseToUse",
    sourceSkill: "rejiushi",
    filter(event2, player2) {
      if (player2.classList.contains("turnedover")) {
        return false;
      }
      return event2.filterCard({ name: "jiu", isCard: true }, player2, event2);
    },
    async content(event2, trigger2, player2) {
      if (_status.event.getParent(2).type == "dying") {
        event2.dying = player2;
        event2.type = "dying";
      }
      await player2.turnOver();
      await player2.useCard({ name: "jiu", isCard: true }, player2);
    },
    ai: {
      save: true,
      skillTagFilter(player2, tag, arg) {
        return !player2.isTurnedOver() && _status.event?.dying == player2;
      },
      order: 5,
      result: {
        player(player2) {
          if (_status.event.parent.name == "phaseUse") {
            if (player2.countCards("h", "jiu") > 0) {
              return 0;
            }
            if (player2.getEquip("zhuge") && player2.countCards("h", "sha") > 1) {
              return 0;
            }
            if (!player2.countCards("h", "sha")) {
              return 0;
            }
            var targets2 = [];
            var target2;
            var players = game.filterPlayer();
            for (var i = 0; i < players.length; i++) {
              if (get.attitude(player2, players[i]) < 0) {
                if (player2.canUse("sha", players[i], true, true)) {
                  targets2.push(players[i]);
                }
              }
            }
            if (targets2.length) {
              target2 = targets2[0];
            } else {
              return 0;
            }
            var num2 = get.effect(target2, { name: "sha" }, player2, player2);
            for (var i = 1; i < targets2.length; i++) {
              var num22 = get.effect(targets2[i], { name: "sha" }, player2, player2);
              if (num22 > num2) {
                target2 = targets2[i];
                num2 = num22;
              }
            }
            if (num2 <= 0) {
              return 0;
            }
            var e2 = target2.getEquip(2);
            if (e2) {
              if (e2.name == "tengjia") {
                if (!player2.countCards("h", { name: "sha", nature: "fire" }) && !player2.getEquip("zhuque")) {
                  return 0;
                }
              }
              if (e2.name == "renwang") {
                if (!player2.countCards("h", { name: "sha", color: "red" })) {
                  return 0;
                }
              }
              if (e2.name == "baiyin") {
                return 0;
              }
            }
            if (player2.getEquip("guanshi") && player2.countCards("he") > 2) {
              return 1;
            }
            return target2.countCards("h") > 3 ? 0 : 1;
          }
          if (player2 == _status.event.dying || player2.isTurnedOver()) {
            return 3;
          }
        }
      },
      effect: {
        target(card2, player2, target2) {
          if (target2.isTurnedOver()) {
            if (get.tag(card2, "damage")) {
              if (player2.hasSkillTag("jueqing", false, target2)) {
                return [1, -2];
              }
              if (target2.hp == 1) {
                return;
              }
              return [1, target2.countCards("h") / 2];
            }
          }
        }
      }
    }
  },
  rejiushi3: {
    audio: "rejiushi",
    trigger: { player: "damageEnd" },
    sourceSkill: "rejiushi",
    check(event2, player2) {
      return player2.isTurnedOver();
    },
    filter(event2, player2) {
      if (player2.hasHistory("useCard", (evt) => {
        if (evt.card.name != "jiu" || evt.getParent().name != "rejiushi1") {
          return false;
        }
        return evt.getParent("damage", true) == event2;
      })) {
        return false;
      }
      return player2.isTurnedOver();
    },
    prompt(event2, player2) {
      var str = "是否发动【酒诗】，将武将牌翻面";
      if (!player2.storage.chengzhang) {
        str += "，并获得牌堆中的一张锦囊牌";
      }
      str += "？";
      return str;
    },
    content() {
      player.turnOver();
      if (!player.storage.chengzhang) {
        var card2 = get.cardPile2(function(card3) {
          return get.type2(card3) == "trick";
        });
        if (card2) {
          player.gain(card2, "gain2", "log");
        }
      }
    }
  },
  rejiushi_mark: {
    mark: true,
    marktext: "改",
    intro: {
      content: "当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。当你受到伤害后，若你的武将牌于受到伤害时背面向上，你可以翻面。当你翻面时，你获得牌堆中的一张随机锦囊牌。"
    }
  },
  rehongyan: {
    audio: 2,
    mod: {
      suit(card2, suit) {
        if (suit == "spade") {
          return "heart";
        }
      }
    },
    trigger: { player: "loseEnd" },
    filter(event2, player2) {
      if (player2 == _status.currentPhase || !event2.visible || player2.hp <= player2.countCards("h")) {
        return false;
      }
      for (var i = 0; i < event2.cards2.length; i++) {
        if (get.suit(event2.cards2[i], player2) == "heart") {
          return true;
        }
      }
      return false;
    },
    frequent: true,
    content() {
      player.draw();
    }
  },
  reqimou: {
    limited: true,
    audio: 2,
    enable: "phaseUse",
    skillAnimation: true,
    animationColor: "orange",
    async content(event2, trigger2, player2) {
      player2.awakenSkill(event2.name);
      const result2 = await player2.chooseNumbers(get.prompt(event2.name), [{ prompt: "请选择你要失去的体力值", min: 1, max: player2.getHp() }], true).set("processAI", () => {
        const player3 = get.player();
        let num2 = player3.getHp() - 1;
        if (player3.countCards("hs", { name: ["tao", "jiu"] })) {
          num2 = player3.getHp();
        }
        return [num2];
      }).forResult();
      const number = result2.numbers[0];
      player2.storage.reqimou2 = number;
      await player2.loseHp(number);
      await player2.draw(number);
      player2.addTempSkill("reqimou2");
    },
    ai: {
      order: 14,
      result: {
        player(player2) {
          if (player2.hp < 3) {
            return false;
          }
          var mindist = player2.hp;
          if (player2.countCards("hs", (card2) => player2.canSaveCard(card2, player2))) {
            mindist++;
          }
          if (game.hasPlayer(function(current) {
            return get.distance(player2, current) <= mindist && player2.canUse("sha", current, false) && get.effect(current, { name: "sha" }, player2, player2) > 0;
          })) {
            return 1;
          }
          return 0;
        }
      }
    }
  },
  reqimou2: {
    onremove: true,
    mod: {
      cardUsable(card2, player2, num2) {
        if (typeof player2.storage.reqimou2 == "number" && card2.name == "sha") {
          return num2 + player2.storage.reqimou2;
        }
      },
      globalFrom(from, to, distance) {
        if (typeof from.storage.reqimou2 == "number") {
          return distance - from.storage.reqimou2;
        }
      }
    }
  },
  olniepan: {
    audio: 2,
    enable: "chooseToUse",
    skillAnimation: true,
    limited: true,
    animationColor: "orange",
    filter(event2, player2) {
      if (event2.type == "dying") {
        if (player2 != event2.dying) {
          return false;
        }
        return true;
      }
      return false;
    },
    content() {
      "step 0";
      player.awakenSkill(event.name);
      player.storage.olniepan = true;
      player.discard(player.getCards("hej"));
      player.link(false);
      player.turnOver(false);
      player.draw(3);
      if (player.hp < 3) {
        player.recover(3 - player.hp);
      }
      player.chooseControl("bazhen", "olhuoji", "olkanpo").set("prompt", "选择获得一个技能").ai = function() {
        let player2 = get.event().player, threaten = get.threaten(player2);
        if (!player2.hasEmptySlot(2)) {
          return "olhuoji";
        }
        if (threaten < 0.8) {
          return "olkanpo";
        }
        if (threaten < 1.6) {
          return "bazhen";
        }
        return ["olhuoji", "bazhen"].randomGet();
      };
      player.addSkills(result.control);
    },
    derivation: ["bazhen", "olhuoji", "olkanpo"],
    ai: {
      order: 1,
      skillTagFilter(player2, tag, target2) {
        if (player2 != target2 || player2.storage.olniepan) {
          return false;
        }
      },
      save: true,
      result: {
        player(player2) {
          if (player2.hp <= 0) {
            return 10;
          }
          if (player2.hp <= 2 && player2.countCards("he") <= 1) {
            return 10;
          }
          return 0;
        }
      },
      threaten(player2, target2) {
        if (!target2.storage.olniepan) {
          return 0.6;
        }
      }
    }
  },
  rewurong: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return player2.countCards("h") > 0;
    },
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.countCards("h") > 0;
    },
    content() {
      "step 0";
      if (target.countCards("h") == 0 || player.countCards("h") == 0) {
        event.finish();
        return;
      }
      var sendback = function() {
        if (_status.event != event) {
          return function() {
            event.resultOL = _status.event.resultOL;
          };
        }
      };
      if (player.isOnline()) {
        player.wait(sendback);
        event.ol = true;
        player.send(function() {
          game.me.chooseCard(true).set("glow_result", true).ai = function() {
            return Math.random();
          };
          game.resume();
        });
      } else {
        event.localPlayer = true;
        var hasShan = !target.countCards("h", "shan");
        player.chooseCard(true).set("glow_result", true).ai = function(card2) {
          if (hasShan && get.name(card2) == "sha") {
            return 1;
          }
          return Math.random();
        };
      }
      if (target.isOnline()) {
        target.wait(sendback);
        event.ol = true;
        target.send(function() {
          var rand2 = Math.random() < 0.4;
          game.me.chooseCard(true).set("glow_result", true).ai = function(card2) {
            if (rand2) {
              return card2.name == "shan" ? 1 : 0;
            }
            return card2.name == "shan" ? 0 : 1;
          };
          game.resume();
        });
      } else {
        event.localTarget = true;
      }
      if (event.localPlayer) {
        event.card1 = result.cards[0];
      }
      if (event.localTarget) {
        var rand = Math.random() < 0.4;
        target.chooseCard(true).set("glow_result", true).ai = function(card2) {
          if (rand) {
            return card2.name == "shan" ? 1 : 0;
          }
          return card2.name == "shan" ? 0 : 1;
        };
      }
      if (event.localTarget) {
        event.card2 = result.cards[0];
      }
      if (!event.resultOL && event.ol) {
        game.pause();
      }
      try {
        if (!event.card1) {
          event.card1 = event.resultOL[player.playerid].cards[0];
        }
        if (!event.card2) {
          event.card2 = event.resultOL[target.playerid].cards[0];
        }
        if (!event.card1 || !event.card2) {
          throw new Error("err");
        }
      } catch (e) {
        console.log(e);
        event.finish();
        return;
      }
      game.broadcastAll(
        function(card1, card2) {
          card1.classList.remove("glow");
          card2.classList.remove("glow");
        },
        event.card1,
        event.card2
      );
      game.broadcastAll(function() {
        ui.arena.classList.add("thrownhighlight");
      });
      game.addVideo("thrownhighlight1");
      player.$compare(event.card1, target, event.card2);
      game.delay(4);
      var next = game.createEvent("showCards");
      next.player = player;
      next.cards = [event.card1];
      next.setContent("emptyEvent");
      game.log(player, "展示了", event.card1);
      var next = game.createEvent("showCards");
      next.player = target;
      next.cards = [event.card2];
      next.setContent("emptyEvent");
      game.log(target, "展示了", event.card2);
      var name1 = get.name(event.card1);
      var name2 = get.name(event.card2);
      if (name1 == "sha" && name2 != "shan") {
        target.$gain2(event.card2);
        var clone = event.card1.clone;
        if (clone) {
          clone.style.transition = "all 0.5s";
          clone.style.transform = "scale(1.2)";
          clone.delete();
          game.addVideo("deletenode", player, get.cardsInfo([clone]));
        }
        game.broadcast(function(card2) {
          var clone2 = card2.clone;
          if (clone2) {
            clone2.style.transition = "all 0.5s";
            clone2.style.transform = "scale(1.2)";
            clone2.delete();
          }
        }, event.card1);
        target.damage("nocard");
      } else if (name1 != "sha" && name2 == "shan") {
        target.$gain2(event.card2);
        var clone = event.card1.clone;
        if (clone) {
          clone.style.transition = "all 0.5s";
          clone.style.transform = "scale(1.2)";
          clone.delete();
          game.addVideo("deletenode", player, get.cardsInfo([clone]));
        }
        game.broadcast(function(card2) {
          var clone2 = card2.clone;
          if (clone2) {
            clone2.style.transition = "all 0.5s";
            clone2.style.transform = "scale(1.2)";
            clone2.delete();
          }
        }, event.card1);
        player.gainPlayerCard(target, true, "he");
      } else {
        player.$gain2(event.card1);
        target.$gain2(event.card2);
      }
      game.broadcastAll(function() {
        ui.arena.classList.remove("thrownhighlight");
      });
      game.addVideo("thrownhighlight2");
    },
    ai: {
      order: 6,
      result: {
        target: -1
      }
    }
  },
  cangzhuo: {
    trigger: { player: "phaseDiscardBegin" },
    frequent: true,
    audio: 2,
    filter(event2, player2) {
      return player2.getHistory("useCard", function(card2) {
        return get.type(card2.card, "trick") == "trick";
      }).length == 0;
    },
    content() {
      player.addTempSkill("cangzhuo2");
    }
  },
  cangzhuo2: {
    mod: {
      ignoredHandcard(card2, player2) {
        if (get.type(card2, "trick") == "trick") {
          return true;
        }
      },
      cardDiscardable(card2, player2, name2) {
        if (name2 == "phaseDiscard" && get.type(card2, "trick") == "trick") {
          return false;
        }
      }
    }
  },
  shebian: {
    audio: 2,
    trigger: { player: "turnOverEnd" },
    check(event2, player2) {
      return player2.canMoveCard(true, true);
    },
    filter(event2, player2) {
      return player2.canMoveCard(null, true);
    },
    content() {
      player.moveCard().nojudge = true;
    }
  },
  rexianzhen: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filterTarget(card2, player2, target2) {
      return player2.canCompare(target2);
    },
    filter(event2, player2) {
      return player2.countCards("h") > 0;
    },
    content() {
      "step 0";
      player.chooseToCompare(target);
      if (result.player && get.name(result.player, player) == "sha") {
        player.addTempSkill("rexianzhen4");
      }
      if (result.bool) {
        player.storage[event.name] = target;
        player.addTempSkill(event.name + 2);
      } else {
        player.addTempSkill(event.name + 3);
      }
    },
    ai: {
      order(name2, player2) {
        var cards2 = player2.getCards("h");
        if (player2.countCards("h", "sha") == 0) {
          return 1;
        }
        for (var i = 0; i < cards2.length; i++) {
          if (cards2[i].name != "sha" && get.number(cards2[i]) > 11 && get.value(cards2[i]) < 7) {
            return 9;
          }
        }
        return get.order({ name: "sha" }) - 1;
      },
      result: {
        player(player2) {
          if (player2.countCards("h", "sha") > 0) {
            return 0;
          }
          var num2 = player2.countCards("h");
          if (num2 > player2.hp) {
            return 0;
          }
          if (num2 == 1) {
            return -2;
          }
          if (num2 == 2) {
            return -1;
          }
          return -0.7;
        },
        target(player2, target2) {
          var num2 = target2.countCards("h");
          if (num2 == 1) {
            return -1;
          }
          if (num2 == 2) {
            return -0.7;
          }
          return -0.5;
        }
      },
      threaten: 1.3
    }
  },
  rexianzhen2: {
    charlotte: true,
    mod: {
      targetInRange(card2, player2, target2) {
        if (target2 == player2.storage.rexianzhen) {
          return true;
        }
      },
      cardUsableTarget(card2, player2, target2) {
        if (target2 == player2.storage.rexianzhen) {
          return true;
        }
      }
    },
    ai: {
      unequip: true,
      skillTagFilter(player2, tag, arg) {
        if (arg.target != player2.storage.rexianzhen) {
          return false;
        }
      }
    }
  },
  rexianzhen3: {
    charlotte: true,
    mod: {
      cardEnabled(card2) {
        if (card2.name == "sha") {
          return false;
        }
      }
    }
  },
  rexianzhen4: {
    mod: {
      ignoredHandcard(card2, player2) {
        if (get.name(card2) == "sha") {
          return true;
        }
      },
      cardDiscardable(card2, player2, name2) {
        if (name2 == "phaseDiscard" && get.name(card2) == "sha") {
          return false;
        }
      }
    }
  },
  rejinjiu: {
    mod: {
      cardname(card2, player2) {
        if (card2.name == "jiu") {
          return "sha";
        }
      }
    },
    ai: {
      skillTagFilter(player2) {
        if (!player2.countCards("h", "jiu")) {
          return false;
        }
      },
      respondSha: true
    },
    audio: 2,
    trigger: { player: ["useCard1", "respond"] },
    firstDo: true,
    forced: true,
    filter(event2, player2) {
      return event2.card.name == "sha" && !event2.skill && event2.cards.length == 1 && event2.cards[0].name == "jiu";
    },
    content() {
    },
    group: "rejinjiu2",
    global: "rejinjiu3"
  },
  rejinjiu3: {
    mod: {
      cardEnabled(card2, player2) {
        if (card2.name == "jiu" && _status.currentPhase && _status.currentPhase != player2 && _status.currentPhase.hasSkill("rejinjiu")) {
          return false;
        }
      },
      cardSavable(card2, player2) {
        if (card2.name == "jiu" && _status.currentPhase && _status.currentPhase != player2 && _status.currentPhase.hasSkill("rejinjiu")) {
          return false;
        }
      }
    }
  },
  rejinjiu2: {
    audio: "rejinjiu",
    forced: true,
    trigger: { player: "damageBegin3" },
    sourceSkill: "rejinjiu",
    filter(event2, player2) {
      return event2.getParent(2).jiu == true;
    },
    content() {
      trigger.num -= trigger.getParent(2).jiu_add;
    },
    ai: {
      filterDamage: true,
      skillTagFilter(player2, tag, arg) {
        return arg && arg.jiu == true;
      }
    }
  },
  repojun: {
    audio: 2,
    trigger: { player: "useCardToPlayered" },
    direct: true,
    filter(event2, player2) {
      return event2.card.name == "sha" && event2.target.hp > 0 && event2.target.countCards("he") > 0;
    },
    preHidden: true,
    content() {
      "step 0";
      var next = player.choosePlayerCard(trigger.target, "he", [1, Math.min(trigger.target.hp, trigger.target.countCards("he"))], get.prompt("repojun", trigger.target), "allowChooseAll");
      next.set("ai", function(button) {
        if (!_status.event.goon) {
          return 0;
        }
        var val = get.value(button.link);
        if (button.link == _status.event.target.getEquip(2)) {
          return 2 * (val + 3);
        }
        return val;
      });
      next.set("goon", get.attitude(player, trigger.target) <= 0);
      next.set("forceAuto", true);
      next.setHiddenSkill(event.name);
      if (result.bool) {
        var target2 = trigger.target;
        player.logSkill("repojun", target2);
        target2.addSkill("repojun2");
        target2.addToExpansion("giveAuto", result.cards, target2).gaintag.add("repojun2");
      }
    },
    ai: {
      unequip_ai: true,
      directHit_ai: true,
      skillTagFilter(player2, tag, arg) {
        if (get.attitude(player2, arg.target) > 0) {
          return false;
        }
        if (tag == "directHit_ai") {
          return arg.target.hp >= Math.max(1, arg.target.countCards("h") - 1);
        }
        if (arg && arg.name == "sha" && arg.target.getEquip(2)) {
          return true;
        }
        return false;
      }
    },
    group: "repojun3"
  },
  repojun3: {
    audio: "repojun",
    trigger: { source: "damageBegin1" },
    sourceSkill: "repojun",
    filter(event2, player2) {
      var target2 = event2.player;
      return event2.card && event2.card.name == "sha" && player2.countCards("h") >= target2.countCards("h") && player2.countCards("e") >= target2.countCards("e");
    },
    forced: true,
    locked: false,
    logTarget: "player",
    preHidden: true,
    check(event2, player2) {
      return get.attitude(player2, event2.player) < 0;
    },
    content() {
      trigger.num++;
    }
  },
  repojun2: {
    trigger: { global: "phaseEnd" },
    forced: true,
    popup: false,
    charlotte: true,
    sourceSkill: "repojun",
    filter(event2, player2) {
      return player2.getExpansions("repojun2").length > 0;
    },
    content() {
      "step 0";
      var cards2 = player.getExpansions("repojun2");
      player.gain(cards2, "draw");
      game.log(player, "收回了" + get.cnNumber(cards2.length) + "张“破军”牌");
      player.removeSkill("repojun2");
    },
    intro: {
      markcount: "expansion",
      mark(dialog, storage, player2) {
        var cards2 = player2.getExpansions("repojun2");
        if (player2.isUnderControl(true)) {
          dialog.addAuto(cards2);
        } else {
          return "共有" + get.cnNumber(cards2.length) + "张牌";
        }
      }
    }
  },
  sishu: {
    audio: 2,
    trigger: { player: "phaseUseBegin" },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill)).set("ai", (target2) => {
        const att = get.attitude(get.player(), target2);
        if (target2.countMark("sishu2") % 2 == 1) {
          return -att;
        }
        return att;
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      target2.addSkill("sishu_reverse");
      target2.addMark("sishu_reverse", 1, false);
    },
    subSkill: {
      reverse: {
        charlotte: true,
        onremove: true,
        marktext: "思",
        intro: {
          name: "思蜀",
          content: "本局游戏内计算【乐不思蜀】的效果时反转#次"
        },
        trigger: {
          player: "judgeBefore"
        },
        filter(event2, player2) {
          return event2.card?.name == "lebu";
        },
        firstDo: true,
        forced: true,
        locked: false,
        async content(event2, trigger2, player2) {
          trigger2.judgeFromSishu = trigger2.judge;
          trigger2.judge = function(card2) {
            const { player: player3, judgeFromSishu } = this;
            let result2 = judgeFromSishu(card2);
            if (player3.countMark("sishu_reverse") % 2 == 1) {
              result2 *= -1;
            }
            return result2;
          };
        }
      }
    }
  },
  sishu2: {
    charlotte: true,
    marktext: "思",
    intro: {
      name: "思蜀",
      content: "本局游戏内计算【乐不思蜀】的效果时反转#次"
    },
    mod: {
      judge(player2, result2) {
        if (_status.event.cardname == "lebu" && player2.countMark("sishu2") % 2 == 1) {
          if (result2.bool == false) {
            result2.bool = true;
          } else {
            result2.bool = false;
          }
        }
      }
    }
  },
  olruoyu: {
    skillAnimation: true,
    animationColor: "fire",
    audio: 2,
    juexingji: true,
    zhuSkill: true,
    keepSkill: true,
    derivation: ["rejijiang", "sishu"],
    trigger: { player: "phaseZhunbeiBegin" },
    forced: true,
    filter(event2, player2) {
      if (!player2.hasZhuSkill("olruoyu")) {
        return false;
      }
      return player2.isMinHp();
    },
    content() {
      "step 0";
      player.awakenSkill(event.name);
      player.gainMaxHp();
      if (player.hp < 3) {
        player.recover(3 - player.hp);
      }
      player.addSkills(["sishu", "rejijiang"]);
    }
  },
  olfangquan: {
    audio: 2,
    audioname2: { shen_caopi: "olfangquan_shen_caopi" },
    trigger: { player: "phaseUseBefore" },
    filter(event2, player2) {
      return player2.countCards("h") > 0 && !player2.hasSkill("olfangquan3");
    },
    direct: true,
    content() {
      "step 0";
      var fang = player.countMark("olfangquan2") == 0 && player.hp >= 2 && player.countCards("h") <= player.hp + 2;
      player.chooseBool(get.prompt2("olfangquan")).set("ai", function() {
        if (!_status.event.fang) {
          return false;
        }
        return game.hasPlayer(function(target2) {
          if (target2.hasJudge("lebu") || target2 == player) {
            return false;
          }
          if (get.attitude(player, target2) > 4) {
            return get.threaten(target2) / Math.sqrt(target2.hp + 1) / Math.sqrt(target2.countCards("h") + 1) > 0;
          }
          return false;
        });
      }).set("fang", fang);
      if (result.bool) {
        player.logSkill("olfangquan");
        trigger.cancel();
        player.addTempSkill("olfangquan2");
        player.addMark("olfangquan2", 1, false);
      }
    }
  },
  olfangquan2: {
    trigger: { player: "phaseDiscardBegin" },
    forced: true,
    popup: false,
    audio: false,
    onremove: true,
    sourceSkill: "olfangquan",
    content() {
      "step 0";
      event.count = player.countMark(event.name);
      player.removeMark(event.name, event.count, false);
      event.count--;
      player.chooseToDiscard("是否弃置一张手牌并令一名其他角色进行一个额外回合？").set("logSkill", "olfangquan").ai = function(card2) {
        return 20 - get.value(card2);
      };
      if (result.bool) {
        player.chooseTarget(true, "请选择进行额外回合的目标角色", lib.filter.notMe).ai = function(target3) {
          if (target3.hasJudge("lebu")) {
            return -1;
          }
          if (get.attitude(player, target3) > 4) {
            return get.threaten(target3) / Math.sqrt(target3.hp + 1) / Math.sqrt(target3.countCards("h") + 1);
          }
          return -1;
        };
      } else {
        event.finish();
      }
      var target2 = result.targets[0];
      player.line(target2, "fire");
      target2.markSkillCharacter("olfangquan", player, "放权", "进行一个额外回合");
      target2.insertPhase();
      target2.addSkill("olfangquan3");
      if (event.count > 0) {
        event.goto(1);
      }
    }
  },
  olfangquan3: {
    trigger: { player: ["phaseAfter", "phaseCancelled"] },
    forced: true,
    popup: false,
    audio: false,
    sourceSkill: "olfangquan",
    content() {
      player.unmarkSkill("olfangquan");
      player.removeSkill("olfangquan3");
    }
  },
  olluanji: {
    inherit: "luanji",
    audioname2: { shen_caopi: "olluanji_shen_caopi" },
    audio: 2,
    line: false,
    group: "olluanji_remove",
    check(card2) {
      return 7 - get.value(card2);
    }
  },
  olluanji_remove: {
    trigger: { player: "useCard2" },
    direct: true,
    sourceSkill: "olluanji",
    filter(event2, player2) {
      return event2.card.name == "wanjian" && event2.targets.length > 0;
    },
    line: false,
    content() {
      "step 0";
      player.chooseTarget(get.prompt("olluanji"), "为" + get.translation(trigger.card) + "减少一个目标", function(card2, player2, target2) {
        return _status.event.targets.includes(target2);
      }).set("targets", trigger.targets).set("ai", function(target2) {
        var player2 = _status.event.player;
        return -get.effect(target2, _status.event.getTrigger().card, player2, player2);
      });
      if (result.bool) {
        player.logSkill("olluanji", result.targets);
        trigger.targets.remove(result.targets[0]);
      }
    }
  },
  olxueyi: {
    audio: 2,
    trigger: { global: "phaseBefore", player: "enterGame" },
    forced: true,
    zhuSkill: true,
    filter(event2, player2) {
      return (event2.name != "phase" || game.phaseNumber == 0) && player2.hasZhuSkill("olxueyi");
    },
    content() {
      var num2 = game.countPlayer(function(current) {
        return current.group == "qun";
      });
      if (num2) {
        player.addMark("olxueyi", num2 * 2);
      }
    },
    marktext: "裔",
    intro: {
      name2: "裔",
      content: "mark"
    },
    mod: {
      maxHandcard(player2, num2) {
        if (player2.hasZhuSkill("olxueyi")) {
          return num2 + player2.countMark("olxueyi");
        }
      }
    },
    group: "olxueyi_draw",
    subSkill: {
      draw: {
        audio: "olxueyi",
        trigger: { player: "phaseUseBegin" },
        prompt2: "弃置一枚「裔」标记，然后摸一张牌",
        check(event2, player2) {
          return player2.getUseValue("wanjian") > 0 || !player2.needsToDiscard();
        },
        filter(event2, player2) {
          return player2.hasZhuSkill("olxueyi") && player2.hasMark("olxueyi");
        },
        content() {
          player.removeMark("olxueyi", 1);
          player.draw();
        }
      }
    }
  },
  olhunzi: {
    audio: 2,
    audioname: ["re_sunyi"],
    inherit: "hunzi",
    content() {
      player.awakenSkill(event.name);
      player.loseMaxHp();
      player.addSkills(["reyingzi", "gzyinghun"]);
      player.addTempSkill("olhunzi_effect");
    },
    subSkill: {
      effect: {
        trigger: { player: "phaseJieshuBegin" },
        forced: true,
        popup: false,
        charlotte: true,
        content() {
          player.chooseDrawRecover(2, true);
        }
      }
    }
  },
  olzhiba: {
    audio: 2,
    zhuSkill: true,
    global: "olzhiba2"
  },
  olzhiba2: {
    ai: {
      order: 1,
      result: {
        target(player2, target2) {
          if (player2.hasZhuSkill("olzhiba") && !player2.hasSkill("olzhiba3") && target2.group == "wu") {
            if (player2.countCards("h", function(card2) {
              var val = get.value(card2);
              if (val < 0) {
                return true;
              }
              if (val <= 5) {
                return get.number(card2) >= 12;
              }
              if (val <= 6) {
                return get.number(card2) >= 13;
              }
              return false;
            }) > 0) {
              return -1;
            }
            return 0;
          } else {
            if (player2.countCards("h", "du") && get.attitude(player2, target2) < 0) {
              return -1;
            }
            if (player2.countCards("h") <= player2.hp) {
              return 0;
            }
            var maxnum = 0;
            var cards2 = target2.getCards("h");
            for (var i = 0; i < cards2.length; i++) {
              if (get.number(cards2[i]) > maxnum) {
                maxnum = get.number(cards2[i]);
              }
            }
            if (maxnum > 10) {
              maxnum = 10;
            }
            if (maxnum < 5 && cards2.length > 1) {
              maxnum = 5;
            }
            var cards3 = player2.getCards("h");
            for (var i = 0; i < cards3.length; i++) {
              if (get.number(cards3[i]) < maxnum) {
                return 1;
              }
            }
            return 0;
          }
        }
      }
    },
    enable: "phaseUse",
    //usable:1,
    prompt: "请选择〖制霸〗的目标",
    filter(event2, player2) {
      if (player2.hasZhuSkill("olzhiba") && !player2.hasSkill("olzhiba3") && game.hasPlayer(function(current) {
        return current != player2 && current.group == "wu" && player2.canCompare(current);
      })) {
        return true;
      }
      return player2.group == "wu" && game.hasPlayer(function(current) {
        return current != player2 && current.hasZhuSkill("olzhiba", player2) && !current.hasSkill("olzhiba3") && player2.canCompare(current);
      });
    },
    filterTarget(card2, player2, target2) {
      if (player2.hasZhuSkill("olzhiba") && !player2.hasSkill("olzhiba3") && target2.group == "wu" && player2.canCompare(target2)) {
        return true;
      }
      return player2.group == "wu" && target2.hasZhuSkill("olzhiba", player2) && !target2.hasSkill("olzhiba3") && player2.canCompare(target2);
    },
    prepare(cards2, player2, targets2) {
      if (player2.hasZhuSkill("olzhiba")) {
        player2.logSkill("olzhiba");
      }
      if (targets2[0].hasZhuSkill("olzhiba", player2)) {
        targets2[0].logSkill("olzhiba");
      }
    },
    direct: true,
    clearTime: true,
    contentBefore() {
      "step 0";
      var list = [];
      if (player.hasZhuSkill("olzhiba") && targets[0].group == "wu" && !player.hasSkill("olzhiba3")) {
        list.push(player);
      }
      if (player.group == "wu" && targets[0].hasZhuSkill("olzhiba") && !targets[0].hasSkill("olzhiba3")) {
        list.push(targets[0]);
      }
      if (list.length == 1) {
        event.target = list[0];
        event.goto(2);
      } else {
        player.chooseTarget(true, "请选择获得所有拼点牌的角色", function(card2, player2, target2) {
          return _status.event.list.includes(target2);
        }).set("list", list);
      }
      event.target = result.targets[0];
      target.addTempSkill("olzhiba3", "phaseUseEnd");
      if (target == targets[0]) {
        target.chooseBool("是否接受来自" + get.translation(player) + "的拼点请求？").set(
          "choice",
          get.attitude(target, player) > 0 || target.countCards("h", function(card2) {
            var val = get.value(card2);
            if (val < 0) {
              return true;
            }
            if (val <= 5) {
              return get.number(card2) >= 12;
            }
            if (val <= 6) {
              return get.number(card2) >= 13;
            }
            return false;
          }) > 0
        ).set("ai", function() {
          return _status.event.choice;
        });
      } else {
        event._result = { bool: true };
      }
      if (result.bool) {
        event.getParent().zhiba_target = target;
      } else {
        game.log(target, "拒绝了", player, "的拼点请求");
        target.chat("拒绝");
      }
    },
    content() {
      "step 0";
      event.source = event.getParent().zhiba_target;
      if (!event.source) {
        event.finish();
      }
      player.chooseToCompare(target).set("small", target == source && get.attitude(player, target) > 0).clear = false;
      if (player == source && result.bool || target == source && !result.bool) {
        event.cards = [result.player, result.target].filterInD("d");
        if (!event.cards.length) {
          event.finish();
        } else {
          source.chooseControl("ok", "cancel2").set("dialog", ["是否获得拼点牌？", event.cards]).set("ai", function() {
            if (get.value(event.cards, source, "raw") <= 0) {
              return false;
            }
            return true;
          });
        }
      } else {
        event.finish();
      }
      if (result.control != "cancel2") {
        source.gain(event.cards, "gain2", "log");
      } else {
        ui.clear();
      }
    }
  },
  olzhiba3: {},
  rehuashen: {
    unique: true,
    audio: 2,
    trigger: {
      global: "phaseBefore",
      player: ["enterGame", "phaseBegin", "phaseEnd"]
    },
    filter(event2, player2, name2) {
      if (event2.name != "phase") {
        return true;
      }
      if (name2 == "phaseBefore") {
        return game.phaseNumber == 0;
      }
      return player2.storage.rehuashen?.character?.length > 0;
    },
    async cost(event2, trigger2, player2) {
      if (trigger2.name !== "phase" || event2.triggername === "phaseBefore") {
        event2.result = { bool: true, cost_data: ["替换当前化身"] };
        return;
      }
      const prompt = "###" + get.prompt(event2.skill) + '###<div class="text center">替换当前化身牌或制衡至多两张其他化身牌</div>';
      const result2 = await player2.chooseControl("替换当前化身", "制衡其他化身", "cancel2").set("ai", () => {
        const { player: player3, cond } = get.event();
        let skills2 = player3.storage.rehuashen.character.map((i) => get.character(i).skills).flat();
        skills2.randomSort();
        skills2.sort((a, b) => get.skillRank(b, cond) - get.skillRank(a, cond));
        if (skills2[0] === player3.storage.rehuashen.current2 || get.skillRank(skills2[0], cond) < 1) {
          return "制衡其他化身";
        }
        return "替换当前化身";
      }).set("cond", event2.triggername).set("prompt", prompt).forResult();
      const control = result2.control;
      event2.result = { bool: typeof control === "string" && control !== "cancel2", cost_data: control };
    },
    async content(event2, trigger2, player2) {
      let choice = event2.cost_data;
      if (Array.isArray(choice)) {
        lib.skill.rehuashen.addHuashens(player2, 3);
        [choice] = choice;
      }
      _status.noclearcountdown = true;
      const id = lib.status.videoId++, prompt = choice === "替换当前化身" ? "化身：请选择你要更换的武将牌" : "化身：选择制衡至多两张武将牌";
      const cards2 = player2.storage.rehuashen.character;
      if (player2.isOnline2()) {
        player2.send(
          (cards3, prompt2, id2) => {
            const dialog2 = ui.create.dialog(prompt2, [cards3, lib.skill.rehuashen.$createButton]);
            dialog2.videoId = id2;
          },
          cards2,
          prompt,
          id
        );
      }
      const dialog = ui.create.dialog(prompt, [cards2, lib.skill.rehuashen.$createButton]);
      dialog.videoId = id;
      if (!event2.isMine()) {
        dialog.style.display = "none";
      }
      if (choice === "替换当前化身") {
        const buttons = dialog.content.querySelector(".buttons");
        const array = dialog.buttons.filter((item) => !item.classList.contains("nodisplay") && item.style.display !== "none");
        const choosed = player2.storage.rehuashen.choosed;
        const groups = array.map((i) => get.character(i.link).group).unique().sort((a, b) => {
          const getNum = (g) => lib.group.includes(g) ? lib.group.indexOf(g) : lib.group.length;
          return getNum(a) - getNum(b);
        });
        if (choosed.length > 0 || groups.length > 1) {
          dialog.style.bottom = (parseInt(dialog.style.top || "0", 10) + get.is.phoneLayout() ? 230 : 220) + "px";
          dialog.addPagination({
            data: array,
            totalPageCount: groups.length + Math.sign(choosed.length),
            container: dialog.content,
            insertAfter: buttons,
            onPageChange(state) {
              const { pageNumber, data, pageElement } = state;
              const { groups: groups2, choosed: choosed2 } = pageElement;
              data.forEach((item) => {
                item.classList[(() => {
                  const name2 = item.link, goon = choosed2.length > 0;
                  if (goon && pageNumber === 1) {
                    return choosed2.includes(name2);
                  }
                  const group = get.character(name2).group;
                  return groups2.indexOf(group) + (1 + goon) === pageNumber;
                })() ? "remove" : "add"]("nodisplay");
              });
              ui.update();
            },
            pageLimitForCN: ["←", "→"],
            pageNumberForCN: (choosed.length > 0 ? ["常用"] : []).concat(
              groups.map((i) => {
                const isChineseChar = (char) => {
                  const regex = /[\u4e00-\u9fff\u3400-\u4dbf\ud840-\ud86f\udc00-\udfff\ud870-\ud87f\udc00-\udfff\ud880-\ud88f\udc00-\udfff\ud890-\ud8af\udc00-\udfff\ud8b0-\ud8bf\udc00-\udfff\ud8c0-\ud8df\udc00-\udfff\ud8e0-\ud8ff\udc00-\udfff\ud900-\ud91f\udc00-\udfff\ud920-\ud93f\udc00-\udfff\ud940-\ud97f\udc00-\udfff\ud980-\ud9bf\udc00-\udfff\ud9c0-\ud9ff\udc00-\udfff]/u;
                  return regex.test(char);
                };
                const str = get.plainText(lib.translate[i + "2"] || lib.translate[i] || "无");
                return isChineseChar(str.slice(0, 1)) ? str.slice(0, 1) : str;
              })
            ),
            changePageEvent: "click",
            pageElement: {
              groups,
              choosed
            }
          });
        }
      }
      const finish = () => {
        if (player2.isOnline2()) {
          player2.send("closeDialog", id);
        }
        dialog.close();
        delete _status.noclearcountdown;
        if (!_status.noclearcountdown) {
          game.stopCountChoose();
        }
      };
      while (true) {
        const next = player2.chooseButton(true).set("dialog", id);
        if (choice === "制衡其他化身") {
          next.set("selectButton", [1, 2]);
          next.set("filterButton", (button) => button.link !== get.event().current);
          next.set("current", player2.storage.rehuashen.current);
        } else {
          next.set("ai", (button) => {
            const { player: player3, cond } = get.event();
            let skills2 = player3.storage.rehuashen.character.map((i) => get.character(i).skills).flat();
            skills2.randomSort();
            skills2.sort((a, b) => get.skillRank(b, cond) - get.skillRank(a, cond));
            return player3.storage.rehuashen.map[button.link].includes(skills2[0]) ? 2.5 : 1 + Math.random();
          });
          next.set("cond", event2.triggername);
        }
        const result2 = await next.forResult();
        if (choice === "制衡其他化身") {
          finish();
          lib.skill.rehuashen.removeHuashen(player2, result2.links);
          lib.skill.rehuashen.addHuashens(player2, result2.links.length);
          return;
        } else {
          const card2 = result2.links[0];
          const func = function(card3, id2) {
            const dialog2 = get.idDialog(id2);
            if (dialog2) {
              const paginationInstance = dialog2.paginationMap?.get(dialog2.content.querySelector(".buttons"));
              if (paginationInstance?.state) {
                paginationInstance.state.pageRefuseChanged = true;
              }
              for (let i = 0; i < dialog2.buttons.length; i++) {
                if (dialog2.buttons[i].link == card3) {
                  dialog2.buttons[i].classList.add("selectedx");
                } else {
                  dialog2.buttons[i].classList.add("unselectable");
                }
              }
            }
          };
          if (player2.isOnline2()) {
            player2.send(func, card2, id);
          } else if (event2.isMine()) {
            func(card2, id);
          }
          const result22 = await player2.chooseControl(player2.storage.rehuashen.map[card2], "返回").set("ai", () => {
            const { player: player3, cond, controls } = get.event();
            let skills2 = controls.slice();
            skills2.randomSort();
            skills2.sort((a, b) => get.skillRank(b, cond) - get.skillRank(a, cond));
            return skills2[0];
          }).set("cond", event2.triggername).forResult();
          const control = result22.control;
          if (control === "返回") {
            const func2 = function(card3, id2) {
              const dialog2 = get.idDialog(id2);
              if (dialog2) {
                const paginationInstance = dialog2.paginationMap?.get(dialog2.content.querySelector(".buttons"));
                if (paginationInstance?.state) {
                  paginationInstance.state.pageRefuseChanged = false;
                }
                for (let i = 0; i < dialog2.buttons.length; i++) {
                  dialog2.buttons[i].classList.remove("selectedx");
                  dialog2.buttons[i].classList.remove("unselectable");
                }
              }
            };
            if (player2.isOnline2()) {
              player2.send(func2, card2, id);
            } else if (event2.isMine()) {
              func2(card2, id);
            }
          } else {
            finish();
            player2.storage.rehuashen.choosed.add(card2);
            if (player2.storage.rehuashen.current != card2) {
              const old = player2.storage.rehuashen.current;
              player2.storage.rehuashen.current = card2;
              game.broadcastAll(
                (player3, character, old2) => {
                  player3.tempname.remove(old2);
                  player3.tempname.add(character);
                  player3.sex = lib.character[character][0];
                },
                player2,
                card2,
                old
              );
              game.log(player2, "将性别变为了", "#y" + get.translation(get.character(card2).sex) + "性");
              player2.changeGroup(get.character(card2).group);
            }
            player2.storage.rehuashen.current2 = control;
            if (!player2.additionalSkills.rehuashen?.includes(control)) {
              player2.flashAvatar("rehuashen", card2);
              player2.syncStorage("rehuashen");
              player2.updateMarks("rehuashen");
              await player2.addAdditionalSkills("rehuashen", control);
            }
            return;
          }
        }
      }
    },
    init(player2, skill) {
      if (!player2.storage[skill]) {
        player2.storage[skill] = {
          character: [],
          choosed: [],
          map: {}
        };
      }
    },
    banned: ["lisu", "sp_xiahoudun", "xushao", "jsrg_xushao", "zhoutai", "old_zhoutai", "shixie", "xin_zhoutai", "dc_shixie", "old_shixie"],
    bannedType: ["Charlotte", "主公技", "觉醒技", "限定技", "隐匿技", "使命技"],
    addHuashen(player2) {
      if (!player2.storage.rehuashen) {
        return;
      }
      if (!_status.characterlist) {
        game.initCharacterList();
      }
      _status.characterlist.randomSort();
      for (let i = 0; i < _status.characterlist.length; i++) {
        let name2 = _status.characterlist[i];
        if (name2.indexOf("zuoci") != -1 || name2.indexOf("key_") == 0 || name2.indexOf("sp_key_") == 0 || get.is.double(name2) || lib.skill.rehuashen.banned.includes(name2) || player2.storage.rehuashen.character.includes(name2)) {
          continue;
        }
        let skills2 = lib.character[name2][3].filter((skill) => {
          const categories = get.skillCategoriesOf(skill, player2);
          return !categories.some((type) => lib.skill.rehuashen.bannedType.includes(type));
        });
        if (skills2.length) {
          player2.storage.rehuashen.character.push(name2);
          player2.storage.rehuashen.map[name2] = skills2;
          _status.characterlist.remove(name2);
          return name2;
        }
      }
    },
    addHuashens(player2, num2) {
      var list = [];
      for (var i = 0; i < num2; i++) {
        var name2 = lib.skill.rehuashen.addHuashen(player2);
        if (name2) {
          list.push(name2);
        }
      }
      if (list.length) {
        player2.syncStorage("rehuashen");
        player2.updateMarks("rehuashen");
        game.log(player2, "获得了", get.cnNumber(list.length) + "张", "#g化身");
        lib.skill.rehuashen.drawCharacter(player2, list);
      }
    },
    removeHuashen(player2, links) {
      player2.storage.rehuashen.character.removeArray(links);
      _status.characterlist.addArray(links);
      game.log(player2, "移去了", get.cnNumber(links.length) + "张", "#g化身");
    },
    drawCharacter(player2, list) {
      game.broadcastAll(
        function(player3, list2) {
          if (player3.isUnderControl(true)) {
            var cards2 = [];
            for (var i = 0; i < list2.length; i++) {
              var cardname = "huashen_card_" + list2[i];
              lib.card[cardname] = {
                fullimage: true,
                image: "character:" + list2[i]
              };
              lib.translate[cardname] = get.rawName2(list2[i]);
              cards2.push(game.createCard(cardname, "", ""));
            }
            player3.$draw(cards2, "nobroadcast");
          }
        },
        player2,
        list
      );
    },
    $createButton(item, type, position, noclick, node) {
      node = ui.create.buttonPresets.character(item, "character", position, noclick);
      const info = lib.character[item];
      const skills2 = info[3].filter(function(skill) {
        const categories = get.skillCategoriesOf(skill, get.player());
        return !categories.some((type2) => lib.skill.rehuashen.bannedType.includes(type2));
      });
      if (skills2.length) {
        const skillstr = skills2.map((i) => `[${get.translation(i)}]`).join("<br>");
        const skillnode = ui.create.caption(`<div class="text" data-nature=${get.groupnature(info[1], "raw")}m style="font-family: ${lib.config.name_font || "xinwei"},xinwei">${skillstr}</div>`, node);
        skillnode.style.left = "2px";
        skillnode.style.bottom = "2px";
      }
      node._customintro = function(uiintro, evt) {
        const character = node.link, characterInfo = get.character(node.link);
        let capt = get.translation(character);
        if (characterInfo) {
          capt += `&nbsp;&nbsp;${get.translation(characterInfo.sex)}`;
          let charactergroup;
          const charactergroups = get.is.double(character, true);
          if (charactergroups) {
            charactergroup = charactergroups.map((i) => get.translation(i)).join("/");
          } else {
            charactergroup = get.translation(characterInfo.group);
          }
          capt += `&nbsp;&nbsp;${charactergroup}`;
        }
        uiintro.add(capt);
        if (lib.characterTitle[node.link]) {
          uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
        }
        for (let i = 0; i < skills2.length; i++) {
          if (lib.translate[skills2[i] + "_info"]) {
            let translation = lib.translate[skills2[i] + "_ab"] || get.translation(skills2[i]).slice(0, 2);
            if (lib.skill[skills2[i]] && lib.skill[skills2[i]].nobracket) {
              uiintro.add('<div><div class="skilln">' + get.translation(skills2[i]) + "</div><div>" + get.skillInfoTranslation(skills2[i], null, false) + "</div></div>");
            } else {
              uiintro.add('<div><div class="skill">【' + translation + "】</div><div>" + get.skillInfoTranslation(skills2[i], null, false) + "</div></div>");
            }
            if (lib.translate[skills2[i] + "_append"]) {
              uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills2[i] + "_append"] + "</div>");
            }
          }
        }
      };
      return node;
    },
    // createAudio:(character,skillx,name)=>{
    // 	var skills=game.expandSkills([skillx]);
    // 	skills=skills.filter(skill=>get.info(skill));
    // 	if(!skills.length) return;
    // 	var skillss=skills.filter(skill=>get.info(skill).derivation);
    // 	if(skillss.length){
    // 		skillss.forEach(skill=>{
    // 			var derivationSkill=get.info(skill).derivation;
    // 			skills[Array.isArray(derivationSkill)?'addArray':'add'](derivationSkill);
    // 		});
    // 	}
    // 	skills.forEach(skill=>{
    // 		var info=lib.skill[skill];
    // 		if(info){
    // 			if(!info.audioname2) info.audioname2={};
    // 			if(info.audioname&&info.audioname.includes(character)){
    // 				if(info.audio){
    // 					if(typeof info.audio=='string') skill=info.audio;
    // 					if(Array.isArray(info.audio)) skill=info.audio[0];
    // 				}
    // 				if(!lib.skill[skill+'_'+character]) lib.skill[skill+'_'+character]={audio:2};
    // 				info.audioname2[name]=(skill+'_'+character);
    // 			}
    // 			else if(info.audioname2[character]){
    // 				info.audioname2[name]=info.audioname2[character];
    // 			}
    // 			else{
    // 				if(info.audio){
    // 					if(typeof info.audio=='string') skill=info.audio;
    // 					if(Array.isArray(info.audio)) skill=info.audio[0];
    // 				}
    // 				info.audioname2[name]=skill;
    // 			}
    // 		}
    // 	});
    // },
    mark: true,
    intro: {
      onunmark(storage, player2) {
        _status.characterlist.addArray(storage.character);
        storage.character = [];
        const name2 = player2.name ? player2.name : player2.name1;
        if (name2) {
          const sex = get.character(name2).sex;
          const group = get.character(name2).group;
          if (player2.sex !== sex) {
            game.broadcastAll(
              (player3, sex2) => {
                player3.sex = sex2;
              },
              player2,
              sex
            );
            game.log(player2, "将性别变为了", "#y" + get.translation(sex) + "性");
          }
          if (player2.group !== group) {
            game.broadcastAll(
              (player3, group2) => {
                player3.group = group2;
                player3.node.name.dataset.nature = get.groupnature(group2);
              },
              player2,
              group
            );
            game.log(player2, "将势力变为了", "#y" + get.translation(group + 2));
          }
        }
      },
      mark(dialog, storage, player2) {
        if (storage && storage.current) {
          dialog.addSmall([[storage.current], (item, type, position, noclick, node) => lib.skill.rehuashen.$createButton(item, type, position, noclick, node)]);
        }
        if (storage && storage.current2) {
          dialog.add('<div><div class="skill">【' + get.translation(lib.translate[storage.current2 + "_ab"] || get.translation(storage.current2).slice(0, 2)) + "】</div><div>" + get.skillInfoTranslation(storage.current2, player2, false) + "</div></div>");
        }
        if (storage && storage.character.length) {
          if (player2.isUnderControl(true)) {
            dialog.addSmall([storage.character, (item, type, position, noclick, node) => lib.skill.rehuashen.$createButton(item, type, position, noclick, node)]);
          } else {
            dialog.addText("共有" + get.cnNumber(storage.character.length) + "张“化身”");
          }
        } else {
          return "没有化身";
        }
      },
      content(storage, player2) {
        return "共有" + get.cnNumber(storage.character.length) + "张“化身”";
      },
      markcount(storage, player2) {
        if (storage && storage.character) {
          return storage.character.length;
        }
        return 0;
      }
    }
  },
  rexinsheng: {
    inherit: "xinsheng",
    async content(event2, trigger2, player2) {
      lib.skill.rehuashen.addHuashens(player2, 1);
    },
    ai: { combo: "rehuashen" }
  },
  reguhuo: {
    audio: 2,
    derivation: "rechanyuan",
    enable: ["chooseToUse", "chooseToRespond"],
    hiddenCard(player2, name2) {
      return lib.inpile.includes(name2) && player2.countCards("h") > 0 && !player2.hasSkill("reguhuo_used");
    },
    filter(event2, player2) {
      if (!player2.countCards("hs") || player2.hasSkill("reguhuo_used")) {
        return false;
      }
      for (var i of lib.inpile) {
        var type = get.type(i);
        if ((type == "basic" || type == "trick") && event2.filterCard(get.autoViewAs({ name: i }, "unsure"), player2, event2)) {
          return true;
        }
        if (i == "sha") {
          for (var j of lib.inpile_nature) {
            if (event2.filterCard(get.autoViewAs({ name: i, nature: j }, "unsure"), player2, event2)) {
              return true;
            }
          }
        }
      }
      return false;
    },
    chooseButton: {
      dialog() {
        var list = [];
        for (var i of lib.inpile) {
          var type = get.type(i);
          if (type == "basic" || type == "trick") {
            list.push([type, "", i]);
          }
          if (i == "sha") {
            for (var j of lib.inpile_nature) {
              list.push(["基本", "", "sha", j]);
            }
          }
        }
        return ui.create.dialog("蛊惑", [list, "vcard"]);
      },
      filter(button, player2) {
        var evt = _status.event.getParent();
        return evt.filterCard(get.autoViewAs({ name: button.link[2], nature: button.link[3] }, "unsure"), player2, evt);
      },
      check(button) {
        var player2 = _status.event.player;
        var rand = _status.event.getParent().getRand("reguhuo");
        var hasEnemy = game.hasPlayer(function(current) {
          return current != player2 && !current.hasSkill("rechanyuan") && (get.realAttitude || get.attitude)(current, player2) < 0;
        });
        var card2 = { name: button.link[2], nature: button.link[3] };
        var val = _status.event.getParent().type == "phase" ? player2.getUseValue(card2) : 1;
        if (val <= 0) {
          return 0;
        }
        if (hasEnemy && rand > 0.3) {
          if (!player2.countCards("h", function(cardx) {
            if (card2.name == cardx.name) {
              if (card2.name != "sha") {
                return true;
              }
              return get.is.sameNature(card2, cardx);
            }
            return false;
          })) {
            return 0;
          }
          return 3 * val;
        }
        return val;
      },
      backup(links, player2) {
        return {
          viewAs: {
            name: links[0][2],
            nature: links[0][3],
            suit: "none",
            number: null
          },
          filterCard(card2, player3, target2) {
            var result2 = true;
            var suit = card2.suit, number = card2.number;
            card2.suit = "none";
            card2.number = null;
            var mod = game.checkMod(card2, player3, "unchanged", "cardEnabled2", player3);
            if (mod != "unchanged") {
              result2 = mod;
            }
            card2.suit = suit;
            card2.number = number;
            return result2;
          },
          position: "hs",
          ignoreMod: true,
          ai1(card2) {
            var player3 = _status.event.player;
            var hasEnemy = game.hasPlayer(function(current) {
              return current != player3 && !current.hasSkill("rechanyuan") && (get.realAttitude || get.attitude)(current, player3) < 0;
            });
            var rand = _status.event.getRand("reguhuo");
            var cardx = lib.skill.reguhuo_backup.viewAs;
            if (hasEnemy && rand > 0.3) {
              if (card2.name == cardx.name && (card2.name != "sha" || get.is.sameNature(card2, cardx))) {
                return 10;
              }
              return 0;
            }
            return 6 - get.value(card2);
          },
          precontent() {
            player2.logSkill("reguhuo");
            player2.addTempSkill("reguhuo_guess");
            var card2 = event.result.cards[0];
            event.result.card.suit = get.suit(card2);
            event.result.card.number = get.number(card2);
          }
        };
      },
      prompt(links) {
        return "将一张手牌当做" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) + "使用";
      }
    },
    ai: {
      fireAttack: true,
      respondShan: true,
      respondSha: true,
      skillTagFilter(player2) {
        if (!player2.countCards("hs") || player2.hasSkill("reguhuo_used")) {
          return false;
        }
      },
      order: 10,
      result: {
        player: 1
      },
      threaten: 1.3
    },
    subSkill: {
      backup: {},
      used: { charlotte: true },
      guess: {
        trigger: {
          player: ["useCardBefore", "respondBefore"]
        },
        forced: true,
        silent: true,
        popup: false,
        charlotte: true,
        firstDo: true,
        sourceSkill: "reguhuo",
        filter(event2, player2) {
          return event2.skill && event2.skill.indexOf("reguhuo_") == 0;
        },
        content() {
          "step 0";
          player.addTempSkill("reguhuo_used");
          event.fake = false;
          var card2 = trigger.cards[0];
          if (card2.name != trigger.card.name || card2.name == "sha" && !get.is.sameNature(trigger.card, card2)) {
            event.fake = true;
          }
          player.line(trigger.targets, get.nature(trigger.card));
          event.cardTranslate = get.translation(trigger.card.name);
          trigger.card.number = get.number(card2);
          trigger.card.suit = get.suit(card2);
          trigger.skill = "reguhuo_backup";
          if (trigger.card.name == "sha" && get.natureList(trigger.card).length) {
            event.cardTranslate = get.translation(trigger.card.nature) + event.cardTranslate;
          }
          player.popup(event.cardTranslate, trigger.name == "useCard" ? "metal" : "wood");
          event.prompt = "是否质疑" + get.translation(player) + "声明的" + event.cardTranslate + "？";
          game.log(player, "声明了", "#y" + event.cardTranslate);
          event.targets = game.filterPlayer(function(current2) {
            return current2 != player && !current2.hasSkill("rechanyuan");
          }).sortBySeat();
          event.targets2 = event.targets.slice(0);
          player.lose(card2, ui.ordering).relatedEvent = trigger;
          if (!event.targets.length) {
            event.goto(3);
          }
          event.betrays = [];
          var list = event.targets.map(function(target2) {
            return [target2, [event.prompt, [["reguhuo_ally", "reguhuo_betray"], "vcard"]], true];
          });
          player.chooseButtonOL(list).set("switchToAuto", function() {
            _status.event.result = "ai";
          }).set("processAI", function() {
            var choice = Math.random() > 0.5 ? "reguhuo_ally" : "reguhuo_betray";
            var player2 = _status.event.player;
            var evt = _status.event.getParent("reguhuo_guess");
            if (player2.hp <= 1 || evt && (get.realAttitude || get.attitude)(player2, evt.player) >= 0) {
              choice = "reguhuo_ally";
            }
            return {
              bool: true,
              links: [["", "", choice]]
            };
          });
          for (var i in result) {
            if (result[i].links[0][2] == "reguhuo_betray") {
              var current = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
              event.betrays.push(current);
              current.addExpose(0.2);
            }
          }
          for (var i of event.targets2) {
            var b = event.betrays.includes(i);
            i.popup(b ? "质疑" : "不质疑", b ? "fire" : "wood");
            game.log(i, b ? "#y质疑" : "#g不质疑");
          }
          game.delay();
          player.showCards(trigger.cards);
          if (event.betrays.length) {
            event.betrays.sortBySeat();
            if (event.fake) {
              game.asyncDraw(event.betrays);
              trigger.cancel();
              trigger.getParent().goto(0);
              game.log(player, "声明的", "#y" + event.cardTranslate, "作废了");
            } else {
              var next = game.createEvent("reguhuo_final", false);
              event.next.remove(next);
              trigger.after.push(next);
              next.targets = event.betrays;
              next.setContent(lib.skill.reguhuo_guess.contentx);
              event.finish();
            }
          } else {
            event.finish();
          }
          game.delayx();
        },
        contentx() {
          "step 0";
          event.target = targets.shift();
          event.target.chooseToDiscard("弃置一张牌或失去1点体力").set("ai", function(card2) {
            return 9 - get.value(card2);
          });
          if (!result.bool) {
            target.loseHp();
          }
          target.addSkills("rechanyuan");
          if (targets.length) {
            event.goto(0);
          }
        }
      }
    }
  },
  rechanyuan: {
    init(player2, skill) {
      if (player2.hp <= 1) {
        player2.logSkill(skill);
      }
      player2.addSkillBlocker(skill);
    },
    onremove(player2, skill) {
      player2.removeSkillBlocker(skill);
    },
    skillBlocker(skill, player2) {
      return skill != "chanyuan" && skill != "rechanyuan" && !lib.skill[skill].charlotte && !lib.skill[skill].persevereSkill && player2.hp <= 1;
    },
    mark: true,
    intro: {
      content(storage, player2, skill) {
        var str = "<li>锁定技，你不能于〖蛊惑〗的结算流程中进行质疑。当你的体力值不大于1时，你的其他技能失效。";
        var list = player2.getSkills(null, false, false).filter(function(i) {
          return lib.skill.rechanyuan.skillBlocker(i, player2);
        });
        if (list.length) {
          str += "<br><li>失效技能：" + get.translation(list);
        }
        return str;
      }
    },
    audio: 2,
    trigger: { player: "changeHp" },
    filter(event2, player2) {
      return get.sgn(player2.hp - 1.5) != get.sgn(player2.hp - 1.5 - event2.num);
    },
    forced: true,
    content() {
    }
  },
  botu: {
    audio: 2,
    trigger: { player: "phaseAfter" },
    frequent: true,
    filter(event2, player2) {
      var history = player2.getHistory("useCard", function(evt) {
        return evt.isPhaseUsing();
      });
      var suits = [];
      for (var i = 0; i < history.length; i++) {
        var suit = get.suit(history[i].card);
        if (suit) {
          suits.add(suit);
        }
      }
      return suits.length == 4;
    },
    content() {
      player.insertPhase();
    }
  },
  xinleiji: {
    group: "xinleiji_misa",
    audio: 2,
    derivation: "xinleiji_faq",
    audioname: ["boss_qinglong"],
    trigger: { player: ["useCard", "respond"] },
    filter(event2, player2) {
      return event2.card.name == "shan" || event2.name == "useCard" && event2.card.name == "shandian";
    },
    judgeCheck(card2, bool) {
      var suit = get.suit(card2);
      if (suit == "spade") {
        if (bool && get.number(card2) > 1 && get.number(card2) < 10) {
          return 5;
        }
        return 4;
      }
      if (suit == "club") {
        return 2;
      }
      return 0;
    },
    content() {
      player.judge(lib.skill.xinleiji.judgeCheck).judge2 = function(result2) {
        return result2.bool ? true : false;
      };
    },
    ai: {
      useShan: true,
      effect: {
        target_use(card2, player2, target2, current) {
          let name2;
          if (typeof card2 == "object") {
            if (card2.viewAs) {
              name2 = card2.viewAs;
            } else {
              name2 = get.name(card2);
            }
          }
          if (name2 == "shandian" || get.tag(card2, "respondShan") && !player2.hasSkillTag(
            "directHit_ai",
            true,
            {
              target: target2,
              card: card2
            },
            true
          )) {
            let club = 0, spade = 0;
            if (game.hasPlayer(function(current2) {
              return get.attitude(target2, current2) < 0 && get.damageEffect(current2, target2, target2, "thunder") > 0;
            })) {
              club = 2;
              spade = 4;
            }
            if (!target2.isHealthy()) {
              club += 2;
            }
            if (!club && !spade) {
              return 1;
            }
            if (name2 === "sha") {
              if (!target2.mayHaveShan(player2, "use")) {
                return;
              }
            } else if (!target2.mayHaveShan(player2)) {
              return 1 - 0.1 * Math.min(5, target2.countCards("hs"));
            }
            if (!target2.hasSkillTag("rejudge")) {
              return [1, (club + spade) / 4];
            }
            let pos = player2 == target2 || player2.hasSkillTag("viewHandcard", null, target2, true) ? "hes" : "e", better = club > spade ? "club" : "spade", max = 0;
            target2.hasCard(function(cardx) {
              if (get.suit(cardx) == better) {
                max = 2;
                return true;
              }
              if (spade && get.color(cardx) == "black") {
                max = 1;
              }
            }, pos);
            if (max == 2) {
              return [1, Math.max(club, spade)];
            }
            if (max == 1) {
              return [1, Math.min(club, spade)];
            }
            if (pos == "e") {
              return [1, Math.min(Math.max(1, target2.countCards("hs")) * (club + spade) / 4, Math.max(club, spade))];
            }
            return [1, (club + spade) / 4];
          }
        },
        target(card2, player2, target2) {
          if (name == "lebu" || name == "bingliang") {
            return [target2.hasSkillTag("rejudge") ? 0.4 : 1, 2, target2.hasSkillTag("rejudge") ? 0.4 : 1, 0];
          }
        }
      }
    }
  },
  xinleiji_misa: {
    audio: "xinleiji",
    trigger: { player: "judgeEnd" },
    direct: true,
    disableReason: ["暴虐", "助祭", "弘仪", "孤影"],
    sourceSkill: "xinleiji",
    filter(event2, player2) {
      return !lib.skill.xinleiji_misa.disableReason.includes(event2.judgestr) && ["spade", "club"].includes(event2.result.suit);
    },
    content() {
      "step 0";
      event.num = 1 + ["club", "spade"].indexOf(trigger.result.suit);
      event.logged = false;
      if (event.num == 1 && player.isDamaged()) {
        event.logged = true;
        player.logSkill("xinleiji");
        player.recover();
      }
      player.chooseTarget("雷击：是否对一名角色造成" + event.num + "点雷电伤害？").set("ai", (target2) => {
        const player2 = _status.event.player;
        let eff = get.damageEffect(target2, player2, target2, "thunder");
        if (get.event().num > 1 && !target2.hasSkillTag("filterDamage", null, {
          player: player2,
          card: null,
          nature: "thunder"
        })) {
          if (eff > 0) {
            eff -= 25;
          } else if (eff < 0) {
            eff *= 2;
          }
        }
        return eff * get.attitude(player2, target2);
      }).set("num", event.num);
      if (result.bool && result.targets && result.targets.length) {
        if (!event.logged) {
          player.logSkill("xinleiji", result.targets);
        } else {
          player.line(result.targets, "thunder");
        }
        result.targets[0].damage(event.num, "thunder");
      }
    }
  },
  xinguidao: {
    audio: 2,
    mod: {
      aiOrder(player2, card2, num2) {
        if (num2 > 0 && get.itemtype(card2) == "card" && get.color(card2) == "black" && get.type(card2) == "equip") ;
      },
      aiValue(player2, card2, num2) {
        if (num2 > 0 && get.itemtype(card2) == "card" && get.color(card2) == "black") {
          return num2 * 1.15;
        }
      },
      aiUseful(player2, card2, num2) {
        if (num2 > 0 && get.itemtype(card2) == "card" && get.color(card2) == "black") {
          return num2 * 1.35;
        }
      }
    },
    locked: false,
    trigger: { global: "judge" },
    filter(event2, player2) {
      return player2.countCards("hes", { color: "black" }) > 0;
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseCard(`${get.translation(trigger2.player)}的${trigger2.judgestr || ""}判定为${get.translation(trigger2.player.judging[0])}，${get.prompt(event2.skill)}`, "hes", (card2) => {
        const player3 = get.player();
        if (get.color(card2) !== "black") {
          return false;
        }
        const mod2 = game.checkMod(card2, player3, "unchanged", "cardEnabled2", player3);
        if (mod2 != "unchanged") {
          return mod2;
        }
        const mod = game.checkMod(card2, player3, "unchanged", "cardRespondable", player3);
        if (mod != "unchanged") {
          return mod;
        }
        return true;
      }).set("ai", (card2) => {
        const trigger3 = get.event().getTrigger();
        const { player: player3, judging } = get.event();
        const result2 = trigger3.judge(card2) - trigger3.judge(judging);
        const attitude = get.attitude(player3, trigger3.player);
        if (attitude == 0 || result2 == 0) {
          if (trigger3.player != player3) {
            return 0;
          }
          if (game.hasPlayer(function(current) {
            return get.attitude(player3, current) < 0;
          })) {
            var checkx = lib.skill.xinleiji.judgeCheck(card2, true) - lib.skill.xinleiji.judgeCheck(judging);
            if (checkx > 0) {
              return checkx;
            }
          }
          return 0;
        }
        let val = get.value(card2);
        if (get.subtype(card2) == "equip2") {
          val /= 2;
        } else {
          val /= 7;
        }
        if (attitude == 0 || result2 == 0) {
          return 0;
        }
        if (attitude > 0) {
          return result2 - val;
        }
        return -result2 - val;
      }).set("judging", trigger2.player.judging[0]).forResult();
    },
    popup: false,
    async content(event2, trigger2, player2) {
      const next = player2.respond(event2.cards, event2.name, "highlight", "noOrdering");
      await next;
      const { cards: cards2 } = next;
      if (cards2?.length) {
        player2.$gain2(trigger2.player.judging[0]);
        await player2.gain(trigger2.player.judging[0]);
        const card2 = cards2[0];
        if (get.suit(card2) == "spade" && get.number(card2) > 1 && get.number(card2) < 10) {
          await player2.draw("nodelay");
        }
        trigger2.player.judging[0] = card2;
        trigger2.orderingCards.addArray(cards2);
        game.log(trigger2.player, "的判定牌改为", cards2);
        await game.delay(2);
      }
    },
    ai: {
      rejudge: true,
      tag: { rejudge: 1 }
    }
  },
  reqingguo: {
    mod: {
      aiValue(player2, card2, num2) {
        if (get.name(card2) != "shan" && get.color(card2) != "black") {
          return;
        }
        var cards2 = player2.getCards("hs", function(card3) {
          return get.name(card3) == "shan" || get.color(card3) == "black";
        });
        cards2.sort(function(a, b) {
          return (get.name(b) == "shan" ? 1 : 2) - (get.name(a) == "shan" ? 1 : 2);
        });
        var geti = function() {
          if (cards2.includes(card2)) {
            return cards2.indexOf(card2);
          }
          return cards2.length;
        };
        if (get.name(card2) == "shan") {
          return Math.min(num2, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
        }
        return Math.max(num2, [6.5, 4, 3][Math.min(geti(), 2)]);
      },
      aiUseful() {
        return lib.skill.reqingguo.mod.aiValue.apply(this, arguments);
      }
    },
    locked: false,
    audio: 2,
    enable: ["chooseToRespond", "chooseToUse"],
    filterCard(card2) {
      return get.color(card2) == "black";
    },
    position: "hes",
    viewAs: { name: "shan" },
    viewAsFilter(player2) {
      if (!player2.countCards("hes", { color: "black" })) {
        return false;
      }
    },
    prompt: "将一张黑色牌当闪打出",
    check() {
      return 1;
    },
    ai: {
      order: 2,
      respondShan: true,
      skillTagFilter(player2) {
        if (!player2.countCards("hes", { color: "black" })) {
          return false;
        }
      },
      effect: {
        target(card2, player2, target2, current) {
          if (get.tag(card2, "respondShan") && current < 0) {
            return 0.6;
          }
        }
      }
    }
  },
  reqiangxi: {
    subSkill: {
      off: {
        sub: true
      }
    },
    audio: 2,
    enable: "phaseUse",
    filterCard(card2) {
      return get.subtype(card2) == "equip1";
    },
    selectCard() {
      return [0, 1];
    },
    filterTarget(card2, player2, target2) {
      if (player2 == target2) {
        return false;
      }
      if (target2.hasSkill("reqiangxi_off")) {
        return false;
      }
      return player2.inRange(target2);
    },
    content() {
      "step 0";
      if (cards.length == 0) {
        player.loseHp();
      }
      target.addTempSkill("reqiangxi_off", "phaseUseAfter");
      target.damage("nocard");
    },
    check(card2) {
      return 10 - get.value(card2);
    },
    position: "he",
    ai: {
      order: 8.5,
      result: {
        target(player2, target2) {
          if (!ui.selected.cards.length) {
            if (player2.hp < 2) {
              return 0;
            }
            if (target2.hp >= player2.hp) {
              return 0;
            }
          }
          return get.damageEffect(target2, player2);
        }
      }
    },
    threaten: 1.5
  },
  rehuoji: {
    position: "hes",
    audio: 2,
    audioname: ["ol_sp_zhugeliang", "ol_pangtong"],
    enable: "chooseToUse",
    filterCard(card2) {
      return get.color(card2) == "red";
    },
    viewAs: {
      name: "huogong"
    },
    viewAsFilter(player2) {
      if (!player2.countCards("hes", { color: "red" })) {
        return false;
      }
    },
    prompt: "将一张红色牌当火攻使用",
    check(card2) {
      var player2 = get.player();
      if (player2.countCards("h") > player2.hp) {
        return 6 - get.value(card2);
      }
      return 4 - get.value(card2);
    },
    ai: {
      fireAttack: true
    }
  },
  rekanpo: {
    mod: {
      aiValue(player2, card2, num2) {
        if (get.name(card2) != "wuxie" && get.color(card2) != "black") {
          return;
        }
        var cards2 = player2.getCards("hs", function(card3) {
          return get.name(card3) == "wuxie" || get.color(card3) == "black";
        });
        cards2.sort(function(a, b) {
          return (get.name(b) == "wuxie" ? 1 : 2) - (get.name(a) == "wuxie" ? 1 : 2);
        });
        var geti = function() {
          if (cards2.includes(card2)) {
            return cards2.indexOf(card2);
          }
          return cards2.length;
        };
        if (get.name(card2) == "wuxie") {
          return Math.min(num2, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
        }
        return Math.max(num2, [6, 4, 3][Math.min(geti(), 2)]);
      },
      aiUseful() {
        return lib.skill.rekanpo.mod.aiValue.apply(this, arguments);
      }
    },
    locked: false,
    audio: 2,
    audioname: ["ol_sp_zhugeliang", "ol_pangtong"],
    position: "hes",
    enable: "chooseToUse",
    filterCard(card2) {
      return get.color(card2) == "black";
    },
    viewAsFilter(player2) {
      return player2.countCards("hes", { color: "black" }) > 0;
    },
    viewAs: {
      name: "wuxie"
    },
    prompt: "将一张黑色牌当无懈可击使用",
    check(card2) {
      return 8 - get.value(card2);
    }
  },
  reshuangxiong: {
    audio: "shuangxiong",
    audioname: ["re_yanwen"],
    group: ["reshuangxiong_judge", "reshuangxiong_gain"],
    subSkill: {
      judge: {
        audio: "reshuangxiong",
        logAudio: () => 1,
        trigger: { player: "phaseDrawBegin1" },
        check(event2, player2) {
          if (player2.countCards("h") > player2.hp) {
            return true;
          }
          if (player2.countCards("h") > 3) {
            return true;
          }
          return false;
        },
        filter(event2, player2) {
          return !event2.numFixed;
        },
        prompt2() {
          return "放弃摸牌，然后亮出牌堆顶的两张牌并选择获得其中的一张。本回合内可以将与此牌颜色不同的一张手牌当做【决斗】使用";
        },
        content() {
          "step 0";
          trigger.changeToZero();
          event.cards = get.cards(2);
          event.videoId = lib.status.videoId++;
          game.broadcastAll(
            function(player2, id, cards3) {
              var str;
              if (player2 == game.me && !_status.auto) {
                str = "【双雄】选择获得其中一张牌";
              } else {
                str = "双雄";
              }
              var dialog = ui.create.dialog(str, cards3);
              dialog.videoId = id;
            },
            player,
            event.videoId,
            event.cards
          );
          event.time = get.utc();
          game.addVideo("showCards", player, ["双雄", get.cardsInfo(event.cards)]);
          game.addVideo("delay", null, 2);
          var next = player.chooseButton([1, 1], true);
          next.set("dialog", event.videoId);
          next.set("ai", function(button) {
            var player2 = _status.event.player;
            var color = get.color(button.link);
            var value = get.value(button.link, player2);
            if (player2.countCards("h", { color }) > player2.countCards("h", ["red", "black"].remove(color)[0])) {
              value += 5;
            }
            return value;
          });
          if (result.bool && result.links) {
            var cards2 = [];
            for (var i = 0; i < result.links.length; i++) {
              cards2.push(result.links[i]);
              cards.remove(result.links[i]);
            }
            game.cardsDiscard(cards);
            event.card2 = cards2[0];
          }
          var time = 1e3 - (get.utc() - event.time);
          if (time > 0) {
            game.delay(0, time);
          }
          game.broadcastAll("closeDialog", event.videoId);
          var card2 = event.card2;
          player.gain(card2, "gain2");
          player.addTempSkill("reshuangxiong_viewas");
          player.markAuto("reshuangxiong_viewas", [get.color(card2, false)]);
        }
      },
      gain: {
        trigger: {
          player: "damageEnd"
        },
        audio: "reshuangxiong",
        filter(event2, player2) {
          const evt = event2.getParent();
          return evt?.name == "juedou" && evt[player2 == evt.player ? "targetCards" : "playerCards"]?.someInD("od");
        },
        async cost(event2, trigger2, player2) {
          let evt = trigger2.getParent();
          let cards2 = evt[player2 == evt.player ? "targetCards" : "playerCards"].slice(0).filterInD("od");
          event2.result = await player2.chooseBool("是否发动【双雄】，获得" + get.translation(cards2) + "?").forResult();
          event2.result.cards = cards2;
        },
        async content(event2, trigger2, player2) {
          await player2.gain(event2.cards, "gain2");
        }
      },
      viewas: {
        charlotte: true,
        onremove: true,
        audio: "reshuangxiong",
        logAudio: () => "shuangxiong_re_yanwen2.mp3",
        enable: "chooseToUse",
        viewAs: { name: "juedou" },
        position: "hs",
        viewAsFilter(player2) {
          return player2.hasCard((card2) => lib.skill.reshuangxiong_viewas.filterCard(card2, player2), "hs");
        },
        filterCard(card2, player2) {
          const color = get.color(card2), colors = player2.getStorage("reshuangxiong_viewas");
          for (const i of colors) {
            if (color != i) {
              return true;
            }
          }
          return false;
        },
        prompt() {
          const colors = _status.event.player.getStorage("reshuangxiong_viewas");
          let str = "将一张颜色";
          for (let i = 0; i < colors.length; i++) {
            if (i > 0) {
              str += "或";
            }
            str += "不为";
            str += get.translation(colors[i]);
          }
          str += "的手牌当做【决斗】使用";
          return str;
        },
        check(card2) {
          const player2 = _status.event.player;
          const raw = player2.getUseValue(card2, null, true);
          const eff = player2.getUseValue(get.autoViewAs({ name: "juedou" }, [card2]));
          return eff - raw;
        },
        ai: { order: 7 }
      }
    }
  },
  reshuangxiong1: {
    audio: "shuangxiong1",
    audioname2: {
      re_yanwen: "shuangxiong_re_yanwen1"
    },
    trigger: { player: "phaseDrawBegin1" },
    sourceSkill: "reshuangxiong",
    check(event2, player2) {
      if (player2.countCards("h") > player2.hp) {
        return true;
      }
      if (player2.countCards("h") > 3) {
        return true;
      }
      return false;
    },
    filter(event2, player2) {
      return !event2.numFixed;
    },
    prompt2() {
      return "放弃摸牌，然后亮出牌堆顶的两张牌并选择获得其中的一张。本回合内可以将与此牌颜色不同的一张手牌当做【决斗】使用";
    },
    content() {
      "step 0";
      trigger.changeToZero();
      event.cards = get.cards(2);
      event.videoId = lib.status.videoId++;
      game.broadcastAll(
        function(player2, id, cards3) {
          var str;
          if (player2 == game.me && !_status.auto) {
            str = "【双雄】选择获得其中一张牌";
          } else {
            str = "双雄";
          }
          var dialog = ui.create.dialog(str, cards3);
          dialog.videoId = id;
        },
        player,
        event.videoId,
        event.cards
      );
      event.time = get.utc();
      game.addVideo("showCards", player, ["双雄", get.cardsInfo(event.cards)]);
      game.addVideo("delay", null, 2);
      var next = player.chooseButton([1, 1], true);
      next.set("dialog", event.videoId);
      next.set("ai", function(button) {
        var player2 = _status.event.player;
        var color = get.color(button.link);
        var value = get.value(button.link, player2);
        if (player2.countCards("h", { color }) > player2.countCards("h", ["red", "black"].remove(color)[0])) {
          value += 5;
        }
        return value;
      });
      if (result.bool && result.links) {
        var cards2 = [];
        for (var i = 0; i < result.links.length; i++) {
          cards2.push(result.links[i]);
          cards.remove(result.links[i]);
        }
        game.cardsDiscard(cards);
        event.card2 = cards2[0];
      }
      var time = 1e3 - (get.utc() - event.time);
      if (time > 0) {
        game.delay(0, time);
      }
      game.broadcastAll("closeDialog", event.videoId);
      var card2 = event.card2;
      player.gain(card2, "gain2");
      player.addTempSkill("shuangxiong2");
      player.markAuto("shuangxiong2", [get.color(card2, false)]);
    }
  },
  reshuangxiong2: {
    trigger: {
      player: "damageEnd"
    },
    direct: true,
    sourceSkill: "reshuangxiong",
    filter(event2, player2) {
      var evt = event2.getParent();
      return (evt && evt.name == "juedou" && evt[player2 == evt.player ? "targetCards" : "playerCards"].length) > 0;
    },
    content() {
      "step 0";
      var evt = trigger.getParent();
      var cards2 = evt[player == evt.player ? "targetCards" : "playerCards"].slice(0);
      for (var i = 0; i < cards2.length; i++) {
        if (get.position(cards2[i]) != "d") {
          cards2.remove(cards2[i--]);
        }
      }
      if (!cards2.length) {
        event.finish();
      } else {
        event.cards = cards2;
        player.chooseBool("是否发动【双雄】，获得" + get.translation(event.cards) + "?").ai = function() {
          return true;
        };
      }
      if (result.bool) {
        player.logSkill("reshuangxiong");
        player.gain(cards2, "gain2");
      }
    }
  },
  new_yajiao: {
    audio: "reyajiao",
    trigger: {
      player: "loseEnd"
    },
    frequent: true,
    filter(event2, player2) {
      return player2 != _status.currentPhase && event2.hs && event2.hs.length > 0 && ["useCard", "respond"].includes(event2.getParent().name);
    },
    content() {
      "step 0";
      event.card = get.cards();
      player.showCards(event.card);
      event.same = false;
      if (get.type(event.card[0], "trick") == get.type(trigger.getParent().card, "trick")) {
        event.same = true;
      }
      player.chooseTarget("选择获得此牌的角色", true).set("ai", function(target2) {
        var att = get.attitude(_status.event.player, target2);
        if (_status.event.du) {
          if (target2.hasSkillTag("nodu")) {
            return 0;
          }
          return -att;
        }
        if (!_status.event.same) {
          att += target2 == _status.event.player ? 1 : 0;
        }
        if (att > 0) {
          return att + Math.max(0, 5 - target2.countCards("h"));
        }
        return att;
      }).set("du", event.card.name == "du").set("same", event.same);
      if (result.targets) {
        player.line(result.targets, "green");
        result.targets[0].gain(event.card, "gain2");
        if (!event.same) {
          player.chooseToDiscard(true, "he");
        }
      }
    },
    ai: {
      effect: {
        target(card2, player2, target2) {
          if (get.tag(card2, "respond") && target2.countCards("h") > 1) {
            return [1, 0.2];
          }
        }
      }
    }
  },
  new_liyu: {
    audio: "liyu",
    trigger: {
      source: "damageSource"
    },
    filter(event2, player2) {
      if (event2._notrigger.includes(event2.player)) {
        return false;
      }
      return event2.card && event2.card.name == "sha" && event2.player != player2 && event2.player.isIn() && event2.player.countGainableCards(player2, "hej") > 0;
    },
    direct: true,
    content() {
      "step 0";
      player.gainPlayerCard(get.prompt("new_liyu", trigger.player), trigger.player, "hej", "visibleMove").set("ai", function(button) {
        var player2 = _status.event.player, target2 = _status.event.target;
        if (get.attitude(player2, target2) > 0 && get.position(button.link) === "j") {
          return 4 + get.value(button.link);
        }
        if (get.type(button.link) === "equip") {
          return _status.event.juedou;
        }
        return 3;
      }).set(
        "juedou",
        (() => {
          if (get.attitude(player, trigger.player) > 0 && game.hasPlayer(function(current) {
            return player.canUse({ name: "juedou" }, current) && current != trigger.player && current != player && get.effect(current, { name: "juedou" }, player, _status.event.player) > 2;
          })) {
            return 5;
          }
          if (game.hasPlayer(function(current) {
            return player.canUse({ name: "juedou" }, current) && current != trigger.player && current != player && get.effect(current, { name: "juedou" }, player, _status.event.player) < 0;
          })) {
            return 1;
          }
          return 4;
        })()
      ).set("logSkill", ["new_liyu", trigger.player]);
      if (result.bool) {
        if (get.type(result.cards[0]) != "equip") {
          trigger.player.draw();
          event.finish();
        } else {
          if (!game.hasPlayer(function(current) {
            return current != player && current != trigger.player && player.canUse("juedou", current);
          })) {
            event.finish();
            return;
          }
          trigger.player.chooseTarget(
            true,
            function(card2, player2, target2) {
              var evt = _status.event.getParent();
              return evt.player.canUse({ name: "juedou" }, target2) && target2 != _status.event.player;
            },
            "请选择一名角色，视为" + get.translation(player) + "对其使用【决斗】"
          ).set("ai", function(target2) {
            var evt = _status.event.getParent();
            return get.effect(target2, { name: "juedou" }, evt.player, _status.event.player) - 2;
          });
        }
      } else {
        event.finish();
      }
      if (result.targets) {
        player.useCard({ name: "juedou", isCard: true }, result.targets[0], "noai");
      }
    },
    ai: {
      halfneg: true
    }
  },
  new_retuxi: {
    audio: "retuxi",
    audioname2: { gz_jun_caocao: "jianan_tuxi" },
    trigger: {
      player: "phaseDrawBegin2"
    },
    direct: true,
    preHidden: true,
    filter(event2, player2) {
      return event2.num > 0 && !event2.numFixed && game.hasPlayer(function(target2) {
        return target2.countCards("h") > 0 && player2 != target2;
      });
    },
    content() {
      "step 0";
      var num2 = get.copy(trigger.num);
      if (get.mode() == "guozhan" && num2 > 2) {
        num2 = 2;
      }
      player.chooseTarget(
        get.prompt("new_retuxi"),
        "获得至多" + get.translation(num2) + "名角色的各一张手牌，然后少摸等量的牌",
        [1, num2],
        function(card2, player2, target2) {
          return target2.countCards("h") > 0 && player2 != target2;
        },
        function(target2) {
          var att = get.attitude(_status.event.player, target2);
          if (target2.hasSkill("tuntian")) {
            return att / 10;
          }
          return 1 - att;
        }
      ).setHiddenSkill("new_retuxi");
      if (result.bool) {
        result.targets.sortBySeat();
        player.logSkill("new_retuxi", result.targets);
        player.gainMultiple(result.targets);
        trigger.num -= result.targets.length;
      } else {
        event.finish();
      }
      if (trigger.num <= 0) {
        game.delay();
      }
    },
    ai: {
      threaten: 1.6,
      expose: 0.2
    }
  },
  new_reyiji: {
    audio: "reyiji",
    audioname: ["yj_sb_guojia", "yj_sb_guojia_shadow"],
    trigger: {
      player: "damageEnd"
    },
    frequent: true,
    filter(event2) {
      return event2.num > 0;
    },
    getIndex(event2, player2, triggername) {
      return event2.num;
    },
    content() {
      "step 0";
      player.draw(2);
      if (_status.connectMode) {
        game.broadcastAll(function() {
          _status.noclearcountdown = true;
        });
      }
      event.given_map = {};
      event.num = 2;
      player.chooseCardTarget({
        filterCard(card2) {
          return get.itemtype(card2) == "card" && !card2.hasGaintag("reyiji_tag");
        },
        filterTarget: lib.filter.notMe,
        selectCard: [1, event.num],
        prompt: "请选择要分配的卡牌和目标",
        ai1(card2) {
          if (!ui.selected.cards.length) {
            return 1;
          }
          return 0;
        },
        ai2(target3) {
          var player2 = _status.event.player, card2 = ui.selected.cards[0];
          var val = target3.getUseValue(card2);
          if (val > 0) {
            return val * get.attitude(player2, target3) * 2;
          }
          return get.value(card2, target3) * get.attitude(player2, target3);
        }
      });
      if (result.bool) {
        var res = result.cards, target2 = result.targets[0].playerid;
        player.addGaintag(res, "reyiji_tag");
        event.num -= res.length;
        if (!event.given_map[target2]) {
          event.given_map[target2] = [];
        }
        event.given_map[target2].addArray(res);
        if (event.num > 0) {
          event.goto(1);
        }
      } else if (event.num == 2) {
        if (_status.connectMode) {
          game.broadcastAll(function() {
            delete _status.noclearcountdown;
            game.stopCountChoose();
          });
        }
        event.finish();
      }
      if (_status.connectMode) {
        game.broadcastAll(function() {
          delete _status.noclearcountdown;
          game.stopCountChoose();
        });
      }
      var map = [], cards2 = [];
      for (var i in event.given_map) {
        var source2 = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
        player.line(source2, "green");
        if (player !== source2 && (get.mode() !== "identity" || player.identity !== "nei")) {
          player.addExpose(0.18);
        }
        map.push([source2, event.given_map[i]]);
        cards2.addArray(event.given_map[i]);
      }
      game.loseAsync({
        gain_list: map,
        player,
        cards: cards2,
        giver: player,
        animate: "giveAuto"
      }).setContent("gaincardMultiple");
    },
    ai: {
      maixie: true,
      maixie_hp: true,
      effect: {
        target(card2, player2, target2) {
          if (get.tag(card2, "damage")) {
            if (player2.hasSkillTag("jueqing", false, target2)) {
              return [1, -2];
            }
            if (!target2.hasFriend()) {
              return;
            }
            let num2 = 1;
            if (get.attitude(player2, target2) > 0) {
              if (player2.needsToDiscard()) {
                num2 = 0.7;
              } else {
                num2 = 0.5;
              }
            }
            if (target2.hp >= 4) {
              return [1, num2 * 2];
            }
            if (target2.hp == 3) {
              return [1, num2 * 1.5];
            }
            if (target2.hp == 2) {
              return [1, num2 * 0.5];
            }
          }
        }
      },
      threaten: 0.6
    }
  },
  new_rejianxiong: {
    audio: "rejianxiong",
    audioname: ["shen_caopi", "mb_caocao"],
    audioname2: { caoying: "lingren_jianxiong" },
    trigger: { player: "damageEnd" },
    content() {
      "step 0";
      if (get.itemtype(trigger.cards) == "cards" && get.position(trigger.cards[0], true) == "o") {
        player.gain(trigger.cards, "gain2");
      }
      player.draw("nodelay");
    },
    ai: {
      maixie: true,
      maixie_hp: true,
      effect: {
        target(card2, player2, target2) {
          if (player2.hasSkillTag("jueqing", false, target2)) {
            return [1, -1];
          }
          if (get.tag(card2, "damage") && player2 != target2) {
            var cards2 = card2.cards, evt = _status.event;
            if (evt.player == target2 && card2.name == "damage" && evt.getParent().type == "card") {
              cards2 = evt.getParent().cards.filterInD();
            }
            if (target2.hp <= 1) {
              return;
            }
            if (get.itemtype(cards2) != "cards") {
              return;
            }
            for (var i of cards2) {
              if (get.name(i, target2) == "tao") {
                return [1, 4.5];
              }
            }
            if (get.value(cards2, target2) >= 7 + target2.getDamagedHp()) {
              return [1, 2.5];
            }
            return [1, 0.6];
          }
        }
      }
    }
  },
  new_reluoyi: {
    audio: "reluoyi",
    trigger: {
      player: "phaseDrawBegin1"
    },
    forced: true,
    locked: false,
    filter(event2, player2) {
      return !event2.numFixed;
    },
    content() {
      "step 0";
      var cards2 = get.cards(3);
      game.cardsGotoOrdering(cards2);
      player.showCards(cards2, "裸衣");
      var cardsx = [];
      for (var i = 0; i < cards2.length; i++) {
        if (get.type(cards2[i]) == "basic" || cards2[i].name == "juedou" || get.type(cards2[i]) == "equip" && get.subtype(cards2[i]) == "equip1") {
          cardsx.push(cards2[i]);
        }
      }
      event.cards = cardsx;
      player.chooseBool("是否放弃摸牌" + (cardsx.length ? "，改为获得" + get.translation(cardsx) : "") + "？").ai = function() {
        return cardsx.length >= trigger.num;
      };
      if (result.bool) {
        if (cards2.length) {
          player.gain(cards2, "gain2");
        }
        player.addTempSkill("new_reluoyi_buff", { player: "phaseBefore" });
        trigger.changeToZero();
      }
    },
    subSkill: { buff: { inherit: "reluoyi2", sourceSkill: "new_reluoyi" } }
  },
  new_rewusheng: {
    mod: {
      targetInRange(card2) {
        if (get.suit(card2) == "diamond" && card2.name == "sha") {
          return true;
        }
      }
    },
    locked: false,
    audio: "wusheng",
    audioname: ["re_guanyu", "jsp_guanyu", "re_guanzhang", "dc_jsp_guanyu"],
    audioname2: {
      dc_guansuo: "wusheng_guansuo",
      guanzhang: "wusheng_guanzhang",
      guansuo: "wusheng_guansuo",
      gz_jun_liubei: "shouyue_wusheng",
      std_guanxing: "wusheng_guanzhang",
      ty_guanxing: "wusheng_guanzhang",
      ol_guanzhang: "wusheng_ol_guanzhang"
    },
    enable: ["chooseToRespond", "chooseToUse"],
    filterCard(card2, player2) {
      if (get.zhu(player2, "shouyue")) {
        return true;
      }
      return get.color(card2) == "red";
    },
    position: "hes",
    viewAs: {
      name: "sha"
    },
    viewAsFilter(player2) {
      if (get.zhu(player2, "shouyue")) {
        if (!player2.countCards("hes")) {
          return false;
        }
      } else {
        if (!player2.countCards("hes", { color: "red" })) {
          return false;
        }
      }
    },
    prompt: "将一张红色牌当杀使用或打出",
    check(card2) {
      var val = get.value(card2);
      if (_status.event.name == "chooseToRespond") {
        return 1 / Math.max(0.1, val);
      }
      return 5 - val;
    },
    ai: {
      respondSha: true,
      skillTagFilter(player2) {
        if (get.zhu(player2, "shouyue")) {
          if (!player2.countCards("hes")) {
            return false;
          }
        } else {
          if (!player2.countCards("hes", { color: "red" })) {
            return false;
          }
        }
      }
    }
  },
  wusheng_ol_guanzhang: { audio: 1 },
  new_yijue: {
    initSkill(skill) {
      if (!lib.skill[skill]) {
        lib.skill[skill] = {
          charlotte: true,
          onremove: true,
          mark: true,
          marktext: "绝",
          intro: {
            markcount: () => 0,
            content: (storage) => `本回合不能使用或打出手牌、非锁定技失效且受到${get.translation(storage[1])}红桃【杀】的伤害+1`
          },
          group: "new_yijue_ban"
        };
        lib.translate[skill] = "义绝";
        lib.translate[skill + "_bg"] = "绝";
      }
    },
    audio: "yijue",
    enable: "phaseUse",
    usable: 1,
    filterTarget(card2, player2, target2) {
      return player2 != target2 && target2.countCards("h");
    },
    filterCard: lib.filter.cardDiscardable,
    position: "he",
    check(card2) {
      return 8 - get.value(card2);
    },
    async content(event2, trigger2, player2) {
      const { target: target2 } = event2;
      if (!target2.countCards("h")) {
        return;
      }
      const result2 = await target2.chooseCard(true, "h").set("ai", (card2) => {
        get.player();
        if (get.color(card2) == "black") {
          return 18 - get.event().black - get.value(card2);
        }
        return 18 - get.value(card2);
      }).set(
        "black",
        (() => {
          if (get.attitude(target2, player2) > 0) {
            return 18;
          }
          if (target2.hasCard((card2) => {
            const name2 = get.name(card2, target2);
            return name2 === "shan" || name2 === "tao" || name2 === "jiu" && target2.hp < 3;
          })) {
            return 18 / target2.hp;
          }
          if (target2.hp < 3) {
            return 12 / target2.hp;
          }
          return 0;
        })()
      ).forResult();
      if (result2?.bool && result2?.cards?.length) {
        const { cards: cards2 } = result2;
        await target2.showCards(cards2);
        const [card2] = cards2;
        if (get.color(card2) == "black") {
          if (!target2.hasSkill("fengyin")) {
            target2.addTempSkill("fengyin");
          }
          const skill = "new_yijue_" + player2.playerid;
          game.broadcastAll(lib.skill.new_yijue.initSkill, skill);
          target2.addTempSkill(skill);
          target2.storage[skill] ??= [0, player2];
          target2.storage[skill][0]++;
          target2.markSkill(skill);
          player2.addTempSkill("new_yijue_effect");
        } else if (get.color(card2) == "red") {
          await player2.gain(card2, target2, "give", "bySelf");
          if (target2.isDamaged()) {
            const result3 = await player2.chooseBool(`是否让${get.translation(target2)}回复1点体力？`).set("choice", get.recoverEffect(target2, player2, player2) > 0).forResult();
            if (result3?.bool) {
              await target2.recover();
            }
          }
        }
      }
    },
    ai: {
      result: {
        target(player2, target2) {
          var hs = player2.getCards("h");
          if (hs.length < 3) {
            return 0;
          }
          if (target2.countCards("h") > target2.hp + 1 && get.recoverEffect(target2) > 0) {
            return 1;
          }
          if (player2.canUse("sha", target2) && (player2.countCards("h", "sha") || player2.countCards("he", { color: "red" }))) {
            return -2;
          }
          return -0.5;
        }
      },
      order: 9,
      directHit_ai: true,
      skillTagFilter(player2, tag, arg) {
        if (!arg?.target?.hasSkill("new_yijue_" + player2.playerid)) {
          return false;
        }
      }
    },
    subSkill: {
      effect: {
        charlotte: true,
        trigger: { source: "damageBegin1" },
        filter(event2, player2) {
          return event2.card?.name == "sha" && get.suit(event2.card) == "heart" && event2.notLink() && event2.player.storage["new_yijue_" + player2.playerid]?.[1] == player2;
        },
        forced: true,
        popup: false,
        async content(event2, trigger2, player2) {
          trigger2.num += trigger2.player.storage["new_yijue_" + player2.playerid][0];
        }
      },
      ban: {
        charlotte: true,
        mod: {
          cardEnabled2(card2) {
            if (get.position(card2) == "h") {
              return false;
            }
          }
        }
      }
    }
  },
  paoxiao_re_zhangfei: { audio: 2 },
  new_repaoxiao: {
    audio: "paoxiao",
    firstDo: true,
    audioname2: {
      old_guanzhang: "old_fuhun",
      xin_zhangfei: "paoxiao_re_zhangfei",
      old_zhangfei: "paoxiao_re_zhangfei"
    },
    audioname: ["re_zhangfei", "guanzhang", "xiahouba", "re_guanzhang"],
    trigger: { player: "useCard1" },
    forced: true,
    filter(event2, player2) {
      return event2.card.name == "sha" && (!event2.audioed || !player2.hasSkill("new_repaoxiao2"));
    },
    content() {
      trigger.audioed = true;
      player.addTempSkill("new_repaoxiao2");
    },
    mod: {
      cardUsable(card2, player2, num2) {
        if (card2.name == "sha") {
          return Infinity;
        }
      }
    },
    ai: {
      unequip: true,
      skillTagFilter(player2, tag, arg) {
        if (!get.zhu(player2, "shouyue")) {
          return false;
        }
        if (arg && arg.name == "sha") {
          return true;
        }
        return false;
      }
    }
  },
  new_repaoxiao2: {
    charlotte: true,
    mod: {
      targetInRange(card2, player2) {
        if (card2.name == "sha") {
          return true;
        }
      }
    }
  },
  new_tishen: {
    trigger: {
      player: "phaseUseEnd"
    },
    check(event2, player2) {
      var num2 = 0;
      var he = player2.getCards("he");
      for (var i = 0; i < he.length; i++) {
        if (get.type(he[i], "trick") == "trick") {
          num2++;
        }
        if (get.type(he[i]) == "equip") {
          var subtype = get.subtype(he[i]);
          if (subtype == "equip3" || subtype == "equip4" || subtype == "equip6") {
            num2++;
          }
        }
      }
      return num2 == 0 || num2 <= player2.countCards("h") - player2.getHandcardLimit();
    },
    content() {
      var list = [];
      var he = player.getCards("he");
      for (var i = 0; i < he.length; i++) {
        if (get.type(he[i], "trick") == "trick") {
          list.push(he[i]);
        }
        if (get.type(he[i]) == "equip") {
          var subtype = get.subtype(he[i]);
          if (subtype == "equip3" || subtype == "equip4" || subtype == "equip6") {
            list.push(he[i]);
          }
        }
      }
      if (list.length) {
        player.discard(list);
      }
      player.addTempSkill("new_tishen2", { player: "phaseBefore" });
    },
    audio: "retishen"
  },
  new_tishen2: {
    audio: "retishen",
    trigger: {
      global: "useCardAfter"
    },
    filter(event2, player2) {
      return event2.card.name == "sha" && event2.targets && event2.targets.includes(player2) && !player2.hasHistory("damage", (evt) => evt.card == event2.card) && event2.cards.filterInD("od").length;
    },
    forced: true,
    charlotte: true,
    sourceSkill: "new_tishen",
    content() {
      player.gain(trigger.cards.filterInD("od"), "gain2");
    }
  },
  new_qingjian: {
    audio: "qingjian",
    trigger: {
      player: "gainAfter",
      global: "loseAsyncAfter"
    },
    usable: 1,
    filter(event2, player2) {
      const evt = event2.getParent("phaseDraw");
      if (evt?.player == player2) {
        return false;
      }
      return event2.getg(player2).length > 0;
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseCardTarget({
        position: "he",
        filterCard: true,
        selectCard: [1, Infinity],
        filterTarget: lib.filter.notMe,
        ai1(card2) {
          const player3 = get.player();
          if (card2.name != "du" && get.attitude(player3, _status.currentPhase) < 0 && _status.currentPhase?.needsToDiscard()) {
            return -1;
          }
          for (var i = 0; i < ui.selected.cards.length; i++) {
            if (get.type(ui.selected.cards[i]) == get.type(card2) || ui.selected.cards[i].name == "du" && card2.name != "du") {
              return -1;
            }
          }
          if (card2.name == "du") {
            return 20;
          }
          return player3.countCards("h") - player3.hp;
        },
        allowChooseAll: true,
        ai2(target2) {
          const player3 = get.player();
          if (get.attitude(player3, _status.currentPhase) < 0) {
            return -1;
          }
          const att = get.attitude(player3, target2);
          if (ui.selected.cards.length && ui.selected.cards[0].name == "du") {
            if (target2.hasSkillTag("nodu")) {
              return 0;
            }
            return 1 - att;
          }
          if (target2.countCards("h") > player3.countCards("h")) {
            return 0;
          }
          return att - 4;
        },
        prompt: get.prompt2(event2.name.slice(0, -5))
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const {
        targets: [target2],
        cards: cards2
      } = event2;
      await player2.showCards(cards2);
      await player2.give(cards2, target2);
      const current = _status.currentPhase;
      if (current?.isIn()) {
        current.addTempSkill("qingjian_add");
        current.addMark("qingjian_add", cards2.map((card2) => get.type2(card2)).toUniqued().length, false);
      }
    },
    ai: { expose: 0.3 }
  },
  qingjian_add: {
    mark: true,
    intro: { content: "手牌上限+#" },
    mod: {
      maxHandcard(player2, num2) {
        return num2 + player2.countMark("qingjian_add");
      }
    },
    charlotte: true,
    onremove: true
  },
  new_reqingnang: {
    subSkill: {
      off: {
        sub: true
      }
    },
    audio: 2,
    enable: "phaseUse",
    filterCard: true,
    check(card2) {
      var player2 = _status.event.player;
      if (game.countPlayer(function(current) {
        return get.recoverEffect(current, player2, player2) > 0 && get.attitude(player2, current) > 2;
      }) > 1 && get.color(card2) == "black" && player2.countCards("h", { color: "red" }) > 0) {
        return 3 - get.value(card2);
      }
      return 9 - get.value(card2);
    },
    filterTarget(card2, player2, target2) {
      if (target2.hp >= target2.maxHp || target2.hasSkill("new_reqingnang_off")) {
        return false;
      }
      return true;
    },
    content() {
      target.addTempSkill("new_reqingnang_off");
      if (get.color(cards[0]) == "black") {
        player.tempBanSkill("new_reqingnang");
      }
      target.recover();
    },
    ai: {
      order: 9,
      result: {
        target(player2, target2) {
          if (target2.hp == 1) {
            return 5;
          }
          if (player2 == target2 && player2.countCards("h") > player2.hp) {
            return 5;
          }
          return 2;
        }
      },
      threaten: 2
    }
  },
  reyaowu: {
    trigger: { player: "damageBegin3" },
    audio: "new_reyaowu",
    forced: true,
    filter(event2) {
      return event2.card && (get.color(event2.card) != "red" || event2.source && event2.source.isIn());
    },
    async content(event2, trigger2, player2) {
      if (get.color(trigger2.card) == "red") {
        await trigger2.source.draw();
      } else {
        await trigger2.player.draw();
      }
    },
    ai: {
      effect: {
        target: (card2, player2, target2) => {
          if (typeof card2 !== "object" || !get.tag(card2, "damage")) {
            return;
          }
          if (player2.hasSkillTag("jueqing", false, target2)) {
            return;
          }
          if (get.color(card2) === "red") {
            return [1, 0, 1, 0.6];
          }
          return [1, 0.6];
        }
      }
    }
  },
  new_reyaowu: {
    trigger: {
      player: "damageBegin3"
    },
    //priority:1,
    audio: 2,
    audioname: ["sb_huaxiong", "ol_huaxiong"],
    filter(event2) {
      return event2.card && event2.card.name == "sha" && (get.color(event2.card) != "red" || event2.source && event2.source.isIn());
    },
    forced: true,
    content() {
      if (get.color(trigger.card) != "red") {
        player.draw();
      } else {
        trigger.source.chooseDrawRecover(true);
      }
    },
    ai: {
      effect: {
        target: (card2, player2, target2, current) => {
          if (card2.name == "sha") {
            if (get.color(card2) == "red") {
              let num2 = player2.isDamaged() ? 1.6 : 0.7;
              if (get.attitude(player2, target2) > 0 && player2.hp < 3) {
                return [1, 0, 1, num2];
              }
              return [1, 0, 1, num2 / 2];
            }
            return [1, 0.6];
          }
        }
      }
    }
  },
  reguanxing: {
    audio: "guanxing",
    audioname: ["jiangwei", "re_jiangwei", "re_zhugeliang", "ol_jiangwei"],
    audioname2: { gexuan: "guanxing_gexuan" },
    trigger: { player: ["phaseZhunbeiBegin", "phaseJieshuBegin"] },
    frequent: true,
    filter(event2, player2, name2) {
      if (name2 == "phaseJieshuBegin") {
        return player2.hasSkill("reguanxing_on");
      }
      return true;
    },
    async content(event2, trigger2, player2) {
      const result2 = await player2.chooseToGuanxing(game.countPlayer() < 4 ? 3 : 5).set("prompt", "观星：点击或拖动将牌移动到牌堆顶或牌堆底").forResult();
      if ((!result2.bool || !result2.moved[0].length) && event2.triggername == "phaseZhunbeiBegin") {
        player2.addTempSkill(["reguanxing_on", "guanxing_fail"]);
      }
    },
    subSkill: {
      on: { charlotte: true }
    },
    ai: {
      guanxing: true
    }
  },
  reluoshen: {
    audio: 2,
    locked: false,
    trigger: { player: "phaseZhunbeiBegin" },
    frequent: true,
    content() {
      "step 0";
      player.addTempSkill("reluoshen_add");
      event.cards = [];
      var next = player.judge(function(card2) {
        if (get.color(card2) == "black") {
          return 1.5;
        }
        return -1.5;
      });
      next.judge2 = function(result2) {
        return result2.bool;
      };
      if (get.mode() != "guozhan" && !player.hasSkillTag("rejudge")) {
        next.set("callback", function() {
          if (event.judgeResult.color == "black" && get.position(card, true) == "o") {
            player.gain(card, "gain2").gaintag.add("reluoshen");
          }
        });
      } else {
        next.set("callback", function() {
          if (event.judgeResult.color == "black") {
            event.getParent().orderingCards.remove(card);
          }
        });
      }
      if (result.bool) {
        event.cards.push(result.card);
        player.chooseBool("是否再次发动【洛神】？").set("frequentSkill", "reluoshen");
      } else {
        for (var i = 0; i < event.cards.length; i++) {
          if (get.position(event.cards[i], true) != "o") {
            event.cards.splice(i, 1);
            i--;
          }
        }
        if (event.cards.length) {
          player.gain(event.cards, "gain2").gaintag.add("reluoshen");
        }
        event.finish();
      }
      if (result.bool) {
        event.goto(1);
      } else {
        for (var i = 0; i < event.cards.length; i++) {
          if (get.position(event.cards[i], true) != "o") {
            event.cards.splice(i, 1);
            i--;
          }
        }
        if (event.cards.length) {
          player.gain(event.cards, "gain2").gaintag.add("reluoshen");
        }
      }
    },
    subSkill: {
      add: {
        mod: {
          ignoredHandcard(card2, player2) {
            if (card2.hasGaintag("reluoshen")) {
              return true;
            }
          },
          cardDiscardable(card2, player2, name2) {
            if (name2 == "phaseDiscard" && card2.hasGaintag("reluoshen")) {
              return false;
            }
          }
        },
        onremove(player2) {
          player2.removeGaintag("reluoshen");
        }
      }
    }
  },
  rejieyin: {
    audio: 2,
    enable: "phaseUse",
    filterCard: true,
    usable: 1,
    position: "he",
    filter(event2, player2) {
      return player2.countCards("he") > 0;
    },
    check(card2) {
      var player2 = _status.event.player;
      if (get.position(card2) == "e") {
        var subtype = get.subtype(card2);
        if (!game.hasPlayer(function(current) {
          return current != player2 && get.attitude(player2, current) > 0 && !current.countCards("e", { subtype });
        })) {
          return 0;
        }
        if (player2.countCards("h", { subtype })) {
          return 20 - get.value(card2);
        }
        return 10 - get.value(card2);
      } else {
        if (player2.countCards("e")) {
          return 0;
        }
        if (player2.countCards("h", { type: "equip" })) {
          return 0;
        }
        return 8 - get.value(card2);
      }
    },
    filterTarget(card2, player2, target2) {
      if (!target2.hasSex("male")) {
        return false;
      }
      var card2 = ui.selected.cards[0];
      if (!card2) {
        return false;
      }
      if (get.position(card2) == "e" && !target2.canEquip(card2)) {
        return false;
      }
      return true;
    },
    discard: false,
    delay: false,
    lose: false,
    content() {
      "step 0";
      if (get.position(cards[0]) == "e") {
        event._result = { index: 0 };
      } else if (get.type(cards[0]) != "equip" || !target.canEquip(cards[0])) {
        event._result = { index: 1 };
      } else {
        player.chooseControl().set("choiceList", ["将" + get.translation(cards[0]) + "置入" + get.translation(target) + "的装备区", "弃置" + get.translation(cards[0])]).ai = function() {
          return 1;
        };
      }
      if (result.index == 0) {
        player.$give(cards, target, false);
        target.equip(cards[0]);
      } else {
        player.discard(cards);
      }
      if (player.hp > target.hp) {
        player.draw();
        if (target.isDamaged()) {
          target.recover();
        }
      } else if (player.hp < target.hp) {
        target.draw();
        if (player.isDamaged()) {
          player.recover();
        }
      }
    },
    ai: {
      order() {
        var player2 = _status.event.player;
        var es = player2.getCards("e");
        for (var i = 0; i < es.length; i++) {
          if (player2.countCards("h", { subtype: get.subtype(es[i]) })) {
            return 10;
          }
        }
        return 2;
      },
      result: {
        player(player2, target2) {
          if (!ui.selected.cards.length) {
            return 0;
          }
          let card2 = ui.selected.cards[0], val = -get.value(card2, player2) / 6;
          if (get.position(card2) == "e") {
            val += 2;
          }
          if (player2.hp > target2.hp) {
            val++;
          } else if (player2.hp < target2.hp && player2.isDamaged()) {
            val += get.recoverEffect(player2, player2, player2) / get.attitude(player2, player2);
          }
          return val;
        },
        target(player2, target2) {
          if (!ui.selected.cards.length) {
            return 0;
          }
          let card2 = ui.selected.cards[0], val = get.position(card2) == "e" ? get.value(card2, target2) / 6 : 0;
          if (target2.hp > player2.hp) {
            val++;
          } else if (target2.hp < player2.hp && target2.isDamaged()) {
            val += get.recoverEffect(target2, target2, target2) / get.attitude(target2, target2);
          }
          return val;
        }
      }
    }
  },
  rejiuyuan: {
    audio: 2,
    zhuSkill: true,
    trigger: { global: "recoverBefore" },
    direct: true,
    filter(event2, player2) {
      return player2 != event2.player && event2.player.group == "wu" && player2.hp <= event2.player.hp && event2.getParent().name != "rejiuyuan" && player2.hasZhuSkill("rejiuyuan", event2.player) && event2.player === _status.currentPhase;
    },
    content() {
      "step 0";
      trigger.player.chooseBool("是否对" + get.translation(player) + "发动【救援】？", "改为令其回复1点体力，然后你摸一张牌").set("ai", function() {
        var evt = _status.event;
        return get.attitude(evt.player, evt.getParent().player) > 0;
      });
      if (result.bool) {
        player.logSkill("rejiuyuan");
        trigger.player.line(player, "green");
        trigger.cancel();
        player.recover(trigger.player);
        trigger.player.draw();
      }
    }
  },
  rezhiheng: {
    audio: 2,
    audioname2: { shen_caopi: "rezhiheng_shen_caopi", new_simayi: "rezhiheng_new_simayi" },
    mod: {
      aiOrder(player2, card2, num2) {
        if (num2 <= 0 || get.itemtype(card2) !== "card" || get.type(card2) !== "equip") {
          return num2;
        }
        let eq = player2.getEquip(get.subtype(card2));
        if (eq && get.equipValue(card2) - get.equipValue(eq) < Math.max(1.2, 6 - player2.hp)) {
          return 0;
        }
      }
    },
    locked: false,
    enable: "phaseUse",
    usable: 1,
    position: "he",
    filterCard: lib.filter.cardDiscardable,
    discard: false,
    lose: false,
    delay: false,
    selectCard: [1, Infinity],
    allowChooseAll: true,
    check(card2) {
      let player2 = _status.event.player;
      if (get.position(card2) == "h" && !player2.countCards("h", "du") && (player2.hp > 2 || !player2.countCards("h", (i) => {
        return get.value(i) >= 8;
      }))) {
        return 1;
      }
      if (get.position(card2) == "e") {
        let subs = get.subtypes(card2);
        if (subs.includes("equip2") || subs.includes("equip3")) {
          return player2.getHp() - get.value(card2);
        }
      }
      return 6 - get.value(card2);
    },
    content() {
      "step 0";
      player.discard(cards);
      event.num = 1;
      var hs = player.getCards("h");
      if (!hs.length) {
        event.num = 0;
      }
      for (var i = 0; i < hs.length; i++) {
        if (!cards.includes(hs[i])) {
          event.num = 0;
          break;
        }
      }
      player.draw(event.num + cards.length);
    },
    //group:'rezhiheng_draw',
    subSkill: {
      draw: {
        trigger: { player: "loseEnd" },
        silent: true,
        filter(event2, player2) {
          if (event2.getParent(2).skill != "rezhiheng" && event2.getParent(2).skill != "jilue_zhiheng") {
            return false;
          }
          if (player2.countCards("h")) {
            return false;
          }
          for (var i = 0; i < event2.cards.length; i++) {
            if (event2.cards[i].original == "h") {
              return true;
            }
          }
          return false;
        },
        content() {
          player.addTempSkill("rezhiheng_delay", trigger.getParent(2).skill + "After");
        }
      },
      delay: {}
    },
    ai: {
      order(item, player2) {
        if (player2.hasCard((i) => get.value(i) > Math.max(6, 9 - player2.hp), "he")) {
          return 1;
        }
        return 10;
      },
      result: {
        player: 1
      },
      nokeep: true,
      skillTagFilter(player2, tag, arg) {
        if (tag === "nokeep") {
          return (!arg || arg && arg.card && get.name(arg.card) === "tao") && player2.isPhaseUsing() && !player2.getStat().skill.rezhiheng && player2.hasCard((card2) => get.name(card2) !== "tao", "h");
        }
      },
      threaten: 1.55
    }
  },
  rezhiheng_new_simayi: { audio: 1 },
  reqicai: {
    audio: 2,
    mod: {
      targetInRange(card2, player2, target2, now) {
        var type = get.type(card2);
        if (type == "trick" || type == "delay") {
          return true;
        }
      },
      canBeDiscarded(card2, player2, target2) {
        if (get.position(card2) == "e" && get.subtypes(card2).some((subtype) => ["equip2", "equip5"].includes(subtype)) && player2 != target2) {
          return false;
        }
      }
    }
  },
  rejizhi: {
    audio: 2,
    audioname2: {
      lukang: "rejizhi_lukang",
      zj_lukang: "rejizhi_lukang",
      new_simayi: "rejizhi_new_simayi"
    },
    locked: false,
    trigger: { player: "useCard" },
    frequent: true,
    filter(event2) {
      return get.type(event2.card, "trick") == "trick" && event2.card.isCard;
    },
    init(player2) {
      player2.storage.rejizhi = 0;
    },
    async content(event2, trigger2, player2) {
      const result2 = await player2.draw("nodelay").forResult();
      event2.card = result2.cards[0];
      if (get.type(event2.card) !== "basic") {
        return;
      }
      const result22 = await player2.chooseBool(`是否弃置${get.translation(event2.card)}并令本回合手牌上限+1？`).set("ai", (evt, player3) => _status.currentPhase === player3 && player3.needsToDiscard(-3) && _status.event.value < 6).set("value", get.value(event2.card, player2)).forResult();
      if (result22.bool) {
        await player2.discard(event2.card);
        player2.storage.rejizhi++;
        if (_status.currentPhase === player2) {
          player2.markSkill("rejizhi");
        }
      }
    },
    ai: {
      threaten: 1.4,
      noautowuxie: true
    },
    mod: {
      maxHandcard(player2, num2) {
        return num2 + player2.storage.rejizhi;
      }
    },
    intro: {
      content: "本回合手牌上限+#"
    },
    group: "rejizhi_clear",
    subSkill: {
      clear: {
        trigger: { global: "phaseAfter" },
        silent: true,
        content() {
          player.storage.rejizhi = 0;
          player.unmarkSkill("rejizhi");
        }
      }
    }
  },
  rejizhi_new_simayi: { audio: 1 },
  rebiyue: {
    audio: 2,
    audioname2: { sp_diaochan: "biyue" },
    trigger: { player: "phaseJieshuBegin" },
    frequent: true,
    content() {
      player.draw(player.countCards("h") ? 1 : 2);
    }
  },
  rerende: {
    audio: 2,
    audioname: ["gz_jun_liubei"],
    audioname2: { shen_caopi: "rerende_shen_caopi" },
    enable: "phaseUse",
    filter(event2, player2) {
      return player2.countCards("h") && game.hasPlayer((current) => get.info("rerende").filterTarget(null, player2, current));
    },
    filterTarget(card2, player2, target2) {
      if (player2 == target2) {
        return false;
      }
      return !player2.getStorage("rerende_targeted").includes(target2);
    },
    filterCard: true,
    selectCard: [1, Infinity],
    allowChooseAll: true,
    discard: false,
    lose: false,
    delay: false,
    check(card2) {
      if (ui.selected.cards.length && ui.selected.cards[0].name == "du") {
        return 0;
      }
      if (!ui.selected.cards.length && card2.name == "du") {
        return 20;
      }
      var player2 = get.owner(card2);
      if (ui.selected.cards.length >= Math.max(2, player2.countCards("h") - player2.hp)) {
        return 0;
      }
      if (player2.hp == player2.maxHp || player2.countMark("rerende") < 0 || player2.countCards("h") <= 1) {
        var players = game.filterPlayer();
        for (var i = 0; i < players.length; i++) {
          if (players[i].hasSkill("haoshi") && !players[i].isTurnedOver() && !players[i].hasJudge("lebu") && get.attitude(player2, players[i]) >= 3 && get.attitude(players[i], player2) >= 3) {
            return 11 - get.value(card2);
          }
        }
        if (player2.countCards("h") > player2.hp) {
          return 10 - get.value(card2);
        }
        if (player2.countCards("h") > 2) {
          return 6 - get.value(card2);
        }
        return -1;
      }
      return 10 - get.value(card2);
    },
    async content(event2, trigger2, player2) {
      const { target: target2, cards: cards2, name: name2 } = event2;
      player2.addTempSkill(name2 + "_targeted", "phaseUseAfter");
      player2.markAuto(name2 + "_targeted", [target2]);
      let num2 = 0;
      player2.getHistory("lose", (evt) => {
        if (evt.getParent(2).name == name2 && evt.getParent("phaseUse") == event2.getParent(3)) {
          num2 += evt.cards.length;
        }
      });
      if (!player2.storage[event2.name]) {
        player2.when({ player: "phaseUseEnd" }).step(async () => {
          player2.clearMark(event2.name, false);
        });
      }
      player2.addMark(event2.name, num2 + cards2.length, false);
      await player2.give(cards2, target2);
      const list = get.inpileVCardList((info) => {
        return info[0] == "basic" && player2.hasUseTarget(new lib.element.VCard({ name: info[2], nature: info[3], isCard: true }), null, true);
      });
      if (num2 < 2 && num2 + cards2.length > 1 && list.length) {
        const result2 = await player2.chooseButton(["是否视为使用一张基本牌？", [list, "vcard"]]).set("ai", (button) => {
          return get.player().getUseValue({ name: button.link[2], nature: button.link[3], isCard: true });
        }).forResult();
        if (!result2?.links?.length) {
          return;
        }
        await player2.chooseUseTarget(get.autoViewAs({ name: result2.links[0][2], nature: result2.links[0][3], isCard: true }), true);
      }
    },
    ai: {
      fireAttack: true,
      order(skill, player2) {
        if (player2.hp < player2.maxHp && player2.countMark("rerende") < 2 && player2.countCards("h") > 1) {
          return 10;
        }
        return 4;
      },
      result: {
        target(player2, target2) {
          if (target2.hasSkillTag("nogain")) {
            return 0;
          }
          if (ui.selected.cards.length && ui.selected.cards[0].name == "du") {
            if (target2.hasSkillTag("nodu")) {
              return 0;
            }
            return -10;
          }
          if (target2.hasJudge("lebu")) {
            return 0;
          }
          var nh = target2.countCards("h");
          var np = player2.countCards("h");
          if (player2.hp == player2.maxHp || player2.countMark("rerende") < 0 || player2.countCards("h") <= 1) {
            if (nh >= np - 1 && np <= player2.hp && !target2.hasSkill("haoshi")) {
              return 0;
            }
          }
          return Math.max(1, 5 - nh);
        }
      },
      effect: {
        target_use(card2, player2, target2) {
          if (player2 == target2 && get.type(card2) == "equip") {
            if (player2.countCards("e", { subtype: get.subtype(card2) })) {
              if (game.hasPlayer((current) => current != player2 && get.attitude(player2, current) > 0)) {
                return 0;
              }
            }
          }
        }
      },
      threaten: 0.8
    },
    marktext: "仁",
    onremove: true,
    intro: {
      content: "本阶段已仁德牌数：#",
      onunmark: true
    },
    subSkill: {
      targeted: {
        onremove: true,
        charlotte: true
      }
    }
  },
  liyu: {
    audio: 2,
    trigger: { source: "damageSource" },
    forced: true,
    filter(event2, player2) {
      if (event2._notrigger.includes(event2.player)) {
        return false;
      }
      return event2.card && event2.card.name == "sha" && event2.player.isIn() && event2.player.countGainableCards(player2, "he") > 0;
    },
    check() {
      return false;
    },
    content() {
      "step 0";
      trigger.player.chooseTarget(function(card2, player2, target2) {
        var evt = _status.event.getParent();
        return evt.player.canUse({ name: "juedou" }, target2) && target2 != _status.event.player;
      }, get.prompt("liyu")).set("ai", function(target2) {
        var evt = _status.event.getParent();
        return get.effect(target2, { name: "juedou" }, evt.player, _status.event.player) - 2;
      });
      if (result.bool) {
        player.gainPlayerCard(trigger.player, "he", true);
        event.target = result.targets[0];
        trigger.player.line(player, "green");
      } else {
        event.finish();
      }
      if (event.target) {
        player.useCard({ name: "juedou", isCard: true }, event.target, "noai");
      }
    },
    ai: {
      halfneg: true
    }
  },
  /*reqicai:{
  	trigger:{player:'equipEnd'},
  	frequent:true,
  	content:function(){
  		player.draw();
  	},
  	mod:{
  		targetInRange:function(card,player,target,now){
  			var type=get.type(card);
  			if(type=='trick'||type=='delay') return true;
  		}
  	},
  },*/
  retuxi: {
    audio: 2,
    trigger: { player: "phaseDrawBegin2" },
    direct: true,
    filter(event2) {
      return event2.num > 0;
    },
    content() {
      "step 0";
      player.chooseTarget(
        get.prompt("retuxi"),
        [1, trigger.num],
        function(card2, player2, target2) {
          return target2.countCards("h") > 0 && player2 != target2 && target2.countCards("h") >= player2.countCards("h");
        },
        function(target2) {
          var att = get.attitude(_status.event.player, target2);
          if (target2.hasSkill("tuntian")) {
            return att / 10;
          }
          return 1 - att;
        }
      );
      if (result.bool) {
        player.logSkill("retuxi", result.targets);
        player.gainMultiple(result.targets);
        trigger.num -= result.targets.length;
      } else {
        event.finish();
      }
      if (trigger.num <= 0) {
        game.delay();
      }
    },
    ai: {
      threaten: 1.6,
      expose: 0.2
    }
  },
  reguicai: {
    audio: 2,
    audioname: ["new_simayi"],
    trigger: { global: "judge" },
    filter(event2, player2) {
      return player2.countCards("hes") > 0;
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseCard(`${get.translation(trigger2.player)}的${trigger2.judgestr || ""}判定为${get.translation(trigger2.player.judging[0])}，${get.prompt(event2.skill)}`, "hes", (card2) => {
        const player3 = get.player();
        const mod2 = game.checkMod(card2, player3, "unchanged", "cardEnabled2", player3);
        if (mod2 != "unchanged") {
          return mod2;
        }
        const mod = game.checkMod(card2, player3, "unchanged", "cardRespondable", player3);
        if (mod != "unchanged") {
          return mod;
        }
        return true;
      }).set("ai", (card2) => {
        const trigger3 = get.event().getTrigger();
        const { player: player3, judging } = get.event();
        const result2 = trigger3.judge(card2) - trigger3.judge(judging);
        const attitude = get.attitude(player3, trigger3.player);
        let val = get.value(card2);
        if (get.subtype(card2) == "equip2") {
          val /= 2;
        } else {
          val /= 4;
        }
        if (attitude == 0 || result2 == 0) {
          return 0;
        }
        if (attitude > 0) {
          return result2 - val;
        }
        return -result2 - val;
      }).set("judging", trigger2.player.judging[0]).setHiddenSkill(event2.skill).forResult();
    },
    preHidden: true,
    popup: false,
    async content(event2, trigger2, player2) {
      const next = player2.respond(event2.cards, event2.name, "highlight", "noOrdering");
      await next;
      const { cards: cards2 } = next;
      if (cards2?.length) {
        if (trigger2.player.judging[0].clone) {
          trigger2.player.judging[0].clone.classList.remove("thrownhighlight");
          game.broadcast(function(card2) {
            if (card2.clone) {
              card2.clone.classList.remove("thrownhighlight");
            }
          }, trigger2.player.judging[0]);
          game.addVideo("deletenode", player2, get.cardsInfo([trigger2.player.judging[0].clone]));
        }
        await game.cardsDiscard(trigger2.player.judging[0]);
        trigger2.player.judging[0] = cards2[0];
        trigger2.orderingCards.addArray(cards2);
        game.log(trigger2.player, "的判定牌改为", cards2);
        await game.delay(2);
      }
    },
    ai: {
      rejudge: true,
      tag: { rejudge: 1 }
    }
  },
  refankui: {
    audio: 2,
    audioname2: { boss_chujiangwang: "boss_chujiangwang_fankui" },
    trigger: { player: "damageEnd" },
    filter(event2, player2) {
      return event2.source && event2.source.countGainableCards(player2, event2.source != player2 ? "he" : "e") && event2.num > 0;
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.choosePlayerCard(get.prompt(event2.skill, trigger2.source), trigger2.source, trigger2.source != player2 ? "he" : "e").set("ai", (button) => {
        let val = get.buttonValue(button);
        if (get.event().att > 0) {
          return 1 - val;
        }
        return val;
      }).set("att", get.attitude(player2, trigger2.source)).forResult();
    },
    logTarget: "source",
    getIndex(event2, player2) {
      return event2.num;
    },
    async content(event2, trigger2, player2) {
      await player2.gain(event2.cards, trigger2.source, "giveAuto", "bySelf");
    },
    ai: {
      maixie_defend: true,
      effect: {
        target(card2, player2, target2) {
          if (player2.countCards("he") > 1 && get.tag(card2, "damage")) {
            if (player2.hasSkillTag("jueqing", false, target2)) {
              return [1, -1.5];
            }
            if (get.attitude(target2, player2) < 0) {
              return [1, 1];
            }
          }
        }
      }
    }
  },
  reluoyi: {
    audio: 2,
    trigger: { player: "phaseDrawBegin1" },
    filter(event2, player2) {
      return !event2.numFixed;
    },
    check(event2, player2) {
      if (player2.countCards("h", "sha")) {
        return true;
      }
      return Math.random() < 0.5;
    },
    content() {
      "step 0";
      player.addTempSkill("reluoyi2", { player: "phaseBefore" });
      trigger.changeToZero();
      event.cards = get.cards(3);
      player.showCards(event.cards, "裸衣");
      for (var i = 0; i < cards.length; i++) {
        if (get.type(cards[i]) != "basic" && cards[i].name != "juedou" && (get.type(cards[i]) != "equip" || get.subtype(cards[i]) != "equip1")) {
          cards[i].discard();
          cards.splice(i--, 1);
        }
      }
      player.gain(cards, "gain2");
    }
  },
  reluoyi2: {
    trigger: { source: "damageBegin1" },
    sourceSkill: "reluoyi",
    filter(event2) {
      return event2.card && (event2.card.name == "sha" || event2.card.name == "juedou") && event2.notLink();
    },
    forced: true,
    charlotte: true,
    content() {
      trigger.num++;
    },
    ai: {
      damageBonus: true,
      skillTagFilter(player2, tag, arg) {
        if (tag === "damageBonus") {
          return arg && arg.card && (arg.card.name === "sha" || arg.card.name === "juedou");
        }
      }
    }
  },
  reganglie: {
    audio: 2,
    trigger: { player: "damageEnd" },
    getIndex(event2, player2, triggername) {
      if (get.mode() == "guozhan") {
        return 1;
      }
      return event2.num;
    },
    filter(event2) {
      return event2.source?.isIn() && event2.num > 0;
    },
    check(event2, player2) {
      return get.attitude(player2, event2.source) <= 0;
    },
    logTarget: "source",
    preHidden: true,
    async content(event2, trigger2, player2) {
      const { source: source2 } = trigger2;
      const result2 = await player2.judge((card2) => {
        if (get.color(card2) == "red") {
          return 1;
        }
        return 0;
      }).forResult();
      switch (result2?.color) {
        case "black":
          if (source2.countDiscardableCards(player2, "he")) {
            await player2.discardPlayerCard(source2, "he", true);
          }
          break;
        case "red":
          if (source2.isIn()) {
            await source2.damage();
          }
          break;
      }
    },
    ai: {
      maixie_defend: true,
      expose: 0.4
    }
  },
  qinxue: {
    skillAnimation: true,
    animationColor: "wood",
    audio: 2,
    juexingji: true,
    derivation: "gongxin",
    trigger: { player: ["phaseZhunbeiBegin", "phaseJieshuBegin"] },
    forced: true,
    filter(event2, player2) {
      if (player2.countCards("h") >= player2.hp + 2) {
        return true;
      }
      return false;
    },
    content() {
      player.awakenSkill(event.name);
      player.loseMaxHp();
      player.chooseDrawRecover(2, true);
      player.addSkills("gongxin");
    }
  },
  qingjian: {
    audio: 2,
    trigger: { player: "gainAfter" },
    direct: true,
    usable: 4,
    filter(event2, player2) {
      var evt = event2.getParent("phaseDraw");
      if (evt && evt.player == player2) {
        return false;
      }
      return event2.getg(player2).length > 0;
    },
    content() {
      "step 0";
      event.cards = trigger.getg(player);
      player.chooseCardTarget({
        filterCard(card2) {
          return _status.event.getParent().cards.includes(card2);
        },
        selectCard: [1, event.cards.length],
        filterTarget(card2, player2, target2) {
          return player2 != target2;
        },
        allowChooseAll: true,
        ai1(card2) {
          if (ui.selected.cards.length > 0) {
            return -1;
          }
          if (card2.name == "du") {
            return 20;
          }
          return _status.event.player.countCards("h") - _status.event.player.hp;
        },
        ai2(target2) {
          var att = get.attitude(_status.event.player, target2);
          if (ui.selected.cards.length && ui.selected.cards[0].name == "du") {
            if (target2.hasSkillTag("nodu")) {
              return 0;
            }
            return 1 - att;
          }
          if (target2.countCards("h") > _status.event.player.countCards("h")) {
            return 0;
          }
          return att - 4;
        },
        prompt: "请选择要送人的卡牌"
      });
      if (result.bool) {
        player.storage.qingjian++;
        player.logSkill("qingjian", result.targets);
        result.targets[0].gain(result.cards, player, "give");
        for (var i = 0; i < result.cards.length; i++) {
          event.cards.remove(result.cards[i]);
        }
        if (event.cards.length) {
          event.goto(1);
        }
      } else {
        player.storage.counttrigger.qingjian--;
      }
    },
    ai: {
      expose: 0.3
    }
  },
  reyingzi: {
    audio: 2,
    audioname: ["sunce", "re_sunben", "re_sunce"],
    audioname2: {
      gexuan: "reyingzi_gexuan",
      re_sunyi: "reyingzi_re_sunyi",
      heqi: "reyingzi_heqi",
      re_heqi: "reyingzi_heqi",
      boss_sunce: "reyingzi_sunce"
    },
    trigger: { player: "phaseDrawBegin2" },
    forced: true,
    preHidden: true,
    filter(event2, player2) {
      return !event2.numFixed;
    },
    content() {
      trigger.num++;
    },
    ai: {
      threaten: 1.5
    },
    mod: {
      maxHandcardBase(player2, num2) {
        return player2.maxHp;
      }
    }
  },
  refanjian: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return player2.countCards("h") > 0;
    },
    filterTarget(card2, player2, target2) {
      return player2 != target2;
    },
    filterCard: true,
    check(card2) {
      return 8 - get.value(card2);
    },
    discard: false,
    lose: false,
    delay: false,
    content() {
      "step 0";
      target.storage.refanjian = cards[0];
      player.give(cards[0], target);
      var suit = get.suit(target.storage.refanjian);
      if (!target.countCards("h")) {
        event._result = { control: "refanjian_hp" };
      } else {
        target.chooseControl("refanjian_card", "refanjian_hp").ai = function(event2, player2) {
          var cards2 = player2.getCards("he", { suit: get.suit(player2.storage.refanjian) });
          if (cards2.length == 1) {
            return 0;
          }
          if (cards2.length >= 2) {
            for (var i = 0; i < cards2.length; i++) {
              if (get.tag(cards2[i], "save")) {
                return 1;
              }
            }
          }
          if (player2.hp == 1) {
            return 0;
          }
          for (var i = 0; i < cards2.length; i++) {
            if (get.value(cards2[i]) >= 8) {
              return 1;
            }
          }
          if (cards2.length > 2 && player2.hp > 2) {
            return 1;
          }
          if (cards2.length > 3) {
            return 1;
          }
          return 0;
        };
      }
      if (result.control == "refanjian_card") {
        target.showHandcards();
      } else {
        target.loseHp();
        event.finish();
      }
      var suit = get.suit(target.storage.refanjian);
      target.discard(
        target.getCards("he", function(i) {
          return get.suit(i) == suit && lib.filter.cardDiscardable(i, target, "refanjian");
        })
      );
      delete target.storage.refanjian;
    },
    ai: {
      order: 9,
      result: {
        target(player2, target2) {
          return -target2.countCards("he") - (player2.countCards("h", "du") ? 1 : 0);
        }
      },
      threaten: 2
    }
  },
  reqianxun: {
    audio: 2,
    trigger: {
      target: "useCardToBegin",
      player: "judgeBefore"
    },
    filter(event2, player2) {
      if (player2.countCards("h") == 0) {
        return false;
      }
      if (event2.getParent().name == "phaseJudge") {
        return true;
      }
      if (event2.name == "judge") {
        return false;
      }
      if (event2.targets && event2.targets.length > 1) {
        return false;
      }
      if (event2.card && get.type(event2.card) == "trick" && event2.player != player2) {
        return true;
      }
    },
    content() {
      var cards2 = player.getCards("h");
      player.addToExpansion(cards2, "giveAuto", player).gaintag.add("reqianxun2");
      player.addSkill("reqianxun2");
    },
    ai: {
      effect: {
        target(card2, player2, target2) {
          if (player2 == target2 || !target2.hasFriend()) {
            return;
          }
          var type = get.type(card2);
          var nh = Math.min(
            target2.countCards(),
            game.countPlayer((i) => get.attitude(target2, i) > 0)
          );
          if (type == "trick") {
            if (!get.tag(card2, "multitarget") || get.info(card2).singleCard) {
              if (get.tag(card2, "damage")) {
                return [1.5, nh - 1];
              }
              return [1, nh];
            }
          } else if (type == "delay") {
            return [0.5, 0.5];
          }
        }
      }
    }
  },
  reqianxun2: {
    trigger: { global: "phaseEnd" },
    forced: true,
    audio: false,
    sourceSkill: "reqianxun",
    content() {
      var cards2 = player.getExpansions("reqianxun2");
      if (cards2.length) {
        player.gain(cards2, "draw");
      }
      player.removeSkill("reqianxun2");
    },
    intro: {
      mark(dialog, storage, player2) {
        var cards2 = player2.getExpansions("reqianxun2");
        if (player2.isUnderControl(true)) {
          dialog.addAuto(cards2);
        } else {
          return "共有" + get.cnNumber(cards2.length) + "张牌";
        }
      },
      markcount: "expansion"
    }
  },
  relianying: {
    audio: 2,
    trigger: {
      player: "loseAfter",
      global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"]
    },
    direct: true,
    filter(event2, player2) {
      if (player2.countCards("h")) {
        return false;
      }
      var evt = event2.getl(player2);
      return evt && evt.hs && evt.hs.length;
    },
    content() {
      "step 0";
      var num2 = trigger.getl(player).hs.length;
      player.chooseTarget(get.prompt("relianying"), "令至多" + get.cnNumber(num2) + "名角色各摸一张牌", [1, num2]).ai = function(target2) {
        var player2 = _status.event.player;
        if (player2 == target2) {
          return get.attitude(player2, target2) + 10;
        }
        return get.attitude(player2, target2);
      };
      if (result.bool) {
        player.logSkill("relianying", result.targets);
        game.asyncDraw(result.targets);
      } else {
        event.finish();
      }
      game.delay();
    },
    ai: {
      threaten: 0.8,
      effect: {
        player_use(card2, player2, target2) {
          if (player2.countCards("h") === 1) {
            return [1, 0.8];
          }
        },
        target(card2, player2, target2) {
          if (get.tag(card2, "loseCard") && target2.countCards("h") === 1) {
            return 0.5;
          }
        }
      },
      noh: true,
      freeSha: true,
      freeShan: true,
      skillTagFilter(player2) {
        return player2.countCards("h") === 1;
      }
    }
  },
  retishen: {
    audio: 2,
    skillAnimation: true,
    animationColor: "soil",
    limited: true,
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      if (typeof player2.storage.retishen2 == "number") {
        return player2.hp < player2.storage.retishen2;
      }
      return false;
    },
    check(event2, player2) {
      if (player2.hp <= 1) {
        return true;
      }
      return player2.hp < player2.storage.retishen2 - 1;
    },
    content() {
      player.awakenSkill(event.name);
      player.recover(player.storage.retishen2 - player.hp);
      player.draw(player.storage.retishen2 - player.hp);
    },
    intro: {
      mark(dialog, content, player2) {
        if (player2.storage.retishen) {
          return;
        }
        if (typeof player2.storage.retishen2 != "number") {
          return "上回合体力：无";
        }
        return "上回合体力：" + player2.storage.retishen2;
      },
      content: "limited"
    },
    group: ["retishen2"]
  },
  retishen2: {
    trigger: { player: "phaseJieshuBegin" },
    priority: -10,
    silent: true,
    sourceSkill: "retishen",
    content() {
      player.storage.retishen2 = player.hp;
      game.broadcast(function(player2) {
        player2.storage.retishen2 = player2.hp;
      }, player);
      game.addVideo("storage", player, ["retishen2", player.storage.retishen2]);
    },
    intro: {
      content(storage, player2) {
        if (player2.storage.retishen) {
          return;
        }
        return "上回合体力：" + storage;
      }
    }
  },
  reyajiao: {
    audio: 2,
    trigger: { player: ["respond", "useCard"] },
    frequent: true,
    filter(event2, player2) {
      return player2 != _status.currentPhase && get.itemtype(event2.cards) == "cards";
    },
    content() {
      "step 0";
      event.card = get.cards()[0];
      game.broadcast(function(card2) {
        ui.arena.classList.add("thrownhighlight");
        card2.copy("thrown", "center", "thrownhighlight", ui.arena).addTempClass("start");
      }, event.card);
      event.node = event.card.copy("thrown", "center", "thrownhighlight", ui.arena).addTempClass("start");
      ui.arena.classList.add("thrownhighlight");
      game.addVideo("thrownhighlight1");
      game.addVideo("centernode", null, get.cardInfo(event.card));
      if (get.type(event.card, "trick") == get.type(trigger.card, "trick")) {
        player.chooseTarget("选择获得此牌的角色").set("ai", function(target2) {
          var att = get.attitude(_status.event.player, target2);
          if (_status.event.du) {
            if (target2.hasSkillTag("nodu")) {
              return 0;
            }
            return -att;
          }
          if (att > 0) {
            return att + Math.max(0, 5 - target2.countCards("h"));
          }
          return att;
        }).set("du", event.card.name == "du");
      } else {
        player.chooseBool("是否弃置" + get.translation(event.card) + "？");
        event.disbool = true;
      }
      game.delay(2);
      if (event.disbool) {
        if (!result.bool) {
          game.log(player, "展示了", event.card);
          ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
        } else {
          game.log(player, "展示并弃掉了", event.card);
          event.card.discard();
        }
        game.addVideo("deletenode", player, [get.cardInfo(event.node)]);
        event.node.delete();
        game.broadcast(function(card2) {
          ui.arena.classList.remove("thrownhighlight");
          if (card2.clone) {
            card2.clone.delete();
          }
        }, event.card);
      } else if (result.targets) {
        player.line(result.targets, "green");
        result.targets[0].gain(event.card, "log");
        event.node.moveDelete(result.targets[0]);
        game.addVideo("gain2", result.targets[0], [get.cardInfo(event.node)]);
        game.broadcast(
          function(card2, target2) {
            ui.arena.classList.remove("thrownhighlight");
            if (card2.clone) {
              card2.clone.moveDelete(target2);
            }
          },
          event.card,
          result.targets[0]
        );
      } else {
        game.log(player, "展示并弃掉了", event.card);
        event.card.discard();
        game.addVideo("deletenode", player, [get.cardInfo(event.node)]);
        event.node.delete();
        game.broadcast(function(card2) {
          ui.arena.classList.remove("thrownhighlight");
          if (card2.clone) {
            card2.clone.delete();
          }
        }, event.card);
      }
      game.addVideo("thrownhighlight2");
      ui.arena.classList.remove("thrownhighlight");
    },
    ai: {
      effect: {
        target(card2, player2, target2) {
          if (get.tag(card2, "respond") && target2.countCards("h") > 1) {
            return [1, 0.2];
          }
        }
      }
    }
  },
  rejianxiong: {
    audio: 2,
    audioname: ["shen_caopi", "mb_caocao"],
    audioname2: { caoteng: "rejianxiong_caoteng" },
    trigger: { player: "damageEnd" },
    filter(event2, player2) {
      return get.itemtype(event2.cards) == "cards" && get.position(event2.cards[0], true) == "o";
    },
    content() {
      player.gain(trigger.cards);
      player.$gain2(trigger.cards);
      player.draw();
    },
    ai: {
      maixie: true,
      maixie_hp: true,
      effect: {
        target(card2, player2, target2) {
          if (player2.hasSkillTag("jueqing", false, target2)) {
            return [1, -1];
          }
          if (get.tag(card2, "damage")) {
            return [1, 0.55];
          }
        }
      }
    }
  },
  rejianxiong_old: {
    audio: "rejianxiong",
    audioname2: {
      gz_caocao: "jianxiong"
    },
    trigger: { player: "damageEnd" },
    async cost(event2, trigger2, player2) {
      let list = ["摸牌"];
      if (get.itemtype(trigger2.cards) == "cards" && trigger2.cards.filterInD().length) {
        list.push("拿牌");
      }
      list.push("cancel2");
      const { control } = await player2.chooseControl(list).set("prompt", get.prompt2(event2.skill)).set("ai", () => {
        const player3 = get.event().player, trigger3 = get.event().getTrigger();
        const cards2 = trigger3.cards ? trigger3.cards.filterInD() : [];
        if (get.event().controls.includes("拿牌")) {
          if (cards2.reduce((sum, card2) => {
            return sum + (card2.name == "du" ? -1 : 1);
          }, 0) > 1 || player3.getUseValue(cards2[0]) > 6) {
            return "拿牌";
          }
        }
        return "摸牌";
      }).forResult();
      event2.result = { bool: control != "cancel2", cost_data: control };
    },
    async content(event2, trigger2, player2) {
      if (event2.cost_data == "摸牌") {
        await player2.draw();
      } else {
        await player2.gain(trigger2.cards.filterInD(), "gain2");
      }
    },
    ai: {
      maixie: true,
      maixie_hp: true,
      effect: {
        target(card2, player2, target2) {
          if (player2.hasSkillTag("jueqing", false, target2)) {
            return [1, -1];
          }
          if (get.tag(card2, "damage") && player2 != target2) {
            return [1, 0.6];
          }
        }
      }
    }
  },
  reyiji: {
    audio: 2,
    audioname: ["yj_sb_guojia", "yj_sb_guojia_shadow"],
    trigger: { player: "damageEnd" },
    frequent: true,
    filter(event2) {
      return event2.num > 0;
    },
    content() {
      "step 0";
      event.num = 1;
      event.count = 1;
      player.gain(get.cards(2));
      player.$draw(2);
      player.chooseCardTarget({
        filterCard: true,
        selectCard: [1, 2],
        filterTarget(card2, player2, target2) {
          return player2 != target2 && target2 != event.temp;
        },
        ai1(card2) {
          if (ui.selected.cards.length > 0) {
            return -1;
          }
          if (card2.name == "du") {
            return 20;
          }
          return _status.event.player.countCards("h") - _status.event.player.hp;
        },
        ai2(target2) {
          var att = get.attitude(_status.event.player, target2);
          if (ui.selected.cards.length && ui.selected.cards[0].name == "du") {
            if (target2.hasSkillTag("nodu")) {
              return 0;
            }
            return 1 - att;
          }
          return att - 4;
        },
        prompt: "请选择要送人的卡牌"
      });
      if (result.bool) {
        player.lose(result.cards, ui.special, "toStorage");
        if (result.targets[0].hasSkill("reyiji2")) {
          result.targets[0].storage.reyiji2 = result.targets[0].storage.reyiji2.concat(result.cards);
        } else {
          result.targets[0].addSkill("reyiji2");
          result.targets[0].storage.reyiji2 = result.cards;
        }
        player.$give(result.cards.length, result.targets[0], false);
        player.line(result.targets, "green");
        game.addVideo("storage", result.targets[0], ["reyiji2", get.cardsInfo(result.targets[0].storage.reyiji2), "cards"]);
        if (num == 1) {
          event.temp = result.targets[0];
          event.num++;
          event.goto(2);
        } else if (event.count < trigger.num) {
          delete event.temp;
          event.num = 1;
          event.count++;
          event.goto(1);
        }
      } else if (event.count < trigger.num) {
        delete event.temp;
        event.num = 1;
        event.count++;
        event.goto(1);
      }
    },
    ai: {
      maixie: true,
      maixie_hp: true,
      effect: {
        target(card2, player2, target2) {
          if (get.tag(card2, "damage")) {
            if (player2.hasSkillTag("jueqing", false, target2)) {
              return [1, -2];
            }
            if (!target2.hasFriend()) {
              return;
            }
            var num2 = 1;
            if (get.attitude(player2, target2) > 0) {
              if (player2.needsToDiscard()) {
                num2 = 0.7;
              } else {
                num2 = 0.5;
              }
            }
            if (player2.hp >= 4) {
              return [1, num2 * 2];
            }
            if (target2.hp == 3) {
              return [1, num2 * 1.5];
            }
            if (target2.hp == 2) {
              return [1, num2 * 0.5];
            }
          }
        }
      },
      threaten: 0.6
    }
  },
  reyiji2: {
    trigger: { player: "phaseDrawBegin" },
    forced: true,
    mark: true,
    popup: "遗计拿牌",
    audio: false,
    sourceSkill: "reyiji",
    content() {
      player.$draw(player.storage.reyiji2.length);
      player.gain(player.storage.reyiji2, "fromStorage");
      delete player.storage.reyiji2;
      player.removeSkill("reyiji2");
      game.delay();
    },
    intro: {
      content: "cardCount"
    }
  },
  yijue: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filterTarget(card2, player2, target2) {
      return player2 != target2 && target2.countCards("h");
    },
    filter(event2, player2) {
      return player2.countCards("h") > 0;
    },
    content() {
      "step 0";
      player.chooseToCompare(target).set("small", true);
      if (result.bool) {
        if (!target.hasSkill("fengyin")) {
          target.addTempSkill("fengyin");
        }
        target.addTempSkill("yijue2");
        event.finish();
      } else if (target.hp < target.maxHp) {
        player.chooseBool("是否让目标回复1点体力？").ai = function(event2, player2) {
          return get.recoverEffect(target, player2, player2) > 0;
        };
      } else {
        event.finish();
      }
      if (result.bool) {
        target.recover();
      }
    },
    ai: {
      result: {
        target(player2, target2) {
          var hs = player2.getCards("h");
          if (hs.length < 3) {
            return 0;
          }
          var bool = false;
          for (var i = 0; i < hs.length; i++) {
            if (get.number(hs[i]) >= 9 && get.value(hs[i]) < 7) {
              bool = true;
              break;
            }
          }
          if (!bool) {
            return 0;
          }
          if (target2.countCards("h") > target2.hp + 1 && get.recoverEffect(target2) > 0) {
            return 1;
          }
          if (player2.canUse("sha", target2) && (player2.countCards("h", "sha") || player2.countCards("he", { color: "red" }))) {
            return -2;
          }
          return -0.5;
        }
      },
      order: 9
    }
  },
  yijue2: {
    charlotte: true,
    mark: true,
    mod: {
      cardEnabled2(card2) {
        if (get.position(card2) == "h") {
          return false;
        }
      }
    },
    intro: { content: "不能使用或打出手牌" }
  },
  retieji: {
    audio: 2,
    audioname: ["boss_lvbu3", "tw_dm_quyi"],
    trigger: { player: "useCardToPlayered" },
    check(event2, player2) {
      return get.attitude(player2, event2.target) <= 0;
    },
    filter(event2, player2) {
      return event2.card.name == "sha";
    },
    logTarget: "target",
    content() {
      "step 0";
      player.judge(function() {
        return 0;
      });
      if (!trigger.target.hasSkill("fengyin")) {
        trigger.target.addTempSkill("fengyin");
      }
      var suit = result.suit;
      var target2 = trigger.target;
      var num2 = target2.countCards("h", "shan");
      target2.chooseToDiscard("请弃置一张" + get.translation(suit) + "牌，否则不能使用闪抵消此杀", "he", function(card2) {
        return get.suit(card2) == _status.event.suit;
      }).set("ai", function(card2) {
        var num3 = _status.event.num;
        if (num3 == 0) {
          return 0;
        }
        if (card2.name == "shan") {
          return num3 > 1 ? 2 : 0;
        }
        return 8 - get.value(card2);
      }).set("num", num2).set("suit", suit);
      if (!result.bool) {
        trigger.getParent().directHit.add(trigger.target);
      }
    },
    ai: {
      ignoreSkill: true,
      skillTagFilter(player2, tag, arg) {
        if (tag == "directHit_ai") {
          return arg?.target && get.attitude(player2, arg.target) <= 0;
        }
        if (!arg || arg.isLink || !arg.card || arg.card.name != "sha") {
          return false;
        }
        if (!arg.target || get.attitude(player2, arg.target) >= 0) {
          return false;
        }
        if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || lib.skill[arg.skill].persevereSkill || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) {
          return false;
        }
      },
      directHit_ai: true
    }
  },
  reyicong: {
    trigger: {
      player: ["changeHp"]
    },
    audio: 2,
    audioname2: { gongsunzan: "yicong" },
    forced: true,
    filter(event2, player2) {
      return get.sgn(player2.hp - 2.5) != get.sgn(player2.hp - 2.5 - event2.num);
    },
    content() {
    },
    mod: {
      globalFrom(from, to, current) {
        return current - 1;
      },
      globalTo(from, to, current) {
        if (to.hp <= 2) {
          return current + 1;
        }
      }
    },
    ai: {
      threaten: 0.8
    }
  },
  reqiaomeng: {
    audio: "qiaomeng",
    trigger: { source: "damageSource" },
    direct: true,
    filter(event2, player2) {
      if (event2._notrigger.includes(event2.player)) {
        return false;
      }
      return event2.card && event2.card.name == "sha" && event2.player.countDiscardableCards(player2, "hej");
    },
    content() {
      "step 0";
      player.discardPlayerCard(get.prompt("reqiaomeng", trigger.player), "hej", trigger.player).set("logSkill", ["reqiaomeng", trigger.player]);
      if (result.bool) {
        var card2 = result.cards[0];
        if (get.position(card2) == "d") {
          if (get.subtype(card2) == "equip3" || get.subtype(card2) == "equip4" || get.subtype(card2) == "equip6") {
            player.gain(card2, player, "gain2");
          }
        }
      }
    }
  },
  qiaomeng: {
    audio: 2,
    audioname: ["xin_gongsunzan"],
    trigger: { source: "damageSource" },
    direct: true,
    filter(event2, player2) {
      if (event2._notrigger.includes(event2.player)) {
        return false;
      }
      return event2.card && event2.card.name == "sha" && event2.cards && get.color(event2.cards) == "black" && event2.player.countDiscardableCards(player2, "e");
    },
    content() {
      "step 0";
      player.discardPlayerCard(get.prompt("qiaomeng", trigger.player), "e", trigger.player).set("logSkill", ["qiaomeng", trigger.player]);
      if (result.bool) {
        var card2 = result.cards[0];
        if (get.position(card2) == "d") {
          if (get.subtype(card2) == "equip3" || get.subtype(card2) == "equip4" || get.subtype(card2) == "equip6") {
            player.gain(card2, player, "gain2");
          }
        }
      }
    }
  },
  rekurou: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filterCard: lib.filter.cardDiscardable,
    check(card2) {
      return 8 - get.value(card2);
    },
    position: "he",
    content() {
      player.loseHp();
    },
    ai: {
      order: 8,
      result: {
        player(player2) {
          if (player2.needsToDiscard(3) && !player2.hasValueTarget({ name: "sha" }, false)) {
            return -1;
          }
          return get.effect(player2, { name: "losehp" }, player2, player2);
        }
      },
      neg: true
    }
  },
  zhaxiang: {
    audio: 2,
    audioname2: { ol_sb_jiangwei: "zhaxiang_ol_sb_jiangwei" },
    trigger: { player: "loseHpEnd" },
    filter(event2, player2) {
      return player2.isIn() && event2.num > 0;
    },
    getIndex: (event2) => event2.num,
    forced: true,
    async content(event2, trigger2, player2) {
      await player2.draw(3);
      if (player2.isPhaseUsing()) {
        player2.addTempSkill(event2.name + "_effect");
        player2.addMark(event2.name + "_effect", 1, false);
      }
    },
    subSkill: {
      effect: {
        mod: {
          targetInRange(card2, player2, target2, now) {
            if (card2.name == "sha" && get.color(card2) == "red") {
              return true;
            }
          },
          cardUsable(card2, player2, num2) {
            if (card2.name == "sha") {
              return num2 + player2.countMark("zhaxiang_effect");
            }
          }
        },
        charlotte: true,
        onremove: true,
        audio: "zhaxiang",
        audioname2: { ol_sb_jiangwei: "zhaxiang_ol_sb_jiangwei" },
        trigger: { player: "useCard" },
        sourceSkill: "zhaxiang",
        filter(event2, player2) {
          return event2.card?.name == "sha" && get.color(event2.card) == "red";
        },
        forced: true,
        async content(event2, trigger2, player2) {
          trigger2.directHit.addArray(game.players);
        },
        intro: { content: "<li>使用【杀】的次数上限+#<br><li>使用红色【杀】无距离限制且不能被【闪】响应" },
        ai: {
          directHit_ai: true,
          skillTagFilter(player2, tag, arg) {
            return arg?.card?.name == "sha" && get.color(arg.card) == "red";
          }
        }
      }
    },
    ai: {
      maihp: true,
      effect: {
        target(card2, player2, target2) {
          if (get.tag(card2, "damage")) {
            if (player2.hasSkillTag("jueqing", false, target2)) {
              return [1, 1];
            }
            return 1.2;
          }
          if (get.tag(card2, "loseHp")) {
            if (target2.hp <= 1) {
              return;
            }
            var using = target2.isPhaseUsing();
            if (target2.hp <= 2) {
              return [1, player2.countCards("h") <= 1 && using ? 3 : 0];
            }
            if (using && target2.countCards("h", { name: "sha", color: "red" })) {
              return [1, 3];
            }
            return [1, target2.countCards("h") <= target2.hp || using && game.hasPlayer((current) => current != player2 && get.attitude(player2, current) < 0 && player2.inRange(current)) ? 3 : 2];
          }
        }
      }
    }
  },
  zhuhai: {
    audio: 2,
    audioname: ["gz_re_xushu"],
    trigger: { global: "phaseJieshuBegin" },
    direct: true,
    filter(event2, player2) {
      return event2.player.isIn() && event2.player.getStat("damage") && lib.filter.targetEnabled({ name: "sha" }, player2, event2.player) && (player2.hasSha() || _status.connectMode && player2.countCards("h") > 0);
    },
    clearTime: true,
    content() {
      player.chooseToUse(
        function(card2, player2, event2) {
          if (get.name(card2) != "sha") {
            return false;
          }
          return lib.filter.filterCard.apply(this, arguments);
        },
        "诛害：是否对" + get.translation(trigger.player) + "使用一张杀？"
      ).set("logSkill", "zhuhai").set("complexSelect", true).set("complexTarget", true).set("filterTarget", function(card2, player2, target2) {
        if (target2 != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) {
          return false;
        }
        return lib.filter.targetEnabled.apply(this, arguments);
      }).set("sourcex", trigger.player);
    }
  },
  qianxin: {
    skillAnimation: true,
    animationColor: "orange",
    audio: 2,
    juexingji: true,
    trigger: { source: "damageSource" },
    forced: true,
    derivation: "jianyan",
    filter(event2, player2) {
      return player2.hp < player2.maxHp;
    },
    content() {
      player.awakenSkill(event.name);
      player.addSkills("jianyan");
      player.loseMaxHp();
    }
  },
  jianyan: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    delay: false,
    filter(event2, player2) {
      return game.hasPlayer(function(current) {
        return current.hasSex("male");
      });
    },
    content() {
      "step 0";
      player.chooseControl(["red", "black", "basic", "trick", "equip"]).set("ai", function() {
        var player2 = _status.event.player;
        if (!player2.hasShan()) {
          return "basic";
        }
        if (player2.countCards("e") <= 1) {
          return "equip";
        }
        if (player2.countCards("h") > 2) {
          return "trick";
        }
        return "red";
      });
      event.card = get.cardPile(
        function(card2) {
          if (get.color(card2) == result.control) {
            return true;
          }
          if (get.type(card2, "trick") == result.control) {
            return true;
          }
          return false;
        },
        "cardPile",
        "top"
      );
      if (!event.card) {
        event.finish();
        return;
      }
      player.showCards([event.card]);
      player.chooseTarget(true, "选择一名男性角色送出" + get.translation(event.card), function(card2, player2, target2) {
        return target2.hasSex("male");
      }).set("ai", function(target2) {
        var att = get.attitude(_status.event.player, target2);
        if (_status.event.neg) {
          return -att;
        }
        return att;
      }).set("neg", get.value(event.card, player, "raw") < 0);
      player.line(result.targets, "green");
      result.targets[0].gain(event.card, "gain2");
    },
    ai: {
      order: 9,
      result: {
        player(player2) {
          if (game.hasPlayer(function(current) {
            return current.hasSex("male") && get.attitude(player2, current) > 0;
          })) {
            return 2;
          }
          return 0;
        }
      },
      threaten: 1.2
    }
  },
  reguose: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    discard: false,
    lose: false,
    delay: false,
    filter(event2, player2) {
      return player2.countCards("hes", { suit: "diamond" }) > 0;
    },
    position: "hes",
    filterCard: { suit: "diamond" },
    filterTarget(card2, player2, target2) {
      if (get.position(ui.selected.cards[0]) != "s" && lib.filter.cardDiscardable(ui.selected.cards[0], player2, "reguose") && target2.hasJudge("lebu")) {
        return true;
      }
      if (player2 == target2) {
        return false;
      }
      if (!game.checkMod(ui.selected.cards[0], player2, "unchanged", "cardEnabled2", player2)) {
        return false;
      }
      return player2.canUse({ name: "lebu", cards: ui.selected.cards }, target2);
    },
    check(card2) {
      return 7 - get.value(card2);
    },
    content() {
      if (target.hasJudge("lebu")) {
        player.discard(cards);
        target.discard(target.getJudge("lebu"));
      } else {
        player.useCard({ name: "lebu" }, target, cards).audio = false;
      }
      player.draw();
    },
    ai: {
      result: {
        target(player2, target2) {
          if (target2.hasJudge("lebu")) {
            return -get.effect(target2, { name: "lebu" }, player2, target2);
          }
          return get.effect(target2, { name: "lebu" }, player2, target2);
        }
      },
      order: 9
    }
  },
  fenwei: {
    skillAnimation: true,
    animationColor: "wood",
    audio: 2,
    audioname2: { heqi: "fenwei_heqi" },
    limited: true,
    trigger: { global: "useCardToPlayered" },
    //priority:5,
    filter(event2, player2) {
      if (event2.getParent().triggeredTargets3.length > 1) {
        return false;
      }
      if (get.type(event2.card) != "trick") {
        return false;
      }
      if (get.info(event2.card).multitarget) {
        return false;
      }
      if (event2.targets.length < 2) {
        return false;
      }
      if (player2.storage.fenwei) {
        return false;
      }
      return true;
    },
    direct: true,
    content() {
      "step 0";
      player.chooseTarget(get.prompt("fenwei"), [1, trigger.targets.length], function(card2, player2, target2) {
        return _status.event.targets.includes(target2);
      }).set("ai", function(target2) {
        var trigger2 = _status.event.getTrigger();
        if (game.phaseNumber > game.players.length * 2 && trigger2.targets.length >= game.players.length - 1 && !trigger2.excluded.includes(target2)) {
          return -get.effect(target2, trigger2.card, trigger2.player, _status.event.player);
        }
        return -1;
      }).set("targets", trigger.targets);
      if (result.bool) {
        player.awakenSkill(event.name);
        player.logSkill("fenwei", result.targets);
        player.storage.fenwei = true;
        trigger.getParent().excluded.addArray(result.targets);
        game.delay();
      }
    }
  },
  chulao: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filterTarget(card2, player2, target2) {
      if (player2 == target2) {
        return false;
      }
      if (target2.group == "unknown") {
        return false;
      }
      for (var i = 0; i < ui.selected.targets.length; i++) {
        if (ui.selected.targets[i].group == target2.group) {
          return false;
        }
      }
      return target2.countCards("he") > 0;
    },
    filter(event2, player2) {
      return player2.countCards("he") > 0;
    },
    filterCard: true,
    position: "he",
    selectTarget: [1, Infinity],
    check(card2) {
      if (get.suit(card2) == "spade") {
        return 8 - get.value(card2);
      }
      return 5 - get.value(card2);
    },
    content() {
      "step 0";
      if (num == 0 && get.suit(cards[0]) == "spade") {
        player.draw();
      }
      player.choosePlayerCard(targets[num], "he", true);
      if (result.bool) {
        if (result.links.length) {
          targets[num].discard(result.links[0]);
        }
        if (get.suit(result.links[0]) == "spade") {
          targets[num].draw();
        }
      }
    },
    ai: {
      result: {
        target: -1
      },
      threaten: 1.2,
      order: 3
    }
  },
  xunxun: {
    audio: 2,
    trigger: { player: "phaseDrawBegin1" },
    preHidden: true,
    frequent: true,
    async content(event2, trigger2, player2) {
      const cards2 = get.cards(4, true);
      await game.cardsGotoOrdering(cards2);
      const result2 = await player2.chooseToMove("恂恂：将两张牌置于牌堆顶（靠左的牌更靠上）", true).set("list", [["牌堆顶", cards2], ["牌堆底"]]).set("filterMove", function(from, to, moved) {
        if (to == 1 && moved[1].length >= 2) {
          return false;
        }
        return true;
      }).set("filterOk", function(moved) {
        return moved[1].length == 2;
      }).set("processAI", function(list) {
        var cards3 = list[0][1].slice(0).sort(function(a, b) {
          return get.value(b) - get.value(a);
        });
        return [cards3, cards3.splice(2)];
      }).forResult();
      const top = result2.moved[0];
      const bottom = result2.moved[1];
      top.reverse();
      player2.popup(`${get.cnNumber(top.length)}上${get.cnNumber(bottom.length)}下`);
      await game.cardsGotoPile(top.concat(bottom), ["top_cards", top], (event3, card2) => {
        if (event3.top_cards.includes(card2)) {
          return ui.cardPile.firstChild;
        }
        return null;
      });
    }
  },
  wangxi: {
    audio: 2,
    trigger: { player: "damageEnd", source: "damageSource" },
    getIndex: (event2) => event2.num,
    filter(event2) {
      if (event2._notrigger.includes(event2.player)) {
        return false;
      }
      return event2.num && event2.source?.isIn() && event2.player?.isIn() && event2.source != event2.player;
    },
    check(event2, player2) {
      if (player2.isPhaseUsing()) {
        return true;
      }
      if (event2.player == player2) {
        return get.attitude(player2, event2.source) > -3;
      }
      return get.attitude(player2, event2.player) > -3;
    },
    logTarget(event2, player2) {
      if (event2.player == player2) {
        return event2.source;
      }
      return event2.player;
    },
    preHidden: true,
    async content(event2, trigger2, player2) {
      await game.asyncDraw([trigger2.player, trigger2.source].sortBySeat());
    },
    ai: {
      maixie: true,
      maixie_hp: true
    }
  },
  refangquan: {
    audio: 2,
    trigger: { player: "phaseUseBefore" },
    filter(event2, player2) {
      return player2.countCards("h") > 0 && !player2.hasSkill("fangquan3");
    },
    direct: true,
    content() {
      "step 0";
      var fang = player.countMark("fangquan2") == 0 && player.hp >= 2 && player.countCards("h") <= player.maxHp + 1;
      player.chooseBool(get.prompt2("refangquan")).set("ai", function() {
        if (!_status.event.fang) {
          return false;
        }
        return game.hasPlayer(function(target2) {
          if (target2.hasJudge("lebu") || target2 == player) {
            return false;
          }
          if (get.attitude(player, target2) > 4) {
            return get.threaten(target2) / Math.sqrt(target2.hp + 1) / Math.sqrt(target2.countCards("h") + 1) > 0;
          }
          return false;
        });
      }).set("fang", fang);
      if (result.bool) {
        player.logSkill("refangquan");
        trigger.cancel();
        player.addTempSkill("fangquan2", "phaseAfter");
        player.addMark("fangquan2", 1, false);
        player.addTempSkill("refangquan2");
      }
    }
  },
  refangquan2: {
    mod: {
      maxHandcardBase(player2, num2) {
        return player2.maxHp;
      }
    }
  },
  rehunzi: {
    inherit: "hunzi",
    filter(event2, player2) {
      return player2.hp <= 2 && !player2.storage.rehunzi;
    },
    ai: {
      threaten(player2, target2) {
        if (target2.hp <= 2) {
          return 2;
        }
        return 0.5;
      },
      maixie: true,
      effect: {
        target(card2, player2, target2) {
          if (!target2.hasFriend()) {
            return;
          }
          if (target2.hp === 3 && get.tag(card2, "damage") == 1 && !target2.isTurnedOver() && _status.currentPhase != target2 && get.distance(_status.currentPhase, target2, "absolute") <= 3) {
            return [0.5, 1];
          }
          if (target2.hp === 1 && get.tag(card2, "recover") && !target2.isTurnedOver() && _status.currentPhase !== target2 && get.distance(_status.currentPhase, target2, "absolute") <= 3) {
            return [1, -3];
          }
        }
      }
    }
  },
  rezhijian: {
    inherit: "zhijian",
    group: ["rezhijian_use"],
    subfrequent: ["use"],
    subSkill: {
      use: {
        audio: "rezhijian",
        trigger: { player: "useCard" },
        frequent: true,
        filter(event2, player2) {
          return get.type(event2.card) == "equip";
        },
        prompt: "是否发动【直谏】摸一张牌？",
        content() {
          player.draw("nodelay");
        }
      }
    }
  },
  retuntian: {
    audio: 2,
    trigger: {
      player: "loseAfter",
      global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"]
    },
    frequent: true,
    filter(event2, player2) {
      if (player2 == _status.currentPhase) {
        return false;
      }
      if (event2.name == "gain" && event2.player == player2) {
        return false;
      }
      var evt = event2.getl(player2);
      return evt && evt.cards2 && evt.cards2.length > 0;
    },
    content() {
      player.judge(function(card2) {
        return 1;
      }).callback = lib.skill.retuntian.callback;
    },
    callback() {
      "step 0";
      if (event.judgeResult.suit == "heart") {
        player.gain(card, "gain2");
        event.finish();
      } else if (get.mode() == "guozhan") {
        player.chooseBool("是否将" + get.translation(card) + "作为“田”置于武将牌上？").set("frequentSkill", "retuntian").ai = function() {
          return true;
        };
      } else {
        event.directbool = true;
      }
      if (!result.bool && !event.directbool) {
        return;
      }
      player.addToExpansion(card, "gain2").gaintag.add("tuntian");
    },
    group: "tuntian_dist",
    locked: false,
    ai: {
      effect: {
        target() {
          return lib.skill.tuntian.ai.effect.target.apply(this, arguments);
        }
      },
      threaten(player2, target2) {
        if (target2.countCards("h") == 0) {
          return 2;
        }
        return 0.5;
      },
      nodiscard: true,
      nolose: true,
      notemp: true
    }
  },
  rebeige: {
    audio: "beige",
    audioname: ["re_caiwenji"],
    trigger: { global: "damageEnd" },
    filter(event2, player2) {
      return event2.card && event2.card.name == "sha" && event2.source && event2.player.classList.contains("dead") == false && player2.countCards("he");
    },
    direct: true,
    checkx(event2, player2) {
      var att1 = get.attitude(player2, event2.player);
      var att2 = get.attitude(player2, event2.source);
      return att1 > 0 && att2 <= 0;
    },
    content() {
      "step 0";
      var next = player.chooseToDiscard("he", get.prompt2("rebeige", trigger.player));
      var check = lib.skill.beige.checkx(trigger, player);
      next.set("ai", function(card2) {
        if (_status.event.goon) {
          return 8 - get.value(card2);
        }
        return 0;
      });
      next.set("logSkill", "rebeige");
      next.set("goon", check);
      if (result.bool) {
        trigger.player.judge();
      } else {
        event.finish();
      }
      switch (result.suit) {
        case "heart":
          trigger.player.recover(trigger.num);
          break;
        case "diamond":
          trigger.player.draw(3);
          break;
        case "club":
          trigger.source.chooseToDiscard("he", 2, true);
          break;
        case "spade":
          trigger.source.turnOver();
          break;
      }
    },
    ai: {
      expose: 0.3
    }
  },
  rexingshang: {
    audio: 2,
    audioname2: { caoying: "lingren_xingshang" },
    trigger: { global: "die" },
    filter(event2, player2) {
      return player2.isDamaged() || event2.player.countCards("he") > 0;
    },
    direct: true,
    content() {
      "step 0";
      var choice = [];
      if (player.isDamaged()) {
        choice.push("回复体力");
      }
      if (trigger.player.countCards("he")) {
        choice.push("获得牌");
      }
      choice.push("cancel2");
      player.chooseControl(choice).set("prompt", get.prompt2("rexingshang")).set("ai", function() {
        if (choice.length == 2) {
          return 0;
        }
        if (get.value(trigger.player.getCards("he")) > 8) {
          return 1;
        }
        return 0;
      });
      if (result.control != "cancel2") {
        player.logSkill(event.name, trigger.player);
        if (result.control == "获得牌") {
          event.togain = trigger.player.getCards("he");
          player.gain(event.togain, trigger.player, "giveAuto", "bySelf");
        } else {
          player.recover();
        }
      }
    }
  },
  refangzhu: {
    audio: 2,
    trigger: {
      player: "damageEnd"
    },
    direct: true,
    content() {
      "step 0";
      player.chooseTarget(get.prompt2("refangzhu"), function(card2, player2, target2) {
        return player2 != target2;
      }).ai = function(target2) {
        if (target2.hasSkillTag("noturn")) {
          return 0;
        }
        var player2 = _status.event.player;
        if (get.attitude(_status.event.player, target2) == 0) {
          return 0;
        }
        if (get.attitude(_status.event.player, target2) > 0) {
          if (target2.classList.contains("turnedover")) {
            return 1e3 - target2.countCards("h");
          }
          if (player2.getDamagedHp() < 3) {
            return -1;
          }
          return 100 - target2.countCards("h");
        } else {
          if (target2.classList.contains("turnedover")) {
            return -1;
          }
          if (player2.getDamagedHp() >= 3) {
            return -1;
          }
          return 1 + target2.countCards("h");
        }
      };
      if (result.bool) {
        player.logSkill("refangzhu", result.targets);
        event.target = result.targets[0];
        if (player.isHealthy()) {
          event._result = { bool: false };
        } else {
          event.target.chooseToDiscard("he", player.getDamagedHp()).set("ai", function(card2) {
            var player2 = _status.event.player;
            if (player2.isTurnedOver() || _status.event.getTrigger().player.getDamagedHp() > 2) {
              return -1;
            }
            return player2.hp * player2.hp - get.value(card2);
          }).set("prompt", "弃置" + get.cnNumber(player.getDamagedHp()) + "张牌并失去1点体力；或选择不弃置，将武将牌翻面并摸" + get.cnNumber(player.getDamagedHp()) + "张牌。");
        }
      } else {
        event.finish();
      }
      if (result.bool) {
        event.target.loseHp();
      } else {
        if (player.isDamaged()) {
          event.target.draw(player.getDamagedHp());
        }
        event.target.turnOver();
      }
    },
    ai: {
      maixie: true,
      maixie_hp: true,
      effect: {
        target(card2, player2, target2) {
          if (get.tag(card2, "damage")) {
            if (player2.hasSkillTag("jueqing", false, target2)) {
              return [1, -1.5];
            }
            if (target2.hp <= 1) {
              return;
            }
            if (!target2.hasFriend()) {
              return;
            }
            var hastarget = false;
            var turnfriend = false;
            var players = game.filterPlayer();
            for (var i = 0; i < players.length; i++) {
              if (get.attitude(target2, players[i]) < 0 && !players[i].isTurnedOver()) {
                hastarget = true;
              }
              if (get.attitude(target2, players[i]) > 0 && players[i].isTurnedOver()) {
                hastarget = true;
                turnfriend = true;
              }
            }
            if (get.attitude(player2, target2) > 0 && !hastarget) {
              return;
            }
            if (turnfriend || target2.hp == target2.maxHp) {
              return [0.5, 1];
            }
            if (target2.hp > 1) {
              return [1, 0.5];
            }
          }
        }
      }
    }
  },
  repolu: {
    audio: 1,
    trigger: {
      source: "dieAfter",
      player: "die"
    },
    forceDie: true,
    filter(event2, player2, name2) {
      return name2 == "die" || player2.isIn();
    },
    direct: true,
    content() {
      "step 0";
      if (!player.storage.repolu) {
        player.storage.repolu = 0;
      }
      event.num = player.storage.repolu + 1;
      player.chooseTarget([1, Infinity], get.prompt("repolu"), "令任意名角色摸" + get.cnNumber(event.num) + "张牌").set("forceDie", true).ai = function(target2) {
        return get.attitude(_status.event.player, target2);
      };
      if (result.bool) {
        player.storage.repolu++;
        result.targets.sortBySeat();
        player.logSkill("repolu", result.targets);
        game.asyncDraw(result.targets, num);
      } else {
        event.finish();
      }
      game.delay();
    }
  },
  oljiuchi: {
    mod: {
      cardUsable(card2, player2, num2) {
        if (card2.name == "jiu") {
          return Infinity;
        }
      }
    },
    audio: 2,
    enable: "chooseToUse",
    filterCard(card2) {
      return get.suit(card2) == "spade";
    },
    viewAs: { name: "jiu" },
    position: "hs",
    viewAsFilter(player2) {
      return player2.hasCard((card2) => get.suit(card2) == "spade", "hs");
    },
    prompt: "将一张黑桃手牌当酒使用",
    check(cardx, player2) {
      if (player2 && player2 == cardx.player) {
        return true;
      }
      if (_status.event.type == "dying") {
        return 1;
      }
      var player2 = _status.event.player;
      var shas = player2.getCards("hs", function(card3) {
        return card3 != cardx && get.name(card3, player2) == "sha";
      });
      if (!shas.length) {
        return -1;
      }
      if (shas.length > 1 && (player2.getCardUsable("sha") > 1 || player2.countCards("hs", "zhuge"))) {
        return 0;
      }
      shas.sort(function(a, b) {
        return get.order(b) - get.order(a);
      });
      var card2 = false;
      if (shas.length) {
        for (var i = 0; i < shas.length; i++) {
          if (shas[i] != cardx && lib.filter.filterCard(shas[i], player2)) {
            card2 = shas[i];
            break;
          }
        }
      }
      if (card2) {
        if (game.hasPlayer(function(current) {
          return get.attitude(player2, current) < 0 && !current.hasShan() && current.hp + current.countCards("h", { name: ["tao", "jiu"] }) > 1 + (player2.storage.jiu || 0) && player2.canUse(card2, current, true, true) && !current.hasSkillTag("filterDamage", null, {
            player: player2,
            card: card2,
            jiu: true
          }) && get.effect(current, card2, player2) > 0;
        })) {
          return 4 - get.value(cardx);
        }
      }
      return -1;
    },
    ai: {
      threaten: 1.5
    },
    trigger: { source: "damageEnd" },
    locked: false,
    forced: true,
    filter(event2, player2) {
      if (event2.name == "chooseToUse") {
        return player2.hasCard((card2) => get.suit(card2) == "spade", "hs");
      }
      return event2.card && event2.card.name == "sha" && event2.getParent(2).jiu == true && !player2.isTempBanned("benghuai");
    },
    content() {
      player.logSkill("oljiuchi");
      player.tempBanSkill("benghuai");
    }
  },
  rezaiqi: {
    audio: 2,
    direct: true,
    filter(event2, player2) {
      return lib.skill.rezaiqi.count() > 0;
    },
    trigger: {
      player: "phaseJieshuBegin"
    },
    content() {
      "step 0";
      player.chooseTarget([1, lib.skill.rezaiqi.count()], get.prompt2("rezaiqi")).ai = function(target2) {
        return get.attitude(_status.event.player, target2);
      };
      if (result.bool) {
        var targets2 = result.targets;
        targets2.sortBySeat();
        player.line(targets2, "fire");
        player.logSkill("rezaiqi", targets2);
        event.targets = targets2;
      } else {
        event.finish();
      }
      event.current = targets2.shift();
      if (player.isHealthy()) {
        event._result = { index: 0 };
      } else {
        event.current.chooseControl().set("choiceList", ["摸一张牌", "令" + get.translation(player) + "回复1点体力"]).set("ai", function() {
          if (get.attitude(event.current, player) > 0) {
            return 1;
          }
          return 0;
        });
      }
      if (result.index == 1) {
        event.current.line(player);
        player.recover(event.current);
      } else {
        event.current.draw();
      }
      game.delay();
      if (targets2.length) {
        event.goto(2);
      }
    },
    count: () => get.discarded().filter((card2) => get.color(card2) === "red").length
  }
};
const translates = {
  re_zhangliao: "界张辽",
  re_zhangliao_prefix: "界",
  re_simayi: "界司马懿",
  re_simayi_prefix: "界",
  re_xuzhu: "界许褚",
  re_xuzhu_prefix: "界",
  re_xiahoudun: "界夏侯惇",
  re_xiahoudun_prefix: "界",
  re_lvmeng: "界吕蒙",
  re_lvmeng_prefix: "界",
  re_zhouyu: "界周瑜",
  re_zhouyu_prefix: "界",
  re_luxun: "界陆逊",
  re_luxun_prefix: "界",
  re_zhaoyun: "界赵云",
  re_zhaoyun_prefix: "界",
  re_guanyu: "界关羽",
  re_guanyu_prefix: "界",
  re_zhangfei: "界张飞",
  re_zhangfei_prefix: "界",
  re_machao: "界马超",
  re_machao_prefix: "界",
  re_caocao: "界曹操",
  re_caocao_prefix: "界",
  re_guojia: "界郭嘉",
  re_guojia_prefix: "界",
  re_lvbu: "界吕布",
  re_lvbu_prefix: "界",
  re_huanggai: "界黄盖",
  re_huanggai_prefix: "界",
  re_daqiao: "界大乔",
  re_daqiao_prefix: "界",
  re_ganning: "界甘宁",
  re_ganning_prefix: "界",
  re_huatuo: "界华佗",
  re_huatuo_prefix: "界",
  re_liubei: "界刘备",
  re_liubei_prefix: "界",
  re_diaochan: "界貂蝉",
  re_diaochan_prefix: "界",
  re_huangyueying: "界黄月英",
  re_huangyueying_prefix: "界",
  re_sunquan: "界孙权",
  re_sunquan_prefix: "界",
  re_sunshangxiang: "界孙尚香",
  re_sunshangxiang_prefix: "界",
  re_zhugeliang: "界诸葛亮",
  re_zhugeliang_prefix: "界",
  re_zhenji: "界甄宓",
  re_zhenji_prefix: "界",
  re_huaxiong: "界华雄",
  re_huaxiong_prefix: "界",
  ol_sp_zhugeliang: "界卧龙",
  ol_sp_zhugeliang_prefix: "界",
  re_zhangjiao: "界张角",
  re_zhangjiao_prefix: "界",
  re_sunce: "界孙策",
  re_sunce_prefix: "界",
  ol_yuanshao: "界袁绍",
  ol_yuanshao_prefix: "界",
  ol_liushan: "界刘禅",
  ol_liushan_prefix: "界",
  olfangquan: "放权",
  olfangquan_info: "出牌阶段开始前，你可以跳过此阶段。若如此做，弃牌阶段开始时，你可以弃置一张手牌，令一名其他角色进行一个额外回合。",
  olruoyu: "若愚",
  olruoyu_info: "主公技，觉醒技，准备阶段，若你的体力值为全场最少，则你加1点体力上限，将体力回复至3点，然后获得技能〖思蜀〗和〖激将〗。",
  sishu: "思蜀",
  sishu_info: "出牌阶段开始时，你可以选择一名角色。该角色本局游戏内【乐不思蜀】的判定效果反转。",
  olluanji: "乱击",
  olluanji_info: "你可以将两张花色相同的手牌当做【万箭齐发】使用。当你使用【万箭齐发】选择目标后，你可以为此牌减少一个目标。",
  olluanji_remove: "乱击",
  olxueyi: "血裔",
  olxueyi_info: "主公技，锁定技。①游戏开始时，你获得2X个“裔”标记（X为场上群势力角色的数目）。②出牌阶段开始时，你可以移去一个“裔”标记，然后摸一张牌。③你的手牌上限+Y（Y为“裔”标记数）。",
  olxueyi_draw: "血裔",
  olhunzi: "魂姿",
  olhunzi_info: "觉醒技，准备阶段，若你的体力值为1，你减1点体力上限并获得技能〖英姿〗和〖英魂〗；本回合的结束阶段，你摸两张牌或回复1点体力。",
  olzhiba: "制霸",
  olzhiba_info: "主公技，其他吴势力的角色的出牌阶段限一次，其可以与你拼点（你可拒绝此拼点）。若其没赢，你可以获得两张拼点牌。你的出牌阶段限一次，你可以和一名吴势力角色拼点，若你赢，你获得两张拼点牌。",
  olzhiba2: "制霸",
  xinleiji: "雷击",
  xinleiji_misa: "雷击",
  xinguidao: "鬼道",
  xinleiji_info: "①当你使用【闪】或【闪电】，或打出【闪】时，你可以进行判定。②当你的判定的判定牌生效后，若结果为：黑桃，你可对一名角色造成2点雷电伤害；梅花：你回复1点体力并可对一名角色造成1点雷电伤害。",
  xinleiji_append: '<span style="font-family:yuanli">不能触发〖雷击〗的判定：〖暴虐〗、〖助祭〗、<br>〖弘仪〗、〖孤影〗。</span>',
  xinleiji_faq: "不能触发〖雷击〗的判定",
  xinleiji_faq_info: "<br>董卓/界董卓〖暴虐〗<br>黄巾雷使〖助祭〗<br>羊徽瑜〖弘仪〗<br>鸣濑白羽〖孤影〗",
  xinguidao_info: "一名角色的判定牌生效前，你可以打出一张黑色牌作为判定牌并获得原判定牌。若你以此法打出的牌为黑桃2-9，则你摸一张牌。",
  xinhuangtian: "黄天",
  xinhuangtian2: "黄天",
  xinhuangtian_info: "主公技。其他群势力角色的出牌阶段限一次，该角色可以交给你一张【闪】或黑桃手牌。",
  reqiangxi: "强袭",
  reqiangxi_info: "出牌阶段对每名其他角色限一次，你可以选择一项：1. 失去1点体力并对你攻击范围内的一名其他角色造成1点伤害；2. 弃置一张武器牌并对你攻击范围内的一名其他角色造成1点伤害。",
  rehuoji: "火计",
  rehuoji_info: "你可一张红色牌当作【火攻】使用。",
  rekanpo: "看破",
  rekanpo_info: "你可以将一张黑色牌当作【无懈可击】使用。",
  reshuangxiong: "双雄",
  reshuangxiong1: "双雄",
  reshuangxiong2: "双雄",
  reshuangxiong_info: "摸牌阶段，你可以放弃摸牌。若如此做，你亮出牌堆顶的两张牌并选择获得其中的一张。然后，你本回合内可以将与此牌颜色不同的一张手牌当做【决斗】使用。当你受到【决斗】造成的伤害时，你可以获得对方于此决斗中打出的所有【杀】。",
  reguanxing: "观星",
  reguanxing_info: "准备阶段，你可以观看牌堆顶的五张牌（存活角色小于4时改为三张），并将其以任意顺序置于牌堆顶或牌堆底，若你将〖观星〗的牌都放在了牌堆底，则你可以在结束阶段再次发动〖观星〗。",
  reluoshen: "洛神",
  reluoshen_info: "准备阶段，你可以进行判定，若结果为黑色则获得此判定牌，且可重复此流程直到出现红色的判定结果。你通过〖洛神〗得到的牌不计入当前回合的手牌上限。",
  reluoshen_info_guozhan: "准备阶段，你可以进行判定，若为黑色则可以继续判定，直到出现红色。然后你获得所有黑色的判定牌。你通过〖洛神〗得到的牌不计入当前回合的手牌上限（结果为黑色的判定牌于此过程中不会进入弃牌堆）。",
  rejieyin: "结姻",
  rejieyin_info: "出牌阶段限一次，你可以选择一名男性角色并弃置一张手牌或将装备区内的一张装备牌置于其装备区，你与其体力较高的角色摸一张牌，体力值较低的角色回复1点体力。",
  rebiyue: "闭月",
  rebiyue_info: "结束阶段，你可以摸一张牌，若你没有手牌，则改为摸两张牌。",
  rejizhi: "集智",
  rejizhi_info: "当你使用锦囊牌时，你可以摸一张牌。若此牌为基本牌，则你可以弃置之，然后令本回合手牌上限+1。",
  reqicai: "奇才",
  reqicai_info: "锁定技，你使用锦囊牌无距离限制，你装备区内的防具牌和宝物牌不能被其他角色弃置。",
  rezhiheng: "制衡",
  rezhiheng_info: "出牌阶段限一次，你可以弃置任意张牌并摸等量的牌，若你在发动〖制衡〗时弃置了所有手牌，则你多摸一张牌。",
  rejiuyuan: "救援",
  rejiuyuan_info: "主公技，其他吴势力角色于其回合内回复体力时，若其体力值大于等于你，则该角色可以改为令你回复1点体力，然后其摸一张牌。",
  new_yajiao: "涯角",
  new_yajiao_info: "每当你于回合外使用或打出牌时，你可以亮出牌堆顶的一张牌，并将其交给一名角色。若此牌与你此次使用或打出的牌类别不同，则你弃置一张牌。",
  new_liyu: "利驭",
  new_liyu_info: "当你使用【杀】对一名其他角色造成伤害后，你可以获得其区域内的一张牌。若此牌不为装备牌，则其摸一张牌。若此牌为装备牌，则视为你对其选择的另一名角色使用一张【决斗】。",
  new_retuxi: "突袭",
  new_retuxi_info: "摸牌阶段摸牌时，你可以少摸任意张牌，然后获得等量的角色的各一张手牌。",
  new_retuxi_info_guozhan: "摸牌阶段摸牌时，你可以少摸至多两张牌，然后获得等量的角色的各一张手牌。",
  reyiji_tag: "已分配",
  new_reyiji: "遗计",
  new_reyiji_info: "当你受到1点伤害后，你可以摸两张牌，然后可以将至多两张手牌交给其他角色。",
  new_rejianxiong: "奸雄",
  new_rejianxiong_info: "当你受到伤害后，你可以获得对你造成伤害的牌并摸一张牌。",
  new_reluoyi: "裸衣",
  new_reluoyi_info: "摸牌阶段开始时，你亮出牌堆顶的三张牌。然后，你可以放弃摸牌。若如此做，你获得其中的基本牌、武器牌和【决斗】，且直到你的下回合开始，你使用的【杀】或【决斗】造成伤害时，此伤害+1。否则，你将这些牌置入弃牌堆。",
  new_rewusheng: "武圣",
  new_rewusheng_info: "你可以将一张红色牌当做【杀】使用或打出。你使用的方片【杀】没有距离限制。",
  new_yijue: "义绝",
  new_yijue_info: "出牌阶段限一次，你可以弃置一张牌并令一名有手牌的其他角色展示一张手牌。若此牌为黑色，则该角色不能使用或打出手牌，非锁定技失效且受到来自你的红桃【杀】的伤害+1直到回合结束。若此牌为红色，则你可以获得此牌，并可以令其回复1点体力。",
  new_repaoxiao: "咆哮",
  new_repaoxiao_info: "锁定技，出牌阶段，你使用【杀】没有数量限制。若你于此出牌阶段内使用过【杀】，则你本回合内使用【杀】没有距离限制。",
  new_tishen: "替身",
  new_tishen_info: "出牌阶段结束时，你可以弃置你所有的锦囊牌与坐骑牌。若如此做，直到你的下个回合开始，当一张【杀】结算结束后，若你是此牌目标且你未受到此牌伤害，你获得此牌对应的所有实体牌。",
  new_tishen2: "替身",
  new_tishen2_info: "",
  new_qingjian: "清俭",
  new_qingjian_info: "每回合限一次。当你于摸牌阶段外得到牌后，你可以展示任意张牌并交给一名其他角色。然后，当前回合角色本回合的手牌上限+X（X为你给出的牌中包含的类别数）。",
  qingjian_add: "清俭",
  qingjian_add_info: "",
  new_reqingnang: "青囊",
  new_reqingnang_info: "出牌阶段，你可以弃置一张手牌，令一名本回合内未成为过〖青囊〗的目标的角色回复1点体力。若你弃置的是黑色牌，则你本回合内不能再发动〖青囊〗。",
  new_reyaowu: "耀武",
  new_reyaowu_info: "锁定技，当一名角色使用【杀】对你造成伤害时，若此【杀】为红色，该角色回复1点体力或摸一张牌。否则你摸一张牌。",
  reyaowu: "耀武",
  reyaowu_info: "锁定技，当你受到牌造成的伤害时，若此牌为红色，则伤害来源摸一张牌；否则你摸一张牌。",
  reqingguo: "倾国",
  reqingguo_info: "你可以将一张黑色牌当做【闪】使用或打出。",
  qinxue: "勤学",
  retuxi: "突袭",
  reluoyi: "裸衣",
  reluoyi2: "裸衣",
  reganglie: "刚烈",
  qingjian: "清俭",
  reyingzi: "英姿",
  refanjian: "反间",
  refanjian_card: "弃牌",
  refanjian_hp: "失去体力",
  reqianxun: "谦逊",
  reqianxun2: "谦逊",
  relianying: "连营",
  retishen: "替身",
  retishen2: "替身",
  reyajiao: "涯角",
  rejianxiong: "奸雄",
  rejianxiong_mopai: "摸牌",
  rejianxiong_napai: "拿牌",
  reyiji: "遗计",
  reyiji2: "遗计",
  yijue: "义绝",
  yijue2: "义绝",
  retieji: "铁骑",
  refankui: "反馈",
  reyicong: "义从",
  qiaomeng: "趫猛",
  rekurou: "苦肉",
  zhaxiang: "诈降",
  zhaxiang2: "诈降",
  zhuhai: "诛害",
  qianxin: "潜心",
  jianyan: "荐言",
  reguicai: "鬼才",
  xunxun: "恂恂",
  wangxi: "忘隙",
  reguose: "国色",
  fenwei: "奋威",
  chulao: "除疠",
  liyu: "利驭",
  rerende: "仁德",
  rerende_info: "出牌阶段，你可以将至少一张手牌交给其他角色，然后你于此阶段内不能再以此法交给该角色牌；若你于此阶段内给出的牌首次达到两张，你可以视为使用一张基本牌。",
  liyu_info: "当你使用【杀】对一名其他角色造成伤害后，该角色可令你获得其一张牌，若如此做，则视为你对其选择的另一名角色使用一张【决斗】。",
  xunxun_info: "摸牌阶段，你可以观看牌堆顶的四张牌，然后将其中的两张牌置于牌堆顶，并将其余的牌以任意顺序置于牌堆底。",
  wangxi_info: "每当你对其他角色造成1点伤害后，或受到其他角色造成的1点伤害后，你可与该角色各摸一张牌。",
  reguose_info: "出牌阶段限一次，你可以选择一项：将一张方片花色牌当做【乐不思蜀】使用；或弃置一张方片花色牌并弃置场上的一张【乐不思蜀】。选择完成后，你摸一张牌。",
  fenwei_info: "限定技，当一名角色使用的锦囊牌指定了至少两名角色为目标时，你可以令此牌对其中任意名角色无效。",
  chulao_info: "出牌阶段限一次，若你有牌，你可以选择任意名势力各不相同的其他角色，你弃置你和这些角色的各一张牌。然后以此法弃置黑桃牌的角色各摸一张牌。",
  reguicai_info: "在任意角色的判定牌生效前，你可以打出一张牌代替之。",
  zhuhai_info: "一名其他角色的结束阶段开始时，若该角色本回合造成过伤害，你可以对其使用一张【杀】。",
  qianxin_info: "觉醒技，当你造成一次伤害后，若你已受伤，你须减1点体力上限，并获得技能〖荐言〗。",
  jianyan_info: "出牌阶段限一次，你可以声明一种牌的类别或颜色，并亮出牌库中第一张符合你声明的牌，然后你令一名男性角色获得此牌。",
  rekurou_info: "出牌阶段限一次，你可以弃置一张牌，然后失去1点体力。",
  zhaxiang_info: "锁定技。当你失去1点体力后，你摸三张牌。然后若此时是你的出牌阶段，则你本回合获得此下效果：使用【杀】的次数上限+1，使用红色【杀】无距离限制且不能被【闪】响应。",
  qiaomeng_info: "当你使用黑色【杀】对一名角色造成伤害后，你可以弃置该角色装备区里的一张牌，若此牌是坐骑牌，你于此牌置入弃牌堆后获得之。",
  reyicong_info: "锁定技，你计算与其他角色的距离时-1。若你的体力值不大于2，则其他角色计算与你的距离时+1。",
  refankui_info: "每当你受到1点伤害后，你可以获得伤害来源的一张牌。",
  retieji_info: "当你使用【杀】指定一名角色为目标后，你可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
  yijue_info: "出牌阶段限一次，你可以与一名其他角色拼点，若你赢，则直到回合结束，该角色不能使用或打出手牌且其非锁定技失效，若你没赢，你可令该角色回复1点体力。",
  reyiji_info: "每当你受到1点伤害后，你可以摸两张牌。然后你可以在至多两名角色的武将牌旁边分别扣置至多两张手牌，这些角色的下个摸牌阶段开始时，该角色获得其武将牌旁的这些牌。",
  rejianxiong_info: "每当你受到伤害后，你可以获得对你造成伤害的牌，然后摸一张牌。",
  reyajiao_info: "每当你于回合外使用或打出一张手牌时，你可以亮出牌堆顶的一张牌，若此牌与你此次使用或打出的牌类别相同，你可以将之交给任意一名角色；若不同则你可以将之置入弃牌堆。",
  retishen_info: "限定技，准备阶段开始时，你可以将体力回复至等同于你上回合结束时的体力值，然后你每以此法回复1点体力，便摸一张牌。",
  reqianxun_info: "每当一张延时类锦囊牌或其他角色使用的普通锦囊牌生效时，若你是此牌的唯一目标，你可以将所有手牌置于你的武将牌上，若如此做，此回合结束时，你获得你武将牌上的所有牌。",
  relianying_info: "当你失去最后的手牌时，你可以令至多X名角色各摸一张牌（X为你此次失去的手牌数）。",
  reyingzi_info: "锁定技，摸牌阶段摸牌时，你额外摸一张牌；你的手牌上限为你的体力上限。",
  refanjian_info: "出牌阶段限一次，你可以展示一张手牌并将此牌交给一名其他角色。然后该角色选择一项：展示其手牌并弃置所有与此牌花色相同的牌，或失去1点体力。",
  qingjian_info: "每当你于摸牌阶段外得到牌时，你可以将其中任意牌以任意顺序交给其他角色，每回合最多发动四次。",
  qinxue_info: "觉醒技。准备阶段或结束阶段开始时，若你的手牌数减体力值大于1，则你减1点体力上限，回复1点体力或摸两张牌，获得技能〖攻心〗。",
  retuxi_info: "摸牌阶段摸牌时，你可以少摸任意张牌，然后选择等量的手牌数大于或等于你的其他角色，获得这些角色的各一张手牌。",
  reluoyi_info: "你可以跳过摸牌阶段，然后亮出牌堆顶的三张牌，获得其中的基本牌、武器牌和【决斗】，若如此做，直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1。",
  reganglie_info: "当你受到1点伤害后，你可进行判定，若结果为：红色，你对伤害来源造成1点伤害；黑色，你弃置伤害来源一张牌。",
  reganglie_info_guozhan: "当你受到伤害后，你可进行判定，若结果为：红色，你对伤害来源造成1点伤害；黑色，你弃置伤害来源一张牌。",
  botu: "博图",
  botu_info: "回合结束时，若你本回合出牌阶段内使用的牌包含四种花色，则你可以进行一个额外回合。",
  rebotu: "博图",
  rebotu_info: "每轮限X次。回合结束时，若本回合内置入弃牌堆的牌中包含至少四种花色，则你可获得一个额外的回合。（X为存活角色数且至多为3）",
  xin_yuji: "界于吉",
  xin_yuji_prefix: "界",
  re_zuoci: "界左慈",
  re_zuoci_prefix: "界",
  reguhuo: "蛊惑",
  reguhuo_info: "每名角色的回合限一次，你可以扣置一张手牌当作一张基本牌或普通锦囊牌使用或打出。其他角色同时选择是否质疑。然后，你展示此牌。若有质疑的角色：若此牌为假，则此牌作废，且所有质疑者各摸一张牌；为真，则所有质疑角色于此牌结算完成后依次弃置一张牌或失去1点体力，并获得技能〖缠怨〗。",
  rechanyuan: "缠怨",
  rechanyuan_info: "锁定技，你不能于〖蛊惑〗的结算流程中进行质疑。当你的体力值不大于1时，你的其他技能失效。",
  reguhuo_ally: "信任",
  reguhuo_betray: "质疑",
  reguhuo_ally_bg: "真",
  reguhuo_betray_bg: "假",
  rehuashen: "化身",
  rehuashen_info: "游戏开始时，你随机获得三张未加入游戏的武将牌，选一张置于你面前并声明该武将牌的一项技能，你拥有该技能且同时将性别和势力属性变成与该武将相同直到该化身被替换。回合开始时或回合结束时，你可以选择一项：①弃置至多两张未展示的化身牌并重新获得等量化身牌；②更换所展示的化身牌或技能。（你不可声明限定技、觉醒技、隐匿技、使命技、主公技等特殊技能）。",
  rexinsheng: "新生",
  rexinsheng_info: "当你受到1点伤害后，你可以获得一张新的化身牌。",
  re_menghuo: "界孟获",
  re_menghuo_prefix: "界",
  re_caopi: "界曹丕",
  re_caopi_prefix: "界",
  oljiuchi: "酒池",
  oljiuchi_info: "你可以将一张黑桃手牌当做【酒】使用。你使用【酒】无次数限制，且当你于回合内使用带有【酒】效果的【杀】造成伤害后，你令你的〖崩坏〗失效直到回合结束。",
  repolu: "破虏",
  repolu_info: "当你杀死一名角色/死亡时，你可以令任意名角色摸X+1张牌。（X为你此前发动过〖破虏〗的次数）",
  rexingshang: "行殇",
  rexingshang_info: "当其他角色死亡后，你可以选择一项：回复1点体力，或获得其所有牌。",
  refangzhu: "放逐",
  refangzhu_info: "当你受到伤害后，你可以令一名其他角色选择一项：摸X张牌并将武将牌翻面，或弃置X张牌并失去1点体力。（X为你已损失的体力值）",
  rezaiqi: "再起",
  rezaiqi_info: "结束阶段，你可以令至多X名角色选择一项：1.摸一张牌，2.令你回复1点体力（X为本回合进入过弃牌堆的红色牌数）。",
  ol_caiwenji: "界蔡琰",
  ol_caiwenji_prefix: "界",
  retuntian: "屯田",
  rebeige: "悲歌",
  retuntian_info: "①当你于回合外失去牌后，你可以判定。若判定结果为♥，你获得此判定牌。否则你将此牌置于你的武将牌上，称为“田”。②你计算与其他角色的距离时-X（X为你武将牌上“田”的数目）。",
  rebeige_info: "当有角色受到【杀】造成的伤害后，你可以弃一张牌，并令其进行一次判定，若判定结果为：♥该角色回复X点体力(X为伤害点数)；♦︎该角色摸三张牌；♣伤害来源弃两张牌；♠伤害来源将其武将牌翻面。",
  rehunzi: "魂姿",
  rehunzi_info: "觉醒技，准备阶段，若你的体力值不大于2，你减1点体力上限，并获得技能〖英姿〗和〖英魂〗。",
  rezhijian: "直谏",
  rezhijian_info: "出牌阶段，你可以将手牌中的一张装备牌置于一名其他角色装备区里（不得替换原装备），然后摸一张牌。当你使用装备牌时，你可以摸一张牌。",
  refangquan: "放权",
  refangquan_info: "你可跳过你的出牌阶段，若如此做，你本回合的手牌上限为你的体力上限，且回合结束时，你可以弃置一张手牌并令一名其他角色进行一个额外的回合。",
  xin_gaoshun: "界高顺",
  xin_gaoshun_prefix: "界",
  repojun: "破军",
  repojun2: "破军",
  repojun3: "破军",
  repojun_info: "当你使用【杀】指定目标后，你可以将其的至多X张牌置于其武将牌上（X为其体力值），然后其于当前回合结束时获得这些牌。当你使用【杀】对一名角色造成伤害时，若该角色的手牌数和装备区内的牌数均不大于你，则此伤害+1。",
  rexianzhen: "陷阵",
  rexianzhen_info: "出牌阶段限一次，你可以和一名其他角色拼点。若你赢，你本回合内对其使用牌没有次数和距离限制且无视其防具。若你没赢，你本回合内不能使用【杀】。若你以此法失去的拼点牌为【杀】，则你的【杀】不计入本回合的手牌上限。",
  rejinjiu: "禁酒",
  rejinjiu_info: "锁定技，你的【酒】均视为【杀】。其他角色不能于你的回合内使用【酒】。当你受到酒【杀】的伤害时，你令此伤害-X（X为影响过此【杀】的伤害值的【酒】的数量）。",
  rejinjiu2: "禁酒",
  rejinjiu3: "禁酒",
  ol_xiahouyuan: "界夏侯渊",
  ol_xiahouyuan_prefix: "界",
  shebian: "设变",
  shebian_info: "当你的武将牌翻面后，你可以移动场上的一张装备牌。",
  cangzhuo: "藏拙",
  cangzhuo_info: "弃牌阶段开始时，若你本回合内没有使用过锦囊牌，则你的锦囊牌不计入手牌上限。",
  re_zhangyi: "界张嶷",
  re_zhangyi_prefix: "界",
  rewurong: "怃戎",
  rewurong_info: "出牌阶段限一次，你可以令一名其他角色与你同时展示一张手牌：若你展示的是【杀】且该角色展示的不是【闪】，则你对其造成1点伤害；若你展示的不是【杀】且该角色展示的是【闪】，则你获得其一张牌。",
  ol_pangtong: "界庞统",
  ol_pangtong_prefix: "界",
  olniepan: "涅槃",
  olniepan_info: "限定技，当你处于濒死状态时，你可以弃置你区域内的所有牌并复原你的武将牌，然后摸三张牌并将体力回复至3点。然后你选择获得以下技能中的一个：〖八阵〗/〖火计〗/〖看破〗。",
  ol_weiyan: "界魏延",
  ol_weiyan_prefix: "界",
  reqimou: "奇谋",
  reqimou_info: "限定技，出牌阶段，你可以失去任意点体力并摸等量的牌，然后直到回合结束，你计算与其他角色的距离时-X，且你可以多使用X张【杀】（X为你失去的体力值）。",
  ol_xiaoqiao: "界小乔",
  ol_xiaoqiao_prefix: "界",
  rehongyan: "红颜",
  rehongyan_info: "锁定技，你区域内的黑桃牌和黑桃判定牌均视为红桃。当你于回合外正面朝上失去红桃牌后，若你的手牌数小于体力值，你摸一张牌。",
  reluoying: "落英",
  reluoying_discard: "落英",
  reluoying_judge: "落英",
  reluoying_info: "当其他角色的梅花牌因弃置或判定而进入弃牌堆后，你可以获得之。",
  rejiushi: "酒诗",
  rejiushi_info: "当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。当你受到伤害后，若你的武将牌背面向上且你未因此次伤害发动过〖酒诗〗，你可以翻面并从牌堆中随机获得一张锦囊牌。",
  rejiushi1: "酒诗",
  rejiushi3: "酒诗",
  rejiushi_mark: "酒诗·改",
  rejiushi_mark_info: "当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。当你受到伤害后，若你的武将牌背面向上且你未因此次伤害发动过〖酒诗〗，你可以翻面。当你翻面时，你从牌堆中随机获得一张锦囊牌。",
  chengzhang: "成章",
  chengzhang_info: "觉醒技，准备阶段开始时，若你造成伤害与受到伤害值之和累计7点或以上，则你回复1点体力并摸一张牌，然后改写〖酒诗〗。",
  re_wuyi: "界吴懿",
  re_wuyi_prefix: "界",
  re_zhuran: "界朱然",
  re_zhuran_prefix: "界",
  re_quancong: "界全琮",
  re_quancong_prefix: "界",
  re_liaohua: "界廖化",
  re_liaohua_prefix: "界",
  re_guohuai: "界郭淮",
  re_guohuai_prefix: "界",
  re_chengpu: "界程普",
  re_chengpu_prefix: "界",
  rechunlao: "醇醪",
  rechunlao2: "醇醪",
  rechunlao_info: "出牌阶段结束时，若你没有“醇”，你可以将至少一张【杀】置于你的武将牌上，称为“醇”。当一名角色处于濒死状态时，你可以移去一张“醇”，视为该角色使用一张【酒】，然后若此“醇”的属性为：火，你回复1点体力、雷，你摸两张牌。",
  re_caozhang: "界曹彰",
  re_caozhang_prefix: "界",
  yujin_yujin: "界于禁",
  yujin_yujin_prefix: "界",
  rexuanfeng: "旋风",
  rexuanfeng_info: `当你失去装备区内的牌时，或于弃牌阶段弃置了两张或更多的手牌后，你可以选择一项：1.依次弃置一至两名其他角色的共计两张牌；2.将一名其他角色装备区内的一张牌移动到另一名其他角色的装备区内。${get.poptip("rule_beishui")}：废除你的一个装备栏。`,
  reyongjin: "勇进",
  reyongjin_info: "你失去过牌的阶段结束时，你可视为对本阶段失去牌数与你相同的任意名角色使用一张无距离限制的【杀】。此【杀】造成伤害后，你随机恢复一个装备栏（均未废除则改为将弃牌堆中一张装备牌置入你的空置装备栏）。",
  olpaoxiao: "咆哮",
  olpaoxiao2: "咆哮",
  olpaoxiao_info: "①锁定技，你使用【杀】无次数限制。②锁定技，当你使用的【杀】被【闪】抵消时，你获得一枚“咆”（→）当你因【杀】造成伤害时，你弃置所有“咆”并令伤害值+X（X为“咆”数）。回合结束后，你弃置所有“咆”。",
  oltishen: "替身",
  oltishen_info: "限定技，准备阶段，你可以将体力回复至上限，然后摸X张牌（X为你回复的体力值）。",
  ollongdan: "龙胆",
  ollongdan_info: "你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出。",
  olyajiao: "涯角",
  olyajiao_info: "当你于回合外因使用或打出而失去手牌后，你可以亮出牌堆顶的一张牌。若这两张牌的类别相同，你可以将展示的牌交给一名角色；若类别不同，你可弃置攻击范围内包含你的角色区域里的一张牌。",
  regongji: "弓骑",
  regongji_info: "出牌阶段限一次，你可以弃置一张非基本牌，然后弃置一名其他角色的一张牌。锁定技，当你的装备区内有坐骑牌时，你的攻击范围无限。",
  ol_sunjian: "界孙坚",
  ol_sunjian_prefix: "界",
  wulie: "武烈",
  wulie2: "武烈",
  wulie_info: "限定技，结束阶段，你可以失去任意点体力并指定等量的其他角色。这些角色各获得一枚「烈」。有「烈」的角色受到伤害时，其移去一枚「烈」，然后防止此伤害。",
  re_sunluban: "界孙鲁班",
  re_sunluban_prefix: "界",
  re_masu: "界马谡",
  re_masu_prefix: "界",
  ol_pangde: "界庞德",
  ol_pangde_prefix: "界",
  rejianchu: "鞬出",
  rejianchu_info: "当你使用【杀】指定一名角色为目标后，你可以弃置其一张牌，若以此法弃置的牌不为基本牌，此【杀】不可被【闪】响应且你本回合使用【杀】的次数上限+1，为基本牌，该角色获得此【杀】。",
  re_taishici: "界太史慈",
  re_taishici_prefix: "界",
  hanzhan: "酣战",
  hanzhan_gain: "酣战",
  hanzhan_info: "①当你发起拼点时，或成为拼点的目标时，你可以令对方选择拼点牌的方式改为随机选择一张手牌。②当你拼点结束后，你可以获得本次拼点的拼点牌中点数最大的【杀】。",
  re_jianyong: "界简雍",
  re_jianyong_prefix: "界",
  xin_xusheng: "界徐盛",
  xin_xusheng_prefix: "界",
  decadepojun: "破军",
  decadepojun2: "破军",
  decadepojun_info: "当你使用【杀】指定目标后，你可以将其的至多X张牌置于其武将牌上（X为其体力值）。若这些牌中：有装备牌，你将这些装备牌中的一张置于弃牌堆；有锦囊牌，你摸一张牌。其于回合结束时获得其武将牌上的这些牌。",
  re_wangyi: "界王异",
  re_wangyi_prefix: "界",
  guanzhang: "关兴张苞",
  rezishou: "自守",
  rezishou2: "自守",
  rezishou_info: "摸牌阶段，你可以多摸X张牌（X为存活势力数）。若如此做，本回合你对其他角色造成伤害时，防止此伤害。",
  rezongshi: "宗室",
  rezongshi_info: "锁定技，你的手牌上限+X（X为存活势力数）。准备阶段，若你的手牌数大于体力值，则你本回合内使用【杀】无次数限制。",
  ol_dongzhuo: "界董卓",
  ol_dongzhuo_prefix: "界",
  olbaonue: "暴虐",
  olbaonue_info: "主公技，其他群雄角色造成1点伤害后，你可进行判定，若为♠，你回复1点体力并获得判定牌。",
  re_panzhangmazhong: "界潘璋马忠",
  re_panzhangmazhong_prefix: "界",
  re_hanhaoshihuan: "界韩浩史涣",
  re_hanhaoshihuan_prefix: "界",
  xinyicong: "义从",
  xinyicong_info: "锁定技，你计算与其他角色的距离时-X，其他角色计算与你的距离时+Y。（X为你的体力值-1，Y为你的已损失体力值-1）",
  oltianxiang: "天香",
  oltianxiang_info: "当你受到伤害时，你可以弃置一张红桃牌，防止此伤害并选择一名其他角色，然后你选择一项：1.令其受到伤害来源对其造成的1点伤害，然后摸X张牌（X为其已损失体力值且至多为5）；2.令其失去1点体力，然后获得你弃置的牌。",
  olhongyan: "红颜",
  olhongyan_info: "锁定技，你的黑桃牌的花色视为红桃。若你的装备区内有红桃牌，则你的手牌上限基数视为体力上限。",
  piaoling: "飘零",
  piaoling_info: "结束阶段，你可以进行判定。若判定结果为红桃，则你选择一项：1.将此牌交给一名角色。若你交给了自己，则你弃置一张牌。2.将此牌置于牌堆顶。",
  decadelihuo: "疠火",
  decadelihuo2: "疠火",
  decadelihuo3: "疠火",
  decadelihuo_info: "当你声明使用普【杀】后，你可以将此【杀】改为火【杀】。当你使用火【杀】选择目标时，可以选择一个额外目标。你使用的火【杀】结算完成后，若此【杀】的目标数大于1且你因此【杀】造成过伤害，则你失去1点体力。",
  decadechunlao: "醇醪",
  decadechunlao2: "醇醪",
  decadechunlao_info: "你可以对其他角色使用【酒（使用方法②）】。当你需要使用【酒】时，若你的武将牌未横置，则你可以将武将牌横置，然后视为使用【酒】。当你受到或造成伤害后，若伤害值大于1且你的武将牌横置，则你可以重置武将牌。",
  rejuece: "绝策",
  rejuece_info: "结束阶段，你可以对一名本回合内失去过牌的角色造成1点伤害。",
  remieji: "灭计",
  remieji_info: "出牌阶段限一次，你可以将一张黑色锦囊牌置于牌堆顶，然后令一名有牌的其他角色选择一项：交给你一张锦囊牌，或依次弃置两张非锦囊牌。",
  re_manchong: "界满宠",
  re_manchong_prefix: "界",
  rejunxing: "峻刑",
  rejunxing_info: "出牌阶段限一次，你可以弃置任意张手牌并选择一名其他角色。该角色选择一项：1.弃置X张牌并失去1点体力。2.翻面并摸X张牌。（X为你弃置的牌数）",
  re_gongsunzan: "界公孙瓒",
  re_gongsunzan_prefix: "界",
  reqiaomeng: "趫猛",
  reqiaomeng_info: "当你使用【杀】对一名角色造成伤害后，你可以弃置该角色区域内的一张牌。若此牌为坐骑牌，则你于此弃置事件结算结束后获得此牌。",
  ol_dengai: "界邓艾",
  ol_dengai_prefix: "界",
  oltuntian: "屯田",
  olzaoxian: "凿险",
  oltuntian_info: "①当你于回合外失去牌后，或于回合内因弃置而失去【杀】后，你可以判定。若判定结果不为♥，则你将此牌置于你的武将牌上，称为“田”。②你计算与其他角色的距离时-X（X为你武将牌上“田”的数目）。",
  olzaoxian_info: "觉醒技，准备阶段，若你武将牌上至少拥有三张“田”，则你减1点体力上限，并获得技能〖急袭〗。你于当前回合结束后进行一个额外的回合。",
  re_sunxiu: "界孙休",
  re_sunxiu_prefix: "界",
  re_caoxiu: "界曹休",
  re_caoxiu_prefix: "界",
  xin_lingtong: "界凌统",
  xin_lingtong_prefix: "界",
  decadexuanfeng: "旋风",
  decadexuanfeng_info: "当你于弃牌阶段弃置过至少两张牌，或当你失去装备区里的牌后，若场上没有处于濒死状态的角色，则你可以弃置至多两名其他角色的共计两张牌。若此时处于你的回合内，你可以对其中一名目标角色造成1点伤害。",
  yongjin: "勇进",
  yongjin_info: "限定技，出牌阶段，你可以依次移动场上的至多三张不同的装备牌。",
  xin_liubiao: "界刘表",
  xin_liubiao_prefix: "界",
  decadezishou: "自守",
  decadezishou_zhiheng: "自守",
  decadezishou_info: "摸牌阶段，你可以多摸X张牌（X为存活势力数）；然后本回合你对其他角色造成伤害时，防止此伤害。结束阶段，若你本回合没有使用牌指定其他角色为目标，你可以弃置任意张花色不同的手牌，然后摸等量的牌。",
  decadezongshi: "宗室",
  decadezongshi_info: "锁定技，你的手牌上限+X（X为存活势力数）。你的回合外，若你的手牌数大于等于手牌上限，则当你成为延时类锦囊牌或无颜色的牌的目标后，你令此牌对你无效。",
  re_fazheng: "界法正",
  re_fazheng_prefix: "界",
  reenyuan: "恩怨",
  reenyuan1: "恩怨",
  reenyuan2: "恩怨",
  reenyuan_info: "当你获得一名其他角色的至少两张牌后，你可以令其摸一张牌。当你受到1点伤害后，你可令伤害来源选择一项：①失去1点体力。②交给你一张手牌。若此牌不为♥，则你摸一张牌。",
  rexuanhuo: "眩惑",
  rexuanhuo_info: "摸牌阶段结束时，你可以交给一名其他角色两张手牌，然后该角色选择一项：1. 视为对你选择的另一名角色使用任意一种【杀】或【决斗】，2. 交给你所有手牌。",
  re_fuhuanghou: "界伏寿",
  re_fuhuanghou_prefix: "界",
  reqiuyuan: "求援",
  reqiuyuan_info: "当你成为【杀】的目标时，你可选择另一名其他角色。除非该角色交给你一张除【杀】以外的基本牌，否则其也成为此【杀】的目标且该角色不能响应此【杀】。",
  rezhuikong: "惴恐",
  rezhuikong_info: "其他角色的回合开始时，若你已受伤，你可与其拼点：若你赢，本回合该角色只能对自己使用牌；若你没赢，你获得其拼点的牌，然后其视为对你使用一张【杀】。",
  re_gongsunyuan: "界公孙渊",
  re_gongsunyuan_prefix: "界",
  rehuaiyi: "怀异",
  rehuaiyi_info: "出牌阶段限一次，你可以展示所有手牌，若这些牌的颜色：全部相同，你摸一张牌，并将此技能于本阶段内改为“限两次”，然后终止此技能的结算流程；不全部相同，则你选择一种颜色并弃置该颜色的所有手牌，然后你可以获得至多X名角色的各一张牌（X为你以此法弃置的手牌数）。若你以此法得到的牌不少于两张，则你失去1点体力。",
  re_caozhen: "界曹真",
  re_caozhen_prefix: "界",
  residi: "司敌",
  residi_push: "司敌",
  residi2: "司敌",
  residi3: "司敌",
  residi_info: "结束阶段，你可以将一张非基本牌置于武将牌上，称为“司”。其他角色的出牌阶段开始时，你可以移去一张“司”。若如此做，其本阶段内不能使用或打出与“司”颜色相同的牌。此阶段结束时，若其于此阶段内未使用过：【杀】，你视为对其使用一张【杀】。锦囊牌，你摸两张牌。",
  gz_re_xushu: "徐庶",
  re_zhangchunhua: "界张春华",
  re_zhangchunhua_prefix: "界",
  xin_handang: "界韩当",
  xin_handang_prefix: "界",
  xingongji: "弓骑",
  xingongji2: "弓骑",
  xingongji_info: "出牌阶段限一次，你可以弃置一张牌，然后你的攻击范围视为无限且使用与此牌花色相同的【杀】无次数限制直到回合结束。若你以此法弃置的牌为装备牌，则你可以弃置一名其他角色的一张牌。",
  xinjiefan: "解烦",
  xinjiefan_info: "限定技，出牌阶段，你可以选择一名角色，令攻击范围内含有该角色的所有角色依次选择一项：1.弃置一张武器牌；2.令其摸一张牌。然后若游戏轮数为1，则你于此回合结束时恢复此技能。",
  gzquanji: "权计",
  gzquanji_info: "每回合每项各限一次。当你受到伤害后或造成伤害后，你可以摸一张牌，然后你将一张牌置于武将牌上，称为“权”；你的手牌上限+X（X为“权”的数量）。",
  gzpaiyi: "排异",
  gzpaiyi_backup: "排异",
  gzpaiyi_info: "出牌阶段限一次。你可以移去一张“权”并选择一名角色。令其摸X张牌（X为你的“权”数且至多为7）。然后若其手牌数大于你，则你对其造成1点伤害。",
  ol_zhurong: "界祝融",
  ol_zhurong_prefix: "界",
  changbiao: "长标",
  changbiao_info: "出牌阶段限一次，你可以将任意张手牌当做【杀】使用（无距离限制）。若你因此【杀】对目标角色造成过伤害，则你于出牌阶段结束时摸X张牌（X为此【杀】对应的实体牌数量）。",
  re_zhoucang: "界周仓",
  re_zhoucang_prefix: "界",
  rezhongyong: "忠勇",
  rezhongyong_info: "当你使用【杀】后，你可以将此【杀】以及目标角色使用的【闪】交给一名其他角色，若其获得的牌中有红色，则其可以对你攻击范围内的角色使用一张【杀】。若其获得的牌中有黑色，其摸一张牌。",
  ollihuo: "疠火",
  ollihuo2: "疠火",
  ollihuo3: "疠火",
  ollihuo4: "疠火",
  ollihuo_info: "你使用普通的【杀】可以改为火【杀】，若此【杀】造成过伤害，你失去1点体力；你使用火【杀】可以多选择一个目标。你每回合使用的第一张牌如果是【杀】，则此【杀】结算完毕后可置于你的武将牌上。",
  xinjiangchi: "将驰",
  xinjiangchi_info: "出牌阶段开始时，你可选择：①摸一张牌。②摸两张牌，然后本回合内不能使用或打出【杀】。③弃置一张牌，然后本回合内可以多使用一张【杀】，且使用【杀】无距离限制。",
  redingpin: "定品",
  redingpin_info: "出牌阶段，你可以弃置一张本回合未使用过/弃置过的类型的牌并选择一名角色。其进行判定，若结果为：黑色，其摸X张牌（X为其体力值且至多为3）且本回合内不能再成为〖定品〗的目标；红桃，你令此次弃置的牌不计入〖定品〗弃置牌合法性的检测；方片，你将武将牌翻面。",
  refaen: "法恩",
  refaen_info: "一名角色翻面或横置后，你可令其摸一张牌。",
  dcfaen: "法恩",
  dcfaen_info: "一名角色翻至正面或横置后，你可令其摸一张牌。",
  reshizhi: "矢志",
  reshizhi_info: "锁定技，若你的体力值为1，则你的【闪】视为【杀】，且当你使用对应的实体牌为一张【闪】的非转化普通【杀】造成伤害后，你回复1点体力。",
  re_guotufengji: "界郭图逢纪",
  re_guotufengji_prefix: "界",
  rejigong: "急攻",
  rejigong2: "急攻",
  rejigong_info: "出牌阶段开始时，你可以摸至多三张牌。若如此做，你本回合的手牌上限基数改为X，且弃牌阶段结束时，若X不小于Y，则你回复1点体力。（X为你本回合内造成的伤害值之和，Y为你本回合内因〖急攻〗摸牌而得到的牌的数量总和）",
  ol_jiangwei: "界姜维",
  ol_jiangwei_prefix: "界",
  oltiaoxin: "挑衅",
  oltiaoxin_info: "出牌阶段限一次，你可以选择一名攻击范围内包含你的角色。然后除非该角色对你使用一张【杀】且此【杀】对你造成伤害，否则你弃置其一张牌，然后将此技能于此出牌阶段内修改为出牌阶段限两次。",
  olzhiji: "志继",
  olzhiji_info: "觉醒技，准备阶段或结束阶段，若你没有手牌，你回复1点体力或摸两张牌，然后减1点体力上限，获得〖观星〗。",
  decadezhenjun: "镇军",
  decadezhenjun_info: "准备阶段或结束阶段，你可以弃置一名角色X张牌（X为其手牌数减体力值且至少为1），若其中没有装备牌，你选择一项：1.你弃一张牌；2.该角色摸等量的牌。",
  decadejingce: "精策",
  decadejingce_info: "结束阶段，若你本回合使用过的牌数不小于你的体力值，则你可执行一个摸牌阶段或出牌阶段；若这些牌包含的花色数也不小于你的体力值，则你将“或”改为“并”。",
  re_guanping: "界关平",
  re_guanping_prefix: "界",
  relongyin: "龙吟",
  relongyin_info: "当一名角色于其出牌阶段内使用【杀】时，你可弃置一张牌令此【杀】不计入出牌阶段使用次数。若此【杀】为红色，则你摸一张牌；若你以此法弃置的牌与此【杀】点数相同，则你重置“竭忠”。",
  jiezhong: "竭忠",
  jiezhong_info: "限定技，出牌阶段开始时，你可以将手牌补至体力上限（至多摸五张）。",
  re_caifuren: "界蔡夫人",
  re_caifuren_prefix: "界",
  reqieting: "窃听",
  reqieting_info: "其他角色的回合结束时，若其本回合内未造成过伤害，则你可将其装备区内的一张牌置于你的装备区内；若其本回合内未对其他角色使用过牌，则你可摸一张牌。",
  rexianzhou: "献州",
  rexianzhou_info: "限定技。出牌阶段，你可将装备区内的所有牌交给一名其他角色。你回复X点体力，然后对其攻击范围内的至多X名角色各造成1点伤害（X为你以此法给出的牌数）。",
  xin_zhonghui: "界钟会",
  xin_zhonghui_prefix: "界",
  xinquanji: "权计",
  xinquanji_info: "①当你受到1点伤害后，或其他角色不因你的赠予或交给而得到你的牌后，你可以摸一张牌，然后将一张手牌置于武将牌上，称为“权”。②你的手牌上限+X（X为“权”的数量）。",
  xinzili: "自立",
  xinzili_info: "觉醒技。准备阶段，若你的“权”数大于2，则你回复1点体力并摸两张牌，减1点体力上限并获得〖排异〗。",
  xinpaiyi: "排异",
  xinpaiyi_backup: "排异",
  xinpaiyi_info: "出牌阶段每项各限一次，你可移去一张“权”并选择一项：①令一名角色摸X张牌。②对至多X名角色各造成1点伤害。（X为“权”数）",
  re_guyong: "界顾雍",
  re_guyong_prefix: "界",
  reshenxing: "慎行",
  reshenxing_info: "出牌阶段，你可以弃置X张牌（X为你本阶段内发动过〖慎行〗的次数且至少为0，至多为2），然后摸一张牌。",
  rebingyi: "秉壹",
  rebingyi_info: "结束阶段，你可展示所有手牌。若这些牌：颜色均相同，则你可以令至多X名角色各摸一张牌（X为你的手牌数）；颜色点数均相同，则你摸一张牌。",
  re_jiaxu: "界贾诩",
  re_jiaxu_prefix: "界",
  rewansha: "完杀",
  rewansha_info: "锁定技。①你的回合内，不处于濒死状态的其他角色不能使用【桃】。②当有角色于你的回合内进入濒死状态时，你令其以外的所有其他角色的非锁定技失效直到此濒死状态结算结束。",
  reluanwu: "乱武",
  reluanwu_info: "限定技，出牌阶段，你可令所有其他角色依次选择一项：①对距离最近（或之一）的角色使用一张【杀】；②失去1点体力。结算完成后，你可视为使用一张【杀】（无距离限制）。",
  reweimu: "帷幕",
  reweimu_info: "锁定技。①你不能成为黑色锦囊牌的目标。②当你于回合内受到伤害时，你防止此伤害并摸2X张牌（X为伤害值）。",
  ol_lusu: "界鲁肃",
  ol_lusu_prefix: "界",
  olhaoshi: "好施",
  olhaoshi_info: "摸牌阶段开始时，你可以多摸两张牌。然后摸牌阶段结束时，若你的手牌数大于5，则你将手牌数的一半（向下取整）交给一名手牌最少其他角色并获得如下效果直到你下回合开始：当你成为【杀】或普通锦囊牌的目标后，其可以交给你一张手牌。",
  oldimeng: "缔盟",
  oldimeng_info: "出牌阶段限一次，你可令两名手牌数之差不大于你牌数的其他角色交换手牌。若如此做，此阶段结束时，你弃置X张牌（X为这两名角色手牌数之差）。",
  rejijiang: "激将",
  rejijiang1: "激将",
  rejijiang2: "激将",
  rejijiang_info: "主公技。①当你需要使用或打出【杀】时，你可以令其他蜀势力角色依次选择是否打出一张【杀】。若有角色响应，则你视为使用或打出了此【杀】。②每回合限一次。当有蜀势力角色于回合外使用或打出【杀】时，其可以令你摸一张牌。",
  xin_yufan: "界虞翻",
  xin_yufan_prefix: "界",
  xinzongxuan: "纵玄",
  xinzongxuan_info: "当你的牌因弃置而进入弃牌堆后，你可将其中的任意张牌置于牌堆顶。若剩余的牌中有锦囊牌，则你可以令一名其他角色获得其中的一张。",
  xinzhiyan: "直言",
  xinzhiyan_info: "结束阶段开始时，你可令一名角色摸一张牌（正面朝上移动）。若此牌为基本牌，则你摸一张牌。若此牌为装备牌，则其回复1点体力并使用此装备牌。",
  re_xiahoushi: "界夏侯氏",
  re_xiahoushi_prefix: "界",
  reqiaoshi: "樵拾",
  reqiaoshi_info: "其他角色的结束阶段开始时，若你的手牌数与其相等，则你可以与其各摸一张牌。若这两张牌花色相同，则你可以重复此步骤。",
  reyanyu: "燕语",
  reyanyu2: "燕语",
  reyanyu_info: "①出牌阶段，你可以重铸【杀】。②出牌阶段结束时，你可以令一名其他男性角色摸X张牌（X为你本阶段内发动过〖燕语①〗的次数且至多为3）。",
  rehujia: "护驾",
  rehujia_info: "主公技。①当你需要使用或打出一张【闪】时，你可以令其他魏势力角色选择是否打出一张【闪】。若有角色响应，则你视为使用或打出了一张【闪】。②每回合限一次。当有魏势力角色于回合外使用或打出【闪】时，其可以令你摸一张牌。",
  ol_xuhuang: "界徐晃",
  ol_xuhuang_prefix: "界",
  olduanliang: "断粮",
  olduanliang_info: "你可以将一张黑色非锦囊牌当做【兵粮寸断】使用。若你于当前回合内未造成过伤害，则你使用【兵粮寸断】无距离限制。",
  oljiezi: "截辎",
  oljiezi_info: "①当有角色跳过摸牌阶段后，你可选择一名角色。若该角色：手牌数为全场最少且没有“辎”，则其获得一枚“辎”。否则其摸一张牌。②一名角色的摸牌阶段结束时，若其有“辎”，则你移去其“辎”，然后令其获得一个额外的摸牌阶段。",
  re_madai: "界马岱",
  re_madai_prefix: "界",
  reqianxi: "潜袭",
  reqianxi_info: "准备阶段开始时，你可摸一张牌，然后弃置一张牌并选择一名距离为1的其他角色。该角色于本回合内：{不能使用或打出与此牌颜色相同的牌，且其装备区内与此牌颜色相同的防具牌无效，且当其回复体力时，你摸两张牌。}",
  re_guohuanghou: "界郭皇后",
  re_guohuanghou_prefix: "界",
  rejiaozhao: "矫诏",
  rejiaozhao_info: "出牌阶段限一次。你可以展示一张手牌，并令一名距离你最近的角色选择一种基本牌或普通锦囊牌的牌名。你可将此牌当做其声明的牌使用直到此阶段结束（你不是此牌的合法目标）。",
  rejiaozhao_lv2: "矫诏·升级 Lv.1",
  rejiaozhao_lv2_info: "出牌阶段限一次。你可以将一张手牌当做一张基本牌或普通锦囊牌使用（你不是此牌的合法目标）。",
  rejiaozhao_lv3: "矫诏·升级 Lv.2",
  rejiaozhao_lv3_info: "出牌阶段每种类型各限一次。你可以将一张手牌当做一张基本牌或普通锦囊牌使用。",
  redanxin: "殚心",
  redanxin_info: "当你受到伤害后，你可以摸一张牌并升级〖矫诏〗。",
  xin_wuguotai: "界吴国太",
  xin_wuguotai_prefix: "界",
  xinganlu: "甘露",
  xinganlu_info: "出牌阶段限一次。你可以令两名角色交换装备区内的牌，然后若这两名角色装备区内牌数差的绝对值大于你已损失的体力值，则你弃置两张手牌。",
  xinbuyi: "补益",
  xinbuyi_info: "一名角色进入濒死状态时，你可展示其一张手牌。若此牌不为基本牌，则其弃置此牌并回复1点体力。若其以此法弃置的牌移动前为其的唯一一张手牌，则其摸一张牌。",
  decadexianzhen: "陷阵",
  decadexianzhen2: "陷阵",
  decadexianzhen_info: "每回合限一次。出牌阶段，你可以和一名其他角色拼点。若你赢：本回合你无视该角色的防具，且对其使用牌没有次数和距离限制，且本回合对其使用牌造成伤害时，此伤害+1（每种牌名每回合限一次）；若你没赢：你本回合内不能使用【杀】，且【杀】不计入手牌上限。",
  decadejinjiu: "禁酒",
  decadejinjiu_info: "锁定技。你的【酒】的牌名均视为【杀】且点数视为K；你的回合内，其他角色不能使用【酒】。",
  dc_xushu: "新杀徐庶",
  dc_xushu_prefix: "新杀",
  rezhuhai: "诛害",
  rezhuhai_info: "其他角色的回合结束时，若其本回合内造成过伤害，则你可以选择一项：⒈将一张手牌当做【杀】对其使用。⒉视为对其使用一张【过河拆桥】。",
  xsqianxin: "潜心",
  xsqianxin_info: "觉醒技。当你造成伤害后，若你已受伤，则你减1点体力上限并获得〖荐言〗。",
  rejianyan: "荐言",
  rejianyan_info: "出牌阶段每项各限一次。你可选择一种颜色或一种牌的类别，然后系统从牌堆中检索出一张满足该条件的牌并展示之。然后你将此牌交给一名男性角色或Key势力角色。",
  re_zhanghe: "界张郃",
  re_zhanghe_prefix: "界",
  reqiaobian: "巧变",
  reqiaobian_info: "①游戏开始时，你获得两枚“变”。②判定阶段开始时，你可弃置一张牌或一枚“变”并跳过此阶段。③摸牌阶段开始时，你可弃置一张牌或一枚“变”并跳过此阶段，然后可以获得至多两名其他角色的各一张手牌。④出牌阶段开始时，你可弃置一张牌或一枚“变”并跳过此阶段，然后你可以移动场上的一张牌。⑤弃牌阶段开始时，你可弃置一张牌或一枚“变”并跳过此阶段。⑥结束阶段，若你的〖巧变⑥〗记录中不包含你的手牌数，则你获得一枚“变”并记录你的手牌数。",
  olbeige: "悲歌",
  olbeige_info: "当有角色受到渠道为【杀】的伤害后，若你有牌，你可令其进行判定。然后你可弃置一张牌，根据判定结果执行以下的一个选项：♥，其回复1点体力；♦，其摸两张牌；♣，伤害来源弃置两张牌️；♠，伤害来源将武将牌翻面。若你弃置的牌与判定结果：点数相同，则你获得你弃置的牌；花色相同，则你获得判定牌。",
  dc_bulianshi: "界步练师",
  dc_bulianshi_prefix: "界",
  dcanxu: "安恤",
  dcanxu_info: "出牌阶段限一次，你可以选择两名手牌数不同的其他角色，令其中手牌少的角色获得手牌多的角色的一张手牌并展示之。然后若此牌不为黑桃，则你摸一张牌；若这两名角色手牌数相等，则你回复1点体力。",
  dczhuiyi: "追忆",
  dczhuiyi_info: "当你死亡时，你可以令一名不为击杀者的其他角色摸X张牌（X为存活角色数），然后其回复1点体力。",
  re_jushou: "界沮授",
  re_jushou_prefix: "界",
  dcshibei: "矢北",
  dcshibei_info: "锁定技，当你于一回合内第一次受到伤害后，你回复1点体力；当你于一回合内第二次受到伤害后，你失去1点体力。",
  dcjianying: "渐营",
  dcjianying_info: "当你使用与你使用的上一张牌点数或花色相同的牌时，你可以摸一张牌。",
  re_duji: "界杜畿",
  re_duji_prefix: "界",
  reandong: "安东",
  reandong_info: "当你受到其他角色造成的伤害时，你可以令伤害来源选择一项：⒈防止此伤害。然后其♥牌不计入本回合的手牌上限；⒉你观看其手牌并获得其中的所有♥牌，若其没有手牌，则你下次发动〖安东〗时改为自行选择。",
  reyingshi: "应势",
  reyingshi_info: "出牌阶段开始时，你可以展示一张手牌，选择一名角色A和一名其他角色B。A可以对B使用一张【杀】，然后获得你展示的牌。若A因此【杀】造成过伤害，则A获得牌堆中与展示牌花色点数相同的其他牌。",
  dcqiaomeng: "趫猛",
  dcqiaomeng_info: "当你使用黑色牌指定第一个目标后，你可以弃置目标角色中一名其他角色的一张牌。若你以此法弃置的牌为：装备牌，你获得此牌；锦囊牌，你令此牌不可被响应。",
  dc_gongsunzan: "新杀公孙瓒",
  dc_gongsunzan_prefix: "新杀",
  re_liuchen: "界刘谌",
  re_liuchen_prefix: "界",
  rezhanjue: "战绝",
  rezhanjue_effect: "战绝",
  rezhanjue_info: "出牌阶段，若你本阶段内因〖战绝〗得到过的牌数小于3，则你可以将所有不具有“勤王”标记的手牌当做【决斗】使用。此【决斗】使用结算结束后，你摸一张牌。然后所有因此【决斗】受到过伤害的角色也各摸一张牌。",
  reqinwang: "勤王",
  reqinwang_info: "主公技。出牌阶段限一次，你可以令所有其他蜀势力角色依次选择是否交给你一张【杀】，然后你可以令选择是的角色摸一张牌。",
  shizhan: "势斩",
  shizhan_info: "出牌阶段限两次，你可以选择一名其他角色。该角色视为对你使用一张【决斗】。",
  ol_xunyu: "界荀彧",
  ol_xunyu_prefix: "界",
  oljieming: "节命",
  oljieming_info: "当你受到1点伤害后或死亡时，你可令一名角色摸X张牌。然后若其手牌数大于X，则其将手牌弃置至X张（X为其体力上限且至多为5）。",
  re_liufeng: "界刘封",
  re_liufeng_prefix: "界",
  rexiansi: "陷嗣",
  rexiansi2: "陷嗣",
  rexiansi_info: "①准备阶段开始时，你可以将一至两名角色的各一张牌置于你的武将牌上，称为“逆”。②当一名角色需要对你使用【杀】时，其可以移去两张“逆”，然后视为对你使用一张【杀】。③若你的“逆”数大于体力值，则你可以移去一张“逆”并视为使用一张【杀】。",
  re_sp_taishici: "界SP太史慈",
  re_sp_taishici_prefix: "界SP",
  rejixu: "击虚",
  rejixu_info: "出牌阶段限一次。若你有手牌，则你可以选择至多X名角色，令这些角色猜测你的手牌区中是否有【杀】。若你：有【杀】，则你本阶段使用【杀】的次数上限+Y，且当你于本阶段内使用【杀】指定目标后，你可以令这Y名角色也成为此【杀】的目标；没有【杀】，则你弃置这Y名角色的各一张牌。然后你摸Y张牌（X为你的体力值，Y为这些角色中猜错的角色数）。",
  ol_dianwei: "界典韦",
  ol_dianwei_prefix: "界",
  olqiangxi: "强袭",
  olqiangxi_info: "出牌阶段限两次。你可以弃置一张武器牌或受到1点无来源伤害，然后对一名本回合内未成为过〖强袭〗目标的其他角色造成1点伤害。",
  olninge: "狞恶",
  olninge_info: "锁定技。当一名角色A于一回合内第二次受到伤害后，若A或伤害来源为你，则你摸一张牌，然后弃置其装备区或判定区内的一张牌。",
  re_zhuhuan: "界朱桓",
  re_zhuhuan_prefix: "界",
  refenli: "奋励",
  refenli_info: "若你的手牌数为全场最多，你可以跳过判定阶段和摸牌阶段；若你的体力值为全场最多，你可以跳过出牌阶段；若你的装备区里有牌且数量为全场最多，你可以跳过弃牌阶段。",
  //破界石不值钱了 就逮着免费突破硬削是吧
  repingkou: "平寇",
  repingkou_info: "回合结束时，你可以对至多X名其他角色各造成1点伤害（X为你本回合跳过的阶段数）。若你选择的角色数小于X，则你可以令其中一名角色随机弃置装备区里的一张牌。",
  dc_liru: "界李儒",
  dc_liru_prefix: "界",
  dcmieji: "灭计",
  dcmieji_info: "出牌阶段限一次，你可以展示一张武器牌或黑色锦囊牌。你将此牌置于牌堆顶，然后令一名有手牌的其他角色选择一项：⒈弃置一张锦囊牌；⒉依次弃置两张非锦囊牌。",
  dcfencheng: "焚城",
  dcfencheng_info: "限定技。出牌阶段，你可以指定一名其他角色，令从其开始的其他角色依次选择一项：⒈弃置至少X张牌（X为上一名角色弃置的牌数+1）。⒉你对其造成2点火焰伤害。",
  oljiang: "激昂",
  oljiang_info: "①当你使用【决斗】或红色【杀】指定第一个目标后，或成为【决斗】或红色【杀】的目标后，你可以摸一张牌。②当有【决斗】或红色【杀】于每回合内首次因弃置而进入弃牌堆后，你可以失去1点体力并获得这些牌。",
  re_xunyou: "界荀攸",
  re_xunyou_prefix: "界",
  reqice: "奇策",
  reqice_info: "出牌阶段限X次（X为你的“奇策”数+1），你可以将所有手牌当做任意一张普通锦囊牌使用。",
  rezhiyu: "智愚",
  rezhiyu_info: "当你受到伤害后，你可以摸一张牌，然后展示所有手牌，令伤害来源弃置一张手牌。若你展示的牌颜色均相同，你获得1枚“奇策”直到下回合结束且获得来源弃置的牌。",
  re_caiyong: "界蔡邕",
  re_caiyong_prefix: "界",
  rebizhuan: "辟撰",
  rebizhuan_bg: "书",
  rebizhuan_info: "①当你使用♠牌时，或成为其他角色使用♠牌的目标后，你可以将牌堆顶的一张牌置于武将牌上，称为“书”（你至多拥有四张“书”）。②你的手牌上限+X（X为“书”数）。",
  retongbo: "通博",
  retongbo_info: "摸牌阶段结束时，你可以用任意手牌交换等量“书”。然后若“书”数至少为4，你可以将四张“书”任意交给其他角色。若你交出的牌花色各不相同，你回复1点体力且“书”的上限+1（至多增加等同存活角色数的上限）。",
  re_chengong: "界陈宫",
  re_chengong_prefix: "界",
  remingce: "明策",
  remingce_info: "出牌阶段限一次。你可以将一张【杀】或装备牌交给一名其他角色，其选择一项：1.视为对你选择的另一名角色使用一张【杀】，且若此牌造成伤害，则执行选项2；2.你与其各摸一张牌。",
  re_sundeng: "界孙登",
  re_sundeng_prefix: "界",
  rekuangbi: "匡弼",
  rekuangbi_info: "出牌阶段开始时，你可以令一名其他角色将至多三张牌置于你的武将牌上直到此阶段结束。然后当你使用牌时，若你：有与此牌花色相同的“匡弼”牌，你移去其中一张并与其各摸一张牌；没有与此牌花色相同的“匡弼”牌，你随机移去一张“匡弼”牌并摸一张牌。",
  dc_chenqun: "界陈群",
  dc_chenqun_prefix: "界",
  repindi: "品第",
  repindi_info: "出牌阶段每名角色限一次。你可以弃置一张本阶段未以此法弃置过的类型的牌并选择一名角色，你选择一项：1.其摸X张牌；2.其弃置X张牌（X为你本回合发动〖品第〗的次数）。然后若其已受伤，你横置或重置。",
  re_mazhong: "界马忠",
  re_mazhong_prefix: "界",
  refuman: "抚蛮",
  refuman_info: "出牌阶段每名角色限一次。你可以弃置一张牌，令一名角色从弃牌堆中获得一张【杀】。然后其于其下个回合结束前失去此牌后，其摸一张牌；若其因使用或打出失去此牌，则改为你与其各摸一张牌。",
  re_guanzhang: "界关兴张苞",
  re_guanzhang_prefix: "界",
  retongxin: "同心",
  retongxin_info: "锁定技。你的攻击范围+2。",
  re_wenpin: "界文聘",
  re_wenpin_prefix: "界",
  rezhenwei: "镇卫",
  rezhenwei_info: "当一名其他角色成为【杀】或黑色锦囊牌的目标时，若该角色的体力值不大于你且此牌的目标角色数为1，你可以弃置一张牌并选择一项：1.摸一张牌，然后将此【杀】或黑色锦囊牌的目标转移给你；2.令此【杀】或黑色锦囊牌无效且将此【杀】或黑色锦囊牌置于使用者的武将牌上，然后当前回合结束后，使用者获得这些牌。",
  ol_huangzhong: "界黄忠",
  ol_huangzhong_prefix: "界",
  remoshi: "没矢",
  remoshi_info: "锁定技。①当你使用【杀】对目标角色造成伤害后，若其装备区里有防具牌或坐骑牌，你将此【杀】对应的实体牌置于其武将牌上。②当有“没矢”牌的角色失去防具牌或坐骑牌后，你获得其“没矢”牌。",
  dc_caozhi: "界曹植",
  dc_caozhi_prefix: "界",
  dcjiushi: "酒诗",
  dcjiushi_info: "①当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。②当你受到伤害后，若你的武将牌于受到伤害时背面向上，你可以翻面。③当你使用【酒】后，你使用【杀】的次数上限+1直到你的下个回合结束。",
  olhuoji: "火计",
  olhuoji_info: "①你可以将一张红色牌当【火攻】使用。②你使用【火攻】的作用效果改为“目标角色随机展示一张手牌A，然后你可以弃置一张与A颜色相同的手牌，对目标造成1点火属性伤害”。",
  olkanpo: "看破",
  olkanpo_info: "①你可以将一张黑色牌当【无懈可击】使用。②你使用的【无懈可击】不可被响应。",
  xinwangxi: "忘隙",
  xinwangxi_info: "当你对其他角色造成1点伤害后，或受到其他角色造成的1点伤害后，你可以摸两张牌，然后交给其一张牌。",
  ol_yanwen: "界颜良文丑",
  ol_yanwen_prefix: "界",
  olshuangxiong: "双雄",
  olshuangxiong_info: "①摸牌阶段结束时，你可以弃置一张牌。若如此做，你本回合内可以将一张与此牌颜色不同的牌当做【决斗】使用。②结束阶段，你从弃牌堆中获得本回合内对你造成伤害的所有牌。",
  re_zhuzhi: "界朱治",
  re_zhuzhi_prefix: "界",
  reanguo: "安国",
  reanguo_info: "出牌阶段限一次。你可以选择一名其他角色，若其：手牌数为全场最少，其摸一张牌；体力值为全场最低，其回复1点体力；装备区内牌数为全场最少，其随机使用一张装备牌。然后若该角色有未执行的效果且你满足条件，你执行之。若你与其执行了全部分支，你可以重铸任意张牌。",
  dcyicong: "义从",
  dcyicong_info: "锁定技。①你至其他角色的距离-1。②若你已损失的体力值不小于2，则其他角色至你的距离+1。",
  re_zhangsong: "界张松",
  re_zhangsong_prefix: "界",
  rexiantu: "献图",
  rexiantu_info: "其他角色的出牌阶段开始时，你可以摸两张牌，然后将两张牌交给该角色。然后此阶段结束时，若其于此阶段没有造成过伤害，你失去1点体力。",
  re_jsp_huangyueying: "界SP黄月英",
  re_jsp_huangyueying_prefix: "界SP",
  rejiqiao: "机巧",
  rejiqiao_info: "出牌阶段开始时，你可以弃置任意张牌，然后亮出牌堆顶X张牌（X为你以此法弃置的牌数与其中装备牌数之和），你获得其中所有非装备牌。",
  relinglong: "玲珑",
  relinglong_info: "锁定技。若你的装备区：有空置的防具栏，你视为拥有〖八卦阵〗；有空置的两种坐骑栏，你的手牌上限+2；有空置的宝物栏，你视为拥有〖奇才〗；以上均满足：你使用的【杀】或普通锦囊牌不可被响应。",
  ol_zhangzhang: "界张昭张纮",
  ol_zhangzhang_prefix: "界",
  olzhijian: "直谏",
  olzhijian_info: "出牌阶段，你可以将一张装备牌置于其他角色的装备区（可替换原装备），然后摸一张牌。",
  olguzheng: "固政",
  olguzheng_info: "每阶段限一次。当其他角色的至少两张牌因弃置而进入弃牌堆后，你可以令其获得其中一张牌，然后你可以获得剩余的牌。",
  re_caochong: "界曹冲",
  re_caochong_prefix: "界",
  rechengxiang: "称象",
  rechengxiang_info: "当你受到伤害后，你可以亮出牌堆顶的四张牌。然后获得其中任意数量点数之和不大于13的牌。若你得到的牌点数之和为13，你复原武将牌。",
  re_caorui: "界曹叡",
  re_caorui_prefix: "界",
  remingjian: "明鉴",
  remingjian_info: "出牌阶段限一次。你可以将所有手牌交给一名其他角色，然后该角色于其下个回合获得如下效果：1.手牌上限与使用【杀】的次数上限+1；2.当该角色首次造成伤害后，你发动一次〖恢拓〗。",
  rexingshuai: "兴衰",
  rexingshuai_info: "主公技，限定技。当你进入濒死状态时，你可令其他魏势力角色依次选择是否令你回复1点体力。然后这些角色依次受到1点伤害。有〖明鉴〗效果的角色于其回合内杀死角色后，你重置〖兴衰〗。",
  xin_zhangliang: "界张梁",
  xin_zhangliang_prefix: "界",
  rejijun: "集军",
  rejijun_info: "当你使用目标角色含有自己的牌结算完毕后，你可以进行一次判定并将判定牌置于武将牌上，称为“方”。",
  refangtong: "方统",
  refangtong_info: "结束阶段，你可以将一张手牌置于武将牌上，称为“方”。若如此做，你可以移去任意张“方”并对一名其他角色造成1点雷属性伤害（若你移去的“方”的点数和大于36，则改为造成3点雷属性伤害）。",
  re_simalang: "界司马朗",
  re_simalang_prefix: "界",
  requji: "去疾",
  requji_info: "出牌阶段限一次，你可以弃置X张牌（X为你已损失的体力值）并令至多X名角色回复1点体力，然后仍处于受伤状态的目标角色摸一张牌。若你以此法弃置了黑色牌，你失去1点体力。",
  rejunbing: "郡兵",
  rejunbing_info: "一名角色的结束阶段，若其手牌数小于其体力值，其可以摸一张牌并将所有手牌交给你，然后你可以交给其等量的牌。",
  re_zhugedan: "界诸葛诞",
  re_zhugedan_prefix: "界",
  regongao: "功獒",
  regongao_info: "锁定技。一名其他角色首次进入濒死状态时，你增加1点体力上限，然后回复1点体力。",
  rejuyi: "举义",
  rejuyi_info: "觉醒技。准备阶段，若你已受伤，且你的体力上限大于场上的存活角色数，你将手牌数摸至体力上限，然后获得技能〖崩坏〗和〖威重〗。",
  reweizhong: "威重",
  reweizhong_info: "锁定技。当你的体力上限增加或减少时，你摸两张牌。",
  re_zhongyao: "界钟繇",
  re_zhongyao_prefix: "界",
  rehuomo: "活墨",
  rehuomo_info: "每种牌名每回合限一次。当你需要使用一张基本牌时，你可以将一张黑色非基本牌置于牌堆顶，视为使用此基本牌。",
  zhoutai: "界周泰",
  zhoutai_prefix: "界",
  caoren: "界曹仁",
  caoren_prefix: "界",
  ollianhuan: "连环",
  ollianhuan_info: "你可以将一张♣牌当【铁索连环】使用或重铸。你使用【铁索连环】选择目标后，可以给此牌增加一个目标。",
  re_lidian: "界李典",
  gz_re_lidian: "李典",
  re_lidian_prefix: "界",
  re_xushu: "界徐庶",
  re_xushu_prefix: "界",
  rejianxiong_old: "奸雄",
  rejianxiong_old_info: "当你受到伤害后，你可以摸一张牌或获得对你造成伤害的牌。"
};
const characterTitles = {
  re_zhangliao: "晋阳侯",
  re_simayi: "晋高祖",
  re_xuzhu: "牟乡侯",
  re_xiahoudun: "高安乡侯",
  re_lvmeng: "士别三日",
  re_zhouyu: "平虏伯",
  re_luxun: "江陵侯",
  re_zhaoyun: "虎威将军",
  re_guanyu: " 壮缪侯",
  re_zhangfei: "当阳怒吼",
  re_machao: "骠骑将军",
  re_caocao: "魏太祖",
  re_guojia: "英才天妒",
  re_lvbu: "不败战神",
  re_huanggai: "三朝元勋",
  re_daqiao: "虹彩流离",
  re_ganning: "折冲将军",
  re_huatuo: "药到病除",
  re_liubei: "汉昭烈帝",
  re_diaochan: "千舞风华",
  re_huangyueying: "深藏不露",
  re_sunquan: "东吴大帝",
  re_sunshangxiang: "不让须眉",
  re_zhugeliang: "鞠躬尽瘁",
  re_zhenji: "轻云蔽月",
  re_huaxiong: "暴走汜水",
  ol_sp_zhugeliang: "隆中对",
  re_zhangjiao: "太平教主",
  re_sunce: "长沙桓王",
  ol_yuanshao: "义军盟主",
  ol_liushan: "蜀后主",
  xin_yuji: "缠怨索魂",
  re_zuoci: "羽化飞升",
  re_menghuo: "扫坛蛮王",
  re_caopi: "霸业的继承者",
  xin_gaoshun: "攻无不克",
  ol_xiahouyuan: "疾行的猎豹",
  re_zhangyi: "通壮逾古",
  ol_pangtong: "凤雏高翔",
  ol_weiyan: "汉中镇守",
  ol_xiaoqiao: "仙姿玉质",
  re_wuyi: "奔袭千里",
  re_zhuran: "不动之督",
  re_quancong: "冯谖市义",
  re_liaohua: "历尽沧桑",
  re_guohuai: "见盔心伤",
  re_chengpu: "三朝虎臣",
  re_caozhang: "黄须儿",
  yujin_yujin: "讨暴坚垒",
  ol_sunjian: "忠壮之烈",
  re_sunluban: "为虎作伥",
  re_masu: "军略之才器",
  ol_caiwenji: "至柔动刚",
  re_taishici: "信义笃烈",
  ol_pangde: "关门亭侯",
  re_jianyong: "优游风议",
  xin_xusheng: "整军经武",
  re_wangyi: "决意的巾帼",
  ol_dongzhuo: "祸乱朝纲",
  re_manchong: "政法兵谋",
  re_gongsunzan: "白马将军",
  ol_dengai: "壮士解腕",
  re_sunxiu: "弥殇的景君",
  re_caoxiu: "征东大将军",
  xin_lingtong: "豪情烈胆",
  xin_liubiao: "跨蹈汉南",
  re_fazheng: "蜀汉的辅翼",
  re_fuhuanghou: "孤注一掷",
  re_gongsunyuan: "狡黠的投机者",
  gz_re_xushu: "化剑为犁",
  re_zhangchunhua: "冷血皇后",
  xin_handang: "石城侯",
  ol_zhurong: "火神血裔",
  re_zhoucang: "披肝沥胆",
  ol_jiangwei: "声畅华夏",
  re_guanping: "忠臣孝子",
  re_caifuren: "襄江的蒲苇",
  xin_zhonghui: "桀骜的野心家",
  re_guyong: "庙堂的玉磬",
  re_jiaxu: "洞悉先机者",
  ol_lusu: "股肱腹心",
  xin_yufan: "狂直之士",
  re_xiahoushi: "疾冲之恋",
  ol_xuhuang: "周亚夫之风",
  re_madai: "临危受命",
  re_guohuanghou: "月华驱霾",
  re_panzhangmazhong: "擒龙伏虎",
  xin_wuguotai: "武烈皇后",
  dc_xushu: "化剑为犂",
  re_zhanghe: "识变善营",
  dc_bulianshi: "无冕之后",
  re_jushou: "监军谋国",
  re_duji: "卧镇京畿",
  rdc_gongsunzan: "蓟侯",
  re_liuchen: "血荐轩辕",
  ol_xunyu: "万岁亭侯",
  re_liufeng: "骑虎之殇",
  re_sp_taishici: "北海酬恩",
  ol_dianwei: "临危横贯",
  re_zhuhuan: "中洲拒天人",
  dc_liru: "魔仕",
  re_xunyou: "曹魏的谋主",
  re_caiyong: "大鸿儒",
  re_chengong: "刚直壮烈",
  re_sundeng: "才高德茂",
  dc_chenqun: "万世臣表",
  re_mazhong: "笑合南中",
  re_guanzhang: "将门虎子",
  re_wenpin: "坚城宿卫",
  ol_huangzhong: "老将的逆袭",
  dc_caozhi: "八斗之才",
  ol_yanwen: "二夫之勇",
  re_zhuzhi: "王事靡盬",
  re_guotufengji: "凶蛇两端",
  re_zhangsong: "怀璧待凤仪",
  re_jsp_huangyueying: "闺中璞玉",
  ol_zhangzhang: "内事之托",
  re_caochong: "仁爱的神童",
  re_caorui: "天姿的明君",
  xin_zhangliang: "人公将军",
  re_simalang: "再世神农",
  re_zhugedan: "薤露蒿里",
  re_zhongyao: "正楷萧曹",
  zhoutai: "历战之躯",
  caoren: "大将军",
  dc_gongsunzan: "白马将军",
  re_lidian: "深明大义",
  gz_re_lidian: "深明大义",
  re_xushu: "化剑为犂"
};
const characterIntro = {
  jsp_huangyueying: "荆州沔南白水人，沔阳名士黄承彦之女，诸葛亮之妻，诸葛瞻之母。容貌甚丑，而有奇才：上通天文，下察地理，韬略近于诸书无所不晓，诸葛亮在南阳闻其贤而迎娶。",
  re_gongsunzan: "群雄之一。出身贵族，因母地位卑贱，只当了郡中小吏。他貌美，声音洪亮，机智善辩。后随卢植于缑氏山中读书，粗通经传。",
  re_lidian: "字曼成，曹操麾下将领。李典深明大义，不与人争功，崇尚学习与高贵儒雅，尊重博学之士，在军中被称为长者。李典有长者之风，官至破虏将军，三十六岁去世。魏文帝曹丕继位后追谥号为愍侯。",
  sunben: " "
};
const characterFilters = {
  re_zuoci(mode) {
    return mode != "guozhan";
  }
};
const dynamicTranslates = {
  rejiushi(player2) {
    if (player2.storage.chengzhang) {
      return "当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。当你受到伤害后，若你的武将牌于受到伤害时背面向上，你可以翻面。当你翻面时，你获得牌堆中的一张随机锦囊牌。";
    }
    return "当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。当你受到伤害后，若你的武将牌于受到伤害时背面向上，你可以翻面并获得牌堆中的一张随机锦囊牌。";
  },
  rejiaozhao(player2) {
    return ["出牌阶段限一次。你可以展示一张手牌，并令一名距离你最近的角色选择一种基本牌或普通锦囊牌的牌名。你可将此牌当做其声明的牌使用直到此阶段结束（你不是此牌的合法目标）。", "出牌阶段限一次。你可以将一张手牌当做一张基本牌或普通锦囊牌使用（你不是此牌的合法目标）。", "出牌阶段每种类型各限一次。你可以将一张手牌当做一张基本牌或普通锦囊牌使用。"][player2.countMark("redanxin")];
  }
};
const perfectPairs = {};
const voices = {
  "#regongao1": "百战余生者，唯我大魏虎贲！",
  "#regongao2": "大魏凭武立国，当以骨血为饲！",
  "#rejuyi1": "举义旗，兴王师，伐不臣！",
  "#rejuyi2": "逆贼篡国，天下义士当共讨之！",
  "#reweizhong1": "食君之禄，当忠君之事。",
  "#benghuai_re_zhugedan1": "粮尽，援绝，天不佑我。",
  "#re_zhugedan:die": "大魏危矣，社稷危矣。",
  "#reqicai1": "吾之才学，不逊先生分毫。",
  "#reqicai2": "女子之才，蕙质兰心。",
  "#reyiji_yj_sb_guojia1": "算无遗策，方能决胜于千里。",
  "#reyiji_yj_sb_guojia2": "吾身虽殒，然智计长存。",
  "#reyiji_yj_sb_guojia_shadow1": "今生不借此身度，更向何生度此身？",
  "#reyiji_yj_sb_guojia_shadow2": "胸怀丹心一颗，欲照山河万朵。",
  "#huituo_re_caorui1": "拓土复疆，扬大魏鸿威。",
  "#huituo_re_caorui2": "制律弘法，固天下社稷。",
  "#remingjian1": "敌将寇边，还请将军领兵御之。",
  "#remingjian2": "逆贼滔乱，须得阁下出手相助。",
  "#rexingshuai1": "家国兴衰，与君共担。",
  "#rexingshuai2": "携君并进，共克此难。",
  "#re_caorui:die": "胸有宏图待展，奈何命数已尽。",
  "#zhuhai1": "善恶有报，天道轮回！",
  "#zhuhai2": "早知今日，何必当初！",
  "#qianxin1": "既遇明主，天下可图！",
  "#qianxin2": "弃武从文，安邦卫国！",
  "#re_xushu:die": "母亲……孩儿……尽孝来了……",
  "#xunxun1": "众将死战，非我之功。",
  "#xunxun2": "爱兵如子，胜乃可全。",
  "#wangxi1": "大丈夫，何拘小节。",
  "#wangxi2": "前尘往事，莫再提起。",
  "#lidian:die": "报国杀敌，虽死犹荣……",
  "#huomo_re_zhongyao1": "笔墨抒胸臆，妙手成汗青。",
  "#huomo_re_zhongyao2": "胸蕴大家之行，则下笔如有神助。",
  "#zuoding_re_zhongyao1": "腹有大才，可助阁下成事。",
  "#zuoding_re_zhongyao2": "胸有良策，可济将军之危。",
  "#re_zhongyao:die": "人有寿终日，笔有墨尽时……",
  "#rechengxiang1": "冲有一法，可得其重。",
  "#rechengxiang2": "待我细细算来。",
  "#renxin_re_caochong1": "见死而不救，非仁者所为。",
  "#renxin_re_caochong2": "遇难而不援，非我之道也。",
  "#re_caochong:die": "父亲，兄长……",
  "#olzhijian1": "君有恙，臣者当舍命除之。",
  "#olzhijian2": "臣有言在喉，不吐不快。",
  "#olguzheng1": "兴国为任，可驱百里之行。",
  "#olguzheng2": "固政之责，在君亦在臣。",
  "#ol_zhangzhang:die": "老臣年迈，无力为继……",
  "#rejiqiao1": "机关将作之术，在乎手巧心灵。",
  "#rejiqiao2": "机巧藏于心，亦如君之容。",
  "#relinglong1": "我夫所赠之玫，遗香自长存。",
  "#relinglong2": "心有玲珑罩，不殇春与秋。",
  "#re_jsp_huangyueying:die": "此心欲留夏，奈何秋风起……",
  "#qiangzhi_re_zhangsong1": "过目难忘，千载在我腹间。",
  "#qiangzhi_re_zhangsong2": "吾目为镜，可照世间文字。",
  "#rexiantu1": "此图载益州山水，请君纳之。",
  "#rexiantu2": "我献梧木一株，为引凤而来。",
  "#re_zhangsong:die": "恨未见使君，入主益州……",
  "#reanguo1": "非武不可安邦，非兵不可定国。",
  "#reanguo2": "天下纷乱，正是吾等用武之时。",
  "#re_zhuzhi:die": "刀在人在，刀折人亡……",
  "#reluoying_dc_caozhi1": "花落断情伤，心碎斩痴妄。",
  "#reluoying_dc_caozhi2": "流水不言恨，落英难解愁。",
  "#dcjiushi1": "花开易见落难寻。",
  "#dcjiushi2": "金樽盛清酒，烟景入诗篇。",
  "#dc_caozhi:die": "一生轻松待来生……",
  "#liegong_ol_huangzhong1": "龙骨成镞，矢破苍穹！",
  "#liegong_ol_huangzhong2": "凤翎为羽，箭没坚城！",
  "#ol_huangzhong:die": "末将，有负主公重托……",
  "#zhenwei_re_wenpin1": "想攻城，问过我没有？",
  "#zhenwei_re_wenpin2": "有我坐镇，我军焉能有失？",
  "#re_wenpin:die": "没想到，敌军的攻势如此凌厉……",
  "#fuhun_re_guanzhang1": "擎刀执矛，以效先父之法！",
  "#fuhun_re_guanzhang2": "苍天在上，儿必不堕父亲威名！",
  "#re_guanzhang:die": "马革裹尸，九泉之下无愧见父……",
  "#refuman1": "蛮夷畏威，杀之积怨，抚之怀德。",
  "#refuman2": "以威镇夷，宜抚之，勿戾之。",
  "#re_mazhong:die": "愿付此生，见汉蛮一家……",
  "#repindi1": "以九品论才，正是栋梁之谋。",
  "#repindi2": "置州郡中正，可为百年之政。",
  "#refaen_dc_chenqun1": "国法虽严，然不外乎于情。",
  "#refaen_dc_chenqun2": "律令如铁，亦有可商榷之处。",
  "#dc_chenqun:die": "吾身虽亡，然吾志当遗百年……",
  "#rekuangbi1": "江东多娇，士当弼国以全方圆。",
  "#rekuangbi2": "吴垒锦绣，卿当匡佐使延万年。",
  "#re_sundeng:die": "此别无期，此恨绵绵……",
  "#rebizhuan1": "笔书石碑，以助群儒正道。",
  "#rebizhuan2": "正定六经，是为天下之法。",
  "#retongbo1": "博览诗书，通古圣之学。",
  "#retongbo2": "通读经典，悟群贤之道。",
  "#re_caiyong:die": "乞受刑罚，以求继承汉史？",
  "#remingce1": "阁下若纳此谋，则大业可成也！",
  "#remingce2": "形势如此，将军可按计行事。",
  "#zhichi_re_chengong1": "不若先行退避，再做打算。",
  "#zhichi_re_chengong2": "敌势汹汹，不宜与其交锋。",
  "#re_chengong:die": "一步迟，步步迟啊！",
  "#reqice1": "攸已有妙计在胸，此事不足为虑。",
  "#reqice2": "主公勿虑，攸有奇策，可解此局。",
  "#rezhiyu1": "经达权变，大智若愚。",
  "#rezhiyu2": "微末伎俩，让阁下见笑了。",
  "#re_xunyou:die": "再不能替主公出谋了……",
  "#juece_dc_liru1": "乏谋少计，别做无谓挣扎了！",
  "#juece_dc_liru2": "缺兵少粮，看你还能如何应对？",
  "#dcmieji1": "欲成大事，当弃则弃，怎可优柔寡断？",
  "#dcmieji2": "所谓智斗，便是以兑子入局取势，而后成杀。",
  "#dcfencheng1": "堆薪聚垛，以燃焚天之焰！",
  "#dcfencheng2": "就让这熊熊烈焰，为尔等送葬！",
  "#dc_liru:die": "多行不义，必自毙……",
  "#refenli1": "兵威已振，怎能踟蹰不前？",
  "#refenli2": "敌势汹汹，自当奋勇以对。",
  "#repingkou1": "群寇蜂起，以军平之。",
  "#repingkou2": "所到之处，寇患皆平。",
  "#re_zhuhuan:die": "憾老死病榻，恨未马革裹尸……",
  "#qiangxi_ol_dianwei1": "典韦来也，谁敢一战。",
  "#qiangxi_ol_dianwei2": "双戟青罡，百死无生！",
  "#olninge1": "古之恶来，今之典韦！",
  "#olninge2": "宁为刀俎，不为鱼肉。",
  "#ol_dianwei:die": "为将者，怎可徒手而亡？",
  "#rejixu1": "辨坚识钝，可解充栋之牛！",
  "#rejixu2": "以锐欺虚，可击泰山之踵！",
  "#re_sp_taishici:die": "危而不救为怯，救而不得为庸……",
  "#xiansi_re_liufeng1": "此皆孟达之过也！",
  "#xiansi_re_liufeng2": "非我不救，实乃孟达谗言。",
  "#re_liufeng:die": "父亲，儿实无异心……",
  "#quhu_ol_xunyu1": "两虎相斗，旁观成败。",
  "#quhu_ol_xunyu2": "驱兽相争，坐收渔利。",
  "#oljieming1": "含气在胸，有进无退。",
  "#oljieming2": "蕴节于形，生死无惧。",
  "#ol_xunyu:die": "一招不慎，为虎所噬……",
  "#rezhanjue1": "千里锦绣江山，岂能拱手相让！",
  "#rezhanjue2": "先帝一生心血，安可坐以待毙！",
  "#reqinwang1": "大江潮来，怎无忠勇之士？",
  "#reqinwang2": "泰山倾崩，可有坚贞之臣？",
  "#re_liuchen:die": "儿欲死战，父亲何故先降？",
  "#dcyicong1": "恩义聚骠骑，百战从公孙！",
  "#dcyicong2": "义从呼啸至，白马抖精神！",
  "#dcqiaomeng1": "猛士骁锐，可慑百蛮失蹄！",
  "#dcqiaomeng2": "锐士志猛，可凭白手夺马！",
  "#dc_gongsunzan:die": "良弓断，白马亡……",
  "#reandong1": "青龙映木，星出其东则天下安。",
  "#reandong2": "以身涉险，剑伐不臣而定河东。",
  "#reyingshi1": "大势如潮，可应之而不可逆之。",
  "#reyingshi2": "应大势伐贼者，当以重酬彰之。",
  "#re_duji:die": "公无渡河，公竟渡河……",
  "#dcjianying1": "步步为营，缓缓而进。",
  "#dcjianying2": "以强击弱，何必心急？",
  "#dcshibei1": "宁向北而死，不面南而生。",
  "#dcshibei2": "主公在北，吾心亦在北！",
  "#re_jushou:die": "身处河南，魂归河北……",
  "#reqiaobian1": "顺势而变，则胜矣。",
  "#reqiaobian2": "万物变化，固无休息。",
  "#re_zhanghe:die": "何处之流矢……",
  "#rezhuhai1": "霜刃出鞘，诛恶方还。",
  "#rezhuhai2": "心有不平，拔剑相向。",
  "#xsqianxin1": "弃剑执笔，修习韬略。",
  "#xsqianxin2": "休武兴文，专研筹划。",
  "#dc_xushu:die": "忠孝之德，庶两者皆空……",
  "#decadexianzhen1": "精练整齐，每战必克！",
  "#decadexianzhen2": "陷阵杀敌，好不爽快！",
  "#decadejinjiu1": "好酒之徒，难堪大任，不入我营！",
  "#decadejinjiu2": "饮酒误事，必当严禁！",
  "#xin_gaoshun:die": "力尽于布，与之偕死……",
  "#rejiaozhao1": "事关社稷，万望阁下谨慎行事。",
  "#rejiaozhao2": "为续江山，还请爱卿仔细观之。",
  "#redanxin1": "殚精出谋，以保社稷。",
  "#redanxin2": "竭心筹划，求续魏统。",
  "#re_guohuanghou:die": "哀家愧对先帝……",
  "#reqiaoshi1": "暖风细雨，心有灵犀。",
  "#reqiaoshi2": "樵采城郭外，忽见郎君来。",
  "#reyanyu1": "边功未成，还请郎君努力。",
  "#reyanyu2": "郎君有意倾心诉，妾身心中相思埋。",
  "#re_xiahoushi:die": "天气渐寒，郎君如今安在？",
  "#olhaoshi1": "仗义疏财，深得人心。",
  "#olhaoshi2": "招聚少年，给其衣食。",
  "#oldimeng1": "深知其奇，相与亲结。",
  "#oldimeng2": "同盟之人，言归于好。",
  "#ol_lusu:die": "一生为国，纵死无憾……",
  "#wansha_re_jiaxu1": "有谁敢试试？",
  "#wansha_re_jiaxu2": "斩草务尽，以绝后患。",
  "#luanwu_re_jiaxu1": "一切都在我的掌控中！",
  "#luanwu_re_jiaxu2": "这乱世还不够乱！",
  "#reweimu1": "此伤与我无关。",
  "#reweimu2": "还是另寻他法吧。",
  "#re_jiaxu:die": "此劫，我亦有所算……",
  "#reshenxing1": "谋而后动，行不容差。",
  "#reshenxing2": "谋略之道，需慎之又慎。",
  "#rebingyi1": "秉持心性，心口如一。",
  "#rebingyi2": "秉忠职守，一生不事二主。",
  "#re_guyong:die": "君不可不慎呐……",
  "#xinquanji1": "操权弄略，舍小利而谋大局。",
  "#xinquanji2": "大丈夫行事，岂较一兵一将之得失？",
  "#xinzili1": "烧去剑阁八百里，蜀中自有一片天！",
  "#xinzili2": "天下风流出我辈，一遇风云便化龙。",
  "#xin_zhonghui:die": "这就是……自食恶果的下场吗？",
  "#reqieting1": "谋略未定，窃听以察先机。",
  "#reqieting2": "所见相同，何必畏我？",
  "#rexianzhou1": "举州请降，高枕无忧。",
  "#rexianzhou2": "州固可贵，然不及我儿安危。",
  "#re_caifuren:die": "枉费妾身机关算尽……",
  "#relongyin1": "风云将起，龙虎齐鸣！",
  "#relongyin2": "武圣龙威，破敌无惧！",
  "#jiezhong1": "犯我疆土者，竭忠尽节以灭之。",
  "#jiezhong2": "竭力尽能以立功于国，忠心不二。",
  "#re_guanping:die": "黄泉路远，儿愿为父亲牵马执鞭……",
  "#rejigong1": "此时不战，更待何时！",
  "#rejigong2": "箭在弦上，不得不发！",
  "#shifei_re_guotufengji1": "若依吾计而行，许昌旦夕可破！",
  "#shifei_re_guotufengji2": "先锋怯战，非谋策之过。",
  "#re_guotufengji:die": "主公，我还有一计啊！",
  "#rezhongyong1": "赤兔北奔，马踏鼠胆之辈！",
  "#rezhongyong2": "青龙夜照，刀斩悖主之贼！",
  "#re_zhoucang:die": "愿随将军赴死！",
  "#juxiang1_ol_zhurong1": "巨象冲锋，踏平敌阵！",
  "#juxiang1_ol_zhurong2": "南兵象阵，刀枪不入！",
  "#lieren_ol_zhurong1": "烈火飞刃，例无虚发！",
  "#lieren_ol_zhurong2": "烈刃一出，谁与争锋？",
  "#changbiao1": "长标如虹，以伐蜀汉！",
  "#changbiao2": "长标在此，谁敢拦我？",
  "#ol_zhurong:die": "这汉人，竟……如此厉害……",
  "#rejueqing1": "不知情之所起，亦不知情之所终。",
  "#rejueqing2": "唯有情字最伤人！",
  "#reshangshi1": "半生韶华随流水，思君不见撷落花。",
  "#reshangshi2": "西风知我意，送我三尺秋。",
  "#re_zhangchunhua:die": "仲达负我！",
  "#rehuaiyi1": "曹刘可王，孤亦可王！",
  "#rehuaiyi2": "汉失其鹿，天下豪杰当共逐之。",
  "#re_gongsunyuan:die": "大星落，君王死……",
  "#residi1": "总算困住你了！",
  "#residi2": "你出得了手吗？",
  "#re_caozhen:die": "未竟之业，请你们务必继续！",
  "#rezhuikong1": "曹贼！你怎可如此不尊汉室！",
  "#rezhuikong2": "密信之事，不可被曹贼知晓。",
  "#reqiuyuan1": "陛下，我不想离开。",
  "#reqiuyuan2": "将军此事，可有希望。",
  "#re_fuhuanghou:die": "这幽禁之地，好冷……",
  "#reenyuan1": "善因得善果，恶因得恶报！",
  "#reenyuan2": "私我者赠之琼瑶，厌我者报之斧钺！",
  "#rexuanhuo1": "光以眩目，言以惑人。",
  "#rexuanhuo2": "我法孝直如何会害你？",
  "#re_fazheng:die": "恨未得见吾主，君临天下……",
  "#xuanfeng_xin_lingtong1": "风动扬帆起，枪出敌军溃！",
  "#xuanfeng_xin_lingtong2": "御风而动，敌军四散！",
  "#yongjin_xin_lingtong1": "鏖兵卫主，勇足以却敌！",
  "#yongjin_xin_lingtong2": "勇不可挡，进则无退！",
  "#xin_lingtong:die": "风萧而力去，风残……而力尽……",
  "#decadezishou1": "恩威并著，从容自保！",
  "#decadezishou2": "据有荆州，以观世事！",
  "#decadezongshi1": "汉室江山，气数未尽！",
  "#decadezongshi2": "我刘氏一族，皆海内之俊杰也！",
  "#xin_liubiao:die": "人心不古！",
  "#reqingxi1": "虎豹骑倾巢而动，安有不胜之理？",
  "#reqingxi2": "任尔等固若金汤，虎豹骑可破之！",
  "#re_caoxiu:die": "奈何痈发背薨！",
  "#reyanzhu1": "觥筹交错，杀人于无形！",
  "#reyanzhu2": "子烈设宴，意在汝项上人头！",
  "#rexingxue1": "案古置学官，以敦王化，以隆风俗。",
  "#rexingxue2": "志善好学，未来可期！",
  "#re_sunxiu:die": "盛世未成，实为憾事！",
  "#oltuntian1": "兵农一体，以屯养战。",
  "#oltuntian2": "垦田南山，志在西川。",
  "#olzaoxian1": "良田厚土，足平蜀道之难！",
  "#olzaoxian2": "效仿五丁开川，赢粮直捣黄龙！",
  "#ol_dengai:die": "钟会！你为何害我！",
  "#qiaomeng1": "秣马厉兵，枕戈待战。",
  "#qiaomeng2": "夺敌辎重，以为己用。",
  "#reyicong1": "变阵冲轭，以守代攻。",
  "#reyicong2": "列阵锋矢，直取要害。",
  "#re_gongsunzan:die": "皇图霸业梦，付之，一炬中……",
  "#rejunxing1": "严法尚公，岂分贵贱而异施？",
  "#rejunxing2": "情理可容之事，法未必能容！",
  "#yuce_re_manchong1": "骄之以利，示之以慑！",
  "#yuce_re_manchong2": "虽举得于外，则福生于内矣。",
  "#re_manchong:die": "宠一生为公，无愧忠俭之节……",
  "#zhiyan_xin_yufan1": "此事，臣有一言要讲。",
  "#zhiyan_xin_yufan2": "还望将军听我一言。",
  "#xinzongxuan1": "天命所定，乃天数之法。",
  "#xinzongxuan2": "因果循坏，已有定数。",
  "#xin_yufan:die": "若听谏言，何至如此……",
  "#dcanxu1": "温言呢喃，消君之愁。",
  "#dcanxu2": "吴侬软语，以解君忧。",
  "#dczhuiyi1": "别后庭中树，相思几度攀。",
  "#dczhuiyi2": "空馀宫阙恨，因此寄相思。",
  "#dc_bulianshi:die": "还请至尊多保重……",
  "#reshenduan1": "行军断策需慎之又慎！",
  "#reshenduan2": "为将者务当慎行谨断！",
  "#reyonglve1": "兵势勇健，战胜攻取，无不如志！",
  "#reyonglve2": "雄才大略，举无遗策，威震四海！",
  "#re_hanhaoshihuan:die": "末将愧对主公知遇之恩！",
  "#reduodao1": "宝刀配英雄，此刀志在必得！",
  "#reduodao2": "你根本不会用刀！",
  "#reanjian1": "暗箭中人，其疮及骨！",
  "#reanjian2": "战阵之间，不厌诈伪！",
  "#re_panzhangmazhong:die": "不知黄雀在其傍！",
  "#zhenlie_re_wangyi1": "女子，亦可有坚贞气节！",
  "#zhenlie_re_wangyi2": "品德端正，心中不移。",
  "#miji_re_wangyi1": "秘计已成，定助夫君得胜。",
  "#miji_re_wangyi2": "秘计在此，将军必凯旋而归。",
  "#re_wangyi:die": "秘计不成，此城难守……",
  "#reqianxi1": "暗影深处，袭敌斩首！",
  "#reqianxi2": "哼，出不了牌了吧？",
  "#re_madai:die": "丞相临终使命，岱已达成……",
  "#decadepojun1": "奋身出命，为国建功！",
  "#decadepojun2": "披甲持戟，先登陷陈！",
  "#xin_xusheng:die": "文向已无憾矣！",
  "#tianyi_re_taishici1": "天降大任，速战解围！",
  "#tianyi_re_taishici2": "义不从之，天必不佑！",
  "#hanzhan1": "伯符，且与我一战！",
  "#hanzhan2": "与君酣战，快哉快哉！",
  "#re_taishici:die": "无妄之灾，难以避免……",
  "#resanyao1": "蜚短流长，以基所毁，敌军自溃。",
  "#resanyao2": "群言谣混，积是成非！",
  "#zhiman_re_masu1": "断其粮草，不战而胜！",
  "#zhiman_re_masu2": "用兵之道，攻心为上！",
  "#re_masu:die": "谡虽死无恨于黄壤也……",
  "#rechanhui1": "萋兮斐兮，谋欲谮人！",
  "#rechanhui2": "稍稍谮毁，万劫不复！",
  "#rejiaojin1": "凭汝之力，何不自鉴？",
  "#rejiaojin2": "万金之躯，岂容狎侮！",
  "#re_sunluban:die": "谁敢动哀家一根寒毛！",
  "#xingongji1": "马踏飞箭，弓骑无双！",
  "#xingongji2": "提弓上马，箭砺八方！",
  "#xinjiefan1": "烦忧千万，且看我一刀解之。",
  "#xinjiefan2": "莫道雄兵属北地，解烦威名天下扬。",
  "#xin_handang:die": "三石雕弓今尤在，不见当年挽弓人……",
  "#decadezhenjun1": "奉令无犯，当敌制决！",
  "#decadezhenjun2": "质中性一，守执节义，自当无坚不陷。",
  "#yujin_yujin:die": "如今临危处难，却负丞相三十年之赏识，唉……",
  "#xinjiangchi1": "率师而行，所向皆破！",
  "#xinjiangchi2": "数从征伐，志意慷慨，不避险阻！",
  "#re_caozhang:die": "奈何病薨！",
  "#lihuo_re_chengpu1": "叛军者，非烈火灼身难泄吾恨。",
  "#lihuo_re_chengpu2": "投敌于火，烧炙其身，皮焦肉烂！",
  "#rechunlao1": "醉里披甲执坚，梦中杀敌破阵。",
  "#rechunlao2": "醇醪须与明君饮，沙场无还亦不悔。",
  "#re_chengpu:die": "病疠缠身，终天命难违……",
  "#xinyaoming1": "养威持重，不营小利。",
  "#xinyaoming2": "则天而行，作功邀名。",
  "#re_quancong:die": "邀名射利，内伤骨体，外乏筋肉。",
  "#dangxian_re_liaohua1": "竭诚当先，一举克定！",
  "#dangxian_re_liaohua2": "一马当先，奋勇杀敌！",
  "#xinfuli1": "匡扶汉室，死而后已！",
  "#xinfuli2": "一息尚存，不忘君恩！",
  "#re_liaohua:die": "汉室，气数已尽……",
  "#decadejingce1": "精细入微，策敌制胜。",
  "#decadejingce2": "妙策如神，精兵强将，安有不胜之理？",
  "#re_guohuai:die": "岂料姜维……空手接箭！",
  "#xinbenxi1": "北伐曹魏，以弱制强！",
  "#xinbenxi2": "引军汉中，以御敌袭！",
  "#re_wuyi:die": "终有疲惫之时！休矣！",
  "#xindanshou1": "胆识过人而劲勇，则见敌无所畏惧！",
  "#xindanshou2": "胆守有余，可堪大任！",
  "#re_zhuran:die": "义封一生不负国家！",
  "#xinlianhuan_ol_pangtong1": "连环之策，攻敌之计。",
  "#xinlianhuan_ol_pangtong2": "锁链连舟，困步难行。",
  "#olniepan1": "烈火脱胎，涅槃重生。",
  "#olniepan2": "破而后立，方有大成。",
  "#ol_pangtong:die": "骥飞羽落，坡道归尘……",
  "#rewurong1": "策略以入算，果烈以立威！",
  "#rewurong2": "诈与和亲，不攻可得！",
  "#reshizhi1": "护汉成勋业，矢志报国恩。",
  "#reshizhi2": "怀精忠之志，坦赤诚之心。",
  "#re_zhangyi:die": "挥师未捷，杀身以报！",
  "#xinganlu1": "纳采问名，而后交换文定。",
  "#xinganlu2": "兵戈相向，何如化戈为帛？",
  "#xinbuyi1": "有老身在，阁下勿忧。",
  "#xinbuyi2": "如此佳婿，谁敢伤之？",
  "#xin_wuguotai:die": "爱女已去，老身何存？",
  "#rejianxiong1": "燕雀，安知鸿鹄之志！",
  "#rejianxiong2": "夫英雄者，胸怀大志，腹有良谋！",
  "#hujia_re_caocao1": "大胆逆贼，谁可擒之！",
  "#hujia_re_caocao2": "护卫何在！",
  "#re_caocao:die": "华佗何在？……",
  "#refankui1": "哼，自作孽不可活！",
  "#refankui2": "哼，正中下怀！",
  "#reguicai1": "天命难违？哈哈哈哈哈……",
  "#reguicai2": "才通天地，逆天改命！",
  "#re_simayi:die": "我的气数，就到这里了么？",
  "#tiandu_re_guojia1": "天意如此。",
  "#tiandu_re_guojia2": "那，就这样吧。",
  "#reyiji1": "锦囊妙策，终定社稷。",
  "#reyiji2": "依此计行，辽东可定。",
  "#re_guojia:die": "咳，咳咳咳……",
  "#retuxi1": "快马突袭，占尽先机！",
  "#retuxi2": "马似飞影，枪如霹雳！",
  "#re_zhangliao:die": "被敌人占了先机……呃……",
  "#reluoyi1": "过来打一架，对，就是你！",
  "#reluoyi2": "废话少说，放马过来吧！",
  "#re_xuzhu:die": "丞相，末将尽力了……",
  "#reganglie1": "伤我者，十倍奉还！",
  "#reganglie2": "哪个敢动我！",
  "#qingjian1": "钱财，乃身外之物。",
  "#qingjian2": "福生于清俭，德生于卑退。",
  "#re_xiahoudun:die": "诸多败绩，有负丞相重托……",
  "#paoxiao_re_zhangfei1": "喝啊！",
  "#paoxiao_re_zhangfei2": "今，必斩汝马下！",
  "#retishen1": "谁，还敢过来一战？！",
  "#retishen2": "欺我无谋？定要尔等血偿！",
  "#re_zhangfei:die": "桃园一拜，此生……无憾……",
  "#longdan_sha_re_zhaoyun1": "龙威虎胆，斩敌破阵！",
  "#longdan_sha_re_zhaoyun2": "进退自如，游刃有余！",
  "#reyajiao1": "策马驱前，斩敌当先！",
  "#reyajiao2": "遍寻天下，但求一败！",
  "#re_zhaoyun:die": "你们谁……还敢再上……",
  "#wusheng_re_guanyu1": "刀锋所向，战无不克！",
  "#wusheng_re_guanyu2": "逆贼，哪里走！",
  "#yijue1": "恩已断，义当绝！",
  "#yijue2": "关某，向来恩怨分明！",
  "#re_guanyu:die": "桃园一拜，恩义常在……",
  "#retieji1": "目标敌阵，全军突击！",
  "#retieji2": "敌人阵型已乱，随我杀！",
  "#re_machao:die": "请将我，葬在西凉……",
  "#reyingzi1": "哈哈哈哈哈哈哈哈……！",
  "#reyingzi2": "伯符，且看我这一手！",
  "#refanjian1": "与我为敌，就当这般生不如死！",
  "#refanjian2": "抉择吧！在苦与痛的地狱中！",
  "#re_zhouyu:die": "既生瑜，何生亮！……既生瑜，何生亮……！",
  "#keji_re_lvmeng1": "蓄力待时，不争首功。",
  "#keji_re_lvmeng2": "最好的机会，还在等着我。",
  "#qinxue1": "勤以修身，学以报国。",
  "#qinxue2": "兵书熟读，了然于胸。",
  "#botu1": "今日起兵，渡江攻敌！",
  "#botu2": "时机已到，全军出击！",
  "#re_lvmeng:die": "你，给我等着！",
  "#qixi_re_ganning1": "弟兄们，准备动手！",
  "#qixi_re_ganning2": "你用不了这么多了！",
  "#fenwei1": "哼！敢欺我东吴无人。",
  "#fenwei2": "奋勇当先，威名远扬！",
  "#re_ganning:die": "别管我，继续上！",
  "#reqianxun1": "满招损，谦受益。",
  "#reqianxun2": "谦谦君子，温润如玉。",
  "#relianying1": "生生不息，源源不绝。",
  "#relianying2": "失之淡然，得之坦然。",
  "#re_luxun:die": "我的未竟之业……",
  "#reguose1": "旅途劳顿，请下马休整吧~",
  "#reguose2": "还没到休息的时候！",
  "#liuli_re_daqiao1": "伯符不在身边，我要自己保重！",
  "#liuli_re_daqiao2": "帮帮人家嘛~",
  "#re_daqiao:die": "伯符，再也没人能欺负我了……",
  "#rekurou1": "我这把老骨头，不算什么！",
  "#rekurou2": "为成大义，死不足惜！",
  "#zhaxiang1": "铁锁连舟而行，东吴水师可破！",
  "#zhaxiang2": "两军阵前，不斩降将！",
  "#re_huanggai:die": "盖，有负公瑾重托……",
  "#wushuang_re_lvbu1": "三个齐上，也不是我的对手！",
  "#wushuang_re_lvbu2": "还有哪个敢挑战我！？",
  "#liyu1": "人不为己，天诛地灭。",
  "#liyu2": "大丈夫，相时而动。",
  "#re_lvbu:die": "我竟然输了……不可能！",
  "#jijiu_re_huatuo1": "妙手仁心，药到病除。",
  "#jijiu_re_huatuo2": "救死扶伤，悬壶济世。",
  "#new_reqingnang1": "舒活筋络，方解病痛之苦。",
  "#new_reqingnang2": "悬丝诊脉，顽疾可医。",
  "#re_huatuo:die": "生老病死，命不可违……",
  "#rerende1": "施仁布泽，乃我大汉立国之本！",
  "#rerende2": "同心同德，救困扶危！",
  "#jijiang1_re_liubei1": "哪位将军，替我拿下此贼！",
  "#jijiang1_re_liubei2": "欺我军无人乎？！",
  "#re_liubei:die": "汉室未兴，祖宗未耀，朕实不忍此时西去……",
  "#lijian_re_diaochan1": "赢家，才能得到我~",
  "#lijian_re_diaochan2": "这场比赛，将军可要赢哦~",
  "#rebiyue1": "梦蝶幻月，如沫虚妄。",
  "#rebiyue2": "水映月明，芙蓉照倩影。",
  "#re_diaochan:die": "我的任务，终于完成了……",
  "#rejizhi1": "得上通，智集心。",
  "#rejizhi2": "集万千才智，致巧趣鲜用。",
  "#re_huangyueying:die": "我的面容，有吓到你吗？",
  "#rezhiheng1": "制衡互牵，大局可安。",
  "#rezhiheng2": "不急不躁，稳谋应对。",
  "#rejiuyuan1": "你们真是朕的得力干将。",
  "#rejiuyuan2": "有爱卿在，朕无烦忧。",
  "#re_sunquan:die": "锦绣江东，岂能失于我手……",
  "#xiaoji_re_sunshangxiang1": "剑利弓急，你可打不过我的。",
  "#xiaoji_re_sunshangxiang2": "我会的武器，可多着呢。",
  "#rejieyin1": "得遇夫君，妾身福分。",
  "#rejieyin2": "随夫嫁娶，宜室宜家。",
  "#re_sunshangxiang:die": "哎呀，这次弓箭射歪了。",
  "#reluoshen1": "屏翳收风，川后静波。",
  "#reluoshen2": "冯夷鸣鼓，女娲清歌。",
  "#reqingguo1": "肩若削成，腰如约素。",
  "#reqingguo2": "延颈秀项，皓质呈露。",
  "#re_zhenji:die": "出亦复何苦，入亦复何愁……",
  "#guanxing_re_zhugeliang1": "天星之变，吾窥探一二。",
  "#guanxing_re_zhugeliang2": "星途莫测，细细推敲。",
  "#kongcheng1_re_zhugeliang1": "淡然相对，转危为安。",
  "#kongcheng1_re_zhugeliang2": "绝处逢生，此招慎用。",
  "#re_zhugeliang:die": "穷尽毕生，有憾无悔……",
  "#new_reyaowu1": "有吾在此，解太师烦忧。",
  "#new_reyaowu2": "这些杂兵，我有何惧！",
  "#shizhan1": "看你能坚持几个回合！",
  "#shizhan2": "兀那汉子，且报上名来！",
  "#re_huaxiong:die": "我掉以轻心了……",
  "#xinleiji1": "疾雷迅电，不可趋避！",
  "#xinleiji2": "雷霆之诛，灭军毁城！",
  "#xinguidao1": "汝之命运，吾来改之！",
  "#xinguidao2": "鬼道运行，由我把控！",
  "#xinhuangtian2_re_zhangjiao1": "天书庇佑，黄巾可兴！",
  "#xinhuangtian2_re_zhangjiao2": "黄天法力，万军可灭！",
  "#re_zhangjiao:die": "天书无效，人心难聚……",
  "#reguhuo1": "这牌，猜对了吗？",
  "#reguhuo2": "真真假假，虚实难测。",
  "#xin_yuji:die": "符水失效，此病难医……",
  "#rehuashen1": "容貌发肤，不过浮尘。",
  "#rehuashen2": "皮囊万千，吾皆可化。",
  "#rexinsheng1": "枯木发荣，朽木逢春。",
  "#rexinsheng2": "风靡云涌，万丈光芒。",
  "#re_zuoci:die": "红尘看破，驾鹤仙升……",
  "#shensu1_ol_xiahouyuan1": "健步如飞，破敌不备！",
  "#shensu1_ol_xiahouyuan2": "奔逸绝尘，不留踪影！",
  "#shebian1": "随机应变，临机设变！",
  "#shebian2": "设变力战，虏敌千万！",
  "#ol_xiahouyuan:die": "我的速度，还是不够……",
  "#xinjushou1": "兵精粮足，守土一方。",
  "#xinjushou2": "坚守此地，不退半步。",
  "#xinjiewei1": "化守为攻，出奇制胜！",
  "#xinjiewei2": "坚壁清野，以挫敌锐！",
  "#caoren:die": "长江以南，再无王土矣……",
  "#kuanggu_ol_weiyan1": "反骨狂傲，彰显本色！",
  "#kuanggu_ol_weiyan2": "只有战场，能让我感到兴奋！",
  "#reqimou1": "勇战不如奇谋。",
  "#reqimou2": "为了胜利，可以出其不意！",
  "#ol_weiyan:die": "这次失败，意料之中……",
  "#tianxiang_ol_xiaoqiao1": "你岂会懂我的美丽？",
  "#tianxiang_ol_xiaoqiao2": "碧玉闺秀，只可远观。",
  "#rehongyan1": "红颜娇花好，折花门前盼。",
  "#rehongyan2": "我的容貌，让你心动了吗？",
  "#piaoling1": "清风拂枝，落花飘零。",
  "#piaoling2": "花自飘零水自流。",
  "#ol_xiaoqiao:die": "同心而离居，忧伤以终老……",
  "#zhoutai:die": "敌众我寡，无力回天……",
  "#rejianchu1": "你这身躯，怎么能快过我？",
  "#rejianchu2": "这些怎么能挡住我的威力！",
  "#ol_pangde:die": "人亡马倒，命之所归……",
  "#olduanliang1": "兵行无常，计行断粮。",
  "#olduanliang2": "焚其粮营，断其粮道。",
  "#oljiezi1": "剪径截辎，馈泽同袍。",
  "#oljiezi2": "截敌粮草，以资袍泽。",
  "#ol_xuhuang:die": "亚夫易老，李广难封……",
  "#bazhen_ol_sp_zhugeliang1": "八阵连心，日月同辉。",
  "#bazhen_ol_sp_zhugeliang2": "此阵变化，岂是汝等可解？",
  "#rehuoji_ol_sp_zhugeliang1": "东风，让这火烧得再猛烈些吧！",
  "#rehuoji_ol_sp_zhugeliang2": "赤壁借东风，燃火灭魏军。",
  "#rekanpo_ol_sp_zhugeliang1": "还有什么是我看不破的？",
  "#rekanpo_ol_sp_zhugeliang2": "此计奥妙，我已看破。",
  "#cangzhuo1": "藏巧于拙，用晦而明。",
  "#cangzhuo2": "寓清于浊，以屈为伸。",
  "#ol_sp_zhugeliang:die": "星途半废，夙愿未完……",
  "#olshuangxiong1": "吾执矛，君执槊，此天下可有挡我者？",
  "#olshuangxiong2": "兄弟协力，定可于乱世纵横！",
  "#ol_yanwen:die": "双雄皆陨，徒隆武圣之名……",
  "#olluanji1": "我的箭支，准备颇多！",
  "#olluanji2": "谁都挡不住，我的箭阵！",
  "#olxueyi1": "高贵名门，族裔盛名。",
  "#olxueyi2": "贵裔之脉，后起之秀！",
  "#ol_yuanshao:die": "孟德此计，防不胜防……",
  "#huoshou1_re_menghuo1": "啸据哀牢，闻祸而喜！",
  "#huoshou1_re_menghuo2": "坐据三山，蛮霸四野！",
  "#rezaiqi1": "挫而弥坚，战而弥勇！",
  "#rezaiqi2": "蛮人骨硬，其势复来！",
  "#re_menghuo:die": "勿再放我，但求速死！",
  "#oljiuchi1": "好酒，痛快！",
  "#oljiuchi2": "某，千杯不醉！",
  "#roulin_ol_dongzhuo1": "醇酒美人，幸甚乐甚！",
  "#roulin_ol_dongzhuo2": "这些美人，都可进贡。",
  "#benghuai_ol_dongzhuo1": "何人伤我？",
  "#benghuai_ol_dongzhuo2": "酒色伤身呐……",
  "#olbaonue1": "天下群雄，唯我独尊！",
  "#olbaonue2": "吾乃人屠，当以兵为贡。",
  "#ol_dongzhuo:die": "地府……可有美人乎？",
  "#wulie1": "孙武之后，英烈勇战。",
  "#wulie2": "兴义之中，忠烈之名。",
  "#ol_sunjian:die": "袁术之辈，不可共谋！",
  "#rexingshang1": "群燕辞归鹄南翔，念君客游思断肠。",
  "#rexingshang2": "霜露纷兮文下，木叶落兮凄凄。",
  "#refangzhu1": "国法不可废耳，汝先退去。",
  "#refangzhu2": "将军征战辛苦，孤当赠以良宅。",
  "#songwei2_re_caopi1": "藩屏大宗，御侮厌难！",
  "#songwei2_re_caopi2": "朕，承符运，终受革命！",
  "#re_caopi:die": "建平所言八十，谓昼夜也，吾其决矣……",
  "#tiaoxin_ol_jiangwei1": "会闻用师，观衅而动。",
  "#tiaoxin_ol_jiangwei2": "宜乘其衅会，以挑敌将。",
  "#olzhiji1": "丞相遗志，不死不休！",
  "#olzhiji2": "大业未成，矢志不渝！",
  "#ol_jiangwei:die": "星散流离……",
  "#beige_ol_caiwenji1": "箜篌鸣九霄，闻者心俱伤。",
  "#beige_ol_caiwenji2": " 琴弹十八拍，听此双泪流。",
  "#duanchang_ol_caiwenji1": "红颜留塞外，愁思欲断肠。",
  "#duanchang_ol_caiwenji2": "莫吟苦辛曲，此生谁忍闻。",
  "#ol_caiwenji:die": "飘飘外域里，何日能归乡？",
  "#xiangle_ol_liushan1": "嘿嘿嘿，还是玩耍快乐。",
  "#xiangle_ol_liushan2": "美好的日子，应该好好享受。",
  "#olfangquan1": "蜀汉有相父在，我可安心。",
  "#olfangquan2": "这些事情，你们安排就好。",
  "#olruoyu1": "若愚故泰，巧骗众人。",
  "#olruoyu2": "愚昧者，非真傻也。",
  "#ol_liushan:die": "将军英勇，我……我投降……",
  "#jiang_re_sunce1": "收合流散，东据吴会。",
  "#jiang_re_sunce2": "策虽暗稚，窃有微志。",
  "#olhunzi1": "江东新秀，由此崛起！",
  "#olhunzi2": "看汝等大展英气！",
  "#olzhiba1": "让将军在此恭候多时了。",
  "#olzhiba2": "有诸位将军在，此战岂会不胜？",
  "#re_sunce:die": "汝等，怎能受于吉蛊惑？",
  "#jyzongshi_re_jianyong1": "能断大事者，不拘小节。",
  "#jyzongshi_re_jianyong2": "闲暇自得，威仪不肃。",
  "#re_jianyong:die": "此景竟无言以对……",
  "#rexianzhen1": "陷阵之志，有死无生！",
  "#rexianzhen2": "攻则破城，战则克敌。",
  "#rejinjiu1": "耽此黄汤，岂不误事？",
  "#rejinjiu2": "陷阵营中，不可饮酒。",
  "#regongji1": "射石饮羽，弦无虚发！",
  "#regongji2": "驭马前行，弓急弦发！",
  "#repolu1": "斩敌复城，扬我江东军威！",
  "#jianyan1": "开言纳谏，社稷之福。",
  "#jianyan2": "如此如此，敌军自破！",
  "#wusheng_re_guanzhang1": "青龙驰骋，恍若汉寿再世。",
  "#wusheng_re_guanzhang2": "偃月幽光，恰如武圣冲阵。",
  "#paoxiao_re_guanzhang1": "桓侯之子，当效父之勇烈！",
  "#paoxiao_re_guanzhang2": "蛇矛在手，谁敢与我一战！",
  "#rejianyan1": "此人之才，胜吾十倍。",
  "#rejianyan2": "先生大才，请受此礼。",
  "#xinpaiyi1": "蜀川三千里，皆由我一言决之！",
  "#xinpaiyi2": "顺我者，封侯拜将；逆我者，斧钺加身！",
  "#jixi_ol_dengai1": "良田为济，神兵天降！",
  "#jixi_ol_dengai2": "明至剑阁，暗袭蜀都！",
  "#bazhen_ol_pangtong1": "八卦四象，阴阳运转。",
  "#bazhen_ol_pangtong2": "离火艮山，皆随我用。",
  "#rehuoji_ol_pangtong1": "火烧赤壁，曹贼必败。",
  "#rehuoji_ol_pangtong2": "火计诱敌，江水助势。",
  "#rekanpo_ol_pangtong1": "这些小伎俩，逃不出我的眼睛！",
  "#rekanpo_ol_pangtong2": "卧龙之才，吾也略懂。",
  "#gongxin_re_lvmeng1": "哼，早知如此。",
  "#gongxin_re_lvmeng2": "洞若观火，运筹帷幄。",
  "#rechanyuan1": "此咒甚重，怨念缠身。",
  "#rechanyuan2": "不信吾法，无福之缘。",
  "#guanxing_ol_jiangwei1": "星象相弦，此乃吉兆！",
  "#guanxing_ol_jiangwei2": "星之分野，各有所属。",
  "#jijiang1_ol_liushan1": "爱卿爱卿，快来护驾！",
  "#jijiang1_ol_liushan2": "将军快替我，拦下此贼！",
  "#sishu1": "蜀乐乡土，怎不思念？",
  "#sishu2": "思乡心切，徘徊惶惶。",
  "#reyingzi_re_sunce1": "得公瑾辅助，策必当一战！",
  "#reyingzi_re_sunce2": "公瑾在此，此战无忧！",
  "#yinghun_re_sunce1": "东吴繁盛，望父亲可知。",
  "#yinghun_re_sunce2": "父亲，吾定不负你期望！"
};
const characterSort = {
  refresh_standard: ["re_caocao", "re_simayi", "re_guojia", "re_zhangliao", "re_xuzhu", "re_xiahoudun", "re_zhangfei", "re_zhaoyun", "re_guanyu", "re_machao", "re_zhouyu", "re_lvmeng", "re_ganning", "re_luxun", "re_daqiao", "re_huanggai", "re_lvbu", "re_huatuo", "re_liubei", "re_diaochan", "re_huangyueying", "re_sunquan", "re_sunshangxiang", "re_zhenji", "re_zhugeliang", "re_huaxiong", "re_gongsunzan", "re_lidian", "re_xushu"],
  refresh_feng: ["caoren", "ol_xiahouyuan", "ol_weiyan", "ol_xiaoqiao", "zhoutai", "re_zhangjiao", "xin_yuji", "ol_huangzhong"],
  refresh_huo: ["ol_sp_zhugeliang", "ol_xunyu", "ol_dianwei", "ol_yanwen", "ol_pangtong", "ol_yuanshao", "ol_pangde", "re_taishici"],
  refresh_lin: ["re_menghuo", "ol_sunjian", "re_caopi", "ol_xuhuang", "ol_dongzhuo", "ol_zhurong", "re_jiaxu", "ol_lusu"],
  refresh_shan: ["ol_jiangwei", "ol_caiwenji", "ol_liushan", "ol_zhangzhang", "re_zuoci", "re_sunce", "ol_dengai", "re_zhanghe"],
  refresh_yijiang1: ["xin_wuguotai", "xin_gaoshun", "dc_caozhi", "yujin_yujin", "re_masu", "xin_xusheng", "re_fazheng", "xin_lingtong", "re_zhangchunhua", "dc_xushu", "re_chengong"],
  refresh_yijiang2: ["re_madai", "re_wangyi", "xin_handang", "xin_zhonghui", "re_liaohua", "re_chengpu", "re_caozhang", "dc_bulianshi", "xin_liubiao", "re_xunyou", "re_guanzhang"],
  refresh_yijiang3: ["re_jianyong", "re_guohuai", "re_zhuran", "re_panzhangmazhong", "xin_yufan", "dc_liru", "re_manchong", "re_fuhuanghou", "re_guanping", "re_liufeng", "re_caochong"],
  refresh_yijiang4: ["re_sunluban", "re_wuyi", "re_hanhaoshihuan", "re_caozhen", "re_zhoucang", "dc_chenqun", "re_caifuren", "re_guyong", "re_jushou", "re_zhuhuan", "re_zhangsong"],
  refresh_yijiang5: ["re_zhangyi", "re_quancong", "re_caoxiu", "re_sunxiu", "re_gongsunyuan", "re_guotufengji", "re_xiahoushi", "re_liuchen", "re_zhuzhi", "re_caorui", "re_zhongyao"],
  refresh_yijiang6: ["re_guohuanghou", "re_sundeng"],
  refresh_xinghuo: ["xin_zhangliang", "re_zhugedan", "re_simalang", "re_duji", "dc_gongsunzan", "re_sp_taishici", "re_caiyong", "re_mazhong", "re_wenpin", "re_jsp_huangyueying"]
};
const characterSortTranslate = {
  refresh_standard: "界限突破·标",
  refresh_feng: "界限突破·风",
  refresh_huo: "界限突破·火",
  refresh_lin: "界限突破·林",
  refresh_shan: "界限突破·山",
  refresh_yijiang1: "界限突破·将1",
  refresh_yijiang2: "界限突破·将2",
  refresh_yijiang3: "界限突破·将3",
  refresh_yijiang4: "界限突破·将4",
  refresh_yijiang5: "界限突破·将5",
  refresh_yijiang6: "界限突破·原6",
  refresh_xinghuo: "界限突破·星火"
};
game.import("character", function() {
  return {
    name: "refresh",
    connect: true,
    character: { ...characters },
    characterSort: {
      refresh: characterSort
    },
    characterFilter: { ...characterFilters },
    characterTitle: { ...characterTitles },
    dynamicTranslate: { ...dynamicTranslates },
    characterIntro: { ...characterIntro },
    card: { ...cards$1 },
    skill: { ...skills },
    perfectPair: { ...perfectPairs },
    translate: { ...translates, ...voices, ...characterSortTranslate },
    pinyins: { ...pinyins }
  };
});

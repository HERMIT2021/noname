import { get, lib, _status, ui, game } from "noname";
const characters = {
  std_huangwudie: {
    sex: "female",
    group: "shu",
    hp: 4,
    skills: ["stdshuangrui"]
  },
  std_qinghegongzhu: {
    sex: "female",
    group: "wei",
    hp: 3,
    skills: ["stdzengou", "stdfeili"],
    names: "曹|null"
  },
  std_quyi: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["stdfuqi", "stdjiaozi"]
  },
  std_wenyuan: {
    sex: "female",
    group: "shu",
    hp: 3,
    skills: ["stdkengqiang", "stdshangjue"]
  },
  std_xushao: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdyingmen", "stdpingjian"]
  },
  std_zhangxuan: {
    sex: "female",
    group: "wu",
    hp: 3,
    skills: ["stdtongli", "stdshezang"]
  },
  std_jushou: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdjianying", "stdshibei"]
  },
  std_simahui: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdjianjie", "stdchenghao"],
    names: "司马|徽"
  },
  std_zhengxuan: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdzhengjing"]
  },
  std_miheng: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdkuangcai", "stdshejian"]
  },
  std_majun: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["stdgongqiao"]
  },
  std_zhangfen: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["stdwanglu"]
  },
  std_zhaoyan: {
    sex: "female",
    group: "wu",
    hp: 3,
    skills: ["stdjinhui", "stdqingman"]
  },
  std_liuli: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["stdfuli", "stddehua"]
  },
  std_zhangyao: {
    sex: "female",
    group: "wu",
    hp: 3,
    skills: ["stdlianrong", "stdyuanzhuo"],
    names: "张|媱"
  },
  std_wangfuren: {
    sex: "female",
    group: "wu",
    hp: 3,
    skills: ["stdbizun", "stdhuangong"],
    names: "王|null"
  },
  std_panglin: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["stdzhuying", "stdzhongshi"]
  },
  std_huangchong: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["stdjuxian", "stdlijun"]
  },
  std_caoxiong: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["stdwuwei", "stdleiruo"]
  },
  std_maohuanghou: {
    sex: "female",
    group: "wei",
    hp: 3,
    skills: ["stddechong", "stdyinzu"],
    names: "毛|null"
  },
  std_zhengcong: {
    sex: "female",
    group: "qun",
    hp: 4,
    skills: ["stdqiyue", "stdjieji"]
  },
  std_jiangjie: {
    sex: "female",
    group: "qun",
    hp: 4,
    skills: ["stdfengzhan", "stdruixi"]
  },
  std_baoxin: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["stdyimou", "stdmutao"]
  },
  std_peixiu: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdzhitu"]
  },
  std_yangbiao: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdyizheng", "stdrangjie"],
    clans: ["弘农杨氏"]
  },
  std_huangfusong: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["stdtaoluan"],
    names: "皇甫|嵩"
  },
  std_zerong: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["stdcansi"]
  },
  std_pangdegong: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdlingjian", "stdmingshi"]
  },
  std_nanhualaoxian: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdxianlu", "stdtianshu"],
    name: "null|null"
  },
  std_tianfeng: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdgangjian", "stdguijie"]
  },
  std_liuxie: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdtianming", "stdmizhao", "stdzhongyan"],
    isZhugong: true
  },
  std_simazhao: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["stdzhaoxin"],
    names: "司马|昭"
  },
  std_guozhao: {
    sex: "female",
    group: "wei",
    hp: 3,
    skills: ["stdwufei", "stdjiaochong"]
  },
  std_jiakui: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["stdzhongzuo", "stdwanlan"]
  },
  std_yufan: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["stdzongxuan", "stdzhiyan"]
  },
  std_zhugeke: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["stdaocai", "stdduwu"],
    names: "诸葛|恪"
  },
  std_mengda: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["stdzhuan"]
  },
  std_caozhen: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["stdsidi"]
  },
  std_dongyun: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["stdbingzheng", "stdduliang"]
  },
  std_baosanniang: {
    sex: "female",
    group: "shu",
    hp: 3,
    skills: ["stdzhennan", "stdshuyong"]
  },
  std_liuba: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["stdduanbi"]
  },
  std_kongrong: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdlirang"]
  },
  std_zoushi: {
    sex: "female",
    group: "qun",
    hp: 3,
    skills: ["stdhuoshui", "stdqingcheng"],
    names: "邹|null"
  },
  std_sunluyu: {
    sex: "female",
    group: "wu",
    hp: 3,
    skills: ["stdmumu", "stdmeibu"]
  },
  std_zhoufang: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["stdqijian", "stdyoudi"]
  },
  std_sunhao: {
    sex: "male",
    group: "wu",
    hp: 5,
    skills: ["stdcanshi", "chouhai", "guiming"],
    isZhugong: true
  },
  std_mateng: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["stdxiongyi", "mashu", "stdyouji"],
    isZhugong: true
  },
  std_mayunlu: {
    sex: "female",
    group: "shu",
    hp: 4,
    skills: ["stdfengpo", "mashu"]
  },
  std_jianggan: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["stddaoshu", "stddaizui"]
  },
  std_zhouchu: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["stdxiongxia"]
  },
  std_lvlingqi: {
    sex: "female",
    group: "qun",
    hp: 4,
    skills: ["stdhuiji"]
  },
  std_dc_yanghu: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["stdmingfa"],
    groupBorder: "jin"
  },
  std_dc_luotong: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["stdjinjian", "stdrenzheng"]
  },
  std_lijue: {
    sex: "male",
    group: "qun",
    hp: 5,
    skills: ["stdxiongsuan"]
  },
  std_chengpu: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["stdchunlao"]
  },
  std_db_wenyang: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["stdquedi"]
  },
  std_re_dengzhi: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["stdzhiyinmeng", "stdhehe"]
  },
  std_zhangyì: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["stdzhiyi"]
  },
  std_chengyu: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["stdshefu", "stdyibing"]
  },
  std_fanyufeng: {
    sex: "female",
    group: "qun",
    hp: 3,
    skills: ["stdbazhan", "stdzhanying"]
  },
  std_feiyi: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["stdtiaohe", "stdqiansu"]
  },
  std_guanxing: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["stdwuyou"]
  },
  std_fuhuanghou: {
    sex: "female",
    group: "qun",
    hp: 3,
    skills: ["stdqiuyuan", "stdzhuikong"]
  },
  std_liubiao: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdzishou", "zongshi", "stdjujin"],
    isZhugong: true
  },
  std_gongsunyuan: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["stdhuaiyi", "stdfengbai"],
    names: "公孙|渊",
    isZhugong: true
  },
  std_cenhun: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["stdjishe", "stdwudu"]
  },
  std_simashi: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["stdjinglve"],
    names: "司马|师",
    groupBorder: "jin"
  },
  std_sunshao: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["stddingyi", "stdzuici"]
  },
  std_jiangwan: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["stdruwu", "stdchengshi"]
  },
  std_maliang: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["stdxiemu", "stdnaman"]
  },
  old_shen_zhaoyun: {
    sex: "male",
    group: "shen",
    hp: 2,
    skills: ["oldjuejing", "oldlonghun"],
    groupInGuozhan: "shu"
  },
  std_xushu: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["stdwuyan", "stdjujian"],
    groupBorder: "wei"
  },
  std_xuezong: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["stdfunan", "stdjiexun"]
  },
  std_liuzhang: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdyinge", "stdshiren", "stdjuyi"],
    isZhugong: true
  },
  std_wangyuanji: {
    sex: "female",
    group: "wei",
    hp: 3,
    skills: ["stdqianchong", "stdshangjian"],
    groupBorder: "jin"
  },
  std_wanglang: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["stdgushe", "stdjici"]
  },
  std_zhonghui: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["stdxingfa"],
    clans: ["颍川钟氏"]
  },
  std_huaxin: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["stdyuanqing", "stdshuchen"]
  },
  std_zhangbao: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["stdjuezhu", "stdchengji"]
  },
  std_liuchen: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["stdzhanjue", "stdqinwang"],
    isZhugong: true
  },
  std_guansuo: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["stdzhengnan"]
  },
  std_xiahouba: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["stdbaobian"],
    names: "夏侯|霸"
  },
  std_caorui: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["stdhuituo", "stdmingjian", "xingshuai"],
    isZhugong: true
  },
  std_liuye: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["stdpolu", "stdchoulve"]
  },
  std_guohuanghou: {
    sex: "female",
    group: "wei",
    hp: 3,
    skills: ["stdjiaozhao", "stddanxin"],
    names: "郭|null"
  },
  std_lvfan: {
    sex: "male",
    group: "wu",
    hp: 3,
    skills: ["mbdiaodu", "stddianfeng"]
  },
  std_dingfeng: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["stdduanbing", "stdfenxun"]
  },
  std_sunluban: {
    sex: "female",
    group: "wu",
    hp: 3,
    skills: ["stdzenhui", "stdchuyi"]
  },
  std_liuzan: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["stdfenyin"]
  },
  std_sunyi: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["stdzaoli"]
  },
  std_taoqian: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["stdyirang"]
  },
  std_jiling: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["stdshuangdao"]
  },
  std_liru: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdmieji", "stdjuece"]
  },
  std_wangyun: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["stdyunji", "stdzongji"],
    clans: ["太原王氏"]
  }
};
const cards = {
  xuanhuafu: {
    fullskin: true,
    derivation: "std_zhengcong",
    cardcolor: "diamond",
    type: "equip",
    subtype: "equip1",
    distance: { attackFrom: -2 },
    skills: ["xuanhuafu_skill"],
    ai: {
      basic: {
        equipValue: 4.5
      }
    },
    enable: true,
    selectTarget: -1,
    filterTarget: (card2, player2, target2) => player2 == target2 && target2.canEquip(card2, true),
    modTarget: true,
    allowMultiple: false,
    content: function() {
      if (!card?.cards.some((card2) => {
        return get.position(card2, true) !== "o";
      })) {
        target.equip(card);
      }
    },
    toself: true
  },
  baipishuangbi: {
    fullskin: true,
    derivation: "std_jiangjie",
    cardcolor: "spade",
    type: "equip",
    subtype: "equip1",
    skills: ["baipishuangbi_skill"],
    ai: {
      basic: {
        equipValue: 4.5
      }
    },
    enable: true,
    selectTarget: -1,
    filterTarget: (card2, player2, target2) => player2 == target2 && target2.canEquip(card2, true),
    modTarget: true,
    allowMultiple: false,
    content: function() {
      if (!card?.cards.some((card2) => {
        return get.position(card2, true) !== "o";
      })) {
        target.equip(card);
      }
    },
    toself: true
  }
};
const pinyins = {};
const skills = {
  //四象封印·朱雀
  //黄舞蝶
  stdshuangrui: {
    audio: "dcshuangrui",
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return player2.countCards("h");
    },
    direct: true,
    clearTime: true,
    async content(event2, trigger2, player2) {
      await player2.chooseToUse().set("openskilldialog", `###${get.prompt(event2.name)}###将任意张手牌当作【杀】使用`).set("norestore", true).set("_backupevent", `${event2.name}_backup`).set("custom", {
        add: {},
        replace: { window() {
        } }
      }).backup(`${event2.name}_backup`).set("targetRequired", true).set("complexTarget", true).set("complexSelect", true).set("addCount", false).set("logSkill", event2.name);
    },
    /*ai: {
    	effect: {
    		player_use(card, player, target) {
    			const hs = player.countCards("h"),
    				evt = _status.event,
    				selected = ui.selected.cards;
    			if (evt.name == "chooseToUse" && evt.player == player && evt.skill == "stdshuangrui_backup") {
    				if (hs.length - selected.length == target.countCards("h")) {
    					return [1, 0.3];
    				}
    			}
    		},
    	},
    },*/
    subSkill: {
      backup: {
        filterCard(card2) {
          return get.itemtype(card2) == "card";
        },
        viewAs: {
          name: "sha"
        },
        selectCard: [1, Infinity],
        position: "h",
        precontent(event2, trigger2, player2) {
          player2.when("useCard").filter((evt) => evt.getParent() == event2.getParent()).step(async (event3, trigger3, player3) => {
            const num = player3.countCards("h");
            if (trigger3.targets?.some((target2) => target2.countCards("h") === num)) {
              trigger3.directHit.addArray(game.players);
              game.log(trigger3.card, "不可被响应");
            }
          });
        },
        ai1(card2) {
          if (ui.selected.cards.length) {
            return 0;
          }
          return 5 - get.value(card2);
        }
      }
    }
  },
  //清河公主
  stdzengou: {
    audio: "mbzengou",
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return game.hasPlayer((target2) => target2.countCards("h"));
    },
    filterTarget(card2, player2, target2) {
      return target2.countCards("h");
    },
    async content(event2, trigger2, player2) {
      const { target: target2 } = event2;
      const cards2 = target2.getCards("h");
      if (!cards2.length) {
        delete player2.getStat()["stdzengou"];
        return;
      }
      let result;
      if (cards2.length <= 2) {
        await player2.viewHandcards(target2);
        result = { bool: true, links: cards2 };
      } else {
        result = await player2.chooseCardButton(`谮构：请选择要展示的两张牌`, 2, true, cards2).set("ai", (button) => {
          if (get.type(button.link) == "basic" && !["shan", "du"].includes(get.name(button.link))) {
            return 0;
          }
          return get.value(button.link);
        }).forResult();
        cards2.forEach((card2) => card2.addKnower(player2));
      }
      if (result?.links?.length) {
        const shown = result.links;
        await player2.showCards(shown, `${get.translation(player2)}展示了${get.translation(target2)}的牌`);
        const names = shown.map((card2) => get.name(card2, target2));
        const viewAs = (info) => get.autoViewAs({ name: info[2], nature: info[3], isCard: true });
        const list = get.inpileVCardList((info) => {
          if (info[0] == "basic" && !names.includes(info[2])) {
            return player2.hasUseTarget(viewAs(info), false, false);
          }
        });
        if (!list.length) {
          player2.popup("杯具");
          await target2.draw();
          return;
        }
        const result2 = await player2.chooseButton([`谮构：请选择要视为使用的基本牌`, [list, "vcard"]], true).set("viewAs", viewAs).set("ai", (button) => get.player().getUseValue(get.event().viewAs(button.link))).forResult();
        if (result2.links?.length) {
          await player2.chooseUseTarget(viewAs(result2.links[0]), true);
        }
      }
    },
    ai: {
      order: 8,
      result: {
        target(player2, target2) {
          return -target2.countCards("h");
        }
      }
    }
  },
  stdfeili: {
    audio: "mbfeili",
    trigger: { player: "damageBegin4" },
    filter(event2, player2) {
      return player2.countDiscardableCards(player2, "he") > 1 || player2.hasSkill("stdzengou") && !player2.isTempBanned("stdzengou");
    },
    async cost(event2, trigger2, player2) {
      const list = [`弃置两张牌`, `令〖谮构〗本轮失效`];
      const bool1 = player2.countDiscardableCards(player2, "he") > 1;
      const bool2 = player2.hasSkill("stdzengou") && !player2.isTempBanned("stdzengou");
      const ai1 = player2.countDiscardableCards(player2, "he", (card2) => 7 - get.value(card2)) > 1;
      const ai2 = (() => {
        if (trigger2.num >= player2.getHp() + player2.hujia) {
          return true;
        }
        const curLen = player2.actionHistory.length;
        for (let i = curLen - 1; i >= 0; i--) {
          const history = player2.actionHistory[i];
          if (history.isMe && !history.isSkipped) {
            return true;
          }
          if (history.isRound) {
            break;
          }
        }
        return false;
      })();
      if (bool1 && bool2) {
        const result = await player2.chooseControl("cancel2").set("choiceList", list).set("prompt", get.prompt2(event2.skill)).set("choice", ai2 ? 1 : ai1 ? 0 : 2).forResult();
        if (result?.control !== "cancel2") {
          event2.result = { bool: true, cost_data: result.index };
        }
      } else if (bool1) {
        const result = await player2.chooseBool(get.prompt(event2.skill), `${list[0]}，防止此次伤害`).set("choice", ai1).forResult();
        if (result?.bool) {
          event2.result = { bool: true, cost_data: 0 };
        }
      } else if (bool2) {
        const result = await player2.chooseBool(get.prompt(event2.skill), `${list[1]}，防止此次伤害`).set("choice", ai2).forResult();
        if (result?.bool) {
          event2.result = { bool: true, cost_data: 1 };
        }
      }
    },
    async content(event2, trigger2, player2) {
      const index = event2.cost_data;
      if (index == 0) {
        await player2.chooseToDiscard("he", 2, true);
      } else {
        player2.tempBanSkill("stdzengou", "roundStart");
      }
      trigger2.cancel();
    }
  },
  //麴义
  stdfuqi: {
    audio: "fuqi",
    global: "stdfuqi_ai",
    subSkill: {
      ai: {
        directHit_ai: true,
        skillTagFilter(player2, tag, arg) {
          if (arg.card?.name == "sha") {
            if (player2.hasSkill("stdfuqi")) {
              return get.distance(arg.target, player2) == 1;
            }
            if (arg.target.hasSkill("stdfuqi")) {
              return get.distance(player2, arg.target) == 1;
            }
          }
        }
      }
    },
    forced: true,
    trigger: {
      global: "useCard"
    },
    filter(event2, player2) {
      if (event2.card.name != "sha") {
        return false;
      }
      if (event2.player == player2) {
        return event2.targets.some((target2) => get.distance(target2, player2) == 1);
      }
      return event2.targets.includes(player2) && get.distance(event2.player, player2) == 1;
    },
    async content(event2, trigger2, player2) {
      trigger2.directHit.addArray(game.players);
      game.log(trigger2.card, "不可被响应");
    }
  },
  stdjiaozi: {
    audio: "jiaozi",
    forced: true,
    trigger: { source: "damageBegin1" },
    filter(event2, player2) {
      return player2.isMaxHandcard() && game.getGlobalHistory("everything", (evt) => evt.name == "damage" && evt.source == player2).indexOf(event2) == 0;
    },
    async content(event2, trigger2, player2) {
      trigger2.num++;
    }
  },
  //文鸳
  stdkengqiang: {
    audio: "dckengqiang",
    usable: 1,
    trigger: { player: "useCard" },
    filter(event2, player2) {
      return get.is.damageCard(event2.card);
    },
    async cost(event2, trigger2, player2) {
      const list = [`摸两张牌`, `失去一点体力，令${get.translation(trigger2.card)}伤害+1`];
      const eff1 = get.effect(player2, { name: "wuzhong" }, player2, player2);
      const eff2 = get.effect(player2, { name: "losehp" }, player2, player2) + Math.max(trigger2.targets.map((target2) => get.damageEffect(target2, player2, player2)));
      const result = await player2.chooseControl("cancel2").set("choiceList", list).set("prompt", get.prompt2(event2.skill)).set("choice", eff1 >= eff2 ? 0 : 1).forResult();
      if (result?.control != "cancel2") {
        event2.result = { bool: true, cost_data: result.index };
      }
    },
    async content(event2, trigger2, player2) {
      const index = event2.cost_data;
      if (index == 0) {
        await player2.draw(2);
      } else if (index == 1) {
        await player2.loseHp();
        game.log(trigger2.card, "造成的伤害+1");
        trigger2.baseDamage++;
      }
    }
  },
  stdshangjue: {
    audio: "dcshangjue",
    limited: true,
    skillAnimation: true,
    animationColor: "orange",
    trigger: { player: "dying" },
    check: () => true,
    async content(event2, trigger2, player2) {
      player2.awakenSkill(event2.name);
      await player2.recoverTo(player2.maxHp);
      if (player2.hasSkill("stdkengqiang", null, null, false)) {
        const result = await player2.chooseBool(`殇决：是否失去〖铿锵〗重置此技能`).set("choice", false).forResult();
        if (result?.bool) {
          await player2.removeSkills("stdkengqiang");
          player2.restoreSkill(event2.name);
        }
      }
    }
  },
  //许劭
  stdyingmen: {
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return !player2.countExpansions("stdyingmen");
    },
    async content(event2, trigger2, player2) {
      await player2.draw(2);
      const result = await player2.chooseCard(`盈门：将两张基本牌或普通锦囊牌置于武将牌上，称为“访客”`, "he", true, 2, (card2) => ["basic", "trick"].includes(get.type(card2))).set("ai", (card2) => get.player().getUseValue(card2)).forResult();
      if (result?.cards?.length) {
        const { cards: cards2 } = result;
        const next = player2.addToExpansion(cards2, "give");
        next.gaintag.add(event2.name);
        await next;
      }
    },
    intro: {
      markcount: "expansion",
      content: "expansion"
    },
    ai: {
      order: 9,
      result: {
        player: 1
      }
    }
  },
  stdpingjian: {
    enable: ["chooseToUse"],
    hiddenCard(player2, name) {
      return player2.getExpansions("stdyingmen").some((card2) => get.name(card2) == name);
    },
    filter(event2, player2) {
      return player2.getExpansions("stdyingmen").some((card2) => event2.filterCard(get.autoViewAs({ name: get.name(card2), nature: get.nature(card2) }, "unsure"), player2, event2));
    },
    chooseButton: {
      dialog(event2, player2) {
        const cards2 = player2.getExpansions("stdyingmen");
        const list = get.inpileVCardList((info) => {
          return cards2.some((card2) => get.name(card2) == info[2] && get.nature(card2) == info[3]);
        });
        return ui.create.dialog("评鉴", [list, "vcard"], "hidden");
      },
      filter(button) {
        const evt = get.event().getParent();
        const link = button.link;
        return evt.filterCard(get.autoViewAs({ name: link[2], nature: link[3] }, "unsure"), get.player(), evt);
      },
      check(button) {
        const link = button.link;
        return get.player().getUseValue(get.autoViewAs({ name: link[2], nature: link[3] }, "unsure"));
      },
      backup(links, player2) {
        return {
          filterCard(card2, player3) {
            return get.itemtype(card2) == "card";
          },
          position: "h",
          viewAs: {
            name: links[0][2],
            nature: links[0][3]
          },
          log: false,
          async precontent(event2, trigger2, player3) {
            player3.logSkill("stdpingjian");
            const result = await player3.chooseCardButton(`评鉴：请移去一张“访客”`, true, player3.getExpansions("stdyingmen")).set("ai", (button) => -get.player().getUseValue(button.link)).forResult();
            if (result?.links?.length) {
              await player3.loseToDiscardpile(result.links);
            }
          },
          ai1(card2) {
            return 7 - get.value(card2);
          }
        };
      },
      prompt(links, player2) {
        return `将一张手牌当做${(get.translation(links[0][3]) || "") + get.translation(links[0][2])}使用`;
      }
    },
    ai: {
      order: 7,
      combo: "stdyingmen",
      result: {
        player: 1
      }
    }
  },
  //张璇
  stdtongli: {
    audio: "tongli",
    trigger: {
      player: "useCard"
    },
    filter(event2, player2) {
      const evtx = event2.getParent("phaseUse");
      const num = game.filterPlayer().map((i) => i.getCards("ej").map((card2) => get.suit(card2))).flat().unique().length;
      return player2.isPhaseUsing() && player2.getHistory("useCard", (evt) => evt.getParent("phaseUse") == evtx).length == num && ["basic", "trick"].includes(get.type(event2.card));
    },
    check(event2, player2) {
      return !get.tag(event2.card, "norepeat") ^ event2.targets?.reduce((sum, i) => sum + get.effect(i, event2.card, player2, player2), 0) < 0;
    },
    async content(event2, trigger2, player2) {
      trigger2.effectCount++;
      game.log(trigger2.card, "额外结算一次");
    }
  },
  stdshezang: {
    audio: "shezang",
    trigger: { player: "dying" },
    filter(event2, player2) {
      return player2.canMoveCard(
        null,
        true,
        game.filterPlayer((target2) => target2 != player2),
        player2
      );
    },
    check(event2, player2) {
      return player2.canMoveCard(
        true,
        true,
        game.filterPlayer((target2) => target2 != player2),
        player2
      );
    },
    async content(event2, trigger2, player2) {
      let num = 0;
      const goon = () => num++ < 4 && player2.canMoveCard(
        null,
        true,
        game.filterPlayer((target2) => target2 != player2),
        player2
      );
      while (goon()) {
        await player2.moveCard(
          num < 2,
          game.filterPlayer((target2) => target2 != player2),
          player2
        ).set("nojudge", true);
      }
    }
  },
  //沮授
  stdjianying: {
    audio: "jianying",
    trigger: { player: "phaseUseBegin" },
    filter(event2, player2) {
      return player2.canMoveCard();
    },
    check(event2, player2) {
      return player2.canMoveCard(true);
    },
    async content(event2, trigger2, player2) {
      const result = await player2.moveCard(true).forResult();
      if (result?.card) {
        const { card: card2 } = result;
        player2.addTempSkill(`${event2.name}_draw`, "phaseChange");
        player2.markAuto(`${event2.name}_draw`, card2);
      }
    },
    subSkill: {
      draw: {
        charlotte: true,
        audio: "jianying",
        forced: true,
        trigger: {
          player: "useCard"
        },
        onremove: true,
        filter(event2, player2) {
          const storage = player2.getStorage("stdjianying_draw");
          const check = (card2) => get.suit(card2) == get.suit(event2.card) || get.number(card2) == get.number(event2.card);
          return storage.some((i) => check(i)) && player2.getHistory("useCard", (evt) => check(evt.card) && evt.getParent("phaseUse") == event2.getParent("phaseUse")).indexOf(event2) == 0;
        },
        async content(event2, trigger2, player2) {
          await player2.draw();
        },
        intro: {
          content: "cards"
        }
      }
    }
  },
  stdshibei: {
    audio: "shibei",
    forced: true,
    locked: false,
    limited: true,
    skillAnimation: true,
    animationColor: "metal",
    trigger: { player: "damageEnd" },
    async content(event2, trigger2, player2) {
      player2.awakenSkill(event2.name);
      await player2.recover();
    }
  },
  //四象封印·白虎
  //司马徽
  stdjianjie: {
    audio: "jianjie",
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return game.hasPlayer((target2) => target2.countCards("he"));
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), [1, 3], (card2, player3, target2) => {
        return target2.countCards("he");
      }).set("ai", (target2) => get.attitude(get.player(), target2) * target2.countCards("he")).forResult();
    },
    async content(event2, trigger2, player2) {
      const targets = event2.targets.sortBySeat();
      const map = /* @__PURE__ */ new Map();
      for (const target2 of targets) {
        const result = await player2.choosePlayerCard(target2, `请选择${get.translation(target2)}要展示的牌`, "he", true).forResult();
        if (result?.cards?.length) {
          map.set(target2, result.cards[0]);
        }
      }
      await player2.showCards(Array.from(map.values()), get.translation(player2) + "发动了【荐杰】").set("customButton", (button) => {
        const target2 = get.owner(button.link);
        if (target2) {
          button.node.gaintag.innerHTML = target2.getName();
        }
      }).set("delay_time", Math.max(2.5, map.size));
      await game.doAsyncInOrder(targets, async (target2, index) => {
        const card2 = map.get(target2);
        let vcard;
        switch (get.color(card2, target2)) {
          case "red":
            vcard = get.autoViewAs({ name: "huogong" }, [card2]);
            break;
          case "black":
            vcard = get.autoViewAs({ name: "tiesuo" }, [card2]);
            break;
          default:
            return;
        }
        return target2.chooseUseTarget(vcard, [card2], false);
      });
    }
  },
  stdchenghao: {
    audio: "xinfu_chenghao",
    trigger: { global: "damageBegin3" },
    usable: 1,
    filter(event2, player2) {
      return event2.hasNature();
    },
    check: () => true,
    async content(event2, trigger2, player2) {
      const cards2 = get.cards(1, true);
      await player2.viewCards("称好：牌堆顶的一张牌", cards2);
      const result = await player2.chooseTarget(`将${get.translation(cards2)}交给一名角色`, true).set("ai", function(target2) {
        const att = get.attitude(_status.event.player, target2);
        if (_status.event.enemy) {
          return -att;
        } else if (att > 0) {
          return att / (1 + target2.countCards("h"));
        } else {
          return att / 100;
        }
      }).set("enemy", get.value(cards2[0], player2, "raw") < 0).forResult();
      if (result?.targets?.length) {
        const [target2] = result.targets;
        player2.line(target2, "green");
        await target2.gain(cards2, "draw");
      }
    }
  },
  //郑玄
  stdzhengjing: {
    audio: "zhengjing",
    trigger: { player: "phaseDrawBegin" },
    filter(event2, player2) {
      return player2.countCards("h");
    },
    async content(event2, trigger2, player2) {
      const hs = player2.getCards("h");
      const top = get.cards(Math.min(3, hs.length), true);
      const cards2 = hs.concat(top);
      await player2.showCards(cards2, get.translation(player2) + "发动了【整经】").set("customButton", (button) => {
        if (!get.owner(button.link)) {
          button.node.gaintag.innerHTML = "牌堆顶";
        }
      }).set("delay_time", Math.min(4, cards2.length * 1.5));
      if (game.hasPlayer((target2) => target2 != player2)) {
        const map = Object.groupBy(cards2, (i) => get.suit(i, player2));
        const list = get.addNewRowList(cards2, "suit", player2);
        const result = await player2.chooseButtonTarget({
          createDialog: [
            [
              [[`整经：选择一名其他角色令其获得其中一种花色的牌`], "addNewRow"],
              [
                (dialog) => {
                  dialog.classList.add("fullheight");
                  dialog.forcebutton = false;
                  dialog._scrollset = false;
                },
                "handle"
              ],
              list.map((item) => [Array.isArray(item) ? item : [item], "addNewRow"])
            ]
          ],
          forced: true,
          filterTarget: lib.filter.notMe,
          filterButton(button) {
            return button.links.length > 0;
          },
          ai1(button) {
            const player3 = get.player();
            if (!game.hasPlayer((current) => player3 != current && get.attitude(player3, current) > 0)) {
              return button.links.length;
            }
            return 1 / button.links.length;
          },
          ai2(target2) {
            const att = get.attitude(get.player(), target2);
            if (att > 0) {
              return att / (1 + target2.countCards("h"));
            } else {
              return att / 100;
            }
          }
        }).forResult();
        if (result?.links?.length && result.targets?.length) {
          const suit = result.links[0];
          const target2 = result.targets[0];
          cards2.removeArray(map[suit]);
          player2.line(target2);
          await target2.gain(map[suit]).set("giver", player2).set(
            "given",
            map[suit].filter((i) => hs.includes(i))
          ).set("animate", (event3) => {
            const player3 = event3.player;
            const giver = event3.giver;
            const cards3 = event3.cards;
            const given = event3.given;
            const top2 = cards3.removeArray(given);
            if (given.length) {
              giver.$give(given, player3);
            }
            if (top2.length) {
              player3.$gain2(top2, true);
            }
            return 500;
          });
        }
      }
      await player2.gain(cards2, "gain2");
    }
  },
  //祢衡
  stdkuangcai: {
    audio: "rekuangcai",
    mod: {
      cardUsable(card2, player2) {
        if (player2.isPhaseUsing() && get.event().stdkuangcai < 2) {
          return Infinity;
        }
      },
      targetInRange(card2, player2) {
        if (player2.isPhaseUsing() && get.event().stdkuangcai < 2) {
          return true;
        }
      }
    },
    forced: true,
    onChooseToUse(event2) {
      const player2 = event2.player;
      if (!game.online && !event2.stdkuangcai && event2.type == "phase") {
        event2.set("stdkuangcai", player2.getHistory("useCard", (evt) => evt.getParent("phaseUse") == event2.getParent("phaseUse")).length);
      }
    },
    trigger: { player: "useCard" },
    filter(event2, player2) {
      if (!player2.isPhaseUsing()) {
        return false;
      }
      return player2.getHistory("useCard", (evt) => evt.getParent("phaseUse") == event2.getParent("phaseUse")).indexOf(event2) < 2;
    },
    async content(event2, trigger2, player2) {
      if (trigger2.addCount !== false) {
        trigger2.addCount = false;
        const stat = player2.getStat().card, name = trigger2.card.name;
        if (typeof stat[name] == "number") {
          stat[name]--;
        }
      }
      player2.when("useCardAfter").filter((evt) => evt == trigger2).step(async (event3, trigger3, player3) => {
        if (player3.hasHistory("sourceDamage", (evt) => evt.card === trigger3.card)) {
          await player3.draw();
        } else {
          await player3.chooseToDiscard("he", true);
        }
      });
    }
  },
  stdshejian: {
    audio: "reshejian",
    trigger: { target: "useCardToTargeted" },
    filter(event2, player2) {
      return event2.player != player2 && event2.targets.length == 1;
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseToDiscard(get.prompt2(event2.skill, trigger2.player), "h", 2, "chooseonly").set("ai", (card2) => {
        const eff = get.damageEffect(get.event().source, get.player(), get.player());
        if (eff > 0) {
          return 7 - get.value(card2);
        }
        return 0;
      }).set("source", trigger2.player).forResult();
    },
    async content(event2, trigger2, player2) {
      await player2.discard(event2.cards);
      const target2 = trigger2.player;
      player2.when({ global: "phaseJieshuBegin" }).filter((evt) => evt.getParent("phase") === trigger2.getParent("phase")).step(async (event3, trigger3, player3) => {
        if (target2.isIn()) {
          player3.line(target2);
          await target2.damage();
        }
      });
    }
  },
  //马钧
  stdgongqiao: {
    audio: "gongqiao",
    enable: "phaseUse",
    usable: 1,
    filterTarget: true,
    async content(event2, trigger2, player2) {
      const cards2 = [];
      const { target: target2 } = event2;
      let card2;
      while (true) {
        card2 = get.cards(1, true)[0];
        cards2.push(card2);
        await player2.showCards(card2, `${get.translation(player2)}【工巧】亮出的第${get.cnNumber(cards2.length, true)}张牌`, true).set("clearArena", false);
        if (get.type(card2) == "equip") {
          cards2.remove(card2);
          break;
        }
      }
      game.broadcastAll(ui.clear);
      if (card2 && target2.hasUseTarget(card2)) {
        await target2.chooseUseTarget(card2, true);
      }
      if (cards2.length) {
        const hs = target2.getCards("h");
        if (hs.length) {
          target2.$throw(hs, 1e3);
          game.log(target2, "将", hs, "置入处理区");
          await target2.lose(hs, ui.ordering);
        }
        await target2.gain(cards2, "gain2");
      }
    },
    ai: {
      order: 1,
      result: {
        target: 1
      }
    }
  },
  //张奋
  stdwanglu: {
    audio: "dcwanglu",
    enable: "phaseUse",
    usable: 1,
    filterTarget(card2, player2, target2) {
      return target2.countDiscardableCards(player2, "e", (card3) => get.type(card3) == "equip");
    },
    async content(event2, trigger2, player2) {
      const { target: target2 } = event2;
      const result = await player2.discardPlayerCard(target2, "e", (card2) => get.type(card2) == "equip", true).forResult();
      if (result?.cards?.length) {
        const card2 = result.cards[0];
        if (get.subtype(card2) == "equip1") {
          let num = 1;
          const info = get.info(card2, false);
          if (info && info.distance && typeof info.distance.attackFrom == "number") {
            num -= info.distance.attackFrom;
          }
          await target2.draw(num);
        }
      }
    },
    ai: {
      order: 5,
      result: {
        target: -1
      }
    }
  },
  //赵嫣
  stdjinhui: {
    audio: "jinhui",
    trigger: { player: "phaseZhunbeiBegin" },
    check: () => true,
    async content(event2, trigger2, player2) {
      const cards2 = get.cards(3, true);
      await player2.showCards(cards2, `${get.translation(player2)}发动了【锦绘】`, true).set("clearArena", false);
      const targets = [player2];
      if (game.hasPlayer((target2) => target2 != player2)) {
        const result = await player2.chooseTarget(`锦绘：与一名其他角色依次使用其中一张牌（不能连续使用相同颜色的牌）`, true, lib.filter.notMe).set("ai", (target2) => get.attitude(get.player(), target2)).forResult();
        if (result?.targets?.length) {
          const [target2] = result.targets;
          player2.line(target2);
          targets.add(target2);
        }
      }
      game.broadcastAll(ui.clear);
      const colors = [];
      for (const target2 of targets) {
        if (cards2.some((card2) => target2.hasUseTarget(card2, true, false) && !colors.includes(get.color(card2)))) {
          const result = await target2.chooseCardButton("锦绘：请使用其中一张牌", cards2, true).set("filterButton", (button) => {
            return get.event().cards.includes(button.link);
          }).set(
            "cards",
            cards2.filter((card2) => target2.hasUseTarget(card2, true, false) && !colors.includes(get.color(card2)))
          ).set("ai", (button) => get.player().getUseValue(button.link)).forResult();
          if (result?.links?.length) {
            const [card2] = result.links;
            colors.add(get.color(card2));
            cards2.remove(card2);
            await target2.chooseUseTarget(card2, true, false);
          }
        }
      }
    }
  },
  stdqingman: {
    audio: "qingman",
    forced: true,
    trigger: { global: "phaseEnd" },
    filter(event2, player2) {
      const num = player2.countCards("h");
      let num2 = 0;
      for (let i = 1; i <= 5; i++) {
        num2 += player2.countEmptySlot(i);
      }
      return num < Math.min(3, num2);
    },
    async content(event2, trigger2, player2) {
      let num2 = 0;
      for (let i = 1; i <= 5; i++) {
        num2 += player2.countEmptySlot(i);
      }
      await player2.drawTo(Math.min(3, num2));
    }
  },
  //刘理
  stdfuli: {
    audio: "dcfuli",
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return player2.countCards("h");
    },
    manualConfirm: true,
    async content(event2, trigger2, player2) {
      const func = async function(target2) {
        await target2.showHandcards();
        const hs = target2.getDiscardableCards(target2, "h", (card2) => get.tag(card2, "damage") && get.type(card2) != "delay");
        if (hs.length) {
          await target2.discard(hs);
        }
        if (target2 != player2 && target2.isDamaged()) {
          await target2.recover();
        }
      };
      await func(player2);
      if (game.hasPlayer((target2) => target2 != player2)) {
        const result = await player2.chooseTarget(`抚黎：令一名其他角色展示所有手牌并弃置其中的所有伤害类牌（没有则不弃）并回复1体力`, true, (card2, player3, target2) => {
          return player3 != target2 && target2.countCards("h");
        }).set("ai", (target2) => get.recoverEffect(target2, get.player(), get.player())).forResult();
        if (result?.targets?.length) {
          const [target2] = result.targets;
          player2.line(target2);
          await func(target2);
        }
      }
    },
    ai: {
      order: 1,
      result: {
        player(player2, target2) {
          if (game.hasPlayer((target3) => get.recoverEffect(target3, player2, player2) > 0)) {
            return 1;
          }
          return 0;
        }
      }
    }
  },
  stddehua: {
    audio: "dcdehua",
    trigger: { global: "phaseEnd" },
    filter(event2, player2) {
      return player2.getHistory("lose").reduce((list, evt) => list.addArray(evt.cards), []).length == 2;
    },
    async cost(event2, trigger2, player2) {
      const list = get.inpileVCardList((info) => {
        if (info[0] != "basic") {
          return false;
        }
        return player2.hasUseTarget(get.autoViewAs({ name: info[2], nature: info[3], isCard: true }));
      });
      if (list.length) {
        const result = await player2.chooseButton([get.prompt2(event2.skill), [list, "vcard"]]).set("ai", (button) => get.player().getUseValue(get.autoViewAs({ name: button.link[2], nature: button.link[3], isCard: true }))).forResult();
        if (result?.links?.length) {
          event2.result = {
            bool: true,
            cost_data: result.links[0]
          };
        }
      }
    },
    async content(event2, trigger2, player2) {
      const link = event2.cost_data;
      const card2 = get.autoViewAs({ name: link[2], nature: link[3], isCard: true });
      await player2.chooseUseTarget(card2, true);
    }
  },
  //珍藏封印
  //张美人
  stdlianrong: {
    trigger: {
      global: ["loseAfter", "loseAsyncAfter"]
    },
    filter(event2, player2) {
      if (event2.type != "discard" || event2.getlx === false) {
        return false;
      }
      return game.hasPlayer2((target2) => target2 != player2 && event2.getl?.(target2)?.cards2.some((card2) => get.suit(card2) == "heart" && get.position(card2, true) == "d"));
    },
    async cost(event2, trigger2, player2) {
      const cards2 = game.filterPlayer2((target2) => target2 != player2).map((target2) => trigger2.getl?.(target2)?.cards2?.filter((card2) => get.suit(card2) == "heart" && get.position(card2, true) == "d")).flat();
      const result = await player2.chooseCardButton(get.prompt2(event2.skill), cards2, [1, Infinity]).set("ai", (button) => {
        return get.value(button.link, get.player(), "raw");
      }).forResult();
      if (result?.links?.length) {
        event2.result = {
          bool: true,
          cost_data: result.links
        };
      }
    },
    async content(event2, trigger2, player2) {
      const cards2 = event2.cost_data;
      await player2.gain(cards2, "gain2");
    }
  },
  stdyuanzhuo: {
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return game.hasPlayer((target2) => lib.skill.stdyuanzhuo.filterTarget(void 0, player2, target2));
    },
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.countDiscardableCards(player2, "he");
    },
    async content(event2, trigger2, player2) {
      const { target: target2 } = event2;
      await player2.discardPlayerCard(target2, "he", true);
      const card2 = get.autoViewAs({ name: "huogong", isCard: true });
      if (target2.canUse(card2, player2, true, false)) {
        await target2.useCard(card2, player2, false);
      }
    },
    ai: {
      order: 7,
      result: {
        target(player2, target2) {
          return -get.effect(target2, { name: "guohe_copy2" }, player2, player2);
        }
      }
    }
  },
  //王美人
  stdbizun: {
    enable: ["chooseToUse"],
    usable: 1,
    onChooseToUse(event2) {
      const player2 = event2.player;
      if (!event2.stdbizun) {
        const list = get.inpileVCardList((info) => {
          if (!["sha", "shan"].includes(info[2])) {
            return false;
          }
          return event2.filterCard(get.autoViewAs({ name: info[2], nature: info[3] }, "unsure"), player2, event2);
        });
        event2.set("stdbizun", list);
      }
    },
    hiddenCard(player2, name) {
      return ["sha", "shan"].includes(name) && player2.countCards("hes", (card2) => get.type(card2, player2) == "equip");
    },
    filter(event2, player2) {
      return player2.countCards("hes", (card2) => get.type(card2, player2) == "equip") && event2.stdbizun.length > 0;
    },
    chooseButton: {
      dialog(event2, player2) {
        return ui.create.dialog("避尊", [event2.stdbizun, "vcard"]);
      },
      filter(button) {
        return get.event().getParent().filterCard(get.autoViewAs({ name: button.link[2], nature: button.link[3] }, "unsure"), get.player(), get.event().getParent());
      },
      check(button) {
        const player2 = get.player();
        return player2.getUseValue(get.autoViewAs({ name: button.link[2], nature: button.link[3] }, "unsure"));
      },
      backup(links, player2) {
        return {
          popname: true,
          filterCard(card2, player3) {
            return get.type(card2, player3) === "equip";
          },
          selectCard: 1,
          check(card2) {
            return 7 - get.value(card2);
          },
          position: "hes",
          viewAs: {
            name: links[0][2],
            nature: links[0][3]
          },
          log: false,
          async precontent(event2, trigger2, player3) {
            player3.logSkill("stdbizun");
            player3.when({ player: "useCardAfter" }).filter((evt) => evt.getParent() == event2.getParent()).step(async (event3, trigger3, player4) => {
              const target2 = game.findPlayer((targetx) => targetx.canMoveCard() && targetx.isMaxHandcard(true));
              if (target2) {
                await target2.moveCard();
              }
            });
          }
        };
      },
      prompt(links, player2) {
        return `将一张装备牌当做${get.translation(links[0][3]) || ""}${get.translation(links[0][2])}使用`;
      }
    }
  },
  stdhuangong: {
    trigger: {
      player: "loseAfter",
      global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"]
    },
    filter(event2, player2) {
      if (player2.countCards("ej")) {
        return false;
      }
      const evt = event2.getl(player2);
      return evt?.es?.length || evt.js?.length;
    },
    forced: true,
    async content(event2, trigger2, player2) {
      await player2.draw();
    }
  },
  //庞林
  stdzhuying: {
    trigger: { global: "damageBegin3" },
    filter(event2, player2) {
      return event2.player != player2 && !event2.hasNature() && !event2.player.isLinked();
    },
    check(event2, player2) {
      return get.effect(event2.player, { name: "tiesuo" }, player2, player2) > 0;
    },
    logTarget: "player",
    async content(event2, trigger2, player2) {
      const target2 = trigger2.player;
      await target2.link(true);
    }
  },
  stdzhongshi: {
    forced: true,
    trigger: { source: "damageBegin1" },
    filter(event2, player2) {
      return player2.isLinked() != event2.player.isLinked();
    },
    logTarget: "player",
    async content(event2, trigger2, player2) {
      trigger2.num++;
    }
  },
  //黄崇
  stdjuxian: {
    trigger: { global: "gainBefore" },
    filter(event2, player2) {
      return event2.player != player2 && event2.cards.some((card2) => get.owner(card2) == player2 && "he".includes(get.position(card2)));
    },
    forced: true,
    async content(event2, trigger2, player2) {
      trigger2.cancel();
    },
    mod: {
      cardGiftable(card2, player2, target2) {
        if (player2 != target2 && get.type(card2, null, false) != "equip") {
          return false;
        }
      }
    },
    ai: {
      effect: {
        target(card2, player2, target2) {
          if (card2.name == "shunshou") {
            return "zeroplayertarget";
          }
        }
      }
    }
  },
  stdlijun: {
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return game.hasPlayer((target2) => target2.countCards("h"));
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), [1, player2.getHp()], (card2, player3, target2) => {
        return target2.countCards("h");
      }).set("ai", (target2) => {
        const player3 = get.player(), att = get.attitude(player3, target2);
        if (att > 0) {
          return target2.countCards("h", (card2) => target2.hasValueTarget(card2, true, false));
        }
        return true;
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const { targets } = event2;
      for (const target2 of targets.sortBySeat()) {
        const result = await player2.choosePlayerCard(target2, `励军：请展示${get.translation(target2)}一张手牌`, "h", true).forResult();
        if (result?.cards?.length) {
          const card2 = result.cards[0];
          await player2.showCards([card2], `${get.translation(target2)}被展示的牌`);
          let resultx;
          if (target2.hasUseTarget(card2, true, false)) {
            resultx = await target2.chooseUseTarget(`励军：使用${get.translation(card2)}或者取消并弃置之`, card2, false).forResult();
          } else {
            resultx = { bool: false };
          }
          if (!resultx.bool) {
            await target2.modedDiscard(card2);
          }
        }
      }
    }
  },
  //曹熊
  stdwuwei: {
    trigger: { player: "damageEnd" },
    filter(event2, player2) {
      return player2.countCards("he", (card2) => get.type(card2, player2) == "equip" && game.hasPlayer((target2) => target2.canEquip(card2, true)));
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseCardTarget({
        prompt: get.prompt2(event2.skill),
        filterCard(card2, player3) {
          return get.type(card2, player3) == "equip";
        },
        filterTarget(card2, player3, target2) {
          if (get.position(card2) == "e" && target2 == player3) {
            return false;
          }
          return target2.canEquip(card2, true);
        },
        position: "he",
        ai1(card2) {
          return 6 - get.value(card2);
        },
        ai2(target2) {
          const card2 = ui.selected.cards[0], att = get.attitude(get.player(), target2), range = target2.getAttackRange(), cardrange = 1 - (get.info(card2, false)?.distance?.attackFrom || 0);
          if (att <= 0 && cardrange > range) {
            return get.effect(target2, { name: "guohe_copy2" }, get.player(), get.player());
          }
          return att * get.equipValue(card2, target2);
        }
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const card2 = event2.cards[0], target2 = event2.targets[0], range = target2.getAttackRange();
      await target2.equip(card2);
      const num = target2.getAttackRange() - range;
      if (num > 0 && target2.countDiscardableCards(player2, "he")) {
        await player2.discardPlayerCard(target2, "he", num, true);
      }
    }
  },
  stdleiruo: {
    trigger: { player: "phaseJieshuBegin" },
    filter(event2, player2) {
      return game.hasPlayer((target2) => target2 != player2 && target2.countGainableCards(player2, "e"));
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), (card2, player3, target2) => {
        return target2 != player3 && target2.countGainableCards(player3, "e");
      }).set("ai", (target2) => {
        if (!get.player().hasShan()) {
          return false;
        }
        return get.effect(target2, { name: "shunshou_copy2" }, get.player(), get.player());
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      await player2.gainPlayerCard(target2, "e", true);
      const card2 = get.autoViewAs({ name: "sha", isCard: true });
      if (target2.canUse(card2, player2, false, false)) {
        const result = await target2.chooseBool(`羸弱：是否视为对${get.translation(player2)}使用一张无距离限制的【杀】`).set("choice", get.effect(player2, card2, target2, target2) > 0).forResult();
        if (result?.bool) {
          await target2.useCard(card2, player2, false);
        }
      }
    }
  },
  //毛皇后
  stddechong: {
    trigger: { global: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return event2.player != player2 && player2.countCards("he");
    },
    async cost(event2, trigger2, player2) {
      const result = await player2.chooseCard(
        get.prompt2(event2.skill, trigger2.player),
        "he",
        [1, Infinity],
        (card2, player3) => {
          const target2 = get.event().getTrigger().player;
          return lib.filter.canBeGained(card2, target2, player3);
        },
        "allowChooseAll"
      ).set("ai", (card2) => {
        const player3 = get.player(), target2 = get.event().getTrigger().player, att = get.attitude(player3, target2);
        if (att <= 0) {
          const num = target2.countCards("h", (card3) => !target2.hasValueTarget(card3));
          if (num >= target2.hp) {
            return 6 - get.value(card2);
          }
          return 0;
        }
        if (att > 0) {
          return target2.getUseValue(card2) - 2;
        }
      }).forResult();
      if (result?.cards?.length) {
        event2.result = {
          bool: true,
          targets: [trigger2.player],
          cost_data: result.cards
        };
      }
    },
    async content(event2, trigger2, player2) {
      const cards2 = event2.cost_data, target2 = event2.targets[0];
      await player2.give(cards2, target2);
      player2.when({ global: "phaseDiscardBegin" }).filter((evt) => evt.player == target2).step(async (event3, trigger3, player3) => {
        if (trigger3.stddechong) {
          return;
        }
        trigger3.set("stddechong", true);
        const target3 = trigger3.player;
        if (target3.countCards("h") >= target3.hp) {
          const result = await player3.chooseBool(`得宠：是否对${get.translation(target3)}造成1点伤害`).set("choice", get.damageEffect(target3, player3, player3) > 0).forResult();
          if (result?.bool) {
            await target3.damage();
          }
        }
      });
    }
  },
  stdyinzu: {
    locked: true,
    global: ["stdyinzu_global"],
    subSkill: {
      global: {
        charlotte: true,
        mod: {
          attackRange(player2, num) {
            const count = game.countPlayer((current) => current.hasSkill("stdyinzu"));
            if (!count) {
              return;
            }
            const sub = player2.countCards("h") - player2.hp;
            if (sub > 0) {
              return num + count;
            }
            return num - count;
          }
        }
      }
    }
  },
  //郑聪
  stdqiyue: {
    trigger: {
      global: "phaseBefore",
      player: "enterGame"
    },
    forced: true,
    locked: false,
    filter(event2, player2) {
      return (event2.name != "phase" || game.phaseNumber == 0) && player2.hasEquipableSlot(1);
    },
    async content(event2, trigger2, player2) {
      const card2 = game.createCard2("xuanhuafu", "diamond", 5);
      await player2.gain(card2, "gain2");
    }
  },
  xuanhuafu_skill: {
    equipSkill: true,
    trigger: { player: "useCardToPlayer" },
    filter(event2, player2) {
      const card2 = event2.card;
      if (card2.name != "sha" || !event2.isFirstTarget) {
        return false;
      }
      return game.hasPlayer((target2) => get.distance(target2, event2.target) == 1 && lib.filter.targetInRange(card2, player2, target2) && lib.filter.targetEnabled2(card2, player2, target2) && !event2.targets.includes(target2));
    },
    async cost(event2, trigger2, player2) {
      const card2 = trigger2.card;
      const targets = game.filterPlayer((target2) => get.distance(target2, trigger2.target) == 1 && lib.filter.targetInRange(card2, player2, target2) && lib.filter.targetEnabled2(card2, player2, target2) && !trigger2.targets.includes(target2));
      if (targets.length == 1) {
        event2.result = { bool: true, targets };
      } else {
        event2.result = await player2.chooseTarget(`宣花斧：为${get.translation(card2)}额外指定一个目标`, true, (card3, player3, target2) => {
          return get.event().targetsx.includes(target2);
        }).set("targetsx", targets).set("ai", (target2) => get.effect(target2, get.event().getTrigger().card, get.player(), get.player())).forResult();
      }
    },
    async content(event2, trigger2, player2) {
      const { targets } = event2;
      trigger2.targets.addArray(targets);
    }
  },
  stdjieji: {
    trigger: { source: "damageSource" },
    filter(event2, player2) {
      return event2.player != player2 && event2.player.isIn() && event2.card?.name == "sha" && player2.getHistory("useCard", (evt) => evt.card.name == "sha").indexOf(event2.getParent("useCard")) == 0 && event2.player.countGainableCards(player2, "he");
    },
    forced: true,
    logTarget: "player",
    async content(event2, trigger2, player2) {
      const target2 = trigger2.player;
      await player2.gainPlayerCard(target2, "he", true);
      const card2 = get.autoViewAs({ name: "sha", isCard: true });
      if (target2.canUse(card2, player2, false, false)) {
        await target2.useCard(card2, player2, false, "noai");
      }
    }
  },
  //姜婕
  stdfengzhan: {
    trigger: {
      global: "phaseBefore",
      player: "enterGame"
    },
    forced: true,
    locked: false,
    filter(event2, player2) {
      return (event2.name != "phase" || game.phaseNumber == 0) && player2.hasEquipableSlot(1);
    },
    async content(event2, trigger2, player2) {
      const card2 = game.createCard2("baipishuangbi", "spade", 2);
      await player2.gain(card2, "gain2");
    }
  },
  baipishuangbi_skill: {
    trigger: { player: "useCardToPlayered" },
    equipSkill: true,
    forced: true,
    filter(event2, player2) {
      return event2.card.name == "sha" && player2.differentSexFrom(event2.target) && !player2.countCards("h");
    },
    async content(event2, trigger2, player2) {
      trigger2.getParent().baseDamage++;
    }
  },
  stdruixi: {
    trigger: {
      global: "phaseJieshuBegin"
    },
    filter(event2, player2) {
      return player2.countCards("hes") && player2.hasUseTarget(get.autoViewAs({ name: "sha" }, "unsure"), false, false) && player2.hasHistory("lose");
    },
    direct: true,
    clearTime: true,
    async content(event2, trigger2, player2) {
      await player2.chooseToUse().set("openskilldialog", `###${get.prompt(event2.name)}###将一张牌当作无距离限制的【杀】使用`).set("norestore", true).set("_backupevent", `${event2.name}_backup`).set("custom", {
        add: {},
        replace: { window() {
        } }
      }).backup(`${event2.name}_backup`).set("targetRequired", true).set("complexTarget", true).set("complexSelect", true).set("addCount", false).set("logSkill", event2.name);
    },
    subSkill: {
      backup: {
        filterCard(card2) {
          return get.itemtype(card2) == "card";
        },
        filterTarget(card2, player2, target2) {
          return lib.filter.targetEnabled.apply(this, arguments);
        },
        viewAs: {
          name: "sha"
        },
        selectCard: 1,
        position: "hes",
        ai1(card2) {
          return 7 - get.value(card2);
        }
      }
    }
  },
  //四象封印·青龙
  //标鲍信
  stdyimou: {
    audio: "yimou",
    trigger: { player: "damageEnd" },
    filter(event2, player2) {
      return player2.countCards("he") && game.hasPlayer((target2) => target2 != player2) && event2.num > 0;
    },
    async cost(event2, trigger2, player2) {
      const result = await player2.chooseCardTarget({
        prompt: get.prompt2(event2.skill),
        filterCard: true,
        position: "he",
        filterTarget: lib.filter.notMe,
        ai1(card2) {
          return 1 / Math.max(0.1, get.value(card2));
        },
        ai2(target2) {
          var player3 = _status.event.player, att = get.attitude(player3, target2);
          if (target2.hasSkillTag("nogain")) {
            att /= 9;
          }
          return 4 + att;
        }
      }).forResult();
      if (result?.bool) {
        event2.result = {
          bool: true,
          cost_data: result.cards,
          targets: result.targets
        };
      }
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0], cards2 = event2.cost_data;
      await player2.give(cards2, target2);
    }
  },
  stdmutao: {
    audio: "mutao",
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return game.hasPlayer((target2) => target2.countCards("h"));
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), (card2, player3, target2) => {
        return target2.countCards("h");
      }).set("ai", (target2) => get.damageEffect(target2, get.player(), get.player())).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      await target2.showHandcards();
      if (target2.countCards("h", (card2) => get.name(card2, target2) == "sha")) {
        await target2.damage();
      }
    }
  },
  //标裴秀
  stdzhitu: {
    enable: "chooseToUse",
    filter(event2, player2) {
      if (player2.countCards("he") < 2) {
        return false;
      }
      return get.inpileVCardList((info) => {
        if (info[0] != "trick") {
          return false;
        }
        return event2.filterCard(get.autoViewAs({ name: info[2] }, "unsure"), player2, event2);
      }).length;
    },
    hiddenCard(player2, name) {
      if (get.type(name) == "trick" && lib.inpile.includes(name) && player2.countCards("he") > 1) {
        return true;
      }
    },
    chooseButton: {
      dialog(event2, player2) {
        const list = get.inpileVCardList((info) => info[0] == "trick");
        return ui.create.dialog("制图", [list, "vcard"]);
      },
      filter(button, player2) {
        return get.event().getParent().filterCard({ name: button.link[2] }, player2, get.event().getParent());
      },
      check(button) {
        const player2 = get.player();
        return player2.getUseValue({ name: button.link[2] }) + 1;
      },
      backup(links, player2) {
        return {
          audio: "fjzhitu",
          filterCard(card2, player3) {
            const selected = ui.selected.cards;
            if (!selected.length) {
              return true;
            }
            return get.number(card2, player3) + selected.reduce((sum, card3) => sum + get.number(card3, get.player()), 0) <= 13;
          },
          selectCard: [2, Infinity],
          filterOk() {
            const selected = ui.selected.cards;
            if (!selected.length) {
              return false;
            }
            return selected.reduce((sum, card2) => sum + get.number(card2, get.player()), 0) == 13;
          },
          ai1(card2) {
            const player3 = get.player();
            const name = lib.skill.stdzhitu_backup.viewAs.name;
            if (ui.selected.cards.length > 1 || card2.name == name) {
              return 0;
            }
            const sum = ui.selected.cards.reduce((sumx, cardx) => sumx + get.number(cardx, player3), 0);
            if (sum + get.number(card2, player3) == 13) {
              return 7 - get.value(card2);
            }
            return 6 - get.value(card2);
          },
          position: "hes",
          popname: true,
          viewAs: { name: links[0][2] }
        };
      },
      prompt(links, player2) {
        return "将至少两张点数和等于13的牌当作" + get.translation(links[0][2]) + "使用";
      }
    },
    ai: {
      order: 10,
      result: {
        player: 1
      }
    }
  },
  //标杨彪
  stdyizheng: {
    audio: "yizheng",
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return game.hasPlayer((target2) => target2.hp >= player2.hp && player2.canCompare(target2));
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), (card2, player3, target2) => {
        return target2.hp >= player3.hp && player3.canCompare(target2);
      }).set("ai", (target2) => {
        const player3 = get.player(), hs = player3.getCards("h").sort(function(a, b) {
          return b.number - a.number;
        }), ts = target2.getCards("h").sort(function(a, b) {
          return b.number - a.number;
        }), eff = get.damageEffect(target2, player3, player3);
        if (hs[0].number > ts[0].number) {
          return eff;
        }
        return 0;
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      if (!player2.canCompare(target2)) {
        return;
      }
      const result = await player2.chooseToCompare(target2).forResult();
      if (result.winner) {
        const winner = result.winner, loser = winner == player2 ? target2 : player2;
        winner.line(loser);
        await loser.damage(winner);
      }
    }
  },
  stdrangjie: {
    audio: "rangjie",
    trigger: {
      player: "damageEnd"
    },
    filter(event2, player2) {
      return player2.canMoveCard() && event2.num > 0;
    },
    check(event2, player2) {
      return player2.canMoveCard(true);
    },
    content() {
      player.moveCard(true);
    }
  },
  //标皇甫嵩
  stdtaoluan: {
    audio: "sptaoluan",
    trigger: { global: "phaseJieshuBegin" },
    filter(event2, player2) {
      return player2.countCards("he") && event2.player != player2;
    },
    async cost(event2, trigger2, player2) {
      const result = await player2.chooseCard(get.prompt2(event2.skill, trigger2.player), "he").set("ai", (card2) => {
        const target2 = get.event().getTrigger().player, att = get.attitude(get.player(), target2), shan = target2.countCards("h", "shan");
        if (att < 0 && shan.length) {
          return (card2.name == "shan" ? 8 : 6) - get.value(card2);
        }
        return 0;
      }).forResult();
      if (result?.cards?.length) {
        event2.result = {
          bool: true,
          cost_data: result.cards,
          targets: [trigger2.player]
        };
      }
    },
    async content(event2, trigger2, player2) {
      const cards2 = event2.cost_data, target2 = trigger2.player;
      await player2.give(cards2, target2);
      await target2.showHandcards();
      await target2.modedDiscard(target2.getCards("h", (card2) => get.name(card2, target2) == "shan"));
    }
  },
  //标笮融
  stdcansi: {
    audio: "dccansi",
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return player2.countCards("he") && game.hasPlayer((target2) => player2.inRange(target2));
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(`残肆：令攻击范围内的一名角色获得你一张牌，然后视为对其依次使用【杀】,【决斗】`, true, (card2, player3, target2) => {
        return player3.inRange(target2);
      }).set("ai", (target2) => {
        const cards2 = [get.autoViewAs({ name: "sha", isCard: true }), get.autoViewAs({ name: "juedou", isCard: true })];
        return cards2.reduce((eff, card2) => eff + get.effect(target2, card2, get.player(), get.player()), 0);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      const { bool } = await target2.gainPlayerCard(player2, "he", true).forResult();
      if (!bool) {
        return;
      }
      await game.delayx();
      for (let name of ["sha", "juedou"]) {
        const card2 = get.autoViewAs({ name, isCard: true });
        if (player2.canUse(card2, target2, false, false)) {
          await player2.useCard(card2, target2, false);
        }
      }
    }
  },
  //标庞德公
  stdlingjian: {
    trigger: { player: "useCardAfter" },
    filter(event2, player2) {
      return player2.getHistory("useCard", (evt) => evt.card?.name == "sha").indexOf(event2) == 0 && !player2.hasHistory("sourceDamage", (evt) => evt.card && evt.getParent("useCard") === event2) && player2.hasSkill("stdmingshi", null, false, false) && player2.awakenedSkills.includes("stdmingshi");
    },
    forced: true,
    async content(event2, trigger2, player2) {
      player2.restoreSkill("stdmingshi");
      player2.popup("明识");
      game.log(player2, "恢复了技能", "#g【明识】");
    },
    ai: { combo: "stdmingshi" }
  },
  stdmingshi: {
    enable: "phaseUse",
    limited: true,
    skillAnimation: true,
    animationColor: "metal",
    chooseButton: {
      dialog(event2, player2) {
        const dialog = ui.create.dialog(`###明识###请选择一项`);
        dialog.add([
          [
            ["draw", "摸两张牌"],
            ["recover", "回复1点体力"],
            ["damage", "对一名角色造成1点伤害"],
            ["move", "移动场上的一张牌"]
          ],
          "textbutton"
        ]);
        return dialog;
      },
      filter(button) {
        const player2 = get.player();
        const { link } = button;
        if (link == "recover") {
          return player2.isDamaged();
        }
        if (link == "move") {
          return player2.canMoveCard();
        }
        return true;
      },
      check(button) {
        const player2 = get.player();
        const { link } = button;
        if (link == "recover") {
          return get.recoverEffect(player2, player2, player2);
        }
        if (link == "draw") {
          return get.effect(player2, { name: "wuzhong" }, player2, player2);
        }
        if (link == "damage") {
          return game.filterPlayer().map((target2) => get.damageEffect(target2, player2, player2)).sort((a, b) => b - a)[0];
        }
        if (button.link == "move") {
          return 2;
        }
        return 0;
      },
      backup(links, player2) {
        return {
          link: links[0],
          delay: false,
          async content(event2, trigger2, player3) {
            player3.awakenSkill("stdmingshi");
            const { link } = get.info(event2.name);
            switch (link) {
              case "draw":
                await player3.draw(2);
                break;
              case "recover":
                if (player3.isDamaged()) {
                  await player3.recover();
                }
                break;
              case "damage": {
                const result = await player3.chooseTarget(`明识：对一名角色造成1点伤害`, true).set("ai", (target2) => {
                  const player4 = get.player();
                  return get.damageEffect(target2, player4, player4);
                }).forResult();
                if (result?.targets?.length) {
                  player3.line(result.targets);
                  await result.targets[0].damage();
                }
                break;
              }
              case "move":
                if (player3.canMoveCard()) {
                  await player3.moveCard(true);
                }
                break;
            }
          }
        };
      }
    },
    ai: {
      order: 10,
      result: { player: 1 }
    },
    subSkill: { backup: {} }
  },
  //标南华老仙
  stdxianlu: {
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return game.hasPlayer((target2) => target2.countCards("e", { type: "equip" }));
    },
    filterTarget(card2, player2, target2) {
      return target2.countCards("e", { type: "equip" });
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      if (!target2.countCards("e", { type: "equip" })) {
        return false;
      }
      const result = await player2.discardPlayerCard(target2, "e", true, (card2) => get.type(card2) == "equip").forResult();
      if (result?.cards) {
        const card2 = result.cards[0];
        if (get.color(card2, false) == "red") {
          if (player2.canAddJudge("lebu")) {
            await player2.addJudge("lebu", [card2]);
          }
          await target2.damage();
        }
      }
    },
    ai: {
      order: 8,
      result: {
        target(player2, target2, card2) {
          return -1 / target2.countCards("e");
        }
      }
    }
  },
  stdtianshu: {
    mod: {
      maxHandcard(player2, num) {
        return num + game.countGroup() - 1;
      }
    }
  },
  //四象封印·太阳
  //田丰
  stdgangjian: {
    audio: "sijian",
    trigger: { global: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return event2.player.canUse({ name: "sha" }, player2);
    },
    check(event2, player2) {
      if (get.attitude(player2, event2.player) > 0) {
        return false;
      }
      if (player2.getEquip("bagua") || player2.getEquip("rw_bagua")) {
        return true;
      }
      if (player2.hasSkill("stdguijie") && player2.countCards("hes", { color: "red" }) > 1) {
        return true;
      }
      if (player2.countCards("hs", "shan") || player2.countCards("hs", "sha") && player2.hasSkill("ollongdan", null, null, false)) {
        return true;
      }
      return get.effect(player2, { name: "draw" }, player2, player2) + get.effect(event2.player, { name: "sha" }, event2.player, player2);
    },
    logTarget: "player",
    async content(event2, trigger2, player2) {
      const { player: target2 } = trigger2;
      const sha = get.autoViewAs({ name: "sha", isCard: true });
      if (target2.canUse({ name: "sha" }, player2)) {
        await target2.useCard(sha, player2);
        if (!game.hasPlayer2((current) => current.hasHistory("damage", (evt) => evt.getParent(3) == event2), true)) {
          target2.addTempSkill(event2.name + "_effect");
        }
      }
    },
    subSkill: {
      effect: {
        charlotte: true,
        mod: {
          cardEnabled(card2) {
            if (get.type2(card2) == "trick") {
              return false;
            }
          }
        },
        intro: { content: "本回合不能使用锦囊牌" }
      }
    }
  },
  stdguijie: {
    enable: ["chooseToRespond", "chooseToUse"],
    viewAs: {
      name: "shan",
      isCard: true
    },
    filter(event2, player2) {
      return player2.countCards("hes", { color: "red" }) > 1;
    },
    filterCard(card2) {
      return get.color(card2) == "red";
    },
    selectCard: 2,
    position: "hes",
    prompt: "弃置两张红色牌并摸一张牌，然后视为使用或打出一张【闪】",
    check(card2) {
      return 6.5 - get.value(card2);
    },
    log: false,
    async precontent(event2, trigger2, player2) {
      player2.logSkill("stdguijie");
      const cards2 = event2.result.cards;
      await player2.discard(cards2);
      event2.result.cards = [];
      await player2.draw();
    },
    ai: {
      order(item, player2) {
        if (player2.countCards("hes", (card2) => get.color(card2) == "red" && get.name(card2) != "shan") > 3) {
          return 7;
        }
        return 2;
      },
      respondShan: true,
      skillTagFilter(player2) {
        return player2.countCards("hes", { color: "red" }) > 1;
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
  //刘协
  stdtianming: {
    audio: "tianming",
    inherit: "tianming",
    check(event2, player2) {
      const hs = player2.getCards("h");
      if (hs.length <= 2 && hs.some((card2) => ["shan", "tao"].includes(card2.name))) {
        return false;
      }
      return player2.countCards("he") <= 3;
    },
    filter(event2, player2) {
      return event2.card.name == "sha" && player2.countCards("he");
    },
    async content(event2, trigger2, player2) {
      if (player2.countCards("he")) {
        await player2.modedDiscard(player2.getCards("he"));
      }
      await player2.draw(2);
      const target2 = game.findPlayer((current) => current.isMaxHp(true));
      if (target2?.countCards("he") && player2 != target2) {
        const result = await target2.chooseBool(get.prompt(event2.name), `弃置所有牌然后摸两张牌？`).set("choice", target2.countCards("he") <= 3).forResult();
        if (result?.bool) {
          await target2.modedDiscard(target2.getCards("he"));
          await target2.draw(2);
        }
      }
    }
  },
  stdmizhao: {
    audio: "mizhao",
    trigger: { player: "phaseJieshuBegin" },
    filter(event2, player2) {
      return player2.countCards("h") && game.countPlayer((current) => player2 != current) > 1;
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), 2, lib.filter.notMe).set("targetprompt", ["传诏对象", "讨伐对象"]).set("ai", (target2) => {
        const player3 = get.player();
        const att = get.attitude(player3, target2);
        if (ui.selected.targets.length) {
          const target1 = ui.selected.targets[0];
          const targets = game.filterPlayer((current) => player3 != current && current != target1 && get.effect(current, { name: "losehp" }, player3, target1, player3) > 0);
          if (targets.length) {
            return get.effect(target2, { name: "losehp" }, player3, target1, player3);
          }
        }
        return att;
      }).set("multitarget", true).forResult();
    },
    async content(event2, trigger2, player2) {
      const { targets } = event2;
      player2.line2(targets);
      const [target1, target2] = targets;
      if (player2.countCards("he")) {
        await player2.give(player2.getCards("he"), target1);
      }
      const result = await target1.chooseBool(get.prompt(event2.name), `与${get.translation(target2)}各失去1点体力？`).set("choice", get.effect(target1, { name: "losehp" }, player2, target1, player2) + get.effect(target2, { name: "losehp" }, player2, target1, player2) > 0).forResult();
      if (!result?.bool) {
        return;
      }
      for (const target3 of targets.sortBySeat()) {
        await target3.loseHp();
      }
    }
  },
  stdzhongyan: {
    trigger: { global: "die" },
    filter(event2, player2) {
      return event2.player.group == "qun" && player2.isDamaged();
    },
    zhuSkill: true,
    frequent: true,
    async content(event2, trigger2, player2) {
      await player2.recover();
    }
  },
  //司马昭
  stdzhaoxin: {
    audio: "xinfu_zhaoxin",
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return player2.countCards("h");
    },
    forced: true,
    async content(event2, trigger2, player2) {
      const hs = player2.getCards("h");
      if (!hs.length) {
        return;
      }
      await player2.showCards(hs, `${get.translation(player2)}发动了【${get.translation(event2.name)}】`);
      const colors = hs.map((card2) => get.color(card2)).toUniqued();
      if (colors.length !== 1) {
        return;
      }
      const result = await player2.chooseTarget(true, get.prompt2(event2.name)).set("ai", (target2) => {
        const player3 = get.player();
        return get.damageEffect(target2, player3, player3);
      }).forResult();
      if (result?.bool && result?.targets?.length) {
        await result.targets[0].damage();
      }
    }
  },
  //郭照
  stdwufei: {
    audio: "wufei",
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return game.hasPlayer((current) => current.hasSex("female") && current.countCards("h"));
    },
    async cost(event2, trigger2, player2) {
      const list = game.filterPlayer((current) => current.hasSex("female") && current.countCards("h"));
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), (card2, player3, target2) => {
        return get.event().list.includes(target2);
      }).set("ai", (target2) => {
        const player3 = get.player();
        const att = Math.sign(get.attitude(player3, target2));
        const list2 = get.event().list.filter((current) => current.hasSex("female") && current.countCards("h") && get.attitude(player3, current) < 0);
        if (list2.length) {
          return -att * target2.countCards("h");
        }
        const bool = Object.keys(lib.color).some((color) => {
          const num = target2.countCards("h", (card2) => get.color(card2, target2) == color);
          return num > 0 && num <= 2;
        });
        return att * (bool ? 1 : 0);
      }).set("list", list).forResult();
    },
    async content(event2, trigger2, player2) {
      const {
        targets: [target2]
      } = event2;
      if (!target2.countCards("h")) {
        return;
      }
      await target2.showHandcards();
      const list = [], bannedList = [], indexs = Object.keys(lib.color), hs = target2.getCards("h");
      for (const card2 of hs) {
        const color = get.color(card2, target2);
        list.add(color);
        if (!lib.filter.cardDiscardable(card2, target2, "stdwufei")) {
          bannedList.add(color);
        }
        if (bannedList.length == indexs.length) {
          break;
        }
      }
      list.removeArray(bannedList);
      list.sort((a, b) => indexs.indexOf(a) - indexs.indexOf(b));
      if (!list.length) {
        return;
      }
      const dialog = ["诬诽：弃置一种颜色的所有牌并摸一张牌"];
      for (let i = 0; i < list.length; i++) {
        const colorx = list[i];
        const cards2 = hs.filter((card2) => get.color(card2, target2) == colorx);
        if (cards2.length) {
          dialog.addArray([`<span class="text center">${get.translation(colorx)}</span>`, cards2]);
        }
      }
      const result = list.length > 1 ? await target2.chooseControl(list).set("ai", () => {
        const { player: player3, controls } = get.event();
        const cards2 = player3.getCards("h");
        return controls.sort((a, b) => {
          return get.value(cards2.filter((card2) => get.color(card2) === a)) - get.value(cards2.filter((card2) => get.color(card2) === b));
        })[0];
      }).set("dialog", dialog).forResult() : { control: list[0] };
      const control = result?.control;
      if (control) {
        target2.popup(control);
        game.log(target2, "选择了", "#g" + get.translation(control));
        const cards2 = target2.getCards("h").filter((card2) => get.color(card2) === control);
        if (cards2.length) {
          await target2.discard(cards2);
          await target2.draw();
        }
      }
    }
  },
  stdjiaochong: {
    audio: "yichong",
    inherit: "stdwufei",
    trigger: { global: "phaseJieshuBegin" },
    filter(event2, player2) {
      return event2.player.hasSex("male") && game.hasPlayer((current) => current.hasSex("female") && current.countCards("h"));
    },
    async content(event2, trigger2, player2) {
      await player2.useSkill("stdwufei", event2.targets);
    },
    derivation: "stdwufei"
  },
  //贾逵
  stdzhongzuo: {
    audio: "zhongzuo",
    trigger: { global: "phaseEnd" },
    filter(event2, player2) {
      return ["damage", "sourceDamage"].some((key) => player2.hasHistory(key));
    },
    forced: true,
    logTarget: "player",
    async content(event2, trigger2, player2) {
      await game.asyncDraw([trigger2.player, player2].sortBySeat());
    }
  },
  stdwanlan: {
    audio: "wanlan",
    inherit: "wanlan",
    filter(event2, player2) {
      return event2.player != player2 && event2.player.hp <= 0 && player2.countCards("h");
    },
    check(event2, player2) {
      if (get.attitude(player2, event2.player) < 4) {
        return false;
      }
      if (player2.countCards("hs", (card2) => player2.canSaveCard(card2, event2.player)) >= 1 - event2.player.hp) {
        return false;
      }
      if (event2.player == player2 || event2.player == get.zhu(player2)) {
        return true;
      }
      if (get.recoverEffect(event2.player, player2, player2) <= 0) {
        return false;
      }
      return !player2.hasUnknown();
    },
    async content(event2, trigger2, player2) {
      player2.awakenSkill(event2.name);
      const { player: target2 } = trigger2;
      if (player2.countCards("h")) {
        await player2.give(player2.getCards("h"), target2);
      }
      await target2.recoverTo(1);
    }
  },
  //虞翻
  stdzongxuan: {
    audio: "zongxuan",
    trigger: {
      player: "loseAfter",
      global: "loseAsyncAfter"
    },
    filter(event2, player2) {
      if (event2.type != "discard" || !game.hasPlayer((current) => current.countDiscardableCards(player2, "ej"))) {
        return false;
      }
      return event2.getl?.(player2)?.hs?.someInD("d");
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), (card2, player3, target2) => {
        return target2.countDiscardableCards(player3, "ej");
      }).set("ai", (target2) => {
        const player3 = get.player();
        return get.effect(target2, { name: "guohe_copy", position: "ej" }, player3, player3);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const {
        targets: [target2]
      } = event2;
      if (target2.countDiscardableCards(player2, "ej")) {
        await player2.discardPlayerCard(target2, "ej", true);
      }
    }
  },
  stdzhiyan: {
    audio: "zhiyan",
    getcards: () => get.discarded().filterInD("d").filter((card2) => get.type(card2) == "equip"),
    trigger: { player: "phaseJieshuBegin" },
    filter(event2, player2) {
      return get.info("stdzhiyan").getcards().length;
    },
    async cost(event2, trigger2, player2) {
      const cards2 = get.info(event2.skill).getcards();
      const result = await player2.chooseButton(["直言：获得其中一张牌", cards2]).set("ai", (button) => {
        return get.value(button.link);
      }).forResult();
      event2.result = {
        bool: result?.bool,
        cost_data: result?.links
      };
    },
    async content(event2, trigger2, player2) {
      await player2.gain(event2.cost_data, "gain2");
    }
  },
  //诸葛恪
  stdaocai: {
    audio: "aocai",
    trigger: { global: "phaseEnd" },
    filter(event2, player2) {
      return !player2.countCards("h");
    },
    async cost(event2, trigger2, player2) {
      const cards2 = get.cards(2, true);
      const result = await player2.chooseButton(["傲才：获得其中一张牌", cards2]).set("ai", (button) => {
        return get.value(button.link);
      }).forResult();
      event2.result = {
        bool: result?.bool,
        cost_data: result?.links
      };
    },
    async content(event2, trigger2, player2) {
      await player2.gain(event2.cost_data, "gain2");
    }
  },
  stdduwu: {
    audio: "duwu",
    inherit: "duwu",
    usable: 1,
    filter(event2, player2) {
      return player2.countCards("h") && game.hasPlayer((current) => get.info("stdduwu").filterTarget(null, player2, current));
    },
    filterCard: true,
    selectCard: -1,
    position: "h",
    filterTarget(card2, player2, target2) {
      return player2.inRange(target2);
    },
    check: (card2) => 1,
    async content(event2, trigger2, player2) {
      await event2.target.damage("nocard");
    },
    ai: {
      damage: true,
      order(item, player2) {
        if (game.hasPlayer((current) => player2.inRange(current) && get.effect(current, "stdduwu", player2, player2) > 0) && !player2.hasCard((card2) => player2.hasValueTarget(card2) > 0, "h")) {
          return 10;
        }
        return 2;
      },
      result: {
        target(player2, target2) {
          return get.damageEffect(target2, player2);
        }
      },
      threaten: 1.5,
      expose: 0.3
    }
  },
  //孟达
  stdzhuan: {
    audio: "dclibang",
    trigger: { player: "damageEnd" },
    filter(event2, player2) {
      return player2.getHistory("damage").indexOf(event2) == 0;
    },
    forced: true,
    async content(event2, trigger2, player2) {
      await player2.draw(3);
      const { source } = trigger2;
      if (source?.isIn() && player2.countGainableCards(source, "he")) {
        await source.gainPlayerCard(player2, "he", true);
      }
    }
  },
  //曹真
  stdsidi: {
    audio: "sidi",
    trigger: { global: "respond" },
    frequent: true,
    filter: (event2) => event2.card?.name == "sha",
    async content(event2, trigger2, player2) {
      await player2.draw();
    }
  },
  //董允
  stdbingzheng: {
    audio: "bingzheng",
    trigger: { player: "phaseJieshuBegin" },
    filter(event2, player2) {
      return game.hasPlayer((target2) => target2.countDiscardableCards(target2, "he"));
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), (card2, player3, target2) => {
        return target2.countDiscardableCards(target2, "he");
      }).set("ai", (target2) => {
        const player3 = get.player();
        if (!target2.countCards("e") && target2.countCards("h") - 1 == target2.getHp()) {
          return get.effect(target2, { name: "guohe_copy2" }, player3, player3);
        }
        return get.effect(target2, { name: "guohe_copy2" }, player3, player3) + get.effect(player3, { name: "losehp" }, player3, player3);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      if (target2.countDiscardableCards(target2, "he")) {
        await target2.chooseToDiscard("he", true);
      }
      if (target2.countCards("h") != target2.getHp()) {
        await player2.loseHp();
      }
    }
  },
  stdduliang: {
    trigger: { player: "damageEnd" },
    filter: (event2) => event2.num > 0,
    async content(event2, trigger2, player2) {
      await player2.draw();
      if (player2.countCards("h") == player2.getHp() && player2.isDamaged()) {
        await player2.recover();
      }
    }
  },
  //鲍三娘
  stdzhennan: {
    audio: "xinfu_zhennan",
    trigger: { global: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return event2.player != player2 && player2.countDiscardableCards(player2, "h");
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseToDiscard(get.prompt2(event2.skill, trigger2.player)).set("ai", (card2) => {
        const { goon } = get.event();
        return goon ? 6.5 - get.value(card2) : 0;
      }).set("goon", get.attitude(player2, trigger2.player) > 0).forResult();
    },
    logTarget: "player",
    async content(event2, trigger2, player2) {
      const { player: target2 } = trigger2;
      player2.addTempSkill(event2.name + "_effect");
      player2.markAuto(event2.name + "_effect", [target2]);
      target2.addTempSkill(event2.name + "_ai");
    },
    subSkill: {
      effect: {
        charlotte: true,
        onremove: true,
        trigger: { global: "useCardAfter" },
        filter(event2, player2) {
          return player2.getStorage("stdzhennan_effect").includes(event2.player);
        },
        forced: true,
        popup: false,
        async content(event2, trigger2, player2) {
          player2.unmarkAuto(event2.name, [trigger2.player]);
          if (get.color(trigger2.card) == "red") {
            const cards2 = trigger2.cards?.filterInD("od");
            if (cards2.length) {
              player2.logSkill(event2.name, trigger2.player);
              await trigger2.player.gain(cards2, "gain2");
            }
          }
        }
      },
      ai: {
        charlotte: true,
        mod: {
          aiOrder(player2, card2, num) {
            if (get.itemtype(card2) == "card" && get.color(card2) == "red" && !["equip", "delay"].includes(get.type(card2))) {
              return num + 10;
            }
          }
        },
        trigger: { player: "useCard1" },
        forced: true,
        popup: false,
        async content(event2, trigger2, player2) {
          player2.removeSkill(event2.name);
        }
      }
    }
  },
  stdshuyong: {
    audio: "meiyong",
    trigger: { global: "useCard" },
    frequent: true,
    filter(event2, player2) {
      const target2 = event2.player, last = target2.getLastUsed(1);
      if (target2 == player2 || _status.currentPhase != target2) {
        return false;
      }
      return last?.card?.name == event2.card.name;
    },
    async content(event2, trigger2, player2) {
      await player2.draw();
    }
  },
  //刘巴
  stdduanbi: {
    trigger: { player: "phaseJieshuBegin" },
    filter(event2, player2) {
      return player2.countCards("h");
    },
    check(event2, player2) {
      if (player2.countCards("h") <= 2) {
        return true;
      }
      const val = player2.getCards("h").reduce((sum, card2) => sum + get.value(card2), 0);
      return val <= 16;
    },
    async content(event2, trigger2, player2) {
      await player2.modedDiscard(player2.getCards("h"));
      if (game.countPlayer() < 2) {
        return;
      }
      const result = await player2.chooseTarget(`锻币：令两名角色各摸两张牌`, 2, true).set("ai", (target2) => {
        const player3 = get.player();
        return get.effect(target2, { name: "draw" }, player3, player3) * 2;
      }).forResult();
      if (result?.targets?.length) {
        const targets = result.targets.sortBySeat();
        player2.line(targets);
        await game.asyncDraw(targets, 2);
      }
    }
  },
  //孔融
  stdlirang: {
    getCards(event2) {
      return game.getGlobalHistory("everything", (evt) => {
        if (!evt.cards?.length) {
          return false;
        }
        return (evt.name === "cardsDiscard" || evt.position == ui.discardPile) && evt.getParent("phaseDiscard") == event2;
      }).reduce((cards2, evt) => cards2.addArray(evt.cards.filterInD("d")), []).filter((card2) => get.color(card2) == "red");
    },
    trigger: { global: "phaseDiscardEnd" },
    filter(event2, player2) {
      return event2.player != player2 && player2.countCards("he");
    },
    logTarget: "player",
    async cost(event2, trigger2, player2) {
      const { player: target2 } = trigger2;
      const cards2 = get.info(event2.skill).getCards(trigger2);
      let str = `交给${get.translation(target2)}一张牌`;
      if (cards2.length) {
        str += `然后获得${get.translation(cards2)}`;
      }
      event2.result = await player2.chooseCard(get.prompt(event2.skill, target2), "he", str).set("ai", (card2) => {
        const { player: player3, targetx, cardsx } = get.event();
        const att = get.attitude(player3, targetx);
        if (att > 0 && cardsx.length) {
          return 8 - get.value(card2);
        }
        if (att <= 0 && cardsx.length >= 2) {
          return 6 - get.value(card2);
        }
        return 0;
      }).set("targetx", target2).set("cardsx", cards2).forResult();
    },
    async content(event2, trigger2, player2) {
      await player2.give(event2.cards, trigger2.player);
      const cards2 = get.info(event2.name).getCards(trigger2);
      if (cards2.length) {
        await player2.gain(cards2, "gain2");
      }
    }
  },
  //邹氏
  stdhuoshui: {
    audio: "rehuoshui",
    trigger: { global: "damageBegin3" },
    filter(event2, player2) {
      return event2.player != player2 && event2.player.countCards("j");
    },
    forced: true,
    async content(event2, trigger2, player2) {
      trigger2.num++;
    }
  },
  stdqingcheng: {
    audio: "reqingcheng",
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      if (player2.hasJudge("lebu")) {
        return false;
      }
      return player2.countCards("hes", (card2) => get.info("stdqingcheng").filterCard(card2, player2)) > 1;
    },
    filterCard(card2, player2) {
      return get.type2(card2, player2) != "trick" && get.color(card2, player2) == "red";
    },
    position: "he",
    selectCard: 2,
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.canAddJudge("lebu");
    },
    filterOk() {
      const {
        cards: cards2,
        targets: [target2]
      } = ui.selected, player2 = get.player(), canAdd = (current, card2) => {
        const lebu = get.autoViewAs({ name: "lebu", cards: [card2] }, [card2]);
        return lib.filter.judge(lebu, player2, current);
      };
      return canAdd(player2, cards2[0]) && canAdd(target2, cards2[1]);
    },
    check(card2) {
      return 8 - get.value(card2);
    },
    discard: false,
    lose: false,
    delay: false,
    async content(event2, trigger2, player2) {
      const { cards: cards2 } = event2;
      const targets = [player2, event2.target].sortBySeat();
      for (let i = 0; i < cards2.length; i++) {
        const card2 = get.autoViewAs({ name: "lebu", cards: [cards2[i]] }), target2 = targets[i];
        if (player2 == target2 && player2.canAddJudge(card2) || player2 != target2 && player2.canUse(card2, target2)) {
          await player2.useCard(card2, [cards2[i]], targets[i]);
        }
      }
    },
    ai: {
      order: 8,
      result: {
        target(player2, target2) {
          return get.effect(target2, { name: "lebu" }, player2, target2);
        }
      }
    }
  },
  //孙鲁育
  stdmumu: {
    audio: "mumu",
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return player2.countDiscardableCards(player2, "h");
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseToDiscard(get.prompt2(event2.skill), "h").set("ai", (card2) => {
        if (get.event().goon) {
          return 6 - get.value(card2);
        }
        return 0;
      }).set("goon", player2.canMoveCard(true, true)).forResult();
    },
    async content(event2, trigger2, player2) {
      if (player2.canMoveCard(null, true)) {
        await player2.moveCard().set("nojudge", true);
      }
    }
  },
  stdmeibu: {
    audio: "meibu",
    trigger: { global: "useCard" },
    filter(event2, player2) {
      return event2.player.countDiscardableCards(event2.player, "h") && event2.player.getEquips(1).length && event2.card?.name == "sha";
    },
    logTarget: "player",
    check: (event2, player2) => get.attitude(player2, event2.player) < 0,
    async content(event2, trigger2, player2) {
      const { player: target2 } = trigger2;
      if (target2.countDiscardableCards(target2, "h")) {
        await target2.chooseToDiscard("h", true);
      }
    }
  },
  //周鲂
  stdqijian: {
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return game.hasPlayer((current) => game.hasPlayer((currentx) => current.countCards("h") + currentx.countCards("h") == 7));
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), 2).set("filterTarget", (card2, player3, target2) => {
        if (!ui.selected.targets.length) {
          return true;
        }
        const targetx = ui.selected.targets[0];
        return targetx.countCards("h") + target2.countCards("h") == 7;
      }).set("complexTarget", true).set("ai", (target2) => {
        const player3 = get.player();
        if (!ui.selected.targets.length) {
          return get.attitude(player3, target2);
        }
        return 1;
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const targets = event2.targets.sortBySeat();
      const list = ["摸牌", "弃牌"];
      for (const target2 of targets) {
        if (!target2.isIn()) {
          continue;
        }
        const targetx = targets.filter((current) => current != target2)[0];
        let result;
        const goon = targetx.countDiscardableCards(target2, "he");
        if (goon) {
          result = await target2.chooseControl(list).set("prompt", `七笺：弃置${get.translation(targetx)}一张牌或令其摸一张牌`).set("ai", () => {
            const { player: player3, targetx: targetx2 } = get.event();
            const att = get.attitude(player3, targetx2);
            return att > 0 ? "摸牌" : "弃牌";
          }).set("targetx", targetx).forResult();
        } else {
          result = { control: "摸牌" };
        }
        const control = result?.control;
        if (!targetx.isIn() || !control) {
          continue;
        }
        target2.popup(control);
        game.log(target2, "选择", "#g" + control);
        target2.line(targetx);
        if (control == "摸牌") {
          await targetx.draw();
        } else if (control == "弃牌" && targetx.countDiscardableCards(target2, "he")) {
          await target2.discardPlayerCard(targetx, "he", true);
        }
      }
    }
  },
  stdyoudi: {
    audio: "xinfu_youdi",
    trigger: { player: "phaseJieshuBegin" },
    filter(event2, player2) {
      return player2.countCards("hes", (card2) => player2.hasUseTarget(get.autoViewAs({ name: "shunshou" }, [card2]), false, false) && get.color(card2, player2) == "red");
    },
    direct: true,
    clearTime: true,
    async content(event2, trigger2, player2) {
      const next = player2.chooseToUse();
      next.set("openskilldialog", get.prompt2(`${event2.name}`));
      next.set("norestore", true);
      next.set("_backupevent", `${event2.name}_backup`);
      next.set("custom", {
        add: {},
        replace: { window() {
        } }
      });
      next.backup(`${event2.name}_backup`);
      next.set("logSkill", event2.name);
      await next;
    },
    subSkill: {
      backup: {
        filterCard(card2, player2) {
          return get.itemtype(card2) == "card" && get.color(card2, player2) == "red";
        },
        position: "hes",
        viewAs: { name: "shunshou" },
        check(card2) {
          return 7 - get.value(card2);
        },
        log: false
      }
    }
  },
  //四象封印·少阳
  //张苞
  stdjuezhu: {
    audio: 2,
    trigger: {
      player: "damageEnd",
      source: "damageSource"
    },
    filter(event2, player2, name) {
      if (name == "damageSource") {
        return true;
      }
      return event2.source?.isIn() && player2.canUse({ name: "juedou", isCard: true }, event2.source);
    },
    forced: true,
    async content(event2, trigger2, player2) {
      if (event2.triggername == "damageSource") {
        player2.addTempSkill("stdjuezhu_paoxiao");
      } else {
        let card2 = { name: "juedou", isCard: true };
        if (player2.canUse(card2, trigger2.source)) {
          await player2.useCard(card2, trigger2.source);
        }
      }
    },
    subSkill: {
      paoxiao: {
        charlotte: true,
        mod: {
          cardUsable() {
            return Infinity;
          }
        }
      }
    }
  },
  stdchengji: {
    audio: 2,
    enable: ["chooseToRespond", "chooseToUse"],
    filterCard(card2, player2) {
      if (!ui.selected.cards.length) {
        return true;
      }
      return ui.selected.cards.every((cardx) => get.color(cardx, player2) != get.color(card2, player2));
    },
    complexCard: true,
    position: "hes",
    selectCard: 2,
    viewAs: { name: "sha" },
    viewAsFilter(player2) {
      if (player2.countCards("hes") < 2) {
        return false;
      }
      let color = get.color(player2.getCards("hes")[0], player2);
      return _status.connectMode || player2.getCards("hes").some((card2) => get.color(card2, player2) != color);
    },
    prompt: "将两张颜色不同的牌当杀使用或打出",
    check(card2) {
      const val = get.value(card2);
      if (_status.event.name == "chooseToRespond") {
        return 1 / Math.max(0.1, val);
      }
      return 5 - val;
    },
    ai: {
      skillTagFilter(player2) {
        if (player2.countCards("hes") < 2) {
          return false;
        }
        let color = get.color(player2.getCards("hes")[0], player2);
        return _status.connectMode || player2.getCards("hes").some((card2) => get.color(card2, player2) != color);
      },
      respondSha: true
    }
  },
  //刘谌
  stdzhanjue: {
    audio: "zhanjue",
    enable: "phaseUse",
    usable: 1,
    filterCard: true,
    selectCard: -1,
    position: "h",
    filter(event2, player2) {
      let hs = player2.getCards("h");
      if (!hs.length) {
        return false;
      }
      for (let i = 0; i < hs.length; i++) {
        let mod2 = game.checkMod(hs[i], player2, "unchanged", "cardEnabled2", player2);
        if (mod2 === false) {
          return false;
        }
      }
      return event2.filterCard(get.autoViewAs({ name: "juedou" }, hs));
    },
    viewAs: { name: "juedou" },
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
          return (!arg || arg.card && get.name(arg.card) === "tao") && player2.isPhaseUsing() && !player2.countSkill("stdzhanjue") && player2.hasCard((card2) => {
            return get.name(card2) !== "tao";
          }, "h");
        }
      }
    },
    group: "stdzhanjue_draw",
    subSkill: {
      draw: {
        trigger: {
          player: "useCardAfter"
        },
        forced: true,
        charlotte: true,
        popup: false,
        filter(event2, player2) {
          return event2.skill == "stdzhanjue";
        },
        content() {
          player.draw();
        }
      }
    }
  },
  stdqinwang: {
    audio: "qinwang1",
    zhuSkill: true,
    group: "stdqinwang_effect",
    filter(event2, player2) {
      if (!player2.hasZhuSkill("stdqinwang") || event2.stdqinwang) {
        return false;
      }
      return game.hasPlayer((current) => current != player2 && current.group == "shu");
    },
    enable: "chooseToRespond",
    viewAs: { name: "sha" },
    filterCard() {
      return false;
    },
    selectCard: -1,
    ai: {
      order() {
        return get.order({ name: "sha" }) + 0.3;
      },
      respondSha: true,
      skillTagFilter(player2) {
        if (!player2.hasZhuSkill("stdqinwang") || !game.hasPlayer((current) => current != player2 && current.group == "shu")) {
          return false;
        }
      }
    },
    subSkill: {
      effect: {
        audio: "stdqinwang",
        trigger: {
          player: "respondBegin"
        },
        filter(event2, player2) {
          return event2.skill == "stdqinwang";
        },
        forced: true,
        async content(event2, trigger2, player2) {
          delete trigger2.skill;
          trigger2.getParent().set("stdqinwang", true);
          while (true) {
            if (event2.current == void 0) {
              event2.current = player2.next;
            }
            if (event2.current == player2) {
              trigger2.cancel();
              trigger2.getParent().goto(0);
              return;
            } else if (event2.current.group == "shu") {
              const discardEvent = event2.current.chooseToDiscard("是否弃置一张牌，视为" + get.translation(player2) + "打出一张杀？");
              discardEvent.set("filterCard", (card2) => get.type(card2) == "basic");
              discardEvent.set("ai", (card2) => {
                const event3 = _status.event;
                if (get.attitude(event3.player, event3.source) >= 2) {
                  return 6 - get.value(card2);
                }
                return 0;
              });
              discardEvent.set("source", player2);
              discardEvent.set("skillwarn", "弃置一张牌，视为" + get.translation(player2) + "打出一张杀");
              const { bool } = await discardEvent.forResult();
              if (bool) {
                if (typeof event2.current.ai.shown == "number" && event2.current.ai.shown < 0.95) {
                  event2.current.ai.shown += 0.3;
                  if (event2.current.ai.shown > 0.95) {
                    event2.current.ai.shown = 0.95;
                  }
                }
                return;
              } else {
                event2.current = event2.current.next;
              }
            } else {
              event2.current = event2.current.next;
            }
          }
        }
      }
    }
  },
  //关索
  stdzhengnan: {
    audio: "zhengnan",
    trigger: {
      player: "phaseZhunbeiBegin"
    },
    filter(event2, player2) {
      return player2.countCards("hs", { color: "red" });
    },
    direct: true,
    clearTime: true,
    async content(event2, trigger2, player2) {
      const next = player2.chooseToUse();
      next.set("openskilldialog", get.prompt2("stdzhengnan"));
      next.set("norestore", true);
      next.set("_backupevent", "stdzhengnan_backup");
      next.set("custom", {
        add: {},
        replace: { window() {
        } }
      });
      next.backup("stdzhengnan_backup");
      await next;
      if (game.getGlobalHistory("everything", (evt) => {
        if (evt.name != "die" || evt?.source != player2) {
          return false;
        }
        return evt.reason?.getParent(event2.name) == event2;
      }).length > 0) {
        await player2.draw(2);
      }
    },
    subSkill: {
      backup: {
        audio: "stdzhengnan",
        filterCard(card2) {
          return get.itemtype(card2) == "card" && get.color(card2) == "red";
        },
        position: "hs",
        viewAs: {
          name: "sha"
        },
        prompt: "将一张红色手牌当杀使用",
        check(card2) {
          return 7 - get.value(card2);
        }
      }
    }
  },
  //夏侯霸
  stdbaobian: {
    audio: "rebaobian",
    trigger: { player: "phaseUseBegin" },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), (card2, player3, target2) => {
        return target2.countCards("h");
      }).set("ai", (target2) => {
        const player3 = get.player();
        if (player3.hp < 2) {
          return 0;
        }
        return get.effect(target2, { name: "guohe_copy2" }, player3, player3);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      await player2.loseHp();
      const target2 = event2.targets[0], card2 = { name: "sha", isCard: true };
      const { cards: cards2 } = await target2.chooseToDiscard("h", true).forResult();
      if (get.type(cards2[0]) == "basic" && player2.canUse(card2, target2, false)) {
        await player2.useCard(card2, target2, false);
      }
    }
  },
  //曹睿
  stdhuituo: {
    audio: "huituo",
    trigger: {
      player: "damageEnd"
    },
    async content(event2, trigger2, player2) {
      const cards2 = game.cardsGotoOrdering(get.cards(2)).cards;
      await player2.showCards(cards2, get.translation(player2) + "发动了【恢拓】");
      const next = player2.chooseToMove("恢拓：是否交换任意张牌？");
      next.set("list", [
        ["展示牌", cards2, "sbhuanshi_tag"],
        ["你的手牌", player2.getCards("h")]
      ]);
      next.set("filterMove", (from, to) => {
        return typeof to !== "number";
      });
      next.set("processAI", (list) => {
        let cards3 = [...list[0][1], ...list[1][1]], player3 = get.player();
        cards3.sort((a, b) => player3.getUseValue(a, null, true) - player3.getUseValue(b, null, true));
        return [cards3.slice(0, 2), cards3.slice(2)];
      });
      const { bool, moved } = await next.forResult();
      if (bool) {
        const puts = player2.getCards("h", (i) => moved[0].includes(i)), gains = cards2.filter((i) => moved[1].includes(i));
        if (puts.length && gains.length) {
          player2.$throw(puts, 1e3);
          await player2.lose(puts, ui.special);
          await player2.gain(gains, "gain2");
        }
        const cardx = moved[0].slice();
        if (cardx.length) {
          await game.cardsGotoOrdering(cardx);
          await game.cardsGotoPile(cardx.slice().reverse(), "insert");
          game.updateRoundNumber();
        }
      }
    }
  },
  stdmingjian: {
    audio: "mingjian",
    enable: "phaseUse",
    usable: 1,
    filterCard: true,
    filterTarget: lib.filter.notMe,
    check(card2) {
      return 7 - get.value(card2);
    },
    lose: false,
    discard: false,
    delay: false,
    async content(event2, trigger2, player2) {
      const cards2 = event2.cards, target2 = event2.target;
      await player2.showCards(cards2, get.translation(player2) + "发动了【明鉴】");
      await player2.give(cards2, target2, true);
      await target2.chooseToUse(
        function(card2, player3, event3) {
          if (!get.event().cardx?.includes(card2)) {
            return false;
          }
          return lib.filter.filterCard.apply(this, arguments);
        },
        "明鉴：是否使用" + get.translation(cards2) + "？"
      ).set("cardx", cards2);
    },
    ai: {
      order: 7,
      result: {
        target(player2, target2) {
          if (!ui.selected.cards.length) {
            return 0;
          }
          return target2.getUseValue(ui.selected.cards[0]) + 1;
        }
      }
    }
  },
  //刘晔
  stdpolu: {
    audio: "polu",
    trigger: {
      player: "damageEnd",
      source: "damageSource"
    },
    filter(event2, player2) {
      return event2.player.countDiscardableCards(player2, "e");
    },
    async cost(event2, trigger2, player2) {
      const { bool, links: cards2 } = await player2.choosePlayerCard("e", trigger2.player, get.prompt2(event2.skill, trigger2.player)).set("ai", (button) => {
        const target2 = get.event().getTrigger().player, player3 = get.player();
        if (get.attitude(player3, target2) <= 0) {
          return get.value(button.link) + 2;
        }
        if (player3 == target2) {
          return 5 - get.value(button.link);
        }
        return 0;
      }).forResult();
      event2.result = {
        bool,
        cards: cards2,
        targets: [trigger2.player]
      };
    },
    async content(event2, trigger2, player2) {
      const { targets, cards: cards2 } = event2;
      await targets[0].modedDiscard(cards2, player2);
      if (player2 == targets[0]) {
        await player2.draw();
      }
    }
  },
  stdchoulve: {
    audio: "choulve",
    enable: "phaseUse",
    usable: 1,
    filterCard: true,
    filterTarget: lib.filter.notMe,
    check(card2) {
      return 7 - get.value(card2);
    },
    lose: false,
    discard: false,
    delay: false,
    async content(event2, trigger2, player2) {
      const cards2 = event2.cards, target2 = event2.target;
      await player2.give(cards2, target2);
      const { bool, cards: cardx } = await target2.chooseCard(`是否展示并交给${get.translation(player2)}一张装备牌？`, "he").set("filterCard", (card2) => get.type(card2) == "equip").set("ai", (card2) => {
        if (get.event().att <= 0) {
          return 0;
        }
        return 5 - get.value(card2);
      }).set("att", get.attitude(target2, player2)).forResult();
      if (bool) {
        await target2.showCards(cardx);
        await target2.give(cardx, player2);
      }
    },
    ai: {
      order: 7,
      result: {
        target: 1
      }
    }
  },
  //郭皇后
  stdjiaozhao: {
    audio: "rejiaozhao",
    enable: "phaseUse",
    usable: 1,
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.countCards("h") > 1;
    },
    async content(event2, trigger2, player2) {
      const { target: target2 } = event2;
      if (!target2.countCards("h")) {
        return;
      }
      const result = await target2.chooseCard("展示两张手牌", "h", 2, true).forResult();
      if (!result?.cards?.length) {
        return;
      }
      const { cards: cards2 } = result;
      await target2.showCards(cards2);
      if (event2.getParent(2).name == "stddanxin") {
        const result2 = await player2.chooseButton(["是否选择其中一张牌获得？", cards2]).set("ai", (button) => {
          if (button.link.name == "du") {
            return 0;
          }
          return get.value(button.link) + 1;
        }).forResult();
        if (result2?.bool && result2?.links?.length) {
          await player2.gain(result2.links, target2, "giveAuto");
        }
      } else {
        if (!player2.countCards("h")) {
          return;
        }
        const cardx = player2.getCards("h").sort((a, b) => player2.getUseValue(a) - player2.getUseValue(b))[0];
        const result2 = await player2.chooseButton(2, ["你的手牌", player2.getCards("h"), `${get.translation(target2)}展示的手牌`, cards2]).set("filterButton", (button) => {
          const { player: player3, cards: cards3 } = get.event();
          if (!ui.selected.buttons.length) {
            return true;
          }
          let card2 = ui.selected.buttons[0].link;
          if (cards3.includes(card2)) {
            return !cards3.includes(button.link);
          }
          return cards3.includes(button.link);
        }).set("cards", cards2).set("cardx", cardx).set("ai", (button) => {
          const { player: player3, cards: cards3, cardx: cardx2 } = get.event();
          if (ui.selected.buttons.length) {
            return button.link == cardx2;
          }
          if (!cards3.includes(button.link)) {
            return 0;
          }
          if (player3.getUseValue(button.link) > player3.getUseValue(cardx2)) {
            return 0;
          }
          return player3.getUseValue(button.link) + 1;
        }).forResult();
        if (result2?.bool && result2?.links?.length) {
          const cards1 = result2.links.filter((card2) => !cards2.includes(card2)), cards22 = result2.links.filter((card2) => cards2.includes(card2));
          await player2.swapHandcards(target2, cards1, cards22);
        }
      }
    },
    ai: {
      order: 7,
      result: {
        target(player2, target2) {
          return get.attitude(player2, target2);
        }
      }
    }
  },
  stddanxin: {
    audio: "redanxin",
    trigger: { player: "damageEnd" },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill)).set("filterTarget", (card2, player3, target2) => {
        return target2 != player3 && target2.countCards("h") > 1;
      }).set("ai", (target2) => {
        return get.effect(target2, { name: "shunshou_copy2" }, get.player(), get.player());
      }).forResult();
    },
    derivation: "stdjiaozhao",
    async content(event2, trigger2, player2) {
      await player2.useSkill("stdjiaozhao", event2.targets);
    }
  },
  //吕范
  stddianfeng: {
    audio: "spdiancai",
    trigger: {
      player: ["loseAfter"],
      global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"]
    },
    getIndex(event2, player2) {
      return game.filterPlayer((current) => {
        let evt = event2.getl(current);
        return evt?.es?.length > 0 && !current.countCards("e");
      }).sortBySeat();
    },
    logTarget(_1, _2, _3, target2) {
      return target2;
    },
    frequent: true,
    async content(event2, trigger2, player2) {
      await player2.draw();
    }
  },
  //丁奉
  stdduanbing: {
    audio: "duanbing",
    forced: true,
    trigger: { source: "damageBegin1" },
    filter(event2, player2) {
      if (player2.hasHistory("sourceDamage", (evt) => evt?.card?.name == "sha")) {
        return false;
      }
      return event2?.card?.name == "sha";
    },
    logTarget: "player",
    async content(event2, trigger2, player2) {
      trigger2.num++;
    },
    group: "stdduanbing_forced",
    subSkill: {
      forced: {
        priority: Infinity,
        mod: {
          attackRange: () => 1
        }
      }
    }
  },
  stdfenxun: {
    audio: "fenxun",
    enable: "phaseUse",
    usable: 1,
    filterCard(card2, player2) {
      return get.subtype(card2) == "equip2";
    },
    filterTarget: lib.filter.notMe,
    async content(event2, trigger2, player2) {
      player2.markAuto("stdfenxun_effect", [event2.target]);
      player2.addTempSkill("stdfenxun_effect");
    },
    check(card2) {
      return 6 - get.value(card2);
    },
    ai: {
      order: 4,
      result: {
        player(player2, target2) {
          if (player2.inRange(target2)) {
            return 0;
          }
          var hs = player2.getCards("h", "shunshou");
          if (hs.length && player2.canUse(hs[0], target2, false)) {
            return 1;
          }
          var geteff = function(current) {
            return player2.canUse("sha", current, false, true) && get.effect(current, { name: "sha" }, player2, player2) > 0;
          };
          if (player2.hasSha() && geteff(target2)) {
            var num = game.countPlayer(function(current) {
              return current != player2 && player2.inRange(target2) && geteff(current);
            });
            if (num == 0) {
              if (game.hasPlayer(function(current) {
                return player2.canUse("sha", current) && geteff(current) && current != target2;
              })) {
                return 1;
              }
            } else if (num == 1) {
              return 1;
            }
          }
          return 0;
        }
      }
    },
    subSkill: {
      effect: {
        mark: "character",
        onremove: true,
        intro: {
          content: "$视为在你攻击范围内"
        },
        mod: {
          inRange(from, to) {
            if (from.getStorage("stdfenxun_effect").includes(to)) {
              return true;
            }
          }
        }
      }
    }
  },
  //孙鲁班
  stdzenhui: {
    audio: "rechanhui",
    trigger: { player: "useCard2" },
    filter(event2, player2) {
      if (!event2.targets?.length) {
        return false;
      }
      const card2 = event2.card;
      if (card2.name != "sha" && get.type2(card2) != "trick") {
        return false;
      }
      return game.hasPlayer((current) => {
        return current != player2 && !event2.targets.includes(current);
      });
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), (card2, player3, target2) => {
        if (player3 == target2) {
          return false;
        }
        const evt = _status.event.getTrigger();
        return !evt.targets.includes(target2);
      }).set("ai", (target2) => {
        const trigger3 = _status.event.getTrigger(), player3 = _status.event.player;
        let eff = 0;
        for (let current of trigger3.targets) {
          eff += get.effect(current, trigger3.card, target2, player3);
        }
        return eff > get.event().original;
      }).set(
        "original",
        (function() {
          let eff = 0;
          for (let cur of trigger2.targets) {
            eff += get.effect(cur, trigger2.card, player2, player2);
          }
          return eff;
        })()
      ).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      trigger2.player = target2;
      game.log(target2, "成为了", trigger2.card, "的使用者");
    }
  },
  stdchuyi: {
    audio: "xinzenhui",
    trigger: {
      global: "damageBegin1"
    },
    round: 1,
    filter(event2, player2) {
      if (!event2.source || !event2.source.isIn() || event2.source == player2) {
        return false;
      }
      return player2.inRange(event2.player);
    },
    check(event2, player2) {
      return get.attitude(player2, event2.player) <= 0 && get.damageEffect(event2.player, event2.source, player2, event2.nature) > 0;
    },
    async content(event2, trigger2, player2) {
      trigger2.num++;
    }
  },
  //留赞
  stdfenyin: {
    audio: "fenyin",
    trigger: { player: "phaseDrawBegin2" },
    filter(event2, player2) {
      return !event2.numFixed;
    },
    async content(event2, trigger2, player2) {
      trigger2.num += 2;
      player2.addTempSkill("stdfenyin_discard");
    },
    subSkill: {
      discard: {
        mod: {
          aiOrder(player2, card2, num) {
            if (typeof card2 == "object" && player2 == _status.currentPhase) {
              var evt = player2.getLastUsed();
              if (evt && evt.card && get.color(evt.card) != "none" && get.color(card2) != "none" && get.color(evt.card) != get.color(card2)) {
                return num + 10;
              }
            }
          }
        },
        audio: "stdfenyin",
        trigger: { player: "useCard" },
        charlotte: true,
        forced: true,
        filter(event2, player2) {
          if (!player2.countCards("he")) {
            return false;
          }
          if (_status.currentPhase != player2) {
            return false;
          }
          var color2 = get.color(event2.card);
          var evt = player2.getLastUsed(1);
          if (!evt) {
            return false;
          }
          var color1 = get.color(evt.card);
          return color1 && color2 && color1 != "none" && color2 != "none" && color1 == color2;
        },
        async content(event2, trigger2, player2) {
          await player2.chooseToDiscard("he", true);
        }
      }
    }
  },
  //孙翊
  stdzaoli: {
    audio: "zaoli",
    locked: true,
    trigger: {
      player: "phaseZhunbeiBegin"
    },
    filter(event2, player2) {
      return player2.countCards("he");
    },
    async cost(event2, trigger2, player2) {
      let list = [];
      if (player2.countCards("h")) {
        list.push("手牌");
      }
      if (player2.countCards("e")) {
        list.push("装备区");
      }
      let choice = list[0];
      if (list.length > 1) {
        const { control } = await player2.chooseControl(list).set("prompt", "躁厉：选择弃置的区域").set("ai", () => ["手牌", "装备区"].randomGet()).forResult();
        if (control) {
          choice = control;
        }
      }
      event2.result = {
        bool: true,
        cost_data: choice == "手牌" ? "h" : "e"
      };
    },
    async content(event2, trigger2, player2) {
      const pos = event2.cost_data;
      let num = player2.countCards(pos);
      await player2.chooseToDiscard(pos, num, true);
      num += player2.getDamagedHp();
      await player2.draw(num);
      await player2.loseHp();
    }
  },
  //陶谦
  stdyirang: {
    audio: "yirang",
    trigger: { player: "phaseUseBegin" },
    filter(event2, player2) {
      return player2.countCards("h");
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), (card2, player3, target2) => {
        if (target2 == player3) {
          return false;
        }
        return !game.hasPlayer((current) => {
          return current != player3 && current.countCards("h") < target2.countCards("h");
        });
      }).set("ai", function(target2) {
        return get.attitude(_status.event.player, target2);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const cards2 = player2.getCards("h"), target2 = event2.targets[0];
      let types = [];
      for (let i = 0; i < cards2.length; i++) {
        types.add(get.type(cards2[i], "trick"));
      }
      await player2.give(cards2, target2);
      await player2.draw(types.length);
    }
  },
  //纪灵
  stdshuangdao: {
    audio: "shuangren",
    trigger: { player: "phaseUseBegin" },
    filter(event2, player2) {
      return player2.countCards("h") > 0 && game.hasPlayer(function(current) {
        return current != player2 && player2.canCompare(current);
      });
    },
    async cost(event2, trigger2, player2) {
      let goon;
      if (player2.needsToDiscard() > 1) {
        goon = player2.hasCard(function(card2) {
          return card2.number > 10 && get.value(card2) <= 5;
        });
      } else {
        goon = player2.hasCard(function(card2) {
          return card2.number >= 9 && get.value(card2) <= 5 || get.value(card2) <= 3;
        });
      }
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), function(card2, player3, target2) {
        return player3.canCompare(target2);
      }).set("ai", function(target2) {
        var player3 = _status.event.player;
        if (_status.event.goon && get.attitude(player3, target2) < 0) {
          return get.effect(target2, { name: "sha" }, player3, player3);
        }
        return 0;
      }).set("goon", goon).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      const result = await player2.chooseToCompare(target2).forResult();
      if (result.bool) {
        if (game.hasPlayer(function(current) {
          if (!player2.canUse("sha", current, false)) {
            return false;
          }
          return get.distance(target2, current) <= 1;
        })) {
          const result2 = await player2.chooseTarget("是否对至多两名与其距离为1的角色各使用一张杀？", [1, 2], function(card2, player3, target3) {
            if (!player3.canUse("sha", target3, false)) {
              return false;
            }
            return get.distance(get.event().identity, target3) <= 1;
          }).set("ai", function(target3) {
            let player3 = _status.event.player;
            return get.effect(target3, { name: "sha" }, player3, player3);
          }).set("identity", target2).forResult();
          if (result2.bool) {
            for (let targetx of result2.targets) {
              await player2.useCard({ name: "sha", isCard: true }, targetx, false);
            }
          }
        } else {
          return;
        }
      } else {
        player2.addTempSkill("rexianzhen3");
      }
    }
  },
  //李儒
  stdjuece: {
    audio: "rejuece",
    trigger: { player: "phaseJieshuBegin" },
    filter(event2, player2) {
      return game.hasPlayer((current) => {
        let num = 0;
        current.getHistory("lose", (evt) => {
          if (evt.cards2?.length > 0) {
            num += evt.cards2.length;
          }
        });
        return num > 1;
      });
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt(event2.skill), "对一名本回合失去过至少两张牌的角色造成1点伤害", function(card2, player3, target2) {
        return _status.event.targets.includes(target2);
      }).set(
        "targets",
        game.filterPlayer((current) => {
          let num = 0;
          current.getHistory("lose", (evt) => {
            if (evt.cards2?.length > 0) {
              num += evt.cards2.length;
            }
          });
          return num > 1;
        })
      ).set("ai", (target2) => {
        var player3 = _status.event.player;
        return get.damageEffect(target2, player3, player3);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      await target2.damage();
    }
  },
  stdmieji: {
    audio: "remieji",
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return player2.countCards("h", { type: ["trick", "delay"], color: "black" });
    },
    filterCard(card2) {
      return get.color(card2) == "black" && get.type(card2, "trick") == "trick";
    },
    filterTarget(card2, player2, target2) {
      return target2 != player2;
    },
    discard: false,
    delay: false,
    check(card2) {
      return 8 - get.value(card2);
    },
    lose: false,
    async content(event2, trigger2, player2) {
      await player2.give(event2.cards, event2.target);
      await player2.discardPlayerCard(event2.target, "he", [1, 2]);
    },
    ai: {
      order: 9,
      result: {
        target: -1
      }
    }
  },
  //王允
  stdyunji: {
    audio: "jingong",
    enable: "chooseToUse",
    filterCard(card2, player2) {
      return get.type(card2) == "equip";
    },
    position: "hes",
    viewAs: { name: "jiedao" },
    viewAsFilter(player2) {
      return player2.countCards("hes", { type: "equip" });
    },
    prompt: "将一张装备牌当借刀杀人使用",
    check(card2) {
      const val = get.value(card2);
      return 5 - val;
    }
  },
  stdzongji: {
    audio: "wylianji",
    trigger: {
      global: "damageEnd"
    },
    filter(event2, player2) {
      if (!event2.card || !["sha", "juedou"].includes(event2.card.name)) {
        return false;
      }
      if (!event2.player.isIn() || !event2.source || !event2.source.isIn()) {
        return false;
      }
      return event2.player.countCards("he") || event2.source.countCards("he");
    },
    check(event2, player2) {
      let eff1 = get.effect(event2.player, { name: "guohe_copy2" }, player2, player2), eff2 = get.effect(event2.source, { name: "guohe_copy2" }, player2, player2);
      return eff1 + eff2 > 0;
    },
    logTarget(event2) {
      return [event2.player, event2.source];
    },
    async content(event2, trigger2, player2) {
      if (trigger2.player.countCards("he")) {
        await player2.discardPlayerCard(trigger2.player, "he", true);
      }
      if (trigger2.source.countCards("he")) {
        await player2.discardPlayerCard(trigger2.source, "he", true);
      }
    }
  },
  //四象封印·太阴
  //华歆
  stdyuanqing: {
    audio: "yuanqing",
    trigger: {
      player: "phaseEnd"
    },
    getCards(player2) {
      let cards2 = [];
      player2.getHistory("lose", (evt) => {
        if (evt.cards2 && evt.cards2.some((i) => get.position(i) == "d")) {
          cards2.addArray(evt.cards2.filter((i) => get.position(i) == "d"));
        }
      });
      return cards2;
    },
    filter(event2, player2) {
      let targets = lib.skill.stdyuanqing.logTarget(event2, player2);
      return targets && targets.length;
    },
    logTarget(event2, player2) {
      return game.filterPlayer((current) => {
        let cards2 = lib.skill.stdyuanqing.getCards(current);
        return cards2 && cards2.length;
      });
    },
    async content(event2, trigger2, player2) {
      for (const target2 of event2.targets) {
        let cards2 = lib.skill.stdyuanqing.getCards(target2);
        if (!cards2.length) {
          continue;
        }
        const result = await target2.chooseButton(["获得其中一张牌", cards2], true).forResult();
        if (result.bool) {
          await target2.gain(result.links, "gain2");
        }
      }
    }
  },
  stdshuchen: {
    audio: "shuchen",
    enable: "chooseToUse",
    viewAsFilter(player2) {
      return player2 != _status.currentPhase && player2.countCards("h") > player2.getHandcardLimit();
    },
    filterCard: true,
    position: "h",
    selectCard() {
      const player2 = get.player();
      return player2.countCards("h") - player2.getHandcardLimit();
    },
    viewAs: {
      name: "tao"
    },
    prompt: "将超出手牌上限的手牌当桃使用",
    check(card2) {
      return 15 - get.value(card2);
    }
  },
  //玩姬
  stdqianchong: {
    mod: {
      cardUsable(card2, player2) {
        if (player2.countCards("e") % 2 != 0) {
          return Infinity;
        }
      },
      targetInRange(card2, player2) {
        if (player2.countCards("e") % 2 == 0) {
          return true;
        }
      }
    }
  },
  stdshangjian: {
    trigger: {
      player: "phaseJieshuBegin"
    },
    audio: "xinfu_shangjian",
    filter(event2, player2) {
      let num = 0, cards2 = [];
      player2.getHistory("lose", (evt) => {
        if (evt.cards2) {
          num += evt.cards2.length;
        }
        if (evt.cards2.some((i) => get.position(i) == "d")) {
          cards2.addArray(evt.cards2.filter((i) => get.position(i) == "d"));
        }
      });
      return cards2.length && num > 0 && num <= player2.hp;
    },
    async cost(event2, trigger2, player2) {
      let cards2 = [];
      player2.getHistory("lose", (evt) => {
        if (evt.cards2 && evt.cards2.some((i) => get.position(i) == "d")) {
          cards2.addArray(evt.cards2.filter((i) => get.position(i) == "d"));
        }
      });
      const result = await player2.chooseButton(["尚俭：选择获得其中一张牌", cards2]).set("ai", (button) => {
        return get.value(button.link, get.event().player);
      }).forResult();
      event2.result = {
        bool: result.bool,
        cost_data: result.links
      };
    },
    async content(event2, trigger2, player2) {
      await player2.gain(event2.cost_data, "gain2");
    }
  },
  //王司徒
  stdgushe: {
    audio: "gushe",
    enable: "phaseUse",
    usable: 1,
    filterTarget(card2, player2, target2) {
      return player2.canCompare(target2);
    },
    filter(event2, player2) {
      return player2.countCards("h") > 0;
    },
    async content(event2, trigger2, player2) {
      let num = 1, target2 = event2.target;
      while (num > 0 && player2.canCompare(target2)) {
        num--;
        let failure = [];
        let result = await player2.chooseToCompare(target2).forResult();
        if (result.bool) {
          failure.push(target2);
          target2.chat(lib.skill.gushe.chat.randomGet());
          await player2.draw();
        } else if (result.tie) {
          failure = [player2, target2];
        } else {
          failure.push(player2);
          target2.chat(lib.skill.gushe.chat.randomGet());
          await target2.draw();
        }
        if (player2.canCompare(target2)) {
          for (let loser of failure) {
            let choice = loser.countCards("h", (card2) => get.value(card2) <= 6 && card2.number > 10) > 0;
            const { bool } = await loser.chooseBool("是否与其再次拼点？").set("choice", choice).forResult();
            if (bool) {
              num++;
            }
          }
        }
      }
    },
    ai: {
      order: 7,
      result: {
        target(player2, target2) {
          let hs = player2.getCards("h");
          if (hs.some((card2) => get.value(card2) <= 6 && card2.number > 10) || player2.getHp() < 2 && player2.getHp() + player2.countCards("h", { name: ["tao", "jiu"] }) > 2 || player2.getHp() > 1 && player2.getHp() + player2.countCards("h", { name: "tao" }) > 2) {
            return -1;
          }
          return 0;
        }
      }
    }
  },
  stdjici: {
    audio: "jici",
    trigger: {
      player: "compare",
      target: "compare"
    },
    filter(event2, player2) {
      if (event2.player == player2 && event2.iwhile) {
        return false;
      }
      return true;
    },
    check(event2, player2) {
      return player2.getHp() < 2 && player2.getHp() + player2.countCards("h", { name: ["tao", "jiu"] }) > 2 || player2.getHp() > 1 && player2.getHp() + player2.countCards("h", { name: "tao" }) > 2;
    },
    async content(event2, trigger2, player2) {
      await player2.loseHp();
      if (player2 == trigger2.player) {
        trigger2.num1 = 13;
      } else {
        trigger2.num2 = 13;
      }
      game.log(player2, "的拼点牌点数为13");
    }
  },
  //钟会
  stdxingfa: {
    audio: "gzpaiyi",
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return player2.getHp() <= player2.countCards("h") && game.hasPlayer(function(current) {
        return current != player2;
      });
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt(event2.skill), "对一名其他角色造成1点伤害", function(card2, player3, target2) {
        return target2 != player3;
      }).set("ai", function(target2) {
        var player3 = _status.event.player;
        return get.damageEffect(target2, player3, player3);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      await event2.targets[0].damage("nocard");
    },
    ai: {
      expose: 0.25,
      threaten: 1.7
    }
  },
  //刘璋
  stdyinge: {
    audio: "yinlang",
    usable: 1,
    enable: "phaseUse",
    filterTarget(card2, player2, target2) {
      return player2 != target2 && target2.countCards("he");
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.target;
      await target2.chooseToGive(1, "he", player2, true);
      let targets = game.filterPlayer((current) => {
        if (!target2.canUse({ name: "sha", isCard: true }, current, false)) {
          return false;
        }
        if (current == player2) {
          return true;
        }
        return player2.inRange(current);
      });
      if (!targets.length) {
        return;
      }
      const result = await target2.chooseTarget("选择使用杀的目标", true).set("useTargets", targets).set("filterTarget", (card2, player3, target3) => {
        let targets2 = get.event().useTargets;
        return targets2.includes(target3);
      }).set("ai", (target3) => {
        return get.effect(target3, { name: "sha", isCard: true }, get.player(), get.player());
      }).forResult();
      if (result.bool) {
        await target2.useCard({ name: "sha", isCard: true }, result.targets);
      }
    },
    ai: {
      order: 8,
      result: {
        target(player2, target2) {
          return target2.countCards("he") > 2 ? 1 : 0;
        }
      }
    }
  },
  stdshiren: {
    audio: "xiusheng",
    trigger: {
      target: "useCardToTargeted"
    },
    filter(event2, player2) {
      return event2.card.name == "sha" && event2.player != player2;
    },
    usable: 1,
    logTarget: "player",
    async content(event2, trigger2, player2) {
      await player2.draw(2);
      await player2.chooseToGive(event2.targets[0], "he", true);
    }
  },
  stdjuyi: {
    zhuSkill: true,
    trigger: {
      player: "damageBegin4"
    },
    filter(event2, player2) {
      if (!event2.source || event2.source == player2 || !player2.countCards("he")) {
        return false;
      }
      if (player2.hasHistory("damage", (evt) => evt.source && evt.source == event2.source)) {
        return false;
      }
      return event2.source.group == "qun" && !player2.getStorage("stdjuyi").includes(event2.source);
    },
    async cost(event2, trigger2, player2) {
      const result = await trigger2.source.choosePlayerCard(player2, "he", get.prompt(event2.skill, player2), "据益：是否获得" + get.translation(player2) + "一张牌并防止此次伤害？").set("ai", (button) => {
        if (get.event().eff > 0) {
          return 0;
        }
        return get.value(button.link);
      }).set("eff", get.damageEffect(player2, trigger2.source, trigger2.source)).forResult();
      event2.result = {
        bool: result.bool,
        cards: result.links,
        targets: [trigger2.source]
      };
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      await player2.give(event2.cards, target2);
      trigger2.cancel();
      if (!player2.getStorage("stdjuyi").length) {
        player2.when({ global: "phaseEnd" }).step(async () => {
          delete player2.storage.stdjuyi;
        });
      }
      player2.markAuto("stdjuyi", target2);
    }
  },
  //薛总
  stdfunan: {
    audio: "funan",
    trigger: {
      target: "shaMiss",
      global: "eventNeutralized"
    },
    usable: 1,
    filter(event2, player2, name) {
      if (event2.type != "card" || event2.player == player2) {
        return false;
      }
      if (name != "shaMiss" && event2._neutralize_event.player != player2) {
        return false;
      }
      return event2.cards && event2.cards.someInD();
    },
    async content(event2, trigger2, player2) {
      await player2.gain(trigger2.cards.filterInD(), "gain2");
    }
  },
  stdjiexun: {
    audio: "jiexun",
    trigger: { player: "phaseJieshuBegin" },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), function(card2, player3, target2) {
        return target2.countCards("h");
      }).set("ai", function(target2) {
        const player3 = _status.event.player;
        let eff = get.effect(target2, { name: "guohe_copy2" }, player3, player3);
        if (target2 == player3) {
          return player3.countCards("h", { suit: "diamod" }) ? 2 : -2;
        }
        return eff * (target2.countCards("h") > 4 ? -1 : 1);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      const result = await target2.chooseToDiscard("h", 1, true).set("ai", (card2) => {
        if (get.suit(card2) == "diamond") {
          return 11 - get.value(card2);
        }
        return 5 - get.value(card2);
      }).forResult();
      if (!result.bool) {
        return;
      }
      if (get.suit(result.cards[0]) == "diamond") {
        await target2.draw(2);
      }
    }
  },
  //徐庶
  stdwuyan: {
    audio: "wuyan",
    trigger: {
      player: "useCard"
    },
    forced: true,
    filter(event2, player2) {
      if (!event2.cards || event2.cards.length != 1 || get.type2(event2.cards[0]) != "trick") {
        return false;
      }
      return event2.card.name == "wuxie";
    },
    async content() {
    },
    mod: {
      cardname(card2, player2) {
        let info = lib.card[card2.name];
        if (info && ["trick", "delay"].includes(info.type)) {
          return "wuxie";
        }
      }
    }
  },
  stdjujian: {
    audio: "jujian",
    trigger: { player: "useCardAfter" },
    usable: 1,
    filter(event2, player2) {
      return event2.cards && event2.cards.length && event2.card.name == "wuxie";
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), lib.filter.notMe).set("ai", (target2) => {
        const player3 = get.player();
        return target2.getUseValue(_status.event.getTrigger().cards[0]) * get.attitude(player3, target2);
      }).forResult();
      event2.result.cards = trigger2.cards;
    },
    async content(event2, trigger2, player2) {
      await event2.targets[0].gain(event2.cards, "gain2");
    }
  },
  //牢彭羕
  stdxiaofan: {
    audio: "olxiaofan",
    trigger: {
      player: "useCardAfter"
    },
    forced: true,
    filter(event2, player2) {
      const num = Math.min(3, lib.skill.olxiaofan.getNum(player2)), pos = "jeh".slice(0, num);
      return num > 0 && player2.countCards(pos);
    },
    async content(event2, trigger2, player2) {
      const num = Math.min(3, lib.skill.olxiaofan.getNum(player2)), pos = "jeh".slice(0, num);
      let index = 0;
      while (index < num) {
        const posi = pos[index];
        const hs = player2.countCards(posi);
        if (hs > 0) {
          await player2.chooseToDiscard(hs, posi, true);
        }
        index++;
      }
    },
    ai: {
      effect: {
        player_use(card2, player2) {
          if (get.type(card2) == "equip") {
            return [0, -5];
          }
        }
      },
      neg: true
    }
  },
  stdtuishi: {
    audio: "oltuishi",
    mod: {
      wuxieJudgeEnabled: () => false,
      wuxieEnabled: () => false,
      cardEnabled: (card2) => {
        if (card2.name == "wuxie") {
          return false;
        }
      },
      aiValue: (player2, card2, val) => {
        if (card2.name == "wuxie") {
          return 0;
        }
        var num = get.number(card2);
        if (typeof get.strNumber(num, false) === "string") {
          return 0;
        }
      },
      aiUseful: (player2, card2, val) => {
        if (card2.name == "wuxie") {
          return 0;
        }
        var num = get.number(card2);
        if (typeof get.strNumber(num, false) === "string") {
          return 0;
        }
      },
      aiOrder: (player2, card2, order) => {
        var num = get.number(card2);
        if (typeof get.strNumber(num, false) === "string") {
          return 0;
        }
        return order;
      }
    },
    trigger: {
      player: "useCard"
    },
    filter(event2, player2) {
      return typeof get.strNumber(get.number(event2.card), false) === "string";
    },
    forced: true,
    async content(event2, trigger2, player2) {
      trigger2.targets.length = 0;
      trigger2.all_excluded = true;
      game.log(trigger2.card, "被无效了");
    }
  },
  //牢赵云
  oldjuejing: {
    audio: "xinjuejing",
    trigger: { player: "phaseDrawBegin2" },
    filter(event2, player2) {
      return !event2.numFixed && player2.getHp() < player2.maxHp;
    },
    forced: true,
    content() {
      trigger.num += player.getDamagedHp();
    },
    mod: {
      maxHandcard: (player2, num) => num + 2,
      aiOrder(player2, card2, num) {
        if (num <= 0 || !player2.isPhaseUsing() || !get.tag(card2, "recover")) {
          return num;
        }
        if (player2.needsToDiscard() > 1) {
          return num;
        }
        return 0;
      }
    }
  },
  oldlonghun: {
    audio: "relonghun",
    inherit: "xinlonghun",
    prompt: () => `将${get.cnNumber(Math.max(1, get.player().getHp()))}张♦牌当做杀，♥牌当做桃，♣牌当做闪，♠牌当做无懈可击使用或打出`,
    selectCard: () => Math.max(1, get.player().getHp()),
    complexCard: true,
    log: false,
    precontent() {
      player.logSkill("oldlonghun");
    },
    ai: {
      respondSha: true,
      respondShan: true,
      skillTagFilter(player2, tag) {
        var name;
        switch (tag) {
          case "respondSha":
            name = "diamond";
            break;
          case "respondShan":
            name = "club";
            break;
          case "save":
            name = "heart";
            break;
        }
        if (!player2.countCards("hes", { suit: name })) {
          return false;
        }
      },
      order(item, player2) {
        if (player2 && _status.event.type == "phase") {
          var max = 0;
          var list = ["sha", "tao"];
          var map = { sha: "diamond", tao: "heart" };
          for (var i = 0; i < list.length; i++) {
            var name = list[i];
            if (player2.countCards("hes", function(card2) {
              return (name != "sha" || get.value(card2) < 5) && get.suit(card2, player2) == map[name];
            }) >= Math.max(1, player2.getHp()) && player2.getUseValue({
              name,
              nature: name == "sha" ? "fire" : null
            }) > 0) {
              var temp = get.order({
                name,
                nature: name == "sha" ? "fire" : null
              });
              if (temp > max) {
                max = temp;
              }
            }
          }
          max /= 1.1;
          return max;
        }
        return 2;
      }
    },
    hiddenCard(player2, name) {
      if (name == "wuxie" && _status.connectMode && player2.countCards("hes") > 0) {
        return true;
      }
      if (name == "wuxie") {
        return player2.countCards("hes", { suit: "spade" }) >= Math.max(1, get.player().getHp());
      }
      if (name == "tao") {
        return player2.countCards("hes", { suit: "heart" }) >= Math.max(1, get.player().getHp());
      }
    }
  },
  //马良
  stdxiemu: {
    audio: "xiemu",
    global: "stdxiemu_global",
    subSkill: {
      global: {
        audio: "xiemu",
        enable: "phaseUse",
        usable: 1,
        filter(event2, player2) {
          if (!player2.countCards("he", (card2) => get.type(card2) == "basic")) {
            return false;
          }
          return game.hasPlayer((current) => current.hasSkill("stdxiemu") && current != player2);
        },
        filterTarget(card2, player2, target2) {
          return target2.hasSkill("stdxiemu") && target2 != player2;
        },
        selectTarget() {
          const num = game.countPlayer((current) => current.hasSkill("stdxiemu") && current != get.player());
          return num > 1 ? 1 : -1;
        },
        filterCard(card2) {
          return get.type(card2) == "basic";
        },
        chessForceAll: true,
        position: "he",
        check(card2) {
          return 4 - get.value(card2);
        },
        prompt() {
          const list = game.filterPlayer((current) => {
            return current.hasSkill("stdxiemu");
          });
          return `将一张牌交给${get.translation(list)}${list.length > 1 ? "中的一人" : ""}，然后你本回合攻击范围+1。`;
        },
        log: false,
        discard: false,
        lose: false,
        async content(event2, trigger2, player2) {
          const card2 = event2.cards[0], target2 = event2.target;
          player2.logSkill("stdxiemu", target2);
          await player2.showCards(card2, get.translation(player2) + "发动了【协穆】");
          await player2.give(card2, target2, true);
          player2.addTempSkill("stdxiemu_range");
          player2.addMark("stdxiemu_range", 1, false);
        },
        ai: {
          order: 7,
          result: {
            target: 1
          }
        }
      },
      range: {
        charlotte: true,
        onremove: true,
        mod: {
          attackRange(player2, num) {
            return num + player2.countMark("stdxiemu_range");
          }
        },
        intro: {
          content: "本回合攻击范围+#"
        }
      }
    }
  },
  stdnaman: {
    audio: "naman",
    enable: "phaseUse",
    usable: 1,
    viewAs: {
      name: "nanman"
    },
    viewAsFilter(player2) {
      if (!player2.countCards("he", (card2) => get.type(card2) == "basic")) {
        return false;
      }
    },
    filterCard(card2) {
      return get.type(card2) == "basic";
    },
    position: "he",
    selectCard: [1, Infinity],
    selectTarget() {
      return ui.selected.cards.length;
    },
    complexSelect: true
  },
  //蒋琬
  stdruwu: {
    audio: "olxvfa",
    enable: "chooseToUse",
    filter(event2, player2) {
      if (!event2.stdruwu || !event2.stdruwu.length) {
        return false;
      }
      if (event2.filterCard(get.autoViewAs({ name: "juedou" }, "unsure"), player2, event2)) {
        return true;
      }
      if (event2.filterCard(get.autoViewAs({ name: "wuzhong" }, "unsure"), player2, event2)) {
        return true;
      }
      return false;
    },
    onChooseToUse(event2) {
      if (game.online || event2.stdruwu) {
        return;
      }
      var list = event2.player.getCards("e");
      var history = game.getGlobalHistory("everything", (evt) => evt.player == event2.player && evt.name == "equip");
      list = list.filter((card2) => {
        return !history.some((evt) => evt.cards && evt.cards.includes(card2));
      });
      event2.set("stdruwu", list);
    },
    chooseButton: {
      dialog(event2, player2) {
        var list = [];
        if (event2.filterCard(get.autoViewAs({ name: "juedou" }, "unsure"), player2, event2)) {
          list.push(["锦囊", "", "juedou"]);
        }
        if (event2.filterCard(get.autoViewAs({ name: "wuzhong" }, "unsure"), player2, event2)) {
          list.push(["锦囊", "", "wuzhong"]);
        }
        return ui.create.dialog("儒武", [list, "vcard"]);
      },
      check(button) {
        if (_status.event.getParent().type != "phase") {
          return 1;
        }
        var player2 = _status.event.player;
        return player2.getUseValue({
          name: button.link[2],
          nature: button.link[3]
        });
      },
      backup(links, player2) {
        return {
          filterCard(card2) {
            return _status.event.stdruwu.includes(card2);
          },
          position: "e",
          audio: "olxvfa",
          popname: true,
          check(card2) {
            return 8 - get.value(card2);
          },
          viewAs: { name: links[0][2] }
        };
      },
      prompt(links, player2) {
        return "将装备区里的一张牌当做" + get.translation(links[0][2]) + "使用";
      }
    },
    hiddenCard(player2, name) {
      var list = player2.getCards("e");
      var history = game.getGlobalHistory("everything", (evt) => evt.player == player2 && evt.name == "equip");
      list = list.filter((card2) => {
        return !history.some((evt) => evt.cards && evt.cards.includes(card2));
      });
      if (!list.length) {
        return false;
      }
      return ["juedou", "wuzhong"].includes(name);
    },
    ai: {
      order: 1,
      result: {
        player(player2) {
          if (_status.event.dying) {
            return get.attitude(player2, _status.event.dying);
          }
          return 1;
        }
      }
    }
  },
  stdchengshi: {
    audio: "spjincui",
    trigger: {
      global: "die"
    },
    filter(event2, player2) {
      return event2.player != player2;
    },
    check(event2, player2) {
      return event2.player.countCards("e") > player2.countCards("e");
    },
    logTarget: "player",
    skillAnimation: true,
    limited: true,
    animationColor: "fire",
    seatRelated: "changeSeat",
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      player2.awakenSkill(event2.name);
      game.broadcastAll(
        function(target1, target22) {
          game.swapSeat(target1, target22);
        },
        player2,
        target2
      );
      await player2.swapEquip(target2);
    },
    mark: true,
    intro: {
      content: "limited"
    },
    init: (player2, skill) => player2.storage[skill] = false
  },
  //孙邵
  stddingyi: {
    audio: "mjdingyi",
    trigger: { global: "phaseJieshuBegin" },
    filter(event2, player2) {
      return !event2.player.countCards("e");
    },
    async cost(event2, trigger2, player2) {
      event2.result = await trigger2.player.chooseBool(get.prompt(event2.skill), "摸一张牌").forResult();
      event2.result.targets = [trigger2.player];
    },
    async content(event2, trigger2, player2) {
      await event2.targets[0].draw();
    }
  },
  stdzuici: {
    audio: "mjzuici",
    trigger: {
      player: "damageEnd"
    },
    filter(event2, player2) {
      if (!event2.source) {
        return false;
      }
      return player2.canMoveCard(
        null,
        null,
        game.filterPlayer((current) => current != event2.source),
        event2.source
      );
    },
    direct: true,
    clearTime: true,
    async content(event2, trigger2, player2) {
      const next = player2.moveCard(
        game.filterPlayer((current) => current != trigger2.source),
        trigger2.source
      );
      next.prompt = get.prompt("stdzuici", trigger2.source);
      next.prompt2 = "将场上一张牌移动到其区域内";
      next.logSkill = event2.name;
      await next;
    }
  },
  //司马师
  stdjinglve: {
    audio: "jinglve",
    trigger: { global: "phaseDiscardBegin" },
    filter(event2, player2) {
      return player2.countCards("h") > 1 && event2.player != player2;
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseCard(get.prompt2(event2.skill), 2).set("ai", (card2) => {
        if (!_status.event.bool) {
          return 0;
        }
        return 5 - get.value(card2);
      }).set(
        "bool",
        (() => {
          if (get.attitude(player2, trigger2.player) >= 0) {
            return false;
          }
          const hs = trigger2.player.countCards("h"), dis = trigger2.player.needsToDiscard(0, true, true);
          return hs && dis > 0;
        })()
      ).forResult();
      event2.result.targets = [trigger2.player];
    },
    async content(event2, trigger2, player2) {
      const cards2 = event2.cards, target2 = event2.targets[0];
      await player2.showCards(cards2, get.translation(player2) + "发动了【景略】");
      const next = player2.give(cards2, target2);
      next.gaintag.add("stdjinglve");
      await next;
      trigger2.player.addTempSkill("stdjinglve_discard");
      player2.when({ global: "phaseDiscardEnd" }).filter((evt) => evt == trigger2).step(async (event3, trigger3, player3) => {
        trigger3.player.removeSkill("stdjinglve_discard");
        const cards3 = [];
        game.getGlobalHistory("cardMove", function(evt) {
          if (evt.name == "cardsDiscard") {
            if (evt.getParent("phaseDiscard") == trigger3) {
              const moves = evt.cards.filterInD("d");
              cards3.addArray(moves);
            }
          }
          if (evt.name == "lose") {
            if (evt.type != "discard" || evt.position != ui.discardPile || evt.getParent("phaseDiscard") != trigger3) {
              return;
            }
            const moves = evt.cards.filterInD("d");
            cards3.addArray(moves);
          }
        });
        if (cards3.length) {
          const { bool, links } = await player3.chooseButton(["景略：是否获得本阶段弃置的一张牌？", cards3]).forResult();
          if (bool) {
            await player3.gain(links, "gain2");
          }
        }
      });
    },
    subSkill: {
      discard: {
        charlotte: true,
        mod: {
          cardDiscardable(card2, player2, name) {
            if (name == "phaseDiscard" && card2.hasGaintag("stdjinglve")) {
              return false;
            }
          }
        },
        onremove(player2) {
          player2.removeGaintag("stdjinglve");
        }
      }
    }
  },
  //岑昏
  stdjishe: {
    audio: "jishe",
    enable: "phaseUse",
    filter(event2, player2) {
      return player2.getHandcardLimit() > 0;
    },
    locked: false,
    delay: false,
    async content(event2, trigger2, player2) {
      player2.addTempSkill("stdjishe_limit");
      player2.addMark("stdjishe_limit", 1, false);
      player2.draw("nodelay");
    },
    subSkill: {
      limit: {
        mod: {
          maxHandcard(player2, num) {
            return num - player2.countMark("stdjishe_limit");
          }
        },
        onremove: true,
        charlotte: true,
        marktext: "奢",
        intro: {
          content: "手牌上限-#"
        }
      }
    },
    ai: {
      order: 10,
      result: {
        player(player2) {
          if (!player2.needsToDiscard(1)) {
            return 1;
          }
          return 0;
        }
      }
    }
  },
  stdwudu: {
    trigger: {
      global: "damageBegin4"
    },
    filter(event2, player2) {
      return !event2.player.countCards("h");
    },
    logTarget: "player",
    check(event2, player2) {
      return player2.maxHp > 1 && get.damageEffect(event2.player, event2.source, player2) < 0;
    },
    async content(event2, trigger2, player2) {
      trigger2.cancel();
      await player2.loseMaxHp();
    }
  },
  //公孙渊
  stdhuaiyi: {
    audio: "rehuaiyi",
    trigger: {
      player: "phaseZhunbeiBegin"
    },
    filter(event2, player2) {
      return player2.countCards("h");
    },
    forced: true,
    async content(event2, trigger2, player2) {
      const hs = player2.getCards("h");
      await player2.showCards(hs, get.translation(player2) + "发动了【怀异】");
      const colors = [];
      for (let card2 of hs) {
        colors.add(get.color(card2));
      }
      if (colors.length < 2) {
        return;
      }
      const result = await player2.chooseControl(colors).set("ai", () => {
        return _status.event.color;
      }).set(
        "color",
        (function() {
          return colors.sort((a, b) => {
            return player2.countCards("h", { color: a }) - player2.countCards("h", { color: b });
          })[0];
        })()
      ).forResult();
      const discards = player2.getCards("h", { color: result.control });
      if (discards.length) {
        await player2.discard(discards);
        if (game.hasPlayer((current) => current != player2 && current.countCards("he"))) {
          const result2 = await player2.chooseTarget(`获得至多${discards.length}名其他角色各一张牌`, [1, discards.length], true, function(card2, player3, target2) {
            return target2 != player3 && target2.countCards("he") > 0;
          }).set("ai", function(target2) {
            const player3 = get.player();
            return get.effect(target2, { name: "shunshou_copy2" }, player3, player3);
          }).forResult();
          await player2.gainMultiple(result2.targets.sortBySeat(), "he");
          if (result2.targets.length > 1) {
            await player2.loseHp();
          }
        }
      }
    }
  },
  stdfengbai: {
    trigger: {
      player: "gainAfter",
      global: "loseAsyncAfter"
    },
    zhuSkill: true,
    logTarget: (event2, player2, triggername, target2) => target2,
    check(event2, player2) {
      return get.effect(event2.indexedData, { name: "draw" }, player2, player2) > 0;
    },
    getIndex(event2, player2) {
      if (!event2.getg || !event2.getl) {
        return false;
      }
      const cards2 = event2.getg(player2);
      return game.filterPlayer((current) => {
        if (current == player2 || current.group != "qun") {
          return false;
        }
        const evt = event2.getl(current);
        if (!evt || !evt.es) {
          return false;
        }
        game.log(evt.es);
        return evt.es.some((card2) => cards2.includes(card2));
      }).sortBySeat();
    },
    async content(event2, trigger2, player2) {
      await event2.targets[0].draw();
    }
  },
  //刘表
  stdzishou: {
    audio: "zishou",
    trigger: {
      player: "phaseUseBefore"
    },
    check(event2, player2) {
      return player2.countCards("h") + 2 <= player2.getHandcardLimit();
    },
    async content(event2, trigger2, player2) {
      await player2.draw(game.countGroup());
      trigger2.cancel();
    },
    ai: {
      threaten: 1.5
    }
  },
  stdjujin: {
    trigger: {
      player: "damageEnd"
    },
    filter(event2, player2) {
      if (!event2.source || event2.source.group != "qun") {
        return false;
      }
      return player2.countCards("he") > 1;
    },
    zhuSkill: true,
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseToDiscard(get.prompt2(event2.skill), 2, "he").set("ai", (card2) => {
        const player3 = get.player();
        if (get.recoverEffect(player3, player3, player3) <= 0 || player3.hp >= player3.maxHp) {
          return 0;
        }
        return 5 - get.value(card2);
      }).set("chooseonly", true).forResult();
    },
    async content(event2, trigger2, player2) {
      const cards2 = event2.cards;
      await player2.discard(cards2);
      if (player2.isDamaged()) {
        await player2.recover();
      }
    }
  },
  //伏皇后
  stdqiuyuan: {
    audio: "xinqiuyuan",
    inherit: "qiuyuan",
    async content(event2, trigger2, player2) {
      const {
        targets: [target2]
      } = event2;
      const { card: card2 } = trigger2;
      const result = await target2.chooseToGive(`交给${get.translation(player2)}一张牌，或成为${get.translation(card2)}的额外目标`, player2).set("ai", (card3) => {
        const { player: player3, target: target3 } = get.event();
        return get.attitude(player3, target3) >= 0 ? 1 : -1;
      }).forResult();
      if (!result?.bool) {
        trigger2.getParent().targets.push(target2);
        trigger2.getParent().triggeredTargets2.push(target2);
        game.log(target2, "成为了", card2, "的额外目标");
      }
    }
  },
  stdzhuikong: {
    audio: "rezhuikong",
    trigger: {
      global: "phaseZhunbeiBegin"
    },
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
          if (get.number(cards2[i]) > 9 && useful < 7) {
            return true;
          }
        }
      }
      return false;
    },
    filter(event2, player2) {
      if (!player2.canCompare(event2.player)) {
        return false;
      }
      return _status.connectMode && player2.countCards("h") || player2.countCards("h", "sha");
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseCard(get.prompt(event2.skill, trigger2.player), "使用一张【杀】与其拼点", { name: "sha" }).set("ai", (card2) => {
        if (_status.event.effect) {
          return 6 - get.value(card2);
        }
        return 0;
      }).set("effect", lib.skill.stdzhuikong.check(trigger2, player2)).forResult();
      event2.result.targets = [trigger2.player];
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      const next = player2.chooseToCompare(target2);
      if (!next.fixedResult) {
        next.fixedResult = {};
      }
      next.fixedResult[player2.playerid] = event2.cards[0];
      const result = await next.forResult();
      if (result.winner) {
        const card2 = result[result.winner == player2 ? "target" : "player"];
        if (!card2 || !result.winner.hasUseTarget(card2)) {
          return;
        }
        await result.winner.chooseUseTarget(card2);
      }
    }
  },
  //关兴
  stdwuyou: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return game.hasPlayer((current) => player2.canCompare(current));
    },
    filterTarget(card2, player2, target2) {
      return player2.canCompare(target2);
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      const result = await player2.chooseToCompare(target2).forResult();
      if (!result.bool) {
        player2.addTempSkill(event2.name + "_effect");
        await player2.addAdditionalSkills(event2.name + "_effect", "new_rewusheng");
      }
      const winner = result.winner;
      if (!winner) {
        return;
      }
      const loser = player2 == winner ? target2 : player2;
      const juedou = get.autoViewAs({ name: "juedou", isCard: true });
      if (winner.canUse(juedou, loser, false)) {
        await winner.useCard(juedou, loser, false);
      }
    },
    ai: {
      order: 9,
      result: {
        target(player2, target2) {
          return get.effect(target2, { name: "juedou" }, player2, player2) * get.attitude(player2, target2);
        }
      }
    },
    derivation: "new_rewusheng",
    subSkill: {
      effect: {
        charlotte: true,
        mark: true,
        marktext: "佑",
        intro: {
          content: "视为拥有〖武圣〗"
        }
      }
    }
  },
  //四象封印·少阴
  //孙皓
  stdcanshi: {
    audio: "canshi",
    inherit: "canshi",
    forced: true,
    async content(event2, trigger2, player2) {
      trigger2.changeToZero();
      await player2.draw(
        Math.max(
          1,
          game.countPlayer((target2) => {
            if (player2.hasSkill("guiming") && target2 != player2 && target2.group == "wu") {
              return true;
            }
            return target2.isDamaged();
          })
        )
      );
      player2.addTempSkill("stdcanshi_effect");
    },
    subSkill: {
      effect: {
        charlotte: true,
        trigger: { player: "useCardToPlayered" },
        filter(event2, player2) {
          if (event2.card.name != "sha" && get.type(event2.card) != "trick") {
            return false;
          }
          return event2.target.isDamaged() && player2.countCards("he");
        },
        forced: true,
        autodelay: true,
        content() {
          player.chooseToDiscard("he", true);
        }
      }
    }
  },
  //马腾
  stdxiongyi: {
    limited: true,
    audio: "xiongyi",
    enable: "phaseUse",
    filterTarget: true,
    selectTarget: [1, Infinity],
    multitarget: true,
    multiline: true,
    skillAnimation: true,
    animationColor: "thunder",
    async content(event2, trigger2, player2) {
      player2.awakenSkill(event2.name);
      const targets = event2.targets.sortBySeat();
      let keep = true;
      while (true) {
        let stop = false;
        for (const target2 of targets) {
          let next = target2.chooseToUse(function(card2) {
            const event3 = get.event();
            if (!lib.filter.cardEnabled(card2, event3.player, event3)) {
              return false;
            }
            return get.name(card2) == "sha";
          }, "雄异：是否使用一张不可被响应的【杀】？").set("oncard", (card2) => {
            _status.event.directHit.addArray(game.players);
          });
          if (!keep) {
            next.set("prompt2", "若你不使用，则结束此流程");
          }
          const result = await next.forResult();
          if (!result.bool && !keep) {
            stop = true;
            break;
          }
        }
        if (keep) {
          keep = false;
        }
        if (stop) {
          break;
        }
      }
    },
    ai: {
      order: 10,
      result: {
        target(player2, target2) {
          if (player2.hasUnknown()) {
            return 0;
          }
          return target2.countCards("hs");
        }
      }
    }
  },
  stdyouji: {
    audio: 2,
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return player2.canMoveCard(
        null,
        true,
        game.filterPlayer((i) => {
          return i.group == "qun";
        }),
        (card2) => {
          return [3, 4, 6].includes(parseInt(get.subtype(card2)?.slice("equip".length)));
        },
        "nojudge"
      );
    },
    direct: true,
    clearTime: true,
    zhuSkill: true,
    content() {
      player.moveCard(
        game.filterPlayer((i) => {
          return i.group == "qun";
        }),
        (card2) => {
          return [3, 4, 6].includes(parseInt(get.subtype(card2)?.slice("equip".length)));
        }
      ).set("prompt", get.prompt2("stdyouji")).set("nojudge", true).set("logSkill", "stdyouji");
    }
  },
  //马云禄
  stdfengpo: {
    audio: "fengpo",
    trigger: { source: "damageBegin1" },
    filter(event2, player2) {
      return event2.card?.name == "sha" && [player2, event2.player].some((target2) => {
        return target2.isIn() && target2.countCards("he");
      });
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), (card2, player3, target2) => {
        const event3 = get.event().getTrigger();
        return [player3, event3.player].filter((targetx) => {
          return targetx.isIn() && targetx.countCards("he");
        }).includes(target2);
      }).set("ai", (target2) => {
        const player3 = get.event().player, aim = get.event().getTrigger().player;
        let eff = get.damageEffect(aim, player3, player3);
        if (aim === player3 && player3.getDiscardableCards(player3, "he", (card2) => get.suit(card2) == "diamond")) {
          eff /= 4;
        }
        return eff + get.effect(target2, { name: "guohe" }, player3, player3);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      const result = await player2.discardPlayerCard(target2, "he", true).set("ai", (button) => {
        const suit = get.suit(button.link);
        return get.event().att * (suit == "diamond" ? 5 : 1) * get.value(button.link, player2);
      }).set("prompt", "凤魄：弃置" + (target2 != player2 ? get.translation(target2) : "") + "一张牌").set("prompt2", "若弃置了方片牌，则此伤害+1").set("att", get.sgnAttitude(player2, target2)).forResult();
      if (result.bool) {
        if (result.cards && result.cards.some((i) => get.suit(i, target2) == "diamond")) {
          player2.popup("洗具");
          trigger2.num++;
        }
      }
    }
  },
  //蒋干
  stddaoshu: {
    audio: "daoshu",
    trigger: { global: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return game.hasPlayer((target2) => {
        return target2 != event2.player && target2.countCards("h");
      });
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt2(event2.skill), (card2, player3, target2) => {
        const event3 = get.event().getTrigger();
        return target2 != event3.player && target2.countCards("h");
      }).set("ai", (target2) => {
        const player3 = get.event().player;
        if (get.attitude(player3, target2) >= 0) {
          return 0;
        }
        return 1 / target2.countCards("h");
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      player2.tempBanSkill("stddaoshu", "roundStart", false);
      const target2 = event2.targets[0];
      const result = await player2.choosePlayerCard(target2, "h", true).forResult();
      if (result.bool) {
        const cards2 = result.cards || [];
        if (cards2.length) {
          await player2.showCards(cards2, get.translation(player2) + "发动了【盗书】");
          await trigger2.player.gain(cards2, target2, "give");
          const suits = cards2.reduce((list, card2) => {
            return list.add(get.suit(card2, target2));
          }, []);
          if (suits.length) {
            for (const i of [player2, trigger2.player]) {
              i.addTempSkill("stddaoshu_effect");
              i.markAuto("stddaoshu_effect", suits);
            }
          }
        }
      }
    },
    subSkill: {
      effect: {
        charlotte: true,
        onremove: true,
        mod: {
          cardEnabled(card2, player2) {
            if (player2.getStorage("stddaoshu_effect").includes(get.suit(card2))) {
              return false;
            }
          },
          cardSavable(card2, player2) {
            if (player2.getStorage("stddaoshu_effect").includes(get.suit(card2))) {
              return false;
            }
          }
        },
        intro: { content: "不能使用$花色的牌" }
      }
    }
  },
  stddaizui: {
    audio: "spdaizui",
    trigger: { player: "damageEnd" },
    filter(event2, player2) {
      return player2.isTempBanned("stddaoshu");
    },
    forced: true,
    content() {
      delete player.storage.temp_ban_stddaoshu;
      player.popup("盗书");
      game.log(player, "重置了技能", "#g【盗书】");
    },
    ai: {
      combo: "stddaoshu"
    }
  },
  //周处
  stdxiongxia: {
    audio: "xianghai",
    enable: "chooseToUse",
    filterCard: true,
    selectCard: 2,
    position: "hes",
    viewAs: { name: "juedou" },
    selectTarget: 2,
    viewAsFilter(player2) {
      if (player2.countCards("hes") < 2) {
        return false;
      }
    },
    check(card2) {
      if (get.name(card2) == "sha") {
        return 4 - get.value(card2);
      }
      return 7.5 - get.value(card2);
    },
    onuse(links, player2) {
      player2.addTempSkill("stdxiongxia_effect");
    },
    subSkill: {
      effect: {
        charlotte: true,
        trigger: { player: "useCardAfter" },
        filter(event2, player2) {
          return event2.skill == "stdxiongxia" && (event2.targets || []).every((target2) => {
            return target2.getHistory("damage", (evt) => {
              return evt.card && evt.card == event2.card;
            }).length;
          });
        },
        forced: true,
        popup: false,
        content() {
          player.tempBanSkill("stdxiongxia");
        }
      }
    }
  },
  //吕玲绮
  stdhuiji: {
    audio: "guowu",
    trigger: { player: "useCard2" },
    filter(event2, player2) {
      if (event2.card.name != "sha") {
        return false;
      }
      return game.hasPlayer((target2) => {
        return !event2.targets.includes(target2) && lib.filter.targetEnabled2(event2.card, player2, target2) && lib.filter.targetInRange(event2.card, player2, target2);
      });
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(
        get.prompt2(event2.skill),
        (card2, player3, target2) => {
          const event3 = get.event().getTrigger();
          return !event3.targets.includes(target2) && lib.filter.targetEnabled2(event3.card, player3, target2) && lib.filter.targetInRange(event3.card, player3, target2);
        },
        [1, 2]
      ).set("ai", (target2) => {
        const player3 = get.event().player, event3 = get.event().getTrigger();
        return get.effect(target2, event3.card, player3);
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      trigger2.targets.addArray(event2.targets);
      player2.addTempSkill("stdhuiji_effect");
      trigger2.card.stdhuiji = true;
    },
    subSkill: {
      effect: {
        charlotte: true,
        trigger: { global: "chooseToUseBegin" },
        filter(event2, player2) {
          if (event2._stdhuiji_effect) {
            return false;
          }
          const evt = event2.getParent(2);
          return evt.card?.stdhuiji;
        },
        forced: true,
        popup: false,
        forceDie: true,
        async content(event2, trigger2, player2) {
          trigger2._stdhuiji_effect = true;
          const targets = trigger2.getParent(2).targets.filter((i) => {
            return i != trigger2.player;
          }).sortBySeat();
          if (targets.length) {
            for (const target2 of targets) {
              if (!target2.isIn()) {
                continue;
              }
              const next = target2.chooseToUse("挥战：是否替" + get.translation(trigger2.player) + "使用一张【闪】？", function(card2) {
                if (get.name(card2) != "shan") {
                  return false;
                }
                return lib.filter.filterCard.apply(this, arguments);
              });
              next.set("ai", () => {
                const event3 = _status.event;
                return get.attitude(event3.player, event3.source) - 2;
              });
              next.set("skillwarn", "替" + get.translation(player2) + "使用一张闪");
              next.autochoose = lib.filter.autoRespondShan;
              next.set("source", player2);
              const result = await next.forResult();
              if (result.bool) {
                trigger2.result = { bool: true, card: { name: "shan", isCard: true, cards: result.cards.slice() }, cards: result.cards.slice() };
                trigger2.responded = true;
                trigger2.animate = false;
                break;
              }
            }
          }
        }
      }
    }
  },
  //羊祜
  stdmingfa: {
    audio: "dcmingfa",
    enable: "phaseUse",
    filter(event2, player2) {
      return game.hasPlayer((target2) => target2.getHp() > 1);
    },
    filterTarget(card2, player2, target2) {
      return target2.getHp() > 1;
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.target;
      await target2.damage();
      if (target2.isIn()) {
        player2.tempBanSkill("stdmingfa", "forever");
        player2.addSkill("stdmingfa_used");
        player2.markAuto("stdmingfa_used", [target2]);
      }
    },
    subSkill: {
      used: {
        charlotte: true,
        onremove: true,
        trigger: { global: ["dieAfter", "recoverAfter"] },
        filter(event2, player2) {
          return player2.getStorage("stdmingfa_used").includes(event2.player);
        },
        forced: true,
        popup: false,
        content() {
          delete player.storage[`temp_ban_stdmingfa`];
          player.popup("明伐");
          game.log(player, "恢复了技能", "#g【明伐】");
          player.removeSkill("stdmingfa_used");
        }
      }
    },
    ai: {
      order: 10,
      result: {
        target(player2, target2) {
          return get.sgn(get.attitude(player2, target2)) * get.damageEffect(target2, player2, player2);
        }
      }
    }
  },
  //骆统
  stdrenzheng: {
    audio: "renzheng",
    trigger: { global: ["damageCancelled", "damageZero"] },
    filter(event2, player2, name) {
      if (!_status.currentPhase?.isIn()) {
        return false;
      }
      if (name == "damageCancelled") {
        return true;
      }
      return event2.change_history.some((i) => i < 0);
    },
    forced: true,
    logTarget: () => _status.currentPhase,
    content() {
      _status.currentPhase.draw();
    }
  },
  stdjinjian: {
    audio: "jinjian",
    trigger: {
      source: "damageBegin2",
      player: "damageBegin4"
    },
    filter(event2, player2, name) {
      return !player2.getStorage("stdjinjian_used").includes(name.slice(11));
    },
    prompt2(event2, player2, name) {
      return `防止即将${name == "damageBegin2" ? "造成" : "受到"}的伤害`;
    },
    check(event2, player2) {
      return get.damageEffect(event2.player, event2.source, player2) < 0;
    },
    async content(event2, trigger2, player2) {
      trigger2.cancel();
      player2.addTempSkill("stdjinjian_used");
      player2.markAuto("stdjinjian_used", event2.triggername.slice(11));
      player2.addTempSkill(`stdjinjian_effect${event2.triggername.slice(11)}`);
      player2.addMark(`stdjinjian_effect${event2.triggername.slice(11)}`, 1, false);
    },
    subSkill: {
      used: {
        charlotte: true,
        onremove: true
      },
      effect2: {
        trigger: { source: "damageBegin1" },
        forced: true,
        charlotte: true,
        onremove: true,
        async content(event2, trigger2, player2) {
          const num = player2.countMark(event2.name);
          trigger2.num += num;
          player2.removeMark(event2.name, num, false);
        },
        marktext: "进",
        intro: {
          content: "下次造成的伤害+$"
        }
      },
      effect4: {
        trigger: { player: "damageBegin3" },
        forced: true,
        charlotte: true,
        onremove: true,
        async content(event2, trigger2, player2) {
          const num = player2.countMark(event2.name);
          trigger2.num += num;
          player2.removeMark(event2.name, num, false);
        },
        marktext: "谏",
        intro: {
          content: "下次受到的伤害+$"
        }
      }
    },
    ai: {
      maixie_defend: true,
      threaten: 0.9,
      effect: {
        target(card2, player2, target2) {
          if (player2.hasSkillTag("jueqing", false, target2)) {
            return;
          }
          if (player2._stdjinjian_tmp) {
            return;
          }
          if (_status.event.getParent("useCard", true) || _status.event.getParent("_wuxie", true)) {
            return;
          }
          if (get.tag(card2, "damage")) {
            if (target2.hasSkill("stdjinjian_effect4")) {
              return [1, -2];
            } else if (!target2.getStorage("stdjinjian_used").includes("4")) {
              if (get.attitude(player2, target2) > 0) {
                return [0, 0.2];
              }
              if (get.attitude(player2, target2) < 0) {
                var sha = player2.getCardUsable({ name: "sha" });
                player2._stdjinjian_tmp = true;
                var num = player2.countCards("h", function(card3) {
                  if (card3.name == "sha") {
                    if (sha == 0) {
                      return false;
                    } else {
                      sha--;
                    }
                  }
                  return get.tag(card3, "damage") && player2.canUse(card3, target2) && get.effect(target2, card3, player2, player2) > 0;
                });
                delete player2._stdjinjian_tmp;
                if (player2.hasSkillTag("damage")) {
                  num++;
                }
                if (num < 2) {
                  return [0, 0.8];
                }
              }
            }
          }
        }
      }
    }
  },
  //李傕
  stdxiongsuan: {
    audio: "xinfu_langxi",
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return player2.isMaxHp();
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(
        "请选择【凶算】的目标",
        lib.translate.stdxiongsuan_info,
        (card2, player3, target2) => {
          return target2.getHp() == player3.getHp();
        },
        [1, Infinity],
        true
      ).set("ai", (target2) => {
        const player3 = get.event().player;
        return get.damageEffect(target2, player3, player3);
      }).forResult();
    },
    locked: true,
    async content(event2, trigger2, player2) {
      for (const i of event2.targets) {
        await i.damage();
      }
    },
    ai: {
      effect: {
        target(card2, player2, target2) {
          if (target2.hp <= 1 || !target2.hasFriend() || !_status.currentPhase || !get.tag(card2, "damage")) {
            return;
          }
          let hp = target2.hp - 1;
          if (game.hasPlayer((cur) => {
            return cur.hp > hp;
          })) {
            return;
          }
          let ori = game.countPlayer((cur) => {
            return cur.hp === hp + 1 && get.attitude(target2, cur) <= 0;
          }), now = game.countPlayer((cur) => {
            return cur.hp === hp && get.attitude(target2, cur) <= 0;
          }), seat = 1, tar = _status.currentPhase.next;
          while (tar !== target2) {
            if (get.attitude(target2, tar) <= 0) {
              seat++;
            }
            tar = tar.next;
          }
          return [1, 2 * (now - ori) / seat];
        }
      }
    }
  },
  //程普
  stdchunlao: {
    audio: "chunlao",
    trigger: { player: "phaseDiscardEnd" },
    filter(event2, player2) {
      return (event2.cards || []).length >= 2 && game.hasPlayer((target2) => {
        return target2 != player2 && target2.countCards("h");
      });
    },
    async cost(event2, trigger2, player2) {
      const cards2 = trigger2.cards;
      event2.result = await player2.chooseTarget(get.prompt(event2.skill), "用" + get.translation(cards2) + "交换一名其他角色的手牌", (card2, player3, target2) => {
        return target2 != player3 && target2.countCards("h");
      }).set("ai", (target2) => {
        return get.event().cards.length - target2.countCards("h") - 0.5;
      }).set("cards", cards2).forResult();
    },
    async content(event2, trigger2, player2) {
      const cards2 = trigger2.cards, target2 = event2.targets[0];
      await target2.loseToDiscardpile(target2.getCards("h"));
      await target2.gain(cards2, "gain2").set("giver", player2);
      if (player2.isDamaged()) {
        const { bool } = await target2.chooseBool("是否令" + get.translation(player2) + "回复1点体力？").set("choice", get.recoverEffect(player2, target2, target2) > 0).forResult();
        if (bool) {
          target2.line(player2);
          await player2.recover(target2);
        }
      }
    }
  },
  //文鸯
  stdquedi: {
    audio: "dbquedi",
    enable: "chooseToUse",
    filterCard: { name: "sha" },
    position: "hes",
    viewAs: { name: "juedou" },
    viewAsFilter(player2) {
      if (!player2.countCards("hes", { name: "sha" })) {
        return false;
      }
    },
    check(card2) {
      return 6 - get.value(card2);
    }
  },
  //邓芝
  //只因盟
  stdzhiyinmeng: {
    audio: "weimeng",
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return player2.countCards("he");
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseCardTarget({
        prompt: get.prompt2(event2.skill),
        filterTarget: lib.filter.notMe,
        filterCard: true,
        position: "he",
        selectCard: [1, Infinity],
        complexCard: true,
        complexTarget: true,
        complexSelect: true,
        allowChooseAll: true,
        ai1(card2) {
          if (ui.selected.cards.length && card2.name != "du") {
            return 0;
          }
          if (card2.name == "du") {
            return 114514;
          }
          return 5 - get.value(card2);
        },
        ai2(target2) {
          if (!ui.selected.cards.length) {
            return 0;
          }
          const player3 = get.event().player, att = get.attitude(player3, target2);
          if (ui.selected.cards[0].name == "du") {
            if (!target2.hasSkillTag("nodu")) {
              return -att;
            }
            return -1e-5 * att;
          }
          return att;
        }
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      await player2.give(event2.cards, target2);
      await target2.chooseToGive("he", [1, Infinity], player2, "allowChooseAll");
    }
  },
  stdhehe: {
    audio: "jianliang",
    trigger: { player: "phaseDrawEnd" },
    filter(event2, player2) {
      return game.hasPlayer((target2) => {
        return target2 != player2 && target2.countCards("h") == player2.countCards("h");
      });
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(
        get.prompt2(event2.skill),
        (card2, player3, target2) => {
          return target2 != player3 && target2.countCards("h") == player3.countCards("h");
        },
        [1, 2]
      ).set("ai", (target2) => {
        const player3 = get.event().player;
        return get.effect(target2, { name: "draw" }, player3, player3);
      }).forResult();
    },
    locked: true,
    async content(event2, trigger2, player2) {
      await game.asyncDraw(event2.targets);
      await game.delayx();
    }
  },
  //张翼
  stdzhiyi: {
    audio: "zhiyi",
    trigger: { global: "phaseEnd" },
    filter(event2, player2) {
      return player2.getHistory("useCard", (evt) => {
        return evt.card.name == "sha";
      }).length;
    },
    forced: true,
    async content(event2, trigger2, player2) {
      const result = await player2.chooseUseTarget("执义：视为使用【杀】，或摸一张牌", { name: "sha" }, false).forResult();
      if (!result.bool) {
        await player2.draw();
      }
    }
  },
  //大魏汉尼拔
  stdshefu: {
    audio: "shefu",
    trigger: { player: "phaseJieshuBegin" },
    filter(event2, player2) {
      return player2.countCards("h");
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseCard(get.prompt(event2.skill), "将一张手牌置于武将牌上", "h").set("ai", (card2) => {
        return (lib.card.list.slice().map((list) => list[2]).filter((name) => {
          return card2.name == name;
        }).length - 1) / (get.value(card2) || 0.5);
      }).forResult();
    },
    content() {
      player.addToExpansion(event.cards, player, "giveAuto").gaintag.add("stdshefu");
    },
    marktext: "伏",
    intro: {
      markcount: "expansion",
      mark(dialog, _, player2) {
        const cards2 = player2.getExpansions("stdshefu");
        if (player2.isUnderControl(true) && cards2.length) {
          dialog.addAuto(cards2);
        } else {
          return "共有" + get.cnNumber(cards2.length) + "张“伏兵”";
        }
      }
    },
    onremove(player2, skill) {
      const cards2 = player2.getExpansions(skill);
      if (cards2.length) {
        player2.loseToDiscardpile(cards2);
      }
    },
    group: "stdshefu_effect",
    subSkill: {
      effect: {
        audio: "shefu",
        trigger: { global: "useCard" },
        filter(event2, player2) {
          return player2.getExpansions("stdshefu").some((card2) => card2.name == event2.card.name);
        },
        async cost(event2, trigger2, player2) {
          let result = await player2.chooseButton(["###" + get.prompt("stdshefu") + "###弃置一张同名牌，令此牌无效", player2.getExpansions("stdshefu")]).set("filterButton", (button) => {
            return button.link.name == get.event().getTrigger().card.name;
          }).set("ai", (button) => {
            return get.event().goon ? 1 : 0;
          }).set("goon", lib.skill.sbkanpo.subSkill.kanpo.check(trigger2, player2)).forResult();
          if (result.bool && result.links) {
            result.cards = result.links.slice();
            delete result.links;
          }
          event2.result = result;
        },
        async content(event2, trigger2, player2) {
          await player2.loseToDiscardpile(event2.cards);
          trigger2.targets.length = 0;
          trigger2.all_excluded = true;
        }
      }
    }
  },
  stdyibing: {
    audio: "benyu",
    trigger: { global: "dying" },
    filter(event2, player2) {
      return event2.player != player2 && event2.player.countCards("eh");
    },
    logTarget: "player",
    check(event2, player2) {
      return get.effect(event2.player, { name: "shunshou_copy2" }, player2, player2) > 0;
    },
    async content(event2, trigger2, player2) {
      await player2.gainPlayerCard(trigger2.player, "he", `获得${get.translation(trigger2.player)}一张牌`, true);
    }
  },
  //樊玉凤
  stdbazhan: {
    audio: "bazhan",
    enable: "phaseUse",
    filter(event2, player2) {
      return player2.countCards("h") > 0;
    },
    filterCard: true,
    position: "h",
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.hasSex("male");
    },
    discard: false,
    lose: false,
    delay: false,
    usable: 2,
    check(card2) {
      if (card2.name == "du") {
        return 114514;
      }
      return 5 - get.value(card2);
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.target;
      await player2.showCards(event2.cards);
      await player2.give(event2.cards, target2, "visible");
      if (target2.countCards("h")) {
        await target2.chooseToGive(player2, (card2, player3) => {
          return get.type2(card2) != get.type2(get.event().cards[0]);
        }).set("cards", event2.cards);
      }
    },
    ai: {
      order: 10,
      result: {
        target(player2, target2) {
          if (!ui.selected.cards.length) {
            return 0;
          }
          const cardxx = ui.selected.cards[0];
          if (cardxx.name == "du") {
            return -100;
          }
          if (!player2.hasSkill("stdzhanying")) {
            return 1;
          }
          if (target2.countMark("stdzhanying_count") == target2.countCards("h") + 1) {
            const cards2 = player2.getCards("hs", (card2) => {
              return card2 != cardxx && get.tag(card2, "damage") && player2.canUse(card2, target2) && get.effect(target2, card2, player2, player2) > 0;
            });
            if (!cards2.length) {
              return 1;
            }
            let cardx = cards2.filter((card2) => get.name(card2) == "sha");
            cardx.sort((a, b) => get.effect(target2, b, player2, player2) - get.effect(target2, a, player2, player2));
            cardx = cardx.slice(Math.min(cardx.length, player2.getCardUsable("sha")), cardx.length);
            cards2.removeArray(cardx);
            return -cards2.reduce((sum, card2) => sum + get.effect(target2, card2, player2, player2), 0);
          }
          return 1;
        }
      }
    }
  },
  stdzhanying: {
    audio: "jiaoying",
    trigger: { global: "damageBegin2" },
    filter(event2, player2) {
      if (_status.currentPhase !== player2) {
        return false;
      }
      return event2.player.countCards("h") > event2.player.countMark("stdzhanying_count");
    },
    forced: true,
    logTarget: "player",
    content() {
      trigger.num++;
    },
    global: "stdzhanying_mark",
    subSkill: {
      count: {
        charlotte: true,
        onremove: true,
        intro: {
          markcount: (storage) => (storage || 0).toString(),
          content: "本回合开始时手牌数为#张"
        }
      },
      mark: {
        charlotte: true,
        trigger: { global: "phaseBegin" },
        filter(event2, player2) {
          return event2.player.hasSkill("stdzhanying", null, null, false);
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
          player.addTempSkill("stdzhanying_count");
          player.addMark("stdzhanying_count", player.countCards("h"), false);
        },
        mod: {
          cardEnabled(card2, player2) {
            if (!_status.currentPhase || !_status.currentPhase.hasSkill("stdzhanying")) {
              return;
            }
            if (get.color(card2) == "red" && player2.countMark("stdzhanying_count") < player2.countCards("h")) {
              return false;
            }
          },
          cardSavable(card2, player2) {
            if (!_status.currentPhase || !_status.currentPhase.hasSkill("stdzhanying")) {
              return;
            }
            if (get.color(card2) == "red" && player2.countMark("stdzhanying_count") < player2.countCards("h")) {
              return false;
            }
          }
        }
      }
    }
  },
  //F1
  stdtiaohe: {
    audio: "fyjianyu",
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return game.hasPlayer((tar1) => {
        return tar1.countDiscardableCards(player2, "e", (i) => get.subtype(i) == "equip2") && game.hasPlayer((tar2) => {
          return tar1 !== tar2 && tar2.countDiscardableCards(player2, "e");
        });
      });
    },
    filterTarget(card2, player2, target2) {
      if (!ui.selected.targets.length || ui.selected.targets[0].countDiscardableCards(player2, "e", (i) => get.subtype(i) == "equip2")) {
        return target2.countDiscardableCards(player2, "e");
      }
      return target2.countDiscardableCards(player2, "e", (i) => get.subtype(i) == "equip2");
    },
    selectTarget() {
      return 2;
    },
    complexTarget: true,
    multitarget: true,
    multiline: true,
    async content(event2, trigger2, player2) {
      const targets = event2.targets.slice();
      if (targets.length == 1) {
        await player2.discardPlayerCard("ej", targets[0], true, 2).set("filterButton", (button) => {
          let position = get.position(button.link), subtype = get.subtype(button.link);
          if (!subtype || !subtype.startsWith("equip")) {
            return false;
          }
          if (ui.selected.buttons.length) {
            let pos = get.position(ui.selected.buttons[0].link), sub = get.subtype(ui.selected.buttons[0].link);
            if (pos == "e" && position == "e") {
              return false;
            }
            if (sub == "equip2") {
              return true;
            }
            return subtype == "equip2";
          }
          if (position == "e") {
            if (!get.event().js.some((i) => get.subtype(i) == "equip2")) {
              return subtype == "equip2";
            }
            return true;
          }
          if (!get.event().es.length) {
            return subtype == "equip2";
          }
          return true;
        }).set(
          "es",
          targets[0].getDiscardableCards(player2, "e", (i) => get.subtype(i) == "equip2")
        ).set(
          "js",
          targets[0].getDiscardableCards(player2, "j", (i) => get.type(i) == "equip")
        );
        return;
      }
      let canfj = targets.filter((target2) => {
        return target2.countDiscardableCards(player2, "e", (i) => get.subtype(i) == "equip2");
      });
      for (let i = 0; i < 2; i++) {
        if (i && canfj.includes(targets[i]) && !targets[i].countDiscardableCards(player2, "e", (i2) => get.subtype(i2) == "equip2")) {
          break;
        }
        const result = await player2.discardPlayerCard("e", targets[i], true).set("filterButton", (button) => {
          if (get.event().fj) {
            return get.subtype(button.link) == "equip2";
          }
          return get.type(button.link) == "equip";
        }).set("fj", canfj.length === 1 && canfj.includes(targets[i])).forResult();
        if (result.bool && get.subtype(result.cards[0]) == "equip2") {
          canfj = [];
        }
      }
    },
    ai: {
      order: 10,
      result: {
        target(player2, target2) {
          let att = get.attitude(player2, target2), es = [];
          target2.countDiscardableCards(player2, "e", (i) => {
            es.push(get.value(i, target2));
          });
          let min = Math.min(...es), max = Math.max(...es), ext = target2.hasSkillTag("noe") ? 10 : 0;
          if (att <= 0) {
            return ext - max;
          }
          return ext - min;
        }
      }
    }
  },
  stdqiansu: {
    audio: "shengxi_feiyi",
    trigger: { target: "useCardToTargeted" },
    filter(event2, player2) {
      return get.type2(event2.card) == "trick" && !player2.countCards("e");
    },
    frequent: true,
    content() {
      player.draw();
    },
    ai: {
      noe: true,
      effect: {
        target(card2, player2, target2) {
          if (target2.countCards("e")) {
            return;
          }
          if (target2 == player2 && get.type(card2) == "equip" && get.equipValue(card2) < 5) {
            return 0;
          }
          if (get.type2(card2) == "trick") {
            return [1, 0.6];
          }
        }
      }
    }
  }
};
const translates = {
  sixiang: "四象封印",
  std_sunhao: "标孙皓",
  std_sunhao_prefix: "标",
  std_mateng: "标马腾",
  std_mateng_prefix: "标",
  std_mayunlu: "标马云騄",
  std_mayunlu_prefix: "标",
  std_jianggan: "标蒋干",
  std_jianggan_prefix: "标",
  std_zhouchu: "标周处",
  std_zhouchu_prefix: "标",
  std_lvlingqi: "标吕玲绮",
  std_lvlingqi_prefix: "标",
  std_dc_yanghu: "标羊祜",
  std_dc_yanghu_prefix: "标",
  std_dc_luotong: "标骆统",
  std_dc_luotong_prefix: "标",
  std_lijue: "标李傕",
  std_lijue_prefix: "标",
  std_chengpu: "标程普",
  std_chengpu_prefix: "标",
  std_db_wenyang: "标文鸯",
  std_db_wenyang_prefix: "标",
  std_re_dengzhi: "标邓芝",
  std_re_dengzhi_prefix: "标",
  std_zhangyì: "标张翼",
  std_zhangyì_prefix: "标",
  std_chengyu: "标程昱",
  std_chengyu_prefix: "标",
  std_fanyufeng: "标樊玉凤",
  std_fanyufeng_prefix: "标",
  std_feiyi: "标费祎",
  std_feiyi_prefix: "标",
  stdcanshi: "残蚀",
  stdcanshi_info: "锁定技，摸牌阶段，你改为摸X张牌（X为场上的已受伤角色且X至少为1）。然后本回合你使用【杀】或普通锦囊牌指定目标后，若其已受伤，你弃置一张牌。",
  stdxiongyi: "雄异",
  stdxiongyi_info: "限定技，出牌阶段，你可以选择任意名角色，这些角色依次选择是否使用一张不可被响应的【杀】，然后这些角色重复此流程直至有角色不使用【杀】。",
  stdyouji: "游骑",
  stdyouji_info: "主公技，准备阶段，你可以移动一名群势力角色的一张坐骑牌。",
  stdfengpo: "凤魄",
  stdfengpo_info: "当你使用【杀】造成伤害时，你可以弃置你或其的一张牌，若以此法弃置了方片牌，则此伤害+1。",
  stddaoshu: "盗书",
  stddaoshu_info: "每轮限一次，一名角色的准备阶段，你可以展示除其外一名角色的一张牌，然后令其获得此牌，且你与其本回合不能使用与此牌花色相同的牌。",
  stddaizui: "戴罪",
  stddaizui_info: "锁定技，当你受到伤害后，你视为本轮未发动过〖盗书〗。",
  stdxiongxia: "凶侠",
  stdxiongxia_info: "你可以将两张牌当作【决斗】对两名其他角色使用。你以此法使用的【决斗】结算完毕后，若所有目标角色都受到了此牌造成的伤害，则〖凶侠〗于本回合失效。",
  stdhuiji: "挥戟",
  stdhuiji_info: "你使用【杀】可以额外指定至多两个目标。若如此做，目标角色响应此【杀】时，其他目标角色可以代替其使用【闪】。",
  stdmingfa: "明伐",
  stdmingfa_info: "出牌阶段，你可以对一名体力值大于1的角色造成1点伤害，然后此技能失效直至其死亡或回复体力。",
  stdjinjian: "进谏",
  stdjinjian_info: "每回合每项各限一次，当你造成/受到伤害时，你可防止此伤害，然后你本回合内下一次造成/受到的伤害+1。",
  stdrenzheng: "仁政",
  stdrenzheng_info: "锁定技，当有伤害被防止时，你令当前回合角色摸一张牌。",
  stdxiongsuan: "凶算",
  stdxiongsuan_info: "锁定技，准备阶段，若你的体力值为全场最多，则你须对至少一名体力值等于你的角色各造成1点伤害。",
  stdchunlao: "醇醪",
  stdchunlao_info: "弃牌阶段结束时，若你本阶段弃置了不少于两张牌，则你可以用这些牌交换一名其他角色的手牌，然后其可以令你回复1点体力。",
  stdquedi: "却敌",
  stdquedi_info: "你可以将【杀】当作【决斗】使用。",
  stdzhiyinmeng: "急盟",
  stdzhiyinmeng_info: "准备阶段，你可以交给一名其他角色任意张牌，然后其可以交给你任意张牌。",
  stdhehe: "和合",
  stdhehe_info: "摸牌阶段结束时，你可以令至多两名手牌数与你相同的其他角色各摸一张牌。",
  stdzhiyi: "执义",
  stdzhiyi_info: "锁定技，一名角色的回合结束时，若你本回合使用过【杀】，则你视为使用【杀】或摸一张牌。",
  stdshefu: "设伏",
  stdshefu_info: "①结束阶段，你可以将一张手牌称为“伏兵”扣置于武将牌上。②一名角色使用牌时，你可以移去武将牌上的一张与此牌同名的“伏兵”并令此牌无效。",
  stdyibing: "益兵",
  stdyibing_info: "一名角色进入濒死状态时，你可以获得其一张牌。",
  stdbazhan: "把盏",
  stdbazhan_info: "出牌阶段限两次，你可以将一张手牌展示并交给一名男性角色，然后其可以展示并交给你一张与此牌类别不同的手牌。",
  stdzhanying: "醮影",
  stdzhanying_info: "锁定技，你的回合内，手牌数比回合开始时多的角色不能使用红色牌且受到的伤害+1。",
  stdtiaohe: "调和",
  stdtiaohe_info: "出牌阶段限一次，你可以弃置场上的一张装备牌和一张防具牌（不能为同一名角色的牌）。",
  stdqiansu: "谦素",
  stdqiansu_info: "当你成为锦囊牌的目标后，若你的装备区没有牌，则你可以摸一张牌。",
  old_shen_zhaoyun: "牢神赵云",
  old_shen_zhaoyun_prefix: "牢神",
  std_xushu: "标徐庶",
  std_xushu_prefix: "标",
  std_xuezong: "标薛综",
  std_xuezong_prefix: "标",
  std_liuzhang: "标刘璋",
  std_liuzhang_prefix: "标",
  std_wangyuanji: "标王元姬",
  std_wangyuanji_prefix: "标",
  std_wanglang: "标王朗",
  std_wanglang_prefix: "标",
  std_zhonghui: "标钟会",
  std_zhonghui_prefix: "标",
  std_fuhuanghou: "标伏寿",
  std_fuhuanghou_prefix: "标",
  std_liubiao: "标刘表",
  std_liubiao_prefix: "标",
  std_gongsunyuan: "标公孙渊",
  std_gongsunyuan_prefix: "标",
  std_cenhun: "标岑昏",
  std_cenhun_prefix: "标",
  std_sunshao_prefix: "标",
  std_jiangwan: "标蒋琬",
  std_jiangwan_prefix: "标",
  std_maliang: "标马良",
  std_maliang_prefix: "标",
  std_simashi: "标司马师",
  std_simashi_prefix: "标",
  std_guanxing: "标关兴",
  std_guanxing_prefix: "标",
  std_huaxin: "标华歆",
  std_huaxin_prefix: "标",
  stdwuyou: "武佑",
  stdwuyou_info: "出牌阶段限一次，你可以与一名角色进行拼点，若你没赢，你本回合视为拥有〖武圣〗。然后拼点赢的角色视为对没赢的角色使用一张【决斗】。",
  stdqiuyuan: "求援",
  stdqiuyuan_info: "当你成为一名角色使用【杀】的目标时，你可以令另一名其他角色选择一项：1.交给你一张牌；2.成为此【杀】的额外目标。",
  stdzhuikong: "惴恐",
  stdzhuikong_info: "其他角色的准备阶段，你可以用【杀】与其拼点，赢的角色可以使用对方的拼点牌。",
  stdzishou: "自守",
  stdzishou_info: "出牌阶段开始前，你可以摸场上势力数张牌，然后跳过此阶段。",
  stdjujin: "据荆",
  stdjujin_info: "主公技，当你受到其他群势力角色造成的伤害后，你可以弃置两张牌，然后回复1点体力。",
  stdhuaiyi: "怀异",
  stdhuaiyi_info: "锁定技，准备阶段，你展示所有手牌，若颜色不同，你弃置其中一种颜色的所有牌，然后获得至多等量名其他角色各一张牌，若选择角色数大于1，你失去1点体力。",
  stdfengbai: "封拜",
  stdfengbai_info: "主公技，当你获得一名群势力角色装备区内的牌后，你可以令其摸一张牌。",
  stdjishe: "极奢",
  stdjishe_info: "出牌阶段，若你的手牌上限大于0，你可以令本回合手牌上限-1，然后摸一张牌。",
  stdwudu: "无度",
  stdwudu_info: "一名没有手牌的角色受到伤害时，你可以减少1点体力上限，防止此伤害。",
  stdjinglve: "景略",
  stdjinglve_info: "其他角色的弃牌阶段开始时，你可以展示并交给其两张牌，令其本阶段不能弃置这些牌，然后你可以于本阶段结束时获得本阶段弃置的一张牌。",
  std_sunshao: "标孙邵",
  stddingyi: "定仪",
  stddingyi_info: "一名角色的结束阶段，若其装备区内没有牌，其可以摸一张牌。",
  stdzuici: "罪辞",
  stdzuici_info: "当你受到伤害后，你可以将场上的一张牌移至伤害来源区域内。",
  stdruwu: "儒武",
  stdruwu_info: "你可以将装备区内一张不为本回合置入的装备牌当【无中生有】或【决斗】使用。",
  stdchengshi: "承事",
  stdchengshi_info: "限定技，当一名其他角色死亡时，你可以与其交换座次和装备区内的牌。",
  stdxiemu: "协穆",
  stdxiemu_info: "其他角色的出牌阶段限一次，其可以展示并交给你一张基本牌，然后其本回合攻击范围+1。",
  stdnaman: "纳蛮",
  stdnaman_info: "出牌阶段限一次，你可以将任意张基本牌当指定等量名目标的【南蛮入侵】使用。",
  oldjuejing: "绝境",
  oldjuejing_info: "锁定技。①摸牌阶段，你令额定摸牌数+X（X为你已损失的体力值）。②你的手牌上限+2。",
  oldlonghun: "龙魂",
  oldlonghun_info: "你可以将花色相同的Y张牌按下列规则使用或打出：♥当【桃】，♦当火【杀】，♣当【闪】，♠当【无懈可击】（Y为你的体力值且至少为1）。",
  stdxiaofan: "嚣翻",
  stdxiaofan_info: "锁定技，当你使用牌结算结束后，你弃置你前X个区域内的牌：1.判定区 2.装备区 3.手牌区（X为你本回合使用牌的类型数）。",
  stdtuishi: "侻失",
  stdtuishi_info: "锁定技，你不能使用【无懈可击】，你使用的字母牌无效。",
  stdfunan: "复难",
  stdfunan_info: "每回合限一次，其他角色使用的牌被你抵消时，你可以获得之。",
  stdjiexun: "诫训",
  stdjiexun_info: "结束阶段，你可以令一名角色弃置一张手牌，若此牌花色为♦️，其摸两张牌。",
  stdwuyan: "无言",
  stdwuyan_info: "锁定技，你的锦囊牌均视为【无懈可击】。",
  stdjujian: "举荐",
  stdjujian_info: "每回合限一次，你的【无懈可击】结算结束后可以交给一名其他角色。",
  stdyinge: "引戈",
  stdyinge_info: "出牌阶段限一次，你可以令一名其他角色交给你一张牌，然后其视为对你或你攻击范围内的另一名角色使用一张【杀】。",
  stdshiren: "施仁",
  stdshiren_info: "每回合限一次，当你成为其他角色使用【杀】的目标后，你可以摸两张牌，然后交给该角色一张牌。",
  stdjuyi: "据益",
  stdjuyi_info: "主公技，其他群势力角色每回合首次对你造成伤害时，其可以防止此伤害，改为获得你的一张牌。",
  stdqianchong: "谦冲",
  stdqianchong_info: "锁定技，若你的装备区内牌的数量为奇数/偶数，你使用牌无次数/距离限制。",
  stdshangjian: "尚俭",
  stdshangjian_info: "结束阶段，若你本回合失去的牌数不大于你的体力值，你可以从弃牌堆中获得一张你本回合失去的牌。",
  stdgushe: "鼓舌",
  stdgushe_info: "出牌阶段限一次，你可以与一名角色拼点，拼点赢的角色摸一张牌，然后拼点输的角色可以与对方重复此流程。",
  stdjici: "激词",
  stdjici_info: "当你亮出拼点牌时，你可以失去1点体力，令此牌点数视为k。",
  stdxingfa: "兴伐",
  stdxingfa_info: "准备阶段，若你的手牌数不小于体力值，你可以对一名其他角色造成1点伤害。",
  stdyuanqing: "渊清",
  stdyuanqing_info: "回合结束时，你可以令所有角色依次选择并获得弃牌堆中其于此回合内失去的一张牌。",
  stdshuchen: "疏陈",
  stdshuchen_info: "你的回合外，你可以将超出手牌上限的手牌当【桃】使用。",
  std_zhangbao: "标张苞",
  std_zhangbao_prefix: "标",
  std_liuchen: "标刘谌",
  std_liuchen_prefix: "标",
  std_guansuo: "标关索",
  std_guansuo_prefix: "标",
  std_xiahouba: "标夏侯霸",
  std_xiahouba_prefix: "标",
  std_caorui: "标曹叡",
  std_caorui_prefix: "标",
  std_liuye: "标刘晔",
  std_liuye_prefix: "标",
  std_guohuanghou: "标郭皇后",
  std_guohuanghou_prefix: "标",
  std_lvfan: "标吕范",
  std_lvfan_prefix: "标",
  std_dingfeng: "标丁奉",
  std_dingfeng_prefix: "标",
  std_sunluban: "标孙鲁班",
  std_sunluban_prefix: "标",
  std_liuzan: "标留赞",
  std_liuzan_prefix: "标",
  std_sunyi: "标孙翊",
  std_sunyi_prefix: "标",
  std_taoqian: "标陶谦",
  std_taoqian_prefix: "标",
  std_jiling: "标纪灵",
  std_jiling_prefix: "标",
  std_liru: "标李儒",
  std_liru_prefix: "标",
  std_wangyun: "标王允",
  std_wangyun_prefix: "标",
  stdjuezhu: "角逐",
  stdjuezhu_info: "锁定技，当你造成/受到伤害后，你本回合使用牌无次数限制/视为对伤害来源使用一张【决斗】。",
  stdchengji: "承继",
  stdchengji_info: "你可以将两张颜色不同的牌当【杀】使用或打出。",
  stdzhanjue: "战绝",
  stdzhanjue_info: "出牌阶段限一次，你可以将所有手牌当作【决斗】使用，然后摸一张牌。",
  stdqinwang: "勤王",
  stdqinwang_info: "主公技，你需要打出【杀】时，其他蜀势力角色可以弃置一张基本牌，视为你打出之。",
  stdzhengnan: "征南",
  stdzhengnan_info: "准备阶段，你可以将一张红色手牌当【杀】使用；若你因此杀死了角色，摸两张牌。",
  stdbaobian: "豹变",
  stdbaobian_info: "出牌阶段开始时，你可以失去1点体力并令一名角色弃置一张手牌；若此牌为基本牌，你视为对其使用一张【杀】。",
  stdhuituo: "恢拓",
  stdhuituo_info: "当你受到伤害后，你可以展示牌堆顶的两张牌，然后替换任意张牌。",
  stdmingjian: "明鉴",
  stdmingjian_info: "出牌阶段限一次，你可以将一张牌展示并交给一名其他角色，然后其可以使用此牌。",
  stdpolu: "破橹",
  stdpolu_info: "你造成或受到伤害后，可以弃置受伤角色装备区里的一张牌；若该角色为你，你摸一张牌。",
  stdchoulve: "筹略",
  stdchoulve_info: "出牌阶段限一次，你可以交给其他角色一张手牌，然后其可以展示并交给你一张装备牌。",
  stdjiaozhao: "矫诏",
  stdjiaozhao_info: "出牌阶段限一次，你可以令一名手牌数不小于两张的其他角色展示两张手牌，然后你可以用一张牌交换其中一张。",
  stddanxin: "殚心",
  stddanxin_info: "当你受到伤害后，你可以发动一次〖矫诏〗且改为你获得其展示牌中的一张。",
  stddianfeng: "典封",
  stddianfeng_info: "当一名角色失去装备区内的所有牌时，你可以摸一张牌。",
  stdduanbing: "短兵",
  stdduanbing_info: "锁定技，你的攻击范围始终为1。你使用【杀】每回合首次造成的伤害+1。",
  stdfenxun: "奋迅",
  stdfenxun_info: "出牌阶段限一次，你可以弃置一张防具牌并选择一名其他角色，其本回合视为在你的攻击范围内。",
  stdzenhui: "谮毁",
  stdzenhui_info: "当你使用【杀】或锦囊牌时，你可以令一名非目标角色成为此牌使用者。",
  stdchuyi: "除异",
  stdchuyi_info: "每轮限一次，当一名其他角色对你攻击范围内的一名角色造成伤害时，你可令此伤害+1。",
  stdfenyin: "奋音",
  stdfenyin_info: "摸牌阶段，你可以额外摸两张牌；若如此做，本回合你使用牌时，若此牌颜色与你使用的上一张牌颜色相同，你须弃置一张牌。",
  stdzaoli: "躁厉",
  stdzaoli_info: "锁定技，准备阶段，你弃置手牌或装备区里的所有牌，然后摸X牌并失去1点体力（X为你以此法弃置牌数与你的已损失体力值之和）。",
  stdyirang: "揖让",
  stdyirang_info: "出牌阶段开始时，你可以展示所有手牌并将这些牌交给一名手牌数最少的其他角色，然后你摸等同于交出类别数量的牌。",
  stdshuangdao: "双刃",
  stdshuangdao_info: "出牌阶段开始时，你可以与一名其他角色拼点。若你赢，你可以视为对计算与其距离为1的至多两名角色各使用一张无距离限制的【杀】；若你没赢，则你本回合不能使用【杀】。",
  stdjuece: "绝策",
  stdjuece_info: "结束阶段，你可以对一名本回合失去过至少两张牌的角色造成1点伤害。",
  stdmieji: "灭计",
  stdmieji_info: "出牌阶段限一次，你可以交给一名其他角色一张黑色锦囊牌，然后可以弃置其至多两张牌。",
  stdyunji: "运机",
  stdyunji_info: "你可以将一张装备牌当【借刀杀人】使用。",
  stdzongji: "纵计",
  stdzongji_info: "当一名角色受到【杀】或【决斗】造成的伤害后，你可以弃置其与伤害来源的各一张牌。",
  std_tianfeng: "标田丰",
  std_tianfeng_prefix: "标",
  stdgangjian: "刚谏",
  stdgangjian_info: "其他角色的准备阶段，你可以令其视为对你使用一张【杀】，若此【杀】未造成伤害，其本回合不能使用锦囊牌。",
  stdguijie: "瑰杰",
  stdguijie_info: "当你需要使用或打出一张【闪】时，你可以弃置两张红色牌并摸一张牌，视为使用或打出之。",
  std_liuxie: "标刘协",
  std_liuxie_prefix: "标",
  stdtianming: "天命",
  stdtianming_info: "当你成为【杀】的目标后，你可以弃置所有牌并摸两张牌，然后体力值唯一最大的其他角色也可以如此做。",
  stdmizhao: "密诏",
  stdmizhao_info: "结束阶段，你可以将所有牌交给一名其他角色并选择另一名角色，然后前者可与后者各失去1点体力。",
  stdzhongyan: "终焉",
  stdzhongyan_info: "主公技。其他群势力角色死亡时，你可以回复1点体力。",
  std_simazhao: "标司马昭",
  std_simazhao_prefix: "标",
  stdzhaoxin: "昭心",
  stdzhaoxin_info: "锁定技。准备阶段，你展示所有手牌，若这些牌颜色均相同，你对一名角色造成1点伤害。",
  std_guozhao: "标郭照",
  std_guozhao_prefix: "标",
  stdwufei: "诬诽",
  stdwufei_info: "准备阶段，你可以令一名女性角色展示所有手牌，然后其弃置其中一种颜色的所有牌并摸一张牌。",
  stdjiaochong: "椒宠",
  stdjiaochong_info: "男性角色的结束阶段，你可以对一名女性角色发动一次〖诬诽〗。",
  std_jiakui: "标贾逵",
  std_jiakui_prefix: "标",
  stdzhongzuo: "忠佐",
  stdzhongzuo_info: "锁定技。一名角色的回合结束时，若你本回合造成或受到过伤害，你与其各摸一张牌。",
  stdwanlan: "挽澜",
  stdwanlan_info: "限定技。其他角色进入濒死时，你可以交给其所有手牌，然后其回复体力至1点。",
  std_yufan: "标虞翻",
  std_yufan_prefix: "标",
  stdzongxuan: "纵玄",
  stdzongxuan_info: "当你的手牌因弃置进入弃牌堆后，你可以弃置场上的一张牌。",
  stdzhiyan: "直言",
  stdzhiyan_info: "结束阶段，你可以获得本回合进入弃牌堆的一张装备牌。",
  std_zhugeke: "标诸葛恪",
  std_zhugeke_prefix: "标",
  stdaocai: "傲才",
  stdaocai_info: "每回合结束时，若你没有手牌，你可以观看牌堆顶的两张牌并获得其中一张牌。",
  stdduwu: "黩武",
  stdduwu_info: "出牌阶段限一次，你可以弃置所有手牌并对攻击范围内的一名角色造成1点伤害。",
  std_mengda: "标孟达",
  std_mengda_prefix: "标",
  stdzhuan: "逐安",
  stdzhuan_info: "锁定技。当你每回合首次受到伤害后，你摸三张牌，然后伤害来源获得你一张牌。",
  std_caozhen: "标曹真",
  std_caozhen_prefix: "标",
  stdsidi: "司敌",
  stdsidi_info: "当有角色打出【杀】时，你可以摸一张牌。",
  std_dongyun: "标董允",
  std_dongyun_prefix: "标",
  stdbingzheng: "秉正",
  stdbingzheng_info: "结束阶段，你可以令一名角色弃置一张牌，若其手牌数不等于体力值，你失去1点体力。",
  stdduliang: "笃良",
  stdduliang_info: "当你受到伤害后，你可以摸一张牌，若你的手牌数等于体力值，你回复1点体力。",
  std_baosanniang: "标鲍三娘",
  std_baosanniang_prefix: "标",
  stdzhennan: "镇南",
  stdzhennan_info: "其他角色的准备阶段，你可以弃置一张手牌，若如此做，其本回合使用下张牌后，若此牌为红色，你令其获得之。",
  stdshuyong: "姝勇",
  stdshuyong_info: "当其他角色于回合内连续使用两张同名牌时，你可以摸一张牌。",
  std_liuba: "标刘巴",
  std_liuba_prefix: "标",
  stdduanbi: "锻币",
  stdduanbi_info: "结束阶段，你可以弃置所有手牌，然后令两名角色各摸两张牌。",
  std_kongrong: "标孔融",
  std_kongrong_prefix: "标",
  stdlirang: "礼让",
  stdlirang_info: "其他角色的弃牌阶段结束时，你可以交给其一张牌，然后获得此阶段进入弃牌堆的所有红色牌。",
  std_zoushi: "标邹氏",
  std_zoushi_prefix: "标",
  stdhuoshui: "祸水",
  stdhuoshui_info: "锁定技，判定区有牌的其他角色受到的伤害+1。",
  stdqingcheng: "倾城",
  stdqingcheng_info: "出牌阶段限一次，你可以将两张红色非锦囊牌当两张【乐不思蜀】对你和一名其他角色使用。",
  std_sunluyu: "标孙鲁育",
  std_sunluyu_prefix: "标",
  stdmumu: "穆穆",
  stdmumu_info: "准备阶段，你可以弃置一张手牌，然后移动场上一张装备牌。",
  stdmeibu: "魅步",
  stdmeibu_info: "装备着武器牌的角色使用【杀】时，你可以令其弃置一张手牌。",
  std_zhoufang: "标周鲂",
  std_zhoufang_prefix: "标",
  stdqijian: "七笺",
  stdqijian_info: "准备阶段，你可以令两名手牌数之和为7的角色各选择一项：1.弃置对方一张牌；2.令对方摸一张牌。",
  stdyoudi: "诱敌",
  stdyoudi_info: "结束阶段，你可以将一张红色牌当【顺手牵羊】使用。",
  std_baoxin: "标鲍信",
  std_baoxin_prefix: "标",
  stdyimou: "毅谋",
  stdyimou_info: "当你受到伤害后，你可以将一张牌交给一名其他角色。",
  stdmutao: "募讨",
  stdmutao_info: "准备阶段，你可令一名角色展示所有手牌，若其中有【杀】，你对其造成1点伤害。",
  std_peixiu: "标裴秀",
  std_peixiu_prefix: "标",
  stdzhitu: "制图",
  stdzhitu_info: "你可以将至少两张点数之和等于13的牌当任意普通锦囊牌使用。",
  std_yangbiao: "标杨彪",
  std_yangbiao_prefix: "标",
  stdyizheng: "义争",
  stdyizheng_info: "准备阶段，你可以与一名体力值不小于你的角色拼点，赢的角色对没赢的角色造成1点伤害。",
  stdrangjie: "让节",
  stdrangjie_info: "当你受到伤害后，你可以移动场上的一张牌。",
  std_huangfusong: "标皇甫嵩",
  std_huangfusong_prefix: "标",
  stdtaoluan: "讨乱",
  stdtaoluan_info: "其他角色的结束阶段，你可以交给其一张牌，其展示所有手牌，然后弃置所有【闪】。",
  std_zerong: "标笮融",
  std_zerong_prefix: "标",
  stdcansi: "残肆",
  stdcansi_info: "锁定技，准备阶段，你令攻击范围内的一名角色获得你一张牌，然后视为对其依次使用【杀】、【决斗】。",
  std_pangdegong: "标庞德公",
  std_pangdegong_prefix: "标",
  stdlingjian: "令荐",
  stdlingjian_info: "锁定技，当你每回合首次使用【杀】结算结束后，若此牌未造成伤害，你重置〖明识〗。",
  stdmingshi: "明识",
  stdmingshi_info: "限定技，出牌阶段，你可选择一项：①摸两张牌；②回复1点体力；③对一名角色造成1点伤害；④移动场上的一张牌。",
  get std_nanhualaoxian() {
    return Math.random() > 0.25 ? "标南华老仙" : "标南华小仙";
  },
  std_nanhualaoxian_prefix: "标",
  stdxianlu: "仙箓",
  stdxianlu_info: "出牌阶段限一次，你可以弃置一名角色场上的一张装备牌，若此牌为红色，你将此牌当【乐不思蜀】置于你的判定区内并对其造成1点伤害。",
  stdtianshu: "天书",
  stdtianshu_info: "锁定技，你的手牌上限+X（X为当前势力数-1）。",
  std_zhangyao: "标张美人",
  std_wangfuren: "标王夫人",
  std_panglin: "标庞林",
  std_huangchong: "标黄崇",
  std_caoxiong: "标曹熊",
  std_maohuanghou: "标毛皇后",
  std_zhengcong: "标郑聪",
  std_jiangjie: "标姜婕",
  std_zhangyao_prefix: "标",
  std_wangfuren_prefix: "标",
  std_panglin_prefix: "标",
  std_huangchong_prefix: "标",
  std_caoxiong_prefix: "标",
  std_maohuanghou_prefix: "标",
  std_zhengcong_prefix: "标",
  std_jiangjie_prefix: "标",
  stdlianrong: "怜容",
  stdyuanzhuo: "怨灼",
  stdbizun: "避尊",
  stdhuangong: "还宫",
  stdzhuying: "驻营",
  stdzhongshi: "忠事",
  stdjuxian: "据险",
  stdlijun: "励军",
  stdwuwei: "无为",
  stdleiruo: "羸弱",
  stddechong: "得宠",
  stdyinzu: "荫族",
  stdqiyue: "起钺",
  stdjieji: "劫击",
  stdfengzhan: "锋展",
  stdruixi: "锐袭",
  stdlianrong_info: "当其他角色的♥️牌因弃置进入弃牌堆后，你可以获得之。",
  stdyuanzhuo_info: "出牌阶段限一次，你可以弃置一名其他角色的一张牌，然后其视为对你使用一张【火攻】。",
  stdbizun_info: "每回合限一次，你可以将一张装备牌当【杀】或【闪】使用，然后手牌数唯一最多的角色可以移动场上一张牌。",
  stdhuangong_info: "锁定技，当你失去场上的最后一张牌后，你摸一张牌。",
  stdzhuying_info: "当其他角色受到非属性伤害时，若其未横置，你可以令其横置。",
  stdzhongshi_info: "锁定技，你横置/未横置时对未横置/横置角色造成伤害时，此伤害+1。",
  stdjuxian_info: "锁定技，当其他角色获得你的牌时，你防止之。",
  stdlijun_info: "准备阶段，你展示至多X名的角色的各一张手牌，然后被以此法展示牌的角色依次选择一项：1.使用以此法展示的牌；2.弃置以此法展示的牌（X为你的体力值）。",
  stdwuwei_info: "当你受到伤害后，你可以将一张装备牌置入一名角色的装备区内，然后你弃置其X张牌（X为其因此增加的攻击范围数）。",
  stdleiruo_info: "结束阶段，你可以获得一名其他角色装备区内的一张牌，然后其可以视为对你使用一张无距离限制的【杀】。",
  stddechong_info: "其他角色的准备阶段，你可以交给其至少一张牌，若如此做，其下个弃牌阶段开始时，若其手牌数不小于体力值，你可以对其造成1点伤害。",
  stdyinzu_info: "锁定技，手牌数大于体力值的角色的攻击范围+1；手牌数不大于体力值的角色的攻击范围-1。",
  stdqiyue_info: "锁定技，游戏开始时，你从游戏外获得【宣花斧】。",
  stdjieji_info: "锁定技，你每回合使用的首张【杀】对一名其他角色造成伤害后，你获得其一张手牌，然后其视为对你使用一张无距离限制的【杀】。",
  stdfengzhan_info: "锁定技，游戏开始时，你从游戏外获得【百辟双匕】。",
  stdruixi_info: "每个回合的结束阶段，若你于本回合内失去过牌，你可以将一张牌当做无距离限制的【杀】使用。",
  xuanhuafu: "宣花斧",
  xuanhuafu_skill: "宣花斧",
  xuanhuafu_info: "锁定技，你使用【杀】指定目标时，令与其距离为1的另一名其他角色成为此【杀】的额外目标。",
  baipishuangbi: "百辟双匕",
  baipishuangbi_skill: "百辟双匕",
  baipishuangbi_info: "锁定技，当你使用【杀】指定一名与你性别不同的目标后，若你没有手牌，此【杀】造成的伤害+1。",
  std_simahui: "标司马徽",
  std_simahui_prefix: "标",
  stdjianjie: "荐杰",
  stdjianjie_info: "准备阶段，你可展示至多三名角色各一张牌，这些角色依次可以将展示的红色/黑色牌当做火攻/铁索连环使用。",
  stdchenghao: "称好",
  stdchenghao_info: "每回合限一次，有角色受到属性伤害时，你可观看牌堆顶的一张牌，然后将之交给任意角色。",
  std_zhengxuan: "标郑玄",
  std_zhengxuan_prefix: "标",
  stdzhengjing: "整经",
  stdzhengjing_info: "摸牌阶段开始时，你可以展示你的所有手牌和牌堆顶等量张牌（至多三张），你将其中一种花色的牌交给一名其他角色，然后你获得其余牌。",
  std_miheng: "标祢衡",
  std_miheng_prefix: "标",
  stdkuangcai: "狂才",
  stdkuangcai_info: "锁定技，出牌阶段你使用前两张牌无距离和次数限制，结算后若造成伤害你摸一张牌，否则弃置一张牌。",
  stdshejian: "舌剑",
  stdshejian_info: "当你成为其他角色使用牌的唯一目标后，你可以选择弃置两张手牌，然后其于本回合的结束阶段受到你造成的1点伤害。",
  std_majun: "标马钧",
  std_majun_prefix: "标",
  stdgongqiao: "工巧",
  stdgongqiao_info: "出牌阶段限一次，你可选择一名角色并连续亮出牌堆顶的牌直到有装备牌。然后令其使用此装备牌并用所有手牌交换其余亮出的牌。",
  std_zhangfen: "标张奋",
  std_zhangfen_prefix: "标",
  stdwanglu: "望橹",
  stdwanglu_info: "出牌阶段限一次，你可以弃置场上一张装备牌，以此法失去武器牌的角色摸X张牌。（X为此武器牌的攻击范围）。",
  std_zhaoyan: "标赵嫣",
  std_zhaoyan_prefix: "标",
  stdjinhui: "锦绘",
  stdjinhui_info: "准备阶段，你可以亮出牌堆顶三张牌，然后与一名其他角色依次使用其中一张牌（不能连续使用相同颜色的牌）。",
  stdqingman: "轻幔",
  stdqingman_info: "锁定技，每回合结束时，你摸牌至X张（X为你空置装备栏数，至多为3）。",
  std_liuli: "标刘理",
  std_liuli_prefix: "标",
  stdfuli: "抚黎",
  stdfuli_info: "出牌阶段限一次，你可以展示所有手牌并弃置其中的所有伤害类牌（没有则不弃），然后令一名其他角色重复此流程并回复1体力。",
  stddehua: "德化",
  stddehua_info: "你失去仅两张牌的回合结束时，你可以视为使用一张基本牌。",
  std_huangwudie: "标黄舞蝶",
  std_huangwudie_prefix: "标",
  stdshuangrui: "双锐",
  stdshuangrui_info: "准备阶段，你可以将任意张手牌当一张【杀】使用，若目标角色手牌数与你相同，此【杀】不能被响应。",
  std_qinghegongzhu: "标清河公主",
  std_qinghegongzhu_prefix: "标",
  stdzengou: "谮构",
  stdfeili: "诽离",
  stdzengou_info: "出牌阶段限一次，你可观看一名角色的手牌并展示其中两张牌，然后你视为使用一张与展示牌牌名不同的基本牌，否则其摸一张牌。",
  stdfeili_info: "当你受到伤害时，你可以弃两张牌或令〖谮构〗本轮失效，然后防止此伤害。",
  std_quyi: "标麴义",
  std_quyi_prefix: "标",
  stdfuqi: "伏骑",
  stdjiaozi: "骄恣",
  stdfuqi_info: "锁定技，你和与你距离为1的角色互相使用的杀不能被响应。",
  stdjiaozi_info: "锁定技，你每回合首次造成伤害时，若你的手牌为全场最多，你令此伤害+1。",
  std_wenyuan: "标文鸳",
  std_wenyuan_prefix: "标",
  stdkengqiang: "铿锵",
  stdshangjue: "殇决",
  stdkengqiang_info: "每回合限一次，当你使用伤害牌时，你可以选择一项：1.摸两张牌；2.失去1点体力，令此牌伤害+1。",
  stdshangjue_info: "限定技，当你进入濒死状态时，你可以将体力回复至体力上限，然后你可以失去〖铿锵〗令此技能视为未发动过。",
  std_xushao: "标许劭",
  std_xushao_prefix: "标",
  stdyingmen: "盈门",
  stdpingjian: "评鉴",
  stdyingmen_info: "出牌阶段限一次，若你没有“访客”，你可以摸两张牌并将等量的基本牌或普通锦囊牌置于武将牌上，称为“访客”。",
  stdpingjian_info: "你可以将一张手牌当“访客”使用，若如此做，你需移去任意一张“访客”。",
  std_zhangxuan: "标张嫙",
  std_zhangxuan_prefix: "标",
  stdtongli: "同礼",
  stdshezang: "奢葬",
  stdtongli_info: "出牌阶段限一次，当你使用牌时，若你本阶段已使用的牌数等于X，你可令此牌额外结算一次（X为场上牌的花色数）。",
  stdshezang_info: "当你进入濒死状态时，你可以将场上至多四张牌移动至你的装备区。",
  std_jushou: "标沮授",
  std_jushou_prefix: "标",
  stdjianying: "渐营",
  stdshibei: "矢北",
  stdjianying_info: "出牌阶段开始时，你可以移动场上一张牌，然后你于此阶段首次使用与此牌花色或点数相同的牌时，你摸一张牌",
  stdshibei_info: "限定技，当你受到伤害后，你回复1点体力。"
};
const characterTitles = {
  //std_simahui: "",
  //std_zhengxuan: "",
  //std_miheng: "",
  //std_majun: "",
  //std_zhangfen: "",
  //std_zhaoyan: "",
  //std_liuli: "",
  std_huangwudie: "刀弓双绝",
  std_qinghegongzhu: "冀不推实",
  std_quyi: "名门的骁将",
  std_wenyuan: "揾泪红袖",
  std_xushao: "识人读心",
  std_zhangxuan: "玉宇嫁蔷",
  std_jushou: "徐图渐营",
  std_sunhao: "荒政享黛",
  std_mateng: "勇冠西州",
  std_mayunlu: "花海舞枪",
  std_jianggan: "苦思冥想",
  std_zhouchu: "义除三害",
  std_lvlingqi: "飞花惊武",
  std_dc_yanghu: "丹青墨泽",
  std_dc_luotong: "沐粽端阳",
  std_lijue: "劫君掠玺",
  std_chengpu: "疠火燃战",
  std_db_wenyang: "万将披靡",
  std_re_dengzhi: "樽俎折冲",
  std_zhangyì: "锐不可当",
  std_chengyu: "勇略严谋",
  std_fanyufeng: "轻绡霓裳",
  std_feiyi: "趣弈思怡",
  old_shen_zhaoyun: "孤战不怯",
  std_xushu: "离客暮雨",
  std_xuezong: "彬彬如玉",
  std_liuzhang: "梦萦天府",
  std_wangyuanji: "婆娑起舞",
  std_wanglang: "曹魏三公",
  std_zhonghui: "一将功成",
  std_fuhuanghou: "长乐未央",
  std_liubiao: "后嗣之忧",
  std_gongsunyuan: "恣睢海外",
  std_cenhun: "伐梁倾瓴",
  std_jiangwan: "方整威重",
  std_maliang: "千计卷来",
  std_simashi: "晋景王",
  //宣传图
  std_guanxing: "龙骧将军",
  std_huaxin: "清品廉德",
  std_sunshao: "编记政言",
  std_zhangbao: "虎翼将军",
  std_liuchen: "烈帝后裔",
  std_guansuo: "承父武志",
  std_xiahouba: "挽弓射敌",
  std_caorui: "明鉴朝纲",
  std_liuye: "霹雳惊雷",
  std_guohuanghou: "花落酒香",
  std_lvfan: "掷杯问吉",
  std_dingfeng: "雪虐风饕",
  std_sunluban: "倚虎弄权",
  std_liuzan: "抗音而歌",
  std_sunyi: "傲睥冰原",
  std_taoqian: "起寺浴佛",
  std_jiling: "御马攻沛",
  std_liru: "太虚幻境",
  std_wangyun: "借刀予曹",
  std_tianfeng: "天姿朅杰",
  std_liuxie: "汉末龙裔",
  std_simazhao: "权倾朝野",
  std_guozhao: "瓷语看花",
  std_jiakui: "力挽狂澜",
  std_yufan: "计定时局",
  std_zhugeke: "蓝田生玉",
  std_mengda: "待笺而沽",
  std_caozhen: "虎年春节",
  std_dongyun: "弼国文胆",
  std_baosanniang: "凤舞龙翔",
  std_liuba: "清觞月澜",
  std_kongrong: "重阳闲趣",
  std_zoushi: "抱琴抚秋",
  std_sunluyu: "沅茝香兰",
  std_zhoufang: "带军鄱阳",
  std_baoxin: "齐灭仁王",
  std_peixiu: "亲查精审",
  std_yangbiao: "国之柱石",
  std_nanhualaoxian: "祓炁除煞",
  std_huangfusong: "稳镇风云",
  std_zerong: "持宗事魔",
  std_pangdegong: "以德服人",
  std_zhangyao: "琼楼孤蒂",
  std_wangfuren: "敬怀皇后",
  std_panglin: "随军御敌",
  std_huangchong: "星陨绵竹",
  std_caoxiong: "萧怀侯",
  std_maohuanghou: "明悼皇后",
  std_zhengcong: "蟒绽凶蛇",
  std_jiangjie: "率然藏艳"
};
const characterIntro = {
  guanxing: "关兴，名将关羽之子，继承了父亲汉寿亭侯的爵位。年少时即受诸葛亮器重，在蜀汉担任侍中、中监军之职，后在夷陵之战中报了杀父之仇。",
  std_zhangbao: "张苞，张飞的长子，使用父亲的家传蛇矛为兵器，勇猛剽悍不弱其父。",
  wangfuren: "敬怀皇后王氏，生卒年不详。荆州南阳（河南省南阳市）人。吴大帝孙权妃嫔。吴景帝孙休生母。又称南阳王夫人、小王夫人。王夫人在儿子即位前就已亡故，永安元年（258年），王夫人之子孙休继位，是为吴景帝。永安五年（262年），孙休追尊母王氏为敬怀皇后，将之改葬敬陵。",
  panglin: "庞林，荆州襄阳（今湖北襄樊）人，三国时期蜀汉刘备重要谋士庞统的弟弟，起初为蜀汉官员，后来随黄权投降曹魏，成为魏国官员。《三国志》中对庞林的记载很少，只记在《庞统传》末。",
  caoxiong: "曹熊（生卒年不详），字子威，沛国谯县（今安徽省亳州市）人。三国时期曹魏宗室，魏武帝曹操之子，魏文帝曹丕、曹彰、曹植同母弟，母为武宣皇后卞氏。体弱多病，英年早逝。曹魏建立后，追赠东平公。魏明帝太和三年，追封萧王，谥号为怀。",
  huangchong: "黄崇（？～263年），巴西阆中（今四川省阆中市）人，三国时期蜀汉官员，黄权之子。官至尚书郎。景耀六年（263年），跟随诸葛瞻抗击邓艾。大军到达涪县，诸葛瞻止步不前，黄崇多次劝他应快速向前行军，占领险要地势，不让敌军进入平原，诸葛瞻犹豫不决，没有采纳黄崇的意见，邓艾得以长驱直入。诸葛瞻退守绵竹后，黄崇激励部下将士并决心战斗到死。后来，黄崇死于邓艾的乱军之中。",
  maohuanghou: "明悼毛皇后（？～237年9月22日 [1]），河内郡人，魏明帝曹叡第一任皇后。黄初年间，毛氏选入平原王府，很受曹叡宠爱，进出常同乘一副辇同车。黄初七年（226年），曹叡即位，封毛氏为贵嫔。太和元年（227年），立为皇后。曹叡后来又宠幸郭夫人（明元郭皇后），对毛皇后日益淡漠。景初元年（237年），曹叡将毛皇后赐死，谥号“悼皇后”，葬于愍陵。",
  zhengcong: "《三国志·周宣传》记载：“后东平刘桢梦蛇生四足，穴居门中，使宣占之，宣曰：‘此为国梦，非君家之事也。当杀女子而作贼者。’顷之，女贼郑、姜遂惧夷讨，以蛇女子之祥，足非蛇之所宜故也。”。",
  jiangjie: "《三国志·周宣传》记载：“后东平刘桢梦蛇生四足，穴居门中，使宣占之，宣曰：‘此为国梦，非君家之事也。当杀女子而作贼者。’顷之，女贼郑、姜遂惧夷讨，以蛇女子之祥，足非蛇之所宜故也。”。"
};
const characterFilters = {};
const dynamicTranslates = {};
const perfectPairs = {};
const voices = {};
const characterSort = {
  sixiang_shaoyin: ["std_sunhao", "std_mateng", "std_mayunlu", "std_jianggan", "std_zhouchu", "std_lvlingqi", "std_dc_yanghu", "std_dc_luotong", "std_lijue", "std_chengpu", "std_db_wenyang", "std_re_dengzhi", "std_zhangyì", "std_chengyu", "std_fanyufeng", "std_feiyi"],
  sixiang_taiyin: ["std_guanxing", "std_fuhuanghou", "std_liubiao", "std_gongsunyuan", "std_cenhun", "std_simashi", "std_sunshao", "std_jiangwan", "std_maliang", "std_xushu", "std_xuezong", "std_liuzhang", "std_wangyuanji", "std_wanglang", "std_zhonghui", "std_huaxin"],
  sixiang_shaoyang: ["std_zhangbao", "std_liuchen", "std_guansuo", "std_xiahouba", "std_caorui", "std_liuye", "std_guohuanghou", "std_lvfan", "std_dingfeng", "std_sunluban", "std_liuzan", "std_sunyi", "std_taoqian", "std_jiling", "std_liru", "std_wangyun"],
  sixiang_taiyang: ["std_tianfeng", "std_liuxie", "std_simazhao", "std_guozhao", "std_jiakui", "std_yufan", "std_zhugeke", "std_mengda", "std_caozhen", "std_dongyun", "std_baosanniang", "std_liuba", "std_kongrong", "std_zoushi", "std_sunluyu", "std_zhoufang"],
  sixiang_sort_qinglong: ["std_baoxin", "std_peixiu", "std_yangbiao", "std_huangfusong", "std_zerong", "std_pangdegong", "std_nanhualaoxian"],
  sixiang_sort_baihu: ["std_simahui", "std_zhengxuan", "std_miheng", "std_majun", "std_zhangfen", "std_zhaoyan", "std_liuli"],
  sixiang_sort_zhuque: ["std_huangwudie", "std_qinghegongzhu", "std_quyi", "std_wenyuan", "std_xushao", "std_zhangxuan", "std_jushou"],
  sixiang_zhencang: ["std_zhangyao", "std_wangfuren", "std_panglin", "std_huangchong", "std_caoxiong", "std_maohuanghou", "std_zhencong", "std_jiangjie", "std_zhengcong"],
  sixiang_trashBin: ["old_shen_zhaoyun"]
};
const characterSortTranslate = {
  sixiang_shaoyin: "四象封印·少阴",
  sixiang_taiyin: "四象封印·太阴",
  sixiang_shaoyang: "四象封印·少阳",
  sixiang_taiyang: "四象封印·太阳",
  sixiang_sort_qinglong: "四象封印·青龙",
  sixiang_sort_baihu: "四象封印·白虎",
  sixiang_sort_zhuque: "四象封印·朱雀",
  sixiang_trashBin: "四象封印·垃圾桶",
  sixiang_zhencang: "珍藏·封印"
};
game.import("character", function() {
  return {
    name: "sixiang",
    connect: true,
    character: { ...characters },
    characterSort: {
      sixiang: characterSort
    },
    characterFilter: { ...characterFilters },
    characterTitle: { ...characterTitles },
    dynamicTranslate: { ...dynamicTranslates },
    characterIntro: { ...characterIntro },
    card: { ...cards },
    skill: { ...skills },
    perfectPair: { ...perfectPairs },
    translate: { ...translates, ...voices, ...characterSortTranslate },
    pinyins: { ...pinyins }
  };
});

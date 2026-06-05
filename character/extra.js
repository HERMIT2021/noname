import { lib, get, game, _status, ui } from "noname";
const characters = {
  mb_shen_jiangwei: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["mbtiantao", "mbxinghun", "mbshenpei"]
  },
  sm_shen_machao: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["sm_tuanlian", "sm_jingji", "sm_kuangchi"]
  },
  sp_sm_shen_machao: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["sm_kulian", "sm_lema", "sm_chaoxuan", "sm_wandou"],
    img: "image/character/sm_shen_machao.jpg"
  },
  dc_shen_sunquan: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["dccangming", "dcchouxi", "dcjichao"],
    groupInGuozhan: "wu"
  },
  zc26_shen_huangyueying: {
    sex: "female",
    group: "shen",
    hp: 3,
    skills: ["zc26_cangqiao", "zc26_shenxie", "zc26_huaxiu"],
    groupInGuozhan: "shu"
  },
  mark_shen_machao: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["mark_shouli", "mark_hengwu"],
    groupInGuozhan: "shu",
    dieAudios: ["shen_machao"]
  },
  wn_shen_machao: {
    sex: "male",
    group: "shen",
    hp: 5,
    skills: ["wn_qiangshu", "wn_yuma"],
    groupInGuozhan: "shu"
  },
  wn_shen_xuzhu: {
    sex: "male",
    group: "shen",
    hp: 5,
    skills: ["wn_zhuanzhan", "wn_huwei"],
    groupInGuozhan: "wei"
  },
  ca_shen_wangyun: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["caanchao", "cayurong", "cadingxi"],
    clans: ["太原王氏"]
  },
  ca_shen_caocao: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["cazhaoshao", "caxiaoxiong"],
    groupInGuozhan: "wei"
  },
  ca_shen_lijueguosi: {
    sex: "male",
    group: "shen",
    hp: 5,
    skills: ["caweijue", "cachuxiong"],
    names: "李|傕-郭|汜"
  },
  zombie_jiaxu: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["zombiesangluan", "zombieshibao", "zombiechuce", "zombielongmu"],
    groupInGuozhan: "qun"
  },
  zombie_zombie: {
    sex: "male",
    group: "qun",
    hp: 2,
    maxHp: 4,
    skills: ["zombieshibian", "zombieganran"],
    isUnseen: true
  },
  ps_shen_machao: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["psshouli", "pshengwu"],
    groupInGuozhan: "qun"
  },
  shen_jiaxu: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["weimu", "zybishi", "zyjianbing"],
    groupInGuozhan: "qun"
  },
  hm_shen_zhangjiao: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["hm_fudao", "hm_zongfu", "hm_dangjing", "hm_sanshou"]
  },
  hm_shen_zhangbao: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["hm_zhouyuan", "hm_zhaobing", "hm_sanshou"]
  },
  hm_shen_zhangliang: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["hm_jijun", "hm_fengtong", "hm_sanshou"]
  },
  hm_shen_huangfusong: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["hm_shice", "hm_podai"],
    names: "皇甫|嵩"
  },
  hm_shen_yl_luzhi: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["hm_jigan", "hm_weizhu", "hm_guiquan"]
  },
  hm_shen_zhujun: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["hm_cheji", "hm_daicui", "hm_kuixiang"]
  },
  ty_shen_liubei: {
    sex: "male",
    group: "shen",
    hp: 6,
    skills: ["tylongnu", "nzry_jieying", "tytaoyuan"],
    groupInGuozhan: "shu"
  },
  ty_shen_zhangfei: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["tyshencai", "tyxunshi"],
    groupInGuozhan: "shu"
  },
  ty_shen_guanyu: {
    sex: "male",
    group: "shen",
    hp: 5,
    skills: ["tywushen", "tywuhun"],
    groupInGuozhan: "shu"
  },
  jx_shen_caoren: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["jxjushou"],
    groupInGuozhan: "wei"
  },
  jx_shen_liubiao: {
    sex: "male",
    group: "shen",
    hp: 2,
    skills: ["jxxiongju", "jxfujing", "jxyongrong"],
    groupInGuozhan: "qun"
  },
  shen_zhonghui: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["dclinjie", "dcduzhang", "dcjianghuo"],
    groupInGuozhan: "ye",
    clans: ["颍川钟氏"]
  },
  shen_pangtong: {
    sex: "male",
    group: "shen",
    hp: 1,
    maxHp: 1,
    skills: ["luansuo", "fengliao", "kunyu"],
    groupInGuozhan: "shu"
  },
  junk_zhangjiao: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["yizhao", "junksijun", "tianjie"],
    groupInGuozhan: "qun",
    dieAudios: ["shen_zhangjiao"]
  },
  shen_huangzhong: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["new_dclieqiong", "dczhanjue"],
    groupInGuozhan: "shu"
  },
  xin_simayi: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["xinrenjie", "xinbaiyin", "xinlianpo"],
    tempname: ["new_simayi"],
    groupInGuozhan: "wei",
    names: "司马|懿",
    dieAudios: ["new_simayi"]
  },
  dc_shen_huatuo: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["jingyu", "lvxin", "huandao"],
    groupInGuozhan: "qun"
  },
  shen_xuzhu: {
    sex: "male",
    group: "shen",
    hp: 5,
    skills: ["zhengqing", "zhuangpo"],
    groupInGuozhan: "wei"
  },
  shen_lusu: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["tamo", "dingzhou", "zhimeng"],
    groupInGuozhan: "wu"
  },
  shen_huatuo: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["wuling", "youyi"],
    groupInGuozhan: "qun"
  },
  le_shen_jiaxu: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["jxlianpo", "jxzhaoluan"],
    groupInGuozhan: "qun"
  },
  shen_dianwei: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["juanjia", "qiexie", "cuijue"],
    groupInGuozhan: "wei"
  },
  shen_dengai: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["dctuoyu", "dcxianjin", "dcqijing"],
    groupInGuozhan: "wei"
  },
  tw_shen_lvmeng: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["twshelie", "twgongxin"],
    groupInGuozhan: "wu",
    dieAudios: ["shen_lvmeng"]
  },
  shen_zhangjiao: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["yizhao", "sijun", "sanshou", "tianjie"],
    groupInGuozhan: "qun"
  },
  shen_zhangfei: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["shencai", "xunshi"],
    groupInGuozhan: "shu"
  },
  tw_shen_guanyu: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["twwushen", "twwuhun"],
    groupInGuozhan: "shu"
  },
  shen_machao: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["shouli", "hengwu"],
    groupInGuozhan: "shu"
  },
  shen_sunquan: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["junkyuheng", "junkdili"],
    groupInGuozhan: "wu"
  },
  shen_jiangwei: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["jiufa", "tianren", "pingxiang"],
    groupInGuozhan: "shu"
  },
  shen_sunce: {
    sex: "male",
    group: "shen",
    hp: 1,
    maxHp: 6,
    skills: ["yingba", "scfuhai", "pinghe"],
    groupInGuozhan: "wu"
  },
  shen_xunyu: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["tianzuo", "lingce", "dinghan"],
    groupInGuozhan: "wei",
    clans: ["颍川荀氏"]
  },
  shen_taishici: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["dulie", "tspowei"],
    groupInGuozhan: "wu",
    names: "太史|慈"
  },
  shen_guojia: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["reshuishi", "stianyi", "resghuishi"],
    groupInGuozhan: "wei"
  },
  shen_diaochan: {
    sex: "female",
    group: "shen",
    hp: 3,
    skills: ["meihun", "huoxin"],
    groupInGuozhan: "qun",
    names: "null|null"
  },
  shen_guanyu: {
    sex: "male",
    group: "shen",
    hp: 5,
    skills: ["wushen", "new_wuhun"],
    groupInGuozhan: "shu"
  },
  shen_zhaoyun: {
    sex: "male",
    group: "shen",
    hp: 2,
    skills: ["xinjuejing", "relonghun"],
    groupInGuozhan: "shu"
  },
  shen_zhugeliang: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["qixing", "kuangfeng", "dawu"],
    groupInGuozhan: "shu",
    names: "诸葛|亮"
  },
  shen_lvmeng: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["shelie", "gongxin"],
    groupInGuozhan: "wu"
  },
  shen_zhouyu: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["yeyan", "qinyin"],
    groupInGuozhan: "wu"
  },
  shen_simayi: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["renjie", "sbaiyin", "lianpo"],
    groupInGuozhan: "wei",
    names: "司马|懿"
  },
  shen_caocao: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["new_guixin", "feiying"],
    groupInGuozhan: "wei"
  },
  shen_lvbu: {
    sex: "male",
    group: "shen",
    hp: 5,
    skills: ["baonu", "wumou", "ol_wuqian", "ol_shenfen"],
    groupInGuozhan: "qun"
  },
  shen_liubei: {
    sex: "male",
    group: "shen",
    hp: 6,
    skills: ["nzry_longnu", "nzry_jieying"],
    groupInGuozhan: "shu"
  },
  shen_luxun: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["nzry_junlve", "nzry_cuike", "nzry_dinghuo"],
    groupInGuozhan: "wu",
    clans: ["吴郡陆氏"]
  },
  shen_zhangliao: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["drlt_duorui", "drlt_zhiti"],
    groupInGuozhan: "wei"
  },
  shen_ganning: {
    sex: "male",
    group: "shen",
    hp: 3,
    maxHp: 6,
    skills: ["drlt_poxi", "drlt_jieying"],
    groupInGuozhan: "wu"
  },
  ol_zhangliao: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["olduorui", "olzhiti"],
    groupInGuozhan: "wei",
    dieAudios: ["shen_zhangliao"]
  },
  shen_caopi: {
    sex: "male",
    group: "shen",
    hp: 5,
    skills: ["chuyuan", "dengji"],
    groupInGuozhan: "wei"
  },
  shen_zhenji: {
    sex: "female",
    group: "shen",
    hp: 3,
    skills: ["shenfu", "qixian"],
    groupInGuozhan: "wei"
  },
  boss_zhaoyun: {
    sex: "male",
    group: "shen",
    hp: 1,
    skills: ["boss_juejing", "xinlonghun", "zhanjiang"],
    groupInGuozhan: "shu"
  }
};
const cards = {
  sm_prettyDerby: {
    audio: true,
    fullskin: true,
    derivation: "sm_shen_machao",
    type: "equip",
    distance: {
      globalFrom: -1,
      globalTo: 1
    },
    selectTarget: -1,
    filterTarget(card2, player2, target2) {
      if (player2 !== target2) {
        return false;
      }
      const ranges = Array.from(Array(5)).map((value, index) => `equip${index + 1}`);
      if (get.is.mountCombined()) {
        ranges.removeArray(["equip3", "equip4"]);
        ranges.add("equip3_4");
      }
      if (get.itemtype(card2) == "card") {
        const owner = get.owner(card2, "judge");
        if (owner && !lib.filter.canBeGained(card2, player2, owner)) {
          return false;
        }
      }
      return ranges.some((range) => player2.countEquipableSlot(range));
    },
    async prepareEquip(event2, trigger, player2) {
      if (!event2.card.subtypes?.length) {
        const choices = [];
        for (let i = 0; i <= 5; i++) {
          if (player2.hasEquipableSlot(i)) {
            choices.push(`equip${i}`);
          }
        }
        if (!choices.length) {
          return;
        }
        const result2 = await player2.chooseControl(choices).set("prompt", "请选择置入【赛马】的装备栏").set("ai", () => _status.event.controls.randomGet()).forResult();
        event2.card.subtypes = [result2.control];
      }
    },
    ai: {
      equipValue: 7.5,
      basic: {
        equipValue: 7.5
      }
    }
  },
  //sm-赛马
  sm_mabian: {
    derivation: "sp_sm_shen_machao",
    fullskin: true,
    type: "equip",
    subtype: "equip5",
    async onEquip(event2, trigger, player2) {
      const { card: card2 } = event2, skill = "sm_mabian_skill";
      if (event2.getParent().name != "equip") {
        return;
      }
      const evt = event2.getParent(2), target2 = evt.player;
      if (!get.info(evt.name)?.transformSkill) {
        return;
      }
      const skills2 = [];
      for (const name of get.nameList(target2)) {
        const list = get.character(name, 3);
        if (!list?.length || !list.includes(evt.name)) {
          continue;
        }
        if (get.characterTitle(name) != "赛马娘") {
          continue;
        }
        skills2.add(list[0]);
      }
      player2.addSkill(skill);
      const map = player2.getStorage(skill, /* @__PURE__ */ new Map());
      map.set(card2, skills2);
      player2.setStorage(skill, map);
      player2.addAdditionalSkill(skill, Array.from(map.values()).flat());
    },
    forceDie: true,
    async onLose(event2, trigger, player2) {
      const { card: card2 } = event2, skill = "sm_mabian_skill";
      const map = player2.getStorage(skill, /* @__PURE__ */ new Map());
      map.delete(card2);
      player2.setStorage(skill, map);
      player2.addAdditionalSkill(skill, Array.from(map.values()).flat());
      if (!map.size) {
        player2.removeSkill(skill);
      }
    },
    cardPrompt(card2, player2) {
      if (!card2 || !player2) {
        return lib.translate["sm_mabian_info"];
      }
      const skill = "sm_mabian_skill", map = player2.getStorage(skill, /* @__PURE__ */ new Map()), vcard = card2[card2.cardSymbol];
      if (!vcard || !map.has(vcard) || !map.get(vcard).length) {
        return lib.translate["sm_mabian_info"];
      }
      const skills2 = map.get(vcard);
      return `你视为拥有着${skills2.map((name) => get.poptip(name))}`;
    },
    ai: {
      basic: {
        equipValue: 7
      }
    }
  },
  //26神黄月英的升级装备
  zc26_zhuge: {
    fullskin: true,
    type: "equip",
    subtype: "equip1",
    derivation: "zc26_shen_huangyueying",
    skills: ["zc26_zhuge_skill"],
    ai: {
      order() {
        return get.order({ name: "sha" }) + 0.1;
      },
      equipValue(card2, player2) {
        if (player2._zhuge_temp) {
          return 1;
        }
        player2._zhuge_temp = true;
        var result2 = (function() {
          if (!game.hasPlayer(function(current) {
            return get.distance(player2, current) <= 1 && player2.canUse("sha", current) && get.effect(current, { name: "sha" }, player2, player2) > 0;
          })) {
            return 1.5;
          }
          if (player2.hasSha() && _status.currentPhase === player2) {
            if (player2.getEquip("zhuge") && player2.countUsed("sha") || player2.getCardUsable("sha") === 0) {
              return 10.5;
            }
          }
          var num = player2.countCards("h", "sha");
          if (num > 1) {
            return 6.5 + num;
          }
          return 3.5 + num;
        })();
        delete player2._zhuge_temp;
        return result2;
      },
      basic: {
        equipValue: 6
      },
      tag: {
        valueswap: 1.5
      }
    }
  },
  zc26_bagua: {
    fullskin: true,
    type: "equip",
    subtype: "equip2",
    derivation: "zc26_shen_huangyueying",
    skills: ["zc26_bagua_skill"],
    ai: {
      basic: {
        equipValue: 8
      }
    }
  },
  zc26_lingling: {
    name: "zc26_lingling",
    fullskin: true,
    type: "equip",
    subtype: "equip4",
    derivation: "zc26_shen_huangyueying",
    skills: ["zc26_lingling_skill"],
    distance: { globalFrom: -2 },
    ai: {
      value(card2, player2) {
        if (!game.hasPlayer(function(current) {
          return get.damageEffect(current, player2, player2, "thunder") > 0;
        })) {
          return 0;
        }
        return 8;
      },
      equipValue(card2, player2) {
        if (!game.hasPlayer(function(current) {
          return get.damageEffect(current, player2, player2, "thunder") > 0;
        })) {
          return 0;
        }
        return 8;
      },
      basic: {
        equipValue: 2
      }
    }
  },
  //神肘不疑的五灵卡牌
  wuqinxi_hu: {
    fullskin: true,
    noname: true
  },
  wuqinxi_lu: {
    fullskin: true,
    noname: true
  },
  wuqinxi_xiong: {
    fullskin: true,
    noname: true
  },
  wuqinxi_yuan: {
    fullskin: true,
    noname: true
  },
  wuqinxi_he: {
    fullskin: true,
    noname: true
  },
  changandajian_equip1: {
    fullskin: true,
    derivation: "shen_sunquan",
    type: "equip",
    subtype: "equip1",
    distance: { attackFrom: -5 },
    onLose() {
      cards.forEach((card2) => {
        card2.fix();
        card2.remove();
        card2.destroyed = true;
        game.log(card2, "被销毁了");
      });
      player.addTempSkill("changandajian_destroy");
    },
    ai: {
      value(card2, player2) {
        if (game.hasPlayer(function(current) {
          return lib.skill.changandajian_destroy.getEffect(player2, current) > 0;
        })) {
          return 0;
        }
        return 8;
      },
      equipValue(card2, player2) {
        if (game.hasPlayer(function(current) {
          return lib.skill.changandajian_destroy.getEffect(player2, current) > 0;
        })) {
          return 0;
        }
        return 8;
      },
      basic: {
        equipValue: 2
      }
    }
  },
  changandajian_equip2: {
    fullskin: true,
    cardimage: "changandajian_equip1",
    derivation: "shen_sunquan",
    type: "equip",
    subtype: "equip2",
    onLose() {
      cards.forEach((card2) => {
        card2.fix();
        card2.remove();
        card2.destroyed = true;
        game.log(card2, "被销毁了");
      });
      player.addTempSkill("changandajian_destroy");
    },
    ai: {
      value(card2, player2) {
        if (game.hasPlayer(function(current) {
          return lib.skill.changandajian_destroy.getEffect(player2, current) > 0;
        })) {
          return 0;
        }
        return 8;
      },
      equipValue(card2, player2) {
        if (game.hasPlayer(function(current) {
          return lib.skill.changandajian_destroy.getEffect(player2, current) > 0;
        })) {
          return 0;
        }
        return 8;
      },
      basic: {
        equipValue: 2
      }
    }
  },
  changandajian_equip3: {
    fullskin: true,
    cardimage: "changandajian_equip1",
    derivation: "shen_sunquan",
    type: "equip",
    subtype: "equip3",
    distance: { globalTo: 2 },
    onLose() {
      cards.forEach((card2) => {
        card2.fix();
        card2.remove();
        card2.destroyed = true;
        game.log(card2, "被销毁了");
      });
      player.addTempSkill("changandajian_destroy");
    },
    ai: {
      value(card2, player2) {
        if (game.hasPlayer(function(current) {
          return lib.skill.changandajian_destroy.getEffect(player2, current) > 0;
        })) {
          return 0;
        }
        return 8;
      },
      equipValue(card2, player2) {
        if (game.hasPlayer(function(current) {
          return lib.skill.changandajian_destroy.getEffect(player2, current) > 0;
        })) {
          return 0;
        }
        return 8;
      },
      basic: {
        equipValue: 2
      }
    }
  },
  changandajian_equip4: {
    fullskin: true,
    cardimage: "changandajian_equip1",
    derivation: "shen_sunquan",
    type: "equip",
    subtype: "equip4",
    distance: { globalFrom: -2 },
    onLose() {
      cards.forEach((card2) => {
        card2.fix();
        card2.remove();
        card2.destroyed = true;
        game.log(card2, "被销毁了");
      });
      player.addTempSkill("changandajian_destroy");
    },
    ai: {
      value(card2, player2) {
        if (game.hasPlayer(function(current) {
          return lib.skill.changandajian_destroy.getEffect(player2, current) > 0;
        })) {
          return 0;
        }
        return 8;
      },
      equipValue(card2, player2) {
        if (game.hasPlayer(function(current) {
          return lib.skill.changandajian_destroy.getEffect(player2, current) > 0;
        })) {
          return 0;
        }
        return 8;
      },
      basic: {
        equipValue: 2
      }
    }
  },
  changandajian_equip5: {
    fullskin: true,
    cardimage: "changandajian_equip1",
    derivation: "shen_sunquan",
    type: "equip",
    subtype: "equip5",
    skills: ["changandajian_equip5"],
    onLose() {
      cards.forEach((card2) => {
        card2.fix();
        card2.remove();
        card2.destroyed = true;
        game.log(card2, "被销毁了");
      });
      player.addTempSkill("changandajian_destroy");
    },
    ai: {
      value(card2, player2) {
        if (game.hasPlayer(function(current) {
          return lib.skill.changandajian_destroy.getEffect(player2, current) > 0;
        })) {
          return 0;
        }
        return 8;
      },
      equipValue(card2, player2) {
        if (game.hasPlayer(function(current) {
          return lib.skill.changandajian_destroy.getEffect(player2, current) > 0;
        })) {
          return 0;
        }
        return 8;
      },
      basic: {
        equipValue: 2
      }
    }
  },
  changandajian_equip6: {
    fullskin: true,
    cardimage: "changandajian_equip1",
    derivation: "shen_sunquan",
    type: "equip",
    subtype: "equip6",
    distance: { globalTo: 2, globalFrom: -2 },
    onLose() {
      cards.forEach((card2) => {
        card2.fix();
        card2.remove();
        card2.destroyed = true;
        game.log(card2, "被销毁了");
      });
      player.addTempSkill("changandajian_destroy");
    },
    ai: {
      value(card2, player2) {
        if (game.hasPlayer(function(current) {
          return lib.skill.changandajian_destroy.getEffect(player2, current) > 0;
        })) {
          return 0;
        }
        return 8;
      },
      equipValue(card2, player2) {
        if (game.hasPlayer(function(current) {
          return lib.skill.changandajian_destroy.getEffect(player2, current) > 0;
        })) {
          return 0;
        }
        return 8;
      },
      basic: {
        equipValue: 2
      }
    }
  },
  qizhengxiangsheng: {
    enable: true,
    type: "trick",
    fullskin: true,
    derivation: "shen_xunyu",
    filterTarget: lib.filter.notMe,
    content() {
      "step 0";
      if (!event.qizheng_name) {
        if (player.isIn()) {
          player.chooseControl("奇兵", "正兵").set("prompt", "请选择" + get.translation(target) + "的标记").set(
            "choice",
            (function() {
              var e1 = 1.5 * get.sgn(get.damageEffect(target, player, target));
              var e2 = 0;
              if (target.countGainableCards(player, "h") > 0 && !target.hasSkillTag("noh")) {
                e2 = -1;
              }
              var es = target.getGainableCards(player, "e");
              if (es.length) {
                e2 = Math.min(
                  e2,
                  (function() {
                    var max = 0;
                    for (var i of es) {
                      max = Math.max(max, get.value(i, target));
                    }
                    return -max / 4;
                  })()
                );
              }
              if (Math.abs(e1 - e2) <= 0.3) {
                return Math.random() < 0.5 ? "奇兵" : "正兵";
              }
              if (e1 < e2) {
                return "奇兵";
              }
              return "正兵";
            })()
          ).set("ai", function() {
            return _status.event.choice;
          });
        } else {
          event.finish();
        }
      }
      if (!event.qizheng_name && result && result.control) {
        event.qizheng_name = result.control;
      }
      if (event.directHit) {
        event._result = { bool: false };
      } else {
        target.chooseToRespond("请打出一张杀或闪响应奇正相生", function(card2, player2) {
          var name2 = get.name(card2);
          return name2 == "sha" || name2 == "shan";
        }).set("ai", function(card2) {
          if (_status.event.choice == "all") {
            var rand = get.rand("qizhengxiangsheng");
            if (rand > 0.5) {
              return 0;
            }
            return 1 + Math.random();
          }
          if (get.name(card2) == _status.event.choice) {
            return get.order(card2);
          }
          return 0;
        }).set("respondTo", [player, card]).set(
          "choice",
          (function() {
            if (target.hasSkillTag("useShan")) {
              return "shan";
            }
            if (typeof event.qizheng_aibuff == "boolean") {
              var shas = target.getCards("h", "sha"), shans = target.getCards("h", "shan");
              if (event.qizheng_aibuff) {
                if (shas.length >= Math.max(1, shans.length)) {
                  return "shan";
                }
                if (shans.length > shas.length) {
                  return "sha";
                }
                return false;
              }
              if (!shas.length || !shans.length) {
                return false;
              }
            }
            var e1 = 1.5 * get.sgn(get.damageEffect(target, player, target));
            var e2 = 0;
            if (target.countGainableCards(player, "h") > 0 && !target.hasSkillTag("noh")) {
              e2 = -1;
            }
            var es = target.getGainableCards(player, "e");
            if (es.length) {
              e2 = Math.min(
                e2,
                (function() {
                  var max = 0;
                  for (var i of es) {
                    max = Math.max(max, get.value(i, target));
                  }
                  return -max / 4;
                })()
              );
            }
            if (e1 - e2 >= 0.3) {
              return "shan";
            }
            if (e2 - e1 >= 0.3) {
              return "sha";
            }
            return "all";
          })()
        );
      }
      var name = result.bool ? result.card.name : null, require2 = event.qizheng_name;
      if (require2 == "奇兵" && name != "sha") {
        target.damage();
      } else if (require2 == "正兵" && name != "shan" && target.countGainableCards(player, "he") > 0) {
        player.gainPlayerCard(target, true, "he");
      }
    },
    ai: {
      order: 5,
      tag: {
        damage: 0.6,
        gain: 0.5,
        loseCard: 1,
        respondShan: 1,
        respondSha: 1
      },
      result: {
        target(player2, target2) {
          var e1 = 1.5 * get.sgn(get.damageEffect(target2, player2, target2));
          var e2 = 0;
          if (target2.countGainableCards(player2, "h") > 0 && !target2.hasSkillTag("noh")) {
            e2 = -1;
          }
          var es = target2.getGainableCards(player2, "e");
          if (es.length) {
            e2 = Math.min(
              e2,
              (function() {
                var max = 0;
                for (var i of es) {
                  max = Math.max(max, get.value(i, target2));
                }
                return -max / 4;
              })()
            );
          }
          if (game.hasPlayer(function(current) {
            return current.hasSkill("tianzuo") && get.attitude(current, player2) <= 0;
          })) {
            return Math.max(e1, e2);
          }
          return Math.min(e1, e2);
        }
      }
    }
  }
};
const pinyins = {};
const skills = {
  //手杀神姜维
  mbtiantao: {
    audio: 2,
    trigger: {
      player: "phaseJieshuBegin"
    },
    filter(event2, player2) {
      return true;
    },
    forced: true,
    async content(event2, trigger, player2) {
      const position = ["h", "e", "j"], map = { h: "手牌区", e: "装备区", j: "判定区" };
      let list = position.map((i) => map[i]);
      const result2 = await player2.chooseControl(list).set("prompt", `###${get.translation(event2.name)}：选择一个区域并弃置其中所有牌###然后选择弃置任意名其他角色对应区域内的各一张牌。`).set("ai", (event3, player3) => {
        const targets = game.filterPlayer((current) => current != player3), { position: position2, controls } = get.event(), list2 = {};
        for (const pos2 of position2) {
          let info = targets.filter((target2) => target2.countDiscardableCards(player3, pos2)).reduce((sum, target2) => {
            const eff = get.effect(target2, { name: "guohe_copy", position: pos2 }, player3, player3);
            return eff > 0 ? sum + eff : sum;
          }, 0);
          list2[pos2] = info - (pos2 == "j" ? -1 : 1) * get.value(player3.getDiscardableCards(player3, pos2));
        }
        let choice = Object.entries(list2).sort((a, b) => b[1] - a[1])[0];
        return { h: "手牌区", e: "装备区", j: "判定区" }[choice[0]];
      }).set("position", position).forResult();
      if (!result2?.control || result2.control == "cancel2") {
        return;
      }
      const pos = { 手牌区: "h", 装备区: "e", 判定区: "j" }[result2.control];
      let doneList = /* @__PURE__ */ new Map();
      const result22 = await player2.modedDiscard(player2.getCards(pos)).forResult();
      if (result22?.cards?.length) {
        doneList.set(player2, result22.cards);
      }
      while (true) {
        if (!game.hasPlayer((current) => current != player2 && !doneList.has(current) && current.countDiscardableCards(player2, pos))) {
          break;
        }
        let result3 = await player2.chooseTarget(`天涛：选择一名其他角色，弃置其${{ h: "手牌区", e: "装备区", j: "判定区" }[pos]}内的一张牌`).set(
          "filterTarget",
          (_, player3, target3) => target3 != player3 && !get.event().doneList.get(target3) && target3.countDiscardableCards(player3, get.event().pos)
        ).set("ai", (target3) => {
          const { pos: pos2, player: player3 } = get.event();
          return get.effect(target3, { name: "guohe_copy", position: pos2 }, player3, player3);
        }).set("doneList", doneList).set("pos", pos).forResult();
        if (!result3?.bool || !result3.targets?.length) {
          break;
        }
        const target2 = result3.targets[0];
        player2.line(target2);
        result3 = await player2.discardPlayerCard(target2, pos, true).forResult();
        if (result3?.bool && result3.links?.length) {
          doneList.set(target2, result3.links);
        }
      }
      if ([...doneList.keys()].length) {
        const targets = [...doneList.entries()].filter(([_, cards2]) => !cards2.some((card2) => get.name(card2) == "sha")).map(([target2]) => target2);
        await game.doAsyncInOrder(targets, async (target2) => {
          return target2.loseHp();
        });
      }
    }
  },
  mbxinghun: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    async content(event2, trigger, player2) {
      const num = 5;
      const cards2 = get.cards(num, true);
      let result2 = await player2.chooseToMove_new("星魂：选择任意张手牌牌进行交换", true).set("list", [
        ["牌堆顶的牌", cards2],
        ["你的手牌", player2.getCards("h")]
      ]).set("filterMove", (from, to, moved) => typeof to != "number").set("processAI", (list) => {
        const player3 = get.player();
        let cards3 = list.map((i) => i[1]).flat().sort((a, b) => get.value(b, player3) - get.value(a, player3));
        let sha = cards3.filter((card2) => get.name(card2, player3) == "sha");
        cards3.removeArray(sha);
        const hs = [];
        let num2 = Math.ceil(sha.length / 2);
        if (num2 <= player3.countCards("h")) {
          hs.addArray(sha.slice(0, num2));
          sha.removeArray(hs);
        }
        if (hs.length < player3.countCards("h")) {
          hs.addArray(cards3.slice(0, player3.countCards("h") - hs.length));
          cards3.removeArray(hs);
        }
        const top = sha.concat(cards3);
        return [top, hs];
      }).forResult();
      if (result2?.bool) {
        await game.loseAsync({
          player: player2,
          cards: result2.moved.flat(),
          moved: result2.moved
        }).setContent(async function(event3, trigger2, player3) {
          const { cards: cards3, moved } = event3, hs = player3.getCards("h");
          const gain = moved[1].filter((card2) => !hs.includes(card2)), puts = moved[0].filter((card2) => hs.includes(card2)), originPile = cards3.slice().removeArray(hs);
          if (puts.length) {
            player3.$throw(puts.length, 1e3);
            await player3.lose(puts, ui.ordering).set("getlx", false);
          }
          await game.cardsGotoOrdering(originPile);
          if (gain.length) {
            await player3.gain(gain, "draw").set("getlx", false);
          }
          await game.cardsGotoPile(moved[0].slice().reverse(), ["insert_card", true]);
          game.addCardKnower(moved[0], player3);
        });
      }
      if (!game.hasPlayer((current) => current != player2)) {
        return;
      }
      result2 = await player2.chooseTarget(`星魂：选择一名其他角色，令其展示牌堆顶和你的手牌共计${get.cnNumber(num)}张牌`, true).set("filterTarget", (_, player3, target2) => target2 != player3).set("ai", (target2) => {
        const { player: player3 } = get.event();
        return get.effect(target2, { name: "sha" }, player3, player3);
      }).forResult();
      if (result2?.bool && result2.targets?.length) {
        const [target2] = result2.targets;
        player2.line(target2, "thunder");
        let numx = 0;
        if (player2.countCards("h")) {
          let min = Math.min(player2.countCards("h"), num);
          result2 = await target2.chooseNumbers(
            `###${get.translation(player2)}对你发动了“${get.translation(event2.name)}”，请选择一个数字X###然后展示其X张手牌和牌堆顶${num}-X张牌，其对你依次使用其中的【杀】`,
            min,
            [Array.from({ length: min + 1 }, (_, i) => i)],
            true
          ).set("processAI", ({ list: [numbers] }) => [numbers.at(-1)]).forResult();
          if (result2?.bool && result2.numbers?.length) {
            numx = result2.numbers[0];
          }
        }
        const top = get.cards(num - numx, true);
        const showCards = player2.getCards("h").randomGets(numx).concat(top);
        await game.cardsGotoOrdering(top);
        await target2.showCards(showCards, `${get.translation(target2)}因“${get.translation(event2.name)}”展示`);
        if (showCards.some((card2) => get.name(card2) == "sha")) {
          let sha = showCards.filter((card2) => get.name(card2) == "sha");
          while (sha.length) {
            let card2 = sha.shift();
            if (player2.canUse(card2, target2, false, false)) {
              if (top.includes(card2)) {
                top.remove(card2);
              }
              await player2.useCard(card2, target2, false);
            }
          }
        }
        if (top.length) {
          await game.cardsGotoPile(top.slice().reverse(), "insert");
        }
      }
    },
    ai: {
      order(item, player2) {
        if (player2.countCards("hs", (card2) => get.tag(card2, "draw"))) {
          return 1;
        }
        return 20;
      },
      result: {
        player(player2) {
          if (!game.hasPlayer((current) => current != player2 && get.effect(current, { name: "sha" }, player2, player2) > 0)) {
            return 0;
          }
          return 1;
        }
      }
    }
  },
  mbshenpei: {
    audio: 2,
    limited: true,
    skillAnimation: true,
    animationColor: "metal",
    derivation: ["mbhuitian"],
    trigger: {
      player: "dying"
    },
    check(event2, player2) {
      return !player2.canSave(player2) || player2.countCards("hs", (card2) => get.tag(card2, "save")) <= -player2.hp;
    },
    async content(event2, trigger, player2) {
      player2.awakenSkill(event2.name);
      const num = game.getAllGlobalHistory("everything", (evt) => {
        if (evt.name != "dying" || evt.player != player2) {
          return false;
        }
        return true;
      }).length;
      if (num > 0) {
        await player2.recover(num);
        const result2 = await player2.chooseTarget(`神霈：选择一名角色对其造成${num}点雷电伤害`, true).set("ai", (target2) => {
          const { player: player3 } = get.event();
          return get.damageEffect(target2, player3, player3, "thunder");
        }).forResult();
        if (result2?.bool && result2.targets?.length) {
          player2.line(result2.targets, "thunder");
          await result2.targets[0].damage(num, "thunder");
        }
      }
      await player2.addSkills("mbhuitian");
    }
  },
  mbhuitian: {
    audio: 4,
    trigger: {
      global: ["roundStart", "phaseEnd"]
    },
    filter(event2, player2, name) {
      if (name == "roundStart") {
        return player2.hasAllHistory("useSkill", (evt) => evt.skill == "mbhuitian");
      }
      return event2.player.getHp() > player2.getHp();
    },
    async cost(event2, trigger, player2) {
      if (event2.triggername == "roundStart") {
        event2.result = { bool: true };
      } else {
        event2.result = await player2.chooseBool(get.prompt2(event2.skill)).set(
          "choice",
          (() => {
            if (player2.hasAllHistory("useSkill", (evt) => evt.skill == "mbhuitian")) {
              return true;
            }
            let targets = game.filterPlayer((current) => current != player2, void 0, true);
            if (!targets.length) {
              return false;
            } else if (!trigger.player.getHistory().isRound) {
              return false;
            }
            return targets.every((current) => {
              let att = get.attitude(player2, current);
              return att < -1 || att > 1;
            });
          })()
        ).forResult();
      }
    },
    async content(event2, tigger, player2) {
      if (event2.triggername == "roundStart") {
        await player2.die();
      } else {
        await player2.draw();
        player2.insertPhase(event2.name);
      }
    }
  },
  //SM神马超
  sm_tuanlian: {
    audio: 2,
    trigger: {
      global: "phaseBefore",
      player: ["enterGame", "damageEnd"],
      source: "damageSource"
    },
    filter(event2, player2, name) {
      if (event2.name == "damage") {
        const key = name == "damageSource" ? "sourceDamage" : "damage";
        return player2.getHistory(key, (evt) => evt.num > 0).indexOf(event2) == 0;
      }
      return event2.name != "phase" || game.phaseNumber == 0;
    },
    forced: true,
    async content(event2, trigger, player2) {
      const info = get.info(event2.name);
      const characters2 = info.getCharacters(trigger.name == "damage" ? 1 : 5);
      info.addVisitors(characters2, player2);
      const next = game.createEvent("addPrettyDerby", false);
      next.player = player2;
      next.characters = characters2;
      next.setContent("emptyEvent");
      await next;
    },
    onremove(player2, skill) {
      get.info(skill).removeVisitors(player2.getStorage(skill), player2);
    },
    getCharacters(num) {
      if (!_status.characterlist) {
        game.initCharacterList();
      }
      const list = _status.characterlist.filter((name) => {
        const title = get.characterTitle(name);
        if (title.includes("马")) {
          return true;
        }
        const surnames = get.characterSurname(name).map((list2) => list2.join(""));
        return surnames.length && surnames.some((surname) => surname.includes("马"));
      });
      if (!list.length) {
        return [];
      }
      return list.randomGets(Math.min(list.length, num));
    },
    getSkills(characters2, player2) {
      if (!player2.hasSkill("sm_jingji")) {
        return [];
      }
      const list = [];
      for (const name of characters2) {
        const { skills: skills2 } = get.character(name);
        if (Array.isArray(skills2) && skills2.length) {
          list.add(skills2[0]);
        }
      }
      return list;
    },
    addVisitors(characters2, player2) {
      _status.characterlist.removeArray(characters2);
      game.log(player2, "将", "#y" + get.translation(characters2), "加入了", "#g“赛马”");
      game.broadcastAll(
        function(player3, characters3) {
          player3.tempname.addArray(characters3);
          player3.$draw(
            characters3.map(function(name) {
              var cardname = "huashen_card_" + name;
              lib.card[cardname] = {
                fullimage: true,
                image: "character:" + name
              };
              lib.translate[cardname] = get.rawName2(name);
              return game.createCard(cardname, " ", " ");
            }),
            "nobroadcast"
          );
        },
        player2,
        characters2
      );
      player2.markAuto("sm_tuanlian", characters2);
    },
    removeVisitors(characters2, player2) {
      if (Array.isArray(player2.tempname)) {
        game.broadcastAll((player3, characters3) => player3.tempname.removeArray(characters3), player2, characters2);
      }
      player2.unmarkAuto("sm_tuanlian", characters2);
      _status.characterlist.addArray(characters2);
    },
    marktext: "马",
    intro: {
      name: "赛马",
      mark(dialog, storage, player2) {
        if (!storage || !storage.length) {
          return "当前没有“赛马”";
        }
        dialog.addSmall([storage, "character"]);
        const skills2 = lib.skill.sm_tuanlian.getSkills(storage, player2);
        if (skills2.length) {
          dialog.addText("<li>当前可用技能：" + get.translation(skills2), false);
        }
      }
    },
    ai: {
      combo: "sm_jingji"
    }
  },
  sm_jingji: {
    audio: 2,
    enable: "chooseToUse",
    filter(event2, player2) {
      if (!player2.getStorage("sm_tuanlian").length) {
        return false;
      }
      const equip = get.autoViewAs({ name: "sm_prettyDerby", isCard: true });
      if (event2.filterCard(equip, player2, event2)) {
        return true;
      }
      return get.inpileVCardList((info) => {
        if (!["trick", "basic"].includes(info[0])) {
          return false;
        }
        const card2 = get.autoViewAs({ name: info[2], nature: info[3], isCard: true });
        return event2.filterCard(card2, player2, event2);
      }).length;
    },
    chooseButton: {
      dialog(event2, player2) {
        const list = get.inpileVCardList((info) => {
          if (!["trick", "basic"].includes(info[0])) {
            return false;
          }
          const card2 = get.autoViewAs({ name: info[2], nature: info[3], isCard: true });
          return event2.filterCard(card2, player2, event2);
        });
        const equip = get.autoViewAs({ name: "sm_prettyDerby", isCard: true });
        if (event2.filterCard(equip, player2, event2)) {
          list.add(["equip", "", "sm_prettyDerby"]);
        }
        const dialog = ui.create.dialog("竞激", [list, "vcard"], "hidden");
        return dialog;
      },
      check(button) {
        if (get.event().getParent().type != "phase") {
          return 1;
        }
        const card2 = get.autoViewAs({ name: button.link[2], nature: button.link[3], isCard: true });
        return get.player().getUseValue(card2);
      },
      prompt(links, player2) {
        return `移去一张“赛马”，然后视为使用${get.translation(links[0][3] || "")}${get.translation(links[0][2])}`;
      },
      backup(links, player2) {
        return {
          viewAs: {
            name: links[0][2],
            nature: links[0][3],
            isCard: true
          },
          selectCard: -1,
          filterCard: () => false,
          popname: true,
          log: false,
          manualConfirm: true,
          async precontent(event2, trigger, player3) {
            const characters2 = player3.getStorage("sm_tuanlian").slice(0);
            const result2 = characters2.length > 1 ? await player3.chooseButton(["竟激：移去一张“赛马”", [characters2, "character"]], true).forResult() : {
              bool: true,
              links: characters2
            };
            if (result2?.bool && result2.links?.length) {
              player3.logSkill("sm_jingji");
              get.info("sm_tuanlian").removeVisitors(result2.links, player3);
              game.log(player3, "移去了", "#y" + get.translation(result2.links));
              const next = game.createEvent("removePrettyDerby", false);
              next.player = player3;
              next.characters = result2.links;
              next.setContent("emptyEvent");
              await next;
            }
            const type = get.type(event2.result.card);
            player3.when({
              player: "useCard"
            }).filter((evt) => evt.getParent() == event2.getParent()).step(async (event3, trigger2, player4) => {
              if (type == "basic") {
                trigger2.baseDamage ??= 1;
                trigger2.baseDamage++;
              }
              if (type == "trick") {
                await player4.draw();
              }
            });
          }
        };
      }
    },
    hiddenCard(player2, name) {
      if (!["trick", "basic"].includes(get.type(name))) {
        return false;
      }
      return player2.getStorage("sm_tuanlian").length;
    },
    init(player2, skill) {
      player2.addSkill("sm_jingji_load");
    },
    onremove(player2, skill) {
      const skills2 = get.info("sm_tuanlian").getSkills(player2.getStorage("sm_tuanlian"), player2);
      if (skills2?.length) {
        player2.removeInvisibleSkill(skills2);
      }
      player2.removeSkill("sm_jingji_load");
    },
    ai: {
      order: 2,
      result: {
        player(player2) {
          if (_status.event.dying) {
            return get.attitude(player2, _status.event.dying);
          }
        }
      },
      combo: "sm_tuanlian"
    },
    group: ["sm_jingji_remove", "sm_jingji_trigger"],
    subSkill: {
      remove: {
        audio: "sm_jingji",
        trigger: { player: ["useSkill", "logSkillBegin"] },
        forced: true,
        locked: false,
        filter(event2, player2) {
          const skill = get.sourceSkillFor(event2), name = "sm_tuanlian";
          if (!player2.invisibleSkills.includes(skill)) {
            return false;
          }
          return get.info(name).getSkills(player2.getStorage(name), player2).includes(skill);
        },
        async content(event2, trigger, player2) {
          const name = "sm_tuanlian", skill = get.sourceSkillFor(trigger), info = get.info(name), visitors = player2.getStorage(name).filter((namex) => get.character(namex).skills?.includes(skill));
          if (!visitors?.length) {
            return;
          }
          const result2 = visitors.length > 1 ? await player2.chooseButton(["竟激：移去一张“赛马”", [visitors, "character"]], true).forResult() : {
            bool: true,
            links: visitors
          };
          if (result2?.bool && result2.links?.length) {
            info.removeVisitors(result2.links, player2);
            game.log(player2, "移去了", "#y" + get.translation(result2.links[0]));
            const next = game.createEvent("removePrettyDerby", false);
            next.player = player2;
            next.characters = result2.links;
            next.setContent("emptyEvent");
            await next;
          }
        }
      },
      trigger: {
        trigger: { player: "triggerInvisible" },
        forced: true,
        forceDie: true,
        popup: false,
        charlotte: true,
        priority: 10,
        filter(event2, player2) {
          if (event2.revealed) {
            return false;
          }
          const info = get.info(event2.skill);
          if (info.charlotte) {
            return false;
          }
          const skills2 = lib.skill.sm_tuanlian.getSkills(player2.getStorage("sm_tuanlian"), player2);
          game.expandSkills(skills2);
          return skills2.includes(event2.skill);
        },
        async content(evt, event2, player2) {
          const info = get.info(event2.skill);
          if (info.slient) {
            return;
          }
          const trigger = evt._trigger;
          info.check;
          let str;
          if (info.prompt) {
            str = info.prompt;
          } else {
            if (typeof info.logTarget == "string") {
              str = get.prompt(event2.skill, trigger[info.logTarget], player2);
            } else if (typeof info.logTarget == "function") {
              let logTarget = info.logTarget(trigger, player2, trigger.triggername, trigger.indexedData);
              if (get.itemtype(logTarget)?.indexOf("player") == 0) {
                str = get.prompt(event2.skill, logTarget, player2);
              }
            } else {
              str = get.prompt(event2.skill, null, player2);
            }
          }
          if (typeof str == "function") {
            str = str(trigger, player2, trigger.triggername, trigger.indexedData);
          }
          const next = player2.chooseBool(`竟激：${str}`);
          next.set("yes", !info.check || info.check(trigger, player2, trigger.triggername, trigger.indexedData));
          next.set("hsskill", event2.skill);
          next.set("forceDie", true);
          next.set("ai", function() {
            return _status.event.yes;
          });
          if (typeof info.prompt2 == "function") {
            next.set("prompt2", info.prompt2(trigger, player2, trigger.triggername, trigger.indexedData));
          } else if (typeof info.prompt2 == "string") {
            next.set("prompt2", info.prompt2);
          } else if (info.prompt2 != false) {
            if (lib.dynamicTranslate[event2.skill]) {
              next.set("prompt2", lib.dynamicTranslate[event2.skill](player2, event2.skill));
            } else if (lib.translate[event2.skill + "_info"]) {
              next.set("prompt2", lib.translate[event2.skill + "_info"]);
            }
          }
          if (trigger.skillwarn) {
            if (next.prompt2) {
              next.set("prompt2", '<span class="thundertext">' + trigger.skillwarn + "。</span>" + next.prompt2);
            } else {
              next.set("prompt2", trigger.skillwarn);
            }
          }
          const result2 = await next.forResult();
          if (result2?.bool) {
            if (!info.cost) {
              trigger.revealed = true;
            }
          } else {
            trigger.untrigger();
            trigger.cancelled = true;
          }
        }
      },
      load: {
        trigger: {
          player: ["addPrettyDerby", "removePrettyDerby"]
        },
        filter(event2, player2) {
          return event2.characters?.length;
        },
        direct: true,
        firstDo: true,
        charlotte: true,
        init(player2, skill) {
          player2.addSkillBlocker(skill);
        },
        onremove(player2, skill) {
          player2.removeSkillBlocker(skill);
        },
        skillBlocker(skill, player2) {
          if (!player2.invisibleSkills.includes(skill) || skill == "sm_tuanlian" || skill == "sm_jingji") {
            return false;
          }
          return !player2.hasSkill("sm_jingji");
        },
        async content(event2, trigger, player2) {
          const skills2 = get.info("sm_tuanlian").getSkills(trigger.characters, player2);
          if (!skills2?.length) {
            return;
          }
          if (trigger.name == "addPrettyDerby") {
            player2.addInvisibleSkill(skills2);
          } else {
            player2.removeInvisibleSkill(skills2);
          }
        }
      }
    }
  },
  sm_kuangchi: {
    audio: 2,
    trigger: {
      source: "dieAfter"
    },
    filter(event2, player2) {
      const target2 = event2.player;
      if (event2.reserveOut || target2.maxHp <= 0) {
        return false;
      }
      return player2.getStorage("sm_tuanlian").length;
    },
    logTarget: "player",
    async cost(event2, trigger, player2) {
      const names = player2.getStorage("sm_tuanlian"), target2 = trigger.player;
      const result2 = await player2.chooseButton([get.prompt(event2.skill, target2), [names, "character"]]).set("ai", () => {
        return Math.random();
      }).forResult();
      if (result2?.bool && result2.links?.length) {
        event2.result = {
          bool: true,
          cost_data: result2.links[0]
        };
      }
    },
    async content(event2, trigger, player2) {
      const target2 = trigger.player, name = event2.cost_data;
      trigger.cancel();
      const names = get.nameList(target2);
      const result2 = names.length > 1 ? await player2.chooseControl(names).set("ai", () => {
        const { controls } = get.event();
        return controls.slice().sort((a, b) => get.rank(b, true) - get.rank(a, true))[0];
      }).set("prompt", "请选择替换的武将牌").forResult() : { control: names[0] };
      if (result2.control) {
        get.info("sm_tuanlian").removeVisitors([name], player2);
        game.log(player2, "移去了", "#y" + get.translation(name));
        const next = game.createEvent("removePrettyDerby", false);
        next.player = player2;
        next.characters = [name];
        next.setContent("emptyEvent");
        await next;
        await target2.reviveEvent(2);
        let doubleDraw = false;
        let num = (get.character(name).maxHp || get.character(name).hp) - (get.character(result2.control).maxHp || get.character(result2.control).hp);
        if (num !== 0) {
          if (typeof target2.singleHp === "boolean") {
            if (num % 2 !== 0) {
              if (target2.singleHp) {
                target2.maxHp += (num + 1) / 2;
                target2.singleHp = false;
              } else {
                target2.maxHp += (num - 1) / 2;
                target2.singleHp = true;
                doubleDraw = true;
              }
            } else {
              target2.maxHp += num / 2;
            }
          } else {
            target2.maxHp += num;
          }
          target2.update();
        }
        await target2.reinitCharacter(result2.control, name);
        const owner = player2["zombieshibian"] || player2;
        game.broadcastAll(
          (player3, target3) => {
            target3["zombieshibian"] = player3;
            const identity = target3.identity = ((identity2) => {
              switch (identity2) {
                case "zhu":
                case "mingzhong":
                  return "zhong";
                case "zhu_false":
                  return "zhong_false";
                case "bZhu":
                  return "bZhong";
                case "rZhu":
                  return "rZhong";
                default:
                  return identity2;
              }
            })(player3.identity);
            if (!lib.translate[identity]) {
              lib.translate[identity] = "马";
            }
            const goon = player3 !== game.me && target3 !== game.me && player3.node.identity.classList.contains("guessing") && !player3.identityShown;
            if (goon) {
              if (target3.identityShown) {
                delete target3.identityShown;
              }
              if (!target3.node.identity.classList.contains("guessing")) {
                target3.node.identity.classList.add("guessing");
              }
            }
            target3.setIdentity(goon ? "cai" : void 0);
            if (target3.node.dieidentity) {
              target3.node.dieidentity.innerHTML = get.translation(target3.identity + 2);
            }
            if (typeof player3.ai?.shown === "number" && target3.ai) {
              target3.ai.shown = player3.ai.shown;
            }
            if (typeof player3.side == "boolean") {
              target3.side = player3.side;
              target3.node.identity.firstChild.innerHTML = player3.node.identity.firstChild.innerHTML;
              target3.node.identity.dataset.color = player3.node.identity.dataset.color;
            }
            if (_status._zombieshibian) {
              return;
            }
            _status.zombieshibian = true;
            if (typeof game.checkResult === "function") {
              const origin_checkResult = game.checkResult;
              game.checkResult = function() {
                const player4 = game.me._trueMe || game.me;
                if (game.players.filter((i) => i !== player4).every((i) => i["zombieshibian"] === (player4["zombieshibian"] || player4))) {
                  game.over(true);
                }
                return origin_checkResult.apply(this, arguments);
              };
            }
            if (typeof game.checkOnlineResult === "function") {
              const origin_checkOnlineResult = game.checkOnlineResult;
              game.checkOnlineResult = function(player4) {
                if (game.players.filter((i) => i !== player4).every((i) => i["zombieshibian"] === (player4["zombieshibian"] || player4))) {
                  return true;
                }
                return origin_checkOnlineResult.apply(this, arguments);
              };
            }
            if (typeof lib.element.player.getFriends === "function") {
              const origin_getFriends = lib.element.player.getFriends;
              const getFriends = function(func, includeDie) {
                const player4 = this;
                return [
                  ...origin_getFriends.apply(this, arguments),
                  ...game[includeDie ? "filterPlayer2" : "filterPlayer"](
                    (target4) => (target4["zombieshibian"] || target4) === (player4["zombieshibian"] || player4)
                  )
                ].filter((i) => i !== player4 || func === true).unique().sortBySeat(player4);
              };
              lib.element.player.getFriends = getFriends;
              [...game.players, ...game.dead].forEach((i) => i.getFriends = getFriends);
            }
            if (typeof lib.element.player.isFriendOf === "function") {
              const origin_isFriendOf = lib.element.player.isFriendOf;
              const isFriendOf = function(player4) {
                if ((this["zombieshibian"] || this) === (player4["zombieshibian"] || player4)) {
                  return true;
                }
                return origin_isFriendOf.apply(this, arguments);
              };
              lib.element.player.isFriendOf = isFriendOf;
              [...game.players, ...game.dead].forEach((i) => i.isFriendOf = isFriendOf);
            }
            if (typeof lib.element.player.getEnemies === "function") {
              const origin_getEnemies = lib.element.player.getEnemies;
              const getEnemies = function(func, includeDie) {
                if (this["zombieshibian"]) {
                  return this["zombieshibian"].getEnemies(func, includeDie);
                } else {
                  const player4 = this;
                  return [
                    ...origin_getEnemies.apply(this, arguments),
                    ...game[includeDie ? "filterPlayer2" : "filterPlayer"]((target4) => {
                      return origin_getEnemies.apply(this, arguments).includes(target4["zombieshibian"] || target4);
                    })
                  ].filter((i) => player4 != (i["zombieshibian"] || i)).unique().sortBySeat(player4);
                }
              };
              lib.element.player.getEnemies = getEnemies;
              [...game.players, ...game.dead].forEach((i) => i.getEnemies = getEnemies);
            }
          },
          owner,
          target2
        );
        target2.ai.modAttitudeFrom = function(from, to) {
          if (to == from["zombieshibian"]) {
            return 114514;
          }
          return get.attitude(from["zombieshibian"] || from, to["zombieshibian"] || to);
        };
        target2.ai.modAttitudeTo = function(from, to, att) {
          if (from == to["zombieshibian"]) {
            return 7;
          }
          return get.attitude(from["zombieshibian"] || from, to["zombieshibian"] || to);
        };
        if (doubleDraw) {
          await target2.doubleDraw();
        }
      }
    },
    ai: {
      combo: "sm_tuanlian"
    }
  },
  sm_kulian: {
    audio: 2,
    trigger: {
      player: "enterGame",
      global: "phaseBefore"
    },
    filter(event2, player2) {
      return event2.name != "phase" || game.phaseNumber == 0;
    },
    forced: true,
    logTarget(event2, player2) {
      return game.filterPlayer(() => true);
    },
    async content(event2, trigger, player2) {
      const func = async (target2) => {
        const card2 = get.cardPile2((card3) => {
          return get.subtypes(card3).containsSome("equip3", "equip4", "equip6");
        }, "random");
        if (card2) {
          target2.$gain2(card2);
          await target2.equip(card2);
        }
        const card22 = game.createCard2("sm_mabian", "heart", 13);
        target2.$gain2(card22);
        await target2.equip(card22);
        await game.delayx();
      };
      await game.doAsyncInOrder(event2.targets, func);
      game.addGlobalSkill("sm_kulian_prettyDerby");
    },
    derivation: "sm_kulian_reward",
    subSkill: {
      prettyDerby: {
        trigger: {
          global: ["roundStart", "roundEnd", "loseAsyncAfter", "gainAfter", "addJudgeAfter", "equipAfter", "addToExpansionAfter"],
          source: "damageSource",
          player: "loseAfter"
        },
        filter(event2, player2, name) {
          if (name == "roundStart") {
            return !event2._PerttyDerbyed;
          }
          if (name == "roundEnd") {
            return _status.prettyDerbyDoing?.length;
          }
          if (event2.name == "damage") {
            if (!player2.getEquip("sm_mabian") || player2.hasSkill("sm_kulian_damaged")) {
              return false;
            }
            return event2.player != player2 && event2.player.getEquip("sm_mabian");
          }
          const es = event2.getl(player2)?.es;
          return es?.length && es.some((card2) => card2.name == "sm_mabian");
        },
        direct: true,
        async content(event2, trigger, player2) {
          switch (event2.triggername) {
            case "roundStart": {
              trigger.set("_PerttyDerbyed", true);
              game.log("#y新一轮赛马比赛开始！");
              const list = get.info(event2.name).initList(event2.name);
              list.forEach((obj, index) => {
                game.log(`本轮赛马奖励${index + 1}：`, `#g${obj.info}[奖励：${obj.reward}]`);
              });
              game.broadcastAll((list2) => {
                _status.prettyDerbyDoing = list2;
              }, list);
              const target2 = game.findPlayer((current) => current.hasSkill("sm_kulian")), func = async (target3) => {
                target3.markSkill(event2.name);
              };
              if (target2) {
                await func(target2);
              } else {
                await game.doAsyncInOrder(
                  game.filterPlayer(() => true),
                  func
                );
              }
              return;
            }
            case "roundEnd": {
              game.log("#y赛马比赛结束");
              await game.doAsyncInOrder(
                game.filterPlayer(() => true),
                async (target2) => {
                  target2.unmarkSkill(event2.name);
                }
              );
              const next = game.createEvent("perttyDerbyEnd", false);
              next.set("rewards", _status.prettyDerbyDoing);
              next.setContent("emptyEvent");
              await next;
              while (_status.prettyDerbyDoing.length) {
                const map = _status.prettyDerbyDoing.shift();
                game.broadcastAll((list) => {
                  _status.prettyDerbyDoing = list;
                }, _status.prettyDerbyDoing);
                const targets = game.filterPlayer((current) => {
                  return current.getEquip("sm_mabian");
                }).sort((a, b) => {
                  return map.filter(b) - map.filter(a);
                });
                if (!targets.length) {
                  continue;
                }
                if (targets.length > 1 && map.filter(targets[0]) == map.filter(targets[1])) {
                  continue;
                }
                const target2 = targets[0];
                game.log(target2, "执行了赛马奖励：", `#g${map.reward}`);
                await map.content(target2);
              }
              return;
            }
            case "damageSource": {
              player2.addTempSkill("sm_kulian_damaged");
              player2.logSkill("sm_kulian", trigger.player);
              await player2.draw();
              return;
            }
            default: {
              game.log(player2, "#y退赛了！");
              await event2.trigger("withdrawPrettyDerby");
              return;
            }
          }
        },
        mod: {
          targetInRange(card2, player2) {
            if (player2.getEquip("sm_mabian") && ["equip3", "equip4", "equip6"].some((slot) => player2.getEquip(slot))) {
              return true;
            }
          }
        },
        intro: {
          content(_storage) {
            const list = _status.prettyDerbyDoing;
            if (!list?.length) {
              return "未进行比赛";
            }
            return list.map((obj, index) => App({ obj, index })).join("<br />");
            function App(props) {
              const { obj, index } = props;
              const html = String.raw;
              return html`
								目标${index + 1}: ${obj.info}
								<br />
								<ul>
									<li><span style="font-family: yuanli">奖励：${obj.reward}</span></li>
								</ul>
							`;
            }
          }
        },
        rewardList: [
          {
            info: "受到伤害唯一最多",
            reward: "回复全部体力",
            filter(player2) {
              return player2.getRoundHistory("damage").reduce((sum, evt) => sum + evt.num, 0);
            },
            async content(player2) {
              if (player2.isDamaged()) {
                await player2.recoverTo(player2.maxHp);
              }
            }
          },
          {
            info: "手牌数唯一最多",
            reward: "手牌上限改为体力上限",
            filter(player2) {
              return player2.countCards("h");
            },
            async content(player2) {
              player2.addSkill("sm_kulian_yingzi");
            }
          },
          {
            info: "体力值唯一最高",
            reward: "增加1点体力上限",
            filter(player2) {
              return player2.getHp();
            },
            async content(player2) {
              await player2.gainMaxHp();
            }
          },
          {
            info: "装备区牌数唯一最多",
            reward: "获得一张其他角色的装备牌",
            filter(player2) {
              return player2.countCards("e");
            },
            async content(player2) {
              const targets = game.filterPlayer((current) => current != player2 && current.countGainableCards(player2, "e"));
              if (!targets?.length) {
                return;
              }
              const result2 = targets.length > 1 ? await player2.chooseTarget(
                "获得一名其他角色一张装备牌",
                (card2, player3, target3) => {
                  return player3 != target3 && target3.countGainableCards(player3, "e");
                },
                true
              ).set("ai", (target3) => {
                const player3 = get.player();
                return get.effect(target3, { name: "shunshou_copy2", position: "e" }, player3, player3);
              }).forResult() : {
                bool: true,
                targets
              };
              if (!result2?.bool || !result2.targets?.length) {
                return;
              }
              const target2 = result2.targets[0];
              await player2.gainPlayerCard(target2, "e", true);
            }
          },
          {
            info: "击杀数唯一最多",
            reward: "执行一个仅有出牌阶段的额外回合",
            filter(player2) {
              return game.getRoundHistory("everything", (evt) => evt.name == "die" && evt.source == player2).length;
            },
            async content(player2) {
              const next = player2.insertPhase("sm_kulian");
              next.phaseList = ["phaseUse"];
              next._noTurnOver = true;
            }
          },
          {
            info: "使用牌数唯一最多",
            reward: "摸五张牌",
            filter(player2) {
              return player2.getRoundHistory("useCard").length;
            },
            async content(player2) {
              await player2.draw(5);
            }
          },
          {
            info: "造成伤害唯一最多",
            reward: "使用【杀】造成伤害+1",
            filter(player2) {
              return player2.getRoundHistory("sourceDamage").reduce((sum, evt) => sum + evt.num, 0);
            },
            async content(player2) {
              const skill = "sm_kulian_sha";
              player2.addSkill(skill);
              player2.addMark(skill, 1, false);
            }
          }
        ],
        initList(skill) {
          if (!_status.prettyDerbyList || _status.prettyDerbyList.length < 2) {
            _status.prettyDerbyList = get.info(skill).rewardList.slice(0);
          }
          const list = _status.prettyDerbyList.randomRemove(2);
          game.broadcastAll((list2) => {
            _status.prettyDerbyList = list2;
          }, _status.prettyDerbyList);
          return list;
        }
      },
      yingzi: {
        charlotte: true,
        mark: true,
        intro: {
          content: "你的手牌上限改为体力上限"
        },
        mod: {
          maxHandcardBase(player2, num) {
            return player2.maxHp;
          }
        }
      },
      sha: {
        charlotte: true,
        onremove: true,
        intro: {
          content: "使用杀造成的伤害+#"
        },
        trigger: {
          source: "damageBegin1"
        },
        filter(event2, player2) {
          return event2.card?.name == "sha" && player2.countMark("sm_kulian_sha");
        },
        forced: true,
        async content(event2, trigger, player2) {
          trigger.num += player2.countMark(event2.name);
        }
      },
      damaged: {
        charlotte: true
      },
      reward: {
        nobracket: true,
        nopop: true
      }
    }
  },
  sm_lema: {
    audio: 2,
    enable: "chooseToUse",
    filter(event2, player2) {
      if (event2.type === "wuxie") {
        return false;
      }
      return get.inpileVCardList((info) => get.type(info[2]) == "basic").some((card2) => {
        return event2.filterCard(get.autoViewAs({ name: card2[2], nature: card2[3], isCard: true }), player2, event2);
      });
    },
    usable: 1,
    chooseButton: {
      dialog(event2, player2) {
        const list = get.inpileVCardList((info) => get.type(info[2]) == "basic").filter((card2) => {
          return event2.filterCard(get.autoViewAs({ name: card2[2], nature: card2[3], isCard: true }), player2, event2);
        });
        return ui.create.dialog("乐马", [list, "vcard"], "hidden");
      },
      check(button) {
        const event2 = get.event().getParent();
        if (event2.type !== "phase") {
          return 1;
        }
        return get.player().getUseValue(get.autoViewAs({ name: button.link[2], nature: button.link[3], isCard: true }));
      },
      prompt(links) {
        const num = Math.max(
          1,
          game.countPlayer(
            (current) => current.getCards("e", (card2) => {
              return get.subtypes(card2).containsSome("equip3", "equip4", "equip6");
            }).length
          )
        );
        return `视为使用${get.translation(links[0][3]) || ""}${get.translation(links[0][2])}并摸${get.cnNumber(num)}张牌`;
      },
      backup(links, player2) {
        return {
          audio: "sm_lema",
          selectCard: -1,
          filterCard: () => false,
          viewAs: {
            name: links[0][2],
            nature: links[0][3],
            isCard: true
          },
          popname: true,
          log: false,
          async precontent(event2, trigger, player3) {
            player3.logSkill("sm_lema");
            const num = Math.max(
              1,
              game.countPlayer(
                (current) => current.getCards("e", (card2) => {
                  return get.subtypes(card2).containsSome("equip3", "equip4", "equip6");
                }).length
              )
            );
            await player3.draw(num);
          }
        };
      }
    },
    hiddenCard(player2, name) {
      if (player2.getStat("skill").sm_lema) {
        return false;
      }
      return get.type(name) == "basic";
    },
    ai: {
      order: 10,
      respondShan: true,
      respondSha: true,
      skillTagFilter(player2, tag, arg) {
        if (arg === "respond") {
          return false;
        }
        return get.info("sm_lema").hiddenCard(player2, tag.slice("respond".length).toLowerCase());
      },
      result: {
        player(player2) {
          if (_status.event.dying) {
            return get.attitude(player2, _status.event.dying);
          }
          return 1;
        }
      }
    },
    subSkill: {
      backup: {}
    }
  },
  sm_chaoxuan: {
    audio: 2,
    trigger: {
      global: "perttyDerbyEnd"
    },
    filter(event2, player2) {
      return event2.rewards?.length;
    },
    forced: true,
    async content(event2, trigger, player2) {
      for (const reward of trigger.rewards) {
        game.log(player2, "执行了赛马奖励：", `#g${reward.reward}`);
        await reward.content(player2);
      }
    }
  },
  sm_wandou: {
    audio: 2,
    trigger: {
      global: "withdrawPrettyDerby"
    },
    filter(event2, player2) {
      return event2.player.getHp() != 1;
    },
    check(event2, player2) {
      const bool1 = event2.player.getHp() > 1, bool2 = get.attitude(player2, event2.player) > 0;
      return bool1 != bool2;
    },
    logTarget: "player",
    async content(event2, trigger, player2) {
      const target2 = event2.targets[0], num = target2.getHp() - 1;
      if (num > 0) {
        await target2.loseHp(num);
      } else if (num < 0) {
        await target2.recoverTo(1);
      }
    }
  },
  sm_mabian_skill: {
    equipSkill: true,
    onremove: true,
    charlotte: true
  },
  //新杀神孙权
  dccangming: {
    audio: 2,
    trigger: {
      //global: "gameDrawAfter",
      global: "phaseBefore",
      player: "enterGame"
    },
    forced: true,
    filter(event2, player2) {
      if (event2.name == "phase" && game.phaseNumber != 0) {
        return false;
      }
      return !!game.countPlayer((target2) => target2.countCards("h") > 0);
    },
    logTarget() {
      return game.filterPlayer((target2) => target2.countCards("h") > 0);
    },
    async content(event2, trigger, player2) {
      const { name, targets } = event2;
      const lose_list = targets.sortBySeat().map((target2) => [target2, target2.getCards("h")]);
      await game.loseAsync({
        lose_list,
        player: player2,
        log: true,
        animate: "giveAuto",
        gaintag: [name]
      }).setContent("addToExpansionMultiple");
    },
    marktext: "溟",
    intro: {
      markcount: "expansion",
      mark(dialog, storage, player2) {
        const cards2 = player2.getExpansions("dccangming");
        if (player2.isUnderControl(true)) {
          dialog.addAuto(cards2);
        } else {
          return "共有" + get.cnNumber(cards2.length) + "张牌";
        }
      }
    },
    global: "dccangming_gain",
    group: "dccangming_draw",
    subSkill: {
      draw: {
        trigger: {
          global: ["addToExpansionAfter", "loseAsyncAfter"]
        },
        filter(event2, player2) {
          if (event2.getlx == false) {
            return false;
          }
          if (event2.name == "loseAsync" && event2.type != "addToExpansion") {
            return false;
          }
          return event2.gaintag?.includes("dccangming");
        },
        forced: true,
        async content(event2, trigger, player2) {
          const { cards: cards2 } = trigger;
          const types = cards2.map((card2) => get.color(card2)).unique();
          await player2.draw(types.length);
        }
      },
      gain: {
        trigger: {
          player: ["phaseBegin", "damageEnd"]
        },
        filter(event2, player2) {
          return player2.countExpansions("dccangming") > 0;
        },
        forced: true,
        async content(event2, trigger, player2) {
          game.log(player2, "获得了", get.cnNumber(player2.countExpansions("dccangming")), "张牌");
          await player2.gain(player2.getExpansions("dccangming"), "draw");
        }
      }
    }
  },
  dcchouxi: {
    audio: 2,
    enable: "phaseUse",
    onChooseToUse(event2) {
      if (game.online) {
        return;
      }
      const list = [];
      game.countPlayer((current) => {
        if (!current.countExpansions("dccangming")) {
          return false;
        }
        for (const card2 of current.getExpansions("dccangming")) {
          if (["basic", "trick"].includes(get.type(card2, false))) {
            list.add(get.name(card2, false));
          }
        }
        return true;
      });
      list.removeArray(event2.player.getStorage("dcchouxi_used"));
      event2.set("dcchouxiList", list);
    },
    filter(event2, player2) {
      if (!event2.dcchouxiList?.length || !player2.countCards("hs")) {
        return false;
      }
      return event2.dcchouxiList.some((name) => {
        const card2 = get.autoViewAs({ name, storage: { dcchouxi: true } }, "unsure");
        return player2.hasUseTarget(card2);
      });
    },
    chooseButton: {
      dialog(event2, player2) {
        const list = event2.dcchouxiList.filter((name) => {
          const card2 = get.autoViewAs({ name, storage: { dcchouxi: true } }, "unsure");
          return player2.hasUseTarget(card2);
        });
        const dialog = ui.create.dialog("筹汐", [list, "vcard"], "hidden");
        dialog.direct = true;
        return dialog;
      },
      check(button) {
        const player2 = get.player(), card2 = get.autoViewAs({ name: button.link[2], storage: { dcchouxi: true } }, "unsure");
        return player2.getUseValue(card2);
      },
      backup(links, player2) {
        return {
          audio: "dcchouxi",
          popname: true,
          viewAs: {
            name: links[0][2],
            storage: {
              dcchouxi: true
            }
          },
          filterCard: true,
          position: "hes",
          check(card2) {
            return 5 - get.value(card2);
          },
          async precontent(event2, trigger, player3) {
            player3.addTempSkill("dcchouxi_used");
            player3.markAuto("dcchouxi_used", event2.result.card.name);
            event2.getParent().addCount = false;
          }
        };
      },
      prompt(links, player2) {
        return `将一张牌当作${get.translation(links[0][2])}使用`;
      }
    },
    locked: false,
    mod: {
      cardUsable(card2, player2) {
        if (card2?.storage?.dcchouxi) {
          return Infinity;
        }
      },
      targetInRange(card2, player2) {
        if (card2?.storage?.dcchouxi) {
          return true;
        }
      }
    },
    ai: {
      combo: ["dccangming", "dcjichao"],
      order: 8,
      result: {
        player: 1
      }
    },
    subSkill: {
      backup: {},
      used: {
        charlotte: true,
        onremove: true
      }
    }
  },
  dcjichao: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return game.hasPlayer((current) => current != player2 && current.countCards("he") > 0);
    },
    chooseButton: {
      dialog(event2, player2) {
        const choiceList = [
          ["one", "令一名其他角色将随机一半手牌（向上取整）和装备区的牌置于武将牌上"],
          ["all", "令所有其他角色将所有牌置于武将牌上"]
        ];
        const dialog = ui.create.dialog("激潮", [choiceList, "textbutton"], "hidden");
        dialog.direct = true;
        return dialog;
      },
      filter(button, player2) {
        return button.link == "one" || !player2.hasSkill("dcjichao_blocker");
      },
      check(button) {
        get.player();
        if (button.link == "all") {
          return 2;
        }
        return 1;
      },
      backup(links, player2) {
        return {
          audio: "dcjichao",
          choice: links[0],
          manualConfirm: true,
          filterTarget(card2, player3, target2) {
            return target2 != player3 && target2.countCards("he") > 0;
          },
          selectTarget() {
            const { choice } = get.info("dcjichao_backup");
            if (choice == "all") {
              return -1;
            }
            return 1;
          },
          multitarget: true,
          multiline: true,
          async content(event2, trigger, player3) {
            const { targets, name } = event2;
            const { choice } = get.info(name);
            if (choice == "all") {
              player3.addTempSkill("dcjichao_blocker", { player: "dieAfter" });
            }
            const getCards = function(target2) {
              let cards2 = target2.getCards("h");
              if (choice !== "all") {
                let num = Math.ceil(cards2.length / 2);
                if (num > 0) {
                  cards2 = cards2.randomGets(num);
                }
              }
              cards2 = [...cards2, ...target2.getCards("e")];
              return cards2;
            };
            if (choice == "all") {
              await game.loseAsync({
                lose_list: targets.sortBySeat().map((target2) => [target2, getCards(target2)]),
                player: player3,
                log: true,
                animate: "giveAuto",
                gaintag: ["dccangming"]
              }).setContent("addToExpansionMultiple");
            } else {
              const [target2] = targets;
              const next = target2.addToExpansion(getCards(target2), target2, "giveAuto");
              next.gaintag.add("dccangming");
              await next;
            }
          },
          ai1: () => 1,
          ai2(target2) {
            const player3 = get.player();
            return -get.attitude(player3, target2);
          }
        };
      },
      prompt(links, player2) {
        if (links[0] == "all") {
          return "令所有其他角色将所有牌置于武将牌上，称为“溟”";
        }
        return "令一名其他角色将随机一半手牌（向上取整）和装备区的牌置于武将牌上，称为“溟”";
      }
    },
    ai: {
      order(item, player2) {
        player2 ??= get.player();
        if (game.hasPlayer((current) => {
          if (current == player2 || !current.countCards("h")) {
            return false;
          }
          if (get.attitude(player2, current) > 0) {
            return false;
          }
          return player2.countCards("hs", (card2) => player2.canUse(card2, current) && get.effect(current, card2, player2, player2) > 0) > 0;
        })) {
          return 9;
        }
        return 1;
      },
      result: {
        player(player2, target2) {
          if (game.hasPlayer((current) => {
            if (current == player2 || !current.countCards("h")) {
              return false;
            }
            return get.attitude(player2, current) < 0;
          })) {
            return 1;
          }
          return 0;
        }
      }
    },
    subSkill: {
      blocker: {
        charlotte: true,
        silent: true,
        init(player2, skill) {
          player2.addMark(skill, 3, false);
        },
        onremove: true,
        intro: {
          content: "还需造成#点伤害"
        },
        trigger: {
          source: "damage"
        },
        filter(event2, player2) {
          return event2.num > 0;
        },
        async content(event2, trigger, player2) {
          const { num } = trigger;
          player2.removeMark(event2.name, num, false);
          if (!player2.hasMark(event2.name)) {
            player2.removeSkill(event2.name);
          }
        }
      },
      backup: {}
    }
  },
  //26珍藏神黄月英
  zc26_cangqiao: {
    trigger: {
      player: "useCard",
      global: "roundStart"
    },
    filter(event2, player2) {
      if (event2.name == "useCard") {
        if (!["duanjian", "serafuku", "yonglv"].includes(event2.card.name)) {
          return false;
        }
        return player2.countCards("h") < player2.maxHp;
      }
      return true;
    },
    async cost(event2, trigger, player2) {
      event2.result = await player2.chooseBool(get.prompt(event2.skill), () => true).forResult();
    },
    async content(event2, trigger, player2) {
      if (trigger.name == "useCard") {
        await player2.drawTo(player2.maxHp);
      } else {
        if (!_status.zc26_cangqiao) {
          game.broadcastAll(function() {
            _status.zc26_cangqiao = [
              { name: "duanjian", number: 13, suit: "club" },
              { name: "serafuku", number: 9, suit: "heart" },
              { name: "yonglv", number: 13, suit: "club" }
            ];
            for (let info of _status.zc26_cangqiao) {
              if (!lib.inpile.includes(info.name)) {
                lib.inpile.add(info.name);
              }
            }
          });
        }
        let list = ["duanjian", "serafuku", "yonglv"], cards2 = [];
        for (let name of list) {
          let card2 = get.discardPile(name);
          if (card2) {
            cards2.add(card2);
          } else {
            let info = _status.zc26_cangqiao.find((i) => i.name == name);
            if (info) {
              game.broadcastAll(function(info2) {
                _status.zc26_cangqiao.remove(info2);
              }, info);
              card2 = game.createCard2(name, info.suit, info.number);
              card2.addCardtag("gifts");
              cards2.add(card2);
            }
          }
        }
        if (cards2.length) {
          await player2.gain(cards2, "draw2");
        }
      }
    }
  },
  zc26_shenxie: {
    usable: 1,
    trigger: { global: "useCardAfter" },
    filter(event2, player2) {
      if (!event2.targets.includes(player2) || event2.targets.length != 1) {
        return false;
      } else if (get.color(event2.card) != "black") {
        return false;
      }
      const storage = player2.getStorage(
        "zc26_shenxie",
        lib.inpile.filter((name) => get.type(name) == "delay")
      );
      if (!storage.some((name) => player2.hasUseTarget(name))) {
        return false;
      }
      return game.hasPlayer((current) => {
        return current.countCards("ej", { type: "equip" });
      });
    },
    async cost(event2, trigger, player2) {
      const storage = player2.getStorage(
        event2.skill,
        lib.inpile.filter((name) => get.type(name) == "delay")
      ).filter((name) => player2.hasUseTarget(name));
      const choice = storage.map((name) => [name, player2.getUseValue(get.autoViewAs({ name, isCard: false }, "unsure"))]).reduce(
        (max, info) => {
          if (max[1] < info[1]) {
            return info;
          }
          return max;
        },
        [null, 0]
      )[0];
      const result2 = await player2.chooseTarget(get.prompt2(event2.skill), (_, player3, target2) => target2.countCards("ej", { type: "equip" })).set("ai", (target2) => {
        const { player: player3, choice: choice2 } = get.event(), es = target2.getCards("ej", { type: "equip" });
        if (!choice2) {
          return 0;
        }
        if (get.attitude(player3, target2) > 0) {
          return 10 - Math.min(...es.map((card2) => get.equipValue(card2)));
        }
        return Math.max(...es.map((card2) => get.equipValue(card2)));
      }).set("choice", choice).forResult();
      event2.result = {
        bool: result2?.bool,
        targets: result2?.targets,
        cost_data: choice
      };
    },
    async content(event2, trigger, player2) {
      const {
        targets: [target2],
        cost_data: choice
      } = event2;
      const result2 = await player2.choosePlayerCard(target2, `###神械###将${get.translation(target2)}场上的一张牌当作延时锦囊牌使用`, "ej", true).set("filterButton", ({ link }) => get.type(link) == "equip").set("ai", ({ link }) => {
        const { player: player3, target: target3 } = get.event();
        if (get.attitude(player3, target3) > 0) {
          return 10 - get.equipValue(link);
        }
        return get.equipValue(link);
      }).forResult();
      if (result2?.bool && result2.cards?.length) {
        const storage = player2.getStorage(
          event2.name,
          lib.inpile.filter((name) => get.type(name) == "delay")
        ).filter((name) => player2.hasUseTarget(name));
        const { links } = await player2.chooseVCardButton(true, "神械：请选择要使用的延时锦囊牌", storage.slice()).set("ai", ({ link: [_, __, name] }) => {
          const { player: player3, choice: choice2 } = get.event();
          if (choice2) {
            return name == choice2;
          }
          return player3.getUseValue(name);
        }).set("choice", choice).forResult();
        if (links?.length) {
          const name = links[0][2];
          storage.remove(name);
          if (!storage.length) {
            storage.addArray(lib.inpile.filter((name2) => get.type(name2) == "delay"));
          }
          player2.setStorage(event2.name, storage, true);
          await player2.chooseUseTarget({ name, storage: { equipEnable: true }, isCard: false }, result2.cards, true);
        }
      }
    }
  },
  zc26_huaxiu: {
    usable: 1,
    enable: "phaseUse",
    onChooseToUse(event2) {
      if (game.online) {
        return;
      }
      event2.set(
        "zc26_huaxiu",
        ["duanjian", "serafuku", "yonglv"].filter((i) => i in lib.card)
      );
    },
    filter(event2, player2) {
      return event2.zc26_huaxiu?.length;
    },
    manualConfirm: true,
    async content(event2, trigger, player2) {
      const list = event2.getParent(2).zc26_huaxiu.map((name) => [get.type(name), "", name]);
      const result2 = await player2.chooseButton(true, ["化朽", "选择要升级的装备", [list, "vcard"]]).set("ai", (button) => {
        const player3 = get.player(), name = button.link[2];
        const num = game.countPlayer((current) => {
          const hs = current.countVCards("h", (card2) => name == card2.name), es = current.countVCards("e", (card2) => name == card2.name), js = current.countVCards(
            "j",
            (card2) => get.type(card2) == "delay" && card2.storage.equipEnable && name == get.name(card2, false)
          );
          return get.sgnAttitude(player3, current) * (es + js + current == player3 ? hs : 0);
        });
        return num;
      }).forResult();
      if (result2?.bool && result2.links?.length) {
        let check = function(name2, target2, method) {
          if (method == "e") {
            return target2.hasVCard({ name: name2 }, "e");
          } else if (method == "j") {
            return target2.hasVCard((card2) => {
              if (!card2.storage?.equipEnable) {
                return false;
              }
              return card2.cards.some((cardx) => cardx.name == name2);
            }, "j");
          }
          return false;
        };
        const name = result2.links[0][2], map = {
          duanjian: "zc26_zhuge",
          serafuku: "zc26_bagua",
          yonglv: "zc26_lingling"
        };
        game.log(player2, "将", `#y${get.translation({ name })}`, "升级为", `#y${get.translation({ name: map[name] })}`);
        player2.addTempSkill("zc26_huaxiu_restore", { player: "phaseBegin" });
        game.broadcastAll(
          function(name2, player3, map2) {
            if (!_status.zc26_huaxiu_origin) {
              _status.zc26_huaxiu_origin = {};
              for (let name3 of ["duanjian", "serafuku", "yonglv"]) {
                _status.zc26_huaxiu_origin[name3] = {
                  info: lib.card[name3],
                  translate: lib.translate[name3],
                  translate2: lib.translate[`${name3}_info`]
                };
              }
            }
            lib.card[name2] = lib.card[map2[name2]];
            lib.translate[name2] = lib.translate[map2[name2]];
            lib.translate[`${name2}_info`] = lib.translate[`${map2[name2]}_info`];
            _status.zc26_huaxiu ??= {};
            _status.zc26_huaxiu[name2] ??= [];
            _status.zc26_huaxiu[name2].add(player3);
            lib.init.sheet(`
							.card[data-card-name = "${name2}"]>.image {
								background-image: url(${lib.assetURL}image/card/${map2[name2]}.png) !important;
							}
						`);
          },
          name,
          player2,
          map
        );
        const removeSkill = get.skillsFromEquips([{ name }]), addSkill = get.skillsFromEquips([{ name: map[name] }]);
        for (let current of game.players) {
          let keepSkills = Object.values(current.additionalSkills).flat(), removeSkill2 = removeSkill.slice().removeArray(keepSkills);
          if (removeSkill2.length) {
            current.removeSkill(removeSkill2);
          }
          if (check(name, current, "j")) {
            current.addSkill(addSkill);
          }
          if (check(name, current, "e")) {
            current.addEquipTrigger({ name: map[name] });
          }
          let vcards = current.getVCards("e", { name });
          while (vcards.length) {
            let vcard = vcards.shift();
            current.$addVirtualEquip(vcard, vcard.cards);
          }
        }
      }
    },
    subSkill: {
      restore: {
        charlotte: true,
        onremove(player2, skill) {
          get.info(skill).contentx.apply(this, [null, null, player2]);
        },
        trigger: { player: "phaseBegin" },
        filter(event2, player2) {
          for (let name of ["duanjian", "serafuku", "yonglv"]) {
            if (_status.zc26_huaxiu?.[name]?.includes(player2)) {
              return true;
            }
          }
          return false;
        },
        forced: true,
        popup: false,
        async content(event2, trigger, player2) {
          get.info(event2.name).contentx.apply(this, arguments);
        },
        contentx(event2, trigger, player2) {
          game.broadcastAll(function(player3) {
            for (let name of ["duanjian", "serafuku", "yonglv"]) {
              if (_status.zc26_huaxiu?.[name]?.includes(player3)) {
                _status.zc26_huaxiu[name].remove(player3);
                lib.init.sheet(`
									.card[data-card-name = "${name}"]>.image {
										background-image: url(${lib.assetURL}image/card/${name}.png) !important;
									}
								`);
              }
            }
          }, player2);
          function check(name, target2, method) {
            if (method == "e") {
              return target2.hasVCard({ name }, "e");
            } else if (method == "j") {
              return target2.hasVCard((card2) => {
                if (!card2.storage?.equipEnable) {
                  return false;
                }
                return card2.cards.some((cardx) => cardx.name == name);
              }, "j");
            }
            return false;
          }
          const map = {
            duanjian: "zc26_zhuge",
            serafuku: "zc26_bagua",
            yonglv: "zc26_lingling"
          };
          for (let name of ["duanjian", "serafuku", "yonglv"]) {
            if (name in _status.zc26_huaxiu && !_status.zc26_huaxiu[name].length) {
              game.log(`#y${get.translation({ name })}`, "的效果还原了");
              game.broadcastAll(function(name2) {
                delete _status.zc26_huaxiu[name2];
              }, name);
              lib.card[name] = _status.zc26_huaxiu_origin[name].info;
              lib.translate[name] = _status.zc26_huaxiu_origin[name].translate;
              lib.translate[`${name}_info`] = _status.zc26_huaxiu_origin[name].translate2;
              const addSkill = get.skillsFromEquips([{ name }]), removeSkill = get.skillsFromEquips([{ name: map[name] }]);
              for (let current of game.players) {
                let keepSkills = Object.values(current.additionalSkills).flat(), removeSkill2 = removeSkill.slice().removeArray(keepSkills);
                if (removeSkill2.length) {
                  current.removeSkill(removeSkill2);
                }
                if (check(name, current, "j")) {
                  current.addSkill(addSkill);
                } else if (check(name, current, "e")) {
                  current.addEquipTrigger({ name });
                }
                let vcards = current.getVCards("e", { name });
                while (vcards.length) {
                  let vcard = vcards.shift();
                  current.$addVirtualEquip(vcard, vcard.cards);
                }
              }
            }
          }
        }
      }
    },
    ai: {
      order: 10,
      result: {
        player: 1
      }
    }
  },
  zc26_zhuge_skill: {
    equipSkill: true,
    firstDo: true,
    locked: true,
    audio: "zhuge_skill",
    mod: {
      cardUsable(card2, player2, num) {
        let cards2 = player2.getCards("e", (card3) => get.name(card3) == "zc26_zhuge");
        if (card2.name === "sha") {
          if (!cards2.length || player2.hasSkill("zc26_zhuge_skill", null, false) || cards2.some((card3) => card3 !== _status.zc26_zhuge_temp && !ui.selected.cards.includes(card3))) {
            if (get.is.versus() || get.is.changban()) {
              return num + 3;
            }
            return Infinity;
          }
        }
      },
      cardEnabled2(card2, player2) {
        if (!_status.event.addCount_extra || player2.hasSkill("zc26_zhuge_skill", null, false)) {
          return;
        }
        let cards2 = player2.getCards("e", (card3) => get.name(card3) == "zc26_zhuge");
        if (card2 && cards2.includes(card2)) {
          let cardz;
          try {
            cardz = get.card();
          } catch (e) {
            return;
          }
          if (!cardz || cardz.name !== "sha") {
            return;
          }
          _status.zc26_zhuge_temp = card2;
          let bool = lib.filter.cardUsable(get.autoViewAs(cardz, ui.selected.cards.concat([card2])), player2);
          delete _status.zc26_zhuge_temp;
          if (!bool) {
            return false;
          }
        }
      }
    },
    trigger: { player: ["useCard1", "useCardToPlayered"] },
    filter(event2, player2, triggername) {
      if (event2.card.name != "sha") {
        return false;
      }
      if (event2.name == "useCard") {
        return !event2.audioed && player2.countUsed("sha", true) > 1 && event2.getParent().type === "phase";
      }
      return game.dead.length && event2.target.countCards("h");
    },
    async cost(event2, trigger, player2) {
      if (trigger.name == "useCard") {
        event2.result = { bool: true };
      } else {
        event2.result = await player2.chooseTarget(
          `###${get.prompt(event2.skill)}###令任意名死亡角色依次观看${get.translation(trigger.target)}手牌并可以重铸其中一张牌`,
          [1, game.dead.length]
        ).set("filterTarget", (_, player3, target2) => target2.isDead()).set("ai", (target2) => get.attitude(get.player(), target2) > 0).set("deadTarget", true).forResult();
      }
    },
    async content(event2, trigger, player2) {
      if (trigger.name == "useCard") {
        trigger.audioed = true;
      } else {
        event2.targets.sortBySeat(_status.currentPhase);
        for (const current of event2.targets) {
          if (!current.isDead()) {
            continue;
          }
          await current.viewHandcards(trigger.target);
          const cards2 = trigger.target.getCards("h", (card2) => lib.filter.cardRecastable(card2, trigger.target, trigger.target));
          if (!cards2.length) {
            return;
          }
          const result2 = await current.chooseCardButton(`请选择重铸${get.translation(trigger.target)}的一张手牌`, cards2).set("ai", ({ link }) => {
            const { player: player3, target: target2 } = get.event();
            if (get.attitude(player3, target2) > 0) {
              return 20 - get.value(link);
            }
            return get.value(link);
          }).set("target", trigger.target).set("forceDie", true).forResult();
          if (result2?.bool && result2.links?.length) {
            await trigger.target.recast(result2.links);
          }
        }
      }
    }
  },
  zc26_bagua_skill: {
    equipSkill: true,
    audio: "bagua_skill",
    trigger: { player: ["chooseToRespondBegin", "chooseToUseBegin"] },
    filter(event2, player2) {
      if (event2.responded) {
        return false;
      }
      if (event2.zc26_bagua_skill) {
        return false;
      }
      if (!event2.filterCard || !event2.filterCard(get.autoViewAs({ name: "shan" }, []), player2, event2)) {
        return false;
      }
      if (event2.name === "chooseToRespond" && !lib.filter.cardRespondable(get.autoViewAs({ name: "shan" }, []), player2, event2)) {
        return false;
      }
      if (player2.hasSkillTag("unequip2")) {
        return false;
      }
      let evt = event2.getParent();
      if (evt.player && evt.player.hasSkillTag("unequip", false, {
        name: evt.card ? evt.card.name : null,
        target: player2,
        card: evt.card
      })) {
        return false;
      }
      return true;
    },
    check(event2, player2) {
      if (!event2) {
        return true;
      }
      if (event2.ai) {
        let ai = event2.ai;
        let tmp = _status.event;
        _status.event = event2;
        let result2 = ai({ name: "shan" }, _status.event.player, event2);
        _status.event = tmp;
        return result2 > 0;
      }
      const type = event2.name === "chooseToRespond" ? "respond" : "use";
      let evt = event2.getParent();
      if (player2.hasSkillTag("noShan", null, type)) {
        return false;
      }
      if (!evt || !evt.card || !evt.player || player2.hasSkillTag("useShan", null, type)) {
        return true;
      }
      if (evt.card && evt.player && player2.isLinked() && game.hasNature(evt.card) && get.attitude(player2, evt.player._trueMe || evt.player) > 0) {
        return false;
      }
      return true;
    },
    async content(event2, trigger, player2) {
      trigger.zc26_bagua_skill = true;
      if (game.dead.length) {
        const { targets } = await player2.chooseTarget(`###${get.prompt(event2.name)}###令一名死亡角色卜算3`).set("filterTarget", (_, player3, target2) => target2.isDead()).set("ai", (target2) => get.attitude(get.player(), target2) > 0).set("deadTarget", true).forResult();
        if (targets?.length) {
          player2.line(targets[0]);
          game.log(player2, "令", targets[0], "卜算3");
          await targets[0].chooseToGuanxing(3).set("forceDie", true);
        }
      }
      const result2 = await player2.judge("zc26_bagua", (card2) => get.color(card2) === "red" ? 1.5 : -0.5).set("judge2", (result3) => result3.bool).forResult();
      if (result2.bool > 0) {
        trigger.untrigger();
        trigger.set("responded", true);
        trigger.result = { bool: true, card: get.autoViewAs({ name: "shan", isCard: true }, []), cards: [] };
      }
    },
    ai: {
      respondShan: true,
      freeShan: true,
      skillTagFilter(player2, tag, arg) {
        if (tag !== "respondShan" && tag !== "freeShan") {
          return;
        }
        if (player2.hasSkillTag("unequip2")) {
          return false;
        }
        if (!arg || !arg.player) {
          return true;
        }
        if (arg.player.hasSkillTag("unequip", false, {
          target: player2
        })) {
          return false;
        }
        return true;
      },
      effect: {
        target(card2, player2, target2, effect) {
          if (target2.hasSkillTag("unequip2")) {
            return;
          }
          if (player2.hasSkillTag("unequip", false, {
            name: card2 ? card2.name : null,
            target: target2,
            card: card2
          }) || player2.hasSkillTag("unequip_ai", false, {
            name: card2 ? card2.name : null,
            target: target2,
            card: card2
          })) {
            return;
          }
          if (get.tag(card2, "respondShan")) {
            return 0.5;
          }
        }
      }
    }
  },
  zc26_lingling_skill: {
    equipSkill: true,
    trigger: {
      player: "phaseZhunbeiBegin",
      global: "roundEnd"
    },
    getIndex(event2, player2) {
      if (event2.name == "phaseZhunbei") {
        return 1;
      }
      const es = player2.getCards("e", (card2) => get.info(card2)?.name == "zc26_lingling"), js = player2.getCards("j", (card2) => {
        if (get.type(card2) != "delay") ;
        const vcard = card2[card2.cardSymbol];
        if (!vcard || !vcard.storage?.equipEnable) {
          return false;
        }
        return vcard.cards.some((cardx) => get.info(cardx)?.name == "zc26_lingling");
      });
      return es.concat(js);
    },
    filter(event2, player2, triggername, card2) {
      if (event2.name == "phaseZhunbei") {
        return true;
      }
      if (!game.dead.length) {
        return false;
      }
      return !event2.next[event2.next.length - 1]?.zc26_lingling?.includes(card2);
    },
    forced: true,
    async content(event2, trigger, player2) {
      if (trigger.name == "phaseZhunbei") {
        const { targets } = await player2.chooseTarget(`軨軨：选择一名角色对其造成1点雷电伤害`, true).set("ai", (target2) => get.damageEffect(target2, get.player(), get.player(), "thunder")).forResult();
        if (targets?.length) {
          await targets[0].damage(player2, "thunder");
        }
      } else {
        trigger.next[trigger.next.length - 1].zc26_lingling ??= [];
        trigger.next[trigger.next.length - 1].zc26_lingling.add(event2.indexedData);
        const targets = game.dead.slice();
        const map = await game.chooseAnyOL(targets, get.info(event2.name).chooseControl, [player2, event2.indexedData]).forResult();
        for (const target2 of targets) {
          let source = game.findPlayer((current) => current.hasCard((card2) => card2 == event2.indexedData, "ej")), aim;
          const control = map.get(target2).control;
          if (control == "上家") {
            aim = source?.previous;
          } else if (control == "下家") {
            aim = source?.next;
          }
          if (!source || !aim) {
            return;
          }
          await target2.moveCard(true, source, aim, (card2) => {
            const cardx = get.event().card;
            if (get.itemtype(card2) == "card") {
              return card2 == cardx;
            }
            return card2 == cardx[cardx.cardSymbol];
          }).set("card", event2.indexedData).set("forceDie", true).setContent(async function(event3, trigger2, player3) {
            if (player3.canMoveCard(
              null,
              event3.nojudge,
              event3.sourceTargets,
              event3.aimTargets,
              event3.filter,
              event3.canReplace ? "canReplace" : "noReplace"
            )) {
              const source2 = event3.sourceTargets[0], aim2 = event3.aimTargets[0];
              let position = "j";
              event3.result = {
                bool: true,
                links: [event3.card],
                card: event3.card
              };
              if (source2.getCards("e").includes(event3.card)) {
                position = "e";
                if (!event3.card.cards?.length) {
                  source2.removeVirtualEquip(event3.card);
                }
                await aim2.equip(event3.card);
              } else {
                if (!event3.card.cards?.length) {
                  source2.removeVirtualJudge(event3.card);
                }
                await aim2.addJudge(event3.card, event3.card?.cards);
              }
              if (event3.card.cards?.length) {
                source2.$give(event3.card.cards, aim2, false);
              }
              game.log(source2, "的", event3.card, "被移动给了", aim2);
              event3.result.position = position;
              await game.delay();
            }
          });
        }
      }
    },
    chooseControl(player2, source, card2, eventId) {
      return player2.chooseControl(["上家", "下家"]).set("prompt", "軨軨：秘密选择一个方向").set("prompt2", `令${get.translation(source)}的${get.translation(card2)}移动至其上家或下家`).set("ai", () => {
        let controls = get.event().controls.slice();
        return get.event().getRand() < 0.5 ? controls[0] : controls[1];
      }).set("id", eventId).set("_global_waiting", true);
    }
  },
  //线下标记神马
  mark_shouli: {
    audio: "shouli",
    addMark(player2, name) {
      const next = game.createEvent("gainShouli", false);
      next.player = player2;
      next.num = 1;
      next.mark = name;
      next.setContent("emptyEvent");
      if (player2.countMark(name)) {
        next.hasMark = true;
      }
      player2.addMark(name, 1);
      return next;
    },
    changeMark(player2, target2, name) {
      const num = player2.countMark(name);
      const next = game.createEvent("gainShouli", false);
      next.player = target2;
      next.num = num;
      next.mark = name;
      next.setContent("emptyEvent");
      if (target2.countMark(name)) {
        next.hasMark = true;
      }
      player2.removeMark(name, num, false);
      target2.addMark(name, num, false);
      game.log(player2, "的", `#g“${get.translation(name)}”`, "被移动给了", target2);
      return next;
    },
    enable: ["chooseToUse", "chooseToRespond"],
    hiddenCard(player2, name) {
      if (name != "sha" && name != "shan") {
        return false;
      }
      return !player2.getStorage("mark_shouli_used").includes(name) && game.hasPlayer((current) => {
        return current != player2 && current.hasMark(`mark_shouli_${name == "sha" ? "jun" : "li"}`);
      });
    },
    filter(event2, player2) {
      if (event2.responded || event2.mark_shouli || event2.type == "wuxie") {
        return false;
      }
      return ["sha", "shan"].some((name) => {
        if (!game.hasPlayer((current) => {
          return current != player2 && current.hasMark(`mark_shouli_${name == "sha" ? "jun" : "li"}`);
        })) {
          return false;
        }
        if (player2.getStorage("mark_shouli_used").includes(name)) {
          return false;
        }
        return event2.filterCard(get.autoViewAs({ name, storage: { mark_shouli: true }, isCard: true }, "unsure"), player2, event2);
      });
    },
    filterTarget(card2, player2, target2) {
      if (ui.selected.targets?.length) {
        const owner = ui.selected.targets[0];
        return target2 == owner.getNext() || target2 == owner.getPrevious();
      }
      if (target2 == player2) {
        return false;
      }
      let event2 = _status.event, evt = event2;
      if (event2._backup) {
        evt = event2._backup;
      }
      return ["sha", "shan"].some((name) => {
        const card3 = get.autoViewAs({ name, storage: { mark_shouli: true }, isCard: true }, "unsure"), mark = `mark_shouli_${name == "sha" ? "jun" : "li"}`;
        if (!target2.hasMark(mark) || player2.getStorage("mark_shouli_used").includes(name)) {
          return false;
        }
        if (!evt.filterCard(card3, player2, event2)) {
          return false;
        }
        if (name == "sha") {
          return !evt.filterTarget || game.hasPlayer((current) => evt.filterTarget(card3, player2, current));
        }
        return true;
      });
    },
    selectTarget: 2,
    complexTarget: true,
    multitarget: true,
    delay: false,
    locked: false,
    prompt: "将一名其他角色的所有“骏”/“骊”移动至其上家或下家，视为使用或打出一张【杀】/【闪】",
    async content(event2, trigger, player2) {
      const evt = event2.getParent(2);
      evt.set("mark_shouli", true);
      const list = [];
      const backupx = _status.event;
      _status.event = evt;
      ["sha", "shan"].forEach((name2) => {
        const card2 = get.autoViewAs({ name: name2, storage: { mark_shouli: true }, isCard: true }, "unsure"), mark2 = `mark_shouli_${name2 == "sha" ? "jun" : "li"}`;
        if (!event2.targets[0].hasMark(mark2) || player2.getStorage("mark_shouli_used").includes(name2)) {
          return false;
        }
        if (name2 == "sha") {
          if (!evt.filterCard(card2, player2, evt)) {
            return false;
          }
          if (evt.filterTarget && !game.hasPlayer((current) => evt.filterTarget(card2, player2, current))) {
            return false;
          }
        } else if (!evt.filterCard(card2, player2, event2)) {
          return false;
        }
        list.push(["", "", name2]);
      });
      _status.event = backupx;
      const result2 = list.length > 1 ? await player2.chooseButton(["狩骊：选择你要视为使用的牌", [list, "vcard"]], true).set("ai", (button) => {
        return Math.random();
      }).forResult() : {
        bool: true,
        links: list
      };
      if (!result2?.bool) {
        return;
      }
      const name = result2.links[0][2], mark = `mark_shouli_${name == "sha" ? "jun" : "li"}`;
      get.info(event2.name).changeMark(...event2.targets, mark);
      player2.addTempSkill("mark_shouli_used");
      player2.markAuto("mark_shouli_used", name);
      if (evt.name == "chooseToUse") {
        game.broadcastAll(function(name2) {
          lib.skill.mark_shouli_backup.viewAs = {
            name: name2,
            storage: { mark_shouli: true },
            isCard: true
          };
          lib.skill.mark_shouli_backup.prompt = `选择${get.translation(name2)}的目标`;
        }, name);
        evt.set("_backupevent", "mark_shouli_backup");
        evt.backup("mark_shouli_backup");
        evt.set("openskilldialog", `选择${get.translation(name)}的目标`);
        evt.set("norestore", true);
        evt.set("custom", {
          add: {},
          replace: { window() {
          } }
        });
      } else {
        delete evt.result.used;
        delete evt.result.skill;
        evt.result.card = get.autoViewAs({
          name,
          storage: { mark_shouli: true },
          isCard: true
        });
        evt.result.cards = [];
        evt.redo();
        return;
      }
      evt.goto(0);
    },
    mod: {
      targetInRange(card2, player2) {
        if (card2?.storage?.mark_shouli) {
          return true;
        }
      },
      cardUsable(card2, player2) {
        if (card2?.storage?.mark_shouli) {
          return Infinity;
        }
      }
    },
    ai: {
      respondSha: true,
      respondShan: true,
      skillTagFilter(player2, tag) {
        return get.info("mark_shouli").hiddenCard(player2, tag == "respondSha" ? "sha" : "shan");
      },
      order: 2,
      result: {
        player(player2, target2) {
          var att = Math.max(8, get.attitude(player2, target2));
          if (ui.selected.targets?.length) {
            return 10 + att;
          }
          if (_status.event.type != "phase") {
            return 9 - att;
          }
          if (!player2.hasValueTarget({ name: "sha" }, false)) {
            return 0;
          }
          return 9 - att;
        }
      }
    },
    derivation: ["mark_shouli_jun", "mark_shouli_li"],
    group: "mark_shouli_init",
    global: "mark_shouli_effect",
    subSkill: {
      effect: {
        trigger: {
          player: ["phaseDrawBegin2", "useCardToPlayer", "damageBegin3", "damageBegin4"],
          source: "damageBegin1"
        },
        filter(event2, player2, name) {
          const target2 = name == "damageBegin1" ? event2.source : event2.player;
          if (!target2?.isIn() || !game.hasPlayer((current) => current.hasSkill("mark_shouli"))) {
            return false;
          }
          const jun = target2.countMark("mark_shouli_jun"), li = target2.countMark("mark_shouli_li");
          if (name == "damageBegin4") {
            if (jun + li <= 0) {
              return false;
            }
            if (event2.hasNature()) {
              return true;
            }
            return event2.card?.name && ["wanjian", "nanman"].includes(event2.card.name);
          }
          if (name == "useCardToPlayer") {
            return event2.card?.name == "sha" && jun > 2;
          }
          if (event2.name == "damage") {
            return li > 2;
          }
          return (jun > 1 || li > 1) && !event2.numFixed;
        },
        async cost(event2, trigger, player2) {
          event2.result = {
            bool: true,
            skill_popup: false
          };
        },
        async content(event2, trigger, player2) {
          const name = event2.triggername, target2 = trigger[name == "damageBegin1" ? "source" : "player"], jun = target2.countMark("mark_shouli_jun"), li = target2.countMark("mark_shouli_li"), num = game.countPlayer((current) => current.hasSkill("mark_shouli"));
          switch (name) {
            case "phaseDrawBegin2": {
              if (jun > 1) {
                trigger.num += num;
              }
              if (li > 1) {
                trigger.num += num;
              }
              break;
            }
            case "useCardToPlayer": {
              trigger.target.addTempSkill("fengyin");
              break;
            }
            case "damageBegin1": {
              if (li > 2) {
                game.setNature(trigger, "thunder");
              }
              if (li > 3) {
                trigger.num += num;
              }
              break;
            }
            case "damageBegin3": {
              if (li > 2) {
                game.setNature(trigger, "thunder");
              }
              if (li > 3) {
                trigger.num += num;
              }
              break;
            }
            default: {
              if (jun > 0 && target2.getPrevious()?.isIn() && target2.getPrevious() != target2) {
                get.info("mark_shouli").changeMark(target2, target2.getPrevious(), "mark_shouli_jun");
              }
              if (li > 0 && target2.getNext()?.isIn() && target2.getNext() != target2) {
                get.info("mark_shouli").changeMark(target2, target2.getNext(), "mark_shouli_li");
              }
              break;
            }
          }
        },
        locked: false,
        mod: {
          globalFrom(from, to, distance) {
            if (!from.countMark("mark_shouli_jun")) {
              return;
            }
            const num = game.countPlayer((current) => current.hasSkill("mark_shouli"));
            return distance - num;
          },
          globalTo(from, to, distance) {
            if (!to.countMark("mark_shouli_li")) {
              return;
            }
            const num = game.countPlayer((current) => current.hasSkill("mark_shouli"));
            return distance + num;
          }
        }
      },
      used: {
        charlotte: true,
        onremove: true
      },
      backup: {
        async precontent(event2, trigger, player2) {
          event2.result._apply_args = { addSkillCount: false };
          player2.popup(event2.result.card.name, "metal");
          await game.delayx();
          event2.getParent().addCount = false;
        },
        filterCard: () => false,
        prompt: "请选择【杀】的目标",
        selectCard: -1,
        log: false
      },
      init: {
        audio: "mark_shouli",
        trigger: {
          player: "enterGame",
          global: "phaseBefore"
        },
        filter(event2, player2) {
          if (!game.hasPlayer((current) => current != player2)) {
            return false;
          }
          return event2.name != "phase" || game.phaseNumber == 0;
        },
        async cost(event2, trigger, player2) {
          event2.result = {
            bool: true,
            targets: game.filterPlayer((current) => current != player2)
          };
        },
        async content(event2, trigger, player2) {
          let marks = [];
          for (let i = 0; i < 4; i++) {
            marks.push("mark_shouli_li");
            if (i < 3) {
              marks.push("mark_shouli_jun");
            }
          }
          for (const target2 of event2.targets) {
            if (!marks.length) {
              break;
            }
            const mark = marks.randomRemove();
            await get.info("mark_shouli").addMark(target2, mark);
          }
        }
      },
      jun: {
        markimage2: "image/card/chitu.png",
        nopop: true,
        intro: {
          name: "骏",
          content(storage, player2) {
            const list = ["⚡你计算与其他角色的距离-1", "⚡摸牌阶段你额外摸一张牌", "⚡你使用【杀】指定目标时，令其本回合非锁定技失效"];
            let str = "⚡当你受到属性伤害或【南蛮入侵】、【万箭齐发】造成的伤害时，你将所有“骏”移动至你上家";
            if (typeof storage != "number" || storage <= 0) {
              return str;
            }
            return `${str}<br>${list.slice(0, storage).join("<br>")}`;
          }
        }
      },
      li: {
        markimage2: "image/card/dilu.png",
        nopop: true,
        intro: {
          name: "骊",
          content(storage, player2) {
            const list = [
              "⚡其他角色计算与你的距离+1",
              "⚡摸牌阶段你额外摸一张牌",
              "⚡你造成或受到的伤害视为雷电伤害",
              "⚡你造成或受到的伤害+1"
            ];
            let str = "⚡当你受到属性伤害或【南蛮入侵】、【万箭齐发】造成的伤害时，你将所有“骊”移动至你下家";
            if (typeof storage != "number" || storage <= 0) {
              return str;
            }
            return `${str}<br>${list.slice(0, storage).join("<br>")}`;
          }
        }
      }
    }
  },
  mark_hengwu: {
    audio: "hengwu",
    trigger: {
      global: "gainShouli"
    },
    filter(event2, player2) {
      const mark = event2.mark;
      return event2.hasMark && event2.player.countMark(mark);
    },
    forced: true,
    logTarget: "player",
    async content(event2, trigger, player2) {
      await player2.draw(trigger.player.countMark(trigger.mark));
    },
    ai: {
      combo: "mark_shouli"
    }
  },
  //渭南神马超
  wn_qiangshu: {
    trigger: {
      source: "damageBegin1"
    },
    filter(event2, player2) {
      if (!event2.card || !["sha", "juedou"].includes(event2.card.name)) {
        return false;
      }
      const num = player2.getAttackRange() - 1;
      return num > 0 && player2.countCards("he") >= num;
    },
    async cost(event2, trigger, player2) {
      const num = player2.getAttackRange() - 1;
      event2.result = await player2.chooseToDiscard("he", get.prompt2(event2.skill), num).set("chooseonly", true).set("ai", (card2) => {
        const trigger2 = get.event().getTrigger(), player3 = get.player();
        if (get.damageEffect(trigger2.player, trigger2.source, player3) <= 0) {
          return 0;
        }
        return 7 - get.value(card2);
      }).forResult();
      event2.result.targets = [trigger.player];
    },
    async content(event2, trigger, player2) {
      await player2.discard(event2.cards);
      trigger.num += event2.cards.length;
    }
  },
  wn_yuma: {
    trigger: {
      global: ["loseAfter", "loseAsyncAfter", "cardsDiscardAfter", "equipAfter"]
    },
    usable: 1,
    filter(event2, player2) {
      if (!event2.getd) {
        return false;
      }
      let cards2 = event2.getd();
      return cards2.some((card2) => {
        if (get.position(card2) != "d" || get.type(card2) != "equip") {
          return false;
        }
        if (card2.willBeDestroyed("discardPile", get.owner(card2), event2)) {
          return false;
        }
        return game.hasPlayer((current) => {
          return current.canEquip(card2, true);
        });
      });
    },
    async cost(event2, trigger, player2) {
      const cards2 = trigger.getd().filter((card2) => {
        if (get.position(card2) != "d" || get.type(card2) != "equip") {
          return false;
        }
        if (card2.willBeDestroyed("discardPile", get.owner(card2), trigger)) {
          return false;
        }
        return true;
      });
      const { bool, targets, links } = await player2.chooseButtonTarget({
        createDialog: [get.prompt2(event2.skill), cards2],
        filterTarget(card2, player3, target2) {
          const buttons = ui.selected.buttons;
          if (!buttons.length) {
            return false;
          }
          return target2.canEquip(buttons[0].link, true);
        },
        ai1(button) {
          return 20 - get.value(button.link);
        },
        ai2(target2) {
          const player3 = get.player();
          const card2 = ui.selected.buttons[0]?.link;
          if (!card2) {
            return 0;
          }
          if (!target2.countCards("h")) {
            return get.value(card2, target2) * get.attitude(player3, target2);
          }
          return (get.value(card2, target2) - 2 * target2.countCards("h")) * get.attitude(player3, target2);
        }
      }).forResult();
      event2.result = {
        bool,
        targets,
        cards: links
      };
    },
    async content(event2, trigger, player2) {
      const {
        targets: [target2],
        cards: [card2]
      } = event2;
      target2.$gain2(card2);
      await game.delay();
      await target2.equip(card2);
      const num = target2.countCards("h");
      if (num > 0 && target2 != player2) {
        await player2.gainPlayerCard(target2, true, "h", num);
      }
    }
  },
  //渭南神许褚
  wn_zhuanzhan: {
    trigger: {
      global: "phaseZhunbeiBegin"
    },
    filter(event2, player2) {
      if (event2.player == player2 || !player2.hasEnabledSlot()) {
        return false;
      }
      const card2 = new lib.element.VCard({ name: "juedou", isCard: true });
      return player2.canUse(card2, event2.player);
    },
    async cost(event2, trigger, player2) {
      let list = [];
      for (let i = 1; i <= 5; i++) {
        const slot = `equip${i}`;
        if (player2.hasEnabledSlot(slot)) {
          list.push("equip" + i);
        }
      }
      list.push("cancel2");
      let bool = "cancel2";
      const card2 = new lib.element.VCard({ name: "juedou", isCard: true });
      if (get.effect(trigger.player, card2, player2, player2) > 0) {
        bool = list.filter((i) => i != "cancel2").randomGet();
      }
      const result2 = await player2.chooseControl(list).set("prompt", get.prompt2(event2.skill)).set("ai", () => get.event().bool).set("bool", bool).forResult();
      event2.result = {
        bool: result2.control != "cancel2",
        targets: [trigger.player],
        cost_data: result2.control
      };
    },
    async content(event2, trigger, player2) {
      const slot = event2.cost_data;
      await player2.disableEquip([slot]);
      const card2 = new lib.element.VCard({ name: "juedou", isCard: true });
      if (player2.canUse(card2, trigger.player)) {
        await player2.useCard(card2, trigger.player);
      }
    }
  },
  wn_huwei: {
    trigger: {
      player: "phaseDrawBegin2"
    },
    forced: true,
    filter(event2, player2) {
      let list = Array.from({ length: 13 }).map((_, i) => "equip" + parseFloat(i + 1));
      list = list.filter((i) => player2.hasDisabledSlot(i));
      return !event2.numFixed && list.length;
    },
    async content(event2, trigger, player2) {
      let list = Array.from({ length: 13 }).map((_, i) => "equip" + parseFloat(i + 1));
      let num = list.reduce((sum, slot) => sum + player2.countDisabledSlot(slot), 0);
      trigger.num += num;
    }
  },
  //汉末神王允
  caanchao: {
    trigger: {
      global: "phaseAfter"
    },
    frequent: true,
    filter(event2, player2) {
      return game.hasPlayer2((current) => {
        return current.hasHistory("useCard", (evt) => {
          return get.is.convertedCard(evt.card) || get.is.virtualCard(evt.card);
        });
      }, true);
    },
    async content(event2, trigger, player2) {
      await player2.draw();
      player2.addCharge();
    }
  },
  cayurong: {
    trigger: { target: "useCardToTarget" },
    filter(event2, player2) {
      if (!get.is.damageCard(event2.card)) {
        return false;
      }
      if (player2.getStorage("cayurong_targeted").includes(event2.card.name)) {
        return false;
      }
      return true;
    },
    forced: true,
    async content(event2, trigger, player2) {
      trigger.getParent().excluded.add(player2);
      player2.addTempSkill("cayurong_targeted", "roundStart");
      player2.markAuto("cayurong_targeted", [trigger.card.name]);
    },
    subSkill: {
      targeted: {
        onremove: true,
        charlotte: true
      }
    }
  },
  cadingxi: {
    chargeSkill: Infinity,
    locked: false,
    enable: "chooseToUse",
    getCanUse(event2, player2) {
      return lib.inpile.filter((i) => event2.filterCard(get.autoViewAs({ name: i }, "unsure"), player2, event2));
    },
    hiddenCard(player2, name) {
      if (lib.inpile.includes(name)) {
        return player2.countCharge();
      }
    },
    filter(event2, player2) {
      if (event2.responded || !player2.countCharge()) {
        return false;
      }
      return lib.skill["cadingxi"].getCanUse(event2, player2).length;
    },
    chooseButton: {
      dialog(event2, player2) {
        const list = lib.skill["cadingxi"].getCanUse(event2, player2).map((name) => get.type2(name)).unique();
        const dialog = ui.create.dialog("定西", [list.map((type) => ["", "", "caoying_" + type]), "vcard"]);
        dialog.direct = true;
        return dialog;
      },
      check(event2, player2) {
        return Math.random();
      },
      backup(links, player2) {
        const type = links[0][2].slice(8);
        return {
          type,
          filterCard: () => false,
          selectCard: -1,
          popname: true,
          async content(event2, trigger, player3) {
            const type2 = lib.skill[event2.name].type, evt = event2.getParent(2), filterCard = evt.name == "_wuxie" ? (card3, player4, event3) => card3.name == "wuxie" : evt.filterCard;
            player3.removeCharge();
            const cards2 = get.cards(1, true), card2 = cards2[0];
            await player3.showCards(cards2, `${get.translation(player3)}发动了【定西】`);
            let key;
            switch (evt.name) {
              case "_wuxie":
                key = "wuxieresult2";
                break;
              default:
                key = "result";
            }
            if (get.type2(card2) == type2) {
              event2.getParent().set("cadingxi_result", true);
              const history = player3.getAllHistory("useSkill", (evt2) => evt2.skill == event2.name);
              const list = history.slice(-Math.min(3, history.length)).map((evt2) => evt2.event.cadingxi_result);
              if (list.slice(-2).length >= 2 && !list.slice(-2).some((i) => !i)) {
                await player3.recoverTo(player3.maxHp);
              }
              if (list.length >= 3 && !list.some((i) => !i)) {
                const damage = async (target2) => {
                  await target2.damage();
                };
                const targets = game.filterPlayer((target2) => target2 != player3);
                player3.line(targets);
                await game.doAsyncInOrder(targets, damage);
              }
              if (filterCard(get.autoViewAs(card2), player3, evt)) {
                if (evt.name == "chooseToUse") {
                  game.broadcastAll(
                    (result2, name) => {
                      lib.skill.cadingxi_backup2.viewAs = { name, cards: [result2], isCard: true };
                    },
                    card2,
                    card2.name
                  );
                  evt.set("_backupevent", "cadingxi_backup2");
                  evt.set("openskilldialog", "请选择" + get.translation(card2) + "的目标");
                  evt.backup("cadingxi_backup2");
                } else {
                  delete evt[key].used;
                  evt[key].card = get.autoViewAs(card2);
                  evt[key].cards = [card2];
                  delete evt[key].skill;
                  evt.redo();
                  return;
                }
              }
            } else {
              event2.getParent().set("cadingxi_result", false);
              await player3.draw("bottom");
            }
            evt.goto(0);
          }
        };
      }
    },
    mod: {
      aiOrder(player2, card2, num) {
        if (typeof card2 == "object" && player2.isPhaseUsing()) {
          let evt = lib.skill.dcjianying.getLastUsed(player2);
          if (evt && evt.card && get.type2(evt.card) && get.type2(evt.card) == get.type2(card2)) {
            return num + 10;
          }
        }
      }
    },
    group: "cadingxi_init",
    subSkill: {
      backup2: {
        async precontent(event2, trigger, player2) {
          const name = event2.result?.card?.name;
          const cards2 = event2.result.card?.cards.slice(0);
          event2.result.cards = cards2;
          const rcard = cards2[0];
          let card2;
          if (rcard.name == name) {
            card2 = get.autoViewAs(rcard);
          } else {
            card2 = get.autoViewAs({ name, isCard: true });
          }
          event2.result.card = card2;
        },
        filterCard: () => false,
        selectCard: -1,
        log: false
      },
      backup: {},
      init: {
        trigger: {
          player: "enterGame",
          global: "phaseBefore"
        },
        filter(event2, player2) {
          if (!player2.countCharge(true)) {
            return false;
          }
          return event2.name != "phase" || game.phaseNumber == 0;
        },
        forced: true,
        locked: false,
        async content(event2, trigger, player2) {
          player2.addCharge(4);
        }
      }
    }
  },
  //汉末神曹
  cazhaoshao: {
    trigger: {
      player: "damageEnd",
      source: "damageSource"
    },
    getIndex(event2) {
      return event2.num;
    },
    frequent: true,
    async content(event2, trigger, player2) {
      await player2.draw();
      let targets = [], target2;
      for (let current of [trigger.source, trigger.player]) {
        if (current?.isIn()) {
          targets.add(current);
        }
      }
      if (!targets.length) {
        return;
      }
      if (targets.length > 1) {
        const result2 = await player2.chooseTarget("选择执行【诏绍】的目标", true, (card2, player3, target3) => {
          const trigger2 = get.event().getTrigger();
          return target3 == trigger2.player || target3 == trigger2.source;
        }).set("ai", (target3) => {
          const player3 = get.player();
          return get.attitude(player3, target3) * (Math.random() - 0.5);
        }).forResult();
        if (!result2.bool) {
          return;
        }
        target2 = result2.targets[0];
      } else {
        target2 = targets[0];
      }
      player2.line(target2, "green");
      let choices = ["获得弃牌堆或场上一张装备牌并使用", "翻面并摸一张牌", "减少1点体力上限"];
      const { control } = await player2.chooseControl().set("choiceList", choices).set("prompt", `令${get.translation(target2)}执行一项`).set("target", target2).set("ai", () => {
        const { player: player3, target: target3 } = get.event();
        let eff = 1;
        for (let current of game.players) {
          if (current == target3) {
            continue;
          }
          eff += get.effect(current, { name: "losehp" }, current, player3);
        }
        if (target3.hasSkill("caxiaoxiong") && eff > 0) {
          return "选项二";
        }
        if (get.attitude(player3, target3) > 0) {
          return target3.isTurnedOver() ? "选项二" : "选项一";
        }
        if (!target3.isTurnedOver() && Math.random() < 0.2) {
          return "选项二";
        }
        return "选项三";
      }).forResult();
      switch (control) {
        case "选项一": {
          let bool = false, equip;
          if (game.hasPlayer((current) => {
            return current.countGainableCards(target2, "e");
          })) {
            const result2 = await target2.chooseTarget("获得场上的一张装备牌，或点取消从弃牌堆获得一张装备牌", (card2, player3, target3) => {
              return target3.countGainableCards(player3, "e");
            }).set("ai", (target3) => {
              const player3 = get.player();
              if (get.attitude(player3, target3) < 0) {
                if (target3.countCards("e", (card2) => get.value(card2, player3) >= 6)) {
                  return 12;
                }
                return 0;
              }
              return 0;
            }).forResult();
            if (result2.bool) {
              bool = result2.targets[0];
            }
          }
          if (bool) {
            const result3 = await target2.gainPlayerCard(bool, "e", true).forResult();
            equip = result3.links[0];
          } else {
            equip = get.discardPile((card2) => get.type(card2) == "equip" && get.subtypes(card2)?.length);
            if (equip) {
              await target2.gain(equip, "gain2");
            } else {
              break;
            }
            game.updateRoundNumber();
          }
          target2.addSkill("cazhaoshao_equip");
          if (target2.getStorage("cazhaoshao_equip").length) {
            let list = target2.getStorage("cazhaoshao_equip"), equips = target2.getCards("e", (card2) => list[1].includes(card2));
            if (equips.length) {
              await target2.loseToDiscardpile(equips);
            }
          }
          const subtypes = get.subtypes(equip);
          await target2.expandEquip(subtypes);
          await target2.equip(equip);
          target2.setStorage("cazhaoshao_equip", [subtypes, [equip]]);
          break;
        }
        case "选项二": {
          await target2.turnOver();
          await target2.draw();
          break;
        }
        case "选项三": {
          await target2.loseMaxHp();
          break;
        }
      }
    },
    closeEquip() {
      const next = game.createEvent("closenEquip");
      next.slots = [];
      for (let i = 0; i < arguments.length; i++) {
        if (get.itemtype(arguments[i]) == "player") {
          if (!next.player) {
            next.player = arguments[i];
          } else {
            next.source = arguments[i];
          }
        } else if (Array.isArray(arguments[i])) {
          for (var arg of arguments[i]) {
            if (typeof arg == "string") {
              if (arg.startsWith("equip") && parseInt(arg.slice(5)) > 0) {
                next.slots.push(arg);
              }
            } else if (typeof arg == "number") {
              next.slots.push("equip" + arg);
            }
          }
        } else if (typeof arguments[i] == "string") {
          if (arguments[i].startsWith("equip") && parseInt(arguments[i].slice(5)) > 0) {
            next.slots.push(arguments[i]);
          }
        } else if (typeof arguments[i] == "number") {
          next.slots.push("equip" + arguments[i]);
        }
      }
      if (!next.player) {
        next.player = get.player();
      }
      if (!next.source) {
        next.source = get.player();
      }
      if (!next.slots.length) {
        _status.event.next.remove(next);
        next.resolve();
      }
      next.setContent(lib.skill.cazhaoshao.closenEquip);
      return next;
    },
    async closenEquip(event2, trigger, player2) {
      let slotsx = [];
      if (get.is.mountCombined()) {
        event2.slots.forEach((type) => {
          if (type == "equip3" || type == "equip4") {
            slotsx.add("equip3_4");
          } else {
            slotsx.add(type);
          }
        });
      } else {
        slotsx.addArray(event2.slots);
      }
      slotsx.sort();
      for (var slot of slotsx) {
        var expand = get.numOf(event2.slots, slot), slot_key = slot;
        if (slot == "equip3_4") {
          expand = Math.max(get.numOf(event2.slots, "equip3"), get.numOf(event2.slots, "equip4"));
          slot_key = "equip3";
        }
        game.log(player2, "失去了" + get.cnNumber(expand) + "个额外的", "#g" + get.translation(slot) + "栏");
        if (!player2.expandedSlots) {
          player2.expandedSlots = {};
        }
        if (!player2.expandedSlots[slot_key]) {
          player2.expandedSlots[slot_key] = 0;
        }
        player2.expandedSlots[slot_key] -= expand;
      }
      player2.$syncExpand();
    },
    subSkill: {
      equip: {
        charlotte: true,
        trigger: {
          player: "loseAfter",
          global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"]
        },
        filter(event2, player2) {
          if (!player2.getStorage("cazhaoshao_equip").length) {
            return false;
          }
          const evt = event2.getl(player2), list = player2.getStorage("cazhaoshao_equip");
          if (evt?.player === player2 && evt.es) {
            return evt.es.some((card2) => list[1].includes(card2));
          }
        },
        direct: true,
        forced: true,
        async content(event2, trigger, player2) {
          await lib.skill.cazhaoshao.closeEquip(player2, player2.getStorage("cazhaoshao_equip")[0]);
          player2.setStorage("cazhaoshao_equip", []);
        },
        mod: {
          canBeReplaced(card2, player2) {
            const list = player2.getStorage("cazhaoshao_equip");
            if (!list.length) {
              return;
            }
            const cards2 = player2.getVCards("e", (card3) => (card3?.cards || []).some((cardx) => list[1].includes(cardx)));
            if (cards2 && cards2.includes(card2)) {
              return false;
            }
          }
        },
        sub: true
      }
    }
  },
  caxiaoxiong: {
    trigger: {
      player: "turnOverBegin"
    },
    forced: true,
    async content(event2, trigger, player2) {
      trigger.cancel();
      const targets = game.players.sortBySeat().slice();
      for (let target2 of targets) {
        if (target2 == player2) {
          continue;
        }
        await target2.loseHp();
      }
    }
  },
  //神李郭
  caweijue: {
    forced: true,
    trigger: {
      player: "phaseZhunbeiBegin"
    },
    async content(event2, trigger, player2) {
      let target2 = player2.getNext();
      while (target2 != player2) {
        if (!target2.countCards("h")) {
          target2 = target2.getNext();
          continue;
        }
        const result2 = await target2.chooseCard("h", "将任意张手牌当作“威”置于武将牌上", [1, Infinity], true, "allowChooseAll").set("ai", () => {
          return -1;
        }).forResult();
        if (result2.bool) {
          const cards2 = result2.cards;
          const next = target2.addToExpansion(cards2, "giveAuto", target2);
          next.gaintag.add("caweijue_tag");
          await next;
          target2.addSkill("caweijue_tag");
        }
        target2 = target2.getNext();
      }
    },
    mod: {
      inRangeOf(from, to) {
        const num1 = from.countExpansions("caweijue_tag"), num2 = from.countCards("h");
        if (num1 <= num2) {
          return true;
        }
      },
      inRange(from, to) {
        const num1 = to.countExpansions("caweijue_tag"), num2 = to.countCards("h");
        if (num1 <= num2) {
          return true;
        }
      }
    },
    subSkill: {
      tag: {
        trigger: {
          global: "phaseEnd"
        },
        forced: true,
        popup: false,
        charlotte: true,
        filter(event2, player2) {
          return player2.getExpansions("caweijue_tag").length > 0;
        },
        async content(event2, trigger, player2) {
          const cards2 = player2.getExpansions("caweijue_tag");
          await player2.gain(cards2, "draw");
          game.log(player2, "收回了" + get.cnNumber(cards2.length) + "张“威”牌");
          player2.removeSkill("caweijue_tag");
        },
        marktext: "威",
        intro: {
          content: "expansion",
          markcount: "expansion"
        }
      }
    }
  },
  cachuxiong: {
    trigger: {
      player: "phaseUseBegin"
    },
    filter(event2, player2) {
      return player2.countCards("h");
    },
    check(event2, player2) {
      const colors = player2.getCards("h").map((card2) => get.color(card2, player2)).toUniqued();
      for (let color of colors) {
        if (lib.skill.cachuxiong.getVal(color, player2) > 0) {
          return true;
        }
      }
      return false;
    },
    getVal(color, player2) {
      let val = 0, cards2 = player2.getCards("h", { color });
      val -= cards2.length;
      if (color == "black") {
        val += Math.min(
          cards2.length,
          game.players.reduce((sum, current) => {
            if (get.attitude(player2, current) > 0) {
              return sum;
            }
            return sum + current.countExpansions("caweijue_tag");
          }, 0)
        );
        val++;
      } else if (color == "red") {
        val += game.players.reduce((sum, current) => {
          if (!player2.inRange(current) || player2 == current) {
            return sum;
          }
          return sum + get.damageEffect(current, player2, player2);
        }, 0);
      }
      return val;
    },
    async content(event2, trigger, player2) {
      await player2.showHandcards(`${get.translation(player2)}发动了【除凶】`);
      let colors = player2.getCards("h").map((card2) => get.color(card2, player2)).toUniqued();
      if (!colors.length) {
        return;
      }
      colors.sort((a, b) => lib.skill.cachuxiong.getVal(b, player2) - lib.skill.cachuxiong.getVal(a, player2));
      const result2 = await player2.chooseControl(colors).set("prompt", "弃置一种颜色的所有手牌").set("resultC", colors[0]).set("ai", () => {
        return get.event().resultC;
      }).forResult();
      if (result2.control) {
        const color = result2.control, cards2 = player2.getDiscardableCards(player2, "h").filter((card2) => get.color(card2, player2) == color);
        if (cards2.length) {
          await player2.discard(cards2);
        }
        if (color == "black") {
          let num = cards2.length;
          while (num > 0) {
            const result22 = await player2.chooseTarget("获得一名角色的“威”", true, (card2, player3, target3) => {
              return target3.countExpansions("caweijue_tag");
            }).set("ai", (target3) => {
              const player3 = get.player();
              return -get.attitude(player3, target3);
            }).forResult();
            if (!result22.bool) {
              break;
            }
            const target2 = result22.targets[0];
            const result3 = await player2.chooseCardButton(`选择获得至多${get.cnNumber(num)}张“威”`, [1, num], target2.getExpansions("caweijue_tag"), true).forResult();
            if (!result3.bool) {
              break;
            }
            const cards3 = result3.links;
            player2.line(target2);
            await player2.gain(cards3, "give", target2, "bySelf");
            num -= cards3.length;
            if (!game.hasPlayer((current) => current.countExpansions("caweijue_tag"))) {
              break;
            }
          }
        } else if (color == "red") {
          const targets = game.filterPlayer((current) => {
            return current != player2 && player2.inRange(current);
          }).sortBySeat();
          if (targets.length) {
            for (let target2 of targets) {
              await target2.damage();
            }
          }
        }
      }
    }
  },
  //神钟会 —— by 刘巴
  dclinjie: {
    group: "dclinjie_effect",
    marktext: "凛",
    intro: {
      name: "凛界（凛）",
      name2: "凛",
      content: "mark"
    },
    audio: 2,
    trigger: {
      global: "roundStart"
    },
    filter(event2, player2) {
      return game.hasPlayer((target2) => !target2.hasMark("dclinjie"));
    },
    async cost(event2, trigger, player2) {
      event2.result = await player2.chooseTarget(
        `###${get.prompt(event2.skill)}###对一名没有「凛」的角色造成1点伤害然后令其获得一个「凛」标记`,
        (card2, player3, target2) => !target2.hasMark("dclinjie")
      ).set("ai", (target2) => {
        return get.damageEffect(target2, get.player(), get.player());
      }).forResult();
    },
    async content(event2, trigger, player2) {
      const target2 = event2.targets[0];
      await target2.damage();
      target2.addMark(event2.name, 1);
    },
    subSkill: {
      effect: {
        audio: "dclinjie",
        trigger: {
          global: "damageEnd"
        },
        forced: true,
        locked: false,
        filter(event2, player2) {
          const target2 = event2.player;
          return target2 !== player2 && target2.hasMark("dclinjie") && target2.countDiscardableCards(target2, "h");
        },
        logTarget: "player",
        async content(event2, trigger, player2) {
          let target2 = trigger.player;
          let hs = target2.getDiscardableCards(target2, "h");
          if (hs.length) {
            const damage = target2.countCards("h") == 1;
            await target2.discard(hs.randomGet());
            if (damage) {
              await target2.damage();
              target2.clearMark("dclinjie");
            }
          }
        }
      }
    }
  },
  dcduzhang: {
    audio: 2,
    usable: 1,
    mod: {
      maxHandcard(player2, num) {
        return num += player2.countMark("dclinjie");
      }
    },
    trigger: {
      player: "useCardToPlayered",
      target: "useCardToTargeted"
    },
    filter(event2, player2) {
      if (get.color(event2.card) !== "black") {
        return false;
      }
      return (player2 === event2.player || event2.targets.includes(player2)) && event2.targets.length === 1;
    },
    locked: false,
    frequent: true,
    async content(event2, trigger, player2) {
      player2.addMark("dclinjie", 1);
      await player2.draw();
    }
  },
  dcjianghuo: {
    derivation: ["dclishi"],
    skillAnimation: true,
    animationColor: "fire",
    audio: 2,
    juexingji: true,
    forced: true,
    trigger: { player: "phaseBegin" },
    filter(event2, player2) {
      return !game.hasPlayer((current) => !current.hasAllHistory("damage", (evt) => evt.num));
    },
    async content(event2, trigger, player2) {
      player2.awakenSkill(event2.name);
      const num = game.filterPlayer((target2) => target2 !== player2 && target2.hasMark("dclinjie")).map((target2) => target2.countMark("dclinjie")).reduce((sum, cur) => sum + cur, 0);
      game.filterPlayer((target2) => target2 !== player2).forEach((target2) => target2.clearMark("dclinjie"));
      if (num > 0) {
        player2.addMark("dclinjie", num);
      }
      await player2.draw(player2.countMark("dclinjie"));
      await player2.gainMaxHp();
      await player2.removeSkills("dclinjie");
      await player2.addSkills("dclishi");
      player2.markSkill("dclinjie");
    }
  },
  dclishi: {
    audio: 2,
    locked: true,
    trigger: {
      player: "phaseJieshuBegin"
    },
    async cost(event2, trigger, player2) {
      if (!player2.hasMark("dclinjie")) {
        event2.result = {
          bool: true,
          cost_data: "damage"
        };
      } else {
        const num = player2.countMark("dclinjie");
        const result2 = await player2.chooseButton([
          "立世：你需移除任意「凛」标记然后执行等量个选项",
          [
            [
              ["fengyin", "令所有其他角色于下个准备和结束阶段期间非锁定技失效"],
              ["judge", "令所有其他角色于下个判定阶段开始时在【闪电】.【乐不思蜀】和【兵粮寸断】中选择两个并依次进行判定。"],
              ["discard", "令所有其他角色于下个摸牌阶段期间内摸到的牌若颜色相同，则全部弃置。"],
              ["use", "令所有其他角色于下个出牌阶段每种类型的牌仅能使用一张"],
              ["gain", "令所有其他角色于下个弃牌阶段期间内弃置牌后你获得之"]
            ],
            "textbutton"
          ]
        ]).set("ai", (button) => {
          get.player();
          if (button.link === "fengyin") {
            return 1.5;
          } else if (button.link === "judge") {
            return 1;
          } else if (button.link === "discard") {
            return 3;
          } else if (button.link === "use") {
            return 4;
          } else if (button.link === "gain") {
            return 8;
          }
        }).set("forced", true).set("selectButton", [1, num]).forResult();
        event2.result = {
          bool: result2.bool,
          cost_data: result2.links
        };
      }
    },
    async content(event2, trigger, player2) {
      const choices = event2.cost_data;
      if (choices === "damage") {
        await player2.damage("thunder");
        return;
      }
      player2.removeMark("dclinjie", choices.length);
      const targets = game.filterPlayer((target2) => target2 != player2);
      player2.line(targets);
      if (choices.includes("fengyin")) {
        game.log(player2, "选择了", "#y准备阶段、结束阶段", "的效果");
        for (const target2 of targets) {
          target2.when({ player: "phaseJieshuBefore" }).step(async () => target2.addTempSkill("fengyin", ["phaseBefore", "phaseChange", "phaseAfter"]));
          target2.when({ player: "phaseZhunbeiBefore" }).step(async () => target2.addTempSkill("fengyin", ["phaseBefore", "phaseChange", "phaseAfter"]));
        }
      }
      if (choices.includes("judge")) {
        game.log(player2, "选择了", "#y判定阶段", "的效果");
        for (const target2 of targets) {
          target2.when({ player: "phaseJudgeBegin" }).step(async (event3, trigger2, player3) => {
            const result2 = await player3.chooseVCardButton(["lebu", "bingliang", "shandian"], "立世：请选择两个延时锦囊并依次进行判定", 2, true).set("ai", (button) => {
              const player4 = get.player();
              return get.info({ name: button.link[2] }).ai.result.target(player4, player4);
            }).forResult();
            if (result2?.links.length) {
              const links = result2.links;
              for (let i = 0; i < links.length; i++) {
                await target2.executeDelayCardEffect(links[i][2]);
              }
            }
          });
        }
      }
      if (choices.includes("discard")) {
        game.log(player2, "选择了", "#y摸牌阶段", "的效果");
        for (const target2 of targets) {
          target2.addTempSkill("dclishi_discard", { player: "phaseDrawAfter" });
        }
      }
      if (choices.includes("use")) {
        game.log(player2, "选择了", "#y出牌阶段", "的效果");
        for (const target2 of targets) {
          target2.addTempSkill("dclishi_limit", { player: "phaseUseAfter" });
        }
      }
      if (choices.includes("gain")) {
        game.log(player2, "选择了", "#y弃牌阶段", "的效果");
        for (const target2 of targets) {
          target2.addTempSkill("dclishi_gain", { player: "phaseDiscardAfter" });
          target2.markAuto("dclishi_gain", player2);
        }
      }
    },
    subSkill: {
      gain: {
        trigger: {
          player: ["loseAfter"],
          global: ["loseAsyncAfter"]
        },
        charlotte: true,
        forced: true,
        popup: false,
        onremove: true,
        filter(event2, player2) {
          if (event2.type !== "discard") {
            return false;
          }
          const evt = event2.getParent("phaseDiscard");
          const evt2 = event2.getl(player2);
          return evt?.name === "phaseDiscard" && evt?.player === player2 && evt2?.cards2?.filterInD("d");
        },
        async content(event2, trigger, player2) {
          const gainer = player2.getStorage(event2.name).sortBySeat().find((target2) => target2.isIn());
          if (gainer) {
            await gainer.gain(trigger.getl(player2).cards2.filterInD("d"), "gain2");
          }
        }
      },
      limit: {
        charlotte: true,
        onremove: true,
        trigger: { player: "useCard1" },
        silent: true,
        firstDo: true,
        filter(event2, player2) {
          return player2.isPhaseUsing();
        },
        async content(event2, trigger, player2) {
          player2.markAuto(event2.name, get.type2(trigger.card));
        },
        mod: {
          cardEnabled(card2, player2) {
            const type = get.type2(card2);
            if (player2.getStorage("dclishi_limit").includes(type)) {
              return false;
            }
          },
          cardSavable(card2, player2) {
            const type = get.type2(card2);
            if (player2.getStorage("dclishi_limit").includes(type)) {
              return false;
            }
          }
        }
      },
      discard: {
        charlotte: true,
        forced: true,
        popup: false,
        trigger: {
          player: ["gainAfter"]
        },
        filter(event2, player2) {
          const evt = event2.getParent("phaseDraw");
          const cards2 = event2.getg?.(player2);
          return event2.getParent()?.name == "draw" && evt?.name === "phaseDraw" && evt?.player === player2 && cards2.map((card2) => get.color(card2)).unique().length == 1;
        },
        async content(event2, trigger, player2) {
          const cards2 = trigger.getg(player2);
          await player2.modedDiscard(cards2);
        }
      }
    }
  },
  //神庞统
  //复活神将
  luansuo: {
    audio: 2,
    trigger: { player: "phaseBegin" },
    filter(event2, player2) {
      return game.hasPlayer((target2) => target2.countCards("h"));
    },
    forced: true,
    logTarget(event2, player2) {
      return game.filterPlayer((target2) => target2.countCards("h"));
    },
    async content(event2, trigger, player2) {
      for (const target2 of event2.targets) {
        target2.addTempSkill("luansuo_debuff");
        target2.addGaintag(target2.getCards("h"), "luansuo_debuff");
      }
    },
    global: "luansuo_discard",
    subSkill: {
      discard: {
        mod: {
          cardDiscardable(card2) {
            if (_status.currentPhase?.hasSkill("luansuo") && get.position(card2) === "h") {
              return false;
            }
          },
          canBeDiscarded(card2) {
            if (_status.currentPhase?.hasSkill("luansuo") && get.position(card2) === "h") {
              return false;
            }
          }
        }
      },
      debuff: {
        mod: {
          cardname(card2) {
            if (get.itemtype(card2) !== "card" || get.position(card2) !== "h") {
              return;
            }
            if (card2.hasGaintag("luansuo_debuff")) {
              return "tiesuo";
            }
          },
          cardnature(card2) {
            if (get.itemtype(card2) !== "card" || get.position(card2) !== "h") {
              return;
            }
            if (card2.hasGaintag("luansuo_debuff")) {
              return false;
            }
          },
          aiOrder(player2, card2, num) {
            if (num > 0 && get.name(card2, player2) === "huogong") {
              return 0;
            }
          },
          aiValue(player2, card2, num) {
            if (num > 0 && get.name(card2, player2) === "huogong") {
              return 0.01;
            }
          },
          aiUseful(player2, card2, num) {
            if (num > 0 && get.name(card2, player2) === "huogong") {
              return 0;
            }
          }
        },
        charlotte: true,
        onremove(player2, skill) {
          player2.removeGaintag(skill);
        },
        trigger: {
          global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter", "cardsDiscardAfter"]
        },
        filter(event2, player2) {
          return player2.hasCard((card2) => {
            if (!card2.hasGaintag("luansuo_debuff")) {
              return false;
            }
            return event2.getd().some((cardx) => get.suit(card2) === get.suit(cardx));
          }, "h");
        },
        silent: true,
        firstDo: true,
        async content(event2, trigger, player2) {
          const cards2 = player2.getCards("h", (card2) => {
            if (!card2.hasGaintag(event2.name)) {
              return false;
            }
            return trigger.getd().some((cardx) => get.suit(card2) === get.suit(cardx));
          });
          player2.removeGaintag(event2.name, cards2);
        }
      }
    }
  },
  fengliao: {
    audio: 2,
    zhuanhuanji(player2, skill) {
      player2.storage[skill] = !player2.storage[skill];
      get.info(skill).init(player2, skill);
    },
    init(player2, skill) {
      player2.addTip(skill, `${get.translation(skill)} ${player2.storage[skill] ? "伤害" : "摸牌"}`);
    },
    onremove(player2, skill) {
      player2.removeTip(skill);
    },
    mark: true,
    marktext: "☯",
    intro: { content: (storage) => `你使用牌指定唯一目标后，你${storage ? "对其造成1点火焰伤害" : "令其摸一张牌"}` },
    trigger: { player: "useCardToPlayered" },
    filter(event2, player2) {
      return event2.targets.length == 1;
    },
    forced: true,
    logTarget: "target",
    async content(event2, trigger, player2) {
      player2.changeZhuanhuanji(event2.name);
      const { target: target2 } = trigger;
      if (player2.storage[event2.name]) {
        await target2.draw();
      } else {
        await target2.damage("fire");
      }
    },
    mod: {
      aiOrder(player2, card2, num) {
        if (typeof card2 == "object" && num > 0) {
          const select = get.info(card2).selectTarget;
          let range;
          if (select == void 0) {
            range = [1, 1];
          } else if (typeof select == "number") {
            range = [select, select];
          } else if (get.itemtype(select) == "select") {
            range = select;
          } else if (typeof select == "function") {
            range = select(card2, player2);
            if (typeof range == "number") {
              range = [range, range];
            }
          }
          game.checkMod(card2, player2, range, "selectTarget", player2);
          if ((() => {
            if (!(() => {
              if (range[1] !== -1) {
                return range[1] <= 1;
              }
              return game.countPlayer((i) => player2.canUse(card2, i)) === 1;
            })()) {
              return false;
            }
            let targets = game.filterPlayer((i) => player2.canUse(card2, i));
            if (!targets.length) {
              return false;
            }
            _status._fengliao_check = true;
            targets.sort((a, b) => get.effect(b, card2, player2, player2) - get.effect(a, card2, player2, player2));
            delete _status._fengliao_check;
            return (player2.storage.fengliao ? get.damageEffect(targets[0], player2, player2, "fire") : get.effect(targets[0], { name: "draw" }, player2, player2)) > 0;
          })()) {
            return num + 15;
          }
        }
      }
    },
    ai: {
      fireAttack: true,
      effect: {
        player(card2, player2, target2) {
          if (_status._fengliao_check) {
            return;
          }
          if (typeof card2 !== "object" || !player2 || !target2) {
            return;
          }
          const select = get.info(card2).selectTarget;
          let range;
          if (select == void 0) {
            range = [1, 1];
          } else if (typeof select == "number") {
            range = [select, select];
          } else if (get.itemtype(select) == "select") {
            range = select;
          } else if (typeof select == "function") {
            range = select(card2, player2);
            if (typeof range == "number") {
              range = [range, range];
            }
          }
          game.checkMod(card2, player2, range, "selectTarget", player2);
          if ((() => {
            if (range[1] !== -1) {
              return !ui.selected.targets.length;
            }
            return !game.hasPlayer((i) => i !== target2 && player2.canUse(card2, i));
          })()) {
            return [
              1,
              (() => {
                _status._fengliao_check = true;
                const num = player2.storage.fengliao ? get.damageEffect(target2, player2, player2, "fire") : get.effect(target2, { name: "draw" }, player2, player2);
                delete _status._fengliao_check;
                return num;
              })()
            ];
          }
        }
      }
    }
  },
  kunyu: {
    audio: 2,
    trigger: { player: "dieBegin" },
    filter(event2, player2) {
      if (!(event2.getParent().name !== "giveup" && player2.maxHp > 0)) {
        return false;
      }
      return get.cardPile2((c) => get.tag(c, "fireDamage"));
    },
    forced: true,
    async content(event2, trigger, player2) {
      const card2 = get.cardPile2((c) => get.tag(c, "fireDamage"));
      if (!card2) {
        return;
      }
      await game.cardsGotoSpecial(card2);
      game.log(player2, "将", card2, "移出游戏");
      await player2.recoverTo(1);
      if (player2.getHp() > 0) {
        trigger.cancel();
      }
    },
    group: "kunyu_debuff",
    subSkill: {
      debuff: {
        audio: "kunyu",
        trigger: {
          global: "phaseBefore",
          player: ["gainMaxHpBegin", "loseMaxHpBegin", "enterGame"]
        },
        forced: true,
        filter(event2, player2) {
          let bool = player2.maxHp !== 1;
          if (event2.name === "phase") {
            return bool && game.phaseNumber === 0;
          }
          return true;
        },
        async content(event2, trigger, player2) {
          if (["gainMaxHp", "loseMaxHp"].includes(trigger.name)) {
            trigger.cancel();
          } else {
            player2.maxHp = 1;
            player2.update();
          }
        }
      }
    }
  },
  //神黄忠
  //丁真神将，赤矢神将，爆头神将，吃人神将
  dclieqiong: {
    audio: 2,
    trigger: { source: "damageSource" },
    filter(event2, player2) {
      return event2.player.isIn() && event2.source != event2.player;
    },
    frequent: true,
    logTarget: "player",
    prompt2: (event2, player2) => "击伤其一个部位",
    async cost(event2, trigger, player2) {
      const target2 = trigger.player;
      let places = lib.skill["dclieqiong"].derivation.slice();
      if (target2.hasSex("male")) {
        places.push("dclieqiong_place8");
      }
      places = places.filter((i) => {
        let storage = target2.getStorage("dclieqiong_injury");
        if (!storage.length && i == "dclieqiong_place1") {
          return false;
        }
        return true;
      });
      if (!places.length) {
        return;
      }
      await Promise.all(event2.next);
      event2.videoId = lib.status.videoId++;
      if (player2.isUnderControl()) {
        game.swapPlayerAuto(player2);
      }
      const switchToAuto = function() {
        _status.imchoosing = false;
        if (event2.dialog) {
          event2.dialog.close();
        }
        if (event2.control) {
          event2.control.close();
        }
        game.resume();
        return Promise.resolve({
          bool: true,
          hurt: places.randomGet()
        });
      };
      const chooseButton = (places2, target3) => {
        const { promise, resolve } = Promise.withResolvers();
        const event3 = _status.event;
        event3.switchToAuto = function() {
          _status.imchoosing = false;
          resolve({
            bool: true,
            hurt: places2.randomGet()
          });
          if (event3.dialog) {
            event3.dialog.close();
          }
          if (event3.control) {
            event3.control.close();
          }
          if (event3.control2) {
            event3.control2.close();
          }
        };
        event3.control = ui.create.control("cancel2", function(link) {
          event3.dialog.close();
          event3.control.close();
          if (event3.control2) {
            event3.control2.close();
          }
          game.resume();
          _status.imchoosing = false;
          event3._result = { bool: false };
          resolve(event3._result);
        });
        event3.control2 = ui.create.control("ok", function(link) {
          event3.dialog.close();
          event3.control.close();
          event3.control2.close();
          game.resume();
          _status.imchoosing = false;
          resolve(event3._result);
        });
        event3.control2.close();
        const dialog = ui.create.dialog("forcebutton", "hidden");
        event3.dialog = dialog;
        dialog.textPrompt = dialog.add('<div class="text center">裂穹：是否击伤' + get.translation(target3) + "的一个部位？</div>");
        dialog.style.display = "flex";
        dialog.style.justifyContent = "center";
        dialog.style.alignItems = "center";
        dialog.style.position = "relative";
        dialog.style.width = "100%";
        dialog.style.height = "100%";
        dialog.id = "dclieqiong";
        dialog.classList.add("fixed");
        dialog.classList.add("scroll1");
        dialog.classList.add("scroll2");
        dialog.classList.add("center");
        dialog.classList.add("scroll3");
        dialog.classList.add("fullwidth");
        dialog.classList.add("fullheight");
        const target_img = document.createElement("div");
        const position = lib.skill["dclieqiong"].derivation.slice();
        if (target3.hasSex("male")) {
          position.push("dclieqiong_place8");
        }
        target_img.style.width = "50%";
        target_img.style.height = "100%";
        target_img.style.position = "relative";
        target_img.style.overflow = "visible";
        target_img.style.boxSizing = "border-box";
        target_img.style.border = "1px solid black";
        target_img.style.backgroundColor = "rgb(255,178,102,0.5)";
        dialog.appendChild(target_img);
        target_img.style.backgroundImage = "url(" + lib.assetURL + "image/card/yiwu_" + (target3.hasSex("male") ? "male" : "female") + ".png)";
        target_img.style.backgroundSize = "cover";
        target_img.style.backgroundRepeat = "no-repeat";
        target_img.style.backgroundSize = "contain";
        target_img.style.backgroundRepeat = "no-repeat";
        target_img.style.backgroundPosition = "center center";
        const number = target3.hasSex("male") ? [
          ["7", "1"],
          //["5", "3"],
          //["4", "7"],
          ["9", "5"],
          ["9", "13"],
          ["7", "3"],
          ["7", "6"],
          ["7", "8"]
        ] : [
          ["7", "1"],
          //["8", "3"],
          //["4", "7"],
          ["9", "5"],
          ["9", "13"],
          ["6", "3"],
          ["6", "6"]
        ];
        let list = [];
        for (let i = 0; i < position.length; i++) {
          const num_px = document.createElement("div");
          num_px.classList.add("nodeintro");
          num_px.nodeTitle = get.translation(position[i]);
          num_px.nodeContent = get.skillInfoTranslation(position[i], null, false);
          num_px.style.width = "15%";
          num_px.style.height = "15%";
          num_px.id = position[i];
          num_px.style.position = "absolute";
          num_px.style.left = `${number[i][0] * 6}%`;
          num_px.style.top = `${number[i][1] * 6}%`;
          num_px.style.boxSizing = "border-box";
          num_px.style.backgroundImage = "url(" + lib.assetURL + "image/card/yiwu_click.png)";
          num_px.style.backgroundSize = "cover";
          num_px.style.backgroundRepeat = "no-repeat";
          num_px.style.backgroundSize = "contain";
          num_px.style.backgroundRepeat = "no-repeat";
          num_px.style.backgroundPosition = "center center";
          num_px.addEventListener(lib.config.touchscreen ? "touchend" : "click", (a) => {
            let hurt = event3._result?.position;
            event3._result = {
              bool: true,
              hurt: a.target.id,
              position: a.target
            };
            let bool = true;
            if (hurt) {
              hurt.style.backgroundImage = "url(" + lib.assetURL + "image/card/yiwu_click.png)";
              if (hurt == a.target) {
                event3._result = { bool: false };
                if (event3.control2) {
                  event3.control2.close();
                }
                if (event3.control) {
                  event3.control.open();
                }
                bool = false;
              }
            }
            if (bool) {
              a.target.style.backgroundImage = "url(" + lib.assetURL + "image/card/yiwu_click_chosen.png)";
              if (event3.control) {
                event3.control.close();
              }
              if (!lib.config.autoskilllist.includes("dclieqiong")) {
                event3.dialog.close();
                game.resume();
                _status.imchoosing = false;
                resolve(event3._result);
              } else if (event3.control2) {
                event3.control2.open();
              }
            }
          });
          if (!lib.config.touchscreen) {
            if (lib.config.hover_all) {
              lib.setHover(num_px, ui.click.hoverplayer);
            }
            if (lib.config.right_info) {
              num_px.oncontextmenu = ui.click.rightplayer;
            }
          }
          list.push(num_px);
        }
        const selectedList = list.filter((i) => places2.includes(i.id));
        for (const i of selectedList) {
          target_img.appendChild(i);
        }
        dialog.open();
        game.pause();
        game.countChoose();
        return promise;
      };
      let next;
      if (event2.isMine()) {
        next = chooseButton(places, target2);
      } else if (event2.isOnline()) {
        const { promise, resolve } = Promise.withResolvers();
        event2.player.send(chooseButton, places, target2);
        event2.player.wait(async (result3) => {
          if (result3 == "ai") {
            result3 = await switchToAuto();
          }
          resolve(result3);
        });
        game.pause();
        next = promise;
      } else {
        next = switchToAuto();
      }
      const result2 = await next;
      if (event2.control2) {
        event2.control2.close();
      }
      game.resume();
      event2.result = {
        bool: result2.bool,
        targets: [target2],
        cost_data: result2.hurt
      };
      event2.result.targets = [target2];
    },
    async content(event2, trigger, player2) {
      const target2 = event2.targets[0];
      const place = event2.cost_data;
      player2.popup(place, "fire");
      game.log(player2, "击伤了", target2, "的", "#y" + get.translation(place));
      target2.addTempSkill("dclieqiong_injury");
      target2.markAuto("dclieqiong_injury", [place]);
      switch (parseInt(place.slice("dclieqiong_place".length))) {
        case 1:
          if (target2.getHp() > 0) {
            await target2.loseHp(target2.getHp());
            if (game.getGlobalHistory("everything", (evt) => {
              if (evt.name != "die" || evt.player != target2) {
                return false;
              }
              return evt.reason?.getParent() == event2;
            }).length > 0) {
              await player2.gainMaxHp();
            }
          }
          break;
        case 2: {
          const cards2 = target2.getEquips(1).slice().concat(target2.getEquips("equip3_4"));
          if (cards2.length) {
            await target2.modedDiscard(cards2, player2);
          }
          break;
        }
        case 3:
          target2.addTempSkill("dclieqiong_maxhand", { player: "phaseEnd" });
          break;
        case 4: {
          const cardx = target2.getDiscardableCards(target2, "h");
          const num = Math.ceil(cardx.length / 2);
          if (cardx.length) {
            await target2.discard(cardx.randomGets(num));
          }
          break;
        }
        case 5:
          target2.addTempSkill("dclieqiong_damage", { player: "phaseEnd" });
          break;
        case 6:
          target2.addTempSkill("dclieqiong_use", { player: "phaseEnd" });
          break;
        case 7:
          target2.addTempSkill("dclieqiong_respond", { player: "phaseEnd" });
          break;
        case 8: {
          game.broadcastAll(
            (player3, sex) => {
              player3.sex = sex;
            },
            target2,
            "female"
          );
          game.log(target2, "将性别变为了", "#y女性");
          const nvzhuang = get.cardPile("nvzhuang") || game.createCard("nvzhuang", "diamond", 6);
          await game.delayx();
          if (target2.canEquip(nvzhuang, true)) {
            await target2.equip(nvzhuang);
          }
          await target2.gainMaxHp();
          break;
        }
      }
    },
    marktext: "赤",
    intro: { content: "mark" },
    // frequent: true,
    derivation: ["dclieqiong_place1", "dclieqiong_place4", "dclieqiong_place5", "dclieqiong_place6", "dclieqiong_place7"],
    subSkill: {
      injury: {
        charlotte: true,
        onremove: true
      },
      maxhand: {
        charlotte: true,
        mark: true,
        marktext: "伤",
        intro: {
          name: "中伤 - 手部",
          content: "手牌上限变为原来的一半（向下取整）"
        },
        mod: {
          maxHandcard(player2, num) {
            if (_status["dclieqiong_maxhand"]) {
              return;
            }
            _status["dclieqiong_maxhand"] = true;
            const numx = player2.getHandcardLimit();
            delete _status["dclieqiong_maxhand"];
            return num - Math.ceil(numx);
          }
        }
      },
      damage: {
        charlotte: true,
        mark: true,
        marktext: "伤",
        intro: {
          name: "中伤 - 地机",
          content: "下次受到的伤害+1"
        },
        trigger: { player: "damageBegin2" },
        forced: true,
        popup: false,
        async content(event2, trigger, player2) {
          trigger.num++;
          player2.removeSkill(event2.name);
        }
      },
      use: {
        charlotte: true,
        forced: true,
        mark: true,
        marktext: "伤",
        intro: {
          name: "中伤 - 中枢",
          content: (_, player2) => (_status.currentPhase === player2 ? "" : "下回合") + "使用的下一张牌无效"
        },
        trigger: {
          player: "useCard"
        },
        async content(event2, trigger, player2) {
          trigger.all_excluded = true;
          trigger.targets.length = 0;
          player2.removeSkill("dclieqiong_use");
        }
      },
      respond: {
        charlotte: true,
        mark: true,
        marktext: "伤",
        intro: {
          name: "中伤 - 气海",
          content: (_, player2) => "不能使用或打出红桃牌"
        },
        mod: {
          cardEnabled(card2) {
            if (get.suit(card2) == "heart") {
              return false;
            }
          },
          cardSavable(card2) {
            if (get.suit(card2) == "heart") {
              return false;
            }
          },
          cardRespondable(card2) {
            if (get.suit(card2) == "heart") {
              return false;
            }
          }
        }
      }
    }
  },
  new_dclieqiong: {
    audio: "dclieqiong",
    trigger: { source: "damageSource" },
    filter(event2, player2) {
      return event2.player.isIn() && event2.source != event2.player;
    },
    derivation: ["dclieqiong_place1", "dclieqiong_place4", "dclieqiong_place5", "dclieqiong_place6", "dclieqiong_place7"],
    positions: {
      head: {
        name: "天冲",
        info: "令其失去所有体力，若其因此死亡，你增加1点体力上限",
        css_male: {
          left: "50%",
          top: "14%"
        },
        css_female: {
          left: "45%",
          top: "10%"
        },
        async content(event2, trigger, player2) {
          const { target: target2, position } = event2;
          game.log(player2, "击伤了", target2, "的", "#y天冲");
          if (target2.getHp() > 0) {
            await target2.loseHp(target2.getHp());
            if (game.getGlobalHistory("everything", (evt) => {
              if (evt.name != "die" || evt.player != target2) {
                return false;
              }
              return evt.reason?.getParent() == event2;
            }).length > 0) {
              await player2.gainMaxHp();
            }
          }
        }
      },
      hand: {
        name: "力烽",
        info: "令其随机弃置一半手牌（向上取整）",
        css_male: {
          left: "28%",
          top: "40%"
        },
        css_female: {
          left: "72%",
          top: "40%"
        },
        async content(event2, trigger, player2) {
          const { target: target2, position } = event2;
          game.log(player2, "击伤了", target2, "的", "#y力烽");
          const cardx = target2.getDiscardableCards(target2, "h");
          const num = Math.ceil(cardx.length / 2);
          if (cardx.length) {
            await target2.discard(cardx.randomGets(num));
          }
        }
      },
      leg: {
        name: "地机",
        info: "令其下一次受到的伤害+1直到其下个回合结束",
        css_male: {
          left: "35%",
          top: "80%"
        },
        css_female: {
          left: "67%",
          top: "80%"
        },
        async content(event2, trigger, player2) {
          const { target: target2, position } = event2;
          game.log(player2, "击伤了", target2, "的", "#y地机");
          target2.addTip("new_dclieqiong_leg", "裂穹 地机");
          target2.when({
            player: ["damageBegin3", "phaseEnd"]
          }).step(async (event3, trigger2, player3) => {
            player3.removeTip("new_dclieqiong_leg");
            if (trigger2.name == "damage") {
              trigger2.num++;
            }
          });
        }
      },
      chest: {
        name: "中枢",
        info: "令其使用的下一张牌无效直到其回合结束",
        css_male: {
          left: "50%",
          top: "30%"
        },
        css_female: {
          left: "40%",
          top: "25%"
        },
        async content(event2, trigger, player2) {
          const { target: target2, position } = event2;
          game.log(player2, "击伤了", target2, "的", "#y中枢");
          target2.addTip("new_dclieqiong_chest", "裂穹 中枢");
          target2.when({
            player: ["useCard", "phaseEnd"]
          }).step(async (event3, trigger2, player3) => {
            player3.removeTip("new_dclieqiong_chest");
            if (trigger2.name == "useCard") {
              trigger2.targets.length = 0;
              trigger2.all_excluded = true;
            }
          });
        }
      },
      abdomen: {
        name: "气海",
        info: "令其不能使用或打出♥️牌直到其回合结束",
        css_male: {
          left: "50%",
          top: "42%"
        },
        css_female: {
          left: "40%",
          top: "35%"
        },
        async content(event2, trigger, player2) {
          const { target: target2, position } = event2;
          game.log(player2, "击伤了", target2, "的", "#y气海");
          target2.addTempSkill("new_dclieqiong_abdomen", { player: "phaseEnd" });
        }
      }
    },
    async cost(event2, trigger, player2) {
      const target2 = trigger.player;
      let list = Object.keys(lib.skill[event2.skill].positions);
      if (!player2.hasHistory("useSkill", (evt) => {
        return evt.skill == event2.skill && evt.targets?.includes(target2);
      })) {
        list.remove("head");
      }
      if (!list.length) {
        event2.result = { bool: false };
        return;
      }
      const result2 = await player2.chooseButton([
        [
          (dialog) => {
            dialog.forcebutton = true;
            dialog.classList.add("forcebutton");
            dialog.listen(() => {
              let allpos = dialog.querySelectorAll(".position");
              allpos.forEach((pos) => pos.classList.remove("selected_cp"));
            });
            dialog.classList.add("dclieqiong", "fixed", "fullheight");
            const { target: target3, list: list2 } = get.event();
            dialog.style.backgroundImage = `url(${lib.assetURL}image/card/yiwu_${target3.hasSex("male") ? "male" : "female"}.png)`;
            const title = ui.create.div(".title", dialog);
            title.innerHTML = `裂穹：是否击伤${get.translation(target3)}的一个部位？`;
            for (let pos of list2) {
              let position = lib.skill.new_dclieqiong.positions[pos];
              let div = ui.create.div(".position", dialog, (e) => {
                e.stopPropagation();
                let allPosDiv = Array.from(dialog.querySelectorAll(".position"));
                allPosDiv.forEach((p) => p.classList.remove("selected_cp"));
                div.classList.add("selected_cp");
                ui.selected.buttons = [div];
                ui.create.confirm("oc");
              });
              div.link = pos;
              let sex = target3.hasSex("male") ? "male" : "female";
              div.css(position[`css_${sex}`] || {});
              div.setNodeIntro(position.name, position.info);
              div.style.setProperty("--info", `"【${position.name}】:${position.info}"`);
            }
          },
          "handle"
        ]
      ]).set("target", target2).set("list", list).set("processAI", () => {
        const { player: player3, target: target3, list: list2 } = get.event();
        if (get.attitude(player3, target3) > 0) {
          return { bool: false };
        } else {
          return {
            bool: true,
            links: list2.includes("head") ? ["head"] : ["abdomen"]
          };
        }
      }).set("switchToAuto", () => {
        _status.event.result = "ai";
        _status.event.dialog?.close();
        ui.confirm?.close();
      }).forResult();
      event2.result = {
        bool: result2.bool,
        targets: [target2],
        cost_data: result2.links
      };
    },
    async content(event2, trigger, player2) {
      const {
        targets: [target2],
        cost_data: [position]
      } = event2;
      game.broadcastAll(function(position2) {
        if (lib.config.background_speak) {
          game.playAudio("skill", "dclieqiong_" + position2);
        }
      }, position);
      const positionObj = lib.skill[event2.name].positions[position];
      let next = game.createEvent(event2.name + "_effect", false);
      next.setContent(positionObj.content);
      next.set("target", target2);
      next.set("player", player2);
      next.set("position", positionObj);
      await next;
    },
    subSkill: {
      abdomen: {
        init(player2, skill) {
          player2.addTip(skill, "裂穹 气海");
        },
        onremove(player2, skill) {
          player2.removeTip(skill);
        },
        charlotte: true,
        mark: true,
        marktext: "伤",
        intro: {
          name: "中伤 - 气海",
          content: (_, player2) => "不能使用或打出红桃牌"
        },
        mod: {
          cardEnabled(card2) {
            if (get.suit(card2) == "heart") {
              return false;
            }
          },
          cardSavable(card2) {
            if (get.suit(card2) == "heart") {
              return false;
            }
          },
          cardRespondable(card2) {
            if (get.suit(card2) == "heart") {
              return false;
            }
          }
        }
      }
    }
  },
  dczhanjue: {
    audio: 2,
    trigger: {
      player: "phaseUseBegin"
    },
    async cost(event2, trigger, player2) {
      const hps = [player2.getHp(), player2.getDamagedHp()];
      let list = [
        (hps[0] > 0 ? "摸" + get.cnNumber(hps[0]) + "张牌，" : "") + "此阶段使用的下一张【杀】无距离限制且不能被响应。",
        (hps[1] > 0 ? "摸" + get.cnNumber(hps[1]) + "张牌，" : "") + "此阶段下一次造成伤害后，回复等量体力。"
      ];
      let result2 = await player2.chooseControlList(list).set("ai", function() {
        let player3 = get.event().player, damaged = player3.getDamagedHp();
        if (damaged) {
          damaged += 0.6 * (player3.countCards("hs", (card2) => {
            if (card2.name == "sha" || !get.tag(card2, "damage")) {
              return 0;
            }
            let info = get.info(card2);
            if (!info || info.type != "trick") {
              return false;
            }
            if (info.notarget) {
              return false;
            }
            if (info.selectTarget != void 0) {
              if (Array.isArray(info.selectTarget)) {
                if (info.selectTarget[1] == -2) {
                  return 1;
                }
                if (info.selectTarget[1] == -1) {
                  let func = info.filterTarget;
                  if (typeof func != "function") {
                    func = () => true;
                  }
                  return game.countPlayer((cur) => {
                    return func(card2, player3, cur);
                  });
                }
                return Math.max(1, info.selectTarget[0], info.selectTarget[1]);
              } else {
                if (info.selectTarget == -2) {
                  return 1;
                }
                if (info.selectTarget == -1) {
                  let func = info.filterTarget;
                  if (typeof func != "function") {
                    func = () => true;
                  }
                  return game.countPlayer((cur) => {
                    return func(card2, player3, cur);
                  });
                }
                return Math.max(1, info.selectTarget);
              }
            }
            return 1;
          }) + Math.max(player3.getCardUsable("sha"), player3.countCards("hs", "sha")));
        }
        if (damaged > player3.hp) {
          return "选项二";
        }
        return "选项一";
      }).forResult();
      event2.result = {
        bool: result2.control != "cancel2",
        cost_data: result2.control
      };
    },
    async content(event2, trigger, player2) {
      if (event2.cost_data == "选项一") {
        player2.draw(player2.getHp());
        player2.addTempSkill("dczhanjue_directHit", { player: "phaseUseEnd" });
      } else {
        player2.draw(player2.getDamagedHp());
        player2.addTempSkill("dczhanjue_recover", { player: "phaseUseEnd" });
      }
    },
    subSkill: {
      directHit: {
        audio: "dczhanjue",
        charlotte: true,
        forced: true,
        mod: {
          targetInRange(card2) {
            if (card2.name == "sha") {
              return true;
            }
          }
        },
        trigger: {
          player: "useCard"
        },
        filter(event2, player2) {
          return event2.card.name == "sha";
        },
        async content(event2, trigger, player2) {
          trigger.directHit.addArray(game.players);
          game.log(trigger.card, "不可被响应");
          player2.removeSkill(event2.name);
        }
      },
      recover: {
        audio: "dczhanjue",
        trigger: {
          source: "damageSource"
        },
        forced: true,
        charlotte: true,
        content: async function(event2, trigger, player2) {
          if (player2.isDamaged()) {
            player2.recover(trigger.num);
          }
          player2.removeSkill(event2.name);
        }
      }
    }
  },
  //应天司马懿！别肘
  jilin: {
    audio: 5,
    trigger: {
      global: "phaseBefore",
      player: "enterGame"
    },
    filter(event2, player2) {
      return event2.name != "phase" || game.phaseNumber == 0;
    },
    forced: true,
    locked: false,
    logAudio: () => 1,
    async content(event2, trigger, player2) {
      const cards2 = get.cards(2);
      const next = player2.addToExpansion(cards2, "draw");
      next.gaintag.add(event2.name);
      await next;
    },
    marktext: "志",
    intro: {
      markcount: "expansion",
      mark(dialog, content, player2) {
        const cards2 = player2.getExpansions("jilin"), mingzhi = cards2.filter((card2) => card2.storage.jilin), hidden = cards2.removeArray(mingzhi);
        if (mingzhi.length) {
          dialog.addText("已明之志");
          dialog.addSmall(mingzhi);
        }
        if (hidden.length) {
          if (player2 == game.me || player2.isUnderControl()) {
            dialog.addText("未明之志");
            dialog.addSmall(hidden);
          } else {
            return "共有" + get.cnNumber(hidden.length) + "张暗“志”";
          }
        }
      }
      /*
      ???
      content(content, player) {
      	const cards = player.getExpansions("jilin"),
      		mingzhi = cards.filter(card => card.storage.jilin),
      		hidden = cards.removeArray(mingzhi);
      	if (mingzhi.length) {
      		dialog.addText("已明之志");
      		dialog.addSmall(mingzhi);
      	}
      	if (hidden.length) {
      		if (player == game.me || player.isUnderControl()) {
      			dialog.addText("未明之志");
      			dialog.addSmall(hidden);
      		} else {
      			return "共有" + get.cnNumber(hidden.length) + "张暗“志”";
      		}
      	}
      },
      */
    },
    group: ["jilin_kanpo", "jilin_change"],
    subSkill: {
      kanpo: {
        audio: ["jilin2.mp3", "jilin3.mp3"],
        trigger: {
          target: "useCardToTarget"
        },
        filter(event2, player2) {
          return event2.player != player2 && player2.getExpansions("jilin").some((card2) => !card2.storage.jilin);
        },
        async cost(event2, trigger, player2) {
          const hidden = player2.getExpansions("jilin").filter((card2) => !card2.storage.jilin);
          const goon = get.effect(player2, trigger.card, trigger.player, player2) < 0;
          const suits = player2.getExpansions("jilin").filter((card2) => card2.storage.jilin).map((card2) => get.suit(card2)).toUniqued();
          if (hidden.length == 1) {
            const { bool } = await player2.chooseBool("戢鳞：明置一张“志”", `令${get.translation(trigger.card)}对你无效`).set("choice", goon).forResult();
            event2.result = {
              bool,
              cost_data: hidden
            };
          } else {
            const { bool, links } = await player2.chooseButton(["戢鳞：明置一张“志”", hidden]).set("ai", (button) => {
              get.player();
              const card2 = button.link, suits2 = get.event().suits;
              if (!get.event().goon) {
                return 0;
              }
              if (!suits2.includes(get.suit(card2))) {
                return 10;
              }
              return 6 - get.value(card2);
            }).set("suits", suits).set("goon", goon).forResult();
            event2.result = {
              bool,
              cost_data: links
            };
          }
        },
        async content(event2, trigger, player2) {
          await player2.showCards(event2.cost_data, get.translation(player2) + "发动了【戢鳞】");
          event2.cost_data[0].storage.jilin = true;
          trigger.getParent().excluded.add(player2);
        }
      },
      change: {
        audio: ["jilin4.mp3", "jilin5.mp3"],
        trigger: {
          player: "phaseBegin"
        },
        filter(event2, player2) {
          return player2.countCards("h") && player2.getExpansions("jilin").some((card2) => !card2.storage.jilin);
        },
        async cost(event2, trigger, player2) {
          const hidden = player2.getExpansions("jilin").filter((card2) => !card2.storage.jilin);
          const next = player2.chooseToMove("戢鳞：是否交换“志”和手牌？");
          next.set("list", [
            [get.translation(player2) + "（你）的未明之“志”", hidden],
            ["手牌区", player2.getCards("h")]
          ]);
          next.set("filterMove", (from, to) => {
            return typeof to != "number";
          });
          next.set("processAI", (list) => {
            let player3 = get.player(), cards2 = list[0][1].concat(list[1][1]).sort(function(a, b) {
              return get.useful(a) - get.useful(b);
            }), cards22 = cards2.splice(0, player3.getExpansions("jilin").length);
            return [cards22, cards2];
          });
          const { bool, moved } = await next.forResult();
          event2.result = {
            bool,
            cost_data: moved
          };
        },
        async content(event2, trigger, player2) {
          const moved = event2.cost_data;
          const pushs = moved[0], gains = moved[1];
          pushs.removeArray(player2.getExpansions("jilin"));
          gains.removeArray(player2.getCards("h"));
          if (!pushs.length || pushs.length != gains.length) {
            return;
          }
          const next = player2.addToExpansion(pushs);
          next.gaintag.add("jilin");
          await next;
          await player2.gain(gains, "draw");
        }
      }
    }
  },
  yingyou: {
    audio: 4,
    trigger: {
      player: "phaseUseBegin"
    },
    filter(event2, player2) {
      return player2.countCards("h") && player2.getExpansions("jilin").some((card2) => !card2.storage.jilin);
    },
    async cost(event2, trigger, player2) {
      const hidden = player2.getExpansions("jilin").filter((card2) => !card2.storage.jilin);
      const suits = player2.getExpansions("jilin").filter((card2) => card2.storage.jilin).map((card2) => get.suit(card2)).toUniqued();
      const { bool, links } = await player2.chooseButton(["英猷：你可以明志", hidden]).set("ai", (button) => {
        const player3 = get.player(), card2 = button.link, suits2 = get.event().suits;
        const getNum = (player4) => {
          var list = [];
          for (var i of lib.suit) {
            list.push(player4.countCards("h", { suit: i }) + 3);
          }
          return list.sort((a, b) => b - a)[0];
        };
        if (!suits2.includes(get.suit(card2))) {
          return 10;
        }
        if (get.suit(card2) == getNum(player3)) {
          return 5;
        }
        return 0;
      }).set("suits", suits).forResult();
      event2.result = {
        bool,
        cost_data: links
      };
    },
    logAudio: () => 2,
    async content(event2, trigger, player2) {
      await player2.showCards(event2.cost_data, get.translation(player2) + "发动了【英猷】");
      event2.cost_data[0].storage.jilin = true;
      const num = player2.getExpansions("jilin").filter((card2) => card2.storage.jilin).length;
      await player2.draw(num);
    },
    ai: {
      combo: "jilin"
    },
    group: "yingyou_draw",
    subSkill: {
      draw: {
        audio: ["yingyou3.mp3", "yingyou4.mp3"],
        trigger: {
          player: "loseAfter",
          global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"]
        },
        filter(event2, player2) {
          const suits = player2.getExpansions("jilin").filter((card2) => card2.storage.jilin).map((card2) => get.suit(card2)).toUniqued();
          const evt = event2.getl(player2);
          if (!evt || !evt.cards2 || !evt.cards2.length) {
            return false;
          }
          return evt.cards2.some((card2) => {
            return suits.includes(get.suit(card2, player2));
          });
        },
        forced: true,
        locked: false,
        async content(event2, trigger, player2) {
          const suits = player2.getExpansions("jilin").filter((card2) => card2.storage.jilin).map((card2) => get.suit(card2)).toUniqued();
          const num = trigger.getl(player2).cards2.filter((card2) => {
            return suits.includes(get.suit(card2, player2));
          }).length;
          await player2.draw(num);
        }
      }
    }
  },
  yingtian: {
    audio: 2,
    trigger: { global: "dieAfter" },
    filter(event2, player2) {
      return game.countGroup() < 3;
    },
    forced: true,
    juexingji: true,
    skillAnimation: true,
    animationColor: "gray",
    async content(event2, trigger, player2) {
      const skill = event2.name;
      player2.awakenSkill(skill);
      await player2.changeSkills(get.info(skill).derivation, ["yingyou"]);
      player2.addSkill(skill + "_effect");
    },
    derivation: ["reguicai", "rewansha", "lianpo"],
    subSkill: {
      effect: {
        mod: {
          targetInRange: () => true
        }
      }
    }
  },
  //手杀神司马？
  //极略神司马！
  xinrenjie: {
    audio: 2,
    trigger: {
      player: ["chooseToUseAfter", "chooseToRespondAfter"],
      global: "_wuxieAfter"
    },
    filter(event2, player2) {
      if (player2.countMark("xinrenjie_used") >= 4) {
        return false;
      }
      if (event2.name == "chooseToUse" && event2.type == "wuxie") {
        return false;
      }
      if (event2.name == "_wuxie") {
        const directHit = event2._trigger?.getParent()?.directHit;
        if (directHit?.length && directHit.includes(player2)) {
          return false;
        }
        if (event2.wuxieresult && event2.wuxieresult == player2) {
          return false;
        }
        if (event2._info_map.player == player2) {
          return false;
        }
        return true;
      }
      return event2.respondTo && event2.respondTo[0] !== player2 && !event2.result.bool;
    },
    forced: true,
    async content(event2, trigger, player2) {
      player2.addMark("xinrenjie", 1);
      player2.addTempSkill("xinrenjie_used", "roundStart");
      player2.addMark("xinrenjie_used", 1, false);
    },
    intro: {
      name2: "忍",
      content: "mark"
    },
    marktext: "忍",
    hiddenCard: (player2) => player2.countMark("xinrenjie_used") < 4,
    ai: {
      combo: "xinjilve",
      respondSha: true,
      respondShan: true,
      skillTagFilter(player2) {
        if (player2.countMark("xinrenjie_used") >= 4) {
          return false;
        }
      }
    },
    group: "xinrenjie_change",
    subSkill: {
      used: {
        charlotte: true,
        onremove: true
      },
      change: {
        audio: "xinrenjie",
        trigger: {
          global: "phaseBefore",
          player: "enterGame"
        },
        filter(event2, player2) {
          if (event2.name === "phase" && game.phaseNumber > 0) {
            return false;
          }
          if (!lib.group.some((group) => group !== "shen")) {
            return false;
          }
          return player2.group === "shen" && player2._groupChosen !== "kami";
        },
        async cost(event2, trigger, player2) {
          const groups = lib.group.filter((group) => group !== "shen");
          const result2 = event2.result = await player2.chooseControl(groups, "cancel2").set("ai", () => {
            const groups2 = get.event().controls.filter((group) => !["wei", "shu", "wu", "qun"].includes(group));
            return groups2.length ? groups2.randomGet() : "cancel2";
          }).set("prompt", get.translation("xinrenjie") + "：是否变更势力？").forResult();
          event2.result.bool = typeof result2.control === "string" && result2.control !== "cancel2";
          event2.result.cost_data = result2.control;
        },
        async content(event2, trigger, player2) {
          await player2.changeGroup(event2.cost_data);
        }
      }
    }
  },
  xinbaiyin: {
    audio: 2,
    inherit: "sbaiyin",
    filter(event2, player2) {
      return player2.countMark("xinrenjie") >= 4;
    },
    async content(event2, trigger, player2) {
      player2.awakenSkill(event2.name);
      await player2.loseMaxHp();
      await player2.addSkills("xinjilve");
    },
    derivation: ["xinjilve", "reguicai", "fangzhu", "rejizhi", "rezhiheng", "rewansha"],
    ai: { combo: "xinrenjie" }
  },
  xinlianpo: {
    audio: "lianpo",
    audioname: ["new_simayi"],
    trigger: { source: "dieAfter" },
    filter(event2, player2) {
      return !player2.hasSkill("xinlianpo_mark") || get.info("xinbaiyin").derivation.some((skill) => !["xinjilve", "reguicai"].includes(skill) && !player2.hasSkill(skill, null, null, false));
    },
    async cost(event2, trigger, player2) {
      const skills2 = get.info("xinbaiyin").derivation.removeArray(["xinjilve", "reguicai"]).filter((skill) => !player2.hasSkill(skill, null, null, false));
      if (skills2.length && player2.hasSkill("xinjilve", null, null, false)) {
        const next = player2.chooseButton([
          "连破：请选择一项",
          [skills2.map((i) => [i, `获得【${get.translation(i)}】`]).concat(["于此回合结束后获得一个额外回合"]), "textbutton"]
        ]);
        next.set("ai", (button) => {
          const link = button.link, skills3 = get.event().skills, player3 = get.player();
          if ((skills3.length <= 2 || game.countPlayer() <= 2) && !player3.hasSkill("xinlianpo_mark", null, null, false) && link == "于此回合结束后获得一个额外回合") {
            return 6;
          }
          if (link == "rezhiheng" && player3.countCards("h") > 0) {
            return 5;
          }
          if (link == "rejizhi" && (!skills3.includes("rezhiheng") || player3.countCards("hs", { type: "trick" }))) {
            return 3;
          }
          if (link == "rewansha" && game.hasPlayer(
            (current) => get.attitude(player3, current) < 0 && current.getHp() < 2 && (player3 == _status.currentPhase || player3.hasSkill("xinlianpo_mark", null, null, false))
          )) {
            return 2;
          }
          return 1;
        });
        next.set("skills", skills2);
        next.set("filterButton", (button) => {
          return lib.skill[button.link] || !get.player().hasSkill("xinlianpo_mark");
        });
        const { bool, links } = await next.forResult();
        event2.result = {
          bool,
          cost_data: links
        };
      } else {
        const { bool } = await player2.chooseBool("连破：于此回合结束后获得一个额外回合？").forResult();
        event2.result = {
          bool
        };
      }
    },
    async content(event2, trigger, player2) {
      const links = event2.cost_data;
      if (links && get.info("xinbaiyin").derivation.includes(links[0])) {
        await player2.addSkills(links[0]);
      } else {
        player2.addTempSkill("xinlianpo_mark");
        player2.insertPhase();
      }
    },
    subSkill: {
      mark: {
        charlotte: true,
        mark: true,
        intro: {
          content: "本回合结束后执行一个额外回合"
        }
      }
    }
  },
  xinjilve: {
    audio: 2,
    trigger: { player: "phaseUseBegin" },
    filter(event2, player2) {
      return player2.countMark("xinrenjie");
    },
    async cost(event2, trigger, player2) {
      const limit = Math.min(3, player2.countMark("xinrenjie"));
      const choices = Array.from({
        length: limit
      }).map((_, i) => [i, get.cnNumber(i + 1, true)]);
      const history = game.getAllGlobalHistory(
        "everything",
        (evt) => evt.name == "xinjilve" && evt.player == player2 && Array.isArray(evt.cost_data) && get.info("xinbaiyin").derivation.includes(evt.cost_data[0])
      );
      const num = Math.max(2, history.length + 1);
      const skills2 = get.info("xinbaiyin").derivation.removeArray(["xinjilve", "reguicai"]).filter((skill) => !player2.hasSkill(skill, null, null, false));
      if (skills2.length && limit >= num) {
        const next = player2.chooseButton(2, [
          "极略：请选择你要移去的“忍”标记数和相应操作",
          '<div class="text center">移去“忍”标记数</div>',
          [choices, "tdnodes"],
          '<div class="text center">执行的操作</div>',
          [skills2.map((i) => [i, `获得【${get.translation(i)}】`]).concat(["摸牌"]), "tdnodes"]
        ]);
        next.set("filterButton", (button) => {
          const link = button.link;
          if (Boolean(ui.selected.buttons.length) !== (typeof link == "number")) {
            return false;
          }
          if (ui.selected.buttons.length) {
            if (ui.selected.buttons[0].link == "摸牌") {
              return link <= 1;
            }
            return link == get.event().num - 1;
          }
          return true;
        });
        next.set("ai", (button) => {
          const link = button.link, num2 = get.event().num, skills3 = get.event().skills;
          if (!ui.selected.buttons.length) {
            if (num2 > 2 && link == "摸牌") {
              return 10;
            }
            if (link == "rezhiheng" && player2.countCards("h") > 0) {
              return 10;
            }
            if (link == "rejizhi" && (!skills3.includes("rezhiheng") || player2.countCards("hs", { type: "trick" }))) {
              return 8;
            }
            if (player2.countMark("xinrenjie") <= 2) {
              return 0;
            }
          }
          return ui.selected.buttons.length && ui.selected.buttons[0].link == "摸牌" ? num2 - 1 : 1;
        });
        next.set("num", num);
        next.set("skills", skills2);
        const { bool, links } = await next.forResult();
        event2.result = {
          bool,
          cost_data: links
        };
      } else {
        const draw = Array.from({
          length: Math.min(2, limit)
        }).map((_, i) => get.cnNumber(i + 1, true));
        const result2 = await player2.chooseControl(draw, "cancel2").set("prompt", get.prompt("xinrenjie")).set("prompt2", `你可以移去至多${get.cnNumber(draw.length)}枚“忍”标记并摸等量张牌`).set("ai", () => {
          return get.event().choice;
        }).set(
          "choice",
          (function() {
            if (!player2.hasSkill("rejizhi", null, null, false)) {
              return "cancel2";
            }
            return choices.length - 1;
          })()
        ).forResult();
        event2.result = {
          bool: result2.control != "cancel2",
          cost_data: result2.index
        };
      }
    },
    async content(event2, trigger, player2) {
      const choice = event2.cost_data;
      if (typeof choice == "number") {
        player2.removeMark("xinrenjie", choice + 1);
        await player2.draw(choice + 1);
      } else if (get.info("xinbaiyin").derivation.includes(choice[0])) {
        const history = game.getAllGlobalHistory(
          "everything",
          (evt) => evt.name == "xinjilve" && evt.player == player2 && Array.isArray(evt.cost_data) && get.info("xinbaiyin").derivation.includes(evt.cost_data[0])
        );
        const num = Math.max(2, history.length);
        player2.removeMark("xinrenjie", num);
        await player2.addSkills(choice[0]);
      } else {
        player2.removeMark("xinrenjie", choice[1] + 1);
        await player2.draw(choice[1] + 1);
      }
    },
    group: "xinjilve_gain",
    subSkill: {
      gain: {
        audio: "xinjilve",
        trigger: {
          player: "changeSkillsAfter"
        },
        filter(event2, player2) {
          return event2.addSkill.includes("xinjilve");
        },
        forced: true,
        async content(event2, trigger, player2) {
          let skills2 = ["reguicai"];
          const groupList = /* @__PURE__ */ new Map([
            ["wei", "fangzhu"],
            ["shu", "rejizhi"],
            ["wu", "rezhiheng"],
            ["qun", "rewansha"],
            ["key", "hiroto_zonglve"]
          ]);
          if (Array.from(groupList.keys()).includes(player2.group)) {
            skills2.push(groupList.get(player2.group));
          }
          skills2 = skills2.filter((skill) => !player2.hasSkill(skill, null, null, false));
          if (skills2.length) {
            await player2.addSkills(skills2);
          }
        }
      }
    },
    ai: {
      notemp: true
    }
  },
  //十周年神华佗
  jingyu: {
    audio: 2,
    trigger: {
      global: ["useSkill", "logSkillBegin"]
    },
    filter(event2, player2) {
      if (["global", "equip"].includes(event2.type)) {
        return false;
      }
      let skill = get.sourceSkillFor(event2);
      if (!skill || skill === "jingyu") {
        return false;
      }
      let info = get.info(skill);
      if (!info || info.charlotte || info.equipSkill) {
        return false;
      }
      return !player2.getStorage("jingyu_used").includes(skill);
    },
    direct: true,
    forced: true,
    async content(event2, trigger, player2) {
      if (!player2.storage.jingyu_used) {
        player2.when({ global: "roundStart" }, false).assign({
          firstDo: true
        }).step(async () => delete player2.storage.jingyu_used).finish();
      }
      let skill = get.sourceSkillFor(trigger);
      player2.markAuto("jingyu_used", skill);
      player2.logSkill(event2.name);
      await player2.draw();
    },
    ai: { threaten: 6 }
  },
  lvxin: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filterCard: true,
    filterTarget: lib.filter.notMe,
    filter() {
      const round = game.roundNumber;
      return typeof round == "number" && round > 0;
    },
    check(card2) {
      const round = game.roundNumber, player2 = get.player();
      let valueFix = 0;
      if (["sha", "shan"].includes(get.name(card2, false))) {
        valueFix += 3;
      }
      if (round <= 2 && player2.hasCard((card3) => {
        return ["sha", "shan"].includes(get.name(card3)) && get.value(card3) <= 3;
      }) || game.hasPlayer((current) => {
        return current !== player2 && get.attitude(player2, current) > 0;
      })) {
        return 6 - get.value(card2) + valueFix;
      }
      return 4.5 - get.value(card2) + valueFix;
    },
    delay: false,
    discard: false,
    lose: false,
    async content(event2, trigger, player2) {
      const { target: target2, cards: cards2 } = event2, round = Math.min(5, game.roundNumber);
      const name = get.translation(target2);
      await player2.give(cards2, target2);
      const result2 = await player2.chooseControl(["摸牌", "弃牌"]).set("choiceList", [`令${name}摸${get.cnNumber(round)}张牌`, `令${name}随机弃置${get.cnNumber(round)}张手牌`]).set("prompt", "滤心：请选择一项").set("ai", () => {
        return get.event().choice;
      }).set("choice", get.attitude(player2, target2) > 0 ? "摸牌" : "弃牌").forResult();
      let cards22 = [];
      const makeDraw = result2.index === 0;
      if (makeDraw) {
        const result3 = await target2.draw(round).forResult();
        cards22 = result3.cards;
      } else {
        if (cards2.length > 0) {
          const evt = target2.randomDiscard(round);
          await evt;
          cards22 = evt.done.cards2;
        }
      }
      const cardName = get.name(cards2[0], player2);
      if (cards22.some((card2) => {
        return get.name(card2, target2) === cardName;
      })) {
        const skillName = `lvxin_${makeDraw ? "recover" : "lose"}`;
        target2.addSkill(skillName);
        target2.addMark(skillName, 1, false);
      }
    },
    subSkill: {
      recover: {
        trigger: { player: ["useSkill", "logSkillBegin", "useCard", "respond"] },
        filter(event2, player2) {
          if (["global", "equip"].includes(event2.type)) {
            return false;
          }
          if ((get.info(event2.skill) || {}).charlotte) {
            return false;
          }
          const skill = get.sourceSkillFor(event2);
          const info = get.info(skill);
          return info && !info.charlotte && !info.equipSkill;
        },
        forced: true,
        onremove: true,
        charlotte: true,
        async content(event2, trigger, player2) {
          player2.recover(player2.countMark(event2.name));
          player2.removeSkill(event2.name);
        },
        intro: { content: "下次发动技能时回复#点体力" }
      },
      lose: {
        trigger: { player: ["useSkill", "logSkillBegin", "useCard", "respond"] },
        filter(event2, player2) {
          if (["global", "equip"].includes(event2.type)) {
            return false;
          }
          if ((get.info(event2.skill) || {}).charlotte) {
            return false;
          }
          const skill = get.sourceSkillFor(event2);
          const info = get.info(skill);
          return info && !info.charlotte && !info.equipSkill;
        },
        forced: true,
        onremove: true,
        charlotte: true,
        async content(event2, trigger, player2) {
          player2.loseHp(player2.countMark(event2.name));
          player2.removeSkill(event2.name);
        },
        intro: { content: "下次发动技能时失去#点体力" }
      }
    },
    ai: {
      order: 5,
      result: {
        target(player2, target2) {
          const round = game.roundNumber;
          if (round <= 2 && target2.countCards("h") > round * 2 && player2.getCards("h").some((card2) => {
            return ["sha", "shan"].includes(get.name(card2)) && get.value(card2) <= 3;
          })) {
            return 1;
          }
          if (get.attitude(player2, target2) > 0) {
            return round + Math.sqrt(1 + target2.getDamagedHp());
          }
          return -(round + Math.sqrt(Math.max(0, 2 - target2.getHp())));
        }
      }
    }
  },
  huandao: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    limited: true,
    filterTarget: lib.filter.notMe,
    skillAnimation: true,
    animationColor: "metal",
    async content(event2, trigger, player2) {
      player2.awakenSkill(event2.name);
      const { target: target2 } = event2;
      await target2.turnOver(false);
      await target2.link(false);
      let names = [target2.name1 || target2.name];
      if (target2.name2) {
        names.add(target2.name2);
      }
      names = names.map((name) => get.rawName(name));
      if (!_status.characterlist) {
        game.initCharacterList();
      }
      _status.characterlist.randomSort();
      let ownedSkills = target2.getSkills(null, false, false), ownedSkillsName = ownedSkills.map((skill) => get.translation(skill));
      let skillToGain = null;
      outer: for (const name of _status.characterlist) {
        const info = lib.character[name];
        if (!names.includes(get.rawName(name))) {
          continue;
        }
        const skills2 = info[3].slice().randomSort();
        while (skills2.length) {
          const skill = skills2.shift(), skillName = get.translation(skill);
          if (!ownedSkillsName.includes(skillName)) {
            skillToGain = skill;
            break outer;
          }
        }
      }
      if (!skillToGain) {
        return;
      }
      player2.popup(skillToGain);
      player2.line(target2, "green");
      let prompt2 = "若你选择是，则你于获得此技能后须失去一个其他技能。<br><br>";
      if (lib.skill[skillToGain].nobracket) {
        prompt2 += `<div class="skilln">${get.translation(skillToGain)}</div><div><span style="font-family: yuanli">${get.skillInfoTranslation(skillToGain, null, false)}</span></div><br><br>`;
      } else {
        const translation = lib.translate[skillToGain + "_ab"] || get.translation(skillToGain).slice(0, 2);
        prompt2 += `<div class="skill">【${translation}】</div><div><span style="font-family: yuanli">${get.skillInfoTranslation(skillToGain, null, false)}</span></div><br><br>`;
      }
      const { bool } = await target2.chooseBool(`寰道：是否获得技能〖${get.translation(skillToGain)}〗？`, prompt2).set(
        "choice",
        (() => {
          const rank = get.skillRank(skillToGain, "inout") + 1;
          return ownedSkills.some((skill) => {
            const info = get.info(skill);
            if (info) {
              if (target2.awakenedSkills.includes(skill) && (info.limited || info.juexingji || info.dutySkill)) {
                return true;
              }
              if (info.ai && (info.ai.neg || info.ai.halfneg)) {
                return true;
              }
            }
            return get.skillRank(skill, "inout") < rank;
          });
        })()
      ).forResult();
      if (!bool) {
        target2.chat("拒绝");
        game.log(target2, "拒绝获得技能", `#g【${get.translation(skillToGain)}】`);
        await game.delay();
        return;
      }
      await target2.addSkills(skillToGain);
      ownedSkills = target2.getSkills(null, false, false).filter((skill) => {
        if (skill === skillToGain) {
          return false;
        }
        const info = get.info(skill);
        if (!info || info.charlotte || !get.skillInfoTranslation(skill, player2).length) {
          return false;
        }
        return true;
      });
      if (!ownedSkills) {
        return;
      }
      const { control } = await target2.chooseControl(ownedSkills).set(
        "choiceList",
        ownedSkills.map((skill) => {
          return `<div class="skill">【${get.translation(lib.translate[skill + "_ab"] || get.translation(skill).slice(0, 2))}】</div><div>${get.skillInfoTranslation(skill, target2, false)}</div>`;
        })
      ).set("displayIndex", false).set("prompt", "寰道：选择失去一个技能").set("ai", () => {
        return get.event().choice;
      }).set(
        "choice",
        (() => {
          const uselessSkills = ownedSkills.filter((skill) => {
            const info = get.info(skill);
            if (!info) {
              return false;
            }
            if (target2.awakenedSkills.includes(skill) && (info.limited || info.juexingji || info.dutySkill)) {
              return true;
            }
            if (info.ai && (info.ai.neg || info.ai.halfneg)) {
              return true;
            }
            return false;
          });
          if (uselessSkills.length) {
            return uselessSkills.randomGet();
          }
          return ownedSkills.sort((a, b) => {
            return get.skillRank(a, "inout") - get.skillRank(b, "inout");
          })[0];
        })()
      ).forResult();
      await target2.removeSkills(control);
    },
    ai: {
      order: 5,
      result: {
        target(player2, target2) {
          if (!_status.characterlist) {
            game.initCharacterList();
          }
          if (game.roundNumber * game.countPlayer() <= 1.5 * game.countPlayer2() / Math.sqrt(player2.getDamagedHp() + 1)) {
            return 0;
          }
          const ownedSkills = target2.getSkills(null, false, false).filter((skill) => {
            const info = get.info(skill);
            if (!info || info.charlotte || !get.skillInfoTranslation(skill, player2).length) {
              return false;
            }
            return true;
          });
          const uselessSkills = ownedSkills.filter((skill) => {
            const info = get.info(skill);
            if (!info) {
              return false;
            }
            if (target2.awakenedSkills.includes(skill) && (info.limited || info.juexingji || info.dutySkill)) {
              return true;
            }
            if (info.ai && (info.ai.neg || info.ai.halfneg)) {
              return true;
            }
            return false;
          });
          if (uselessSkills.length) {
            return 3;
          }
          let names = [target2.name1 || target2.name];
          if (target2.name2) {
            names.add(target2.name2);
          }
          names = names.map((name) => get.rawName(name));
          if (_status.characterlist.some((name) => names.includes(get.rawName(name)))) {
            return 1;
          }
          return 0;
        }
      }
    }
  },
  //神许褚
  zhengqing: {
    audio: 2,
    trigger: { global: "roundEnd" },
    forced: true,
    filter() {
      return game.hasPlayer((current) => {
        return current.countMark("zhengqing");
      }) || lib.skill.zhengqing.getMostInfoLastRound()[0] > 0;
    },
    getMostInfoLastRound() {
      let max = -1, players = [];
      const history = game.getAllGlobalHistory();
      if (history.length <= 1) {
        return [max, players];
      }
      for (let i = history.length - 1; i >= 0; i--) {
        const evts = history[i]["everything"].filter((evt) => {
          if (evt.name !== "damage") {
            return false;
          }
          const source = evt.source;
          return source && source.isIn();
        });
        if (evts.length) {
          let curMax = -1, curPlayers = [];
          const map = {};
          for (const evt of evts) {
            const source = evt.source;
            const id = source.playerid;
            if (typeof map[id] !== "number") {
              map[id] = 0;
            }
            map[id] += evt.num;
            if (map[id] > curMax) {
              curMax = map[id];
              curPlayers = [source];
            } else if (map[id] == curMax) {
              curPlayers.add(source);
            }
          }
          if (curMax > max) {
            max = curMax;
            players = curPlayers.slice();
          } else if (curMax === max) {
            players.addArray(curPlayers);
          }
        }
        if (history[i].isRound) {
          break;
        }
      }
      return [max, players];
    },
    async content(event2, trigger, player2) {
      game.countPlayer((current) => {
        if (current.hasMark("zhengqing")) {
          current.clearMark("zhengqing");
        }
      });
      const [num, players] = lib.skill.zhengqing.getMostInfoLastRound();
      let target2;
      if (!players.length) {
        return;
      } else if (players.length === 1) {
        target2 = players[0];
      } else if (players.includes(player2)) {
        target2 = player2;
      } else {
        target2 = players.randomGet();
      }
      player2.line(target2, "thunder");
      const isMax = (player2.getAllHistory("custom", (evt) => evt && evt.zhengqing_count).map((evt) => evt.zhengqing_count).sort((a, b) => b - a)[0] || 0) <= num;
      target2.addMark("zhengqing", num);
      if (target2 === player2 && isMax) {
        player2.draw(Math.min(5, num));
        player2.getHistory("custom").push({ zhengqing_count: num });
      } else {
        await game.asyncDraw([player2, target2].sortBySeat(trigger.player));
      }
    },
    marktext: "擎",
    intro: {
      name: "争擎",
      name2: "擎",
      content: "mark"
    }
  },
  zhuangpo: {
    audio: 2,
    enable: "chooseToUse",
    onChooseToUse(event2) {
      if (!game.online && !event2.zhuangpo_cards) {
        event2.set(
          "zhuangpo_cards",
          event2.player.getCards("hes", (card2) => {
            if (get.name(card2, event2.player) == "sha") {
              return true;
            }
            const str = get.cardDescription(card2, event2.player);
            return str.includes("【杀】");
          })
        );
      }
    },
    viewAs: {
      name: "juedou",
      storage: { zhuangpo: true }
    },
    viewAsFilter() {
      return get.event().zhuangpo_cards?.length;
    },
    prompt: "将一张牌面信息包含“【杀】”的牌当【决斗】使用",
    filterCard(card2, player2) {
      return get.event().zhuangpo_cards.includes(card2);
    },
    position: "hes",
    async precontent(event2, trigger, player2) {
      player2.addTempSkill("zhuangpo_effect");
    },
    subSkill: {
      effect: {
        trigger: {
          player: "useCardToPlayered"
        },
        filter(event2, player2) {
          const card2 = event2.card;
          if (!card2 || !card2.storage || !card2.storage.zhuangpo) {
            return false;
          }
          return player2.hasMark("zhengqing");
        },
        charlotte: true,
        group: "zhuangpo_damage",
        async cost(event2, trigger, player2) {
          const target2 = trigger.target;
          const count = player2.countMark("zhengqing");
          const prompt = `###壮魄：是否移去任意枚“擎”？###若如此做，${get.translation(target2)}须弃置等量的牌`;
          const numbers = [{ prompt: "请选择要移去的“擎”", min: 1, max: count }];
          const next = player2.chooseNumbers(prompt, numbers);
          next.set("processAI", processAI);
          const result2 = await next.forResult();
          event2.result = {
            bool: result2.bool,
            targets: [target2],
            cost_data: {
              number: result2.numbers[0]
            }
          };
          return;
          function processAI() {
            if (get.attitude(player2, target2) >= 0) {
              return false;
            }
            const markCount = count;
            const cards2 = target2.getCards("he", (card2) => lib.filter.cardDiscardable(card2, target2));
            let allIn = false;
            if (player2.hp < 2 || target2.hp + target2.countCards("h", (card2) => target2.canSaveCard(card2, target2)) <= 1 + trigger.targets.some((current) => current.hasMark("zhengqing"))) {
              allIn = true;
            }
            if (cards2.map((card2) => get.value(card2)).reduce((p, c) => p + c, 0) / cards2.length > 5) {
              allIn = true;
            }
            if (!player2.isPhaseUsing() || !player2.hasCard((card2) => {
              if (!get.cardDescription(card2, player2).includes("【杀】")) {
                return false;
              }
              return player2.hasValueTarget(get.autoViewAs({ name: "juedou" }, [card2]));
            })) {
              allIn = true;
            }
            const maxCount = Math.min(markCount, cards2.length);
            const toRemoveCount = allIn ? maxCount : Math.ceil(Math.random() * maxCount);
            return [toRemoveCount];
          }
        },
        logTarget: "targets",
        async content(event2, trigger, player2) {
          const { targets, cost_data } = event2;
          const [target2] = targets;
          const { number: toRemoveCount } = cost_data;
          player2.popup(get.cnNumber(toRemoveCount) + "张");
          player2.removeMark("zhengqing", toRemoveCount);
          await target2.chooseToDiscard("he", toRemoveCount, true);
        }
      },
      damage: {
        audio: "zhuangpo",
        trigger: { global: "damageBegin1" },
        filter(event2, player2) {
          const card2 = event2.card;
          if (!card2 || !card2.storage || !card2.storage.zhuangpo) {
            return false;
          }
          const evt = event2.getParent(2);
          return evt.targets && evt.targets.some((current) => current.hasMark("zhengqing"));
        },
        charlotte: true,
        forced: true,
        async content(event2, trigger) {
          trigger.num++;
        }
      }
    }
  },
  //神鲁肃
  dingzhou: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      const num = player2.countCards("he");
      return game.hasPlayer((current) => {
        if (current == player2) {
          return false;
        }
        const total = current.countCards("ej");
        return total > 0 && num >= total;
      });
    },
    filterCard: true,
    selectCard() {
      return [1, Math.max(...game.filterPlayer((i) => i != get.player()).map((i) => i.countCards("ej")))];
    },
    check(card2) {
      return 7 - get.value(card2);
    },
    filterTarget(card2, player2, target2) {
      const num = target2.countCards("ej");
      if (!num) {
        return false;
      }
      return ui.selected.cards.length == num && player2 != target2;
    },
    filterOk() {
      return ui.selected.cards.length == ui.selected.targets[0].countCards("ej");
    },
    position: "he",
    lose: false,
    discard: false,
    delay: false,
    async content(event2, trigger, player2) {
      const target2 = event2.targets[0];
      await player2.give(event2.cards, target2);
      const cards2 = target2.getGainableCards(player2, "ej");
      if (cards2.length) {
        player2.gain(cards2, "give", target2);
      }
    },
    ai: {
      order: 9,
      result: {
        target(player2, target2) {
          let eff = 0;
          if (ui.selected.cards.length) {
            eff = ui.selected.cards.map((card2) => get.value(card2)).reduce((p, c) => p + c, 0);
          }
          if (player2.hasSkill("zhimeng") && (get.mode() == "identity" || player2.countCards("h") - target2.countCards("h") > 2 * ui.selected.cards.length)) {
            eff *= 1 + get.sgnAttitude(player2, target2) * 0.15;
          }
          const es = target2.getCards("e"), js = target2.getCards("j");
          es.forEach((card2) => {
            eff -= get.value(card2, target2);
          });
          js.forEach((card2) => {
            eff -= get.effect(
              target2,
              {
                name: card2.viewAs || card2.name,
                cards: [card2]
              },
              target2,
              target2
            );
          });
          return eff;
        }
      }
    }
  },
  tamo: {
    available(mode) {
      if (["boss", "stone", "tafang"].includes(mode) || ["jiange", "standard", "three", "leader"].includes(_status.mode) || get.config("seat_order") === "指定") {
        return false;
      }
    },
    getTargets() {
      return game.filterPlayer((current) => {
        return !current.isZhu2();
      });
    },
    audio: 2,
    trigger: {
      global: "phaseBefore",
      player: "enterGame"
    },
    filter(event2, player2) {
      return (event2.name != "phase" || game.phaseNumber == 0) && get.info("tamo").getTargets().length > 1;
    },
    seatRelated: "changeSeat",
    derivation: "tamo_faq",
    frequent: true,
    async content(event2, trigger, player2) {
      const toSortPlayers = get.info(event2.name).getTargets();
      toSortPlayers.sortBySeat(game.findPlayer2((current) => current.getSeatNum() == 1, true));
      const next = player2.chooseToMove(
        "榻谟：是否分配" + (get.mode() != "doudizhu" ? game.hasPlayer((cur) => cur.isZhu2()) ? "除主公外" : "" : "") + "所有角色的座次？"
      );
      next.set("list", [
        [
          "（以下排列的顺序即为发动技能后角色的座次顺序）",
          [toSortPlayers.map((i) => `${i.getSeatNum()}|${i.name}`), lib.skill.tamo.$createButton]
        ]
      ]);
      next.set("toSortPlayers", toSortPlayers.slice(0));
      next.set("processAI", () => {
        const players = get.event().toSortPlayers, player3 = get.player();
        players.randomSort().sort((a, b) => get.attitude(player3, b) - get.attitude(player3, a));
        return [players.map((i) => `${i.getSeatNum()}|${i.name}`)];
      });
      const result2 = await next.forResult();
      const moved = result2?.moved;
      const resultList = moved[0].map((info) => {
        return parseInt(info.split("|")[0]);
      });
      const toSwapList = [];
      const cmp = (a, b) => {
        return resultList.indexOf(a) - resultList.indexOf(b);
      };
      for (let i = 0; i < toSortPlayers.length; i++) {
        for (let j = 0; j < toSortPlayers.length; j++) {
          if (cmp(toSortPlayers[i].getSeatNum(), toSortPlayers[j].getSeatNum()) < 0) {
            toSwapList.push([toSortPlayers[i], toSortPlayers[j]]);
            [toSortPlayers[i], toSortPlayers[j]] = [toSortPlayers[j], toSortPlayers[i]];
          }
        }
      }
      game.broadcastAll((toSwapList2) => {
        for (const list of toSwapList2) {
          game.swapSeat(list[0], list[1], false);
        }
      }, toSwapList);
      if (trigger.name === "phase" && !trigger.player.isZhu2() && trigger.player !== toSortPlayers[0] && !trigger._finished) {
        trigger.finish();
        trigger._triggered = 5;
        const evt = toSortPlayers[0].insertPhase();
        delete evt.skill;
        const evt2 = trigger.getParent();
        if (evt2.name == "phaseLoop" && evt2._isStandardLoop) {
          evt2.player = toSortPlayers[0];
        }
        evt.pushHandler("onPhase", (event3, option) => {
          if (event3.step === 0 && option.state === "begin") {
            event3.step = 1;
          }
        });
      }
      await game.delay();
    },
    $createButton(item, type, position, noclick, node) {
      const info = item.split("|"), _item = item;
      const seat = parseInt(info[0]);
      item = info[1];
      if (node) {
        node.classList.add("button");
        node.classList.add("character");
        node.style.display = "";
      } else {
        node = ui.create.div(".button.character", position);
      }
      node._link = item;
      node.link = item;
      const func = function(node2, item2) {
        const currentPlayer = game.findPlayer((current) => current.getSeatNum() == seat);
        if (currentPlayer.classList.contains("unseen_show")) {
          node2.setBackground("hidden_image", "character");
        } else if (item2 != "unknown") {
          node2.setBackground(item2, "character");
        }
        if (node2.node) {
          node2.node.name.remove();
          node2.node.hp.remove();
          node2.node.group.remove();
          node2.node.intro.remove();
          if (node2.node.replaceButton) {
            node2.node.replaceButton.remove();
          }
        }
        node2.node = {
          name: ui.create.div(".name", node2),
          group: ui.create.div(".identity", node2),
          intro: ui.create.div(".intro", node2)
        };
        const infoitem = [currentPlayer.sex, currentPlayer.group, `${currentPlayer.hp}/${currentPlayer.maxHp}/${currentPlayer.hujia}`];
        node2.node.name.innerHTML = get.slimName(item2);
        if (lib.config.buttoncharacter_style == "default" || lib.config.buttoncharacter_style == "simple") {
          if (lib.config.buttoncharacter_style == "simple") {
            node2.node.group.style.display = "none";
          }
          node2.classList.add("newstyle");
          node2.node.name.dataset.nature = get.groupnature(get.bordergroup(infoitem));
          node2.node.group.dataset.nature = get.groupnature(get.bordergroup(infoitem), "raw");
        }
        node2.node.name.style.top = "8px";
        if (node2.node.name.querySelectorAll("br").length >= 4) {
          node2.node.name.classList.add("long");
          if (lib.config.buttoncharacter_style == "old") {
            node2.addEventListener("mouseenter", ui.click.buttonnameenter);
            node2.addEventListener("mouseleave", ui.click.buttonnameleave);
          }
        }
        node2.node.intro.innerHTML = lib.config.intro;
        if (!noclick) {
          lib.setIntro(node2);
        }
        node2.node.group.innerHTML = `<div>${get.cnNumber(seat, true)}号</div>`;
        node2.node.group.style.backgroundColor = get.translation(`${get.bordergroup(infoitem)}Color`);
      };
      node.refresh = func;
      node.refresh(node, item);
      node.link = _item;
      node.seatNumber = seat;
      node._customintro = (uiintro) => {
        uiintro.add(`${get.translation(node._link)}(原${get.cnNumber(node.seatNumber, true)}号位)`);
      };
      return node;
    }
  },
  //什么均贫卡
  zhimeng: {
    audio: 2,
    trigger: { player: "phaseAfter" },
    filter(event2, player2) {
      return game.hasPlayer((target2) => {
        if (target2 == player2 || target2.countCards("h") + player2.countCards("h") == 0) {
          return false;
        }
        return true;
      });
    },
    async cost(event2, trigger, player2) {
      event2.result = await player2.chooseTarget(get.prompt(event2.skill), "与一名其他角色平分手牌", (card2, player3, target2) => {
        if (target2 == player3 || target2.countCards("h") + player3.countCards("h") == 0) {
          return false;
        }
        return true;
      }).set("ai", (target2) => {
        const player3 = get.player();
        const pvalue = -player3.getCards("h").map((card2) => get.value(card2, player3)).reduce((p, c) => p + c, 0);
        const tvalue = -target2.getCards("h").map((card2) => get.value(card2, target2)).reduce((p, c) => p + c, 0) * get.sgnAttitude(player3, target2);
        return (pvalue + tvalue) / 2;
      }).forResult();
    },
    async content(event2, trigger, player2) {
      const target2 = event2.targets[0];
      const lose_list = [];
      let cards2 = [];
      [player2, target2].forEach((current) => {
        const hs = current.getCards("h");
        if (hs.length) {
          cards2.addArray(hs);
          current.$throw(hs.length, 500);
          game.log(current, "将", get.cnNumber(hs.length), "张牌置入了处理区");
          lose_list.push([current, hs]);
        }
      });
      if (lose_list.length) {
        await game.loseAsync({
          lose_list
        }).setContent("chooseToCompareLose");
      }
      await game.delay();
      cards2 = cards2.filterInD();
      const pcards = cards2.randomGets(Math.ceil(cards2.length / 2));
      const tcards = cards2.removeArray(pcards);
      const list = [];
      if (pcards.length) {
        list.push([player2, pcards]);
        game.log(player2, "获得了", get.cnNumber(pcards.length), "张牌");
      }
      if (tcards.length) {
        list.push([target2, tcards]);
        game.log(target2, "获得了", get.cnNumber(tcards.length), "张牌");
      }
      await game.loseAsync({
        gain_list: list,
        player: player2,
        animate: "draw"
      }).setContent("gaincardMultiple");
    },
    ai: { threaten: 4 }
  },
  //神华佗
  wuling: {
    audio: 2,
    enable: "phaseUse",
    filter(event2, player2) {
      return game.hasPlayer((target2) => lib.skill.wuling.filterTarget(null, player2, target2));
    },
    filterTarget(card2, player2, target2) {
      return !target2.hasSkill("wuling_wuqinxi");
    },
    usable: 2,
    prompt: "选择一名角色，向其传授“五禽戏”",
    group: "wuling_die",
    async content(event2, trigger, player2) {
      const { target: target2 } = event2;
      target2.addAdditionalSkill(`wuling_${player2.playerid}`, "wuling_wuqinxi");
      const next = player2.chooseToMove(`五灵：调整向${get.translation(target2)}传授的“五禽戏”顺序`);
      const cards2 = [lib.skill.wuling.wuqinxi, createCard];
      next.set("list", [["", cards2]]);
      next.set("processAI", processAI);
      const result2 = await next.forResult();
      const sortedWuqinxi = result2.moved[0].map((card2) => card2[2]);
      game.log(target2, "习得的五禽戏顺序为", "#g" + sortedWuqinxi.join("、"));
      sortedWuqinxi.unshift(sortedWuqinxi[0]);
      target2.storage.wuling_wuqinxi = sortedWuqinxi;
      lib.skill.wuling.updateMark(target2);
      return;
      function createCard(item, type, position, noclick, node) {
        node = ui.create.buttonPresets.vcard(lib.skill.wuling.wuqinxiMap2[item][0], type, position, noclick);
        node.node.range.innerHTML = lib.skill.wuling.wuqinxiMap2[item][1];
        node.node.range.style.bottom = "2.5px";
        node.node.range.style.width = "100%";
        node.node.range.style.right = "0%";
        node.node.range.style.textAlign = "center";
        node._link = node.link = [null, null, item];
        node._customintro = [
          (node2) => `五禽戏：${node2.link[2]}`,
          (node2) => lib.skill.wuling.wuqinxiMap[lib.skill.wuling.wuqinxi.indexOf(node2.link[2])].slice(2)
        ];
        return node;
      }
      function processAI() {
        const event3 = get.event().getParent();
        const { player: player3, target: target3 } = event3;
        const spirits = [];
        let nextPlayer = player3;
        do {
          nextPlayer = nextPlayer.getNext();
          if (get.attitude(player3, nextPlayer) < 0) {
            spirits.add("熊");
            break;
          }
        } while (nextPlayer != target3);
        if (!spirits.length) {
          spirits.add("猿");
        }
        const effectOk = get.recoverEffect(target3, player3, player3) > 0;
        const hasBadCards = target3.hasCard((card2) => {
          const vcard = {
            name: card2.viewAs || card2.name,
            cards: [card2]
          };
          return get.effect(target3, vcard, target3, target3) < -1;
        }, "j");
        if (effectOk || hasBadCards) {
          spirits.add("鹿");
        }
        const others = lib.skill.wuling.wuqinxi.slice().removeArray(spirits);
        do {
          others.randomSort();
        } while (others.length > 1 && others[0] == "鹿");
        return [spirits.concat(others).map((i) => ["", "", i])];
      }
    },
    wuqinxi: ["虎", "鹿", "熊", "猿", "鹤"],
    wuqinxiMap: [
      "虎：当你使用指定唯一目标的牌对目标角色造成伤害时，此伤害+1。",
      "鹿：①当你获得此效果时，你回复1点体力并弃置判定区的所有牌。②你不能成为延时锦囊牌的目标。",
      "熊：每回合限一次，当你受到伤害时，此伤害-1。",
      "猿：当你获得此效果时，你选择一名其他角色，获得其装备区里的一张牌。",
      "鹤：当你获得此效果时，你摸三张牌。"
    ],
    wuqinxiMap2: {
      虎: ["wuqinxi_hu", "用牌加伤"],
      鹿: ["wuqinxi_lu", "弃判定回血"],
      熊: ["wuqinxi_xiong", "减伤"],
      猿: ["wuqinxi_yuan", "偷装备牌"],
      鹤: ["wuqinxi_he", "摸三张牌"]
    },
    updateMark(player2) {
      var wuqinxi = player2.storage.wuling_wuqinxi;
      if (!wuqinxi) {
        return;
      }
      wuqinxi.shift();
      var curMark = wuqinxi[0];
      if (!curMark) {
        for (var skill in player2.additionalSkills) {
          if (!skill.startsWith("wuling_")) {
            continue;
          }
          player2.removeAdditionalSkill(skill);
        }
        game.log(player2, "完成了五禽戏的操练");
        return;
      }
      game.log(player2, "获得了", "#g【" + curMark + "】", "标记");
      player2.markSkill("wuling_wuqinxi");
      game.broadcastAll(
        function(player3, curMark2) {
          if (player3.marks.wuling_wuqinxi) {
            player3.marks.wuling_wuqinxi.firstChild.innerHTML = curMark2;
          }
        },
        player2,
        curMark
      );
      var next = game.createEvent("wuling_change");
      next.player = player2;
      next.setContent("emptyEvent");
    },
    ai: {
      order: 7,
      threaten: 5,
      result: { target: 1 }
    },
    derivation: "wuling_wuqinxi",
    subSkill: {
      wuqinxi: {
        nopop: true,
        charlotte: true,
        intro: {
          markcount: () => 0,
          mark(dialog, storage) {
            const wuqinxiMap = lib.skill.wuling.wuqinxiMap;
            const str = `<li>当前效果：${storage[0]}<br><li>${wuqinxiMap.find((str3) => storage[0] == str3[0]).slice(2)}<br>`;
            dialog.addText(str, false);
            const str2 = '<div class="text center">“五禽戏”顺序：<br>' + storage.join(" ") + "</div>";
            dialog.addText(str2);
            if (storage.length > 1) {
              const str3 = `<div class="text" style="font-size:10px; ">[下一效果] ${wuqinxiMap.find((str4) => storage[1] == str4[0])}<br></div>`;
              dialog.add(str3);
            }
          }
        },
        mod: {
          targetEnabled(card2, player2, target2) {
            if (get.type(card2) == "delay" && target2.storage.wuling_wuqinxi && target2.storage.wuling_wuqinxi[0] == "鹿") {
              return false;
            }
          }
        },
        trigger: {
          source: "damageBegin1",
          player: ["phaseZhunbeiBegin", "damageBegin4", "wuling_change"]
        },
        filter(event2, player2, name) {
          const wuqinxi = player2.storage.wuling_wuqinxi && player2.storage.wuling_wuqinxi[0];
          if (!wuqinxi) {
            return false;
          }
          if (event2.name == "phaseZhunbei") {
            return true;
          }
          switch (name) {
            case "damageBegin1":
              if (wuqinxi != "虎" || !event2.card) {
                return false;
              }
              var evt = event2.getParent("useCard");
              return evt?.targets.length == 1 && evt.targets.includes(event2.player);
            case "damageBegin4":
              return wuqinxi == "熊" && !player2.hasSkill("wuling_xiong");
            default:
              switch (wuqinxi) {
                case "鹿":
                  return player2.isDamaged() || player2.countCards("j") > 0;
                case "鹤":
                  return true;
                case "猿":
                  return game.hasPlayer((target2) => target2 != player2 && target2.countGainableCards(player2, "e") > 0);
                default:
                  return false;
              }
          }
        },
        forced: true,
        onremove: true,
        async content(event2, trigger, player2) {
          var wuqinxi = player2.storage.wuling_wuqinxi[0];
          if (trigger.name == "phaseZhunbei") {
            lib.skill.wuling.updateMark(player2);
            return;
          }
          var name = event2.triggername;
          switch (name) {
            case "damageBegin1":
              player2.line(trigger.player);
              trigger.num++;
              break;
            case "damageBegin4":
              player2.addTempSkill("wuling_xiong");
              trigger.num--;
              break;
            default:
              switch (wuqinxi) {
                case "鹿":
                  await player2.recover();
                  await player2.discard(player2.getCards("j"), player2);
                  break;
                case "鹤":
                  await player2.draw(3);
                  break;
                case "猿": {
                  const { targets } = await player2.chooseTarget("五禽戏：获得一名其他角色装备区里的一张装备牌", function(card2, player3, target2) {
                    return target2 != player3 && target2.countGainableCards(player3, "e");
                  }).set("ai", function(target2) {
                    var player3 = _status.event.player;
                    var att = get.attitude(player3, target2), eff = 0;
                    target2.getCards("e", function(card2) {
                      var val = get.value(card2, target2);
                      eff = Math.max(eff, -val * att);
                    });
                    return eff;
                  }).forResult();
                  if (targets?.length) {
                    player2.line(targets, "green");
                    await player2.gainPlayerCard(targets[0], "e", true);
                  }
                  break;
                }
              }
              break;
          }
        },
        ai: {
          effect: {
            target(card2, player2, target2) {
              const wuqinxi = target2.storage.wuling_wuqinxi;
              if (!wuqinxi || !wuqinxi.length) {
                return;
              }
              const curWuqinxi = wuqinxi[0];
              const nextWuqinxi = wuqinxi[1];
              if (nextWuqinxi == "鹿" && get.type(card2) == "delay") {
                return "zerotarget";
              }
              if (curWuqinxi != "熊" || player2.hasSkill("wuling_xiong")) {
                return;
              }
              if (player2.hasSkillTag("jueqing", false, target2)) {
                return;
              }
              var num = get.tag(card2, "damage");
              if (num) {
                if (num > 1) {
                  return 0.5;
                }
                return 0;
              }
            }
          }
        }
      },
      xiong: { charlotte: true },
      die: {
        trigger: { player: "die" },
        filter(event2, player2) {
          return game.hasPlayer((current) => current.additionalSkills[`wuling_${player2.playerid}`]);
        },
        forced: true,
        locked: false,
        forceDie: true,
        async content(event2, trigger, player2) {
          const targets = game.filterPlayer((current) => {
            return Reflect.has(current.additionalSkills, `wuling_${player2.playerid}`);
          });
          player2.line(targets);
          targets.forEach((current) => current.removeAdditionalSkill(`wuling_${player2.playerid}`));
        }
      }
    }
  },
  youyi: {
    init(player2) {
      player2.storage.renku = true;
    },
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return _status.renku.length > 0;
    },
    prompt: "将仁区所有牌置入弃牌堆，令所有角色各回复1点体力",
    async content(event2, trigger, player2) {
      const cards2 = _status.renku.slice();
      const next = game.cardsDiscard(cards2);
      next.fromRenku = true;
      await next;
      player2.$throw(cards2, 1e3);
      game.log(cards2, "从仁库进入了弃牌堆");
      const targets = game.filterPlayer(() => true);
      player2.line(targets);
      await Promise.all(targets.map((target2) => target2.recover()));
    },
    ai: {
      order(item, player2) {
        return get.order({ name: "taoyuan" }, player2);
      },
      result: {
        player(player2) {
          return Math.max(
            0,
            game.filterPlayer().reduce((num, target2) => num + get.recoverEffect(target2, player2, player2), 0)
          );
        }
      }
    },
    group: "youyi_put",
    subSkill: {
      put: {
        audio: "youyi",
        trigger: { player: "phaseDiscardEnd" },
        filter(event2, player2) {
          return lib.skill.twlijian.getCards(event2).length;
        },
        prompt2(event2, player2) {
          return "将" + get.translation(lib.skill.twlijian.getCards(event2)) + "置入仁区";
        },
        async content(event2, trigger, player2) {
          const cards2 = lib.skill.twlijian.getCards(trigger);
          game.log(player2, "将", cards2, "置于了仁库");
          game.cardsGotoSpecial(cards2, "toRenku");
        }
      }
    }
  },
  //神贾诩
  jxlianpo: {
    init: () => {
      game.addGlobalSkill("jxlianpo_global");
    },
    onremove: () => {
      if (!game.hasPlayer((i) => i.hasSkill("jxlianpo", null, null, false), true)) {
        game.removeGlobalSkill("jxlianpo_global");
      }
    },
    trigger: { global: "dieAfter" },
    filter(event2, player2) {
      if (lib.skill.jxlianpo.getMax(event2.player).length <= 1) {
        return false;
      }
      return event2.source && event2.source.isIn();
    },
    forced: true,
    logTarget: "source",
    getMax: (dead) => {
      let curs = game.players.slice(0);
      if (get.itemtype(dead) === "player" && !curs.includes(dead)) {
        curs.push(dead);
      }
      const map = {
        zhu: curs.reduce((count, current) => {
          let num = 0;
          if (["zhu", "zhong", "mingzhong"].includes(current.identity)) {
            num++;
          }
          num += current.countMark("jxlianpo_mark_zhong");
          return num + count;
        }, 0),
        fan: curs.reduce((count, current) => {
          let num = 0;
          if (current.identity == "fan") {
            num++;
          }
          num += current.countMark("jxlianpo_mark_fan");
          return num + count;
        }, 0),
        nei: curs.reduce((count, current) => {
          let num = 0;
          if (current.identity == "nei") {
            num++;
          }
          num += current.countMark("jxlianpo_mark_nei");
          return num + count;
        }, 0),
        commoner: curs.reduce((count, current) => {
          let num = 0;
          if (current.identity == "commoner") {
            num++;
          }
          num += current.countMark("jxlianpo_mark_commoner");
          return num + count;
        }, 0)
      };
      let population = 0, identities = [];
      for (let i in map) {
        let curPopulation = map[i];
        if (curPopulation >= population) {
          if (curPopulation > population) {
            identities = [];
          }
          identities.add(i);
          population = curPopulation;
        }
      }
      return identities;
    },
    group: "jxlianpo_show",
    async content(event2, trigger, player2) {
      var source = trigger.source;
      source.chooseDrawRecover(2, true);
    },
    mark: true,
    intro: {
      content: () => `场上最大阵营为${lib.skill.jxlianpo.getMax().map((i) => {
        if (i == "zhu") {
          return "主忠";
        }
        return get.translation(i + "2");
      }).join("、")}`
    },
    $createButton(item, type, position, noclick, node) {
      node = ui.create.identityCard(item, position, noclick);
      node.link = item;
      return node;
    },
    subSkill: {
      show: {
        audio: "jxlianpo",
        trigger: { global: "roundStart" },
        filter(event2, player2) {
          var list = lib.config.mode_config.identity.identity.lastItem.slice();
          list.removeArray(
            game.filterPlayer().map((i) => {
              let identity = i.identity;
              if (identity == "mingzhong") {
                identity = "zhong";
              }
              return identity;
            })
          );
          return list.length;
        },
        forced: true,
        async content(event2, trigger, player2) {
          const list = lib.config.mode_config.identity.identity.lastItem.slice();
          const needRemoved = game.filterPlayer().map((current) => {
            var identity = current.identity;
            return identity == "mingzhong" ? "zhong" : identity;
          });
          list.removeArray(needRemoved).unique();
          const cards2 = [list, createCard];
          const title = '###炼魄：请选择一个身份###<div class="text center">你选择的身份对应的阵营角色数于本轮内视为+1</div>';
          const next = player2.chooseButton([title, cards2], true);
          const result2 = await next.forResult();
          const choice = result2.links[0];
          const mark = `jxlianpo_mark_${choice}`;
          player2.when({ global: "roundStart" }, false).assign({
            firstDo: true
          }).filter((evt) => evt != trigger).step(async (event3, trigger2, player3) => {
            for (const storage in player3.storage) {
              if (storage.startsWith("jxlianpo_mark_")) {
                player3.clearMark(storage);
              }
            }
          });
          player2.addMark(mark, 1, false);
          event2.videoId = lib.status.videoId++;
          const createDialog = (player3, identity, id) => {
            var dialog = ui.create.dialog(
              `${get.translation(player3)}展示了“${get.translation(identity + "2")}”的身份牌<br>`,
              "forcebutton"
            );
            dialog.videoId = id;
            ui.create.spinningIdentityCard(identity, dialog);
          };
          game.broadcastAll(createDialog, player2, choice, event2.videoId);
          let color = "";
          if (choice == "zhong") {
            color = "#y";
          } else if (choice == "fan") {
            color = "#g";
          } else if (choice == "nei") {
            color = "#b";
          }
          game.log(player2, "展示了", `${color}${get.translation(choice + "2")}`, "的身份牌");
          await game.delay(3);
          game.broadcastAll("closeDialog", event2.videoId);
          return;
          function createCard(item, type, position, noclick, node) {
            return lib.skill.jxlianpo.$createButton(item, type, position, noclick, node);
          }
        }
      },
      global: {
        mod: {
          maxHandcard(player2, num) {
            if (!lib.skill.jxlianpo.getMax().includes("fan")) {
              return;
            }
            return num - game.countPlayer((current) => {
              return current != player2 && current.hasSkill("jxlianpo");
            });
          },
          cardUsable(card2, player2, num) {
            if (card2.name == "sha") {
              if (!lib.skill.jxlianpo.getMax().includes("fan")) {
                return;
              }
              return num + game.countPlayer((current) => {
                return current.hasSkill("jxlianpo");
              });
            }
          },
          attackRange(player2, num) {
            if (!lib.skill.jxlianpo.getMax().includes("fan")) {
              return;
            }
            return num + game.countPlayer((current) => {
              return current.hasSkill("jxlianpo");
            });
          },
          cardSavable(card2, player2, target2) {
            if (card2.name == "tao" && !player2.hasSkill("jxlianpo")) {
              if (!lib.skill.jxlianpo.getMax().includes("zhu")) {
                return;
              }
              if (player2 == target2) {
                return;
              }
              return false;
            }
          },
          playerEnabled(card2, player2, target2) {
            if (card2.name == "tao" && !player2.hasSkill("jxlianpo")) {
              if (!lib.skill.jxlianpo.getMax().includes("zhu")) {
                return;
              }
              if (player2 == target2) {
                return;
              }
              return false;
            }
          }
        },
        trigger: { player: "dieAfter" },
        filter: () => {
          return !game.hasPlayer((i) => i.hasSkill("jxlianpo", null, null, false), true);
        },
        silent: true,
        forceDie: true,
        content: () => {
          game.removeGlobalSkill("jxlianpo_global");
        }
      }
    }
  },
  jxzhaoluan: {
    trigger: { global: "dieBegin" },
    filter(event2, player2) {
      return event2.getParent().name == "dying" && event2.player.isIn();
    },
    limited: true,
    skillAnimation: true,
    animationColor: "metal",
    logTarget: "player",
    check(event2, player2) {
      if (event2.source && event2.source.isIn() && get.attitude(player2, event2.source) > 0 && player2.identity == "fan") {
        return false;
      }
      return get.attitude(player2, event2.player) > 3.5;
    },
    async content(event2, trigger, player2) {
      var target2 = trigger.player;
      player2.awakenSkill(event2.name);
      trigger.cancel();
      const skills2 = target2.getSkills(null, false, false).filter((skill) => {
        var info = get.info(skill);
        if (info && !info.charlotte && !get.is.locked(skill)) {
          return true;
        }
      });
      if (skills2.length) {
        await target2.removeSkills(skills2);
      }
      await target2.gainMaxHp(3);
      var num = 3 - target2.getHp(true);
      if (num > 0) {
        await target2.recover(num);
      }
      target2.draw(4);
      player2.addSkill("jxzhaoluan_effect");
      player2.markAuto("jxzhaoluan_effect", target2);
    },
    ai: {
      expose: 0.5,
      threaten: 3
    },
    subSkill: {
      effect: {
        audio: "jxzhaoluan",
        enable: "phaseUse",
        filter(event2, player2) {
          return player2.getStorage("jxzhaoluan_effect").some((i) => i.isIn());
        },
        filterTarget(card2, player2, target2) {
          return !player2.getStorage("jxzhaoluan_hit").includes(target2);
        },
        line: false,
        locked: true,
        charlotte: true,
        promptfunc() {
          var bodies = _status.event.player.getStorage("jxzhaoluan_effect").filter((i) => i.isIn());
          return `选择一名角色，你令${get.translation(bodies)}${bodies.length > 1 ? "中的一人" : ""}减1点体力上限，然后你对选择的角色造成1点伤害。`;
        },
        delay: false,
        async content(event2, trigger, player2) {
          const bodies = player2.getStorage("jxzhaoluan_effect").filter((target3) => target3.isIn());
          let result2;
          if (bodies.length == 1) {
            result2 = { bool: true, targets: bodies };
          } else {
            result2 = await player2.chooseTarget("兆乱：请选择被减上限的傀儡", true, (card2, player3, target3) => {
              return get.event().targets.includes(target3);
            }).set("targets", bodies).set("ai", (target3) => {
              return 8 - get.attitude(_status.event.player, target3);
            }).forResult();
          }
          if (!result2.bool) {
            return;
          }
          const target2 = result2.targets[0];
          player2.line(target2);
          await target2.loseMaxHp();
          await game.delayex();
          player2.line(target2);
          await target2.damage();
          if (!player2.storage.jxzhaoluan_hit) {
            player2.when("phaseUseAfter").step(async (event3, trigger2, player3) => {
              delete player3.storage.jxzhaoluan_hit;
            });
          }
          player2.markAuto("jxzhaoluan_hit", target2);
        },
        ai: {
          order: 9,
          result: {
            player(player2) {
              var bodies = player2.getStorage("jxzhaoluan_effect").filter((i) => i.isIn());
              var body;
              if (bodies.length == 1) {
                body = bodies[0];
              } else {
                body = bodies.sort((a, b) => get.attitude(player2, a) - get.attitude(player2, b))[0];
              }
              if (get.attitude(player2, body) > 4 && !body.isDamaged() && body.getHp() <= 2) {
                return -10;
              }
              return 0;
            },
            target(player2, target2) {
              return Math.sign(get.damageEffect(target2, player2, target2));
            }
          }
        }
      }
    }
  },
  //神典韦
  juanjia: {
    audio: 2,
    trigger: {
      global: "phaseBefore",
      player: "enterGame"
    },
    forced: true,
    filter(event2, player2) {
      return (event2.name != "phase" || game.phaseNumber == 0) && player2.hasEnabledSlot(2);
    },
    async content(event2, trigger, player2) {
      await player2.disableEquip(2);
      await player2.expandEquip(1);
    }
  },
  qiexie: {
    audio: 2,
    trigger: { player: "phaseZhunbeiBegin" },
    forced: true,
    filter(event2, player2) {
      return player2.countEmptySlot(1) > 0;
    },
    async content(event2, trigger, player2) {
      if (!_status.characterlist) {
        game.initCharacterList();
      }
      _status.characterlist.randomSort();
      const list = [];
      outer: for (const name of _status.characterlist) {
        const info = lib.character[name];
        for (const skill of info[3]) {
          const info2 = get.skillInfoTranslation(skill);
          if (!info2.includes("【杀】")) {
            continue outer;
          }
          const list2 = get.skillCategoriesOf(skill, player2);
          list2.remove("锁定技");
          if (list2.length == 0) {
            break;
          }
          continue outer;
        }
        list.push(name);
        if (list.length >= 5) {
          break;
        }
      }
      if (!list.length) {
        return;
      }
      const num = player2.countEmptySlot(1);
      const vcards = [list, createCard];
      const title = `挈挟：选择${num > 1 ? "至多" : ""}${get.cnNumber(num)}张武将置入武器栏`;
      const page = [title, vcards];
      const next = player2.chooseButton(page, [1, num], true, "allowChooseAll");
      next.set("ai", processAI);
      const result2 = await next.forResult();
      if (result2.bool) {
        const list2 = result2.links;
        game.addVideo("skill", player2, ["qiexie", [list2]]);
        _status.characterlist.removeArray(list2);
        game.broadcastAll(
          (player3, list3) => {
            player3.tempname.addArray(list3);
            for (var name of list3) {
              lib.skill.qiexie.createCard(name);
            }
          },
          player2,
          list2
        );
        const cards2 = list2.map((name) => {
          const card2 = game.createCard(`qiexie_${name}`, "none", "none");
          return card2;
        });
        player2.$gain2(cards2);
        await game.delayx();
        for (const card2 of cards2) {
          player2.equip(card2);
        }
      }
      return;
      function createCard(item, type, position, noclick, node) {
        return lib.skill.qiexie.$createButton(item, type, position, noclick, node);
      }
      function processAI(button) {
        const name = button.link;
        const info = lib.character[name];
        const skills2 = info[3].filter((skill) => {
          const info2 = get.skillInfoTranslation(skill);
          if (!info2.includes("【杀】")) {
            return false;
          }
          const list2 = get.skillCategoriesOf(skill, get.player());
          list2.remove("锁定技");
          return list2.length == 0;
        });
        let eff = 0.2;
        for (const skill of skills2) {
          eff += get.skillRank(skill, "in");
        }
        return eff;
      }
    },
    $createButton(item, type, position, noclick, node) {
      node = ui.create.buttonPresets.character(item, "character", position, noclick);
      const info = lib.character[item];
      const skills2 = info[3].filter(function(skill) {
        var info2 = get.skillInfoTranslation(skill);
        if (!info2.includes("【杀】")) {
          return false;
        }
        var list = get.skillCategoriesOf(skill, get.player());
        list.remove("锁定技");
        return list.length == 0;
      });
      if (skills2.length) {
        const skillstr = skills2.map((i) => `[${get.translation(i)}]`).join("<br>");
        const skillnode = ui.create.caption(
          `<div class="text" data-nature=${get.groupnature(info[1], "raw")}m style="font-family: ${lib.config.name_font || "xinwei"},xinwei">${skillstr}</div>`,
          node
        );
        skillnode.style.left = "2px";
        skillnode.style.bottom = "2px";
      }
      node._customintro = function(uiintro, evt) {
        const character = node.link, characterInfo = get.character(node.link);
        let capt = get.translation(character);
        if (characterInfo) {
          const infoHp = get.infoMaxHp(characterInfo[2]);
          capt += `&nbsp;&nbsp;范围：${infoHp}`;
        }
        uiintro.add(capt);
        if (lib.characterTitle[node.link]) {
          uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
        }
        for (let i = 0; i < skills2.length; i++) {
          if (lib.translate[skills2[i] + "_info"]) {
            let translation = lib.translate[skills2[i] + "_ab"] || get.translation(skills2[i]).slice(0, 2);
            if (lib.skill[skills2[i]] && lib.skill[skills2[i]].nobracket) {
              uiintro.add(
                '<div><div class="skilln">' + get.translation(skills2[i]) + "</div><div>" + get.skillInfoTranslation(skills2[i], null, false) + "</div></div>"
              );
            } else {
              uiintro.add(
                '<div><div class="skill">【' + translation + "】</div><div>" + get.skillInfoTranslation(skills2[i], null, false) + "</div></div>"
              );
            }
            if (lib.translate[skills2[i] + "_append"]) {
              uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills2[i] + "_append"] + "</div>");
            }
          }
        }
      };
      return node;
    },
    video(player2, info) {
      for (var name of info[0]) {
        lib.skill.qiexie.createCard(name);
      }
    },
    createCard(name) {
      if (!_status.postReconnect.qiexie) {
        _status.postReconnect.qiexie = [
          function(list) {
            for (var name2 of list) {
              lib.skill.qiexie.createCard(name2);
            }
          },
          []
        ];
      }
      _status.postReconnect.qiexie[1].add(name);
      if (!lib.card["qiexie_" + name]) {
        if (lib.translate[name + "_ab"]) {
          lib.translate["qiexie_" + name] = lib.translate[name + "_ab"];
        } else {
          lib.translate["qiexie_" + name] = lib.translate[name];
        }
        var info = lib.character[name];
        var card2 = {
          fullimage: true,
          image: "character:" + name,
          type: "equip",
          subtype: "equip1",
          enable: true,
          selectTarget: -1,
          filterTarget(card3, player2, target2) {
            if (player2 != target2) {
              return false;
            }
            return target2.canEquip(card3, true);
          },
          modTarget: true,
          allowMultiple: false,
          content: lib.element.content.equipCard,
          toself: true,
          ai: {},
          skills: ["qiexie_destroy"]
        };
        var maxHp = get.infoMaxHp(info[2]);
        if (maxHp != 1) {
          card2.distance = { attackFrom: 1 - maxHp };
        }
        var skills2 = info[3].filter(function(skill2) {
          var info2 = get.skillInfoTranslation(skill2);
          if (!info2.includes("【杀】")) {
            return false;
          }
          var list = get.skillCategoriesOf(skill2, get.player());
          list.remove("锁定技");
          return list.length == 0;
        });
        var str = "锁定技。";
        if (skills2.length) {
          card2.skills.addArray(skills2);
          str += "你视为拥有技能";
          for (var skill of skills2) {
            str += "〖" + get.translation(skill) + "〗";
            str += "、";
          }
          str = str.slice(0, str.length - 1);
          str += "；";
          card2.ai.equipValue = function(card3, player2) {
            let val = maxHp;
            if (player2.hasSkill("qiexie")) {
              val *= 0.4;
            } else {
              val *= 0.6;
            }
            return val += skills2.length;
          };
        }
        str += "此牌离开你的装备区后，改为置入剩余武将牌牌堆。";
        lib.translate["qiexie_" + name + "_info"] = str;
        var append = "";
        if (skills2.length) {
          for (var skill of skills2) {
            if (lib.skill[skill].nobracket) {
              append += '<div class="skilln">' + get.translation(skill) + '</div><div><span style="font-family: yuanli">' + get.skillInfoTranslation(skill) + "</span></div><br><br>";
            } else {
              var translation = lib.translate[skill + "_ab"] || get.translation(skill).slice(0, 2);
              append += '<div class="skill">【' + translation + '】</div><div><span style="font-family: yuanli">' + get.skillInfoTranslation(skill) + "</span></div><br><br>";
            }
          }
          str = str.slice(0, str.length - 8);
        }
        lib.translate["qiexie_" + name + "_append"] = append;
        lib.card["qiexie_" + name] = card2;
        game.finishCard("qiexie_" + name);
      }
    },
    subSkill: {
      destroy: {
        trigger: { player: "loseBegin" },
        equipSkill: true,
        forceDie: true,
        charlotte: true,
        forced: true,
        popup: false,
        filter(event2, player2) {
          return event2.cards.some((card2) => card2.name.indexOf("qiexie_") == 0);
        },
        async content(event2, trigger, player2) {
          for (const card2 of trigger.cards) {
            if (card2.name.indexOf("qiexie_") == 0) {
              card2._destroy = true;
              game.log(card2, "被放回武将牌堆");
              const name = card2.name.slice(7);
              if (player2.tempname && player2.tempname.includes(name)) {
                game.broadcastAll(
                  (player3, name2) => {
                    player3.tempname.remove(name2);
                  },
                  player2,
                  name
                );
              }
              if (lib.character[name]) {
                _status.characterlist.add(name);
              }
            }
          }
        }
      }
    }
  },
  cuijue: {
    audio: 2,
    enable: "phaseUse",
    filter(event2, player2) {
      return player2.countCards("he") > 0;
    },
    filterCard: true,
    filterTarget(card2, player2, target2) {
      if (player2.getStorage("cuijue_used").includes(target2) || !player2.inRange(target2)) {
        return false;
      }
      var distance = get.distance(player2, target2);
      return !game.hasPlayer((current) => current != target2 && player2.inRange(current) && get.distance(player2, current) > distance);
    },
    selectTarget: [0, 1],
    filterOk() {
      var player2 = _status.event.player;
      if (game.hasPlayer((target2) => lib.skill.cuijue.filterTarget("SB", player2, target2))) {
        return ui.selected.targets.length > 0;
      }
      return true;
    },
    position: "he",
    complexTarget: true,
    check: (card2) => {
      var player2 = _status.event.player, goon = 0;
      try {
        ui.selected.cards.add(card2);
        if (game.hasPlayer((target2) => {
          return lib.skill.cuijue.filterTarget("SB", player2, target2);
        })) {
          goon = 6;
        }
      } catch (e) {
        console.trace(e);
      }
      ui.selected.cards.remove(card2);
      return goon - get.value(card2);
    },
    async content(event2, trigger, player2) {
      const { target: target2 } = event2;
      if (target2) {
        player2.addTempSkill("cuijue_used", "phaseUseAfter");
        player2.markAuto("cuijue_used", [target2]);
        target2.damage("nocard");
      }
    },
    ai: {
      order: 2,
      result: {
        target: -1.5
      },
      tag: {
        damage: 1
      }
    },
    subSkill: {
      used: {
        onremove: true,
        charlotte: true
      }
    }
  },
  //神邓艾
  dctuoyu: {
    audio: 2,
    trigger: { player: ["phaseUseBegin", "phaseUseEnd"] },
    filter(event2, player2) {
      return player2.countCards("h") > 0 && player2.getStorage("dctuoyu").length > 0;
    },
    forced: true,
    async content(event2, trigger, player2) {
      var hs = player2.getCards("h"), tags = ["dctuoyu_fengtian", "dctuoyu_qingqu", "dctuoyu_junshan"];
      var storage = player2.getStorage("dctuoyu");
      var list = [
        ["未分配手牌", []],
        [get.translation(tags[0] + "_tag") + '<div class="text center">伤害/回复值+1</div>', []],
        [get.translation(tags[1] + "_tag") + '<div class="text center">无次数和距离限制</div>', []],
        [get.translation(tags[2] + "_tag") + '<div class="text center">不可被响应</div>', []]
      ];
      for (var card2 of hs) {
        var added = false;
        for (var i = 0; i < tags.length; i++) {
          if (card2.hasGaintag(tags[i] + "_tag")) {
            added = true;
            list[i + 1][1].push(card2);
            break;
          }
        }
        if (!added) {
          list[0][1].push(card2);
        }
      }
      for (var i = 0; i < tags.length; i++) {
        if (!storage.includes(tags[i])) {
          list[i + 1][0] = get.translation(tags[i] + "_tag") + '<div class="text center">尚未激活</div>';
        }
      }
      list = [list[0], list.slice(1)];
      var next = player2.chooseToMove_new("拓域：请分配你的手牌", true);
      next.set("list", list);
      next.set("filterMove", function(from, to, moved) {
        var player3 = _status.event.player;
        var storage2 = player3.getStorage("dctuoyu"), tags2 = ["dctuoyu_fengtian", "dctuoyu_qingqu", "dctuoyu_junshan"];
        if (typeof to == "number") {
          if (to == 0) {
            return true;
          }
          return storage2.includes(tags2[to - 1]) && moved[to].length < 5;
        }
        return true;
      });
      next.set("processAI", function() {
        var player3 = _status.event.player;
        var storage2 = player3.getStorage("dctuoyu"), tags2 = ["dctuoyu_fengtian", "dctuoyu_qingqu", "dctuoyu_junshan"];
        var moved = [[], [], [], []];
        var isEmpty = function(to) {
          return storage2.includes(tags2[to - 1]) && moved[to].length < 5;
        };
        var hs2 = player3.getCards("h");
        var hs22 = hs2.slice(0);
        var usable = player3.getCardUsable("sha");
        var addTo = function(card4, to) {
          if (isEmpty(to)) {
            hs22.remove(card4);
            moved[to].push(card4);
            if (get.name(card4) == "sha" && to != 2) {
              usable--;
            }
          }
        };
        var hasRuanshizi = game.hasPlayer(function(target2) {
          return target2 != player3 && player3.canUse("sha", target2, null, true) && !target2.mayHaveShan(player3, "use") && get.attitude(player3, target2) < 0 && get.effect(target2, { name: "sha" }, player3, player3) > 0;
        });
        for (var card3 of hs2) {
          var name = get.name(card3);
          if (name == "tao" || name == "jiu") {
            addTo(card3, 1);
          } else if (name == "sha") {
            if (hasRuanshizi && isEmpty(1) && usable > 0) {
              addTo(card3, 1);
            } else if (isEmpty(3) && usable > 0) {
              addTo(card3, 3);
            } else {
              addTo(card3, 2);
            }
          } else if (get.type(name) == "trick") {
            if (isEmpty(1) && get.tag(card3, "damage") > 0 && player3.hasUseTarget(card3)) {
              addTo(card3, 1);
            } else {
              addTo(card3, 3);
            }
          }
        }
        moved[0].addArray(hs22);
        return moved;
      });
      var result2 = await next.forResult();
      if (result2.bool) {
        game.broadcastAll(
          function(moved, player3) {
            if (player3 == game.me) {
              const cards2 = moved.flat(1).reverse();
              game.addVideo("lose", game.me, [get.cardsInfo(cards2), [], [], []]);
              for (var i2 = 0; i2 < cards2.length; i2++) {
                cards2[i2].goto(ui.special);
              }
              game.me.directgain(cards2, false);
            }
            var tags2 = ["dctuoyu_fengtian", "dctuoyu_qingqu", "dctuoyu_junshan"];
            var map = {};
            for (var i2 = 0; i2 < moved.length; i2++) {
              for (var card3 of moved[i2]) {
                for (var j = 0; j < tags2.length; j++) {
                  const tag = `${tags2[j]}_tag`;
                  const glowClass = `dctuoyu-${tags2[j].replace("dctuoyu_", "")}-glow`;
                  if (!map[tag]) {
                    map[tag] = [[], []];
                  }
                  if (i2 == j + 1) {
                    map[tag][0].add(card3);
                    if (!card3.hasGaintag(tag)) {
                      card3.addGaintag(tag);
                      card3.classList.add(glowClass);
                    }
                  } else {
                    if (card3.hasGaintag(tag)) {
                      map[tag][1].add(card3);
                      card3.removeGaintag(tag);
                      card3.classList.remove(glowClass);
                    }
                  }
                }
              }
            }
            for (const tag in map) {
              if (map[tag][0].length) {
                game.addVideo("addGaintag", player3, [get.cardsInfo(map[tag][0]), tag]);
                for (const card4 of map[tag][0]) {
                  const glowClass = `dctuoyu-${tag.replace("_tag", "").replace("dctuoyu_", "")}-glow`;
                  card4.classList.add(glowClass);
                }
                game.addVideo("skill", player3, ["dctuoyu", [true, get.cardsInfo(map[tag][0]), tag]]);
              }
              if (map[tag][1].length) {
                game.addVideo("removeGaintag", player3, [tag, get.cardsInfo(map[tag][1])]);
                for (const card4 of map[tag][1]) {
                  const glowClass = `dctuoyu-${tag.replace("_tag", "").replace("dctuoyu_", "")}-glow`;
                  card4.classList.remove(glowClass);
                }
                game.addVideo("skill", player3, ["dctuoyu", [false, get.cardsInfo(map[tag][1]), tag]]);
              }
            }
            game.addVideo("delay", null, 1);
          },
          result2.moved,
          player2
        );
      }
    },
    video(player2, info) {
      const glowClass = `dctuoyu-${info[2].replace("_tag", "").replace("dctuoyu_", "")}-glow`;
      for (const cardid of info[1]) {
        for (const card2 of player2.getCards("h")) {
          if (card2.cardid === cardid[4]) {
            card2.classList[info[0] ? "add" : "remove"](glowClass);
          }
        }
      }
    },
    init(player2) {
      game.broadcastAll((player3) => {
        const observer = new MutationObserver((mutationsList) => {
          const tags = ["dctuoyu_fengtian", "dctuoyu_qingqu", "dctuoyu_junshan"];
          for (const mutation of mutationsList) {
            if (mutation.type === "childList") {
              for (const card2 of mutation.addedNodes) {
                if (card2.nodeType === Node.ELEMENT_NODE && get.itemtype(card2) === "card") {
                  for (let i = 0; i < tags.length; i++) {
                    const glowClass = `dctuoyu-${tags[i].replace("dctuoyu_", "")}-glow`;
                    if (card2.hasGaintag(tags[i] + "_tag") && !card2.classList.contains(glowClass)) {
                      game.broadcastAll(
                        (card3, glowClass2, tag) => {
                          card3.classList.add(glowClass2);
                          game.addVideo("skill", player3, ["dctuoyu", [true, [get.cardInfo(card3)], tag]]);
                        },
                        card2,
                        glowClass,
                        tags[i]
                      );
                    }
                  }
                }
              }
              for (const card2 of mutation.removedNodes) {
                if (card2.nodeType === Node.ELEMENT_NODE && get.itemtype(card2) === "card") {
                  for (let i = 0; i < tags.length; i++) {
                    const glowClass = `dctuoyu-${tags[i].replace("dctuoyu_", "")}-glow`;
                    if (card2.classList.contains(glowClass)) {
                      game.broadcastAll(
                        (card3, glowClass2, tag) => {
                          card3.classList.remove(glowClass2);
                          game.addVideo("skill", player3, ["dctuoyu", [false, [get.cardInfo(card3)], tag]]);
                        },
                        card2,
                        glowClass,
                        tags[i]
                      );
                    }
                  }
                }
              }
            }
          }
        });
        const config = { childList: true };
        observer.observe(player3.node.handcards1, config);
        observer.observe(player3.node.handcards2, config);
        player3._dctuoyu_observer = observer;
      }, player2);
    },
    onremove(player2) {
      game.broadcastAll((player3) => {
        if (player3._dctuoyu_observer) {
          player3._dctuoyu_observer.disconnect();
          delete player3._dctuoyu_observer;
        }
        const tags = ["dctuoyu_fengtian", "dctuoyu_qingqu", "dctuoyu_junshan"];
        for (const card2 of player3.getCards("h")) {
          for (let i = 0; i < tags.length; i++) {
            const tag = tags[i] + "_tag";
            if (card2.hasGaintag(tag)) {
              card2.removeGaintag(tag);
              game.addVideo("removeGaintag", player3, [tag, [get.cardInfo(card2)]]);
              const glowClass = `dctuoyu-${tags[i].replace("dctuoyu_", "")}-glow`;
              card2.classList.add(glowClass);
              game.addVideo("skill", player3, ["dctuoyu", [true, [get.cardInfo(card2)], tags[i]]]);
            }
          }
        }
      }, player2);
    },
    intro: { content: "已激活的副区域：$" },
    group: "dctuoyu_effect",
    subSkill: {
      effect: {
        mod: {
          targetInRange(card2, player2, target2) {
            if (get.suit(card2) == "unsure") {
              return true;
            }
            if (!card2.cards) {
              return;
            }
            for (var i of card2.cards) {
              if (i.hasGaintag("dctuoyu_qingqu_tag")) {
                return true;
              }
            }
          },
          cardUsable(card2, player2, num) {
            if (get.suit(card2) == "unsure") {
              return Infinity;
            }
            if (!card2.cards) {
              return;
            }
            for (var i of card2.cards) {
              if (i.hasGaintag("dctuoyu_qingqu_tag")) {
                return Infinity;
              }
            }
          }
        },
        audio: "dctuoyu",
        trigger: { player: "useCard" },
        forced: true,
        filter(event2, player2) {
          return player2.hasHistory("lose", (evt) => {
            const evtx = evt.relatedEvent || evt.getParent();
            if (evtx !== event2) {
              return false;
            }
            return Object.values(evt.gaintag_map).flat().containsSome("dctuoyu_fengtian_tag", "dctuoyu_qingqu_tag", "dctuoyu_junshan_tag");
          });
        },
        async content(event2, trigger, player2) {
          const tags = ["dctuoyu_fengtian_tag", "dctuoyu_qingqu_tag", "dctuoyu_junshan_tag"];
          player2.hasHistory("lose", (evt) => {
            const evtx = evt.relatedEvent || evt.getParent();
            if (evtx != trigger) {
              return false;
            }
            for (const i in evt.gaintag_map) {
              tags.removeArray(evt.gaintag_map[i]);
            }
            return tags.length == 0;
          });
          const card2 = trigger.card;
          if (!tags.includes("dctuoyu_fengtian_tag")) {
            if (get.tag(card2, "damage") > 0 || get.tag(card2, "recover") > 0) {
              trigger.baseDamage++;
              game.log(card2, "的伤害值/回复值+1");
            }
          }
          if (!tags.includes("dctuoyu_qingqu_tag")) {
            if (trigger.addCount !== false) {
              trigger.addCount = false;
              let stat = player2.getStat("card");
              if (stat[card2.name] && stat[card2.name] > 0) {
                stat[card2.name]--;
              }
              game.log(card2, "不计入次数限制");
            }
          }
          if (!tags.includes("dctuoyu_junshan_tag")) {
            game.log(card2, "不可被响应");
            trigger.directHit.addArray(game.filterPlayer());
          }
        }
      }
    },
    ai: { combo: "dcxianjin" }
  },
  dcxianjin: {
    audio: 2,
    trigger: {
      player: "damageEnd",
      source: "damageSource"
    },
    filter(event2, player2, name) {
      let history = game.getAllGlobalHistory("everything", (evt) => {
        if (evt.name !== "damage" || !evt.player.getAllHistory("damage").includes(evt)) {
          return false;
        }
        return evt.player === player2 || evt.source === player2;
      });
      history = history.map((evt) => {
        let list2 = [];
        if (evt.source === player2) {
          list2.push([evt, "damageSource"]);
        }
        if (evt.player === player2) {
          list2.push([evt, "damageEnd"]);
        }
        return list2;
      }).flat();
      let list = history.find((lit) => lit[0] === event2 && lit[1] === name);
      return list && history.indexOf(list) % 2 === 1;
    },
    forced: true,
    async content(event2, trigger, player2) {
      let tags = ["dctuoyu_fengtian", "dctuoyu_qingqu", "dctuoyu_junshan"];
      tags.removeArray(player2.getStorage("dctuoyu"));
      if (tags.length > 0) {
        const control = tags.length === 1 ? tags[0] : (await player2.chooseControl(tags).set(
          "choiceList",
          tags.map((tag) => {
            return `${get.translation(`${tag}_tag`)}：${{
              dctuoyu_fengtian: "伤害/回复值+1",
              dctuoyu_qingqu: "无次数和距离限制",
              dctuoyu_junshan: "不可被响应"
            }[tag]}`;
          })
        ).set("displayIndex", false).set("prompt", "险峻：选择激活一个副区域标签").forResult()).control;
        game.log(player2, "激活了副区域", "#y" + get.translation(control));
        player2.markAuto("dctuoyu", [control]);
        player2.popup(get.translation(control + "_tag"));
      }
      await player2.draw(player2.isMaxHandcard() ? 1 : player2.getStorage("dctuoyu").length);
    },
    ai: {
      effect: {
        player(card2, player2, target2) {
          if (!get.tag(card2, "damage") || player2.hasSkillTag("jueqing", false, target2)) {
            return;
          }
          let history = game.getAllGlobalHistory("everything", (evt) => {
            if (evt.name !== "damage" || !evt.player.getAllHistory("damage").includes(evt)) {
              return false;
            }
            return evt.player === player2 || evt.source === player2;
          });
          if (history.reduce((sum, evt) => {
            if (evt.source === player2) {
              sum++;
            }
            if (evt.player === player2) {
              sum++;
            }
            return sum;
          }, 0) % 2 === 0) {
            return;
          }
          if (player2.isMaxHandcard()) {
            return [1, 1];
          }
          return [1, Math.min(3, 1 + player2.getStorage("dctuoyu").length)];
        }
      }
    }
  },
  dcqijing: {
    derivation: "dccuixin",
    audio: 2,
    trigger: { global: "phaseEnd" },
    filter(event2, player2) {
      return player2.getStorage("dctuoyu").length == 3;
    },
    forced: true,
    juexingji: true,
    skillAnimation: true,
    animationColor: "orange",
    seatRelated: "changeSeat",
    async content(event2, trigger, player2) {
      player2.awakenSkill(event2.name);
      player2.loseMaxHp();
      player2.addSkills("dccuixin");
      if (game.countPlayer() > 2) {
        if (player2 == trigger.player && !trigger.skill) {
          var evt = trigger.getParent();
          if (evt.name == "phaseLoop" && evt._isStandardLoop) {
            evt.player = player2.previous;
            _status.lastPhasedPlayer = player2.next;
          }
        }
        var result2 = await player2.chooseTarget(
          "请选择一名要更换座次的角色，将自己移动到该角色的上家位置",
          function(card2, player3, target3) {
            return target3 != player3 && target3 != player3.next;
          },
          true
        ).set("ai", function(target3) {
          var player3 = _status.event.player;
          var current = _status.currentPhase?.next;
          var max = 20, att = 0;
          while (max > 0) {
            max--;
            if (current == target3) {
              return att;
            }
            att -= get.attitude(player3, current);
            current = current.next;
          }
          return att;
        }).forResult();
        if (result2.bool) {
          var target2 = result2.targets[0];
          game.broadcastAll(
            function(target1, target22) {
              game.swapSeat(target1, target22, null, true);
            },
            player2,
            target2
          );
        }
      }
      player2.insertPhase();
    },
    ai: {
      combo: "dctuoyu"
    }
  },
  dccuixin: {
    audio: 2,
    trigger: { player: "useCardAfter" },
    filter(event2, player2) {
      if (!event2._dccuixin || get.type(event2.card, null, false) == "delay" || get.type(event2.card, null, false) == "equip") {
        return false;
      }
      var card2 = {
        name: event2.card.name,
        nature: event2.card.nature,
        isCard: true
      }, list = event2._dccuixin;
      for (var target2 of list) {
        var targetx = player2[target2]();
        if (lib.filter.targetEnabled2(card2, targetx, player2)) {
          return true;
        }
      }
      return false;
    },
    direct: true,
    async content(event2, trigger, player2) {
      const card2 = {
        name: trigger.card.name,
        nature: trigger.card.nature,
        isCard: true
      };
      event2.card = card2;
      const targets = trigger._dccuixin.map((target2) => player2[target2]()).filter((target2) => lib.filter.targetEnabled2(card2, target2, player2));
      let result2;
      if (targets.length == 1) {
        event2.target = targets[0];
        result2 = await player2.chooseBool("摧心：是否视为对" + get.translation(event2.target) + "使用" + get.translation(card2) + "？").set("goon", get.effect(event2.target, card2, player2, player2) > 0).set("ai", () => get.event().goon).forResult();
      } else {
        result2 = await player2.chooseTarget(
          "摧心：是否视为对上家或下家使用" + get.translation(card2) + "？",
          "操作提示：从上家或下家中选择一名角色作为使用目标",
          (card3, player3, target2) => {
            return (target2 == player3.getNext() || target2 == player3.getPrevious()) && lib.filter.targetEnabled2(event2.card, target2, player3);
          }
        ).set("ai", (target2) => {
          const player3 = get.player();
          return get.effect(target2, event2.card, player3, player3);
        }).forResult();
      }
      if (result2.bool) {
        const target2 = event2.target || result2.targets;
        player2.useCard(card2, target2, false, "dccuixin");
      }
    },
    group: "dccuixin_silent",
    subSkill: {
      silent: {
        trigger: { player: "useCardToPlayered" },
        silent: true,
        forced: true,
        popup: false,
        firstDo: true,
        charlotte: true,
        filter(event2, player2) {
          if (!event2.isFirstTarget || event2.getParent().skill == "dccuixin") {
            return false;
          }
          if (event2.targets.length == 0) {
            return false;
          }
          return event2.targets.includes(player2.getNext()) || event2.targets.includes(player2.getPrevious());
        },
        async content(event2, trigger, player2) {
          var list = [];
          if (trigger.targets.includes(player2.getNext())) {
            list.push("getPrevious");
          }
          if (trigger.targets.includes(player2.getPrevious())) {
            list.push("getNext");
          }
          trigger.getParent()._dccuixin = list;
        }
      }
    }
  },
  //海外神吕蒙
  twshelie: {
    audio: "shelie",
    inherit: "shelie",
    prompt2: () => lib.translate.shelie_info,
    group: "twshelie_jingce",
    //什么精策技能啊喂！
    subSkill: {
      round: { charlotte: true },
      count: {
        charlotte: true,
        onremove: true,
        intro: {
          markcount(storage) {
            return storage.length;
          },
          content: "本回合已使用$花色的牌"
        }
      },
      jingce: {
        audio: "shelie",
        trigger: { player: ["phaseJieshuBegin", "useCard1"] },
        filter(event2, player2) {
          if (player2.hasSkill("twshelie_round") || player2 != _status.currentPhase) {
            return false;
          }
          var list = [];
          player2.getHistory("useCard", function(evt) {
            if (lib.suit.includes(get.suit(evt.card)) && !list.includes(get.suit(evt.card))) {
              list.push(get.suit(evt.card));
            }
          });
          if (list.length) {
            player2.addTempSkill("twshelie_count");
            player2.storage.twshelie_count = list.sort(function(a, b) {
              return lib.suit.indexOf(b) - lib.suit.indexOf(a);
            });
            player2.markSkill("twshelie_count");
            player2.syncStorage("twshelie_count");
          }
          return event2.name != "useCard" && list.length >= 4;
        },
        forced: true,
        locked: false,
        async content(event2, trigger, player2) {
          player2.addTempSkill("twshelie_round", "roundStart");
          let result2;
          if (typeof player2.storage.twshelie == "number") {
            result2 = { index: player2.storage.twshelie };
          } else {
            result2 = await player2.chooseControl("摸牌阶段", "出牌阶段").set("prompt", "涉猎：请选择要执行的额外阶段").forResult();
          }
          player2.setStorage("twshelie", 1 - result2.index);
          const evt = trigger.getParent("phase", true, true);
          if (result2.index == 0) {
            if (evt?.phaseList) {
              evt.phaseList.splice(evt.num + 1, 0, "phaseDraw|twshelie");
            }
          }
          if (result2.index == 1) {
            if (evt?.phaseList) {
              evt.phaseList.splice(evt.num + 1, 0, "phaseUse|twshelie");
            }
          }
        }
      }
    }
  },
  twgongxin: {
    audio: "gongxin",
    enable: "phaseUse",
    filter(event2, player2) {
      return game.hasPlayer(function(current) {
        return current != player2 && current.countCards("h");
      });
    },
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.countCards("h") > 0;
    },
    usable: 1,
    async content(event2, trigger, player2) {
      const { target: target2 } = event2;
      const cards2 = target2.getCards("h");
      const num = cards2.reduce(function(arr, card2) {
        arr.add(get.suit(card2, player2));
        return arr;
      }, []).length;
      const result2 = await player2.chooseToMove_new("攻心").set("list", [
        [get.translation(target2) + "的手牌", cards2],
        [["弃置"], ["置于牌堆顶"]]
      ]).set("filterOk", (moved) => {
        return moved[1].slice().concat(moved[2]).length == 1;
      }).set("processAI", (list) => {
        let card2 = list[0][1].slice().sort((a, b) => {
          return get.value(b) - get.value(a);
        })[0];
        if (!card2) {
          return false;
        }
        return [list[0][1].slice().remove(card2), [card2], []];
      }).forResult();
      if (result2.bool) {
        if (result2.moved[1].length) {
          await target2.modedDiscard(result2.moved[1]);
        } else {
          await player2.showCards(result2.moved[2], get.translation(player2) + "对" + get.translation(target2) + "发动了【攻心】");
          await target2.lose(result2.moved[2], ui.cardPile, "visible", "insert");
        }
        if (num > target2.getCards("h").reduce(function(arr, card2) {
          arr.add(get.suit(card2, target2));
          return arr;
        }, []).length) {
          player2.line(target2);
          player2.addTempSkill("twgongxin3", { player: ["twgongxin3After", "phaseAfter"] });
          player2.markAuto("twgongxin3", [target2]);
        }
      }
    },
    ai: {
      order: 10,
      expose: 0.25,
      result: {
        target(player2, target2) {
          return -target2.countCards("h");
        }
      }
    }
  },
  twgongxin2: {
    mod: {
      cardEnabled2(card2, player2) {
        const color = get.color(card2);
        if (color != "unsure" && player2.getStorage("twgongxin2").includes(color)) {
          return false;
        }
      }
    },
    charlotte: true,
    onremove: true,
    intro: { content: "本回合内不能使用或打出$牌" }
  },
  twgongxin3: {
    charlotte: true,
    onremove: true,
    intro: { content: "$不可响应你本回合使用的下一张牌" },
    trigger: { player: "useCard" },
    forced: true,
    popup: false,
    sourceSkill: "twgongxin",
    async content(event2, trigger, player2) {
      await game.delayx();
      const targets = player2.getStorage("twgongxin3");
      player2.line(targets, "fire");
      trigger.directHit.addArray(targets);
    }
  },
  //神张角
  yizhao: {
    audio: 2,
    trigger: {
      player: ["useCard", "respond"]
    },
    forced: true,
    filter(event2, player2) {
      const number = get.number(event2.card);
      return typeof number == "number" && number > 0;
    },
    marktext: "黄",
    intro: {
      name: "黄(异兆/肆军)",
      name2: "黄",
      content: "mark",
      markcount(storage, player2) {
        return (storage || 0).toString().slice(-2);
      }
    },
    async content(event2, trigger, player2) {
      event2.num = player2.countMark("yizhao");
      player2.addMark("yizhao", get.number(trigger.card));
      const num = Math.floor(event2.num / 10) % 10;
      const num2 = Math.floor(player2.countMark("yizhao") / 10) % 10;
      if (num != num2) {
        const card2 = get.cardPile2((card3) => {
          return get.number(card3, false) == num2;
        });
        if (card2) {
          await player2.gain(card2, "gain2");
        }
      }
    },
    mod: {
      aiOrder(player2, card2, num) {
        if (Math.floor((get.number(card2) + player2.countMark("yizhao") % 10) / 10) == 1) {
          return num + 10;
        }
      }
    },
    ai: {
      threaten: 1.5,
      effect: {
        target_use(card2, player2, target2, current) {
          if (get.type(card2) == "equip" && !get.cardtag(card2, "gifts")) {
            return [1, 0.1];
          }
        }
      }
    }
  },
  sijun: {
    audio: 2,
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      return player2.countMark("yizhao") > ui.cardPile.childNodes.length;
    },
    check(event2, player2) {
      return ui.cardPile.childNodes.length;
    },
    async content(event2, trigger, player2) {
      player2.removeMark("yizhao", player2.countMark("yizhao"));
      await game.washCard();
      const pile = Array.from(ui.cardPile.childNodes);
      if (pile.length < 3) {
        return;
      }
      const max = Math.pow(2, Math.min(100, pile.length));
      let bool = false;
      let index;
      for (let i = 0; i < max; i++) {
        let num = 0;
        index = i.toString(2);
        while (index.length < pile.length) {
          index = "0" + index;
        }
        for (var k = 0; k < index.length; k++) {
          if (index[k] == "1") {
            num += get.number(pile[k]);
          }
          if (num > 36) {
            break;
          }
        }
        if (num == 36) {
          bool = true;
          break;
        }
      }
      if (bool) {
        const cards2 = [];
        for (let i = 0; i < index.length; i++) {
          if (index[i] == "1") {
            cards2.push(pile[i]);
          }
        }
        await player2.gain(cards2, "gain2");
      }
    },
    ai: {
      combo: "yizhao"
    }
  },
  sanshou: {
    audio: 2,
    trigger: { player: "damageBegin4" },
    check(event2, player2) {
      return get.damageEffect(player2, event2.source, player2, event2.nature) <= 0;
    },
    async content(event2, trigger, player2) {
      const cards2 = game.cardsGotoOrdering(get.cards(3)).cards;
      event2.cards = cards2;
      await player2.showCards(cards2, get.translation(player2) + "发动了【三首】");
      const types = [];
      types.addArray(game.getGlobalHistory("useCard").map((evt) => get.type2(evt.card)));
      if (cards2.filter((card2) => !types.includes(get.type2(card2))).length) {
        trigger.cancel();
      }
      await game.delayx();
    },
    ai: {
      effect: {
        target(card2, player2, target2) {
          if (card2.name == "shandian" || card2.name == "fulei") {
            return [0, 0.1];
          }
          if (!get.tag(card2, "damage")) {
            return;
          }
          var types = [], bool = 0;
          types.addArray(game.getGlobalHistory("useCard").map((evt) => get.type2(evt.card)));
          if (!types.includes(get.type2(card2))) {
            bool = 1;
          }
          if (types.length < 2) {
            return Math.min(1, 0.4 + (types.length + bool) * 0.2);
          }
        }
      }
    }
  },
  tianjie: {
    audio: 3,
    trigger: { global: "phaseEnd" },
    direct: true,
    filter(event2, player2) {
      return game.hasGlobalHistory("cardMove", (evt) => evt.washCard) && game.hasPlayer((current) => current != player2);
    },
    skillAnimation: true,
    animationColor: "metal",
    async content(event2, trigger, player2) {
      const next = player2.chooseTarget(
        get.prompt("tianjie"),
        "选择至多三名其他角色，依次对这些角色造成X点雷电伤害（X为其手牌中【闪】的数量，至少为1）",
        [1, 3],
        lib.filter.notMe
      );
      next.set("ai", (target2) => {
        const player3 = get.player();
        return get.damageEffect(target2, player3, player3, "thunder") * Math.sqrt(Math.max(1, target2.countCards("h", "shan")));
      });
      const result2 = await next.forResult();
      if (result2.bool && result2.targets?.length) {
        const targets = result2.targets;
        targets.sortBySeat();
        player2.logSkill("tianjie", targets);
        const events = [];
        for (const target2 of targets) {
          const num = Math.max(1, target2.countCards("h", "shan"));
          const next2 = target2.damage(num, "thunder");
          events.push(next2);
        }
        await Promise.all(events);
      }
    }
  },
  shencai: {
    audio: 2,
    enable: "phaseUse",
    usable(skill, player2) {
      return 1 + player2.countMark("shencai");
    },
    filterTarget: lib.filter.notMe,
    onremove: true,
    prompt: "选择一名其他角色进行地狱审判",
    async content(event2, trigger, player2) {
      const { target: target2 } = event2;
      const next = target2.judge();
      next.callback = lib.skill.shencai.contentx;
      await next;
    },
    ai: {
      order: 8,
      result: { target: -1 }
    },
    async contentx(event2) {
      const { card: card2 } = event2.judgeResult;
      const { player: player2, target: target2 } = event2.getParent(2);
      if (get.position(card2, true) == "o") {
        await player2.gain(card2, "gain2");
      }
      const list = [];
      const str = get.cardDescription(card2, player2);
      for (const name in lib.skill.shencai.filterx) {
        if (str.indexOf(lib.skill.shencai.filterx[name]) != -1) {
          list.push("shencai_" + name);
        }
      }
      if (list.length) {
        for (const name in lib.skill.shencai.filterx) {
          var num = target2.countMark("shencai_" + name);
          if (num > 0) {
            target2.removeMark("shencai_" + name, num);
            target2.removeSkill("shencai_" + name);
          }
        }
        if (target2.isIn()) {
          for (const name of list) {
            target2.addSkill(name);
            target2.addMark(name, 1);
          }
        }
      } else if (target2.isIn()) {
        await player2.gainPlayerCard(target2, true, "hej");
        target2.addMark("shencai_death", 1);
        target2.addSkill("shencai_death");
      }
    },
    filterx: {
      losehp: "体力",
      weapon: "武器",
      respond: "打出",
      distance: "距离"
    },
    getStr(node) {
      var str = "", name = node.name;
      if (lib.translate[name + "_info"]) {
        if (lib.card[name].type && lib.translate[lib.card[name].type]) {
          str += "" + get.translation(lib.card[name].type) + "牌|";
        }
        if (get.subtype(name)) {
          str += "" + get.translation(get.subtype(name)) + "|";
        }
        if (lib.card[name] && lib.card[name].addinfomenu) {
          str += "" + lib.card[name].addinfomenu + "|";
        }
        if (get.subtype(name) == "equip1") {
          var added = false;
          if (lib.card[node.name] && lib.card[node.name].distance) {
            var dist = lib.card[node.name].distance;
            if (dist.attackFrom) {
              added = true;
              str += "攻击范围：" + (-dist.attackFrom + 1) + "|";
            }
          }
          if (!added) {
            str += "攻击范围：1|";
          }
        }
      }
      if (lib.card[name].cardPrompt) {
        str += "" + lib.card[name].cardPrompt(node) + "|";
      } else if (lib.translate[name + "_info"]) {
        str += "" + lib.translate[name + "_info"] + "|";
      }
      if (lib.translate[name + "_append"]) {
        str += "" + lib.translate[name + "_append"] + "|";
      }
      if (get.is.yingbianConditional(node)) {
        const yingbianEffects = get.yingbianEffects(node);
        if (!yingbianEffects.length) {
          const defaultYingbianEffect = get.defaultYingbianEffect(node);
          if (lib.yingbian.prompt.has(defaultYingbianEffect)) {
            yingbianEffects.push(defaultYingbianEffect);
          }
        }
        if (yingbianEffects.length) {
          str += `应变：${yingbianEffects.map((value) => lib.yingbian.prompt.get(value)).join("；")}|`;
        }
      }
      return str;
    },
    subSkill: {
      losehp: {
        charlotte: true,
        marktext: "笞",
        trigger: { player: "damageEnd" },
        forced: true,
        async content(event2, trigger, player2) {
          await player2.loseHp(trigger.num);
        },
        ai: {
          effect: {
            target(card2, player2, target2, current) {
              if (get.tag(card2, "damage") && current < 0 && !target2._shencai_losehp_effect) {
                target2._shencai_losehp_effect = true;
                let eff = get.effect(target2, { name: "losehp" }, target2, target2) / 10;
                delete target2._shencai_losehp_effect;
                return [1, eff];
              }
            }
          }
        },
        intro: {
          name: "神裁 - 体力",
          name2: "笞",
          content: "锁定技。当你受到伤害后，你失去等量的体力。",
          onunmark: true
        }
      },
      weapon: {
        charlotte: true,
        marktext: "杖",
        trigger: { target: "useCardToTargeted" },
        forced: true,
        filter(event2, player2) {
          return event2.card.name == "sha";
        },
        async content(event2, trigger, player2) {
          trigger.directHit.add(player2);
          game.log(player2, "不可响应", trigger.card);
        },
        intro: {
          name: "神裁 - 武器",
          name2: "杖",
          content: "锁定技。当你成为【杀】的目标后，你不能使用牌响应此【杀】。",
          onunmark: true
        },
        global: "shencai_weapon_ai"
      },
      ai: {
        ai: {
          directHit_ai: true,
          skillTagFilter(player2, tag, arg) {
            if (!arg || !arg.card || arg.card.name != "sha") {
              return false;
            }
            if (!arg.target || !arg.target.hasSkill("shencai_weapon")) {
              return false;
            }
            return true;
          }
        }
      },
      respond: {
        charlotte: true,
        marktext: "徒",
        trigger: {
          player: "loseAfter",
          global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"]
        },
        forced: true,
        filter(event2, player2) {
          if (!player2.hasCard(function(card2) {
            return lib.filter.cardDiscardable(card2, player2, "shencai_respond");
          }, "h")) {
            return false;
          }
          var evt = event2.getParent("shencai_respond");
          if (evt && evt.player == player2) {
            return false;
          }
          evt = event2.getl(player2);
          return evt && evt.hs && evt.hs.length > 0;
        },
        async content(event2, trigger, player2) {
          const cards2 = player2.getCards("h", (card2) => {
            return lib.filter.cardDiscardable(card2, player2, "shencai_respond");
          });
          if (cards2.length > 0) {
            await player2.discard(cards2.randomGet());
          }
        },
        intro: {
          name: "神裁 - 打出",
          name2: "徒",
          content: "锁定技。当你失去手牌后，你随机弃置一张手牌（不嵌套触发）。",
          onunmark: true
        }
      },
      distance: {
        charlotte: true,
        marktext: "流",
        trigger: { player: "phaseJieshuBegin" },
        forced: true,
        async content(event2, trigger, player2) {
          await player2.turnOver();
        },
        intro: {
          name: "神裁 - 距离",
          name2: "流",
          content: "锁定技。结束阶段开始时，你翻面。",
          onunmark: true
        }
      },
      death: {
        charlotte: true,
        marktext: "死",
        mod: {
          maxHandcard(player2, num) {
            return num - player2.countMark("shencai_death");
          }
        },
        trigger: { player: "phaseEnd" },
        forced: true,
        filter(event2, player2) {
          return player2.countMark("shencai_death") > game.countPlayer();
        },
        async content(event2, trigger, player2) {
          await player2.die();
        },
        intro: {
          name: "神裁 - 死",
          name2: "死",
          content: "锁定技。你的角色手牌上限-#；回合结束时，若场上存活人数小于#，则你死亡。",
          onunmark: true
        }
      }
    },
    mark: true,
    intro: {
      markcount: (storage = 0) => storage + 1,
      content: (storage = 0) => "当前最大发动次数：" + (storage + 1)
    }
  },
  xunshi: {
    audio: 2,
    mod: {
      cardname(card2) {
        if (lib.skill.xunshi.isXunshi(card2)) {
          return "sha";
        }
      },
      cardnature(card2) {
        if (lib.skill.xunshi.isXunshi(card2)) {
          return false;
        }
      },
      suit(card2) {
        if (lib.skill.xunshi.isXunshi(card2)) {
          return "none";
        }
      },
      targetInRange(card2) {
        const suit = get.color(card2);
        if (suit == "none" || suit == "unsure") {
          return true;
        }
      },
      cardUsable(card2) {
        const suit = get.color(card2);
        if (suit == "none" || suit == "unsure") {
          return Infinity;
        }
      }
    },
    isXunshi(card2) {
      var info = lib.card[card2.name];
      if (!info || info.type != "trick" && info.type != "delay") {
        return false;
      }
      if (info.notarget) {
        return false;
      }
      if (info.selectTarget != void 0) {
        if (Array.isArray(info.selectTarget)) {
          if (info.selectTarget[0] < 0) {
            return !info.toself;
          }
          return info.selectTarget[0] != 1 || info.selectTarget[1] != 1;
        } else {
          if (info.selectTarget < 0) {
            return !info.toself;
          }
          return info.selectTarget != 1;
        }
      }
      return false;
    },
    trigger: { player: "useCard2" },
    forced: true,
    filter(event2, player2) {
      return get.color(event2.card, player2) == "none";
    },
    async content(event2, trigger, player2) {
      if (player2.countMark("shencai") < 4 && player2.hasSkill("shencai", null, null, false)) {
        player2.addMark("shencai", 1, false);
      }
      if (trigger.addCount !== false) {
        trigger.addCount = false;
        const stat = player2.getStat().card;
        const name = trigger.card.name;
        if (typeof stat[name] == "number") {
          stat[name]--;
        }
      }
      const info = get.info(trigger.card);
      if (info.allowMultiple == false) {
        return;
      }
      if (!trigger.targets || info.multitarget) {
        return;
      }
      if (!game.hasPlayer((current) => !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player2, current))) {
        return;
      }
      const prompt2 = "为" + get.translation(trigger.card) + "增加任意个目标";
      const result2 = await player2.chooseTarget(
        get.prompt("xunshi"),
        (card2, _player, target2) => {
          const player3 = get.player();
          return !_status.event.targets.includes(target2) && lib.filter.targetEnabled2(_status.event.card, player3, target2);
        },
        [1, Infinity]
      ).set("prompt2", prompt2).set("ai", function(target2) {
        var trigger2 = _status.event.getTrigger();
        var player3 = _status.event.player;
        return get.effect(target2, trigger2.card, player3, player3);
      }).set("card", trigger.card).set("targets", trigger.targets).forResult();
      if (!result2.bool || !result2.targets?.length) {
        return;
      }
      if (!event2.isMine() && !event2.isOnline()) {
        await game.delayx();
      }
      player2.line(result2.targets, "fire");
      trigger.targets.addArray(result2.targets);
    }
  },
  twwushen: {
    mod: {
      cardname(card2, player2, name) {
        if (get.suit(card2) == "heart") {
          return "sha";
        }
      },
      cardnature(card2, player2) {
        if (get.suit(card2) == "heart") {
          return false;
        }
      },
      targetInRange(card2) {
        if (card2.name === "sha") {
          const suit = get.suit(card2);
          if (suit === "heart" || suit === "unsure") {
            return true;
          }
        }
      },
      cardUsable(card2) {
        if (card2.name === "sha") {
          const suit = get.suit(card2);
          if (suit === "heart" || suit === "unsure") {
            return Infinity;
          }
        }
      }
    },
    audio: "wushen",
    trigger: { player: "useCard2" },
    forced: true,
    filter(event2, player2) {
      return event2.card.name == "sha" && (get.suit(event2.card) == "heart" || !player2.hasSkill("twwushen_phase", null, null, false));
    },
    logTarget(event2, player2) {
      if (get.suit(event2.card) == "heart") {
        var targets = game.filterPlayer(function(current) {
          return !event2.targets.includes(current) && current.hasMark("twwuhun") && lib.filter.targetEnabled(event2.card, player2, current);
        });
        if (targets.length) {
          return targets.sortBySeat();
        }
      }
      return null;
    },
    async content(event2, trigger, player2) {
      if (!player2.hasSkill("twwushen_phase", null, null, false)) {
        trigger.directHit.addArray(game.players);
        player2.addTempSkill("twwushen_phase", [
          "phaseZhunbeiAfter",
          "phaseJudgeAfter",
          "phaseDrawAfter",
          "phaseUseAfter",
          "phaseDiscardAfter",
          "phaseJieshuAfter"
        ]);
      }
      if (get.suit(trigger.card) == "heart") {
        if (trigger.addCount !== false) {
          trigger.addCount = false;
          if (player2.stat[player2.stat.length - 1].card.sha > 0) {
            player2.stat[player2.stat.length - 1].card.sha--;
          }
        }
        const targets = game.filterPlayer((current) => {
          return !trigger.targets.includes(current) && current.hasMark("twwuhun") && (lib.filter.targetEnabled(trigger.card, player2, current) ?? false);
        });
        if (targets.length) {
          trigger.targets.addArray(targets.sortBySeat());
          game.log(targets, "也成为了", trigger.card, "的目标");
        }
      }
    },
    ai: {
      directHit_ai: true,
      skillTagFilter(player2, tag, arg) {
        return arg.card.name == "sha" && !player2.hasSkill("twwushen_phase", null, null, false);
      }
    },
    subSkill: { phase: { charlotte: true } }
  },
  twwuhun: {
    audio: 2,
    trigger: { player: "die" },
    forceDie: true,
    skillAnimation: true,
    animationColor: "soil",
    locked: true,
    check(event2, player2) {
      return game.hasPlayer(function(current) {
        return current != player2 && current.hasMark("twwuhun") && get.attitude(player2, current) < 0;
      });
    },
    async content(event2, trigger, player2) {
      const judge = player2.judge((card2) => {
        const name = get.name(card2, false);
        return name === " tao" || name === "taoyuan" ? -25 : 15;
      });
      judge.set("forceDie", true);
      judge.set("judge2", (result3) => result3.bool);
      const judgeResult = await judge.forResult();
      if (!judgeResult.bool) {
        return;
      }
      const num = game.countPlayer((current) => current !== player2 && current.hasMark("twwuhun"));
      if (num === 0) {
        return;
      }
      const prompt = "请选择【武魂】的目标";
      const prompt2 = "选择至少一名拥有“梦魇”标记的角色。令这些角色各自失去X点体力（X为其“梦魇”标记数）";
      const next = player2.chooseTarget(prompt, prompt2, [1, num], true);
      next.set("filterTarget", (card2, _player, target2) => target2 !== player2 && target2.hasMark("twwuhun"));
      next.set("forceDie", true);
      next.set("ai", (target2) => -get.attitude(get.player(), target2));
      const result2 = await next.forResult();
      if (!result2.targets?.length) {
        return;
      }
      const targets = result2.targets.sortBySeat();
      player2.line(targets);
      for (const target2 of targets) {
        const num2 = target2.countMark("twwuhun");
        if (num2 > 0) {
          await target2.loseHp(num2);
        }
      }
    },
    marktext: "魇",
    intro: {
      name: "梦魇",
      content: "mark",
      onunmark: true
    },
    group: "twwuhun_gain",
    subSkill: {
      gain: {
        audio: "twwuhun",
        trigger: {
          player: "damageEnd",
          source: "damageSource"
        },
        forced: true,
        filter(event2, player2, name) {
          if (event2.player == event2.source) {
            return false;
          }
          var target2 = lib.skill.twwuhun_gain.logTarget(event2, player2);
          if (!target2 || !target2.isIn()) {
            return false;
          }
          return name == "damageEnd" || target2.hasMark("twwuhun");
        },
        logTarget(event2, player2) {
          if (player2 == event2.player) {
            return event2.source;
          }
          return event2.player;
        },
        async content(event2, trigger, player2) {
          const target2 = lib.skill.twwuhun_gain.logTarget(trigger, player2);
          target2.addMark("twwuhun", player2 == trigger.source ? 1 : trigger.num);
          await game.delayx();
        }
      }
    },
    ai: {
      notemp: true,
      maixie_defend: true,
      effect: {
        target: (card2, player2, target2) => {
          if (!get.tag(card2, "damage") || !target2.hasFriend()) {
            return;
          }
          let die = [], extra = [null, 0], temp;
          game.filterPlayer((i) => {
            if (!i.hasMark("twwuhun")) {
              return false;
            }
            temp = get.attitude(target2, i);
            if (temp < 0) {
              die.push(i);
            } else {
              temp = Math.sqrt(temp) * i.countMark("twwuhun");
              if (!extra[0] || temp < extra[1]) {
                extra = [i, temp];
              }
            }
          });
          if (extra[0] && !die.length) {
            die.push(extra[0]);
          }
          if (target2.hp + target2.hujia > 1 && (!die.length || get.attitude(player2, target2) <= 0)) {
            die.add(player2);
          }
          if (die.length) {
            return [
              1,
              0,
              1,
              die.reduce((num, i) => {
                return num -= 2 * get.sgnAttitude(player2, i);
              }, 0)
            ];
          }
        }
      }
    }
  },
  shouli: {
    audio: 2,
    mod: {
      cardUsable(card2) {
        if (card2.storage?.shouli) {
          return Infinity;
        }
      }
    },
    enable: ["chooseToUse", "chooseToRespond"],
    hiddenCard(player2, name) {
      if (player2 != _status.currentPhase && (name == "sha" || name == "shan")) {
        return true;
      }
    },
    filter(event2, player2) {
      if (event2.responded || event2.shouli || event2.type == "wuxie") {
        return false;
      }
      if (game.hasPlayer(function(current) {
        return current.getCards("e", (card2) => get.is.attackingMount(card2)).length > 0;
      }) && event2.filterCard(
        get.autoViewAs(
          {
            name: "sha",
            storage: { shouli: true }
          },
          "unsure"
        ),
        player2,
        event2
      )) {
        return true;
      }
      if (game.hasPlayer(function(current) {
        return current.getCards("e", (card2) => get.is.defendingMount(card2)).length > 0;
      }) && event2.filterCard(
        get.autoViewAs(
          {
            name: "shan",
            storage: { shouli: true }
          },
          "unsure"
        ),
        player2,
        event2
      )) {
        return true;
      }
      return false;
    },
    delay: false,
    locked: false,
    filterTarget(card2, player2, target2) {
      var event2 = _status.event, evt = event2;
      if (event2._backup) {
        evt = event2._backup;
      }
      var equip3 = target2.getCards("e", (card3) => get.is.defendingMount(card3, false));
      var equip4 = target2.getCards("e", (card3) => get.is.attackingMount(card3, false));
      if (equip3.length && equip3.some(
        (card3) => evt.filterCard(
          get.autoViewAs(
            {
              name: "shan",
              storage: { shouli: true }
            },
            [card3]
          ),
          player2,
          event2
        )
      )) {
        return true;
      }
      return equip4.some((card3) => {
        var sha = get.autoViewAs(
          {
            name: "sha",
            storage: { shouli: true }
          },
          [card3]
        );
        if (evt.filterCard(sha, player2, event2)) {
          if (!evt.filterTarget) {
            return true;
          }
          return game.hasPlayer(function(current) {
            return evt.filterTarget(sha, player2, current);
          });
        }
      });
    },
    prompt: "将场上的一张坐骑牌当做【杀】或【闪】使用或打出",
    async content(event2, trigger, player2) {
      const evt = event2.getParent(2);
      evt.set("shouli", true);
      const equip3 = event2.target.getCards("e", (card2) => get.is.defendingMount(card2, false));
      const equip4 = event2.target.getCards("e", (card2) => get.is.attackingMount(card2, false));
      const cardsCanUse = [];
      const backupx = _status.event;
      _status.event = evt;
      try {
        if (equip3.length && equip3.some((card2) => {
          var shan = get.autoViewAs(
            {
              name: "shan",
              storage: { shouli: true }
            },
            [card2]
          );
          if (evt.filterCard(shan, player2, event2)) {
            return true;
          }
          return false;
        })) {
          cardsCanUse.push("shan");
        }
        if (equip4.length && equip4.some((card2) => {
          var sha = get.autoViewAs(
            {
              name: "sha",
              storage: { shouli: true }
            },
            [card2]
          );
          if (evt.filterCard(sha, player2, evt) && (!evt.filterTarget || game.hasPlayer((current) => {
            return evt.filterTarget(sha, player2, current);
          }))) {
            return true;
          }
          return false;
        })) {
          cardsCanUse.push("sha");
        }
      } catch (e) {
        game.print(e);
      }
      _status.event = backupx;
      let result2;
      if (cardsCanUse.length == 1) {
        event2.cardName = cardsCanUse[0];
        const cards2 = cardsCanUse[0] == "shan" ? equip3 : equip4;
        if (cards2.length == 1) {
          result2 = {
            bool: true,
            links: [cards2[0]]
          };
        } else {
          result2 = await player2.choosePlayerCard(true, event2.target, "e").set("filterButton", (button) => {
            return _status.event.cards.includes(button.link);
          }).set("cards", cards2).forResult();
        }
      } else {
        result2 = await player2.choosePlayerCard(true, event2.target, "e").set("filterButton", (button) => {
          const card2 = button.link;
          return get.is.attackingMount(card2) || get.is.defendingMount(card2);
        }).forResult();
      }
      if (result2.bool && result2.links && result2.links.length) {
        const name = event2.cardName || (get.is.attackingMount(result2.links[0]) ? "sha" : "shan");
        if (evt.name == "chooseToUse") {
          game.broadcastAll(
            function(result3, name2) {
              lib.skill.shouli_backup.viewAs = {
                name: name2,
                cards: [result3],
                storage: { shouli: true }
              };
              lib.skill.shouli_backup.prompt = "选择" + get.translation(name2) + "（" + get.translation(result3) + "）的目标";
            },
            result2.links[0],
            name
          );
          evt.set("_backupevent", "shouli_backup");
          evt.backup("shouli_backup");
          evt.set("openskilldialog", "选择" + get.translation(name) + "（" + get.translation(result2.links[0]) + "）的目标");
          evt.set("norestore", true);
          evt.set("custom", {
            add: {},
            replace: { window() {
            } }
          });
        } else {
          delete evt.result.used;
          delete evt.result.skill;
          evt.result.card = get.autoViewAs(
            {
              name,
              cards: [result2.links[0]],
              storage: { shouli: true }
            },
            result2.links
          );
          evt.result.cards = [result2.links[0]];
          event2.target.$give(result2.links[0], player2, false);
          if (player2 !== event2.target) {
            event2.target.addTempSkill("fengyin");
          }
          event2.target.addTempSkill("shouli_thunder");
          player2.addTempSkill("shouli_thunder");
          evt.redo();
          return;
        }
      }
      evt.goto(0);
    },
    ai: {
      respondSha: true,
      respondShan: true,
      skillTagFilter(player2, tag) {
        var func = get.is[tag == "respondSha" ? "attackingMount" : "defendingMount"];
        return game.hasPlayer(function(current) {
          return current.hasCard((card2) => func(card2, false), "e");
        });
      },
      order: 2,
      result: {
        player(player2, target2) {
          var att = Math.max(8, get.attitude(player2, target2));
          if (_status.event.type != "phase") {
            return 9 - att;
          }
          if (!player2.hasValueTarget({ name: "sha" })) {
            return 0;
          }
          return 9 - att;
        }
      }
    },
    group: "shouli_init",
    subSkill: {
      thunder: {
        charlotte: true,
        trigger: { player: "damageBegin1" },
        forced: true,
        mark: true,
        async content(event2, trigger, player2) {
          trigger.num++;
          game.setNature(trigger, "thunder");
        },
        marktext: "⚡",
        intro: { content: "受到的伤害+1且改为雷属性" },
        ai: {
          effect: {
            target: (card2, player2, target2) => {
              if (!get.tag(card2, "damage")) {
                return;
              }
              if (target2.hasSkillTag("nodamage", null, {
                natures: ["thunder"]
              }) || target2.hasSkillTag("nothunder")) {
                return "zeroplayertarget";
              }
              if (target2.hasSkillTag("filterDamage", null, {
                player: player2,
                card: new lib.element.VCard(
                  {
                    name: card2.name,
                    nature: "thunder"
                  },
                  [card2]
                )
              })) {
                return;
              }
              return 2;
            }
          }
        }
      },
      init: {
        audio: "shouli",
        trigger: {
          global: "phaseBefore",
          player: "enterGame"
        },
        forced: true,
        locked: false,
        filter(event2, player2) {
          return event2.name != "phase" || game.phaseNumber == 0;
        },
        logTarget: () => game.filterPlayer(),
        async content(event2, trigger, player2) {
          const targets = game.filterPlayer().sortBySeat(player2.getNext());
          event2.targets = targets;
          for (const target2 of targets) {
            if (target2.isIn()) {
              const card2 = get.cardPile2((card3) => {
                if (get.cardtag(card3, "gifts")) {
                  return false;
                }
                var type = get.subtype(card3);
                if (type != "equip3" && type != "equip4" && type != "equip6") {
                  return false;
                }
                return target2.canUse(card3, target2);
              });
              if (card2) {
                await target2.chooseUseTarget(card2, "nopopup", "noanimate", true);
              }
            }
          }
        }
      },
      backup: {
        async precontent(event2, trigger, player2) {
          const cards2 = event2.result.card?.cards;
          event2.result.cards = cards2;
          event2.result._apply_args = { addSkillCount: false };
          const owner = get.owner(cards2[0]);
          event2.target = owner;
          owner.$give(cards2[0], player2, false);
          player2.popup(event2.result.card.name, "metal");
          await game.delayx();
          event2.getParent().addCount = false;
          if (player2 != event2.target) {
            event2.target.addTempSkill("fengyin");
          }
          event2.target.addTempSkill("shouli_thunder");
          player2.addTempSkill("shouli_thunder");
        },
        filterCard: () => false,
        prompt: "请选择【杀】的目标",
        selectCard: -1,
        log: false
      }
    }
  },
  hengwu: {
    audio: 2,
    trigger: { player: ["useCard", "respond"] },
    frequent: true,
    filter(event2, player2) {
      var suit = get.suit(event2.card);
      if (!lib.suit.includes(suit) || player2.hasCard(function(card2) {
        return get.suit(card2, player2) == suit;
      }, "h")) {
        return false;
      }
      return game.hasPlayer(function(current) {
        return current.hasCard(function(card2) {
          return get.suit(card2, current) == suit;
        }, "e");
      });
    },
    async content(event2, trigger, player2) {
      const suit = get.suit(trigger.card);
      const num = game.countPlayer((current) => {
        return current.countCards("e", (card2) => get.suit(card2, current) == suit);
      });
      await player2.draw(num);
    },
    ai: {
      effect: {
        player_use(card2, player2, target2) {
          if (typeof card2 !== "object") {
            return;
          }
          let suit = get.suit(card2);
          if (!lib.suit.includes(suit) || player2.hasCard(function(i) {
            return get.suit(i, player2) == suit;
          }, "h")) {
            return;
          }
          return [
            1,
            0.8 * game.countPlayer((current) => {
              return current.countCards("e", (card3) => {
                return get.suit(card3, current) == suit;
              });
            })
          ];
        },
        target: (card2, player2, target2) => {
          if (card2.name === "sha" && !player2.hasSkillTag(
            "directHit_ai",
            true,
            {
              target: target2,
              card: card2
            },
            true
          ) && game.hasPlayer((current) => {
            return current.hasCard((cardx) => {
              return get.subtype(cardx) === "equip3";
            }, "e");
          })) {
            return [0, -0.5];
          }
        }
      }
    }
  },
  changandajian_equip5: {
    equipSkill: true,
    mod: { maxHandcard: (player2, num) => num + 2 }
  },
  changandajian_destroy: {
    trigger: {
      player: "loseAfter",
      global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"]
    },
    forced: true,
    charlotte: true,
    equipSkill: true,
    filter(event2, player2) {
      var evt = event2.getl(player2);
      if (!evt || !evt.es || !evt.es.length) {
        return false;
      }
      for (var i of evt.es) {
        if (i.name.indexOf("changandajian_equip") == 0) {
          return true;
        }
      }
      return false;
    },
    getEffect(player2, target2) {
      if (player2 == target2) {
        return 0;
      }
      var getRaw = function() {
        var att = get.attitude(player2, target2);
        if (att > 0) {
          if (target2.countCards("j", function(card2) {
            var cardj = card2.viewAs ? { name: card2.viewAs } : card2;
            return get.effect(target2, cardj, target2, player2) < 0;
          }) > 0) {
            return 3;
          }
          if (target2.getEquip("baiyin") && target2.isDamaged() && get.recoverEffect(target2, player2, player2) > 0) {
            if (target2.hp == 1 && !target2.hujia) {
              return 1.6;
            }
          }
          if (target2.countCards("e", function(card2) {
            if (get.position(card2) == "e") {
              return get.value(card2, target2) < 0;
            }
          }) > 0) {
            return 1;
          }
        }
        var es = target2.getCards("e");
        var noe = es.length == 0 || target2.hasSkillTag("noe");
        var noe2 = es.filter(function(esx) {
          return get.value(esx, target2) > 0;
        }).length == 0;
        if (noe || noe2) {
          return 0;
        }
        if (att <= 0 && !target2.countCards("e")) {
          return 1.5;
        }
        return -1.5;
      };
      return getRaw() * get.attitude(player2, target2);
    },
    async content(event2, trigger, player2) {
      let time = 0;
      let recover = 0;
      const evt = trigger.getl(player2);
      for (const card2 of evt.es) {
        if (card2.name.indexOf("changandajian_equip") === 0) {
          time++;
        }
        if (card2.name === "changandajian_equip2") {
          recover++;
        }
      }
      if (recover > 0) {
        await player2.recover(recover);
      }
      for (let i = 0; i < time && game.hasPlayer((current) => current.countCards("ej") > 0); i++) {
        let result2 = await player2.chooseTarget(true, "选择一名装备区或判定区有牌的角色", (card3, player3, target3) => target3.countCards("ej") > 0).set("ai", (target3) => lib.skill.changandajian_destroy.getEffect(_status.event.player, target3)).forResult();
        if (!result2.bool) {
          return;
        }
        const target2 = result2.targets[0];
        player2.line(target2, "green");
        result2 = await player2.choosePlayerCard(target2, true, "ej").forResult();
        if (!result2.bool) {
          return;
        }
        const card2 = result2.cards[0];
        const num = get.number(card2);
        if (typeof get.strNumber(num, false) === "string") {
          if (lib.filter.canBeGained(card2, player2, target2)) {
            await player2.gain(card2, target2, "give", "bySelf");
          }
        } else if (lib.filter.canBeDiscarded(card2, player2, target2)) {
          await target2.discard(card2);
        }
      }
    }
  },
  dili: {
    audio: 2,
    trigger: {
      global: "phaseBefore",
      player: "enterGame"
    },
    forced: true,
    filter(event2, player2) {
      if (player2.storage.dili) {
        return false;
      }
      if (event2.name != "phase") {
        return true;
      }
      if (game.phaseNumber == 0) {
        return true;
      }
      return player2.name == "key_shiki";
    },
    async content(event2, trigger, player2) {
      player2.storage.dili = true;
      const skill = ["dili_shengzhi", "dili_chigang", "dili_qionglan", "dili_quandao", "dili_jiaohui", "dili_yuanlv"].randomGet();
      player2.addSkill(skill);
      game.log(player2, '解锁了<span style="font-family: yuanli">东吴命运线</span>：', "#g【" + get.translation(skill) + "】");
    },
    derivation: [
      "dili_shengzhi",
      "dili_chigang",
      "dili_qionglan",
      "dili_quandao",
      "dili_jiaohui",
      "dili_yuanlv",
      "gzyinghun",
      "hongde",
      "rebingyi",
      "xinfu_guanwei",
      "bizheng",
      "xinanguo",
      "shelie",
      "wengua",
      "rebotu",
      "rezhiheng",
      "jiexun",
      "reanxu",
      "xiashu",
      "rejieyin",
      "oldimeng",
      "xinfu_guanchao",
      "drlt_jueyan",
      "lanjiang"
    ],
    subSkill: {
      shengzhi: {
        audio: 2,
        trigger: { player: "useCard" },
        forced: true,
        filter(event2, player2) {
          var num = get.number(event2.card);
          if (typeof num != "number") {
            return false;
          }
          if (num <= 1) {
            return false;
          }
          for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
              return false;
            }
          }
          if (!player2.storage.yuheng) {
            return false;
          }
          var list = ["gzyinghun", "hongde", "rebingyi"];
          for (var i of list) {
            if (!player2.storage.yuheng.includes(i)) {
              return false;
            }
          }
          return true;
        },
        async content(event2, trigger, player2) {
          trigger.directHit.addArray(game.filterPlayer((current) => current != player2));
        },
        init(player2, skill) {
          player2.markAuto("yuheng_current", ["gzyinghun", "hongde", "rebingyi"]);
        },
        mark: true,
        ai: {
          directHit_ai: true,
          skillTagFilter(player2, tag, arg) {
            if (arg && arg.card) {
              var num = get.number(arg.card);
              if (typeof num != "number") {
                return false;
              }
              if (num <= 1) {
                return false;
              }
              for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                  return false;
                }
              }
              return true;
            }
            return false;
          }
        },
        intro: {
          name: "命运线：圣质",
          content(storage, player2) {
            var finished = [], unfinished = ["gzyinghun", "hongde", "rebingyi"];
            if (player2.storage.yuheng) {
              for (var i = 0; i < unfinished.length; i++) {
                if (player2.storage.yuheng.includes(unfinished[i])) {
                  finished.push(unfinished[i]);
                  unfinished.splice(i--, 1);
                }
              }
            }
            var str = "";
            if (unfinished.length) {
              str += "<li>未获得：" + get.translation(unfinished) + "<br>";
            }
            if (finished.length) {
              str += "<li>已获得过：" + get.translation(finished) + "<br>";
            }
            str += "<li>锁定技。若你因〖驭衡〗获得过〖英魂〗〖弘德〗〖秉壹〗，则当你使用点数为质数的牌时，此牌不可被响应。";
            return str;
          }
        }
      },
      chigang: {
        audio: 2,
        trigger: { player: "phaseChange" },
        forced: true,
        filter(event2, player2) {
          if (!player2.storage.yuheng?.length) {
            return false;
          }
          const list = ["xinfu_guanwei", "bizheng", "xinanguo"];
          if (list.some((skill) => !player2.storage.yuheng.includes(skill))) {
            return false;
          }
          return event2.phaseList[event2.num].indexOf("phaseJudge") != -1;
        },
        async content(event2, trigger, player2) {
          trigger.phaseList[trigger.num] = `phaseDraw|${event2.name}`;
          await game.delayx();
        },
        init(player2, skill) {
          player2.markAuto("yuheng_current", ["xinfu_guanwei", "bizheng", "xinanguo"]);
        },
        ai: {
          effect: {
            target(card2) {
              if (get.type(card2) == "delay") {
                return "zeroplayertarget";
              }
            }
          }
        },
        mark: true,
        intro: {
          name: "命运线：持纲",
          content(storage, player2) {
            var finished = [], unfinished = ["xinfu_guanwei", "bizheng", "xinanguo"];
            if (player2.storage.yuheng) {
              for (var i = 0; i < unfinished.length; i++) {
                if (player2.storage.yuheng.includes(unfinished[i])) {
                  finished.push(unfinished[i]);
                  unfinished.splice(i--, 1);
                }
              }
            }
            var str = "";
            if (unfinished.length) {
              str += "<li>未获得：" + get.translation(unfinished) + "<br>";
            }
            if (finished.length) {
              str += "<li>已获得过：" + get.translation(finished) + "<br>";
            }
            str += "<li>锁定技。若你因〖驭衡〗获得过〖观微〗〖弼政〗〖安国〗，则当你的判定阶段开始前，你跳过此阶段并获得一个额外的摸牌阶段。";
            return str;
          }
        }
      },
      qionglan: {
        audio: 2,
        init(player2, skill) {
          player2.markAuto("yuheng_current", ["shelie", "wengua", "rebotu"]);
        },
        trigger: { player: "useSkillAfter" },
        forced: true,
        limited: true,
        filter(event2, player2) {
          if (!player2.storage.yuheng || event2.skill != "yuheng") {
            return false;
          }
          var list = ["shelie", "wengua", "rebotu"];
          for (var i of list) {
            if (!player2.storage.yuheng.includes(i)) {
              return false;
            }
          }
          return true;
        },
        async content(event2, trigger, player2) {
          player2.awakenSkill(event2.name);
          const list = ["dili_shengzhi", "dili_chigang", "dili_quandao", "dili_jiaohui", "dili_yuanlv"];
          const list2 = list.randomRemove(2);
          if (list2.includes("dili_quandao") && list2.includes("dili_jiaohui")) {
            list2.randomRemove(1);
            list2.push(list.randomGet());
          }
          for (const skill of list2) {
            player2.addSkill(skill);
            game.log(player2, '解锁了<span style="font-family: yuanli">东吴命运线</span>：', "#g【" + get.translation(skill) + "】");
          }
        },
        mark: true,
        intro: {
          name: "命运线：穹览",
          content(storage, player2) {
            var finished = [], unfinished = ["shelie", "wengua", "rebotu"];
            if (player2.storage.yuheng) {
              for (var i = 0; i < unfinished.length; i++) {
                if (player2.storage.yuheng.includes(unfinished[i])) {
                  finished.push(unfinished[i]);
                  unfinished.splice(i--, 1);
                }
              }
            }
            var str = "";
            if (unfinished.length) {
              str += "<li>未获得：" + get.translation(unfinished) + "<br>";
            }
            if (finished.length) {
              str += "<li>已获得过：" + get.translation(finished) + "<br>";
            }
            str += '<li>锁定技，限定技。若你因〖驭衡〗获得过〖涉猎〗〖问卦〗〖博图〗，则当你发动的〖驭衡〗结算结束后，你随机获得两条其他<span style="font-family: yuanli">东吴命运线</span>。';
            return str;
          }
        }
      },
      quandao: {
        audio: 2,
        mod: {
          cardname(card2, player2) {
            if (player2.storage.yuheng && typeof get.strNumber(card2.number, false) === "string") {
              var list = ["rezhiheng", "jiexun", "reanxu"];
              for (var i of list) {
                if (!player2.storage.yuheng.includes(i)) {
                  return;
                }
              }
              return "tiaojiyanmei";
            }
          }
        },
        init(player2, skill) {
          player2.markAuto("yuheng_current", ["rezhiheng", "jiexun", "reanxu"]);
        },
        mark: true,
        intro: {
          name: "命运线：权道",
          content(storage, player2) {
            var finished = [], unfinished = ["rezhiheng", "jiexun", "reanxu"];
            if (player2.storage.yuheng) {
              for (var i = 0; i < unfinished.length; i++) {
                if (player2.storage.yuheng.includes(unfinished[i])) {
                  finished.push(unfinished[i]);
                  unfinished.splice(i--, 1);
                }
              }
            }
            var str = "";
            if (unfinished.length) {
              str += "<li>未获得：" + get.translation(unfinished) + "<br>";
            }
            if (finished.length) {
              str += "<li>已获得过：" + get.translation(finished) + "<br>";
            }
            str += "<li>锁定技。若你因〖驭衡〗获得过〖制衡〗〖诫训〗〖安恤〗，则你手牌区内点数为字母的牌的牌名视为【调剂盐梅】。";
            return str;
          }
        }
      },
      jiaohui: {
        audio: 2,
        mod: {
          cardname(card2, player2) {
            if (player2.countCards("h") == 1 && player2.storage.yuheng) {
              var list = ["xiashu", "rejieyin", "oldimeng"];
              for (var i of list) {
                if (!player2.storage.yuheng.includes(i)) {
                  return;
                }
              }
              return "yuanjiao";
            }
          }
        },
        init(player2, skill) {
          player2.markAuto("yuheng_current", ["xiashu", "rejieyin", "oldimeng"]);
        },
        mark: true,
        intro: {
          name: "命运线：交辉",
          content(storage, player2) {
            var finished = [], unfinished = ["xiashu", "rejieyin", "oldimeng"];
            if (player2.storage.yuheng) {
              for (var i = 0; i < unfinished.length; i++) {
                if (player2.storage.yuheng.includes(unfinished[i])) {
                  finished.push(unfinished[i]);
                  unfinished.splice(i--, 1);
                }
              }
            }
            var str = "";
            if (unfinished.length) {
              str += "<li>未获得：" + get.translation(unfinished) + "<br>";
            }
            if (finished.length) {
              str += "<li>已获得过：" + get.translation(finished) + "<br>";
            }
            str += "<li>锁定技。若你因〖驭衡〗获得过〖下书〗〖结姻〗〖缔盟〗，且你的手牌数为1，则此牌的牌名视为【远交近攻】。";
            return str;
          }
        }
      },
      yuanlv: {
        audio: 2,
        init(player2, skill) {
          _status.changandajian_cardcolor = 0;
          player2.markAuto("yuheng_current", ["xinfu_guanchao", "drlt_jueyan", "lanjiang"]);
        },
        trigger: { player: "useCardToTargeted" },
        forced: true,
        filter(event2, player2) {
          if (get.type(event2.card, null, false) != "equip" || player2 != event2.target || event2.card.name.indexOf("changandajian_equip") == 0) {
            return false;
          }
          if (!player2.storage.yuheng) {
            return false;
          }
          var list = ["xinfu_guanchao", "drlt_jueyan", "lanjiang"];
          for (var i of list) {
            if (!player2.storage.yuheng.includes(i)) {
              return false;
            }
          }
          var type = get.subtype(event2.card);
          if (lib.card["changandajian_" + type] && player2.hasEquipableSlot(type)) {
            return true;
          }
          return false;
        },
        async content(event2, trigger, player2) {
          const cards2 = trigger.cards.filterInD();
          if (cards2.length > 0) {
            await game.cardsDiscard(cards2);
          }
          const type = get.subtype(trigger.card);
          const card2 = game.createCard("changandajian_" + type, _status.changandajian_cardcolor++ % 2 ? "spade" : "heart", 10);
          await player2.useCard(card2, player2);
        },
        mark: true,
        intro: {
          name: "命运线：渊虑",
          content(storage, player2) {
            var finished = [], unfinished = ["xinfu_guanchao", "drlt_jueyan", "lanjiang"];
            if (player2.storage.yuheng) {
              for (var i = 0; i < unfinished.length; i++) {
                if (player2.storage.yuheng.includes(unfinished[i])) {
                  finished.push(unfinished[i]);
                  unfinished.splice(i--, 1);
                }
              }
            }
            var str = "";
            if (unfinished.length) {
              str += "<li>未获得：" + get.translation(unfinished) + "<br>";
            }
            if (finished.length) {
              str += "<li>已获得过：" + get.translation(finished) + "<br>";
            }
            str += "<li>锁定技。若你因〖驭衡〗获得过〖观潮〗〖决堰〗〖澜疆〗，则当你成为自己使用的装备牌的目标后，你将此牌置于弃牌堆，然后使用一张与此装备牌副类别相同的【长安大舰】。";
            return str;
          }
        }
      }
    },
    ai: {
      combo: "yuheng"
    }
  },
  yuheng: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    async content(event2, trigger, player2) {
      let skills2 = player2.getSkills(null, false, false).filter((skill) => {
        if (skill == "yuheng") {
          return false;
        }
        const info = get.info(skill);
        return info && !info.charlotte && !get.is.locked(skill);
      });
      if (skills2.length) {
        player2.removeSkills(skills2);
      }
      const list1 = ["dili_shengzhi", "dili_chigang", "dili_qionglan", "dili_quandao", "dili_jiaohui", "dili_yuanlv"];
      const list2 = [
        "gzyinghun",
        "hongde",
        "rebingyi",
        "xinfu_guanwei",
        "bizheng",
        "xinanguo",
        "shelie",
        "wengua",
        "rebotu",
        "rezhiheng",
        "jiexun",
        "reanxu",
        "xiashu",
        "rejieyin",
        "oldimeng",
        "xinfu_guanchao",
        "drlt_jueyan",
        "lanjiang"
      ];
      const list3 = [];
      if (!player2.storage.yuheng_full) {
        player2.storage.yuheng_full = list2.slice(0);
      }
      if (player2.getStorage("yuheng_current").length == 0) {
        for (let i = 0; i < list1.length; i++) {
          if (player2.hasSkill(list1[i])) {
            for (var j = 0; j < 3; j++) {
              list3.add(list2[i * 3 + j]);
            }
          }
        }
        if (!player2.storage.yuheng_current) {
          player2.storage.yuheng_current = list3.slice(0);
        }
      }
      let fullskills, currentskills;
      if (player2.storage.yuheng_full && player2.storage.yuheng_full.length) {
        fullskills = player2.storage.yuheng_full;
      } else {
        fullskills = list2.slice(0);
      }
      if (player2.storage.yuheng_current && player2.storage.yuheng_current.length) {
        currentskills = player2.storage.yuheng_current;
      } else {
        currentskills = list3.slice(0);
      }
      skills2 = [];
      const evtx = event2.getParent("phaseUse");
      if (currentskills.length > 0 && !player2.hasHistory("useSkill", (evt) => {
        if (evt.skill == "yuheng" || evt.type != "player" || !evt.sourceSkill) {
          return false;
        }
        const info1 = get.info(evt.skill);
        if (info1.charlotte) {
          return false;
        }
        const info = get.info(evt.sourceSkill);
        if (info.charlotte || get.is.locked(evt.skill)) {
          return false;
        }
        return evt.event.getParent("phaseUse") == evtx;
      })) {
        fullskills.randomSort();
        currentskills.randomSort();
        for (let i = 0; i < fullskills.length; i++) {
          for (let j2 = 0; j2 < currentskills.length; j2++) {
            if (fullskills[i] != currentskills[j2] || i == fullskills.length - 1 && j2 == currentskills.length - 1) {
              skills2.add(fullskills.splice(i--, 1)[0]);
              skills2.add(currentskills.splice(j2--, 1)[0]);
              break;
            }
          }
          if (skills2.length > 0) {
            break;
          }
        }
      } else {
        skills2.add(fullskills.randomRemove(1)[0]);
      }
      for (const skill of skills2) {
        player2.addSkills(skill);
      }
      player2.markAuto("yuheng", skills2);
    },
    ai: {
      order(item, player2) {
        var evtx = _status.event.getParent("phaseUse");
        if (!player2.hasHistory("useSkill", function(evt) {
          if (evt.skill == "yuheng" || evt.type != "player" || !evt.sourceSkill) {
            return false;
          }
          var info1 = get.info(evt.skill);
          if (info1.charlotte) {
            return false;
          }
          var info = get.info(evt.sourceSkill);
          if (info.charlotte || get.is.locked(evt.skill)) {
            return false;
          }
          return evt.event.getParent("phaseUse") == evtx;
        })) {
          return 11;
        }
        return 0.8;
      },
      result: { player: 1 }
    },
    group: "yuheng_losehp",
    subSkill: {
      losehp: {
        audio: "yuheng",
        trigger: { player: "phaseUseEnd" },
        forced: true,
        locked: false,
        filter(event2, player2) {
          return !player2.hasHistory("useSkill", function(evt) {
            if (evt.skill != "yuheng") {
              return false;
            }
            return evt.event.getParent("phaseUse") == event2;
          });
        },
        async content(event2, trigger, player2) {
          await player2.loseHp();
        }
      }
    }
  },
  jiufa: {
    audio: 2,
    trigger: { player: ["useCardAfter", "respondAfter"] },
    frequent: true,
    filter(event2, player2) {
      return event2.jiufa_counted && player2.getStorage("jiufa").length >= 9;
    },
    async content(event2, trigger, player2) {
      player2.unmarkSkill("jiufa");
      event2.cards = get.cards(9);
      event2.cards.sort((a, b) => get.number(b) - get.number(a));
      game.cardsGotoOrdering(event2.cards);
      event2.videoId = lib.status.videoId++;
      game.broadcastAll(
        function(player3, id, cards3) {
          var str;
          if (player3 == game.me && !_status.auto) {
            str = "九伐：选择任意张点数满足条件的牌";
          } else {
            str = "九伐";
          }
          var dialog = ui.create.dialog(str, cards3);
          dialog.videoId = id;
        },
        player2,
        event2.videoId,
        event2.cards
      );
      event2.time = get.utc();
      game.addVideo("showCards", player2, ["九伐", get.cardsInfo(event2.cards)]);
      game.addVideo("delay", null, 2);
      const next = player2.chooseButton([0, 9], true);
      next.set("dialog", event2.videoId);
      next.set("filterButton", function(button) {
        let num = get.number(button.link), cards3 = _status.event.getParent().cards;
        for (let i of ui.selected.buttons) {
          if (get.number(i.link) == num) {
            return false;
          }
        }
        for (let i of cards3) {
          if (i != button.link && get.number(i) == num) {
            return true;
          }
        }
        return false;
      });
      next.set("ai", (button) => get.value(button.link, get.player()));
      const result2 = await next.forResult();
      if (result2.bool && result2.links && result2.links.length) {
        event2.cards2 = result2.links;
      }
      const time = 1e3 - (get.utc() - event2.time);
      if (time > 0) {
        await game.delay(0, time);
      }
      game.broadcastAll("closeDialog", event2.videoId);
      const cards2 = event2.cards2;
      if (cards2 && cards2.length) {
        await player2.gain(cards2, "log", "gain2");
      }
    },
    marktext: "⑨",
    intro: {
      content: "已记录牌名：$",
      onunmark: true
    },
    group: "jiufa_count",
    subSkill: {
      count: {
        trigger: { player: ["useCard1", "respond"] },
        forced: true,
        charlotte: true,
        popup: false,
        firstDo: true,
        filter(event2, player2) {
          return !player2.getStorage("jiufa").includes(event2.card.name);
        },
        async content(event2, trigger, player2) {
          trigger.jiufa_counted = true;
          player2.markAuto("jiufa", [trigger.card.name]);
        }
      }
    }
  },
  tianren: {
    audio: 2,
    trigger: { global: ["loseAfter", "cardsDiscardAfter", "loseAsyncAfter"] },
    forced: true,
    filter(event2, player2) {
      if (event2.name.indexOf("lose") == 0) {
        if (event2.getlx === false || event2.position != ui.discardPile) {
          return false;
        }
      } else {
        var evt = event2.getParent();
        if (evt.relatedEvent && evt.relatedEvent.name == "useCard") {
          return false;
        }
      }
      for (var i of event2.cards) {
        var owner = false;
        if (event2.hs && event2.hs.includes(i)) {
          owner = event2.player;
        }
        var type = get.type(i, null, owner);
        if (type == "basic" || type == "trick") {
          return true;
        }
      }
      return false;
    },
    async content(event2, trigger, player2) {
      let num = 0;
      for (const card2 of trigger.cards) {
        let owner = false;
        if (trigger.hs && trigger.hs.includes(card2)) {
          owner = trigger.player;
        }
        const type = get.type(card2, null, owner);
        if (type == "basic" || type == "trick") {
          num++;
        }
      }
      player2.addMark("tianren", num);
    },
    group: "tianren_maxHp",
    intro: { content: "mark" },
    subSkill: {
      maxHp: {
        audio: "tianren",
        trigger: { player: ["tianrenAfter", "gainMaxHpAfter", "loseMaxHpAfter"] },
        forced: true,
        filter(event2, player2) {
          return player2.countMark("tianren") >= player2.maxHp;
        },
        async content(event2, trigger, player2) {
          player2.removeMark("tianren", player2.maxHp);
          await player2.gainMaxHp();
          await player2.draw(2);
        }
      }
    }
  },
  pingxiang: {
    audio: 2,
    enable: "phaseUse",
    limited: true,
    skillAnimation: true,
    animationColor: "ice",
    filter(event2, player2) {
      return player2.maxHp > 9;
    },
    async content(event2, trigger, player2) {
      player2.awakenSkill(event2.name);
      await player2.loseMaxHp(9);
      for (let i = 0; i < 9; i++) {
        const result2 = await player2.chooseUseTarget(
          {
            name: "sha",
            nature: "fire",
            isCard: true
          },
          "请选择火【杀】的目标（" + (i === 8 ? "⑨" : i + 1) + "/9）",
          false
        ).forResult();
        if (!result2.bool) {
          break;
        }
      }
      await player2.removeSkills("jiufa");
      player2.addSkill("pingxiang_effect");
    },
    ai: {
      order() {
        return get.order({
          name: "sha",
          nature: "fire",
          isCard: true
        });
      },
      result: {
        player(player2) {
          if (player2.hasValueTarget({
            name: "sha",
            nature: "fire",
            isCard: true
          })) {
            return 1;
          }
          return 0;
        }
      },
      combo: "tianren"
    },
    subSkill: {
      effect: {
        marktext: "襄",
        intro: { content: "手牌上限基数改为体力上限" },
        mod: {
          maxHandcardBase(player2) {
            return player2.maxHp;
          }
        }
      }
    }
  },
  yingba: {
    audio: 2,
    mod: {
      aiOrder(player2, card2, num) {
        if (num > 0 && _status.event && _status.event.type == "phase" && get.tag(card2, "recover")) {
          if (player2.needsToDiscard()) {
            return num / 3;
          }
          return 0;
        }
      },
      targetInRange(card2, player2, target2) {
        if (target2.hasMark("yingba_mark")) {
          return true;
        }
      }
    },
    enable: "phaseUse",
    usable: 1,
    filter: (event2, player2) => game.hasPlayer((current) => current != player2 && current.maxHp > 1),
    filterTarget: (card2, player2, target2) => target2 != player2 && target2.maxHp > 1,
    async content(event2, trigger, player2) {
      const { target: target2 } = event2;
      await target2.loseMaxHp();
      if (target2.isIn()) {
        target2.addMark("yingba_mark", 1);
      }
      await player2.loseMaxHp();
    },
    locked: false,
    //global:'yingba_mark',
    ai: {
      threaten(player2, target2) {
        if (player2 === target2 || player2.isDamaged() || get.attitude(player2, target2) > 0) {
          return 1;
        }
        return 8 / player2.maxHp;
      },
      order: 11,
      result: {
        player(player2, target2) {
          if (player2.maxHp == 1) {
            return -2.5;
          }
          return -0.25;
        },
        target(player2, target2) {
          if (target2.isHealthy()) {
            return -2;
          }
          if (!target2.hasMark("yingba_mark")) {
            return -1;
          }
          return -0.2;
        }
      }
    },
    subSkill: {
      mark: {
        marktext: "定",
        intro: {
          name: "平定",
          content: "mark",
          onunmark: true
        },
        mod: {
          maxHandcard(player2, numx) {
            var num = player2.countMark("yingba_mark");
            if (num) {
              return numx + num * game.countPlayer(function(current) {
                return current.hasSkill("yingba");
              });
            }
          }
        }
      }
    }
  },
  scfuhai: {
    audio: 2,
    trigger: { player: "useCardToPlayered" },
    forced: true,
    filter(event2, player2) {
      return event2.target && event2.target.hasMark("yingba_mark");
    },
    logTarget: "target",
    async content(event2, trigger, player2) {
      trigger.directHit.add(trigger.target);
      if (player2.getHistory("gain", (evt) => evt.getParent(2).name == "scfuhai").length < 2) {
        await player2.draw();
      }
    },
    group: ["scfuhai_die"],
    ai: {
      directHit_ai: true,
      skillTagFilter(player2, tag, arg) {
        return arg && arg.target && arg.target.hasMark("yingba_mark");
      },
      combo: "yingba"
    },
    subSkill: {
      usea: {
        audio: "scfuhai",
        trigger: { player: "useCardAfter" },
        forced: true,
        filter(event2, player2) {
          return lib.skill.scfuhai_usea.logTarget(event2, player2).length > 0;
        },
        logTarget(event2, player2) {
          return event2.targets.filter(function(i) {
            return i.hasMark("yingba_mark");
          });
        },
        async content(event2, trigger, player2) {
          let num = 0;
          for (const target2 of trigger.targets) {
            const numx = target2.countMark("yingba_mark");
            if (numx) {
              num += numx;
              target2.removeMark("yingba_mark", numx);
            }
          }
          if (num) {
            await player2.gainMaxHp(num);
          }
        }
      },
      die: {
        audio: "scfuhai",
        trigger: { global: "die" },
        forced: true,
        filter(event2, player2) {
          return event2.player.countMark("yingba_mark") > 0;
        },
        async content(event2, trigger, player2) {
          await player2.gainMaxHp(trigger.player.countMark("yingba_mark"));
          await player2.draw(trigger.player.countMark("yingba_mark"));
        }
      }
    }
  },
  pinghe: {
    audio: 2,
    mod: {
      maxHandcardBase(player2) {
        return player2.getDamagedHp();
      }
    },
    trigger: { player: "damageBegin2" },
    forced: true,
    filter(event2, player2) {
      return event2.source && event2.source != player2 && player2.maxHp > 1 && player2.countCards("h") > 0;
    },
    async content(event2, trigger, player2) {
      trigger.cancel();
      await player2.loseMaxHp();
      let result2 = await player2.chooseCardTarget({
        prompt: "请选择【冯河】的牌和目标",
        prompt2: "将一张手牌交给一名其他角色并防止伤害" + (player2.hasSkill("yingba") ? "，然后令伤害来源获得一个“平定”标记" : ""),
        filterCard: true,
        forced: true,
        filterTarget: lib.filter.notMe,
        ai1(card2) {
          if (get.tag(card2, "recover") && !game.hasPlayer(function(current) {
            return get.attitude(current, player2) > 0 && !current.hasSkillTag("nogain");
          })) {
            return 0;
          }
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
      if (result2.bool) {
        const target2 = result2.targets[0];
        player2.line(target2, "green");
        await player2.give(result2.cards, target2);
        if (player2.hasSkill("yingba")) {
          trigger.source.addMark("yingba_mark", 1);
        }
      }
    },
    ai: {
      maixie_defend: true,
      effect: {
        target(card2, player2, target2) {
          if (player2 !== target2 && target2.maxHp > 1 && target2.countCards("h") > 0) {
            if (get.tag(card2, "damage") && target2.hasSkill("yingba")) {
              let damage = 1.6;
              if (target2.isHealthy()) {
                damage += 1.6;
              }
              if (game.hasPlayer((cur) => {
                return cur !== target2 && get.attitude(target2, cur) > 0;
              })) {
                damage -= 0.9;
              }
              return [0, -damage, 0, -0.4];
            }
            if (card2.name === "tiesuo") {
              return 0.4;
            }
          }
          if (get.tag(card2, "recover") && _status.event.type == "phase" && !player2.needsToDiscard()) {
            return 0;
          }
        }
      }
    }
  },
  tianzuo: {
    audio: 2,
    trigger: {
      global: "phaseBefore",
      player: "enterGame"
    },
    forced: true,
    filter(event2, player2) {
      return (event2.name != "phase" || game.phaseNumber == 0) && !lib.inpile.includes("qizhengxiangsheng");
    },
    async content(event2, trigger, player2) {
      game.addGlobalSkill("tianzuo_global");
      const cards2 = [];
      for (let i = 2; i < 10; i++) {
        cards2.push(game.createCard2("qizhengxiangsheng", i % 2 ? "club" : "spade", i));
      }
      game.broadcastAll(() => void lib.inpile.add("qizhengxiangsheng"));
      game.cardsGotoPile(cards2, () => {
        return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
      });
    },
    group: "tianzuo_remove",
    subSkill: {
      remove: {
        audio: "tianzuo",
        trigger: { target: "useCardToBefore" },
        forced: true,
        priority: 15,
        filter(event2, player2) {
          return event2.card && event2.card.name == "qizhengxiangsheng";
        },
        async content(event2, trigger, player2) {
          trigger.cancel();
        },
        ai: {
          effect: {
            target(card2, player2, target2) {
              if (card2 && card2.name == "qizhengxiangsheng") {
                return "zeroplayertarget";
              }
            }
          }
        }
      },
      global: {
        trigger: { player: "useCardToPlayered" },
        forced: true,
        popup: false,
        filter(event2, player2) {
          return event2.card.name == "qizhengxiangsheng";
        },
        async content(event2, trigger, player2) {
          const target2 = trigger.target;
          event2.target = target2;
          let result2 = await player2.chooseControl("奇兵", "正兵").set("prompt", "请选择" + get.translation(target2) + "的标记").set(
            "choice",
            (function() {
              var e1 = 1.5 * get.sgn(get.damageEffect(target2, player2, target2));
              var e2 = 0;
              if (target2.countGainableCards(player2, "h") > 0 && !target2.hasSkillTag("noh")) {
                e2 = -1;
              }
              var es = target2.getGainableCards(player2, "e");
              if (es.length) {
                e2 = Math.min(
                  e2,
                  (function() {
                    var max = 0;
                    for (var i of es) {
                      max = Math.max(max, get.value(i, target2));
                    }
                    return -max / 4;
                  })()
                );
              }
              if (Math.abs(e1 - e2) <= 0.3) {
                return Math.random() < 0.5 ? "奇兵" : "正兵";
              }
              if (e1 < e2) {
                return "奇兵";
              }
              return "正兵";
            })()
          ).set("ai", function() {
            return _status.event.choice;
          }).forResult();
          let map = trigger.getParent().customArgs, id = target2.playerid;
          if (!map[id]) {
            map[id] = {};
          }
          map[id].qizheng_name = result2.control;
        }
      },
      rewrite: {
        audio: "tianzuo",
        trigger: { global: "useCardToTargeted" },
        filter(event2, player2) {
          return event2.card.name == "qizhengxiangsheng";
        },
        logTarget: "target",
        prompt2: "观看其手牌并修改“奇正相生”标记",
        async content(event2, trigger, player2) {
          let target2 = trigger.target;
          event2.target = target2;
          if (player2 != target2 && target2.countCards("h") > 0) {
            await player2.viewHandcards(target2);
          }
          let result2 = await player2.chooseControl("奇兵", "正兵").set("prompt", "请选择" + get.translation(target2) + "的标记").set(
            "choice",
            (function() {
              var shas = target2.getCards("h", "sha"), shans = target2.getCards("h", "shan");
              var e1 = 1.5 * get.sgn(get.damageEffect(target2, player2, target2));
              var e2 = 0;
              if (target2.countGainableCards(player2, "h") > 0 && !target2.hasSkillTag("noh")) {
                e2 = -1;
              }
              var es = target2.getGainableCards(player2, "e");
              if (es.length) {
                e2 = Math.min(
                  e2,
                  (function() {
                    var max = 0;
                    for (var i of es) {
                      max = Math.max(max, get.value(i, target2));
                    }
                    return -max / 4;
                  })()
                );
              }
              if (get.attitude(player2, target2) > 0) {
                if (shas.length >= Math.max(1, shans.length)) {
                  return "奇兵";
                }
                if (shans.length > shas.length) {
                  return "正兵";
                }
                return e1 > e2 ? "奇兵" : "正兵";
              }
              if (shas.length) {
                e1 = -0.5;
              }
              if (shans.length) {
                e2 = -0.7;
              }
              if (Math.abs(e1 - e2) <= 0.3) {
                return Math.random() < 0.5 ? "奇兵" : "正兵";
              }
              var rand = Math.random();
              if (e1 < e2) {
                return rand < 0.1 ? "奇兵" : "正兵";
              }
              return rand < 0.1 ? "正兵" : "奇兵";
            })()
          ).set("ai", () => _status.event.choice).forResult();
          let map = trigger.getParent().customArgs, id = target2.playerid;
          if (!map[id]) {
            map[id] = {};
          }
          map[id].qizheng_name = result2.control;
          map[id].qizheng_aibuff = get.attitude(player2, target2) > 0;
        }
      }
    }
  },
  lingce: {
    audio: 2,
    init: (player2) => {
      game.addGlobalSkill("lingce_global");
    },
    trigger: { global: "useCard" },
    forced: true,
    filter(event2, player2) {
      if (!event2.card.isCard || !event2.cards || event2.cards.length !== 1) {
        return false;
      }
      return event2.card.name == "qizhengxiangsheng" || get.zhinangs().includes(event2.card.name) || player2.getStorage("dinghan").includes(event2.card.name);
    },
    async content(event2, trigger, player2) {
      await player2.draw();
    },
    subSkill: {
      global: {
        ai: {
          effect: {
            player_use(card2, player2, target2) {
              if (typeof card2 !== "object") {
                return;
              }
              let num = 0, nohave = true;
              game.countPlayer((i) => {
                if (i.hasSkill("lingce", null, null, false)) {
                  nohave = false;
                  if (i.isIn() && lib.skill.lingce.filter(
                    {
                      card: card2,
                      cards: card2.cards ? card2.cards : [card2]
                    },
                    i
                  )) {
                    num += get.sgnAttitude(player2, i);
                  }
                }
              }, true);
              if (nohave) {
                game.removeGlobalSkill("lingce_global");
              } else {
                return [1, 0.8 * num];
              }
            }
          }
        }
      }
    }
  },
  dinghan: {
    audio: 2,
    trigger: {
      target: "useCardToTarget",
      player: "addJudgeBefore"
    },
    forced: true,
    locked: false,
    filter(event2, player2) {
      if (event2.name == "useCardToTarget" && get.type(event2.card, null, false) != "trick") {
        return false;
      }
      return !player2.getStorage("dinghan").includes(event2.card.name);
    },
    async content(event2, trigger, player2) {
      player2.markAuto("dinghan", [trigger.card.name]);
      if (trigger.name == "addJudge") {
        trigger.cancel();
        if (trigger.card?.cards?.length) {
          const map = /* @__PURE__ */ new Map(), targets = [];
          for (const card2 of trigger.card.cards) {
            const owner = get.owner(card2);
            if (owner) {
              targets.add(owner);
              map.set(owner, (map.get(owner) ?? []).concat([card2]));
            }
          }
          if (targets.length) {
            await game.loseAsync({
              map,
              targets,
              cards: trigger.card.cards
            }).setContent(async (event3, trigger2, player3) => {
              const { map: map2, targets: targets2, cards: cards2 } = event3;
              for (const target2 of targets2) {
                const lose = map2.get(target2);
                const next = target2.lose(lose, ui.discardPile);
                next.getlx = false;
                await next;
              }
              game.log(cards2, "进入了弃牌堆");
            });
          }
        }
      } else {
        trigger.targets.remove(player2);
        trigger.getParent().triggeredTargets2.remove(player2);
        trigger.untrigger();
      }
    },
    onremove: true,
    intro: { content: "已记录牌名：$" },
    group: "dinghan_add",
    subSkill: {
      add: {
        trigger: { player: "phaseBegin" },
        direct: true,
        async content(event2, trigger, player2) {
          let dialog = [get.prompt("dinghan")];
          let list1 = player2.getStorage("dinghan");
          let list2 = lib.inpile.filter(function(i) {
            return get.type2(i, false) == "trick" && !list1.includes(i);
          });
          if (list1.length) {
            dialog.push('<div class="text center">已记录</div>');
            dialog.push([list1, "vcard"]);
          }
          if (list2.length) {
            dialog.push('<div class="text center">未记录</div>');
            dialog.push([list2, "vcard"]);
          }
          let result2 = await player2.chooseButton(dialog).set("ai", function(button) {
            var player3 = _status.event.player, name = button.link[2];
            if (player3.getStorage("dinghan").includes(name)) {
              return -get.effect(player3, { name }, player3, player3);
            } else {
              return get.effect(player3, { name }, player3, player3) * (1 + player3.countCards("hs", name));
            }
          }).forResult();
          if (result2.bool) {
            player2.logSkill("dinghan");
            let name = result2.links[0][2];
            if (player2.getStorage("dinghan").includes(name)) {
              player2.unmarkAuto("dinghan", [name]);
              game.log(player2, "从定汉记录中移除了", "#y" + get.translation(name));
            } else {
              player2.markAuto("dinghan", [name]);
              game.log(player2, "向定汉记录中添加了", "#y" + get.translation(name));
            }
            await game.delayx();
          }
        }
      }
    }
  },
  dulie: {
    audio: 2,
    trigger: { target: "useCardToTarget" },
    forced: true,
    logTarget: "player",
    filter(event2, player2) {
      return event2.card.name == "sha" && event2.player.hp > player2.hp;
    },
    async content(event2, trigger, player2) {
      const next = player2.judge((result3) => get.suit(result3) === "heart" ? 2 : -1);
      next.set("judge2", (result3) => result3.bool);
      const result2 = await next.forResult();
      if (result2.bool) {
        trigger.targets.remove(player2);
        trigger.getParent().triggeredTargets2.remove(player2);
        trigger.untrigger();
      }
    },
    ai: {
      effect: {
        target_use(card2, player2, target2, current, isLink) {
          if (card2.name == "sha" && !isLink && player2.hp > target2.hp) {
            return 0.5;
          }
        }
      }
    },
    marktext: "围",
    intro: {
      name: "破围(围)",
      name2: "围",
      content: "mark"
    }
  },
  tspowei: {
    audio: 3,
    dutySkill: true,
    derivation: "shenzhu",
    group: ["tspowei_init", "tspowei_move", "tspowei_achieve", "tspowei_fail", "tspowei_use", "tspowei_remove"],
    subSkill: {
      remove: {
        audio: "tspowei3.mp3",
        trigger: { global: "damageEnd" },
        filter(event2, player2) {
          return event2.player && event2.player.isIn() && event2.player.hasMark("dulie");
        },
        forced: true,
        logTarget: "player",
        async content(event2, trigger, player2) {
          trigger.player.removeMark("dulie", trigger.player.countMark("dulie"));
        }
      },
      use: {
        audio: "tspowei3.mp3",
        trigger: { global: "phaseBegin" },
        direct: true,
        filter(event2, player2) {
          return event2.player != player2 && event2.player.hasMark("dulie") && (player2.countCards("h") > 0 || player2.hp >= event2.player.hp && event2.player.countCards("h") > 0);
        },
        async content(event2, trigger, player2) {
          let list = [], target2 = trigger.player, choiceList = ["弃置一张牌并对其造成1点伤害", "获得其一张手牌"];
          event2.target = target2;
          if (player2.hasCard(function(card2) {
            return lib.filter.cardDiscardable(card2, player2, "tspowei_use");
          }, "h")) {
            list.push("选项一");
          } else {
            choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
          }
          if (player2.hp >= target2.hp && target2.countCards("h") > 0) {
            list.push("选项二");
          } else {
            choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
          }
          let result2 = await player2.chooseControl(list, "cancel2").set("prompt", get.prompt("tspowei", target2)).set("choiceList", choiceList).set("ai", function() {
            var evt = _status.event.getParent();
            if (evt.player.hasCard(function(card2) {
              return lib.filter.cardDiscardable(card2, evt.player, "tspowei_use") && get.value(card2, evt.player) < 7;
            }, "h") && get.damageEffect(evt.target, evt.player, evt.player) > 0) {
              return "选项一";
            }
            if (evt.player.hp >= evt.target.hp && evt.target.countCards("h") > 0 && get.attitude(evt.player, evt.target) <= 0 && !evt.target.hasSkillTag("noh")) {
              return "选项二";
            }
            return "cancel2";
          }).forResult();
          if (result2.control != "cancel2") {
            if (result2.control == "选项二") {
              player2.logSkill("tspowei_use", target2);
              await player2.gainPlayerCard(target2, "h", true);
              event2.goto(3);
            }
          } else {
            return;
          }
          await player2.chooseToDiscard("h", true).set("logSkill", ["tspowei_use", target2]);
          if (get.mode() != "identity" || player2.identity != "nei") {
            player2.addExpose(0.2);
          }
          await target2.damage();
          player2.addTempSkill("tspowei_inRange");
        },
        ai: { expose: 0.2 }
      },
      inRange: {
        charlotte: true,
        mod: {
          inRangeOf(from, to) {
            if (from == _status.currentPhase) {
              return true;
            }
          }
        }
      },
      init: {
        audio: "tspowei3.mp3",
        trigger: {
          global: "phaseBefore",
          player: "enterGame"
        },
        forced: true,
        filter(event2, player2) {
          return event2.name != "phase" || game.phaseNumber == 0;
        },
        logTarget(event2, player2) {
          return game.filterPlayer((current) => current != player2 && !current.hasMark("dulie"));
        },
        async content(event2, trigger, player2) {
          const list = game.filterPlayer((current) => current != player2 && !current.hasMark("dulie")).sortBySeat();
          for (const current of list) {
            current.addMark("dulie", 1, false);
          }
        }
      },
      move: {
        audio: "tspowei3.mp3",
        trigger: { player: "phaseBegin" },
        forced: true,
        filter(event2, player2) {
          return game.hasPlayer((current) => current != player2 && current.hasMark("dulie"));
        },
        async content(event2, trigger, player2) {
          const list = game.filterPlayer((current) => current != player2 && current.hasMark("dulie")).sortBySeat();
          const map = {};
          for (const current of list) {
            const num = current.countMark("dulie");
            current.removeMark("dulie", num);
            map[current.playerid] = num;
          }
          for (const current of list) {
            let next = current.next;
            if (next == player2) {
              next = next.next;
            }
            next.addMark("dulie", map[current.playerid]);
          }
        }
      },
      achieve: {
        audio: "tspowei1.mp3",
        trigger: { player: "phaseBegin" },
        forced: true,
        skillAnimation: true,
        animationColor: "metal",
        filter(event2, player2) {
          return !game.hasPlayer(function(current) {
            return current.hasMark("dulie");
          });
        },
        async content(event2, trigger, player2) {
          game.log(player2, "成功完成使命");
          player2.awakenSkill("tspowei");
          player2.addSkills("shenzhu");
        }
      },
      fail: {
        audio: "tspowei2.mp3",
        trigger: { player: "dying" },
        forced: true,
        async content(event2, trigger, player2) {
          game.log(player2, "使命失败");
          player2.awakenSkill("tspowei");
          if (player2.hp < 1) {
            await player2.recover(1 - player2.hp);
          }
          const num = player2.countCards("e");
          if (num > 0) {
            await player2.chooseToDiscard("e", true, num);
          }
        }
      }
    }
  },
  shenzhu: {
    audio: 2,
    trigger: { player: "useCardAfter" },
    forced: true,
    filter(event2, player2) {
      return event2.card.name == "sha" && event2.card.isCard && event2.cards.length == 1;
    },
    async content(event2, trigger, player2) {
      const result2 = await player2.chooseControl().set("choiceList", ["摸一张牌，且本回合使用【杀】的次数上限+1", "摸三张牌，且本回合不能再使用【杀】"]).set("ai", () => _status.event.player.hasSha() ? 0 : 1).forResult();
      if (result2.index == 0) {
        await player2.draw();
        player2.addTempSkill("shenzhu_more");
        player2.addMark("shenzhu_more", 1, false);
      } else {
        await player2.draw(3);
        player2.addTempSkill("shenzhu_less");
      }
    },
    subSkill: {
      more: {
        charlotte: true,
        onremove: true,
        mod: {
          cardUsable(card2, player2, num) {
            if (card2.name == "sha") {
              return num + player2.countMark("shenzhu_more");
            }
          }
        }
      },
      less: {
        charlotte: true,
        mod: {
          cardEnabled(card2) {
            if (card2.name == "sha") {
              return false;
            }
          }
        }
      }
    }
  },
  dangmo: {
    audio: 2,
    trigger: { player: "useCard2" },
    direct: true,
    filter(event2, player2) {
      if (event2.card.name != "sha" || player2.hp <= 1) {
        return false;
      }
      var evt = event2.getParent("phaseUse");
      return evt && evt.player == player2 && player2.getHistory("useCard", function(evtx) {
        return evtx.card.name == "sha" && evtx.getParent("phaseUse") == evt;
      })[0] == event2 && game.hasPlayer(function(current) {
        return !event2.targets.includes(current) && lib.filter.filterTarget(event2.card, player2, current);
      });
    },
    async content(event2, trigger, player2) {
      let num = Math.min(
        player2.hp - 1,
        game.countPlayer(function(current) {
          return !trigger.targets.includes(current) && lib.filter.filterTarget(trigger.card, player2, current);
        })
      );
      let result2 = await player2.chooseTarget(
        get.prompt("dangmo"),
        "为" + get.translation(trigger.card) + "增加至多" + get.translation(num) + "个目标",
        [1, num],
        function(card2, player3, target2) {
          var evt = _status.event.getTrigger();
          return !evt.targets.includes(target2) && lib.filter.filterTarget(evt.card, player3, target2);
        }
      ).set("ai", function(target2) {
        var evt = _status.event.getTrigger(), eff = get.effect(target2, evt.card, evt.player, evt.player);
        if (player2.hasSkill("tspowei") && target2.hasMark("dulie")) {
          return 4 * eff;
        }
        return eff;
      }).forResult();
      if (result2.bool) {
        if (player2 != game.me && !player2.isOnline()) {
          game.delayx();
        }
        event2.targets = result2.targets;
      } else {
        return;
      }
      player2.logSkill("dangmo", event2.targets);
      trigger.targets.addArray(event2.targets);
    }
  },
  reshuishi: {
    audio: "shuishi",
    enable: "phaseUse",
    usable: 1,
    frequent: true,
    filter(event2, player2) {
      return player2.maxHp < 10;
    },
    async content(event2, trigger, player2) {
      event2.cards = [];
      event2.suits = [];
      event2.again = true;
      while (event2.again) {
        event2.again = false;
        await player2.judge(function(result3) {
          var evt = _status.event.getParent("reshuishi");
          if (evt && evt.suits && evt.suits.includes(get.suit(result3))) {
            return 0;
          }
          return 1;
        }).set("callback", lib.skill.reshuishi.callback).set("judge2", (result3) => result3.bool);
      }
      const cards2 = event2.cards.filterInD();
      if (!cards2.length) {
        return;
      }
      const result2 = await player2.chooseTarget("将" + get.translation(cards2) + "交给一名角色", true).set("ai", function(target3) {
        var player3 = _status.event.player, att = get.attitude(player3, target3);
        if (att <= 0) {
          return att;
        }
        if (target3.countCards("h") + _status.event.num >= _status.event.max) {
          att /= 3;
        }
        if (target3.hasSkillTag("nogain")) {
          att /= 10;
        }
        return att;
      }).set("num", cards2.length).set(
        "max",
        game.filterPlayer().reduce((num, i) => {
          return Math.max(num, i.countCards("h"));
        }, 0)
      ).forResult();
      if (!result2.bool) {
        return;
      }
      const target2 = result2.targets[0];
      event2.target = target2;
      player2.line(target2, "green");
      await target2.gain(cards2, "gain2").set("giver", player2);
      if (target2.isMaxHandcard()) {
        await player2.loseMaxHp();
      }
    },
    async callback(event2, trigger, player2) {
      const evt = event2.getParent(2);
      event2.getParent().orderingCards.remove(event2.judgeResult.card);
      evt.cards.push(event2.judgeResult.card);
      if (!event2.getParent().result.bool || player2.maxHp >= 10) {
        return;
      }
      evt.suits.push(event2.getParent().result.suit);
      await player2.gainMaxHp();
      const result2 = await player2.chooseBool("是否继续发动【慧识】？").set("frequentSkill", "reshuishi").forResult();
      if (result2.bool) {
        event2.getParent(2).again = true;
      }
    },
    ai: {
      order: 9,
      result: {
        player: 1
      }
    }
  },
  shuishi: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return player2.maxHp < 10;
    },
    filterTarget: true,
    async content(event2, trigger, player2) {
      const { target: target2 } = event2;
      while (true) {
        let result2 = await target2.draw().forResult();
        if (!result2.bool || !Array.isArray(result2.cards) || result2.cards.length !== 1 || get.itemtype(result2.cards[0]) !== "card") {
          return;
        }
        const card2 = result2.cards[0];
        const suit = get.suit(card2);
        const hs = target2.getCards("h");
        if (hs.some((cardx) => cardx !== card2 && get.suit(cardx, target2) === suit)) {
          await player2.loseMaxHp();
          await target2.showHandcards();
          return;
        }
        await player2.gainMaxHp();
        if (player2.maxHp >= 10) {
          return;
        }
        result2 = await player2.chooseBool("是否继续发动【慧识】？").forResult();
        if (!result2.bool) {
          return;
        }
      }
    },
    ai: {
      order: 0.5,
      result: {
        target: 0.2,
        player(player2, target2) {
          var list = [], hs = target2.getCards("h");
          for (var i of hs) {
            list.add(get.suit(i, target2));
          }
          if (list.length == 0) {
            return 0;
          }
          if (list.length == 1) {
            return player2.maxHp > 2 ? 0 : -2;
          }
          if (list.length == 2) {
            return player2.maxHp > 3 ? 0 : -2;
          }
          return -2;
        }
      }
    }
  },
  stianyi: {
    audio: 2,
    trigger: { player: "phaseZhunbeiBegin" },
    forced: true,
    juexingji: true,
    skillAnimation: true,
    animationColor: "gray",
    filter(event2, player2) {
      return !game.hasPlayer(function(current) {
        return current.getAllHistory("damage").length == 0;
      });
    },
    async content(event2, trigger, player2) {
      player2.awakenSkill(event2.name);
      await player2.gainMaxHp(2);
      await player2.recover();
      const next = player2.chooseTarget(true, "令一名角色获得技能〖佐幸〗");
      next.set("ai", (target2) => get.attitude(_status.event.player, target2));
      const result2 = await next.forResult();
      if (result2.bool) {
        const target2 = result2.targets[0];
        player2.line(target2, "green");
        target2.storage.zuoxing = player2;
        await target2.addSkills("zuoxing");
      }
    },
    derivation: "zuoxing"
  },
  zuoxing: {
    audio: 3,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      var target2 = player2.storage.zuoxing;
      if (!target2 || !target2.isIn() || target2.maxHp < 2) {
        return false;
      }
      for (var i of lib.inpile) {
        if (get.type(i) == "trick" && event2.filterCard({ name: i, isCard: true }, player2, event2)) {
          return true;
        }
      }
      return false;
    },
    chooseButton: {
      dialog(event2, player2) {
        var list = [];
        for (var i of lib.inpile) {
          if (get.type(i) == "trick" && event2.filterCard({ name: i, isCard: true }, player2, event2)) {
            list.push(["锦囊", "", i]);
          }
        }
        return ui.create.dialog("佐幸", [list, "vcard"]);
      },
      check(button) {
        return _status.event.player.getUseValue({ name: button.link[2], isCard: true });
      },
      backup(links, player2) {
        return {
          viewAs: {
            name: links[0][2],
            isCard: true
          },
          filterCard: () => false,
          selectCard: -1,
          popname: true,
          log: false,
          async precontent(event2, trigger, player3) {
            player3.logSkill("zuoxing");
            const target2 = player3.storage.zuoxing;
            await target2.loseMaxHp();
          }
        };
      },
      prompt(links, player2) {
        return "请选择" + get.translation(links[0][2]) + "的目标";
      }
    },
    ai: { order: 1, result: { player: 1 } }
  },
  resghuishi: {
    onChooseToUse(event2) {
      event2.targetprompt2.add((target2) => {
        if (event2.skill !== "resghuishi" || !target2.classList.contains("selectable")) {
          return;
        }
        if (event2.player.maxHp >= game.players.length && target2.getSkills(null, false, false).some((skill) => {
          const info = get.info(skill);
          return info?.juexingji && !target2.awakenedSkills.includes(skill);
        })) {
          return "觉醒";
        } else {
          return "摸牌";
        }
      });
    },
    audio: "sghuishi",
    enable: "phaseUse",
    filterTarget: true,
    limited: true,
    skillAnimation: true,
    animationColor: "water",
    prompt() {
      const player2 = get.player();
      if (player2.maxHp >= game.players.length) {
        return "选择一名角色。若其拥有未发动过的觉醒技，则你解除其中一个觉醒技的发动限制；否则其摸四张牌。然后你减2点体力上限。";
      }
      return "令一名角色摸四张牌，然后你减2点体力上限。";
    },
    async content(event2, trigger, player2) {
      const { target: target2 } = event2;
      player2.awakenSkill(event2.name);
      const list = target2.getSkills(null, false, false).filter((skill) => {
        const info = get.info(skill);
        return info?.juexingji && !target2.awakenedSkills.includes(skill);
      });
      if (player2.maxHp >= game.players.length && list.length > 0) {
        const result2 = list.length == 1 ? { bool: true, links: list } : await player2.chooseButton([`辉逝：选择一个觉醒技，令${get.translation(target2)}可无视条件发动该技能`, [list, "skill"]], true).set("displayIndex", false).forResult();
        if (result2?.bool && result2.links?.length) {
          const [skill] = result2.links;
          target2.storage.resghuishi_mark = skill;
          target2.markSkill("resghuishi_mark");
          const info = get.info(skill);
          if (info.filter && !info.charlotte && !info.resghuishi_filter) {
            info.resghuishi_filter = info.filter;
            info.filter = function(event3, player3) {
              if (player3.storage.resghuishi_mark) {
                return true;
              }
              return this.resghuishi_filter.apply(this, arguments);
            };
          }
        }
      } else {
        await target2.draw(4);
      }
      await player2.loseMaxHp(2);
    },
    ai: {
      order: 0.1,
      expose: 0.2,
      result: {
        target(player2, target2) {
          if (target2 != player2 && player2.hasUnknown() || player2.maxHp < (player2.getDamagedHp() > 1 ? 5 : 6)) {
            return 0;
          }
          if (target2 == player2 && player2.hasSkill("resghuishi") && game.hasPlayer(function(current) {
            return current.getAllHistory("damage").length == 0;
          })) {
            return 4;
          }
          var list = target2.getSkills(null, false, false).filter(function(skill) {
            var info = lib.skill[skill];
            return info && info.juexingji && !target2.awakenedSkills.includes(skill);
          });
          if (list.length || target2.hasJudge("lebu") || target2.hasSkillTag("nogain")) {
            return 0;
          }
          return 4;
        }
      }
    },
    subSkill: { mark: { charlotte: true, intro: { content: "发动【$】时无视条件" } } }
  },
  sghuishi: {
    onChooseToUse(event2) {
      event2.targetprompt2.add((target2) => {
        if (event2.skill !== "sghuishi" || !target2.classList.contains("selectable")) {
          return;
        }
        if (target2.getSkills(null, false, false).some((skill) => {
          const info = get.info(skill);
          return info?.juexingji && !target2.awakenedSkills.includes(skill);
        })) {
          return "觉醒";
        } else {
          return "摸牌";
        }
      });
    },
    audio: 2,
    enable: "phaseUse",
    limited: true,
    skillAnimation: true,
    animationColor: "water",
    filterTarget: lib.filter.notMe,
    async content(event2, trigger, player2) {
      const { target: target2 } = event2;
      player2.awakenSkill(event2.name);
      const list = target2.getSkills(null, false, false).filter((skill) => {
        const info = get.info(skill);
        return info?.juexingji && !target2.awakenedSkills.includes(skill);
      });
      if (list.length) {
        target2.addMark(event2.name, 1, false);
        for (const skill of list) {
          const info = get.info(skill);
          if (info.filter && !info.charlotte && !info.sghuishi_filter) {
            info.sghuishi_filter = info.filter;
            info.filter = function(event3, player3) {
              if (player3.hasMark("sghuishi")) {
                return true;
              }
              return this.sghuishi_filter.apply(this, arguments);
            };
          }
        }
      } else {
        await target2.draw(4);
      }
      await player2.loseMaxHp(2);
    },
    intro: { content: "发动非Charlotte觉醒技时无视条件" },
    ai: {
      order: 0.1,
      expose: 0.2,
      result: {
        target(player2, target2) {
          if (player2.hasUnknown() || player2.maxHp < 5) {
            return 0;
          }
          var list = target2.getSkills(null, false, false).filter(function(skill) {
            var info = lib.skill[skill];
            return info && info.juexingji;
          });
          if (list.length || target2.hasJudge("lebu") || target2.hasSkillTag("nogain")) {
            return 0;
          }
          return 4;
        }
      }
    }
  },
  zhanjiang: {
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event2, player2) {
      var players = game.filterPlayer();
      for (var i = 0; i < players.length; i++) {
        if (players[i] != player2 && players[i].getEquips("qinggang").length > 0) {
          return true;
        }
      }
    },
    async content(event2, trigger, player2) {
      const players = game.filterPlayer();
      for (const current of players) {
        if (current === player2) {
          continue;
        }
        const equips = current.getEquips("qinggang");
        if (equips.length > 0) {
          player2.line(current, "green");
          await player2.gain(equips, current, "give", "bySelf");
        }
      }
    }
  },
  boss_juejing: {
    audio: "juejing",
    audioname2: {
      dc_zhaoyun: "dcjuejing"
    },
    trigger: { player: "phaseDrawBefore" },
    forced: true,
    async content(event2, trigger, player2) {
      trigger.cancel();
    },
    ai: {
      noh: true,
      nogain: true
    },
    group: "boss_juejing2"
  },
  boss_juejing2: {
    audio: "juejing",
    sourceSkill: "boss_juejing",
    audioname2: {
      dc_zhaoyun: "dcjuejing"
    },
    mod: {
      aiOrder(player2, card2, num) {
        if (num > 0) {
          return num;
        }
        if (card2.name === "zhuge" && player2.getCardUsable("sha", true) < 6) {
          return 1;
        }
      },
      aiValue(player2, card2, num) {
        if (card2.name === "zhuge") {
          return 60 / (1 + player2.getCardUsable("sha", true));
        }
      },
      aiUseful(player2, card2, num) {
        if (card2.name === "zhuge") {
          return 60 / (1 + player2.getCardUsable("sha", true));
        }
      }
    },
    trigger: {
      player: "loseAfter",
      global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"]
    },
    forced: true,
    filter(event2, player2) {
      if (event2.name == "gain" && event2.player == player2) {
        return player2.countCards("h") > 4;
      }
      var evt = event2.getl(player2);
      if (!evt || !evt.hs || evt.hs.length == 0 || player2.countCards("h") >= 4) {
        return false;
      }
      var evt = event2;
      for (var i = 0; i < 4; i++) {
        evt = evt.getParent("boss_juejing2");
        if (evt.name != "boss_juejing2") {
          return true;
        }
      }
      return false;
    },
    async content(event2, trigger, player2) {
      const num = 4 - player2.countCards("h");
      if (num > 0) {
        await player2.draw(num);
      } else {
        await player2.chooseToDiscard("h", true, -num, "allowChooseAll");
      }
    },
    ai: {
      freeSha: true,
      freeShan: true,
      skillTagFilter() {
        return true;
      }
    }
  },
  dcjuejing: { audio: 2 },
  meihun: {
    audio: 2,
    trigger: {
      player: "phaseJieshuBegin",
      target: "useCardToTargeted"
    },
    direct: true,
    filter(event2, player2) {
      if (event2.name != "phaseJieshu" && event2.card.name != "sha") {
        return false;
      }
      return game.hasPlayer(function(current) {
        return current != player2 && current.countCards("h");
      });
    },
    async content(event2, trigger, player2) {
      let result2 = await player2.chooseTarget(get.prompt2("meihun"), function(card2, player3, target3) {
        return target3 != player3 && target3.countCards("h") > 0;
      }).set("ai", function(target3) {
        var player3 = _status.event.player;
        var att = get.attitude(player3, target3);
        if (att > 0) {
          return 0;
        }
        return 0.1 - att / target3.countCards("h");
      }).forResult();
      if (!result2.bool) {
        return;
      }
      let target2 = result2.targets[0];
      player2.logSkill("meihun", target2);
      event2.target = target2;
      result2 = await player2.chooseControl(lib.suit).set("prompt", "请选择一种花色").set("ai", function() {
        return lib.suit.randomGet();
      }).forResult();
      let suit = result2.control;
      player2.chat(get.translation(suit + 2));
      game.log(player2, "选择了", "#y" + get.translation(suit + 2));
      if (target2.countCards("h", { suit })) {
        result2 = await target2.chooseCard("h", "交给" + get.translation(player2) + "一张" + get.translation(suit) + "花色的手牌", true, function(card2, player3) {
          return get.suit(card2, player3) == _status.event.suit;
        }).set("suit", suit).forResult();
      } else {
        await player2.discardPlayerCard(target2, true, "h", "visible");
        return;
      }
      if (result2.bool && result2.cards && result2.cards.length) {
        await target2.give(result2.cards, player2, "give");
      }
    }
  },
  //Connect Mode support after Angel Beats! -2nd beat-
  huoxin: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      if (game.countPlayer() < 3) {
        return false;
      }
      for (var i of lib.suit) {
        if (player2.countCards("h", { suit: i }) > 1) {
          return true;
        }
      }
      return false;
    },
    complexCard: true,
    position: "h",
    filterCard(card2, player2) {
      if (!ui.selected.cards.length) {
        var suit = get.suit(card2);
        return player2.countCards("h", function(card22) {
          return card2 != card22 && get.suit(card22, player2) == suit;
        }) > 0;
      }
      return get.suit(card2, player2) == get.suit(ui.selected.cards[0], player2);
    },
    selectCard: 2,
    selectTarget: 2,
    filterTarget: lib.filter.notMe,
    multitarget: true,
    multiline: true,
    delay: false,
    discard: false,
    lose: false,
    check(card2) {
      return 6 - get.value(card2);
    },
    targetprompt: ["拼点发起人", "拼点目标"],
    async content(event2, trigger, player2) {
      const { targets, cards: cards2 } = event2;
      const list = [];
      for (let i = 0; i < targets.length; i++) {
        list.push([targets[i], cards2[i]]);
      }
      await game.loseAsync({
        gain_list: list,
        player: player2,
        cards: cards2,
        giver: player2,
        animate: "giveAuto"
      }).setContent("gaincardMultiple");
      await game.delayx();
      if (!targets[0].canCompare(targets[1])) {
        return;
      }
      const result2 = await targets[0].chooseToCompare(targets[1]).forResult();
      if (result2.winner !== targets[0]) {
        targets[0].addMark("huoxin", 1);
      }
      if (result2.winner !== targets[1]) {
        targets[1].addMark("huoxin", 1);
      }
    },
    marktext: "魅",
    intro: {
      name: "魅惑",
      name2: "魅惑",
      content: "mark"
    },
    group: "huoxin_control",
    ai: {
      order: 1,
      result: {
        target(player2, target2) {
          if (target2.hasMark("huoxin")) {
            return -2;
          }
          return -1;
        }
      }
    }
  },
  huoxin_control: {
    audio: "huoxin",
    forced: true,
    trigger: { global: "phaseBeginStart" },
    sourceSkill: "huoxin",
    filter(event2, player2) {
      return player2 != event2.player && !event2.player._trueMe && event2.player.countMark("huoxin") > 1;
    },
    logTarget: "player",
    skillAnimation: true,
    animationColor: "key",
    async content(event2, trigger, player2) {
      trigger.player.removeMark("huoxin", trigger.player.countMark("huoxin"));
      trigger.player._trueMe = player2;
      game.addGlobalSkill("autoswap");
      if (trigger.player == game.me) {
        game.notMe = true;
        if (!_status.auto) {
          ui.click.auto();
        }
      }
      trigger.player.addSkill("huoxin2");
    }
  },
  huoxin2: {
    trigger: {
      player: ["phaseAfter", "dieAfter"],
      global: "phaseBeforeStart"
    },
    lastDo: true,
    charlotte: true,
    forceDie: true,
    forced: true,
    silent: true,
    sourceSkill: "huoxin",
    async content(event2, trigger, player2) {
      player2.removeSkill("huoxin2");
    },
    onremove(player2) {
      if (player2 == game.me) {
        if (!game.notMe) {
          game.swapPlayerAuto(player2._trueMe);
        } else {
          delete game.notMe;
        }
        if (_status.auto) {
          ui.click.auto();
        }
      }
      delete player2._trueMe;
    }
  },
  caopi_xingdong: {
    audio: true,
    subSkill: {
      mark: {
        mark: true,
        marktext: "令",
        intro: {
          content: "跳过下个回合的判定阶段和摸牌阶段"
        }
      }
    },
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return player2.countCards("h", lib.skill.caopi_xingdong.filterCard) > 0;
    },
    filterCard(card2) {
      return card2.name == "sha" || get.type(card2) == "trick";
    },
    check(card2) {
      return 1;
    },
    filterTarget: lib.filter.notMe,
    discard: false,
    lose: false,
    delay: 0,
    async content(event2, trigger, player2) {
      const { cards: cards2, target: target2 } = event2;
      await player2.give(cards2, target2);
      let result2;
      if (!target2.getCards("h").includes(cards2[0])) {
        result2 = { bool: false };
      } else {
        result2 = await target2.chooseUseTarget(
          cards2[0],
          game.filterPlayer((current) => current !== player2),
          "请使用得到的牌，或者跳过下回合的判定阶段和摸牌阶段"
        ).forResult();
      }
      if (result2.bool) {
        await game.asyncDraw([player2, target2]);
        await game.delay();
      } else {
        target2.addTempSkill("caopi_xingdong_mark", "phaseJudgeSkipped");
        target2.skip("phaseJudge");
        target2.skip("phaseDraw");
      }
    },
    ai: {
      order: 12,
      result: {
        target(player2, target2) {
          var card2 = ui.selected.cards[0];
          if (target2.hasSkill("pingkou")) {
            return 1;
          }
          if (!card2) {
            return 0;
          }
          var info = get.info(card2);
          if (info.selectTarget == -1) {
            var eff = 0;
            game.countPlayer(function(current) {
              if (current != player2 && target2.canUse(card2, current)) {
                eff += get.effect(current, card2, target2, target2) > 0;
              }
            });
            if (eff > 0 || get.value(card2) < 3) {
              return eff;
            }
            return 0;
          } else if (game.hasPlayer(function(current) {
            return current != player2 && target2.canUse(card2, current) && get.effect(current, card2, target2, target2) > 0;
          })) {
            return 1.5;
          } else if (get.value(card2) < 3) {
            return -1;
          }
          return 0;
        }
      }
    }
  },
  shenfu: {
    audio: 2,
    trigger: { player: "phaseEnd" },
    direct: true,
    async content(event2, trigger, player2) {
      let logged = false;
      const chosen = /* @__PURE__ */ new Set();
      event2.chosen = chosen;
      while (true) {
        const odd = player2.countCards("h") % 2 === 1;
        if (odd) {
          const result2 = await player2.chooseTarget(get.prompt("shenfu"), "对一名其他角色造成1点雷属性伤害", (card2, player3, target3) => {
            return target3 !== player3 && !get.event().getParent().chosen.has(target3);
          }).set("ai", (target3) => {
            const player3 = get.player();
            return get.damageEffect(target3, player3, player3, "thunder") * (target3.hp == 1 ? 2 : 1);
          }).forResult();
          if (!result2.bool) {
            return;
          }
          const target2 = result2.targets[0];
          if (!logged) {
            logged = true;
            player2.logSkill("shenfu", target2, "thunder");
          } else {
            player2.line(target2, "thunder");
          }
          chosen.add(target2);
          await target2.damage("thunder");
          if (!target2.getHistory("damage", (evt) => evt.getParent("shenfu") === event2 && evt._dyinged).length) {
            return;
          }
        } else {
          let result2 = await player2.chooseTarget(get.prompt("shenfu"), "令一名角色摸一张牌或弃置其一张手牌", (card2, player3, target3) => {
            return !get.event().getParent().chosen.has(target3);
          }).set("ai", (target3) => {
            const att = get.attitude(_status.event.player, target3);
            const delta = target3.hp - target3.countCards("h");
            if (Math.abs(delta) == 1 && get.sgn(delta) == get.sgn(att)) {
              return 3 * Math.abs(att);
            }
            if (att > 0 || target3.countCards("h") > 0) {
              return Math.abs(att);
            }
            return 0;
          }).forResult();
          if (!result2) {
            return;
          }
          const target2 = result2.targets[0];
          if (!logged) {
            logged = true;
            player2.logSkill("shenfu", target2);
          } else {
            player2.line(target2, "green");
          }
          chosen.add(target2);
          if (target2.countCards("h") === 0) {
            result2 = { index: 0 };
          } else {
            result2 = await player2.chooseControl("摸一张牌", "弃置一张手牌").set("prompt", "选择一项令" + get.translation(target2) + "执行…").set("goon", get.attitude(player2, target2) > 0 ? 0 : 1).set("ai", () => _status.event.goon).forResult();
          }
          if (result2.index == 0) {
            await target2.draw();
          } else {
            await target2.chooseToDiscard("h", true);
          }
          if (target2.hp !== target2.countCards("h")) {
            return;
          }
        }
      }
    },
    ai: { expose: 0.25 }
  },
  qixian: {
    mod: {
      maxHandcardBase(player2, num) {
        return 7;
      }
    }
  },
  chuyuan: {
    audio: 2,
    trigger: { global: "damageEnd" },
    filter(event2, player2) {
      return event2.player.isIn() && player2.getExpansions("chuyuan").length < player2.maxHp;
    },
    logTarget: "player",
    locked: false,
    async content(event2, trigger, player2) {
      await trigger.player.draw();
      if (!trigger.player.countCards("h")) {
        return;
      }
      const result2 = await trigger.player.chooseCard("h", true, "选择一张牌置于" + get.translation(player2) + "的武将牌上作为「储」").forResult();
      player2.addToExpansion(result2.cards, trigger.player, "give").gaintag.add("chuyuan");
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
    ai: {
      notemp: true
    }
  },
  dengji: {
    audio: 2,
    derivation: ["tianxing", "new_rejianxiong", "rerende", "rezhiheng", "olluanji", "caopi_xingdong"],
    trigger: { player: "phaseZhunbeiBegin" },
    forced: true,
    juexingji: true,
    skillAnimation: true,
    animationColor: "water",
    filter(event2, player2) {
      return player2.getExpansions("chuyuan").length >= 3;
    },
    async content(event2, trigger, player2) {
      player2.awakenSkill(event2.name);
      await player2.addSkills(["tianxing", "new_rejianxiong"]);
      await player2.loseMaxHp();
      await player2.gain(player2.getExpansions("chuyuan"), "gain2", "fromStorage");
    },
    ai: {
      combo: "chuyuan"
    }
  },
  tianxing: {
    audio: 2,
    trigger: { player: "phaseZhunbeiBegin" },
    forced: true,
    juexingji: true,
    skillAnimation: true,
    animationColor: "thunder",
    filter(event2, player2) {
      return player2.getExpansions("chuyuan").length >= 3;
    },
    async content(event2, trigger, player2) {
      player2.awakenSkill(event2.name);
      await player2.loseMaxHp();
      await player2.gain(player2.getExpansions("chuyuan"), "gain2", "fromStorage");
      await player2.removeSkills("chuyuan");
      const result2 = await player2.chooseControl("rerende", "rezhiheng", "olluanji", "caopi_xingdong").set("prompt", "选择获得一个技能").set("ai", processAI).forResult();
      await player2.addSkills(result2.control);
      return;
      function processAI() {
        const player3 = get.player();
        if (!player3.hasSkill("luanji") && !player3.hasSkill("olluanji") && player3.getUseValue({ name: "wanjian" }) > 4) {
          return "olluanji";
        }
        if (!player3.hasSkill("rezhiheng")) {
          return "rezhiheng";
        }
        if (!player3.hasSkill("caopi_xingdong")) {
          return "caopi_xingdong";
        }
        return "rerende";
      }
    },
    ai: {
      combo: "chuyuan"
    }
  },
  rerende_shen_caopi: { audio: 1 },
  rezhiheng_shen_caopi: { audio: 1 },
  olluanji_shen_caopi: { audio: 1 },
  olzhiti: {
    audio: "drlt_zhiti",
    global: "olzhiti2",
    mod: {
      maxHandcard(player2, num) {
        if (game.hasPlayer(function(current) {
          return current.isDamaged();
        })) {
          return num + 1;
        }
      }
    },
    trigger: { player: ["phaseDrawBegin2", "phaseEnd"] },
    forced: true,
    filter(event2, player2) {
      var num = event2.name == "phase" ? 5 : 3;
      if (num == 3 ? event2.numFixed : !game.hasPlayer(function(current) {
        return current.hasEnabledSlot();
      })) {
        return false;
      }
      return game.countPlayer(function(current) {
        return current.isDamaged();
      }) >= num;
    },
    direct: true,
    async content(event2, trigger, player2) {
      if (trigger.name == "phaseDraw") {
        player2.logSkill("olzhiti");
        trigger.num++;
        return;
      }
      const result2 = await player2.chooseTarget(get.prompt("olzhiti"), "废除一名角色的一个随机装备栏", (card2, player3, target2) => {
        return target2.hasEnabledSlot();
      }).set("ai", (target2) => {
        return -get.attitude(_status.event.player, target2) * (target2.countCards("e") + 1);
      }).forResult();
      if (result2.bool) {
        const target2 = result2.targets[0];
        player2.logSkill("olzhiti", target2);
        const list = [];
        for (let i = 1; i < 6; i++) {
          if (target2.hasEnabledSlot(i)) {
            list.add(i == 3 || i == 4 ? 6 : i);
          }
        }
        const num = list.randomGet();
        if (num != 6) {
          await target2.disableEquip(num);
        } else {
          await target2.disableEquip(3, 4);
        }
      }
    }
  },
  olzhiti2: {
    mod: {
      maxHandcard(player2, num) {
        if (player2.isDamaged()) {
          return num - game.countPlayer(function(current) {
            return current.hasSkill("olzhiti") && current.inRange(player2);
          });
        }
      }
    }
  },
  olduorui: {
    audio: "drlt_duorui",
    trigger: { source: "damageSource" },
    filter(event2, player2) {
      const target2 = event2.player;
      if (!player2.isPhaseUsing() || target2.isDead()) {
        return false;
      }
      if (Object.keys(target2.disabledSkills).some((key) => target2.disabledSkills[key].includes("olduorui_effect"))) {
        return false;
      }
      const skills2 = target2.getStockSkills(false, true).filter((skill) => {
        const info = get.info(skill);
        return !info.charlotte || !info.persevereSkill;
      });
      return skills2.length > 0;
    },
    check(event2, player2) {
      if (get.attitude(player2, event2.player) >= 0) {
        return false;
      }
      if (event2.getParent("phaseUse").skipped) {
        return true;
      }
      const nd = player2.needsToDiscard();
      return player2.countCards("h", function(card2) {
        return player2.getUseValue(card2, null, true) > 0 && (nd ? true : get.tag(card2, "damage") > 0);
      }) == 0;
    },
    async cost(event2, trigger, player2) {
      const target2 = trigger.player;
      const skills2 = target2.getStockSkills(false, true).filter((skill) => {
        const info = get.info(skill);
        return !info.charlotte || !info.persevereSkill;
      });
      const list = skills2.map((skill) => [
        skill,
        `<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">${(() => {
          let str = get.translation(skill);
          if (!lib.skill[skill]?.nobracket) {
            str = `【${str}】`;
          }
          return str;
        })()}</div><div>${get.translation(skill, "info")}</div></div>`
      ]);
      const result2 = await player2.chooseButton([`选择${get.translation(target2)}武将牌上的一个技能并令其失效`, [list, "textbutton"]]).set("ai", (button) => {
        if (!get.event().check) {
          return 0;
        }
        const { link } = button;
        return get.skillRank(link, "inout");
      }).set("displayIndex", false).set("check", get.info(event2.skill).check(trigger, player2)).forResult();
      event2.result = {
        bool: result2?.bool,
        cost_data: result2?.links
      };
    },
    logTarget: "player",
    async content(event2, trigger, player2) {
      const {
        targets: [target2],
        cost_data: [skill]
      } = event2;
      target2.disableSkill(event2.name + "_effect", skill);
      target2.addTempSkill(event2.name + "_effect", { player: "phaseAfter" });
      game.log(player2, "选择了", target2, "的技能", `#g【${get.translation(skill)}】`);
      event2.getParent("phaseUse").skipped = true;
    },
    subSkill: {
      effect: {
        onremove(player2, skill) {
          player2.enableSkill(skill);
        },
        locked: true,
        mark: true,
        charlotte: true,
        intro: {
          content(storage, player2, skill) {
            const list = Object.keys(player2.disabledSkills).filter((key) => player2.disabledSkills[key].includes(skill)).flatMap((key) => {
              return lib.translate[key + "_info"] ? [get.translation(key)] : [];
            });
            if (list.length) {
              return `失效技能：${list.join("、")}`;
            }
          }
        }
      }
    }
  },
  wuhun2: { audio: 2 },
  new_wuhun: {
    audio: "wuhun2",
    trigger: { player: "damageEnd" },
    filter(event2, player2) {
      return event2.source && event2.source.isIn();
    },
    forced: true,
    logTarget: "source",
    async content(event2, trigger, player2) {
      trigger.source.addMark("new_wuhun", trigger.num);
    },
    group: "new_wuhun_die",
    ai: {
      notemp: true,
      effect: {
        target: (card2, player2, target2) => {
          if (!target2.hasFriend()) {
            return;
          }
          let rec = get.tag(card2, "recover"), damage = get.tag(card2, "damage");
          if (!rec && !damage) {
            return;
          }
          if (damage && player2.hasSkillTag("jueqing", false, target2)) {
            return 1.7;
          }
          let die = [null, 1], temp;
          game.filterPlayer((i) => {
            temp = i.countMark("new_wuhun");
            if (i === player2 && target2.hp + target2.hujia > 1) {
              temp++;
            }
            if (temp > die[1]) {
              die = [i, temp];
            } else if (temp === die[1]) {
              if (!die[0]) {
                die = [i, temp];
              } else if (get.attitude(target2, i) < get.attitude(target2, die[0])) {
                die = [i, temp];
              }
            }
          });
          if (die[0]) {
            if (damage) {
              return [1, 0, 1, -6 * get.sgnAttitude(player2, die[0]) / Math.max(1, target2.hp)];
            }
            return [1, 6 * get.sgnAttitude(player2, die[0]) / Math.max(1, target2.hp)];
          }
        }
      }
    },
    marktext: "魇",
    intro: {
      name: "梦魇",
      content: "mark",
      onunmark: true
    },
    subSkill: {
      die: {
        audio: "wuhun2",
        trigger: { player: "die" },
        filter(event2, player2) {
          return game.hasPlayer(function(current) {
            return current != player2 && current.hasMark("new_wuhun");
          });
        },
        forced: true,
        direct: true,
        forceDie: true,
        skillAnimation: true,
        animationColor: "soil",
        async content(event2, trigger, player2) {
          let maxNum = 0;
          for (const current of game.players) {
            if (current === player2) {
              continue;
            }
            const markNum = current.countMark("new_wuhun");
            maxNum = Math.max(maxNum, markNum);
          }
          const num = maxNum;
          let result2 = await player2.chooseTarget(
            true,
            "请选择【武魂】的目标",
            "令其进行判定，若判定结果不为【桃】或【桃园结义】，则其死亡",
            (card2, player3, target3) => {
              return target3 != player3 && target3.countMark("new_wuhun") == _status.event.num;
            }
          ).set("ai", (target3) => -get.attitude(_status.event.player, target3)).set("forceDie", true).set("num", num).forResult();
          if (!result2.bool) {
            return;
          }
          const target2 = result2.targets[0];
          event2.target = target2;
          player2.logSkill("new_wuhun_die", target2);
          player2.line(target2, { color: [255, 255, 0] });
          await game.delay(2);
          result2 = await target2.judge((card2) => ["tao", "taoyuan"].includes(card2.name) ? 10 : -10).set("judge2", (result3) => !result3.bool).forResult();
          if (!result2.bool) {
            await target2.die();
          }
        }
      }
    }
  },
  new_guixin: {
    audio: "guixin",
    trigger: {
      player: "damageEnd"
    },
    filter(event2, player2) {
      return game.hasPlayer((cur) => {
        return cur !== player2 && cur.countCards("hej") > 0;
      });
    },
    check(event2, player2) {
      if (player2.isTurnedOver() || event2.num > 1) {
        return true;
      }
      var num = game.countPlayer(function(current) {
        if (current.countCards("he") && current != player2 && get.attitude(player2, current) <= 0) {
          return true;
        }
        if (current.countCards("j") && current != player2 && get.attitude(player2, current) > 0) {
          return true;
        }
      });
      return num >= 2;
    },
    getIndex(event2, player2) {
      return event2.num;
    },
    async content(event2, trigger, player2) {
      let targets = game.filterPlayer();
      targets.remove(player2);
      targets.sort(lib.sort.seat);
      player2.line(targets, "green");
      const control = await player2.chooseControl("手牌区", "装备区", "判定区").set("ai", function() {
        if (game.hasPlayer(function(current) {
          return current.countCards("j") && current != player2 && get.attitude(player2, current) > 0;
        })) {
          return 2;
        }
        return Math.floor(Math.random() * 3);
      }).set("prompt", "请选择优先获得的区域").forResult();
      const range = {
        手牌区: ["h", "e", "j"],
        装备区: ["e", "h", "j"],
        判定区: ["j", "h", "e"]
      }[control.control || "手牌区"];
      while (targets.length > 0) {
        const target2 = targets.shift();
        for (var i = 0; i < range.length; i++) {
          var cards2 = target2.getCards(range[i]);
          if (cards2.length) {
            var card2 = cards2.randomGet();
            await player2.gain(card2, target2, "giveAuto", "bySelf");
            break;
          }
        }
      }
      await player2.turnOver();
    },
    ai: {
      maixie: true,
      maixie_hp: true,
      threaten(player2, target2) {
        if (target2.hp == 1) {
          return 2.5;
        }
        return 1;
      },
      effect: {
        target(card2, player2, target2) {
          if (!target2._new_guixin_eff && get.tag(card2, "damage") && target2.hp > (player2.hasSkillTag("damageBonus", true, {
            card: card2,
            target: target2
          }) ? 2 : 1)) {
            if (player2.hasSkillTag("jueqing", false, target2)) {
              return [1, -2];
            }
            target2._new_guixin_eff = true;
            let gain = game.countPlayer(function(current) {
              if (target2 == current) {
                return 0;
              }
              if (get.attitude(target2, current) > 0) {
                if (current.hasCard(
                  (cardx) => lib.filter.canBeGained(cardx, target2, current, "new_guixin") && get.effect(current, cardx, current, current) < 0,
                  "j"
                )) {
                  return 1.3;
                }
                return 0;
              }
              if (current.hasCard(
                (cardx) => lib.filter.canBeGained(cardx, target2, current, "new_guixin") && get.effect(current, cardx, current, current) > 0,
                "e"
              )) {
                return 1.1;
              }
              if (current.hasCard((cardx) => lib.filter.canBeGained(cardx, target2, current, "new_guixin"), "h")) {
                return 0.9;
              }
              return 0;
            });
            if (target2.isTurnedOver()) {
              gain += 2.3;
            } else {
              gain -= 2.3;
            }
            delete target2._new_guixin_eff;
            return [1, Math.max(0, gain)];
          }
        }
      }
    }
  },
  ol_shenfen: {
    audio: 2,
    enable: "phaseUse",
    filter(event2, player2) {
      return player2.countMark("baonu") >= 6;
    },
    usable: 1,
    skillAnimation: true,
    animationColor: "metal",
    async content(event2, trigger, player2) {
      player2.removeMark("baonu", 6);
      const targets = game.filterPlayer((target2) => target2 !== player2);
      player2.line(targets, "green");
      await game.doAsyncInOrder(targets, (target2) => target2.damage("nocard"));
      await game.doAsyncInOrder(targets, async (target2) => {
        const cards2 = target2.getCards("e");
        await target2.discard(cards2).set("delay", false);
        if (cards2.length) {
          await game.delay(0.5);
        }
      });
      await game.doAsyncInOrder(targets, async (target2) => {
        const num = target2.countCards("h");
        await target2.chooseToDiscard(4, "h", true).set("delay", false);
        if (num > 0) {
          await game.delay(0.5);
        }
      });
      await player2.turnOver();
    },
    ai: {
      combo: "baonu",
      order: 10,
      result: {
        player(player2) {
          return game.countPlayer(function(current) {
            if (current != player2) {
              return get.sgn(get.damageEffect(current, player2, player2));
            }
          });
        }
      }
    }
  },
  ol_wuqian: {
    audio: 2,
    enable: "phaseUse",
    derivation: "wushuang",
    filter(event2, player2) {
      return player2.countMark("baonu") >= 2 && game.hasPlayer((target2) => lib.skill.ol_wuqian.filterTarget(null, player2, target2));
    },
    filterTarget(card2, player2, target2) {
      return target2 != player2 && !target2.hasSkill("ol_wuqian_targeted");
    },
    async content(event2, trigger, player2) {
      const { target: target2 } = event2;
      player2.removeMark("baonu", 2);
      await player2.addTempSkills("wushuang");
      player2.popup("无双");
      target2.addTempSkill("ol_wuqian_targeted");
    },
    ai: {
      order: 9,
      result: {
        target(player2, target2) {
          if (player2.countCards("hs", (card2) => {
            if (!player2.getCardUsable({ name: card2.name })) {
              return false;
            }
            if (!player2.canUse(card2, target2)) {
              return false;
            }
            var eff1 = get.effect(target2, card2, player2, player2);
            _status.baonuCheck = true;
            var eff2 = get.effect(target2, card2, player2, player2);
            delete _status.baonuCheck;
            return eff2 > Math.max(0, eff1);
          })) {
            return -1;
          }
          return 0;
        }
      },
      combo: "baonu"
    },
    global: "ol_wuqian_ai",
    subSkill: {
      targeted: {
        charlotte: true,
        ai: { unequip2: true }
      },
      ai: {
        ai: {
          unequip2: true,
          skillTagFilter(player2) {
            if (!_status.baonuCheck) {
              return false;
            }
          }
        }
      }
    }
  },
  wumou: {
    audio: 2,
    trigger: { player: "useCard" },
    forced: true,
    filter(event2) {
      return get.type(event2.card) == "trick";
    },
    async content(event2, trigger, player2) {
      if (!player2.hasMark("baonu")) {
        await player2.loseHp();
        return;
      }
      const result2 = await player2.chooseControlList(["移去一枚【暴怒】标记", "失去1点体力"], true).set("ai", (event3, player3) => {
        if (get.effect(player3, { name: "losehp" }, player3, player3) >= 0) {
          return 1;
        }
        if (player3.storage.baonu > 6) {
          return 0;
        }
        if (player3.hp + player3.countCards("h", "tao") > 3) {
          return 1;
        }
        return 0;
      }).forResult();
      if (result2.index == 0) {
        player2.removeMark("baonu", 1);
      } else {
        await player2.loseHp();
      }
    },
    ai: {
      effect: {
        player_use(card2, player2) {
          if (get.type(card2) == "trick" && get.value(card2) < 6) {
            return [0, -2];
          }
        }
      },
      neg: true
    }
  },
  qinyin: {
    audio: 2,
    audioname: ["mb_zhouyu"],
    trigger: { player: "phaseDiscardEnd" },
    direct: true,
    logAudio: (index) => typeof index === "number" ? "qinyin" + index + ".mp3" : 2,
    logAudio2: {
      mb_zhouyu: (index) => typeof index === "number" ? `qinyin_mb_zhouyu${index}.mp3` : 2
    },
    filter(event2, player2) {
      var cards2 = [];
      player2.getHistory("lose", function(evt) {
        if (evt.type == "discard" && evt.getParent("phaseDiscard") == event2) {
          cards2.addArray(evt.cards2);
        }
      });
      return cards2.length > 1;
    },
    async content(event2, trigger, player2) {
      event2.forceDie = true;
      if (typeof event2.count !== "number") {
        event2.count = 1;
      }
      for (let time = event2.count; time > 0; time--) {
        let recover = 0;
        let lose = 0;
        const players = game.filterPlayer();
        for (const current of players) {
          if (current.hp < current.maxHp) {
            if (get.attitude(player2, current) > 0) {
              if (current.hp < 2) {
                lose--;
                recover += 0.5;
              }
              lose--;
              recover++;
            } else if (get.attitude(player2, current) < 0) {
              if (current.hp < 2) {
                lose++;
                recover -= 0.5;
              }
              lose++;
              recover--;
            }
          } else {
            if (get.attitude(player2, current) > 0) {
              lose--;
            } else if (get.attitude(player2, current) < 0) {
              lose++;
            }
          }
        }
        get.prompt("qinyin") + "（剩余" + get.cnNumber(time) + "次）";
        const next = player2.chooseControl("失去体力", "回复体力", "cancel2", ui.create.dialog(get.prompt("qinyin"), "hidden"));
        next.set("ai", () => {
          if (lose > recover && lose > 0) {
            return 0;
          }
          if (lose < recover && recover > 0) {
            return 1;
          }
          return 2;
        });
        const result2 = await next.forResult();
        if (result2.control === "cancel2") {
          return;
        }
        player2.logSkill("qinyin", null, null, null, [result2.control == "回复体力" ? 2 : 1]);
        const bool = result2.control === "回复体力";
        await game.doAsyncInOrder(game.filterPlayer(), async (target2) => {
          if (bool) {
            await target2.recover();
          } else {
            await target2.loseHp();
          }
        });
      }
    },
    ai: {
      expose: 0.1,
      threaten: 2
    }
  },
  lianpo: {
    audio: 2,
    audioname: ["new_simayi"],
    trigger: { global: "phaseAfter" },
    frequent: true,
    filter(event2, player2) {
      return player2.getStat("kill") > 0;
    },
    async content(event2, trigger, player2) {
      player2.insertPhase();
    }
  },
  baonu: {
    audio: 2,
    marktext: "暴",
    trigger: {
      source: "damageSource",
      player: ["damageEnd", "enterGame"],
      global: "phaseBefore"
    },
    forced: true,
    filter(event2) {
      return event2.name != "damage" && (event2.name != "phase" || game.phaseNumber == 0) || event2.num > 0;
    },
    async content(event2, trigger, player2) {
      player2.addMark("baonu", trigger.name == "damage" ? trigger.num : 2);
    },
    intro: {
      name: "暴怒",
      content: "mark"
    },
    ai: {
      combo: "ol_shenfen",
      maixie: true,
      maixie_hp: true
    }
  },
  shenfen: {
    audio: 2,
    unique: true,
    enable: "phaseUse",
    filter(event2, player2) {
      return player2.storage.baonu >= 6;
    },
    skillAnimation: true,
    animationColor: "metal",
    limited: true,
    async content(event2, trigger, player2) {
      player2.awakenSkill(event2.name);
      player2.storage.baonu -= 6;
      player2.markSkill("baonu");
      player2.syncStorage("baonu");
      event2.targets = game.filterPlayer();
      event2.targets.remove(player2);
      event2.targets2 = event2.targets.slice(0);
      player2.line(event2.targets, "green");
      await game.doAsyncInOrder(event2.targets, (target2) => target2.damage());
      await game.doAsyncInOrder(event2.targets2, async (target2) => {
        if (target2 && target2.countCards("he")) {
          await target2.chooseToDiscard("he", true, 4);
        }
      });
    },
    ai: {
      order: 10,
      result: {
        player(player2) {
          return game.countPlayer(function(current) {
            if (current != player2) {
              return get.sgn(get.damageEffect(current, player2, player2));
            }
          });
        }
      },
      combo: "baonu"
    }
  },
  wuqian: {
    audio: 2,
    enable: "phaseUse",
    derivation: "wushuang",
    filter(event2, player2) {
      return player2.storage.baonu >= 2 && !player2.hasSkill("wushuang");
    },
    async content(event2, trigger, player2) {
      player2.storage.baonu -= 2;
      player2.addTempSkill("wushuang");
    },
    ai: {
      order: 5,
      result: {
        player(player2) {
          if (!player2.storage.shenfen) {
            return 0;
          }
          var cards2 = player2.getCards("h", "sha");
          if (cards2.length) {
            if (game.hasPlayer(function(current) {
              return player2.canUse("sha", current) && get.effect(current, cards2[0], player2, player2) > 0 && current.hasShan();
            })) {
              return 1;
            }
          }
          return 0;
        }
      },
      combo: "baonu"
    }
  },
  renjie: {
    audio: "renjie2",
    trigger: { player: "damageEnd" },
    forced: true,
    group: "renjie2",
    filter(event2) {
      return event2.num > 0;
    },
    async content(event2, trigger, player2) {
      player2.addMark("renjie", trigger.num);
    },
    intro: {
      name2: "忍",
      content: "mark"
    },
    marktext: "忍",
    ai: {
      maixie: true,
      maixie_hp: true,
      combo: "jilue",
      effect: {
        target(card2, player2, target2) {
          if (!target2.hasSkill("sbaiyin") && !target2.hasSkill("jilue") || !target2.hasFriend()) {
            return;
          }
          if (player2.hasSkillTag("jueqing", false, target2)) {
            return [1, -2];
          }
          if (get.tag(card2, "damage")) {
            if (target2.hp == target2.maxHp) {
              if (!target2.hasSkill("jilue")) {
                return [0, 1];
              }
              return [0.7, 1];
            }
            return 0.7;
          }
        }
      }
    }
  },
  renjie2: {
    audio: 2,
    mod: {
      aiOrder: (player2, card2, num) => {
        if (num <= 0 || typeof card2 !== "object" || !player2.isPhaseUsing()) {
          return num;
        }
        if (player2.hasSkill("sbaiyin")) {
          if (player2.countMark("renjie") < 4 && player2.getUseValue(card2) < Math.min(4, player2.hp * player2.hp / 4)) {
            return 0;
          }
        } else if (player2.hasSkill("jilue")) {
          if (player2.countMark("renjie") < 3 && player2.getUseValue(card2) < Math.min(1.8, 0.18 * player2.hp * player2.hp)) {
            return 0;
          }
        }
      }
    },
    trigger: {
      player: "loseAfter",
      global: "loseAsyncAfter"
    },
    forced: true,
    sourceSkill: "renjie",
    filter(event2, player2) {
      if (event2.type != "discard" || event2.getlx === false) {
        return false;
      }
      var evt = event2.getParent("phaseDiscard"), evt2 = event2.getl(player2);
      return evt && evt2 && evt.name == "phaseDiscard" && evt.player == player2 && evt2.cards2 && evt2.cards2.length > 0;
    },
    async content(event2, trigger, player2) {
      player2.addMark("renjie", trigger.getl(player2).cards2.length);
    }
  },
  sbaiyin: {
    skillAnimation: "epic",
    animationColor: "thunder",
    juexingji: true,
    trigger: { player: "phaseZhunbeiBegin" },
    forced: true,
    audio: 2,
    filter(event2, player2) {
      return player2.countMark("renjie") >= 4;
    },
    async content(event2, trigger, player2) {
      player2.awakenSkill(event2.name);
      await player2.loseMaxHp();
      await player2.addSkills("jilue");
    },
    derivation: ["jilue", "jilue_guicai", "jilue_fangzhu", "jilue_jizhi", "jilue_zhiheng", "jilue_wansha"],
    ai: { combo: "renjie" }
  },
  jilue: {
    audio: 2,
    group: ["jilue_guicai", "jilue_fangzhu", "jilue_wansha", "jilue_zhiheng", "jilue_jizhi"],
    ai: { combo: "renjie" }
  },
  jilue_guicai: {
    audio: 1,
    trigger: { global: "judge" },
    filter(event2, player2) {
      return player2.countCards("hes") > 0 && player2.hasMark("renjie");
    },
    async cost(event2, trigger, player2) {
      const next = player2.chooseCard("是否弃置一枚“忍”，并发动〖鬼才〗？", "hes", filterCard);
      next.set("ai", processAI);
      event2.result = await next.forResult();
      return;
      function filterCard(card2) {
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
      }
      function processAI(card2) {
        const trigger2 = get.event().parent._trigger;
        const player3 = get.event().player;
        const result2 = trigger2.judge(card2) - trigger2.judge(trigger2.player.judging[0]);
        const attitude = get.attitude(player3, trigger2.player);
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
      }
    },
    async content(event2, trigger, player2) {
      const { cards: cards2 } = event2;
      const [card2] = cards2;
      player2.removeMark("renjie", 1);
      await player2.respond(cards2, "highlight", "noOrdering");
      if (trigger.player.judging[0].clone) {
        trigger.player.judging[0].clone.delete();
        game.addVideo("deletenode", player2, get.cardsInfo([trigger.player.judging[0].clone]));
      }
      await game.cardsDiscard(trigger.player.judging[0]);
      trigger.player.judging[0] = card2;
      trigger.orderingCards.addArray(cards2);
      game.log(trigger.player, "的判定牌改为", card2);
      await game.delay(2);
    },
    ai: {
      rejudge: true,
      tag: {
        rejudge: 1
      }
    }
  },
  jilue_fangzhu: {
    audio: 1,
    trigger: { player: "damageEnd" },
    //priority:-1,
    filter(event2, player2) {
      return player2.hasMark("renjie");
    },
    async cost(event2, trigger, player2) {
      const next = player2.chooseTarget("是否弃置一枚“忍”，并发动【放逐】？", (card2, player3, target2) => player3 !== target2);
      next.set("ai", processAI);
      event2.result = await next.forResult();
      return;
      function processAI(target2) {
        if (target2.hasSkillTag("noturn")) {
          return 0;
        }
        const player3 = get.player();
        const current = _status.currentPhase;
        const dis = current ? get.distance(current, target2, "absolute") : 1;
        const draw = player3.getDamagedHp();
        const att = get.attitude(player3, target2);
        if (att == 0) {
          return target2.hasJudge("lebu") ? Math.random() / 3 : Math.sqrt(get.threaten(target2)) / 5 + Math.random() / 2;
        }
        if (att > 0) {
          if (target2.isTurnedOver()) {
            return att + draw;
          }
          if (draw < 4) {
            return -1;
          }
          if (current && target2.getSeatNum() > current.getSeatNum()) {
            return att + draw / 3;
          }
          return 10 * Math.sqrt(Math.max(0.01, get.threaten(target2))) / (3.5 - draw) + dis / (2 * game.countPlayer());
        } else {
          if (target2.isTurnedOver()) {
            return att - draw;
          }
          if (draw >= 5) {
            return -1;
          }
          if (current && target2.getSeatNum() <= current.getSeatNum()) {
            return -att + draw / 3;
          }
          return (4.25 - draw) * 10 * Math.sqrt(Math.max(0.01, get.threaten(target2))) + 2 * game.countPlayer() / dis;
        }
      }
    },
    logTarget: "targets",
    async content(event2, trigger, player2) {
      const { targets } = event2;
      const [target2] = targets;
      player2.removeMark("renjie", 1);
      await target2.draw(player2.maxHp - player2.hp);
      await target2.turnOver();
    }
  },
  jilue_wansha: {
    audio: 1,
    enable: "phaseUse",
    usable: 1,
    filter(event2, player2) {
      return player2.hasMark("renjie");
    },
    async content(event2, trigger, player2) {
      player2.removeMark("renjie", 1);
      player2.addTempSkill("rewansha");
    },
    ai: {
      order: () => {
        let player2 = _status.event.player;
        if (game.hasPlayer((current) => {
          if (player2 === current || current.hp > 1 || get.attitude(player2, current) >= 0) {
            return false;
          }
          return player2.inRange(current) && player2.countCards("hs", "sha") && player2.getCardUsable("sha") || player2.countCards("hs", (card2) => get.name(card2) !== "sha" && get.tag(card2, "damage")) > 1;
        })) {
          return 9.2;
        }
        return 0;
      },
      result: {
        player: 1
      },
      effect: {
        player(card2, player2, target2) {
          if (target2 && player2.hasSkill("rewansha") && target2.hp <= 1 && get.tag(card2, "damage")) {
            return [1, 0, 1.5, -1.5];
          }
        }
      }
    }
  },
  jilue_zhiheng: {
    audio: 1,
    audioname2: {},
    inherit: "rezhiheng",
    filter(event2, player2) {
      return player2.hasMark("renjie");
    },
    prompt: "弃置一枚“忍”，然后弃置任意张牌并摸等量的牌。若弃置了所有的手牌，则可以多摸一张牌。",
    async content(event2, trigger, player2) {
      player2.removeMark("renjie", 1);
      const playerCards = player2.getCards("h");
      const discardingCards = event2.cards;
      await player2.discard(discardingCards);
      discardingCards.every((card2) => playerCards.includes(card2)) ? 1 : 0;
      await player2.draw(event2.num + discardingCards.length);
    },
    ai: {
      order(item, player2) {
        if (player2.hasCard((i) => get.value(i) > Math.max(6, 9 - player2.hp), "he")) {
          return 1;
        }
        return 10;
      },
      result: {
        player(player2) {
          var cards2 = player2.getCards("he");
          for (var i = 0; i < cards2.length; i++) {
            if (get.value(cards2[i]) < 6) ;
          }
          if (cards2.length > 2) {
            return 1;
          }
          return 0;
        }
      },
      nokeep: true,
      skillTagFilter(player2, tag, arg) {
        if (tag === "nokeep") {
          return player2.isPhaseUsing() && !player2.getStat().skill.jilue_zhiheng && player2.hasCard((card2) => get.name(card2) !== "tao", "h");
        }
      }
    }
  },
  jilue_jizhi: {
    audio: 1,
    trigger: { player: "useCard" },
    filter(event2, player2) {
      return get.type(event2.card, "trick") == "trick" && event2.card.isCard && player2.hasMark("renjie");
    },
    async content(event2, trigger, player2) {
      player2.removeMark("renjie", 1);
      const result2 = await player2.draw("nodelay").forResult();
      event2.card = result2.cards[0];
      if (get.type(event2.card) !== "basic") {
        return;
      }
      const result22 = await player2.chooseBool(`是否弃置${get.translation(event2.card)}并令本回合手牌上限+1？`).set("ai", (evt, player3) => _status.currentPhase === player3 && player3.needsToDiscard(-3) && _status.event.value < 6).set("value", get.value(event2.card, player2)).forResult();
      if (result22.bool) {
        await player2.discard(event2.card);
        player2.addTempSkill("jilue_jizhi_clear");
        player2.addMark("jilue_jizhi_clear", 1, false);
      }
    },
    subSkill: {
      clear: {
        charlotte: true,
        onremove: true,
        mod: {
          maxHandcard(player2, num) {
            return num + player2.countMark("jilue_jizhi_clear");
          }
        },
        intro: { content: "手牌上限+#" }
      }
    }
  },
  wushen: {
    mod: {
      cardname(card2, player2, name) {
        if (get.suit(card2) == "heart") {
          return "sha";
        }
      },
      cardnature(card2, player2) {
        if (get.suit(card2) == "heart") {
          return false;
        }
      },
      targetInRange(card2) {
        if (card2.name === "sha") {
          const suit = get.suit(card2);
          if (suit === "heart" || suit === "unsure") {
            return true;
          }
        }
      },
      cardUsable(card2) {
        if (card2.name === "sha") {
          const suit = get.suit(card2);
          if (suit === "heart" || suit === "unsure") {
            return Infinity;
          }
        }
      }
    },
    audio: 2,
    trigger: { player: "useCard" },
    forced: true,
    filter(event2, player2) {
      return event2.card.name == "sha" && get.suit(event2.card) == "heart";
    },
    async content(event2, trigger, player2) {
      trigger.directHit.addArray(game.players);
      if (trigger.addCount !== false) {
        trigger.addCount = false;
        if (player2.stat[player2.stat.length - 1].card.sha > 0) {
          player2.stat[player2.stat.length - 1].card.sha--;
        }
      }
    },
    ai: {
      effect: {
        target(card2, player2, target2, current) {
          if (get.tag(card2, "respondSha") && current < 0) {
            return 0.6;
          }
        }
      },
      directHit_ai: true,
      skillTagFilter(player2, tag, arg) {
        return arg.card.name == "sha" && get.suit(arg.card) == "heart";
      }
    }
  },
  wuhun: {
    audio: "wuhun2",
    trigger: { player: "die" },
    filter(event2) {
      return event2.source && event2.source.isIn();
    },
    forced: true,
    forceDie: true,
    skillAnimation: true,
    animationColor: "soil",
    logTarget: "source",
    async content(event2, trigger, player2) {
      const num = trigger.source.getHp();
      if (num > 0) {
        await trigger.source.loseHp(num);
      }
    },
    ai: {
      threaten(player2, target2) {
        if (target2.hp == 1) {
          if (player2.getHp() <= 0) {
            return 100;
          }
          return 0.2;
        }
        return 0.8;
      },
      effect: {
        target(card2, player2, target2, current) {
          if (player2.getHp() <= 0) {
            return;
          }
          if (!target2.hasFriend()) {
            return;
          }
          if (target2.hp <= 1 && get.tag(card2, "damage")) {
            return [1, 0, 0, -2 * player2.getHp()];
          }
        }
      }
    }
  },
  guixin: {
    audio: 2,
    trigger: { player: "damageEnd" },
    filter(event2, player2) {
      return game.hasPlayer((cur) => {
        return cur !== player2 && cur.countCards("hej") > 0;
      });
    },
    check(event2, player2) {
      if (player2.isTurnedOver() || event2.num > 1) {
        return true;
      }
      var num = game.countPlayer(function(current) {
        if (current.countCards("he") && current != player2 && get.attitude(player2, current) <= 0) {
          return true;
        }
        if (current.countCards("j") && current != player2 && get.attitude(player2, current) > 0) {
          return true;
        }
      });
      return num >= 2;
    },
    getIndex(event2, player2) {
      return event2.num;
    },
    async content(event2, trigger, player2) {
      let targets = game.filterPlayer((current) => current != player2).sortBySeat();
      player2.line(targets, "green");
      await player2.gainMultiple(targets, "hej");
      await player2.turnOver();
    },
    ai: {
      maixie: true,
      maixie_hp: true,
      threaten(player2, target2) {
        if (target2.hp == 1) {
          return 2.5;
        }
        return 0.5;
      },
      effect: {
        target(card2, player2, target2) {
          if (!target2._guixin_eff && get.tag(card2, "damage") && target2.hp > (player2.hasSkillTag("damageBonus", true, {
            card: card2,
            target: target2
          }) ? 2 : 1)) {
            if (player2.hasSkillTag("jueqing", false, target2)) {
              return [1, -2];
            }
            target2._guixin_eff = true;
            let gain = game.countPlayer(function(current) {
              if (target2 == current) {
                return 0;
              }
              if (get.attitude(target2, current) > 0) {
                if (current.hasCard(
                  (cardx) => lib.filter.canBeGained(cardx, target2, current, "guixin") && get.effect(current, cardx, current, current) < 0,
                  "ej"
                )) {
                  return 1.3;
                }
                return 0;
              }
              if (current.hasCard(
                (cardx) => lib.filter.canBeGained(cardx, target2, current, "guixin") && get.effect(current, cardx, current, current) > 0,
                "ej"
              )) {
                return 1.1;
              }
              if (current.hasCard((cardx) => lib.filter.canBeGained(cardx, target2, current, "guixin"), "h")) {
                return 0.9;
              }
              return 0;
            });
            if (target2.isTurnedOver()) {
              gain += 2.3;
            } else {
              gain -= 2.3;
            }
            delete target2._guixin_eff;
            return [1, Math.max(0, gain)];
          }
        }
      }
    }
  },
  qixing: {
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
    async content(event2, trigger, player2) {
      const getStars = player2.addToExpansion(get.cards(7), "draw");
      getStars.gaintag.add("qixing");
      await getStars;
      const expansions = player2.getExpansions("qixing");
      const cards2 = player2.getCards("h");
      if (!expansions.length || !cards2.length) {
        return;
      }
      const next = player2.chooseToMove("七星：是否交换“星”和手牌？");
      next.set("list", [
        [`${get.translation(player2)}（你）的星`, expansions],
        ["手牌区", cards2]
      ]);
      next.set("filterMove", (from, to) => typeof to != "number");
      next.set("processAI", processAI);
      const result2 = await next.forResult();
      if (result2.bool) {
        const pushs = result2.moved[0];
        const gains = result2.moved[1];
        pushs.removeArray(expansions);
        gains.removeArray(cards2);
        if (!pushs.length || pushs.length !== gains.length) {
          return;
        }
        player2.logSkill("qixing2");
        const addStars = player2.addToExpansion(pushs, player2, "giveAuto");
        addStars.gaintag.add("qixing");
        await addStars;
        await player2.gain(gains, "draw");
      }
      return;
      function processAI(list) {
        const player3 = get.player();
        const cards3 = list[0][1].concat(list[1][1]).sort((a, b) => get.useful(a) - get.useful(b));
        const cards22 = cards3.splice(0, player3.getExpansions("qixing").length);
        return [cards22, cards3];
      }
    },
    intro: {
      markcount: "expansion",
      mark(dialog, content, player2) {
        var content = player2.getExpansions("qixing");
        if (content && content.length) {
          if (player2 == game.me || player2.isUnderControl()) {
            dialog.addAuto(content);
          } else {
            return "共有" + get.cnNumber(content.length) + "张星";
          }
        }
      },
      content(content, player2) {
        var content = player2.getExpansions("qixing");
        if (content && content.length) {
          if (player2 == game.me || player2.isUnderControl()) {
            return get.translation(content);
          }
          return "共有" + get.cnNumber(content.length) + "张星";
        }
      }
    },
    group: ["qixing2"],
    ai: {
      notemp: true
    }
  },
  qixing2: {
    trigger: { player: "phaseDrawAfter" },
    direct: true,
    sourceSkill: "qixing",
    filter(event2, player2) {
      return player2.getExpansions("qixing").length > 0 && player2.countCards("h") > 0;
    },
    async content(event2, trigger, player2) {
      const expansions = player2.getExpansions("qixing");
      const cards2 = player2.getCards("h");
      if (!expansions.length || !cards2.length) {
        return;
      }
      const next = player2.chooseToMove("七星：是否交换“星”和手牌？");
      next.set("list", [
        [`${get.translation(player2)}（你）的星`, expansions],
        ["手牌区", cards2]
      ]);
      next.set("filterMove", (from, to) => typeof to != "number");
      next.set("processAI", processAI);
      const result2 = await next.forResult();
      if (result2.bool) {
        const pushs = result2.moved[0];
        const gains = result2.moved[1];
        pushs.removeArray(expansions);
        gains.removeArray(cards2);
        if (!pushs.length || pushs.length !== gains.length) {
          return;
        }
        player2.logSkill("qixing2");
        const addStars = player2.addToExpansion(pushs, player2, "giveAuto");
        addStars.gaintag.add("qixing");
        await addStars;
        await player2.gain(gains, "draw");
      }
      return;
      function processAI(list) {
        const player3 = get.player();
        const cards3 = list[0][1].concat(list[1][1]).sort((a, b) => get.value(a) - get.value(b));
        const cards22 = cards3.splice(0, player3.getExpansions("qixing").length);
        return [cards22, cards3];
      }
    }
  },
  dawu: {
    trigger: { player: "phaseJieshuBegin" },
    filter(event2, player2) {
      return player2.getExpansions("qixing").length;
    },
    audio: 2,
    async cost(event2, trigger, player2) {
      const {
        bool,
        targets,
        links: cost_data
      } = await player2.chooseButtonTarget({
        createDialog: [get.prompt2(event2.skill), player2.getExpansions("qixing")],
        selectButton: [1, game.countPlayer()],
        filterTarget: true,
        selectTarget() {
          return ui.selected.buttons.length;
        },
        complexSelect: true,
        ai1(button) {
          const { player: player3, allUse } = get.event();
          const targets2 = game.filterPlayer((target2) => {
            if (target2.isMin() || target2.hasSkill("biantian2") || target2.hasSkill("dawu2")) {
              return false;
            }
            let att = get.attitude(player3, target2);
            if (att >= 4) {
              if (target2.hp > 2 && (target2.isHealthy() || target2.hasSkillTag("maixie"))) {
                return false;
              }
              if (allUse || target2.hp == 1) {
                return true;
              }
              if (target2.hp == 2 && target2.countCards("he") <= 2) {
                return true;
              }
            }
            return false;
          });
          if (ui.selected.buttons.length < targets2.length) {
            return 1;
          }
          return 0;
        },
        ai2(target2) {
          const { player: player3, allUse } = get.event();
          if (target2.isMin() || target2.hasSkill("biantian2") || target2.hasSkill("dawu2")) {
            return 0;
          }
          let att = get.attitude(player3, target2);
          if (att >= 4) {
            if (target2.hp > 2 && (target2.isHealthy() || target2.hasSkillTag("maixie"))) {
              return 0;
            }
            if (allUse || target2.hp == 1) {
              return att;
            }
            if (target2.hp == 2 && target2.countCards("he") <= 2) {
              return att * 0.7;
            }
            return 0;
          }
          return -1;
        }
      }).set("allUse", player2.getExpansions("qixing").length >= game.countPlayer((current) => get.attitude(player2, current) > 4) * 2).forResult();
      event2.result = {
        bool,
        targets: targets?.sortBySeat(),
        cost_data
      };
    },
    async content(event2, trigger, player2) {
      const { targets, cost_data: cards2 } = event2;
      targets.forEach((target2) => {
        target2.addAdditionalSkill(`dawu_${player2.playerid}`, "dawu2");
        target2.markAuto("dawu2", [player2]);
      });
      player2.addTempSkill("dawu3", { player: "phaseBeginStart" });
      await player2.loseToDiscardpile(cards2);
    },
    ai: {
      combo: "qixing"
    }
  },
  dawu2: {
    charlotte: true,
    ai: {
      nofire: true,
      nodamage: true,
      effect: {
        target(card2, player2, target2, current) {
          if (get.tag(card2, "damage") && !get.tag(card2, "thunderDamage")) {
            return "zeroplayertarget";
          }
        }
      }
    },
    intro: {
      content(storage) {
        return `共有${storage.length}枚标记`;
      }
    }
  },
  dawu3: {
    trigger: { global: "damageBegin4" },
    sourceSkill: "dawu",
    filter(event2, player2) {
      return !event2.hasNature("thunder") && event2.player.getStorage("dawu2").includes(player2);
    },
    forced: true,
    charlotte: true,
    logTarget: "player",
    async content(event2, trigger, player2) {
      trigger.cancel();
    },
    onremove(player2) {
      game.countPlayer2((current) => {
        if (current.getStorage("dawu2").includes(player2)) {
          current.unmarkAuto("dawu2", [player2]);
          current.removeAdditionalSkill(`dawu_${player2.playerid}`);
        }
      }, true);
    }
  },
  kuangfeng: {
    audio: 2,
    trigger: { player: "phaseJieshuBegin" },
    filter(event2, player2) {
      return player2.getExpansions("qixing").length;
    },
    async cost(event2, trigger, player2) {
      const {
        bool,
        targets,
        links: cost_data
      } = await player2.chooseButtonTarget({
        createDialog: [get.prompt2(event2.skill), player2.getExpansions("qixing")],
        selectButton: 1,
        filterTarget: true,
        ai1(button) {
          if (game.hasPlayer((target2) => {
            return get.attitude(get.player(), target2) < 0;
          })) {
            return 1;
          }
          return 0;
        },
        ai2(target2) {
          return -get.attitude(get.player(), target2);
        }
      }).forResult();
      event2.result = {
        bool,
        targets: targets?.sortBySeat(),
        cost_data
      };
    },
    async content(event2, trigger, player2) {
      const { targets, cost_data: cards2 } = event2;
      targets.forEach((target2) => {
        target2.addAdditionalSkill(`kuangfeng_${player2.playerid}`, "kuangfeng2");
        target2.markAuto("kuangfeng2", [player2]);
      });
      player2.addTempSkill("kuangfeng3", { player: "phaseBeginStart" });
      await player2.loseToDiscardpile(cards2);
    },
    ai: {
      combo: "qixing"
    }
  },
  kuangfeng2: {
    charlotte: true,
    intro: {
      content(storage) {
        return `共有${storage.length}枚标记`;
      }
    },
    ai: {
      effect: {
        target(card2, player2, target2, current) {
          if (get.tag(card2, "fireDamage") && current < 0) {
            return 1.5;
          }
        }
      }
    }
  },
  kuangfeng3: {
    trigger: { global: "damageBegin3" },
    sourceSkill: "kuangfeng",
    filter(event2, player2) {
      return event2.hasNature("fire") && event2.player.getStorage("kuangfeng2").includes(player2);
    },
    charlotte: true,
    forced: true,
    logTarget: "player",
    async content(event2, trigger, player2) {
      trigger.num++;
    },
    onremove(player2) {
      game.countPlayer2((current) => {
        if (current.getStorage("kuangfeng2").includes(player2)) {
          current.unmarkAuto("kuangfeng2", player2);
          current.removeAdditionalSkill(`kuangfeng_${player2.playerid}`);
        }
      }, true);
    }
  },
  yeyan: {
    limited: true,
    audio: 2,
    enable: "phaseUse",
    filterCard(card2, player2) {
      return !ui.selected.cards.some((cardx) => get.suit(cardx, player2) == get.suit(card2, player2));
    },
    selectCard: [0, 4],
    filterTarget(card2, player2, target2) {
      var length = ui.selected.cards.length;
      return length == 0 || length == 4;
    },
    selectTarget() {
      if (ui.selected.cards.length == 4) {
        return [1, 2];
      }
      if (ui.selected.cards.length == 0) {
        return [1, 3];
      }
      game.uncheck("target");
      return [1, 3];
    },
    complexCard: true,
    complexSelect: true,
    line: "fire",
    forceDie: true,
    animationColor: "metal",
    skillAnimation: "legend",
    check(card2) {
      if (!lib.skill.yeyan.getBigFire(get.event().player)) {
        return -1;
      }
      return 1 / (get.value(card2) || 0.5);
    },
    multitarget: true,
    multiline: true,
    async contentBefore(event2, trigger, player2) {
      player2.awakenSkill(event2.skill);
    },
    async content(event2, trigger, player2) {
      const { cards: cards2, targets } = event2;
      if (cards2.length !== 4) {
        await game.doAsyncInOrder(targets, (target2) => target2.damage(1, "fire", "nocard"));
        return;
      }
      await player2.loseHp(3);
      if (targets.length === 1) {
        const result2 = await player2.chooseControl("2点", "3点").set("prompt", "请选择伤害点数").set("ai", () => "3点").set("forceDie", true).forResult();
        await targets[0].damage("fire", result2.control === "2点" ? 2 : 3, "nocard");
      } else {
        const result2 = await player2.chooseTarget("请选择受到2点伤害的角色", true, (card2, player3, target3) => {
          return get.event().targets.includes(target3);
        }).set("ai", () => 1).set("forceDie", true).set("targets", targets).forResult();
        const target2 = result2.targets[0];
        targets.sortBySeat();
        for (const target3 of targets) {
          let damageNum = 1;
          if (target3 === target2) {
            damageNum = 2;
          }
          await target3.damage("fire", damageNum, "nocard");
        }
      }
    },
    ai: {
      order(item, player2) {
        return lib.skill.yeyan.getBigFire(player2) ? 10 : 1;
      },
      fireAttack: true,
      result: {
        target(player2, target2) {
          if (player2.hasUnknown()) {
            return 0;
          }
          const att = get.sgn(get.attitude(player2, target2));
          const targets = game.filterPlayer(
            (target3) => get.damageEffect(target3, player2, player2, "fire") && (!lib.skill.yeyan.getBigFire(player2) || target3.hp <= 3 && !target3.hasSkillTag("filterDamage", null, { player: player2 }))
          );
          if (!targets.includes(target2)) {
            return 0;
          }
          if (lib.skill.yeyan.getBigFire(player2)) {
            if (ui.selected.targets.length) {
              return 0;
            }
            if (!(targets.length == 1 || att < 0 && target2.identity && target2.identity.indexOf("zhu") != -1)) {
              return 0;
            }
          }
          return att * get.damageEffect(target2, player2, player2, "fire");
        }
      }
    },
    getBigFire(player2) {
      if (player2.getDiscardableCards(player2, "h").reduce((list, card2) => list.add(get.suit(card2, player2)), []).length < 4) {
        return false;
      }
      const targets = game.filterPlayer(
        (target2) => get.damageEffect(target2, player2, player2, "fire") && target2.hp <= 3 && !target2.hasSkillTag("filterDamage", null, { player: player2 })
      );
      if (!targets.length) {
        return false;
      }
      if (targets.length == 1 || targets.some((target2) => get.attitude(player2, target2) < 0 && target2.identity && target2.identity.indexOf("zhu") != -1)) {
        let suits = player2.getDiscardableCards(player2, "h").reduce((map, card2) => {
          const suit = get.suit(card2, player2);
          if (!map[suit]) {
            map[suit] = [];
          }
          return map;
        }, {}), cards2 = [];
        Object.keys(suits).forEach((i) => {
          suits[i].addArray(player2.getDiscardableCards(player2, "h").filter((card2) => get.suit(card2) == i));
          cards2.add(suits[i].sort((a, b) => get.value(a) - get.value(b))[0]);
        });
        return player2.hp + player2.countCards("h", (card2) => !cards2.includes(card2) && player2.canSaveCard(card2, player2)) - 3 > 0;
      }
      return false;
    }
  },
  longhun: {
    audio: 4,
    mod: {
      aiOrder(player2, card2, num) {
        if (num <= 0 || !player2.isPhaseUsing() || player2.needsToDiscard() < 2) {
          return num;
        }
        let suit = get.suit(card2, player2);
        if (suit === "heart") {
          return num - 3.6;
        }
      },
      aiValue(player2, card2, num) {
        if (num <= 0) {
          return num;
        }
        let suit = get.suit(card2, player2);
        if (suit === "heart") {
          return num + 3.6;
        }
        if (suit === "club") {
          return num + 1;
        }
        if (suit === "spade") {
          return num + 1.8;
        }
      },
      aiUseful(player2, card2, num) {
        if (num <= 0) {
          return num;
        }
        let suit = get.suit(card2, player2);
        if (suit === "heart") {
          return num + 3;
        }
        if (suit === "club") {
          return num + 1;
        }
        if (suit === "spade") {
          return num + 1;
        }
      }
    },
    locked: false,
    group: ["longhun1", "longhun2", "longhun3", "longhun4"],
    ai: {
      fireAttack: true,
      skillTagFilter(player2, tag) {
        switch (tag) {
          case "respondSha": {
            if (player2.countCards("he", { suit: "diamond" }) < Math.max(1, player2.hp)) {
              return false;
            }
            break;
          }
          case "respondShan": {
            if (player2.countCards("he", { suit: "club" }) < Math.max(1, player2.hp)) {
              return false;
            }
            break;
          }
          case "save": {
            if (player2.countCards("he", { suit: "heart" }) < Math.max(1, player2.hp)) {
              return false;
            }
            break;
          }
          default:
            return true;
        }
      },
      maixie: true,
      respondSha: true,
      respondShan: true,
      effect: {
        target(card2, player2, target2) {
          if (get.tag(card2, "recover") && target2.hp >= 1) {
            return [0, 0];
          }
          if (!target2.hasFriend()) {
            return;
          }
          if ((get.tag(card2, "damage") == 1 || get.tag(card2, "loseHp")) && target2.hp > 1) {
            return [0, 1];
          }
        }
      },
      threaten(player2, target2) {
        if (target2.hp == 1) {
          return 2;
        }
        return 0.5;
      }
    }
  },
  longhun1: {
    audio: true,
    enable: ["chooseToUse", "chooseToRespond"],
    sourceSkill: "longhun",
    prompt() {
      return "将" + get.cnNumber(Math.max(1, _status.event.player.hp)) + "张红桃牌当作桃使用";
    },
    position: "hes",
    check(card2, event2) {
      if (_status.event.player.hp > 1) {
        return 0;
      }
      return 10 - get.value(card2);
    },
    selectCard() {
      return Math.max(1, _status.event.player.hp);
    },
    viewAs: { name: "tao" },
    viewAsFilter(player2) {
      return player2.countCards("hes", { suit: "heart" }) >= player2.hp;
    },
    filterCard(card2) {
      return get.suit(card2) == "heart";
    }
  },
  longhun2: {
    audio: true,
    enable: ["chooseToUse", "chooseToRespond"],
    sourceSkill: "longhun",
    prompt() {
      return "将" + get.cnNumber(Math.max(1, _status.event.player.hp)) + "张方片当作火杀使用或打出";
    },
    position: "hes",
    check(card2, event2) {
      if (_status.event.player.hp > 1) {
        return 0;
      }
      return 10 - get.value(card2);
    },
    selectCard() {
      return Math.max(1, _status.event.player.hp);
    },
    viewAs: { name: "sha", nature: "fire" },
    viewAsFilter(player2) {
      return player2.countCards("hes", { suit: "diamond" }) >= player2.hp;
    },
    filterCard(card2) {
      return get.suit(card2) == "diamond";
    }
  },
  longhun3: {
    audio: true,
    enable: ["chooseToUse", "chooseToRespond"],
    sourceSkill: "longhun",
    prompt() {
      return "将" + get.cnNumber(Math.max(1, _status.event.player.hp)) + "张黑桃牌当作无懈可击使用";
    },
    position: "hes",
    check(card2, event2) {
      if (_status.event.player.hp > 1) {
        return 0;
      }
      return 7 - get.value(card2);
    },
    selectCard() {
      return Math.max(1, _status.event.player.hp);
    },
    viewAs: { name: "wuxie" },
    viewAsFilter(player2) {
      return player2.countCards("hes", { suit: "spade" }) >= player2.hp;
    },
    filterCard(card2) {
      return get.suit(card2) == "spade";
    }
  },
  longhun4: {
    audio: true,
    enable: ["chooseToUse", "chooseToRespond"],
    sourceSkill: "longhun",
    prompt() {
      return "将" + get.cnNumber(Math.max(1, _status.event.player.hp)) + "张梅花牌当作闪使用或打出";
    },
    position: "hes",
    check(card2, event2) {
      if (_status.event.player.hp > 1) {
        return 0;
      }
      return 10 - get.value(card2);
    },
    selectCard() {
      return Math.max(1, _status.event.player.hp);
    },
    viewAsFilter(player2) {
      return player2.countCards("hes", { suit: "club" }) >= player2.hp;
    },
    viewAs: { name: "shan" },
    filterCard(card2) {
      return get.suit(card2) == "club";
    }
  },
  juejing: {
    mod: {
      maxHandcard(player2, num) {
        return 2 + num;
      },
      aiOrder(player2, card2, num) {
        if (num <= 0 || !player2.isPhaseUsing() || !get.tag(card2, "recover")) {
          return num;
        }
        if (player2.needsToDiscard() > 1) {
          return num;
        }
        return 0;
      }
    },
    audio: true,
    trigger: { player: "phaseDrawBegin2" },
    //priority:-5,
    filter(event2, player2) {
      return !event2.numFixed && player2.hp < player2.maxHp;
    },
    forced: true,
    async content(event2, trigger, player2) {
      trigger.num += player2.getDamagedHp();
    }
  },
  relonghun: {
    audio: 2,
    mod: {
      aiOrder(player2, card2, num) {
        if (num <= 0 || !player2.isPhaseUsing() || player2.needsToDiscard() < 2) {
          return num;
        }
        let suit = get.suit(card2, player2);
        if (suit === "heart") {
          return num - 3.6;
        }
      },
      aiValue(player2, card2, num) {
        if (num <= 0) {
          return num;
        }
        let suit = get.suit(card2, player2);
        if (suit === "heart") {
          return num + 3.6;
        }
        if (suit === "club") {
          return num + 1;
        }
        if (suit === "spade") {
          return num + 1.8;
        }
      },
      aiUseful(player2, card2, num) {
        if (num <= 0) {
          return num;
        }
        let suit = get.suit(card2, player2);
        if (suit === "heart") {
          return num + 3;
        }
        if (suit === "club") {
          return num + 1;
        }
        if (suit === "spade") {
          return num + 1;
        }
      }
    },
    locked: false,
    //技能发动时机
    enable: ["chooseToUse", "chooseToRespond"],
    //发动时提示的技能描述
    prompt: "将♦牌当做杀，♥牌当做桃，♣牌当做闪，♠牌当做无懈可击使用或打出",
    //动态的viewAs
    viewAs(cards2, player2) {
      if (cards2.length) {
        var name = false, nature = null;
        switch (get.suit(cards2[0], player2)) {
          case "club":
            name = "shan";
            break;
          case "diamond":
            name = "sha";
            nature = "fire";
            break;
          case "spade":
            name = "wuxie";
            break;
          case "heart":
            name = "tao";
            break;
        }
        if (name) {
          return { name, nature };
        }
      }
      return null;
    },
    //AI选牌思路
    check(card2) {
      if (ui.selected.cards.length) {
        return 0;
      }
      var player2 = _status.event.player;
      if (_status.event.type == "phase") {
        var max = 0;
        var name2;
        var list = ["sha", "tao"];
        var map = { sha: "diamond", tao: "heart" };
        for (var i = 0; i < list.length; i++) {
          var name = list[i];
          if (player2.countCards("hes", function(card3) {
            return (name != "sha" || get.value(card3) < 5) && get.suit(card3, player2) == map[name];
          }) > 0 && player2.getUseValue({ name, nature: name == "sha" ? "fire" : null }) > 0) {
            var temp = get.order({ name, nature: name == "sha" ? "fire" : null });
            if (temp > max) {
              max = temp;
              name2 = map[name];
            }
          }
        }
        if (name2 == get.suit(card2, player2)) {
          return name2 == "diamond" ? 5 - get.value(card2) : 20 - get.value(card2);
        }
        return 0;
      }
      return 1;
    },
    //选牌数量
    selectCard: [1, 2],
    //确保选择第一张牌后 重新检测第二张牌的合法性 避免选择两张花色不同的牌
    complexCard: true,
    //选牌范围：手牌区和装备区和木马
    position: "hes",
    //选牌合法性判断
    filterCard(card2, player2, event2) {
      if (ui.selected.cards.length) {
        return get.suit(card2, player2) == get.suit(ui.selected.cards[0], player2);
      }
      event2 = event2 || _status.event;
      var filter = event2._backup.filterCard;
      var name = get.suit(card2, player2);
      if (name == "club" && filter(get.autoViewAs({ name: "shan" }, "unsure"), player2, event2)) {
        return true;
      }
      if (name == "diamond" && filter(get.autoViewAs({ name: "sha", nature: "fire" }, "unsure"), player2, event2)) {
        return true;
      }
      if (name == "spade" && filter(get.autoViewAs({ name: "wuxie" }, "unsure"), player2, event2)) {
        return true;
      }
      if (name == "heart" && filter(get.autoViewAs({ name: "tao" }, "unsure"), player2, event2)) {
        return true;
      }
      return false;
    },
    //判断当前时机能否发动技能
    filter(event2, player2) {
      var filter = event2.filterCard;
      if (filter(get.autoViewAs({ name: "sha", nature: "fire" }, "unsure"), player2, event2) && player2.countCards("hes", { suit: "diamond" })) {
        return true;
      }
      if (filter(get.autoViewAs({ name: "shan" }, "unsure"), player2, event2) && player2.countCards("hes", { suit: "club" })) {
        return true;
      }
      if (filter(get.autoViewAs({ name: "tao" }, "unsure"), player2, event2) && player2.countCards("hes", { suit: "heart" })) {
        return true;
      }
      if (filter(get.autoViewAs({ name: "wuxie" }, "unsure"), player2, event2) && player2.countCards("hes", { suit: "spade" })) {
        return true;
      }
      return false;
    },
    ai: {
      respondSha: true,
      respondShan: true,
      //让系统知道角色“有杀”“有闪”
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
      //AI牌序
      order(item, player2) {
        if (player2 && _status.event.type == "phase") {
          var max = 0;
          var list = ["sha", "tao"];
          var map = { sha: "diamond", tao: "heart" };
          for (var i = 0; i < list.length; i++) {
            var name = list[i];
            if (player2.countCards("hes", function(card2) {
              return (name != "sha" || get.value(card2) < 5) && get.suit(card2, player2) == map[name];
            }) > 0 && player2.getUseValue({
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
    //让系统知道玩家“有无懈”“有桃”
    hiddenCard(player2, name) {
      if (name == "wuxie" && _status.connectMode && player2.countCards("hs") > 0) {
        return true;
      }
      if (name == "wuxie") {
        return player2.countCards("hes", { suit: "spade" }) > 0;
      }
      if (name == "tao") {
        return player2.countCards("hes", { suit: "heart" }) > 0;
      }
    },
    group: ["relonghun_num", "relonghun_discard"],
    subSkill: {
      num: {
        trigger: { player: "useCard" },
        forced: true,
        popup: false,
        filter(event2) {
          var evt = event2;
          return ["sha", "tao"].includes(evt.card.name) && evt.skill == "relonghun" && evt.cards && evt.cards.length == 2;
        },
        async content(event2, trigger, player2) {
          trigger.baseDamage++;
        }
      },
      discard: {
        trigger: { player: ["useCardAfter", "respondAfter"] },
        forced: true,
        popup: false,
        logTarget() {
          return _status.currentPhase;
        },
        autodelay(event2) {
          return event2.name == "respond" ? 0.5 : false;
        },
        filter(evt, player2) {
          return ["shan", "wuxie"].includes(evt.card.name) && evt.skill == "relonghun" && evt.cards && evt.cards.length == 2 && _status.currentPhase && _status.currentPhase != player2 && _status.currentPhase.countDiscardableCards(player2, "he");
        },
        async content(event2, trigger, player2) {
          player2.line(_status.currentPhase, "green");
          await player2.discardPlayerCard(_status.currentPhase, "he", true);
        }
      }
    }
  },
  xinlonghun: {
    audio: "longhun",
    mod: {
      aiOrder(player2, card2, num) {
        if (num <= 0 || !player2.isPhaseUsing() || player2.needsToDiscard() < 2) {
          return num;
        }
        let suit = get.suit(card2, player2);
        if (suit === "heart") {
          return num - 3.6;
        }
      },
      aiValue(player2, card2, num) {
        if (num <= 0) {
          return num;
        }
        let suit = get.suit(card2, player2);
        if (suit === "heart") {
          return num + 3.6;
        }
        if (suit === "club") {
          return num + 1;
        }
        if (suit === "spade") {
          return num + 1.8;
        }
      },
      aiUseful(player2, card2, num) {
        if (num <= 0) {
          return num;
        }
        let suit = get.suit(card2, player2);
        if (suit === "heart") {
          return num + 3;
        }
        if (suit === "club") {
          return num + 1;
        }
        if (suit === "spade") {
          return num + 1;
        }
      }
    },
    locked: false,
    enable: ["chooseToUse", "chooseToRespond"],
    prompt: "将♦手牌当做火【杀】，♥手牌当做【桃】，♣手牌当做【闪】，♠手牌当做【无懈可击】使用或打出",
    viewAs(cards2, player2) {
      if (cards2.length) {
        var name = false, nature = null;
        switch (get.suit(cards2[0], player2)) {
          case "club":
            name = "shan";
            break;
          case "diamond":
            name = "sha";
            nature = "fire";
            break;
          case "spade":
            name = "wuxie";
            break;
          case "heart":
            name = "tao";
            break;
        }
        if (name) {
          return { name, nature };
        }
      }
      return null;
    },
    check(card2) {
      var player2 = _status.event.player;
      if (_status.event.type == "phase") {
        var max = 0;
        var name2;
        var list = ["sha", "tao"];
        var map = { sha: "diamond", tao: "heart" };
        for (var i = 0; i < list.length; i++) {
          var name = list[i];
          if (player2.countCards("hs", function(card3) {
            return (name != "sha" || get.value(card3) < 5) && get.suit(card3, player2) == map[name];
          }) > 0 && player2.getUseValue({ name, nature: name == "sha" ? "fire" : null }) > 0) {
            var temp = get.order({ name, nature: name == "sha" ? "fire" : null });
            if (temp > max) {
              max = temp;
              name2 = map[name];
            }
          }
        }
        if (name2 == get.suit(card2, player2)) {
          return name2 == "diamond" ? 5 - get.value(card2) : 20 - get.value(card2);
        }
        return 0;
      }
      return 1;
    },
    position: "hs",
    filterCard(card2, player2, event2) {
      event2 = event2 || _status.event;
      var filter = event2._backup.filterCard;
      var name = get.suit(card2, player2);
      if (name == "club" && filter({ name: "shan", cards: [card2] }, player2, event2)) {
        return true;
      }
      if (name == "diamond" && filter({ name: "sha", cards: [card2], nature: "fire" }, player2, event2)) {
        return true;
      }
      if (name == "spade" && filter({ name: "wuxie", cards: [card2] }, player2, event2)) {
        return true;
      }
      if (name == "heart" && filter({ name: "tao", cards: [card2] }, player2, event2)) {
        return true;
      }
      return false;
    },
    filter(event2, player2) {
      var filter = event2.filterCard;
      if (filter(get.autoViewAs({ name: "sha", nature: "fire" }, "unsure"), player2, event2) && player2.countCards("hs", { suit: "diamond" })) {
        return true;
      }
      if (filter(get.autoViewAs({ name: "shan" }, "unsure"), player2, event2) && player2.countCards("hs", { suit: "club" })) {
        return true;
      }
      if (filter(get.autoViewAs({ name: "tao" }, "unsure"), player2, event2) && player2.countCards("hs", { suit: "heart" })) {
        return true;
      }
      if (filter(get.autoViewAs({ name: "wuxie" }, "unsure"), player2, event2) && player2.countCards("hs", { suit: "spade" })) {
        return true;
      }
      return false;
    },
    logAudio(event2, player2) {
      return "longhun" + (4 - lib.suit.indexOf(get.suit(event2.cards[0], player2))) + ".mp3";
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
        if (!player2.countCards("hs", { suit: name })) {
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
            if (player2.countCards("hs", function(card2) {
              return (name != "sha" || get.value(card2) < 5) && get.suit(card2, player2) == map[name];
            }) > 0 && player2.getUseValue({
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
      if (name == "wuxie" && _status.connectMode && player2.countCards("hs") > 0) {
        return true;
      }
      if (name == "wuxie") {
        return player2.countCards("hs", { suit: "spade" }) > 0;
      }
      if (name == "tao") {
        return player2.countCards("hs", { suit: "heart" }) > 0;
      }
    }
  },
  xinjuejing: {
    mod: {
      maxHandcard(player2, num) {
        return 2 + num;
      },
      aiOrder(player2, card2, num) {
        if (num <= 0 || !player2.isPhaseUsing() || !get.tag(card2, "recover")) {
          return num;
        }
        if (player2.needsToDiscard() > 1) {
          return num;
        }
        return 0;
      }
    },
    audio: 2,
    trigger: { player: ["dying", "dyingAfter"] },
    forced: true,
    async content(event2, trigger, player2) {
      await player2.draw();
    },
    ai: {
      effect: {
        target(card2, player2, target2) {
          if (target2.getHp() > 1) {
            return;
          }
          if (get.tag(card2, "damage") || get.tag(card2, "loseHp")) {
            return [1, 1];
          }
        }
      }
    }
  },
  shelie: {
    audio: 2,
    trigger: { player: "phaseDrawBegin1" },
    filter(event2, player2) {
      return !event2.numFixed;
    },
    async content(event2, trigger, player2) {
      trigger.changeToZero();
      const cards2 = get.cards(5, true);
      await player2.showCards(cards2, `${get.translation(player2)}发动了【${get.translation(event2.name)}】`, true).set("clearArena", false);
      const list = cards2.map((card2) => get.suit(card2)).unique();
      const result2 = await player2.chooseCardButton(`涉猎：获取花色各不相同的牌`, cards2, list.length, true).set("filterButton", function(button) {
        for (let i = 0; i < ui.selected.buttons.length; i++) {
          if (get.suit(ui.selected.buttons[i].link) == get.suit(button.link)) {
            return false;
          }
        }
        return true;
      }).set("ai", function(button) {
        return get.value(button.link, _status.event.player);
      }).forResult();
      game.broadcastAll(ui.clear);
      if (result2?.links?.length) {
        await player2.gain(result2.links, "gain2");
      }
    },
    ai: {
      threaten: 1.2
    }
  },
  gongxin: {
    audio: 2,
    audioname: ["re_lvmeng"],
    audioname2: { gexuan: "gongxin_gexuan" },
    enable: "phaseUse",
    usable: 1,
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.countCards("h");
    },
    async content(event2, trigger, player2) {
      const { target: target2 } = event2;
      const cards2 = target2.getCards("h");
      const result2 = await player2.chooseToMove_new("攻心").set("list", [
        [get.translation(target2) + "的手牌", cards2],
        [["弃置"], ["置于牌堆顶"]]
      ]).set("filterOk", (moved) => {
        return moved[1].slice().concat(moved[2]).filter((card2) => get.suit(card2) == "heart").length == 1;
      }).set("filterMove", (from, to, moved) => {
        if (moved[0].includes(from.link) && moved[1].length + moved[2].length >= 1 && [1, 2].includes(to)) {
          return false;
        }
        return get.suit(from) == "heart";
      }).set("processAI", (list) => {
        let card2 = list[0][1].slice().filter((card3) => {
          return get.suit(card3) == "heart";
        }).sort((a, b) => {
          return get.value(b) - get.value(a);
        })[0];
        if (!card2) {
          return false;
        }
        return [list[0][1].slice().remove(card2), [card2], []];
      }).forResult();
      if (result2.bool) {
        if (result2.moved[1].length) {
          await target2.discard(result2.moved[1]);
        } else {
          await player2.showCards(result2.moved[2], get.translation(player2) + "对" + get.translation(target2) + "发动了【攻心】");
          await target2.lose(result2.moved[2], ui.cardPile, "visible", "insert");
        }
      }
    },
    ai: {
      threaten: 1.5,
      result: {
        target(player2, target2) {
          return -target2.countCards("h");
        }
      },
      order: 10,
      expose: 0.4
    }
  },
  nzry_longnu: {
    mark: true,
    locked: true,
    zhuanhuanji: true,
    marktext: "☯",
    intro: {
      content(storage, player2, skill) {
        if (player2.storage.nzry_longnu == true) {
          return "锁定技，出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷杀且无使用次数限制";
        }
        return "锁定技，出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火杀且无距离限制";
      }
    },
    audio: 2,
    trigger: {
      player: "phaseUseBegin"
    },
    forced: true,
    async content(event2, trigger, player2) {
      player2.changeZhuanhuanji("nzry_longnu");
      if (player2.storage.nzry_longnu != true) {
        await player2.loseMaxHp();
      } else {
        await player2.loseHp();
      }
      await player2.draw();
      if (player2.storage.nzry_longnu != true) {
        player2.addTempSkill("nzry_longnu_2", "phaseUseAfter");
      } else {
        player2.addTempSkill("nzry_longnu_1", "phaseUseAfter");
      }
    },
    subSkill: {
      1: {
        mod: {
          cardname(card2, player2) {
            if (get.color(card2) == "red") {
              return "sha";
            }
          },
          cardnature(card2, player2) {
            if (get.color(card2) == "red") {
              return "fire";
            }
          },
          targetInRange(card2) {
            if (get.color(card2) == "red") {
              return true;
            }
          }
        },
        ai: {
          effect: {
            target(card2, player2, target2, current) {
              if (get.tag(card2, "respondSha") && current < 0) {
                return 0.6;
              }
            }
          },
          respondSha: true
        }
      },
      2: {
        mod: {
          cardname(card2, player2) {
            if (["trick", "delay"].includes(lib.card[card2.name].type)) {
              return "sha";
            }
          },
          cardnature(card2, player2) {
            if (["trick", "delay"].includes(lib.card[card2.name].type)) {
              return "thunder";
            }
          },
          cardUsable(card2, player2) {
            if (card2.name == "sha" && game.hasNature(card2, "thunder")) {
              return Infinity;
            }
          }
        },
        ai: {
          effect: {
            target(card2, player2, target2, current) {
              if (get.tag(card2, "respondSha") && current < 0) {
                return 0.6;
              }
            }
          },
          respondSha: true
        }
      }
    },
    ai: {
      fireAttack: true,
      halfneg: true,
      threaten: 1.05
    }
  },
  nzry_jieying: {
    audio: 2,
    locked: true,
    global: "g_nzry_jieying",
    ai: {
      effect: {
        target(card2) {
          if (card2.name == "tiesuo") {
            return "zeroplayertarget";
          }
        }
      }
    },
    group: ["nzry_jieying_1", "nzry_jieying_2"],
    subSkill: {
      1: {
        audio: "nzry_jieying",
        trigger: {
          player: ["linkBefore", "enterGame"],
          global: "phaseBefore"
        },
        forced: true,
        filter(event2, player2) {
          if (event2.name == "link") {
            return player2.isLinked();
          }
          return (event2.name != "phase" || game.phaseNumber == 0) && !player2.isLinked();
        },
        async content(event2, trigger, player2) {
          if (trigger.name != "link") {
            await player2.link(true);
          } else {
            trigger.cancel();
          }
        },
        ai: {
          noLink: true
        }
      },
      2: {
        audio: "nzry_jieying",
        trigger: {
          player: "phaseJieshuBegin"
        },
        filter(event2, player2) {
          return game.hasPlayer(function(current) {
            return current != player2 && !current.isLinked();
          });
        },
        async cost(event2, trigger, player2) {
          const next = player2.chooseTarget("请选择【结营】的目标");
          next.set("forced", true);
          next.set("filterTarget", (card2, player3, target2) => target2 != player3 && !target2.isLinked());
          next.set("ai", () => 1 + Math.random());
          event2.result = await next.forResult();
        },
        async content(event2, trigger, player2) {
          const { targets } = event2;
          await targets[0].link(true);
        }
      }
    }
  },
  g_nzry_jieying: {
    mod: {
      maxHandcard(player2, num) {
        if (game.countPlayer(function(current) {
          return current.hasSkill("nzry_jieying");
        }) > 0 && player2.isLinked()) {
          return num + 2;
        }
      }
    }
  },
  nzry_junlve: {
    audio: 2,
    //marktext:"军",
    intro: {
      content: "当前有#个标记"
    },
    trigger: {
      player: "damageAfter",
      source: "damageSource"
    },
    forced: true,
    async content(event2, trigger, player2) {
      player2.addMark("nzry_junlve", trigger.num);
    },
    ai: {
      combo: "nzry_cuike"
    }
  },
  nzry_cuike: {
    audio: 2,
    trigger: {
      player: "phaseUseBegin"
    },
    async cost(event2, trigger, player2) {
      let prompt;
      if (player2.countMark("nzry_junlve") % 2 == 1) {
        prompt = "是否发动【摧克】，对一名角色造成1点伤害？";
      } else {
        prompt = "是否发动【摧克】，横置一名角色并弃置其区域内的一张牌？";
      }
      const next = player2.chooseTarget(prompt);
      next.set("ai", (target2) => -get.attitude(player2, target2));
      event2.result = await next.forResult();
    },
    async content(event2, trigger, player2) {
      const { targets } = event2;
      const [target2] = targets;
      if (player2.countMark("nzry_junlve") % 2 == 1) {
        await target2.damage();
      } else {
        await target2.link(true);
        await player2.discardPlayerCard(target2, 1, "hej", true);
      }
      if (player2.countMark("nzry_junlve") <= 7) {
        return;
      }
      const next = player2.chooseBool();
      next.set("ai", () => true);
      next.set("prompt", "是否弃置所有“军略”标记并对所有其他角色造成1点伤害？");
      const result2 = await next.forResult();
      if (result2.bool) {
        const players = game.filterPlayer((target3) => target3 !== player2);
        player2.line(players);
        player2.removeMark("nzry_junlve", player2.countMark("nzry_junlve"));
        await game.doAsyncInOrder(players, (target3) => target3.damage());
      }
    },
    ai: {
      notemp: true
    }
  },
  nzry_dinghuo: {
    audio: 2,
    limited: true,
    skillAnimation: true,
    animationColor: "metal",
    enable: "phaseUse",
    filter(event2, player2) {
      return player2.countMark("nzry_junlve") > 0;
    },
    check(event2, player2) {
      var num = game.countPlayer(function(current) {
        return get.attitude(player2, current) < 0 && current.isLinked();
      });
      return player2.storage.nzry_junlve >= num && num == game.countPlayer(function(current) {
        return get.attitude(player2, current) < 0;
      });
    },
    filterTarget(card2, player2, target2) {
      return target2.isLinked();
    },
    selectTarget() {
      return [1, _status.event.player.countMark("nzry_junlve")];
    },
    multiline: true,
    multitarget: true,
    async content(event2, trigger, player2) {
      const { targets } = event2;
      player2.awakenSkill(event2.name);
      player2.storage.nzry_dinghuo = true;
      player2.removeMark("nzry_junlve", player2.countMark("nzry_junlve"));
      for (const target2 of targets) {
        await target2.discard(target2.getCards("e"));
      }
      const result2 = await player2.chooseTarget(true, "对一名目标角色造成1点火焰伤害", (card2, player3, target2) => {
        return _status.event.targets.includes(target2);
      }).set("targets", targets).set("ai", () => 1).forResult();
      if (result2.bool) {
        await result2.targets[0].damage("fire", "nocard");
      }
    },
    ai: {
      order: 1,
      fireAttack: true,
      combo: "nzry_junlve",
      result: {
        target(player2, target2) {
          if (target2.hasSkillTag("nofire")) {
            return 0;
          }
          if (lib.config.mode == "versus") {
            return -1;
          }
          if (player2.hasUnknown()) {
            return 0;
          }
          return get.damageEffect(target2, player2) - target2.countCards("e");
        }
      }
    }
  },
  drlt_duorui: {
    audio: 2,
    init(player2, skill) {
      if (!player2.storage.drlt_duorui) {
        player2.storage.drlt_duorui = [];
      }
    },
    trigger: {
      source: "damageSource"
    },
    filter(event2, player2) {
      if (player2.storage.drlt_duorui.length) {
        return false;
      }
      return event2.player.isIn() && _status.currentPhase == player2;
    },
    check(event2, player2) {
      if (get.attitude(_status.event.player, event2.player) >= 0) {
        return false;
      }
      if (player2.hasEnabledSlot() && !player2.hasEnabledSlot(5)) {
        return false;
      }
      return true;
    },
    bannedList: [
      "bifa",
      "buqu",
      "gzbuqu",
      "songci",
      "funan",
      "xinfu_guhuo",
      "reguhuo",
      "huashen",
      "rehuashen",
      "old_guhuo",
      "shouxi",
      "xinpojun",
      "taoluan",
      "xintaoluan",
      "xinfu_yingshi",
      "zhenwei",
      "zhengnan",
      "xinzhengnan"
    ],
    logTarget: "player",
    async content(event2, trigger, player2) {
      const skills2 = getFilteredSkills(trigger.player);
      event2.skills = skills2;
      if (player2.hasEnabledSlot()) {
        const next = player2.chooseToDisable();
        next.set("ai", (event3, player3, list) => {
          if (list.includes("equip5")) {
            return "equip5";
          }
          return list.randomGet();
        });
        await next;
      }
      if (!skills2.length) {
        return;
      }
      const result2 = await player2.chooseButton(["请选择要获得的技能", [skills2, "skill"]], true).set("ai", () => Math.random()).forResult();
      player2.addTempSkills(result2.links, { player: "dieAfter" });
      player2.storage.drlt_duorui = result2.links;
      player2.storage.drlt_duorui_player = trigger.player;
      trigger.player.storage.drlt_duorui = result2.links;
      trigger.player.addTempSkill("drlt_duorui1", { player: "phaseAfter" });
      return;
      function getFilteredSkills(player3) {
        const result3 = [];
        if (player3.name1 != null) {
          result3.push(...lib.character[player3.name1][3]);
        } else {
          result3.push(...lib.character[player3.name][3]);
        }
        if (player3.name2 != null) {
          result3.push(...lib.character[player3.name2][3]);
        }
        return result3.filter((skill) => {
          const info = get.info(skill);
          return info && !info.charlotte && !info.persevereSkill && !info.hiddenSkill && !info.zhuSkill && !info.juexingji && !info.limited && !info.dutySkill && !(info.unique && !info.gainable) && !lib.skill.drlt_duorui.bannedList.includes(skill);
        });
      }
    },
    group: ["duorui_clear"]
  },
  duorui_clear: {
    trigger: { global: ["phaseAfter", "dieAfter"] },
    filter(event2, player2) {
      if (!player2.storage.drlt_duorui_player || !player2.storage.drlt_duorui) {
        return false;
      }
      return player2.storage.drlt_duorui_player == event2.player && player2.storage.drlt_duorui.length;
    },
    silent: true,
    forced: true,
    popup: false,
    async content(event2, trigger, player2) {
      player2.removeSkills(player2.storage.drlt_duorui[0]);
      delete player2.storage.drlt_duorui_player;
      player2.storage.drlt_duorui = [];
    }
  },
  drlt_duorui1: {
    init(player2, skill) {
      player2.disableSkill(skill, player2.storage.drlt_duorui);
    },
    onremove(player2, skill) {
      player2.enableSkill(skill);
    },
    locked: true,
    mark: true,
    charlotte: true,
    intro: {
      content(storage, player2, skill) {
        var list = [];
        for (var i in player2.disabledSkills) {
          if (player2.disabledSkills[i].includes(skill)) {
            list.push(i);
          }
        }
        if (list.length) {
          var str = "失效技能：";
          for (var i = 0; i < list.length; i++) {
            if (lib.translate[list[i] + "_info"]) {
              str += get.translation(list[i]) + "、";
            }
          }
          return str.slice(0, str.length - 1);
        }
      }
    }
  },
  drlt_zhiti: {
    audio: 2,
    trigger: {
      global: ["juedouAfter", "chooseToCompareAfter", "compareMultipleAfter"],
      player: "damageEnd"
    },
    filter(event2, player2) {
      if (!player2.hasDisabledSlot()) {
        return false;
      }
      if (event2.name == "juedou") {
        if (![event2.player, event2.target].includes(player2)) {
          return false;
        }
        if (!event2.turn || event2.turn === player2) {
          return false;
        }
        const opposite = event2.player === player2 ? event2.target : event2.player;
        return opposite?.isIn() && opposite.inRangeOf(player2) && opposite.isDamaged();
      } else if (event2.name == "damage") {
        const opposite = event2.source;
        return opposite?.isIn() && opposite.inRangeOf(player2) && opposite.isDamaged();
      } else {
        if (![event2.player, event2.target].includes(player2)) {
          return false;
        }
        if (event2.preserve) {
          return false;
        }
        let opposite;
        if (player2 === event2.player) {
          if (event2.num1 > event2.num2) {
            opposite = event2.target;
          } else {
            return false;
          }
        } else {
          if (event2.num1 < event2.num2) {
            opposite = event2.player;
          } else {
            return false;
          }
        }
        return opposite?.isIn() && opposite.inRangeOf(player2) && opposite.isDamaged();
      }
    },
    forced: true,
    async content(event2, trigger, player2) {
      await player2.chooseToEnable();
    },
    global: "g_drlt_zhiti"
  },
  g_drlt_zhiti: {
    mod: {
      maxHandcard(player2, num) {
        if (player2.isDamaged()) {
          return num - game.countPlayer(function(current) {
            return current != player2 && current.hasSkill("drlt_zhiti") && current.inRange(player2);
          });
        }
      }
    }
  },
  drlt_poxi: {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filterTarget(card2, player2, target2) {
      return target2 != player2 && target2.countCards("h") > 0;
    },
    async content(event2, trigger, player2) {
      const { target: target2 } = event2;
      const playerCards = player2.getCards("h");
      const targetCards = target2.getCards("h");
      const playerDiscarding = [];
      const targetDiscarding = [];
      event2.list1 = playerDiscarding;
      event2.list2 = targetDiscarding;
      let next;
      if (playerCards.length > 0) {
        next = player2.chooseButton(4, ["你的手牌", playerCards, `${get.translation(target2.name)}的手牌`, targetCards]);
      } else {
        next = player2.chooseButton(4, [`${get.translation(target2.name)}的手牌`, target2.getCards("h")]);
      }
      next.set("target", target2);
      next.set("filterButton", filterButton);
      next.set("ai", processAI);
      const result2 = await next.forResult();
      if (!result2.bool) {
        return;
      }
      const cards2 = result2.links;
      for (const card2 of cards2) {
        if (get.owner(card2) === player2) {
          playerDiscarding.push(card2);
        } else {
          targetDiscarding.push(card2);
        }
      }
      await discardMultiples([
        [player2, playerDiscarding],
        [target2, targetDiscarding]
      ]);
      switch (playerDiscarding.length) {
        case 0:
          await player2.loseMaxHp();
          break;
        case 1: {
          let evt = get.event();
          const records = /* @__PURE__ */ new Set();
          while (true) {
            if (records.has(evt)) {
              break;
            }
            if (evt && evt.getParent) {
              records.add(evt);
              evt = evt.getParent();
            }
            if (evt.name === "phaseUse") {
              evt.skipped = true;
              break;
            }
          }
          player2.addTempSkill("drlt_poxi1", { player: "phaseAfter" });
          break;
        }
        case 3:
          await player2.recover();
          break;
        case 4:
          await player2.draw(4);
          break;
      }
      return;
      function filterButton(button) {
        const player3 = get.player();
        if (get.owner(button.link) && !lib.filter.canBeDiscarded(button.link, get.owner(button.link), player3)) {
          return false;
        }
        return ui.selected.buttons.every((other) => get.suit(button.link) !== get.suit(other.link));
      }
      function processAI(button) {
        const { player: player3, target: target3 } = get.event();
        const targetCards2 = target3.getCards("h");
        const chosenCards = ui.selected.buttons.map((buttonx) => buttonx.link);
        const targetChosen = chosenCards.filter((card3) => targetCards2.includes(card3));
        const card2 = button.link;
        const owner = get.owner(card2);
        const val = get.value(card2) || 1;
        if (owner == target3) {
          if (targetChosen.length > 1) {
            return 0;
          }
          if (targetChosen.length == 0 || player3.hp > 3) {
            return val;
          }
          return 2 * val;
        }
        return 7 - val;
      }
      async function discardMultiples(items) {
        const losingList = items.filter(([_, cards3]) => cards3.length);
        if (losingList.length > 1) {
          return game.loseAsync({
            lose_list: losingList,
            discarder: losingList[0][0]
          }).setContent("discardMultiple");
        } else if (losingList.length === 1) {
          const [loser, cards3] = losingList[0];
          return loser.discard(cards3);
        } else {
          return null;
        }
      }
    },
    ai: {
      order: 6,
      result: {
        target(target2, player2) {
          return -1;
        }
      }
    }
  },
  drlt_poxi1: {
    mod: {
      maxHandcard(player2, num) {
        return num - 1;
      }
    }
  },
  drlt_jieying: {
    audio: 2,
    trigger: { global: "phaseDrawBegin2" },
    filter(event2, player2) {
      return !event2.numFixed && event2.player.hasMark("drlt_jieying_mark");
    },
    forced: true,
    locked: false,
    logTarget: "player",
    async content(event2, trigger, player2) {
      trigger.num++;
    },
    global: "drlt_jieying_mark",
    group: ["drlt_jieying_1", "drlt_jieying_2", "drlt_jieying_3"],
    subSkill: {
      1: {
        audio: "drlt_jieying",
        trigger: { player: "phaseBegin" },
        filter(event2, player2) {
          return !game.hasPlayer((current) => current.hasMark("drlt_jieying_mark"));
        },
        forced: true,
        async content(event2, trigger, player2) {
          player2.addMark("drlt_jieying_mark", 1);
        }
      },
      2: {
        audio: "drlt_jieying",
        trigger: { player: "phaseJieshuBegin" },
        filter(event2, player2) {
          return player2.hasMark("drlt_jieying_mark") && game.hasPlayer((target2) => {
            return target2 != player2 && !target2.hasMark("drlt_jieying_mark");
          });
        },
        async cost(event2, trigger, player2) {
          const prompt = get.prompt("drlt_jieying");
          const prompt2 = "将“营”交给一名角色；其摸牌阶段多摸一张牌，出牌阶段使用【杀】的次数上限+1且手牌上限+1。该角色回合结束后，其移去“营”标记，然后你获得其所有手牌。";
          const filterTarget = (card2, player3, target2) => target2 !== player3 && !target2.hasMark("drlt_jieying_mark");
          const next = player2.chooseTarget(prompt, prompt2, filterTarget);
          next.set("ai", processAI);
          event2.result = await next.forResult();
          return;
          function processAI(target2) {
            const th = target2.countCards("h");
            const att = get.attitude(_status.event.player, target2);
            for (const skill in target2.skills) {
              const info = get.info(skill);
              if (!info) {
                continue;
              }
              if (get.skillInfoTranslation(skill, target2).includes("【杀】")) {
                return Math.abs(att);
              }
            }
            if (att > 0) {
              if (th > 3 && target2.hp > 2) {
                return 0.6 * th;
              }
            }
            if (att < 1) {
              if (target2.countCards("j", { name: "lebu" })) {
                return 1 + Math.min((1.5 + th) * 0.8, target2.getHandcardLimit() * 0.7);
              }
              if (!th || target2.getEquip("zhangba") || target2.getEquip("guanshi")) {
                return 0;
              }
              if (!target2.inRange(player2) || player2.countCards("hs", { name: "shan" }) > 1) {
                return Math.min((1 + th) * 0.3, target2.getHandcardLimit() * 0.2);
              }
            }
            return 0;
          }
        },
        async content(event2, trigger, player2) {
          const { targets } = event2;
          const [target2] = targets;
          const mark = player2.countMark("drlt_jieying_mark");
          player2.removeMark("drlt_jieying_mark", mark);
          target2.addMark("drlt_jieying_mark", mark);
        },
        ai: {
          effect: {
            player(card2, player2, target2) {
              if (get.name(card2) === "lebu" && get.attitude(player2, target2) < 0) {
                return 1 + Math.min((target2.countCards("h") + 1.5) * 0.8, target2.getHandcardLimit() * 0.7);
              }
            }
          }
        }
      },
      3: {
        audio: "drlt_jieying",
        trigger: { global: "phaseEnd" },
        filter(event2, player2) {
          return player2 != event2.player && event2.player.hasMark("drlt_jieying_mark") && event2.player.isIn();
        },
        forced: true,
        logTarget: "player",
        async content(event2, trigger, player2) {
          let next = null;
          if (trigger.player.countCards("h") > 0) {
            next = trigger.player.give(trigger.player.getCards("h"), player2);
          }
          trigger.player.clearMark("drlt_jieying_mark");
          if (next) {
            await next;
          }
        }
      },
      mark: {
        marktext: "营",
        intro: {
          name2: "营",
          content: "mark"
        },
        mod: {
          cardUsable(card2, player2, num) {
            if (player2.hasMark("drlt_jieying_mark") && card2.name == "sha") {
              return num + game.countPlayer(function(current) {
                return current.hasSkill("drlt_jieying");
              });
            }
          },
          maxHandcard(player2, num) {
            if (player2.hasMark("drlt_jieying_mark")) {
              return num + game.countPlayer(function(current) {
                return current.hasSkill("drlt_jieying");
              });
            }
          },
          aiOrder(player2, card2, num) {
            if (player2.hasMark("drlt_jieying_mark") && game.hasPlayer((current) => {
              return current.hasSkill("drlt_jieying") && current != player2 && get.attitude(player2, current) <= 0;
            })) {
              return Math.max(num, 0) + 1;
            }
          }
        },
        ai: {
          nokeep: true,
          skillTagFilter(player2) {
            return player2.hasMark("drlt_jieying_mark") && game.hasPlayer((current) => {
              return current.hasSkill("drlt_jieying") && current != player2;
            });
          }
        }
      }
    }
  }
};
const translates = {
  shen_luxun: "神陆逊",
  shen_luxun_prefix: "神",
  nzry_junlve: "军略",
  nzry_junlve_info: "锁定技，当你受到或造成伤害后，你获得X个“军略”标记(X为伤害点数)。",
  nzry_cuike: "摧克",
  nzry_cuike_info: "出牌阶段开始时，若“军略”标记的数量为奇数，你可以对一名角色造成1点伤害；若“军略”标记的数量为偶数，你可以横置一名角色并弃置其区域内的一张牌。然后，若“军略”标记的数量超过7个，你可以移去全部“军略”标记并对所有其他角色造成1点伤害。",
  nzry_dinghuo: "绽火",
  nzry_dinghuo_info: "限定技，出牌阶段，你可以移去全部“军略”标记，令至多等量的已横置角色弃置所有装备区内的牌。然后，你对其中一名角色造成1点火焰伤害。",
  shen_liubei: "神刘备",
  shen_liubei_prefix: "神",
  nzry_longnu: "龙怒",
  nzry_longnu_info: "转换技，锁定技，阳：出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火【杀】且无距离限制。阴：出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制。",
  nzry_jieying: "结营",
  nzry_jieying_info: "锁定技，游戏开始时或当你的武将牌重置时，你横置；所有已横置的角色手牌上限+2；结束阶段，你横置一名其他角色。",
  shen_ganning: "神甘宁",
  shen_ganning_prefix: "神",
  shen_zhangliao: "神张辽",
  shen_zhangliao_prefix: "神",
  drlt_poxi: "魄袭",
  drlt_poxi_info: "出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以弃置你与其手牌中的四张花色不同的牌。若如此做，根据此次弃置你的牌的数量执行以下效果：零张，扣减1点体力上限；一张，你结束出牌阶段且本回合手牌上限-1；三张，你回复1点体力；四张，你摸四张牌。",
  drlt_jieying: "劫营",
  drlt_jieying_info: "回合开始时，若场上没有拥有“营”标记的角色，你获得1个“营”标记；结束阶段，你可以将你的一个“营”标记交给一名角色；有“营”标记的角色摸牌阶段多摸一张牌，出牌阶段使用【杀】的次数上限+1，手牌上限+1。有“营”的其他角色回合结束时，其移去“营”标记，然后你获得其所有手牌。",
  drlt_duorui1: "失效技能",
  drlt_duorui1_bg: "锐",
  drlt_duorui: "夺锐",
  drlt_duorui_info: "当你于出牌阶段内对一名其他角色造成伤害后，你可以废除你装备区内的一个装备栏（若已全部废除则可以跳过此步骤），然后获得该角色的一个技能直到其的下回合结束或其死亡(觉醒技，限定技，主公技，隐匿技，使命技等特殊技能除外)。若如此做，该角色该技能失效且你不能再发动〖夺锐〗直到你失去以此法获得的技能。",
  drlt_zhiti: "止啼",
  drlt_zhiti_info: "锁定技。①你攻击范围内已受伤的其他角色手牌上限-1；②当你和已受伤的角色拼点或【决斗】胜利/受到已受伤角色造成的伤害后，若对方/伤害来源在你的攻击范围内，则你恢复一个装备栏。",
  shen_zhaoyun: "神赵云",
  shen_zhaoyun_prefix: "神",
  shen_guanyu: "神关羽",
  shen_guanyu_prefix: "神",
  shen_lvmeng: "神吕蒙",
  shen_lvmeng_prefix: "神",
  shen_simayi: "神司马懿",
  shen_simayi_prefix: "神",
  shen_caocao: "神曹操",
  shen_caocao_prefix: "神",
  shen_zhugeliang: "神诸葛亮",
  shen_zhugeliang_prefix: "神",
  shen_zhouyu: "神周瑜",
  shen_zhouyu_prefix: "神",
  shen_lvbu: "神吕布",
  shen_lvbu_prefix: "神",
  xinjuejing: "绝境",
  xinjuejing_info: "锁定技。①你的手牌上限+2。②当你进入或脱离濒死状态时，你摸一张牌。",
  relonghun: "龙魂",
  relonghun_info: "你可以将同花色的一至两张牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当普【无懈可击】。若你以此法转化了两张：红色牌，则此牌回复值或伤害值+1；黑色牌，则你弃置当前回合角色一张牌。",
  xinlonghun: "龙魂",
  xinlonghun_info: "你可以将你的手牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当【无懈可击】。",
  longhun: "龙魂",
  longhun1: "龙魂♥︎",
  longhun2: "龙魂♦︎",
  longhun3: "龙魂♠︎",
  longhun4: "龙魂♣︎",
  juejing: "绝境",
  longhun_info: "你可以将同花色的X张牌按下列规则使用或打出：红桃当【桃】，方块当具火焰伤害的【杀】，梅花当【闪】，黑桃当【无懈可击】（X为你当前的体力值且至少为1）。",
  juejing_info: "锁定技。①摸牌阶段，你令额定摸牌数+X（X为你已损失的体力值）。②你的手牌上限+2。",
  wushen: "武神",
  wushen_info: "锁定技。①你的红桃手牌均视为【杀】。②你使用红桃【杀】无距离和次数限制且不可被响应。",
  wuhun: "武魂",
  wuhun_info: "锁定技，杀死你的角色立即进入濒死状态。",
  shelie: "涉猎",
  gongxin: "攻心",
  gongxin_discard: "弃置",
  gongxin_top: "牌堆顶",
  renjie: "忍戒",
  renjie2: "忍戒",
  renjie_info: "锁定技，当你受到1点伤害后，你获得一枚“忍”标记；锁定技，当你于弃牌阶段内弃置牌后，你获得等同于失去的牌数量的“忍”标记。",
  sbaiyin: "拜印",
  sbaiyin_info: `觉醒技，准备阶段开始时，若你的“忍”标记数不小于4，你减1点体力上限，然后获得${get.poptip("jilue")}。`,
  jilue: "极略",
  jilue_info: `当一名角色的判定牌生效前，你可以弃1枚“忍”标记并发动${get.poptip("jilue_guicai")}；每当你受到伤害后，你可以弃1枚“忍”标记并发动${get.poptip("jilue_fangzhu")}；当你使用锦囊牌时，你可以弃1枚“忍”标记并发动${get.poptip("jilue_jizhi")}；出牌阶段限一次，你可以弃1枚“忍”标记并发动${get.poptip("jilue_zhiheng")}；出牌阶段，你可以弃1枚“忍”标记并获得${get.poptip("jilue_wansha")}直到回合结束。`,
  jilue_guicai: "鬼才",
  jilue_fangzhu: "放逐",
  jilue_wansha: "完杀",
  jilue_zhiheng: "制衡",
  jilue_jizhi: "集智",
  jilue_guicai_info: "在任意角色的判定牌生效前，你可以打出一张牌代替之。",
  jilue_fangzhu_info: "当你受到伤害后，你可令一名其他角色摸X张牌（X为你已损失的体力值），然后该角色将武将牌翻面。",
  jilue_wansha_info: "锁定技。①你的回合内，不处于濒死状态的其他角色不能使用【桃】。②当有角色于你的回合内进入濒死状态时，你令其以外的所有其他角色的非锁定技失效直到此濒死状态结算结束。",
  jilue_zhiheng_info: "出牌阶段限一次，你可以弃置任意张牌并摸等量的牌，若你在发动〖制衡〗时弃置了所有手牌，则你多摸一张牌。",
  jilue_jizhi_info: "当你使用锦囊牌时，你可以摸一张牌。若此牌为基本牌，则你可以弃置之，然后令本回合手牌上限+1。",
  lianpo: "连破",
  lianpo_info: "一名角色的回合结束时，若你本回合内杀死过角色，则你可以进行一个额外的回合。",
  guixin: "归心",
  qinyin: "琴音",
  yeyan: "业炎",
  shelie_info: "摸牌阶段，你可以改为从牌堆顶亮出五张牌，然后选择获得不同花色的牌各一张。",
  gongxin_info: "出牌阶段限一次，你可以观看一名其他角色的手牌，并可以展示其中一张红桃牌，然后将其弃置或置于牌堆顶。",
  guixin_info: "当你受到1点伤害后，你可以获得每名其他角色区域里的一张牌，然后你翻面。",
  qinyin_info: "弃牌阶段结束时，若你于此阶段内弃置过两张或更多的牌，则你可以选择一项：1. 令所有角色各回复1点体力；2. 令所有角色各失去1点体力。",
  yeyan_info: "限定技，出牌阶段，你可以对一至三名角色造成至多共3点火焰伤害（你可以任意分配每名目标角色受到的伤害点数），若你将对一名角色分配2点或更多的火焰伤害，你须先弃置四张不同花色的手牌再失去3点体力。",
  qixing: "七星",
  qixing_bg: "星",
  qixing2: "七星",
  qixing3: "七星",
  qixing_info: "游戏开始时，你将牌堆顶的七张牌置于你的武将牌上，称之为“星”。然后/摸牌阶段结束后，你可用任意数量的手牌等量交换这些“星”。",
  dawu: "大雾",
  dawu2_bg: "雾",
  dawu2: "大雾",
  dawu3: "大雾",
  dawu_info: "结束阶段，你可以弃置X张“星”并指定等量的角色：直到你的下回合开始，当这些角色受到非雷电伤害时，防止此伤害。",
  kuangfeng: "狂风",
  kuangfeng2: "狂风",
  kuangfeng2_bg: "风",
  kuangfeng3: "狂风",
  kuangfeng_info: "结束阶段，你可以弃置一张“星”并指定一名角色：直到你的下回合开始，该角色受到火焰伤害时，此伤害+1。",
  baonu: "狂暴",
  baonu_bg: "暴",
  baonu_info: "锁定技，游戏开始时，你获得两枚“暴怒”标记；锁定技，当你造成/受到1点伤害后，你获得1枚“暴怒”标记。",
  shenfen: "神愤",
  shenfen_info: "限定技，出牌阶段，你可以弃置6枚暴怒标记，对场上所有其他角色造成1点伤害，然后令其弃置四张牌。",
  wuqian: "无前",
  wuqian_info: `出牌阶段，你可以弃置两枚暴怒标记并获得技能${get.poptip("wushuang")}直到回合结束。`,
  wumou: "无谋",
  wumou_info: "锁定技，当你使用普通锦囊牌时，你选择一项：1.弃置1枚“暴怒”标记；2.失去1点体力。",
  ol_wuqian: "无前",
  ol_wuqian_info: `出牌阶段，你可以弃置2枚“暴怒”标记并选择一名本回合内未选择过的其他角色，你获得技能${get.poptip("wushuang")}并令其防具无效直到回合结束。`,
  ol_shenfen: "神愤",
  ol_shenfen_info: "出牌阶段限一次，你可以弃置6枚“暴怒”标记并选择所有其他角色，对这些角色各造成1点伤害。然后这些角色先各弃置其装备区里的牌，再各弃置四张手牌。最后你将你的武将牌翻面。",
  new_wuhun: "武魂",
  new_wuhun_info: "锁定技，当你受到伤害后，伤害来源获得X个“梦魇”标记（X为伤害点数）。锁定技，当你死亡时，你选择一名“梦魇”标记数量最多的其他角色。该角色进行判定：若判定结果不为【桃】或【桃园结义】，则该角色死亡。",
  new_guixin: "归心",
  new_guixin_info: "当你受到1点伤害后，你可以按照你选择的区域优先度随机获得每名其他角色区域里的一张牌，然后你翻面。",
  ol_zhangliao: "OL神张辽",
  ol_zhangliao_prefix: "OL神",
  olduorui: "夺锐",
  olduorui_info: "当你于出牌阶段内对一名角色造成伤害后，你可以选择该角色武将牌上的一个技能。若如此做，你结束出牌阶段，且你令此技能于其下个回合结束之前无效。",
  olzhiti: "止啼",
  olzhiti_info: "锁定技，你攻击范围内已受伤角色的手牌上限-1。若场上已受伤的角色数：不小于1，你的手牌上限+1；不小于3，你于摸牌阶段开始时令额定摸牌数+1；不小于5，回合结束时，你废除一名角色的一个随机装备栏。",
  shen_caopi: "神曹丕",
  shen_caopi_prefix: "神",
  chuyuan: "储元",
  chuyuan_info: "一名角色受到伤害后，若你武将牌上「储」的数量小于体力上限，你可以令其摸一张牌。然后其将一张手牌置于你的武将牌上，称为「储」。",
  dengji: "登极",
  dengji_info: `觉醒技，准备阶段，若你武将牌上的「储」数不小于3，则你减1点体力上限并获得所有「储」，然后获得技能${get.poptip("tianxing")}和${get.poptip("new_rejianxiong")}。`,
  tianxing: "天行",
  tianxing_info: `觉醒技，准备阶段，若你武将牌上的「储」数不小于3，则你减1点体力上限并获得所有「储」，然后失去技能〖储元〗，选择获得以下技能中的一个：${get.poptip("rerende")}/${get.poptip("rezhiheng")}/${get.poptip("olluanji")}/${get.poptip("caopi_xingdong")}。`,
  shen_zhenji: "神甄宓",
  shen_zhenji_prefix: "神",
  shenfu: "神赋",
  shenfu_info: "回合结束时，若你的手牌数为：奇数，你可对一名其他角色造成1点雷属性伤害。若其因此进入过濒死状态，你可重复此流程（不能选择本次已选择过的角色）。偶数，你可选择一名角色，你令其摸一张牌或弃置一张手牌。若其手牌数等于体力值，你可重复此流程（不能选择本次已选择过的角色）。",
  qixian: "七弦",
  qixian_info: "锁定技，你的手牌上限视为7。",
  caopi_xingdong: "行动",
  caopi_xingdong_info: "出牌阶段限一次，你可以将一张【杀】或普通锦囊牌交给一名其他角色，然后该角色选择一项：对除你以外的角色使用此牌并在此牌结算完成后和你各摸一张牌；或跳过下回合的判定阶段和摸牌阶段。",
  shen_diaochan: "神貂蝉",
  shen_diaochan_prefix: "神",
  meihun: "魅魂",
  meihun_info: "结束阶段或当你成为【杀】的目标后，你可以令一名其他角色交给你一张你声明的花色的手牌，若其没有则你观看其手牌然后弃置其中一张。",
  huoxin_control: "惑心",
  huoxin: "惑心",
  huoxin_info: "出牌阶段限一次，你可以展示两张花色相同的手牌并分别交给两名其他角色，然后令这两名角色拼点，没赢的角色获得1个“魅惑”标记。拥有2个或更多“魅惑”的角色回合即将开始时，该角色移去其所有“魅惑”，此回合改为由你操控。",
  boss_zhaoyun: "高达一号",
  boss_zhaoyun_ab: "神赵云",
  boss_zhaoyun_prefix: "神",
  boss_juejing: "绝境",
  boss_juejing2: "绝境",
  boss_juejing_info: "锁定技，摸牌阶段开始前，你跳过此阶段。当你得到牌/失去手牌后，若你的手牌数大于四/小于四，则你将手牌摸至四张/弃置至四张。",
  zhanjiang: "斩将",
  zhanjiang_info: "准备阶段开始时，如果其他角色的装备区内有【青釭剑】，你可以获得之。",
  shen_guojia: "神郭嘉",
  shen_guojia_prefix: "神",
  shuishi: "慧识",
  shuishi_info: "出牌阶段限一次，若你的体力上限小于10，则你可选择一名角色。你令其摸一张牌，若其以此法得到的牌：与该角色的其他手牌花色均不相同，则你加1点体力上限，若你的体力上限小于10，则你可以重复此流程；否则你减1点体力上限，且其展示所有手牌。",
  stianyi: "天翊",
  stianyi_info: `觉醒技，准备阶段，若场上的所有存活角色均于本局游戏内受到过伤害，则你加2点体力上限并回复1点体力，然后令一名角色获得技能${get.poptip("zuoxing")}。`,
  zuoxing: "佐幸",
  zuoxing2: "佐幸",
  zuoxing_info: "出牌阶段限一次，若令你获得〖佐幸〗的角色存活且体力上限大于1，则你可以令其减1点体力上限，并视为使用一张普通锦囊牌。",
  sghuishi: "辉逝",
  sghuishi_info: "限定技，出牌阶段，你可以选择一名其他角色：若其有未发动过的觉醒技，则你令其发动这些觉醒技时无视原有条件；否则其摸四张牌。然后你减2点体力上限。",
  shen_taishici: "神太史慈",
  shen_taishici_prefix: "神",
  dulie: "笃烈",
  dulie_info: "锁定技。当你成为【杀】的目标时，若使用者的体力值大于你，则你进行判定。若结果为红桃，则取消此目标。",
  tspowei: "破围",
  tspowei_info: `使命技。①游戏开始时，你令所有其他角色获得一个“围”。②一名角色受到伤害后，若其有“围”，则其移去“围”。③回合开始时，你选择所有有“围”的角色。这些角色失去“围”，然后这些角色的第一个不为你的下家获得等量的“围”。④一名其他角色的回合开始时，若其有“围”，则你可以选择一项：⒈弃置一张手牌并对其造成1点伤害。⒉若其体力值不大于你，则你获得其一张手牌。选择完成后，你视为在其攻击范围内直到回合结束。⑤使命：回合开始时，若场上没有“围”，则你获得技能${get.poptip("shenzhu")}。⑥失败：当你进入濒死状态时，你将体力值回复至1点，然后弃置装备区的所有牌。`,
  shenzhu: "神著",
  shenzhu_info: "锁定技，当你使用有对应实体牌的非转化【杀】结算结束后，你选择一项：①摸一张牌，且本回合使用【杀】的次数上限+1。②摸三张牌，且本回合不能再使用【杀】。",
  dangmo: "荡魔",
  dangmo_info: "当你于出牌阶段内使用第一张【杀】选择目标后，你可以为此牌增加至多Y-1个目标（Y为你的体力值）。",
  reshuishi: "慧识",
  reshuishi_info: "出牌阶段限一次。若你的体力上限小于10，你可进行判定牌不置入弃牌堆的判定。若判定结果与本次发动技能时的其他判定结果的花色均不相同且你的体力上限小于10，则你加1点体力上限，且可以重复此流程。然后你将所有位于处理区的判定牌交给一名角色。若其手牌数为全场最多，则你减1点体力上限。",
  resghuishi: "辉逝",
  resghuishi_info: "限定技，出牌阶段，你可选择一名角色。若你的体力上限不小于存活人数且其有未发动的觉醒技，则你令其中一个技能无视发动条件；否则其摸四张牌。然后你减2点体力上限。",
  qizhengxiangsheng: "奇正相生",
  qizhengxiangsheng_info: "出牌阶段，对一名其他角色使用。你将目标角色标记为“奇兵”或“正兵”（对其他角色不可见）。然后目标角色可以打出一张【杀】或【闪】。若其是“奇兵”且未打出【杀】，则你对其造成1点伤害；若其是“正兵”且未打出【闪】，则你获得其一张牌。",
  shen_xunyu: "神荀彧",
  shen_xunyu_prefix: "神",
  tianzuo: "天佐",
  tianzuo_info: `锁定技。①游戏开始时，你将八张${get.poptip("qizhengxiangsheng")}加入牌堆。②${get.poptip("qizhengxiangsheng")}对你无效。`,
  lingce: "灵策",
  lingce_info: `锁定技。当有${get.poptip("qizhengxiangsheng")}或智囊或〖定汉①〗记录过的锦囊牌被使用时，若此牌不为转化牌且对应实体牌数量为1，则你摸一张牌。`,
  dinghan: "定汉",
  dinghan_info: "①当你成为未记录过的普通锦囊牌的目标时，或有未记录过的延时锦囊牌进入你的判定区时，你记录此牌名并取消之。②准备阶段，你可在〖定汉①〗的记录中添加或减少一种锦囊牌的牌名。",
  shen_sunce: "神孙策",
  shen_sunce_prefix: "神",
  yingba: "英霸",
  yingba_info: "①出牌阶段限一次，你可令一名体力上限大于1的其他角色减少1点体力上限并获得“平定”标记，然后你减少1点体力上限。②你对拥有“平定”标记的角色使用牌没有距离限制。",
  scfuhai: "覆海",
  scfuhai_info: "锁定技。①当你使用牌指定目标后，若目标角色有“平定”标记，则其不可响应此牌。若你本回合内以此法得到的牌数小于2，则你摸一张牌。②拥有“平定”标记的角色死亡时，你增加X点体力上限并摸X张牌。（X为其拥有的“平定”标记数）。",
  pinghe: "冯河",
  pinghe_info: "锁定技。①你的手牌上限基数等于你已损失的体力值。②当你受到其他角色造成的伤害时，若你有牌且你的体力上限大于1，则你防止此伤害，减1点体力上限并将一张手牌交给一名其他角色。然后若你拥有〖英霸〗，则伤害来源获得一个“平定”标记。",
  shen_jiangwei: "神姜维",
  shen_jiangwei_prefix: "神",
  jiufa: "九伐",
  jiufa_info: "当你声明使用牌后或打出牌时，你记录此牌的牌名。②当你使用或打出的牌结算结束后，若你的〖九伐〗记录中包含至少九种不同的牌名，则你可以亮出牌堆顶的九张牌，选择并获得其中任意张点数有重复的牌（每个点数限获得一张），清除所有的记录，将其余牌置入弃牌堆。",
  tianren: "天任",
  tianren_info: "锁定技。①当有一张基本牌或普通锦囊牌不因使用而进入弃牌堆后，你获得一枚“天任”标记。②当你获得“天任”标记或体力上限变化后，若你的“天任”数不小于X，则你移去X枚“天任”，加1点体力上限并摸两张牌（X为你的体力上限）。",
  pingxiang: "平襄",
  pingxiang_info: "限定技。出牌阶段，若你的体力上限大于⑨，则你可减⑨点体力上限，视为使用至多⑨张火【杀】，然后失去〖九伐〗，并将手牌上限基数改为体力上限直到游戏结束。",
  shen_sunquan: "神孙权",
  shen_sunquan_prefix: "神",
  dili: "帝力",
  dili_info: '锁定技。游戏开始时，你随机获得一条<span style="font-family: yuanli">东吴命运线</span>。',
  yuheng: "驭衡",
  yuheng_info: '①出牌阶段限一次。你可以失去所有不为〖驭衡〗的非锁定技，然后随机获得全部<span style="font-family: yuanli">东吴命运线</span>涉及的一个技能。若你本阶段内没有发动过其他非锁定技，则你随机获得当前<span style="font-family: yuanli">东吴命运线</span>涉及的一个内容。②出牌阶段结束时，若你未于本阶段内发动过〖驭衡①〗，则你失去1点体力。',
  yuheng_append: '<span style="font-family: yuanli">天下英雄谁敌手？曹刘。生子当如孙仲谋！</span>',
  dili_shengzhi: "圣质",
  dili_shengzhi_info: "锁定技。若你因〖驭衡〗获得过〖英魂〗〖弘德〗〖秉壹〗，则当你使用点数为质数的牌时，此牌不可被响应。",
  dili_chigang: "持纲",
  dili_chigang_info: "锁定技。若你因〖驭衡〗获得过〖观微〗〖弼政〗〖安国〗，则当你的判定阶段开始前，你跳过此阶段并获得一个额外的摸牌阶段。",
  dili_qionglan: "穹览",
  dili_qionglan_info: '锁定技，限定技。若你因〖驭衡〗获得过〖涉猎〗〖问卦〗〖博图〗，则当你发动的〖驭衡〗结算结束后，你随机获得两条其他<span style="font-family: yuanli">东吴命运线</span>。',
  dili_quandao: "权道",
  dili_quandao_info: "锁定技。若你因〖驭衡〗获得过〖制衡〗〖诫训〗〖安恤〗，则你手牌区内点数为字母的牌的牌名视为【调剂盐梅】。",
  dili_jiaohui: "交辉",
  dili_jiaohui_info: "锁定技。若你因〖驭衡〗获得过〖下书〗〖结姻〗〖缔盟〗，且你的手牌数为1，则此牌的牌名视为【远交近攻】。",
  dili_yuanlv: "渊虑",
  dili_yuanlv_info: "锁定技。若你因〖驭衡〗获得过〖观潮〗〖决堰〗〖澜疆〗，则当你成为自己使用的不为【长安大舰】的装备牌的目标后，你将此牌置于弃牌堆，然后使用一张与此装备牌副类别相同的【长安大舰】。",
  changandajian_equip1: "长安大舰",
  changandajian_equip2: "长安大舰",
  changandajian_equip3: "长安大舰",
  changandajian_equip4: "长安大舰",
  changandajian_equip5: "长安大舰",
  changandajian_equip6: "长安大舰",
  changandajian_destroy: "长安大舰",
  changandajian_equip1_info: "锁定技。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。",
  changandajian_equip2_info: "锁定技。当你失去装备区内的【长安大舰】后，你销毁之并回复1点体力。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。",
  changandajian_equip3_info: "锁定技。其他角色至你的距离+2。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。",
  changandajian_equip4_info: "锁定技。你至其他角色的距离-2。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。",
  changandajian_equip5_info: "锁定技。你的手牌上限+2。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。",
  changandajian_equip6_info: "锁定技。你至其他角色的距离-2，其他角色至你的距离+2。当你失去装备区内的【长安大舰】后，你销毁之。然后你选择场上的一张牌。若此牌点数为字母，则你获得之，否则弃置之。",
  shen_machao: "神马超",
  shen_machao_prefix: "神",
  shouli: "狩骊",
  shouli_backup: "狩骊",
  shouli_info: "①锁定技，游戏开始时，你令场上所有角色从你的下家起，依次使用牌堆中的一张不为赠物的坐骑牌。②你可以将场上的一张进攻坐骑牌当做【杀】（无任何次数限制），防御坐骑牌当做【闪】使用或打出。若此坐骑牌的拥有者不为你，则其非锁定技于本回合内失效。且当你或其于本回合内受到伤害时，此伤害+1且改为雷属性。",
  hengwu: "横骛",
  hengwu_info: "当你使用或打出有花色的牌时，若你的手牌区内没有与此牌花色相同的牌，则你可以摸X张牌（X为场上装备区内花色与此牌相同的牌数）。",
  hengwu_append: '<span style="font-family: yuanli">棘手，怀念，摧毁！</span>',
  tw_shen_guanyu: "TW神关羽",
  tw_shen_guanyu_prefix: "TW神",
  twwushen: "武神",
  twwushen_info: "锁定技。①你的♥手牌均视为普【杀】。②你于每阶段使用的第一张【杀】不可被响应。③你使用♥【杀】无距离和次数限制。④当你使用♥【杀】选择目标后，你令所有拥有“梦魇”标记的角色均成为此【杀】的目标。",
  twwuhun: "武魂",
  twwuhun_info: "锁定技。①当你受到其他角色造成的1点伤害后，你令伤害来源获得1枚“梦魇”标记。②当你对有“梦魇”标记的其他角色造成伤害后，你令其获得一枚“梦魇”标记。③当你死亡时，你可进行判定。若结果不为【桃】或【桃园结义】，则你选择至少一名拥有“梦魇”标记的角色。令这些角色各自失去X点体力（X为其“梦魇”标记数）。",
  shen_zhangfei: "神张飞",
  shen_zhangfei_prefix: "神",
  shencai: "神裁",
  shencai_info: "出牌阶段限一次，你可以令一名其他角色进行判定。你获得此判定牌，然后若此判定牌：包含以下要素中的任意一个，则其失去已有的下列效果，并获得对应的效果：{⒈体力：当其受到伤害后，其失去等量的体力、⒉武器：其不能使用牌响应【杀】、⒊打出：当其失去手牌后，其再随机弃置一张手牌（不嵌套触发）、⒋距离：其的结束阶段开始时，其翻面}；若均不包含，你获得其区域里的一张牌，其获得一枚“死”并获得如下效果：其的角色手牌上限-X、其的回合结束时，若X大于场上存活人数，则其死亡（X为其“死”标记数）。",
  xunshi: "巡使",
  xunshi_info: "锁定技。①你的多目标锦囊牌均视为花色为none的普【杀】。②你使用颜色为none的牌无距离和次数限制。③当你使用无颜色的牌选择目标后，你令你的〖神裁〗的发动次数上限+1（至多为5），然后可以为此牌增加任意个目标。",
  shen_zhangjiao: "神张角",
  shen_zhangjiao_prefix: "神",
  yizhao: "异兆",
  yizhao_info: "锁定技。当你使用或打出牌时，你获得等同于此牌点数枚“黄”标记。然后若“黄”的十位数发生变化，你获得牌堆中一张点数为你“黄”的十位数的牌。",
  sijun: "肆军",
  sijun_info: "准备阶段，若“黄”数大于牌堆的牌数，你可以移去所有“黄”并洗牌，然后随机获得任意张点数之和为36的牌。",
  sanshou: "三首",
  sanshou_info: "当你受到伤害时，你可以亮出牌堆顶三张牌。若其中有本回合未被使用过的牌的类型，防止此伤害。",
  tianjie: "天劫",
  tianjie_info: "一名角色的回合结束时，若本回合牌堆洗过牌，你可以选择至多三名其他角色。你依次对每名目标角色造成X点雷电伤害（X为其手牌中【闪】的数量，至少为1）。",
  tw_shen_lvmeng: "TW神吕蒙",
  tw_shen_lvmeng_prefix: "TW神",
  twshelie: "涉猎",
  twshelie_info: "摸牌阶段，你可以改为亮出牌堆顶的五张牌，然后选择获得其中花色不同的牌各一张。每轮限一次，结束阶段，若你本回合使用的花色数不小于4，你执行一个额外的摸牌阶段或出牌阶段（不能连续选择执行相同项）。",
  twgongxin: "攻心",
  twgongxin2: "攻心",
  twgongxin3: "攻心",
  twgongxin_info: "出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以展示其中一张牌并选择一项：1.弃置此牌；2.将此牌置于牌堆顶。若该角色手牌中的花色数因此减少，其不能响应你本回合使用的下一张牌。",
  shen_dengai: "神邓艾",
  shen_dengai_prefix: "神",
  dctuoyu: "拓域",
  dctuoyu_fengtian: "丰田",
  dctuoyu_qingqu: "清渠",
  dctuoyu_junshan: "峻山",
  dctuoyu_fengtian_tag: '<span data-nature="woodmm">丰田</span>',
  dctuoyu_qingqu_tag: '<span data-nature="watermm">清渠</span>',
  dctuoyu_junshan_tag: '<span data-nature="thundermm">峻山</span>',
  dctuoyu_info: "锁定技。①当你使用拥有对应副区域标签的牌时，你令此牌获得对应效果。<br>丰田：伤害值或回复值+1；清渠：无次数和距离限制；峻山：不可被响应。②出牌阶段开始时和结束时，你给你的手牌分配对应的已激活副区域标签（每个区域至多五张）。",
  dcxianjin: "险进",
  dcxianjin_info: "锁定技。当你每造成或受到两次伤害后，你激活一个副区域标签并摸X张牌（X为你已激活的副区域数，若你的手牌数为全场最多则改为摸一张牌）。",
  dcqijing: "奇径",
  dcqijing_info: `觉醒技。一名角色的回合结束后，若你的三个副区域标签均被激活，则你减1点体力上限，获得${get.poptip("dccuixin")}，将座位移动至两名相邻的其他角色之间并执行一个额外回合。`,
  dccuixin: "摧心",
  dccuixin_info: "当你不因此技能使用的基本牌或普通锦囊牌结算结束后，若此牌的目标于你使用此牌指定第一个目标时包含你的上家或下家，则你可以视为对下家或上家再使用一张牌名和元素相同的牌。",
  shen_dianwei: "神典韦",
  shen_dianwei_prefix: "神",
  juanjia: "捐甲",
  juanjia_info: "锁定技。游戏开始时，你废除一个防具栏，然后获得一个额外的武器栏。",
  qiexie: "挈挟",
  qiexie_info: `锁定技。准备阶段，你在剩余武将牌堆中随机观看五张牌，选择其中的任意张，将其转化为${get.poptip({
    id: "qiexie_equip1",
    name: "武器牌",
    type: "character",
    info: "1.此牌不具有花色和点数，且其攻击范围等于此武将牌的体力上限。<br>2.此武器牌的技能为该武将牌上所有描述中包含“【杀】”且不具有锁定技以外的标签的技能。<br>3.此武器牌离开你的装备区时，改为放回武将牌堆。"
  })}置入你的武器栏。`,
  cuijue: "摧决",
  cuijue_info: "每回合每名角色限一次。出牌阶段，你可以弃置一张牌，然后对攻击范围内距离最远的一名其他角色造成1点伤害（没有则不选）。",
  le_shen_jiaxu: "神贾诩",
  le_shen_jiaxu_prefix: "神",
  jxlianpo: "炼魄",
  jxlianpo_info: "锁定技。①若场上最大阵营为：反贼，其他角色的手牌上限-1，所有角色使用【杀】的次数上限和攻击范围+1；主忠，其他角色不能对其以外的角色使用【桃】。若有多个最大阵营，其他角色死亡后，来源摸两张牌或回复1点体力。②每轮开始时，你展示一张未加入游戏或已死亡角色的身份牌，本轮视为该身份对应阵营的角色数+1。",
  jxzhaoluan: "兆乱",
  jxzhaoluan_info: "限定技。一名角色死亡前，若其此次进入过濒死状态，你可以取消之，令其加3点体力上限并失去所有非锁定技，回复体力至3点，摸四张牌。然后你获得如下效果：出牌阶段，你可以令一名成为过你〖兆乱〗目标的角色减1点体力上限，然后对一名此阶段未以此法选择过的角色造成1点伤害。",
  shen_huatuo: "手杀神华佗",
  shen_huatuo_prefix: "手杀神",
  wuling: "五灵",
  wuling_info: `①出牌阶段限两次。你可以选择一名没有“${get.poptip({
    id: "wl_wuqinxi",
    name: "五禽戏",
    type: "character",
    info: `“五禽戏”分为“虎、鹿、熊、猿、鹤”五个不同的效果：<span style='font-family: yuanli'>
				<br><li>虎：当你使用指定唯一目标的牌对目标角色造成伤害时，此伤害+1。
				<br><li>鹿：①当你获得此效果时，你回复1点体力并弃置判定区的所有牌。②你不能成为延时锦囊牌的目标。
				<br><li>熊：每回合限一次，当你受到伤害时，此伤害-1。
				<br><li>猿：当你获得此效果时，你选择一名其他角色，获得其装备区里的一张牌。
				<br><li>鹤：当你获得此效果时，你摸三张牌。
			</span>`
  })}”的角色，按照你选择的顺序向其传授“${get.poptip("wl_wuqinxi")}”，且其获得如下效果：其获得你选择的第一种“${get.poptip("wl_wuqinxi")}”的效果，并在其每个准备阶段移除当前“${get.poptip("wl_wuqinxi")}”的效果并切换为下一种。②当你死亡时，你令场上的角色失去你传授的“${get.poptip("wl_wuqinxi")}”。`,
  wuling_wuqinxi: "五禽戏",
  get wuling_wuqinxi_info() {
    return lib.poptip.getInfo("wl_wuqinxi");
  },
  youyi: "游医",
  youyi_info: "①弃牌阶段结束时，你可以将所有于此阶段弃置的牌置入仁区。②出牌阶段限一次。你可以将仁区的所有牌置入弃牌堆，令所有角色各回复1点体力。",
  wuqinxi_hu: "虎",
  wuqinxi_hu_bg: "虎",
  wuqinxi_hu_info: "当你使用指定唯一目标的牌对目标角色造成伤害时，此伤害+1。",
  wuqinxi_lu: "鹿",
  wuqinxi_lu_bg: "鹿",
  wuqinxi_lu_info: "①当你获得此效果时，你回复1点体力并弃置判定区的所有牌。②你不能成为延时锦囊牌的目标。",
  wuqinxi_xiong: "熊",
  wuqinxi_xiong_bg: "熊",
  wuqinxi_xiong_info: "每回合限一次，当你受到伤害时，此伤害-1。",
  wuqinxi_yuan: "猿",
  wuqinxi_yuan_bg: "猿",
  wuqinxi_yuan_info: "当你获得此效果时，你选择一名其他角色，获得其装备区里的一张牌。",
  wuqinxi_he: "鹤",
  wuqinxi_he_bg: "鹤",
  wuqinxi_he_info: "当你获得此效果时，你摸三张牌。",
  shen_lusu: "神鲁肃",
  shen_lusu_prefix: "神",
  dingzhou: "定州",
  dingzhou_info: "出牌阶段限一次。你可以将X张牌交给一名场上有牌的角色，然后你获得其场上的所有牌（X为其场上的牌数）。",
  tamo: "榻谟",
  tamo_info: "游戏开始时，你可以重新分配除主公外所有角色的座次。",
  tamo_info_doudizhu: "游戏开始时，你可以重新分配所有角色的座次。",
  tamo_faq: "FAQ",
  tamo_faq_info: "<br><li>Q：在一号位不为主公的情况下，〖榻谟〗如何结算？</li><li>A：该角色可以正常进行座次交换。若受此技能影响导致一号位角色发生了变化，则以排列后的一号位角色为起始角色开始本局游戏。</li>",
  zhimeng: "智盟",
  zhimeng_info: "回合结束后，你可以选择一名其他角色。若如此做，你与其将各自所有手牌置于处理区，然后你随机获得这些牌中的一半（向上取整），其获得剩余的牌。",
  shen_xuzhu: "神许褚",
  shen_xuzhu_prefix: "神",
  zhengqing: "争擎",
  zhengqing_info: "锁定技。每轮结束时，你移去所有角色的“擎”标记，令本轮于一回合内造成伤害值X最高的角色获得X枚“擎”，然后你与其各摸一张牌（多名角色则随机选择，优先为你）。若该角色为你且本次获得的“擎”数为本局游戏最多的一次，你改为摸X张牌（至多摸五张）。",
  zhuangpo: "壮魄",
  zhuangpo_info: "你可以将牌名为【杀】或牌面信息中包含“【杀】”的牌当【决斗】使用，然后你获得如下效果：1.当此【决斗】指定目标后，若你有“擎”，你可以移去任意枚“擎”，令目标角色弃置等量的牌；2.当此牌造成伤害时，若此牌的所有目标角色中存在有“擎”的角色，此伤害+1。",
  dc_shen_huatuo: "神华佗",
  dc_shen_huatuo_prefix: "神",
  jingyu: "静域",
  jingyu_info: "锁定技。每个技能每轮限一次，当一名角色发动不为〖静域〗的技能时，你摸一张牌。",
  lvxin: "滤心",
  lvxin_info: "出牌阶段限一次。你可以交给一名其他角色一张手牌并选择一项：⒈令其摸X张牌；⒉令其随机弃置X张手牌（X为游戏轮数，至多为5）。然后若其以此法得到/弃置了与你交给其的牌牌名相同的牌，其于其下次发动技能时回复/失去1点体力。",
  huandao: "寰道",
  huandao_info: "限定技。出牌阶段，你可以选择一名其他角色。你令其复原武将牌，系统随机生成一个与其同名的武将的武将牌上的一个与其拥有的技能均不同名的技能。其可以选择获得此技能，然后选择失去一个其他技能。",
  xin_simayi: "手杀神司马懿",
  xin_simayi_prefix: "手杀神",
  xinrenjie: "忍戒",
  xinrenjie_info: "锁定技。①当你需要响应一张延时锦囊牌或其他角色使用的牌时，若你未响应此牌，你获得1枚“忍”标记（你每轮以此法至多获得4枚“忍”标记）。②游戏开始时，若你为神势力且你未执行神武将势力选择，则你可以变更势力。",
  xinbaiyin: "拜印",
  xinbaiyin_info: `觉醒技，准备阶段，若你的“忍”标记数不小于4，你减少1点体力上限，然后获得${get.poptip("xinjilve")}。`,
  xinlianpo: "连破",
  xinlianpo_info: "当你杀死一名角色后，你可以选择一项：1.于此回合结束后获得一个额外回合（每回合限一次）；2.若你拥有〖极略〗，你获得一个你未拥有的〖极略〗技能。",
  xinjilve: "极略",
  xinjilve_info: `①当你获得此技能时，你获得${get.poptip("reguicai")}并根据你的势力获得以下对应技能：魏：${get.poptip("fangzhu")}；蜀：${get.poptip("rejizhi")}；吴：${get.poptip("rezhiheng")}；群：${get.poptip("rewansha")}。②出牌阶段开始时，你可以选择一项：1.弃置X枚“忍”标记并获得一个你未拥有的〖极略〗技能（X为你选择此项的次数+1且至少为2）；2.弃置至多2枚“忍”标记并摸等量张牌。`,
  jilin: "戢鳞",
  jilin_info: "①游戏开始时，你将牌堆顶两张牌暗置于你的武将牌上，称为“志”。②当你成为其他角色使用牌的目标时，你可以明置一张暗置的“志”令此牌对你无效。③回合开始时，你可用任意张手牌替换等量暗置的“志”。",
  //孩子，让牢神司马下去陪牢大吧
  yingyou: "英猷",
  yingyou_info: "①出牌阶段开始时，你可明置一张“志”然后摸X张牌（X为明置的“志”的数量）。②当你失去与明置的“志”其中一张花色相同的牌时，你摸一张牌。",
  yingtian: "应天",
  yingtian_info: `觉醒技。一名角色死亡后，若场上势力数不大于2，则你获得${get.poptip("reguicai")}、${get.poptip("rewansha")}、${get.poptip("lianpo")}并失去〖英猷〗且你本局游戏使用牌没有距离限制。`,
  shen_huangzhong: "神黄忠",
  shen_huangzhong_prefix: "神",
  dclieqiong: "裂穹",
  dclieqiong_info: "当你对一名其他角色造成伤害后，你可以在任意部位中选择一个“击伤”；若你击伤了一名角色，则本回合再次击伤该角色时出现“天冲”选项。",
  new_dclieqiong: "裂穹",
  new_dclieqiong_info: `当你对一名其他角色造成伤害后，你可以在任意部位中选择一个“${get.poptip({
    id: "dclieqiong_jishang",
    name: "击伤",
    type: "character",
    info: `
				<li><span style='font-family: yuanli'>力烽</span>：令其随机弃置一半手牌（向上取整）；<br>
				<li><span style='font-family: yuanli'>地机</span>：令其下一次受到的伤害+1直到其下个回合结束；<br>
				<li><span style='font-family: yuanli'>中枢</span>：令其使用的下一张牌无效直到其回合结束；<br>
				<li><span style='font-family: yuanli'>气海</span>：令其不能使用或打出红桃牌直到其下个回合结束；
			`
  })}”；若你击伤了一名角色，则本回合再次击伤该角色时出现“${get.poptip({
    id: "dclieqiong_tianchong",
    name: "天冲",
    type: "character",
    info: "令其失去所有体力，若其因此死亡，你增加1点体力上限。"
  })}”选项。`,
  dclieqiong_place1: "天冲",
  dclieqiong_place1_info: "令其失去所有体力，若其因此死亡，你增加1点体力上限。",
  //"dclieqiong_place2": "肩部",
  //"dclieqiong_place2_info": "令其弃置装备区里的武器牌和坐骑牌",
  //"dclieqiong_place3": "手部",
  //"dclieqiong_place3_info": "令其手牌上限视为原来的一半（向下取整）直到其下个回合结束。",
  dclieqiong_place4: "力烽",
  dclieqiong_place4_info: "令其随机弃置一半手牌（向上取整）",
  dclieqiong_place5: "地机",
  dclieqiong_place5_info: "令其下一次受到的伤害+1直到其下个回合结束",
  dclieqiong_place6: "中枢",
  dclieqiong_place6_info: "令其使用的下一张牌无效直到其回合结束",
  dclieqiong_place7: "气海",
  dclieqiong_place7_info: "令其不能使用或打出红桃牌直到其下个回合结束",
  dclieqiong_place8: "玉泉",
  dclieqiong_place8_info: "令其将性别变为女性、将【女装】置入装备区且体力上限+1。",
  dczhanjue: "斩决",
  dczhanjue_info: "出牌阶段开始时，你可以选择一项：1.摸体力值张牌，此阶段使用的下一张【杀】无距离限制且不能被响应。2.摸已损失体力值张牌，此阶段下一次造成伤害后，回复等量体力。",
  junk_zhangjiao: "OL神张角",
  junk_zhangjiao_prefix: "OL神",
  shen_pangtong: "神庞统",
  shen_pangtong_prefix: "神",
  luansuo: "鸾锁",
  luansuo_info: "锁定技。①你的回合内，所有角色不能弃置手牌。②回合开始时，所有角色的当前手牌视为【铁索连环】直到有与此牌对应花色的牌进入弃牌堆或回合结束。",
  fengliao: "凤燎",
  fengliao_info: "锁定技，转换技，你使用牌指定唯一目标后，阳：你令其摸一张牌；阴：你对其造成1点火焰伤害。",
  kunyu: "鹍浴",
  kunyu_info: "锁定技。①你的体力上限始终为1。②你死亡时，你将牌堆中的一张火属性伤害牌移出游戏，然后防止死亡并将体力回复至1点。",
  shen_zhonghui: "神钟会",
  shen_zhonghui_prefix: "神",
  dclinjie: "凛界",
  dclinjie_info: "每轮开始时，你可对一名没有「凛」的角色造成1点伤害然后令其获得1个「凛」标记。有「凛」的其他角色受到伤害后，随机弃置一张手牌。若其因此弃置了最后一张手牌，你对其造成1点伤害并移去「凛」。",
  dcduzhang: "独仗",
  dcduzhang_info: "每回合限一次，当你使用黑色牌指定唯一目标或成为黑色牌的唯一目标后，你摸一张牌并获得1个「凛」。你的手牌上限+X（X为「凛」的数量）。",
  dcjianghuo: "降祸",
  dcjianghuo_info: `觉醒技，回合开始时，若所有角色均受到过伤害，你将所有「凛」移动到自己的武将牌上，并摸与「凛」等量的牌，然后增加1点体力上限，失去〖凛界〗，获得${get.poptip("dclishi")}。`,
  dclishi: "立世",
  dclishi_info: "锁定技，结束阶段，若你没有「凛」，你受到1点雷电伤害；若你有「凛」，你失去任意个「凛」并选择等量选项令所有其他角色执行：1.下个准备和结束阶段非锁定技失效；2.下个判定阶段在【闪电】、【乐不思蜀】和【兵粮寸断】中选择两个并依次进行判定，3.下个摸牌阶段摸到的牌若颜色相同，则全部弃置，4.下个出牌阶段每种类型的牌仅能使用一张，5.下个弃牌阶段弃置的牌改为被你获得。",
  ca_shen_lijueguosi: "长安神李傕郭汜",
  ca_shen_lijueguosi_prefix: "长安神",
  caweijue: "威傕",
  caweijue_info: "锁定技，准备阶段，从你的下家开始所有其他角色依次将任意张手牌置于武将牌上直到回合结束，称为“威”；若一名角色的“威”不大于其手牌数，你与其视为在彼此攻击范围内。",
  cachuxiong: "除凶",
  cachuxiong_info: "出牌阶段开始时，你可以展示所有手牌并弃置其中一种颜色的所有牌，若你以此法弃置的牌颜色为：黑色，你获得等量张“威”；红色，你对攻击范围内的所有其他角色依次造成1点伤害。",
  ca_shen_caocao: "长安神曹操",
  ca_shen_caocao_prefix: "长安神",
  cazhaoshao: "诏绍",
  cazhaoshao_info: "当你造成或受到1点伤害后，你可以摸一张牌，然后令受伤角色或伤害来源：1.获得弃牌堆或场上的一张装备牌并使用之（此装备占用独立装备栏）；2.翻面并摸一张牌；3.减少1点体力上限。",
  caxiaoxiong: "嚣凶",
  caxiaoxiong_info: "锁定技，当你翻面时，取消之，然后令所有其他角色失去1点体力。",
  ca_shen_wangyun: "长安神王允",
  ca_shen_wangyun_prefix: "长安神",
  caanchao: "安朝",
  caanchao_info: "一名角色的回合结束时，若本回合有角色使用过虚拟牌或转化牌，你可摸一张牌并获得1点蓄力值。",
  cayurong: "御戎",
  cayurong_info: "锁定技，你于一轮内首次成为一种伤害牌的目标时，取消之。",
  cadingxi: "定西",
  cadingxi_info: "蓄力技（4/∞）。当你需要使用一种类型的牌时，你可以消耗1点蓄力值并展示牌堆顶的一张牌，若类型相同，你使用之，否则你从牌堆底摸一张牌；若你连续相同2/3次，你回复全部体力/对所有其他角色各造成1点伤害。",
  wn_shen_machao: "渭南神马超",
  wn_shen_machao_prefix: "渭南神",
  wn_qiangshu: "枪术",
  wn_qiangshu_info: "你使用【杀】或【决斗】造成伤害时，可以弃置X张牌，令此伤害+X（X为你的攻击范围-1）。",
  wn_yuma: "御马",
  wn_yuma_info: "每回合限一次，一张装备牌进入弃牌堆后，你可以将此牌置入一名角色装备区，然后获得其所有手牌。",
  wn_shen_xuzhu: "渭南神许褚",
  wn_shen_xuzhu_prefix: "渭南神",
  wn_zhuanzhan: "转战",
  wn_zhuanzhan_info: "其他角色的准备阶段，你可以废除一个装备栏并视为对其使用一张【决斗】。",
  wn_huwei: "虎威",
  wn_huwei_info: "锁定技，摸牌阶段你多摸X张牌（X为你已废除的装备栏数）。",
  mark_shen_machao: "骏骊神马超",
  mark_shen_machao_prefix: "骏骊|神",
  mark_shouli: "狩骊",
  mark_shouli_info: `①游戏开始时，所有其他角色随机获得1枚“狩骊”（包含3枚“${get.poptip({
    id: "shouli_jun",
    name: "骏",
    type: "character",
    info: `①若你持有的“骏”数量大于：
			<br><li>0，你计算与其他角色的距离-1；
			<br><li>1，摸牌阶段你额外摸一张牌；
			<br><li>2，你使用【杀】指定目标时，令其本回合非锁定技失效。
			<br>②当你受到属性伤害或【南蛮入侵】、【万箭齐发】造成的伤害时，你将所有“骏”移动至你上家。
			`
  })}”和4枚“${get.poptip({
    id: "shouli_li",
    name: "骊",
    type: "character",
    info: `①若你持有的“骊”数量大于：
			<br><li>0，其他角色计算与你的距离+1；
			<br><li>1，摸牌阶段你额外摸一张牌；
			<br><li>2，你造成或受到的伤害视为雷电伤害；
			<br><li>3，你造成或受到的伤害+1。
			<br>②当你受到属性伤害或【南蛮入侵】、【万箭齐发】造成的伤害时，你将所有“骊”移动至你下家。
			`
  })}”）②每回合各限一次，你可以选择一项：1.移动一名其他角色的所有“${get.poptip("shouli_li")}”至其的上家或下家，视为使用或打出一张【闪】；2.移动一名其他角色的所有“${get.poptip("shouli_jun")}”至其的上家或下家，视为使用或打出一张无距离次数限制的【杀】。`,
  mark_shouli_append: "<span style='font-family: yuanli'>狩猎开始……</span>",
  mark_shouli_jun: "骏",
  get mark_shouli_jun_info() {
    return lib.poptip.getInfo("shouli_jun");
  },
  mark_shouli_li: "骊",
  get mark_shouli_li_info() {
    return lib.poptip.getInfo("shouli_li");
  },
  mark_hengwu: "横骛",
  mark_hengwu_info: "锁定技，有“骏”/“骊”的角色获得“骏”/“骊”后，你摸X张牌（X为其拥有的“骏”/“骊”数）。",
  zc26_shen_huangyueying: "26神黄月英",
  zc26_shen_huangyueying_prefix: "26|神",
  zc26_cangqiao: "藏巧",
  zc26_cangqiao_info: "每轮开始时，你可以获得游戏外或弃牌堆中的【断剑】、【水手服】、【庸驴】各至多一张；你使用上述牌时可以将手牌摸至体力上限。",
  zc26_shenxie: "神械",
  zc26_shenxie_info: "每回合限一次，以你为唯一目标的黑色牌结算后，你可以将场上一张装备牌当未以此法使用过的延时锦囊牌使用（均使用过后重置）；此类锦囊牌在判定区内同时有被转化的装备牌的效果。",
  zc26_huaxiu: "化朽",
  zc26_huaxiu_info: `出牌阶段限一次，你可以将一种“藏巧”装备牌效果修改为下述对应顺序的牌直到下回合开始：${get.poptip("zc26_zhuge")}、${get.poptip("zc26_bagua")}、${get.poptip("zc26_lingling")}。`,
  zc26_zhuge: "魂·诸葛连弩",
  zc26_zhuge_info: "你使用【杀】无次数限制且指定目标后，你可以令任意名死亡角色依次观看目标手牌并可以重铸其中一张牌。",
  zc26_zhuge_skill: "魂·诸葛连弩",
  zc26_zhuge_skill_info: "你使用【杀】无次数限制且指定目标后，你可以令任意名死亡角色依次观看目标手牌并可以重铸其中一张牌。",
  zc26_bagua: "魂·八卦阵",
  zc26_bagua_info: "当你需要使用或打出【闪】时，你可以进行一次判定，若结果为红色，视为使用或打出之；判定前你可以令一名死亡角色卜算3。",
  zc26_bagua_skill: "魂·八卦阵",
  zc26_bagua_skill_info: "当你需要使用或打出【闪】时，你可以进行一次判定，若结果为红色，视为使用或打出之；判定前你可以令一名死亡角色卜算3。",
  zc26_lingling: "軨軨",
  zc26_lingling_info: "准备阶段，你须对一名角色造成1点雷电伤害；每轮结束时，所有死亡角色同时秘密选择上家或下家，然后按顺序（死亡由前到后）依次移动此牌至选择的角色对应区域内。",
  zc26_lingling_skill: "軨軨",
  zc26_lingling_skill_info: "准备阶段，你须对一名角色造成1点雷电伤害；每轮结束时，所有死亡角色同时秘密选择上家或下家，然后按顺序（死亡由前到后）依次移动此牌至选择的角色对应区域内。",
  dc_shen_sunquan: "新杀神孙权",
  dc_shen_sunquan_prefix: "新杀|神",
  dccangming: "沧溟",
  dccangming_info: "锁定技，游戏开始时，你令所有角色将手牌置于武将牌上，称为“溟”。有牌进入“溟”时，每包含一种颜色，你摸一张牌。一名角色受到伤害后或回合开始时，获得其武将牌上的所有“溟”。",
  dcchouxi: "筹汐",
  dcchouxi_info: "出牌阶段，你可将一张牌当作“溟”中的一张基本牌或普通锦囊牌使用（每种牌名每回合限一次），以此法使用牌无距离次数限制。",
  dcjichao: "激潮",
  dcjichao_info: "出牌阶段限一次，你可选择一项：1.令一名其他角色将随机一半数量的手牌（向上取整）和装备区的牌置于武将牌上，称为“溟”；2.令所有其他角色将所有牌置于武将牌上，称为“溟”，然后此选项失效直到你累计造成3点伤害。",
  sp_sm_shen_machao: "SP赛马神马超",
  sp_sm_shen_machao_prefix: "SP|赛马|神",
  sm_mabian: "马鞭",
  sm_mabian_info: `若称号为“赛马娘”的角色因${get.poptip("rule_bianshenji")}将此牌置入你的装备区，你视为拥有其武将牌上的第一个技能直到失去此牌。`,
  sm_kulian: "酷练",
  sm_kulian_info: `锁定技，游戏开始时，你令所有角色依次装备牌堆中的一张坐骑牌，并从游戏外将一张${get.poptip("sm_mabian")}置入装备区，然后开始${get.poptip({
    name: "比赛",
    id: "sm_PrettyDerby",
    info: `
			1.每轮开始时，随机亮出两张${get.poptip("sm_PerttyDerby_reward")}，于本轮结束时执行效果<br>
			2.全部${get.poptip("sm_PerttyDerby_reward")}亮出后，重新洗切奖励牌堆<br>
			3.装备有${get.poptip("sm_mabian")}的角色称为“选手”<br>
			4.装备坐骑的“选手”使用牌无距离限制，每回合首次对其他“选手”造成伤害后摸一张牌<br>
			5.失去${get.poptip("sm_mabian")}的“选手”进行“退赛”，不再视为“选手”<br>
			6.快乐第一，比赛第二
		`,
    type: "character"
  })}。`,
  sm_kulian_reward: "赛马奖励",
  get sm_kulian_reward_info() {
    return lib.poptip.getInfo("sm_PerttyDerby_reward");
  },
  sm_lema: "乐马",
  sm_lema_info: "每回合限一次，你可以视为使用一张基本牌，然后摸X张牌（X为场上坐骑牌数量且至少为1）。",
  sm_chaoxuan: "潮炫",
  sm_chaoxuan_info: `锁定技，一次${get.poptip("sm_PrettyDerby")}结束时，你执行一次${get.poptip({
    id: "sm_PerttyDerby_reward",
    name: "赛马奖励",
    info: `
			1.受到伤害唯一最多<br>
			<li><span style='font-family: yuanli'>奖励：回复全部体力</span><br>
			2.手牌数唯一最多<br>
			<li><span style='font-family: yuanli'>奖励：手牌上限改为体力上限</span><br>
			3.体力值唯一最高<br>
			<li><span style='font-family: yuanli'>奖励：增加1点体力上限</span><br>
			4.装备区牌数唯一最多<br>
			<li><span style='font-family: yuanli'>奖励：获得一张其他角色的装备牌</span><br>
			5.击杀数唯一最多<br>
			<li><span style='font-family: yuanli'>奖励：执行一个仅有出牌阶段的额外回合</span><br>
			6.使用牌数唯一最多<br>
			<li><span style='font-family: yuanli'>奖励：摸五张牌</span><br>
			7.造成伤害唯一最多<br>
			<li><span style='font-family: yuanli'>奖励：使用【杀】造成伤害+1</span>
		`,
    type: "character"
  })}。`,
  sm_wandou: "玩斗",
  sm_wandou_info: "一名角色“退赛”时，你可令其将体力值调整至1点。",
  sm_shen_machao: "赛马神马超",
  sm_shen_machao_prefix: "赛马|神",
  sm_tuanlian: "团练",
  sm_tuanlian_info: "锁定技，游戏开始时/你每回合首次造成或受到伤害后，你随机获得五/一张名字或称号包含“马”的武将牌，称为“赛马”。",
  sm_jingji: "竞激",
  sm_jingji_info: `①你可弃置一张“赛马”，发动其牌面上的第一个技能。②你可移去一张“赛马”，视为使用以下牌：${get.poptip("sm_prettyDerby")}；任意基本牌，数值+1；任意普通锦囊牌，摸一张牌。`,
  sm_prettyDerby: "赛马",
  sm_prettyDerby_info: "锁定技，你计算与其他角色的距离-1，其他角色计算与你的距离+1。",
  sm_kuangchi: "狂驰",
  sm_kuangchi_info: "你杀死一名角色后，可以交给其一张“赛马”代替其一张武将牌并令其复活，其胜利条件改为与你一致。",
  mb_shen_jiangwei: "手杀神姜维",
  mb_shen_jiangwei_prefix: "手杀|神",
  mbtiantao: "天涛",
  mbtiantao_info: "锁定技，结束阶段，你选择一个区域并弃置其中所有牌，然后依次弃置任意名其他角色相同区域各一张牌，因此弃置牌且未弃置【杀】的角色失去1点体力。",
  mbxinghun: "星魂",
  mbxinghun_info: "出牌阶段限一次，你可以观看牌堆顶五张牌，用任意张手牌与其中的等量张牌进行交换并任意排序，然后你令一名其他角色展示你的手牌与牌堆顶的共计五张牌，你对其依次使用其中的【杀】。",
  mbshenpei: "神霈",
  mbshenpei_info: `限定技，当你进入濒死状态时，你可以回复X点体力(X为你本局游戏进入过濒死状态的次数)，然后对一名角色造成等量点雷电伤害并获得${get.poptip("mbhuitian")}。`,
  mbhuitian: "回天",
  mbhuitian_info: "一名角色的回合结束时，若其体力值大于你，你可以摸一张牌并执行一个额外的回合。每轮开始时，若你发动过此技能，你死亡。"
};
const characterTitles = {
  mb_shen_jiangwei: "万民承霖",
  //烟雨济世即为神！
  sm_shen_machao: "赛马娘",
  sp_sm_shen_machao: "赛马神",
  dc_shen_sunquan: "瀚海碧君",
  shen_liubei: "誓守桃园义",
  shen_luxun: "红莲业火",
  shen_ganning: "江表之力牧",
  shen_zhangliao: "雁门之刑天",
  shen_zhaoyun: "神威如龙",
  shen_guanyu: "鬼神再临",
  shen_lvmeng: "圣光之国士",
  shen_simayi: "晋国之祖",
  shen_caocao: "超世之英杰",
  shen_zhugeliang: "赤壁的妖术师",
  shen_zhouyu: "赤壁的火神",
  shen_lvbu: "修罗之道",
  shen_guojia: "星月奇佐",
  shen_xunyu: "洞心先识",
  shen_taishici: "义信天武",
  ol_zhangliao: "散敌擒孙",
  shen_caopi: "诰天仰颂",
  shen_zhenji: "洛水凌波",
  shen_diaochan: "欲界非天",
  boss_zhaoyun: "天龙乘云",
  shen_sunce: "踞江鬼雄",
  shen_jiangwei: "怒麟布武",
  shen_sunquan: "坐断东南",
  shen_machao: "神威天将军",
  tw_shen_guanyu: "魂追弗届",
  tw_shen_lvmeng: "兼资文武",
  shen_zhangfei: "两界大巡环使",
  shen_zhangjiao: "末世的起首",
  ol_shen_zhangjiao: "驭道震泽",
  junk_zhangjiao: "驭道震泽",
  shen_dengai: "带砺山河",
  shen_dianwei: "襢裼暴虎",
  ol_shen_dianwei: "襢裼暴虎",
  shen_xuzhu: "嗜战的熊罴",
  shen_huatuo: "悬壶济世",
  shen_lusu: "兴吴之邓禹",
  dc_shen_huatuo: "灵魂的医者",
  xin_simayi: "控权曹魏",
  shen_huangzhong: "战意破苍穹",
  shen_pangtong: "丹血浴火",
  shen_zhonghui: "荡徊的蜚螭",
  ca_shen_lijueguosi: "大破长安",
  ca_wangyun: "忠魂不泯",
  ca_shen_wangyun: "幽狱冰心",
  //看来这里有些缺漏的武将是因为旧武将ID被隐藏或没人完整删掉导致的，为了以防万一，两个ID都写了
  ca_shen_caocao: "四方归心",
  wn_shen_machao: "麾骑撚抢",
  wn_shen_xuzhu: "咆虎熔兵",
  //谁拿的普通许褚的皮肤来当做神许褚的插画？现在神许褚已经有新的皮肤了 渭南版称号猛虎战骊
  mark_shen_machao: "迅鹭惊雷",
  hm_shen_huangfusong: "厥功至伟",
  hm_shen_zhujun: "围师必阙",
  hm_shen_yl_luzhi: "鏖战广宗",
  hm_shen_zhangjiao: "庇佑万千",
  hm_shen_zhangbao: "庇佑万千",
  hm_shen_zhangliang: "庇佑万千",
  shen_jiaxu: "文和乱武",
  le_shen_jiaxu: "倒悬云衢",
  zombie_jiaxu: "丧尸出笼",
  ps_shen_machao: "迅骛惊雷",
  jx_shen_caoren: "征南将军",
  jx_shen_liubiao: "称雄荆襄",
  ty_shen_liubei: "龙兴海内",
  ty_shen_guanyu: "佑子伐吴",
  ty_shen_zhangfei: "傲睨山河",
  zc26_shen_huangyueying: "卧龙的点睛人"
};
const characterIntro = {
  lijueguosi: "请分别查看「李傕」和「郭汜」的武将介绍。",
  shen_guanyu: "关羽，字云长。曾水淹七军、擒于禁、斩庞德、威震华夏，吓得曹操差点迁都躲避，但是东吴偷袭荆州，关羽兵败被害。后传说吕蒙因关羽之魂索命而死。",
  shen_lvmeng: "吕蒙，字子明，汝南富陂人，东吴名将，原有“吴下阿蒙”之贬称，后受孙权劝说，奋发读书，最终成就一代名将。",
  shen_zhouyu: "字公瑾，庐江舒县人。东汉末年名将。有姿貌、精音律，江东有“曲有误，周郎顾”之语。周瑜少与孙策交好，后孙策遇刺身亡，孙权继任。周瑜将兵赴丧，以中护军的身份与长史张昭共掌众事，建安十三年（208年），周瑜率东吴军与刘备军联合，在赤壁击败曹操。此战也奠定了三分天下的基础。",
  shen_zhugeliang: "字孔明、号卧龙，汉族，琅琊阳都人，三国时期蜀汉丞相、杰出的政治家、军事家、发明家、文学家。在世时被封为武乡侯，死后追谥忠武侯，后来东晋政权推崇诸葛亮军事才能，特追封他为武兴王。诸葛亮为匡扶蜀汉政权，呕心沥血、鞠躬尽瘁、死而后已。其代表作有《前出师表》、《后出师表》、《诫子书》等。曾发明木牛流马等，并改造连弩，可一弩十矢俱发。于234年在宝鸡五丈原逝世。"
};
const characterFilters = {
  shen_diaochan(mode) {
    return mode == "identity" || mode == "doudizhu" || mode == "single" || mode == "versus" && _status.mode != "standard" && _status.mode != "three";
  },
  shen_dengai(mode) {
    if (["boss", "chess", "tafang", "stone"].includes(mode)) {
      return false;
    }
    if (mode == "versus") {
      return _status.mode != "three";
    }
    return true;
  },
  le_shen_jiaxu(mode) {
    return mode == "identity" && _status.mode != "purple";
  }
};
const dynamicTranslates = {
  nzry_longnu(player2) {
    const bool = player2.hasSkill("nzry_longnu_2") || player2.storage.nzry_longnu;
    let yang = "你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火【杀】且无距离限制", yin = "你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制";
    if (bool) {
      yin = `<span class='bluetext'>${yin}</span>`;
    } else {
      yang = `<span class='firetext'>${yang}</span>`;
    }
    let start = "转换技，锁定技。出牌阶段开始时，", end = "。";
    return `${start}阳：${yang}；阴：${yin}${end}`;
  },
  fengliao(player2) {
    const bool = player2.storage.fengliao;
    let yang = "你令其摸一张牌", yin = "你对其造成1点火焰伤害";
    if (bool) {
      yin = `<span class='bluetext'>${yin}</span>`;
    } else {
      yang = `<span class='firetext'>${yang}</span>`;
    }
    let start = "锁定技，转换技。你使用牌指定唯一目标后，", end = "。";
    return `${start}阳：${yang}；阴：${yin}${end}`;
  }
};
const voices = {
  "#mbxinghun1": "仰观紫微知兴替，俯察将星照铁衣。",
  "#mbxinghun2": "既晓九星所向，傲破万难独前。",
  "#mbtiantao1": "以此天穹之水，涤瑕荡秽。",
  "#mbtiantao2": "心怀浊恶之徒，岂能成神女之卿？",
  "#mbshenpei1": "雄山峻壑终踏过，须信寒过总是春。",
  "#mbshenpei2": "世有云霓之望，维必借天馈之！",
  "#mbhuitian1": "胸怀赤义，敢问苍天争命数！",
  "#mbhuitian2": "但凭天数，偏立腹地逆乾坤！",
  "#mbhuitian3": "何妨后人评说，维自无愧苍生。",
  "#mbhuitian4": "山河依在，碧血长流！",
  "#mb_shen_jiangwei:die": "身陨何妨作星斗，与日同天卫九州。",
  "#dccangming1": "沧溟起幕，万类归流，百川当濯我足！",
  "#dccangming2": "乾坤浩荡，我主沉浮！",
  "#dcchouxi1": "此间云雨，皆出我袖！",
  "#dcchouxi2": "江表涛声，尽言吴音龙语。",
  "#dcjichao1": "逆我者，沧浪覆之！",
  "#dcjichao2": "鱼龙百变，挟沧海以令众生！",
  "#dc_shen_sunquan:die": "潮浪昊天暮，孤帆终入溟。",
  "#dcduzhang1": "黑水绕白雪，规日月之行次，自始绝地天通！",
  "#dcduzhang2": "枷锁白驹，百代王侯，皆若蜉蝣！",
  "#dcjianghuo1": "复仇、清算，即将开始。",
  "#dcjianghuo2": "一夕血海洗深仇，再立白骨做龙门！",
  "#dclishi1": "天时未到？可花时已到！",
  "#dclishi2": "我于九州洗砚，如何不染人间？",
  "#dclinjie1": "白骨揉成屑，作飞雪落满乾坤！",
  "#dclinjie2": "颦眉勾落日月星，覆手葬得天地人。",
  "#shen_zhonghui:die": "人欲不灭，吾魂不死！",
  "#luansuo1": "六道锁凡尘，死生皆如逆旅。",
  "#luansuo2": "命数如织网，无人不坠因果。",
  "#fengliao1": "乘丹凤者，不堪其炙，何堪其远？",
  "#fengliao2": "我以天地为炉，诸君敢入局否？",
  "#kunyu1": "君岂不闻，山皆有其愚公乎？",
  "#kunyu2": "衰桐凤不栖，昆山玉已碎！",
  "#shen_pangtong:die": "心怀英雄志，何堪寂寥乡。",
  "#dclieqiong1": "横眉蔑风雨，引弓狩天狼。",
  "#dclieqiong2": "一箭出，万军毙！",
  "#dczhanjue1": "流不尽的英雄血，斩不尽的逆贼头！",
  "#dczhanjue2": "长刀渴血，当饲英雄胆！",
  "#shen_huangzhong:die": "箭雨曾蔽日，今夕却成绝响。",
  "#xinrenjie1": "朝中大小事宜，自有大将军定夺。",
  "#xinrenjie2": "朝论政事，老夫唯大将军马首是瞻",
  "#xinbaiyin1": "乱世已尽，老夫当再开万世河山！",
  "#xinbaiyin2": "明出地上，自昭天德，此为晋也。",
  "#xinjilve1": "三分一统，天下归一！",
  "#xinjilve2": "大权独揽，朝野皆平！",
  "#jilue1": "运筹成略，统军持国！",
  "#jilue2": "英雄皆殁，天命终归吾司马一族！",
  "#wansha_new_simayi1": "连诛其族，翦其党羽，以夷后患！",
  "#wansha_new_simayi2": "绝汝生死，断汝轮回！",
  "#lianpo_new_simayi1": "能战当战，不能战当死耳！",
  "#lianpo_new_simayi2": "连下诸城以筑京观，足永平辽东之患。",
  "#reguicai_new_simayi1": "风雨雷电，皆由老夫决之！",
  "#reguicai_new_simayi2": "天地造化，不过老夫一念之间！",
  "#fangzhu_new_simayi1": "此非老夫不仁，实乃汝咎由自取。",
  "#rejizhi_new_simayi1": "一策一划，皆为成吾之远图！",
  "#rezhiheng_new_simayi1": "轮回不止，因果不休。",
  "#jilin1": "戢鳞潜翼，蓄志待时！",
  "#jilin2": "老臣一心为国，还望陛下明鉴。",
  "#jilin3": "年老意荒，无力朝事。",
  "#jilin4": "坐观潮起潮落，笑谈云卷云舒。",
  "#jilin5": "数载春去秋来，静看大江东流！",
  "#yingyou1": "吞吴克蜀，老臣毕生之志也！",
  "#yingyou2": "臣当总领西事，不负陛下所托！",
  "#yingyou3": "积谷屯田，以为灭贼之要！",
  "#yingyou4": "轻骑神速，八日足解新城之叛！",
  "#yingtian1": "太白袭月知何故，天狼掩日欲吞天！",
  "#yingtian2": "藏锋四十载，终昭吾亮剑之时！",
  "#new_simayi:die": "洛水滔滔，难诉吾一生坎坷……",
  "#jingyu1": "人身疾苦，与我无异。",
  "#jingyu2": "医以济世，其术贵在精诚。",
  "#lvxin1": "医病非难，难在医人之心。",
  "#lvxin2": "知人者有验于天，知天者有验于人。",
  "#huandao1": "一语一默，道尽医者慈悲。",
  "#huandao2": "亦急亦缓，抚平世间苦难。",
  "#dc_shen_huatuo:die": "世无良医，枉死者半……",
  "#zhengqing1": "锐势夺志，斩将者虎候是也！",
  "#zhengqing2": "三军争勇，擎纛者舍我其谁！",
  "#zhuangpo1": "腹吞龙虎，气撼山河！",
  "#zhuangpo2": "神魄凝威，魍魉辟易！",
  "#shen_xuzhu:die": "猛虎归林晚，不见往来人……",
  "#dingzhou1": "今肃亲往，主公何愁不定！",
  "#dingzhou2": "肃之所至，万事皆平！",
  "#tamo1": "天下分崩，乱之已极，肃竭浅智，窃为君计。",
  "#tamo2": "天下易主，已为大势，君当据此，以待其时。",
  "#zhimeng1": "豫州何图远窜，而不投吾雄略之主乎？",
  "#zhimeng2": "吾主英明神武，曹众虽百万亦无所惧！",
  "#shen_lusu:die": "常计小利，何成大局……",
  "#wuling1": "吾创五禽之戏，君可作以除疾。",
  "#wuling2": "欲解万般苦，驱身仿五灵。",
  "#youyi1": "此身行医，志济万千百姓。",
  "#youyi2": "普济众生，永免疾患之苦。",
  "#shen_huatuo:die": "人间诸疾未解，老夫怎入轮回……",
  "#juanjia1": "尚攻者弃守，其提双刃，斩万敌！",
  "#juanjia2": "舍衣事力，提兵驱敌！",
  "#qiexie1": "今挟双戟搏战，定护主公太平！",
  "#qiexie2": "吾乃典韦是也，谁敢向前，谁敢向前！",
  "#cuijue1": "当锋摧决，贯遐洞坚！",
  "#cuijue2": "殒身不恤，死战成仁！",
  "#shen_dianwei:die": "战死沙场，快哉快哉！",
  "#dctuoyu1": "本尊目之所及，皆为麾下王土。",
  "#dctuoyu2": "擎五丁之神力，碎万仞之高山。",
  "#dcxianjin1": "大风！大雨！大景！！",
  "#dcxianjin2": "行役沙场，不战胜，则战死！",
  "#dcqijing1": "今神兵于天降，贯奕世之长虹！",
  "#dcqijing2": "辟罗浮之险径，捣伪汉之黄龙！",
  "#shen_dengai:die": "灭蜀者，邓氏士载也！",
  "#shelie1": "略懂，略懂。",
  "#shelie2": "什么都略懂一点，生活更多彩一些。",
  "#gongxin1": "攻城为下，攻心为上。",
  "#gongxin2": "我替施主把把脉。",
  "#yizhao1": "苍天已死，此黄天当立之时。",
  "#yizhao2": "甲子尚水，显炎汉将亡之兆。",
  "#sijun1": "联九州黎庶，撼一家之王庭。",
  "#sijun2": "吾以此身为药，欲医天下之疾。",
  "#sanshou1": "三公既现，领大道而立黄天。",
  "#sanshou2": "天地三才，载厚德以驱魍魉。",
  "#tianjie1": "苍天既死，贫道当替天行道！",
  "#tianjie2": "朱紫庸，肉食鄙，吾当代天伐之！",
  "#tianjie3": "贫道张角，请大汉赴死！",
  "#shen_zhangjiao:die": "诸君唤我为贼，然我所窃何物？",
  "#shencai1": "我有三千炼狱，待汝万世轮回！",
  "#shencai2": "纵汝王侯将相，亦须俯首待裁！",
  "#xunshi1": "秉身为正，辟易万邪！",
  "#xunshi2": "巡御两界，路寻不平！",
  "#shen_zhangfei:die": "尔等，欲复斩我头乎？",
  "#wushen1": "鬼龙斩月刀！",
  "#wushen2": "千里追魂，一刀索命。",
  "#twwuhun1": "不杀此人，何以雪恨？",
  "#twwuhun2": "还我头来！",
  "#tw_shen_guanyu:die": "夙愿已了，魂归地府……",
  "#shouli1": "赤骊骋疆，巡狩八荒！",
  "#shouli2": "长缨在手，百骥可降！",
  "#hengwu1": "横枪立马，独啸秋风！",
  "#hengwu2": "世皆彳亍，唯我纵横！",
  "#shen_machao:die": "离群之马，虽强亦亡……",
  "#yuheng1": "权术妙用，存乎一心。",
  "#yuheng2": "威权之道，皆在于衡。",
  "#dili1": "身处巅峰，览天下大事。",
  "#dili2": "位居至尊，掌至高之权。",
  "#shen_sunquan:die": "困居江东，枉称至尊……",
  "#jiufa1": "九伐中原，以圆先帝遗志。",
  "#jiufa2": "日日砺剑，相报丞相厚恩。",
  "#tianren1": "举石补苍天，舍我更复其谁？",
  "#tianren2": "天地同协力，何愁汉道不昌？",
  "#pingxiang1": "策马纵慷慨，捐躯抗虎豺。",
  "#pingxiang2": "解甲事仇雠，竭力挽狂澜。",
  "#shen_jiangwei:die": "武侯遗志，已成泡影矣……",
  "#yingba1": "从我者可免，拒我者难容！",
  "#yingba2": "卧榻之侧，岂容他人鼾睡！",
  "#scfuhai1": "翻江复蹈海，六合定乾坤！",
  "#scfuhai2": "力攻平江东，威名扬天下！",
  "#pinghe1": "不过胆小鼠辈，吾等有何惧哉！",
  "#pinghe2": "只可得胜而返，岂能败战而归！",
  "#shen_sunce:die": "无耻小人！竟敢暗算于我……",
  "#tianzuo1": "此时进之多弊，守之多利，愿主公熟虑。",
  "#tianzuo2": "主公若不时定，待四方生心，则无及矣。",
  "#lingce1": "绍士卒虽众，其实难用，必无为也。",
  "#lingce2": "袁军不过一盘砂砾，主公用奇则散。",
  "#dinghan1": "杀身有地，报国有时。",
  "#dinghan2": "益国之事，虽死弗避。",
  "#shen_xunyu:die": "宁鸣而死，不默而生……",
  "#dulie1": "素来言出必践，成吾信义昭彰！",
  "#dulie2": "小信如若不成，大信将以何立？",
  "#tspowei1": "弓马骑射洒热血，突破重围显英豪！",
  "#tspowei2": "敌军尚犹严防，有待明日再看！",
  "#tspowei3": "君且城中等候，待吾探敌虚实。",
  "#shen_taishici:die": "魂归……天地……",
  "#shuishi1": "聪以知远，明以察微。",
  "#shuishi2": "见微知著，识人心志。",
  "#stianyi1": "天命靡常，惟德是辅。",
  "#stianyi2": "可成吾志者，必此人也！",
  "#sghuishi1": "丧家之犬，主公实不足虑也。",
  "#sghuishi2": "时势兼备，主公复有何忧？",
  "#zuoxing1": "以聪虑难，悉咨于上。",
  "#zuoxing2": "身计国谋，不可两遂。",
  "#zuoxing3": "奉孝不才，愿献勤心。",
  "#shen_guojia:die": "可叹桢干命也迂……",
  "#meihun1": "这个和这个不要，其他全给我吧~",
  "#meihun2": "嗯~~妾身就是喜欢这些，给我嘛~",
  "#huoxin1": "一笑倾城，一眼惑心~",
  "#huoxin2": "哎呀~妾身~能有什么坏心思呢？",
  "#shen_diaochan:die": "纵使消逝，妾影长存……",
  "#wuhun21": "生当啖汝之肉！",
  "#wuhun22": "死当追汝之魂！",
  "#shen_guanyu:die": "我还会回来的……",
  "#xinjuejing1": "背水一战，不胜便死！",
  "#xinjuejing2": "置于死地，方能后生！",
  "#relonghun1": "能屈能伸，才是大丈夫！",
  "#relonghun2": "常山赵子龙在此！",
  "#shen_zhaoyun:die": "龙身虽死，魂魄不灭！",
  "#qixing1": "伏望天恩，誓讨汉贼！",
  "#qixing2": "祈星辰之力，佑我蜀汉！",
  "#kuangfeng1": "万事俱备，只欠业火。",
  "#kuangfeng2": "风~~起~~",
  "#dawu1": "此计可保你一时平安。",
  "#dawu2": "此非万全之策，唯惧天雷。",
  "#shen_zhugeliang:die": "今当远离，临表涕零，不知所言……",
  "#shen_lvmeng:die": "劫数难逃，我们别无选择……",
  "#yeyan1": "（燃烧声）让这熊熊业火，焚尽你的罪恶！",
  "#yeyan2": "（燃烧声）聆听吧，这献给你的镇魂曲！",
  "#qinyin1": "（急促的琴声、燃烧声）",
  "#qinyin2": "（舒缓的琴声）",
  "#shen_zhouyu:die": "逝者不死，浴火……重生……",
  "#renjie21": "忍一时，风平浪静。",
  "#renjie22": "退一步，海阔天空。",
  "#sbaiyin1": "老骥伏枥，志在千里！",
  "#sbaiyin2": "烈士暮年，壮心不已！",
  "#lianpo1": "受命于天，既寿永昌！",
  "#lianpo2": "一鼓作气，破敌致胜！",
  "#shen_simayi:die": "鼎足三分已成梦，一切都结束了……",
  "#guixin1": "山不厌高，海不厌深！",
  "#guixin2": "周公吐哺，天下归心！",
  "#shen_caocao:die": "腾蛇乘雾，终为土灰……",
  "#baonu1": "嗯~~~~~！",
  "#baonu2": "哼！",
  "#wumou1": "哪个说我有勇无谋？！",
  "#wumou2": "不管这些了！",
  "#ol_wuqian1": "看我神威，无坚不摧！",
  "#ol_wuqian2": "天王老子也保不住你！",
  "#ol_shenfen1": "凡人们，颤抖吧！这是神之怒火！",
  "#ol_shenfen2": "这，才是活生生的地狱！",
  "#shen_lvbu:die": "我在修罗炼狱，等着你们，呃哈哈哈哈哈~",
  "#nzry_longnu1": "龙怒降临，岂是尔等凡人可抗？",
  "#nzry_longnu2": "龙意怒火，汝皆不能逃脱。",
  "#nzry_jieying1": "桃园结义，营一世之交。",
  "#nzry_jieying2": "结草衔环，报兄弟大恩。",
  "#shen_liubei:die": "桃园依旧，来世再结……",
  "#nzry_junlve1": "文韬武略兼备，方可破敌如破竹。",
  "#nzry_junlve2": "军略绵腹，制敌千里。",
  "#nzry_cuike1": "摧敌心神，克敌计谋。",
  "#nzry_cuike2": "克险摧难，军略当先。",
  "#nzry_dinghuo1": "绽东吴业火，烧敌军数千！",
  "#nzry_dinghuo2": "业火映东水，吴志绽敌营！",
  "#shen_luxun:die": "东吴业火，终究熄灭……",
  "#drlt_duorui1": "夺敌军锐气，杀敌方士气。",
  "#drlt_duorui2": "尖锐之势，吾亦可一人夺之！",
  "#drlt_zhiti1": "娃闻名止啼，孙损十万休。",
  "#drlt_zhiti2": "江东小儿，安敢啼哭？",
  "#shen_zhangliao:die": "我也有……被孙仲谋所伤之时？",
  "#drlt_poxi1": "夜袭敌军，挫其锐气。",
  "#drlt_poxi2": "受主知遇，袭敌不惧。",
  "#drlt_jieying1": "劫营速战，措手不及。",
  "#drlt_jieying2": "裹甲衔枚，劫营如入无人之境。",
  "#shen_ganning:die": "吾不能奉主，谁辅主基业？",
  "#chuyuan1": "储君之位，囊中之物。",
  "#chuyuan2": "此役，我之胜。",
  "#dengji1": "登高位，享极乐。",
  "#dengji2": "今日，便是我称帝之时。",
  "#shen_caopi:die": "曹魏锦绣，孤还未看尽……",
  "#shenfu1": "河洛之神，诗赋可抒。",
  "#shenfu2": "云神鱼游，罗扇掩面。",
  "#shen_zhenji:die": "众口铄金，难证吾清……",
  "#juejing": "龙战于野，其血玄黄。",
  "#longhun1": "潜龙于渊，涉灵愈伤。",
  "#longhun2": "千里一怒，红莲灿世。",
  "#longhun3": "金甲映日，驱邪祛秽。",
  "#longhun4": "腾龙行云，首尾不见。",
  "#boss_zhaoyun:die": "血染鳞甲，龙坠九天……",
  "#dccuixin1": "今兵临城下，其王庭可摧。",
  "#dccuixin2": "四面皆奏楚歌，问汝降是不降？",
  "#dili_shengzhi1": "位继父兄，承弘德以继往。",
  "#dili_shengzhi2": "英魂犹在，履功业而开来。",
  "#dili_chigang1": "秉承伦常，扶树纲纪。",
  "#dili_chigang2": "至尊临位，则朝野自肃。",
  "#dili_qionglan1": "事无巨细，咸即问询。",
  "#dili_qionglan2": "纵览全局，以小见大。",
  "#dili_quandao1": "继策掌权，符令吴会。",
  "#dili_quandao2": "以权驭衡，谋定天下。",
  "#dili_jiaohui1": "日月交辉，天下大白。",
  "#dili_jiaohui2": "雄鸡引颈，生民白也。",
  "#dili_yuanlv1": "临江而眺，静观江水东流。",
  "#dili_yuanlv2": "屹立山巅，笑看大江潮来。",
  "#shenzhu1": "力引强弓百斤，矢除贯手著棼！",
  "#shenzhu2": "箭既已在弦上，吾又岂能不发！",
  "#jilue_guicai1": "老夫，即是天命！",
  "#jilue_fangzhu1": "赦你死罪，你去吧！",
  "#jilue_wansha1": "天要亡你，谁人能救？",
  "#jilue_zhiheng1": "天之道，轮回也。",
  "#jilue_jizhi1": "顺应天意，得道多助。",
  "#wushuang_shen_lvbu1": "燎原千里，凶名远扬！",
  "#wushuang_shen_lvbu2": "铁蹄奋进，所向披靡！",
  "#tianxing1": "孤之行，天之意。",
  "#tianxing2": "我做的决定，便是天的旨意。",
  "#rejianxiong_shen_caopi1": "孤之所长，继父之所长。",
  "#rejianxiong_shen_caopi2": "乱世枭雄，哼，孤亦是。",
  "#rerende_shen_caopi1": "这些都是孤赏赐给你的。",
  "#rezhiheng_shen_caopi1": "有些事情，还需多加思索。",
  "#olluanji_shen_caopi1": "违逆我的，都该处罚。",
  "#caopi_xingdong": "此等小事，你们处理即可。"
};
const characterSort = {
  extra_feng: ["shen_guanyu", "shen_lvmeng"],
  extra_huo: ["shen_zhugeliang", "shen_zhouyu"],
  extra_lin: ["shen_caocao", "shen_lvbu"],
  extra_shan: ["shen_zhaoyun", "shen_simayi"],
  extra_yin: ["shen_liubei", "shen_luxun"],
  extra_lei: ["shen_ganning", "shen_zhangliao"],
  extra_decade: ["dc_shen_sunquan", "shen_zhonghui", "shen_huangzhong", "shen_jiangwei", "shen_machao", "shen_zhangfei", "shen_zhangjiao", "shen_dengai", "shen_xuzhu", "dc_shen_huatuo", "shen_pangtong"],
  extra_ol: ["shen_dianwei", "ol_zhangliao", "shen_caopi", "shen_zhenji", "shen_sunquan", "junk_zhangjiao"],
  extra_mobilezhi: ["shen_guojia", "shen_xunyu"],
  extra_mobilexin: ["shen_taishici", "shen_sunce"],
  extra_mobileren: ["shen_huatuo", "shen_lusu"],
  extra_mobileyan: ["mb_shen_jiangwei"],
  extra_tw: ["tw_shen_guanyu", "tw_shen_lvmeng"],
  extra_mb: ["xin_simayi"],
  extra_offline: ["shen_jiaxu", "shen_diaochan", "boss_zhaoyun", "le_shen_jiaxu", "ps_shen_machao", "mark_shen_machao", "zc26_shen_huangyueying", "sm_shen_machao", "sp_sm_shen_machao"],
  extra_taoyuan: ["ty_shen_zhangfei", "ty_shen_guanyu", "ty_shen_liubei"],
  extra_hanmo: ["hm_shen_yl_luzhi", "hm_shen_huangfusong", "hm_shen_zhangjiao", "hm_shen_zhangbao", "hm_shen_zhangliang", "hm_shen_zhujun"],
  extra_changan: ["ca_shen_wangyun", "ca_shen_caocao", "ca_shen_lijueguosi", "zombie_jiaxu", "zombie_zombie"],
  extra_weinan: ["wn_shen_machao", "wn_shen_xuzhu"],
  extra_jingxiang: ["jx_shen_caoren", "jx_shen_liubiao"]
};
const characterSortTranslate = {
  extra_feng: "神话再临·风",
  extra_huo: "神话再临·火",
  extra_lin: "神话再临·林",
  extra_shan: "神话再临·山",
  extra_yin: "神话再临·阴",
  extra_lei: "神话再临·雷",
  extra_key: "论外",
  extra_ol: "神话再临·OL",
  extra_mobilezhi: "始计篇·智",
  extra_mobilexin: "始计篇·信",
  extra_mobileren: "始计篇·仁",
  extra_mobileyan: "始计篇·严",
  extra_offline: "神话再临·线下",
  extra_offlineDecade: "神·武·线下",
  extra_decade: "神·武",
  extra_tw: "神话再临·海外服",
  extra_mb: "神话再临·移动版",
  extra_hanmo: "风云志·汉末风云",
  extra_changan: "风云志·长安风云",
  extra_weinan: "风云志·渭南风云",
  extra_taoyuan: "山河煮酒·桃园挽歌",
  extra_jingxiang: "风云志·荆襄风云"
};
game.import("character", function() {
  return {
    name: "extra",
    connect: true,
    connectBanned: ["shen_diaochan"],
    character: { ...characters },
    characterSort: {
      extra: characterSort
    },
    characterFilter: { ...characterFilters },
    characterTitle: { ...characterTitles },
    dynamicTranslate: { ...dynamicTranslates },
    characterIntro: { ...characterIntro },
    card: { ...cards },
    skill: { ...skills },
    translate: { ...translates, ...voices, ...characterSortTranslate },
    pinyins: { ...pinyins }
  };
});

import { get, game, ui, _status, lib } from "noname";
const characters = {
  two_yj_hanbing: {
    sex: "female",
    group: "qun",
    hp: 4,
    skills: ["chegu", "jianrou"],
    names: "null|null",
    img: "image/character/yj_hanbing.jpg",
    dieAudios: ["yj_hanbing"]
  },
  two_yj_tengjia: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["renjia", "yj_yanyu"],
    names: "null|null",
    img: "image/character/yj_tengjia.jpg",
    dieAudios: ["yj_tengjia"]
  },
  two_yj_puyuan: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["pyhuanling", "pyshenduan"],
    img: "image/character/yj_puyuan.jpg",
    dieAudios: ["yj_puyuan"]
  },
  x_dc_zhangqiying: {
    sex: "female",
    group: "qun",
    hp: 3,
    skills: ["x_dc_falu", "x_dc_zhenyi", "x_dc_dianhua"],
    dieAudios: ["zhangqiying"]
  },
  x_yao_yuanshu: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["yao_yaoyi", "yao_chenwei"],
    dieAudios: ["yao_yuanshu"],
    img: "image/character/yao_yuanshu.jpg"
  },
  fx_baosanniang: {
    sex: "female",
    group: "shu",
    hp: 3,
    skills: ["mbfangxu", "mbzhuguan", "mblisuo"]
  },
  sy_baosanniang: {
    sex: "female",
    group: "shu",
    hp: 3,
    skills: ["meiyong", "rexushen", "rezhennan"],
    dieAudios: ["baosanniang"]
  },
  ol_baosanniang: {
    sex: "female",
    group: "shu",
    hp: 4,
    skills: ["olwuniang", "olxushen"],
    dieAudios: ["baosanniang"]
  },
  junk_sunquan: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["dili", "yuheng"],
    groupInGuozhan: "wu",
    dieAudios: ["shen_sunquan"]
  },
  new_simayi: {
    sex: "male",
    group: "shen",
    hp: 4,
    skills: ["jilin", "yingyou", "yingtian"],
    groupInGuozhan: "wei",
    names: "司马|懿"
  },
  hr_wufu: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["dchuairen", "dcchizei"],
    dieAudios: ["wufu"],
    img: "image/character/wufu.jpg"
  },
  xj_peixiu: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["xjzhitu", "dcxiujue"],
    names: "裴|秀",
    dieAudios: ["fj_peixiu"],
    img: "image/character/fj_peixiu.jpg"
  },
  cx_majun: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["chuanxie", "yjqiaosi"],
    names: "马|钧",
    dieAudios: ["yj_majun"],
    img: "image/character/yj_majun.jpg"
  },
  qq_majun: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["yuliao", "qiqiao", "yanxie"],
    names: "马|钧",
    dieAudios: ["yj_majun"],
    img: "image/character/yj_majun.jpg"
  },
  one_dc_sp_machao: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["onedcspzhuiji", "onedcspshichou"]
  },
  two_dc_sp_machao: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["zhuiji", "dc_olshichou"]
  },
  old_wuyi: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["benxi"],
    clans: ["陈留吴氏"]
  },
  old_shixie: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["biluan", "lixia"],
    dieAudios: ["shixie"]
  },
  panfeng: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["kuangfu"]
  },
  old_guanyinping: {
    sex: "female",
    group: "shu",
    hp: 3,
    skills: ["xueji_old", "oldhuxiao", "oldwuji"],
    dieAudios: ["guanyinping"]
  },
  old_caocao: {
    sex: "male",
    group: "shen",
    hp: 3,
    skills: ["junkguixin", "feiying"],
    dieAudios: ["shen_caocao"]
  },
  old_chendao: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["drlt_wanglie"],
    dieAudios: ["chendao"]
  },
  old_liyan: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["duliang", "fulin"],
    dieAudios: ["liyan"]
  },
  old_guanzhang: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["old_fuhun"],
    names: "关|兴-张|苞"
  },
  new_caoren: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["moon_jushou", "jiewei"],
    dieAudios: ["caoren"]
  },
  huangzhong: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["liegong"]
  },
  old_dingfeng: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["fenxun", "duanbing"],
    dieAudios: ["dingfeng"]
  },
  old_huanghao: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["oldqinqing", "oldhuisheng"],
    dieAudios: ["huanghao"]
  },
  oldre_liubiao: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["zishou", "zongshi"],
    dieAudios: ["liubiao"]
  },
  old_liubiao: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["oldzishou", "zongshi"],
    dieAudios: ["liubiao"]
  },
  old_gaoshun: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["xianzhen", "jinjiu"],
    dieAudios: ["gaoshun"]
  },
  old_caorui: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["huituo", "oldmingjian", "xingshuai"],
    isZhugong: true,
    dieAudios: ["caorui"]
  },
  old_handang: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["oldgongji", "oldjiefan"],
    dieAudios: ["handang"]
  },
  old_yangzhi: {
    sex: "female",
    group: "jin",
    hp: 3,
    skills: ["wanyi", "maihuo"],
    clans: ["弘农杨氏"],
    dieAudios: ["yangzhi"]
  },
  old_yangyan: {
    sex: "female",
    group: "jin",
    hp: 3,
    skills: ["xuanbei", "xianwan"],
    clans: ["弘农杨氏"],
    dieAudios: ["yangyan"]
  },
  madai: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["mashu", "oldqianxi"]
  },
  xuhuang: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["gzduanliang"]
  },
  junk_simayi: {
    sex: "male",
    group: "jin",
    hp: 3,
    skills: ["buchen", "smyyingshi", "xiongzhi", "quanbian"],
    hasHiddenSkill: true,
    names: "司马|懿",
    dieAudios: ["jin_simayi"]
  },
  fazheng: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["enyuan", "xuanhuo"]
  },
  ol_yuanshu: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["wangzun", "tongji"],
    dieAudios: ["re_yuanshu"]
  },
  pangde: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["mashu", "mengjin"]
  },
  ol_huaxiong: {
    sex: "male",
    group: "qun",
    hp: 6,
    skills: ["new_reyaowu"],
    dieAudios: ["old_huaxiong"]
  },
  old_wangyun: {
    sex: "male",
    group: "qun",
    hp: 4,
    skills: ["wylianji", "moucheng"],
    clans: ["太原王氏"],
    dieAudios: ["wangyun"]
  },
  old_xiaoqiao: {
    sex: "female",
    group: "wu",
    hp: 3,
    skills: ["tianxiang", "hongyan"],
    names: "桥|null",
    dieAudios: ["xiaoqiao"]
  },
  weiyan: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["kuanggu"]
  },
  xiahouyuan: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["shensu"],
    names: "夏侯|渊"
  },
  old_zhangxingcai: {
    sex: "female",
    group: "shu",
    hp: 3,
    skills: ["oldshenxian", "qiangwu"],
    dieAudios: ["zhangxingcai"]
  },
  old_fuhuanghou: {
    sex: "female",
    group: "qun",
    hp: 3,
    skills: ["oldzhuikong", "oldqiuyuan"],
    dieAudios: ["fuhuanghou"]
  },
  old_caochong: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["oldrenxin", "oldchengxiang"],
    dieAudios: ["caochong"]
  },
  yuji: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["old_guhuo"]
  },
  zhangjiao: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["leiji", "guidao", "huangtian"],
    isZhugong: true
  },
  old_zhangfei: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["new_repaoxiao", "new_tishen"],
    dieAudios: ["re_zhangfei"]
  },
  old_zhaoyun: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["longdan", "new_yajiao"],
    dieAudios: ["re_zhaoyun"]
  },
  old_huatuo: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["jijiu", "chulao"],
    dieAudios: ["re_huatuo"]
  },
  old_guanyu: {
    sex: "male",
    group: "shu",
    hp: 4,
    skills: ["wusheng", "yijue"],
    dieAudios: ["re_guanyu"]
  },
  old_caochun: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["shanjia"],
    dieAudios: ["caochun"]
  },
  masu: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["xinzhan", "huilei"]
  },
  xushu: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["xswuyan", "jujian"],
    groupBorder: "wei"
  },
  liru: {
    sex: "male",
    group: "qun",
    hp: 3,
    skills: ["juece", "mieji", "fencheng"]
  },
  xin_yujin: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["jieyue"],
    dieAudios: ["yujin.mp3"]
  },
  old_zhonghui: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["zzhenggong", "zquanji", "zbaijiang"],
    clans: ["颍川钟氏"]
  },
  old_xusheng: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["pojun"],
    dieAudios: ["xusheng"]
  },
  old_zhuran: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["olddanshou"],
    dieAudios: ["zhuran"]
  },
  old_lingtong: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["oldxuanfeng"],
    dieAudios: ["lingtong"]
  },
  old_caoxiu: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["taoxi"],
    dieAudios: ["caoxiu"]
  },
  old_caozhen: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["sidi"],
    dieAudios: ["caozhen"]
  },
  old_maliang: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["xiemu", "naman"]
  },
  old_chenqun: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["dingpin", "oldfaen"],
    dieAudios: ["chenqun"],
    clans: ["颍川陈氏"]
  },
  old_zhuhuan: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["youdi"]
  },
  old_zhuzhi: {
    sex: "male",
    group: "wu",
    hp: 4,
    skills: ["anguo"],
    dieAudios: ["zhuzhi"]
  },
  old_zhugezhan: {
    sex: "male",
    group: "shu",
    hp: 3,
    skills: ["old_zuilun", "old_fuyin"],
    names: "诸葛|瞻",
    dieAudios: ["zhugezhan"]
  },
  old_guanqiujian: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["drlt_zhenrong", "drlt_hongju"],
    names: "毌丘|俭",
    dieAudios: ["guanqiujian"]
  },
  old_wanglang: {
    sex: "male",
    group: "wei",
    hp: 3,
    skills: ["gushe", "jici"],
    dieAudios: ["wanglang"]
  },
  old_wangyi: {
    sex: "female",
    group: "wei",
    hp: 3,
    skills: ["oldzhenlie", "oldmiji"]
  },
  re_yujin: {
    sex: "male",
    group: "wei",
    hp: 4,
    skills: ["yizhong"],
    dieAudios: ["yujin.mp3"]
  }
};
const cards$1 = {};
const pinyins = {};
const skills = {
  //寒冰剑
  chegu: {
    audio: 2,
    onremove(player2, skill) {
      player2.removeSkill("chegu_effect");
    },
    trigger: {
      player: "useCardToPlayer"
    },
    filter(event2, player2) {
      if (player2 !== _status.currentPhase || get.type(event2.card) == "equip") {
        return false;
      }
      return event2.targets?.length && event2.isFirstTarget;
    },
    check(event2, player2) {
      const getV = (current) => get.effect(current, { name: "guohe_copy2" }, player2, player2), targets2 = game.filterPlayer((current) => current.countDiscardableCards(player2, "he") > 0).sort((a, b) => getV(b) - getV(a));
      const getAllV = (num, numx) => {
        let index = 0, eff = 0;
        while (index < num) {
          const target2 = targets2[index];
          if (!target2) {
            break;
          }
          index++;
          const count = Math.min(numx, target2.countDiscardableCards(player2, "he"));
          eff += count * getV(target2);
        }
        return eff;
      };
      const list = [1, 2 + player2.countMark("chegu_effect")];
      let val = Math.max(getAllV(...list), getAllV(...list.reverse()));
      return event2.targets.reduce((val2, current) => {
        return val2 - get.effect(current, event2.card, player2, player2);
      }, val) > 0;
    },
    async content(event2, trigger2, player2) {
      const evt = trigger2.getParent();
      if (evt) {
        evt.targets.length = 0;
        evt.all_excluded = true;
      }
      const getPrompt = (list) => {
        const [num, numx] = list;
        return `弃置${num > 1 ? "至多" : ""}${get.cnNumber(num)}名角色${num > 1 ? "各" : ""}${numx > 1 ? "至多" : ""}${get.cnNumber(numx)}张牌`;
      }, list1 = [1, 2 + player2.countMark("chegu_effect")], list2 = [2 + player2.countMark("chegu_effect"), 1];
      const result2 = await player2.chooseButton(
        [
          "彻骨：选择一项",
          [
            [
              [list1, getPrompt(list1)],
              [list2, getPrompt(list2)]
            ],
            "textbutton"
          ]
        ],
        true
      ).set("ai", (button) => {
        const list = button.link, player3 = get.player();
        const getV = (current) => get.effect(current, { name: "guohe_copy2" }, player3, player3), targets2 = game.filterPlayer((current) => current.countDiscardableCards(player3, "he") > 0).sort((a, b) => getV(b) - getV(a));
        const getAllV = (num, numx) => {
          let index = 0, eff = 0;
          while (index < num) {
            const target2 = targets2[index];
            if (!target2) {
              break;
            }
            index++;
            const count = Math.min(numx, target2.countDiscardableCards(player3, "he"));
            eff += count * getV(target2);
          }
          return eff;
        };
        return getAllV(...list);
      }).forResult();
      if (result2?.bool && result2.links?.length) {
        const [num, numx] = result2.links[0], targets2 = game.filterPlayer((current) => current.countDiscardableCards(player2, "he") > 0);
        if (!targets2?.length) {
          return;
        }
        const result22 = targets2.length === 1 ? {
          bool: true,
          targets: targets2
        } : await player2.chooseTarget("彻骨：选择要弃牌的目标角色", [1, num], true, (card, player3, target2) => {
          return target2.countDiscardableCards(player3, "he");
        }).set("maxNum", numx).set("ai", (target2) => {
          const { player: player3, maxNum } = get.event();
          return get.effect(target2, { name: "guohe_copy2" }, player3, player3) * Math.min(maxNum, target2.countDiscardableCards(player3, "he"));
        }).forResult();
        if (result22?.bool && result22.targets?.length) {
          const func = async (target2) => {
            const discard = Math.min(numx, target2.countDiscardableCards(player2, "he"));
            if (discard > 0) {
              await player2.discardPlayerCard(target2, [1, discard], true, "he");
            }
          };
          player2.line(result22.targets, "green");
          await game.doAsyncInOrder(result22.targets, func);
          const colors = [], types = [];
          game.getGlobalHistory("everything", (evt2) => {
            if (evt2.name != "lose" || evt2.type != "discard") {
              return false;
            }
            if (evt2.getParent(3) === event2 && evt2.cards?.length) {
              evt2.cards.forEach((card) => {
                colors.add(get.color(card, false));
                types.add(get.type2(card, false));
              });
            }
          });
          if (colors.length === 1 || types.length === 1) {
            player2.addTempSkill("chegu_effect");
            player2.addMark("chegu_effect", 1, false);
          }
        }
      }
    },
    subSkill: {
      effect: {
        charlotte: true,
        onremove: true,
        intro: {
          content: "本回合【彻骨】数值+#"
        }
      }
    }
  },
  jianrou: {
    audio: 2,
    round: 1,
    trigger: {
      player: "damageBegin3"
    },
    filter(event2, player2) {
      return player2.countDiscardableCards(player2, "he") >= 2;
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseToDiscard(get.prompt2(event2.skill), 2, "he").set("eff", get.damageEffect(player2, trigger2.source ?? player2, player2)).set("ai", (card) => {
        const { player: player3, eff } = get.event();
        if (eff >= 0) {
          return 0;
        }
        if (ui.selected.cards.length) {
          const cardx = ui.selected.cards[0];
          if (get.color(cardx, false) == get.color(card, false) || get.type2(cardx, false) == get.type2(card, false)) {
            return 16 - get.value(card);
          }
          return 4 - get.value(card);
        }
        return 7 - get.value(card);
      }).set("chooseonly", true).forResult();
    },
    async content(event2, trigger2, player2) {
      const { cards: cards2, name } = event2;
      await player2.modedDiscard(cards2);
      trigger2.cancel();
      const check = (key) => cards2.map((card) => get[key](card, false)).toUniqued().length === 1;
      if (check("color") || check("type2")) {
        await player2.draw();
        const limit = `${name}_roundcount`;
        if (player2.storage[limit]) {
          delete player2.storage[limit];
          player2.unmarkSkill(limit);
          game.log(player2, "令", "#g【剑柔】", "视为未发动过");
        }
      }
    }
  },
  //爻袁术
  yao_yaoyi: {
    audio: 2,
    init(player2, skill) {
      game.broadcastAll(
        (player3, skill2) => {
          const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
              if (mutation.type === "childList") {
                const cards2 = player3._start_cards ?? [];
                if (player3.node.handcards1.cardMod[skill2] && !_status.gameDrawed) {
                  for (const card2 of mutation.addedNodes) {
                    if (cards2.includes(card2)) {
                      game.broadcastAll(
                        (card3, player4, skill3) => {
                          card3.addGaintag(`${skill3}_tag`);
                          game.addVideo("addGaintag", player4, [[get.cardInfo(card3)], `${skill3}_tag`]);
                          card3.classList.add(skill3);
                          game.addVideo("skill", player4, [skill3, [true, [get.cardInfo(card3)]]]);
                        },
                        card2,
                        player3,
                        skill2
                      );
                    }
                  }
                }
                for (const card2 of mutation.removedNodes) {
                  if (cards2.includes(card2) && !card2.hasGaintag(`${skill2}_tag`)) {
                    game.broadcastAll(
                      (card3, player4, skill3) => {
                        card3.classList.remove(skill3);
                        game.addVideo("skill", player4, [skill3, [false, [get.cardInfo(card3)]]]);
                      },
                      card2,
                      player3,
                      skill2
                    );
                  }
                }
              }
            }
          });
          const config = { childList: true };
          observer.observe(player3.node.handcards1, config);
          observer.observe(player3.node.handcards2, config);
          player3.node.handcards1.cardMod ??= {};
          player3.node.handcards2.cardMod ??= {};
          const cardMod = (card2) => {
            if (card2.classList.contains(skill2)) {
              return ["爻疑", "此牌对你不可见"];
            }
          };
          player3.node.handcards1.cardMod[skill2] = cardMod;
          player3.node.handcards2.cardMod[skill2] = cardMod;
          player3.node.handcards1.classList.add(skill2);
          player3.node.handcards2.classList.add(skill2);
          if (_status.gameDrawed) {
            const cards2 = player3._start_cards ?? [];
            player3.getCards("h").forEach((card2) => {
              if (cards2.includes(card2)) {
                game.broadcastAll(
                  (card3, player4, skill3) => {
                    card3.addGaintag(`${skill3}_tag`);
                    game.addVideo("addGaintag", player4, [[get.cardInfo(card3)], `${skill3}_tag`]);
                    card3.classList.add(skill3);
                    game.addVideo("skill", player4, [skill3, [true, [get.cardInfo(card3)]]]);
                  },
                  card2,
                  player3,
                  skill2
                );
              }
            });
          }
          const { card, blank, ...others } = ui.create.buttonPresets;
          ui.create.buttonPresets = {
            ...others,
            card(item, ...args) {
              if (item.classList.contains(skill2) && args[args.length - 1] !== skill2) {
                return blank(item, ...args, skill2);
              }
              return card(item, ...args);
            },
            blank(item, ...args) {
              if (item.classList.contains(skill2) && args[args.length - 1] !== skill2) {
                return card(item, ...args, skill2);
              }
              return blank(item, ...args);
            }
          };
        },
        player2,
        skill
      );
    },
    onremove(player2, skill) {
      player2.removeGaintag(`${skill}_tag`);
      game.broadcastAll(
        (player3, skill2) => {
          player3.node.handcards1.classList.remove(skill2);
          player3.node.handcards2.classList.remove(skill2);
          delete player3.node.handcards1.cardMod[skill2];
          delete player3.node.handcards2.cardMod[skill2];
          player3.getCards("h").forEach((card) => {
            if (card.classList.contains(skill2)) {
              card.classList.remove(skill2);
              game.addVideo("skill", player3, [skill2, [false, [get.cardInfo(card)]]]);
            }
          });
        },
        player2,
        skill
      );
    },
    video(player2, info) {
      for (const cardid of info[1]) {
        for (const card of player2.getCards("h")) {
          if (card.cardid === cardid[4]) {
            card.classList[info[0] ? "add" : "remove"]("yao_yaoyi");
          }
        }
      }
    },
    enable: "chooseToUse",
    filter(event2, player2) {
      return get.inpileVCardList((info) => lib.skill.yao_yaoyi.hiddenCard(player2, info[2])).some((info) => {
        const card = { name: info[2], nature: info[3] };
        return player2.hasCard((cardx) => cardx.classList.contains("yao_yaoyi") && event2.filterCard({ ...card, cards: [cardx] }, player2, event2), "h");
      });
    },
    chooseButton: {
      dialog(event2, player2) {
        const list = get.inpileVCardList((info) => lib.skill.yao_yaoyi.hiddenCard(player2, info[2])).filter((info) => {
          const card = { name: info[2], nature: info[3] };
          return player2.hasCard((cardx) => cardx.classList.contains("yao_yaoyi") && event2.filterCard({ ...card, cards: [cardx] }, player2, event2), "h");
        });
        return ui.create.dialog("爻疑", [list, "vcard"]);
      },
      filter(button, player2) {
        const event2 = get.event().getParent(), info = button.link, card = { name: info[2], nature: info[3] };
        return player2.hasCard((cardx) => cardx.classList.contains("yao_yaoyi") && event2.filterCard({ ...card, cards: [cardx] }, player2, event2), "h");
      },
      check(button) {
        const event2 = get.event().getParent();
        if (event2.type !== "phase") {
          return 1;
        }
        return get.player().getUseValue({ name: button.link[2], nature: button.link[3] });
      },
      prompt(links) {
        const event2 = get.event().getParent();
        return "将一张背置牌当作" + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】" + (event2.name === "chooseToRespond" ? "打出" : "使用");
      },
      backup(links, player2) {
        return {
          audio: "yao_yaoyi",
          filterCard(card) {
            return get.itemtype(card) == "card" && card.classList.contains("yao_yaoyi");
          },
          popname: true,
          check(card) {
            return 1 + Math.random();
          },
          position: "hse",
          viewAs: { name: links[0][2], nature: links[0][3] },
          precontent() {
            player2.addTempSkill("yao_yaoyi_used");
            player2.markAuto("yao_yaoyi_used", [event.result.card.name]);
          }
        };
      }
    },
    hiddenCard(player2, name) {
      if (!lib.inpile.includes(name) || player2.getStorage("yao_yaoyi_used").includes(name)) {
        return false;
      }
      return ["basic", "trick"].includes(get.type(name)) && player2.hasCard((card) => _status.connectMode || card.classList.contains("yao_yaoyi"), "h");
    },
    locked: false,
    mod: {
      cardEnabled(card, player2) {
        if (!card || get.is.convertedCard(card)) {
          return;
        }
        if (card?.cards?.some((cardx) => cardx.classList.contains("yao_yaoyi"))) {
          return false;
        }
      },
      cardRespondable(card, player2) {
        return get.info("yao_yaoyi").mod.cardEnabled.apply(this, arguments);
      },
      cardSavable(card, player2) {
        return get.info("yao_yaoyi").mod.cardEnabled.apply(this, arguments);
      }
    },
    ai: {
      respondSha: true,
      respondShan: true,
      skillTagFilter(player2) {
        if (!player2.hasCard((card) => _status.connectMode || card.classList.contains("yao_yaoyi"), "h")) {
          return false;
        }
      },
      order(item, player2) {
        if (player2 && _status.event.type == "phase") {
          const list = get.inpileVCardList((info) => lib.skill.yao_yaoyi.hiddenCard(player2, info[2]));
          let max = 0;
          list.forEach((info) => {
            const card = { name: info[2], nature: info[3] };
            if (player2.getUseValue(card) > 0) {
              const temp = get.order(card);
              if (temp > max) {
                max = temp;
              }
            }
          });
          if (max > 0) {
            max += 1;
          }
          return max;
        }
        return 1;
      },
      result: {
        player(player2) {
          return get.event().dying ? get.attitude(player2, get.event().dying) : 1;
        }
      }
    },
    subSkill: {
      backup: {},
      tag: {},
      used: {
        charlotte: true,
        onremove: true
      }
    }
  },
  yao_chenwei: {
    audio: 2,
    trigger: { player: "useCard" },
    filter(event2, player2) {
      if (!player2.hasHistory("lose", (evt) => {
        if (evt.getParent() !== event2) {
          return false;
        }
        return Object.values(evt.gaintag_map).flat().includes("yao_yaoyi_tag");
      })) {
        return false;
      }
      if (!player2.storage.yao_chenwei) {
        return player2.countCards("h") > 0;
      }
      return game.hasPlayer((target2) => target2 !== player2 && target2.countGainableCards(player2, "he"));
    },
    async cost(event2, trigger2, player2) {
      const next = player2.chooseTarget(get.prompt(event2.skill));
      if (player2.storage[event2.skill]) {
        next.prompt2 = "获得一名其他角色的一张牌并将此牌背置";
        next.filterTarget = function(card, player3, target2) {
          return target2 !== player3 && target2.countGainableCards(player3, "he");
        };
        next.ai = function(target2) {
          const player3 = get.player();
          return get.effect(target2, { name: "shunshou_copy2" }, player3, player3);
        };
      } else {
        next.prompt2 = "令一名角色将你的一张手牌翻面";
        next.ai = function(target2) {
          const player3 = get.player();
          return 1 + Math.sign(get.attitude(player3, target2)) + Math.random();
        };
      }
      event2.result = await next.forResult();
    },
    async content(event2, trigger2, player2) {
      const storage = player2.storage[event2.name], target2 = event2.targets[0];
      player2.changeZhuanhuanji(event2.name);
      if (storage) {
        const result2 = await player2.gainPlayerCard(target2, "he", true).forResult();
        if (result2?.bool && result2.cards?.some((i) => get.position(i) === "h" && get.owner(i) === player2 && !i.classList.contains("yao_yaoyi"))) {
          game.broadcastAll(
            (cards2) => {
              for (const card of cards2) {
                card.classList.add("yao_yaoyi");
                card.addGaintag("yao_yaoyi_tag");
              }
            },
            result2.cards.filter((i) => get.position(i) === "h" && get.owner(i) === player2 && !i.classList.contains("yao_yaoyi"))
          );
        }
      } else {
        const result2 = await target2.choosePlayerCard(player2, "h", true).set("prompt2", `将${get.translation(player2)}的一张手牌翻面`).forResult();
        if (result2?.bool && result2.cards?.some((i) => get.position(i) === "h" && get.owner(i) === player2)) {
          game.broadcastAll(
            (cards2) => {
              for (const card of cards2) {
                if (card.hasGaintag("yao_yaoyi_tag")) {
                  card.removeGaintag("yao_yaoyi_tag");
                  game.addVideo("removeGaintag", player2, ["yao_yaoyi_tag", [get.cardInfo(card)]]);
                  card.classList.remove("yao_yaoyi");
                  game.addVideo("skill", player2, ["yao_yaoyi", [false, [get.cardInfo(card)]]]);
                } else {
                  card.addGaintag("yao_yaoyi_tag");
                  game.addVideo("addGaintag", player2, [[get.cardsInfo(card)], "yao_yaoyi_tag"]);
                  card.classList.add("yao_yaoyi");
                  game.addVideo("skill", player2, ["yao_yaoyi", [true, [get.cardInfo(card)]]]);
                }
              }
            },
            result2.cards.filter((i) => get.position(i) === "h" && get.owner(i) === player2)
          );
        }
      }
    },
    zhuanhuanji: true,
    marktext: "☯",
    mark: true,
    intro: {
      content(storage) {
        return `当你使用背置牌时，你可以${["获得一名其他角色的一张牌并将此牌背置", "令一名角色将你的一张手牌翻面"][1 - storage]}`;
      }
    },
    ai: {
      combo: "yao_yaoyi"
    }
  },
  //魏武帝
  junkguixin: {
    forbid: ["guozhan"],
    init() {
      if (!_status.junkguixin) {
        _status.junkguixin = [];
        if (!_status.characterlist) {
          game.initCharacterList();
        }
        for (const name of _status.characterlist) {
          if (!lib.character[name][3]) {
            continue;
          }
          _status.junkguixin.addArray(
            lib.character[name][3].filter((skill) => {
              var info = get.info(skill);
              return info && info.zhuSkill && (!info.ai || !info.ai.combo);
            })
          );
        }
      }
    },
    audio: "guixin",
    trigger: { player: "phaseEnd" },
    direct: true,
    content() {
      "step 0";
      var controls = ["获得技能", "修改势力", "cancel2"];
      if (!_status.junkguixin.some((skill) => !player.hasSkill(skill, null, false, false))) {
        controls.shift();
      }
      player.chooseControl(controls).set("prompt", get.prompt2("junkguixin")).set("ai", () => _status.event.controls.length == 3 ? "获得技能" : "cancel2");
      if (result.control != "cancel2") {
        var next = game.createEvent("junkguixinx");
        next.player = player;
        next.setContent(lib.skill.junkguixin["content_" + result.control]);
      }
    },
    content_获得技能() {
      "step 0";
      var list = _status.junkguixin.slice().filter((skill) => !player.hasSkill(skill, null, false, false));
      if (!list.length) {
        event.finish();
        return;
      }
      list = list.map((skill) => {
        return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + "】</div><div>" + lib.translate[skill + "_info"] + "</div></div>"];
      });
      player.chooseButton(["归心：选择获得一个主公技", [list, "textbutton"]], true).set("ai", (button) => 1 + Math.random());
      if (result.bool) {
        player.logSkill("junkguixin");
        player.addSkills(result.links[0]);
      }
    },
    content_修改势力() {
      "step 0";
      player.chooseTarget("请选择【归心】的目标", "更改一名其他角色的势力", lib.filter.notMe, true).set("ai", (target3) => 1 + Math.random());
      if (result.bool) {
        var target2 = result.targets[0];
        event.target = target2;
        player.logSkill("junkguixin", target2);
        var list = lib.group.slice();
        list.removeArray(["shen", target2.group]);
        player.chooseControl(list).set("prompt", "请选择" + get.translation(target2) + "变更的势力").set("ai", () => _status.event.controls.randomGet());
      } else {
        event.finish();
      }
      if (result.control) {
        player.popup(get.translation(result.control + "2"));
        target2.changeGroup(result.control);
      }
    }
  },
  oldqinqing: {
    audio: "qinqing",
    mode: ["identity", "versus"],
    available(mode) {
      if (mode == "versus" && _status.mode != "four") {
        return false;
      }
      if (mode == "identity" && _status.mode == "purple") {
        return false;
      }
    },
    trigger: { player: "phaseJieshuBegin" },
    direct: true,
    filter(event2, player2) {
      var zhu = get.zhu(player2);
      if (!zhu || !zhu.isZhu) {
        return false;
      }
      return game.hasPlayer(function(current) {
        return current != zhu && current != player2 && current.inRange(zhu);
      });
    },
    content() {
      "step 0";
      player.chooseTarget(get.prompt2("dcqinqing"), function(card, player2, target3) {
        var zhu2 = get.zhu(player2);
        return target3 != player2 && target3.inRange(zhu2);
      }).set("ai", function(target3) {
        var zhu2 = get.zhu(player);
        var he = target3.countCards("he");
        if (get.attitude(_status.event.player, target3) > 0) {
          if (target3.countCards("h") > zhu2.countCards("h") + 1) {
            return 0.1;
          }
        } else {
          if (he > zhu2.countCards("h") + 1) {
            return 2;
          }
          if (he > 0) {
            return 1;
          }
        }
        return 0;
      });
      if (result.bool) {
        var target2 = result.targets[0];
        event.target = target2;
        player.logSkill("dcqinqing", target2);
        if (target2.countDiscardableCards(player, "he")) {
          player.discardPlayerCard(target2, "he", true);
        }
        target2.draw();
      } else {
        event.finish();
      }
      var zhu = get.zhu(player);
      if (zhu && zhu.isIn()) {
        if (target2.countCards("h") > zhu.countCards("h")) {
          player.draw();
        }
      }
    }
  },
  oldhuisheng: {
    audio: "huisheng",
    trigger: { player: "damageBegin4" },
    direct: true,
    filter(event2, player2) {
      if (!player2.countCards("he")) {
        return false;
      }
      if (!event2.source || event2.source == player2 || !event2.source.isIn()) {
        return false;
      }
      if (player2.storage.oldhuisheng && player2.storage.oldhuisheng.includes(event2.source)) {
        return false;
      }
      return true;
    },
    init(player2) {
      if (player2.storage.oldhuisheng) {
        player2.storage.oldhuisheng = [];
      }
    },
    content() {
      "step 0";
      if (!player.storage.oldhuisheng) {
        player.storage.oldhuisheng = [];
      }
      player.storage.oldhuisheng.push(trigger.source);
      var att = get.attitude(player, trigger.source) > 0;
      var goon = false;
      if (player.hp == 1) {
        goon = true;
      } else {
        var he = player.getCards("he");
        var num = 0;
        for (var i = 0; i < he.length; i++) {
          if (get.value(he[i]) < 8) {
            num++;
            if (num >= 2) {
              goon = true;
              break;
            }
          }
        }
      }
      player.chooseCard("he", [1, player.countCards("he")], get.prompt2("oldhuisheng", trigger.source)).set("ai", function(card2) {
        if (_status.event.att) {
          return 10 - get.value(card2);
        }
        if (_status.event.goon) {
          return 8 - get.value(card2);
        }
        if (!ui.selected.cards.length) {
          return 7 - get.value(card2);
        }
        return 0;
      }).set("goon", goon).set("att", att);
      if (result.bool) {
        player.logSkill("oldhuisheng", trigger.source);
        game.delay();
        event.num = result.cards.length;
        var goon = false;
        if (event.num > 2 || get.attitude(trigger.source, player) >= 0) {
          goon = true;
        }
        var forced = false;
        var str = "获得其中一张牌并防止伤害";
        if (trigger.source.countCards("he") < event.num) {
          forced = true;
        } else {
          str += "，或取消并弃置" + get.cnNumber(result.cards.length) + "张牌";
        }
        trigger.source.chooseButton([str, result.cards], forced).set("ai", function(button) {
          if (_status.event.goon) {
            return get.value(button.link);
          }
          return get.value(button.link) - 8;
        }).set("goon", goon);
      } else {
        event.finish();
      }
      if (result.bool) {
        var card = result.links[0];
        trigger.source.gain(card, player, "giveAuto", "bySelf");
        trigger.cancel();
      } else {
        trigger.source.chooseToDiscard(event.num, true, "he");
      }
    }
  },
  oldzishou: {
    audio: "zishou",
    audioname: ["re_liubiao"],
    trigger: { player: "phaseDrawBegin2" },
    check(event2, player2) {
      return player2.countCards("h") <= 2 && player2.getDamagedHp() >= 2 || player2.skipList.includes("phaseUse");
    },
    filter(event2, player2) {
      return !event2.numFixed && player2.isDamaged();
    },
    content() {
      trigger.num += player.getDamagedHp();
      player.skip("phaseUse");
    },
    ai: {
      threaten: 1.5
    }
  },
  oldgongji: {
    audio: "gongji",
    enable: ["chooseToUse", "chooseToRespond"],
    locked: false,
    filterCard: { type: "equip" },
    position: "hes",
    viewAs: {
      name: "sha",
      storage: { oldgongji: true }
    },
    viewAsFilter(player2) {
      if (!player2.countCards("hes", { type: "equip" })) {
        return false;
      }
    },
    prompt: "将一张装备牌当无距离限制的【杀】使用或打出",
    check(card) {
      var val = get.value(card);
      if (_status.event.name == "chooseToRespond") {
        return 1 / Math.max(0.1, val);
      }
      return 5 - val;
    },
    mod: {
      targetInRange(card) {
        if (card.storage && card.storage.oldgongji) {
          return true;
        }
      }
    },
    ai: {
      respondSha: true,
      skillTagFilter(player2) {
        if (!player2.countCards("hes", { type: "equip" })) {
          return false;
        }
      }
    }
  },
  oldjiefan: {
    audio: "jiefan",
    trigger: { player: "chooseToUseBegin" },
    filter(event2, player2) {
      return event2.type == "dying" && _status.currentPhase !== player2;
    },
    direct: true,
    clearTime: true,
    content() {
      const list = [event.name, trigger.dying];
      player.chooseToUse(
        function(card, player2, event2) {
          if (get.name(card) != "sha") {
            return false;
          }
          return lib.filter.filterCard.apply(this, arguments);
        },
        get.prompt2(...list)
      ).set("targetRequired", true).set("complexSelect", true).set("complexTarget", true).set("filterTarget", function(card, player2, target2) {
        if (target2 != _status.currentPhase && !ui.selected.targets.includes(_status.currentPhase)) {
          return false;
        }
        return lib.filter.filterTarget.apply(this, arguments);
      }).set("logSkill", list).set("oncard", function() {
        _status.event.player.addTempSkill("oldjiefan_recover");
      }).set("custom", {
        add: {},
        replace: {
          window: () => {
            ui.click.cancel();
          }
        }
      });
    },
    ai: {
      save: true,
      order: 3,
      result: { player: 1 }
    },
    subSkill: {
      recover: {
        // audio:'jiefan',
        trigger: { source: "damageBegin2" },
        filter(event2, player2) {
          return event2.getParent(4).name == "oldjiefan";
        },
        forced: true,
        popup: false,
        charlotte: true,
        content() {
          trigger.cancel();
          var evt = event.getParent("_save");
          var card = { name: "tao", isCard: true };
          if (evt && evt.dying && player.canUse(card, evt.dying)) {
            player.useCard(card, evt.dying, "oldjiefan_recover");
          }
        }
      }
    }
  },
  oldmingjian: {
    audio: "mingjian",
    trigger: { player: "phaseUseBefore" },
    filter(event2, player2) {
      return player2.countCards("h");
    },
    async cost(event2, trigger2, player2) {
      event2.result = await player2.chooseTarget(get.prompt(event2.skill), "跳过出牌阶段并将所有手牌交给一名其他角色，你结束此回合，然后其于此回合后获得一个额外的出牌阶段", lib.filter.notMe).set("ai", (target2) => {
        var player3 = _status.event.player, att = get.attitude(player3, target2);
        if (target2.hasSkillTag("nogain")) {
          return 0.01 * att;
        }
        if (player3.countCards("h") == player3.countCards("h", "du")) {
          return -att;
        }
        if (target2.hasJudge("lebu")) {
          att *= 1.25;
        }
        if (get.attitude(player3, target2) > 3) {
          var basis = get.threaten(target2) * att;
          if (player3 == get.zhu(player3) && player3.hp <= 2 && player3.countCards("h", "shan") && !game.hasPlayer(function(current) {
            return get.attitude(current, player3) > 3 && current.countCards("h", "tao") > 0;
          })) {
            return 0;
          }
          if (target2.countCards("h") + player3.countCards("h") > target2.hp + 2) {
            return basis * 0.8;
          }
          return basis;
        }
        return 0;
      }).forResult();
    },
    async content(event2, trigger2, player2) {
      const target2 = event2.targets[0];
      await player2.give(player2.getCards("h"), target2);
      trigger2.cancel();
      const evt = trigger2.getParent("phase", true);
      if (evt) {
        game.log(player2, "结束了回合");
        evt.num = evt.phaseList.length;
        evt.goto(11);
      }
      const next = target2.insertPhase();
      next._noTurnOver = true;
      next.phaseList = ["phaseUse"];
    },
    phase() {
      "step 0";
      player.phaseUse();
      game.broadcastAll(function() {
        if (ui.tempnowuxie) {
          ui.tempnowuxie.close();
          delete ui.tempnowuxie;
        }
      });
    }
  },
  oldshenxian: {
    audio: "shenxian",
    inherit: "shenxian"
  },
  old_guhuo: {
    audio: 2,
    enable: ["chooseToUse", "chooseToRespond"],
    hiddenCard(player2, name) {
      return lib.inpile.includes(name) && player2.countCards("hs") > 0;
    },
    filter(event2, player2) {
      if (!player2.countCards("hs")) {
        return false;
      }
      for (const i of lib.inpile) {
        const type = get.type(i);
        if ((type == "basic" || type == "trick") && event2.filterCard(get.autoViewAs({ name: i }, "unsure"), player2, event2)) {
          return true;
        }
        if (i == "sha") {
          for (const j of lib.inpile_nature) {
            if (event2.filterCard(get.autoViewAs({ name: i, nature: j }, "unsure"), player2, event2)) {
              return true;
            }
          }
        }
      }
      return false;
    },
    chooseButton: {
      dialog(event2, player2) {
        const list = [];
        for (const i of lib.inpile) {
          if (event2.type != "phase") {
            if (!event2.filterCard(get.autoViewAs({ name: i }, "unsure"), player2, event2)) {
              continue;
            }
          }
          const type = get.type(i);
          if (type == "basic" || type == "trick") {
            list.push([type, "", i]);
          }
          if (i == "sha") {
            for (const j of lib.inpile_nature) {
              if (event2.type != "phase") {
                if (!event2.filterCard(get.autoViewAs({ name: i, nature: j }, "unsure"), player2, event2)) {
                  continue;
                }
              }
              list.push(["基本", "", "sha", j]);
            }
          }
        }
        return ui.create.dialog("蛊惑", [list, "vcard"]);
      },
      filter(button, player2) {
        const evt = _status.event.getParent();
        return evt.filterCard({ name: button.link[2], nature: button.link[3] }, player2, evt);
      },
      check(button) {
        const player2 = _status.event.player;
        const enemyNum = game.countPlayer(function(current) {
          return current != player2 && current.hp != 0 && (get.realAttitude || get.attitude)(current, player2) < 0;
        });
        const card = { name: button.link[2], nature: button.link[3] };
        const val = _status.event.getParent().type == "phase" ? player2.getUseValue(card) : 1;
        if (val <= 0) {
          return 0;
        }
        if (enemyNum) {
          if (!player2.hasCard(function(cardx) {
            if (card.name == cardx.name) {
              if (card.name != "sha") {
                return true;
              }
              return get.is.sameNature(card, cardx);
            }
            return false;
          }, "hs")) {
            if (get.value(card, player2, "raw") < 6) {
              return Math.sqrt(val) * (0.25 + Math.random() / 1.5);
            }
            if (enemyNum <= 2) {
              return Math.sqrt(val) / 1.5;
            }
            return 0;
          }
          return 3 * val;
        }
        return val;
      },
      backup(links, player2) {
        return {
          filterCard(card, player3, target2) {
            let result2 = true;
            const suit = card.suit, number = card.number;
            card.suit = "none";
            card.number = null;
            const mod = game.checkMod(card, player3, "unchanged", "cardEnabled2", player3);
            if (mod != "unchanged") {
              result2 = mod;
            }
            card.suit = suit;
            card.number = number;
            return result2;
          },
          selectCard: 1,
          position: "hs",
          ignoreMod: true,
          aiUse: Math.random(),
          viewAs: {
            name: links[0][2],
            nature: links[0][3],
            suit: "none",
            number: null
          },
          ai1(card) {
            const player3 = _status.event.player;
            const enemyNum = game.countPlayer(function(current) {
              return current != player3 && current.hp != 0 && (get.realAttitude || get.attitude)(current, player3) < 0;
            });
            const cardx = lib.skill.old_guhuo_backup.viewAs;
            if (enemyNum) {
              if (card.name == cardx.name && (card.name != "sha" || get.is.sameNature(card, cardx))) {
                return 2 + Math.random() * 3;
              } else if (lib.skill.old_guhuo_backup.aiUse < 0.5 && !player3.isDying()) {
                return 0;
              }
            }
            return 6 - get.value(card);
          },
          async precontent(event2, trigger2, player3) {
            player3.logSkill("old_guhuo");
            player3.addTempSkill("old_guhuo_guess");
            const [card] = event2.result.cards;
            event2.result.card.suit = get.suit(card);
            event2.result.card.number = get.number(card);
          }
        };
      },
      prompt(links, player2) {
        return "将一张手牌当做" + get.translation(links[0][2]) + (_status.event.name == "chooseToRespond" ? "打出" : "使用");
      }
    },
    ai: {
      save: true,
      respondSha: true,
      respondShan: true,
      fireAttack: true,
      skillTagFilter(player2) {
        if (!player2.countCards("hs")) {
          return false;
        }
      },
      threaten: 1.2,
      order: 8.1,
      result: {
        player: 1
      }
    },
    subSkill: {
      guess: {
        trigger: {
          player: ["useCardBefore", "respondBefore"]
        },
        forced: true,
        silent: true,
        popup: false,
        firstDo: true,
        charlotte: true,
        filter(event2, player2) {
          return event2.skill && event2.skill.indexOf("old_guhuo_") == 0;
        },
        async content(event2, trigger2, player2) {
          event2.fake = false;
          event2.betrayer = [];
          const [card] = trigger2.cards;
          if (card.name != trigger2.card.name || card.name == "sha" && !get.is.sameNature(trigger2.card, card)) {
            event2.fake = true;
          }
          player2.popup(trigger2.card.name, "metal");
          const next = player2.lose(card, ui.ordering);
          next.relatedEvent = trigger2;
          await next;
          trigger2.throw = false;
          trigger2.skill = "old_guhuo_backup";
          game.log(player2, "声明", trigger2.targets && trigger2.targets.length ? "对" : "", trigger2.targets || "", trigger2.name == "useCard" ? "使用" : "打出", trigger2.card);
          event2.prompt = get.translation(player2) + "声明" + (trigger2.targets && trigger2.targets.length ? "对" + get.translation(trigger2.targets) : "") + (trigger2.name == "useCard" ? "使用" : "打出") + (get.translation(trigger2.card.nature) || "") + get.translation(trigger2.card.name) + "，是否质疑？";
          event2.targets = game.filterPlayer(function(current) {
            return current != player2 && current.hp != 0;
          }).sortBySeat(_status.currentPhase);
          game.broadcastAll(
            function(card2, player3) {
              _status.old_guhuoNode = card2.copy("thrown");
              if (lib.config.cardback_style != "default") {
                _status.old_guhuoNode.style.transitionProperty = "none";
                ui.refresh(_status.old_guhuoNode);
                _status.old_guhuoNode.classList.add("infohidden");
                ui.refresh(_status.old_guhuoNode);
                _status.old_guhuoNode.style.transitionProperty = "";
              } else {
                _status.old_guhuoNode.classList.add("infohidden");
              }
              _status.old_guhuoNode.style.transform = "perspective(600px) rotateY(180deg) translateX(0)";
              player3.$throwordered2(_status.old_guhuoNode);
            },
            trigger2.cards[0],
            player2
          );
          event2.onEnd01 = function() {
            _status.old_guhuoNode.removeEventListener("webkitTransitionEnd", _status.event.onEnd01);
            setTimeout(function() {
              _status.old_guhuoNode.style.transition = "all ease-in 0.3s";
              _status.old_guhuoNode.style.transform = "perspective(600px) rotateY(270deg)";
              const onEnd = function() {
                _status.old_guhuoNode.classList.remove("infohidden");
                _status.old_guhuoNode.style.transition = "all 0s";
                ui.refresh(_status.old_guhuoNode);
                _status.old_guhuoNode.style.transform = "perspective(600px) rotateY(-90deg)";
                ui.refresh(_status.old_guhuoNode);
                _status.old_guhuoNode.style.transition = "";
                ui.refresh(_status.old_guhuoNode);
                _status.old_guhuoNode.style.transform = "";
                _status.old_guhuoNode.removeEventListener("webkitTransitionEnd", onEnd);
              };
              _status.old_guhuoNode.listenTransition(onEnd);
            }, 300);
          };
          for (const target2 of event2.targets) {
            const { links } = await target2.chooseButton([event2.prompt, [["reguhuo_ally", "reguhuo_betray"], "vcard"]], true).set("ai", function(button) {
              const player3 = _status.event.player;
              const evt = _status.event.getParent("old_guhuo_guess"), evtx = evt.getTrigger();
              if (!evt) {
                return Math.random();
              }
              const card2 = { name: evtx.card.name, nature: evtx.card.nature, isCard: true };
              const ally = button.link[2] == "reguhuo_ally";
              if (ally && (player3.hp <= 1 || get.attitude(player3, evt.player) >= 0)) {
                return 1.1;
              }
              if (!ally && get.attitude(player3, evt.player) < 0 && evtx.name == "useCard") {
                let eff = 0;
                const targetsx = evtx.targets || [];
                for (const target3 of targetsx) {
                  const isMe = target3 == evt.player;
                  eff += get.effect(target3, card2, evt.player, player3) / (isMe ? 1.5 : 1);
                }
                eff /= 1.5 * targetsx.length || 1;
                if (eff > 0) {
                  return 0;
                }
                if (eff < -7) {
                  return Math.random() + Math.pow(-(eff + 7) / 8, 2);
                }
                return Math.pow((get.value(card2, evt.player, "raw") - 4) / (eff == 0 ? 5 : 10), 2);
              }
              return Math.random();
            }).forResult();
            if (links[0][2] == "reguhuo_betray") {
              target2.addExpose(0.2);
              game.log(target2, "#y质疑");
              target2.popup("质疑！", "fire");
              event2.betrayer.add(target2);
            } else {
              game.log(target2, "#g不质疑");
              target2.popup("不质疑", "wood");
            }
          }
          await game.delayx();
          game.broadcastAll(function(onEnd) {
            _status.event.onEnd01 = onEnd;
            if (_status.old_guhuoNode) {
              _status.old_guhuoNode.listenTransition(onEnd, 300);
            }
          }, event2.onEnd01);
          await game.delay(2);
          if (!event2.betrayer.length) {
            return;
          }
          if (event2.fake) {
            event2.betrayer.forEach((target2) => target2.popup("质疑正确", "wood"));
            await game.asyncDraw(event2.betrayer);
            game.log(player2, "声明的", trigger2.card, "作废了");
            trigger2.cancel();
            trigger2.getParent().goto(0);
            trigger2.line = false;
            event2.clearUI = true;
          } else {
            event2.betrayer.forEach((target2) => target2.popup("质疑错误", "fire"));
            for (let target2 of event2.betrayer) {
              await target2.loseHp();
            }
            if (get.suit(card) != "heart") {
              game.log(player2, "声明的", trigger2.card, "作废了");
              trigger2.cancel();
              trigger2.getParent().goto(0);
              trigger2.line = false;
              event2.clearUI = true;
            }
          }
          await game.delay(2);
          if (event2.clearUI) {
            game.broadcastAll(() => ui.clear());
          }
        }
      },
      cheated: {
        trigger: {
          player: "gainAfter",
          global: "loseAsyncAfter"
        },
        charlotte: true,
        forced: true,
        silent: true,
        popup: false,
        firstDo: true,
        onremove: true,
        filter(event2, player2) {
          if (event2.getParent().name == "draw") {
            return true;
          }
          var cards2 = event2.getg(player2);
          if (!cards2.length) {
            return false;
          }
          return game.hasPlayer((current) => {
            if (current == player2) {
              return false;
            }
            var evt = event2.getl(current);
            if (evt && evt.cards && evt.cards.length) {
              return true;
            }
            return false;
          });
        },
        content() {
          player.removeSkill("old_guhuo_cheated");
        }
      }
    }
  },
  old_zuilun: {
    audio: "xinfu_zuilun",
    subSkill: {
      e: {},
      h: {}
    },
    enable: "phaseUse",
    usable: 2,
    filterTarget(card, player2, target2) {
      if (player2 == target2) {
        return false;
      }
      var pos = "he";
      if (player2.hasSkill("old_zuilun_h")) {
        pos = "e";
      }
      if (player2.hasSkill("old_zuilun_e")) {
        pos = "h";
      }
      return target2.countGainableCards(player2, pos) > 0;
    },
    content() {
      "step 0";
      var pos = "he";
      if (player.hasSkill("old_zuilun_h")) {
        pos = "e";
      }
      if (player.hasSkill("old_zuilun_e")) {
        pos = "h";
      }
      player.gainPlayerCard(target, pos, true);
      if (result.bool && result.cards && result.cards.length) {
        target.draw();
        var pos = result.cards[0].original;
        if (pos == "h" || pos == "e") {
          player.addTempSkill("old_zuilun_" + pos, "phaseUseAfter");
        }
      }
    },
    ai: {
      order: 7,
      result: {
        target: -1
      }
    }
  },
  old_fuyin: {
    audio: "xinfu_fuyin",
    mod: {
      targetEnabled(card, player2, target2) {
        if ((card.name == "juedou" || card.name == "sha" || card.name == "huogong") && player2 != target2 && player2.countCards("h") >= target2.countCards("h") && target2.hasEmptySlot(2)) {
          return false;
        }
      }
    }
  },
  old_jijun: {
    marktext: "方",
    audio: "xinfu_jijun",
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
    enable: "phaseUse",
    filterCard: true,
    selectCard: [1, Infinity],
    allowChooseAll: true,
    filter(event2, player2) {
      return player2.countCards("h") > 0;
    },
    check(card) {
      var player2 = _status.event.player;
      if (36 - player2.getExpansions("old_jijun").length <= player2.countCards("h")) {
        return 1;
      }
      return 5 - get.value(card);
    },
    discard: false,
    lose: false,
    content() {
      player.addToExpansion(cards, player, "give").gaintag.add("old_jijun");
    },
    ai: {
      order: 1,
      result: {
        player: 1
      },
      combo: "old_fangtong"
    }
  },
  old_fangtong: {
    trigger: {
      player: "phaseJieshuBegin"
    },
    audio: "xinfu_fangtong",
    forced: true,
    skillAnimation: true,
    animationColor: "metal",
    filter(event2, player2) {
      return player2.getExpansions("old_jijun").length > 35;
    },
    content() {
      var winners = player.getFriends();
      game.over(player == game.me || winners.includes(game.me));
    },
    ai: {
      combo: "oldjijun"
    }
  },
  oldanxu: {
    enable: "phaseUse",
    usable: 1,
    multitarget: true,
    audio: 2,
    filterTarget(card, player2, target2) {
      if (player2 == target2) {
        return false;
      }
      var num = target2.countCards("h");
      if (ui.selected.targets.length) {
        return num < ui.selected.targets[0].countCards("h");
      }
      var players = game.filterPlayer();
      for (var i = 0; i < players.length; i++) {
        if (num > players[i].countCards("h")) {
          return true;
        }
      }
      return false;
    },
    selectTarget: 2,
    content() {
      "step 0";
      var gainner, giver;
      if (targets[0].countCards("h") < targets[1].countCards("h")) {
        gainner = targets[0];
        giver = targets[1];
      } else {
        gainner = targets[1];
        giver = targets[0];
      }
      gainner.gainPlayerCard(giver, "h", true).set("visible", true);
      if (result.bool && result.links.length && get.suit(result.links[0]) != "spade") {
        player.draw();
      }
    },
    ai: {
      order: 10.5,
      threaten: 2,
      result: {
        target(player2, target2) {
          var num = target2.countCards("h");
          var att = get.attitude(player2, target2);
          if (ui.selected.targets.length == 0) {
            if (att > 0) {
              return -1;
            }
            var players = game.filterPlayer();
            for (var i = 0; i < players.length; i++) {
              var num2 = players[i].countCards("h");
              var att2 = get.attitude(player2, players[i]);
              if (att2 >= 0 && num2 < num) {
                return -1;
              }
            }
            return 0;
          } else {
            return 1;
          }
        },
        player: 0.1
      }
    }
  },
  oldfaen: {
    audio: "faen",
    trigger: { global: ["turnOverAfter", "linkAfter"] },
    filter(event2, player2) {
      if (event2.name == "link") {
        return event2.player.isLinked();
      }
      return true;
    },
    check(event2, player2) {
      return get.attitude(player2, event2.player) > 0;
    },
    logTarget: "player",
    content() {
      trigger.player.draw();
    },
    ai: {
      expose: 0.2
    },
    global: "faen_global"
  },
  oldxuanfeng: {
    audio: "xuanfeng",
    trigger: {
      player: ["loseAfter"],
      global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"]
    },
    direct: true,
    filter(event2, player2) {
      var evt = event2.getl(player2);
      return evt && evt.es && evt.es.length > 0;
    },
    content() {
      "step 0";
      player.chooseTarget(get.prompt("oldxuanfeng"), function(card, player2, target3) {
        if (target3 == player2) {
          return false;
        }
        return get.distance(player2, target3) <= 1 || player2.canUse("sha", target3, false);
      }).set("ai", function(target3) {
        if (get.distance(player, target3) <= 1) {
          return get.damageEffect(target3, player, player) * 2;
        } else {
          return get.effect(target3, { name: "sha" }, player, player);
        }
      });
      if (result.bool) {
        player.logSkill("oldxuanfeng", result.targets);
        var target2 = result.targets[0];
        var distance = get.distance(player, target2);
        if (distance <= 1 && player.canUse("sha", target2, false)) {
          player.chooseControl("出杀", "造成伤害").set("ai", function() {
            return "造成伤害";
          });
          event.target = target2;
        } else if (distance <= 1) {
          target2.damage();
          event.finish();
        } else {
          player.useCard({ name: "sha", isCard: true }, target2, false).animate = false;
          game.delay();
          event.finish();
        }
      } else {
        event.finish();
      }
      var target2 = event.target;
      if (result.control == "出杀") {
        player.useCard({ name: "sha", isCard: true }, target2, false).animate = false;
        game.delay();
      } else {
        target2.damage();
      }
    },
    ai: {
      effect: {
        target(card, player2, target2, current) {
          if (get.type(card) == "equip") {
            return [1, 3];
          }
        }
      },
      reverseEquip: true,
      noe: true
    }
  }
};
const translates = {
  old_zhangxingcai: "旧张星彩",
  old_zhangxingcai_prefix: "旧",
  old_xusheng: "旧徐盛",
  old_xusheng_prefix: "旧",
  old_lingtong: "旧凌统",
  old_lingtong_prefix: "旧",
  old_zhuran: "旧朱然",
  old_zhuran_prefix: "旧",
  old_caoxiu: "旧曹休",
  old_caoxiu_prefix: "旧",
  old_caozhen: "旧曹真",
  old_caozhen_prefix: "旧",
  old_maliang: "旧马良",
  old_maliang_prefix: "旧",
  old_chenqun: "旧陈群",
  old_chenqun_prefix: "旧",
  old_zhuhuan: "旧朱桓",
  old_zhuhuan_prefix: "旧",
  old_zhuzhi: "旧朱治",
  old_zhuzhi_prefix: "旧",
  old_zhugezhan: "旧诸葛瞻",
  old_zhugezhan_prefix: "旧",
  yuji: "旧于吉",
  yuji_prefix: "旧",
  old_zhangfei: "新杀张飞",
  old_zhangfei_prefix: "新杀",
  old_huatuo: "OL华佗",
  old_huatuo_prefix: "OL",
  old_guanyu: "旧关羽",
  old_guanyu_prefix: "旧",
  ol_zhuran: "OL朱然",
  ol_zhuran_prefix: "OL",
  old_fuhuanghou: "旧伏寿",
  old_fuhuanghou_prefix: "旧",
  old_caochong: "旧曹冲",
  old_caochong_prefix: "旧",
  old_guanqiujian: "旧毌丘俭",
  old_guanqiujian_prefix: "旧",
  old_wangyun: "旧王允",
  old_wangyun_prefix: "旧",
  old_zhaoyun: "新杀赵云",
  old_zhaoyun_prefix: "新杀",
  ol_huaxiong: "旧华雄",
  ol_huaxiong_prefix: "旧",
  old_xiaoqiao: "旧小乔",
  old_xiaoqiao_prefix: "旧",
  old_wanglang: "旧王朗",
  old_wanglang_prefix: "旧",
  old_wangyi: "旧王异",
  old_wangyi_prefix: "旧",
  xin_yujin: "节钺于禁",
  xin_yujin_prefix: "节钺",
  re_yujin: "毅重于禁",
  re_yujin_prefix: "毅重",
  old_guhuo: "蛊惑",
  old_guhuo_info: "你可以扣置一张手牌当做一张基本牌或普通锦囊牌使用或打出，体力值不为0的其他角色依次选择是否质疑。然后，若有质疑的角色，你展示此牌：若为假，此牌作废，这些角色摸一张牌；若为真，这些角色失去1点体力，且若此牌不为♥，此牌作废。",
  old_guhuo_guess: "蛊惑",
  old_jijun: "集军",
  old_jijun_info: "出牌阶段，你可以将任意张手牌置于武将牌上，称为“方”。",
  old_fangtong: "方统",
  old_fangtong_info: "锁定技。结束阶段，若你的“方”数目不小于36，则以你的阵营胜利结束本局游戏。",
  old_zuilun: "罪论",
  old_zuilun_info: "出牌阶段，你可以获得一名其他角色的一张牌（手牌、装备区各一次），然后该角色摸一张牌。",
  old_fuyin: "父荫",
  old_fuyin_info: "锁定技。若你的装备区里没有防具牌，你不能成为手牌数不小于你的其他角色使用【杀】、【决斗】或【火攻】的目标。",
  oldanxu: "安恤",
  oldanxu_info: "出牌阶段限一次。你可以选择手牌数不相等的两名其他角色，其中手牌少的角色获得手牌多的角色的一张手牌并展示之，然后若此牌不为黑桃，你摸一张牌。",
  oldfaen: "法恩",
  oldfaen_info: "当一名角色翻面或横置后，你可以令其摸一张牌。",
  oldxuanfeng: "旋风",
  oldxuanfeng_info: "当你失去装备区里的牌后，你可以选择一项：1.视为对一名其他角色使用一张【杀】；2.对一名距离为1的角色造成1点伤害。",
  ol_yuanshu: "旧袁术",
  ol_yuanshu_prefix: "旧",
  fazheng: "旧法正",
  fazheng_prefix: "旧",
  junk_simayi: "旧晋司马懿",
  junk_simayi_prefix: "旧晋",
  madai: "旧马岱",
  madai_prefix: "旧",
  old_yangzhi: "旧杨芷",
  old_yangzhi_prefix: "旧",
  old_yangyan: "旧杨艳",
  old_yangyan_prefix: "旧",
  old_caorui: "旧曹叡",
  old_caorui_prefix: "旧",
  oldmingjian: "明鉴",
  oldmingjian_info: "出牌阶段开始前，你可以跳过此阶段并将所有手牌交给一名其他角色。若如此做，你结束当前回合，然后其获得一个额外的回合（仅包含出牌阶段）。",
  old_handang: "旧韩当",
  old_handang_prefix: "旧",
  oldgongji: "弓骑",
  oldgongji_info: "你可以将一张装备牌当做无距离限制的【杀】使用或打出。",
  oldjiefan: "解烦",
  oldjiefan_info: "当一名角色A于你的回合外处于濒死状态时，你可以对当前回合角色使用一张【杀】。当此【杀】造成伤害时，你防止此伤害，视为对A使用一张【桃】。",
  old_gaoshun: "旧高顺",
  old_gaoshun_prefix: "旧",
  old_liubiao: "旧刘表",
  old_liubiao_prefix: "旧",
  oldre_liubiao: "RE刘表",
  oldre_liubiao_prefix: "RE",
  oldzishou: "自守",
  oldzishou_info: "摸牌阶段，若你已受伤，你可令额定摸牌数+X（X为你已损失的体力值），然后跳过下一个出牌阶段。",
  old_huanghao: "旧黄皓",
  old_huanghao_prefix: "旧",
  oldqinqing: "寝情",
  oldqinqing_info: "结束阶段，你可以选择一名攻击范围内含有主公的其他角色，然后你弃置该角色的一张牌（无牌则不弃），并令其摸一张牌。若该角色的手牌数大于主公，你摸一张牌。",
  oldhuisheng: "贿生",
  oldhuisheng_info: "每名角色限一次。当你受到其他角色对你造成的伤害时，你可以令其观看你任意数量的牌并令其选择一项：1.获得这些牌中的一张并防止此伤害；2.弃置等量的牌。",
  old_dingfeng: "旧丁奉",
  old_dingfeng_prefix: "旧",
  new_caoren: "旧曹仁",
  new_caoren_prefix: "旧",
  old_liyan: "旧李严",
  old_liyan_prefix: "旧",
  old_chendao: "旧陈到",
  old_chendao_prefix: "旧",
  old_caocao: "旧神曹操",
  old_caocao_prefix: "旧神",
  junkguixin: "归心",
  junkguixin_info: "回合结束时，你可以选择一项：①获得剩余武将牌堆的所有主公技的其中一个技能；②更改一名其他角色的势力。",
  old_caochun: "旧曹纯",
  old_caochun_prefix: "旧",
  old_guanyinping: "旧关银屏",
  old_guanyinping_prefix: "旧",
  panfeng: "旧潘凤",
  panfeng_prefix: "旧",
  old_shixie: "旧士燮",
  old_shixie_prefix: "旧",
  old_wuyi: "旧吴懿",
  old_wuyi_prefix: "旧",
  one_dc_sp_machao: "牢SP马超",
  one_dc_sp_machao_prefix: "牢|SP",
  two_dc_sp_machao: "牢SP马超",
  two_dc_sp_machao_prefix: "牢|SP",
  cx_majun: "传械马钧",
  cx_majun_ab: "牢马钧",
  cx_majun_prefix: "牢",
  qq_majun: "奇巧马钧",
  qq_majun_ab: "牢马钧",
  qq_majun_prefix: "牢",
  xj_peixiu: "牢裴秀",
  xj_peixiu_prefix: "牢",
  hr_wufu: "牢伍孚",
  hr_wufu_prefix: "牢",
  new_simayi: "牢神司马懿",
  new_simayi_prefix: "牢|神",
  junk_sunquan: "牢神孙权",
  junk_sunquan_prefix: "牢|神",
  ol_baosanniang: "牢鲍三娘",
  ol_baosanniang_prefix: "牢",
  x_yao_yuanshu: "牢爻袁术",
  x_yao_yuanshu_prefix: "牢|爻",
  yao_yaoyi: "爻疑",
  yao_yaoyi_tag: "invisible",
  yao_yaoyi_info: "锁定技。①你的起始手牌背置。②每回合每种牌名限一次，你可以将一张背置的牌当作任意基本牌或普通锦囊牌使用或打出。",
  yao_chenwei: "谶纬",
  yao_chenwei_info: "转换技。当你使用背置牌时，你可以，阳：令一名角色将你的一张手牌翻面；阴：获得一名其他角色的一张牌并将此牌背置。",
  sy_baosanniang: "手杀牢鲍三娘",
  sy_baosanniang_prefix: "手杀|牢",
  fx_baosanniang: "芳许鲍三娘",
  fx_baosanniang_ab: "手杀牢鲍三娘",
  fx_baosanniang_prefix: "手杀|牢",
  x_dc_zhangqiying: "新杀牢张琪瑛",
  x_dc_zhangqiying_prefix: "新杀|牢",
  two_yj_puyuan: "牢SP蒲元",
  two_yj_puyuan_prefix: "牢|SP",
  two_yj_tengjia: "牢藤甲男孩",
  two_yj_tengjia_prefix: "牢",
  two_yj_hanbing: "牢寒冰剑少女",
  two_yj_hanbing_prefix: "牢",
  chegu: "彻骨",
  chegu_info: "你于回合内使用非装备牌指定目标时，可以取消此牌的全部目标并选择一项：1.弃置一名角色至多[2]张牌；2.弃置至多[2]名角色各一张牌。然后若以此法弃置的牌颜色或类型均相同，本回合此技能[]中的数值均+1。",
  jianrou: "剑柔",
  jianrou_info: "每轮限一次，你受到伤害时，可以弃置两张牌并防止此伤害。若你以此法弃置的牌颜色或类型相同，你摸一张牌并令此技能视为未发动过。"
};
const characterTitles = {
  //two_yj_hanbing: "",
  //two_yj_tengjia: "",
  old_zhangxingcai: "将门红妆",
  old_xusheng: "奋身御前",
  old_lingtong: "豪情烈胆",
  old_zhuran: "猇亭之战",
  old_caoxiu: "下辨扬威",
  old_caozhen: "霜雷之威",
  old_maliang: "白眉智士",
  old_chenqun: "动仗名义",
  old_zhuhuan: "飞刀制敌",
  old_zhuzhi: "安国将军",
  old_zhugezhan: "决战邓艾",
  yuji: "太平道人",
  old_zhangfei: "智擒严颜",
  old_huatuo: "药坛圣手",
  old_guanyu: "军神封侯",
  old_fuhuanghou: "孤注一掷",
  old_caochong: "资优神童",
  old_guanqiujian: "攻破东川",
  old_wangyun: "连计将成",
  old_zhaoyun: "武动乾坤",
  ol_huaxiong: "魔将",
  old_xiaoqiao: "花好月圆",
  old_wanglang: "骧龙御宇",
  old_wangyi: "决意的巾帼",
  xin_yujin: "讨暴坚垒",
  re_yujin: "坚毅果敢",
  ol_yuanshu: "见玺心悦",
  fazheng: "蜀汉的辅翼",
  junk_simayi: "三狼吞魏",
  //这个其实是神司马懿的皮肤
  madai: "平北将军",
  old_yangzhi: "妍芷艳质",
  old_yangyan: "妍芷艳质",
  old_caorui: "勤于朝政",
  old_handang: "冠军太守",
  old_gaoshun: "攻无不克",
  old_liubiao: "跨蹈汉南",
  oldre_liubiao: "外宽内忌",
  old_huanghao: "恃权贪贿",
  old_dingfeng: "清侧重臣",
  new_caoren: "神勇可撼",
  old_liyan: "督运粮草",
  old_chendao: "白毦统领",
  old_caocao: "挟汉临诸夏",
  old_caochun: "长坂败备",
  old_guanyinping: "将门虎女",
  panfeng: "联军上将",
  old_shixie: "雄长一州",
  old_wuyi: "高昂果劲",
  one_dc_sp_machao: "杵枪摧敌",
  two_dc_sp_machao: "咬牙切齿",
  cx_majun: "名巧天下",
  qq_majun: "名巧天下",
  xj_peixiu: "玄静守真",
  hr_wufu: "忠虹贯日",
  new_simayi: "权控三势",
  junk_sunquan: "历战年兽",
  //这个是标孙权的皮肤
  ol_baosanniang: "翩若游凤",
  old_manchong: "严刑峻法",
  old_yj_jushou: "献策不绝"
};
const characterIntro = {};
const characterFilters = {};
const dynamicTranslates = {
  chegu(player2, skill) {
    const info = lib.translate[`${skill}_info`], num = 2 + player2.countMark(`${skill}_effect`);
    return info.replaceAll("[2]", `[${num}]`);
  },
  yao_chenwei(player2, skill) {
    const bool = player2.storage[skill];
    let str1 = "阳：令一名角色将你的一张手牌翻面";
    let str2 = "获得一名其他角色的一张牌并将此牌背置";
    if (bool) {
      str2 = `<span class="bluetext">${str2}</span>`;
    } else {
      str1 = `<span class="firetext">${str1}</span>`;
    }
    return `转换技。当你使用背置牌时，你可以，${str1}；阴：${str2}。`;
  }
};
const voices = {
  "#kuangfu1": "这家伙还是给我用吧！",
  "#kuangfu2": "吾乃上将潘凤，可斩华雄！",
  "#panfeng:die": "潘凤又被华雄斩啦……",
  "#new_reyaowu_ol_huaxiong1": "别得意的太早。",
  "#new_reyaowu_ol_huaxiong2": "黄毛小儿，就这两下子吗？",
  "#chulao1": "病入膏肓，需下猛药。",
  "#chulao2": "病去，如抽丝。",
  "#leiji1": "雷公助我！",
  "#leiji2": "以我之真气，合天地之造化！",
  "#guidao1": "哼哼哼哼~",
  "#guidao2": "天下大势，为我所控。",
  "#kuanggu1": "我会怕你吗！",
  "#kuanggu2": "真是美味啊！",
  "#duanliang11": "截其源，断其粮，贼可擒也。",
  "#duanliang12": "人是铁，饭是钢。",
  "#liegong1": "百步穿杨！",
  "#liegong2": "中！",
  "#xiemu1": "暴戾之气，伤人害己。",
  "#xiemu2": "休要再起战事！",
  "#naman1": "慢着，让我来！",
  "#naman2": "弃暗投明，光耀门楣。",
  "#old_maliang:die": "皇叔为何不听我之言？",
  "#youdi1": "无名小卒，可敢再前进一步！",
  "#youdi2": "予以小利，必有大获。",
  "#old_zhuhuan:die": "这巍巍巨城，吾竟无力撼动……",
  "#xinzhan1": "吾通晓兵法，世人皆知。",
  "#xinzhan2": "用兵之道，攻心为上。",
  "#huilei1": "丞相视某如子，某以丞相为父。",
  "#huilei2": "谡愿以死安大局。",
  "#oldzhenlie1": "我，绝不屈服！",
  "#oldzhenlie2": "休要小看妇人志气！",
  "#oldmiji1": "我将尽我所能！",
  "#oldmiji2": "奇谋，只在绝境中诞生！",
  "#old_wangyi:die": "忠义已尽，死又何妨？",
  "#oldqianxi1": "伤其十指，不如断其一指！",
  "#oldqianxi2": "斩草除根，除恶务尽！",
  "#madai:die": "反骨贼已除，丞相放心……",
  "#mengjin1": "你，可敢挡我？",
  "#mengjin2": "我要杀你们个片甲不留！",
  "#pangde:die": "四面都是水，我命休矣……",
  "#enyuan1": "滴水之恩，涌泉以报。",
  "#enyuan2": "得人恩果千年记。",
  "#enyuan3": "睚眦之怨，无不报复。",
  "#enyuan4": "谁敢得罪我？",
  "#xuanhuo1": "给你的，十倍奉还给我。",
  "#xuanhuo2": "重用许靖，以眩远近。",
  "#fazheng:die": "蜀翼既折，蜀汉哀矣……",
  "#yizhong1": "不先为备，何以待敌？",
  "#yizhong2": "稳重行军，百战不殆！",
  "#xin_yujin:die": "呃，晚节不保……",
  "#xiahouyuan:die": "竟然……比我还……快……",
  "#weiyan:die": "谁敢杀我？！呃啊……",
  "#xuhuang:die": "一顿不吃，饿得慌……",
  "#huangtian2_zhangjiao1": "岁在甲子，天下大吉！",
  "#huangtian2_zhangjiao2": "苍天已死，黄天当立！",
  "#zhangjiao:die": "黄天，也死了……",
  "#wuyan1": "唉，一切尽在不言中。",
  "#wuyan2": "嘘，言多必失啊。",
  "#jujian1": "将军岂愿抓牌乎？",
  "#jujian2": "我看好你！",
  "#xushu:die": "娘……孩儿不孝……向您……请罪……",
  "#old_guhuo1": "你信吗？",
  "#old_guhuo2": "猜猜看哪~",
  "#yuji:die": "竟然……被猜到了……",
  "#old_fuhun1": "呐喊破敌，锐不可挡！",
  "#old_fuhun2": "匹夫之勇，插标卖首！",
  "#wusheng_old_guanzhang": "武圣之名，威震华夏！",
  "#paoxiao_old_guanzhang": "杀呀！",
  "#old_guanzhang:die": "父亲，我来了……",
  "#huangzhong:die": "不得不服老啦~"
};
const characterSort = {
  old_standard: ["ol_yuanshu"],
  old_shenhua: ["old_caocao", "yuji", "zhangjiao", "old_zhugezhan", "old_guanqiujian", "xiahouyuan", "weiyan", "old_xiaoqiao", "pangde", "xuhuang", "huangzhong", "new_caoren", "old_chendao"],
  old_refresh: ["old_zhangfei", "old_huatuo", "old_zhaoyun", "ol_huaxiong", "old_guanyu"],
  old_yijiang1: ["masu", "xushu", "xin_yujin", "old_xusheng", "old_lingtong", "fazheng", "old_gaoshun", "re_yujin"],
  old_yijiang2: ["old_zhonghui", "madai", "old_handang", "old_liubiao", "oldre_liubiao", "old_guanzhang", "old_wangyi"],
  old_yijiang3: ["liru", "old_zhuran", "old_fuhuanghou", "old_caochong"],
  old_yijiang4: ["old_caozhen", "old_chenqun", "old_zhuhuan", "old_caorui", "old_wuyi"],
  old_yijiang5: ["old_caoxiu", "old_zhuzhi"],
  old_yijiang67: ["old_huanghao", "old_liyan"],
  old_sp: ["old_shixie", "panfeng", "old_wanglang", "old_maliang", "old_zhangxingcai", "old_wangyun", "old_dingfeng", "old_guanyinping"],
  old_online: ["junk_simayi", "old_yangyan", "old_yangzhi", "junk_sunquan", "ol_baosanniang"],
  old_decade: ["two_yj_hanbing", "two_yj_tengjia", "x_yao_yuanshu", "hr_wufu", "xj_peixiu", "qq_majun", "cx_majun", "one_dc_sp_machao", "two_dc_sp_machao", "x_dc_zhangqiying", "two_yj_puyuan"],
  old_mobile: ["old_caochun", "new_simayi", "fx_baosanniang", "sy_baosanniang"]
};
const characterSortTranslate = {
  old_standard: "标准包",
  old_shenhua: "神话再临",
  old_refresh: "界限突破",
  old_yijiang1: "一将成名2011",
  old_yijiang2: "一将成名2012",
  old_yijiang3: "一将成名2013",
  old_yijiang4: "一将成名2014",
  old_yijiang5: "一将成名2015",
  old_yijiang67: "原创设计",
  old_sp: "SP",
  old_online: "Online",
  old_decade: "十周年",
  old_mobile: "移动版"
};
game.import("character", function() {
  return {
    name: "old",
    connect: true,
    character: { ...characters },
    characterSort: {
      old: characterSort
    },
    characterFilter: { ...characterFilters },
    characterTitle: { ...characterTitles },
    dynamicTranslate: { ...dynamicTranslates },
    characterIntro: { ...characterIntro },
    card: { ...cards$1 },
    skill: { ...skills },
    translate: { ...translates, ...voices, ...characterSortTranslate },
    pinyins: { ...pinyins }
  };
});

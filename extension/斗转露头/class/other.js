import { lib, game, ui, get, ai, _status } from "../../../noname.js";
export class Other {
  static addSkill() {
   
  }
  static subscribe() {
    xydzxy.setDcdLoutou = (node, style) => {
      if (style == 'none') {
        // node.style.height = '100%';
        // node.style.clipPath = 'none';
        node.dataset.loutou = 'none';
      }
      else if (style == 'shousha') {
        node.dataset.loutou = 'shousha';
      }
      else if (style == 'shizhounian') {
        node.dataset.loutou = 'shizhounian';
        // node.style.height = '183px';
        // node.style.clipPath = 'url(#duol-clip)';
        // node.style.webkitClipPath = 'url(#duol-clip)';
      }
    };
    //先简单处理
    //调整对局武将露头
    // if (lib.config[`${xydzxy.dz}gameloutou`]) {
    //   lib.announce.subscribe("qhlyChangeSkin", (data) => {
    //     //武将名 data.characterName
    //     //皮肤名 data.skinName
    //     let name = data.characterName;
    //     let name2 = name;
    //     //关于国战武将特别配置。
    //     if (name2.indexOf('gz_') < 0) {
    //       name2 = 'gz_' + name2;
    //     } else {
    //       name2 = name.slice(3);
    //     }

    //     var players = game.players;
    //     if (players) {
    //       players = players.slice(0);
    //     }
    //     if (game.dead) {
    //       players = players.concat(game.dead);
    //     }
    //     players = players.filter(function (player) {
    //       if (player.name1 == name || player.name2 == name) {
    //         return true;
    //       }
    //       return player.name1 == name2 || player.name2 == name2;
    //     });
    //     if (!players.length) return;

    //     for (var player of players) {
    //       if (player.name1 == name || player.name1 == name2) {
    //         if (data.skinName) {
    //           let loutou = xydzxy.getCharData(player.name1, 'skinloutou', true);
    //           xydzxy.setDcdLoutou(player.node.avatar, loutou);
    //         } else {
    //           let loutou = xydzxy.getCharData(player.name1, 'loutou', true);
    //           xydzxy.setDcdLoutou(player.node.avatar, loutou);
    //         }
    //       }
    //       else if (player.name2 == name || player.name2 == name2) {
    //         if (data.skinName) {
    //           let loutou = xydzxy.getCharData(player.name2, 'skinloutou', true);
    //           xydzxy.setDcdLoutou(player.node.avatar2, loutou);
    //         } else {
    //           let loutou = xydzxy.getCharData(player.name2, 'loutou', true);
    //           xydzxy.setDcdLoutou(player.node.avatar2, loutou);
    //         }
    //       }
    //     }
    //   });
    // }//if
  }
 
}



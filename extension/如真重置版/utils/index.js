import { lib, game, ui, get, ai, _status } from "../../../noname.js";
export const EXTENSION_NAME = "如真重置版";

export const baseUrl = `${lib.assetURL}extension/${EXTENSION_NAME}/`;

export const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

export async function loadScript(src) {
  if (document.querySelector(`script[src="${src}"]`)) {
    return;
  }
  await lib.init.promises.js(src);
  return;
}
export async function getFloders(url) {
  return new Promise((resolve, reject) => {
    game.getFileList(url, resolve, reject); // 初始化文件列表
  });
}
/**
 * 段位表
 * index大段标识 levels每个大段有多少小段 starsPerLevel每小段多少星 score达到时保分 maxScore最大保护分
 */
export const gradeList = [
  {
    index: 1,
    id: "qingtong",
    name: "青铜",
    levels: 3,
    starsPerLevel: 3,
    score: 150,
    maxScore: 300,
  },
  {
    index: 2,
    id: "baiyin",
    name: "白银",
    levels: 4,
    starsPerLevel: 4,
    score: 200,
    maxScore: 350,
  },
  {
    index: 3,
    id: "huangjin",
    name: "黄金",
    levels: 5,
    starsPerLevel: 5,
    score: 240,
    maxScore: 400,
  },
  {
    index: 4,
    id: "feicui",
    name: "翡翠",
    levels: 5,
    starsPerLevel: 5,
    score: 270,
    maxScore: 450,
  },
  {
    index: 5,
    id: "dashi",
    name: "大师",
    levels: 5,
    starsPerLevel: 5,
    score: 300,
    maxScore: 500,
  },
  {
    index: 6,
    id: "chuanshuo",
    name: "传说",
    levels: 5,
    starsPerLevel: 5,
    score: 385,
    maxScore: 550,
  },
];
/**防抖 */
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = null;
    }, delay);
  };
}
/**节流 */
export function throttle(func, delay) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      func.apply(this, args);
      lastTime = now;
    }
  };
}
export function getUserName() {
  let userInfo = sessionStorage.getItem("userInfo");
  let username = lib.config.connect_nickname;
  if (userInfo) {
    userInfo = JSON.parse(userInfo);
    if (userInfo.username.length > 6) {
      userInfo.username = userInfo.username.slice(0, 6) + "...";
    }
    if (userInfo.username) {
      username = userInfo.username;
    }
  }
  return username;
}
window._getRzczUserName = getUserName;

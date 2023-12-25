import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "文档",
    icon: "book",
    prefix: "/docs/",
    children: [
      {
        text: "",
        icon: "book",
        children: ["intro", "mappool", "rules"],
      },
    ],
  },
  "/memory/",
  {
    text: "Yumu Site",
    icon: "robot",
    link: "https://bot.365246692.xyz",
  },
  {
    text: "Yumu Docs",
    icon: "book",
    link: "https://docs.365246692.xyz",
  },
  {
    text: "osu!",
    icon: "gamepad",
    link: "https://osu.ppy.sh",
  },
  {
    text: "比赛歌单",
    icon: "music",
    link: "https://music.163.com/#/playlist?id=8069538335",
  }, {
    text: "加入赛群",
    icon: "comment",
    link:"http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Jf7U5QwUvr38DnVL8ia8liJy6GRw9NSp",
  }
]);

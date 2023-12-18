import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "文档",
    icon: "book",
    prefix: "/docs/",
    children: [
      {
        text:"",
        icon: "book",
        children: ["intro","mappool"],
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
]);

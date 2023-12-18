import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "文档",
      icon: "book",
      prefix: "docs/",
      children: "structure",
    },
    {
      text: "归档",
      icon: "bookmark",
      prefix: "review/",
      children: "structure",
    },
     {
      text: "回忆",
      icon: "heart",
      prefix: "memory/",
      children: "structure",
    },
    {
      text: "关于",
      icon: "circle-info",
      prefix: "about/",
      children: "structure",
    },
  ],
});

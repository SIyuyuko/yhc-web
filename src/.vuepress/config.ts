import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  base: "/",
  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Yuyuko's Hidden Cup",
      description: "vuepress-theme-hope 的文档演示",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
  },
  

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  // plugins: [
  //   componentsPlugin({
  //   "components":["VPCard","VPBanner"]
  //   })
  // ],
});

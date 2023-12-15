import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  base: "/yhc-web/",
  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Yuyuko's Hidden Cup",
      description: "YHC官方网站",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
  },
  

  theme,

  head: [
    [
      "link",
      {
        href: "/assets/font/AlibabaPuHuiTi-3-55-Regular.ttf",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "/assets/font/Torus-SemiBold.ttf",
        rel: "stylesheet",
      },
    ],
    
  ],


  // Enable it with pwa
  // shouldPrefetch: false,
  // plugins: [
  //   componentsPlugin({
  //   "components":["VPCard","VPBanner"]
  //   })
  // ],
});

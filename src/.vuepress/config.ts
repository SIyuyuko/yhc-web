import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  base: "/yhc-web/",
  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Yuyuko's Hidden Cup",
      description: "Yuyuko's Hidden Cup Official",
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
        href: "/yhc-web/assets/font/AlibabaPuHuiTi-3-55-Regular.ttf",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "/yhc-web/assets/font/Torus-SemiBold.ttf",
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

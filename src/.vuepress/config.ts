import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

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

  alias: {
    "@countDown":path.resolve(__dirname, "components/countDown.vue"),
  }


  // Enable it with pwa
  // shouldPrefetch: false,
  
});

import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "@vuepress/utils";
import metingPlugin from "vuepress-plugin-meting2";
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'

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
  },


  // Enable it with pwa
  // shouldPrefetch: false,
  plugins: [
    //meting：https://github.com/OrageKK/vuepress-plugin-meting2#readme
    metingPlugin({
      metingOptions: {
        global:true, // 开启关闭全局播放器
        server: "netease",
        api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r",
        type: "playlist",
        mid: "8069538335",
        aplayerOptions: {
        autoplay: 'false',
        order: 'random',
        volume:0.2
      },
      },
    }),
    externalLinkIconPlugin({
      
    })
  ],
  markdown:{
    links:{
      externalAttrs:{
        
      }
    }
  }
  
});

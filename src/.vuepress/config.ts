import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
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
    
  ],

  alias: {
    "@countDown": path.resolve(__dirname, "components/countDown.vue"),
    "@mapPool": path.resolve(__dirname, "components/mapPool.vue"),
    "@bracket": path.resolve(__dirname, "components/bracket.vue"),
    "@dataApi": path.resolve(__dirname, "api/data_api.js"),
    "@mappoolUtil": path.resolve(__dirname, "utils/mappool.js"),
  },

  port: 5173,

  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          "/pub": {
            target: "https://bot.365246692.xyz/pub",
            changeOrigin: true,
            // rewrite: (path) => path.replace(/^\/pub/, ""),
          },
        }
      }
    }
  }),

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

import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";
import { componentsPlugin } from "vuepress-plugin-components";

export default hopeTheme({
  hostname: "https://siyuyuko.github.io/",

  navbar: false,

  author: {
    name: "SIyuyuko",
    url: "https://osu.ppy.sh/users/9794030",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  logoDark:"/logoDark.svg",

  repo: "SIyuyuko/yhc-web",

  docsDir: "src",

  docsBranch:"master",

  locales: {
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: false,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: false,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    // You should generate and use your own comment service
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    components: {
      components: ["VPBanner", "VPCard", "VidStack", "YouTube",],
      rootComponents: {
        notice: [
          {
            path: "/docs/mappool",
            title: "提示",
            content: "谱面示例视频需要切换VPN才能观看",
            actions: [
              // {
              //   text: "Primary Action",
              //   link: "",
              //   type: "primary",
              // },
              { text: "好的" },
            ],
            fullscreen: false,
            confirm: false,
            showOnce:false,
          },
          {
            path: "/about/",
            title: "欢迎加入",
            content: "点击下方按钮加入交流群👇",
            actions: [
              {
                text: "YHC赛群",
                link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Jf7U5QwUvr38DnVL8ia8liJy6GRw9NSp",
                type: "primary",
              },
              { text: "osu!新人群",
                link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Djk6kWsVekla1K-rmKznhmW4QxKahu8o",
             },
            ],
            fullscreen: false,
            confirm: true,
            showOnce:false,
          },
        ]
      },
    },
    // blog: {
    //   hotReload: true,
    // },
    blog: false,
    
    photoSwipe: {}


    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },

  blog: {
    name: "Yuyuko's Hidden Cup",    
  }
});

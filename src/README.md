---
home: true
icon: home
title: 主页
# bgImage: https://files.catbox.moe/d0s6zz.png
# bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroFullScreen: true
heroText: Yuyuko's Hidden Cup Season 4
tagline: 即将启动
actions:
  - text: 点击报名 🖤
    link: https://docs.qq.com/form/page/DUlFaYW1YbkFIUFhk
    type: primary

  - text: 比赛介绍
    link: ./docs/intro
---
<countDown />
<script setup lang="ts">
import countDown from "@countDown";
</script>

---
title: 团队赛
author: SIyuyuko
date: 2023-12-20
order: 3
category: 
  - 归档
tag: 
  - 比赛
---

## 总览

团队赛为 YHC S1 赛程的第二个阶段，共两个图池。

<!-- more -->

## 图池

- 每个图池都拥有固定的 3 个模组池：No Mod、Hidden、FreeMod。

- 图池所含的赛图数量：
团队赛第一轮：12 张谱面：6 HD、2 NM、4 FM、1 TB
团队赛第二轮：13 张谱面：6 HD、2 NM、4 FM、1 TB、1 EX

:::tip 赛季限定

DT 在 S2 时才引入，故 S1 没有 DoubleTime 模组池。

EX 为 S1 表演图，在团队赛二轮结束后游玩，任意模组，ScoreV1 计分。

:::

### 团队赛第一轮

<Mappool :mapData="poolList.pool1"></Mappool>

### 团队赛第二轮

<Mappool :mapData="poolList.pool2"></Mappool>

<button v-if="flag" @click="downloadJsonFile(poolList,poolName)">下载json</button>

## 规则

- 团队赛为 3v3 单败赛。

- 团队赛第一轮前通过抽签决定对阵小队，第一轮比赛胜利的两支队伍将直接进入第二轮。

<script setup>
import { ref,onBeforeMount } from 'vue';
import Mappool from '@mapPool';
import { loadJson,downloadJsonFile } from '@mappoolUtil';
let poolList=ref({
  pool1:{
    sets:[],
    data:[],
    status:{
      isLoading:true,
      title:"YHC S1 团队赛第一轮图池",
    },
    src:"HD 1370703 147370 2003640 2204492 3310401 691112 NM 3163222 2551294 FM 1951094 1352167 1052460 221677 TB 2295609",
  },
  pool2:{
    sets:[],
    data:[],
    status:{
      isLoading:true,
      title:"YHC S1 团队赛第二轮图池",
    },
    src:"HD 1582583 2037327 1848332 3067288 1205989 1625011 NM 2809461 2601642 FM 3503281 2875377 1630902 2573530 TB 2168358 EX 1725174",
  },
});
let poolName="s1mappool";
let flag=ref(false);

onBeforeMount(()=>{
  // Json文件存在时显式赋值poolList，否则直接调用方法
  poolList.value = loadJson(poolList,poolName,flag);;
});
</script>

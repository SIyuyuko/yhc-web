<!-- 
 * @description: 首页倒计时组件
 * @fileName: countDown.vue 
 * @author: SIyuyuko 
 * @date: 2023-12-19 13:25:49
 * @others: 
!-->
<template>
	<div class="count-down">
		<h1 class="title">{{ title }}</h1>
		<h1 class="bar">还剩 {{ days }} 天 {{ hrs }} 小时 {{ mins }} 分 {{ secs }} 秒</h1>
	</div>
</template>

<script setup name="countDown">
import { ref, onMounted, onBeforeMount } from 'vue';
let title = ref('距离 S4 报名');
let week = ref('');
let date_show = ref('');
let time_show = ref('');
let days = ref('');
let hrs = ref('');
let mins = ref('');
let secs = ref('');

//未来某天的倒计时
function futureDay() {
	// 1、获取未来的日期
	// 2、获现在的时间
	// 3、未来的日期➖现在的时间
	// 4、得到相减的结果，换算为，天-小时-分钟-秒
	// 5、每隔1秒获取一次，直至相减为0（需自己做限制）
	const end = Date.parse(new Date('2024-01-05 00:00:00'));
	const now = Date.parse(new Date());
	const msec = end - now;
	let day = parseInt(msec / 1000 / 60 / 60 / 24);
	let hr = parseInt(msec / 1000 / 60 / 60 % 24);
	let min = parseInt(msec / 1000 / 60 % 60);
	let sec = parseInt(msec / 1000 % 60);
	days.value = day;
	hrs.value = hr > 9 ? hr : '0' + hr;
	mins.value = min > 9 ? min : '0' + min;
	secs.value = sec > 9 ? sec : '0' + sec;
}

//获取当前系统的的日期
function getdataTime() {
	let wk = new Date().getDay()
	let yy = new Date().getFullYear();
	let mm = new Date().getMonth() + 1;
	let dd = new Date().getDate();
	let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
	week.value = weeks[wk];
	date_show.value = yy + "年" + mm + "月" + dd + "日";
};
// 获取当前系统的时间
function getnewTime() {
	let hh = new Date().getHours();
	let mf = new Date().getMinutes() < 10
		? "0" + new Date().getMinutes()
		: new Date().getMinutes();
	let ss = new Date().getSeconds() < 10
		? "0" + new Date().getSeconds()
		: new Date().getSeconds();
	time_show.value = hh + ":" + mf + ":" + ss;
};
onMounted(() => {
	futureDay();
	let refresh = setInterval(() => {
		if (secs.value.toString().includes("-")) {
			clearTimeout(refresh);
			secs.value = "00";
			title.value = "S4 is Coming";
		} else {
			futureDay();
		}
	}, 1000);
});
</script>

<style lang="scss" scoped>
.count-down {
	text-align: center;
	.title{
		font-size: 2.2rem;
	}
	.bar{
		font-size: 1.8rem;
	}
	text-shadow:#A8A8A8 1px 0 15px ;
}
</style>



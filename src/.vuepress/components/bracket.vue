<!-- 
 * @description: 对阵组件
 * @fileName: bracket.vue 
 * @author: SIyuyuko 
 * @date: 2024-04-22 17:11:15
 * @others: 
!-->
<template>
	<div class="bracket-body">
		<img class="content" :src="prop.src" :alt="prop.name" :style="{ 'width': prop.width+'px', 'height': prop.height + 'px'}" />
	</div>
</template>
<script setup name="Bracket">
const prop = defineProps({
	// 图片地址，支持svg，必填
	src: {
		type: String,
		default:"",
	},
	// 图片名称，必填
	name: {
		type: String,
		default: "",
	},
	// 图片宽度，选填
	width: {
		type: Number,
		default:1000,// 默认宽度
	},
	// 图片高度，选填
	height: {
		type: Number,
		default:565,// 默认高度
	}
})
</script>
<style lang="scss" scoped>
.bracket-body {
	border-radius: 10px;
	overflow-y: auto;
	padding:20px;
	background-color: rgba(237, 237, 237, 0.8);

	.content {
		overflow: auto;
		object-fit: none;
		object-position: 0 0;
		height: 565px;
		max-width: none;
		width: 1000px;
	}

}
</style>
<!-- 
 * @description: 图池组件
 * @fileName: mapPool.vue 
 * @author: SIyuyuko 
 * @date: 2024-04-17 16:09:07
 * @others: 
!-->
<template>
	<div class="pool-body" v-if="!status.isLoading">
		<div class="pool-content">
			<div v-for="(item, index) in mapData" :key="index" class="map-panel"
				:style="{ 'background-image': `url(${imgApi + item.data.beatmapset_id + imgApiSuffix}) ` }">
				<div class="content-mask" @mouseover="">
					<!-- #region 谱面信息 -->
					<div class="content left">
						<span>{{ item.data.beatmapset.title }}</span>
						<span>{{ item.data.beatmapset.artist }} // {{ item.data.beatmapset.creator }}</span>
						<span>{{ item.data.version }} - b{{ item.data.id }}</span>
					</div>
					<div class="content right">
						<div class="tag" :class="item.tag">
							<span>{{ item.tag }}</span>
						</div>
						<div class="star">
							<span>{{ item.data.difficulty_rating }}*</span>
						</div>
					</div>
					<!-- #endregion -->
					<!-- #region 快捷按钮组 -->
					<div class="operate-mask">
						<div class="operate-button-group">
							<div class="website-btn" title="查看官网谱面信息" @click="openBeatmapWebsite(item.data.id)">
								<i class="fa-solid fa-share-from-square"></i>
							</div>
							<div class="copy-btn" title="复制谱面ID" @click="copyBeatmapID(item)">
								<i class="fa-solid fa-copy" v-show="!item.isCopied"></i>
								<i class="fa-solid fa-check" :class="item.isCopied ? 'copied' : ''"
									v-if="item.isCopied"></i>
							</div>
							<div class="download-btn" title="下载该谱面" @click="downloadBeatmap(item.data.beatmapset_id)">
								<i class="fa-solid fa-download"></i>
							</div>
						</div>
					</div>
					<!-- #endregion -->
				</div>

			</div>
		</div>
		<div class="pool-title"><span>{{ status.title }}</span></div>
	</div>
	<div class="pool-body loading" v-else>
		<i class="fa-solid fa-spinner fa-spin"></i>
	</div>
</template>

<script setup name="mapPool">
import { ref, onMounted, watch, defineProps } from 'vue';
let imgApi = ref("https://assets.ppy.sh/beatmaps/");
let imgApiSuffix = ref("/covers/card.jpg");
let beatmapApi = ref("http://osu.ppy.sh/b/");
let beatmapdownloadApi = ref("https://dl.sayobot.cn/beatmaps/download/");
const prop = defineProps({
	mapData: {
		type: Array,
		default: []
	},
	status: {
		type: Object,
		default: {}
	}
});
function openBeatmapWebsite(bid) {
	let url = beatmapApi.value + bid;
	window.open(url, "_blank");
}
function copyBeatmapID(item) {
	let input = document.createElement("input");
	input.value = item.data.id;
	document.body.appendChild(input);
	input.select();
	document.execCommand("Copy");
	input.remove();
	item.isCopied = true;
	setTimeout(() => {
		item.isCopied = false;
	}, 1000);
}
function downloadBeatmap(sid) {
	let url = beatmapdownloadApi.value + sid;
	window.open(url, "_self");
}
onMounted(() => {
	console.log(prop.mapData)
});

</script>

<style lang="scss" scoped>
.pool-body {
	display: flex;
	color: #ffffff;
	justify-content: center;
	row-gap: 20px;
	flex-direction: column;
	background-color: #2a2226;
	border-radius: 10px;
	padding: 20px 0;

	.pool-content {
		display: flex;
		justify-content: center;
		row-gap: 20px;
		column-gap: 20px;
		flex-wrap: wrap;

		.map-panel {
			display: flex;
			border: 1px solid #000000;
			border-radius: 10px;
			background-position: center;
			background-size: cover;
			width: 300px;
			height: 60px;

			.content-mask {

				backdrop-filter: brightness(0.4) blur(0.4px);
				display: flex;
				border-radius: 9px;

				.content {
					display: flex;
					height: -webkit-fill-available;
					flex-direction: column;
				}

				.content.left {
					padding: 5px 10px;
					border-radius: 9px 0 0 9px;
					width: 80%;
					justify-content: space-between;

					span:first-child {
						overflow-x: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						width: 230px;
					}

					span:not(:first-child) {
						font-size: 10px;
						color: rgb(176, 178, 178);
					}
				}

				.content.right {
					justify-content: space-between;
					border-radius: 0 9px 9px 0;
					width: 50px;

					.tag {
						border-radius: 0 9px 0 9px;
						text-align: center;
						width: 47px;
						margin: 0 0 0 auto;
						clip-path: path('M0 0 Q6 2 6 8 Q6 20 20 20 L48 20 L48 0 Z');

						span {
							padding: 0 2px 0 10px;
						}
					}

					.tag.HD {
						background-color: #f9b552;
					}

					.tag.NM {
						background-color: #21ad38;
					}

					.tag.DT {
						background-color: #009fe8;
					}

					.tag.FM {
						background-color: #9922ee;
					}

					.tag.TB {
						background-color: #000000;
					}

					.star {
						margin: 0 5px 5px 10px;
						display: flex;
						justify-content: flex-end;
					}


				}

			}

			.operate-mask {
				visibility: hidden;
				position: absolute;
				width: 100%;
				height: 100%;
				display: flex;
				border-radius: 9px;

				.operate-button-group {
					display: flex;
					width: 100%;
					height: 100%;
					align-items: center;
					text-align: center;
					justify-content: center;
					column-gap: 50px;

					&>div {
						font-size: 18px;
						cursor: pointer;
					}

					&>div:hover {
						color: rgba(176, 178, 178, 0.8);
					}

					&>div:active {
						color: rgb(176, 178, 178);
					}

					.copy-btn {
						i.copied:hover {
							color: #ffffff;
						}

						i.copied:active {
							color: #ffffff;
						}
					}
				}
			}

			.content-mask:hover {
				.operate-mask {
					visibility: visible;
					background-color: rgba(0, 0, 0, 0.6);
					transition: all 0.3s;
				}
			}

		}
	}
	.pool-title{
		text-align: center;
		margin: 0 auto;
		font-size: 0.8rem;
	}
}
.pool-body.loading{
	text-align: center;
}

*>input {
	visibility: hidden;
}
</style>
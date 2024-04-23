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
			<div v-for="(item, index) in data" :key="index" class="map-panel" :class="item.isLast ? 'last' : ''"
				:style="{ 'background-image': `url(${imgApi + item.data.beatmapset_id + imgApiSuffix}) ` }">
				<div class="content-mask" @click="toggleVisible(item)">
					<!-- #region 谱面信息 -->
					<div class="content left">
						<span>{{ item.data.beatmapset.title }}
							<span v-if="item.data.beatmapset.title !== item.data.beatmapset.title_unicode">
								{{ item.data.beatmapset.title_unicode }}</span>
						</span>
						<span>{{ item.data.beatmapset.artist }} // {{ item.data.beatmapset.creator }}</span>
						<span>{{ item.data.version }} - b{{ item.data.id }}</span>
					</div>
					<div class="content right">
						<div class="tag" :class="item.tag">
							<span>{{ item.tag }}</span>
						</div>
						<div class="star">
							<span>{{ item.data.difficulty_rating.toString().split(".")[0] }}<span
									v-if="item.data.difficulty_rating.toString().split('.')[1]">{{ '.' +
										item.data.difficulty_rating.toString().split(".")[1] }}</span>*
							</span>
						</div>
					</div>
					<!-- #endregion -->
					<!-- #region 快捷按钮组 -->
					<div class="operate-mask" :class="item.clicked ? 'clicked' : ''">
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
		<span>loading beatmaps ... ( {{ data.length }} / {{ mapData.sets.length }} )</span>
	</div>
</template>

<script setup name="mapPool">
import { ref, onMounted, watch } from 'vue';
let imgApi = ref("https://assets.ppy.sh/beatmaps/");
let imgApiSuffix = ref("/covers/card.jpg");
let beatmapApi = ref("http://osu.ppy.sh/b/");
let beatmapdownloadApi = ref("https://dl.sayobot.cn/beatmaps/download/");
let data = ref({}); // 图池谱面数据
let status = ref({}); // 图池状态
let clickedItem = ref({}); // 当前被点击谱面
const prop = defineProps({
	mapData: {
		type: Object,
		default: {}
	},
});
// 切换谱面点击状态
function toggleVisible(item) {
	if (item) {
		item.clicked = !item.clicked;// clicked为true时，显示谱面快捷按钮组
		clickedItem.value = item;
	}
}
// 打开谱面官网链接
function openBeatmapWebsite(bid) {
	let url = beatmapApi.value + bid;
	window.open(url, "_blank");
}
// 复制谱面ID
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
// 下载谱面文件
function downloadBeatmap(sid) {
	let url = beatmapdownloadApi.value + sid;
	window.open(url, "_self");
}
// 监听当前点击谱面
watch((clickedItem), (ov, nv) => {
	// 清除上一个谱面的点击状态
	if (ov !== nv) {
		nv.clicked = false;
		ov.clicked = true;
	};
}, { deep: false, immediate: false })

onMounted(() => {
	data.value = prop.mapData.data;
	data.value.map((item) => {
		return Object.assign(item, { clicked: false });// 增加谱面点击状态属性
	});
	status.value = prop.mapData.status;
})

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
	padding: 20px;

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
				width: 100%;
				justify-content: space-between;
				position: relative;

				.content {
					display: flex;
					height: -webkit-fill-available;
					flex-direction: column;
				}

				.content.left {
					padding: 5px 10px;
					border-radius: 9px 0 0 9px;
					width: 100%;
					justify-content: space-between;

					span:first-child {
						span {
							font-size: 10px;
							color: rgb(176, 178, 178);
						}
					}

					span:not(:first-child) {
						font-size: 10px;
						color: rgb(176, 178, 178);
					}

					span {
						overflow-x: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}

				.content.right {
					justify-content: space-between;
					border-radius: 0 9px 9px 0;
					width: 65px;

					.tag {
						border-radius: 0 9px 0 9px;
						text-align: center;
						width: 60px;
						margin: 0 0 0 auto;
						clip-path: path('M0 0 Q6 2 6 8 Q6 20 20 20 L60 20 L60 0 Z');

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

					.tag.EX {
						background-color: #ff9700;
					}

					.star {
						margin: 0 5px 5px 10px;
						display: flex;
						justify-content: flex-end;

						span {
							font-size: 24px;

							span {
								font-size: 16px;
							}
						}
					}


				}

				.operate-mask {
					visibility: hidden;
					position: absolute;
					max-width: 100%;
					width: 100%;
					height: 60px;
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

	.pool-title {
		text-align: center;
		margin: 0 auto;
		font-size: 0.8rem;
	}
}

.pool-body.loading {
	text-align: center;
	row-gap: 10px;

	span {
		font-size: 0.8rem;
	}
}

*>input {
	visibility: hidden;
}

@media (max-width: 900px) {
	.pool-body {
		.pool-content {
			.map-panel {
				min-width: 0;
				width: 100%;

				.content-mask {
					.content.left {
						width: 80%;
						overflow: hidden;
					}

					.operate-mask.clicked {
						visibility: visible;
						background-color: rgba(0, 0, 0, 0.6);
						transition: all 0.3s;
						max-width: 100%;
						width: -webkit-fill-available;
						height: 60px;
					}

					.operate-mask {
						visibility: hidden;

						.operate-button-group {
							margin: auto;
							display: flex;
							max-width: 100%;
							height: 100%;
							align-items: center;
							text-align: center;
							justify-content: center;
							column-gap: 50px;
						}
					}
				}

				.content-mask:hover {
					.operate-mask.clicked {
						visibility: visible;
						background-color: rgba(0, 0, 0, 0.6);
						transition: all 0.3s;
						max-width: 100%;
						width: -webkit-fill-available;
						height: 60px;
					}

					.operate-mask {
						visibility: hidden;
					}
				}
			}
		}
	}
}

@media (min-width: 900px) {
	.pool-body {
		.pool-content {
			.map-panel {
				width: calc(50% - 13px);

				.content-mask {
					.content.left {
						width: 68%;
					}
				}
			}

			.map-panel.last {
				width: calc(50% - 13px);
				margin: 0 13px 0 0;
			}
		}
	}

}
</style>
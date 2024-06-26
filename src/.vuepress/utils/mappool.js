import { getBeatmapInfo, getBeatmapAttributes } from '@dataApi';
import axios from '../http/axios';

/**
* @description 获取比赛图池谱面信息
* @param {Object} poolList 图池列表对象
* @param {String} poolName 图池列表名字
* @param {String} pool 图池对象
* @return void
*/
function getMapInfo(poolList, poolName) {
	for (let pool in poolList) {
		beatmapsetRequest(poolList, pool, poolName);
	};
};
/**
* @description 异步请求谱面
* @param {Object} poolList 图池列表对象
* @param {String} pool 图池对象
* @return void
*/
/** @param {Boolean} flag 全局判断请求是否失败 */
let flag = true;
async function beatmapsetRequest(poolList, pool, poolName) {
	/** @param {Array} sets 图池谱面ID集合 */
	let sets = poolList[pool].sets;
	/** @param {Object} poolData 图池谱面信息集合 */
	let poolData = poolList[pool].data;
	for (let item of sets) {
		await getBeatmapInfo(item.id).then((res) => {
			if (res?.status === 200 && res?.status) {
				let data = res.data;
				let tag = item.tag;
				let last = false;
				let star = 0;
				let obj = Object.assign(data, { tag: tag, isLast: last, star: star });
				poolData.push(obj);// 依次增加数据，确定谱面位置
				// 遍历数组计算带特殊模组谱面的星数
				poolData.map((e) => {
					getModDiffStar(e);
					return e;
				})
				if (item === sets[sets.length - 1]) {
					poolList[pool].status.isLoading = false;
					isLastMap(poolData);
				};
			} else {
				// 报错警告仅限一次
				if (flag) {
					window.alert("谱面加载失败，请刷新页面重新加载。");
					flag = false;
					// location.reload();// 报错后立刻刷新页面
					return;
				}
			};
		}).catch((e) => {
			console.log(e);
		});
	};
	// localStorage.setItem(poolName, JSON.stringify(poolList));
	// 若有谱面请求失败，刷新时清空本地存储
	// if (!flag) {
	// 	localStorage.removeItem(poolName);
	// }
	return poolList;
}
/**
* @description 处理比赛图池原数据
* @param {Object} pool 图池对象
* @param {String} pool.src 图池原数据
* @param {Array} pool.sets 图池谱面ID集合
* @return {Object} pool 图池对象
*/
function splitPoolString(pool) {
	let str = pool.src;
	let arr = str.split(' ');
	let sets = pool.sets;
	let obj = {};
	let tag;
	for (let i in arr) {
		if (isNaN(parseInt(arr[i]))) {
			tag = arr[i];
		} else {
			obj = {
				id: arr[i],
				tag: tag,
			};
			sets.push(obj);
		};
	};
	return pool;
};
/**
* @description 生成比赛图池面板
* @param {Object} poolList 图池列表对象
* @param {String} poolName 图池列表名字
* @return void
*/
function getMappoolPanel(poolList, poolName) {
	let list = JSON.parse(localStorage.getItem(poolName));
	if (!list) {
		for (let pool in poolList) {
			splitPoolString(poolList[pool]);
		}
		getMapInfo(poolList, poolName);
	} else {
		poolList = list;
	}
	return poolList;
}
/**
* @description 判断谱面图池位置
* @param {Object} poolData 图池谱面信息集合
* @param {Boolean} isLast 是否为比赛某模组中最后一张图，序号为奇数
* @return void
*/
function isLastMap(poolData) {
	let data = poolData;
	let index = 0;
	for (let i = 0; i < data.length; i++) {
		for (let j = 1; j < data.length; j++) {
			if (j === i + 1) {
				if (data[i].tag !== data[j].tag) {
					let arr = data.slice(index, i + 1);
					index = i + 1;
					if (arr.length % 2 !== 0) {
						arr.map((e) => {
							if (e === arr[arr.length - 1]) {
								e.isLast = true;
							}
						})
					}
				}
			}
		}
		data[data.length - 1].isLast = true;
	}
}
/**
* @description 计算添加模组后的谱面星数
* @param {Object} e 谱面对象
* @param {Object} e.data 谱面信息
* @param {String} e.tag 游玩模组
* @param {Number} e.star 计算后星数
* @return {Object} e 谱面对象
*/
async function getModDiffStar(e) {
	let tagList = ["HR", "DT", "EZ", "FL"];// 需要计算星数的模组列表
	let info = e.data;
	let tag = e.tag;
	e.star = info.difficulty_rating;// 星数默认为谱面原星数
	let params = {
		bid: info.id.toString(),
		mod: tag,
		mode: info.mode,
	}
	// 如果谱面指定模组为模组列表之一，需要额外请求，否则直接return
	if (tagList.includes(tag)) {
		await getBeatmapAttributes(params).then((res) => {
			if (res.data) {
				let rating = res.data?.star_rating;
				e.star = parseFloat(rating.toFixed(2));
			};
		});
		return e;
	} else {
		return e;
	};
}
/**
* @description 下载图池Json文件
* @param {Object} poolList 图池对象
* @param {String} poolName 图池名称
* @return 
*/
function downloadJsonFile(poolList, poolName) {
	let link = document.createElement("a");
	let pool = JSON.stringify(poolList)
	let blob = new Blob([pool]);
	link.href = URL.createObjectURL(blob);
	link.download = poolName + ".json";
	link.click();
}

/**
* @description 加载图池Json文件
* @param {ref} poolList 图池ref对象
* @param {String} poolName 图池名称
* @param {ref} flag 是否显示下载json按钮
* @return void
*/
async function loadJson(poolList, poolName, flag) {
	// 图池对象为ref以便更新数据
	// 动态引入文件路径判断文件是否存在
	let filepath = window.origin.includes("github") ? `/yhc-web/assets/js/mappool/${poolName}.json` : `/yhc-web/@fs/Users/siyuyuko/Project/osu/yhc-web/src/.vuepress/public/assets/js/mappool/${poolName}.json`;
	// await import(/* @vite-ignore */filepath).then((res) => {
	// 	// 文件存在时，读取文件json
	// 	poolList.value = res.default;
	// 	flag.value = false;
	// }).catch((e) => {
	// 	// 文件不存在时，请求数据生成json
	// 	poolList.value = getMappoolPanel(poolList.value, poolName);
	// 	flag.value = true;
	// });
	console.log(window.origin + filepath);
	axios.post(window.origin + filepath).then((res) => {
		// 文件存在时，读取文件json
		console.log(res);
		poolList.value = res.data;
		flag.value = false;
	}).catch((e) => {
		console.log(e);
		// 文件不存在时，请求数据生成json
		poolList.value = getMappoolPanel(poolList.value, poolName);
		flag.value = true;
	})
}
export { getMapInfo, splitPoolString, getMappoolPanel, getModDiffStar, downloadJsonFile, loadJson };
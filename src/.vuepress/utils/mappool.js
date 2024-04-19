import { getBeatmapInfo } from '@dataApi';
/**
* @description 获取比赛图池谱面信息
* @param {Object} poolList 图池列表对象
* @param {String} poolName 图池列表名字
* @param {String} pool 图池对象
* @return void
*/
async function getMapInfo(poolList,poolName) {
	for (let pool in poolList) {
		let sets=poolList[pool].sets;
  		let poolData=poolList[pool].data;
  		for(let item of sets){
    		await getBeatmapInfo(item.id).then((res)=>{
      			if(res.status&&res.data){
        		let data=res.data;
				let tag = item.tag;
				let last = false;
        		let obj=Object.assign(data,{tag:tag,isLast:last});
        		poolData.push(obj);
        		if(item===sets[sets.length-1]){
					poolList[pool].status.isLoading = false;
					isLastMap(poolData);
        		};
      			};
      		});
		};
	};
	localStorage.setItem(poolName,JSON.stringify(poolList));
};
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
		for(let pool in poolList){
			splitPoolString(poolList[pool]);
		}
		getMapInfo(poolList,poolName);
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
	for (let i = 0; i < data.length;i++) {
		for (let j = 1; j < data.length; j++){
			if(j === i + 1) {
				if (data[i].tag !== data[j].tag) {
			  	let arr = data.slice(index, i+1);
				index = i+1;
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
export { getMapInfo,splitPoolString,getMappoolPanel };
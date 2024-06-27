import axios from "../http/axios.js";
export const getPPM = params => {
	return axios({
		method: 'get',
		url: "/pub/ppm",
		params
	});
};
/**
* @description 获取谱面信息
* @param {Number} params 谱面ID
* @return void
*/
export const getBeatmapInfo = params => {
	return axios({
		method: "get",
		url: `/pub/api/info/${params}`,
	});
};
/**
* @description 获取谱面附加信息
* @param {Object} params 谱面ID
* @return void
*/
export const getBeatmapAttributes = params => {
	return axios({
		method: "get",
		url: `/pub/attr/json?bid=${params.bid}&mods=${params.mod}&mode=${params.mode}`,
	});
};
// 获取谱面bg
export const getBeatmapBg = params => {
	return axios({
		method: "get",
		url: `/api/background/${params}`,
	});
};
// 生成比赛图池
export const getMappool = params => {
	return axios({
		method: "post",
		url: `/pool?name=${params.name}`,
		data: params.data,
		responseType:'blob',
	});
};
// 投骰子
export const getDice = params => {
	return axios({
		method: "get",
		url: `/dice`,
		params
	});
};
// 玩家登录
export const getLogin = params => {
	return axios({
		method: "get",
		url: `/login`,
		params
	});
};
// 获取玩家信息
export const getUserInfo = params => {
	return axios({
		method: "get",
		url: `/info/json`,
		params
	});
};
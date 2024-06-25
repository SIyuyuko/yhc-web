// 封装请求配置拦截器
import axios from 'axios';

// 设置接口超时时间
axios.defaults.timeout = 60000;

// 请求地址，这里是动态赋值的的环境变量
// @ts-ignore
axios.defaults.baseURL = "https://bot.365246692.xyz";

//http request 拦截器
axios.interceptors.request.use(
	config => {
		// 配置请求头
		config.headers = {
			//'Content-Type':'application/x-www-form-urlencoded',   // 传参方式表单
			'Content-Type': 'application/json;charset=UTF-8',        // 传参方式json
			//'token':'80c483d59ca86ad0393cf8a98416e2a1'           // 这里自定义配置，这里传的是token
			'Access-Control-Allow-Origin': '*',

		};
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

//http response 拦截器
axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		const { response } = error;
		// console.log(error);
	}
);

// 封装 GET POST 请求并导出
export function request(url = '', params = {}, type = 'post') {
	//设置 url params type 的默认值
	return new Promise((resolve, reject) => {
		let promise
		if (type.toUpperCase() === 'GET') {
			promise = axios({
				url,
				params
			})
		} else if (type.toUpperCase() === 'POST') {
			promise = axios({
				method: 'POST',
				url,
				data: params
			})
		}
		//处理返回
		promise.then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
export default axios;


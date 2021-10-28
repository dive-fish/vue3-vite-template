import axios from "axios";
import { Toast } from 'vant';

axios.defaults.baseURL = import.meta.env.VITE_APP_URL;
axios.defaults.timeout = 60 * 1000;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  Toast.fail(error);
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  Toast.fail(error);
  return Promise.reject(error);
});


/**
 * @param  { String } url 地址
 * @param  { Object } params 请求参数
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * @param  { String } url 地址
 * @param  { Object } params 请求参数
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, JSON.stringify(params))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
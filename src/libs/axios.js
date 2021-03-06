/* jshint esversion: 6 */
import axios from 'axios';
import { Toast } from 'vant';
import Vue from 'vue';
Vue.use(Toast);
class HttpRequest {
  constructor (baseURL) {
    this.baseUrl = baseURL
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json'
      }
    };
    return config;
  }
  interceptors (instance, ) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      return config;
    }, error => {
      return Promise.reject(error);
    });
    // 响应拦截
    instance.interceptors.response.use(res => {  
      return Promise.resolve(res)
    },error => {
      if(error.response.data.msg){
        Toast(error.response.data.msg)
      }
      return Promise.reject(error.response);
    });
  }
  request (options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;

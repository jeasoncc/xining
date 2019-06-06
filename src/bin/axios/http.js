import axios from "axios";
// import qs from "qs";
import { getKey, setKey } from "bin/cookie/base";

// axios.defaults.timeout = 5000; //响应时间
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded"; //配置请求头
// axios.defaults.baseURL = "http://localhost:8080/ArmyCreate/"; //配置接口地址
// axios.defaults.baseImgURL = "http://localhost:8080";
// axios.defaults.baseURL = "http://localhost:8550";
// axios.defaults.baseURL = "http://139.9.244.125:8550/app-service";
// axios.defaults.baseURL = "http://10.1.1.40:8550/app-service";
axios.defaults.baseURL = "http://localhost:8585"; //配置接口地址
// axios.defaults.baseImgURL = "http://182.254.165.115:8080";

const service = axios.create({
  baseURL: axios.defaults.baseURL,
  timeout: 60000
});
/**
 *  @description 添加请求拦截器
 */
service.interceptors.request.use(
  config => {
    config.headers = {};
    /**
     *  @description 在发送请求之前做某件事
     */
    if (getKey()) {
      config.headers["authorization"] = getKey(); // 让每个请求携带自定义token 请根据实际情况自行修改
      // console.log("jinlaile")
    } else {
      // console.log("sasa")
    }
    if (config.method === "post") {
      // config.data = qs.stringify(config.data);
      config.headers["Content-Type"] = "application/json";

    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
// respone拦截器
service.interceptors.response.use(
  response => {
    // console.log(response)
    if (response.headers.authorization) {
      // console.log("sasa")
      setKey(response.headers.authorization);
    }
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;

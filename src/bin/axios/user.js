import request from "./http"
/**
 *  @description 打卡，添加荣誉点
 */
export function clock(params) {
    return request({
      url: "/honor/clock.do",
      method: "post",
      data: params
    });
  }
/**
 *  @description 登陆
 */
export function login(params) {
  return request({
    url: "/user/login.do",
    method: "post",
    data: params
  })
}
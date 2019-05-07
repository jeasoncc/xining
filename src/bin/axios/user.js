import request from "./http"

/**
 *  @description 登陆
 */
export function login(params) {
  return request({
    url: "/login",
    method: "post",
    data: params
  })
}
/**
 *  @description 注册
 */
export function register(params) {
  return request({
    url: "/app/user/register",
    method: "post",
    data: params
  })
}
/**
 *  @description 获取商品信息
 */
export function findGoods(params) {
  return request({
    url: "  ",
    method: "post",
    data: params
  })
}
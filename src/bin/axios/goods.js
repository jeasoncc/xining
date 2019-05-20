import request from "./http"

/**
 *  @description 根据用户获取商品信息
 */
export function getGoodsByUser(params) {
  return request({
    url: "/app/goods/findGoods",
    method: "post",
    data: params
  })
}

/**
 *  @description 根据用户获取商品信息
 */
export function getGoodsType(params) {
  return request({
    url: "app/goods/findGoodsCategory",
    method: "post",
    data: params
  })
}
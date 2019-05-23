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


/**
 *  @description 商品购买明细
 */
export function findSellGoods(params) {
  return request({
    url: "/app/sell/findSellGoods",
    method: "post",
    data: params
  })
}


/**
 *  @description 车票购买记录
 */
export function findSellTicket(params) {
  return request({
    url: "app/sell/findSellTicket",
    method: "post",
    data: params
  })
}
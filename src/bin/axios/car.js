import request from "./http"
/**
 *  @description 租赁车列表
 */
export function getGarsByUser(params) {
    return request({
      url: "/app/rent/rentCarList",
      method: "post",
      data: params
    })
  }
/**
 *  @description 游客租赁车辆
 */
export function rentCar(params) {
    return request({
      url: "/app/rent/rentCar",
      method: "post",
      data: params
    })
  }
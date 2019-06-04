import {observable,action} from 'mobx';
import {sellGoods} from "bin/axios/user.js"
const R = require("ramda")
var goods = observable({
    mygoods: [],
    buyState: false,
    buyAnimalState : "212"
});
goods.resetMygoods = action(function rest(some) {
    goods.mygoods = [];
});
goods.addMygoods = action(function addMygoods(some) {
    if(goods.mygoods.length === 0) {
        goods.mygoods = R.append(some, goods.mygoods)
    } else {
        var aaa = false
        goods.mygoods.filter(current => {
            if(current.id === some.id) {
                current.num++
                aaa = true
            }
        })
        if(aaa === false ) {
            goods.mygoods = R.append(some, goods.mygoods)
        }
    }
});
goods.removeMygoods = action(function remove(some) {

    if(goods.mygoods.length === 0) {
        // goods.mygoods = R.append(some, goods.mygoods)
    } else {
        goods.mygoods.filter((current,index) => {
            if(current.id === some.id) {
                current.num--
                if(current.num === 0) {

                    // current.num = 0
                    console.log("jinlaile")
                    // aaa = true
                    goods.mygoods = R.remove(index, index+1, goods.mygoods);
                }

            }
        })
    }
});
goods.buyMygoods = action(function () {
    console.log("sasasa")
    try {
        // var mybuyPromise = new Promise(function)
        var count = 0
        var item = []
        goods.mygoods.map((current) =>  {

            // console.log(current)
            // console.log(current.price)
            count = count + current.price *  current.num
            item.push({
                goodId: current.id,
                num: current.num,
                price:current.price
            })
            // console.log(count)
        })
        sellGoods({count,item}).then( res => {
            console.log(res)
            goods.buyState = res.retcode === 0 ? true : false
        })
    } catch (error) {

    }
    // console.log(goods.count)
})
goods.initMygoodsState = action(function () {
    goods.buyState = false
})
goods.butAnimal = action(() => {
    console.log("sasasasa")
    goods.buyAnimalState = "购买中"
    // setTimeout(() => {
    //     goods.buyAnimalState = "购买成功"
    // }, 1000)
    // setTimeout(() => {
    //     goods.buyAnimalState = ""
    // }, 2000)
})
export default goods
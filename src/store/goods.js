import {observable,action} from 'mobx';
const R = require("ramda")
var goods = observable({
    mygoods: []
});
goods.resetMygoods = action(function rest(some) {
    goods.mygoods = [];
});
goods.addMygoods = action(function addMygoods(some) {
    console.log(goods.mygoods.length )

    if(goods.mygoods.length === 0) {
        goods.mygoods = R.append(some, goods.mygoods)
    } else {
        // goods.mygoods = R.append(some, goods.mygoods)
        // console.log("当前商品不为空")
        // for(let item in goods.mygoods) {
        //     console.log(goods.mygoods[item].id)
        //     console.log(some.id)
        //     if (goods.mygoods[item].id === some.id) {
        //         goods.mygoods.pop(some)
        //         return
        //     }
        // }
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
        console.log()
    }
    // goods.mygoods = R.without([some], goods.mygoods)
});
goods.removeMygoods = action(function remove(some) {
    // console.log(goods.mygoods.length )

    if(goods.mygoods.length === 0) {
        // goods.mygoods = R.append(some, goods.mygoods)
    } else {
        // goods.mygoods = R.append(some, goods.mygoods)
        // console.log("当前商品不为空")
        // for(let item in goods.mygoods) {
        //     console.log(goods.mygoods[item].id)
        //     console.log(some.id)
        //     if (goods.mygoods[item].id === some.id) {
        //         goods.mygoods.pop(some)
        //         return
        //     }
        // }
        // let aaa = false
        // let aaaIndex
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
        // console.log(aaaIndex)
        // if(aaa === false ) {
        //     console.log("jinlaile")
        //     console.log(aaaIndex)
        // }
        // console.log()
    }
    // goods.mygoods = R.without([some], goods.mygoods)
});
export default goods
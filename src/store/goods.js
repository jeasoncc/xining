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
export default goods
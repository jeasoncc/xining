import React, {Compontent} from 'react';
import PinnedSubheaderList from "components/Sidebar/ShoppingSidebar"
import Producter from "components/Producter"
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom"
// import { findGoodsCategory } from "bin/axios/user"
import { getGoodsType,getGoodsByUser } from "bin/axios/goods";
import {observer} from "mobx-react";
// import Welcome from "./MobxTest"
import goods from "store/goods.js"
import { observable, computed, useStrict, action, observe } from 'mobx'
// const test = require("./test")


class VM {
    @observable firstName = '';
    @observable lastName = ''

    @computed get fullName() {
        const { firstName, lastName } = this;
        if(!firstName && !lastName) {
            return 'please input your name'
        } else {
            return firstName + ' ' + lastName
        }
    }
    @action.bound
    setValue(key, event) {
        this[key] = event.target.value
    }
    @action.bound
    doReset() {
        this.firstName = ''
        this.lastName = ''
    }
}



@observer
class MyTest extends React.Component {
  render() {
    const vm = this.props.vm;
    return (
      <div>
        <h1>This is mobx-react!</h1>
        <p>First name: <input type="text" value={vm.firstName} onChange={e => vm.setValue('firstName', e)} /></p>
        <p>Last name: <input type="text" value={vm.lastName} onChange={e => vm.setValue('lastName', e)} /></p>
        <p>Full name: {vm.fullName}</p>
        <p><button onClick={vm.doReset}>Reset</button></p>
      </div>
    );
  }
}
var that
var some = []
 class ShoppingProduct extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            productItems: [],
            goodsList:[],
            goodsType:[],
            goodsId: 5
        }
        this.getGoodsByUser = this.getGoodsByUser.bind(this);
        this.getGoodsType = this.getGoodsType.bind(this);
    }
    // sometest = "sasaa"
    componentWillMount() {
        this.getGoodsByUser()
        this.getGoodsType()
    }
    selectGatery(prop) {
        // console.log(prop)
        that.setState({
            goodsId: prop
        })
    }
    componentDidMount() {
        that = this
        // findGoodsCategory().then(res => {
        //     console.log(res)
        // })
    }
    getGoodsByUser(){
        getGoodsByUser().then(res => {
            this.setState({
                goodsList: res.data.item
              })
        })
    }

    getGoodsType(){
        getGoodsType().then(res => {
            // console.log('goodsType:'+res)
            this.setState({
                goodsType: res.data.item
              })
        })
    }
     // 传参数到购物车
    addShoppingCar(prop) {
        // console.log("addShoppingCar")
        // console.log(prop)
        prop.num = 1
        that.props.goods.addMygoods(prop);
        // that.setState({
        //     productItems:  R.append(prop, that.state.productItems)
        //   }, ( ) => {
        //     console.log(that.state.productItems)

        //   })
        //   that.props.goods.addMygoods(that.state.productItems);
        // R.append[prop, some]
        // console.log(some)
        // var a = R.append('tests', ['write', 'more']);
        // console.log(a)
        // console.log( that.props.goods.mygoods)
    }
    componentDidUpdate() {
        // console.log(that.state.productItems)
        // console.log(that.props.goods.mygoods)
    }
    render() {
        const { classes } = this.props;
        const arr = []
        for(let i= 0;i<1000;i++) {
          arr.push(i)
        }
        return (
            <>
            <Fab color="primary"
            aria-label="Add"
            to="/Shopping/ShoppingCar/"
            component={Link}
            style={{  right: "1rem",
                position: "fixed",
                bottom: "5rem",
                zIndex: "100"}}>
                    <ShoppingCart />
            </Fab>
            {/* {this.sometest} */}
            {/* <MyTest  vm= {new VM}></MyTest> */}
            <Grid container >

                <Grid item xs={3}>
                    <PinnedSubheaderList
                        goodsType={this.state.goodsType}
                        onClick = {this.selectGatery}
                    ></PinnedSubheaderList>
                </Grid>
                <Grid item xs={9}>
                    <Grid   style={{ padding: 20,position: 'relative',
                                                overflow: 'auto',
                                                maxHeight: "90vh", }}>

                        <Producter goodList={this.state.goodsList}
                                   id={this.state.goodsId}
                                   onClick={this.addShoppingCar}></Producter>
                        {/* <Producter></Producter>
                        <Producter></Producter>
                        <Producter></Producter> */}
                    </Grid>
                </Grid>
            </Grid>
            </>
        )
    }
}

export default function ShoppingProductFather() {
    return (
        <ShoppingProduct goods={goods}></ShoppingProduct>
    )
}
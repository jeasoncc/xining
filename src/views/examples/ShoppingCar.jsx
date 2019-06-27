import React from "react"
import StatsCard from "components/StatsCard"
import {  Container, } from "reactstrap";
import goods from "store/goods.js"
import {
    Button,
    Modal,
  } from "reactstrap";
import {observer} from "mobx-react";
import ModalFn from 'components/fnCom/Modal'
var that

@observer
class ShoppingCar extends React.Component {
    state = {
        exampleModal: false
      };
      toggleModal = state => {
        this.setState({
          [state]: !this.state[state]
        });
      };
    butGoods() {
        // console.log()
        (async () => {
          await  this.props.goods.buyMygoods()
          await  console.log('lala')
        })()
    }
    componentWillMount() {
        that = this
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // console.log(value)
        if(value) {
            that.props.goods.setCash()
            // console.log(2112)
            console.log(that.props.goods.isCash)
        } else {
            that.props.goods.initCash()
            console.log(that.props.goods.isCash)
        }
      }
    render() {
        return (
            <Container style={{paddingBottom:"2rem"}}>
                <Modal
                    className="modal-dialog-centered modal-success"
                    contentClassName="bg-gradient-success"
                    isOpen={this.props.goods.buyState}
                    toggle={() => this.toggleModal("exampleModal")}
                    >
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                        {/* Modal title */}
                        </h5>
                        <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.toggleModal("exampleModal")}
                        >
                        <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <div className="modal-body">购买成功</div>
                    <div className="modal-footer">
                        <Button
                        color="secondary"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.props.goods.initMygoodsState()}
                        >
                        关闭
                        </Button>
                    </div>
                    </Modal>
                <br/>
                {
                    this.props.goods.mygoods.map(
                        current => <StatsCard key={current.id} item={current} goods={goods}></StatsCard>
                    )
                }
                <div className="custom-control custom-checkbox mb-3">
                <input
                    className="custom-control-input"
                    id="customCheck1"
                    type="checkbox"
                    onChange={this.handleInputChange}
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                    是否为现金
                </label>
                </div>
                <Button color="primary" size="" type="button" onClick={this.props.goods.resetMygoods}>
                    清空
                </Button>
                {/* <Button color="primary" size="" type="button" onClick={this.butGoods.bind(this)}>
                    结算
                </Button> */}
                <ModalFn buttonName='结算'
                 onClick={this.butGoods.bind(this)}
                 sureButtonName='确认购买'
                 title=''
                 tipP='请确认是否购买'
                 cancelButtonName='取消'></ModalFn>

            </Container>
        )
    }
}
export default function ShoppingCarFather() {
    return (
        <ShoppingCar goods={goods}></ShoppingCar>
    )
}
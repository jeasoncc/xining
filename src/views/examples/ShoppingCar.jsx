import React from "react"
// import { Route, Switch } from "react-router-dom";
// import routes from "routes.js";
// import ShoppingFooter from "components/Footers/ShoppingFooter.jsx";
// import PinnedSubheaderList from "components/Sidebar/ShoppingSidebar"
import StatsCard from "components/StatsCard"
import {  Container, } from "reactstrap";
// import { Alert } from "reactstrap";
import goods from "store/goods.js"
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
    Row,
    Col
  } from "reactstrap";
import {observer} from "mobx-react";
// import Grid from '@material-ui/core/Grid';
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
        this.props.goods.buyMygoods()
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
                {/* <StatsCard></StatsCard>
                <StatsCard></StatsCard>
                <StatsCard></StatsCard> */}
                {/* <Alert className="alert-default">
                    <strong></strong>
                </Alert> */}
                {/* <Button color="primary" size="" type="button" disabled>

                </Button> */}
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
                <Button color="primary" size="" type="button" onClick={this.butGoods.bind(this)}>
                    结算
                </Button>

            {/* < div style={{    position: "fixed",
                            bottom: "3.5rem",
                            zIndex: "200000",
                            background: "white",
                            left: 0,
                            height: "2rem",
                            width: "100vw",
                            boxShadow: "0px -10px 36px -13px"}}>sasasasasas</div> */}

            </Container>
        )
    }
}
export default function ShoppingCarFather() {
    return (
        <ShoppingCar goods={goods}></ShoppingCar>
    )
}
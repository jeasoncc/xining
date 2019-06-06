import React from "react";
import RecipeReviewCard from "components/Cards/ComplexInteraction.jsx";
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
import Ticket from "components/Cards/Ticket.jsx";
// import QRCode from "components/QRCode.jsx";
import {findDriverTicket,sellTicket,sellTicketByCash} from "bin/axios/user.js"
import {Container} from "reactstrap"

var that
export default class tourBus extends React.Component {
    state = {
        exampleModal: false,
        // 剩余票数
        ticketNum: 0,
        // 要购买票数
        buyNum: 0,
        price: 0,
        totip: "您将购买本次车票，请确认。",
        isCash: 0
      };
      toggleModal = state => {
        // console.log("sasasa")
        this.setState({
          [state]: !this.state[state]
        });

      };
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // console.log(value)
        if(value) {
            console.log(value)
            that.setState({
                isCash:1
            })

        } else {
            console.log(value)
            that.setState({
                isCash:0
            })
            console.log(that.state.isCash)
        }
        // this.setState({
        //   [name]: value
        // });
      }
      buyTicket = () => {
        if(that.state.isCash) {
            let prams = {
                ticketPrice: that.state.price,
                num: that.state.buyNum,
                isCash :that.state.isCash,
            }
            console.log("jeason")
            sellTicketByCash(prams).then(res => {
                console.log(res)
                if(res.retcode === 0) {
                    that.state.totip = "购买成功"
                } else {
                    that.state.totip = "购买失败"
                }

                setTimeout(() => {
                    that.queryTicket()
                }, 500);
            })
        } else {
            let prams = {
                ticketPrice: that.state.price,
                num: that.state.buyNum,
                // isCash :that.state.isCash,
            }
            console.log("jeason")
            sellTicket(prams).then(res => {
                console.log(res)
                if(res.retcode === 0) {
                    that.state.totip = "购买成功"
                } else {
                    that.state.totip = "购买失败"
                }

                setTimeout(() => {
                    that.queryTicket()
                }, 500);
            })
        }
        setTimeout(() => {
            that.toggleModal("exampleModal")
        }, 1000);
        setTimeout(() => {
            that.setState({
                totip: "您将购买本次车票，请确认。"
            })
        }, 2000);
      }
      queryTicket() {

        findDriverTicket().then((res) => {
            console.log(res)
            try {
              that.setState({
                ticketNum: res.data.item.total,
                price:res.data.item.price,
              })
            } catch (error) {

            }
          })
      }
    //   componentDidUpdate() {
    //     findDriverTicket().then((res) => {
    //         console.log(res)
    //         try {
    //           that.setState({
    //             ticketNum: res.data.item.total,
    //             price:res.data.item.price,
    //           })
    //         } catch (error) {

    //         }
    //       })
    //   }
      componentWillMount() {
        that = this
        this.queryTicket()

       }
    render() {
        return (
            <Container>
                <Modal
                    // className="modal-dialog-centered"
                    className={"modal-dialog-centered modal-info"}
                    contentClassName="bg-gradient-info"
                    isOpen={this.state.exampleModal}
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
                    <div className="modal-body">
                        {this.state.totip}
                    </div>
                    <div className="modal-footer">
                        <Button
                        color="secondary"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.toggleModal("exampleModal")}
                        >
                            取消
                        </Button>
                        <Button color="primary" type="button" onClick={this.buyTicket}>
                            确认购买
                        </Button>
                    </div>
                    </Modal>
                {/* <QRCode /> */}
                <Ticket onClick={() => this.toggleModal("exampleModal")}
                        ticketNum={this.state.ticketNum}
                        onchange={(e) => {
                            // console.log(e.target.value)
                            this.setState({
                                buyNum: e.target.value
                            })
                        }}
                        changeCash={(e) => {
                            // console.log(e.target.checked)
                            this.handleInputChange(e)
                        }}
                        price={this.state.price}/>
            </Container>
        )
    }
}
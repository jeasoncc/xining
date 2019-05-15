import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";
import {findDriverTicket} from "bin/axios/user.js"
import { UncontrolledAlert } from "reactstrap";
var that
class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: 10};
    }
   componentWillMount() {
    that = this
    findDriverTicket().then((res) => {
        console.log(res)
        that.setState({
            date: res.data.item.total
        })
      })

   }
  render() {
    return (
      <>
        <br></br>
        <Card style={{ width: "auto" }}>
          <CardImg
            alt="..."
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558432070&di=e0bbdd0d3818960a28e28d23e887a13f&imgtype=jpg&er=1&src=http%3A%2F%2Fjzfile.zk71.com%2FFile%2FCorpProductImages%2F2018%2F06%2F25%2F0_womacar_0_20180625194319.jpg"
            top
          />
          <CardBody>
            <CardTitle>票数 {this.state.date}</CardTitle>
            {/* <UncontrolledAlert color="primary" fade={false}>
                    <span className="alert-inner--icon">
                        <i className="ni ni-cart" />
                    </span>{" "}
                    <span className="alert-inner--text">
                        <strong>!</strong> 本次购买将花费50元
                    </span>
                </UncontrolledAlert> */}
            <CardText>
                游桥观海岛，听风赏古今。

            </CardText>
            <Button
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              购买车票
            </Button>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Cards;
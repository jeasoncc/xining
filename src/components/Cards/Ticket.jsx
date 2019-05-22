import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Badge,
  Row,
  Col,
  FormGroup,
  Input
} from "reactstrap";
import TextField from '@material-ui/core/TextField';
import {findDriverTicket} from "bin/axios/user.js"
import { UncontrolledAlert } from "reactstrap";
var that
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});
class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: 10};
        this.buyTicket = this.buyTicket.bind(this)
    }
    buyTicket() {
      console.log("sasasa")
    }
   componentWillMount() {
    that = this
    // findDriverTicket().then((res) => {
    //     console.log(res)
    //     try {
    //       that.setState({
    //         date: res.data.item.total
    //       })
    //     } catch (error) {

    //     }
    //   })
   }
  render() {
    return (
      <>
        <br></br>
        <Card style={{ width: "auto" }}>
          <CardImg
            alt="..."
            src="https://timgsa.baidu.com/timg?image&quaCardTextty=80&size=b9999_10000&sec=1558432070&di=e0bbdd0d3818960a28e28d23e887a13f&imgtype=jpg&er=1&src=http%3A%2F%2Fjzfile.zk71.com%2FFile%2FCorpProductImages%2F2018%2F06%2F25%2F0_womacar_0_20180625194319.jpg"
            top
          />
          <CardBody>
            {/* <CardTitle>票数

            </CardTitle>
            <CardTitle>
              <Badge className="badge-default">{this.state.date}</Badge>
            </CardTitle> */}

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
                <CardText className="blockquote-footer">
                  请您在购买前仔细阅读以下 <cite title="Source Title">事项</cite>
                </CardText>
                {/* <div>
                  <ol style={{padding: "0  15px"}}>

                  </ol>
                </div> */}
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                Attation/注意事项
              </p>
              {/* <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer> */}
            </blockquote>

            <CardText>1.驾驶前驻车制动手刹请放到底，以免烧毁刹车片或电机。</CardText>
            <CardText>2.启动时应注意车辆制动、转向工作是否正常，是否有异响。如果有异常故障，应立即停车，排除故障后方可行驶。</CardText>
            <CardText>3.禁止超载行驶；小孩乘座车辆应有成年人照顾。</CardText>
            <CardText>4。驾驶时应时刻控制车辆，保持视线清晰；与任何物体保持安全距离。</CardText>
            <CardText>5.车辆行驶时请提醒乘客勿将头和四肢伸出车外。</CardText>
            <CardText>6.遇到松垮物体、坑洞、或地面隆起物，应避开通过。</CardText>
            <CardText>7.请缓慢转向，特别是在雨天路滑，或上下坡时。上下坡高速行使，转向过猛等危险操作，易导致安全事故。</CardText>
            <CardText>8.当电量显示器中红灯闪亮时，表示电量已到极限，请停止使用车辆并及时充电。</CardText>
            <CardText>9.注意：车辆需改换前进后退方向时，应待车辆停稳后进行，按前进档&mdash;&mdash;空档&mdash;&mdash;后退档，或者后退档&mdash;&mdash;空档&mdash;&mdash;前进档顺序操作。严禁车辆在行驶时突然改变行车方向，这样极容易造成方电控、电机的损坏。</CardText>
            <Row style={{    justifyContent: "space-between"}}>
            <Col xs="auto">
                票数
                <Badge className="" pill color="info">
                <span className="btn-inner--icon">
                  <i className="ni ni-credit-card" />
                </span>
                {/* <span className="btn-inner--icon">
                  <i className="ni ni-bag-17" />
                </span> */}

                {this.props.ticketNum}</Badge>
            </Col>
            <Col xs="auto">
                价格<Badge className="" pill color="info">¥{this.props.price}</Badge>
            </Col>
          </Row>
          <br/>
            <FormGroup>
                <Input
                  id="exampleFormControCardTextnput1"
                  placeholder="请输入要购买的车票数"
                  type="number"
                  onChange={this.props.onchange}
                />
              </FormGroup>

            <Button
              color="primary"
              href="#pablo"
              onClick={this.props.onClick}
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
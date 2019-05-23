import React from "react";
// reactstrap components
import {
  // Button,
  Card,
  CardBody,
  // CardImg,
  CardTitle,
  // CardText,
  Row,
  Col
} from "reactstrap";
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import {observer} from "mobx-react";


@observer
class StatsCard extends React.Component {
  constructor(props){
    super(props)
    this.state={
        number:1
    }
  }
  componentWillMount() {
    this.setState({
      number: this.props.item.num
    })
  }
  componentDidUpdate() {
    if(this.state.number < 0) {
      this.setState({
        number: 0
      })
    }
  }
  render() {
    return (
      <>
        <div style={{ width: "100%" }}>
          <Card className="card-stats mb-4 mb-lg-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle className="text-uppercase text-muted mb-0">
                      {this.props.item.name}({this.props.item.num}）
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">¥{this.props.item.price}</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                    <i className="fas fa-chart-bar" />
                  </div>
                </Col>
              </Row>
              <p className="mt-0 mb-0 text-muted text-sm">
                {/* <span className="text-success mr-2">
                  <i className="fa fa-arrow-up" />
                  3.48%
                </span> */}
                {/* <Button className="btn-icon btn-2" color="primary" type="button">
                  <span className="btn-inner--icon">
                    <i className="ni ni-atom" />
                    增加
                  </span>
                </Button>
                <Button className="btn-icon btn-2" color="primary" type="button">
                  <span className="btn-inner--icon">
                    <i className="ni ni-atom" />
                    减少
                  </span>
                </Button> */}
                <br/>
                <Fab size="small" color="primary" aria-label="Add" onClick={() => {
                  console.log("sasa")
                  console.log(this.props.item)
                  var a = this.props.item
                  this.props.goods.addMygoods(a);
                  this.setState({
                    number: this.state.number+1
                  })
                }}>
                  <AddIcon />
                </Fab>
                <Fab size="small" color="primary" aria-label="Add" style={{marginLeft:"3rem"}} className="ml-5" onClick={() => {
                  console.log("sasa")
                  var a = this.props.item
                  this.props.goods.removeMygoods(a);
                  this.setState({
                    number: this.state.number-1
                  })
                }}>
                  <Remove />
                </Fab>

                {/* <span className="text-nowrap">Since last month</span> */}
              </p>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default StatsCard;
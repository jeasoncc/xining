import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Table,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.jsx";
import { findSellGoods,findSellTicket } from "bin/axios/goods";
import classnames from "classnames";

class Profile extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
        sellLists: [],
        ticketList:[],
        navPills: 1
    }
    this.findSellGoods()
}
toggleNavs = (e, state, index) => {
  e.preventDefault();
  this.setState({
    [state]: index
  });
};

  findSellGoods(){
    var param = {startDate:'',endDate:''}
    findSellGoods(param).then(res => {
      console.log('sadasd:'+res)
        this.setState({
            sellLists: res.data.item
          })
    })
  }

  findSellTicket(){
    var param = {startDate:'',endDate:''}
    findSellTicket(param).then(res => {
      console.log('sadasd:'+res)
        this.setState({
          ticketList: res.data.item
          })
    })
  }

  render() {
    return (
      <>
      <Nav
          className="nav-fill flex-row flex-sm-row"
          id="tabs-text"
          pills
          role="tablist"
        >
          <NavItem style={{marginRight:'5px'}}>
            <NavLink
              aria-selected={this.state.navPills === 1}
              className={classnames("mb-sm-3 mb-md-0", {
                active: this.state.navPills === 1
              })}
              onClick={e => this.toggleNavs(e, "navPills", 1)}
              href="#pablo"
              role="tab"
            >
            购物明细
            </NavLink>
          </NavItem> 
          <NavItem>
            <NavLink
              aria-selected={this.state.navPills === 2}
              className={classnames("mb-sm-3 mb-md-0", {
                active: this.state.navPills === 2
              })}
              onClick={e => this.toggleNavs(e, "navPills", 2)}
              href="#pablo"
              role="tab"
            >
              买票明细
            </NavLink>
          </NavItem>
        </Nav>
    <Card className="shadow">
      <CardBody>
        <TabContent activeTab={"navPills" + this.state.navPills}>
        <TabPane tabId="navPills1">
        <Table className="align-items-center" responsive style={{}}>
          <thead className="thead-light">
            <tr>
              <th scope="col">购物金额</th>
              <th scope="col">购物时间</th>
            </tr>
          </thead>
          <tbody>
          {this.state.sellLists.map((item) => (
            <tr>
              <td>{item.amount}</td>
              <td>{item.time}</td>
            </tr>
            ))}
          </tbody>
          </Table>
          </TabPane>
          <TabPane tabId="navPills2">
          <Table className="align-items-center" responsive style={{}}>
          <thead className="thead-light">
            <tr>
              <th scope="col">买票金额</th>
              <th scope="col">买票时间</th>
            </tr>
          </thead>
          <tbody>
          {this.state.sellLists.map((item) => (
            <tr>
              <td>{item.amount}</td>
              <td>{item.time}</td>
            </tr>
            ))}
          </tbody>
          </Table>
          </TabPane>
          </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Profile;

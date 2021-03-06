import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import { Button } from "reactstrap";
import { observable } from "mobx";
class Navbars extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  toggle() {
    console.log('2121')
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    return (
      <>
        <Navbar
          className="navbar-horizontal navbar-dark bg-info mb-2"
          expand="lg"
          style={{
            "position": "fixed",
            "top": 0,
            "left": 0,
            "zIndex": 1000,
            "width": "100vw"
          }}
        >
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
               北川河湿地公园
            </NavbarBrand>
            {/* <button
              type="button"

            >
              <span className="navbar-toggler-icon" />
            </button> */}
            {/* <Button color="secondary" size="sm" type="button" onClick={this.toggle} > */}
                <i className="ni ni-circle-08" onClick={this.toggle} style={{fontSize:'1.5rem',color:'white'}}></i>
            {/* </Button> */}
            <Collapse navbar toggler="#navbar-default"  isOpen={this.state.collapse}>
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/blue.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-default"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-default"
                      data-toggle="collapse"
                      id="navbar-default"
                      type="button"
                      onClick={this.toggle}
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    aria-controls="navbar-default"
                    // aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-default"
                    // data-toggle="collapse"
                    id="navbar-default"
                    className="nav-link-icon"
                    onClick={() => {
                      // this.toggle
                      this.toggle()
                      // console.log("saas")
                      // console.log(this.myRef)
                    }}
                    to="/Shopping/user-profile"
                    tag={Link}
                  >
                    <i className="ni ni-favourite-28" />
                    <span className="nav-link-inner--text d-lg-none">
                      个人中心
                    </span>
                  </NavLink>
                  {/* <NavLink
                    aria-controls="navbar-default"
                    // aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-default"
                    // data-toggle="collapse"
                    id="navbar-default"
                    className="nav-link-icon"
                    onClick={() => {
                      // this.toggle
                      this.toggle()
                      // console.log("saas")
                      // console.log(this.myRef)
                    }}
                    to="/Shopping/controllerCar/"
                    tag={Link}
                  >
                    <i className="ni ni-ambulance" />
                    <span className="nav-link-inner--text d-lg-none">
                      车辆管理
                    </span>
                  </NavLink> */}
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/Shopping/changePassword"
                    tag={Link}
                  >
                    <i className="ni ni-key-25" />
                    <span className="nav-link-inner--text d-lg-none">
                      修改密码
                    </span>
                  </NavLink>
                </NavItem> */}
                <UncontrolledDropdown nav>
                  {/* <NavLink
                    className="nav-link-icon"
                    data-toggle="dropdown"
                    id="navbar-default_dropdown_1"
                    to="/Shopping/changeInfo"
                    tag={Link}
                  >
                    <i className="ni ni-settings-gear-65" />
                    <span className="nav-link-inner--text d-lg-none">
                      修改基本信息
                    </span>
                  </NavLink> */}
                  <DropdownMenu
                    aria-labelledby="navbar-default_dropdown_1"
                    right
                  >
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navbars;
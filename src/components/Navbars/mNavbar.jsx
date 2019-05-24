import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
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
import { observable } from "mobx";
class Navbars extends React.Component {
  @observable title = "";
  @observable finished = false;
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
            <button
              aria-controls="navbar-default"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-default"
              data-toggle="collapse"
              id="navbar-default"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-default">
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

                    className="nav-link-icon"
                    onClick={() => {
                      console.log("saas")
                    }}
                    to="/Shopping/user-profile"
                    tag={Link}
                  >
                    <i className="ni ni-favourite-28" />
                    <span className="nav-link-inner--text d-lg-none">
                      个人中心
                    </span>
                  </NavLink>
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
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navbars;
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { login } from "bin/axios/user";
import { Alert } from "reactstrap";
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

// const history = createBrowserHistory();
// const location = history.location;
// const unlisten = history.listen((location, action) => {
//   // location is an object like window.location
//   console.log(action, location.pathname, location.state);
// });
class Login extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      sort:1,
      showError: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }
  componentDidMount() {

  }
  handleChange(event) {
    const target = event.target;
    console.log(target.type)
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  login() {
    let {username,password,sort  } = this.state
    let prams = {username,password,sort}
    console.log(prams);
    /**
     *  @description 发送登录请求
     */
    login(prams).then((res) => {
        if(res.retcode === 0) {
          this.context.router.history.push("/Shopping/sales//")
        } else {
          console.log("sasa")
          this.setState({
            showError: true
          });
          console.log(this.state.showError)
        }
    })
  }
  render() {
    return (
        <Col lg="5" md="7" className="py-5">
          <Card className="bg-secondary shadow border-0">
            {/* <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader> */}
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>please login</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="username" placeholder="手机号" type="text" value={this.state.username}  onChange={this.handleChange} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="password" placeholder="密码" type="password" value={this.state.password}  onChange={this.handleChange} />
                  </InputGroup>
                </FormGroup>
                <Row>
                <div className="custom-control custom-radio mb-3 ml-3">
                  <input
                    className="custom-control-input"
                    id="customRadio5"
                    name="sort"
                    type="radio"
                    value={1}
                    onChange={this.handleChange}
                  />
                  <label className="custom-control-label" htmlFor="customRadio5">
                    游客
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3 ml-3">
                  <input
                    className="custom-control-input"
                    id="customRadio6"
                    name="sort"
                    type="radio"
                    value={2}
                    onChange={this.handleChange}
                  />
                  <label className="custom-control-label" htmlFor="customRadio6">
                    销售
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3 ml-3">
                  <input
                    className="custom-control-input"
                    id="customRadio7"
                    name="sort"
                    type="radio"
                    value={3}
                    onChange={this.handleChange}
                  />
                  <label className="custom-control-label" htmlFor="customRadio7">
                    司机
                  </label>
                </div>
                </Row>

                <Alert color="danger" isOpen={this.state.showError}>
                  <strong>Danger!</strong> 您输入的密码有误!
                </Alert>
                {/* <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div> */}
                <div className="text-center">
                  <Button className="my-1" color="primary"  onClick={this.login} >
                    登录
                  </Button>
                  <Button className="my-1" color="primary"  to="/auth/register"  tag={Link}>
                    注册
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              {/* <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a> */}
            </Col>
            {/* <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>创建帐户</small>
              </a>
            </Col> */}
          </Row>
        </Col>
    );
  }
}

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import { register } from "bin/axios/user";
import PropTypes from 'prop-types';
// reactstrap components
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
  Col
} from "reactstrap";

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '13129546291',
      password: '123456',
      passwordRepeat: '123456'
    }
    this.handleChange = this.handleChange.bind(this);
    this.registerAccount = this.registerAccount.bind(this);
  }
  registerAccount() {
    console.log("sasaa")
    console.log(this.state)
    let {username,password,area= "2",passwordRepeat  } = this.state
    let prams = {username, password, area, passwordRepeat}
    console.log(prams);
    /**
     *  @description 发送登录请求
     */
    register(prams).then((res) => {
      console.log(res)
        // if(res.retcode === 0) {
        //   this.context.router.history.push("/Shopping/sales//")
        // } else {
        //   console.log("sasa")
        //   this.setState({
        //     showError: true
        //   });
        //   console.log(this.state.showError)
        // }
    })
  }
  handleChange(event) {
    const target = event.target;
    console.log(event.target.value)
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Col lg="6" md="8"  className="py-5">
          <Card className="bg-secondary shadow border-0">
            {/* <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div className="text-center">
                <Button
                  className="btn-neutral btn-icon mr-4"
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
              {/* <div className="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div> */}
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="username" placeholder="手机号" type="text" value={this.state.username}  onChange={this.handleChange} />
                  </InputGroup>
                </FormGroup>
                {/* <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="telephone" placeholder="" type="text"  value={this.state.telephone}  onChange={this.handleChange} />
                  </InputGroup>
                </FormGroup> */}
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="password" placeholder="密码" type="password"   value={this.state.password}  onChange={this.handleChange}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="passwordRepeat" placeholder="再一次输入密码" type="password"   value={this.state.passwordRepeat}  onChange={this.handleChange}/>
                  </InputGroup>
                </FormGroup>
                {/* <div className="text-muted font-italic">
                  <small>
                    密码强度:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div> */}
                {/* <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          我同意{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                           平台政策
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row> */}
                <div className="text-center">
                <Button className="my-1" color="primary"  to="/auth/login" tag={Link}>
                    返回登录
                  </Button>
                  <Button className="my-1" color="primary"  onClick={this.registerAccount}>
                    创建用户
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;

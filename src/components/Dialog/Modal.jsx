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
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col
} from "reactstrap";
import appState from "store/showDialog"
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
// console.log(appState.timer)
@observer
class Modals extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }
  state = {
    exampleModal: true
  };
  toggleModal = state => {
    this.props.someTest.resetTimer();
    // console.log(this.props.someTest.timer)

    // this.setState({
    //   [state]: !this.state[state]
    // });
  };
  render() {
    return (
      <>
        {/* Button trigger modal */}
        {/* <Button
          color="primary"
          type="button"
          onClick={() => this.toggleModal("exampleModal")}
        >
          Launch demo modal
        </Button> */}
        {/* Modal */}
        <Modal
          className={this.props.someTest.info?"modal-dialog-centered modal-success": "modal-dialog-centered modal-danger"}
          contentClassName={this.props.someTest.info?"bg-gradient-success":"bg-gradient-danger"}

          isOpen={this.props.someTest.timer}
          toggle={() => this.toggleModal("exampleModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
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
            {this.props.com}
          </div>
          <div className="modal-footer">
            <Button
              color={this.props.someTest.info?"success":"danger"}
              data-dismiss="modal"
              type="button"
              onClick={() => {
                this.props.someTest.info?(() => {
                  this.toggleModal("exampleModal")
                  this.context.router.history.push("/auth/login")
                })():this.toggleModal("exampleModal")
              }}
            >
              关闭
            </Button>
            {/* <Button color="primary" type="button">
              Save changes
            </Button> */}
          </div>
        </Modal>
      </>
    );
  }
}

export default Modals;
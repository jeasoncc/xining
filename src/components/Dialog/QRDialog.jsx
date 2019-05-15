import React from "react";
// reactstrap components
import {
  Button,
  Modal,
} from "reactstrap";
import QRCode from "components/QRCode";
import {observer} from 'mobx-react';
// import appState from "store/store"
@observer
class Modals extends React.Component {
   constructor(props) {
     super(props);
  }
  state = {
    exampleModal: false
  };
  toggleModal = () => {
    // showDia.set("show", false)
    // console.log(appState)
    // console.log(appState.get())
    this.props.appState.resetTimer();
  };
  render() {
    return (
      <>
        <Modal
          className="modal-dialog-centered"
          isOpen={this.props.exampleModal}
          // toggle={() => this.toggleModal("exampleModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {this.props.frameworkName}
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
          <div className="modal-body" style={{textAlign: "center"}}>
            {/* <QRCode></QRCode> */}

            {this.props.id}
          </div>
          <div className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("exampleModal")}
            >
              Close
            </Button>
            <Button color="primary" type="button">
              Save changes
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

export default Modals;
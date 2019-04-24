import React from "react";
// reactstrap components
import {
  Button,
  Modal,
} from "reactstrap";
import QRCode from "components/QRCode";
class Modals extends React.Component {
   constructor(props) {
     super(props);
  }
  state = {
    exampleModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
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
          className="modal-dialog-centered"
          isOpen={this.props.exampleModal}
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
          <div className="modal-body" style={{textAlign: "center"}}>
            <QRCode></QRCode>
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
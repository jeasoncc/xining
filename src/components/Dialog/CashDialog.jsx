import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button as AButton } from "reactstrap";
class AlertDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open alert dialog
        </Button> */}
        <Button color="primary" type="button" className="ml-3" onClick={this.handleClickOpen}>
            本项目需押金，您是否有疑问？
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"请确认"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                园区部分项目为了用户的安全和园区的设施安全需要支付部分押金，您将会在项目结束之后收到退回押金。如有其他疑问，请联系在场工作人员。
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={this.handleClose} color="primary">
              拒绝
            </Button> */}
            <Button onClick={this.handleClose} color="primary" autoFocus>
              了解
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;

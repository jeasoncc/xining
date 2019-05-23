import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {MonetizationOn, AddShoppingCart} from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';
import red from '@material-ui/core/colors/red';
import {
  CardImg,
  Button,
  Badge,
  UncontrolledAlert,
  UncontrolledPopover,
  PopoverBody
} from "reactstrap";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
       {
         props.goodList.map(item => { //这个地方通过this.props.arr接收到父组件传过来的arr，然后在{}里面进行js的循环
           return (
          <Paper className={classes.root} elevation={1}
                  style={{marginBottom:"20px",
                          display: props.id === item.cid ? "block":"none",
                        width: "100%"}}
                  key={item.id}>
                  {/* {props.id} */}
            <CardImg src={item.picture}></CardImg>
              {item.name}
              <br/>
              {/* <Button color="primary" type="button">

              </Button> */}

            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
            {/* <Chip
              icon={<MonetizationOn />}
              label={item.price}
              className={classes.chip}
              style={{background: "#ef6c00"}}
              color="primary"
            /> */}
            {/* <Button color="secondary" disabled size="lg" type="button">
              {item.price}
            </Button> */}
            <Badge color="info" pill>
              ¥{item.price}
            </Badge>
            {/* <Chip
              icon={<AddShoppingCart />}
              label="购买"
              className={classes.chip}
              color="primary"

            /> */}
            <Button className="btn-icon btn-3"
                    color="primary"
                    type="button"
                    size="sm"
                    id="tooltip348236073"
                    onClick={
                      () => props.onClick(item)
                    }>
              <span className="btn-inner--icon">
                <i className="ni ni-cart" />
              </span>
              <span className="btn-inner--text">添加</span>
            </Button>
            {/* <UncontrolledPopover
              placement="top"
              target="tooltip348236073"
              className="popover-default"
            >
              <PopoverBody>
                This is a very beautiful popover, show some love.
              </PopoverBody>
            </UncontrolledPopover> */}

            </Grid>
            <Typography component="p">
              {item.des}
            </Typography>
          </Paper>
        )
        })
      }
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);

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
  Button
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
      <Paper className={classes.root} elevation={1} style={{marginBottom:"20px"}}>
        <CardImg src="https://picsum.photos/200/200"></CardImg>
        <Typography variant="h5" component="h4">
          商品名称
          <br/>
          {/* <Button color="primary" type="button">

          </Button> */}

        </Typography>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
        <Chip
          icon={<MonetizationOn />}
          label="20元"
          className={classes.chip}
          style={{background: "#ef6c00"}}
          color="primary"
        />
        <Chip
          icon={<AddShoppingCart />}
          label="购买"
          className={classes.chip}
          color="primary"

        />
        </Grid>
        <Typography component="p">
          商品介绍
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);

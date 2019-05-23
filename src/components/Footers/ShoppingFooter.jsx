import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { VerticalSplit,AccountBalance,ShoppingCart, Business} from '@material-ui/icons';
const styles = {
  root: {
    width: "100%",
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
        style={{ position: "fixed",
                  bottom: 0}}
      >
        <BottomNavigationAction label="主页"  icon={<AccountBalance />} to="/admin/sales/"  component={Link}/>
        <BottomNavigationAction label="商城" icon={<Business />} to="/Shopping/ShoppingProduct/"  component={Link}/>
        <BottomNavigationAction label="购物车" icon={<ShoppingCart />} to="/Shopping/ShoppingCar/"  component={Link}/>
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { AccountCircle } from '@material-ui/icons';
import {Link} from "react-router-dom"
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
        <BottomNavigationAction label="观光游览" icon={<RestoreIcon />} to="/admin/tourBus/"  component={Link}/>
        <BottomNavigationAction label="商城" icon={<FavoriteIcon />} to="/Shopping/ShoppingProduct/"  component={Link}/>
        <BottomNavigationAction label="我的" icon={<AccountCircle />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
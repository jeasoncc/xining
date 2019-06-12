import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Fastfood from '@material-ui/icons/Fastfood';
import Business from '@material-ui/icons/Business';
import Airportshuttle from '@material-ui/icons/AirportShuttle';
import { AccountCircle } from '@material-ui/icons';
import { ShoppingCart, PinDrop, Home} from '@material-ui/icons';
import {Link} from "react-router-dom"
const styles = {
  root: {
    width: "100%",
  },
  show :{
    display: 'block',
  },
  hidden: {
    display: 'none',
}

};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
    isShow:false
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
        <BottomNavigationAction label="主页"  icon={<Home />} to="/Shopping/sales/"  component={Link}/>
        <BottomNavigationAction label="观光游览" className={localStorage.getItem('userType')==3 ? classes.show: classes.hidden}  icon={<Fastfood />} to="/Shopping/tourBus/"  component={Link}/>
        <BottomNavigationAction label="租车"  icon={<Airportshuttle />} to="/Shopping/rentalCar/"  component={Link}/>
        <BottomNavigationAction label="商城" className={localStorage.getItem('userType')==2 ? classes.show: classes.hidden} icon={<Business />} to="/Shopping/ShoppingProduct/"  component={Link}/>
        <BottomNavigationAction label="智慧景区" icon={<PinDrop />} to="/Shopping/maps/"  component={Link}/>
        {/* <BottomNavigationAction label="我的" icon={<AccountCircle />} to="/admin/user-profile" component={Link}/> */}
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
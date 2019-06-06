import React from "react"
import { Route, Switch } from "react-router-dom";
import routes from "routes.js";
import AdminFooter from "components/Footers/AdminFooter.jsx";
// import PinnedSubheaderList from "components/Sidebar/ShoppingSidebar"
// import Producter from "components/Producter"
// import Grid from '@material-ui/core/Grid';
import AdminNavbar from "components/Navbars/mNavbar.jsx";
import  appState from "store/store";
import {observer} from 'mobx-react';
@observer
class Shopping extends React.Component {
  constructor(props) {
    super(props)
  }
    componentDidUpdate(e) {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        // this.refs.mainContent.scrollTop = 0;
    }
    getRoutes = routes => {
        return routes.map((prop, key) => {
          if (prop.layout === "/Shopping") {
            // console.log(this.props.appState.timer)
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          } else {
            return null;
          }
        });
      };
      getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
          if (
            this.props.location.pathname.indexOf(
              routes[i].layout + routes[i].path
            ) !== -1
          ) {
            return routes[i].name;
          }
        }
        return "Brand";
      };
    render() {
        return (
            <div  style={{paddingBottom:"4rem","paddingTop": "5rem"}}>
               <AdminNavbar name="sasa"/>
              <Switch >{this.getRoutes(routes)}</Switch>
              <AdminFooter></AdminFooter>
              {/* <AdminFooter></AdminFooter> */}
            </ div>
        )
    }
}

export default Shopping
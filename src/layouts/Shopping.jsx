import React from "react"
import { Route, Switch } from "react-router-dom";
import routes from "routes.js";
import ShoppingFooter from "components/Footers/ShoppingFooter.jsx";
// import PinnedSubheaderList from "components/Sidebar/ShoppingSidebar"
// import Producter from "components/Producter"
// import Grid from '@material-ui/core/Grid';
export default class Shopping extends React.Component {
    componentDidUpdate(e) {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        // this.refs.mainContent.scrollTop = 0;
    }
    getRoutes = routes => {
        return routes.map((prop, key) => {
          if (prop.layout === "/Shopping") {
            console.log(prop)
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

    render() {
        return (
            <>
              <Switch>{this.getRoutes(routes)}</Switch>
              <ShoppingFooter></ShoppingFooter>
              {/* <AdminFooter></AdminFooter> */}
            </>
        )
    }
}
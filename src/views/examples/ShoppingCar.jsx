import React from "react"
// import { Route, Switch } from "react-router-dom";
// import routes from "routes.js";
// import ShoppingFooter from "components/Footers/ShoppingFooter.jsx";
// import PinnedSubheaderList from "components/Sidebar/ShoppingSidebar"
import StatsCard from "components/StatsCard"
import {  Container } from "reactstrap";
// import Grid from '@material-ui/core/Grid';
export default class ShoppingCar extends React.Component {

    render() {
        return (
            <Container>
                <br/>
                <StatsCard></StatsCard>
                <StatsCard></StatsCard>
                <StatsCard></StatsCard>
            </Container>
        )
    }
}
import React from "react"
// import { Route, Switch } from "react-router-dom";
// import routes from "routes.js";
// import ShoppingFooter from "components/Footers/ShoppingFooter.jsx";
// import PinnedSubheaderList from "components/Sidebar/ShoppingSidebar"
import StatsCard from "components/StatsCard"
import {  Container } from "reactstrap";
import { Button } from "reactstrap";
import { Alert } from "reactstrap";
// import Grid from '@material-ui/core/Grid';
export default class ShoppingCar extends React.Component {

    render() {
        return (
            <Container style={{paddingBottom:"2rem"}}>
                <br/>
                <StatsCard></StatsCard>
                <StatsCard></StatsCard>
                <StatsCard></StatsCard>
                {/* <Alert className="alert-default">
                    <strong></strong>
                </Alert> */}
                {/* <Button color="primary" size="" type="button" disabled>

                </Button> */}
                <Button color="info" size="" type="button">
                    20  结算
                </Button>
            {/* < div style={{    position: "fixed",
                            bottom: "3.5rem",
                            zIndex: "200000",
                            background: "white",
                            left: 0,
                            height: "2rem",
                            width: "100vw",
                            boxShadow: "0px -10px 36px -13px"}}>sasasasasas</div> */}

            </Container>
        )
    }
}
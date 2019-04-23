import React from "react";
import RecipeReviewCard from "components/Cards/ComplexInteraction.jsx";
import QRCode from "components/QRCode.jsx";
import {Container} from "reactstrap"
export default class tourBus extends React.Component {
    render() {
        return (
            <Container>
                {/* <QRCode /> */}
                <RecipeReviewCard name="jeason" ></RecipeReviewCard>
                <RecipeReviewCard name="mar" ></RecipeReviewCard>
            </Container>
        )
    }
}
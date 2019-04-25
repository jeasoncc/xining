import React from "react"
import PinnedSubheaderList from "components/Sidebar/ShoppingSidebar"
import Producter from "components/Producter"
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom"
import { findGoods } from "bin/axios/user"

export default class ShoppingProduct extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            productItems: []
        }
    }
    componentDidMount() {
        findGoods().then(res => {
            this.setState({
                productItems: res.data.item
              });
        })
    }
    render() {
        const { classes } = this.props;
        const arr = []
        for(let i= 0;i<1000;i++) {
          arr.push(i)
        }
        return (
            <>
            <Fab color="primary" aria-label="Add" to="/Shopping/ShoppingCar/"  component={Link} style={{  right: "1rem",
                                                            position: "fixed",
                                                            bottom: "5rem",
                                                            zIndex: "100"}}>
                    <ShoppingCart />
            </Fab>
            <Grid container >

                <Grid item xs={3}>
                    <PinnedSubheaderList items={this.state.productItems}></PinnedSubheaderList>
                </Grid>
                <Grid item xs={9}>
                    <Grid container  style={{ padding: 20,position: 'relative',
                                                overflow: 'auto',
                                                maxHeight: "90vh", }}>
                        <Producter></Producter>
                        <Producter></Producter>
                        <Producter></Producter>
                        <Producter></Producter>
                    </Grid>
                </Grid>
            </Grid>
            </>
        )
    }
}
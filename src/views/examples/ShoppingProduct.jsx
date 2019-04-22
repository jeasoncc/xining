import React from "react"
import PinnedSubheaderList from "components/Sidebar/ShoppingSidebar"
import Producter from "components/Producter"
import Grid from '@material-ui/core/Grid';
export default class ShoppingProduct extends React.Component {

    render() {
        return (
            <>
            <Grid container >
                <Grid item xs={3}>
                    <PinnedSubheaderList></PinnedSubheaderList>
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
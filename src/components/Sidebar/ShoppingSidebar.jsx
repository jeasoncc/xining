import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import DraftsIcon from '@material-ui/icons/Star';
import { Badge,Button } from "reactstrap";
// import ListSubheader from '@material-ui/core/ListSubheader';
import {findGoodsCategory} from "bin/axios/user.js"

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: "90vh",
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});
class PinnedSubheaderLists extends React.Component {
  componentWillMount() {
    findGoodsCategory().then(res => {
      console.log(res)
    })
  }
  constructor(props){
    super(props);
    this.state = {date: 1 }
  }
  render() {
    return (
      <>
       <List>
       {
         this.props.goodsType.map(item => { //这个地方通过this.props.arr接收到父组件传过来的arr，然后在{}里面进行js的循环
           return (
              <ListItem key={item.id}>
                <Button color="info" size="sm" type="button" block
                 onClick = {() =>
                  this.props.onClick(item.id)
                 } >
                  <span>{item.name}</span>
                  {/* <Badge color="Warning">4</Badge> */}
                </Button>
              </ListItem>
                )
              })
            }
       </List>
      </>
    )
  }
}




export default PinnedSubheaderLists;

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
        <ListItem>
          <Button color="info" size="sm" type="button">
            <span>1111</span>
            {/* <Badge color="Warning">4</Badge> */}
          </Button>
        </ListItem>
       </List>
      </>
    )
  }
}
function PinnedSubheaderList(props) {
  const { classes } = props;
  var i = 1
  const arr = props.items || [ {
    name:"apple",
    id: i++
    },
    {
      name:"apple",
      id: i++
      },
      {
      name:"apple",
      id: i++
      },
      {
      name:"apple",
      id: i++
      },   {
        name:"apple",
        id: i++
        },
        {
        name:"apple",
        id: i++
        },
        {
        name:"apple",
        id: i++
        },   {
          name:"apple",
          id: i++
          },
          {
          name:"apple",
          id: i++
          },
          {
          name:"apple",
          id: i++
          },   {
            name:"apple",
            id: i++
            },
            {
            name:"apple",
            id: i++
            },
            {
            name:"apple",
            id: i++
            },
            {
              name:"apple",
              id: i++
              },
              {
              name:"apple",
              id: i++
              },
              {
              name:"apple",
              id: i++
              }] ;
  return (
    <List className={classes.root} subheader={<li />}>
          <ul className={classes.ul} style={{background:"#fff"}}>
              {/* {props.items.name} */}
            {/* <ListSubheader>{` ${sectionId}`}</ListSubheader> */}
            {arr.map(item => (
              <ListItem key={item.id}  style={{padding:"10px 6px"}}>
                {/* <ListItemText primary={`${item.name}`} /> */}
                {/* <Badge
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  {item.name}
                </Badge> */}
                <Button color="info" size="sm" type="button">
                  <span>{item.name}</span>
                  <Badge color="Warning">4</Badge>
                </Button>
              </ListItem>
            ))}
          </ul>
    </List>
  );
}

PinnedSubheaderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default PinnedSubheaderLists;

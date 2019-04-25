import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import DraftsIcon from '@material-ui/icons/Star';
// import ListSubheader from '@material-ui/core/ListSubheader';


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

function PinnedSubheaderList(props) {
  const { classes } = props;
  const arr = props.items || [1, 2, 3, 4, 5] ;
  return (
    <List className={classes.root} subheader={<li />}>
          <ul className={classes.ul} style={{background:"#f5f5f5"}}>
              {/* {props.items.name} */}
            {/* <ListSubheader>{` ${sectionId}`}</ListSubheader> */}
            {arr.map(item => (
              <ListItem key={item.id}  style={{padding:"10px 6px"}}>
                <ListItemText primary={`${item.name}`} />
              </ListItem>
            ))}
          </ul>
    </List>
  );
}

PinnedSubheaderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PinnedSubheaderList);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import { Button } from "reactstrap";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import AlertDialog from "components/Dialog/EnSureDialog.jsx"
import CashDialog from "components/Dialog/CashDialog.jsx"


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };
  constructor(props) {
    super(props)
  }
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  testevent = () => {
      console.log(this.props.name)
  }
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} raised={false} style={{background:"#fff", margin: "1rem 0"}}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              T
            </Avatar>
          }
        //   action={
        //     <IconButton>
        //       <MoreVertIcon />
        //     </IconButton>
        //   }
          title="绳索游览"ShoppingProduct
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556454555875&di=6d266974fca1c34dc5246799986109b7&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160222%2Fmp60023401_1456152146786_33.jpeg"
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            项目简介( Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.)
          </Typography>
        </CardContent>
        <div>
        <CashDialog />
        </div>
        <CardActions className={classes.actions} disableActionSpacing>
            {/* <Button color="primary" type="button" size="" className="ml-3" onClick={this.testevent}>
            购买
            </Button> */}
            <AlertDialog></AlertDialog>

          {/* <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton> */}
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
              chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
              salt and pepper, and cook, stirring often until thickened and fragrant, about 10
              minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
              to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);

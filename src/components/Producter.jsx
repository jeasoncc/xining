import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {
  CardImg,
  Button,
  Badge,
} from "reactstrap";
import Between from 'between.js';
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim'
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
var that
class PaperSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: this.props,
      buyState: [],
    };
  }
  componentWillMount() {
    that = this
    // this.setState
  }
  jiali(item,index) {
    new Between(1, 10).time(1000)
    .on('update', (value) => { // This callback is executed in every frame
        console.log(value);
        // var aaa =
        let items = this.state.buyState
        items[index] = "中"
        that.setState({
          buyState: items
        })
    })
    .on('start', () => {
      let items = this.state.buyState
      items[index] = ""
      that.setState({
        buyState: items
      })
      // that.setState({
      //   buyState: [this.state.buyState.concat([value])]
      // })
    }).on('complete', () => {
      // state.innerText = 'state: complete';
      // that.setState({
      //   buyState: ""
      // })
      let items = this.state.buyState
      items[index] = "完成"
      that.setState({
        buyState: items
      })
      setTimeout(() => {
        items[index] = ""
        that.setState({
          buyState: items
        })
      }, 300);
    });
    this.props.onClick(item)
  }
  render() {
    return (
      <div style={{    display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-between'}}>
         {
           this.props.goodList.map((item,index) => { //这个地方通过this.this.props.arr接收到父组件传过来的arr，然后在{}里面进行js的循环
          return (
            <Paper className={this.state.classes.root} elevation={1}
                    style={{marginBottom:"20px",
                    padding: ".5rem",
                            display: this.props.id === item.cid ? "block":"none",
                          width: "48%"}}
                    key={item.id}>
                    {/* {this.props.id} */}

              <div style={{height: "100px"}}>

                <CardImg src={"http://139.9.244.125:8550/app-service" + item.picture  } className="someTestImg" ></CardImg>
                {/* <CardImg alt="..." src={"https://picsum.photos/id/1025/4951/3301"} className="someTestImg" ></CardImg> */}
              </div>
                {item.name}
                <br/>

              <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="start"
              >
              <Badge color="info" pill style={{marginBottom:'10px'}}>
                ¥{item.price}
              </Badge>
              <Button className="btn-icon btn-3"
                      color="primary"
                      type="button"
                      size="sm"
                      id="tooltip348236073"
                      onClick={
                        () => {
                          // console.log(this.props.onbuyAnimal())
                          return  that.jiali(item, index)
                        }
                      }>
                <span className="btn-inner--icon">
                {/* <TweenOne
                animation={{
                  x: 20,
                  repeat: 1, // demo 演示需要
                  yoyo: true,
                  repeat: this.state.buyState[index] ?  -1 : 0,
                  duration: 1000
                }}
                paused={this.props.paused}
                style={{ transform: 'translateX(-80px)' }}
                className="ni ni-cart"
              /> */}
                  <i className="ni ni-cart" />
                </span>
                <span className="btn-inner--text">添加{this.state.buyState[index]}</span>
              </Button>

              </Grid>
              <Typography component="p">
                {item.des}
              </Typography>
            </Paper>
          )
          })
        }
      </div>
    );
  }
}
class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.moment = null;
    this.animation = [
      { left: '-40%' },
      { left: '40%' },
      { top: '60px' },
      { scale: 0.7 },
      { scale: 1 },
      { top: 0 },
      { left: '0%' },
    ];
  }


  render() {
    return (
      <TweenOne
        animation={this.animation}
        paused={this.props.paused}
        repeat={-1} // demo 演示需要，时间轴循环
        yoyo // demo 演示需要，时间轴循环
        style={{ transform: 'scale(1)' }}
        className="code-box-shape"
      />
    );
  }
}
Demo.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};
// PaperSheet.propTypes = {
//   this.state.classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(PaperSheet);

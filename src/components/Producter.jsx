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
      moment: null,
      paused: true,
      reverse: false,
      animation:{
        x: 120,
        y:480,
        opacity:0,
        scale: 0.5,
        rotate: 360,
        resetStyle:true,
        // yoyo: true, // demo 演示需要
        // repeat: -1, // demo 演示需要
        duration: 1000,
        onComplete:()=> {
        },
        onStart: ({index,target}) => {
          console.log('sasaa')

        }
      }
    };
  }
  onRestart = () => {
    this.setState({
      paused: false,
      reverse: false,
      moment: 0,
    }, () => {
      this.setState({
        moment: null,
      });
    });
  }
  componentWillMount() {
    that = this
    // this.setState
  }
  jiali(item,index) {
    new Between(1, 10).time(1000)
    .on('update', (value) => { // This callback is executed in every frame
        // console.log(value);
        // var aaa =
        let items = this.state.buyState
        items[index] = ""
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
      items[index] = ""
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
      <div style={{    display: 'grid',
        // flexFlow: 'grid',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridRowGap: '20px',
        gridColumnGap: '10px',
        marginBottom:"17px",
        gridTemplateColumns: 'repeat(3, 30%)'}}>
         {
           this.props.goodList.map((item,index) => { //这个地方通过this.this.props.arr接收到父组件传过来的arr，然后在{}里面进行js的循环
          return (
            <Paper className={this.state.classes.root} elevation={1}
                    style={{marginBottom:"20px",
                    padding: ".5rem",
                    position:"relative",
                    margin:"0 0 17px 0 ",
                    marginBottom:"17px!important",
                    fontSize: '14px',
                            display: this.props.id === item.cid ? "block":"none",
                          width: "100%"}}
                    key={item.id}>
                    {/* {this.props.id} */}

              <div style={{height: "50px"}}>

                <CardImg src={"http://139.9.244.125:8550/app-service" + item.picture  } className="someTestImg" ></CardImg>
                {/* <CardImg alt="..." src={"https://picsum.photos/id/1025/4951/3301"} className="someTestImg" ></CardImg> */}
              </div >
                {item.name}
                <br/>

              <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="flex-start"
              >
              <Badge color="info" pill style={{marginBottom:'10px'}}>
                ¥{item.price}
              </Badge>
              <Button className="btn-icon btn-3"
                      color="primary"
                      type="button"
                      size="sm"
              style={{
                      bottom:"-31px",
                      left:0,
                      position:"absolute"
              }}
                      id="tooltip348236073"
                      onClick={
                       async () => {
                          // console.log(this.props.onbuyAnimal())
                          await this.onRestart()
                          return  that.jiali(item, index)
                        }
                      }>
                <span className="btn-inner--icon">
                  <i className="ni ni-fat-add" />
                </span>
                <span >加入{this.state.buyState[index]}</span>
              </Button>

              {/* <Button type="primary" onClick={this.onRestart}>restart</Button> */}
              </Grid>
              {/* <Typography component="p">
                {item.des}
              </Typography> */}
            </Paper>
          )
          })
        }
        <TweenOne
            animation={this.state.animation}
            paused={this.state.paused}
            reverse={this.state.reverse}
            moment={this.state.moment}
            style={{ position: 'fixed',zIndex:'-1', top:'0' }}
            className="ni ni-folder-17"
            onChange={()=> {
              // console.log('sasas')
            }}
          />
      </div>
    );
  }
}

export default withStyles(styles)(PaperSheet);

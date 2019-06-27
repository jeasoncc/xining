import React, {Component} from "react";
import {Container, Card, CardImg, Button, FormGroup,Input} from "reactstrap"
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css'
import TweenOne from 'rc-tween-one';
import Between from 'between.js';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import {Link} from "react-router-dom"
import ReactStopwatch from 'react-stopwatch';

TweenOne.plugins.push(PathPlugin);
class RentalCar extends Component {
        constructor(props) {
          super(props);
          this.path = `M3.5,175V19c0,0,1-8.75,8.25-11.5S26.5,8,26.5,8l54,53.25
            c0,0,7,8.25,14.5,0.75s51.5-52.25,51.5-52.25s9.75-7,18-2s7.75,11.5,7.75,11.5
            v104c0,0-0.5,15.75-15.25,15.75s-15.75-15-15.75-15V68.5c0,0-0.125-9.125-6-3.25
            s-36.25,36-36.25,36s-11.625,11.875-24-0.5S40.25,65.5,40.25,65.5
            s-5.75-5.25-5.75,2s0,107.25,0,107.25s-0.75,13.5-14.5,13.5S3.5,175,3.5,175z`;
          this.animation = {
            path: this.path,
            repeat: -1,
            duration: 5000,
            ease: 'linear'
          };
        }

        render() {
          return (
            <Container>
                <Card style={{
                            width:'100%',
                            height:  '80vh'
                            }}>
                    <div style={{ position: 'relative', height: 200, width: 200, margin: '10px auto' }}>
                    <TweenOne
                        animation={this.animation}
                        style={{ margin: 0, width: 20, height: 20, transform: 'translate(-10px, -10px)',background: '#2dce89' }}
                        className="code-box-shape"
                        paused={this.props.paused}
                    />
                    <svg width="200" height="200">
                        <path d={this.path} fill="none" stroke="#2dce89"/>
                    </svg>
                    </div>
                    <br></br>
                    <br></br>
                    <blockquote className="blockquote text-center">
                    <ReactStopwatch
                        seconds={0}
                        minutes={0}
                        hours={0}
                        limit="20:00:10"
                        onChange={({ hours, minutes, seconds }) => {
                        // do something
                        console.log(hours)
                        console.log(minutes)
                        console.log(seconds)
                        }}
                        onCallback={(res) => console.log(res)}
                        render={({ formatted, hours, minutes, seconds }) => {
                        return (
                            <div>
                            <p>
                                时间: { formatted }
                            </p>
                            <p>
                                小时: { hours }
                            </p>
                            <p>
                                分钟: { minutes }
                            </p>
                            <p>
                                毫秒: { seconds-1 }
                            </p>
                            </div>
                            )
                        }}
                    />
                    </blockquote>
                    <Container>
                        <Button block color="success" size="lg"  tag={Link} to="/Shopping/controllerCar/" >
                                        我要还车
                        </Button>
                    </Container>
                    {/* ); */}
            </Card>
            </Container>
          );
        }

}

export default function() {
    return(
        <RentalCar />
    )
}
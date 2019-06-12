import React, {Component} from "react";
import {Container, Card, CardImg, Button, FormGroup,Input} from "reactstrap"
import { Link } from "react-router-dom";

class RentalCar extends Component {
    render() {
        return (
            <>
                        <Container>
                            <Card style={{
                            width:'100%',
                            height:  '80vh'
                            }}>
                                <CardImg
                                    alt="..."
                                    src="https://timgsa.baidu.com/timg?image&quaCardTextty=80&size=b9999_10000&sec=1558432070&di=e0bbdd0d3818960a28e28d23e887a13f&imgtype=jpg&er=1&src=http%3A%2F%2Fjzfile.zk71.com%2FFile%2FCorpProductImages%2F2018%2F06%2F25%2F0_womacar_0_20180625194319.jpg"
                                    top
                                />
                                <br/>
                                <Container>
                                    <blockquote className="blockquote text-center">
                                    <p className="lead" style={{    marginBottom: "-26px"
                                                        }}>
                                        押金 -200元
                                    </p>
                                    <Container>
                                    <Container>
                                    <Container>
                                    <Container>
                                    <Container>
                                    <hr/>
                                    </Container>
                                    </Container>
                                    </Container>
                                    </Container>
                                    </Container>
                                    <p style={{    marginTop: "-16px"
                                                        }}>
                                        最低费用每小时10元
                                    </p>
                                    {/* <footer className="blockquote-footer">
                                        <cite className="h2" title="Source Title"></cite>
                                    </footer> */}
                                    </blockquote>
                                    <FormGroup>
                                        <Input
                                        id="exampleFormControlInput1"
                                        placeholder="请输入租车时长"
                                        type="email"
                                        />
                                    </FormGroup>
                                    <Button block color="success" size="lg"  tag={Link} to="/Shopping/timerCar/" >
                                        我要租车
                                    </Button>
                                </Container>
                            </Card>
                        </Container>


            </>
        )
    }
}

export default function() {
    return(
        <RentalCar />
    )
}
import React, {Component} from "react";
import {Container, Card, CardImg, Button, FormGroup,Input} from "reactstrap"
import { Link } from "react-router-dom";
import { getGarsByUser,rentCar} from 'bin/axios/car.js'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import OutlinedInput from '@material-ui/core/OutlinedInput';
// import { CarRecord } from 'pile-ui'
// import '@pile-ui/theme-default/lib/index.min.css'
var that;
class RentalCar extends Component {
constructor(props) {
    super(props)
    this.state = {
        values : {
            age:3
        },
        sendValue:'',
        selectvalue: '',
        selectOption:[]
    }
}
handleChange(event) {
    console.log(event.target.name)
    console.log(event.target.value)
    // console.log(event.target)
    const {id,price,deposit} = event.target.value
    const propsPrame = {id,price,deposit}
    console.log(propsPrame)
    var sendObj = {id,price,deposit}
    for(let item in propsPrame) {
        console.log(propsPrame[item])
        console.log(item)
        sendObj[item] = propsPrame[item].toString()

    }
    console.log(sendObj)
    that.setState(
        {selectvalue: event.target.value,
         sendValue:sendObj
        },
        () => {
            console.log(that.state.selectvalue)
            console.log(that.state.sendValue)
        }
    );
}
pushAjax() {
    let prams = JSON.stringify(that.state.sendValue )
    console.log(prams)
    rentCar(prams).then(res => {
        console.log(res)
    })
}
componentWillMount() {
    console.log("sasasa")
    that = this
    getGarsByUser().then(res => {
        console.log(res)
        that.setState({
            selectOption: res.data.item
        })
    })

}
render() {
    const selectOption = this.state.selectOption
    const values = this.state.values
    const handleChange = this.handleChange
    // const [labelWidth, setLabelWidth] = React.useState(0);
return (
<>
    <Container>
        <Card style={{
                            width:'100%',
                            height:  '80vh',
                            overflowY: 'scroll',
                            paddingBottom: '1rem'
                            }}>
            <CardImg alt="..."
                src="https://timgsa.baidu.com/timg?image&quaCardTextty=80&size=b9999_10000&sec=1558432070&di=e0bbdd0d3818960a28e28d23e887a13f&imgtype=jpg&er=1&src=http%3A%2F%2Fjzfile.zk71.com%2FFile%2FCorpProductImages%2F2018%2F06%2F25%2F0_womacar_0_20180625194319.jpg"
                top />
            <br />
            <Container>
            {/* <FormControl variant="outlined" >
                <InputLabel  htmlFor="outlined-age-simple">
                Age
                </InputLabel>
                <Select
                value={values.age}
                onChange={handleChange}
                input={<OutlinedInput name="age" id="outlined-age-simple" />}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl> */}
            </Container>

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
                                        <hr />
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
                <FormControl variant="outlined" fullWidth={true} style={{marginBottom:'20px',borderColor:'rgb(202, 209, 215)'}} >
                    <InputLabel  htmlFor="outlined-age-simple">
                    选择车辆
                    </InputLabel>
                    <Select
                    value={this.state.selectvalue}
                    onChange={handleChange}
                    input={<OutlinedInput labelWidth={70} name="age" value="s" id="outlined-age-simple" />}
                    >
                    {/* <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem> */}
                    {
                        selectOption.map(current =>
                            <MenuItem value={current} key={current.id}>{current.name+'-'+ current.price+'元'}</MenuItem>
                        )
                    }
                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                </FormControl>
                {/* <FormGroup>
                    <Input id="exampleFormControlInput1" placeholder="请输入租车时长" type="email" style={{height:'56px'}} />
                </FormGroup> */}
                {/* <FormGroup>
                    <Input id="exampleFormControlInput1" placeholder="请输入租车时长" type="email" style={{height:'56px'}} />
                </FormGroup>
                <FormGroup>
                    <Input id="exampleFormControlInput1" placeholder="请输入租车时长" type="email" style={{height:'56px'}} />
                </FormGroup>
                <FormGroup>
                    <Input id="exampleFormControlInput1" placeholder="请输入租车时长" type="email" style={{height:'56px'}} />
                </FormGroup>
                <FormGroup>
                    <Input id="exampleFormControlInput1" placeholder="请输入租车时长" type="email" style={{height:'56px'}} />
                </FormGroup> */}
                {/* tag={Link} to="/Shopping/timerCar/" */}
                <Button block color="success" size="lg"  onClick={that.pushAjax}>
                    我要租车
                </Button>
                {/* <CarRecord></CarRecord> */}
            </Container>
        </Card>
    </Container>


</>
)
}
}
RentalCar.propTypes = {
    values:PropTypes.object
}
export default function() {
return(
<RentalCar />
)
}

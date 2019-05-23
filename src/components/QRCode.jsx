import React from "react"
const QRCode = require('qrcode.react');
// import { clock } from "./../bin/axios/user.js"
// const login = require("./../bin/axios/user.js").login
// console.log(login)

// clock()
class Gopay extends React.Component{
    constructor(props){
        super(props)
        this.state={
            url:""
        }
    }

componentDidMount(){

       this.setState({
             url:"www.baidu.com"
            })
        }

    render(){

        return(
            <div>
                  <QRCode size={150} value={this.state.url}/>
            </div>
        )
    }
}

export default Gopay
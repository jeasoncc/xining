import React from "react";
import RecipeReviewCard from "components/Cards/ComplexInteraction.jsx";
import Ticket from "components/Cards/Ticket.jsx";
import QRCode from "components/QRCode.jsx";
import {Container} from "reactstrap"
export default class tourBus extends React.Component {
    render() {
        return (
            <Container>
                {/* <QRCode /> */}
                <Ticket />
                {/* <RecipeReviewCard imgurl="https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8C%97%E5%B7%9D%E6%B9%BF%E5%9C%B0%E5%85%AC%E5%9B%AD%E7%AE%80%E4%BB%8B&step_word=&hs=2&pn=77&spn=0&di=27840&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2540720525%2C3834523948&os=2178695694%2C676372748&simid=0%2C0&adpicid=0&lpn=0&ln=1009&fr=&fmq=1556442750783_R&fm=result&ic=&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=15&oriquery=&objurl=http%3A%2F%2Fdingyue.nosdn.127.net%2FGjwTl4ycVb0mSckyXvNCwXZI5mqAwrc5rbxm89jqzDhtP1487314477927compressflag.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fqtg2iwt_z%26e3Bgjof_z%26e3B8mn_z%26e3Bv54AzdH3F80AzdH3Fad80AzdH3F89AzdH3FCDGdnOENa9dbaaOI_z%26e3Bip4s%23u654%3D6jsjewgp&gsm=1e&rpstart=0&rpnum=0&islist=&querylist=&force=undefined" ></RecipeReviewCard> */}
                {/* <RecipeReviewCard imgurl="https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8C%97%E5%B7%9D%E6%B9%BF%E5%9C%B0%E5%85%AC%E5%9B%AD%E7%AE%80%E4%BB%8B&step_word=&hs=2&pn=8&spn=0&di=72490&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=15171226%2C3232314164&os=4130948281%2C2092017940&simid=0%2C0&adpicid=0&lpn=0&ln=1009&fr=&fmq=1556442750783_R&fm=result&ic=&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fwww.sztechand.com%2Fupfile%2F2018%2F10%2F19%2F20181019092231_901.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bfzpjviwg1_z%26e3Bv54AzdH3FvgAzdH3Fxtgojgzi5g2xtgAzdH3F25g2ftxtgojgAzdH3Fld8_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=&force=undefined" ></RecipeReviewCard> */}
            </Container>
        )
    }
}
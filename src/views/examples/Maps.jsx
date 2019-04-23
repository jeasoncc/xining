import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";
// import { Map } from 'react-amap';
// core components
import Header from "components/Headers/Header.jsx";

const AMap = window.AMap;
const AMapUI = window.AMapUI

function FMap() {
  return (
    <div id="container" style={{height:"100%"}}>sss</div>
  )
}
function SMap() {

  return (
    <>
      <FMap />
    </>
  )
}
console.log(AMap)
// map()
class Maps extends React.Component {
  componentDidMount() {
  //   console.log(document.querySelector("#container"))
    var mapObj = new AMap.Map('container', {
      zoom:15,//级别
      center: [113.9553, 22.54735 ],//中心点坐标
      viewMode:'3D'//使用3D视图
    });
    // var text = new AMap.Text({
    //   text:'纯文本标记',
    //   anchor:'center', // 设置文本标记锚点
    //   draggable:true,
    //   cursor:'pointer',
    //   angle:10,
    //   style:{
    //       'padding': '.75rem 1.25rem',
    //       'margin-bottom': '1rem',
    //       'border-radius': '.25rem',
    //       'background-color': 'white',
    //       'width': '15rem',
    //       'border-width': 0,
    //       'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
    //       'text-align': 'center',
    //       'font-size': '20px',
    //       'color': 'blue'
    //       },
    //       position: [22.54735,113.95529999999997]
    //   });
    //   text.setMap(mapObj);

      // mapObj.plugin('AMap.Geolocation', function () {
      //  const geolocation = new AMap.Geolocation({
      //       enableHighAccuracy: true,//是否使用高精度定位，默认:true
      //       timeout: 10000,          //超过10秒后停止定位，默认：无穷大
      //       maximumAge: 0,           //定位结果缓存0毫秒，默认：0
      //       convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
      //       showButton: true,        //显示定位按钮，默认：true
      //       buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
      //       buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      //       showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
      //       showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
      //       panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
      //       zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      //   });
      //   mapObj.addControl(geolocation);
      //   geolocation.getCurrentPosition();
      //   AMap.event.addListener(geolocation, 'complete', (res) => {
      //     console.log(res)
      //   });//返回定位信息
      //   AMap.event.addListener(geolocation, 'error', () => {
      //     console.log("error")
      //   });      //返回定位出错信息
      // });
      console.log(AMapUI)
  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow border-0 sometest" >
                < SMap ></SMap>
                {/* <Map amapkey={"09ba159c262da4f9b6695f6bc9a10311"}  /> */}
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Maps;

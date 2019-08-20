import React from "react";

import { Card, Container, Row } from "reactstrap";
import QRDialog from "components/Dialog/QRDialog";
import { observable } from "mobx";
import {observer} from 'mobx-react';
import  appState from "store/store";
const AMap = window.AMap;

const AMapUI = window.AMapUI
function FMap() {
  return (
    <div id="container" style={{height:"100%"}}></div>
  )
}
@observer
class Maps extends React.Component {
  @observable showModel = false;
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      title: '北川湿地公园简介',
      pragph: "北川湿地公园简介"
    }

  }
  componentWillMount() {

  }
  handleClick() {
    this.props.appState.initTimer()
  }

  componentDidMount() {

    var that = this
  //   console.log(document.querySelector("#container"))
    var mapObj = new AMap.Map('container', {
      zoom:18,//级别
      center: [101.766872,36.710194 ],//中心点坐标
      layers: [new AMap.TileLayer.Satellite()],
      // viewMode:'3D'//使用3D视图
    });
    var clickHandler = function(e) {
      alert('您在[ '+e.lnglat.getLng()+','+e.lnglat.getLat()+' ]的位置点击了地图！');
    };

    // 绑定事件
    // mapObj.on('click', clickHandler);
    AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
      //启动页面
        initPage(SimpleMarker);
    });
    mapObj.on('click', function(ev) {
      // console.log(this.props.appState)

      // 触发事件的对象
      var target = ev.target;

      // 触发事件的地理坐标，AMap.LngLat 类型
      var lnglat = ev.lnglat;

      // 触发事件的像素坐标，AMap.Pixel 类型
      var pixel = ev.pixel;

      // 触发事件类型
      var type = ev.type;
      console.log(that.props.router)
      // console.log(lnglat)

      // console.log(pixel)
      // console.log(type)
      // console.log(ev)
    });
    function initPage(SimpleMarker) {

      //创建SimpleMarker实例
      var obj1 =   new SimpleMarker({

          //前景文字
          iconLabel: {
            innerHTML: '<i class="somewenzi" style="    font-size: 12px;">北川河</i>', //设置文字内容
            style: {
                color: '#fff' //设置文字颜色
            }
          },

          //图标主题
          iconTheme: 'numv2',

          //背景图标样式
          iconStyle: 'blue',

          //...其他Marker选项...，不包括content
          map: mapObj,
          position: [101.767489,36.710284 ]
      });
      obj1.on('click', (res) => {
        that.setState({
          title: "北川湿地公园简介",
          pragph: `北川湿地公园位于西宁市北川河核心段，北至规划泄洪河道分水闸，南至6#景观水坝，东至规划滨河东路，西至规划滨河西路，河道长度约6.5公里。规划面积：173.5公顷，其中水域面积约为82公顷，绿化面积约为45公顷，园林景观面积约为0.5457公顷，道路及硬质铺装面积约为16.28公顷。
          从北至南分为五个景观区分别为：以展现昆仑文化为主的怀古园（神话篇）；以展现西宁历史地域文化的怀古园（史诗篇）；以湿地为基底，宗教养生为主的养生园；以多民族文化和谐共生为主题的河湟园；以打造现代滨水商业休闲为主的夏都园。
          怀古园（神话篇）昆仑神话景观区以沉砂池大水面为基底，以昆仑文化为线索，选取若干个中华民族的原始崇拜——昆仑神话传说故事，共同演绎中华民族共有的精神家园和文明根基，整体风格古朴野趣，以展现原生态的自然环境为主，保留现状长势良好的杨树林，结合游步道，形成水中的林间休憩地。
          养生园湿地养生休闲区该区以高原生态湿地环境为基底，将现状水面扩大，并形成大小不一的多个岛屿、半岛，增加水体的流经长度和过水面积。湿地西侧，以生态科普湿地展示景观为主，结合木栈道、生态亭廊、观鸟塔、吊桥等建筑，还原自然的生态湿地环境。湿地东侧是以养生休闲为主要内容，以宗教带给人的感悟为主题，根据从各个不同宗教中提取出的共同要素——对宇宙的思索，对人生的思考等精神探索，构建整个园区的支线，将整个园区营造成一片静逸的“心灵圣地”。
          怀古园（史诗篇）历史文化游览区呈狭长状，整体以历史的发展线索来展示西宁的历史变迁，讲述河湟地区从远古时期马家窑文化开始一直到近代的整个历史脉络，结合特定时期出现的重大历史事件，展示西宁深厚的历史积淀及其对中华民族文化史的重大影响，赋以场地历史的厚重感。
          河湟园民族民俗展示区通过提取西宁各个民族特有的元素符号，以叙事的景观手段将该类符号融入到景观中，以景观化的民族符号来展示每个民族的文化特色。
          夏都园环湖滨水观光区以现代的设计手法、景观元素来展现新时代的西宁魅力，整体上以“昆仑玉”为设计构思，中心大水面取名翠玉湖，商业、绿地、广场、塔等沿水边布局，主要的景观空间采取常见的圆形玉佩为构图，大大小小的“玉盘”散布在水边，有“大珠小珠落玉盘”之意。沿水边设置风情步道，满足游客亲水需求，结合灯光、色彩等，营造已绚丽多彩的现代夏都风情景观空间。`
        })
        that.handleClick()
        // console.log(res)
      })
      var obj2 =   new SimpleMarker({

        //前景文字
        iconLabel: {
          innerHTML: '<i class="somewenzi" style="    font-size: 12px;">沉沙池</i>', //设置文字内容
          style: {
              color: '#fff' //设置文字颜色
          }
        },

        //图标主题
        iconTheme: 'numv2',

        //背景图标样式
        iconStyle: 'blue',

        //...其他Marker选项...，不包括content
        map: mapObj,
        position: [101.763841,36.717818 ]
    });
    obj2.on('click', (res) => {
      that.setState({
        title: "沉沙池简介",
        pragph: `沉淀水中大于规定粒径的有害泥沙，使水的含沙量符合水质要求并与下游渠道挟沙能力相适应的水池。其断面远大于引水渠道断面，水流至其内流速骤减，挟沙能力降低，泥沙遂沉于池中。进出口常设闸门。应在池中沉淀泥沙的最小粒径及沉于池中泥沙的沉降百分比，由用水性质确定。沉沙池按位置分为渠首沉沙池和渠系内沉沙池；按冲洗设备分为水力冲洗式沉沙池和机械清淤式沉沙池，前者又分为定期冲洗式（沉沙与冲洗交替进行）和连续冲洗式（供水和冲沙同时进行，多用于含沙量较大，颗粒较粗，且不允许中止供水的情况）；按沉沙池的数目分为单室式和多室式；按平面布置分为直线形沉沙池和曲线形沉沙池。此外，黄河下游引黄灌区，常结合放淤改土使用条渠形沉沙池，淤满后即用于耕种。`
      })
      that.handleClick()
      // console.log(res)
    })
    var obj3 =   new SimpleMarker({

      //前景文字
      iconLabel: {
        innerHTML: '<i class="somewenzi" style="    font-size: 12px;">玉珠明盘</i>', //设置文字内容
        style: {
            color: '#fff' //设置文字颜色
        }
      },

      //图标主题
      iconTheme: 'numv2',

      //背景图标样式
      iconStyle: 'blue',

      //...其他Marker选项...，不包括content
      map: mapObj,
      position: [101.766309,36.710112]
    });
    obj3.on('click', (res) => {
      that.setState({
        title: "玉珠明盘简介",
        pragph: `
        (1).石制盘子。 南朝 梁元帝 《金楼子·杂记上》：“﹝ 子路 ﹞复怀石盘，曰：‘夫子知虎在水，而使我取水，是欲杀我也。’乃欲杀夫子。问：‘上士杀人如之何？’曰：‘用笔端。’‘中士杀人如之何？’曰：‘用语言。’‘下士杀人如之何？’曰：‘用石盘。’ 子路 乃弃盘而去。”
        (2).平整如盘的大石。 唐 郑损 《泛香亭》诗：“山溜穿云来几里，石盘和藓凿何年？” 宋 叶适 《虎丘》诗：“松梢莫遣风雨横，石盘自添苔藓涩。”`
      })
      that.handleClick()
      // console.log(res)
    })
    var obj4 =   new SimpleMarker({

      //前景文字
      iconLabel: {
        innerHTML: '<i class="somewenzi" style="    font-size: 12px;">服务区</i>', //设置文字内容
        style: {
            color: '#fff' //设置文字颜色
        }
      },

      //图标主题
      iconTheme: 'numv2',

      //背景图标样式
      iconStyle: 'blue',

      //...其他Marker选项...，不包括content
      map: mapObj,
      position: [101.7641043663,36.704648787,]
    });
    obj4.on('click', (res) => {
      that.setState({
        title: "服务区简介",
        pragph: `设施功能最完善和最优质，设有加油站、停车场、便利店、免费休息室、餐厅和汽修厂等服务设施，通常配备了设施条件较好的住宿、冼浴等设施。另外，根据需要和服务区所处的地理位置，可以在服务区规划建设商务会议室、物流仓储、冷冻室和旅游休闲观光区等服务设施。`
      })
      that.handleClick()
      // console.log(res)
    })
  }


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
      AMap.plugin('AMap.ToolBar',function(){//异步加载插件
        var toolbar = new AMap.ToolBar();
        mapObj.addControl(toolbar);
      });

      mapObj.plugin('AMap.Geolocation', function () {
       const geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            maximumAge: 0,           //定位结果缓存0毫秒，默认：0
            convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true,        //显示定位按钮，默认：true
            buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        mapObj.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', (res) => {
          console.log(res)
        });//返回定位信息
        AMap.event.addListener(geolocation, 'error', () => {
          console.log("error")
        });      //返回定位出错信息
      });
  }
  render() {
    return (
      <>
        {/* <Header /> */}
        {/* Page content */}
        <QRDialog   exampleModal={appState.timer}
        appState={appState}
        frameworkName={this.state.title}
        id={this.state.pragph}></QRDialog>
        <Container className="mt--14" fluid>
          <Row>
            <div className="col">
              <Card className="shadow border-0 sometest" >
                < FMap ></FMap>
                {/* <Map amapkey={"09ba159c262da4f9b6695f6bc9a10311"}  /> */}
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
function outFMap() {
  return (
    <Maps appState={appState}></Maps>
  )
}
export default outFMap;

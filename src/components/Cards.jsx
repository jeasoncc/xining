import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialogue: true
    };
  }
  render() {
    return (
      <>
        <Card style={{ width: "100%" }}>
          <CardImg
            alt="..."
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556452835246&di=712dbdfcdb18b6347f6e2cfbeca8c202&imgtype=0&src=http%3A%2F%2Fwww.sztechand.com%2Fupfile%2F2018%2F10%2F19%2F20181019092231_901.jpg"
            top
          />
          <CardBody>
            <CardTitle>北川湿地公园简介</CardTitle>
            {this.state.showDialogue?<CardText >
            北川湿地公园位于西宁市北川河核心段，北至规划泄洪河道分水闸，南至6#景观水坝，
            东至规划滨河东路，西至规划滨河西路，河道长度约6.5公里。规划面积：173.5公顷，
            其中水域面积约为82公顷，绿化面积约为45公顷，园林景观面积约为0.5457公顷，道路及硬质铺装面积约为16.28公顷。
            </CardText> :
             <CardText>
             北川湿地公园位于西宁市北川河核心段，北至规划泄洪河道分水闸，南至6#景观水坝，东至规划滨河东路，西至规划滨河西路，河道长度约6.5公里。规划面积：173.5公顷，其中水域面积约为82公顷，绿化面积约为45公顷，园林景观面积约为0.5457公顷，道路及硬质铺装面积约为16.28公顷。
             从北至南分为五个景观区分别为：以展现昆仑文化为主的怀古园（神话篇）；以展现西宁历史地域文化的怀古园（史诗篇）；以湿地为基底，宗教养生为主的养生园；以多民族文化和谐共生为主题的河湟园；以打造现代滨水商业休闲为主的夏都园。
             怀古园（神话篇）昆仑神话景观区以沉砂池大水面为基底，以昆仑文化为线索，选取若干个中华民族的原始崇拜——昆仑神话传说故事，共同演绎中华民族共有的精神家园和文明根基，整体风格古朴野趣，以展现原生态的自然环境为主，保留现状长势良好的杨树林，结合游步道，形成水中的林间休憩地。
             养生园湿地养生休闲区该区以高原生态湿地环境为基底，将现状水面扩大，并形成大小不一的多个岛屿、半岛，增加水体的流经长度和过水面积。湿地西侧，以生态科普湿地展示景观为主，结合木栈道、生态亭廊、观鸟塔、吊桥等建筑，还原自然的生态湿地环境。湿地东侧是以养生休闲为主要内容，以宗教带给人的感悟为主题，根据从各个不同宗教中提取出的共同要素——对宇
             宙的思索，对人生的思考等精神探索，构建整个园区的支线，将整个园区营造成一片静逸的“心灵圣地”。
             怀古园（史诗篇）历史文化游览区呈狭长状，整体以历史的发展线索来展示西宁的历史变迁，讲述河湟地区从远古时期马家窑文化开始一直到近代的整个历史脉络，结合特定时期出现的重大历史事件，展示西宁深厚的历史积淀及其对中华民族文化史的重大影响，赋以场地历史的厚重感。
             河湟园民族民俗展示区通过提取西宁各个民族特有的元素符号，以叙事的景观手段将该类符号融入到景观中，以景观化的民族符号来展示每个民族的文化特色。
             夏都园环湖滨水观光区以现代的设计手法、景观元素来展现新时代的西宁魅力，整体上以“昆仑玉”为设计构思，中心大水面取名翠玉湖，商业、绿地、广场、塔等沿水边布局，主要的景观空间采取常见的圆形玉佩为构图，大大小小的“玉盘”散布在水边，有“大珠小珠落玉盘”之意。沿水边设置风情步道，满足游客亲水需求，结合灯光、色彩等，营造已绚丽多彩的现代夏都风情景观空间。
             </CardText>
          }


            <Button
              color="info"
              href="#pablo"
              onClick={e => {e.preventDefault()
                // console.log("sasa")
                this.setState({
                  showDialogue: !this.state.showDialogue
                })
              }}
            >
              <Row>
                <Col xs="auto" className="pa-0">{
                  this.state.showDialogue?"展开详情":"收起详情"
                }</Col>
                <Col xs="auto">{
                  this.state.showDialogue?
                  <i className="ni ni-bold-down"></i>
                  :<i className="ni ni-bold-up"></i>
                }</Col>
              </Row>


            </Button>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Cards;
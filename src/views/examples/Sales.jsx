import React,{Component} from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
	Button,
  Container,
  Row,
  Col
} from 'reactstrap';
// import UserHeader from "components/Headers/UserHeader.jsx";
import Cards from "components/Cards.jsx";
const items = [
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556271483109&di=5411317c5e0c14a3583eb926826dc383&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181127%2F43503ee26b6d42b1a3ba33dc4681269d.jpeg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556271607924&di=bf0e72d3a7b772e45852d7e03fce6df1&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FbXQPQrJhDShHvsmT3gZriRv%3DL69iuGmB7E08Tt1iLeAgP1487314478412.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556271694236&di=72d9c2f0761c711b06e8d85cf46114f3&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181010%2Fc42146bde8664bf592621c62e4fe18b7.jpeg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

function Welcome(props) {
	const numbers = [1, 2, 3, 4];
	const listItems = numbers.map((number) => {
		return (
			<Col xs="3" key={number}>
					{/* <Media className="align-items-center">

					</Media> */}
					<div className="avatar avatar-lg rounded-circle">
							<img
								alt="..."
								src={require("assets/img/theme/team-4-800x800.jpg")}
							/>
					</div>
					<Button color="link" block size="sm" className="text-muted">link</Button>
			</Col>
		)
	})
  return (
				<Container>
					<Row>
						{listItems}
					</Row>
				</Container>
		)
}
class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    console.log("sasa")
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const style={
        width: "100%"
    };
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} style={style}/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
    <>
      {/* <UserHeader></UserHeader> */}
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        collapsedHeight="200px"
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      <br/>

			<Welcome></Welcome>
			<br/>
			<Welcome></Welcome>
			<Container >
					<Cards />
					<br/>
					{/* <Cards />
					<Cards />
					<Cards /> */}

				{/* <Cards></Cards> */}
			</Container>

    </>
    );
  }
}


export default Sales;
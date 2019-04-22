import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.jsx";

class Maps extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow border-0 sometest" >
                    <iframe
                        id="gmap_canvas"
                        width="100%"
                        height="100%"
                        src="https://www.amap.com/"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        title="sasa"
                      ></iframe>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Maps;

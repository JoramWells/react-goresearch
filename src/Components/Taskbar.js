import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Taskbar() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  <Carousel responsive={responsive}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
  </Carousel>;
  return (
    <Container>
      <Row className="mb-4 mt-4">
        <Col>Home</Col>
        <Col>In Progress</Col>
        <Col>Completed</Col>
      </Row>
      <Carousel responsive={responsive}>
        <div>
          {" "}
          <Card className="mr-2">
            <Card.Img variant="top" style={{width:"200px", display:"block", margin:"auto", padding:"5px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" />
            <Card.Body>
              <Card.Title>Vue.js</Card.Title>
              <Card.Text>
                  For web responsive mobile apps

              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">+253 students enrolled</small>
            </Card.Footer>
          </Card>
        </div>
        <div>
          {" "}
          <Card className="mr-2">
            <Card.Img variant="top" style={{width:"200px", display:"block", margin:"auto", padding:"5px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
            <Card.Body>
              <Card.Title>React.js</Card.Title>
              <Card.Text>
                  Fast website application with amazing UI/UX design.
                  Learn React Native for mobile<br/>

              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">+40k students enrolled</small>
            </Card.Footer>
          </Card>
        </div>
        <div>
          {" "}
          <Card className="mr-2">
            <Card.Img variant="top" style={{width:"200px", display:"block", margin:"auto", padding:"5px"}} src="data:image/png;base64,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" />
            <Card.Body>
              <Card.Title>php</Card.Title>
              <Card.Text>
                  For backend apps
                  <br />
                  API's
                  <br />
                  Databases


              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">+1k students enrolled</small>
            </Card.Footer>
          </Card>
        </div>
        <div>
          {" "}
          <Card>
            <Card.Img variant="top" style={{width:"200px", display:"block", margin:"auto", padding:"5px"}} src="data:image/png;base64,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" />
            <Card.Body>
              <Card.Title>HTML5</Card.Title>
              <Card.Text>

              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">+100k students enrolled</small>
            </Card.Footer>
          </Card>
        </div>
      </Carousel>
      
    </Container>
  );
}

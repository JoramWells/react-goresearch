import React from "react";
import goresearch from "../GORESEARCH.png";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import team from "./team.svg";

export default function NavHeader() {
  return (
    <section>
      <div
        style={{
          backgroundColor: "#003366",
          height: "200px",
          color: "white",
          paddingTop: "10px",
        }}
      >
        <Container>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <h1>Learning made simple and enjoyable</h1>
              <h2>All course work available</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={goresearch}
                alt="f"
                style={{ width: "300px", margin: "auto", display: "block" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

        <Container>
        <h3 style={{textAlign:"center"}} >All course work available</h3>

          <Row className="mt-4">
              <Col md={{span:8}}>
              <div class="card ">
            <div class="row no-gutters">
            <div class="col-auto border-0">
                <img src={team} alt="f" class="img-fluid" style={{width:"200px"}} />
              </div>
              <div class="col">
                <div class="card-block px-2">
                  <h4 class="card-title">Job</h4>
                  <p class="card-text">Job description</p>
                  <btn class="btn btn-success">
                    APPLY NOW
                  </btn>
                </div>
              </div>

            </div>
          </div>
              </Col>
          </Row>

          <Row className="mt-4 mb-4">
              <Col md={{span:8, offset:4}}>
              <div class="card">
            <div class="row no-gutters">
              <div class="col">
                <div class="card-block px-2">
                  <h4 class="card-title">Courses</h4>
                  <p class="card-text">Available courses</p>
                  <btn class="btn btn-primary">
                   LEARN MORE
                  </btn>
                </div>
              </div>
              <div class="col-auto border-0">
                <img src={team} alt="F" class="img-fluid"  style={{width:"200px"}} />
              </div>
            </div>
          </div>
              </Col>
          </Row>

          
          <Row className="mb-4">
              <Col md={{span:8}}>
              <div class="card ">
            <div class="row no-gutters">
            <div class="col-auto border-0">
                <img src={team} alt="f" class="img-fluid" style={{width:"200px"}}  />
              </div>
              <div class="col">
                <div class="card-block px-2">
                  <h4 class="card-title">Team</h4>
                  <p class="card-text">Our team</p>
                  <btn class="btn btn-primary">
                    LEARN MORE
                  </btn>
                </div>
              </div>

            </div>
          </div>
              </Col>
          </Row>





        </Container >
        <Container>
            <h3>Fast, reliable and affordable</h3>
        </Container>
        <div className="mb-4">
            <Container>
                <Row>
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                </Row>

            </Container>
            <footer className="mb-4 footer py-3">
                <Container>
                this is a footer
                </Container>
            
        </footer>
        </div>


    </section>
  );
}

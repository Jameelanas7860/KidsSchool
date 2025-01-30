import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Popularclass() {
  return (
    <section className="popular py-sm-5">
      <Container className="my-5">
        <Row>
          <div style={{ maxWidth: "650px" }} className="mx-auto mb-4">
            <h3 className="fs-1 fw-700 text text-center mb-4 text-info text-bold">
              Our Popular Classs{" "}
            </h3>
            <p className=" text mb-4 text-center">
              Rapidiously expedite granular imperatives before economically
              sound web services. <br />
              Credibly actualize pandemic strategic themeplatform.
            </p>
          </div>
        </Row>
        <Row>
          <Col sm={6} lg={4}>
            <div className="class-item bg-secondary bg-opacity-10">
              <img
                src={"./img/class_01.jpg"}
                alt=""
                className="img-fluid w-100"
              />
              <ListGroup horizontal>
                <ListGroup.Item className="w-33 text-center fw-700 fs-15 rounded-0 border-white border-start-0 bg-warning text-white py-2 ">
                  <div className="lh-20">Class size</div>
                  <div className="lh-20"> 30 - 40</div>
                </ListGroup.Item>
                <ListGroup.Item className="w-33 text-center fw-700 fs-15 rounded-0 border-white border-start-0 bg-danger text-white py-2 ">
                  <div className="lh-20">Years old</div>
                  <div className="lh-20"> 5 - 6</div>
                </ListGroup.Item>
                <ListGroup.Item className="w-33 text-center fw-700 fs-15 rounded-0 border-white border-start-0 bg-info text-white py-2">
                  <div className="lh-20">Tution fees</div>
                  <div className="lh-20"> $ 1500</div>
                </ListGroup.Item>
              </ListGroup>
              <div className="px-4 py-3">
                <Link
                  to={"/class-single.html"}
                  className="fs-3 fw-700 text-warning"
                >
                  Imagination Classes
                </Link>
                <p>
                  <span className="text-danger">Class Time</span> : 08:00 am -
                  10:00 am
                </p>
                <p>
                  Draticaly novate fuly rarched an plications awesome theme
                  education
                </p>
              </div>
              <div className="bg-warning text-white py-2 px-4">
                <i className="fa fa-home"> 218 New Newyork Road, USA- 1205</i>
              </div>
            </div>
          </Col>
          <Col sm={6} lg={4}>
            <div className="class-item bg-secondary bg-opacity-10">
              <img
                src={"./img/class_02.jpg"}
                alt=""
                className="img-fluid w-100"
              />
              <ListGroup horizontal>
                <ListGroup.Item className="w-33 text-center fw-700 fs-15 rounded-0 border-white border-start-0 bg-warning text-white py-2 ">
                  <div className="lh-20">Class size</div>
                  <div className="lh-20"> 30 - 40</div>
                </ListGroup.Item>
                <ListGroup.Item className="w-33 text-center fw-700 fs-15 rounded-0 border-white border-start-0 bg-danger text-white py-2 ">
                  <div className="lh-20">Years old</div>
                  <div className="lh-20"> 5 - 6</div>
                </ListGroup.Item>
                <ListGroup.Item className="w-33 text-center fw-700 fs-15 rounded-0 border-white border-start-0 bg-info text-white py-2">
                  <div className="lh-20">Tution fees</div>
                  <div className="lh-20"> $ 1500</div>
                </ListGroup.Item>
              </ListGroup>
              <div className="px-4 py-3">
                <Link
                  to={"/class-single.html"}
                  className="fs-3 fw-700 text-danger"
                >
                  Drawing Classes
                </Link>
                <p>
                  <span className="text-danger">Class Time</span> : 08:00 am -
                  10:00 am
                </p>
                <p>
                  Draticaly novate fuly rarched an plications awesome theme
                  education
                </p>
              </div>
              <div className="bg-danger text-white py-2 px-4">
                <i className="fa fa-home"> 218 New Newyork Road, USA- 1205</i>
              </div>
            </div>
          </Col>
          <Col sm={6} lg={4}>
            <div className="class-item bg-secondary bg-opacity-10">
              <img
                src={"./img/class_03.jpg"}
                alt=""
                className="img-fluid w-100"
              />
              <ListGroup horizontal>
                <ListGroup.Item className="w-33 text-center fw-700 fs-15 rounded-0 border-white border-start-0 bg-warning text-white py-2 ">
                  <div className="lh-20">Class size</div>
                  <div className="lh-20"> 30 - 40</div>
                </ListGroup.Item>
                <ListGroup.Item className="w-33 text-center fw-700 fs-15 rounded-0 border-white border-start-0 bg-danger text-white py-2 ">
                  <div className="lh-20">Years old</div>
                  <div className="lh-20"> 5 - 6</div>
                </ListGroup.Item>
                <ListGroup.Item className="w-33 text-center fw-700 fs-15 rounded-0 border-white border-start-0 bg-info text-white py-2">
                  <div className="lh-20">Tution fees</div>
                  <div className="lh-20"> $ 1500</div>
                </ListGroup.Item>
              </ListGroup>
              <div className="px-4 py-3">
                <Link
                  to={"/class-single.html"}
                  className="fs-3 fw-700 text-info"
                >
                  Learning Classes
                </Link>
                <p>
                  <span className="text-danger">Class Time</span> : 08:00 am -
                  10:00 am
                </p>
                <p>
                  Draticaly novate fuly rarched an plications awesome theme
                  education
                </p>
              </div>
              <div className="bg-info text-white py-2 px-4">
                <i className="fa fa-home"> 218 New Newyork Road, USA- 1205</i>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <Link
            to={"/buynow"}
            className=" btn btn-info text-white px-sm-4 px-4 py-3 p-3 fs-5 rounded text  fw-bold"
          >
            See More Classes
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Popularclass;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const teacher = [
  {
    image: "./img/teacher_01.jpg",
    teachername: "Broklyn Doel",
    teachersub: "Science Teacher",
    bgcolor: "bg-danger",
  },
  {
    image: "./img/teacher_02.jpg",
    teachername: "Alex Jhonson",
    teachersub: "Art Teacher",
    bgcolor: "bg-info",
  },
  {
    image: "./img/teacher_03.jpg",
    teachername: "Robot Jhonson ",
    teachersub: "Maths Teacher",
    bgcolor: "bg-warning",
  },
  {
    image: "./img/teacher_04.jpg",
    teachername: "Janaton Doe",
    teachersub: "English Teacher",
    bgcolor: "bg-primary",
  },
];

function Teacher() {
  return (
    <section className="teacher notch py-sm-5 position-relative  mb-4">
      <Container>
        <Row>
          <div style={{ maxWidth: "650px" }} className="mx-auto my-5">
            <h3 className="fs-1 fw-700 text text-center mb-4 text-white text-bold">
              Our Popular Classs{" "}
            </h3>
            <p className=" text mb-4 text-center text-white fs-5 ">
              Rapidiously expedite granular imperatives before economically
              sound web services. <br />
              Credibly actualize pandemic strategic themeplatform.
            </p>
          </div>
        </Row>
        <Row className="mb-5">
          {
          teacher.map((item, index) => {
            return (
              <Col lg={6} className="mb-4 px-4">
                <Row className="mb-5">
                  <div className="teacher-image col-sm-4 p-0">
                    <img
                      src={item.image}
                      alt="teacher-1"
                      className="w-100 h-100 "
                    />
                  </div>
                  <div className={`teacher-details ${item.bgcolor} text-white p-3 pe-5 col-sm-8`}>
                    <h3 className="fw-700">
                      {item.teachername}
                      <span className="fs-15 fw-normal"> {item.teachersub}</span>
                    </h3>
                    <div className="social-link ">
                      <Link to={"javascript.void()"}>
                        <i class="fa fa-facebook  "></i>
                      </Link>
                      <Link to={"javascript.void()"}>
                        <i class="fa fa-vimeo "></i>
                      </Link>
                      <Link to={"javascript.void()"}>
                        <i class="fa fa-twitter"></i>
                      </Link>
                      <Link to={"javascript.void()"}>
                        <i class="fa fa-instagram "></i>
                      </Link>
                      <Link to={"javascript.void()"}>
                        <i class="fa fa-linkedin  "></i>
                      </Link>

                      <p className="text-white">
                        Distinctively initiate and sustainable <br /> synergy
                        vaan tactical opportunities. <br /> Awesome theme
                        ollaboratively.
                      </p>
                      <p className="text-white fw-700 ">View Portfolio</p>
                    </div>
                  </div>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Teacher;

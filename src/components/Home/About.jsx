import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about notch position-relative py-5 mb-lg-5">
      <Container className="my-sm-5">
        <Row>
          <Col md={6}>
            <img
              src={"./img/about.png"}
              alt="about.png"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h3 className="fs-1 fw-700 text-white mb-4">
              About Our KidsAcademy
            </h3>
            <p className="text-white text mb-4">
              Enthusiasticay diseminate competitive oportunitie through
              transparent an actions Compelngly seize viral schemas through
              intermandated creative is adiea sources. Enthusiasticay plagiarize
              clientcentered relationship for the covalent experiences.
              Distinctively architect 24/365 service for wireless is ebusiness
              ahosfluorescently Efficiently comunicate coperative methods of
              empowerment awesome athrough Monotonectaly myocardinate cross and
              functional niche markets and an functional.
            </p>
            <Link to={"/readmore"} className=" btn btn-warning text-white px-sm-4 p-3 me-4 rounded text fw-bold"data-aos="flip-up">Read More</Link>
           <Link to={"/buynow"} className=" btn btn-info text-white px-sm-4 p-3 me-4 rounded text  fw-bold"data-aos="flip-up">Buy Now</Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

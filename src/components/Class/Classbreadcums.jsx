import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Classbreadcums() {
  return (
    <section className="about notch position-relative py-5 mb-lg-5">
      <Container>
      <Row>
          <div style={{ maxWidth: "650px" }} className="mx-auto my-5">
            <h3 className="fs-1 fw-700 text text-center mb-4 text-white text-bold">
             Our Popular Classes
            </h3>
            <p className=" text mb-4 text-center text-white fs-5 ">
              <Link to={"/"} className='text-white fs-5 fst-italic'>Home </Link>
               -  Classes
            </p>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Classbreadcums

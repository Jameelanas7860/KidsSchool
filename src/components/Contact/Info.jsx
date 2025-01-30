import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

function Info() {
  return (
    <section className="info  py-sm-5">
      <Container>
        <Row>
          <Col md={6} lg={6}>
            <div>
              <div>
                <div className="d-flex gap-3">
                  <i
                    class="fa fa-map-marker fs-36 text-warning"
                    aria-hidden="true"
                  ></i>
                  <div>
                    <h3 className="fw-700 text-warning">Our Location</h3>
                    <p className="text-secondary fs-15">
                      218 Sahera Tropical Center Room#7 <br />
                      New Newyork Road 1205
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex gap-3">
                  <i
                    class="fa fa-phone fs-36 text-danger"
                    aria-hidden="true"
                  ></i>
                  <div>
                    <h3 className="fw-700 text-danger">Phone Number</h3>
                    <p className="text-secondary fs-15">
                      01923-970212, 01776-502993 <br />
                      +2154897369
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex gap-3">
                  <i
                    class="fa fa-envelope fs-36 text-primary"
                    aria-hidden="true"
                  ></i>
                  <div>
                    <h3 className="fw-700 text-primary">Email Address</h3>
                    <p className="text-secondary fs-15">
                      hello@labartisan <br />
                      hello@codexcoder.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} lg={6}>
            <Form  className="contact-form">
              <Row >
                <Col  >
                  <Form.Control placeholder="Your Name" className="contact-input fs-5 fw-normal" />
                </Col>
                <Col className="gap-5">
                  <Form.Control placeholder="Your Email" className="contact-input fs-5 fw-normal "  />
                </Col>
              </Row>
              <Row>
              <div class="mb-3 py-4">
                <label for="exampleFormControlTextarea1" class="form-label fs-5 fw-normal">Your Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Type your messages here !!!">
                </textarea>
              </div>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Info;

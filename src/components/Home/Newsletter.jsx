import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

function Newsletter() {
  return (
    <section className="newslwtter notch position-relative bg-info py-sm-4 mb-5">
      <Container>
        <Row>
          <Col lg={6}>
            <h3 className="text-white fs-2 py-4  fw-700">
              Join Our Newsletter
            </h3>
          </Col>
          <Col lg={6}>
            <Form>
              <Row className="align-items-center py-4">
               
                <Col xs="auto">
                 <InputGroup className="mb-2 ">
                   <Form.Control
                      id="inlineFormInputGroup"type="email"
                      placeholder="Enter your e-mail here"/>
                  </InputGroup>
                </Col>
               
                <Col xs="auto">
                  <Button type="submit" className="mb-2">
                    Subscribe Now 
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;

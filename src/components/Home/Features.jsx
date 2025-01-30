import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Features() {
  return (
    <section className='py-5 my-lg-5 features'>
    <Container>
        <Row>
        <Col sm={6} lg={3}>
            <div className='text-center px-3 my-3'>
                  <div className='rounded-circle bg-danger mx-auto d-flex align-items-center justify-content-center' style={{width:"100px" , height:"100px"}}>
                    <i class='fa fa-th large fs-1 text-white' aria-hidden="true"></i>
                </div>
                <h4 className='text-danger fw-700 my-4'>Active Learning</h4>
                <p className='text-center'>
                Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after
               </p>
            </div> 
        </Col>
        <Col sm={6} lg={3}>
            <div className='text-center px-3 my-3'>
                  <div className='rounded-circle bg-warning mx-auto d-flex align-items-center justify-content-center' style={{width:"100px" , height:"100px"}}>
                    <i class='fa fa-user fs-1 text-white' aria-hidden="true"></i>
                </div>
                <h4 className='text-warning fw-700 my-4'>Expert Teachers</h4>
                <p className='text-center'>
                Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after
               </p>
            </div> 
        </Col>
        <Col sm={6} lg={3}>
            <div className='text-center px-3 my-3'>
                  <div className='rounded-circle bg-primary mx-auto d-flex align-items-center justify-content-center' style={{width:"100px" , height:"100px"}}>
                    <i class='fa fa-map-marker fs-1 text-white' aria-hidden="true"></i>
                </div>
                <h4 className='text-primary fw-700 my-4'>Strategic Location</h4>
                <p className='text-center'>
                Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after
               </p>
            </div> 
        </Col>
        <Col sm={6} lg={3}>
            <div className='text-center px-3 my-3'>
                  <div className='rounded-circle bg-info mx-auto d-flex align-items-center justify-content-center' style={{width:"100px" , height:"100px"}}>
                    <i class='fa fa-calendar fs-1 text-white ' aria-hidden="true"></i>
                </div>
                <h4 className='text-info fw-700 my-4'>Full Day Programs</h4>
                <p className='text-center'>
                Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after
               </p>
            </div> 
        </Col>
        </Row>

    </Container>
      
    </section>
  )
}

export default Features

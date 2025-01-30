import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Ourparent() {
  return (
    <section className='ourparent py-sm-5 my-5'> 
    <Container>
    <Row>
          <div style={{ maxWidth: "650px" }} className="mx-auto mb-4">
            <h3 className="fs-1 fw-700 text text-center mb-4 text-info text-bold">
            What Parents Say
            </h3>
            <p className=" text mb-4 text-center fs-5">
              Rapidiously expedite granular imperatives before economically
              sound web services. <br />
              Credibly actualize pandemic strategic themeplatform.
            </p>
          </div>
        </Row>
        <Row>
            <Col sm={6} lg={4}>
                <div className="testimonial border border-2 border-warning rounded-3 position-relative p-4">
                    <p className='mb-2'>
                        Professionally predominate that timely infrastriuctures tops line methodlogies
                        Colaboratively seize scalable achannels before longterm high impact
                    </p>
                    <h3 className='text-danger fs-5 fw-700'>
                         Joly Smith 
                         <span className='text-secondary fs-15 fw-normal'> UI/UX Designer</span>
                    </h3>
                    <img src={"./img/testimonial_icon_01.jpg"} alt="testimonial-1" className='position-absolute top-100'/>
                </div>
                <div className='ps-3' >
                    <img src={"./img/testimonial_01.jpg"} alt="" className='img-fluid rounded-circle border border-4 border-warning ms-5 mt-3 position-relative'/>
                </div>
            </Col>
            <Col sm={6} lg={4}>
                <div className="testimonial border border-2 border-danger rounded-3 position-relative p-4">
                    <p className='mb-2'>
                        Professionally predominate that timely infrastriuctures tops line methodlogies
                        Colaboratively seize scalable achannels before longterm high impact
                    </p>
                    <h3 className='text-danger fs-5 fw-700'>
                         Joly Smith 
                         <span className='text-secondary fs-15 fw-normal'> UI/UX Designer</span>
                    </h3>
                    <img src={"./img/testimonial_icon_02.jpg"} alt="testimonial-1" className='position-absolute top-100'/>
                </div>
                <div className='ps-3' >
                    <img src={"./img/testimonial_02.jpg"} alt="" className='img-fluid rounded-circle border border-4 border-danger ms-5 mt-3 position-relative'/>
                </div>
            </Col>
            <Col sm={6} lg={4}>
                <div className="testimonial border border-2 border-info rounded-3 position-relative p-4">
                    <p className='mb-2'>
                        Professionally predominate that timely infrastriuctures tops line methodlogies
                        Colaboratively seize scalable achannels before longterm high impact
                    </p>
                    <h3 className='text-danger fs-5 fw-700'>
                         Joly Smith 
                         <span className='text-secondary fs-15 fw-normal'> UI/UX Designer</span>
                    </h3>
                    <img src={"./img/testimonial_icon_03.jpg"} alt="testimonial-1" className='position-absolute top-100'/>
                </div>
                <div className='ps-3' >
                    <img src={"./img/testimonial_03.jpg"} alt="" className='img-fluid rounded-circle border border-4 border-info ms-5 mt-3 position-relative'/>
                </div>
            </Col>
        </Row>
    </Container>


    </section>
      
    
  )
}

export default Ourparent

import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="banner  notch position-relative mb-4">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img src={"./img/banner_01.jpg"} alt="banner1" style={{filter:"brightness(70%)"}} />
          <Carousel.Caption className="text-start" style={{top:"27%"}} >
            <h3 className="fw-bold fs-36 fs-22" data-aos="flip-up"> 
              Welcome to Kids Academy
            </h3>
           <h2 className="fw-bold fs-66 fs-32" data-aos="flip-up">
            Best for Education
           </h2>
           <p className="text-white fs-5 text mb-4" style={{maxWidth:"500px"}} data-aos="flip-up">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Lorem, ipsum dolor sit amet.
           </p>
           <div data-aos="flip-up mt-sm-4">
           <Link to={"/readmore"} className="btn btn-warning text-white px-2 py-2 px-sm-4 py-sm-3 me-3 rounded text fw-bold">Read More</Link>
           <Link to={"/buynow"} className=" btn btn-danger text-white px-2 py-2 px-sm-4 py-sm-3 me-3 rounded text  fw-bold">Buy Now</Link>
           </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src={"./img/banner_02.jpg"} alt="banner2" style={{filter:"brightness(70%)"}}/>
          <Carousel.Caption className="text-start" style={{top:"27%"}}>
            <h3 className="fw-bold fs-36 fs-22" data-aos="flip-up"> 
              Welcome to Kids Academy
            </h3>
           <h2 className="fw-bold fs-66 fs-32" data-aos="flip-up">
            Best for Education
           </h2>
           <p className="text-white fs-5 text" style={{maxWidth:"500px"}} data-aos="flip-up">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Lorem, ipsum dolor sit amet.
           </p>
           <div data-aos="flip-up mt-sm-4">
           <Link to={"/readmore"} className="btn btn-warning text-white px-2 py-2 px-sm-4 py-sm-3 me-3 rounded text fw-bold">Read More</Link>
           <Link to={"/buynow"} className=" btn btn-danger text-white px-2 py-2 px-sm-4 py-sm-3 me-3 rounded text  fw-bold">Buy Now</Link>
           </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src={"./img/banner_03.jpg"} alt="banner3" style={{filter:"brightness(70%)"}}/>
          <Carousel.Caption className="text-start" style={{top:"27%"}}>
            <h3 className="fw-bold fs-36 fs-22" data-aos="flip-up"> 
              Welcome to Kids Academy
            </h3>
           <h2 className="fw-bold fs-66 fs-32" data-aos="flip-up">
            Best for Education
           </h2>
           <p className="text-white fs-5 text" style={{maxWidth:"500px"}} data-aos="flip-up">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Lorem, ipsum dolor sit amet.
           </p>
           <div data-aos="flip-up mt-sm-4">
           <Link to={"/readmore"} className="btn btn-warning text-white px-2 py-2 px-sm-4 py-sm-3 me-3 rounded text fw-bold">Read More</Link>
           <Link to={"/buynow"} className=" btn btn-danger text-white px-2 py-2 px-sm-4 py-sm-3 me-3 rounded text  fw-bold">Buy Now</Link>
           </div>  
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Banner;

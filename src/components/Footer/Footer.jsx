import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const latestnews =[
  {
    image:"./img/footer-1.jpg",
    text:"Corem psum dolor the amectetuer adipiscing...",
    date:"2 February 2024",
  },
  {
    image:"./img/footer-2.jpg",
    text:"Corem psum dolor the amectetuer adipiscing...",
    date:"05 March 2024",
  },
  {
    image:"./img/footer-3.jpg",
    text:"Corem psum dolor the amectetuer adipiscing...",
    date:"21 May 2024",
  }
]



function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3}>
            <img src={"./img/logo.png"} alt="logo" className="mb-4"/>
            <p>
              Distily enable team driven services through extensive is a
              relatonships platforms with interactive content. Enthusiastically
              scale effective.
            </p>
            <ul className="list-unstyled ">
              <li className="d-flex gap-3 align-items-center">
                <span> <i class="fa fa-home text-warning border p-2 ms-0 my-2" aria-hidden="true"></i></span>
                New Chokoya Road, USA.
              </li>
              <li className="d-flex gap-3 align-items-center">
                <span class="fa fa-phone text-danger border p-2 ms-0 " aria-hidden="true"></span>
                +8801 923 970 212, 0125897
              </li>
              <li className="d-flex gap-3 align-items-center">
                <span class="fa fa-envelope-o text-danger border p-2 ms-0 my-2" aria-hidden="true"></span>
                Contact@admin LabArtisan
              </li>
              <li className="d-flex gap-3 align-items-center">
                <span class="fa fa-globe  text-primary border p-2 ms-0"  aria-hidden="true" ></span>
                Email@admin LabArtisan
              </li>
            </ul>
          </Col>
          <Col sm={6} lg={3}>
           <h3 className="text-warning fw-bold mb-5">Latest News</h3>
           {
            latestnews.map((item , index)=> {
              return(
                <div className="d-flex gap-2 " key={index}>
                  <div>
                   <a href="blog.html">
                    <img src={item.image} alt="footer-img" />
                   </a>
                  </div>
                  <div>
                    <a href="blog.html" className="text-decoration-none text-dark">{item.text}</a>
                    <p className="text-warning">{item.date}</p>
                  </div>
                </div>
              )
            })
           }
          
          </Col>
          <Col sm={6} lg={3}>
            <h3 className="text-danger fw-bold mb-4 ">Twitter Widget</h3>
            <ul className="list-unstyled"> 
              <li className="d-flex gap-3 align-items-center">
                <span> <i class="fa fa-twitter text-white bg-danger rounded-circle p-2 ms-0 mb-5" aria-hidden="true"></i></span>
                <p>
                Raritas etiam processus them dynamicus sequitur mutatem education theme. <br />
                <span className="text-danger">23 seconds ago</span>
                </p>
              </li>
              <li className="d-flex gap-3 align-items-center">
                <span> <i class="fa fa-twitter text-white bg-warning rounded-circle p-2 ms-0 mb-4" aria-hidden="true"></i></span>
                <p>
                Duis autem veleum iriu dolor hendrerit in vulputate velit.<br />
                <span className="text-warning">43 seconds ago</span>
                </p>
              </li>
              <li className="d-flex gap-3 align-items-center">
                <span> <i class="fa fa-twitter text-white bg-primary rounded-circle p-2 ms-0 mb-4" aria-hidden="true"></i></span>
                <p>
                @frankdoe amber tempor cum soluta nobis eleifend. <br />
                <span className="text-primary">55 seconds ago</span>
                </p>
              </li>
            </ul>

          </Col>
          <Col sm={6} lg={3}>
            <h3 className="text-info mb-4 ">Recent Photos</h3>
             <div className="d-flex align-items-center gap-2">
              <div> <img src={"./img/gallery-1.jpg"} alt="gallery1"  className="my-2" /></div>
              <div> <img src={"./img/gallery_02.jpg"} alt="gallery2" className="my-2" /></div>
              <div> <img src={"./img/gallery_03.jpg"} alt="gallery3" className="my-2" /></div>
             </div>
              <div className="d-flex align-items-center gap-2">
              <div> <img src={"./img/gallery_04.jpg"} alt="gallery4" className="my-2" /></div>
              <div> <img src={"./img/gallery_05.jpg"} alt="gallery5" className="my-2" /></div>
              <div> <img src={"./img/gallery_06.jpg"} alt="gallery6" className="my-2" /></div>
             </div> 
             <div className="d-flex align-items-center gap-2">
              <div> <img src={"./img/gallery_07.jpg"} alt="gallery7"  className="my-2"/></div>
              <div> <img src={"./img/gallery_08.jpg"} alt="gallery8"  className="my-2"/></div>
              <div> <img src={"./img/gallery_09.jpg"} alt="gallery9"  className="my-2"/></div>
             </div> 
         
          
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

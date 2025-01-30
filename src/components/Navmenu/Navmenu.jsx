import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import navmenu from "../../Json-Api/navmenu.json";


function Navmenu() {
  return (
    <>
    <Navbar expand="lg" className="z-index-99 bg-white "  sticky="top"> 
      <Container >
        <Link to="/">
          <img src={"./img/logo.png"} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            {
              navmenu.map((item,index)=> {
                return(
                  <Link to={item.path} className= {`nav-link ${item.textcolor}`} key={index} style={{fontSize:20}}>{item.menu}</Link>
                )
              })
            }
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default Navmenu;

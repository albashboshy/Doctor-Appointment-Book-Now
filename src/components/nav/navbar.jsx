import React from "react";
import { Container, Nav, Navbar, NavDropdown, Collapse } from "react-bootstrap";
import "./nav.css";
import '../../index.css'
import logo from "../../assets/logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone, faSearch, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
const NavbarHeader = () => {
  let [isopen, setisopen] = React.useState(false);
  let clicked = () =>{
    setisopen(!isopen)
  }
  return (
    <Navbar expand="lg" bg="red" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand >
               <Link to="/">  <img src={logo} alt="logo"/></Link>
             </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#aboutus">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#ourteam">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#FAQS">FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#booking">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#error">
                
                Error 404
              </NavDropdown.Item>
              <NavDropdown.Item href="#login">
              
                Login 
              </NavDropdown.Item>
                  <NavDropdown.Item href="#signup">
              
                Resgister
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href='#service'>Services</NavDropdown.Item>
              <NavDropdown.Item href='#service-detail'>Services Detail</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blogs" id="basic-nav-dropdown">
                  <NavDropdown.Item href='#blog'>Blog</NavDropdown.Item>
              <NavDropdown.Item href='#blog-detail'>Blog Detail</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contactus">Contacts</Nav.Link>
            <Nav.Link href="#" onClick={clicked}><FontAwesomeIcon icon={faSearch}  /></Nav.Link>
         {
          isopen &&    <div className="search-page">
              <div className="content-search">
                <span onClick={()=>{
                  setisopen(false)
                }}> x</span>
                <div className="search-box">
                <input type="search"  placeholder="Search"/>
              <p className="icon-search" ><FontAwesomeIcon icon={faSearch} /></p>
                </div>
              </div>
            </div>
         }
            <Nav.Link href="#"> <FontAwesomeIcon icon={faPhone} /> (+0965 66989078 )</Nav.Link>
             <Nav.Link href="#contactus"> <button className="btn-header">Contact us <FontAwesomeIcon icon={faArrowRight} />  </button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;

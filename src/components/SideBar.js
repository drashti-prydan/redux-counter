import '../components/SideBar.css'
import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';




function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className="m-2" >
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Navbar.Brand href="/">
              𝓳𝓾𝓼𝓽 𝓯𝓵𝔂
              <img
                src={
                  "https://seeklogo.com/images/B/butterfly-logo-0A00378822-seeklogo.com.png"
                }
                alt=""
                style={{ width: "30px" }}
              />
            </Navbar.Brand>
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              style={{width:'250px',justifyContent:'center'}}
              >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  style={{fontSize:'35px'}}
                  >
                  𝓳𝓾𝓼𝓽 𝓯𝓵𝔂
                  <img
                    src={
                      "https://seeklogo.com/images/B/butterfly-logo-0A00378822-seeklogo.com.png"
                    }
                    alt=""
                    style={{ width: "30px" }}
                    />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className='list'>
                  <Link to={"/"} className='' >DashBoard</Link>
                  {/* <hr/> */}
                  <Link to={"/home"} >Home</Link>
                  {/* <hr/> */}
                  <Link to={"/calculator"} >Calculator</Link>
                  {/* <hr/> */}
                  <Link to={"/features"} >Features</Link>
                  {/* <hr/> */}
                  <NavDropdown
                    title="AboutUs"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                    <Link to={"aboutUs/aim"} style={{fontSize:'30px',textDecorationLine:'none',color:'black',justifyContent: 'center', display: 'grid'}}>Aim</Link>
                    <br/>
                    <Link to={"aboutUs/vision"} style={{textDecorationLine:'none',color:'black',justifyContent: 'center', display: 'grid'}}>vision</Link>
                  </NavDropdown>
                  {/* <hr/> */}
                  <NavDropdown
                    title="services"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                    <Link to={"/services/services1"} style={{textDecorationLine:'none',color:'black',justifyContent: 'center', display: 'grid'}}>Services1</Link>
                    <br />
                    <Link to={"/services/services2"} style={{textDecorationLine:'none',color:'black',justifyContent: 'center', display: 'grid'}}>Services2</Link>
                    <br />
                    <Link to={"/services/services3"} style={{textDecorationLine:'none',color:'black',justifyContent: 'center', display: 'grid'}}>Services3</Link>

                  </NavDropdown>
                  {/* <hr/> */}
                    <Link to={'https://www.prydan.com/contact/'} style={{textDecorationLine:'none',color:'black'}} target="_blank">Contact Us</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
    </div>
     );
}

export default SideBar;

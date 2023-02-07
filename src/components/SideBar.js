import '../components/SideBar.css'
import React, { useState } from "react";
<<<<<<< HEAD
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
=======
import Home from "./Home";
import { clear } from "../redux/action/CounterAction";
import { clearStore } from "../redux/action/LoginAction";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  // CDBSidebarSubMenu,
  // CDBSidebarFooter,
  // CDBBadge,
  // CDBContainer,
} from "cdbreact";
import { useNavigate } from "react-router-dom";
import { Button, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import Home from './Home';

const Sidebar = () => {
  // const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const dispatch =useDispatch();
  const navigate = useNavigate();
  let isvalid = useSelector((state) => state.rootReducer.LoginReducer.isvalid);
  // const [loggedIn, setLoggedIn] = useState(true);
  const clearLocalStorage = () => {
    localStorage.clear();
    dispatch(clear());
    dispatch(clearStore());
  };

    const handleToggle = () => {
      setOpen(!open);
    }
  // const handel=()=>{
  //   navigate('/home')
  // }
>>>>>>> parent of ef383104 (create pages)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
<<<<<<< HEAD
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
=======
    <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
      <CDBSidebarHeader onClick={ handleToggle }  prefix={<i className="fa fa-bars" />}
      // style={{marginLeft: open?'50px': setOpen=}}
      >
        <div
          className="container"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={
              "https://seeklogo.com/images/B/butterfly-logo-0A00378822-seeklogo.com.png"
            }
            alt=""
            style={{ width: "30px" }}
          />
          <h6 className="ml-2">BABYCARE ™</h6>
        </div>
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="home">
            <NavLink href="/home"
            // onClick={handel}
            />
            Home
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="calculator">calculator</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="clipboard-list">Details</CDBSidebarMenuItem>
          {isvalid === null ? (
            <CDBSidebarMenuItem icon="user-alt"
            className="justify-content-right d-flex"
            style={{Buttonheight:'40px',color:' #8000FF'}}
            onClick={() => navigate("/login")}
            variant="outline-warning"
            >
              Log in
            </CDBSidebarMenuItem>
          ) : (
            <CDBSidebarMenuItem icon="user-alt"
            className="justify-content-right d-flex"
            style={{Buttonheight:'40px',color:' #8000FF'}}
            onClick={clearLocalStorage}
            variant="warning"
            >
              Log out
            </CDBSidebarMenuItem>
          )}
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};
>>>>>>> parent of ef383104 (create pages)

export default SideBar;

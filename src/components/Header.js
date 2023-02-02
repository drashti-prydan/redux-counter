import { Container, Navbar, Nav, NavLink, Button } from "react-bootstrap";
import feature from "../image/features.ico";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../redux/action/CounterAction";
import { clearStore } from "../redux/action/LoginAction";
import chat from "../image/chat-heart-fill.ico";
import SideBar from "./SideBar";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let isvalid = useSelector((state) => state.rootReducer.LoginReducer.isvalid);
  const [loggedIn, setLoggedIn] = useState(true);
  const clearLocalStorage = () => {
    localStorage.clear();
    dispatch(clear());
    dispatch(clearStore());
  };
  return (
    <div>
      <Navbar 
      // bg="warning"
      variant="">
        {/* <Container> */}
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        <SideBar/>
          {/* <Nav className="me-auto"> */}
            <Nav.Link href="/home" className="mx-1">
              <i className="fa fa-fw fa-home" />
              Home
            </Nav.Link>
            <Nav.Link href="/calculator" className="mx-1">
              <i className="fa fa-fw fa-calculator" />
              &nbsp;calculator
            </Nav.Link>
            <Nav.Link href="/features">
              <img src={feature} style={{ width: "30px", height: "25px" }} />
              &nbsp;Features
            </Nav.Link>
            <Nav.Link href="/about_Us">
              <i className="fa fa-fw fa-solid fa-info" />
              About Us
            </Nav.Link>
            </Nav>
        
        {/* </Container> */}
      </Navbar>
    </div>
  );
};
export default Header;

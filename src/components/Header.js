import { Container, Navbar, Nav, Button } from "react-bootstrap";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../redux/action/CounterAction";
import { clearStore } from "../redux/action/LoginAction";

const Header= ()=>{
  const dispatch=useDispatch();
    const navigate = useNavigate();
    let isvalid = useSelector((state) => state.rootReducer.LoginReducer.isvalid);
    const [loggedIn, setLoggedIn ] = useState(true)
    const clearLocalStorage = () => {
      localStorage.clear();
      dispatch(clear());
      dispatch(clearStore());
    }
  // const toggleRoute = () =>{
  //   setLoggedIn(!loggedIn)
  // }
    return(
        <div>
            <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/features">Features</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
            {/* <div> */}
      {/* {props.isLoggedIn ?(
        <Button onClick={props.logIn}>Log In</Button>
      ) : (
        <Button onClick={props.logOut}>Log Out</Button>
      )}
    </div> */}
            { isvalid === null ? (
            <Button className="justify-content-right d-flex" 
            onClick={()=> navigate('/login')} 
            variant="outline-warning">
              Log in</Button>
               ) : ( 
            <Button className="justify-content-right d-flex"
            onClick={clearLocalStorage}
            variant="warning">Log out</Button>
            )    
              } 

            </Container>
        </Navbar>
        </div>
    )
}
export default Header
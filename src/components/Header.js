import { Container, Navbar, Nav, Button } from "react-bootstrap";

import React from "react";
import { useNavigate } from "react-router-dom";

const Header= ()=>{
    const navigate = useNavigate();
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
          
            <Button className="justify-content-right d-flex" onClick={()=> navigate('/login')} variant="outline-warning">Log In</Button>
            </Container>
        </Navbar>
        </div>
    )
}
export default Header
import { Container, Navbar, Nav, NavLink, Button, Row, Col } from "react-bootstrap";
import feature from "../image/features.ico";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../redux/action/CounterAction";
import { clearStore } from "../redux/action/LoginAction";
import chat from "../image/chat-heart-fill.ico";
import SideBar from "./SideBar";
//
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import SideNavBar from '../components/SideNavBar'
// import styled from "styled-components";
// import { IconContext } from "react-icons";
// import { SubMenu } from "react-pro-sidebar";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { SidebarData } from "../SideBarData";
// // import styled from "styled-components";

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
  //

//   const Nav = styled.div`
//   background: #15171c;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;
 
// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;
 
// const SidebarNav = styled.nav`
//   background: #15171c;
//   width: 250px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
//   transition: 350ms;
//   z-index: 10;
// `;
 
// const SidebarWrap = styled.div`
//   width: 100%;
// `;
const [sidebar, setSidebar] = useState(false);
 
const showSidebar = () => setSidebar(!sidebar);
 
  return (
    <div style={{position:'sticky'}}>
        {/* <Col>
      <Row> */}
        {/* <SideNavBar/> */}
        {/* <SideBar/> */}
      <Navbar 
      variant="">
          <Nav className="me-auto" >
          <SideBar/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          {/* <Nav className="me-auto"> */}
          {/* <Container style={}> */}
          <Row className="lg-3 md-6 sm=12">
            <Col>
            <Nav.Link href="/home" className="mx-1" style={{height:'76px',textAlign:'center'}}>
              <i className="fa fa-fw fa-home" />
              Home
            </Nav.Link>
            </Col>
            <Col>
            <Nav.Link href="/calculator" className="mx-1" style={{height:'76px'}}>
              <i className="fa fa-fw fa-calculator" />
              &nbsp;calculator
            </Nav.Link>
            </Col>
            <Col>
            <Nav.Link href="/features" style={{height:'76px',width:'50px',textAlign:'center'}}>
              <img src={feature} style={{ width: "30px", height: "25px" }} />
              &nbsp;Features
            </Nav.Link>
            </Col>
            <Col>
            <Nav.Link href="/aboutUs" style={{height:'76px',textAlign:'center'}}>
              <i className="fa fa-fw fa-solid fa-info" />
              About Us
            </Nav.Link>
            </Col>
          </Row>
          {/* </Container> */}
            {/* </Nav> */}
        </Nav>
        {/* </Container> */}
      </Navbar>
      
        {/* </Row> */}
        {/* </Col> */}
    </div>
    // <>
    // <IconContext.Provider value={{ color: "#fff" }}>
    //     <Nav>
    //       <NavIcon to="#">
    //         <FaIcons.FaBars onClick={showSidebar} />
    //       </NavIcon>
    //       <h1
    //         style={{ textAlign: "center",
    //                  marginLeft: "200px",
    //                  color: "green" }}
    //       >
    //         GeeksforGeeks
    //       </h1>
    //     </Nav>
    //     <SidebarNav sidebar={showSidebar}>
    //       <SidebarWrap>
    //         <NavIcon to="#">
    //           <AiIcons.AiOutlineClose onClick={showSidebar} />
    //         </NavIcon>
    //         {SidebarData.map((item, index) => {
    //           return <SubMenu item={item} key={index} />;
    //         })}
    //       </SidebarWrap>
    //     </SidebarNav>
    //   </IconContext.Provider>
    // </>
  );
};
export default Header;

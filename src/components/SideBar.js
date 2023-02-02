import React, { useState } from "react";
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

  return (
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

export default Sidebar;

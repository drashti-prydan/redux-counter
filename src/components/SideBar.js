import "../components/SideBar.css";
import React, { useState } from "react";
import { Button, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import fly from "../image/Fly.png";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../redux/action/CounterAction";
import { clearStore } from "../redux/action/LoginAction";

function SideBar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  let isvalid = useSelector((state) => state.rootReducer.LoginReducer.isvalid);
  // const [loggedIn, setLoggedIn] = useState(true);
  const clearLocalStorage = () => {
    localStorage.clear();
    dispatch(clear());
    dispatch(clearStore());
  };

  const handleToggle = () => {
    setOpen(!open);
  };
  // const handel=()=>{
  //   navigate('/home')
  // }
  return (
    <div className="m-2">
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Navbar.Brand href="/">
              𝓳𝓾𝓼𝓽 𝓯𝓵𝔂
              <img
                src={fly}
                alt=""
                style={{ width: "40px", paddingLeft: "10px" }}
              />
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  style={{ fontSize: "35px" }}
                >
                  𝓳𝓾𝓼𝓽 𝓯𝓵𝔂
                  <img
                    src={fly}
                    alt=""
                    style={{ width: "40px", paddingLeft: "10px" }}
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="">
                  <Link to={"/"} className="fa fa-fw fa-home">
                    &nbsp;DashBoard
                  </Link>

                  <Link to={"/home"} className="fa fa-fw fa-home">
                    &nbsp;Home
                  </Link>

                  <Link to={"/calculator"} className="fa fa-fw fa-calculator">
                    &nbsp;Calculator
                  </Link>
                  <Link to={"/features"} className="fa fa-fw fa-calculator">
                    &nbsp;Features
                  </Link>
                  <NavDropdown
                    title="AboutUs"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <div className="">
                      <Link
                        to={"aboutUs/aim"}
                        className="fa fa-fw fa-calculator"
                      >
                        Aim
                      </Link>
                    </div>
                    <br />
                    <div>
                      <Link
                        to={"aboutUs/vision"}
                        className="fa fa-fw fa-calculator"
                      >
                        vision
                      </Link>
                    </div>
                  </NavDropdown>
                  {/* <hr/> */}
                  <NavDropdown
                    title="services"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <div>
                      <Link
                        to={"/services/services1"}
                        className="fa fa-fw fa-calculator"
                      >
                        Services1
                      </Link>
                    </div>
                    <br />
                    <div>
                      <Link
                        to={"/services/services2"}
                        className="fa fa-fw fa-calculator"
                      >
                        Services2
                      </Link>
                    </div>
                    <br />
                    <div>
                      <Link
                        to={"/services/services3"}
                        className="fa fa-fw fa-calculator"
                      >
                        Services3
                      </Link>
                    </div>
                  </NavDropdown>
                  {/* <hr/> */}
                  <Link
                    to={"https://www.prydan.com/contact/"}
                    // style={{ textDecorationLine: "none", color: "black" }}
                    target="_blank"
                  >
                    Contact Us
                  </Link>
                  {isvalid === null ? (
                <Button
                  icon="user-alt"
                  className="justify-content-right d-flex"
                  style={{ Buttonheight: "40px", }}
                  onClick={() => navigate("/login")}
                  variant="outline-success"
                >
                  Log in
                </Button>
              ) : (
                <Button
                  icon="user-alt"
                  className="justify-content-right d-flex"
                  style={{ Buttonheight: "40px"}}
                  onClick={clearLocalStorage}
                  variant="outline-secondary"
                >
                  Log out
                </Button>
              )}
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

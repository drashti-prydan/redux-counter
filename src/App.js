import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
// import Counter from "./components/Counter";
// import Operation from "./components/Operation";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Features from "./components/Features";
// import Header from "./components/Header";
import Calculator from "./components/other_componets/Calculator";
// import Aboutus from './components/AboutUs'
import AboutUs from './components/AboutUs'
import Sidebar from "./components/SideBar";
// import  { AboutUs, OurAim, OurVision } from "./components/AboutUs";
// import { Services, ServicesOne, ServicesThree, ServicesTwo } from "./components/Service";
// import Contact from "./components/Contact";
// import { Events, EventsOne, EventsTwo } from "./components/Event";
// import Support from "./components/Support";
// import SideNavBar from "./components/SideNavBar"
function App() {
  const location = useLocation();
  useEffect(() => {
    console.warn("location of current screen", location);
  }, [location.pathname]);
  return (
    <>
      {location.pathname !== "/login" && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
      </Routes>
    </>
  );
}

export default App;

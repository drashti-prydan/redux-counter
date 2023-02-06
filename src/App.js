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
// import AboutUs from './components/AboutUs'
import Sidebar from "./components/SideBar";
// import  Services  from "./components/other_componets/Service";
import  { AboutUs, OurAim, OurVision } from './components/AboutUs';
import { Services, ServicesOne, ServicesThree, ServicesTwo } from "./components/other_componets/Service";
// import Contact from "./components/other_componets/Contact";
// import { Events, EventsOne, EventsTwo } from "./components/other_componets/Event";
// import Support from "./components/other_componets/Support";
// import SideNavBar from "./components/SideNavBar"
import DashBoard from "./components/DashBoard";
function App() {
  const location = useLocation();
  useEffect(() => {
    console.warn("location of current screen", location);
  }, [location.pathname]);
  return (
    <>
      {location.pathname !== "/login" && <Sidebar />}
      <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/calculator" element={<Calculator />}/>
        <Route path="/features" element={<Features />}/>
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/aboutUs/aim' element={<OurAim/>} />
        <Route path='/aboutUs/vision' element={<OurVision/>} />
        <Route path="/service" element={<Services/>}/>    
        <Route path='/services/services1' element={<ServicesOne/>} />
        <Route path='/services/services2' element={<ServicesTwo/>} />
        <Route path='/services/services3' element={<ServicesThree/>} />  
      </Routes>
      {/* <Router> */}
      {/* <SideNavBar />
      <Routes>
        <Route path='/components/aboutUs' element={<AboutUs/>} />
        <Route path='/aboutUs/aim' element={<OurAim/>} />
        <Route path='/aboutUs/vision' element={<OurVision/>} />
        <Route path='/components/other_components/services' element={<Services/>} />
        <Route path='/services/services1' element={<ServicesOne/>} />
        <Route path='/services/services2' element={<ServicesTwo/>} />
        <Route path='/services/services3' element={<ServicesThree/>} />
        <Route path='/components/other_components/contact' element={<Contact/>} />
        <Route path='/components/other_components/events' element={<Events/>} />
        <Route path='/events/events1' element={<EventsOne/>} />
        <Route path='/events/events2' element={<EventsTwo/>} />
        <Route path='/components/other_components/support' element={<Support/>} />
      </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;

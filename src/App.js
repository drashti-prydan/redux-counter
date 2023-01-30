import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Counter from "./components/Counter";
import Operation from "./components/Operation";
import LogIn from './components/LogIn';
import Home from "./components/Home";
import Features from "./components/Features";
import Header from "./components/Header";
function App() {
 const location = useLocation();

 useEffect(() => {
   console.warn("location of current screen",location);
 },[location.pathname]);
  return (
    <>

      {/* <Counter/>
      <Operation/> */}
       {location.pathname !== '/login' && (
       <Header/>
       )}
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn/>} />
           <Route path="/features" element={<Features/> }></Route>
        </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;

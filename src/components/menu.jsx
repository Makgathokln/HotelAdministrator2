import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./home";
// import About from './components/about';
import Landing from "./landing";
import Bookings from "./bookings";
import Admin from './admin';
import Guests from './guests';
import Notifications from './notifications';
import Rooms from './rooms';
import About from "./about";
import AdminView from "./adminView";
import RoomView from "./roomView";
// import SignIn from "./signIn"
import Menu from "./menu";
import pin3 from "../images/pin3.jpg";

const menu = () => {
  return (
    <>
      <Router>
        <div style={{display:'flex'}}>
        <Home />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookings" element={<Bookings />} />

        <Route path="/guests" element={<Guests />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/notifications" element={<Notifications/>} /> 
        <Route path="/rooms" element={<Rooms/>} /> 
        <Route path="/adminView" element={<AdminView/>} /> 
        <Route path="/roomView" element={<RoomView/>} /> 

          </Routes>
        </div>
      </Router>
    </>
  );
};

export default menu;

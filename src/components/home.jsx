import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Link, Route ,useLocation,useParams} from "react-router-dom";
// import "./css/home.css";

import MenuItem from "@material-ui/core/MenuItem";
//import firebase from './firebase'
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
//import img from "./images/admin2.png";
import pin3 from '../images/pin3.jpg';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    const location=useLocation()
    const path=location.pathname
    console.log(path)
return (
<div>
    
    <div class="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white " 
    style={{width: 250}}> 
        <img src={pin3} alt="this is car image" style={{ height:'25%'}} />
    
        <hr/>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item"> 
            
            <Link to="/" class={`nav-link ${path==='/'?'active':'text-white'}`} aria-current="page"> 
            <i class="fa fa-home"></i><span class="ms-2">Home</span> </Link> </li>
            
            
             <li> <Link to="/about" class={`nav-link ${path==='/about'?'active':'text-white'}`}>
             <i class="fas fa-file-alt"></i><span class="ms-2">Bookings</span> </Link> </li>
           
           
            <li> <Link to="/guests" class={`nav-link ${path==='/guests'?'active':'text-white'}`}> 
            <i class="fas fa-users"></i>
            <span class="ms-2">Guests</span> </Link> </li>
            
            <li> <Link to='/rooms' class={`nav-link ${path==='/room'?'active':'text-white'}`}>
            <i class="fas fa-bed"></i><span class="ms-2">Manage Rooms</span> </Link> </li> 
            
            <li> <Link to="/notifications" class={`nav-link ${path==='/notification'?'active':'text-white'}`}> 
            
            <i class="fas fa-bell"></i><span class="ms-2">Notifications</span></Link> </li> 
    
            <li> <Link to="/admin" class={`nav-link ${path==='/admin'?'active':'text-white'}`}> 
            
            <i class="fas fa-user"></i><span class="ms-2">Add Amin</span></Link> </li>
        </ul>
        <hr/>
        <Link to="/" class="nav-link text-white"> LogOut</Link>
    </div>
    
    </div>
    
  );
};
export default Home;
import React, {Component} from 'react';
import Menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import profA from "../images/profA.jpeg";
import guest from '../const/guests';


const admin = () => {

return(
    <>
        
        <div className='form-group'>
         <div className='gueHeader' >

        <input className="form-control" 
        style={{width:800, height:40, 
        borderRadius:10, marginTop:20, marginLeft:20,  border:'2px solid #FF8038',}}
         type="search" placeholder='Search' aria-label='Search'/>
         
        
<p className='nameP' style={{color:'#0B156F',paddingLeft:200, marginTop:20, fontWeight:'bold'}}>Hi, Bella</p>
<img className='imageP' src={profA} alt="this is car image" 
style={{ width:50,height:50, borderRadius:10,marginLeft:140, 
marginTop:10,  }} />

        </div>

        <div className='gueBody'>
           <div className='gueBodyA'> 
           <h3>Admin</h3>
            
            </div>
           
            <hr style={{  color:'#444',border: '1px solid #444', marginLeft:10, marginBottom:40}}/>

            <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Add</a>
    
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">View</a>
  </li>
  
</ul>


        </div>

        <div className='formAdmin'>
        
        <div className="row g-3 align-items-center" style={{paddingTop:20, marginLeft:20}}>
  <div className="col-auto">
    <label for="inputPassword6" class="col-form-label">First Name</label>
  </div>
  <div className="col-auto">
    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div className="col-auto">
  </div>
</div>

<div className="row g-3 mb-8" style={{paddingTop:20, marginLeft:20}}>
  <div className="col-auto">
    <label for="inputPassword6" class="col-form-label">Last Name</label>
  </div>
  <div className="col-auto" >
    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div className="col-auto">
  </div>
</div>

<div className="row g-3 mb-8" style={{paddingTop:20, marginLeft:20}}>
  <div className="col-auto">
    <label for="inputPassword6" class="col-form-label">Email Address</label>
  </div>
  <div className="col-auto" >
    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div className="col-auto">
  </div>
</div>

<div className="row g-3 mb-8" style={{paddingTop:20, marginLeft:20}}>
  <div className="col-auto">
    <label for="inputPassword6" class="col-form-label">Contact Number</label>
  </div>
  <div className="col-auto" >
    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div className="col-auto">
  </div>
</div>

<div className="row g-3 mb-8" style={{paddingTop:20, marginLeft:20}}>
  <div className="col-auto">
    <label for="inputPassword6" class="col-form-label">Password</label>
  </div>
  <div className="col-auto" >
    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div className="col-auto">
  </div>
</div>

<div className='button'>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-light">Light</button>

</div>

</div>
        </div>
        </>
    )
}
export default admin
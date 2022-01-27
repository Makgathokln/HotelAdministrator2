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
        
      

<div class="mb-3 row justify-content-center align-items-center">
    <label for="staticEmail" class="col-sm-2 col-form-label">First Name</label>
    <div class="col-sm-3">
    <input type="text" class="form-control" id="inputPassword" />
    </div>
  </div>
  

  <div class="mb-3 row justify-content-center align-items-center">
    <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
    <div class="col-sm-3">
    <input type="text" class="form-control" id="inputLastName" />
    </div>
  </div>

  <div class="mb-3 row justify-content-center align-items-center">
    <label for="emailAddress" class="col-sm-2 col-form-label">Email Address</label>
    <div class="col-sm-3">
    <input type="password" class="form-control" id="inputPassword" />
    </div>
  </div>

  

  <div class="mb-3 row justify-content-center align-items-center">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-3">
      <input type="text" class="form-control" id="inputPassword" />
    </div>
  </div>

  <div class="mb-3 row justify-content-center align-items-center">
    <label for="contactNumber" class="col-sm-2 col-form-label">Contact Number</label>
    <div class="col-sm-3" >
    <input type="password" class="form-control" id="inputPassword" />
    </div>
  </div>

<div className='button justify-content-center align-items-center'>
<button type="button" className="btn btn-light">Add</button>
<button type="button" className="btn btn-light">Clear</button>

</div>

</div>
        </div>
        </>
    )
}
export default admin
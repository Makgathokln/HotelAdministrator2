import React, {Component} from 'react';
import Menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import profA from "../images/profA.jpeg";
import guest from '../const/guests';


const notifications = () => {

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
           <h3>Notifications</h3>
            <h4>Clear All</h4></div>
           
            <hr style={{  color:'#444',border: '1px solid #444', marginLeft:10, marginBottom:40}}/>

        </div>

        </div>
        </>
    )
}
export default notifications
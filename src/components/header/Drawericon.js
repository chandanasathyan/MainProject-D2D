import { Drawer, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Drawericon.css";
import { HiOutlineMenu } from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";

const Drawericon = () => {


  const [open,setOpen] = useState(false)

  return (
    <>
     <Grid container sx={{ display: { xs: 'flex', sm:"flex", md:"none", lg: 'none', xl: 'none' } }} >
    <Drawer   anchor='right' PaperProps={{
     sx:{backgroundColor:"#fff",width:"50%"}
    }} open={open}  >
   <div className='close' >
    <p onClick={()=>{setOpen(false)}}><AiOutlineClose/></p>
    </div>
<div className='navtablink' > 
<ul>
    <li><Link  style={{textDecoration:"none"}}  className='navtablink1' to="/domains">DOMAINS</Link>   </li>
    <li><Link  style={{textDecoration:"none"}}  className='navtablink1' to="/domains">TESTIMONIALS</Link>   </li>
    <li><Link  style={{textDecoration:"none"}}  className='navtablink1' to="/domains">ABOUT US</Link>   </li>
       <li><Link  style={{textDecoration:"none"}}  className='navtablink1' to="/domains">CONTACT US</Link>   </li>




</ul>
</div>
{/* <div className='navtabbutton'>
  <button className='navtabbutton1' >the group <i  class="fa fa-arrow-right" aria-hidden="true"></i></button>
 
  </div> */}
     </Drawer>
     <div className='navfabar'>
     <Typography  onClick={()=>setOpen(true)}><button  className='navfabars' ><i class="fa fa-bars" aria-hidden="true"></i> </button>  </Typography>
     </div>
     </Grid>

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Drawericon
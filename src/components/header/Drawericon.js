import { Drawer, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Drawericon.css";

import {AiOutlineClose} from "react-icons/ai";

const Drawericon = () => {


  const [open,setOpen] = useState(false)
  


  return (
    <>




















  <Grid container sx={{ display: { xs: 'flex', sm:"flex", md:"none", lg: 'none', xl: 'none' } }} >
    <Drawer   anchor='right' PaperProps={{
     sx:{backgroundColor:"#fff"}
    }} open={open}  >
   <div className='close' >
    <p onClick={()=>{setOpen(false)}}><AiOutlineClose/></p>
    </div>
<div className='navtablink' > 
<ul>
    <li onClick={()=>{setOpen(false)}} ><Link  style={{textDecoration:"none"}}  className='navtablink1' to="/domains">DOMAINS</Link>   </li>
    <li onClick={()=>{setOpen(false)}} ><Link  style={{textDecoration:"none"}}  className='navtablink1' to="/testimonials">TESTIMONIALS</Link>   </li>
    <li onClick={()=>{setOpen(false)}} ><Link  style={{textDecoration:"none"}}  className='navtablink1' to="/about">ABOUT US</Link>   </li>
       <li onClick={()=>{setOpen(false)}} ><Link  style={{textDecoration:"none"}}  className='navtablink1' to="/contact">CONTACT US</Link>   </li>




</ul>
</div>




   </Drawer>
     <div className='navfabar'>
     <Typography  onClick={()=>setOpen(true)}><button  className='navfabars' ><i class="fa fa-bars" aria-hidden="true"></i> </button>  </Typography>
     </div>
     </Grid> 

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Drawericon
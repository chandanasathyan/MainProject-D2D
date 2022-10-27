import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import AppBar from '@mui/material/AppBar';
import { Grid, Toolbar, Typography } from '@mui/material';
import Drawericon from './Drawericon';

import { motion } from "framer-motion"
import  logodare from "../../Assests/logo-1-01.png"



const navlogoanimation = {
  hidden:{
    opacity:0,
    x:-200
  },
  visible:{    
    opacity:1,
    x:0,
    transition:{
      type:"spring",
      duration:2
    }
  }
}



const navlinkanimation = {
  hidden:{
    opacity:0,
    x:200,
   
  },
  visible:{
    x:0,
    opacity:1,
    transition:{
      duration:2
    }
  }
 
}




const Header = () => {



  

  return (
    <>
    
    
 <AppBar  sx={{background:"#fff",height:100}} className='navbar'  >
        <Toolbar>
        <Grid container spacing={2}  sx={{ display: { xs: 'none', sm:"none", md:"flex", lg: 'flex', xl: 'flex' } }}>
  
       
 <Grid className='navlogo' item md={3}  lg={3} > 

 <motion.div className='logo'
variants={navlogoanimation} initial="hidden" animate="visible"
 
 >
<p>  <Link  to="/">
  
<img className='navlogo1' src={logodare} alt="" srcset="" />

  </Link></p> 
   </motion.div>



  </Grid> 

 <Grid Grid style={{textDecoration:"none"}} className='navlink'  item   md={8.6} lg={8.3} >
  <motion.nav className='navlinkss' 
variants={navlinkanimation} initial="hidden" animate="visible"
  
  >

<Link  style={{textDecoration:"none"}}  className='navlink1' to="/domains">DOMAINS</Link>  
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/testimonials">TESTIMONIALS</Link>  
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/about">ABOUT US</Link>  
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/contact">CONTACT US</Link>  

</motion.nav>

 </Grid>  

  </Grid>

{/* tab */}


  <Grid container sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' ,lg:"none" } }} >
 <Grid className='navtablogo'  item xs={10} sm={10}>

  <div  className='navtablogodiv'>
 <p>  <Link className='navtablogo1'  to="/">D2DPro <span>Solutions</span></Link></p> 
 </div> 
 </Grid>
  <Grid  item xs={1} sm={1}>
    <div className='icontab' >
   <Typography className='icontab1'> <Drawericon/> </Typography>
   </div>

   </Grid>
   </Grid> 


 </Toolbar>
 </AppBar>




    
    
    </>
  )
}

export default Header
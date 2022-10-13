import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import AppBar from '@mui/material/AppBar';
import { Grid, Toolbar, Typography } from '@mui/material';
import Drawericon from './Drawericon';


const Header = () => {
  return (
    <>
    
    
 <AppBar  sx={{background:"transparent"}} className='navbar'  >
        <Toolbar>
        <Grid container spacing={2}  sx={{ display: { xs: 'none', sm:"none", md:"flex", lg: 'flex', xl: 'flex' } }}>
  
       
 <Grid className='navlogo' item md={3}  lg={3} > 

 
<p>  <Link className='navlogo1' to="/">D2DPro <span>Solutions</span></Link></p>  



  </Grid> 
 <Grid style={{textDecoration:"none"}} className='navlink'  item   md={8.6} lg={8} >
  <nav >

<Link  style={{textDecoration:"none"}}  className='navlink1' to="/domains">DOMAINS</Link>  
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/testimonials">TESTIMONIALS</Link>  
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/about">ABOUT US</Link>  
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/contact">CONTACT US</Link>  

</nav>
 </Grid>  

  </Grid>


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
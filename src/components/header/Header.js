import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import AppBar from '@mui/material/AppBar';
import { Grid, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <>
    
    
 <AppBar  sx={{background:"transparent",boxShadow:"none"}} className='navbar'  >
        <Toolbar>
        <Grid container spacing={2}  sx={{ display: { xs: 'none', sm: 'none', md: 'flex' ,lg:"flex" } }}>
  
        <Grid className='logoimg' item xs={1}>
          {/* <img src={logo} alt="" srcset="" /> */} 
        </Grid>
  <Grid className='navlogo' item xs={2}>

 
<p>  <Link className='navlogo1' to="/">D2D </Link></p>  


  </Grid> 
  <Grid style={{textDecoration:"none"}} className='navlink' item xs={7}>
  <nav >

<Link  style={{textDecoration:"none"}}  className='navlink1' to="/domains">DOMAINS</Link>  
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/domains">DOMAINSnew</Link>  

<Link  style={{textDecoration:"none"}}  className='navlink1' to="/testimonials">TESTIMONIALS</Link>  
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/about">ABOUT US</Link>  
<Link  style={{textDecoration:"none"}}  className='navlink1' to="/contact">CONTACT US</Link>  

</nav>
  </Grid> 

  </Grid>
 </Toolbar>
 </AppBar>




    
    
    </>
  )
}

export default Header
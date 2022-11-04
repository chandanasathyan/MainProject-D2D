import React from 'react'
import "./Footer.css"
import {  Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { AiFillLinkedin} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import { FaInstagram,FaWhatsapp,FaTwitter} from "react-icons/fa";



const Footer = () => {
  return (
    <>
        <div className='footer-main-div'>


<Grid container>

<Grid item xs={12} sm={6} md={4} lg={4}>
    <div className='footer-head1'>
    <p>D2DPro Solutions</p>
    </div>
    <div className='footer-para1'>
    <p>
    Websoullabs is an international web & mobile app development company based in India. Also, we provide premium IT Services related to mobile app, web, enterprise and other trending technology to business globally.
    </p>
    </div>


</Grid>


<Grid item xs={12} sm={6} md={4} lg={4}>
<div className='footer-head2'>
<p>Useful Links</p>
</div>
<div className='footer-links'>
   
<p><Link  style={{textDecoration:"none"}} className="footlinks"  to="/domains">DOMAINS</Link></p>  
<p><Link  style={{textDecoration:"none"}} className="footlinks"  to="/testimonials">TESTIMONIALS</Link></p>  
<p><Link  style={{textDecoration:"none"}}  className="footlinks" to="/about">ABOUT US</Link>  </p>
<p><Link  style={{textDecoration:"none"}}  className="footlinks" to="/contact">CONTACT US</Link> </p>

</div>

</Grid>


<Grid item xs={12} sm={6} md={4} lg={4}>
<div className='footer-head3'>
<p>Contact Us</p>
</div>
<div className='footer-contact'>
   <li>14/291 K, Suite 75D, 1st Floor </li>
   <li>A Square, Edathala PO, Kuzhivelippady </li>
   <li>Ernakulam, Kerala Pin 683561 </li>
   <li>Phone: +91-8848430565 </li>
   <li>Email: websoul467@gmail.com</li>
</div>

</Grid>




</Grid>

        </div>

<div className='copyright'>
<Grid container>



<Grid item xs={12} >
  <div  className='copyright-icons'>
 
  <AiFillLinkedin/>    <FaFacebookF/>  <FaInstagram/>  <FaWhatsapp/>  <FaTwitter/>
  </div>

</Grid>


<Grid item xs={12}  >
  <div className='copyright-text'>
  <p>Copyright © 2022 websoullabs. All Rights Reserved</p>
  </div>

</Grid>



</Grid>
</div>


    </>
  )
}

export default Footer
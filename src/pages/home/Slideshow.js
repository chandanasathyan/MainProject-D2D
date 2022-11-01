import React from 'react'
import "./Slideshow.css"
import {Grid} from "@mui/material";

import banweb from "../../Assests/slideshow/Slide-show-Web-view.png"
import bantab from "../../Assests/slideshow/Tab-View (1).png"
import banmob from "../../Assests/slideshow/Mob-view (3).png"

import banwebmob from "../../Assests/slideshow/Mobile-web-view.png"
import bantabmob from "../../Assests/slideshow/Mobile-tab-View.png"
import banmobmob from"../../Assests/slideshow/Mobile-Mob-view (4).png"
import dmweb from "../../Assests/slideshow/DM-Web-view.png"
import dmtab from "../../Assests/slideshow/DM-Tab-View.png"
import dmmob from"../../Assests/slideshow/DM-Mob-view.png"
import qaweb from "../../Assests/slideshow/QA-Web-view.png"
import qatab from "../../Assests/slideshow/QA-Tab-View.png"
import qamob from"../../Assests/slideshow/QA-Mob-view.png"


import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"




const Slideshow = () => {


    const settings = {
  
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 3500,
        pauseOnHover: false,
        cssEase: "linear"
        
      };

      const settingstab = {
  
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        cssEase: "linear"
        
      };


      const settingsmob = {
  
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        cssEase: "linear"
        
      };

  return (
    <>

   

      <div style={{marginTop:"95px",overflow:"hidden"}}>
 
     
    <Grid container sx={{ display: { xs: 'none', sm:"none", md:"flex", lg: 'flex', xl: 'flex' } }} >
    <Grid item xs={12}>
        <Slider {...settings} >
          <div>
      
          <img className=' slideimage1' src={banweb} alt="web development"/>
         
          </div>
          <div>
      
      <img className=' slideimage1' src={banwebmob} alt="mob app development"/>
     
      </div>
      <div>
      
          <img className=' slideimage1' src={dmweb} alt="digital marketing"/>
         
          </div>
          <div>
      
      <img className=' slideimage1' src={qaweb} alt="software testing"/>
     
      </div>
       
        </Slider>
        </Grid>
        </Grid>


{/* tab */}


        <Grid container sx={{ display: { xs: 'none', sm:"flex", md:"none", lg: 'none', xl: 'none' } }}>
    <Grid item xs={12}>
        <Slider {...settingstab}>
          <div>
      
          <img className=' slideimage1'  src={bantab} alt="web development"/>
         
          </div>
          <div>
      
      <img className=' slideimage1' src={bantabmob} alt="mob app development"/>
     
      </div>
      <div>
      
          <img className=' slideimage1' src={dmtab} alt="digital marketing"/>
         
          </div>
          <div>
      
      <img className=' slideimage1' src={qatab} alt="software testing"/>
     
      </div>
       
        </Slider>
        </Grid>
        </Grid>

{/* mob */}




        <Grid container sx={{ display: { xs: 'flex', sm:"none", md:"none", lg: 'none', xl: 'none' } }}>
    <Grid item xs={12}>
        <Slider {...settingsmob}>
          <div>
      
          <img className=' slideimage1' src={banmob}  alt="web development"/>
         
          </div>
          <div>
      
      <img className=' slideimage1'  src={banmobmob} alt="mob app development"/>
     
      </div>
      <div>
      
          <img className=' slideimage1'  src={dmmob} alt="digital marketing"/>
         
          </div>
          <div>
      
      <img className=' slideimage1' src={qamob} alt="software testing"/>
     
      </div>
       
        </Slider>
        </Grid>
        </Grid>



      </div>
    
   
















    
    
    
    </>
  )
}

export default Slideshow
import React from 'react'
import "./Slideshow.css"
import {Grid} from "@mui/material";

import banweb from "../../Assests/Slide-show-Web-view.png"
import bantab from "../../Assests/Tab-View (1).png"
import banmob from "../../Assests/Mob-view (3).png"
import banwebmob from "../../Assests/Mobile-web-view.png"
import bantabmob from "../../Assests/Mobile-tab-View.png"
import banmobmob from"../../Assests/Mobile-Mob-view (4).png"
import dmweb from "../../Assests/DM-Web-view.png"
import dmtab from "../../Assests/DM-Tab-View.png"
import dmmob from"../../Assests/DM-Mob-view.png"
import qaweb from "../../Assests/QA-Web-view.png"
import qatab from "../../Assests/QA-Tab-View.png"
import qamob from"../../Assests/QA-Mob-view.png"


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
      
          <img className=' slideimage1' src={banweb} alt=""/>
         
          </div>
          <div>
      
      <img className=' slideimage1' src={banwebmob} alt=""/>
     
      </div>
      <div>
      
          <img className=' slideimage1' src={dmweb} alt=""/>
         
          </div>
          <div>
      
      <img className=' slideimage1' src={qaweb} alt=""/>
     
      </div>
       
        </Slider>
        </Grid>
        </Grid>


{/* tab */}


        <Grid container sx={{ display: { xs: 'none', sm:"flex", md:"none", lg: 'none', xl: 'none' } }}>
    <Grid item xs={12}>
        <Slider {...settingstab}>
          <div>
      
          <img className=' slideimage1'  src={bantab} alt=""/>
         
          </div>
          <div>
      
      <img className=' slideimage1' src={bantabmob} alt=""/>
     
      </div>
      <div>
      
          <img className=' slideimage1' src={dmtab} alt=""/>
         
          </div>
          <div>
      
      <img className=' slideimage1' src={qatab} alt=""/>
     
      </div>
       
        </Slider>
        </Grid>
        </Grid>

{/* mob */}




        <Grid container sx={{ display: { xs: 'flex', sm:"none", md:"none", lg: 'none', xl: 'none' } }}>
    <Grid item xs={12}>
        <Slider {...settingsmob}>
          <div>
      
          <img className=' slideimage1' src={banmob}  alt=""/>
         
          </div>
          <div>
      
      <img className=' slideimage1'  src={banmobmob} alt=""/>
     
      </div>
      <div>
      
          <img className=' slideimage1'  src={dmmob} alt=""/>
         
          </div>
          <div>
      
      <img className=' slideimage1' src={qamob} alt=""/>
     
      </div>
       
        </Slider>
        </Grid>
        </Grid>



      </div>
    
   
















    
    
    
    </>
  )
}

export default Slideshow
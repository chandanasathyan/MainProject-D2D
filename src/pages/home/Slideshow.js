import React from 'react'
import "./Slideshow.css"
import {Grid} from "@mui/material";
// import webBan from "../../Assests/webBan-1.jpg"
import webdev from "../../Assests/webdevelopment.jpg"
import mobileapp from "../../Assests/mobileapp.jpg"
import digitalmar from "../../Assests/digitalmarketing.jpg"
import softtest from "../../Assests/softwaretesting.jpg"
// import slide from '../../Assests/Slide-show-01.jpg'
import slide from "../../Assests/slid-72.jpg"
import slide2 from "../../Assests/new-72-01.jpg"



import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Slideshow = () => {
  return (
    <>
    
    <Grid container  sx={{ display: { xs: 'none', sm:"none", md:"flex", lg: 'flex', xl: 'flex' } }}>
    <Grid item xs={12}>
<div className='slideshow-main-div'>

<div class="uk-position-relative uk-visible-toggle uk-light"  tabindex="-1" uk-slideshow="ratio: false; autoplay:false;autoplay-interval: 2000;pause-on-hover: false">

    <ul class="uk-slideshow-items" uk-height-viewport="">
        <li>
            <img className=' slideimage1' src={webdev} alt="" uk-cover/>
        </li>
        <li>
            <img className=' slideimage1' src={mobileapp} alt="" uk-cover/>
        </li>
        <li>
            <img className=' slideimage1' src={digitalmar} alt="" uk-cover/>
        </li>
        <li>
            <img className=' slideimage1' src={softtest} alt="" uk-cover/>
        </li>
    </ul>

    <a style={{color:"#111",marginTop:"-80px"}} class="uk-position-center-left uk-position-small uk-hidden-hover" href="#q" uk-slidenav-previous uk-slideshow-item="previous"> <BsChevronLeft/> </a>
    <a style={{color:"#111",marginTop:"-80px"}} class="uk-position-center-right uk-position-small uk-hidden-hover" href="#q" uk-slidenav-next uk-slideshow-item="next"> <BsChevronRight/> </a>

</div>
</div>

</Grid>  
</Grid>

{/* tab */}

<Grid container  sx={{ display: { xs: 'none', sm:"flex", md:"none", lg: 'none', xl: 'none' } }} >
    <Grid item xs={12}>
<div className='slideshow-main-div'>

<div class="uk-position-relative uk-visible-toggle uk-light"  tabindex="-1" uk-slideshow="ratio: false; autoplay:false;autoplay-interval: 2000;pause-on-hover: false">

    <ul class="uk-slideshow-items" uk-height-viewport="">
        <li>
            <img className=' slideimage1' src={slide2} alt="" uk-cover/>
        </li>
        <li>
            <img className=' slideimage1' src={mobileapp} alt="" uk-cover/>
        </li>
        <li>
            <img className=' slideimage1' src={digitalmar} alt="" uk-cover/>
        </li>
        <li>
            <img className=' slideimage1' src={softtest} alt="" uk-cover/>
        </li>
    </ul>

    <a style={{color:"#111",marginTop:"-80px"}} class="uk-position-center-left uk-position-small uk-hidden-hover" href="#q" uk-slidenav-previous uk-slideshow-item="previous"> <BsChevronLeft/> </a>
    <a   style={{color:"#111",marginTop:"-80px"}} class="uk-position-center-right uk-position-small uk-hidden-hover" href="#q" uk-slidenav-next uk-slideshow-item="next"> <BsChevronRight/> </a>

</div>


</div> 
</Grid>  
</Grid>


{/* mobile */}


<Grid container  sx={{ display: { xs: 'flex', sm:"none", md:"none", lg: 'none', xl: 'none' } }}>
    <Grid item xs={12}>
<div className='slideshow-main-div'>

<div class="uk-position-relative uk-visible-toggle uk-light"  tabindex="-1" uk-slideshow="ratio: false; autoplay:false;autoplay-interval: 2000;pause-on-hover: false">

    <ul class="uk-slideshow-items" uk-height-viewport="">
        <li>
            <img className=' slideimage1' src={slide} alt="" uk-cover/>
        </li>
        <li>
            <img className=' slideimage1' src={mobileapp} alt="" uk-cover/>
        </li>
        <li>
            <img className=' slideimage1' src={digitalmar} alt="" uk-cover/>
        </li>
        <li>
            <img className=' slideimage1' src={softtest} alt="" uk-cover/>
        </li>
    </ul>

    <a style={{color:"#111",marginTop:"-80px"}} class="uk-position-center-left uk-position-small uk-hidden-hover" href="#q" uk-slidenav-previous uk-slideshow-item="previous"> <BsChevronLeft/> </a>
    <a   style={{color:"#111",marginTop:"-80px"}} class="uk-position-center-right uk-position-small uk-hidden-hover" href="#q" uk-slidenav-next uk-slideshow-item="next"> <BsChevronRight/> </a>

</div>


</div> 
</Grid>  
</Grid>


    
    
    
    </>
  )
}

export default Slideshow
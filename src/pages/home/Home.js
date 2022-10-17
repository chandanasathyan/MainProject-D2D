import React from 'react'
import "./Home.css"
import {Grid} from "@mui/material";
import webdevban1 from "../../Assests/Webdevebanner-1.jpg";
import webdevban2 from "../../Assests/webdevelopmentban-1.jpg";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


const Home = () => {
   
  return (
   <>
   <Grid container>
    <Grid item xs={12}>
<div className='slideshow-main-div'>

<div class="uk-position-relative uk-visible-toggle uk-light"  tabindex="-1" uk-slideshow="ratio: false; autoplay:true;autoplay-interval: 2000;pause-on-hover: false">

    <ul class="uk-slideshow-items" uk-height-viewport="">
        <li>
            <img className=' slideimage1' src={webdevban1} alt="" uk-cover/>
        </li>
        <li>
            <img className=' slideimage1' src={webdevban1} alt="" uk-cover/>
        </li>
        <li>
            <img className=' slideimage1' src={webdevban2} alt="" uk-cover/>
        </li>
    </ul>

    <a style={{color:"#111"}} class="uk-position-center-left uk-position-small uk-hidden-hover" href="#q" uk-slidenav-previous uk-slideshow-item="previous"> <BsChevronLeft/> </a>
    <a   style={{color:"#111"}} class="uk-position-center-right uk-position-small uk-hidden-hover" href="#q" uk-slidenav-next uk-slideshow-item="next"> <BsChevronRight/> </a>

</div>


</div> 
</Grid>  
</Grid>
   </>
  )
}

export default Home
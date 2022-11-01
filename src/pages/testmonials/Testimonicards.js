import { Grid } from '@mui/material'
import React from 'react'
import "./Testimonicards.css"
import profile from "../../Assests/testimonialscards/people1.png";
import { FcGoogle } from 'react-icons/fc';
import { BsMicrosoft } from 'react-icons/bs';

const Testimonicards = () => {
  return (
    <>
     <div className='testimonidiv'>
       <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={3}>
          <div id='cards1' class="uk-card ">
           <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
             <div class="uk-width-auto">
                <img class="uk-border-circle" src={profile} alt="Avatar"/>
             </div>
             <div className='testipara'>
                <p className="para">Amala P</p>   
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p> 
                <FcGoogle/>&nbsp;&nbsp;&nbsp;<span>web developer</span>
             </div>
           </div>
          </div>
         </div>
        </Grid>


        <Grid item xs={12} sm={6} md={3}>
         <div id='cards1' class="uk-card ">
          <div class="uk-card-header">
           <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle" width="50" height="50" src={profile}  alt="Avatar"/>
            </div>
            <div >
              <p className="para">Arun VS</p>   
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p> 
              <BsMicrosoft/>&nbsp;&nbsp;&nbsp;<span>software tester</span>
            </div>
           </div>
          </div>
         </div>
        </Grid>


        <Grid item xs={12} sm={6} md={3}>
         <div id='cards1' class="uk-card ">
          <div class="uk-card-header">
           <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle" width="50" height="50"  src={profile} alt="Avatar"/>
            </div>
            <div >
              <p className="para">Sherin</p>   
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p> 
              <FcGoogle/>&nbsp;&nbsp;&nbsp;<span>software tester</span>
            </div>
           </div>
          </div>
         </div>
        </Grid>


        <Grid item xs={12} sm={6} md={3}>
         <div id='cards1' class="uk-card ">
          <div class="uk-card-header">
           <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle" width="50" height="50"  src={profile} alt="Avatar"/>
            </div>
            <div >
              <p className="para">Madhav</p>   
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p> 
              <BsMicrosoft/>&nbsp;&nbsp;&nbsp;<span>web developer</span>
            </div>
           </div>
          </div>
         </div>
        </Grid>

       </Grid>
     </div>
    </>
  )
}

export default Testimonicards
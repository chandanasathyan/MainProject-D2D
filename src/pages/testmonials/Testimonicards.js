import { Grid } from '@mui/material'
import React from 'react'
import "./Testimonicards.css"
import profile from "../../assets/people1.png";

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
                <img class="uk-border-circle" src={profile} alt=""/>
            </div>
           
            <div className='testipara'>
                <p className="para">Amala P</p>   
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p> 
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
                <img class="uk-border-circle" width="50" height="50"  src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="Avatar"/>
            </div>
            <div >
            <p className="para">Arun VS</p>   
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p> 
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
                <img class="uk-border-circle" width="50" height="50"  src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="Avatar"/>
            </div>
            <div >
            <p className="para">Madhav</p>   
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p> 
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
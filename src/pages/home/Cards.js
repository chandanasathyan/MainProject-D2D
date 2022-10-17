import { Grid } from '@mui/material'
import React from 'react'
import "./Cards.css"


const Cards = () => {
  return (
    <>

<div className='card-main-div'>
<Grid container spacing={2} >
<Grid item md={3} sm={6} xs={12} >  

<div class="uk-card ">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle"  src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="Avatar"/>
            </div>
            <div >
                <h3 class="uk-card-title ">Web development</h3>
                {/* <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p> */}
            </div>
        </div>
    </div>
    <div class="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
   
</div>

</Grid>

<Grid item  md={3} sm={6} xs={12} >  
<div> 
<div class="uk-card ">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle" src="https://image.shutterstock.com/image-vector/ai-letter-vector-logo-260nw-456471202.jpg" alt="Avatar"/>
            </div>
            <div >
                <h3 class="uk-card-title ">Mobile App development</h3>
                {/* <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p> */}
            </div>
        </div>
    </div>
    <div class="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
   
</div>
</div>
</Grid>

<Grid item  md={3} sm={6} xs={12} >  
<div> 
<div class="uk-card ">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle"  src="https://image.shutterstock.com/image-vector/ai-letter-vector-logo-260nw-456471202.jpg" alt="Avatar"/>
            </div>
            <div >
                <h3 class="uk-card-title ">Graphic design</h3>
                {/* <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p> */}
            </div>
        </div>
    </div>
    <div class="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
   
</div>
</div>
</Grid>


<Grid item  md={3}sm={6} xs={12} >  
<div> 
<div class="uk-card ">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle"  src="https://image.shutterstock.com/image-vector/ai-letter-vector-logo-260nw-456471202.jpg" alt="Avatar"/>
            </div>
            <div >
                <h3 class="uk-card-title ">Software testing</h3>
                {/* <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p> */}
            </div>
        </div>
    </div>
    <div class="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
   
</div>
</div>

</Grid>
</Grid>
</div>




    </>
  )
}

export default Cards
import { Box,  Button,  Card,  CardActions,  CardContent, CardMedia, duration, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "./Cards.css"
import Programheading from './Programheading'
import { motion,useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Cards = () => {

 const {ref,inView} = useInView();

 const animation = useAnimation();


useEffect(()=>{
console.log("useEffect = ", inView)  
if(inView){
      animation.start({
            y:0,
            opacity:1,

            transition:{
                  type:'spring',duration:1
            },
            exit:{
                  y:"10vw",
                  opacity:0,
            }
      })
}

if(!inView){
      animation.start({
            y:"10vw",
            opacity:0,

      })
}


 },[inView])

  return (
    <>



<Programheading/>


<div ref={ref}>

<motion.div className='card-main-div' 

animate={animation}


>
<Grid container spacing={2} >
<Grid item md={3} sm={6} xs={12} > 

<div className="card-main">
<card sx={{ maxWidth: 345 }}>
<div className='card-img-round' >
              <img  class="uk-border-circle"  src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="Avatar"/> 
             
            </div>
      <CardContent>
        
      <div className='web-card-head'>
            <p >
          Web Development
          </p>
          </div>
          <div className='card-content-web'>
            <li>
              <span>HTML,CSS, Javascript </span>  
                    </li>
                    <li>
              <span>CSS </span>  
                    </li> 
                 <li>
              <span>Javascript </span>  
                    </li> 
                    <li>
              <span>Bootstrap </span>  
                    </li>     
                    <li>
              <span>React  </span>  
                    </li>
                    <li>
              <span>Angular</span>  
                    </li>
                    <li>
              <span>Laravel </span>  
                    </li>
                    <li>
              <span>Wordpress </span>  
                    </li>
                    <li>
              <span>Express </span>  
                    </li>
                    <li>
              <span>MongoDB </span>  
                    </li> 
                    
                
                    </div>
      </CardContent>
     
    </card>
    </div>
    </Grid>


    <Grid item md={3} sm={6} xs={12} > 

<div className="card-main">
<card sx={{ maxWidth: 345 }}>
<div className='card-img-round' >
              <img  class="uk-border-circle"  src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="Avatar"/> 
             
            </div>
      <CardContent>
        
      <div className='mob-card-head'>
            <p >
         Mob App Development
          </p>
            </div>
           
            <div className='card-content-mob'>
               <li>
              <span>HTML </span>  
                    </li>
                    <li>
              <span>CSS </span>  
                    </li>
                    <li>
              <span>Javascript </span>  
                    </li>
                    <li>
              <span>React native</span>  
                    </li>
                    <li>
              <span>Flutter </span>  
                    </li>  
                    <li>
              <span>Firebase </span>  
                    </li>
                    <li>
              <span> Ionic </span>  
                    </li>    
      
               
              
           </div>
      </CardContent>
     
    </card>
    </div>
    </Grid>



    <Grid item md={3} sm={6} xs={12} > 

<div className="card-main">
<card sx={{ maxWidth: 345 }}>
<div className='card-img-round' >
              <img  class="uk-border-circle"  src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="Avatar"/> 
             
            </div>
      <CardContent>
        
      
      <div className='graph-card-head'>
            <p >
     Graphic Designing
          </p>
            </div>

            <div className='card-content-graph'>
               <li>
              <span>Figma</span>  
                    </li>
                    <li>
              <span> Adobe XD</span>  
                    </li>
                    <li>
              <span>Adobe illustrator </span>  
                    </li>
                    <li>
              <span>Photoshop</span>  
                    </li>
                    <li>
              <span>Logo Design</span>  
                    </li>  
                    <li>
              <span>UI/UX Prototyping</span>  
                    </li>
               
              
           </div>
      </CardContent>
     
    </card>
    </div>
    </Grid>




    <Grid item md={3} sm={6} xs={12} > 

<div className="card-main">
<card sx={{ maxWidth: 345 }}>
<div className='card-img-round' >
              <img  class="uk-border-circle"  src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="Avatar"/> 
             
            </div>
      <CardContent>
      <div className='test-card-head'>
            <p >
          Software   Testing
          </p>
            </div>
            <div className='card-content-test' >
                <li>
              <span>Automation Testing</span>  
                    </li>
                    <li>
              <span> Manual Testing</span>  
                    </li>
                    <li>
              <span>Selenium</span>  
                    </li>
       
                
                
            </div>
      </CardContent>
     
    </card>
    </div>
    </Grid>




    </Grid>
    </motion.div>
    </div>






    </>
  )
}

export default Cards
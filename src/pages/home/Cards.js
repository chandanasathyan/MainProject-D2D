import { Box,  Button,  Card,  CardActions,  CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import "./Cards.css"
import Programheading from './Programheading'


const Cards = () => {
   

  return (
    <>

 {/* <div className='card-main-div'>
<Grid container spacing={2} >
<Grid item md={3} sm={6} xs={12} >   
<div className="card-main">
 <div class="uk-card ">
    <div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>  
            <div className='card-img-round' >
              <img class="uk-border-circle"  src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="Avatar"/> 
             
            </div>
           
               
            
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
              
        </div> 
    </div>
   
   
</div>
</div>
</Grid> 


<Grid item  md={3} sm={6} xs={12} >  
<div className="card-main">
<div class="uk-card ">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div className='card-img-round' >
              <img class="uk-border-circle"  src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="Avatar"/> 
             
            </div>
        
               
            
            <div className='mob-card-head'>
            <p >
         Mob App development
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
        </div>
    </div>
    <div class="uk-card-body">
       
    </div>
   
</div>
</div>
</Grid> 

 <Grid item  md={3} sm={6} xs={12} >  
 <div className="card-main">
<div class="uk-card ">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div className='card-img-round' >
              <img class="uk-border-circle"  src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="Avatar"/> 
             
            </div>
          
               
            
                 <div className='graph-card-head'>
            <p >
     Graphic Design
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
        </div>
    </div>
    <div class="uk-card-body">
        
    </div>
   
</div>
</div>
</Grid> 


<Grid item  md={3}sm={6} xs={12} >  
<div className="card-main">
<div class="uk-card ">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div className='card-img-round' >
              <img  class="uk-border-circle"  src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="Avatar"/> 
             
            </div>
          
               
            
            <div className='test-card-head'>
            <p >
          Software Testing
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
        </div>
    </div>
    <div class="uk-card-body">
       
    </div>
   
</div>
</div>

</Grid>
</Grid>
</div>  */}

<Programheading/>




<div className='card-main-div'>
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
    </div>





{/* <div className='card-main-div'>
<Grid container spacing={3} >
<Grid item md={3} sm={6} xs={12}>
<div className="card-main">
<div class="uk-card " >
    <div style={{display:"flex"}}>
     
         
<CardMedia
        component="img"
        sx={{ width: 50,height:50,borderRadius:50,margin:2 }}
        image="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg"
        alt="webdevelopment"
      />
     
      <Box >
        <CardContent >
            <div className='web-card-head'>
            <p >
          Web Development
          </p>
            </div>
          
       
        </CardContent>
       
      </Box>
      </div>
      <Box >
        <CardContent className='card-con'>
          <div className='card-content-web' >



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
       
      </Box>
   
      </div>
    </div>
    </Grid> 


    <Grid item md={3} sm={6} xs={12}>
<div className="card-main">
<div class="uk-card " >
    <div style={{display:"flex"}}>
     
<CardMedia
        component="img"
        sx={{ width: 50,height:50,borderRadius:50,margin:2 }}
        image="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg"
        alt="webdevelopment"
      />
     
      <Box >
        <CardContent >
            <div className='mob-card-head'>
            <p >
         Mobile App development
          </p>
            </div>
          
       
        </CardContent>
       
      </Box>
      </div>
      <Box >
        <CardContent >
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
       
      </Box>
   
      </div>
    </div>
    </Grid> 




    <Grid item md={3} sm={6} xs={12}>
<div className="card-main">
<div class="uk-card " >
    <div style={{display:"flex"}}>
     
<CardMedia
        component="img"
        sx={{ width: 50,height:50,borderRadius:50,margin:2 }}
        image="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg"
        alt="webdevelopment"
      />
     
      <Box >
        <CardContent >
            <div className='graph-card-head'>
            <p >
     Graphic Design
          </p>
            </div>
          
       
        </CardContent>
       
      </Box>
      </div>
      <Box >
        <CardContent >
          <div className='card-content-graph' >
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
       
      </Box>
   
      </div>
    </div>
    </Grid> 

    <Grid item md={3} sm={6} xs={12}>
<div className="card-main">
<div class="uk-card " >
    <div style={{display:"flex"}}>
     
<CardMedia
        component="img"
        sx={{ width: 50,height:50,borderRadius:50,margin:2 }}
        image="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg"
        alt="webdevelopment"
      />
     
      <Box >
        <CardContent >
            <div className='test-card-head'>
            <p >
          Software Testing
          </p>
            </div>
          
       
        </CardContent>
       
      </Box>
      </div>
      <Box >
        <CardContent >
          <div className='card-content-test'>
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
       
      </Box>
   
      </div>
    </div>
    </Grid> 




    </Grid> 
    </div> */}


    </>
  )
}

export default Cards
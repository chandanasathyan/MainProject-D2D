import { Box,  CardContent, CardMedia, Grid } from '@mui/material'
import React from 'react'
import "./Cards.css"


const Cards = () => {
   

  return (
    <>

{/* <div className='card-main-div'>
<Grid container spacing={2} >
<Grid item md={3} sm={6} xs={12} >   */}

{/* <div class="uk-card ">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
              <img class="uk-border-circle"  src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="Avatar"/> 
             
            </div>
            <div className='card-content'>
               
            
            <h3 class="uk-card-title ">Web Development</h3>
              
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
       
                

            </div>
        </div>
    </div>
    <div class="uk-card-body">
      
    </div>
   
</div>
</Grid> */}


{/* <Grid item  md={3} sm={6} xs={12} >  
<div> 
<div class="uk-card ">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle" src="https://image.shutterstock.com/image-vector/ai-letter-vector-logo-260nw-456471202.jpg" alt="Avatar"/>
            </div>
            <div className='card-content'>
               
            
               <h3 class="uk-card-title ">Mobile App Development</h3>
                   <li>
                   Lorem ipsum dolor sit amet 
                   </li>
                   <li>
                   Lorem ipsum dolor sit amet 
                   </li>
                   <li>
                   Lorem ipsum dolor sit amet 
                   </li>
                   <li>
                   Lorem ipsum dolor sit amet 
                   </li>
      
               
              
           </div>
        </div>
    </div>
    <div class="uk-card-body">
       
    </div>
   
</div>
</div>
</Grid> */}

{/* <Grid item  md={3} sm={6} xs={12} >  
<div> 
<div class="uk-card ">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle"  src="https://image.shutterstock.com/image-vector/ai-letter-vector-logo-260nw-456471202.jpg" alt="Avatar"/>
            </div>
            <div className='card-content'>
               
            
               <h3 class="uk-card-title ">Graphic Designer</h3>
                   <li>
                   Lorem ipsum dolor sit amet 
                   </li>
                   <li>
                   Lorem ipsum dolor sit amet 
                   </li>
                   <li>
                   Lorem ipsum dolor sit amet 
                   </li>
                   <li>
                   Lorem ipsum dolor sit amet 
                   </li>
      
               
              
           </div>
        </div>
    </div>
    <div class="uk-card-body">
        
    </div>
   
</div>
</div>
</Grid> */}


{/* <Grid item  md={3}sm={6} xs={12} >  
<div> 
<div class="uk-card ">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle"  src="https://image.shutterstock.com/image-vector/ai-letter-vector-logo-260nw-456471202.jpg" alt="Avatar"/>
            </div>
            <div className='card-content' >
               
            
                <h3 class="uk-card-title ">Software testing</h3>
                    <li>
                  <span>Lorem ipsum dolor sit amet </span>  
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
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
</div> */}




<div className='card-main-div'>
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
          Web development
          </p>
            </div>
          
       
        </CardContent>
       
      </Box>
      </div>
      <Box >
        <CardContent className='card-con'>
          <div className='card-content-web' >
          <li>
                  <span>Lorem ipsum dolor sit amet </span>  
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
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
                  <span>Lorem ipsum dolor sit amet </span>  
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
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
                  <span>Lorem ipsum dolor sit amet </span>  
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
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
                  <span>Lorem ipsum dolor sit amet </span>  
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet 
                    </li>
          </div>
       
        </CardContent>
       
      </Box>
   
      </div>
    </div>
    </Grid> 




    </Grid> 
    </div>


    </>
  )
}

export default Cards
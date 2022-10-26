import { Grid } from '@mui/material'
import React from 'react'
import "./Domaincards.css"
import { BiTime } from 'react-icons/bi';

const Domaincards = () => {
  return (
    <>
     <div className='domain2'>
     <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
         <div id='card1' class="uk-card uk-card-default uk-card-body">
            <i id='bookmark1' class="fa fa-bookmark" aria-hidden="true" style={{color:'blue',position:'absolute',right:'10px',top:'0px'}}></i>
            <h3 class="uk-card-title">Web <br/>Development</h3>
            <button className='butn1' style={{border:'none',borderRadius:"10px",backgroundColor:'#77b5fe',color:"#fff"}}><span style={{fontSize:"20px",color:"#fff"}}><BiTime/></span>&nbsp;6 Months</button>
            <button className='but1' style={{border:'none',borderRadius:"10px",backgroundColor:'#77b5fe',color:"#fff"}}><i class="fa fa-inr" aria-hidden="true">&nbsp;10K</i></button>
            <p>
            <li><span>HTML,CSS,JavaScript</span></li>
            <li><span>Bootstrap</span></li>
            <li><span>React</span></li>
            <li><span>Angular</span></li>
            <li><span>Laraval</span></li>
            <li><span>Wordpress</span></li>
            <li><span>Express</span></li>
            <li><span>MongoDB</span></li>
            </p>
         </div>
        </Grid>
        <Grid  item xs={12} sm={6} md={3}>
         <div id='card2' class="uk-card uk-card-default uk-card-body">
            <i id='bookmark1' class="fa fa-bookmark" aria-hidden="true" style={{color:'#7435a4',position:'absolute',right:'10px',top:'0px'}}></i>
            <h3 class="uk-card-title">Mobile App Development</h3>
            <button className='butn2' style={{border:'none',borderRadius:"10px",backgroundColor:'#cda4de',color:"#fff"}}><span style={{fontSize:"20px",color:"#fff"}}><BiTime/></span>&nbsp;6 Months</button>
            <button className='but2' style={{border:'none',borderRadius:"10px",backgroundColor:'#cda4de',color:"#fff"}}><i class="fa fa-inr" aria-hidden="true">&nbsp;10K</i></button>
            <p>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
            <li><span>JavaScript</span></li>
            <li><span>React Native</span></li>
            <li><span>Flutter</span></li>
            <li><span>Firebase</span></li>
            <li><span>Ionic</span></li>
            </p>
         </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
         <div id='card3' class="uk-card uk-card-default uk-card-body">
            <i id='bookmark1' class="fa fa-bookmark" aria-hidden="true" style={{color:'rgb(214, 168, 51)',position:'absolute',right:'10px',top:'0px'}}></i>
            <h3 class="uk-card-title">Software Testing</h3>
            <button className='butn3' style={{border:'none',borderRadius:"10px",backgroundColor:'#fada5e',color:"#fff"}}><span style={{fontSize:"20px",color:"#fff"}}><BiTime/></span>&nbsp;6 Months</button>
            <button className='but3' style={{border:'none',borderRadius:"10px",backgroundColor:'#fada5e',color:"#fff"}}><i class="fa fa-inr" aria-hidden="true">&nbsp;10K</i></button>
            <p>
            <li><span>Automation Testing</span></li>
            <li><span>Manual Testing</span></li>
            <li><span>Selenium</span></li>
            </p>
         </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
         <div id='card4' class="uk-card uk-card-default uk-card-body">
            <i id='bookmark1' class="fa fa-bookmark" aria-hidden="true"  style={{color:'darkcyan',position:'absolute',right:'10px',top:'0px'}}></i>
            <h3 class="uk-card-title">Graphic Design</h3>
            <button className='butn4' style={{border:'none',borderRadius:"10px",backgroundColor:'#00d6d6',color:"#fff"}}><span style={{fontSize:"20px",color:"#fff"}}><BiTime/></span>&nbsp;6 Months</button>
            <button className='but4' style={{border:'none',borderRadius:"10px",backgroundColor:'#00d6d6',color:"#fff"}}><i class="fa fa-inr" aria-hidden="true">&nbsp;10K</i></button>
            <p>
            <li><span>Figma</span></li>
            <li><span>Adobe XD</span></li>
            <li><span>Adobe illustrator</span></li>
            <li><span>Photoshop</span></li>
            <li><span>Logo Design</span></li>
            <li><span>UI/UX Prototyping</span></li>
            </p>
         </div>
        </Grid>
        </Grid>
        </div>


        <div className='domain3'>
        <Grid container spacing={5}>
        <Grid  item xs={12} sm={6} md={4}>
         <div id='card5' class="uk-card uk-card-default uk-card-body">
            <i id='bookmark1' class="fa fa-bookmark" aria-hidden="true" style={{color:'brown',position:'absolute',right:'10px',top:'0px'}}></i>
            <h3 class="uk-card-title">Digital Marketing</h3>
            <button className='butn5' style={{border:'none',borderRadius:"10px",backgroundColor:'#cc9966',color:"#fff"}}><span style={{fontSize:"20px",color:"#fff"}}><BiTime/></span>&nbsp;6 Months</button>
            <button className='but5' style={{border:'none',borderRadius:"10px",backgroundColor:'#cc9966',color:"#fff"}}><i class="fa fa-inr" aria-hidden="true">&nbsp;10K</i></button>
            <p>
            <li><span>Build, plan and implement the overall digital marketing strategy</span></li>
            <li><span>Manage the strategy</span></li>
            <li><span>Manage and train the rest of the team</span></li>
            <li><span>Stay up to date with the latest technology and best practices</span></li>
            <li><span>Manage all digital marketing channels</span></li>
            <li><span>Oversee all the company's social media accounts</span></li>
            <li><span>Manage and improve online content, considering SEO and Google Analytics</span></li>
            <li><span>Build an inbound marketing plan</span></li>
            </p>
         </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
         <div id='card6' class="uk-card uk-card-default uk-card-body">
            <i id='bookmark1' class="fa fa-bookmark" aria-hidden="true" style={{color:'seagreen',position:'absolute',right:'10px',top:'0px'}}></i>
            <h3 class="uk-card-title">Human Resource Department</h3>
            <button className='butn6' style={{border:'none',borderRadius:"10px",backgroundColor:'#8dd9cc',color:"#fff"}}><span style={{fontSize:"20px",color:"#fff"}}><BiTime/></span>&nbsp;6 Months</button>
            <button className='but6' style={{border:'none',borderRadius:"10px",backgroundColor:'#8dd9cc',color:"#fff"}}><i class="fa fa-inr" aria-hidden="true">&nbsp;5K</i></button>
            <p>
            <li><span>Recruitment and Hiring</span></li>
            <li><span>Training and Development.</span></li>
            <li><span>Employer-Employee Relations.</span></li>
            <li><span>Maintain Company Culture.</span></li>
            <li><span>Create a Safe Work Environment.</span></li>
            <li><span>Handle Disciplinary Actions.</span></li>
            </p>
         </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
         <div id='card7' class="uk-card uk-card-default uk-card-body">
            <i id='bookmark1' class="fa fa-bookmark" aria-hidden="true" style={{color:'pink',position:'absolute',right:'10px',top:'0px'}}></i>
            <h3 class="uk-card-title">Bussiness<br/> Development</h3>
            <button className='butn7' style={{border:'none',borderRadius:"10px",backgroundColor:'pink',color:"#fff"}}><span style={{fontSize:"20px",color:"#fff"}}><BiTime/></span>&nbsp;6 Months</button>
            <button className='but7' style={{border:'none',borderRadius:"10px",backgroundColor:'pink',color:"#fff"}}><i class="fa fa-inr" aria-hidden="true">&nbsp;5K</i></button>
            <p>
            <li><span>Oversee the sales process to attract new clients.</span></li>
            <li><span>Work with senior team members to identify and manage risks.</span></li>
            <li><span>Maintain fruitful relationships with clients and address their needs effectively.</span></li>
            <li><span>Research and identify new market opportunities</span></li>
            <li><span>Prepare and deliver pitches to potential investors.</span></li>
            <li><span>Foster a collaborative environment within the organization.</span></li>
            </p>
         </div>
        </Grid>
     </Grid>
     </div>
    </>
  )
}

export default Domaincards
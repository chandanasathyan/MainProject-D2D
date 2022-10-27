import React from 'react'
import { Grid } from '@mui/material'
import "./Aboutbody.css"
import img from "../../assets/aboutimg.jpg";
import imgg from "../../assets/ab.jpg";
import { motion } from "framer-motion"

const Aboutbody = () => {
  return (
    <>
        <div className='abouth1'>
            <h1>D2DPro vision is</h1>
        </div>
        <Grid container className='about'>  
          <Grid item md={6} xs={12} sm={12}>
            <motion.div initial={{x:-250}} animate={{x:0}} transition={{type: "spring", duration:2 }}>
          <h3 className='abouth3'>Structured</h3>
          <p className='aboutp'>D2D built customized business apps that allow you to send personalized updates related
             to your products and services to your existing customers in real time.
             A custom mobile application can help you get the required client information.
             It also saves time for clients and employees, as they don't have to physically submit the documents.
             Custom-made apps, on the other hand, are built keeping in mind all these
              parameters and can be scaled up easily when the need arises.</p>
              </motion.div>
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
          <motion.div initial={{x:250}} animate={{x:0}} transition={{type: "spring", duration:2 }}>
             <img className='img1' src={img} alt="/"/>
             </motion.div>
          </Grid>
        </Grid>


        <Grid container className='about1'>  
          <Grid item md={6} xs={12} sm={12}>
             <img className='img2' src={imgg} alt="/"/>
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
          <h3 className='abouth33'>Structured</h3>
          <p className='aboutpp'>D2D built customized business apps that allow you to send personalized updates related
             to your products and services to your existing customers in real time.
             A custom mobile application can help you get the required client information.
             It also saves time for clients and employees, as they don't have to physically submit the documents.
             Custom-made apps, on the other hand, are built keeping in mind all these
              parameters and can be scaled up easily when the need arises.</p>
          </Grid>
        </Grid>


        <Grid container className='about'>  
          <Grid item md={6} xs={12} sm={12}>
          <h3 className='abouth3'>Structured</h3>
          <p className='aboutp'>D2D built customized business apps that allow you to send personalized updates related
             to your products and services to your existing customers in real time.
             A custom mobile application can help you get the required client information.
             It also saves time for clients and employees, as they don't have to physically submit the documents.
             Custom-made apps, on the other hand, are built keeping in mind all these
              parameters and can be scaled up easily when the need arises.</p>
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
             <img className='img1' src={img} alt="/"/>
          </Grid>
        </Grid>


        <Grid container className='about1'>  
          <Grid item md={6} xs={12} sm={12}>
             <img className='img2' src={imgg} alt="/"/>
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
          <h3 className='abouth33'>Structured</h3>
          <p className='aboutpp'>D2D built customized business apps that allow you to send personalized updates related
             to your products and services to your existing customers in real time.
             A custom mobile application can help you get the required client information.
             It also saves time for clients and employees, as they don't have to physically submit the documents.
             Custom-made apps, on the other hand, are built keeping in mind all these
              parameters and can be scaled up easily when the need arises.</p>
          </Grid>
        </Grid>
    </>
  )
}

export default Aboutbody
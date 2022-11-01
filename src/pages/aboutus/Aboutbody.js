import React from 'react'
import { Grid } from '@mui/material'
import "./Aboutbody.css"
import img from "../../assets/aboutimg.jpg";
import imgg from "../../assets/ab.jpg";
import { motion } from "framer-motion"

const Aboutbody = () => {
  return (
    <>
        <div className='aboutushead'>
            <h1 className='abouthead'>D2DPro vision is</h1>
        </div>

        {/* -------------(first and third row classname's are same , also second and fourth classname's are same)------------ */}

        {/* ----------FIRST ROW----------- */}

        <Grid container className='about'> 
          <Grid item md={6} xs={12} sm={12}>
            <motion.div initial={{x:-250}} animate={{x:0}} transition={{type: "spring", duration:2 }}>
              <h3 className='abouth3'>Structured</h3>
              <p className='aboutpara'>D2D built customized business apps that allow you to send personalized updates related
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



        {/* ----------SECOND ROW----------- */}

        <Grid container className='about1'>  
          <Grid item md={6} xs={12} sm={12}>
          <motion.div initial={{x:-250}} animate={{x:0}} transition={{type: "spring", duration:2 }}>
             <img className='img2' src={imgg} alt="/"/>
          </motion.div> 
          </Grid>

          <Grid item md={6} xs={12} sm={12}>
          <motion.div initial={{x:250}} animate={{x:0}} transition={{type: "spring", duration:2 }}>
            <h3 className='aboutush3'>Structured</h3>
            <p className='aboutusp'>D2D built customized business apps that allow you to send personalized updates related
               to your products and services to your existing customers in real time.
               A custom mobile application can help you get the required client information.
               It also saves time for clients and employees, as they don't have to physically submit the documents.
               Custom-made apps, on the other hand, are built keeping in mind all these
               parameters and can be scaled up easily when the need arises.</p>
            </motion.div> 
          </Grid>
        </Grid>



        {/* ----------THIRD ROW----------- */}

        <Grid container className='about'>  
          <Grid item md={6} xs={12} sm={12}>
          <motion.div initial={{x:-250}} animate={{x:0}} transition={{type: "spring", duration:2 }}>
            <h3 className='abouth3'>Structured</h3>
            <p className='aboutpara'>D2D built customized business apps that allow you to send personalized updates related
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



        {/* ----------FOURTH ROW----------- */}

        <Grid container className='about1'>  
          <Grid item md={6} xs={12} sm={12}>
          <motion.div initial={{x:-250}} animate={{x:0}} transition={{type: "spring", duration:2 }}>
             <img className='img2' src={imgg} alt="/"/>
          </motion.div> 
          </Grid>

          <Grid item md={6} xs={12} sm={12}>
          <motion.div initial={{x:250}} animate={{x:0}} transition={{type: "spring", duration:2 }}>
            <h3 className='aboutush3'>Structured</h3>
            <p className='aboutusp'>D2D built customized business apps that allow you to send personalized updates related
               to your products and services to your existing customers in real time.
               A custom mobile application can help you get the required client information.
               It also saves time for clients and employees, as they don't have to physically submit the documents.
               Custom-made apps, on the other hand, are built keeping in mind all these
               parameters and can be scaled up easily when the need arises.</p>
          </motion.div> 
          </Grid>
        </Grid>
    </>
  )
}

export default Aboutbody
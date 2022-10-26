import { Grid } from '@mui/material'
import React from 'react'
import "./Contactbanner.css"
import contactban from "../../Assests/ContactUs-Banner.png"
import { motion } from "framer-motion"



const Contactbanner = () => {
  return (
    <>
<motion.div   
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:2}}

className='contact-banner'>
<Grid container>
<Grid item xs={12}>
<div >
<img className='contact-img' src={contactban} alt="" srcset="" />
</div>
</Grid>



</Grid>

</motion.div>

    </>
  )
}

export default Contactbanner
import { Grid } from '@mui/material'
import React from 'react'
import "./Contactbanner.css"
import contactbanweb from "../../Assests/contact/ContactUs-Banner.png"
import contactbantab from "../../Assests/contact/Contact-Tab-View (2).png"
import contactbanmob from "../../Assests/contact/Contact-Mob-view.png"
import { motion } from "framer-motion"



const Contactbanner = () => {
  return (
    <>
<motion.div   
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:2}}

className='contact-banner'>
<Grid container  sx={{ display: { xs: 'none', sm:"none", md:"flex", lg: 'flex', xl: 'flex' } }}>
<Grid item xs={12}>
<div >
<img className='contact-img' src={contactbanweb} alt="contactus" srcset="" />
</div>
</Grid>



</Grid>

{/* tab */}


<Grid container  sx={{ display: { xs: 'none', sm:"flex", md:"none", lg: 'none', xl: 'none' } }}>
<Grid item xs={12}>
<div >
<img className='contact-img' src={contactbantab} alt="" srcset="" />
</div>
</Grid>



</Grid>


{/* mobile */}

<Grid container  sx={{ display: { xs: 'flex', sm:"none", md:"none", lg: 'none', xl: 'none' } }}>
<Grid item xs={12}>
<div >
<img className='contact-img' src={contactbanmob} alt="" srcset="" />
</div>
</Grid>



</Grid>



</motion.div>

    </>
  )
}

export default Contactbanner
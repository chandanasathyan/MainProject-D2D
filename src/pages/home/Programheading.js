import React from 'react'
import "./Programheading.css"
import { motion } from "framer-motion"
import {Grid} from "@mui/material";
const Programheading = () => {
  return (
    <div>



<Grid container>
  <Grid item xs={12}>
<motion.div  initial={{opacity:0}}  animate={{opacity:1}} transition={{delay:1.5, duration:1.5}}  className='program-heading'>
 <p >Our Main Programmes</p>
</motion.div>
</Grid>
</Grid>
    </div>
  )
}

export default Programheading
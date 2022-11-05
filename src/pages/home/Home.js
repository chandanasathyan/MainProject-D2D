import React from 'react'
import Cards from './Cards';

import "./Home.css"
import { motion } from "framer-motion"
import Slideshow from './Slideshow';


const Home = () => {
   
  return (
   <>
   <motion.div   
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:2}}
  >

   <Slideshow/>
   </motion.div>

<Cards/>


   </>
  )
}

export default Home
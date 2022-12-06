import React from 'react'
import Aboutbanner from './Aboutbanner'
import Aboutbody from './Aboutbody'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div>
         <motion.div 
        initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:2}}
  >
       <Aboutbanner/>
      </motion.div>
    
      <Aboutbody/>
    </div>
  )
}

export default About
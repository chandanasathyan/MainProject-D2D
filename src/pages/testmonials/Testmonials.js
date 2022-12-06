import React from 'react'
import Testimonibanner from './Testimonibanner'
import Testimonicardhead from './Testimonicardhead'
import Testimonicards from './Testimonicards'
import { motion } from "framer-motion"
const Testmonials = () => {
  return (
    <div>

<motion.div 
        initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:2}}
  >
          <Testimonibanner/>
      </motion.div>
   
      <Testimonicardhead/>
      <Testimonicards/>
    </div>
  )
}

export default Testmonials
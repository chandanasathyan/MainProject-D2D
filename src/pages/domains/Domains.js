
import React from 'react'
import Domainbanner from './Domainbanner'
import Domaincardhead from './Domaincardhead'
import Domaincards from './Domaincards'
import { motion } from "framer-motion"


const Domains = () => {
  return (
    <div>
      <motion.div 
        initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:2}}
  >
      <Domainbanner/>
      </motion.div>
      <Domaincardhead/>
      <Domaincards/>
    </div>
  )
}

export default Domains
import { Grid } from '@mui/material'
import React from 'react'
import baner from "../../assets/Testimonial-Banner.png";
import "./Testimonibanner.css"

const Testimonibanner = () => {
  return (
    <>
      <Grid container className='testimoni'>
        <img className='banner2' src={baner} alt=''/> 
      </Grid>
    </>
  )
}

export default Testimonibanner
import React from 'react'
import { Grid } from '@mui/material'
import bannerr from "../../assets/AboutUs-Banner.png";
import "./Aboutbanner.css"

const Aboutbanner = () => {
  return (
    <>
    <Grid container className='about'>
        <img className='banner1' src={bannerr} alt=''/>
      </Grid>
    </>
  )
}

export default Aboutbanner
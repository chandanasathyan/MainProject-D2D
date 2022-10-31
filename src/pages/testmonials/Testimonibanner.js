import { Grid } from '@mui/material'
import React from 'react'
import testimonial_baner from "../../assets/Testimonial-Banner.png";
import testimonial_tab_baner from "../../assets/testimonial-Tab-View.png";
import testimonial_mob_baner from "../../assets/testimonial-Mob-view.png";
import "./Testimonibanner.css"

const Testimonibanner = () => {
  return (
    <>
      <Grid container className='testimonial' sx={{ display: { xs: "none", sm:"none", md:'flex', lg: 'flex', xl: 'flex' } }}>
        <img className='banner2' src={testimonial_baner} alt='/'/> 
      </Grid>


      {/* ------------TAB VIEW------------ */}

      <Grid container className='testimonial' sx={{ display: { xs: "none", sm: 'flex', md: "none", lg: "none", xl: "none" } }}>
        <img className='tabbanner2' src={testimonial_tab_baner} alt='/'/>
      </Grid>


      {/* -----------MOB VIEW----------- */}

      <Grid container className='testimonial' sx={{ display: { xs: 'flex', sm: "none", md: "none", lg: "none", xl: "none" } }}>
        <img className='mobbanner2' src={testimonial_mob_baner} alt='/'/>
      </Grid>
    </>
  )
}

export default Testimonibanner
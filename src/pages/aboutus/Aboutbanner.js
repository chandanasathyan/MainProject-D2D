import React from 'react'
import { Grid } from '@mui/material'
import about_banner from "../../assets/AboutUs-Banner.png";
import about_tab_banner from "../../assets/Aboutus-Tab-View.png";
import about_mob_banner from "../../assets/Aboutus-Mob-view.png";
import "./Aboutbanner.css"

const Aboutbanner = () => {
  return (
    <>
      <Grid container className='aboutus'  sx={{ display: { xs: "none", sm:"none", md:'flex', lg: 'flex', xl: 'flex' } }}>
        <img className='banner3' src={about_banner} alt=''/>
      </Grid>


      {/* --------------TAB VIEW------------ */}

      <Grid container className='aboutus'  sx={{ display: { xs: "none", sm: 'flex', md: "none", lg: "none", xl: "none" } }}>
        <img className='tabbanner3' src={ about_tab_banner} alt=''/>
      </Grid>


      {/* -------------MOB VIEW------------ */}

      <Grid container className='aboutus'  sx={{ display: { xs: 'flex', sm: "none", md: "none", lg: "none", xl: "none" } }}>
        <img className='mobbanner3' src={about_mob_banner} alt=''/>
      </Grid>
    </>
  )
}

export default Aboutbanner
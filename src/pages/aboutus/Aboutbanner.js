import React from 'react'
import { Grid } from '@mui/material'
import about_banner from "../../Assests/aboutus/AboutUs-Banner.png";
import about_tab_banner from "../../Assests/aboutus/Aboutus-Tab-View.png";
import about_mob_banner from "../../Assests/aboutus/Aboutus-Mob-view.png";
import "./Aboutbanner.css"

const Aboutbanner = () => {
  return (
    <>
      <Grid container className='aboutus'  sx={{ display: { xs: "none", sm:"none", md:'flex', lg: 'flex', xl: 'flex' } }}>
        <img className='banner3' src={about_banner} alt='about us'/>
      </Grid>


      {/* --------------TAB VIEW------------ */}

      <Grid container className='aboutus'  sx={{ display: { xs: "none", sm: 'flex', md: "none", lg: "none", xl: "none" } }}>
        <img className='tabbanner3' src={ about_tab_banner} alt='about us'/>
      </Grid>


      {/* -------------MOB VIEW------------ */}

      <Grid container className='aboutus'  sx={{ display: { xs: 'flex', sm: "none", md: "none", lg: "none", xl: "none" } }}>
        <img className='mobbanner3' src={about_mob_banner} alt='about us'/>
      </Grid>
    </>
  )
}

export default Aboutbanner
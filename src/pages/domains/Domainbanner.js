import { Grid } from '@mui/material'
import React from 'react'
import domain_banner from "../../Assests/domains/Domain-Banner.png";
import domain_tab_banner from "../../Assests/domains/Domain-Tab-View.png";
import domain_mob_banner from "../../Assests/domains/Domain-Mob-view.png";
import "./Domainbanner.css";

const Domainbanner = () => {
  return (
    <>
      <Grid container className='domain1' sx={{ display: { xs: "none", sm:"none", md:'flex', lg: 'flex', xl: 'flex' } }}>
        <img className='banner1' src={domain_banner} alt='domains'/>
      </Grid>


      {/* -----------TAB VIEW----------- */}

      <Grid container className='domain1' sx={{ display: { xs: "none", sm: 'flex', md: "none", lg: "none", xl: "none" } }}>
        <img className='tabbanner1' src={domain_tab_banner} alt='domains'/>
      </Grid>


      {/* ------------MOB VIEW------------ */}

      <Grid container className='domain1' sx={{ display: { xs: 'flex', sm: "none", md: "none", lg: "none", xl: "none" } }}>
        <img className='mobbanner1' src={domain_mob_banner} alt='domains'/>
      </Grid>
    </>
  )
}

export default Domainbanner
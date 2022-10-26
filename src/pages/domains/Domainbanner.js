import { Grid } from '@mui/material'
import React from 'react'
import banner from "../../assets/Domain-Banner.png";
import "./Domainbanner.css";

const Domainbanner = () => {
  return (
    <>
      <Grid container className='domain1'>
        <img className='banner1' src={banner} alt=''/>
      </Grid>
    </>
  )
}

export default Domainbanner
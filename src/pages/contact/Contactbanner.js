import { Grid } from '@mui/material'
import React from 'react'
import "./Contactbanner.css"
import contactban from "../../Assests/ContactUs-Banner.png"



const Contactbanner = () => {
  return (
    <div>
<div className='contact-banner'>
<Grid container>
<Grid item xs={12}>
<div >
<img className='contact-img' src={contactban} alt="" srcset="" />
</div>
</Grid>



</Grid>

</div>

    </div>
  )
}

export default Contactbanner
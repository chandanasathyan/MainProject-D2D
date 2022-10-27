import React, { useState } from "react";
import emailjs from "emailjs-com"

import {
  TextField,
  Box,
  Grid,
  Button,
  Typography,
  CardContent,
  Card,
} from "@mui/material";
import "./Contact.css";
import { useForm } from "react-hook-form";
import Contactbanner from "./Contactbanner";
import fireDb from "./Firebase"


const Contact = () => {


const [state,setState] = useState({
  name:"",
  email:"",
  phone:"",
  message:""
})

const {name,email,phone,message} = state

const handleFormSubmit = (e) =>{
e.preventDefault();
if (!name|| !email|| !phone || !message ) {
  alert("an error")
}else{
  fireDb.child("contacts").push(state)
  setState({name:"",email:"",phone:"", message:""})
  alert("form submitted")
}
}

const handleinput = (e) =>{
let {name,value} = e.target;
setState({...state,[name]:value});
}








  return (
    <>

<Contactbanner/>




    <div className="contact-main-div">
    <Grid container>
      <Grid md={6}>
      
        <Typography gutterBottom variant="h3" align="center">
          Contact Us
        </Typography>
        <Grid>
          <div className="form-div">
     
          <form onSubmit={handleFormSubmit}  >
              <Grid container spacing={1}>
                <Grid xs={10} item>
                  <TextField
                  value={name}
                 
                    placeholder="Enter your name"
                    label="Name"
                    name="name"
                    variant="outlined"
                    fullWidth
             onChange={handleinput }
                   
                  />
                
                </Grid>
              
                <Grid item xs={10}>

                <TextField
            value={email}
            onChange={handleinput }
                 label="email"
                 name="email"
                
                 variant="outlined"
                 fullWidth
                
                />


                  {/* <TextField
                   

                    placeholder="Enter email"
                    label="email"
                    name="emeil"
                    variant="outlined"
                    fullWidth
          
                
                
               
                  /> */}
                      
                </Grid>
                <Grid item xs={10}>
                  <TextField 
               value={phone}
               onChange={handleinput }
                    placeholder="Enter phone  number"
                    label="Phone"
                    name="phone"
                    variant="outlined"
                    fullWidth
                
                 
                
                  />
                    
                </Grid>
                <Grid item xs={10}>
                  <TextField
                  value={message}
                  onChange={handleinput }
                    label="Message"
name="message"

                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
               
                  
                  />
                     
                </Grid>
                <Grid item xs={10}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
      </form> 
         
          </div>
        </Grid>
        </Grid>


       
        <Grid md={6} >
<div className="address-map">

<div className='contactus-contact'>
   <p>14/291 K, Suite 75D, 1st Floor </p>
   <p>A Square, Edathala PO, Kuzhivelippady </p>
   <p>Ernakulam, Kerala Pin 683561 </p>
   <p>Phone: +91-8848430565 </p>
   <p>Email: websoul467@gmail.com</p>
</div> 

<div className="google-maps">
<iframe class="gmap_iframe" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=14 Edathala PO, Kuzhivelippady Ernakulam, Kerala &amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

</div>




</div>

      </Grid>
    
     
      </Grid>

      </div>





 
     


    </>
  );
};

export default Contact;

import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

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
// import fireDb from "./Firebase"


const Contact = () => {



const form = useRef();
const sendEmail = (e) => {
  e.preventDefault() ;

  emailjs.sendForm('service_gu81ilo', 'template_qovbtep', form.current, '4NBar6DxraYdKQ3a7')
    .then((result) => {

        console.log(result.text);
        console.log("message sent")
    }, (error) => {
    
        console.log(error.text);

    });
    e.target.reset();
};





  return (
    <>

<Contactbanner/>





    <div className="contact-main-div">
    <Grid container>
      <Grid md={12}>
      
        <Typography gutterBottom variant="h3" align="center">
          Contact Us
        </Typography>
        <Grid>
          <div className="form-div">
     
          <form ref={form} onSubmit={sendEmail} >
              <Grid container spacing={1}>
                <Grid xs={7} item>
                  <TextField
              
                 
                    placeholder="Enter your name"
                    label="Name"
                    name="user_name" 
                    variant="outlined"
                    fullWidth
       
                   
                  />
                
                </Grid>
              
                <Grid item xs={7}>

                <TextField
           
                 label="email"
                 name="user_email"
                
                 variant="outlined"
                 fullWidth
                
                />


                 
                      
                </Grid>
                <Grid item xs={7}>
                  <TextField 
          
                    placeholder="Enter phone  number"
                    label="Phone"
                    name="phone"
                    variant="outlined"
                    fullWidth
                
                 
                
                  />
                    
                </Grid>
                <Grid item xs={7}>
                  <TextField
                
                    label="Message"
                    name="message"

                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
               
                  
                  />
                     
                </Grid>
                <Grid item xs={7}>
                  <Button
                  sx={{height:"50px"}}
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


 
    
     
      </Grid>

      </div>





 
     


    </>
  );
};

export default Contact;

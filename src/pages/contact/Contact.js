import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { TextField, Grid, Button, CardContent, Card, } from "@mui/material";
import "./Contact.css";

import Contactbanner from "./Contactbanner";

import Swal from "sweetalert2";






const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();
    
  
    Swal.fire({
      icon: "success",

      text: "From submitted successfully!",
    });
    emailjs.sendForm(
      "service_e0xv0q9",
      "template_fdkud2p",
      form.current,
      "4NBar6DxraYdKQ3a7"
    );

    e.target.reset();
  };






 

  return (
    <>
      <Contactbanner />


 

       
    <div className="contact-main">
        <Grid>
          <Card id="contact-card">
            <CardContent>
              <p className="contact-us-text">Contact Us</p>

              <form
                ref={form}
                onSubmit={sendEmail}
              >
                <Grid container spacing={1}>
                  <Grid xs={12} item>
                    <TextField
                
                      placeholder="Enter your name"
                      name="user_name"
                      label="Name"
                      variant="outlined"
                      fullWidth
                    
                    />
                  
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
            
                      type="email"
                      placeholder="Enter email"
                      label="Email"
                      name="user_email"
                      variant="outlined"
                      fullWidth
                     
                    />
                    <div className="email-error-msg">
                 
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                    id="text-field"
                      type="number"
                      placeholder="Enter phone number"
                      label="Phone"
                      name="phone"
                      variant="outlined"
                      fullWidth
                      required
                  
                   
                      /> 
                           

            
                    <div className="email-error-msg">
                     
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                    
                      label="Message"
                      multiline
                      rows={4}
                      placeholder="Type your message here"
                      name="message"
                      variant="outlined"
                      fullWidth
                      required

                    
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      sx={{ height: "50px" }}
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
            </CardContent>
          </Card>
        </Grid>
      </div> 





{/* <Form  ref={form} onSubmit={handleSubmit(sendEmail)} >
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' type="text"  
                   
                    />
                </Form.Field>
               
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' type="text"
                 />
                </Form.Field>
            <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' type="email" 
                     {...register("email",
                     {
                         required: true,
                         pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                     })}
                           
                    />
                </Form.Field>
                {errors.email && <p>Please check the email</p>}
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' type="password" 
                     
                  />
                  
                </Form.Field>
               
                <Button type='submit'>Submit</Button>
            </Form> 

 */}





    </>
  );
};

export default Contact;

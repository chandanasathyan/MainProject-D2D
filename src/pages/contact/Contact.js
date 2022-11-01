import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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

import Contactbanner from "./Contactbanner";

import Swal from 'sweetalert2';








const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
     
      text: 'From submitted successfully!'
   
    })
    emailjs
      .sendForm(
        "service_e0xv0q9",
        "template_fdkud2p",
        form.current,
        "4NBar6DxraYdKQ3a7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
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

              <form ref={form} onSubmit={sendEmail}>
                <Grid container spacing={1}>
                  <Grid xs={12} item>
                    <TextField
                      placeholder="Enter your name"
                      name="user_name"
                      label="Name"
                      variant="outlined"
                      fullWidth
                      required
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
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="number"
                      placeholder="Enter phone number"
                      label="Phone"
                      name="phone"
                      variant="outlined"
                      fullWidth
                      required
                    />
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

   
    </>
  );
};

export default Contact;

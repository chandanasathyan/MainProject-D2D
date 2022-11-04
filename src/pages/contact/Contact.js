import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { TextField, Grid, Button, CardContent, Card, Input } from "@mui/material";
import "./Contact.css";

import Contactbanner from "./Contactbanner";

import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

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

  const {
    register,
  
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formHandlechange = (event) => {
  console.log(event.target.value)
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
             onChange={handleSubmit(formHandlechange)}
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
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    <div className="email-error-msg">
                      {errors.email && <p> Email is invalid</p>}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="phone"
                      placeholder="Enter phone number"
                      label="Phone"
                      name="phone"
                      variant="outlined"
                      fullWidth
                      required
                      {...register("phone", {
                        required: true,
                        pattern:
                          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      })}
                    />
                    <div className="email-error-msg">
                      {errors.phone && <p> Phone is invalid</p>}
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
    </>
  );
};

export default Contact;

import React from "react";
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

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm();

const onsubmit = (data)=>{
  console.log(data)
  reset()
}

const sendEmail = (e) =>{
e.preventDefault();

emailjs.sendForm('service_965vgw7','template_0pxtol2',e.target,'4NBar6DxraYdKQ3a7')
.then(res=>{
  console.log(res)
}).catch(err => console.log(err))
}


// const onerror = () =>{
//   alert("please enter details")
// }
// console.log(errors)

  return (
    <>
{/* contactbanner */}
<Contactbanner/>




    <div className="contact-main-div">
    <Grid container>
      <Grid md={6}>
      
        <Typography gutterBottom variant="h3" align="center">
          Contact Us
        </Typography>
        <Grid>
          <div className="form-div">
        {/* <form onSubmit={sendEmail}>  */}
            {/* <form onSubmit={handleSubmit(onsubmit)}  > */}
              <Grid container spacing={1}>
                <Grid xs={10} item>
                  <TextField
                    placeholder="Enter your name"
                    label="Name"
                    name="name"
                    variant="outlined"
                    fullWidth
             
                    {...register("firstname", { required: "Name is required" })}
                  />
                  {errors.firstname && (<div style={{color:"red"}}>{errors.firstname.message}</div>)}
                </Grid>
                {/* <Grid xs={10} sm={5} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
               
                    {...register("lastname", { required: "Name is required" })}
                  />
                      {errors.lastname && (<div style={{color:"red"}}>{errors.lastname.message}</div>)}
                </Grid> */}
                <Grid item xs={10}>
                  <TextField
                    // type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    name="user_email"
                    fullWidth
          
                    {...register("email", { required: "email is required",
                  pattern:{
                    value:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                    message:"Invalid email "
                  }
                  })}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                  />
                      {errors.email && (<div style={{color:"red"}}>{errors.email.message}</div>)}
                </Grid>
                <Grid item xs={10}>
                  <TextField 
               
                    placeholder="Enter phone  number"
                    label="Phone"
                    name="phone"
                    variant="outlined"
                    fullWidth
                
                    {...register("phone", { required: "phone is required",
                  pattern:{
                    value:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    message:" invalid phone number"
                  }
                  
                  })}
                  onKeyUp={() => {
                    trigger("phone");
                  }}
                  />
                      {errors.phone && (<div style={{color:"red"}}>{errors.phone.message}</div>)}
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    label="Message"
name="message"

                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
               
                    {...register("message", { required: "message is required" })}
                  />
                      {errors.message && (<div style={{color:"red"}}>{errors.message.message}</div>)}
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
            {/* </form> */}
           {/* </form>  */}
          </div>
        </Grid>
        </Grid>
        <Grid md={6} >
<div >
<div className='contactus-contact'>
   <li>14/291 K, Suite 75D, 1st Floor </li>
   <li>A Square, Edathala PO, Kuzhivelippady </li>
   <li>Ernakulam, Kerala Pin 683561 </li>
   <li>Phone: +91-8848430565 </li>
   <li>Email: websoul467@gmail.com</li>
</div>
<div className="google-maps">
<iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=14 Edathala PO, Kuzhivelippady Ernakulam, Kerala &amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

</div>
</div>
      </Grid>
    
     
      </Grid>

      </div>





 
     


    </>
  );
};

export default Contact;

import React from "react";
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
            <form onSubmit={handleSubmit(onsubmit)}>
              <Grid container spacing={1}>
                <Grid xs={10} item>
                  <TextField
                    placeholder="Enter your name"
                    label="Name"
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
            </form>
          </div>
        </Grid>
        </Grid>
        <Grid md={6} >
<div >
<img style={{width:"100%",height:"400px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULjqw4mYuBDjVyRJnTIk31RUpYtGOccDd3jgmzkyD9ucTOy_Qb0s_Yt89z3n8g47C5K0&usqp=CAU" alt="" srcset="" />
</div>
      </Grid>
    
     
      </Grid>

      </div>





 
     


    </>
  );
};

export default Contact;

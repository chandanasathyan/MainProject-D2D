
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Testmonials from './pages/testmonials/Testmonials';
import Domains from './pages/domains/Domains'
import About from './pages/aboutus/About'
import Footer from './components/footer/Footer';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import Config from './Config';
import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { VscClose } from "react-icons/vsc";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";

function App() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


 const location = useLocation()


  return (
    <>
<Header/>

<AnimatePresence>
  <Routes key={location.pathname} location={location}>

         <Route path="/" element={<Home/>} />

         <Route path="/testimonials" element={<Testmonials/>} />  
         <Route path="/domains" element={<Domains/>} />  
         <Route path="/about" element={<About/>} />  
         <Route path="/contact" element={<Contact/>} />  
  </Routes> 
    

      

      
      </AnimatePresence> 
   <Footer/>   



  <div>

     
    
    </div>
   




<div className="fixed-chat">
  <div >
<Button  onClick={handleClickOpen} style={{fontSize:"50px"}} >
<BsFillChatSquareTextFill/>
      </Button>
      </div>  
      
      <Dialog
        open={open}
        onClose={handleClose} id="chat-dialog">
 
         <Typography id="close-icon" onClick={handleClose}><VscClose/></Typography>
         
     
          <DialogContentText >
          <Chatbot config={Config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
          </DialogContentText>
       
       
      </Dialog>
    
      </div>


    </>

  );
}

export default App;


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
   







    </>

  );
}

export default App;

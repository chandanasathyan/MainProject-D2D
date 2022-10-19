import React from 'react'

import ChatBot from 'react-simple-chatbot';
 
const steps = [
  {
    id: 'Greet',
    message: 'Welcome to react chatbot!',
    trigger: 'Ask Name',
  },
  {
    id: 'Ask Name',
    message: 'please enter your name',
    user:true,
    trigger: 'Name',
  },
//   {
// //     id: 'Ask Name',
// //     message: 'please enter your name',

// //   },
 
  {
    id: 'Name',
  message:"Hi ",
   
  },
];






const Chat = () => {
  return (
    <>
    
    <div style={{justifyContent:"end",alignItems:"end",textAlign:"end",marginLeft:"800px",marginTop:"-700px"}}>
    <ChatBot steps={steps} />


    </div>
    
    
    
    
    </>
  )
}

export default Chat
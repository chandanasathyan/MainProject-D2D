import LearningOptions from './components/LearningOptions/LearningOptions';


class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    

// addMessageToState = () =>{
//   this.setState(prevState =>({
//     ...prevState,
//     messages:[...prevState.messages,message]
//   }))
// }


   handleWebDevelopment = () => {
        const message = this.createChatBotMessage(
          "Fantastic choice, our team will contact you soon",
          {
            widget: "web-development",
          }
        
        );
   
        this.updateChatbotState(message);
    };

    handleMobDevelopment = () => {
      const message = this.createChatBotMessage(
        "mobile app development is a good choice",
  
        {
          widget: "mobile-app-development",
        }
      );
 
      this.updateChatbotState(message);
  };


  handleGraphDesign = () => {
    const message = this.createChatBotMessage(
      "Let's design ui/ux",

      {
        widget: "graphic-design",
      }
    );

    this.updateChatbotState(message);
}; 


handleSoftwareTesting = () => {
  const message = this.createChatBotMessage(
    "Lets look how the website works",

    {
      widget: "software-testing",
    }
  );

  this.updateChatbotState(message);
};

   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
  greet = () =>{
    const message = this.createChatBotMessage("Hello friend , Please select an option")
    this. updateChatbotState( message)

   
  }
 


  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}
  
  export default ActionProvider
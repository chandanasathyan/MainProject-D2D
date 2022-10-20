class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("")) {
        this.actionProvider.greet()
        this.actionProvider.greet1()
      }
    }
  }
  
  export default MessageParser
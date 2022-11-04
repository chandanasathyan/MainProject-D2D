import  { useState } from "react";




 export const useForms = (initialValue) => {

    const [value,setValue] = useState(initialValue)

  return [
  
    
    value,
    (event)=>{
        setValue({
            ...value,
            [event.target.name] : event.target.value,
        })
    }
    
    
    
    
  ]
}


import React from 'react'
import "./LearningOptions.css";




const LearningOptions = (props) => {

    const options = [
        {
            text: "Web development",
            handler: props.actionProvider.handleWebDevelopment,
            id: 1,
          },
          {
            text: "Mobile app development",
            handler: props.actionProvider.handleMobDevelopment,
            id: 2,
          },
          {
            text: "Graphic design",
            handler: props.actionProvider.handleGraphDesign,
            id: 3,
          },
          {
            text: "Software-testing",
            handler: props.actionProvider.handleSoftwareTesting,
            id: 4,
          },
        
      ];

      const optionsMarkup = options.map((option) => (
        <button
          className="learning-option-button"
          key={option.id}
          onClick={option.handler}
        >
          {option.text}
        </button>
      ));


  return (
    <>
<div className="learning-options-container">{optionsMarkup}</div>





    </>
  )
}

export default LearningOptions
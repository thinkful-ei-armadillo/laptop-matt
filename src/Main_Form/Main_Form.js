import React from 'react';
import './Main_Form.css';
import Feature from './Feature'

function MainForm(props) {
  const features = Object.keys(props.features).map((key,j) =>{
    
    return(
      <Feature 
      title={key} 
      items ={props.features[key]} 
      updateFeature={props.updateFeature} 
      state={props.state}
      key={j}
      />
    );
  })

  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      {features}
    </section>
  );
}


export default MainForm;  


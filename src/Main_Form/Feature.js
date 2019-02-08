import React from 'react';
import './Feature.css';
import Item from './Item'

function Feature(props) {
  const items = props.items.map((item) => {

    return (
      <Item 
      // className ={options}
      name={item.name} 
      cost={item.cost} 
      title={props.title}
      updateFeature={props.updateFeature} 
      key = {item.name}
      state = {props.state}
      />
    );
  
});
    
  return (
    <div className="feature" key={props.key}>
      <div className="feature__name">{props.title}</div>
      <ul className="feature__list">
        {items}
      </ul>
    </div>
  );
}


export default Feature;

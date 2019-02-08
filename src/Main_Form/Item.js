import React from 'react';
import './Item.css';

function Item(props) {
  const obj1 = { name: props.name, cost: props.cost }
  
  return (
    <li
      key={props.key}
      className={props.name === props.state[props.title].name
        ? 'feature__item feature__selected'
        : 'feature__item'}>
      <div className='feature__option' onClick={() => props.updateFeature(props.title, obj1)}>
        {props.name}
        ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(props.cost)})
      </div>
    </li>
  );
}


export default Item;

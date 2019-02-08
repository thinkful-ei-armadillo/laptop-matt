import React from 'react';
import './Options.css';

function Options(props) {

  return (
    <div className="summary__option" key={props.name}>
            <div className="summary__option__label">{props.keys} </div>
            <div className="summary__option__value">{props.name}</div>
            <div className="summary__option__cost">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(props.cost) }
            </div>
        </div>
  );
}


export default Options;
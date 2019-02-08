import React from 'react';
import './Feature.css';
import Item from './Item'

function Feature(props) {
  const items = props.items.map((item) => {

    // const options = Object.keys(props.state).map((name,index)=>{
    //   const selectedClass = props.name === props.state[name].name ? 'feature__selected':'';
    //   const featureClass = 'feature__option' + selectedClass;
    //   console.log(props.state);
    //   console.log(item);
    //   return (featureClass);
    // });
  
    
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

// const features = Object.keys(this.props.features)
//       .map(key => {
//         const options = this.props.features[key].map((item, index) => {
//           const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
//           const featureClass = 'feature__option ' + selectedClass;
//           return <li key={index} className="feature__item">
//             <div className={featureClass}

//               onClick={e => this.updateFeature(key, item)}>
//               {item.name}
//               ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
//                 .format(item.cost)})
//                 </div>
//           </li>
//         });

//         return <div className="feature" key={key}>
//           <div className="feature__name">{key}</div>
//           <ul className="feature__list">
//             {options}
//           </ul>
//         </div>
//       });
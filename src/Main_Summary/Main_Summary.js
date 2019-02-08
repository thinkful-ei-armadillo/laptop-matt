import React  from 'react';
import './Main_Summary.css';
import Options from './Options';


function MainSummary(props) {



  const options = Object.keys(props.summary).map((name, key) => {

    return <Options name={props.summary[name].name} cost={props.summary[name].cost} key={name} />;
  });

  const total = Object.keys(props.summary).reduce((acc, curr) => acc + props.summary[curr].cost, 0);
  return (
    <section className="main__summary">
      <h1>New Greenleaf 2018</h1>
      {options}
      <div className="summary__total">
        <div className="summary__total__label">Your Price: </div>
        <div className="summary__total__value">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(total)}
        </div>
      </div>
    </section>
  );
}


export default MainSummary;  

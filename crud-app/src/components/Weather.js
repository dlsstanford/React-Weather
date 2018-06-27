import React from "react";

// import './Title.css';

// pass props into stateless functions to use them - in classes, call
// () following arrow function = explicit returns
// you can remove parenthesis around arrow function arguments if there is only one arg.
const Weather = props => (
  // conditional operators == {} if first condition is true >> && returns html/jsx
  <div className='weather__info'>
    {props.city &&
      props.country && (
        <p className='weather__key'>
          Location: 
          <span className='weather__value'> {props.city}, {props.country}
          </span>
        </p>
      )}
    {props.temp && (
      <p className='weather__key'>
        Temperature: 
        <span className='weather__value'> {props.temp} K</span>
      </p>
    )}
    {props.humidity && (
      <p className='weather__key'>
        Humidity: 
        <span className='weather__value'> {props.humidity} %</span>
      </p>
    )}
    {props.description && (
      <p className='weather__key'>
        Conditions: 
        <span className='weather__value'> {props.description}</span>
      </p>
    )}
    {props.error && <p className='weather__error'> Error: {props.error}</p>}
  </div>
);

export default Weather;

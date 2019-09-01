import React from 'react';
import "./Form.css";

const Form = props => {
    return(
        <form onSubmit={props.loadWeather}>
        <div className="container input-group mb-3 col-6">
            
                <input className="searchBox form-control" type="text" name="city" id="cityInput" placeholder="Enter City Name..." />
                <button className="searchButton" type="submit" >Search</button>
            
        </div>
        </form>   
    )
}

const error = props => {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        City not found
      </div>
    );
  };

export default Form;
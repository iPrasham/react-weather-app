import React, {Component} from 'react';
import "./Form.css";

class Form extends Component
{
    render() {
    
        return(
            <form onSubmit={this.props.loadWeather}>
                <div className="container formContainer input-group mb-3 col-6">
            
                    <input className="searchBox form-control" type="text" name="city" id="cityInput" placeholder="Enter City Name..." />
                    <button className="searchButton" type="submit">Search</button>
    
                </div>
            </form>   
    )
 }
}


export default Form;
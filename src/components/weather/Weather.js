import React, {Fragment} from 'react';

import "./Weather.css";

import Comment from "../comment/Comment";

const Weather = function(props){
    if(props.error === false){
         return (
            <Fragment>  
                <div className="container weatherContainer">
                    <div className="row">
                        <div className="col-lg-12 location"><p><b>{props.city}, {props.country}, {props.date}</b></p></div>
                        <div className="col-lg-7 temp">
                            <h1>{props.temperature}&deg;C</h1>
                            <i className={`wi ${props.weatherIcon} fa-3x weatherIcon`}></i>
                        </div>
                        <div className="col-lg-5 weatherdataDiv">
                            <p className="weatherdata">Weather: <b>{props.weather}</b> <br/> Wind: <b>{props.wind} km/hr</b></p>
                            <p className="weatherdata">Humidity: <b>{props.humidity}%</b> <br/> Pressure: <b>{props.pressure} Pa</b></p>
                            <p className="weatherdata">Max Temp: <b>{props.max_temp}&deg;C</b> <br/> Min Temp: <b>{props.min_temp}&deg;C</b></p>
                            <p className="weatherdata">Sunrise: <b>{props.sunrise}</b> <br/> Sunset: <b>{props.sunset}</b></p>
                        </div>
                    </div>
                </div>
                <Comment />
            </Fragment>
        )}
    else if(props.error === true)
    {
        return (
            <div className="container weatherContainer errorContainer">
                <span><b>City Name not found</b></span>
            </div>  
    )}
    else
    {
        return <div></div>
    }
}

export default Weather;


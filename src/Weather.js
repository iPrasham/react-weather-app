import React from 'react';
import "./Weather.css";

const Weather = function(props){
    return (
        <div className="container weatherContainer">
            <div className="row">
                <div className="col-lg-12 location"><p>{props.city}, {props.country}, {props.date}</p></div>
                <div className="col-lg-7 temp"><h1>{props.temperature}&deg;C</h1></div>
                <div className="col-lg-5 weatherdataDiv">
                    <p clasName="weatherdata">Weather: {props.weather} <br/> Wind: {props.wind} km/hr</p>
                    <p clasName="weatherdata">Humidity: {props.humidity}% <br/> Pressure: {props.pressure} Pa</p>
                    <p clasName="weatherdata">Max Temp: {props.max_temp}&deg;C <br/> Min Temp: {props.min_temp}&deg;C</p>
                    <p clasName="weatherdata">Sunrise: {props.sunrise} <br/> Sunset: {props.sunset}</p>
                </div>
            </div>
        </div>
    )}

export default Weather;


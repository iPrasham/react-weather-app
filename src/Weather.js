import React from 'react';
import "./Weather.css";

const Weather = function(props){
    return (
        <div className="container weatherContainer">
            <div className="row">
                <div className="col-lg-12 location"><p>{props.city}, {props.country}, {props.date}</p></div>
                <div className="col-lg-7 temp">
                    <h1>{props.temperature}&deg;C</h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className={`wi ${props.weatherIcon} display-2`} />
                </div>
                <div className="col-lg-5 weatherdataDiv">
                    <p className="weatherdata">Weather: <b>{props.weather}</b> <br/> Wind: <b>{props.wind}</b> km/hr</p>
                    <p className="weatherdata">Humidity: <b>{props.humidity}%</b> <br/> Pressure: <b>{props.pressure} Pa</b></p>
                    <p className="weatherdata">Max Temp: <b>{props.max_temp}&deg;C</b> <br/> Min Temp: <b>{props.min_temp}&deg;C</b></p>
                    <p className="weatherdata">Sunrise: {props.sunrise} <br/> Sunset: <b>{props.sunset}</b></p>
                </div>
            </div>
        </div>
    )}

export default Weather;


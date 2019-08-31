import React, {Component, Fragment} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Weather from "./Weather";
import { async } from 'q';
import 'weather-icons/css/weather-icons.css';


//api.openweathermap.org/data/2.5/weather?q=London
const api_key = "7644d0b649975c44771989a2c6652b75";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  constructor(){
    super();
    this.state = {

      city: undefined,
      country: undefined,
      current_date: undefined,
      humidity: undefined,
      pressure: undefined, 
      max_temp: undefined, 
      min_temp: undefined,
      sunrise_timestamp: undefined,
      sunset_timestamp: undefined,
      wind: undefined,
      temperature: undefined,
      weather: undefined

    };
    this.getWeather();
  }

  getWeather = async () => {
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${api_key}`);
    const response = await apiCall.json();

    var ms_date = response.dt*1000;
    var date = Date(Date.now(ms_date));
    date = date.slice(0, 15);

    var ms_sunrise = response.sys.sunrise*1000;
    var sunrise = Date(Date.now(ms_sunrise));
    sunrise = sunrise.slice(16, 24);

    var ms_sunset = response.sys.sunset*1000;
    var sunset = Date(Date.now(ms_sunset));
    sunset = sunset.slice(16, 24);
    
    console.log(response);
    this.setState(
      {
        city: response.name,
        country: response.sys.country,
        current_date: date,
        temperature: response.main.temp - 273.15,
        pressure: response.main.pressure,
        humidity: response.main.humidity,
        wind: response.wind.speed,
        min_temp: response.main.temp_min - 273.15,
        max_temp: response.main.temp_max - 273.15,
        sunrise_timestamp: sunrise,
        sunset_timestamp: sunset,
        weather: response.weather[0].main
      }
    )
  }
  render(){
    return(
      <Fragment>
        <Header />
        <br />
        <div className="container input-group mb-3 col-6">
          <input className="searchBox form-control" type="text" placeholder="Enter City Name..." />
          <button className="searchButton" type="submit">Search</button>
        </div>
        <Weather city={this.state.city} country={this.state.country} date={this.state.current_date}
                 temperature={this.state.temperature} pressure={this.state.pressure} humidity={this.state.humidity}
                 wind={this.state.wind} min_temp={this.state.min_temp} max_temp={this.state.max_temp}
                 sunrise={this.state.sunrise_timestamp} sunset={this.state.sunset_timestamp} weather={this.state.weather}/>
      </Fragment>
  )}
}


export default App;

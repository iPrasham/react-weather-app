import React, {Component, Fragment} from 'react';

import './App.css';

import Header from "./components/header/Header";

import Weather from "./components/weather/Weather";

import Form from "./components/form/Form";

import SearchingCity from "./components/searchingCity/SearchingCity"

import "weather-icons/css/weather-icons.min.css";

const api_key = "7644d0b649975c44771989a2c6652b75";



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
      weather: undefined,
      icon: undefined,
      main: undefined,
      error: undefined,
      isSearching: false
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async (e) => {

    e.preventDefault();

    this.setState({
      isSearching: true
    });

    const city = e.target.elements.city.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
    const response = await apiCall.json();

      if(response.cod === 200)
      {
        var ms_date = response.dt*1000;
        var date = new Date(ms_date);
        date = date.toString();
        date = date.slice(0, 15);

        var ms_sunrise = response.sys.sunrise*1000;
        var sunrise = new Date(ms_sunrise);
        sunrise = sunrise.toString();
        sunrise = sunrise.slice(16, 24);

        var ms_sunset = response.sys.sunset*1000;
        var sunset = new Date(ms_sunset);
        sunset = sunset.toString();
        sunset = sunset.slice(16, 24);
        
      
        console.log(response);
        this.setState({

            city: response.name,
            country: response.sys.country,
            current_date: date,
            temperature: this.calCelsius(response.main.temp),
            pressure: response.main.pressure,
            humidity: response.main.humidity,
            wind: response.wind.speed,
            min_temp: this.calCelsius(response.main.temp_min),
            max_temp: this.calCelsius(response.main.temp_max),
            sunrise_timestamp: sunrise,
            sunset_timestamp: sunset,
            weather: response.weather[0].main,
            error: false,
            isSearching:false
          });

         
        
        this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    }
    else {
      this.setState({
        error: true,
        isSearching: false
      });
    }
  }

  render(){
    return(
      <Fragment>
        <Header />
        <Form loadWeather={this.getWeather}/>
        {this.state.isSearching && <SearchingCity />}
        {!this.state.isSearching && <Weather city={this.state.city} 
                 country={this.state.country} 
                 date={this.state.current_date}
                 temperature={this.state.temperature} 
                 pressure={this.state.pressure} 
                 humidity={this.state.humidity}
                 wind={this.state.wind} 
                 min_temp={this.state.min_temp} 
                 max_temp={this.state.max_temp}
                 sunrise={this.state.sunrise_timestamp} 
                 sunset={this.state.sunset_timestamp} 
                 weather={this.state.weather}
                 weatherIcon={this.state.icon}
                 error={this.state.error}
        />} 
      </Fragment>
  )}
}


export default App;

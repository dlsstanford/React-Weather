import React, { Component } from "react";

import "./App.css";

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "42835fa4d1dd6d04c0b89df5ce451e27";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  // async-await allows for api calls inside methods, holds fetched data
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temp: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        country: data.sys.country,
        description: data.weather[0].description
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        humidity: undefined,
        country: undefined,
        description: undefined,
        error: "Please enter values for your location"
      });
    }
  };
  render() {
    return (
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Title />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "14a80ec33e9f3373eb4f34a24db3f886";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }

  if (loaded) {
    return (
      <div>
        <form className="mb-3" id="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                autoComplete="off"
                id="city-input"
                className="form-control"
                onChange={changeCity}
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 "
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1 id="city">{city}</h1>
          <ul>
            <li id="update">
              {" "}
              Last updated:{" "}
              <span id="date">
                <FormattedDate date={weather.date} />
              </span>{" "}
            </li>
            <li id="description">{weather.description}</li>
          </ul>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="d-flex weather-temperature">
              <img src={weather.icon} alt={weather.description} id="icon" />
              <strong id="temperature">
                <Temperature celsius={weather.temperature} />{" "}
              </strong>
            </div>
          </div>
          <div class="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity">{weather.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{weather.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
  }
}

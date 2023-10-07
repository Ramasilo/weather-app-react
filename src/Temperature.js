import React, { useState } from "react";

import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          <a href="/">°C </a> |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>{" "}
          |<a href="/">°F</a>
        </span>
      </>
    );
  }
}

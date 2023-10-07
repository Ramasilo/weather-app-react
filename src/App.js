import Weather from "./Weather";

import "./Weather.css";

function App() {
  return (
    <div class="container">
      <div class="weather-wrapper">
        <div class="weather-border">
          <Weather defaultCity="Cape Town" />
        </div>

        <small>
          <a
            href="https://github.com/Ramasilo/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-source code
          </a>
          , by Precious Ramasilo
        </small>
      </div>
    </div>
  );
}

export default App;

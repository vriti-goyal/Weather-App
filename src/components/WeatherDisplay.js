import React from "react";

export default function WeatherDisplay({ weather, error }) {
  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!weather) {
    return null;
  }
  return (
    <div className="weather-display">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="weather-info">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <div>
          <div className="temp">
            {Math.round(weather.main.temp)}°C
          </div>
          <div className="desc">
            {weather.weather[0].main} ({weather.weather[0].description})
          </div>
          <div className="details">
            Humidity: {weather.main.humidity}% | Wind: {weather.wind.speed} m/s
          </div>
        </div>
      </div>
    </div>
  );
}
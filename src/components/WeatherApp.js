import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";

const API_KEY = "086b4baed683d02ae6502fdd0ecec74b"; // <-- Insert your key here

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setWeather(null);
    setError("");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) {
        throw new Error("City not found");
      }
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <WeatherForm onSearch={handleSearch} />
      <WeatherDisplay weather={weather} error={error} />
    </div>
  );
}
'use client';

import { useState } from 'react';

interface WeatherData {
  name: string;
  weather: {
    description: string;
  }[];
  main: {
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

export default function Weather() {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);  // Ensure the type is set properly
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const response = await fetch(`/api/weather?city=${city}`);
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
      } else {
        setError(data.error);
      }
    } catch {
      setError('Failed to fetch weather data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="都市名を入力"
        className="border p-2"
      />
      <button onClick={fetchWeather} className="ml-2 p-2 bg-blue-500 text-white">
        天気情報を取得する
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {weatherData && (
        <div>
          <h1>{weatherData.name}の天気</h1>
          <p>天気: {weatherData.weather[0].description}</p>
          <p>最高気温: {weatherData.main.temp_max}°C</p>
          <p>最低気温: {weatherData.main.temp_min}°C</p>
          <p>湿度: {weatherData.main.humidity}%</p>
          <p>風速: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

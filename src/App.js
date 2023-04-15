import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import WeatherNewsApp from "./WeatherNewsApp"

function App() {

  //const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={2e644d9471fbd90155f27f6532383c9b}"
  // function Component() {
  //   const API_KEY = process.env.REACT_APP_api_key
  // }

  return (
    <div className="App">
      <WeatherNewsApp />
    </div>
  );
}

export default App;

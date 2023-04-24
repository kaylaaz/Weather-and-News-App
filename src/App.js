import './App.css';
//import React, { useEffect, useState } from 'react';
import CurrentWeather from './CurrentWeather.js';
import CurrentLocation from './CurrentLocation.js';
import LatLong from './LatLong.js';

function App() {
  return (
    <div className="App">
      <CurrentLocation />
      <LatLong />
      <CurrentWeather />
    </div>
  );
}

export default App;

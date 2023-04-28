import './App.css';
//import React, { useEffect, useState } from 'react';
import CurrentWeather from './CurrentWeather.js';
import CurrentLocation from './CurrentLocation.js';
import HourlyNextDay from './HourlyNextDay.js';
import DailyNextWeek from './DailyNextWeek.js';

function App() {
  return (
    <>
      <CurrentLocation />
    </>
  );
}

export default App;

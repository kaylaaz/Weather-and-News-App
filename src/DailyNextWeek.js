import React, { useEffect, useState } from 'react';

function DailyNextWeek({ lat, lon }) {

    const api = process.env.REACT_APP_api_key;
    const [data, setData] = useState([]);

    useEffect(() => {
        if (lat !== '' && lon !== '') {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=Imperial&exclude=current,minutely,hourly,alerts&appid=${api}`)
                .then((response) => response.json())
                .then((data) => setData(data.daily))
                .catch((error) => console.log("Error: ", error))
        }
    }, [lat, lon]);

    if (!data) { return null }
    return (
        <>
            <h2 class="title">Weather for the next week</h2>
            {data.slice(0, 7).map((hour, index) => {
                return (
                    <>
                        <center><img src="https://openweathermap.org/img/wn/01d@2x.png"
                            alt="centered image"
                            height="300"
                            width="300"
                            class="image" /></center>
                        <p>{index} Temperature:  {hour.temp.day}°F</p>
                        <p>Minimum daily temperature: {hour.temp.min}°F</p>
                        <p>Maximum daily temperature: {hour.temp.max}</p>
                        <p>Morning temperature: {hour.temp.morn}</p>
                        <p>Night temperature: {hour.temp.night}</p>
                        <p>Humidity: {hour.humidity}%</p>
                        <p>Wind speed: {hour.wind_speed} miles/hour</p>
                    </>
                )
            })}
        </>
    );
}

export default DailyNextWeek;
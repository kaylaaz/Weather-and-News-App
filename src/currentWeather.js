import React, { useEffect, useState } from 'react';

function CurrentWeather({ lat, lon }) {
    const api = process.env.REACT_APP_api_key;
    const [data, setData] = useState({});
    const [img, setImg] = useState({});

    useEffect(() => {
        if (lat !== '' && lon !== '') {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=Imperial&exclude=minutely,hourly,daily,alerts&appid=${api}`)
                .then((response) => response.json())
                .then((data) => {
                    setData(data.current)
                    setImg(data.current.weather[0])
                })
                .catch((error) => console.log("Error: ", error))
        }
    }, [lon, lat]);

    const imgLink = `https://openweathermap.org/img/wn/${img.icon}@2x.png`;

    if (!data) { return null };
    return (
        <>
            <p>Your latitude and longitude are: {lat}, {lon}</p>
            <h2 class="title">Current weather</h2>
            <center><img src={imgLink}
                alt="centered image"
                height="300"
                width="300"
                class="image" /></center>
            <p class="currentWeather">{data.temp}°F</p>
            <p>Current Time: {new Date(data.dt * 1000).toLocaleString('en-US', { timeZone: 'America/Los_Angeles', timeStyle: 'short' })}</p>

            <div class="container">
                <div class="item">
                    <p>Feels like: {data.feels_like}°F</p>
                </div>
                <div class="item">
                    <p>Humidity: {data.humidity}%</p>
                </div>
                <div class="item">
                    <p>Average visbility: {data.visibility} km</p>
                </div>
            </div>
            <div class="container">
                <div class="item">
                    <p>Wind speed: {data.wind_speed} miles/hour</p>
                </div>
                <div class="item">
                    <p>Wind direction: {data.wind_deg} degrees</p>
                </div>
                <div class="item">
                    <p>Cloudiness: {data.clouds}%</p>
                </div>
            </div>
            <p>UV index: {data.uvi}</p>
        </>
    );
}

export default CurrentWeather;
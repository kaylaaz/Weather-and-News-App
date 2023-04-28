import React, { useEffect, useState } from 'react';

function HourlyNextDay({ lat, lon }) {

    const api = process.env.REACT_APP_api_key;
    const [data, setData] = useState([]);

    useEffect(() => {
        if (lat !== '' && lon !== '') {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=Imperial&exclude=current,minutely,daily,alerts&appid=${api}`)
                .then((response) => response.json())
                .then((data) => setData(data.hourly))
                .catch((error) => console.log("Error: ", error))
        }
    }, [lat, lon]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    //set range to end at 24
    if (!data) { return null }
    return (
        <>
            <h2 class="title">Weather for tomorrow</h2>
            {data.slice(0, 24).map((hour, index) => {
                return (
                    <>
                        <center><img src="https://openweathermap.org/img/wn/01d@2x.png"
                            alt="centered image"
                            height="300"
                            width="300"
                            class="image" /></center>
                        <p>{index} Temperature: {hour.temp}°F</p>
                        <p>Humidity: {hour.humidity}%</p>
                        <p>Average visbility: {hour.visibility} km</p>
                        <p>Wind speed: {hour.wind_speed} miles/hour</p>
                        <p>Wind direction: {hour.wind_deg} degrees</p>
                        <p>Cloudiness: {hour.clouds}%</p>
                        <p>UV index: {hour.uvi}</p>
                    </>
                )
            })}
        </>
    );
}

export default HourlyNextDay;
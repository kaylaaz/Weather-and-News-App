import React, { useEffect, useState } from 'react';

function HourlyNextDay({ lat, lon }) {

    const api = process.env.REACT_APP_api_key;
    const [data, setData] = useState([]);

    useEffect(() => {
        if (lat !== '' && lon !== '') {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=Imperial&exclude=current,minutely,daily,alerts&appid=${api}`)
                .then((response) => response.json())
                .then((data) => {
                    setData(data.hourly)
                })
                .catch((error) => console.log("Error: ", error))
        }
    }, [lat, lon]);

    if (!data) { return null }

    return (
        <>
            <h2 className="title">Weather for the Next 24 Hours</h2>
            <div className="container-hourly">
                {data.slice(0, 24).map((hour, index) => {
                    return (
                        <div className="item-hourly" key={index}>
                            <center>
                                <img
                                    src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                                    alt="centered image"
                                    height="300"
                                    width="300"
                                    className="image"
                                />
                            </center>
                            <p>{new Date(hour.dt * 1000).toLocaleString('en-US', { timeZone: 'America/Los_Angeles', timeStyle: 'short' })}</p>
                            <p>Temperature: {hour.temp}°F</p>
                            <p>Humidity: {hour.humidity}%</p>
                            <p>Average visibility: {hour.visibility} km</p>
                            <p>Wind speed: {hour.wind_speed} miles/hour</p>
                            <p>Wind direction: {hour.wind_deg} degrees</p>
                            <p>Cloudiness: {hour.clouds}%</p>
                            <p>UV index: {hour.uvi}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );

    // return (
    //     <>
    //         <h2 className="title">Weather for the Next 24 Hours</h2>
    //         {data.slice(0, 24).map((hour, index) => {
    //             return (
    //                 <>

    //                     <center>
    //                         <img
    //                             src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
    //                             alt="centered image"
    //                             height="300"
    //                             width="300"
    //                             className="image"
    //                         />
    //                     </center>
    //                     <p>Time: {new Date(hour.dt * 1000).toLocaleString('en-US', { timeZone: 'America/Los_Angeles', timeStyle: 'short' })}</p>
    //                     <p>Temperature: {hour.temp}°F</p>
    //                     <p>Humidity: {hour.humidity}%</p>
    //                     <p>Average visibility: {hour.visibility} km</p>
    //                     <p>Wind speed: {hour.wind_speed} miles/hour</p>
    //                     <p>Wind direction: {hour.wind_deg} degrees</p>
    //                     <p>Cloudiness: {hour.clouds}%</p>
    //                     <p>UV index: {hour.uvi}</p>
    //                 </>
    //             );
    //         })}
    //     </>
    // );



    // return (
    //     <>
    //         <h2 class="title">Weather for the Next 24 Hours</h2>
    //         {data.slice(0, 24).map((hour, index) => {
    //             return (
    //                 <>
    //                     <center><img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
    //                         alt="centered image"
    //                         height="300"
    //                         width="300"
    //                         class="image" /></center>
    //                     <p>{index} Temperature: {hour.temp}°F</p>
    //                     <p>Time: {Date(hour.dt * 1000).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }).split(' ')[4]}</p>
    //                     <p>Humidity: {hour.humidity}%</p>
    //                     <p>Average visbility: {hour.visibility} km</p>
    //                     <p>Wind speed: {hour.wind_speed} miles/hour</p>
    //                     <p>Wind direction: {hour.wind_deg} degrees</p>
    //                     <p>Cloudiness: {hour.clouds}%</p>
    //                     <p>UV index: {hour.uvi}</p>
    //                 </>
    //             )
    //         })}
    //     </>
    // );
}

export default HourlyNextDay;
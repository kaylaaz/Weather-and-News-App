import React, { useEffect, useState } from 'react';

function CurrentWeather({ lat, lon }) {
    const api = process.env.REACT_APP_api_key;
    const [data, setData] = useState({});
    const [img, setImg] = useState({});
    //const keys = ['temp', 'humidity', 'visibility', 'dew_point', 'uvi', 'wind_speed', 'wind_deg']
    //Object.values(keys);

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

    //setImg(data.weather[0]);
    const imgLink = `https://openweathermap.org/img/wn/${img.icon}@2x.png`;

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);
    //padding
    if (!data) { return null };
    return (
        <>
            {/* <h2>{test}</h2> */}
            <p>Your latitude and longitude are: {lat}, {lon}</p>
            <h2 class="title">Current weather</h2>
            <center><img src={imgLink}
                alt="centered image"
                height="300"
                width="300"
                class="image" /></center>
            <p class="currentWeather">{data.temp}°F</p>
            <p>Feels like: {data.feels_like}°F</p>
            <p>Humidity: {data.humidity}%</p>
            <p>Average visbility: {data.visibility} km</p>
            <p>Wind speed: {data.wind_speed} miles/hour</p>
            <p>Wind direction: {data.wind_deg} degrees</p>
            <p>Cloudiness: {data.clouds}%</p>
            <p>UV index: {data.uvi}</p>
            {/* <p>{data.weather[0].icon}</p> */}

            {/* <img src={imgLink} /> */}
        </>
    );
}

// {keys.map((key, index) => {
//     return (
//         <div>
//             {/* <h3>{data[key]}</h3> */}
//         </div>
//     )
// })}

export default CurrentWeather;
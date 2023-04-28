import React, { useEffect, useState } from 'react';

function CurrentWeather({ lat, lon }) {
    const api = process.env.REACT_APP_api_key;
    const [data, setData] = useState({});
    //const keys = ['temp', 'humidity', 'visibility', 'dew_point', 'uvi', 'wind_speed', 'wind_deg']
    //Object.values(keys);

    useEffect(() => {
        if (lat !== '' && lon !== '') {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=Imperial&exclude=minutely,hourly,daily,alerts&appid=${api}`)
                .then((response) => response.json())
                .then((data) => setData(data.current))
                .catch((error) => console.log("Error: ", error))
        }
    }, [lon, lat]);

    // const icon = data.weather[0].icon;
    // const imgLink = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    useEffect(() => {
        console.log(data);
    }, [data]);
    //padding
    if (!data) { return null }
    return (
        <>
            {/* <h2>{test}</h2> */}
            <h2 class="title">Current weather</h2>
            <center><img src="https://openweathermap.org/img/wn/01d@2x.png"
                alt="centered image"
                height="300"
                width="300"
                class="image" /></center>
            <p class="currentWeather">{data.temp}°F</p>
            <p>{data.humidity}</p>
            <p>{data.visibility}</p>
            <p>{data.wind_speed}</p>
            <p>{data.wind_deg}</p>
            <p>{data.clouds}</p>
            <p>{data.uvi}</p>
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
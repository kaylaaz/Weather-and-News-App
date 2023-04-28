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
            {data.map((hour, index) => {
                return (
                    <>
                        <center><img src="https://openweathermap.org/img/wn/01d@2x.png"
                            alt="centered image"
                            height="300"
                            width="300"
                            class="image" /></center>
                        <p>{index}: {hour.temp.day}</p>
                        <p>{hour.temp.min}</p>
                        <p>{hour.temp.max}</p>
                        <p>{hour.temp.night}</p>
                        <p>{hour.temp.eve}</p>
                        <p>{hour.temp.morn}</p>
                        <p>{hour.humidity}</p>
                        <p>{hour.visibility}</p>
                        <p>{hour.wind_speed}</p>
                        <p>{hour.wind_deg}</p>
                        <p>{hour.clouds}</p>
                        <p>{hour.uvi}</p>

                    </>
                )
            })}
        </>
    );
}

export default DailyNextWeek;
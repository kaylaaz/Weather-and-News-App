// import React, { useEffect, useState } from 'react';

// function HourlyNextDay({ lat, lon }) {

//     const api = process.env.REACT_APP_api_key;
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=Imperial&exclude=current,minutely,daily,alerts&appid=${api}`)
//             .then((response) => response.json())
//             .then((data) => setData(data.hourly))
//             .catch((error) => console.log("Error: ", error))
//     }, []);

//     useEffect(() => {
//         console.log(data);
//     }, [data]);

//     //set range to end at 24
//     return (
//         <>
//             <h2>Weather for tomorrow</h2>
//             {data.map((hour, index) => {
//                 return (
//                     <>
//                         <p>{hour.temp}</p>
//                         <p>{hour.humidity}</p>
//                         <p>{hour.visibility}</p>
//                         <p>{hour.wind_speed}</p>
//                         <p>{hour.wind_deg}</p>
//                         <p>{hour.clouds}</p>
//                         <p>{hour.uvi}</p>
//                     </>
//                 )
//             })}
//         </>
//     );
// }

// export default HourlyNextDay;
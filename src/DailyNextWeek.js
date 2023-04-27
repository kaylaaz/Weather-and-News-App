// import React, { useEffect, useState } from 'react';

// function DailyNextWeek({ lat, lon }) {

//     const api = process.env.REACT_APP_api_key;
//     const [data, setData] = useState();

//     //weather constantly change?
//     useEffect(() => {
//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${api}`)
//             .then((response) => response.json())
//             .then((data) => setData(data.daily))
//             .catch((error) => console.log("Error: ", error))
//     }, []);

//     return (
//         <>
//             <h2>Weather for the next week</h2>
//         </>
//     );
// }

// export default DailyNextWeek;
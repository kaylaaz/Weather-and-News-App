import React, { useEffect, useState } from 'react';

function CurrentWeather() {
    const api = process.env.REACT_APP_api_key;
    const [coordinates, setCoordinates] = useState([]);

    //weather constantly change?
    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${api}")
            .then((response) => response.json())
            .then((data) => setCoordinates(data.coord))
            .catch((error) => console.log("Error: ", error))
    }, []);

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${api}")
        .then((response) => response.json())
        .then((data) => setCoordinates(data.coord))
        .catch((error) => console.log("Error: ", error))

    return (
        <>
            <h2>Current weather for (city)</h2>
        </>
    );
}

export default CurrentWeather;
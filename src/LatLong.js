import React, { useEffect, useState } from 'react';

function LatLong() {

    const api = process.env.REACT_APP_api_key;
    const [coordinates, setCoordinates] = useState([]);

    //weather constantly change?
    useEffect(() => {
        fetch("http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${api}")
        .then((response) => response.json())
        .then((data) => setCoordinates(data.coord))
        .catch((error) => console.log("Error: ", error))
      }, []);

    fetch("http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${api}")
        .then((response) => response.json())
        .then((data) => setCoordinates(data.coord))
        .catch((error) => console.log("Error: ", error))
      
    return (
        <>
            <p>Based on your information, your latitude and longitude is: </p>
        </>
    );
}

export default LatLong;


// function App() {

//     //const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={2e644d9471fbd90155f27f6532383c9b}"
//     function Component() {
//       const API_KEY = process.env.REACT_APP_api_key
//     }
  
//     return (
//       <div className="App">
  
//       </div>
//     );
//   }
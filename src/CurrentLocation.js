import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CurrentWeather from './CurrentWeather.js';
import HourlyNextDay from './HourlyNextDay.js';
import DailyNextWeek from './DailyNextWeek.js';
import TopStories from './TopStories.js';

function CurrentLocation() {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const api = process.env.REACT_APP_api_key;
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [toggle, setToggle] = useState(false);
    const [page, setPage] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        if (zipCode !== '') {
            fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${api}`)
                .then((response) => response.json())
                .then((data) => {
                    setLat(data.lat)
                    setLon(data.lon)
                })
                .catch((error) => console.log("Error: ", error))
        }
    }, [toggle]);


    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const handleCity = (e) => {
        setCity(e.target.value);
    }

    const handleZipCode = (e) => {
        setZipCode(e.target.value);
    }

    const handleSubmit = (e) => {
        setFormSubmitted(true);
    }

    return (
        // <>
        //     <h2 class="location">Your Current Location</h2>
        //     <form class="form" onSubmit={handleSubmit}>
        //         <label>Address: </label>
        //         <input type="text"
        //             value={address}
        //             onChange={(e) => { handleAddress(e) }} />


        //         <label> City: </label>
        //         <input type="text"
        //             value={city}
        //             onChange={(e) => { handleCity(e) }} />


        //         <label> Zip Code: </label>
        //         <input type="text"
        //             value={zipCode}
        //             onChange={(e) => { handleZipCode(e) }} />
        //     </form>
        //     <Box textAlign='center'>
        //         <Button variant="contained"
        //             type="submit"
        //             onClick={() => { setToggle(!toggle); setPage(true); }}
        //         >Submit
        //         </Button>
        //     </Box>
        //     {formSubmitted && (
        //         // <p>Your latitude and longitude are: {lat}, {lon}</p>
        //         <CurrentWeather lat={lat} lon={lon} />
        //         // <DailyNextWeek lat={lat} lon={lon} />
        //         // <TopStories />
        //     )}
        // </>


        <>
            <h2 class="location">Your Current Location</h2>
            <form class="form">
                <label>Address: </label>
                <input type="text"
                    value={address}
                    onChange={(e) => { handleAddress(e) }} />


                <label> City: </label>
                <input type="text"
                    value={city}
                    onChange={(e) => { handleCity(e) }} />


                <label> Zip Code: </label>
                <input type="text"
                    value={zipCode}
                    onChange={(e) => { handleZipCode(e) }} />
            </form>

            <>
                <Box textAlign='center'>
                    <Button variant="contained"
                        type="submit"
                        onClick={() => { setToggle(!toggle); setPage(true); }}
                    >Submit
                    </Button>
                </Box>
                <CurrentWeather lat={lat} lon={lon} />
                <HourlyNextDay lat={lat} lon={lon} />
                <DailyNextWeek lat={lat} lon={lon} />
                <TopStories />
            </>
        </>
    );
}

export default CurrentLocation;
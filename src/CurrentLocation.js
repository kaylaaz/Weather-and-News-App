import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

function CurrentLocation() {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const api = process.env.REACT_APP_api_key;
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${api}`)
            .then((response) => response.json())
            .then((data) => {
                setLat(data.lat)
                setLon(data.lon)
            })
            .catch((error) => console.log("Error: ", error))
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

    // const handleSubmit = (e) => {
    //     alert('Your address is: ' +
    //         address + '. Your city is: ' + city +
    //         '. Your zip code is: ' + zipCode);
    // }

    //console.log(process.env.REACT_APP_api_key);
    return (
        <>
            <h2>Please enter your information</h2>
            <form >
                <label>Address:</label>
                <input type="text"
                    value={address}
                    onChange={(e) => { handleAddress(e) }} />


                <label>City: </label>
                <input type="text"
                    value={city}
                    onChange={(e) => { handleCity(e) }} />


                <label>Zip Code: </label>
                <input type="text"
                    value={zipCode}
                    onChange={(e) => { handleZipCode(e) }} />
            </form>

            <div>
                <Button variant="contained"
                    type="submit"
                    onClick={() => setToggle(!toggle)}>Submit
                </Button>
                <p>Your latitude and longitude is: {lat}, {lon}</p>
            </div>


        </>
    );
}

export default CurrentLocation;
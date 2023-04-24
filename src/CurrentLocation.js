import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

function CurrentLocation() {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const api = process.env.REACT_APP_api_key;

    useEffect(() => {

    }, [address, city, zipCode]);

    const url = "http://api.openweathermap.org/geo/1.0/direct?q=${address},${state code},${country code}&appid=${api}"
    const zipCodeUrl = "http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${api}"

    const [latlong, setLatlong] = useState([]);
    //map into component -> new file -> weather

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
        alert('Your address is: ' +
            address + '. Your city is: ' + city +
            '. Your zip code is: ' + zipCode);
    }

    //console.log(process.env.REACT_APP_api_key);
    return (
        <>
            <h2>Please enter your information</h2>
            <form onSubmit={(e) => { handleSubmit(e) }}>
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

                <input type="submit"
                    value="Submit" />

                <Button variant="contained" type="submit">Submit</Button>
            </form>

        </>
    );
}

export default CurrentLocation;
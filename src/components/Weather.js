import React, { useState, setEffect, useEffect } from "react";
import axios from 'axios';

export default function Weather() {
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
    });
    const { latitude, longitude } = location;
    const [weather, setWeather] = useState("");
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [wind, setWind] = useState(0);

    function geoSuccess(position) {
        setLocation({
            latitude: position.coords.latitude, 
            longitude: position.coords.longitude
        });
        }

    function geoError() {
        alert("Cannot find your location. Unable to import weather informaiton.")
    }
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=27306e0d72080c1e89bb4b2a519e6a55&units=metric`)
              .then(response => response.json())
              .then(data => {
                setWeather(data.weather[0].main);
                setCity(data.name);
                setTemp(data.main.temp);
                setHumidity(data.main.humidity);
                setWind(data.wind.speed);
              })
        }
        fetchData();
    }, []);

    return (
        <div>
            <div>{weather}</div>
            <div>{city}</div>
            <div>{Math.floor(temp)} °C</div>
            <div>{humidity} %</div>
            <div>{wind} meter/sec</div>
        </div>
    )
}
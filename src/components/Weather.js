import React, { useState, setEffect, useEffect } from "react";
import '../css/Weather.css';

export default function Weather() {
    const [weather, setWeather] = useState("");
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [wind, setWind] = useState(0);

    function geoSuccess(position) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=27306e0d72080c1e89bb4b2a519e6a55&units=metric`)
            .then(response => response.json())
            .then(data => {
                setWeather(data.weather[0].main);
                setCity(data.name);
                setTemp(data.main.temp);
                setHumidity(data.main.humidity);
                setWind(data.wind.speed);
            });
        }

    function geoError() {
        alert("Cannot find your location. Unable to import weather informaiton.")
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }, []);

    return (
        <div className="weather__container">
            <div>{city}</div>
            <div className="weather__current-weather">
                {weather === "Clear" ? <i className="fa-solid fa-sun" style={{color: '#ffe569'}}></i> : 
                 weather.toLowerCase().includes("clouds") ? <i className="fa-solid fa-cloud" style={{color: '#c0cbd3'}}></i> :
                 weather.toLowerCase().includes("rain") ? <i className="fa-solid fa-cloud-rain" style={{color: '#6d9cba'}}></i> :
                 weather === "Snow" ? <i className="fa-solid fa-snowflake" style={{color: '#9edaff'}}></i> :
                 weather.toLowerCase().includes("thunderstorm") ? <i class="fa-solid fa-cloud-bolt" style={{color: '#576885'}}></i> :
                 <i class="fa-solid fa-bars-staggered" style={{color: '#a8bce1'}}></i>
                }
                {weather}
            </div>
            <div className="weather__details">
                <div>{<i className="fa-solid fa-temperature-three-quarters"></i>} {Math.floor(temp)} °C</div>
                <div><i className="fa-solid fa-droplet"></i> {humidity} %</div>
                <div><i className="fa-solid fa-wind"></i> {wind} meter/sec</div>
            </div>
        </div>
    )
}
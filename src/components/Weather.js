import React, { useState, setEffect, useEffect } from "react";

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
        <div>
            <div>{city}</div>
            <div>{weather}</div>
            <div>{Math.floor(temp)} °C</div>
            <div>{humidity} %</div>
            <div>{wind} meter/sec</div>
        </div>
    )
}
import React from "react";
import axios from 'axios';

export default function Weather() {
    return (
        function getInfo(response) {
            let temp = response.data.main.temp;
            return (
                alert (`The temperature in Brighton is ${Math.round(temp)}°C.`)
            );
        }

        let apiKey = `3ac4d291dda277122b73faa304a1df6a`;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Brighton&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(getInfo);
    );
}
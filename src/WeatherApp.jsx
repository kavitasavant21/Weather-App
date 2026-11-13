import React, { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
import './WeatherApp.css'

const WeatherApp = () => {

    const [Weatherinfo, setweatherinfo] = useState({
        city: "Delhi",
        feels_like: 30.25,
        humidity: 35,
        temp: 30.99,
        tempMax: 30.99,
        tempMin: 30.99,
        weather: "smoke"
    })

    let updateinfo = (newinfo) => {
        setweatherinfo(newinfo);
    }

    return (
        <div className="weatherApp">

            <h1>☁ Weather App</h1>
            <p className="subtitle">Check the weather of your city</p>

            <SearchBox updateinfo={updateinfo} />

            <InfoBox info={Weatherinfo} />

            <p className="footer">Weather App | Designed by KS</p>

        </div>
    )
}

export default WeatherApp
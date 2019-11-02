import React, { useState, useEffect } from 'react';
import axios from 'axios'


const Weather = ({ capital }) => {
  const [weather, setWeather] = useState('')

  useEffect(() => {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    axios
      .get(`${proxy}https://www.metaweather.com/api/location/search/?query=${capital}`)
      .then(response => {

        axios
          .get(`${proxy}https://www.metaweather.com/api/location/${response.data[0].woeid}`)
          .then(response2 => {
            console.log(response2.data.consolidated_weather[0])
            setWeather(response2.data.consolidated_weather[0])
          })
      })
  }, [])

  if (!weather) {
    return null
  }
  return (

    <div>
      <h1>Weather in {capital}</h1>
      <div><p><strong>temperature:</strong> {weather.the_temp} Celsius</p></div>
      <div><p><strong>wind:</strong> {weather.wind_speed} kph direction {weather.wind_direction_compass}</p></div>
    </div>
  )

}

export default Weather;
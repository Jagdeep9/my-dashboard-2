import React from 'react'
import Dashboard from '../Dashboard'
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';


export default function Weather() {//in this we have used a weather api to show the weather of the locations searched from the search bar
    const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <>
    <Box sx={{ display: "flex" }}>
     <Dashboard/>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <h1 className='name12'>Weather</h1>
     <div className="app4">
      <div className='grad2'>
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p className='bold3'>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p className='bold3'>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p className='bold3'>Wind Speed</p>
            </div>
          </div>
        }



      </div>
      </div>
    </div>
     </Box>
    
      
    </Box>

    
</>
  );
}

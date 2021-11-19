import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getWeatherDetails } from '../api/WeatherApi';
import { WeatherInfo } from '../types';


interface Props {
  cityName: string
}

const WeatherDetails: React.FC<Props> = ({ cityName }) => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo|null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getWeatherDetails(cityName)
    .then(response => {
      setWeatherInfo(response)
      setLoading(false)
    })
  }, [cityName])

  return (
    <>
      <Box style={{
        border: '1px solid #ccc',
        padding: 30,
        borderRadius: 6,
        marginTop: 30,
      }}
      data-testid="weatherComponent"
      >
        {
          loading ?
            <Typography variant="h5" style={{ textAlign: 'center' }}>
              Loading...
            </Typography>
            :
            !weatherInfo ?
              <Typography variant="h5" style={{ textAlign: 'center' }}>
                Weather detail not found!
              </Typography>
              :
              <>
                <Typography variant="h5" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Weather Details
                </Typography>
                <Typography variant="h5" style={{ marginTop: 20 }}>
                  Temperature: <strong>{weatherInfo.current.temperature}</strong>
                </Typography>
                <Typography variant="h5" style={{ marginTop: 20 }}>
                  Weather Icons: <img src={weatherInfo.current.weather_icons[0]} style={{ height: 30 }} />
                </Typography>
                <Typography variant="h5" style={{ marginTop: 20 }}>
                  Wind Speed: <strong>{weatherInfo.current.wind_speed}</strong>
                </Typography>
                <Typography variant="h5" style={{ marginTop: 20 }}>
                  Precip: <strong>{weatherInfo.current.precip}</strong>
                </Typography>
              </>
        }
      </Box>
    </>
  )
}

export default WeatherDetails;

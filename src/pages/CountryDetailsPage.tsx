import { Box, Button, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryDetails } from '../api/CountryApi';
import WeatherDetails from '../components/WeatherDetails';
import { CountryDetails } from '../types';


const CountryDetailsPage = () => {
  const { countryName } =  useParams<{countryName:string}>();
  const [countryDetails, setCountryDetails] = useState<CountryDetails|null>(null);
  const [loading, setLoading] = useState(true);
  const [isWeatherVisible, setWeatherVisible] = useState(false);

  useEffect(()=> {
    getCountryDetails(countryName)
    .then(response => { 
      setCountryDetails(response)
      setLoading(false)
    });
  },[countryName])


  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Container maxWidth="sm">
        <Box style={{
          border: '1px solid #ccc',
          padding: 30,
          borderRadius: 6,
        }}>
          {
            loading?
              <Typography variant="h5" style={{ textAlign: 'center'}}>
                Loading...
              </Typography>
            :
              !countryDetails?
                <Typography variant="h5" style={{ textAlign: 'center'}}>
                  Please enter a valid country name
                </Typography>
              :
                <>
                  <Typography variant="h5">
                    Name: <strong>{countryDetails.capital}</strong>
                  </Typography>
                  <Typography variant="h5" style={{marginTop: 20}}>
                    Population: <strong>{countryDetails.population}</strong>
                  </Typography>
                  <Typography variant="h5" style={{marginTop: 20}}>
                    Latlg: <strong>{countryDetails.latlng}</strong>
                  </Typography>
                  <Typography variant="h5" style={{marginTop: 20}}>
                    Flag: <img src={countryDetails.flag} style={{height: 30}} />
                  </Typography>

                  {
                    !isWeatherVisible?
                      <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{
                          padding: 12,
                          marginTop: 30
                        }}
                        onClick={() => setWeatherVisible(true)}
                      >
                        Capital Weather
                      </Button>
                    :
                      <WeatherDetails cityName={countryDetails.capital} />
                  }
                  
                </>
            }
        </Box>
      </Container>
    </Container>
  )
}

export default CountryDetailsPage;

import React, { ChangeEvent, useState } from 'react';
import { Container, Box, TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [country, setCountry] = useState<string>('');
  const history = useHistory();

  const navigateToCountryDetails = () => {
    history.push(`/country-details/${country}`);
  }

  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Container maxWidth="xs">
        <Box style={{
          border: '1px solid #ccc',
          padding: 30,
          borderRadius: 6,
        }}>
          <TextField 
            label="Enter Country"
            variant="outlined"
            fullWidth
            onChange={(e:ChangeEvent<HTMLInputElement>)=>{
              setCountry(e.target.value);
            }}
          />
          <Button
            type="submit"
            data-testid="submit"
            disabled={country===''}
            variant="contained"
            color="primary"
            fullWidth
            style={{
              padding: 12,
              marginTop: 30
            }}
            onClick={navigateToCountryDetails}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Container>
  )
}

export default Home;

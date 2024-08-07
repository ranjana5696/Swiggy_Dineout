import React, { useContext, useState, useEffect, useCallback } from 'react'
import { Box, TextField, Typography, Autocomplete, Button, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import '../index.css';
import swiggyDineoutLogo from '../Images/ScreenDesign/swiggy_dineout_logo.png';
import { MyContext } from './ApiContextData'

export const getAllCities = (data) => {
  return [...new Set(data.map(item => item.address.city))];
}

function Header() {

  const { data } = useContext(MyContext);
  const [city, setCity] = useState([]);
  const [selectCity, setSelectCity] = useState('');

  useEffect(() => {
    if (data) {
      let cities = [];
      cities = getAllCities(data);
      localStorage.setItem("Cities", cities);
    setTimeout(()=>{
      let currCity = localStorage.getItem("SelectedCity");
      if (currCity) {
        setSelectCity(currCity);
      }
    },1500)
     
      setCity(cities);
    }
  }, [data,selectCity]);

  const handleCityChange = useCallback((e, newVal) => {
    localStorage.removeItem('SelectedCity');
    localStorage.setItem("SelectedCity", newVal);
    setSelectCity(localStorage.getItem("SelectedCity"));
  }, []);

  return (
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{p: 1, borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
          >
             <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                      <Typography sx={{width: 100, pt: 1}} >
                            <img src={swiggyDineoutLogo} alt="image" width='100%' />
                      </Typography>
                      <Autocomplete 
                          disablePortal
                          size="small"
                          id="combo-box-demo"
                          disableClearable
                          options={city}
                          value={selectCity}
                          sx={{ width: 250, ml: 10, p: 0 }}
                          renderInput={(params) => <TextField {...params} label="City" />}
                          onChange={handleCityChange}
                        />
                  </Box>
                  <Box sx={{display:'flex'}}>
                    <Box sx={{ my: 1, mx: 3 }}  >
                      <Link className="NavItems" to="/" >Home</Link>
                    </Box>
                    <Box sx={{ my: 1, mx: 3 }} >
                      <Link className="NavItems" to="/restaurants" >Book A Table</Link>
                    </Box>
                    <Box sx={{ my: 1, mx: 3 }} >
                      <Link className="NavItems" to="/blog" >Blog</Link>
                    </Box>
                  </Box>          
                  <Button href="#" variant="contained" color="warning" size='small' sx={{ my: 1, mx: 1, px: 5 }}>
                      Login
                  </Button>
           </Box>
      </AppBar>
  )
}

export default Header

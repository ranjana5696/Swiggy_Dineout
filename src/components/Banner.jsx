import React from 'react'
import Box from '@mui/material/Box';
import bannerImage from '../Images/banner-image.png';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


function Banner() {

  const boxStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: 'auto'
  };

  return (
    <Box sx={boxStyle} paddingTop={'180px'} paddingBottom={'150px'}>

        <Typography fontSize={'34px'} sx={{ color: 'white', fontWeight: '600', m: 'auto', textAlign: 'center'}}>
            It's Now Safe To <p style={{display:'inline', color:'#FF645A'}}> Crave! </p> 
        </Typography>

        <Paper 
            component="form"
            sx={{ p: '2px 4px', display: 'flex', width: 1000, m: 'auto' }} >

              <IconButton color='warning' type="button" sx={{ fontWeight: 500  }} aria-label="search">
                <SearchIcon fontSize='large' sx={{ color: '#FF645A'}} />
              </IconButton>

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for Restaurants, Cuisines, Location..."     />  

              <Button href="#" variant="contained" color="warning"  sx={{ my: 1, mx: 1, px: 5, py: 1.2 }}>
                      Search
              </Button>        
          </Paper>
    </Box>
      
  )
}

export default Banner


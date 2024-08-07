import React, { useContext } from 'react';
import ResturantCard from './ResturantCard';
import { Box, Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { MyContext } from './ApiContextData';
import Loader from './Loader'
import { Link, useLocation } from 'react-router-dom';

const Resturants = (props)=> {

  const { title, itemsToShow, currLocation } = props;
  const { data, loading } = useContext(MyContext);
  const location = useLocation();

  let filteredData = data;
  
  if (currLocation) {
    filteredData = data.filter(item => item.address.city === currLocation);
  }
  const displayedData = itemsToShow ? filteredData.slice(0, parseInt(itemsToShow, 10)) : filteredData;

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Box component="section" sx={{width: '1150px', margin: 'auto', padding: '40px 0'}} >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '15px' }}>
              <Typography as="h2" sx={{ fontSize:'30px', fontWeight:600 }}>{title}</Typography>
              {location.pathname !== "/restaurants" && (
                <Button variant="text" component={Link} to="/restaurants">
                  Show More
                </Button>
              )}
          </Box>
          <Grid container spacing={2}>
            {displayedData && displayedData.map((res) => (
              <Grid item xs={12} sm={6} md={3} key={res.id}>
                <ResturantCard res={res} />
              </Grid>
            ))}
          </Grid>
      </Box>
    </>
  )
}

export default Resturants;

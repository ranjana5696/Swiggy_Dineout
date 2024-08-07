import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Offer1 from '../Images/ScreenDesign/Offer1.png';
import Offer2 from '../Images/ScreenDesign/Offer2.png';
import Offer3 from '../Images/ScreenDesign/Offer3.png';
import Offer4 from '../Images/ScreenDesign/Offer4.png';


function BestOffers() {
  return (
      <Box sx={{ height: 'auto', p: '40px 180px', backgroundColor: '#f3f3f3'}}>
        <Typography sx={{ paddingLeft: 2, fontSize: '25px', fontWeight: 800 }}> Best offers </Typography>          
            <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1.5,
                    width: 130,
                    height: 160,
                  },
                }}    >

                <Paper elevation={5} > <img src={Offer1} alt="Offer1" width='100%' /> </Paper >
                <Paper elevation={5} > <img src={Offer2} alt="Offer2" width='100%' /> </Paper >
                <Paper elevation={5} > <img src={Offer3} alt="Offer3" width='100%' /> </Paper >
                <Paper elevation={5} > <img src={Offer4} alt="Offer4" width='100%' /> </Paper >

            </Box>
        </Box>
  )
}

export default BestOffers

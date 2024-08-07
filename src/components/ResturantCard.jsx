import { Box, Typography } from '@mui/material';
import React from 'react'
import {getRandomImageUrl} from '../components/BlogPageCard'

const ResturantCard = ({res}) => {
    
    const { firstName, lastName, age, address } = res;
    
  return (
    <>
      <Box className="Box-style" sx={{minHeight:'240px', display: 'flex', flexDirection:'column', wordWrap:'break-word', borderRadius:'5px', overflow:'hidden', mb:'40px'}}>
        <Box sx={{ width: '280px', height:'140px'}}>
            <img
                style={{ width: '100%', height: '100%'}}
                alt={'Random image'}
                src={getRandomImageUrl()} />
        </Box>
        <Box sx={{p:'10px'}} >
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Box>
                    <Typography as='h4' sx={{fontSize:'15px', fontWeight: 600,}} >{firstName} {lastName}</Typography>
                    <Typography as='p' sx={{fontSize:'12px', color:'#666'}}> {address.city} </Typography>
                </Box>
                <Box sx={{backgroundColor:'#8cbb0f', color:'#fff', fontWeight:700, borderRadius:'3px', p:'6px 8px', marginLeft:'80px'}} >
                    {age}
                </Box>
            </Box>
        </Box>
      </Box>
    </>
  )
}

export default ResturantCard;

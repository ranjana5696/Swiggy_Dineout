import React, { useState, useEffect } from 'react'
import { Box, Button, Dialog, DialogActions, DialogTitle } from '@mui/material'

const Model = () => {
    const [open, setOpen] = useState(false);
    const [city,setCity] = useState();
    
      const handleClose = (e) => {
        let selectedModelCity = e.target.innerText;
        localStorage.setItem("SelectedCity", selectedModelCity);
        setOpen(false);
      };

      useEffect(()=>{
        let allCities = localStorage.getItem("Cities")
        if (allCities) {
            allCities = allCities.split(',');
            setCity(allCities)
        }
        setOpen(true);
      },[])

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{textAlign:'center'}}>
          {"Please select your city !"}
        </DialogTitle>
        <DialogActions >
            <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {city && city.map((c)=> <Button key={c} variant="outlined" onClick={handleClose} sx={{boxSizing:'border-box', width:'155px' , m:'10px', textTransform:'capitalize'}} >{c}</Button> )}
            </Box>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Model;

import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import swiggyDineoutLogo from '../Images/ScreenDesign/swiggy_dineout_logo.png';


const footers = [
  {
    title: 'About',
    description: ['About Us','Blog','Terms & Conditions', 'Privacy Policy'],
  },
  {
    title: 'Top Cuisines',
    description: ['Street Food', 'North Indian', 'Chinese', 'South Indian', 'Italian', 'Rajasthani'],
  },
  {
    title: 'Top Facilities',
    description: ['Outdoor Seating' , 'QSR', 'Casual Dining', 'Cafe policy','Terms of use'],
  },
  {
    title: 'Top Locations',
    description: ['Malviya Nagar', 'Tonk Road', 'C Scheme', 'Mansarovar', 'Raja Park', 'Vaishali Nagar'],
  }
];

const defaultTheme = createTheme();

function Footer() {
  return (
          <ThemeProvider theme={defaultTheme}>
                 <Container
                    maxWidth="lg"
                    component="footer"
                    sx={{
                      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                      borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                      py: [3, 6],
                    }}  >
                      <Grid container spacing={3} justifyContent="space-evenly">
                          {footers.map((footer) => (
                            <Grid item xs={6} sm={3} key={footer.title}>
                              <Link variant="h6" color="#ed6c02" gutterBottom underline="none" >
                                  {footer.title}
                              </Link>
                              <ul >
                                {footer.description.map((item) => (
                                  <li  key={item} >
                                    <Link href="#" variant="subtitle1" color="text.secondary" underline="hover" >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </Grid>
                          ))}
                      </Grid>
                 </Container>

                 <Container sx={{ textAlign: 'center', mt: 2, mb: 2}}>
                  <Typography sx={{width: 100, pt: 1, mx: 'auto'}} > <img src={swiggyDineoutLogo} alt="footer logo" width='100%' /> </Typography>
                  <Typography variant="subtitle1" color="text.primary" sx={{ fontSize: 12}} >Find the best Restaurants, Deals, Discounts & Offers</Typography>
                  <Typography variant='subtitle1' sx={{ fontSize: 15}} > Write to us at: dineout.helpdesk@swiggy.in </Typography>
                  <Box> 
                        <FacebookRoundedIcon color="primary" cursor='pointer' /> 
                        <InstagramIcon color="secondary" cursor='pointer' /> 
                        <TwitterIcon color="primary" cursor='pointer' /> 
                        <YouTubeIcon color="warning" cursor='pointer' /> 
                  </Box>
                  <Typography variant='caption text' sx={{ fontSize: 12}}>© 2022 - Swiggy All Rights Reserved</Typography>
                 </Container>
          </ThemeProvider>
  )
}

export default Footer

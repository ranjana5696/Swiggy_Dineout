import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button  } from "@mui/material";

export const getRandomImageUrl = () => {
    return `https://picsum.photos/300/200?random=${Math.random()}`;
};

const BlogPageCard = ({res}) => {
    const {author, content, date_published, title} = res;

  return (
    <>
      <Box sx={{ flex: '1 1 300px', maxWidth: '345px', margin: '10px' }} >
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%'}} >
                <CardActionArea sx={{ flexGrow: 1 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={getRandomImageUrl()}
                        alt="random image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography className='blogContent' variant="body2" color="text.secondary" overflow={'hidden'} textOverflow={'ellipsis'} >
                            {content}
                        </Typography>
                        <Typography variant="body2" color="text.primary" mt={'15px'}>
                            {author}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography gutterBottom variant="body2" color="text.secondary" sx={{pl:'10px'}}>
                        {date_published}
                    </Typography>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
      </Box>
    </>
  )
}

export default BlogPageCard;

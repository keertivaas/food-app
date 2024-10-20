
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Rating } from '@mui/material';

const SingleRestDescUI = ({ name, cost, rating, image, cuisines }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Cuisines: {cuisines}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cost: ${cost}
          </Typography>
          <Box display="flex" alignItems="center">
            <Rating name="read-only" value={rating} readOnly precision={0.5} />
            <Typography variant="body2" color="text.secondary" ml={1}>
              {rating}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SingleRestDescUI;

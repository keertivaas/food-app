import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const RestCard = function(props){
    return(
      <div className="cardContainer">
        <Card sx={{ width: 250 }} style={props.styles}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={props.imgSrc}
              alt={props.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {props.desc}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {"Rs " + props.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
  

export default RestCard;
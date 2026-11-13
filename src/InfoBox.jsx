import React from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';

const InfoBox = ({info}) => {
    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    let HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    let RAIN_URL="https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    let COLD_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    
  return (
    <div className='InfoBox'>
       

        <div className='cardContainer'>

         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>80? RAIN_URL :info.temp>50? HOT_URL :COLD_URL }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80? <ThunderstormIcon/> :info.temp>50? <LocalFireDepartmentIcon/> :<AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temprature : {info.temp}&deg;C</p>
         <p>Humidity : {info.humidity}</p>

          <p>Min Temp : {info.tempMin}&deg;C</p>
         <p>Max Temp : {info.tempMax}&deg;C</p>
        
         <p>The weather can be describe as <i>{info.weather} </i>and feels like  : {info.feels_like}&deg;C</p>
         <p></p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
  )
}

export default InfoBox
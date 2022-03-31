import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './BusinessCard.css'

  export default function BusinessCard(props) {
    console.log(props)
    return (
      <Box sx={{ maxWidth: 500 }}>
        <Card variant="outlined">
        <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.company}
        </Typography>
        <Typography variant="body2">
          {props.email}
          <br />
          {props.address}
        </Typography>
      </CardContent>
      <CardContent size="small">
        {props.telephone}
      </CardContent>
        </React.Fragment>
        </Card>
      </Box>
    );
  }
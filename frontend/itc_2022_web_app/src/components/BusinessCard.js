import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './BusinessCard.css'

const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Title
        </Typography>
        <Typography variant="h5" component="div">
          Name
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Company Name
        </Typography>
        <Typography variant="body2">
          Email
          <br />
          {'Address'}
        </Typography>
      </CardContent>
      <CardContent size="small">
        Telephone numbers
      </CardContent>
    </React.Fragment>
  );
  
  export default function TestCard() {
    return (
      <Box sx={{ maxWidth: 500 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    );
  }
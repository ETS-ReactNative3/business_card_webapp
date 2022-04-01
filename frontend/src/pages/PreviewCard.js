import React from 'react'
import BusinessCard from '../components/BusinessCard'
import Button from '@material-ui/core/Button'
import axios from 'axios'


const retrieveCards = () => {
  
  

  const token = document.cookie.split('=')

  const config = {headers: {'Authorization': ('Bearer ' + token[1])}}


  axios
    .get('http://localhost:5000/api/cards', config)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error.response)
    })
  
}

const PreviewCard = () => {
  return (
    <div>
      Preview Card
      <BusinessCard/>
      <button onClick={retrieveCards}> TEST</button>
    </div>
  )
}

export default PreviewCard
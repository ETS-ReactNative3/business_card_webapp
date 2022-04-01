import React, {useState} from 'react'
import BusinessCard from '../components/BusinessCard'
import Button from '@material-ui/core/Button'
import axios from 'axios'




const PreviewCard = () => {


  const [cardResponse, setCards] = useState([])

const retrieveCards = () => {

  const token = document.cookie.split('=')
  const config = {headers: {'Authorization': ('Bearer ' + token[1])}}

  axios
    .get('api/cards', config)
    .then(response => {
      console.log(response)
      console.log(response.data)
      const cards = response.data
      setCards(cards)
    })
    .catch(error => {
      console.log(error.response)
    })
}


  return (
    <div>
      Preview Card
      <BusinessCard/>
      <button onClick={retrieveCards}> TEST</button>
    </div>
  )
}

export default PreviewCard
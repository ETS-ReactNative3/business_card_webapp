import React, {List, useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import axios from 'axios';

const CardTemplate1 = () => {

  const [allCards, setCards] = useState([])
  const retrieveCards = (e) => {
      e.preventDefault();
      const token = document.cookie.split('=')
      const config = {headers: {'Authorization': ('Bearer ' + token[1])}}
      axios
        .get('api/cards', config)
        .then(response => {
          console.log(response.data)
          //const responseData = response.data
          setCards(response.data)
      })
        .catch(error => {
          console.log(error.response)
    })
  }  

  //useEffect(() => retrieveCards(), []);
  
  return (
  <div>  
    <button onClick={retrieveCards}> Preview Template 1 </button>
    <p> {allCards._id}</p>
  </div>
  );
}

export default CardTemplate1

/*
<button onClick={retrieveCards}> Preview Template 1 </button>
    {allCards.map((cards) => (
      <List key ={cards._id}>
        <Card className="bg-white text-black">
        <Card.Img src={cards.cardImagePath} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{cards.name}</Card.Title>
              <Card.Text>Address: {cards.address} </Card.Text>
              <Card.Text>Email: {cards.email}</Card.Text>
              <Card.Text>Phone Number: {cards.phoneNumber}</Card.Text>
              <Card.Text> Title: {cards.title} </Card.Text>
          </Card.ImgOverlay>
      </Card>
      </List>
    ))}
*/
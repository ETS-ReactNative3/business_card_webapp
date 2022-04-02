import React, {useState, useEffect} from 'react';
import {Card, Row, Col} from 'react-bootstrap'
import axios from 'axios';

const CardTemplate1 = () => {

  const [allCards, setCards] = useState([])
  const retrieveCards = () => {
      //e.preventDefault();
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

  useEffect(() => retrieveCards(), []);
  
  return (
  <div className="color-overlay justify-content-center align-items-center">

  <Row xs={1} md={2} className="g-4">
    {allCards.map((cards) => (
            <div className="d-flex justify-content-center align-items-center">

      <Col>
      <Card className="card-styling" style={{textAlign:"center", width:"70rem", margin:"20px"}}key ={cards._id}>
        <Card.Img src={cards.cardImagePath} alt="Card image" />
          <Card.ImgOverlay>
              <Card.Text style={{fontWeight:"bold", fontSize:"50px", }}>{cards.name}</Card.Text>
              <Card.Text style ={{fontStyle:"italic", fontSize:"35px", marginTop:"-35px"}}>{cards.title} </Card.Text>
              <Card.Text style={{fontWeight:"bold", fontSize:"70px",  textDecorationLine:"underline", margin:"35px"}}>{cards.companyName} </Card.Text>

              <Card.Text style={{fontSize:"35px", marginTop:"50px", marginBottom:"-18px"}}>{cards.address} </Card.Text>
              <Card.Text style={{fontSize:"35px",marginBottom:"-18px"}}>{cards.email}</Card.Text>
              <Card.Text style={{fontSize:"35px",}}>{cards.phoneNumber}</Card.Text>
          </Card.ImgOverlay>
      </Card>
      </Col>
      </div>
    ))}
    </Row>
    

    
    {/* {allCards.map((cards) => (
      <div className="d-flex justify-content-center align-items-center">
      <Card className="card-styling" style={{textAlign:"center", width:"70rem"}}key ={cards._id}>
        <Card.Img src={cards.cardImagePath} alt="Card image" />
          <Card.ImgOverlay>
              <Card.Text>{cards.name}</Card.Text>
              <Card.Text >Address: {cards.address} </Card.Text>
              <Card.Text >Email: {cards.email}</Card.Text>
              <Card.Text>Phone Number: {cards.phoneNumber}</Card.Text>
              <Card.Text> Title: {cards.title} </Card.Text>
              <Card.Text> Company: {cards.companyName} </Card.Text>
          </Card.ImgOverlay>
          <br></br>
   

      </Card>

       </div>
    ))} */}


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
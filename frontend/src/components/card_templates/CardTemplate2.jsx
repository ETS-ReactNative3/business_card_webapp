import React, {useState, useEffect} from 'react';
import {Card, Row, Col} from 'react-bootstrap'
import axios from 'axios';

const CardTemplate2 = () => {

  const [allCards, setCards] = useState([])
  const retrieveCards = () => {
    //e.preventDefault();
    const cookie = document.cookie.split('token=')
    const token = cookie[1].split(';')
    const config = {headers: {'Authorization': ('Bearer ' + token[0])}}
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
            <div className="d-flex justify-content-center align-items-center" style={{marginLeft:"10px"}}>

      <Col>
      <Card className="card-styling" style={{textAlign:"left", width:"70rem", margin:"20px", }}key ={cards._id}>
        <Card.Img src={cards.cardImagePath} alt="Card image" />
          <Card.ImgOverlay>
              <Card.Text style={{fontWeight:"bold", fontSize:"50px", marginTop:"40px", marginLeft:"30px"}}>{cards.name}</Card.Text>
              <Card.Text style ={{fontStyle:"italic", fontSize:"35px", marginTop:"-35px", marginLeft:"30px"}}>{cards.title} </Card.Text>
              <Card.Text style={{fontWeight:"bold", fontSize:"70px",  textDecorationLine:"underline", margin:"35px", textAlign:"right"}}>{cards.companyName} </Card.Text>

              <Card.Text style={{fontSize:"35px", marginTop:"70px", marginBottom:"-18px", marginLeft:"30px"}}>{cards.address} </Card.Text>
              <Card.Text style={{fontSize:"35px",marginBottom:"-18px", marginLeft:"30px"}}>{cards.email}</Card.Text>
              <Card.Text style={{fontSize:"35px", marginLeft:"30px"}}>{cards.phoneNumber}</Card.Text>
          </Card.ImgOverlay>
      </Card>
      </Col>
      </div>
    ))}
    </Row>
    



  </div>
  );
}

export default CardTemplate2


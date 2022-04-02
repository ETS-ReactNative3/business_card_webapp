import React, { useState } from "react";
import axios from 'axios';
import QueryString from 'query-string';
import {Form, Card, Container, Row, Col} from 'react-bootstrap'
import Button from '@material-ui/core/Button'


const ContactForm = () => {
  const [status, setStatus] = useState("Send Message");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alertMsg, setAlert] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const config = {headers: {"Content-Type": 'application/x-www-form-urlencoded'}}

    axios.post('contact', QueryString.stringify({
        name: name, 
        email: email, 
        subject: subject,
        message: message
      }), config)
    .then(response => { 
      setAlert("Your message has been sent! We will get back to you shortly.")
      console.log(response)
    })
    .catch(error => {
      console.log(error.response)
    });
  setAlert("");
  setStatus("Send");
  
  };
  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <Form className="rounded w-25 p-3" style={{backgroundColor: "#36393F"}} onSubmit={handleSubmit}>
        <h1 style={{color: "white",}} >
          Name
        </h1>
          <Form.Label style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Username</Form.Label>
          <Form.Group controlId="text">
            <Form.Control style ={{color: "black", fontSize: "20px"}} placeholder="Enter Username" size="sm" onChange={(e) => {
              setName(e.target.value)
            }}>
              </Form.Control>
          </Form.Group>
          <Form.Label style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Email</Form.Label>
          <Form.Group controlId="text">
            <Form.Control style ={{color: "black", fontSize: "20px"}} type="email" placeholder="Enter Email" size="sm" onChange={(e) => {
              setEmail(e.target.value)
            }}>
              </Form.Control>
          </Form.Group>
          <Form.Label style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Subject</Form.Label>
          <Form.Group controlId="text">
            <Form.Control style ={{color: "black", fontSize: "20px"}} placeholder="Enter Subject" size="sm" onChange={(e) => {
              setSubject(e.target.value)
            }}>
              </Form.Control>
          </Form.Group>
          <Form.Label style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Message</Form.Label>
          <Form.Group controlId="text">
            <Form.Control style ={{color: "black", fontSize: "20px"}}  placeholder="Enter Message" size="sm" onChange={(e) => {
              setMessage(e.target.value)
            }}>
              </Form.Control>
          </Form.Group>
            <br></br>
          <Button className="btn btn-primary mt-3" variant="primary" size="lg" style={{backgroundColor: "#7289DA", color: "white"}} type="submit"> 
          {status} 
          </Button>
          <br></br>
           <p style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}> {alertMsg} </p> 

      </Form>
    </div>


  // <div className="color-overlay d-flex justify-content-center align-items-center">
  //         <Form className="rounded w-50 p-5 " style={{backgroundColor: "#36393F"}}autoComplete="off" onSubmit={handleSubmit} encType='multipart/form-data'>
  //   <h1> Contact Us! </h1>
  //     <label> Name </label>
  //     <input 
  //       type="text"onChange={(e) => {
  //         setName(e.target.value)
  //       }}
  //       />
  //     <br></br>
  //     <label> Email </label>
  //     <input type= "email" onChange={(e) => {
  //       setEmail(e.target.value)
  //     }}
  //     />
  //     <br></br>
  //     <label> Subject </label>
  //     <input 
  //       type="text"onChange={(e) => {
  //         setSubject(e.target.value)
  //       }}
  //       />
  //     <br></br>
  //     <label> Message </label>
  //     <input 
  //       type="text"onChange={(e) => {
  //         setMessage(e.target.value)
  //       }}
  //       />
  //     <br></br>
  //     <button onClick={handleSubmit}> {status} </button>
  //     <br></br>
  //     <p> {alertMsg} </p> 
  //     </Form>
  //     </div>
  // );
  )};

export default ContactForm;

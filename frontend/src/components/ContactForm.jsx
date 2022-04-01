import React, { useState } from "react";
import axios from 'axios';
import QueryString from 'query-string';

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
    <div>
    <h1> Contact Us! </h1>
      <label> Name </label>
      <input 
        type="text"onChange={(e) => {
          setName(e.target.value)
        }}
        />
      <br></br>
      <label> Email </label>
      <input type= "email" onChange={(e) => {
        setEmail(e.target.value)
      }}
      />
      <br></br>
      <label> Subject </label>
      <input 
        type="text"onChange={(e) => {
          setSubject(e.target.value)
        }}
        />
      <br></br>
      <label> Message </label>
      <input 
        type="text"onChange={(e) => {
          setMessage(e.target.value)
        }}
        />
      <br></br>
      <button onClick={handleSubmit}> {status} </button>
      <br></br>
      <p> {alertMsg} </p> 
      </div>
  );
};

export default ContactForm;

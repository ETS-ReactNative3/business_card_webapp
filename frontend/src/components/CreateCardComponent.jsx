import React, { useState } from 'react'
import TextField from'@material-ui/core/TextField'
// import UploadButton from './UploadButton'
// import PreviewButton from './PreviewButton'
// //import BusinessCard from './BusinessCard'
// import LayoutDropdown from './LayoutDropdown'
import { Grid, makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import {Form, Card, Container, Row, Col, Alert} from 'react-bootstrap'


const FormData = require('form-data');

const CreateCard = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [company, setCompany] = useState("");
  const [cardFileName, setCardFileName] = useState("");

  const [show, setShow] = useState(false);


  const onChangeFile = e => {
    setCardFileName(e.target.files[0]);
  }

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Incomplete Card Creation Form</Alert.Heading>
        <p>
          Please complete all fields!
        </p>
      </Alert>
    );
  }

  const handleSubmit = (e) =>{

    if(name == "" || title == "" || email == "" || address == "" || telephone == "" || company == "" || cardFileName == "")
    {
      console.log("hello")
      setShow(true)
      return;
    }

    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("title", title);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("phoneNumber", telephone);
    formData.append("companyName", company);
    formData.append("cardImage", cardFileName);
    
    setName("");
    setTitle("");
    setEmail("");
    setAddress("");
    setTelephone("");
    setCompany("");

    const cookie = document.cookie.split('token=')
    const token = cookie[1].split(';')

    const config = {headers: {'Authorization': ('Bearer ' + token[0]), 
  //  "Content-Type": ('multipart/form-data'),
  }}

    axios
      .post("api/cards", formData, config)
      .then((res) => {
        console.log('POST COMPLETE')
      })
      .catch((err) => {
        console.log(err);
      });
};
  return (
  <div className="color-overlay d-flex justify-content-center align-items-center">
    <Form className="rounded w-50 p-5 " style={{backgroundColor: "#36393F"}} autoComplete="off" onSubmit={handleSubmit} encType='multipart/form-data'>
    <h1 style={{color: "white", fontSize: "50px", alignContent: "left", fontWeight: "bold"}}> Create New Card </h1>
      <div className='form-group'>
        <label htmlFor="name" style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Name</label>
        <input type="text" 
        value={name}
        required="true"
        onChange={e => setName(e.target.value)}
        className="form-control" placeholder="Name" />
      </div>
      <div className='form-group'>
        <label htmlFor="position" style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Position/Title</label>
        <input type="text" 
        value={title}
        required="true"
        onChange={e => setTitle(e.target.value)}
        className="form-control" placeholder="Position/Title" />
      </div>
      <div className='form-group'>
        <label htmlFor="email" style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Email</label>
        <input type="text"
        value={email} 
        required="true"
        onChange={e => setEmail(e.target.value)}
        className="form-control" placeholder="Email" />
      </div>
      <div className='form-group'>
        <label htmlFor="address" style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Address</label>
        <input type="text" 
        value={address} 
        required="true"

        onChange={e => setAddress(e.target.value)}
        className="form-control" placeholder="Address" />
      </div>
      <div className='form-group'>
        <label htmlFor="company" style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Company</label>
        <input type="text"
        value={company}  
        required="true"
        onChange={e => setCompany(e.target.value)}
        className="form-control" placeholder="Company" />
      </div>
      <div className='form-group'>
        <label htmlFor="phoneNumber" style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Phone Number</label>
        <input type="text" 
        value={telephone} 
        required="true"
        onChange={e => setTelephone(e.target.value)}
        className="form-control" placeholder="Phone Number" />
      </div>
      <Button className="btn btn-primary mt-3" onClick={handleSubmit} variant="contained" color="primary" component="span" style={{backgroundColor: "#23272A"}}>
        Create Card
      </Button>
      <input
        type="file"
        filename = "cardImage"
        className = "form-control-file"
        required="true"
        onChange = {onChangeFile}
        accept="image/*"
        style={{ display: 'none' }}
        id="background-image"
    />
  <label htmlFor="background-image">
    <Button className="btn btn-primary mt-3" variant="contained" color="primary" component="span" style={{backgroundColor: "#7289DA"}}>
        Upload Image
    </Button>
    </label>
    </Form>
  </div>
)}

export default CreateCard
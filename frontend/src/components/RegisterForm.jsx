import React, {useState} from 'react'
import axios from 'axios'
import QueryString from 'query-string'
import {Form, Button, } from 'react-bootstrap'
import { BrowserRouter as Router,Routes, Route, Link, useNavigate} from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate()

  const [userNameReg, setUsernameReg] = useState("")
  const [emailReg, setEmailReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")

  const register = () => {
  
    const config = {headers: {"Content-Type": 'application/x-www-form-urlencoded'}}
  
    axios.post('api/users', QueryString.stringify({
      name: userNameReg, 
      password: passwordReg, 
      email: emailReg
    }), config)
    .then(response => { 
      navigate('/login')
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
  }


  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
    <Form className="rounded w-25 p-3" style={{backgroundColor: "#36393F"}}>
      <h1 style={{color: "white",}} >
        Register
      </h1>
        <Form.Label style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Username</Form.Label>
        <Form.Group controlId="text">
          <Form.Control style ={{color: "black", fontSize: "20px"}} type="email" placeholder="Enter Username" size="sm" onChange={(e) => {
            setUsernameReg(e.target.value)
          }}>
            </Form.Control>
        </Form.Group>

      <Form.Label style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Email Address</Form.Label>
        <Form.Group controlId="formBasicEmail">
          <Form.Control style ={{color: "black", fontSize: "20px"}} type="email" placeholder="Enter email" size="sm" onChange={(e) => {
            setEmailReg(e.target.value)
          }}>
            </Form.Control>
        </Form.Group>

      <Form.Label style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Password</Form.Label>
        <Form.Group className="mb-60" controlId="formBasicPassword">
          <Form.Control style ={{color: "black", fontSize: "20px"}} type="password" placeholder="Enter password" onChange={(e) => {
            setPasswordReg(e.target.value)
          }}>
          </Form.Control>
        </Form.Group>
        <Button className="btn btn-primary mt-3" variant="primary" size="lg" style={{backgroundColor: "#7289DA"}}onClick={register}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default RegisterForm
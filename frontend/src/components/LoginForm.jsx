import React, {useState} from 'react'
import axios from 'axios'
import QueryString from 'query-string'
import Button from '@material-ui/core/Button'

import {Form, Card, Container, Row, Col} from 'react-bootstrap'
import { BrowserRouter as Router,Routes, Route, Link, useNavigate} from 'react-router-dom';


const LoginForm = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginStatus, setStatus] = useState("")

  const login = () => {
    
    const config =  {withCredentials: true, headers: {"Content-Type": 'application/x-www-form-urlencoded'}}
  
    axios.post('api/users/login', QueryString.stringify({
      password: password, 
      email: email
    }), config)
    .then(response => { 
      navigate('/create_card')
      window.location.reload(false);
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
        Login
      </h1>
      <Form.Label style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Email Address</Form.Label>

        <Form.Group controlId="formBasicEmail">
        <Form.Control style ={{color: "black", fontSize: "20px"}} type="email" placeholder="Enter email" size="sm" onChange={(e) => {
          setEmail(e.target.value)
        }}>
          </Form.Control>
        </Form.Group>

        <Form.Label style={{color: "white", fontSize: "24px", alignContent: "left", fontWeight: "bold"}}>Password</Form.Label>
        <Form.Group className="mb-60" controlId="formBasicPassword">
          <Form.Control style ={{color: "black", fontSize: "20px"}} type="password" placeholder="Enter password" onChange={(e) => {
            setPassword(e.target.value)
          }}>
          </Form.Control>
          
        </Form.Group>
      <Button className="btn btn-primary mt-3 " variant="primary" size="lg" style={{backgroundColor: "#7289DA", color:"white"}}onClick={login}>
        Submit
      </Button>
      <div style={{color:"white", fontSize:"20px"}}>
        <Link to="/register">Don't have an account? Click here to Register!</Link>
      </div>
      </Form>
      </div>
  )
}

export default LoginForm
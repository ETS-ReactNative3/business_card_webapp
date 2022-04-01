import React, {useState} from 'react'

import TextField from'@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import QueryString from 'query-string'

axios.defaults.withCredentials = true


const Account = () => {
  const [userNameReg, setUsernameReg] = useState("")
  const [emailReg, setEmailReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loginStatus, setLoginStatus] = useState("false")


const  register = () => {
  
  const config = {headers: {"Content-Type": 'application/x-www-form-urlencoded'}}

  axios.post('api/users', QueryString.stringify({
    name: userNameReg, 
    password: passwordReg, 
    email: emailReg
  }), config)
  .then(response => { 
    console.log(response)
  })
  .catch(error => {
      console.log(error.response)
  });

}

const login = () => {
  const config =  {withCredentials: true, headers: {"Content-Type": 'application/x-www-form-urlencoded'}}

  axios.post('api/users/login', QueryString.stringify({
    password: password, 
    email: email
  }), config)
  .then(response => { 
    console.log(response)
  })
  .catch(error => {
      console.log(error.response)
  });
}


  return (
    <div>
      <h1> Registration </h1>
      <label> Username </label>
      <input 
        type="text"
        onChange={(e) => {
          setUsernameReg(e.target.value)
        }}
        />
      <br></br>
      <label> Email </label>
      <input 
        type="text"
        onChange={(e) => {
          setEmailReg(e.target.value)
        }}
        />
      <br></br>
      <label> Password </label>
      <input 
        type="text"
        onChange={(e) => {
          setPasswordReg(e.target.value)
        }}
        />
        <br></br>
        <button onClick={register}> Register</button>
        <h1> Login </h1>

      <label> Email </label>
      <input 
        type="text"
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        />
      <br></br>
      <label> Password </label>
      <input 
        type="text"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        />
        <br></br>
        <button onClick={login}> Login</button>
    </div>
    
  )
}

export default Account
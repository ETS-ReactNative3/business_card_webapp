import React, {useState, useEffect} from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, nameStyle} from './NavbarStyling'
import { useNavigate} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap/';

const Navbar = () => {

  const [name, setName] = useState("")


  // useEffect(() => {
    
  //   if(document.cookie)
  //   {
  //     const cookie = document.cookie.split('=')
  //     setName(cookie[2])
  //     console.log(name)
  //   }
  //   navigate('/')

  // }, []);

  const validate = () =>
  {
    if(document.cookie)
    {
      const cookie = document.cookie.split('username=')
      console.log(cookie[1])
      setName(decodeURI(cookie[1]))
    }
    else
    {
      setName("")
    }
  }
   useEffect(validate, [])

  
  
  return (
    <Nav>
      <NavBtnLink to='/'>
        <h1>ACME</h1>
      </NavBtnLink>
        <Bars />
        <NavMenu>
          <NavBtnLink to='/create_card' activeStyle>
            Create Business Card
          </NavBtnLink>
          <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{marginRight:"20px"}}>
            PreviewCard
        </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/template1">Template 1</Dropdown.Item>
            <Dropdown.Item href="/template2">Template 2</Dropdown.Item>
            <Dropdown.Item href="/template3">Template 3</Dropdown.Item>
            <Dropdown.Item href="/template4">Template 4</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to='/contact' activeStyle>
            Contact Us
          </NavBtnLink>
          <NavBtnLink to='/about_us' activeStyle>
            About Us
          </NavBtnLink>
          <NavBtnLink to='/login'>
            Sign In
          </NavBtnLink>
        </NavBtn>
        <NavBtn> 
          Welcome {name}!
        </NavBtn>
    </Nav>
  )
}

export default Navbar
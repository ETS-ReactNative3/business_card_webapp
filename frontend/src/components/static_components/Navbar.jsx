import React, {useState, useEffect} from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, nameStyle} from './NavbarStyling'
import { useNavigate} from 'react-router-dom';

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
    console.log("validated!")
    if(document.cookie)
    {
      console.log("helo")
      const cookie = document.cookie.split('username=')
      console.log(cookie[1])
      setName(cookie[1])
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
          <NavBtnLink to='/preview_card' activeStyle>
            Preview Card
          </NavBtnLink>
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
import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarStyling'

const Navbar = () => {
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
      
    </Nav>
  )
}

export default Navbar
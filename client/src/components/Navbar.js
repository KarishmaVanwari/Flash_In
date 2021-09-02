import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
    
      <Nav>
        <NavLink to='/' style={{fontSize: "40px"}}>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
          FlashIn
        </NavLink>
        <Bars />
        <NavMenu>
          {/* <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle> 
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink> */}
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
          <NavBtnLink to='/login'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
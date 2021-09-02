import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import axios from "axios";
import { useHistory } from "react-router-dom";

const DashNavbar = () => {
    let history = useHistory();

    const logout = () => {
        console.log('gchjv')
        axios
          .get('http://localhost:5000/logout')
          .then ( res =>{ 
            console.log("logout kiya ",res)
          // console.log(localStorage.getItem('token'));
          localStorage.removeItem('token')
          localStorage.removeItem('isAuthenticated')
          history.push('/login')
    
          
    
          })
          .catch((err) => {
            console.log("logout error: ", err);
          });
      }
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
          {/* <NavBtnLink to='/signup'>Sign Up</NavBtnLink> */}
          <NavBtnLink to='/logout' onClick={logout}>Logout</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default DashNavbar;
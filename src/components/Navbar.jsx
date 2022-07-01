import React, { useState } from 'react'
import "./navbar.css";

function Navbar() {
const[hamburgerOpen,setHamburgerOpen] =useState(false);
const toggleHamburger =()=>{
  setHamburgerOpen(!hamburgerOpen)    
} 
  return (

    <>    
        <header className="navbar-container">
      {/* <div className="topnav"> */}
      <div className="nav">
        <h1>
          <a href="/#" className="logo-wrap">
            snap</a>
        </h1>
        <button className="nav-toggle" arial-label="toggle navigation"  onClick={toggleHamburger}  style={{display : hamburgerOpen ? 'block' : 'none'}}>
          <span className="hamburger" ></span>
        </button>
        {/* <ul> */}
        <ul>
          <li>
            <a href="/#">Features
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" className="dropdown-svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"  /></svg>
            </a>
          </li>
          <li>
            <a href="/#">Company
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" className="dropdown-svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"  /></svg>
            </a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Career</a>
          </li>
        </ul>
      </div>
      <span className="btn-wrap right">
      {/* style={{display : hamburgerOpen ? 'block' : 'none'}} */}
        <a href="/#">Login</a>
        <a href="/#" className="register">register</a>
      </span>
      {/* </div> */}
    </header>
    </>
  )
}

export default Navbar
import React from 'react'
import "./navbar.css";

function Navbar() {
  return (

    // <nav>
    //   <div className="snap">
    //     snap
    //   </div>
    //   <input id="menu-toggle" type="checkbox" />
    //   <label class='menu-button-container' for="menu-toggle">
    //     <div class='menu-button'></div>
    //   </label>
    //   <ul className="menu">
    //     <div className="left">
    //       <li><a href="#">Features <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" /></svg></a></li>
    //       <li><a href="#">Company <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" /></svg></a></li>
    //       <li><a href="#">About</a></li>
    //     </div>
    //     <div className="right">
    //       <li><a href="#">Login </a></li>
    //       <li className='register'><a href="#">Register</a></li>
    //     </div>
    //   </ul>

    //   <hr />
    // </nav>
    <>        <header className="navbar-container">
      {/* <div className="topnav"> */}
      <div className="nav">
        <h1>
          <a href="/#" className="logo-wrap">
            snap</a>
        </h1>
        <button className="nav-toggle" arial-label="toggle navigation"  onClick={() => {
          
        }}>
          <span className="hamburger"></span>
        </button>
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
        <a href="/#">Login</a>
        <a href="/#" className="btn register">register</a>
      </span>
      {/* </div> */}
    </header>
    </>
  )
}

export default Navbar
import React from 'react'

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
    <>
    <header>
        <div className="logo">snap</div>
        <button className="nav-toggle" arial-label="toggle navigation" onClick={()=>{
          
        }}>
          <span className="hamburger"></span>
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <div className="left">
            <li className="nav__item"><a href="#" className="nav__link">Features</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Company</a></li>
            <li className="nav__item"> <a href="#" className="nav__link">Career</a></li>
            <li className="nav__item"><a href="#" className="nav__link"></a></li>
            </div>
            <div className="right">
            <li className="nav__item"><a href="#" className="nav__link">Login</a></li>
            <li className="nav__item"><a href="#" className="nav__link register">Register</a></li>
            </div>
          </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar
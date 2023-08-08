// import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
     <nav>
    <img className="nav-logo" src="../public/Images/logoimage.png" alt="" />
    <ul>
      <a href="">
        <li>Canvases</li>
      </a>
      <a href="">
        {" "}
        <li>Project Ideas </li>
      </a>
      <a href="">
        <li>About Us</li>
      </a>
      <a href="">
        {" "}
        <li>Contact</li>
      </a>
    </ul>
    <button className="btn">Login</button>
  </nav>
    </>
  )
}

export default Navbar
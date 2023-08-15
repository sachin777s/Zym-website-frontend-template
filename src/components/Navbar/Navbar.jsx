import React, { useState } from 'react'
import "./Navbar.css"
import Logo from "../../images/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isExpend, setIsExpend] = useState(false); //Drop Down Menuu
  return (
    <nav>
      <div className="left-nav">
        <img src={Logo} alt="" />
        <span>EliteEdgeGym</span>
        <div className="burger" onClick={() => setIsExpend((!isExpend))}>
          <div className={`top ${isExpend && "top-anim"}`}></div>
          <div className={`middle ${isExpend && "middle-anim"}`}></div>
          <div className={`bottom ${isExpend && "bottom-anim"}`}></div>
        </div>
      </div>
      <div className={`right-nav ${isExpend?'expend-nav':"not-expend-nav"}`}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
      </div>
    </nav>
  )
}

export default Navbar
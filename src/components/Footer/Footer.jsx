import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="explore">
        <h4>Explore</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Sevcies</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <div className="available">
        <h4>Available at</h4>
        <ul>
          <li>Banglore</li>
          <li>Delhi</li>
          <li>Chennai</li>
          <li>Mumbai</li>
        </ul>
      </div>
      <div className="contact-info">
        <h4>Contact Info</h4>
        <ul>
          <li>elighedgegym@gmail.com</li>
          <li>+91 7777777777</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
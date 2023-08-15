import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <div className="c-form-container">
        <h1>Get in Touch</h1>
        <form className='c-form'>
          <div className="input-box">
            <img src="https://img.icons8.com/pastel-glyph/32/person-male--v3.png" alt="" />
            <input type="text" placeholder='Name' />
          </div>
          <div className="input-box">
            <img src="https://img.icons8.com/ios-filled/32/new-post.png" alt="" />
            <input type="email" placeholder='Email' />
          </div>
          <div className="input-box">
            <img src="https://img.icons8.com/ios-filled/32/phone-disconnected.png" alt="" />
            <input type="tel" placeholder='Mobile Number' />
          </div>
          <div className="radio-box">
            <div>
              <input type="radio" name='gender' /> Male
            </div>
            <div>
              <input type="radio" name='gender' /> Female
            </div>
          </div>
          <button type='submit' className='submit-button'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
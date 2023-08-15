import React from 'react'
import "./About.css"
import Trainers from "../../data/trainersData.js"

const About = () => {
  return (
    <div className="about">
      <div className="body-builder">
        <h1>One of the Best Fitness Training in India</h1>
        <img src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
      </div>
      <div className="history">
        <h2>Our History</h2>
        <p>The journey was not just about individual accomplishments; it was about building a supportive community. EliteEdgeGym celebrated countless success stories—weight loss triumphs, muscle gains, and newfound confidence. The gym's success was a testament to the dedication of its members and the unwavering commitment of its trainers. <br />With the world evolving, EliteEdgeGym embraced change by extending its reach beyond physical boundaries. Virtual training sessions, online challenges, and expert webinars connected fitness enthusiasts from around the globe. The gym's impact knew no geographical limits.</p>
      </div>
      <div className="trainers">
        <h2>Top Trainers</h2>
        <div className="trainers-container">
          {
            Trainers.map((trainer, index) => {
              return (
                <div className="trainer-box">
                  <img src={trainer.image} alt="..." />
                  <span>{trainer.name}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default About
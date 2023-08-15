import React from 'react'
import "./Services.css"
import serviceData from '../../data/serviceData.js'
import MemberShip from '../../components/MemberShip/MemberShip'

const Services = () => {
  return (
    <div className="services">
      <div className="service-cards">
        <div className="s-card">
          <img src="https://img.icons8.com/ios-filled/100/FFFFFF/dumbbell.png" alt="dumbbel" />
          <span>Personal</span>
        </div>
        <div className="s-card">
          <img src="https://img.icons8.com/ios-filled/100/FFFFFF/pushups.png" alt="" />
          <span>Exclusive</span>
        </div>
        <div className="s-card">
          <img src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/FFFFFF/external-Mobile-Video-Call-education-and-school-vectorslab-glyph-vectorslab.png" alt="" />
          <span>Online Taining</span>
        </div>
        <div className="s-card">
          <img src="https://img.icons8.com/ios-filled/100/FFFFFF/yoga.png" alt="" />
          <span>Yoga</span>
        </div>
        <div className="s-card">
          <img src="https://img.icons8.com/external-others-pike-picture/50/FFFFFF/external-arm-battle-competition-others-pike-picture-2.png" alt="" />
          <span>Arm Wrestling</span>
        </div>
        <div className="s-card">
          <img src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/24/FFFFFF/external-round-the-clock-service-and-communication-layout-protection-light-tal-revivo.png" alt="" />
          <span>Open 24x7</span>
        </div>
      </div>
     <div className="service-points">
      <ul>
         {
          serviceData.map((service,index)=>{
             return (
              <li key={index}>
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
              </li>
             )
          })
         }
      </ul>
     </div>
     <MemberShip/>
     
    </div>
  )
}

export default Services
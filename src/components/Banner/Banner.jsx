import React from 'react'
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <img src="https://cdn.pixabay.com/photo/2016/11/19/12/43/barbell-1839086_1280.jpg" alt="..." className='bg-image' />
            <div className="b-quote">
                <span>"Unleash Your Potential: Elevate Your Fitness Journey at EliteEdgeGym"</span>
            </div>
        </div>
    )
}

export default Banner
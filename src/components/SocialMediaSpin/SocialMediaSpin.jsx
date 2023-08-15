import React from 'react'
import "./SocialMediaSpin.css"

const SocialMediaSpin = () => {
    return (
        <div className="social-media-spinner">
            <h2>Also Available on</h2>
            <div className="spinner">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src="https://img.icons8.com/color/48/twitter--v1.png" alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src="https://img.icons8.com/color/48/youtube-play.png" alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaSpin
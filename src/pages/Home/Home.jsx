import React from 'react';
import Banner from '../../components/Banner/Banner';
import Quote from '../../components/Quote/Quote';
import SocialMediaSpin from '../../components/SocialMediaSpin/SocialMediaSpin';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="programs">
                <div>
                    <h2>Trainings for you</h2>
                    <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-gym-equipment-hotel-management-flaticons-flat-flat-icons.png" alt="..." />
                </div>
                <div className='programs-collection'>
                    <div>
                        <h2>Fitness <img src="https://img.icons8.com/sf-black/35/weightlift.png" alt="" /> </h2>
                        <p>"Of course, physical fitness remains at the core of our offerings. Our state-of-the-art facilities and expert trainers are here to help you achieve your peak potential."</p>
                    </div>
                    <div className='program-line'></div>
                    <div>
                        <h2>Yoga <img src="https://img.icons8.com/sf-black/35/yoga.png" alt="" /></h2>
                        <p>"Step onto the mat and experience the serenity of yoga. Our skilled yoga instructors bring ancient practices to life, helping you find balance, flexibility, and harmony."</p>
                    </div>
                    <div className='program-line'></div>
                    <div>
                        <h2>Mental Fitness <img src="https://img.icons8.com/ios-filled/35/mental-health.png" alt="" /></h2>
                        <p>"At EliteEdgeGym, we believe in a holistic approach to well-being. We understand that true fitness extends beyond the physical."</p>
                    </div>
                </div>
            </div>
            <SocialMediaSpin/>
            <Quote/>
            <div className="images-gallary">
             <h2>Gym Preview</h2>
             <div className="images">
                <img src="https://cdn.pixabay.com/photo/2020/11/04/05/08/body-building-5711492_640.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2019/11/11/12/12/woman-4618189_640.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2016/11/21/16/21/abs-1846250_1280.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2013/03/09/14/38/gym-91849_640.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2017/01/11/18/35/blur-1972569_640.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg" alt="" />
             </div>
            </div>
        </div>
    )
}

export default Home
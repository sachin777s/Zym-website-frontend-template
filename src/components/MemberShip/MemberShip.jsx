import React, { useState } from 'react'
import "./MemberShip.css"

const MemberShip = () => {
    
    const [isExpend, setIsExpend] = useState(false);

    return (
        <div className="membership">
            <h2>Purchase Membership</h2>
            <div className='membership-cards'>
                <div className="rs999">
                    <h2>FLEXI</h2>
                    <img src="https://img.icons8.com/ios-filled/100/watches-front-view.png" alt="" />
                    <span className="price">
                        <strong>Rs.999/</strong>month
                    </span>
                    <ul className='benefits-list'>
                        <li>
                            <img src="https://img.icons8.com/fluency-systems-filled/36/clock--v1.png" alt="" /> 12 Class Per Month
                        </li>
                        <li>
                            <img src="https://img.icons8.com/fluency-systems-filled/36/clock--v1.png" alt="" /> Unlimited Class Per Month
                        </li>
                        <li>
                            <img src="https://img.icons8.com/fluency-systems-filled/36/clock--v1.png" alt="" /> No Joining Fee
                        </li>
                    </ul>
                    <button onClick={()=>setIsExpend(true)} >Join Now</button>
                </div>
                <div className="rs1500">
                    <h2>ALL ACCESS</h2>
                    <img src="https://img.icons8.com/ios-filled/100/infinity-large.png" alt="" />
                    <span><strong>Rs. 1498/</strong>month</span>
                    <ul className='benefits-list'>
                        <li>
                            <img src="https://img.icons8.com/fluency-systems-filled/36/clock--v1.png" alt="" /> 12 Class Per Month
                        </li>
                        <li>
                            <img src="https://img.icons8.com/fluency-systems-filled/36/clock--v1.png" alt="" /> Unlimited Class Per Month
                        </li>
                        <li>
                            <img src="https://img.icons8.com/fluency-systems-filled/36/clock--v1.png" alt="" /> No Joining Fee
                        </li>
                    </ul>
                    <button onClick={()=>setIsExpend(true)} >Join Now</button>
                </div>
                <div className="rs2999">
                    <h2>OFF PEAK</h2>
                    <img src="https://img.icons8.com/ios-filled/100/50-percents.png" alt="" />
                    <span><strong>Rs.2999/</strong>month</span>
                    <ul className='benefits-list'>
                        <li>
                            <img src="https://img.icons8.com/fluency-systems-filled/36/clock--v1.png" alt="" /> 12 Class Per Month
                        </li>
                        <li>
                            <img src="https://img.icons8.com/fluency-systems-filled/36/clock--v1.png" alt="" /> Unlimited Class Per Month
                        </li>
                        <li>
                            <img src="https://img.icons8.com/fluency-systems-filled/36/clock--v1.png" alt="" />No Joining Fee
                        </li>
                    </ul>
                    <button onClick={()=>setIsExpend(true)} >Join Now</button>
                </div>
            </div>
            {
                isExpend && <div className='purchase-sub'>
                    <span className="close" onClick={()=>setIsExpend(false)}>X</span>
                 <h2>Confirm</h2>
                 <p>Enter your mobile number after that We will contact you.</p>
                 <form onSubmit={()=>setIsExpend(false)}>
                    <input type="tel" placeholder='Mobile Number' required/>
                    <button>Submit</button>
                 </form>
                </div>
            }
        </div>
    )
}

export default MemberShip
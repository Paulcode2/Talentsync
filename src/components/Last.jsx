import React from 'react'
import screen from '../assets/Screen mockup (REPLACE FILL).png'
import check from '../assets/Check icon.png'

const Last = () => {
  return (
    <div className='Last'>
        <div className="texts">
            <div className="head">
                <h3>Ready to clear the path to <br />
                 perfect communication?</h3>
            </div>
            <div className="mark">
                <img src={check} alt="" />
                <span>30 days free trial</span>
            </div>
            <div className="mark">
                <img src={check} alt="" />
                <span>Cancel at any time</span>
            </div>
            <div className="mark">
                <img src={check} alt="" />
                <span>Access to all features</span>
            </div>
            <div className="mark">
                <img src={check} alt="" />
                <span>Peronalized onboarding</span>
            </div>
            <div className="buttons">
                <button className="white">Talk to sales</button>
                <button className="blue">Start your free trial</button>
            </div>
        </div>
        <div className="image">
            <img src={screen} alt="" />
        </div>
    </div>
  )
}

export default Last
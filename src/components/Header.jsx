import React from 'react'
import Avatar from '../assets/Avatar group.png'
import Reviews from '../assets/Reviews.png'
import ani1 from '../assets/animoji.png'
import ani2 from '../assets/animoji (1).png'
import ani3 from '../assets/animoji (2).png'
import ani4 from '../assets/animoji (3).png'
import ani5 from '../assets/image 103.png'
import ani6 from '../assets/animoji (4).png'
import zap from '../assets/zap.png'
import zap1 from '../assets/zap (5).png'
import zap2 from '../assets/zap (1).png'
import zap3 from '../assets/zap (2).png'
import zap4 from '../assets/zap (3).png'
import zap5 from '../assets/zap (4).png'
import frame from '../assets/Frame 10.png'


const Header = () => {
  return (
    <div className='Header'>
        <div className="text">
            <h3>Uniting the world, <br /> one video call at a time</h3>
            <span>Experience the future of communication with ClearLink – <br /> where crystal-clear video conferencing meets <br /> unparalleled simplicity.</span>
            <div className="buttons">
            <button className="link">Start your free trial</button>
            <div className="link2">
                <button>Discover AI assistant</button>
                <img src={frame} alt="" />
            </div>
            </div>
            <div className="images">
                <img src={Avatar} alt="" />
                <img src={Reviews} alt="" />
            </div>
        </div>
        <div className="avatar">
            <div className="pictures">
                <img src={ani1} alt="" />
                <img src={ani2} alt="" />
                <img src={ani3} alt="" />
                <img src={ani4} alt="" />
                <img src={ani5} alt="" />
                <img src={ani6} alt="" />
            </div>
            <div className="social">
                <img src={zap} alt="" />
                <img src={zap1} alt="" />
                <img src={zap2} alt="" />
                <img src={zap3} alt="" />
                <img src={zap4} alt="" />
                <img src={zap5} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header
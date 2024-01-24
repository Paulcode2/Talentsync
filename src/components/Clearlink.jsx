import React from 'react'
import zap1 from '../assets/zap (7).png'
import zap2 from '../assets/zap (6).png'
import zap3 from '../assets/zap (8).png'
import zap4 from '../assets/zap (9).png'
import zap5 from '../assets/Rectangle 1.png'




const Clearlink = () => {
  return (
    <div className='Clearlink'>
        <div className="head">
            <small>The ClearLink Advantage</small>
            <h2>Why choose ClearLink?</h2>
            <span>In a world where connection is everything, ClearLink takes the lead. Our <br /> cutting-edge video conferencing app offers:</span>
        </div>
        <div className="description">
            <div className="texts">
                <div className="text">
                    <img src={zap1} alt="" />
                    <h3>Crystal-clear HD video</h3>
                    <span>No more pixelation or blurriness – just <br /> 
                    stunning, lifelike clarity that brings your <br />
                     team closer in meetings.</span>
                </div>
                <div className="text">
                    <img src={zap2} alt="" />
                    <h3>Noise-canceling audio</h3>
                    <span>Say goodbye to distractions with our <br />
                     advanced audio tech for crisp, <br />
                      interruption-free conversations.</span>
                </div>
                <div className="text">
                    <img src={zap3} alt="" />
                    <h3>Scheduling made easy</h3>
                    <span>Streamline your agenda with ClearLink's <br />
                     intuitive scheduling. Set up meetings, <br />
                      send invitations, and receive reminders in one place.</span>
                </div>
                <div className="text">
                    <img src={zap4} alt="" />
                    <h3>Bank-grade security</h3>
                    <span>Your privacy is our priority with bank- <br />
                    grade security protocols safeguarding <br />
                     your meetings and data from unwanted <br />
                      intruders.</span>
                </div>
            </div>
            <div className="image">
                <img src={zap5} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Clearlink
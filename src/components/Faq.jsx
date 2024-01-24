import React from 'react'
import minus from '../assets/Icon wrap.png'
import add from '../assets/Icon wrap (1).png'
const Faq = () => {
  return (
    <div className='Faq'>
        <div className="support">
            <span>Support</span>
            <h3>FAQs</h3>
            <small>Everything you need to know about the product <br />
             and billing. Can’t find the answer you’re looking <br />
              for? Please chat to our friendly team.</small>
        </div>
        <div className="texts">
            <div className="head">
                <div className="text">
                <span>How many participants can join a ClearLink video conference?</span>
                <img src={minus} alt="" />
                </div>
                   <div className="symbol">
                   <small>ClearLink offers flexible meeting options. Depending on your subscription <br />
                 plan, you can host meetings with varying numbers of participants. Our plans <br />
                  are designed to accommodate small team collaborations and large-scale <br />
                   webinars, ensuring you have the right fit for your needs.</small>
                    
                   </div>
            </div>

            <div className="text">
                <span>Can I use ClearLink on multiple devices?</span>
                <img src={add} alt="" />
            </div>
            <div className="text">
                <span>Is ClearLink compatible with other video conferencing platforms?</span>
                <img src={add} alt="" />
            </div>
            <div className="text">
                <span>How does ClearLink ensure the security of my video conferences?</span>
                <img src={add} alt="" />
            </div>
            <div className="text">
                <span>Do I need to download any software to use ClearLink?</span>
                <img src={add} alt="" />
            </div>
            <div className="text">
                <span>What kind of customer support does ClearLink provide?</span>
                <img src={add} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Faq
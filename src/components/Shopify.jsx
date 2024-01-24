import React from 'react'
import shopify from "../assets/Shopify.com svg.png"
import star from "../assets/Stars.png"
import avatar from "../assets/Avatar.png"
import back from "../assets/_Testiomonial carousel arrow.png"
import forward from "../assets/_Testiomonial carousel arrow (1).png"
import contents from "../assets/Contents.png"

const Shopify = () => {
  return (
    <div className='Shopify'>
        <div className="texts">
            <div className="head">
            <img src={shopify} alt="" />
            <img src={star} alt="" />
            <h3>ClearLink has upgraded our <br />
             remote meetings. High-quality <br />
              video, screen sharing, and <br /> 
              top-notch security make it <br />
               essential for our team.</h3>
            </div>
            <div className="avatar">
                <img src={avatar} alt="" />
               <div className="next">
               <div className="text">
                <span>Sarah Thompson</span>
                <small>Project Manager, Shopify</small>
                </div>
                <div className="move">
                <img src={back} alt="" />
                <img src={forward} alt="" />
                </div>
               </div>
            </div>
        </div>
        <div className="img">
            <img src={contents} alt="" />
        </div>
    </div>
  )
}

export default Shopify
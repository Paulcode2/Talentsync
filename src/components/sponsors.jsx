import React from 'react'
import shopify from '../assets/Shopify.com svg.png'
import coinbase from '../assets/Coinbase svg.png'
import drop from '../assets/Dropbox svg.png'
import intercom from '../assets/intercom svg.png'
import marvel from '../assets/Group (1).png'
import automatic from '../assets/Automattic svg.png'




const Sponsors = () => {
  return (
    <div className='sponsors'>
        <div className="text">
            <span>Join 1,500+ companies already video conferencing the ClearLink way</span>
        </div>
        <div className="links">
            <a href="">
            <img src={shopify} alt="" />
            </a>
            <a href="">
            <img src={coinbase} alt="" />
            </a>
            <a href="">
            <img src={drop} alt="" />
            </a>
            <a href="">
            <img src={intercom} alt="" />
            </a>
            <a href="">
            <img src={marvel} alt="" />
            </a>
            <a href="">
            <img src={automatic} alt="" />
            </a>
        </div>
    </div>
  )
}

export default Sponsors
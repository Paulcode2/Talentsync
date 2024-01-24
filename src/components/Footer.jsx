import React from 'react'
import logo from '../assets/Group.png'
import ios from '../assets/Mobile app store badge.png'
import and from '../assets/Mobile app store badge (1).png'
import linkd from '../assets/Social icon.png'
import X from '../assets/Vector.png'
import Fb from '../assets/Vector (1).png'
import Ig from '../assets/Group (2).png'
import git from '../assets/Icon.png'
import yout from '../assets/Lozenge.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerLinks">
        <div className="clear">
        <div className="logo">
            <img src={logo} alt="" />
            <span>ClearLink.</span>
        </div>
        <span>ClearLink is your gateway to effortless, high- <br />
        quality video conferencing. Join us in shaping <br />
         the future of communication!</span>
        </div>
        <div className="links">
            <div className="first">
                <span id='one'>Product</span>
                <a href="">Overview</a>
                <a href="">Features</a>
                <a href="">Solutions</a>
                <a href="">Tutorials</a>
                <a href="">Pricing</a>
            </div>
            <div className="first">
                <span id='one'>Company</span>
                <a href="">About us</a>
                <a href="">Careers</a>
                <a href="">Press</a>
                <a href="">News</a>
                <a href="">Contact</a>
            </div>
            <div className="first">
                <span id='one'>Resources</span>
                <a href="">Blog</a>
                <a href="">Events</a>
                <a href="">Help center</a>
                <a href="">Tutorials</a>
                <a href="">Support</a>
            </div>
            <div className="first">
                <span id='one'>Legal</span>
                <a href="">Terms</a>
                <a href="">Privacy</a>
                <a href="">Cookies</a>
                <a href="">Licenses</a>
                <a href="">Contact</a>
            </div>
        </div>
        <div className="app">
            <span>Get the app</span>
            <img src={ios} alt="" />
            <img src={and} alt="" />
        </div>
        </div> 
        <div className="foot">
            <div className="text">
                <small>© 2023 ClearLink. All rights reserved.</small>
            </div>
            <div className="socials">
                <a href="">
                    <img src={linkd} alt="" />
                </a>
                <a href="">
                    <img src={X} alt="" />
                </a>
                <a href="">
                    <img src={Fb} alt="" />
                </a>
                <a href="">
                    <img src={Ig} alt="" />
                </a>
                <a href="">
                    <img src={git} alt="" />
                </a>
                <a href="">
                    <img src={yout} alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
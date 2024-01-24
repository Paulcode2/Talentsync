import React, {useState, useRef} from 'react'
import logo from '../assets/Group.png'
import drop from '../assets/chevron-down.png'
import { useClickAway } from "react-use";
// import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
// import {RxHamburgerMenu} from 'react-icons/rx'


const Nav = () => {

    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));
  return (
    <div className='Nav'>
        <div className="toggle">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen}/>
        </div>
        {isOpen && (<div className="desk">
        <div className="logo">
            <img src={logo} alt="" />
            <span>ClearLink.</span>
        </div>
        <div className="links">
            <div className="drop">
                <a href="">Products</a>
                <img src={drop} alt="" />
            </div>
           <div className="drop">
            <a href="">Solution</a>
            <img src={drop} alt="" />
           </div>
           <div className="drop">
           <a href="">Resources</a>
           <img src={drop} alt="" />
           </div>
           <div className="drop">
           <a href="">Pricing</a>
           </div>
        </div>
        <div className="login">
            <button id='sales'>Talk to sales</button>
            <button id='sign-up'>Sign up for free</button>
        </div>
        </div>
        )}
    </div>
  )
}

export default Nav
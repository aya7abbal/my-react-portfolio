import React from 'react'
import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import {FiLinkedin} from "react-icons/fi"


const Footer = () => {
  return (
    <footer>

      <a href="#home" className='footer__logo'>Aya El Habbal</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="www.facebook.com" ><FiLinkedin/></a>
        <a href="www.instagram.com"><BsInstagram/></a>
        <a href="www.twitter.com"><AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
<small>&copy; Aya El Habbal.   All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
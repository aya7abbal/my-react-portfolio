import React from 'react'
import "./header.css"
import CTA from './CTA'
import AboutMe from "../assets/about-me.jpeg";
import Social from './Social'

const Header = () => {
  return (
<header id='home'>
  <div className="container header__container " >
    <h5>Hello, I'm </h5>
    <h1>Aya El Habbal</h1>
    <h5 className="text-light">
      Front End Developer
    </h5>
    <CTA/>
    <Social/>

      <div className="about__me-img">
            <img src={AboutMe} alt="" />
          </div>
    <a href="#contact" className='scroll__down'> Scroll Down</a>
  </div>
</header>  )
}

export default Header
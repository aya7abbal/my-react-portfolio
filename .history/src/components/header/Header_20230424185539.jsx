import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../assets/about-me.jpeg"
import Social from './Social'

export default function Header (){
  return (
<header id='home'>
  <div className="container header__container " >
    <h5>Hello, I'm </h5>
    <h1>Aya El Habbal,</h1>
    <h5 className="text-light">
      Front End Developer & Engineer
    </h5>
    <CTA/>
    <Social/>

    <div className="me">
      <img src={ME} alt="" className='me-too'/>
    </div>
    <a href="#contact" className='scroll__down'> Scroll Down</a>
  </div>
</header>  )
}


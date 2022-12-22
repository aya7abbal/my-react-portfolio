import React from 'react'
import "./services.css"
import {BsCheckLg} from "react-icons/bs"

const Services = () => {
  return (
    <section id='services'>
      <h5>Check Out My</h5>
      <h2>Services</h2>

      <div className="container services__container">
         {/* <article className="service">
           <div className="service__head">
             <h3>UI/UX Design</h3>
             </div>
             <ul className="service__list">
               <li><BsCheckLg className='service__list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
             </ul>
           
         </article> */}
         {/* End of UI/UX Card */}

         <article className="service">
           <div className="service__head">
             <h3>Web Development</h3>
             </div>
             <ul className="service__list">
               <li><BsCheckLg className='service__list-icon'/>
               <p>Translating Designs from softwares like Adobe XD & Figma</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Creating a well structured DOM</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Using BEM  Methodology to maintain an organized project</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Building reusable React Components</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Giving support after delivery and maintaining a good relation</p></li>
               

             </ul>
           
         </article>

         {/* End of Web Development Card */}

         {/* <article className="service">
           <div className="service__head">
             <h3>Content Creation Design</h3>
             </div>
             <ul className="service__list">
               <li><BsCheckLg className='service__list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
               <li><BsCheckLg className='service__list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
             </ul>
           
         </article> */}
         {/* End of Content Creation Card */}


      </div>
    </section >
  )
}

export default Services
import React from 'react'
import { useState } from 'react'
import "./contact.css"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import { useRef } from 'react';
import emailjs from "emailjs-com"
import PopUp from "./PopUp"; 



const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_izwdn58', 'template_00pk3nl', form.current, 'OaFCFy0pNafX8-5P3')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

// POP UP 
  const[sent,setSent]=useState(false
    );
   togglePop = () => {
    setSent(!sent
    );
   };

  return (
    <section id="contact">
      <h5>Where to</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
<article className="contact__option">
  <MdEmail className='contact__option-icon'/>
  <h4>Email</h4>
  <h5>aya7abbal@gmail.com</h5>
  <a href="mailto:aya7abbal@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
</article>
<article className="contact__option">
  <BsMessenger className='contact__option-icon'/>
  <h4>Messenger</h4>
  <h5>Aya El Habbal</h5>
  <a href="https://m.me/aya7abbal" target="_blank" rel="noreferrer">Send a Message</a>
</article>
<article className="contact__option">
  <IoLogoWhatsapp className='contact__option-icon '/>
  <h4>WhatsApp</h4>
  <a href="https://api.whatsapp.com/send?phone=00201020181887" target="_blank" rel="noreferrer">Send a Message</a>
</article>
        </div>
        {/* END of OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
<input type="text" name='name' placeholder='Your Full Name' required />
<input type="email" name='email' placeholder='Your Email' required />
<textarea name="message" rows="7" placeholder='Your Message' required></textarea>
<div className='btn' onClick={this.togglePop}><button type='submit' className='btn btn-primary' >Send Message</button>{this.state.seen ? <PopUp toggle={this.togglePop} /> : null}</div>


        </form>
      </div>
    </section>
  )
}

export default Contact
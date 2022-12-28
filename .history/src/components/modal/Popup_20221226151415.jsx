import "./popup.css"
import React from "react"
import { useState } from "react"

export default function(){

const [modal,setModal] = useState(false)
const toggleModal = ()=>{
    setModal((prevState)=>!prevState)
}
 
    return(
        <>
        
        <button type='submit' className='btn btn-primary btn-modal' onClick={toggleModal} >Send Message</button>

        {modal &&  <div className="modal">
            <div className="overlay">            </div>

            <div className="modal__content">
                <h2>Message Sent!</h2>
                <button onClick={toggleModal} className="modal__close-btn">
                    Close
                </button>
            </div>
        </div>}
       
        
        </>
    )
}
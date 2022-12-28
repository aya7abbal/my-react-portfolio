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
        
        <button type='submit' className='btn btn-primary' onClick={toggleModal} >Send Message</button>
        
        </>
    )
}
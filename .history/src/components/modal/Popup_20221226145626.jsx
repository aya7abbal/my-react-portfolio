import "./popup.css"
import React from "react"
import { useState } from "react"

export default function(){

const [modal,setModal] = useState(false)
 
    return(
        <>
        
        <button type='submit' className='btn btn-primary' >Send Message</button>
        
        </>
    )
}
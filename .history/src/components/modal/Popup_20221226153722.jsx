import "./popup.css";
import React from "react";
import { useState } from "react";
import {AiOutlineClose} from "react-icons/ai"
export default function(props) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  return (
    <>
      <button
        type="submit"
        className="btn btn-primary btn-modal"
        onClick={toggleModal}
      >
        Send Message
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay"> </div>

          <div className="modal-content">
            {props.input?<h2>Message Sent!</h2>:<h2>Please Fill In All Required 
                info.</h2>}
            <button onClick={toggleModal} className="close-modal">
            <AiOutlineClose/>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

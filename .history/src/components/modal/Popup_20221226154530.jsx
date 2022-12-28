import "./popup.css";
import React from "react";
import { useState } from "react";
import {MdClose} from "react-icons/md"
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
            {props.input?<h2>Message Sent!</h2>:<h3>Please Fill In All Required 
                info.</h3>}
            <button onClick={toggleModal} className="close-modal">
            <MdClose/>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

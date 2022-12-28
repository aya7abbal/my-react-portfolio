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
            <h2>{props.input>0?"Message Sent!":"Please fill in all info!"}</h2>
            <button onClick={toggleModal} className="close-modal">
            <MdClose/>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

import "./popup.css";
import React from "react";
import { useState } from "react";
import {MdClose} from "react-icons/md"
export default function(props) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  function msgSent(){
 props.input?"message sent!":"Please fill in all the info."
  }

  return (
    <>
      <button
        type="submit"
        className="btn btn-primary btn-modal"
        onClick={toggleModal}
        onSubmit={msgSent}
      >
        Send Message
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay"> </div>

          <div className="modal-content">
            <button onClick={toggleModal} className="close-modal">
            <MdClose/>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

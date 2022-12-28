import "./popup.css";
import React from "react";
import { useState } from "react";
import {MdClose} from "react-icons/md"
export default function(props) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  function msgSent(props){
 props.input.value?"message sent!":"Please fill in all the info."
  }

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
            <h2>{msgSent}</h2>
            <button onClick={toggleModal} className="close-modal">
            <MdClose/>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

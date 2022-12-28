import "./popup.css";
import React from "react";
import { useState } from "react";

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
            {input.value?<h2>Message Sent!</h2>:<h2>Please Fill In All Required 
                info.</h2>}
            <button onClick={toggleModal} className="close-modal">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

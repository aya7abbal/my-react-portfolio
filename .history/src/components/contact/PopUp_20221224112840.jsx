import React, { Component } from "react";
export default class PopUp extends Component{
  handleClick = (props) => {
   props.toggle();
  };
render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={handleClick}>&times;    </span>
     <p>I'm A Pop Up!!!</p>
    </div>
   </div>
  );
 }
}
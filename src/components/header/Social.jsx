import React from "react";
import {FiLinkedin,FiGithub} from "react-icons/fi"

const Social = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" ><FiLinkedin/></a>
      <a href="https://github.com"><FiGithub/></a>
      
    </div>
  );
};

export default Social;

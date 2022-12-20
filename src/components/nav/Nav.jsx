import React from "react";
import "./nav.css";
import { BiBookAlt } from "react-icons/bi";
import { AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { RiSettings3Line } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("#home");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActive("#home")}
        className={active === "#home" ? "active" : ""}
      >
        <GoHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <BiBookAlt />
      </a>
      <a
        href="#services"
        onClick={() => setActive("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <RiSettings3Line />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;

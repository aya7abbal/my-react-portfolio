import React from "react";
import "./about.css";
import { FaAward, FaUsers } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
import ME from "../assets/me5.png"


const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me </h2>

      <div className="container about__container">
        <div className="about__me">
        
          <div className="about__me-img">
      <img src={ME} alt="" />
    </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>15+ wordlwide</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed projects</small>
            </article>
          </div>
          <p>
            I'm an <span>Industrial Engineer</span>. I worked in a lot of fields
            over the past 5 years but I have always been passionate about 
            <span> developing</span> and <span>designing</span>. So, I've finally
            decided to shift careers and to become a <span>Frontend Developer</span>. I am a 
            <span> keen worker</span> as I enjoy getting <span>creative</span> and thinking <span>out of the box</span>. What I would call my <strong>biggest strength</strong> would be that I'm a <span>fast learner!</span> and I believe in <span> Continuous Improvement</span> AKA, <span> "KAIZEN"</span>.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

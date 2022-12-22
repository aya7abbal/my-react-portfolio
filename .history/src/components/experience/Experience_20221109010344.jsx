import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill} from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="comntainer experience__container">
        <div className="experience__technical">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div><h4>HTML/CSS</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div><h4>BEM Methodology</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div><h4>Bootstrap</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div><h4>Tailwind</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div><h4>Sass</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
             <div> <h4>JavaScript</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div><h4>JQuery</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div><h4>React Js</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            
            
          </div>
        </div>
        <div className="experience__soft">
          <h3>Soft Skills</h3>
        <div className="experience__content">
           
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <h4>Hard Worker</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div><h4>Team Player</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div><h4>Fast Learner</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div><h4>Tech Wiz</h4>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
             <div> <h4>Project Management</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div><h4>Qulaity/Detail Oriented</h4>
             </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div><h4>Communication</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div><h4>Planning & St. Thinking</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

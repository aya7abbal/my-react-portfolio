import React from "react";
import "./portfolio.css";
import dataArray from "./portfolioAPIs";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work &</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {dataArray.map((element) => (
          <article className="portfolio__item" key={element.id}>
            <div className="portfolio__item-img">
              <img src={element.image} alt={element.title} />
            </div>
            <h3>{element.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={element.github}
                className={element.github?"btn":"display-none"}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <h5 className={element.github==?"none":"display-none"}
                rel="noreferrer">{element.github?"" :"Info cannot be shared due to company privacy."}</h5>
              <a
                href={element.demo}
                target="_blank"
                className={element.demo?"btn btn-primary":"display-none"}
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
            <div className="portfolio__item-tech">
              <small>{element.tech}</small>
              <small>{element.tech2}</small>
              <small>{element.tech3}</small>
              <small>{element.tech4}</small>
              <small>{element.tech5}</small>
              <small>{element.tech6}</small>
              <small>{element.tech7}</small>
              <small>{element.tech8}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

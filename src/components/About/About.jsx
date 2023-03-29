import React from 'react'
import "./About.css"
import AboutImg from "../../assets/about.jpg"
import CV from "../../assets/Mazara Patrick Resume.pdf"

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Patrick</h2>
          
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
        
          <p className="about__description">
            Hi, I’m Patrick! A full-stack engineer with a passion for web and mobile development and a love for all things music related.
            <br></br>
            <br></br>
            Before transition to software engineering, I was a project manager and in my most previous role I had been exposed to software engineering. I quickly found myself desiring to learn more about the field and after researching, I decided I wanted to pursue it as a career. As a result I decided to attend General Assembly's software engineering immersive to help me develop my skills and aid my career switch.
          </p>
        
          <a 
            download="" 
            href={CV} 
            className="button button--flex"
            >
              Download Resume
              <i class='bx bx-download' ></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
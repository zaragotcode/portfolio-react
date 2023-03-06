import React from 'react'
import "./Skills.css"
import Languages from './Languages'
import MoreLanguages from './MoreLanguages'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle"></span>
    

    <div className="skills__container container grid">
      <Languages />
      <MoreLanguages />
    </div>
    </section>
  )
}

export default Skills
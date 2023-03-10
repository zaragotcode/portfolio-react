import React from 'react'
import "./Projects.css"
import ProjectDetails from './ProjectDetails'

const Projects = (props) => {
  return (
    <section className="project section" id="projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__container container grid">
        {props.projects.map(project => (
          <ProjectDetails project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
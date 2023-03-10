import React from 'react'

const ProjectDetails = (props) => {
  return (
    <div className="project__content">

      <div className="project__image-wrapper">
        <img src={props.project.image} alt={`${props.project.title}'s home page`} className="project__img"/>
      </div>

      <h3 className="project__title">{props.project.title}</h3>


      <p className="project__description">{props.project.description}</p>
    
    <div className='button-links '>
      <div className="projectLink-button">
        <a href={props.project.repositoryLink}>
          <button className='button' >Repositiory</button>
        </a>
      </div>
      <div className="projectLink-button">
        <a href={props.project.deploymentLink}>
          <button className='button'>Deployment</button>
        </a>
      </div>
    </div>
    </div>
  )
}

export default ProjectDetails


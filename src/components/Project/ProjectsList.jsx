import ProjectPreview from "./ProjectPreview"

const ProjectsList = (props) => {
  
  return (
    <>
    <ul>
      {props.projects.map(project => (
        <li key={project.title}>
          <ProjectPreview project={project}/>
        </li>
      ))}
    </ul>
    </>
  )
};

export default ProjectsList
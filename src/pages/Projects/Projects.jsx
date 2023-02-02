import { projects } from "../../data/projects"

const Project = () => {
  return (
    <>
    <h1>All Projects</h1>
    <ul>
      {projects.map(project => (
        <li key={project.title}>
          <h3>{project.title}</h3>
          <img src={project.image} alt="projectimage"/>
        </li>
      ))}
    </ul>
    </>
  )
}

export default Project
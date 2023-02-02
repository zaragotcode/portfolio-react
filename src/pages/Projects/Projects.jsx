import { projects } from "../../data/projects"
import ProjectsList from "../../components/Project/ProjectsList"

const Project = () => {
  return (
    <>
    <h1>All Projects</h1>
    <ProjectsList projects={projects} />
    </>
  )
}

export default Project
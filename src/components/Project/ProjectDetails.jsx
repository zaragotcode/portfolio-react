import findProject from "../../utilities/findProject";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const {projectDetails} = useParams()
  const projects = findProject(projectDetails)

  return (
    <>
      <h1>{projects.title}</h1>
      <p>{projects.description}</p>
      <img src={projects.image} alt={projects.title}/>
      <button>
        <a href={projects.repositoryLink}>Github Repo</a>
      </button>
      <button>
        <a href={projects.deploymentLink}>Deployed Site</a>
      </button>
    </>
  )
};

export default ProjectDetails
import { Link } from "react-router-dom";
import hyphenateWords from "../../utilities/hyphenateWords";

const ProjectPreview = (props) => {

  return (
    <div>
      <img 
        src={props.project.image}
        alt={props.project.title}
      />
    <section>
      <Link to={hyphenateWords(props.project.title)}>
        <button>
          Learn More
        </button>
      </Link>
    </section>
    </div>
  )
};

export default ProjectPreview
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
const imageFolderPath = process.env.PUBLIC_URL + '/assets/images/';


function SingleProject({project}) {

    return (
        <div className = "singleProject"> 
        <Fade bottom>
            <div className="project-image">
                <img src={`${imageFolderPath}${project.image}`} alt={project.title} />
                
            </div>
            
            <div className="project-info">

            <Link to ={`/project/${project.slug}`}  ><h3>{project.title}</h3></Link>
                <p>{project.excerpt}</p>

                <div className="more-link">
                    <Link to ={`/project/${project.slug}`}  >See Project</Link>
                </div>
            </div>
            </Fade>
        </div>

    )
}

export default SingleProject

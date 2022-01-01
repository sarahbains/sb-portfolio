import Fade from 'react-reveal/Fade';
import { NavHashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";

function Home() {

    return (
        <div id="home" className="content-section">
            <Fade right>
                <h2 className="first-name">Sarah</h2>
            </Fade>

            <Fade left>
                <h2 className="last-name">Bains</h2>
            </Fade>

            <Fade right>
                <h3 className="title">Front End Web Developer</h3> 
            </Fade>

            <NavHashLink
                smooth to="/#about"
                ><FontAwesomeIcon className="social-icon" icon={faChevronDown} />
            </NavHashLink>
        </div>
    )
}

export default Home

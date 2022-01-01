import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from 'react-external-link';

function Footer() {
    return (
        <div className="footer wrapper">
            <div></div>
            <p>&copy; Sarah Bains </p>
            
            <div className="socials">
            <ExternalLink href="https://www.linkedin.com/in/sarah-bains-528231206/">
                <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
            </ExternalLink>
            <ExternalLink href="https://github.com/sarahbains">
                <FontAwesomeIcon className="social-icon" icon={faGithub} />
            </ExternalLink>
            </div>
        </div>
    )
}

export default Footer

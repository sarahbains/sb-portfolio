import { NavHashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


function Nav() {

    return (
        <div className ="nav-home">
            <nav>
                <ul>
                <li>
                        <NavHashLink
                            smooth to="/#home"
                            ><FontAwesomeIcon className="social-icon" icon={faHome} />
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            smooth to="/#about"
                            >About
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            smooth to="/#projects"
                            > Projects
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            smooth to="/#contact"
                            >Contact
                        </NavHashLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav

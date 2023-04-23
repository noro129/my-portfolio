import './index.scss';
import P from '../../assets/images/P.png'
import {Link, NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faBars,faAddressCard} from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {



    return (
        <div className='nav-bar'>
            <Link className="logo" to="/my-portfolio">
                <img src={P} alt="HomePage"/>
                <h1 className='subLogo'>Portfolio</h1>
            </Link>
            <div className='first-line-in-nav'></div>
            <div className='second-line-in-nav'></div>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/my-portfolio" end>
                    <FontAwesomeIcon icon={faHome} color="#02111B"/>
                </NavLink>
                <NavLink exact activeclassname="active" className="about-link" to="/my-portfolio/about">
                    <FontAwesomeIcon icon={faUser} color="#02111B"/>
                </NavLink>
                <NavLink exact activeclassname="active" className="projects-link" to="/my-portfolio/projects">
                    <FontAwesomeIcon icon={faBars} color="#02111B"/>
                </NavLink>
                <NavLink exact activeclassname="active" className="contact-link" to="/my-portfolio/contact">
                    <FontAwesomeIcon icon={faAddressCard} color="#02111B"/>
                </NavLink>
            </nav>
        </div>
    )
}

export default SideBar;
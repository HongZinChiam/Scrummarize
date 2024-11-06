import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <FontAwesomeIcon icon={faBars} size="2x" />
            <h1>Scrummarize</h1>
            <FontAwesomeIcon icon={faUser} size="2x" />
        </header>
    )
}

export default Header

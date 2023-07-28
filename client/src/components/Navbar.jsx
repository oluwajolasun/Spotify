import { Link } from "react-router-dom"
import { Nav, NavItems } from "../components/styles/Navbar.styled"
const Navbar = () => {
    return (
        <Nav>
            <NavItems>
                <Link to={ "/artists" }>artists</Link>
                <Link to={ "/" }>User</Link>
                <Link to={ "/tracks" }>tracks</Link>
                <Link to={ "/playlists" }>playlists</Link>
            </NavItems>
        </Nav>
    )
}
export default Navbar
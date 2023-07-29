import { Link } from "react-router-dom"
import { Nav, NavItems, Icon } from "../components/styles/Navbar.styled"

import Artists from "../assets/Artists.svg";
import Player from "../assets/Player.svg";
import Playlists from "../assets/Playlists.svg";
import Tracks from "../assets/Tracks.svg";
import Home from "../assets/Home.svg";

const Navbar = () => {
    return (
        <Nav>
            <NavItems>
                <Link style={ { textDecoration: "none" } } to={ "/player" }>
                    <Icon>
                        <img src={ Player } />
                        <p>PLAYER</p>
                    </Icon>
                </Link>
                <Link style={ { textDecoration: "none" } } to={ "/artists" }>
                    <Icon>

                        <img src={ Artists } />
                        <p>ARTIST</p>
                    </Icon>
                </Link>
                <Link style={ { textDecoration: "none" } } to={ "/" }>
                    <Icon>
                        <img src={ Home } />
                        <p>HOME</p>
                    </Icon>
                </Link>
                <Link style={ { textDecoration: "none" } } to={ "/tracks" }>
                    <Icon>
                        <img src={ Tracks } />
                        <p>TRACKS</p>
                    </Icon>
                </Link>
                <Link style={ { textDecoration: "none" } } to={ "/playlists" }>
                    <Icon>
                        <img src={ Playlists } />
                        <p>PLAYLISTS</p>
                    </Icon>
                </Link>
            </NavItems>
        </Nav>
    )
}
export default Navbar
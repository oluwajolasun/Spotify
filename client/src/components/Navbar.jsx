import { Link } from "react-router-dom";
import { Nav, NavItems, Icon } from "../components/styles/Navbar.styled";

import Artists from "../assets/Artists.svg";
import Spotify from "../assets/Spotify.svg";
import Playlists from "../assets/Playlists.svg";
import Tracks from "../assets/Tracks.svg";
import Home from "../assets/Home.svg";

const Navbar = () => {
  return (
    <Nav>
      <NavItems>
        <Link style={{ textDecoration: "none" }} to={"https://open.spotify.com/"} target="_blank">
          <Icon>
            <img src={Spotify} />
            <p>OPEN SPOTIFY</p>
          </Icon>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/artists"}>
          <Icon>
            <img src={Artists} />
            <p>ARTIST</p>
          </Icon>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Icon>
            <img src={Home} />
            <p>HOME</p>
          </Icon>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/tracks"}>
          <Icon>
            <img src={Tracks} />
            <p>TRACKS</p>
          </Icon>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/playlists"}>
          <Icon>
            <img src={Playlists} />
            <p>PLAYLISTS</p>
          </Icon>
        </Link>
      </NavItems>
    </Nav>
  );
};
export default Navbar;

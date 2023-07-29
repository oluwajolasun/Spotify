import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import User from "./User"
import Artists from "./Artists"
import Tracks from "./Tracks"
import Playlists from "./Playlists"
import Player from "./Player"

import { Container } from "./styles/Profile.styled"
const Profile = () => {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={ <User /> } />
          <Route path="/tracks" element={ <Tracks /> } />
          <Route path="/artists" element={ <Artists /> } />
          <Route path="/playlists" element={ <Playlists /> } />
          <Route path="/player" element={ <Player /> } />
        </Routes>
      </Container>
      <Navbar />
    </div>
  )
}
export default Profile
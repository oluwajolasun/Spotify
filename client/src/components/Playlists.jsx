import { useEffect, useState } from "react";
import { getUserPlaylists } from "../api";
import {
  Title,
  Container,
  PlaylistDiv,
  PlaylistItem,
  PlaylistName,
  PlaylistImage,
  PlaylistTotalCount,
} from "./styles/Playlist.styled";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Playlists = () => {
  const [playlists, setPlaylists] = useState("");

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      await getUserPlaylists().then((res) => {
        console.log(res.data.items);
        setPlaylists(res.data.items);
      });
    };
    fetchUserPlaylists();
  }, []);

  return (
    <>
      <Title>Your playlist</Title>
      <Container>
        {playlists ? (
          <PlaylistDiv>
            {playlists.map((playlist) => (
              <PlaylistItem key={playlist.id}>
                <Link to={playlist.external_urls.spotify} target="_blank">
                  <PlaylistImage
                    src={playlist.images.length && playlist.images[0].url}
                  />
                </Link>
                <PlaylistName>{playlist.name}</PlaylistName>
                <PlaylistTotalCount>
                  {playlist.tracks.total} tracks
                </PlaylistTotalCount>
              </PlaylistItem>
            ))}
          </PlaylistDiv>
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
};
export default Playlists;

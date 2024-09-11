import { useEffect, useState } from "react";
import {
  getUserTopArtistShortTerm,
  getUserTopArtistMediumTerm,
  getUserTopArtistLongTerm,
} from "../api";
import {
  Title,
  ArtistDiv,
  ArtistImage,
  ArtistName,
  ArtistItem,
  Container,
} from "../components/styles/Artist.styled";
import Loader from "./Loader";
import { Link } from "react-router-dom";
const Artists = () => {
  // const [shortTermArtist, setShortTermArtist] = useState("")
  // const [mediumTermArtist, setMediumTermArtist] = useState("")
  const [LongTermArtist, setLongTermArtist] = useState("");

  useEffect(() => {
    const fetchShortTerm = async () => {
      await getUserTopArtistShortTerm().then((res) => {
        console.log(res.data);
        // setShortTermArtist(res.data.items)
      });
    };
    fetchShortTerm();

    const fetchMediumTerm = async () => {
      await getUserTopArtistMediumTerm().then((res) => {
        console.log(res.data);
        // setMediumTermArtist(res.data.items)
      });
    };
    fetchMediumTerm();

    const fetchLongTerm = async () => {
      await getUserTopArtistLongTerm().then((res) => {
        // console.log(res.data.items);
        setLongTermArtist(res.data.items);
      });
    };
    fetchLongTerm();
  }, []);

  return (
    <>
      <Title>Top Artist</Title>
      <Container>
        {LongTermArtist.length !== 0 ? (
          <ArtistDiv>
            {LongTermArtist.map((artist) => (
              <ArtistItem key={artist.id}>
                <Link to={artist.external_urls.spotify}>
                  <ArtistImage
                    src={artist.images.length && artist.images[1].url}
                  />
                </Link>
                <ArtistName>{artist.name}</ArtistName>
              </ArtistItem>
            ))}
          </ArtistDiv>
        ) : (
          <div>
            <Loader />
          </div>
        )}
      </Container>
    </>
  );
};
export default Artists;

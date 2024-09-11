import { useEffect, useState } from "react";
import { getHomeProfile, logout } from "../api";

import {
  Container,
  UserDiv,
  UserName,
  UserProfile,
  UserImageDiv,
  UserImage,
  UserDetails,
  LogOutBtn,
  Stats,
  StatItem,
  UserTops,
  Artist,
  ArtistImage,
  Track,
  TrackImage,
  TopTitle,
} from "../components/styles/User.styled";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState("");
  const [following, setFollowing] = useState("");
  const [top5Artists, setTop5Artists] = useState("");
  const [top5Tracks, setTop5Tracks] = useState("");

  useEffect(() => {
    const fetchGetHomeProfile = async () => {
      const { user, following, top5Artists, top5Tracks } =
        await getHomeProfile();
      console.log(user);
      setUser(user);

      console.log(following);
      setFollowing(following);

      console.log(top5Artists);
      setTop5Artists(top5Artists);

      console.log(top5Tracks);
      setTop5Tracks(top5Tracks);
    };
    fetchGetHomeProfile();
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <Container>
      {user ? (
        <UserDiv>
          <UserProfile>
            <UserImageDiv>
              <UserImage src={user.images[1].url} />
            </UserImageDiv>
            <UserDetails>
              <UserName>{user.display_name}</UserName>
              <Stats>
                <StatItem>
                  <div>FOLLOWING</div>
                  <div>{following.artists.total}</div>
                </StatItem>
                <StatItem>
                  <div>FOLLOWERS</div>
                  <div>{user.followers.total}</div>
                </StatItem>
              </Stats>
              <LogOutBtn onClick={handleLogout}>LOG OUT</LogOutBtn>
            </UserDetails>
          </UserProfile>
          <UserTops>
            <div>
              <TopTitle>Top 5 Artists</TopTitle>
              <div>
                {top5Artists ? (
                  <div>
                    {top5Artists.items.map((item) => (
                      <Artist key={item.id}>
                        <Link to={item.external_urls.spotify} target="_blank">
                          <div to={`/artist/${item.id}`}>
                            {item.images.length && (
                              <ArtistImage
                                src={item.images[2].url}
                                alt="Artist"
                              />
                            )}
                          </div>
                        </Link>
                        <div>
                          <p style={{ textAlign: "right", fontWeight: "900" }}>
                            {item.name}
                          </p>
                        </div>
                      </Artist>
                    ))}
                  </div>
                ) : (
                  <Loader />
                )}
              </div>

              <div></div>
            </div>

            <div>
              <TopTitle>Top 5 Tracks</TopTitle>
              <div>
                {top5Tracks ? (
                  <div>
                    {top5Tracks.items.map((item) => (
                      <Track key={item.id}>
                     <Link to={item.external_urls.spotify} target="_blank">
                        <div to={`/artist/${item.id}`}>
                          {item.album.images.length && (
                              <TrackImage
                              src={item.album.images[0].url}
                              alt="Track"
                              />
                            )}
                        </div>
                            </Link>
                        <div>
                          <p style={{ textAlign: "right", fontWeight: "900" }}>
                            {item.name}
                          </p>
                        </div>
                      </Track>
                    ))}
                  </div>
                ) : (
                  <Loader />
                )}
              </div>

              <div></div>
            </div>
          </UserTops>
        </UserDiv>
      ) : (
        <Loader />
      )}
    </Container>
  );
};
export default User;

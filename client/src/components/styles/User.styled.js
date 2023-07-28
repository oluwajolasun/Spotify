import styled from "styled-components";

export const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
  height: inherit;
`;
export const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100vw;
  padding-bottom: 1rem;
`;

export const UserName = styled.h2`
  font-size: x-large;
  display: flex;
  flex-direction: row;
`;
export const UserImage = styled.img`
  width: 170px;
  display: flex;
  flex-direction: row;
  border-radius: 50%;
`;
export const Stats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const TopTitle = styled.div`
text-align: center;
  padding-bottom: 1rem;
`;
export const UserTops = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 100vw;
  padding-top: 0.5rem;
`;

export const Artist = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  margin: 0;
  height: 100%;
`;

export const ArtistImage = styled.img`
  width: 60px;
  display: flex;
  flex-direction: row;
  border-radius: 50%;
`;
export const Track = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  margin: 0;
  height: 100%;
`;
export const TrackImage = styled.img`
  width: 60px;
  display: flex;
  flex-direction: row;
`;

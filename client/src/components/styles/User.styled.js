import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
  flex-grow: 1;
`;
export const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
  flex-grow: 1;

  @keyframes slideIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: slideIn 1s ease;
`;
export const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100vw;
  padding-bottom: 1rem;

  &.div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-device-width: 714px) and (orientation: portrait) {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
  }
`;

export const UserImageDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserDetails = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-device-width: 714px) and (orientation: portrait) {
    margin-left: 0;
  }
`;

export const UserName = styled.h2`
  font-size: x-large;
  display: flex;
  flex-direction: row;
  text-align: center;
  /* justify-content: center; */

  @media screen and (max-device-width: 714px) and (orientation: portrait) {
    justify-content: center;
  }
`;
export const UserImage = styled.img`
  width: 170px;
  display: flex;
  flex-direction: row;
  border-radius: 50%;
  margin-right: 3rem;

  @media screen and (max-device-width: 714px) and (orientation: portrait) {
    margin-right: 0;
  }
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
  font-weight: 600;
`;
export const LogOutBtn = styled.button`
  background-color: #1db954;
  border-radius: 70px;
  width: 120px;
  font-weight: 900;
  margin: auto;
  color: black;
`;

export const TopTitle = styled.p`
  text-align: center;
  font-weight: 900;
  font-size: 25px;
  text-transform: uppercase;
  padding: 0%.5;
`;
export const UserTops = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 100vw;
  padding-top: 0.5rem;

  /* For Tablet View */
  @media screen and (min-device-width: 468px) and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 1) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  @media screen and (max-device-width: 468px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
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

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    margin: auto;
    width: 90vw;
  }
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

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    margin: auto;
    width: 90vw;
  }
`;
export const TrackImage = styled.img`
  width: 60px;
  display: flex;
  flex-direction: row;
`;

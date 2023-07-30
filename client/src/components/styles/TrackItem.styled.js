import { styled } from "styled-components";

export const Title = styled.div`
  text-align: center;
  margin: 20px 0;
  text-transform: uppercase;
  font-size: 30px;
`;

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;
export const TrackItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 70vw;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    width: 90vw;
  }
`;
export const TrackDetails = styled.p`
  font-size: 14px;
  font-weight: 300;
`;
export const TrackImage = styled.img`
  width: 100px;

  /* For Mobile Portrait View */
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    width: 70px;
  }
`;
export const TrackInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TrackTitle = styled.p`
  font-size: 15px;
  margin: 0;
  padding-left: 10px;
  text-align: left;
`;
export const TrackArtist = styled.p`
  font-size: 14px;
  font-weight: 100;
  text-align: left;
  margin: 0;
  padding-left: 10px;
`;

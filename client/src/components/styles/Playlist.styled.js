import styled from "styled-components";

export const Title = styled.div`
  text-align: center;
  margin: 20px 0;
  text-transform: uppercase;
  font-size: 30px;
`;

export const Container = styled.div`
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 100vw;
`;
export const PlaylistDiv = styled.div`
  justify-items: center;
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin: auto;
  width: 90vw;

    /* For Tablet View */
    @media screen and (min-device-width: 540px) and (max-device-width: 1024px) {
    grid-template-columns: auto auto;
  }

    /* For Mobile Portrait View */
    @media screen and (max-device-width: 480px) and (orientation: portrait) {
    grid-template-columns: auto;
  }
`;
export const PlaylistItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: max-content;
  max-width: 200px;
  justify-content: start;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const PlaylistImage = styled.img`
  width: 250px;
`;
export const PlaylistName = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight: 600;
`;

export const PlaylistTotalCount = styled.p`
  font-size: 16px;
  margin: 0;
  text-align: center;
  font-weight: 300;
`;

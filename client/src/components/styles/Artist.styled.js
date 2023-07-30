import { styled } from "styled-components";

export const Title = styled.div`
  text-align: center;
  margin: 20px 0;
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 900;
`;

export const Container = styled.div`
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 100vw;
`;
export const ArtistDiv = styled.div`
  justify-items: center;
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin: auto;
  width: 90vw;

  @keyframes slideIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: slideIn 1s ease;

  @media screen and (min-width: 1024px) {
  }

  /* For Tablet View */
  @media screen and (min-device-width: 540px) and (max-device-width: 1024px) {
    grid-template-columns: auto auto;
  }

  /* For Mobile Portrait View */
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    grid-template-columns: auto;
  }
`;

export const ArtistItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: max-content;
  max-width: 200px;
  justify-content: start;
  padding: 3rem;

  @media screen and (min-device-width: 540px) and (max-device-width: 1024px) {
    padding: 1.5rem;
  }

  /* For Mobile Portrait View */
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    padding: 1.5rem;
  }
`;

export const ArtistImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;

  /* For Mobile Portrait View */
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    width: 200px;
    height: 200px;
  }
`;
export const ArtistName = styled.div`
  padding-top: 1rem;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
`;

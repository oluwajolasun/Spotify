import styled from "styled-components";

export const FooterDiv = styled.div`
  position: flex;
  height: 10dvh;
  width: 100vw;
  background-color: black;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 100%;
    margin: 0;
  }

  a {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 0.8rem;
  }
`;

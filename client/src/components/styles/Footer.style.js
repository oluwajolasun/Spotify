import styled from "styled-components";

export const FooterDiv = styled.div`
  position: absolute;
  height: 8vh;
  width: 100vw;
  background-color: black;
  bottom: 0;

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
    font-weight: 100;
    font-size: 0.8rem;
  }
`;

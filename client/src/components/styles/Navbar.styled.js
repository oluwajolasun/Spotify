import styled from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  background-color: black;
  border-radius: 30px 30px 0 0;
  height: 13vh;
  text-align: center;
  opacity: 40%;
  transition: 0.5s;

  &:hover {
    opacity: 100%;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 100%;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100%;
  width: 19vw;

  p {
    margin: 0;
    font-size: 12px;
    /* font-weight: 100; */
    color: white;
    transition: 0.5s;
  }

  p:hover {
    color: #1db954;
  }
`;

import styled from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  background-color: black;
  border-radius: 30px 30px 0 0;
  height: 10vh;
  text-align: center;
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
  height: 100%;
  margin-left: 80px;
  margin-right: 80px;

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    margin-left: 10px;
    margin-right: 10px;
  }

  img {
    width: 40px;

    @media screen and (max-device-width: 480px) and (orientation: portrait) {
      width: 35px;
    }
  }

  p {
    margin: 0;
    font-size: 11px;
    font-weight: 700;
    color: white;
    line-clamp: 1;
  }
`;

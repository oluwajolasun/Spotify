import styled from "styled-components";

export const Container = styled.div`
  min-height: 90dvh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginText = styled.h1`
  text-align: center;
  font-size: 3rem;
`;
export const LoginButton = styled.button`
  background-color: #1db954;
  border-radius: 70px;
  width: 120px;
  font-weight: 900;
  color: white;
`;

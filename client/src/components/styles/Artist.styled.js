import { styled } from "styled-components";



export const Container = styled.div`
margin: auto;
align-items: center;
display: flex;
justify-content: center;
`;
export const ArtistDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin: auto;
  width: 70vw;
`;
export const ArtistItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const ArtistImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
export const ArtistName = styled.div`  
padding-top: 1rem;
`;

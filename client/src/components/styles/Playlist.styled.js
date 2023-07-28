import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const PlaylistDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin: auto;
  width: 70vw;
`;
export const PlaylistItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  max-width: min-content;
`;

export const PlaylistImage = styled.img`
  width: 200px;
`;
export const PlaylistName = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight: 600;
`;

export const PlaylistTotalCount = styled.p`
  font-size: 16px;
  margin: 0;
  text-align: left;
  font-weight: 300;
`;

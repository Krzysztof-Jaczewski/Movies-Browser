import styled from "styled-components";

export const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 24px;
  max-width: 1368px;
  height: 1391px;
  margin: 0 auto;

  @media (max-width: 767px) {
    grid-template-columns: auto;
    grid-gap: 16px;
    width: fit-content;
    height: fit-content;
  }
`;

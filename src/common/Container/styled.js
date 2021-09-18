import styled from "styled-components";

export const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 24px;
  max-width: 1368px;
  margin: 0 auto;
  transition: all 0.5s;

  @media (max-width: 1372px) {
    grid-template-columns: repeat(3, auto);
    width: fit-content;
    transition: all 0.5s;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, auto);
    width: fit-content;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: auto;
    gap: 16px;
    width: fit-content;
  }
`;

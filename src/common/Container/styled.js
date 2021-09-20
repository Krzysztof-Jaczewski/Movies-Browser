import styled, { css } from "styled-components";

export const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 324px);
  gap: 24px;
  max-width: 1368px;
  margin: 0 auto;
  transition: all 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 16px;
    width: auto;
    grid-template-columns: auto;
  }
  ${({ person }) =>
    person &&
    css`
      border-radius: 5px;
      grid-template-columns: repeat(auto-fill, 208px);

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        grid-template-columns: repeat(2, auto);
        padding: 16px;
      }
    `}
`;

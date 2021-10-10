import styled, { css } from "styled-components";

export const StyledContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, auto));
  gap: 24px;
  transition: all 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 16px;
    padding: 16px;
  }

  ${({ person }) =>
    person &&
    css`
      border-radius: 5px;
      grid-template-columns: repeat(auto-fit, minmax(180px, auto));

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        grid-template-columns: repeat(auto-fit, minmax(136px, auto));
        padding: 16px;
      }
    `}
`;

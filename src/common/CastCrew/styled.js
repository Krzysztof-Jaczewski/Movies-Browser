import styled from "styled-components";

export const Header = styled.header`
  font-weight: 600;
  font-size: 36px;
  max-width: 1368px;
  margin: 0 auto;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 20px;
    padding: 16px;
  }
`;

export const Section = styled.section`
  display: grid;
  grid-auto-columns: 324px;
  grid-auto-flow: column;
  gap: 24px;
  padding: 16px;
  margin: 24px auto;
  transition: all 0.5s;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  justify-content: flex-start;
  max-width: 1368px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 16px;
    grid-template-columns: auto;
    margin: 0;
    gap: 24px;
    padding: 16px;
  }
`;

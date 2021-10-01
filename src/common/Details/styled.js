import styled from "styled-components";

export const StyledDetails = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 1368px;
  margin: 56px auto 64px;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0px 4px 12px 0 rgba(186, 199, 213, 0.5);
  display: grid;
  gap: 40px;
  grid-template-columns: 400px repeat(3, 200px);
  grid-template-rows: repeat(4, 130px);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: 116px auto;
    grid-template-rows: auto;
    margin: 0 16px;
    padding: 16px;
    gap: 16px;
  }
`;
export const Poster = styled.img`
  width: 400px;
  height: 593px;
  border-radius: 5px;
  transition: all 0.5s;
  grid-row: 1;
  grid-column: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 116px;
    height: 100%;
  }
`;

export const Description = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 24px;
  grid-row: 1;
  grid-column: 2/6;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 16px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 8px 0 0 0;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    margin: 4px 0 0 0;
  }
`;

export const Caption = styled.span`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 18px;
  line-height: 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 12px;
    line-height: 14.4px;
  }
`;

export const BirthdayInformation = styled.article`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  padding: 0 11px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 12px;
    line-height: 14.4px;
  }
`;
export const Biography = styled.p`
  font-size: 20px;
  line-height: 160%;
  grid-row: 2;
  grid-column: 2 / span 4;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 13px;
    line-height: 16.9px;
    grid-column: 1 / span 5;
  }
`;

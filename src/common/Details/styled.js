import styled, { css } from "styled-components";

export const StyledTile = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  width: 324px;
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0px 4px 12px 0 rgba(186, 199, 213, 0.5);
  display: grid;
  gap: 16px;
  grid-template-rows: auto 1fr;
  transition: all 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: auto;
    grid-template-columns: auto 1fr;
    grid-template-rows: none;
    margin: 0 16px;
  }

  ${({ details }) =>
    details &&
    css`
      width: 100%;
      grid-template-columns: auto 1fr;
      grid-template-rows: none;
      gap: 40px;
      padding: 40px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        padding: 16px;
      }
      &&:hover {
        transform: none;
      }

      &&:active {
        transform: none;
      }
    `}
`;
export const Poster = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;
  transition: all 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 114px;
    height: auto;
  }
  ${({ person }) =>
    person &&
    css`
      width: 177px;
      height: 264px;
      border-radius: 5px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        width: 120px;
        height: 178px;
      }
    `}
`;

export const Descrition = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-rows: auto auto 1fr;
  }
`;

export const Title = styled.h2`
  border-radius: 5px;
  font-weight: 500;
  font-size: 22px;
  word-break: break-word;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 16px;
  }
`;

export const Caption = styled.span`
  color: ${({ theme }) => theme.colors.waterloo};
  line-height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;

export const TileDate = styled(Caption)`
  margin-bottom: 8px;
  display: flex;

  &:empty {
    margin-bottom: 0;
  }
`;

export const Biography = styled.article`
  font-size: 20px;
`;

export const BirthdayInformation = styled.article`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  padding: 0 11px;
`;

import styled, { css } from "styled-components";
import { ReactComponent as Star } from "../../images/star.svg";

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
  height: 100%;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 320px;
    grid-template-columns: auto 1fr;
    grid-template-rows: none;
  }

  ${({ person }) =>
    person &&
    css`
      width: 208px;
      border-radius: 5px;
      padding: 16px;
      gap: 24px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        width: 136px;
        grid-template-columns: auto;
        padding: 8px;
        gap: 16px;
        margin: 0;
      }
    `}

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }
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

export const Info = styled.div`
  display: grid;
  grid-template-rows: auto auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-rows: auto auto 1fr;
  }
`;

export const Title = styled.h2`
  border-radius: 5px;
  font-weight: 500;
  font-size: 22px;
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 16px;
  }
`;

export const TileCharacter = styled.h3`
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  word-break: break-word;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.waterloo};
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.colors.waterloo};
  line-height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 13px;
    line-height: 16.9px;
  }
  ${({ backdrops }) =>
    backdrops &&
    css`
      color: ${({ theme }) => theme.colors.white};
      font-size: 16px;
      line-height: 120%;
      align-items: center;
    `}

  ${({ movieInfo }) =>
    movieInfo &&
    css`
      font-size: 14px;
      line-height: 17px;
      color: ${({ theme }) => theme.colors.black};
    `}
`;

export const TileDate = styled(Caption)`
  margin-bottom: 8px;
  display: flex;

  &:empty {
    margin-bottom: 0;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-left: 0;
  margin-bottom: 8px;

  &:empty {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    flex-direction: row;
  }
`;
export const Tag = styled.li`
  background-color: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 19.6px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 11px;
    line-height: 11px;
    padding: 4px 8px;
  }
`;

export const Ratings = styled.section`
  grid-row: -1;
  display: flex;
  align-items: center;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-row: auto;
  }
`;

export const Rate = styled.p`
  font-weight: 600;
  line-height: 24px;
  padding: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 13px;
  }

  ${({ backdrops }) =>
    backdrops &&
    css`
      color: ${({ theme }) => theme.colors.white};
      font-weight: 500;
      font-size: 30px;
      line-height: 39px;
      align-items: center;
      padding: 0 7px;
    `}

  ${({ movieInfo }) =>
    movieInfo &&
    css`
      font-weight: 500;
      font-size: 22px;
      line-height: 29px;
      flex-grow: 0;
    `}
`;

export const StarIcon = styled(Star)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 16px;
  }
`;

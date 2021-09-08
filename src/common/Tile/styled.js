import styled from "styled-components";

export const StyledTile = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  width: 324px;
  height: 650px;
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0px 4px 12px 0 rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const Image = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;
  padding-bottom: 16px;
`;

export const Descrition = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
`;
export const Info = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 8px;
`;

export const Title = styled.h2`
  border-radius: 5px;
  font-weight: 500;
  font-size: 22px;
  word-break: break-word;
`;

export const Caption = styled.span`
  color: ${({ theme }) => theme.colors.waterloo};
  line-height: 24px;
`;
export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: -4px;
`;
export const Tag = styled.li`
  background-color: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;
  padding: 8px 16px;
  margin: 8px 4px;
  font-size: 14px;
  line-height: 19.6px;
`;

export const Ratings = styled.section`
  grid-row: -1;
  display: flex;
  align-items: center;
`;
export const Rate = styled.span`
  font-weight: 600;
  line-height: 24px;
  padding: 0 12px;
`;

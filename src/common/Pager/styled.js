import styled, { css } from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin-bottom: 103px;
  justify-content: center;
  column-gap: 12px;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 100%;
    margin-bottom: 31px;
    column-gap: 8px;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.pattensBlue};
  border-radius: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: none;
  position: static;
  padding: 8px 16px;

  &:disabled {
    background: ${({ theme }) => theme.colors.mystic};
  }

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const ButtonText = styled.span`
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mineShaft};

  &:disabled {
    background: ${({ theme }) => theme.colors.woodsmoke};
  }
`;

export const PagesWrapper = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.waterloo};
  flex-grow: 0;
  font-size: 16px;
  padding: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 10px;
  }
`;

export const Pages = styled.span`
  margin: 0px 8px;

  ${({ number }) =>
    number &&
    css`
      font-weight: 600;
      color: ${({ theme }) => theme.colors.woodsmoke};
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 0px 2px;
  }
`;

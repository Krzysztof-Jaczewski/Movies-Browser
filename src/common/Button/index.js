import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.colors.curiousBlue};
  color: white;
  margin: 24px 0;
  border-radius: 24px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.08);
  }
  &:active {
    transform: scale(0.92);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 12px auto 12px 16px;
    padding: 12px 24px;
  }
`;

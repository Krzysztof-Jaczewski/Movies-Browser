import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/tmdb.svg";

export const PageFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.colors.woodsmoke};
  padding: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 10px;
    text-align: left;
  }
`;

export const FooterContainer = styled.div`
  width: 70%;

  margin: 0 auto;
`;

export const FooterLogo = styled(Logo)`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 10px;
    width: 36px;
    height: 36px;
  }
`;

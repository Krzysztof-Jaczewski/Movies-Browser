import styled from "styled-components";
import {ReactComponent as bigStar} from "../../images/star.svg";

export const BackdropShadow = styled.div`
    width: 1920px;
    height: 770px;
    left: 0px;
    top: 93px;
    background: linear-gradient(270deg, 
        #000000 14.11%, rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, rgba(0, 0, 0, 0) 25.68%), linear-gradient(90deg, 
        #000000 13.6%, rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%), linear-gradient(180deg, 
        #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, 
        #000000 92.87%);
`;

export const BackdropPoster = styled.img`
    width: 1368px;
    height: 769px;
    left: 276px;
    top: 94px;
    position: absolute;
    display: block;
`;

export const LongTitle = styled.header`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.white};
    margin-left: 276px;
`;

export const BigStarIcon = styled(bigStar)`

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 16px;
  }
`;



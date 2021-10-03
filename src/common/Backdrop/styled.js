import styled from "styled-components";
import { ReactComponent as bigStar } from "../../images/star.svg";

export const BackdropShadow = styled.div`
    width: 100%;
    height: 770px;
    left: 0px;
    top: 94px;
    background: linear-gradient(270deg, 
        #000000 14.11%, rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, rgba(0, 0, 0, 0) 25.68%), linear-gradient(90deg, 
        #000000 13.6%, rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%), linear-gradient(180deg, 
        #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, 
        #000000 92.87%);

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
      width: 100%;
      height: 148px;
      left: 0px;
      top: 141px;
      margin: 0 auto;
      background: linear-gradient(269.75deg, 
        #000000 8.69%, rgba(0, 0, 0, 0.873268) 10.09%, rgba(0, 0, 0, 0.720529) 12.16%, rgba(0, 0, 0, 0.294577) 17.19%, rgba(0, 0, 0, 0.159921) 19.93%, rgba(0, 0, 0, 0) 25.43%), linear-gradient(90.09deg, 
        #000000 8.05%, rgba(0, 0, 0, 0.984059) 9.4%, rgba(0, 0, 0, 0.967732) 10.59%, rgba(0, 0, 0, 0.865569) 11.79%, rgba(0, 0, 0, 0.230315) 20.89%, rgba(0, 0, 0, 0) 26.12%), linear-gradient(180deg, 
        #000000 -2.7%, rgba(0, 0, 0, 0.689555) 2.36%, rgba(0, 0, 0, 0.439033) 7.46%, rgba(0, 0, 0, 0.20628) 13.79%, rgba(0, 0, 0, 0) 23.65%), linear-gradient(192.09deg, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.106473) 69.25%, rgba(0, 0, 0, 0.235359) 74.4%, rgba(0, 0, 0, 0.492821) 82.77%, rgba(0, 0, 0, 0.740286) 89.82%, 
        #000000 96.18%);
        
    ;
  }
`;

export const BackdropPoster = styled.div`
    width: 100%;
    height: 769px;
    left: 276px;
    margin: 0 auto;
    background-image: url(${({image}) => image});
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0 0 30px black, inset 0 0 60px black, inset 0 0 90px black, inset 0 0 120px black, inset 0 0 150px black;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
      width: 100%;
      height: 148px;
      left: 29px;
    }
`;

export const LongTitle = styled.header`
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    width: 1368px;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
      font-size: 24px;
      width: 214px;
      font-size: 24px;
      line-height: 29px;
    }
`;

export const BigStarIcon = styled(bigStar)`

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 16px;
  }
`;

export const Wrapper = styled.main`
  max-width: 1368px;
  font-style: normal;
  font-weight: normal;
  position: absolute;
  width: 503px;
  height: 77px;
  left: 276px;
  top: 631px;

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
    width: 214px;
    height: 29px;
    left: 16px;
    top: 200px;
    margin-bottom: 8px;
  }
  `;

export const RateTotal = styled.span`
  font-size: 16px;
  line-height: 19px;
  margin-left: 7px;
  font-weight: normal;

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
    font-size: 10px;
    line-height: 12px;
    margin-left: 2px;
    font-weight: normal;
  }
`;


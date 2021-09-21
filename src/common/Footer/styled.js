import styled from "styled-components";
import { ReactComponent as FooterLogo } from "../../images/tmdb.svg";

export const PageFooter = styled.footer`
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.woodsmoke};
    padding: 10px;
    color: ${({ theme }) => theme.colors.white};

    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax})
    {
        font-size: 14px;
    }
`;

export const PageFooterContainer = styled.div`
    max-width: 1368px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax})
    {
        flex-direction: column;
    }
`;

export const PageFooterLogo = styled(FooterLogo)`
    width: 22px;
    height: 22px;

    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax})
    {
        margin: 10px;
        width: 14px;
        height: 14px;
    }
`;
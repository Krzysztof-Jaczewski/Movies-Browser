import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";

export const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.woodsmoke};
    padding: 23px;
    margin-bottom: 56px;
    width: 100%;

    @media(max-width: 767px){
        flex-direction: column;
    }
`;

export const Wrapper = styled.div`
    color: ${({ theme }) => theme.colors.white};
    max-width: 1368px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 767px){
        flex-direction: column;
    }
`;

export const StyledLogo = styled(Logo)`
    width: 40px;
    height: 40px;

    @media(max-width: 767px){
        width: 17px;
        height: 17px;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.white};

    @media(max-width: 767px){
        width: 100%;
    }
`;

export const LogoHeader = styled.h1`
    margin-left: 16.58px;
    margin-right: 80px;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -1.5px;

    @media(max-width: 767px){
        margin-left: 0;
        margin-right: 0;
        font-size: 13px;
        letter-spacing: -0.5px;
    }
`;

export const Links = styled.ul`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    list-style-type: none;
    display: flex;
`;

export const Link = styled.a`
    padding: 8px 24px;
    text-decoration: none;
    color: currentColor;
    border: 1px solid transparent;

    @media(max-width: 767px){
        font-size: 12px;
    }

    &:hover{
        border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    };

    &:active{
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 24px;
    };
`;

export const StyledInput = styled.input`
    font-size: 12px;
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    border-radius: 33px;
    padding: 12px 64px;
    margin: 0 auto;

    @media(max-width: 767px){
        width: 100%;
        margin-top: 33px;
    }
`
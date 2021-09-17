import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/Video.svg";
import SearchIcon from "../../images/Search.svg";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.woodsmoke};
    padding: 23px;
    margin-bottom: 56px;
    width: 100%;

    @media(max-width: ${({theme})=>theme.breakpoint.mobileMax}px){
        flex-direction: column;
        padding: 16px;
    }
`;

export const Wrapper = styled.div`
    color: ${({ theme }) => theme.colors.white};
    max-width: 1368px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledLogo = styled(Logo)`
    width: 40px;
    height: 40px;

    @media(max-width: ${({theme})=>theme.breakpoint.mobileMax}px){
        width: 17px;
        height: 17px;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 80px;

    @media(max-width: ${({theme})=>theme.breakpoint.mobileMax}px){
        width: 120px;
        margin-right: 0;
    }
`;

export const LogoHeader = styled.h1`
    margin: 0 0 0 12px;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -1.5px;
    white-space: nowrap;

    @media(max-width: ${({theme})=>theme.breakpoint.mobileMax}px){
        margin-left: 8px;
        font-size: 13px;
        letter-spacing: -0.5px;
    }
`;

export const Links = styled.ul`
    text-transform: uppercase;
    padding-left: 0;
    font-weight: 600;
    font-size: 14px;
    list-style-type: none;
    display: flex;
`;

export const LinkItem = styled.li``;

export const Link = styled(NavLink)`
    padding: 8px 24px;
    text-decoration: none;
    color: currentColor;
    border: 1px solid transparent;

    @media(max-width: ${({theme})=>theme.breakpoint.mobileMax}px){
        font-size: 12px;
        padding: 8px 12px;
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
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: 17px center;
    font-size: 12px;
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    border-radius: 33px;
    padding: 12px 40px;
    margin: 0 auto;
    width: 432px;

    @media(max-width: ${({theme})=>theme.breakpoint.mobileMax}px){
        width: 100%;
        margin-top: 24px;
    }
`
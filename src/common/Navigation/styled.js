import styled from "styled-components";

export const StyledNavigation = styled.nav`
    background-color: ${({ theme }) => theme.colors.woodsmoke};
    padding: 23px;
    margin-bottom: 56px;
`;

export const Wrapper = styled.div`
    color: ${({ theme }) => theme.colors.white};
    max-width: 1368px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: -1.5px;
    color: ${({ theme }) => theme.colors.white};
`;

export const LogoHeader = styled.h1`
    margin-left: 16.58px;
    margin-right: 94px;
    font-size: 24px;
    font-weight: 500;
`;

export const Links = styled.ul`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    list-style-type: none;
    display: flex;
`;

export const Link = styled.a`
    padding: 10px;
    margin: 0 54px;
    text-decoration: none;
`;
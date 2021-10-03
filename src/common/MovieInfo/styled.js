import styled, { css } from "styled-components";

export const Wrapper = styled.article`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 40px;
    background-color: ${({ theme }) => theme.colors.white};
    width: 1368px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    margin: 64px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        width: 288px;
        padding: 16px;
        margin: 0 auto;
    }
`;

export const Poster = styled.img`
    border-radius: 5px;
    margin: 0px 40px;
    width: 312px;
    height: 464px;
    left: 40px;
    top: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        width: 114px;
        height: 169px;
        left: calc(50% - 114px/2 - 71px);
        top: 0px;
        order: 0;
        flex-grow: 0;
        margin: 0px 16px;
    }
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    align-items: center;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        margin-bottom: 8px;
    }
`;

export const Description = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
    }
`;

export const Info = styled.p`
    font-size: 18px;
    line-height: 22px;
    align-items: center;
    color: ${({theme}) => theme.colors.black};
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-bottom: 24px;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 8px;
    }

    ${({production}) =>
            production &&
                css`
                    margin-bottom: 8px;
                `}
`;

export const MainInfo = styled.p`
    font-size: 20px;
    line-height: 32px;
    order: 5;
    flex-grow: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
                
    }
`;

export const Span = styled.span`
    order: 1;
    color: ${({theme}) => theme.colors.stormGray};

    ${({rate}) =>
        rate &&
        css`
            font-size: 14px;
            line-height: 17px;
            align-items: center;
            color: ${({theme}) => theme.colors.black};
        `}
`;
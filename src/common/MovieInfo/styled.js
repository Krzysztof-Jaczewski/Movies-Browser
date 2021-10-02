import styled, { css } from "styled-components";

export const Wrapper = styled.main`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 40px;
    background-color: ${({ theme }) => theme.colors.white};
    width: 1368px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    margin: 64px 0;
`;

export const Poster = styled.img`
    border-radius: 5px;
    margin: 0px 40px;
    width: 312px;
    height: 464px;
    left: 40px;
    top: 40px;
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    align-items: center;
`;

export const Description = styled.div`
    
`;

export const Info = styled.p`
    font-size: 18px;
    line-height: 22px;
    align-items: center;
    color: ${({theme}) => theme.colors.black};
    flex: none;
    order: 1;
    flex-grow: 0;

    ${({main}) =>
        main &&
        css`
            font-size: 20px;
            line-height: 32px;
            order: 5;
            flex-grow: 0;
        `
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
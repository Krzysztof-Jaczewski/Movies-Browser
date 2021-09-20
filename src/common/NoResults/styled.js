import styled from "styled-components";

export const Image = styled.img`
    display: block;
    margin: 40px auto 0;
    width: 668px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax})
    {
        width: 222px;
    }
`;
import styled from "styled-components";

export const Info = styled.article`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 40px;
    background-color: ${({ theme }) => theme.colors.white};
    width: 1368px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    margin-top: 64px;
`;

export const Poster = styled.img`
    border-radius: 5px;
    margin: 0px 40px;
    width: 312px;
    height: 464px;
    left: 40px;
    top: 40px;
`;
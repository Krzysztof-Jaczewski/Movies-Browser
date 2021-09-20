import styled from "styled-components";
import { ReactComponent as Spinner } from "../../images/icon-spinner.svg";

export const LoadingImage = styled(Spinner)`
    display: block;
    margin: 0 auto;
    width: 91px;
    height: 91px;
    animation: spin 1s linear infinite;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        width: 35px;
        height: 35px;
    };

    @keyframes spin{
        100%{
            transform: rotate(360deg);
        }
    };
    `;
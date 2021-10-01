import { Link } from "react-router-dom";
import styled from "styled-components";


const activeClassName = "active";

export const StyledLink = styled(Link).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName} {
        color: none;
    }
        text-decoration: none;
        color: none;
`;
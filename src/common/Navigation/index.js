import { HashRouter } from "react-router-dom";
import {
    Link,
    LinkItem,
    Links,
    LogoHeader,
    LogoWrapper,
    StyledInput,
    StyledLogo,
    StyledNavigation,
    Wrapper
} from "./styled";

export const Navigation = () => (
    <StyledNavigation>
        <Wrapper>
            <LogoWrapper>
                <StyledLogo />
                <LogoHeader>
                    Movies Browser
                </LogoHeader>
            </LogoWrapper>
            <Links>
                <HashRouter>
                    <LinkItem>
                        <Link to="/">Movies</Link>
                    </LinkItem>
                    <LinkItem>
                        <Link to="/">People</Link>
                    </LinkItem>
                </HashRouter>
            </Links>
        </Wrapper>
        <StyledInput placeholder="Search for movies..." />
    </StyledNavigation >
);
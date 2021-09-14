import {
    Link,
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
                <Links>
                    <Link href="#" key="1">Movies</Link>
                    <Link href="#" key="2">People</Link>
                </Links>
            </LogoWrapper>
            <StyledInput placeholder="Search for movies..." />
        </Wrapper>
    </StyledNavigation>
);
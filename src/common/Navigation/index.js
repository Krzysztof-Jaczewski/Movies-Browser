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
            </LogoWrapper>
            <Links>
                <Link href="#" key="1">Movies</Link>
                <Link href="#" key="2">People</Link>
            </Links>
        </Wrapper>
        <StyledInput placeholder="Search for movies..." />
    </StyledNavigation >
);
import { ReactComponent as Logo } from "./logo.svg";
import { Link, Links, LogoHeader, LogoWrapper, StyledInput, StyledNavigation, Wrapper } from "./styled";

export const Navigation = () => (
    <StyledNavigation>
        <Wrapper>
            <LogoWrapper>
                <Logo />
                <LogoHeader>
                    Movies Browser
                </LogoHeader>
                <Links>
                    <Link href="#">Movies</Link>
                    <Link href="#">People</Link>
                </Links>
            </LogoWrapper>
            <StyledInput placeholder="Search for movies..." />
        </Wrapper>
    </StyledNavigation>
);
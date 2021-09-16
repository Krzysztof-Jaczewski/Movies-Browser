import { ReactComponent as Logo } from "./logo.svg";
import { Link, Links, LogoHeader, LogoWrapper, StyledNavigation, Wrapper } from "./styled";

export const Navigation = () => (
    <StyledNavigation>
        <Wrapper>
            <LogoWrapper>
                <Logo />
                <LogoHeader>
                    Movies Browser
                </LogoHeader>
            </LogoWrapper>
            <Links>
                <Link>Movies</Link>
                <Link>People</Link>
            </Links>
        </Wrapper>
    </StyledNavigation>
);
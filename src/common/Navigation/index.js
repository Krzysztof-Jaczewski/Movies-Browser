import { useLocation } from "react-router-dom";
import {
  Link,
  LinkItem,
  Links,
  LogoHeader,
  LogoWrapper,
  NavigationContainer,
  StyledInput,
  StyledLogo,
  StyledNavigation,
  Wrapper,
} from "./styled";

export const Navigation = () => {
  const location = useLocation();
  return (
    <StyledNavigation>
      <NavigationContainer>
        <Wrapper>
          <LogoWrapper>
            <StyledLogo />
            <LogoHeader>Movies Browser</LogoHeader>
          </LogoWrapper>
          <Links>
            <LinkItem>
              <Link to="/Movies">Movies</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/People">People</Link>
            </LinkItem>
          </Links>
        </Wrapper>
        <StyledInput placeholder={`Search for ${location.pathname === "/Movies" ? "movies..." : "people..."}`} />
      </NavigationContainer>
    </StyledNavigation>
  );
};

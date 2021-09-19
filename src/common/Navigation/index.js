import { useDispatch } from "react-redux";
import { HashRouter } from "react-router-dom";
import { fetchMovies } from "../../features/MoviesList/moviesSlice";
import {
  Link,
  LinkItem,
  Links,
  LogoHeader,
  LogoWrapper,
  StyledInput,
  StyledLogo,
  StyledNavigation,
  Wrapper,
} from "./styled";

export const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <StyledNavigation>
      <Wrapper>
        <LogoWrapper>
          <StyledLogo />
          <LogoHeader>Movies Browser</LogoHeader>
        </LogoWrapper>
        <Links>
          <HashRouter>
            <LinkItem>
              <Link to="/" onClick={() => dispatch(fetchMovies())}>
                Movies
              </Link>
            </LinkItem>
            <LinkItem>
              <Link to="/">People</Link>
            </LinkItem>
          </HashRouter>
        </Links>
      </Wrapper>
      <StyledInput placeholder="Search for movies..." />
    </StyledNavigation>
  );
};

import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchPeopleResults } from "../../features/PeopleList/peopleSlice";
import { useReplaceURLParameters, useURLParameter } from "../../useURLParameters";
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
  const queryParamName = "search"
  const dispatch = useDispatch();
  const location = useLocation();
  const query = useURLParameter(queryParamName);
  const replaceURLParameters = useReplaceURLParameters();
  const onInputChange = (queryParamName, { target }) => {
    replaceURLParameters({
      key: queryParamName,
      value: target.value.trim() !== "" ? target.value : "",
    });
    dispatch(fetchPeopleResults(target.value));
  };

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
        <StyledInput
          onChange={onInputChange}
          value={query || ""}
          placeholder={`Search for ${location.pathname === "/Movies" ? "movies..." : "people..."}`}
        />
      </NavigationContainer>
    </StyledNavigation>
  );
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { Error } from "../../common/Error";
import { Header } from "../../common/Header";
import { Loading } from "../../common/Loading";
import { Pager } from "../../common/Pager";
import { StyledLink } from "../../common/StyledLink";
import { Tile } from "../../common/Tile";
import { useURLParameter } from "../../useURLParameters";
import {
  fetchPeople,
  selectPeople,
  selectStatus,
  selectTotalPeoplePages,
} from "./peopleSlice";

export const PeopleList = () => {
  const queryParamName = "search";
  const people = useSelector(selectPeople);
  const status = useSelector(selectStatus);
  const totalPeoplePages = useSelector(selectTotalPeoplePages);
  const pageParameter = +useURLParameter("page");
  const page = pageParameter < 1 || pageParameter > 500 ? 1 : pageParameter;
  const query = useURLParameter(queryParamName);

  console.log(status);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPeople({ page, query })), [dispatch, page, query]);

  return (
    status === "success" ?
      <>
        <Header title={query === null ? "Popular People" : `Search results for ${query}`} />
        <Container person>
          {people &&
            people.map(({ id, name, profile_path }) => {
              return (
                <StyledLink key={id} to={`/People/${id}`}>
                  <Tile person title={name} poster={profile_path} />
                </StyledLink>
              );
            })}
        </Container>
        <Pager page={page} totalPages={totalPeoplePages} />
      </> : status === "loading" ? <Loading /> : <Error />
  );
};

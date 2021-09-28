import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { Header } from "../../common/Header";
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
  const people = useSelector(selectPeople);
  const status = useSelector(selectStatus);
  const totalPeoplePages = useSelector(selectTotalPeoplePages);
  const pageParameter = +useURLParameter("page");
  const page = pageParameter < 1 || pageParameter > 500 ? 1 : pageParameter;

  console.log(status);
  console.log(people);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPeople({ page })), [dispatch, page]);

  return (
    <>
      <Header title={"Popular People"} />
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
    </>
  );
};

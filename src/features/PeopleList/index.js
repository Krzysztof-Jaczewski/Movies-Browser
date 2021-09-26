import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { Header } from "../../common/Header";
import { Pager } from "../../common/Pager";
import { Tile } from "../../common/Tile";
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

  console.log(status);
  console.log(people);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPeople()), [dispatch]);

  return (
    <>
      <Header title={"Popular People"} />
      <Container person>
        {people &&
          people.map(({ id, name, profile_path }) => {
            return <Tile person key={id} title={name} poster={profile_path} />;
          })}
      </Container>
      <Pager totalPages={totalPeoplePages} />
    </>
  );
};

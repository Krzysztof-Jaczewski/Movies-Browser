import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseImgUrl, size } from "../../ApiParameters";
import { Container } from "../../common/Container";
import { Header } from "../../common/Header";
import { Tile } from "../../common/Tile";
import { fetchPeople, selectPeople, selectStatus } from "./peopleSlice";

export const PeopleList = () => {
  const { results } = useSelector(selectPeople);
  const status = useSelector(selectStatus);

  console.log(status);
  console.log(results);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPeople()), [dispatch]);

  return (
    <>
      <Header title={"Popular People"} />
      <Container person>
        {results &&
          results.map((result) => {
            return (
              <Tile
                person
                key={result.id}
                title={result.name}
                poster={`${baseImgUrl}/${size}${result.profile_path}`}
              />
            );
          })}
      </Container>
    </>
  );
};

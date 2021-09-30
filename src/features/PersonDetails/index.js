import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Container } from "../../common/Container";
import { fetchPerson, selectPerson, selectPersonCredtis, selectStatus } from "./personSlice";
import { Tile } from "../../common/Tile";
import { Title } from "../../common/Tile/styled";
import { useGenres } from "../../fetchGenres";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";

export const PersonDetails = () => {
  const status = useSelector(selectStatus);
  const { id } = useParams();
  const { profile_path, name, birthday, place_of_birth, biography } =
    useSelector(selectPerson);
  const { crew, cast } = useSelector(selectPersonCredtis);
  console.log();
  console.log(id);
  const genres = useGenres();
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPerson({ id })), [dispatch, id]);
  const nameMovieGenres = (genre_ids) =>
    genres && genre_ids.map((tag) => genres.find(({ id }) => id === tag).name);
  return (
    status === "success" ?
      <>
        <Container details>
          <Tile
            details
            poster={profile_path}
            title={name}
            birthday={
              birthday &&
              `${birthday.slice(8, 10)}.${birthday.slice(5, 7)}.
          ${birthday.slice(0, 4)}`
            }
            additionalTitle={place_of_birth}
            biography={biography}
          />
        </Container>
        {cast && (
          <>
            <Container>
              <Title>Movies - Cast ({cast.length})</Title>
            </Container>
            <Container>
              {cast.map(
                ({
                  id,
                  poster_path,
                  title,
                  release_date,
                  genre_ids,
                  vote_average,
                  vote_count,
                }) => {
                  return (
                    <Tile
                      key={id}
                      poster={poster_path}
                      title={title}
                      subtitle={release_date.slice(0, 4)}
                      genres={nameMovieGenres(genre_ids)}
                      rate={vote_average}
                      votes={vote_count}
                    />
                  );
                }
              )}
            </Container>
          </>
        )}
        {crew && (
          <>
            <Container>
              <Title>Movies - Crew ({crew.length})</Title>
            </Container>
            <Container>
              {crew.map(
                ({
                  id,
                  poster_path,
                  title,
                  release_date,
                  genre_ids,
                  vote_average,
                  vote_count,
                }) => {
                  return (
                    <Tile
                      key={id}
                      poster={poster_path}
                      title={title}
                      subtitle={release_date}
                      genres={nameMovieGenres(genre_ids)}
                      rate={vote_average}
                      votes={vote_count}
                    />
                  );
                }
              )}
            </Container>
          </>
        )}
      </> : status === "loading" ? <Loading /> : <Error />);
};

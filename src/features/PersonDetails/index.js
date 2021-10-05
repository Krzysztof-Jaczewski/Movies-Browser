import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchPerson,
  selectPerson,
  selectPersonCredtis,
  selectStatus,
} from "./personSlice";
import { Tile } from "../../common/Tile";
import { useGenres } from "../../fetchGenres";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";
import { Details } from "../../common/Details";
import { nanoid } from "@reduxjs/toolkit";
import { StyledLink } from "../../common/StyledLink";
import { Container } from "../../common/Container";
import { Header } from "../../common/Header";

export const PersonDetails = () => {
  const status = useSelector(selectStatus);
  const { id } = useParams();
  const { profile_path, name, birthday, place_of_birth, biography } =
    useSelector(selectPerson);
  const { crew, cast } = useSelector(selectPersonCredtis);
  const genres = useGenres();
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPerson({ id })), [dispatch, id]);
  const nameMovieGenres = (genre_ids) =>
    genres && genre_ids.map((tag) => genres.find(({ id }) => id === tag).name);
  return status === "success" ? (
    <>
      <Details
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

      {cast && (
        <>
          <Header title={`Movies - Cast (${cast.length})`} />
          <Container>
            {cast.map(
              ({
                poster_path,
                title,
                release_date,
                genre_ids,
                vote_average,
                vote_count,
                character,
                id,
              }) => {
                return (
                  <StyledLink key={nanoid()} to={`/Movies/${id}`}>
                    <Tile
                      poster={poster_path}
                      title={title}
                      subtitle={
                        release_date &&
                        `${character} (${release_date.slice(0, 4)})`
                      }
                      genres={nameMovieGenres(genre_ids)}
                      rate={vote_average}
                      votes={vote_count}
                    />
                  </StyledLink>
                );
              }
            )}
          </Container>
        </>
      )}
      {crew && (
        <>
          <Header title={`Movies - Crew  (${crew.length})`} />
          <Container>
            {crew.map(
              ({
                poster_path,
                title,
                job,
                release_date,
                genre_ids,
                vote_average,
                vote_count,
                id,
              }) => {
                return (
                  <StyledLink key={id} to={`/Movies/${id}`}>
                    <Tile
                      key={nanoid()}
                      poster={poster_path}
                      title={title}
                      subtitle={
                        release_date && `${job} (${release_date.slice(0, 4)})`
                      }
                      genres={nameMovieGenres(genre_ids)}
                      rate={vote_average}
                      votes={vote_count}
                    />
                  </StyledLink>
                );
              }
            )}
          </Container>
        </>
      )}
    </>
  ) : status === "loading" ? (
    <Loading />
  ) : (
    <Error />
  );
};

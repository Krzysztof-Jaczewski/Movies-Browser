import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, selectMovie, selectMovieCredits, selectStatus } from "./movieSlice";
import { useEffect } from "react";
import { Backdrop } from "../../common/Backdrop";
import { Container } from "../../common/Container";
import { MovieInfo } from "../../common/MovieInfo";
import { Tile } from "../../common/Tile";
import { Title } from "../../common/Tile/styled";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";
import { StyledLink } from "../../common/StyledLink";
import { nanoid } from "@reduxjs/toolkit";

export const MovieDetails = () => {
  const { id } = useParams();
  const { 
    backdrop_path, 
    title, 
    overview, 
    release_date, 
    vote_average, 
    vote_count, 
    production_countries, 
    poster_path, 
    genres } = useSelector(selectMovie);
  const { cast, crew } = useSelector(selectMovieCredits);

  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchMovie({ id })), [dispatch, id]);

  return (
    status === "success" ?
      <>
        <Backdrop
          title={title}
          poster={backdrop_path}
          rate={vote_average}
          votes={vote_count}
        />
        <MovieInfo
          poster={poster_path}
          title={title && title.slice(0)}
          description={overview}
          date={release_date && release_date.slice(0, 4)}
          fullDate={release_date && `${release_date.slice(8, 10)}.${release_date.slice(5, 7)}.${release_date.slice(0, 4)}`}
          rate={vote_average}
          votes={vote_count}
          fullCountryName={production_countries && `${production_countries.map(({ name }) => name)}`}
          shortCountryName={production_countries && `${production_countries.map(({ iso_3166_1 }) => iso_3166_1)}`}
          genres={genres && genres.map(({name}) => name)}
        />
        {cast && (
          <>
            <Title movie>Cast</Title>
            <Container person>
              {cast.map(
                ({
                  id,
                  name,
                  profile_path,
                  character,
                }) => {
                  return (
                    <StyledLink key={id} to={`/People/${id}`}>
                      <Tile
                        person
                        key={nanoid()}
                        poster={profile_path}
                        character={character}
                        title={name}
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
            <Title movie>Crew</Title>
            <Container person>
              {crew.map(
                ({
                  name,
                  profile_path,
                  department,
                  id,
                }) => {
                  return (
                    <StyledLink key={id} to={`/People/${id}`}>
                      <Tile
                        person
                        key={nanoid()}
                        poster={profile_path}
                        character={department}
                        title={name}
                      />
                    </StyledLink>
                  );
                }
              )}
            </Container>
          </>
        )}
      </> : status === "loading" ? <Loading /> : <Error />
  );
};

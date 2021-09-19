import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseImgUrl, size } from "../../ApiParameters";
import { Container } from "../../common/Container";
import { Header } from "../../common/Header";
import { Tile } from "../../common/Tile";
import { useGenres } from "../../fetchGenres";
import { fetchMovies, selectMovies, selectStatus } from "./moviesSlice";

export const MoviesList = () => {
  const { results } = useSelector(selectMovies);
  const status = useSelector(selectStatus);
  const genres = useGenres();

  console.log(status);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchMovies()), [dispatch]);
  const nameMovieGenres = (array) => {
    const movieGenresList = [];
    array.map(
      (id) =>
        genres &&
        genres.filter((genre) =>
          id === genre.id ? movieGenresList.push(genre.name) : ""
        )
    );
    return movieGenresList;
  };

  return (
    <>
      <Header title={"Popular movies"} />
      <Container>
        {results &&
          results.map((result) => {
            return (
              <Tile
                key={result.id}
                poster={`${baseImgUrl}/${size}${result.poster_path}`}
                title={result.title}
                subtitle={result.release_date.slice(0, 4)}
                genres={nameMovieGenres(result.genre_ids)}
                rate={result.vote_average}
                votes={result.vote_count}
              />
            );
          })}
      </Container>
    </>
  );
};

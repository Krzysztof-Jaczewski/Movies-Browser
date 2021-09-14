import { Container } from "../../common/Container";
import { Tile } from "../../common/Tile";
import { baseImgUrl, size } from "../ApiParameters";
import { useMoviesApi } from "../fetchMoviesPopularApi";
import { useGenres } from "../fetchGenres";

export const MovieList = () => {
  const results = useMoviesApi();
  const genres = useGenres();

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
  );
};

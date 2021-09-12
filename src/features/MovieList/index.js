import { Container } from "../../common/Container";
import { Tile } from "../../common/Tile";
import { useMoviesApi } from "../fetchApi";
import { useGenres } from "../fetchGenres";

export const MovieList = () => {
  const results = useMoviesApi();
  console.log(results);
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";

  const genres = useGenres();

  return (
    <Container>
      {results &&
        results.map((result) => {
          const MovieGenres = genres && genres.map((genre) => genre.name);
          return (
            <Tile
              key={result.id}
              poster={`${baseImgUrl}/${size}${result.poster_path}`}
              title={result.title}
              subtitle={result.release_date}
              genres={MovieGenres}
              rate={result.vote_average}
              votes={result.vote_count}
            />
          );
        })}
    </Container>
  );
};

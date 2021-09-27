import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, selectMovie } from "./movieSlice";
import { useEffect } from "react";
import { Backdrop } from "../../common/Backdrop";
import { Container } from "../../common/Container";
import { MovieInfo } from "../../common/MovieInfo";
import { Tile } from "../../common/Tile";
import { fetchCredits, selectCredits, selectStatus } from "./creditsSlice";

function MovieDetails({file_path}) {
  const { id } = useParams();
  const movie = useSelector(selectMovie);
  const credits = useSelector(selectCredits);
  const status = useSelector(selectStatus);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchCredits()), [dispatch]);

  return (
    
  <>
    <Backdrop
      title="Mulan long title"
      key={id}
      backdrops={file_path}
    />
      <MovieInfo />
      <Container person>
      <h2>Cast</h2>
      {credits &&
          credits.map(({ id, name, profile_path, character }) => {
            return <Tile person key={id} title={name} poster={profile_path} character={character} />;
          })}
      <h2>Crew</h2>

    </Container>

  </>
  );
}; 

export default MovieDetails;
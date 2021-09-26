import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, selectMovie } from "./movieSlice";
import { BigStarIcon, LongTitle, TopBackground, TopPoster, Wrapper } from "./styled";
import { baseImgUrl, size } from "../../ApiParameters";
import { Caption, Rate, Ratings } from "../../common/Tile/styled";
import { useEffect } from "react";

function MovieDetails({poster, title, votes, rate, person}) {
  const { id } = useParams();
  const movie = useSelector(selectMovie);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchMovie()), [dispatch]);

  return (
  <>
    <Wrapper>
      {movie &&
                movie.map(
                  ({
                    id,
                    poster_path,
                    title,
                    release_date,
                    vote_average,
                    vote_count,
                  }) => {
                    return (
                      <TopBackground>
                      <TopPoster src={`${baseImgUrl}${size}${poster={poster_path}}`} alt="" />
                        <LongTitle>
                          {title}
                        </LongTitle>
                        {votes={vote_count} ? (
                        <Ratings>
                          <BigStarIcon />
                            <Rate>{rate={vote_average}}</Rate>
                            <Caption>{votes=vote_count} votes</Caption>
                        </Ratings>
                      ) : (
                        <Ratings>
                            <Caption>{person ? "" : "No votes yet"}</Caption>
                        </Ratings>
                        )}
                    </TopBackground>
                    );
                })};
    </Wrapper>
  </>
  );
};
   

export default MovieDetails;
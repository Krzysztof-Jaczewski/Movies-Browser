import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, getMovieById } from "./movieSlice";
import { BigStarIcon, LongTitle, TopBackground, TopPoster, Wrapper } from "./styled";
import { baseImgUrl, size } from "../../ApiParameters";
import { Caption, Rate, Ratings } from "../../common/Tile/styled";
import { useEffect } from "react";

function MovieDetails({poster, title, votes, rate, person}) {
  const { id } = useParams();
  const movie = useSelector(state => getMovieById(state, id));

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchMovie()), [dispatch]);

  return (
  <>
    <Wrapper>
      <TopBackground>
         <TopPoster src={`${baseImgUrl}${size}${poster}`} alt="" />
          <LongTitle>
             {title}
              </LongTitle>
                {votes} ? (
                  <Ratings>
                    <BigStarIcon />
                      <Rate>{rate}</Rate>
                        <Caption>{votes}</Caption>
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
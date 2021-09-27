import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, selectMovie } from "./movieSlice";
import { baseImgUrl, baseSiteUrl, size } from "../../ApiParameters";
import { Caption, Rate, Ratings } from "../../common/Tile/styled";
import { useEffect } from "react";
import { Backdrop } from "../../common/Backdrop";

function MovieDetails() {
  const { id } = useParams();
  const movie = useSelector(selectMovie);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchMovie()), [dispatch]);

  return (
    
  <>
<Backdrop
title="Mulan long title"
key={id}
/>
  </>
  );
}; 

export default MovieDetails;
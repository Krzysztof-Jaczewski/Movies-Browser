import axios from "axios";
import { useEffect, useState } from "react";

export const useGenres = () => {
  const [genre, setGenre] = useState();

  const API_Key = "f7171889d3718d0e9b300e81d35e65ae";
  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_Key}`
        );
        const result = await response.data.genres;
        console.log(result);
        setGenre(result);
      } catch {
        setGenre({ state: "error" });
      }
    };
    getGenres();
  }, []);

  return genre;
};

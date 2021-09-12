import axios from "axios";
import { useEffect, useState } from "react";

export const useMoviesApi = () => {
  const [api, setApi] = useState();

  const API_Key = "f7171889d3718d0e9b300e81d35e65ae";
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`
        );
        const result = await response.data;
        setApi(result.results);
      } catch {
        setApi({ state: "error" });
      }
    };
    getApi();
  }, []);

  return api;
};

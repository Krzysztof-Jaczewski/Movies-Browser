import axios from "axios";
import { useEffect, useState } from "react";
import { API_Key, baseSiteUrl, language, page } from "./ApiParameters";

export const useMoviesApi = () => {
  const [api, setApi] = useState();
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          `${baseSiteUrl}movie/popular?api_key=${API_Key}&language=${language}&page=${page}`
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

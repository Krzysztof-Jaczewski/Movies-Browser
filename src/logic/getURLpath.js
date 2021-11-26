export const API_Key = "f7171889d3718d0e9b300e81d35e65ae";
export const language = "en-US";
export const baseSiteUrl = "https://api.themoviedb.org/3/";
export const baseImgUrl = "https://image.tmdb.org/t/p/";
export const size = "w500";
export const sizeBackdrop = "w1280";

export const getURLpath = (path, page, query) =>
  `${baseSiteUrl}${path}?api_key=${API_Key}&language=${language}&page=${page}&query=${query}`;

export const getDetailsURLpath = (path) =>
  `${baseSiteUrl}${path}?api_key=${API_Key}&language=${language}`;

export const getPosterURLpath = (poster) => `${baseImgUrl}${size}/${poster}`;

import { API_BASE_URL, API_OPTIONS } from "../utils/constants.js";

export const fetchMovies = async (query = "") => {
  const url = query
    ? `${API_BASE_URL}/search/movie?query=${query}`
    : `${API_BASE_URL}/trending/movie/week`;
  const response = await fetch(url, API_OPTIONS);
  return response.json();
};

export const fetchMovieDetails = async (id) => {
  const url = `${API_BASE_URL}/movie/${id}`;
  const response = await fetch(url, API_OPTIONS);
  return response.json();
};

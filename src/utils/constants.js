export const API_BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDRlNzNiN2YwOTcxNTg0YmE4OTc5MWQ2YjVmODZjYiIsIm5iZiI6MTczOTgwOTI3NC40NDksInN1YiI6IjY3YjM2MWZhYTQwZDA0YmM5MzlmYjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hFYLIzV38YoTrxSwqgw31teFrYZuZLIe-TFXAXE7YKk";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

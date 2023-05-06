import { API_KEY } from "./app/config";


export const DataMoviesSlider = [
  {
    MovieKind: "Top Rated",
    api: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`,
  },
  {
    MovieKind: "Action",
    api: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28&page=`,
  },
  {
    MovieKind: "Animation",
    api: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16&page=`,
  },
  {
    MovieKind: "Fantasy",
    api: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14&page=`,
  },
  {
    MovieKind: "Music",
    api: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10402&page=`,
  },
];


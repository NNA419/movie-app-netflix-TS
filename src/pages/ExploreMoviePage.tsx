import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DataMoviesSlider } from '../DataMoviesSlider';
import apiService from '../app/apiService';
import { IMG_URL } from '../app/config';
import PaginationPage from '../components/PaginationPage';
import './ExploreMoviePage.css';

type Movie = {
  id: number;
  backdrop_path: string;
  title: string;
}

type Params = {
moviekindId: string;
};

function ExploreMoviesPage({ api } : {api:string}) {
  const param = useParams();
  console.log(param);

   const [movies, setMovies] = useState<Movie[]>([]);
   const [page, setPage] = useState<number>(1);
   const [totalPage, setTotalPage] = useState <number>(1);

  const navigate = useNavigate();

  console.log(movies);

  const DataMovieExplore = DataMoviesSlider.find((e) => {
    if (e.MovieKind === param.moviekindId) {
      return e;
    }
  })

  const handleImgClick = (movie : any) => {
    console.log(movie)
    navigate(`/movie/${movie.id}`);
  }


  console.log(DataMovieExplore);

  console.log(page);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await apiService.get(`${DataMovieExplore?.api }${page}`);
      setMovies(response.data.results);
      setTotalPage(
        response.data.total_pages > 500 ? 500 : response.data.total_pages );
    };

    fetchMovies();
  }, [page]);

  
  return (
    <div className="explore-movie-container">
      <div className="title-expl-wrapper">
        <h1 className="main-title">{param.moviekindId}</h1>
      </div>
      <div className="movie-card-wrapper">
        {movies.map((movie) => (
          <div className="movie-card">
            <img
              className="movie-expl-img"
              src={`${IMG_URL}${movie.backdrop_path}`}
              alt="movies img"
              onClick={() => handleImgClick(movie)}
            ></img>
            <p className="movie-expl-title">{movie.title}</p>
          </div>
        ))}
      </div>
          <PaginationPage page={page} totalPage={totalPage} setPage={setPage}/>
    </div>
  );
}

export default ExploreMoviesPage
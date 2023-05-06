import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import apiService from '../app/apiService';
import { API_KEY, IMG_URL } from '../app/config';
import PaginationPage from '../components/PaginationPage';
import "./SearchPage.css"

interface Movie{
    id: number;
    title: string;
    backdrop_path: string;
}

function SearchPage() {
    const [dataSearch, setDataSearch] = useState<Movie[]>([]);
    const [searchParam, setSearchParam] = useSearchParams();
    const navigate = useNavigate();
    const searchQuery = searchParam.get("movie");

    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1);
  
    useEffect(() => {
    const fetchMovies = async () => {
      const response = await apiService.get(
        `/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
      );
      setDataSearch(response.data.results);
      setTotalPage(response.data.total_pages);
      console.log(response);
    };
    fetchMovies();

    console.log(dataSearch);
     }, [searchQuery , page]);
     
    function handleImgClick(movie : Movie) : void {
        navigate(`/movie/${movie.id}`)
    }

  return (
    <div className="search-container">
      <div className="movies-search-wrapper">
        <div className="title-wrapper">
          <h1 className="main-title-search">Search Page</h1>
        </div>
        {dataSearch.map((movie) => (
          <div className="movie-search-card">
            <img
              onClick={() => handleImgClick(movie)}
              alt="movie img "
              className="movies-search-img"
              src={`${IMG_URL}${movie.backdrop_path}`}
            />
            <p className="movie-search-title">{movie.title}</p>
          </div>
        ))}
      </div>
      <PaginationPage page={page} totalPage={totalPage} setPage={setPage}/>
    </div>
  );
}

export default SearchPage
import React, { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, A11y } from "swiper";
import { IMG_URL } from "../app/config";
import { useNavigate } from "react-router-dom";


interface MoviesSliderProps {
    MovieKind: string;
    api: string;
}

function MoviesSlider({ MovieKind, api }: MoviesSliderProps) {
  const [showExploreAll, setShowExploreAll] = useState<boolean> (false);
  const [dataMovies, setDataMovies] = useState<any[]> ([]);
  const [isLoop, setIsLoop] = useState<boolean> (false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setShowExploreAll(true);
  };

  const handleMouseLeave = () => {
    setShowExploreAll(false);
  };

  function handleExploreClick() {
    navigate(`/moviekind/${MovieKind}`);
  }

  function handleMovieClick(item : any) {
    console.log(item);
    navigate(`/movie/${item.id}`);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(api);
        setDataMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // console.log(dataTopRate);
  // console.log(intervalRef);

  return (
    <div className="movies-list-container">
      <div
        className="Explore-moviekind-wrapper"
        onMouseLeave={handleMouseLeave}
      >
        <div className="" onMouseEnter={handleMouseEnter}>
          <h1 className="movie-kind-name">{MovieKind}</h1>
        </div>
        {showExploreAll && (
          <button className="Explore-btn" onClick={handleExploreClick}>
            Explore All
          </button>
        )}
      </div>

      <Swiper
        speed={900}
        slidesPerGroup={6}
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation, A11y]}
        loop={isLoop}
        onSlideChange={(e : any) => {
          if (e.a11y.clicked !== false) {
            setIsLoop(true);
          }
        }}
        onSwiper={(e) => {
          console.log("e2", e.a11y);
        }}
        breakpoints={{
          380: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        className="movies-list"
      >
        {dataMovies.map((item) => {
          return (
            <SwiperSlide key={item.id} onClick={() => handleMovieClick(item)}>
              <img
                alt=""
                className="img-movie"
                src={`${IMG_URL}${item.backdrop_path}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MoviesSlider;
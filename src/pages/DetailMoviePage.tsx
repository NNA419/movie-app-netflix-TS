import { Box, Container, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../app/apiService";
import { API_KEY, DETAIL_MOVIE_URL, IMG_URL } from "../app/config";
import "./DetailMoviePage.css";

import ShareIcon from "@mui/icons-material/Share";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const style = {
  position: "absolute",
  top: "52%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

function DetailMoviePage() {
  const [dataDetail, setDataDetail] = useState<any>({});
  const [videos, setVideos] = useState<any>({});
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const param = useParams();

  const api = `${DETAIL_MOVIE_URL}/${param.movieId}?api_key=${API_KEY}&language=en-US`;

  const apiVideos = `${DETAIL_MOVIE_URL}/${param.movieId}?api_key=${API_KEY}&append_to_response=videos`;

  const IframeVideo = videos?.videos?.results?.find((e : any) => {
    if (
      e.name === "Official Trailer" ||
      e.name === "Official US Trailer" ||
      e.name === "Trailer" ||
      e.name.includes(e.name)
    ) {
      return e;
    }
  });
  console.log(videos?.videos?.results);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(api);
        setDataDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [api]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(apiVideos);
        setVideos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const detailCompanies = dataDetail?.production_companies;
  // console.log(detailCompanies);

  const movieGenres = dataDetail?.genres;
  // console.log(movieGenres);

  const languages = dataDetail?.spoken_languages;
  // console.log(languages);

  const productionCountries = dataDetail?.production_countries;

  return (
    <div className="main-detail-page-container detail-container">
      <Box
        className="total-info-wrapper"
        sx={{
          "::before": {
            backgroundImage: `url(${IMG_URL + dataDetail.backdrop_path})`,
          },
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="detail-context">
            <h1> {dataDetail.title || dataDetail.name}</h1>
            <h4>{dataDetail.release_date || dataDetail.first_air_date}</h4>
          </div>

          <div className="poster-backdrop-wrapper">
            <div className="detail-poster">
              <img src={IMG_URL + dataDetail.poster_path} alt="" />
            </div>

            <div className="rightside-info">
              <div className="main-deital">
                <div className="detail-heading">
                  <div className="detail-rate">
                    <div className="vote_average">
                      <span className="voted">
                        {Math.floor(dataDetail.vote_average)}/10
                      </span>
                      <span className="imdb">IMDb</span>
                    </div>
                    <div className="add_heart">
                      <div className="btn-wrapper">
                        <button className="add_heart_btns add">
                          <AddIcon id="icon_add" />
                        </button>
                        {/* <p>+ My List</p> */}
                      </div>
                      <div className="btn-wrapper">
                        <button className="add_heart_btns bell-btn">
                          <NotificationsNoneIcon id="bell-icon" />
                        </button>
                        {/* <p>Remind Me</p> */}
                      </div>
                      <div className="btn-wrapper">
                        <button className="add_heart_btns heart">
                          <FavoriteIcon id="icon_heart" />
                        </button>
                        {/* <p>Like</p> */}
                      </div>
                    </div>
                  </div>

                  <div className="more-info-detail">
                    <div className="info-area">
                      <p>{`Genres :`}</p>
                      {movieGenres !== undefined &&
                        movieGenres.map((e: {name:string}, index : number) => (
                          <span className="companies-name">{`${e.name} , `}</span>
                        ))}
                    </div>

                    <div className="info-area">
                      <p>{`Spoken Languages :`}</p>
                      {languages !== undefined &&
                        languages.map((e :{name:string}, index : number) => (
                          <span className="companies-name">{`${e.name} , `}</span>
                        ))}
                    </div>

                    <div className="info-area">
                      <p>{`Production countries :`}</p>
                      {productionCountries !== undefined &&
                        productionCountries.map((e :{name:string}, index :number) => (
                          <span className="companies-name">{`${e.name} , `}</span>
                        ))}
                    </div>

                    <div className="info-area">
                      <p>{`Companies :`}</p>
                      {detailCompanies !== undefined &&
                        detailCompanies.map((e: {name:string}, index:number) => (
                          <span className="companies-name">{`${e.name} , `}</span>
                        ))}
                    </div>

                    <div className="main_icon">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                        }}
                      >
                        <button
                          className="icon_playarrowicon"
                          onClick={handleOpen}
                        >
                          <PlayArrowIcon id="icon_play" /> Watch The Trailer
                        </button>
                        <span className="span-title"></span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <button className="icon_playarrowicon">
                          <ShareIcon id="icon_share" /> Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="info-detail-wrapper">
            <div className="leftside-info">
              <div className="more-info-wrapper"></div>
              <div className="info-area">
                <p>{`Genres :`}</p>
                {movieGenres !== undefined &&
                  movieGenres.map((e : {name: string}, index : number) => (
                    <span className="companies-name">{`${e.name} , `}</span>
                  ))}
              </div>
              <p>{dataDetail.overview}</p>
            </div>
          </div>
        </div>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <iframe
            style={{ zIndex: 999, position: "relative" }}
            width="1200px"
            height="600px"
            title="YouTube video player"
            src={`https://www.youtube.com/embed/${IframeVideo?.key}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Box>
      </Modal>
    </div>
  );
}

export default DetailMoviePage;

import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import video from "../images/Trailer.mp4";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PauseIcon from "@mui/icons-material/Pause";


function MovieIntro() {

  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  function handlePlaying() {
    setIsPlaying(!isPlaying);
  }

  function handleMute() {
    setIsMuted(!isMuted);
  }
    
  return (
    <div className="intro-container">
      <div className="intro-wrapper">
        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          url={video}
          playing={isPlaying}
          muted={isMuted}
          volume={1}
          loop={true}
        ></ReactPlayer>

        <div className="introduce-movie-trailer">
          <div className="img-des">
            <img
              className="img-unlocked"
              alt="logo movie unlocked"
              src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcC2pLb6Ie-olHsnc50K5rzJFfCID5ZK5TKvCA4SJeCvYcvZmxzyzhWAsi8kzuefq1bbMPWpnuDCNXLrHVUgl4ITe95JfnuAb2wn7Qc8Je8-Wvk48jUtXNT5RjEso5CfAaLLzCjfF7-JVcmmyuqmFqbksk46jy0T8DQV76cBi2vCvI7UG1Ok.webp?r=28d"
            />
            <span className="des-unlock">
              Your phone has all your secrets. Someone is pretending to be you
              Who's the stranger inside your phone? UNLOCKED.
            </span>
          </div>
          <div className="btn-play-moreinfo">
            <button
              onClick={handlePlaying}
              className="play-btn"
            >
              {isPlaying ? (
                <PauseIcon id="play-icon" />
              ) : (
                <PlayArrowIcon id="play-icon" />
              )}
              Play
            </button>
            <button className="more-info-btn">
              <ErrorOutlineIcon id="info-icon" /> More Info
            </button>
          </div>
        </div>
        <div className="tag-mute-wrapper">
          <button
            className="mute-btn"
            onClick={handleMute}>
            {isMuted ? (
              <VolumeOffIcon id="volume-icon" />
            ) : (
              <VolumeUpIcon id="volume-icon" />
            )}
          </button>
          <div className="tag-wrapper">
            <span className="tag13">13+</span>
          </div>
        </div>
        <div className='background-cover'></div>
      </div>
    </div>
  );
}

export default MovieIntro
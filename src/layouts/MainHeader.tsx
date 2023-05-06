import React, { useState } from 'react';
// import LogoNexflix from "../images/Logo_netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from 'react-router-dom';
import useAuth from '../components/hook/useAuth';
import './MainHeader.css';

function MainHeader() {
  const [scroll, setScroll] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<string>("none");
  const [keyWord, setKeyword] = useState<string>("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleGoHome = () => {
  navigate("/")
  }

  interface KeyChangeProps {
    target: {
      value: string;
    };
  }

  const handleKeyChange = (e: KeyChangeProps) => {
    let keywords = e.target.value;
    if (keywords) {
      navigate(`/search?movie=${keywords.trim()}`)
    }
    console.log('keyword', keywords)
  }

    const handleSignIn = () => {
    navigate("/Login")
  }

    const handleScrolly = () : void => {
    const scrolly: number = window.scrollY;
    setScroll(scrolly);
  }
  
  window.addEventListener("scroll", handleScrolly)

  return (
<div
      className="napbar-container"
      style={
        scroll < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "black" }
      }
    >
      <div className="header-container">
        <div className="logo-menu">
          <div className="logo-wrapper">
            {/* <img src={LogoNexflix} alt="Netflix's logo" onClick={handleGoHome}/> */}
          </div>

          <div className="menu-wrapper">
            <div>Home</div>
            <div>TVShows</div>
            <div>Movies</div>
            <div>New & Popular</div>
            <div>My List</div>
          </div>

          <div>
            <button
              onClick={() => {
                if (isClicked === "none") {
                  setIsClicked("flex");
                } else {
                  setIsClicked("none");
                }
              }}
              id="basic-button"
            >
              Browse
              <ArrowDropDownIcon />
            </button>
            <div className="browse-list" style={{ display: isClicked }}>
              <button className="btn-list" onClick={handleGoHome}>Home</button>
              <button className="btn-list">TV Shows</button>
              <button className="btn-list">Movies</button>
              <button className="btn-list">New & Popular </button>
              <button className="btn-list">My List</button>
              <button className="btn-list">Brose by Language</button>
            </div>
          </div>
        </div>

        <div className="icon-wrapper">
          <div className="search-wrapper">
            <SearchIcon className="search-icon" />
            <input onChange={handleKeyChange} className="input-search" type="text" placeholder="search" />
          </div>

          <div className="dvd">DVD</div>

          <button className="notification-icon">
            <NotificationsNoneIcon />
          </button>
          {auth?.state?.user? (

            <div>
              <span className='user-email'>{auth.state.user.email}</span>
              <button className="sign-in">
                Sign out
              </button>
            </div>
              
          ) : (
            <button onClick={handleSignIn} className="sign-in">
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainHeader
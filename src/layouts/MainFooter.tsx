import React from 'react';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import './MainFooter.css';

function MainFooter() {
  const FooterOptionList = [
    {
      linkTitle: ["Audio Description", "Investor Relations", "Legal Notices"],
    },
    {
      linkTitle: ["Help Center", "Jobs", "Cookie Preferences"],
    },
    {
      linkTitle: ["Gift Cards", "Term of Use", "Corporate Information"],
    },
    {
      linkTitle: ["Media Center", "Privacy", "Contact Us"],
    },
  ];
    return (
      <div className="main-footer-container">
        <div className="footer-container">
          <div className="listIcon-wrapper">
            <div className="footer-icon-wrapper">
              <button>
                <FacebookIcon />
              </button>
              <button>
                <InstagramIcon />
              </button>
              <button>
                <TwitterIcon />
              </button>
              <button>
                <YouTubeIcon />
              </button>
            </div>
            <div className="footer-menu-wrapper">
              {FooterOptionList.map((e) => {
                return (
                  <ul className="title-list-footer">
                    <li className='title-footer'>
                      {e.linkTitle.map((title, index) => {
                        return <a href="#" key={index} >{title}</a>;
                      })}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
          <button className="Service-code-btn">Service Code</button>
          <div className="copy-right"> &#169; 1997-2023 Netflix,Inc.</div>
        </div>
      </div>
    );
}

export default MainFooter
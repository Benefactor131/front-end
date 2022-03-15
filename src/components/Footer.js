import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container_logos">
        <ul className="footer_logos">
          <li style={{paddingLeft: 20, paddingRight: 0}}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FacebookRoundedIcon
                style={{
                  backgroundColor: "#4cafff",
                  color: "white",
                  fontSize: 28,
                  padding: 3,
                  border: "1px solid #4cafff",
                  borderRadius: 100,
                }}
              />
            </a>
          </li>
          <li style={{paddingLeft: 5}}>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <TwitterIcon
                style={{
                  backgroundColor: "#4cafff",
                  color: "white",
                  fontSize: 28,
                  padding: 3,
                  border: "1px solid #4cafff",
                  borderRadius: 100,
                }}
              />
            </a>
          </li>
          <li style={{paddingLeft: 5}}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <InstagramIcon
                style={{
                  backgroundColor: "#4cafff",
                  color: "white",
                  fontSize: 28,
                  padding: 3,
                  border: "1px solid #4cafff",
                  borderRadius: 100,
                }}
              />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer_declarations">· Privacy · Terms · Sitemap</p>
      <p className="footer_copyright">
        © 2022 Bairbnb, Inc. No rights reserved
      </p>
    </div>
  );
}

export default Footer;

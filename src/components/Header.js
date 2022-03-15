import React from "react";
import "../assets/css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown.js";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <nav className={"header"}>
        <div className="header_left">
          <div>
            <img onClick={() => navigate("/")} className="header_icon" src="/Logo.svg" alt="logo" />
          </div>
        </div>
        <div className="header_center">
          <input type="text" />
          <SearchIcon />
        </div>
        <div className="header_right">
          <div className="first_part">
            <div>
              <div style={{cursor: "pointer"}} onClick={() => navigate("/property")}>Vacation Properties</div>
            </div>
            <div>
              <LanguageIcon style={{cursor: "pointer"}} />
            </div>
          </div>
          <div className="second_part">
            <Dropdown/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

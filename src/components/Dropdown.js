import { useState } from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import "../assets/css/Dropdown.css";

function Dropdown() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <span className="nav_icon_button" onClick={() => setOpen(!open)}>
            <div className="nav_icon_left">
              <MenuIcon />
            </div>
            <div className="nav_icon_right">
              <AccountCircleIcon />
            </div>
          </span>
          {open && (
            <div className="dropdown" style={{ height: 100 }}>
              <div className="menu">
                <Button
                  onClick={() => navigate("/customer/register")}
                  style={{
                    height: 50,
                    width: 150,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    transition: "background var(--speed)",
                    padding: "0.5rem",
                    color: "black",
                  }}
                >
                  Sign-up
                </Button>
              </div>
              <div className="menu">
                <Button
                  onClick={() => navigate("/login")}
                  style={{
                    height: 50,
                    width: 150,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    transition: "background var(--speed)",
                    padding: "0.5rem",
                    color: "black",
                  }}
                >
                  Login
                </Button>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Dropdown;

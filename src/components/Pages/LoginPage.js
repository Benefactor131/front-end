import Header from "../Header";
import Footer from "../Footer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/RegistrationForm.css";

const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Header />
      <div className="form-container">
        <span className="close-btn" onClick={() => navigate(`/`)}>
          ×
        </span>
        <div className="form-content-left">
          <img
            className="form-img"
            src="https://www.svgrepo.com/show/331468/login.svg"
            alt=""
          />
        </div>
        <div className="form-content-right">
          <form  className="form" noValidate>
            <h1 style={{ display: "flex", justifyContent: "center" }}>
              Login Form
            </h1>
            <div className="form-inputs">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={() => navigate(`/`)} className="form-input-btn" type="submit">
              Login
            </button>
            <span className="form-input-login">
              Don't have an account?
              <div
                style={{ cursor: "pointer", color: "lightblue" }}
                onClick={() => navigate(`/customer/register`)}
              >
                Register here
              </div>
            </span>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Form;

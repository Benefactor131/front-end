import Header from "../Header";
import Footer from "../Footer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/RegistrationForm.css";

const Form = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // const [firstNameError, setFirstNameError] = useState("");
  // const [lastNameError, setLastNameError] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    const data = { firstName, lastName, email, password };

    try {
      let res = await fetch(
        `https://bairbnb-back-end.herokuapp.com/customer/register`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );

      let resJson = await res.json();

      console.log(resJson.data);
      console.log(resJson.message);
      
      // const msgs = resJson.data;

      // if (msgs[0].message === "You must provide the first name.") {
      //   setFirstNameError(msgs[0].message);
      // } else{
      //   setFirstNameError(".")
      // }
      // if (msgs[1].message === "You must provide the last name.") {
      //   setLastNameError(msgs[1].message);
      // }else{
      //   setLastNameError(" ")
      // }
      // if (msgs[2].message === "You must provide the email.") {
      //   setEmailError(msgs[2].message);
      // }else{
      //   setEmailError(" ")
      // }
      // if (msgs[3].message === "You must provide the password.") {
      //   setPasswordError(msgs[3].message);
      // }else {
      //   setPasswordError(" ")
      // }

      if (resJson.message === "The customer was not created.") {
        setError("User was not created.");
      } else {
        setMessage("User created successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
            src="https://www.svgrepo.com/show/240415/programmer.svg"
            alt=""
          />
        </div>
        <div className="form-content-right">
          <form onSubmit={handleSubmit} className="form" noValidate>
            <h1 style={{ display: "flex", justifyContent: "center" }}>
              Registration Form
            </h1>
            <div className="form-inputs">
              <label className="form-label">First Name</label>
              <input
                className="form-input"
                name="first-name"
                type="text"
                value={firstName}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              {/* <div
                style={{
                  color: "red",
                  paddingTop: 10,
                  fontSize: 14,
                }}
              >
                {firstNameError && firstNameError}
              </div> */}
            </div>
            <div className="form-inputs">
              <label className="form-label">Last Name</label>
              <input
                className="form-input"
                name="last-name"
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              {/* <div
                style={{
                  color: "red",
                  paddingTop: 10,
                  fontSize: 14,
                }}
              >
                {lastNameError && lastNameError}
              </div> */}
            </div>
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
              {/* <div
                style={{
                  color: "red",
                  paddingTop: 10,
                  fontSize: 14,
                }}
              >
                {emailError && emailError}
              </div> */}
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
              {/* <div
                style={{
                  color: "red",
                  paddingTop: 10,
                  fontSize: 14,
                }}
              >
                {passwordError && passwordError}
              </div> */}
            </div>
            <button className="form-input-btn" type="submit">
              Sign up
            </button>
            <span className="form-input-login">
              Already have an account?
              <div
                style={{ cursor: "pointer", color: "lightblue" }}
                onClick={() => navigate(`/login`)}
              >
                Login here
              </div>
              <div
                className="message"
                style={{
                  textAlign: "center",
                  color: "#4cafff",
                  paddingTop: 10,
                  fontSize: 16,
                }}
              >
                {message}
              </div>
              <div
                className="message"
                style={{
                  textAlign: "center",
                  color: "red",
                  paddingTop: 10,
                  fontSize: 16,
                }}
              >
                {error}
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

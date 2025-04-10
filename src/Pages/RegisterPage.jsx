import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../assets/HeaderImg.avif";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../hooks/ThemeContext";
import { FaUserCircle } from "react-icons/fa";
import "./RegisterPage.css";

const RegisterPage = () => {
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const inputEle = useRef();

  useEffect(() => {
    inputEle.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { name, email, password };
    console.log("Registered User:", payload);
    localStorage.setItem("user", JSON.stringify(payload));

    setName("");
    setEmail("");
    setPassword("");

    navigate("/login");
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-center g-4">
        {/* <div className="col-lg-6 d-none d-lg-block">
          <img
            src={Header}
            alt="Car Header"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
          />
        </div> */}

        <div
          className={`col-lg-5 col-md-8 col-12 p-4 shadow rounded-4 register-form ${
            theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
          }`}style={{marginTop:'70px', borderRadius:'20px'}}
        >
          <div className="text-center mb-3">
  <FaUserCircle size={50} className="mb-2 text-primary" />
  <legend className="fs-3 fw-bold">Register</legend>
</div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={inputEle}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="inputPassword" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary py-2 fs-5">Register</button>
            </div>

            <div className="text-center">
              <Link to="/login" className="text-decoration-none text-info">
                Already registered? <strong>Login here</strong>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

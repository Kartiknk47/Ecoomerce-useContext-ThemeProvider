import React, { useEffect, useState, useRef, useContext } from "react";
import Header from "../assets/HeaderImg.avif";
import "./LoginPage.css";
import HomePage from "./HomePage";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../hooks/ThemeContext";
import { FaUserCircle } from "react-icons/fa";


const LoginPage = () => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedUser, setLoggedUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const inputEle = useRef();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setLoggedUser(storedUser);
    inputEle.current?.focus();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    if (!loggedUser) {
      toast.error("No registered user found.");
      return;
    }

    if (email === loggedUser.email && password === loggedUser.password) {
      toast.success("You have logged in successfully!");
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
      setTimeout(() => {
        navigate("/home");
      });
    } else {
      toast.error("Invalid credentials");
    }
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
          className={`col-lg-5 col-md-8 col-12 p-4 shadow rounded-4 login-form ${
            theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
          }`}style={{marginTop:'70px', borderRadius:'20px'}}
        >
<div className="text-center mb-3">
  <FaUserCircle size={50} className="mb-2 text-primary" />
  <legend className="fs-3 fw-bold">Login</legend>
</div>


          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email address</label>
              <input
                type="email"
                id="emailInput"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={inputEle}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="passwordInput" className="form-label">Password</label>
              <input
                type="password"
                id="passwordInput"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary py-2 fs-5">Login</button>
            </div>

            <div className="text-center">
              <Link to="/register" className="text-decoration-none text-info">
                Not registered? <strong>Click here</strong>
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* <div className="text-center mt-4">
        {isLoggedIn ? (
          <p className="text-success fw-semibold">✅ You are logged in</p>
        ) : (
          <p className="text-muted">Please log in</p>
        )}
      </div> */}

      {isLoggedIn && <HomePage />}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;

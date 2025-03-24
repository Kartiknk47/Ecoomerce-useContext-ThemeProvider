import React, { useEffect, useState, useRef } from "react";
import Header from "../assets/HeaderImg.avif";
import "./LoginPage.css";
import HomePage from "./HomePage";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../hooks/ThemeContext";

const LoginPage = ({
  setIsLogin,
  // setLoggedUser
}) => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedUser, setLoggedUser] = useState();
  const [isLoggedIn, setIsLoghgedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setLoggedUser(loggedInUser);
  }, []);

  console.log(loggedUser);

  const navigate = useNavigate();

  function formDataFunTwo(event) {
    event.preventDefault();
    if (email == loggedUser.email && password == loggedUser.password) {
      toast.success("Yov have logged in suceesfully");
      setIsLoghgedIn(true);
      navigate("/Home");
    } else {
      toast.error("credentials inValid");
    }
  }
  const inputEle = useRef();

  function inputRef() {
    inputEle.current.focus();
  }

  useEffect(() => {
    inputEle.current.focus;
  },[]);

  console.log(email, password);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src={Header}
            alt="Car-Images"
            className="img-fluid"
            style={{ marginTop: "50px" }}
          />
        </div>
        <div
          className={` col login ${
            theme == "light" ? "bg-light text-dark" : "bg-dark text-light"
          }`}
        >
          <legend>Login Form</legend>
          <form onSubmit={formDataFunTwo}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => setEmail(e.target.value)}
                ref={inputEle}
              />
              {/* <button onClick={inputRef}>get on click</button>0 */}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <br></br>
            <br></br>
            <Link to="/register">If Not Registered</Link>
          </form>
        </div>
      </div>
      {isLoggedIn ? <p>logged In</p> : <p>Please Log in</p>}

      <br></br>

      {isLoggedIn && <HomePage />}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;

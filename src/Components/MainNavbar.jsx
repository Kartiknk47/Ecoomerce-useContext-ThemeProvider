import React, { useContext } from "react";
import logo from "../assets/carlogo.png";
import { Link, useNavigate } from "react-router-dom";
import "./MainNavbar.css";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { ThemeContext } from "../hooks/ThemeContext";
import { AuthContext } from "../hooks/AuthContext";

const MainNavbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const {loggedUser,isLoggedIn,logIn,logOut} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogOut=()=>{
    logOut()
    navigate("/register")

  }

  return (
    <>
      <div
        className={`container-fluid ${
          theme == "light" ? "bg-light" : "bg-dark"
        }`}
      >
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center">
              <img src={logo} alt="logo" style={{width:"80px"}}></img>
              <h5 className={`ms-3 mb-0 fw-bold ${theme === "light" ? "text-dark" : "text-light"}`}>CarGarage</h5>

            </div>
          </div>
          <div className="Navbar">
            <button className="btn btn-light" onClick={handleLogOut} >Log Out
            </button>
            <button 
              onClick={toggleTheme}
              className={`btn btn-light ${theme == "light" ? "bg-Light" : "Dark"}`}
              style={{ fontSize: "20px" }}
            >
              {theme == "light" ? <BsToggle2On /> : <BsToggle2Off />}
            </button>

            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-secondary">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;

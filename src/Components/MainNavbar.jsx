import React, { useContext } from "react";
import logo from "../assets/carlogo.png";
import { Link } from "react-router-dom";
import "./MainNavbar.css";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { ThemeContext } from "../hooks/ThemeContext";
// import { AuthContext } from "../hooks/AuthContext";

const MainNavbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  // const {loggedUser,setLoggedUser,isLoggedIn,setIsLoghgedIn} = useContext(AuthContext)

  return (
    <>
      <div
        className={`container-fluid ${
          theme == "light" ? "bg-light" : "bg-dark"
        }`}
      >
        <div className="row">
          <div className="col">
            <div className="logo">
              <img src={logo} alt="logo" style={{width:"80px"}}></img>
            </div>
          </div>
          <div className="Navbar">
            {/* <button className="btn btn-primary" onClick={LoggedOutUser} >Log Out</button> */}
            <button 
              onClick={toggleTheme}
              className={`btn btn-primary ${theme == "light" ? "bg-Light" : "Dark"}`}
              style={{ fontSize: "20px" }}
            >
              {theme == "light" ? <BsToggle2On /> : <BsToggle2Off />}
            </button>

            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;

import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../assets/HeaderImg.avif";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../hooks/ThemeContext";
import "./RegisterPage.css";

const RegisterPage = () => {
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function formDataFun() {
    const payload = { name: name, email: email, password: password };
    console.log(payload);
    setEmail("");
    setPassword("");
    localStorage.setItem("user", JSON.stringify(payload));
    navigate("/login");
  }

  const inpuEle = useRef()

  function inputRef(){
    inpuEle.current.focus()
  }

  useEffect (()=>{
    inpuEle.current.focus()
  },[])

  console.log(name, email, password);
  return (
    <div className="container" style={{marginBottom:'20px'}}>
      <div className="row">
        <div className="col">
          <img
            src={Header}
            alt="Car-Images"
            className="img-fluid"
            style={{ marginTop: "90px" }}
          />
        </div>
        <div
          className={`col register ${
            theme == "light" ? "bg-light text-dark" : "bg-dark text-light"
          }`}
        >
          <legend>Register Form</legend>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                onChange={(e) => setName(e.target.value)}
                ref={inpuEle}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => setEmail(e.target.value)}
              />
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
            <button className="btn btn-primary" onClick={formDataFun}>
              Register
            </button>
            <br></br>
            <br></br>
            <Link to="/login">If Already Registered</Link>
          </form>
        </div>
      </div>
      {/* <p>Email: {email}</p>
      <p>Password: {password}</p> */}
    </div>
  );
};

export default RegisterPage;

import { useState } from "react";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import data from "./Data.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavbar from "./Components/MainNavbar.jsx";
import CardList from "./Components/CardList.jsx";
import CardDetails from "./Components/CardDetails.jsx";
import ThemProvider from "./hooks/ThemeContext.jsx";
import Footer from "./Components/Footer.jsx";
import AuthProvider from "./hooks/AuthContext.jsx";
import AddToCart from "./components/AddToCart.jsx";
import Card from "./Components/Card.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <CardList data={data}/> */}
      <BrowserRouter>
        <ThemProvider>
          <AuthProvider>
          <MainNavbar />
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/Home" element={<HomePage data={data} />}></Route>
            <Route path="/card-detail/:ID/*" element={<CardDetails />}></Route>
          </Routes>
          </AuthProvider>
          {/* <Footer/> */}

        </ThemProvider>
      </BrowserRouter>
      {/* <LoginPage/>
    <RegisterPage/>
    <HomePage data={data}/> */}

    </>
  );
}

export default App;

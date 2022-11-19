import React, { useState, useEffect } from "react";
import Preloader from "./pages/Pre";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import Footer from "./components/Footer";
import HomeArtikel from "./pages/Artikel/Home_artikel";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        <Preloader load={load} />

        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/HomeArtikel" element={<HomeArtikel />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Preloader from "./pages/Pre";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Footer from "./components/Footer";
import HomeArtikel from "./pages/Artikel/Home_artikel";
import HomeCourse from "./pages/Course/Home_Course";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Artikel1 from "./pages/Artikel/Artikel1";
import Course1 from "./pages/Course/Course1";

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
<<<<<<< HEAD
          {/*<Navbar />
          <ScrollToTop />*/}
=======
          {/* <Navbar /> */}
          <ScrollToTop />
>>>>>>> 67286ad (add course)
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/HomeArtikel" element={<HomeArtikel />} />
            <Route path="/HomeCourse" element={<HomeCourse />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Artikel1" element={<Artikel1 />} />
            <Route path="/Course1" element={<Course1 />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
<<<<<<< HEAD
          {/*<Footer />*/}
=======
          {/* <Footer /> */}
>>>>>>> 67286ad (add course)
        </div>
      </Router>
    </>
  );
}

export default App;

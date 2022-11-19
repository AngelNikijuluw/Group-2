// React package
import { Routes, Route } from "react-router-dom";
import { Container, NavDropdown } from "react-bootstrap";
// Our Modules
import Home from "./pages/page1";
import Course from "./pages/page2";
import Artikel from "./pages/page3";
import Login from "./pages/page4";
import Navs from "./components/Navbar";

const App = () => {
  return (
    <div style={{backgroundColor:"#262424"}}>
      <Navs/>
      <Container>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Artikel" element={<Artikel />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
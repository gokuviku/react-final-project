import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <>
   <div className="d-flex overflow-x-hidden">
      <div className="sidebar bg-light border" style={{ width: "250px",height:"100vh" }}>
        <h5 className="p-3">Admin Panel</h5>
        <ul className="list-unstyled p-3 ">
          <li className="m-2" >
            <Link to="/about">About</Link>
          </li>
          <li className="m-2" >
            <Link to="/services">Services</Link>
          </li>
          <li className="m-2" >
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-2" >
            <Link to="/footer">Footer</Link>
          </li>
        </ul>
      </div>

      <div className="main-content flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Header />} />
          <Route path="/contact" element={<Content />} />
          <Route path="/services" element={<SideBar />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;

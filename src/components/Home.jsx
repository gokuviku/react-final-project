import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from './Header'
import SideBar from './SideBar'
import Content from "./Content";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<Header />} />
        <Route path="/services" element={<SideBar />} />
        <Route path="/contact" element={<Content />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <div className="">
        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/services">
          <li>services</li>
        </Link>

        <Link to="/contact">
          <li>contact</li>
        </Link>

        <Link to="/footer">
          <li>footer</li>
        </Link>
      </div>
    </div>
  );
};

export default Home;

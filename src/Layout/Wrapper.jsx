import React from "react";
import Navbar from "../assets/Components/Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../assets/Components/Footer/Footer";

function Wrapper() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Wrapper;

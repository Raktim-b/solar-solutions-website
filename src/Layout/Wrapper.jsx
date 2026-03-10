import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader/Loader";

const Wrapper = () => {
  return (
    <>
      <Loader />
      <div className="page-container ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Wrapper;

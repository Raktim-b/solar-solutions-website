import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader/Loader";

const Wrapper = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="page-container ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Wrapper;

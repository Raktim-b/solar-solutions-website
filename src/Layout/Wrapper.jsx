// import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Header/Navbar";
// import Footer from "../Components/Footer/Footer";
// import Loader from "../Components/Loader/Loader";

// const Wrapper = () => {
//   return (
//     <>
//       <Loader />
//       <main className="page-container ">
//         <Navbar />
//         <Outlet />
//         <Footer />
//       </main>
//     </>
//   );
// };

// export default Wrapper;

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader/Loader";
import { useState, useEffect } from "react";

const Wrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // match loader animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <main>
          <Navbar />
          <Outlet />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Wrapper;

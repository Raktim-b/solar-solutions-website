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
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Wrapper = () => {
  const [loading, setLoading] = useState(true);
  const pageRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.set(pageRef.current, {
        opacity: 0,
        scale: 1.3,
        y: 40,
      });

      gsap.to(pageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [loading]);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <main ref={pageRef}>
          <Navbar />
          <Outlet />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Wrapper;

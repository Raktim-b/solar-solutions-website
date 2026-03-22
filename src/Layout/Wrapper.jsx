// import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
// import Loader from "../Components/Loader/Loader";

const Wrapper = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1500); // match loader animation time

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) return <Loader />;
  //   return (
  //     <>
  //       {/* <Loader /> */}
  //       {/* <div className="page-container"> */}
  //       {/* <main className="page-content"> */}
  //       <Navbar />
  //       <Outlet />
  //       <Footer />
  //       {/* </main> */}
  //       {/* </div> */}
  //     </>
  //   );
  // };
  // useEffect(() => {
  //   let lenis;
  //   let rafId;

  //   const initLenis = () => {
  //     // 👉 Only enable on desktop
  //     if (window.innerWidth >= 768) {
  //       lenis = new Lenis({
  //         duration: 1, // slower = smoother
  //         easing: (t) => 1 - Math.pow(1 - t, 4),
  //         smooth: true,
  //       });

  //       const raf = (time) => {
  //         lenis.raf(time);
  //         rafId = requestAnimationFrame(raf);
  //       };

  //       rafId = requestAnimationFrame(raf);
  //     }
  //   };

  //   const destroyLenis = () => {
  //     if (lenis) {
  //       lenis.destroy();
  //       lenis = null;
  //     }
  //     if (rafId) cancelAnimationFrame(rafId);
  //   };

  //   // Initial check
  //   initLenis();

  //   // Handle resize (🔥 important)
  //   const handleResize = () => {
  //     destroyLenis();
  //     initLenis();
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     destroyLenis();
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <div className="relative">
      <Navbar />

      {/* Main content */}
      <main className="relative  bg-white">
        <Outlet />
      </main>

      {/* Footer (revealed from behind) */}
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;

// import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Header/Navbar";
// import Footer from "../Components/Footer/Footer";
// import Loader from "../Components/Loader/Loader";
// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";

// const Wrapper = () => {
//   const [loading, setLoading] = useState(true);
//   const pageRef = useRef(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (!loading) {
//       gsap.set(pageRef.current, {
//         opacity: 0,
//         scale: 1.3,
//         y: 40,
//       });

//       gsap.to(pageRef.current, {
//         opacity: 1,
//         scale: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//       });
//     }
//   }, [loading]);

//   return (
//     <>
//       {loading && <Loader />}

//       {!loading && (
//         <main ref={pageRef}>
//           <Navbar />
//           <Outlet />
//           <Footer />
//         </main>
//       )}
//     </>
//   );
// };

// export default Wrapper;

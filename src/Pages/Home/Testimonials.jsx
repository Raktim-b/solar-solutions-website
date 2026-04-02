import Container from "../../Components/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { test } from "../../Services/JSON/Home/Testimonial";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";
import gsap from "gsap";

const Testimonials = () => {
  const isMobile = window.innerWidth < 768;
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        y: 100,
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <section className="test-sec py-10 sm:py-30 bg-black text-white relative z-10 overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="mb-8 md:mb-16 flex flex-col md:flex-row gap-4 md:gap-50 items-start">
          <PriTitle prititle="Testimonials" className="text-gray-400" />
          <div className="max-w-full text-center md:text-start md:max-w-3xl">
            <SubTitle
              subtitle={
                isMobile
                  ? [
                      <>
                        <span className="ml-20">
                          Let’s See What Our Clients Say
                        </span>
                        About Our Quality, Commitment, and Results
                      </>,
                    ]
                  : [
                      <span className="ml-20">
                        Let’s See What Our Clients Say
                      </span>,
                      <>
                        {" "}
                        About Our{" "}
                        <span className="text-green-500">
                          Quality, Commitment,
                        </span>
                      </>,
                      <span className="text-green-500"> and Results</span>,
                    ]
              }
              className="text-white"
            />
          </div>
        </div>

        <div ref={sectionRef} className="max-w-full md:max-w-2/3 mx-auto">
          {/* Slider */}
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
            className=""
          >
            {test.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Image */}
                  <div className="max-w-70 h-90 md:h-95 rounded-lg overflow-hidden">
                    <img
                      src={item.imgSrc2}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className=" max-w-xl ">
                    <p className=" text-sm mb-2">{item.role}</p>

                    <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-6">
                      {item.name}
                    </h3>

                    <div className=" mb-4">
                      <svg
                        fill="#fff"
                        width="40px"
                        height="40px"
                        viewBox="0 -5 34 34"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m2.4 24h7.2l4.8-9.6v-14.4h-14.4v14.4h7.2zm19.2 0h7.2l4.8-9.6v-14.4h-14.4v14.4h7.2z" />
                      </svg>
                    </div>

                    <p className="text-base md:text-lg font-bold leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Controls */}
          <div className="flex justify-between items-center mt-16">
            {/* Counter */}
            <p className="text-2xl flex gap-2.5 items-center font-semibold">
              {String(activeIndex).padStart(2, "0")}
              <span className="text-gray-500 text-lg">
                {" "}
                /{String(test.length).padStart(2, "0")}
              </span>
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              {/* Prev */}
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="py-2 px-4 rounded-[20px] border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition"
              >
                <ArrowLeft size={18} />
              </button>

              {/* Next */}
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="py-2 px-4 rounded-[20px] border border-green-500 text-green-500 flex items-center justify-center hover:bg-green-500 cursor-pointer hover:text-black transition"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;

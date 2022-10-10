import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import picture from "../../images/banner/My project (6).jpg";
import picture2 from "../../images/banner/My project (2).jpg";
import picture3 from "../../images/banner/My project (3).png";
import picture4 from "../../images/banner/My_project__4_-removebg-preview (1).png";
import picture5 from "../../images/banner/My_project__3_-removebg-preview.png";
import picture6 from "../../images/banner/My_project__1_-removebg-preview.png";
const Banner = () => {
  return (
    <div className=" nab-bg">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide><img src={picture4} alt="" className="w-full"/></SwiperSlide>
        <SwiperSlide><img src={picture5} alt="" className="w-full"/></SwiperSlide>
        <SwiperSlide><img src={picture6} alt="" className="w-full"/></SwiperSlide>
        <SwiperSlide><img src={picture} alt=""  className="w-full"/></SwiperSlide>
        <SwiperSlide><img src={picture2} alt="" className="w-full"/></SwiperSlide>
        <SwiperSlide><img src={picture3} alt="" className="w-full"/></SwiperSlide> */}
        <SwiperSlide>
          <div class="hero min-h-screen ">
            <div class="hero-content flex-col  lg:gap-16 lg:flex-row-reverse">
              <div>
                {" "}
                <img src={picture4} class="lg:max-w-md max-w-sm" alt="" />
              </div>
              <div>
                <h1 class="lg:text-5xl text-4xl font-bold lg:text-start text-center text-white">
                Auto parts
                </h1>
                <p class="py-6 w-96 text-white font-medium opacity-80">
                  Auto parts manufacturers in the US have witnessed significant
                  growth over the recent years, thanks to the fact that the US
                  remains one of the world’s largest contributors to the global
                  automotive market.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:gap-16 lg:flex-row-reverse">
              <div>
                <img src={picture5} class="lg:max-w-md max-w-sm" alt="" />
              </div>
              <div>
                <h1 class="lg:text-5xl text-4xl font-bold lg:text-start text-center text-white">
                Motor parts
                </h1>
                <p class="py-6 w-96 text-white font-medium opacity-80">
                  Auto parts refer to all the components used in automobile
                  vehicles, which mainly includes products for Driveline &
                  Powertrain, Interiors & Exteriors, Electronics, Bodies &
                  Chassis, Seating, Lighting, Wheel & Tires, etc.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:gap-16 lg:flex-row-reverse">
              <div>
                {" "}
                <img src={picture6} class="lg:max-w-md max-w-sm" alt="" />
              </div>
              <div>
                <h1 class="lg:text-5xl text-4xl font-bold lg:text-start text-center text-white">
                  Car parts
                </h1>
                <p class="py-6 w-96 text-white font-medium opacity-80">
                  Dana Incorporated is one of the largest American worldwide
                  suppliers of drivetrain, sealing, and thermal-management
                  technologies for auto industry. Founded in 1904 and
                  headquartered in Maumee, Ohio, the company employs more than
                  23,000 people in 25 countries.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

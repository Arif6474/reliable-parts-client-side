import React from "react";
import about from "../../images/about-us/about.jpg";
import about2 from "../../images/about-us/about2.png";
import vision from "../../images/about-us/vision.png";
import mission from "../../images/about-us/mission.png";
const AboutUs = () => {
  return (
    <div>
      <div className="space-y-4 pt-12">
        <h1 data-aos="flip-up" 
    data-aos-easing="linear"
    data-aos-duration="1500" className="text-center text-2xl text-white font-bold">About Us</h1>
        <p className="text-center font-semibold text-gray-400  ">
          Our dedicated works hard to help you achieve your goals.
        </p>
      </div>
      <div className="lg:p-20 p-8 space-y-16">
        <img src={about2} alt="" className="lg:w-[850px] mx-auto"/>
        <p className="text-white opacity-80">
          We also have expertise in digital marketing and we work smart enough
          to improve your business through our online marketing service. We have
          experienced how internet technology can be used to leverage your
          business goals and we work hard consistently to provide u the best IT
          solution for your growth.We take pride in being the most reliable and
          trusted IT company. Just call or message us in case u need any
          assistance and we will get back to you.
        </p>
      </div>
      <h1 data-aos="flip-up" 
    data-aos-easing="linear"
    data-aos-duration="1500"  className="text-center text-3xl font-bold my-6 text-white">
        Mission & Vision
      </h1>
      <div className="flex justify-center items-center gap-4 lg:p-16 lg:flex-row flex-col text-white">
        <div className="  shadow-lg flex justify-center items-center gap-8 p-8 lg:flex-row flex-col card lg:w-[500px] w-80 h-72 mx-auto bg-[#0c1839] text-primary-content  hover:shadow-blue-500 transition duration-700 ease-in-out  hover:-translate-y-1 hover:scale-104">
          <img data-aos="zoom-in" 
    data-aos-easing="linear"
    data-aos-duration="1500" src={mission} alt="" className="w-24" />
          <div className="space-y-4  ">
            <h1 data-aos="flip-up" 
    data-aos-easing="linear"
    data-aos-duration="1500"  className="text-center font-bold text-xl">Mission</h1>
            <p className="opacity-70">
              To help individuals and business owners achieve exponential growth
              using our online services.
            </p>
          </div>
        </div>
        <div className="shadow-lg flex justify-center items-center gap-8 p-8 lg:flex-row flex-col card lg:w-[500px] w-80 h-72 mx-auto bg-[#0c1839] text-primary-content  hover:shadow-blue-500 transition duration-700 ease-in-out  hover:-translate-y-1 hover:scale-104">
          <img data-aos="zoom-in" 
    data-aos-easing="linear"
    data-aos-duration="1500" src={vision} alt="" className="w-24" />
          <div className="space-y-4">
            <h1 data-aos="flip-up" 
    data-aos-easing="linear"
    data-aos-duration="1500"  className="text-center font-bold text-xl">Vision</h1>
            <p className="opacity-70">
              A world where every person can leverage technology to solve their
              problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20 my-20">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-white ">About Us</h1>
        <p className="py-4 text-slate-200 font-medium opacity-80 lg:w-[550px]">
          RP (reliable parts) is constantly involved in the evaluation and
          innovation of production technologies. For both existing and new
          technologies, RP examines how and to what degree they are applicable
          for its customers, and goes to extreme lengths to implement the
          technologies. RP focuses exclusively on the automotive industry market
          segment. The end clients for our components are the large, well-known
          car brands produced by manufacturers in Japan, Europe and the USA. RP
          is located in Haaksbergen. The Director is Guido Gerritsen.
        </p>
      </div>
      <div className="max-w-lg p-8 sm:max-w-sm rounded-lg  ">
        <img
          src={
            "https://i.ibb.co/PCCzTpy/sam-loyd-qy27-Jns-H9s-U-unsplash-ccexpress.jpg"
          }
          alt=""
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;

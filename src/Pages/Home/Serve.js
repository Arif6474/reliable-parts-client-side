import React from 'react';

const Serve = ({back , serveTitle , details , image}) => {
    return (
        <div className={`card lg:card-side bg-base-100 pt-4 pl-4 mx-auto lg:w-96 w-[320px] ${back} shadow-lg hover:shadow-[#458986] transition duration-700 ease-in-out  hover:-translate-y-1 hover:scale-110`}>
  <div className="card-body ">
    <h2  data-aos="flip-left" 
    data-aos-easing="linear"
    data-aos-duration="1500" className=" text-center text-white text-3xl font-bold">{serveTitle}</h2>
   <div className="flex mx-auto my-4 items-center">
    <div data-aos="fade-up-right" 
    data-aos-easing="linear"
    data-aos-duration="1500" className="max-w-xs">
    <img  src={image} alt="" className=" w-12 h-12 rounded-full" />
    </div>
   <p data-aos="fade-up-left" 
    data-aos-easing="linear"
    data-aos-duration="1500" className="  text-2xl mx-4 text-yellow-200 font-bold">{details}</p>
   </div>
   
  </div>
</div>
    );
};

export default Serve;
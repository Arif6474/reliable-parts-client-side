import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const { _id, name, price, image, available, minimum, description } = part;
  const navigate = useNavigate();
  const navigateToPartDetails = (id) => {
    navigate(`/part/${id}`);
  };
  return (
    <div className="rounded-xl bg-[#0c1839] mx-auto my-4 lg:w-60 w-80  shadow-lg hover:shadow-blue-800 transition duration-700 ease-in-out  hover:-translate-y-1 hover:scale-110">
      <div className="flex justify-between lg:items-start gap-4  flex-col">
        <div data-aos="zoom-in" 
    data-aos-easing="linear"
    data-aos-duration="1500" className="p-4 lg:p-2 mx-auto">
          <img src={image} className="lg:w-52    rounded-xl" alt="" />
        </div>
        <div className=" p-4 lg:pl-4 ">
          <div className="flex flex-row lg:flex-col lg:justify-center justify-between   lg:gap-0">
            <h1 className="text-lg font-bold  text-white opacity-90">
              {name}
            </h1>
            <p className="text-amber-400 font-semibold">
              <span className="text-white ">Price:</span> {price}
            </p>
          </div>
          {/* <p className="text-start  text-slate-200 font-medium text-sm my-2 opacity-75 lg:w-44 w-72">
            {description.slice(0, 60)}...
          </p> */}
          <button
          
            onClick={() => navigateToPartDetails(_id)}
            className="btn hover:bg-[#257b13] bg-[#41a317] btn-xs border-none text-white font-semibold my-2"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;

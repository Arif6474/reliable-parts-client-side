import React from "react";

const UserReview = ({ review }) => {
  const { customerName, description } = review;

  return (
    <div className="">
      <div className="card w-80 h-72 mx-auto bg-[#0c1839] text-primary-content shadow-lg hover:shadow-blue-500 transition duration-700 ease-in-out  hover:-translate-y-1 hover:scale-110">
        <div className="card-body">
          <div className="avatar">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="w-16 mx-auto rounded-full ring ring-[#5fd6ba] ring-offset-base-100 ring-offset-2"
            >
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
          <h2
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-lg  font-semibold text-white text-center"
          >
            {customerName}
          </h2>
          <h2
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="font-medium text-sm text-yellow-500 text-center"
          >
            <span className="text-white">Rating:</span><p className="rating rating-xs pt-2 ml-2">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</p>
          </h2>
          <p
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-slate-100 font-medium opacity-80 text-sm mb-2 mt-8"
          >
            <span className="text-amber-400 mr-2 font-bold text-2xl font-serif">
              “
            </span>
            {description.slice(0, 120)}{" "}
            <span className="text-amber-400 ml-2 font-bold text-2xl font-serif">
              ”
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserReview;

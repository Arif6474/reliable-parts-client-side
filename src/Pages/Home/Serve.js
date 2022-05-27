import React from 'react';

const Serve = ({back , serveTitle , details , image}) => {
    return (
        <div className={`card lg:card-side bg-base-100 pt-4 pl-4 mx-4 shadow-xl ${back}`}>
  <div className="card-body">
    <h2 className=" text-center text-white text-3xl font-bold">{serveTitle}</h2>
   <div className="flex mx-auto my-4 items-center">
    <div className="max-w-xs">
    <img src={image} alt="" className=" w-12 h-12 rounded-full" />
    </div>
   <p className="  text-2xl mx-4 text-yellow-200 font-bold">{details}</p>
   </div>
   
  </div>
</div>
    );
};

export default Serve;
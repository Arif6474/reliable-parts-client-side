import React from 'react';

const Serve = ({back , serveTitle , details}) => {
    return (
        <div className={`card lg:card-side bg-base-100 pt-4 pl-4 mx-4 shadow-xl ${back}`}>
  <div className="card-body">
    <h2 className=" text-center text-3xl font-bold">{serveTitle}</h2>
    <p className="text-center text-teal-400 text-2xl  font-bold">{details}</p>
   
  </div>
</div>
    );
};

export default Serve;
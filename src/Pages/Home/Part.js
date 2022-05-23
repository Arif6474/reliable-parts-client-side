import React from 'react';

const Part = ({part}) => {
    const {name, price , image , available, minimum, description} = part;
    return (
        <div className="card w-96 bg-base-100 my-4 mx-6 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-white">{name}</h2>
    <p className="text-orange-400 font-bold">Price: {price}</p>
    <p>Available Quantity: <span className=" text-yellow-500 font-bold">{available}</span></p>
    <p> Minimum Order Quantity: <span className=" text-yellow-500 font-bold">{minimum}</span></p>
    <p className=" text-lime-200 text-xs my-4 opacity-75">{description.slice(0 ,160)}...</p>
    <div className="card-actions justify-center">
      <button className="btn btn-info text-black font-bold">Purchase</button>
    </div>
  </div>
</div>
    );
};

export default Part;
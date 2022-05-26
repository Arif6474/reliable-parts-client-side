import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Part = ({part}) => {
    const { _id, name, price , image , available, minimum, description} = part;
    const navigate = useNavigate()
    const  navigateToPartDetails = id => {
        navigate(`/part/${id}`)
    }
    return (
        <div className="card w-96 bg-base-100 my-4 mx-auto shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-white">{name}</h2>
    <p className="text-orange-400 font-bold">Price: {price}</p>
    <p>Available Quantity: <span className=" text-yellow-500 font-bold">{available}</span></p>
    <p> Minimum Order Quantity: <span className=" text-yellow-500 font-bold">{minimum}</span></p>
    <p className=" text-lime-200 text-xs my-4 opacity-75">{description.slice(0 ,160)}...</p>
    <div className="card-actions justify-center">
     <button onClick={() => navigateToPartDetails(_id)} className="btn btn-success btn-outline font-bold">Purchase</button>
    </div>
  </div>
</div>
    );
};

export default Part;
import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Part = ({part}) => {
    const { _id, name, price , image , available, minimum, description} = part;
    const navigate = useNavigate()
    const  navigateToPartDetails = id => {
        navigate(`/part/${id}`)
    }
    return (
//         <div className="card w-96 bg-base-100 mx-auto shadow-xl">
//   <figure><img src={image} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title text-white">{name}</h2>
//     <p className="text-orange-400 font-bold">Price: {price}</p>
//     <p>Available Quantity: <span className=" text-yellow-500 font-bold">{available}</span></p>
//     <p> Minimum Order Quantity: <span className=" text-yellow-500 font-bold">{minimum}</span></p>
//     <p className=" text-lime-200 text-xs my-4 opacity-75">{description.slice(0 ,160)}...</p>
//     <div className="card-actions justify-center">
//      <button onClick={() => navigateToPartDetails(_id)} className="btn btn-success btn-outline font-bold">Purchase</button>
//     </div>
//   </div>
// </div>
<div>
<div className="rounded-xl bg-[#0c1839] mx-auto my-4 lg:w-96 shadow-2xl">
  <div className="flex justify-between lg:items-start gap-4  flex-col lg:flex-row">
    <div className="">
    <img src={image} className="w-96    rounded-xl" alt="" />
    </div>
    <div className="p-4 lg:p-0">
     <div className="flex flex-row lg:flex-col lg:justify-start justify-between   lg:gap-0">
       <h1 className="text-lg font-bold pt-2 text-white opacity-90">{name}</h1>
      <p className="text-orange-400 font-semibold"><span className="text-white ">Price:</span>  {price}</p>
     </div>
      <p className="text-start  text-slate-200 font-medium text-sm my-2 opacity-75 lg:w-44 w-80">{description.slice(0 ,60)}...</p>
      <button onClick={() => navigateToPartDetails(_id)} className="btn bg-[#1ca9b1] hover:bg-[#057177] btn-sm border-none text-white font-semibold lg:mt-2">Purchase</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Part;
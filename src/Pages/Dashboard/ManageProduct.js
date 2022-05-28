import React from 'react';
import { toast } from 'react-toastify';

const ManageProduct = ({part , refetch}) => {
    const {_id, name, price , image , available, minimum, description} = part;

    const handleDeleteProduct = (id) => {
         fetch(`https://safe-thicket-05218.herokuapp.com/part/${id}` ,{
             method: 'DELETE',

         }).then(res => res.json())
         .then(data => {
             console.log(data);
             if(data.deletedCount){
                 refetch()
                 toast('Deleted product')
             }
         })

    }
    
    return (
        <div className="card w-66 bg-base-100 my-4 mx-auto shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-white">{name}</h2>
    <p className="text-orange-400 font-bold">Price: {price}</p>
    <p>Available Quantity: <span className=" text-yellow-500 font-bold">{available}</span></p>
    <p> Minimum Order Quantity: <span className=" text-yellow-500 font-bold">{minimum}</span></p>
    <p className=" text-lime-200 text-xs my-4 opacity-75">{description.slice(0 ,160)}...</p>
    <div className="card-actions justify-center">
     <button onClick={() => handleDeleteProduct(_id)}  className="btn btn-error btn-outline font-bold">Delete</button>
    </div>
  </div>
</div>
    );
};

export default ManageProduct;
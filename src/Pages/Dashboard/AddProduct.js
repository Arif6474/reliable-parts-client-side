import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    
    const handleAddProduct = (event) => {
      event.preventDefault();
       
      const name = event.target.name.value;
      const image = event.target.image.value;
      const price = event.target.price.value;
      const minimum = event.target.minimum.value;
      const maximum = event.target.maximum.value;
      const description = event.target.description.value;
      const products={  name, image, price , minimum ,maximum, description ,}
      console.log(products);
  
      const url ='https://safe-thicket-05218.herokuapp.com/part'
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(products)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
       if(data) {
         toast.success('Product has been done successfully')
       }
      })
  
    };
    return (
        <div className="card bg-slate-700 w-96  my-4 mx-auto">
      <h2 className="text-center text-xl font-bold text-red-200 mt-4">
        {" "}
        Add Product
      </h2>
      <form
        onSubmit={handleAddProduct}
        className="grid grid-cols-1 gap-4 mt-4 justify-items-center"
      >
       
        <input
          required
          type="text"
          name="name"
          placeholder="Parts Name"
          className="input  input-warning input-bordered w-full max-w-xs"
        />
        <input
        required
          type="text"
          name="image"
          placeholder="Parts url"
          className="input  input-warning input-bordered w-full max-w-xs"
        />
        <input
          required
          type="text"
          name="price"
          placeholder="Per Piece Price"
         
          className="input  input-warning input-bordered w-full max-w-xs"
        />
        <input
          required
          type="text"
          name="minimum"
          placeholder="Minimum Quantity"
         
          className="input  input-warning input-bordered w-full max-w-xs"
        />
        <input
          required
          type="text"
          name="maximum"
          placeholder="Maximum Quantity"
         
          className="input  input-warning input-bordered w-full max-w-xs"
        />
        
        <input
         required
          type="text"
          name="description"
          placeholder="Description"
          class="input input-bordered input-warning input-lg w-full max-w-xs max-h-32"
        />
        
        <input
          type="submit"
          value="Submit"
          className="btn  btn-outline btn-success w-full my-4 text-white font-bold max-w-xs"
        />
      </form>
    </div>
    );
};

export default AddProduct;
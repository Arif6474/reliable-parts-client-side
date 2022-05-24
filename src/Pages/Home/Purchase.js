import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { partId } = useParams();
  const [partDetails, setPartDetails] = useState({});
  const {_id, name, price, available, minimum, description } = partDetails;
  const [quantityError , setQuantityError] = useState('');
  useEffect(() => {
    const url = `http://localhost:5000/part/${partId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
      
        setPartDetails(data);
      });
  }, [partId, partDetails]);

  const handleOrder = (event) => {
    event.preventDefault();
     
    const partId = _id;
    const partName = name;
    const customerName = user?.displayName;
    const customer = user?.email;
    const perPiecePrice= price ; 
    const quantity = event.target.quantity.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;

    const order ={partId ,perPiecePrice, partName , customerName, customer, price, quantity, address, phone}
    console.log(order);

    if (parseInt(quantity) < parseInt(minimum) || parseInt(quantity) > parseInt(available)) {
      const errorMessage = <p className='text-red-600 text-center p-2 my-4 mx-14 bg-white rounded text-sm'>At least minimum order quantity {minimum} pieces and Maximum order {available} pieces.</p>
      setQuantityError(errorMessage);
  } else{
      setQuantityError('')
    const url ='http://localhost:5000/order'
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
     if(data) {
       toast.success('Your order has been done successfully')
     }
    })
     
  }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 my-4 mx-auto shadow-xl">
      <h1 className="text-center text-2xl font-bold text-red-200 mt-8 ">Purchase</h1>
        <div className="card-body">
          <h2 className="card-title text-white">{name}</h2>
          <p className="text-orange-400 font-bold">Price: {price}</p>
          <p>
            Available Quantity:{" "}
            <span className=" text-yellow-500 font-bold">{available}</span>
          </p>
          <p>
            Minimum Order Quantity:{" "}
            <span className=" text-yellow-500 font-bold">{minimum}</span>
          </p>
          <p className=" text-lime-200 text-xs my-4 opacity-75">
            {description?.slice(0, 160)}...
          </p>
        </div>
        <form
          onSubmit={handleOrder}
          className="grid grid-cols-1 gap-4 mt-4 justify-items-center"
        >
          <input
            readOnly
            type="text"
            name="name"
            value={user?.displayName}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            readOnly
            type="email"
            name="email"
            value={user?.email}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            readOnly
            type="text"
            value={name}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            readOnly
            type="text"
            value={price}
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="text"
            name="quantity"
            placeholder={`Minimum order Quantity ${minimum}`}
            className="input text-white input-bordered w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Your phone number"
            className="input text-white input-bordered w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Your address"
            className="input text-white input-bordered w-full max-w-xs"
            required
          />
          {quantityError}

          <input
            type="submit"
            value="Order Now"
            className="btn  bg-lime-500 w-full my-4 text-white font-bold max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { partId } = useParams();
  const [partDetails, setPartDetails] = useState({});
  const {_id, name, price, available, minimum, description, image } = partDetails;
  const [quantityError , setQuantityError] = useState('');
  useEffect(() => {
    const url = `https://safe-thicket-05218.herokuapp.com/part/${partId}`;
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

    const order ={partId ,perPiecePrice, partName , customerName, customer, quantity, address, phone}
    console.log(order);

    if (parseInt(quantity) < parseInt(minimum) || parseInt(quantity) > parseInt(available)) {
      const errorMessage = <p className='text-red-600 text-center p-2 my-4 mx-14 bg-white rounded text-sm'>At least minimum order quantity {minimum} pieces and Maximum order {available} pieces.</p>
      setQuantityError(errorMessage);
  } else{
      setQuantityError('')
    const url ='https://safe-thicket-05218.herokuapp.com/order'
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
    
    
    <div className="py-16 flex lg:flex-row flex-col justify-center items-center gap-24 min-h-screen bg-[#062e41]">
      <div>
      <div className="card w-80 p-4 shadow-xl">
  <figure><img data-aos="zoom-in" 
    data-aos-easing="linear"
    data-aos-duration="2000" src={image} alt="Shoes" className="rounded-lg"/></figure>
  <div className="card-body">
  <h2 className="card-title text-white">{name}</h2>
  <p className="text-orange-400 font-semibold"><span className="text-white ">Price:</span>  {price}</p>
  <p className="text-white font-semibold">
            Available Quantity:{" "}
            <span className=" text-white font-bold">{available}</span>
          </p>
          <p className="text-white font-semibold">
            Minimum Order Quantity:{" "}
            <span className=" text-white font-bold">{minimum}</span>
        </p>
         <p className=" text-white text-xs my-4 opacity-75">
            {description?.slice(0, 180)}...
         </p>
  </div>
</div>
      </div>
      <div>
      <h1 data-aos="flip-left" 
    data-aos-easing="linear"
    data-aos-duration="2000" className="text-center text-2xl font-bold w-32 mx-auto  text-white uppercase border-b-2 border-[#ea572b]">Purchase</h1>
      <form
          onSubmit={handleOrder}
          className="grid grid-cols-1 lg:grid-cols-1 gap-4 mt-4 lg:w-96 w-80 p-6 justify-items-center"
        >
          <input
            readOnly
            type="text"
            name="name"
            value={user?.displayName}
            className="input input-bordered w-full bg-[#103e53] text-white "
          />
          <input
            readOnly
            type="email"
            name="email"
            value={user?.email}
            className="input input-bordered w-full bg-[#103e53] text-white  "
          />
          <input
            readOnly
            type="text"
            value={name}
            className="input input-bordered w-full bg-[#103e53] text-white"
          />
          <input
            readOnly
            type="text"
            value={price}
            className="input input-bordered w-full bg-[#103e53] text-white"
          />
          <input
            readOnly
            type="text"
            value={`Minimum order quantity ${minimum}`}
            className="input input-bordered w-full bg-[#103e53] text-white "
          />

          <input
            type="text"
            name="quantity"
            placeholder="Order quantity"
            className="input  input-bordered w-full bg-[#103e53] text-white"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Your phone number"
            className="input  input-bordered w-full bg-[#103e53] text-white"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Your address"
            className="input text-white input-bordered w-full bg-[#103e53]"
            required
          />
          {quantityError}

          <input data-aos="zoom-in" 
    data-aos-easing="linear"
    data-aos-duration="2000"
            type="submit"
            value="Order Now"
            className="btn  bg-lime-500 hover:bg-lime-700 w-full border-none my-4 text-white font-bold "
          />
        </form>

      </div>
    </div>
  );
};

export default Purchase;

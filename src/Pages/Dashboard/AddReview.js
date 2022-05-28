import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const handleReview = (event) => {
    event.preventDefault();
     

    const customerName = user?.displayName;
    const customer = user?.email;
    const description = event.target.description.value;
    const rating = event.target.rating.value;
    const review ={ customerName, customer, description, rating}
    console.log(review);

    const url ='https://safe-thicket-05218.herokuapp.com/review'
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
     if(data) {
       toast.success('Your review has been done successfully')
     }
    })

  };
  return (
    <div className="card bg-slate-700 w-96  my-4 mx-auto">
      <h2 className="text-center text-xl font-bold text-red-200 mt-4">
        {" "}
        Add A Review
      </h2>
      <form
        onSubmit={handleReview}
        className="grid grid-cols-1 gap-4 mt-4 justify-items-center"
      >
        <input
          readOnly
          type="text"
          name="name"
          value={user?.displayName}
          className="input  input-warning input-bordered w-full max-w-xs"
        />
        <input
          readOnly
          type="email"
          name="email"
          value={user?.email}
          className="input  input-warning input-bordered w-full max-w-xs"
        />
        <select  name="rating" className="select select-warning w-full max-w-xs">
          <option disabled selected>
            Rating
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="input input-bordered input-warning input-lg w-full max-w-xs max-h-32"
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

export default AddReview;

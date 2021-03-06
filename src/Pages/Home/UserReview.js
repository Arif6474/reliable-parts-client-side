import React from 'react';

const UserReview = ({review}) => {
    const {customerName, description ,rating} = review;
    
    return (<div className="mx-auto">
        <div className="card w-96 bg-fuchsia-700 text-primary-content">
  <div className="card-body">
    <h2 className="text-xl  font-bold text-white">{customerName}</h2>
    <h2 className="font-bold text-yellow-500">Rating: {rating} stars</h2>
    <p className="text-lime-200 text-opacity-60">{description.slice(0, 70)}...</p>
   
  </div>
</div>
</div>
    );
};

export default UserReview;
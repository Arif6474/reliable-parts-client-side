import React from 'react';

const UserReview = ({review}) => {
    const {customerName, description ,rating} = review;
    return (<div className="mx-auto">
        <div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
    <h2 class="text-xl  font-bold text-white">{customerName}</h2>
    <h2 class="font-bold text-yellow-500">Rating: {rating} stars</h2>
    <p className="text-lime-200 text-opacity-60">{description.slice(0, 70)}...</p>
   
  </div>
</div>
</div>
    );
};

export default UserReview;
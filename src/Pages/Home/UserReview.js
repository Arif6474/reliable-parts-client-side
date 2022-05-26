import React from 'react';

const UserReview = ({review}) => {
    const {customerName, description ,rating} = review;
    return (<div>
        <div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
    <h2 class="card-title">{customerName}</h2>
    <h2 class="card-title">{rating}</h2>
    <p>{description}</p>
   
  </div>
</div>
</div>
    );
};

export default UserReview;
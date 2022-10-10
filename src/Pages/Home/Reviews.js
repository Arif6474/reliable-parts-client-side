import React, { useEffect, useState } from 'react';
import UserReview from './UserReview';

const Reviews = () => {
    const [reviews , setReviews] = useState([])
   
    useEffect(() => {
        
            fetch(`https://safe-thicket-05218.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
        
    },[])
    return (
        <div className="my-24">
              <h2 className="text-center text-2xl font-bold text-white uppercase">What clients say</h2>
            <div  className="grid grid-cols-1 lg:grid-cols-3  my-8 gap-4">
             {
                 reviews.slice(-3).map(review => <UserReview key={review._id} review={review} ></UserReview>)
             }
             </div>
        </div>
    );
};

export default Reviews;
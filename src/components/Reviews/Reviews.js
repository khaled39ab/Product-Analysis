import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setreviews] = useReviews();
    return (
        <div>
            {
                // reviews.map(review =><Review
                //     key={review.id}
                //     review={review}
                // ></Review>)
            }
            <h1>this is reviews</h1>
            {
                reviews.map(review => console.log(review))
            }
        </div>
    );
};

export default Reviews;
import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setreviews] = useReviews();
    return (
        <section>
            <h1 className='reviews-title'>Our Customer's Reviews</h1>
            <div className='reviewer-container'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;
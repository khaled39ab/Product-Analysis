import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name, review, rating, image, date} = props.review;
    return (
        <div className='card'>
            <p>{review}</p>
            <h4>Ratings: <span>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
                </span> 
                ({rating})</h4>
            <div className='reviewer'>
                <img src={image} alt="" />
                <div className='reviewer-info'>
                    <p className='reviewer-name'>{name}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
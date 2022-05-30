import { Navigate, useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Image from '../../images/water.jpg'
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [reviews, setreviews] = useReviews();
    const navigate = useNavigate();
    return (
        <section>
            <div className='product-container'>
                <div className="product-info">
                    <h1>Drink Safe Water</h1>
                    <h1 id='color-blue'>Stay Safe Forever</h1>
                    <p>The safe drinking water must be delivered that is pure, wholesome, healthful and potable. Safe water is not necessarily pure, it has some impurities in it. It contains some traces of salts such as magnesium, calcium, carbonates, bicarbonates and others. The degree of purity and safety is a relative term and debatable.</p>
                </div>
                <div className="product-img">
                    <img src={Image} alt="water-bottle" />
                </div>
            </div>
            <div>
                <h1 className='reviews-title'>Our Satisfied Customer</h1>
                <div className='reviewer-container'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <div className='btn-container'>
                    <button  className='reviews-btn' onClick={() => navigate('/reviews')}>See All Reviews </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
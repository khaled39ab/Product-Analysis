import React from 'react';
import Image from '../../images/water.jpg'
import './Home.css'

const Home = () => {
    return (
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
    );
};

export default Home;
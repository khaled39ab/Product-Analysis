import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1>404</h1>
                            </div>

                            <div className="content_box_404">
                                <h2>
                                    Look like you're lost
                                </h2>
                                <p>the page you are looking for is not available!</p>

                                <Link className="link_404" to={'/'}>Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
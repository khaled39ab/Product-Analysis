import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <section className='blogs-container'>
            <div>
                <h1>What is Context Api?</h1>
                <p>
                    1- Context API is a React API that can solve modern apps deal with a range of state management challenges. <br />
                    2- Context Api is a react hook in application that is design to share data at different component without props. <br />
                    3- It's provides a way to pass data through the component. <br />
                    4- Context is generally utilized when multiple components at various nesting levels require access to the same data. <br />
                    5- If want to avoid passing some props through many levels, component composition is often a simpler solution than context.
                </p>
            </div>
            <div>
                <h1>Difference between block element vs inline element</h1>
                <p>
                    1- Block element always start with new line but inline element is not. <br />
                    2- In block element, browser automatically add some margin before and after element but in inline. <br />
                    2- In block element, browser automatically add some margin before and after element but in inline element does not. <br />
                    3- A block element always takes 100% width. And inline element takes it's own space. <br />
                    4- Block element create large structures when compared with inline elements and easily support large file. Inline element create small structures and easily support mostly the files with small structure.
                </p>
            </div>
        </section>
    );
};

export default Blogs;
import React from 'react'
import About from './About'

function Main() {
    return (
        <div className="main">
            <p><b>My Account</b> / Company Profile / Ratings & Reviews</p>
            <div className="main-links">
                <ul>
                    <li>About the Company</li>
                    <li>Product Gallery</li>
                    <li>Ratings & Reviews</li>
                </ul>
            </div>
            <About />
        </div>
    )
}

export default Main;
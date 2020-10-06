import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="user-info" >
                <FontAwesomeIcon icon={faUserCircle} size='5x' />
                <h3 style={{ color: '#006432' }}>Rohit Gupta</h3>
                <p style={{ color: 'GrayText' }}>Supplier, Sahara Fabrics Pvt. Ltd.</p>
                <br />
                <p style={{ color: 'GrayText' }}>Company GSTIN - 123456789012345</p>
            </div>
            <br />
            <div className="user-des">
                <div className="location" >
                    <FontAwesomeIcon icon={faMapMarkerAlt}
                        style={{ marginRight: '10px', color: '#006432' }}
                    />
                    <p style={{ color: 'GrayText' }}>New Delhi, India</p>
                </div>
                <div className="review" >
                    <FontAwesomeIcon icon={faStar}
                        style={{ marginRight: '10px', color: 'yellow' }} />
                    <p style={{ color: 'GrayText' }}>4.5(209)</p>
                </div>
                <div className="mail">
                    <FontAwesomeIcon icon={faEnvelope}
                        style={{ marginRight: '10px', color: '#006432' }} />
                    <p style={{ color: 'GrayText' }}>rohit.gupta@gmail.com</p>
                </div>
            </div>
            <br />
            <br />
            <hr />
            <p style={{ marginLeft: '80px', color: 'GrayText' }}>Company Profile</p>
            <hr />
            <p style={{ marginLeft: '60px', color: 'GrayText' }}>Deal Requests & Wishlists</p>
            <hr />
            <p style={{ marginLeft: '80px', color: 'GrayText' }}>Clients & Payments</p>
            <hr />
            <p style={{ marginLeft: '100px', color: 'GrayText' }}>Chat history</p>
            <hr />
            <br />
            <div className="profile" >
                <FontAwesomeIcon icon={faCog} />
                <p>Edit Profile</p>
            </div>
        </div>
    )
}

export default Sidebar;

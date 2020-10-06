import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <div>
            <div className="navbar">
                <div>
                    <img 
                    src={require('../Image/pretva-logo.png')} 
                    alt="logo" 
                    height="60px" 
                    width="170px"
                    style={{paddingTop:'20px'}}
                    />
                </div>
                <div className="nav-links" >
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Search</li>
                        <li>Feedback and Support</li>
                    </ul>
                </div>
                <div style={{paddingTop:'15px'}}>
                    <FontAwesomeIcon icon={faBell} />
                    <button className="btn outline">My Account</button>
                    <button className="btn colored">Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Nav

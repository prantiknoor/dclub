import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="content">
                <label className='logo'>dClub</label>
                <button className='blue-button'>Dashboard</button>
            </div>
        </div>
    );
}

export default Header;
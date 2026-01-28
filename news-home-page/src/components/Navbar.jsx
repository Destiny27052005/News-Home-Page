import React from 'react';
import Logo from '../assets/logo.svg'
function Navbar() {
    return (
        <div>
            <nav>
                <img src={Logo} alt="Logo" className='logo' />
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Popular</a></li>
                    <li><a href="">Trending</a></li>
                    <li><a href="">Categories</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
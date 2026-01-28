import React from 'react';
import { useState } from 'react';
import Logo from '../assets/logo.svg'
import Open from '../assets/icon-menu.svg'
import Close from '../assets/icon-menu-close.svg'
function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const openNav = () => {
        setIsNavOpen(!isNavOpen);
        document.querySelector('.nav-list').classList.add('show');
    };

    const closeNav = () => {
        setIsNavOpen(!isNavOpen);
        document.querySelector('.nav-list').classList.remove('show');

    };

    return (
        < div >
            <nav>
                <img src={Logo} alt="Logo" className='logo' />

                {!isNavOpen && <img id='open' src={Open} alt="Open" onClick={openNav} />}

                <div className='nav-list' id='navList'>
                    {isNavOpen && <img id='close' src={Close} alt="Close" onClick={closeNav} />}
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Popular</a></li>
                        <li><a href="">Trending</a></li>
                        <li><a href="">Categories</a></li>
                    </ul>
                </div>
            </nav>
        </div >
    );
}

export default Navbar;
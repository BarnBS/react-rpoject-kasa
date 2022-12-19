import React from 'react';

import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

//Returns header with Logo and Navbar
function Header () {
    return (
    <header>
        <Logo/>
        <Navbar/>
    </header>
    )
}

export default Header
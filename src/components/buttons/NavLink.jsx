import React from 'react'

import './NavLink.css';

const NavLink = (link) => {
    // state will go here => need href

    return (
        <div className='navLink-div'>
            <a href="../../page-components/{link}" className='navLink'>{link}</a>
        </div>
    )
};

export default NavButton;
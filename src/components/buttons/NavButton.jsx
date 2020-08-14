import React from 'react'

const NavButton = (props) => {
    // state will go here => need href

    return (
        <div>
            <button>{props.linkTo}</button>
        </div>
    )
};

export default NavButton;
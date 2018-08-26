import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="title">
                <h1>Ph<span className="round">
                    <i className="far fa-address-book"></i>
                </span>nebook</h1>
            </div>
            <div className="forms">
                {props.children}
            </div>
        </header>
    );
};


export default Header;
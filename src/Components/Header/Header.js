import React from 'react';
import logo from '../../images/logo.jpg';

const Header = () => {
    return (
        <div style={{ backgroundColor: 'black', textAlign: 'center', color: 'white'}}>
            <img width="100px" className="pt-5" src={logo} alt="" />
            <h1 className="crack-heading">Crack Platoon</h1>
            <h4 className="pl-5 pr-5 pt-2 pb-5">The Best Football Team of Chittagong</h4>
        </div>
    );
};

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/products" className="nav-link">Products</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/bundles" className="nav-link">Bundles</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">About us</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/cart" className="nav-link">Cart</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
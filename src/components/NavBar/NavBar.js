import React from 'react';
import NavLinks from '../NavLinks/NavLinks';

const NavigationBar = () => {
    return (
        <nav className={'navbar navbar-expand-lg'}>
            <NavLinks />
        </nav>
    )
};

export default NavigationBar;
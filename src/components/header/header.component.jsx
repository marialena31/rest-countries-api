import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

import './header.styles.scss';

const Header = () => (
    <header className='header'>
        <h1 className='heading1 header__title'>Where in the world ?</h1>
        <div className='btn header__change-mode'>
        <FontAwesomeIcon icon={faMoon} className='icon header__change-mode__icon'/>
        <span className='header__change-mode__title'>Dark Mode</span>
        </div>
    </header>

);

export default Header;


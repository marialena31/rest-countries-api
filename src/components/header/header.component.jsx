import React from "react";
import { FaMoon, FaRegMoon } from 'react-icons/fa';

import './header.styles.scss';

const Header = ({theme, setTheme}) => {
    let btnModeText = theme === 'dark' ? 'Light Mode' : 'Dark Mode';

    const ButtonMode = ({theme}) => {
        if(theme === 'dark') {
            return <FaRegMoon className='icon header__change-mode__icon'/>
        } else {
            return <FaMoon className='icon header__change-mode__icon'/>
        }
    }

    const toggleMode = () => {
        if(theme === 'dark') {
            setTheme('light');
            window.localStorage.setItem('themeMode', 'light');
        } else {
            setTheme('dark');
            window.localStorage.setItem('themeMode', 'dark');
        }
        ButtonMode({theme});
    }

    return (
        <header id="header" className={`header ${theme}`}>
            <h1 className='heading1 header__title'>Where in the world ?</h1>
            <div id="toggleDarkMode" className='btn header__change-mode' onClick={toggleMode}>
            <ButtonMode theme={theme} className='icon header__change-mode__icon'/>
            <span className='header__change-mode__title'>{btnModeText}</span>
            </div>
        </header>
    )
};

export default Header;


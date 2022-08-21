import React from 'react';
import headerLogo from '../images/header__logo.svg';

function Header() {
  return (
    <header class="header">
      <a href="#app" className="header__logo">
        <img src={headerLogo} alt="Логотип" className="header__logo-image"/>
      </a>
    </header>
  )
}

export default Header
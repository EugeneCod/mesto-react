import headerLogo from '../images/header__logo.svg';

function Header() {
  return (
    <header className="header">
      <a href="#app" className="header__logo">
        <img src={headerLogo} alt="Логотип" className="header__logo-image" />
      </a>
    </header>
  )
}

export default Header
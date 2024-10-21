import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          Core-Aspect
        </Link>
        <ul className="nav-links"></ul>
      </nav>
    </header>
  );
};

export default Header;

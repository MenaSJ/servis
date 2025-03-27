import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <img src="/img/logo.png" alt="logo" />
        <nav className="header-nav">
          <ul className="nav-ul">
            <li className="nav-li">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/sistemas" className="nav-link">
                Sistemas de acceso
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/instalaciones" className="nav-link">
                Instalaciones electricas
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/automatizacion" className="nav-link">
                Automatizacion Industrial
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/contabilidad" className="nav-link">
                Contabilidad
              </Link>
            </li>
            <li to="/blog" className="nav-li">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-link">Cotizar</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

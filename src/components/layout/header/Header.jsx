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
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-li">
              <a className="nav-link">Sistemas de acceso</a>
            </li>
            <li className="nav-li">
              <a className="nav-link">Instalaciones electricas</a>
            </li>
            <li className="nav-li">
              <a className="nav-link">Automatizacion Industrial</a>
            </li>
            <li className="nav-li">
              <a className="nav-link">Contabilidad</a>
            </li>
            <li className="nav-li">
              <a className="nav-link">Blog</a>
            </li>
            <li className="nav-li">
              <a className="nav-link">Cotizar</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

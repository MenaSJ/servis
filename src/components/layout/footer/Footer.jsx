import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container-top">
          <img src="/img/logo.png" alt="logo" />
          <div className="footer-info">
            <ul className="footer-info-list">
              <li>
                <p className="footer-info-title">Nuestros servicios</p>
              </li>
              <li>
                <a>sistemas de acceso</a>
              </li>
              <li>
                <a>instalaciones electricas</a>
              </li>
              <li>
                <a>Automatizacion industrial</a>
              </li>
              <li>
                <a>contabilidad</a>
              </li>
            </ul>
            <ul className="footer-info-list">
              <li>
                <p className="footer-info-title">nuestros enlaces</p>
              </li>
              <li>
                <a href="">blog</a>
              </li>
              <li>
                <a href="">aviso de privacidad</a>
              </li>
              <li>
                <a href="">politicas de cookies</a>
              </li>
              <li>
                <a href="">terminos y condiciones</a>
              </li>
            </ul>
            <ul className="footer-info-list">
              <li>
                <p className="footer-info-title">Compania</p>
              </li>
              <li>
                <a href="">Contactanos</a>
              </li>
              <li>
                <a href="">Historia</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-container-bottom">
          <p className="copyri">&copy; 2025</p>
          <div className="footer-socials">
            <p>Siguenos:</p>
            <button>X</button>
            <button>X</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import "./Footer.css";
import instagram from "/icons/instagram.png";
import facebook from "/icons/facebook.png";
import whatsapp from "/icons/whatsapp.png";
import envelop from "/icons-svg/envelope-solid.svg";

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
            <button>
              <img src={facebook} alt="" />
            </button>
            <button>
              <img src={instagram} alt="" />
            </button>
            <button>
              <img src={whatsapp} alt="" />
            </button>
            <button>
              <img src={envelop} alt="" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

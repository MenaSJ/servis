import Button from "../../components/common/button/Button";
import Cuestionario from "../../components/forms/cuestionario/Cuestionario";
import "./Sistemas.css";
export default function Sistemas() {
  return (
    <main>
      <section className="section-sistemas section-sistemas-main">
        <div className="section-sistemas-main-img">
          <h2 className="title3">Servicios de acceso (torniquetes)</h2>
          <Button text={"solicitar cotizacion"} />
        </div>
      </section>
      <section className="section-sistemas">
        <div className="section-sistemas-top-title">
          <h2 className="title2 bold-md">
            Por que necesitas sistemas de acceso?
          </h2>
          <p className="section-sistemas-top-txt">
            Los sistemas de acceso son esenciales para mejorar la seguridad y el
            control en tus instalaciones.
          </p>
        </div>
        <div className="section-sistemas-layout1">
          <div className="section-sistemas-layout1-text">
            <h4 className="title3 bold-sm">Mejora de la seguridad</h4>
            <p>
              Implementar un sistema de acceso garantiza que solo las personas
              autorizadas tengan acceso a áreas específicas. Esto evita riesgos
              de seguridad y proporciona un entorno más seguro para los
              empleados y bienes.
            </p>
            <h4 className="title3 bold-sm">Optimización de procesos</h4>
            <p>
              Con los sistemas de acceso automatizados, se reduce la necesidad
              de intervención manual, lo que permite un control más eficiente
              del flujo de personas. Esto mejora la productividad y permite que
              el personal se enfoque en tareas más importantes.
            </p>
          </div>
          <section className="section-sistemas-layout1-img">
            <img src="img/image-torniquete-3.png" alt="" />
          </section>
        </div>
      </section>
      <secttion className=" section-sistemas section-sistemas-layout2">
        <h2 className="title2 bold-md">
          Por que elegirnos como tus proveedores
        </h2>
        <div className="section-sistemas-container">
          <div className="section-sistemas-row">
            <h4 className="title3 bold-sm">Experiencia en el sector</h4>
            <p>
              Con años de experiencia en la industria de sistemas de acceso,
              hemos trabajado con una variedad de empresas, adaptándonos a las
              necesidades de cada una y asegurando una implementación exitosa de
              la tecnología.
            </p>
          </div>
          <div className="section-sistemas-row">
            <h4 className="title3 bold-sm">Soporte técnico y mantenimiento</h4>
            <p>
              Nuestro compromiso no termina con la instalación. Ofrecemos
              soporte técnico continuo y mantenimiento preventivo para
              garantizar que tu sistema funcione sin problemas durante su vida
              útil. En caso de cualquier incidente, nuestro equipo estará listo
              para solucionarlo de manera rápida y eficiente.
            </p>
          </div>
          <div className="section-sistemas-row">
            <h4 className="title3 bold-sm">Soluciones a medida</h4>
            <p>
              Entendemos que cada empresa tiene necesidades diferentes. Por eso,
              ofrecemos soluciones personalizadas que se ajustan a tus
              requerimientos específicos, asegurando que tu sistema de acceso se
              adapte perfectamente a tu infraestructura.
            </p>
          </div>
          <div className="section-sistemas-row">
            <h4 className="title3 bold-sm">Innovación y tecnología de punta</h4>
            <p>
              Utilizamos lo último en tecnología de acceso, incluyendo sistemas
              biométricos, torniquetes inteligentes y lectores de alta
              precisión. Esto te garantiza un sistema seguro, eficiente y fácil
              de usar, con opciones de personalización según tus necesidades.
            </p>
          </div>
        </div>
        <Button text={"Cotizar"} />
      </secttion>
      <section className="section section-column section-blue">
        <div className="section-title">
          <h2 className="title2 bold-md">Estas en buenas manos</h2>
          <h3 className="title3 bold-md">Algunos de nuestros proyectos</h3>
        </div>
        <section className="process-grid">
          <div className="process-card">
            <img className="section-img-3" src="img/sistema1.png" alt="" />
          </div>
          <div className="process-card">
            <img className="section-img-3" src="img/sistema2.png" alt="" />
          </div>
          <div className="process-card">
            <img className="section-img-3" src="img/sistema3.png" alt="" />
          </div>
        </section>
      </section>
      <section className="section-sistemas section-sistemas-form">
        <Cuestionario />
      </section>
    </main>
  );
}

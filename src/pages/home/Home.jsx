import "./Home.css";
import filesolid from "/icons-svg/file-solid.svg";
import headphones from "/icons-svg/headphones-solid.svg";
import comment from "/icons-svg/comment-solid.svg";
import location from "/icons-svg/location-dot-solid.svg";
import phone from "/icons-svg/phone-solid.svg";
import envelope from "/icons-svg/envelope-solid.svg";
import mexico from "/icons/mexico.png";
import Button from "../../components/common/button/Button";
import Cuestionario from "../../components/forms/cuestionario/Cuestionario";
import { useState } from "react";
import AccordionData from "../../data/AccordionData";

export default function Home() {
  console.log(AccordionData);
  const [accordion, setAccordion] = useState(AccordionData[0]);
  return (
    <main>
      <section className="home-section1">
        <div className="home-container-section1">
          <div className="section1-half">
            <h1>En SERVIS COEIN soluciones todo, excepto corazones rotos.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quisquam suscipit quaerat, magni vero, laborum provident debitis
              nisi, consequuntur placeat velit libero unde ipsam tempore
              laudantium praesentium non facilis repellat!
            </p>
            <Button link={"lin"} text={"Solicitar asesorita"} />
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="section-half section2-icons">
          <div>
            <img src={headphones} alt="" />
            <p className="grey">Asesoramiento en todo momento por expertos</p>
          </div>
          <div>
            <p className="blue">
              Seguimiento de su proyecto y comunicacion constante
            </p>
            <img src={comment} alt="" />
          </div>
          <div>
            <img className="mex" src={mexico} alt="" />
            <p className="grey">Servicio en todo el pais</p>
          </div>
          <div>
            <p className="blue">
              Ofrecemos reporte detallado del servicio adquirido con nosotros
            </p>
            <img src={filesolid} alt="" />
          </div>
        </div>
        <div className="section-half">
          <h2>
            SERVIS COEIN, tu aliado con mas de una solucion para tu empresa y
            hogar
          </h2>
          <p>
            {" "}
            A lo largo de nuestros años de experiencia, hemos encontrado
            múltiples problemas que presentan las empresas día a día, por lo que
            un grupo de expertos nos hemos reunido para formar SERVIS COEIN, un
            equipo multidisciplinario que te ayudará a encontrar la solución que
            tanto has buscado ya sea si eres un emprendedor o un empresario,
            queremos apoyarte. Aquí encontrarás desde un servicio Contable para
            tu compañía hasta ofrecerte un sistema de acceso para llevar un
            mejor control de tus ingresos. Nuestro principal objetivo es que tus
            ganancias se vean beneficiadas. Además, ayudamos a nuestros clientes
            con el servicio de instalaciones eléctricas residenciales ofreciendo
            un equipo profesional, con experiencia y confiable para que tú no te
            preocupes de problemas de luz a corto o largo plazo, nosotros nos
            encargamos de todo para que vivas tranquilo
          </p>
        </div>
      </section>
      <HomeAcordion
        AccordionData={AccordionData}
        accordion={accordion}
        setAccordion={setAccordion}
      />
      <section className="section">
        <div className="section-half">
          <h2 className="title3">Este es un titulo</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              dolore natus totam voluptate porro esse, officia, quas eum sint
              deserunt eius, sapiente aliquid nostrum numquam ut earum quo
              beatae quibusdam.
            </p>
            <Button text={"Informacion"} />
          </div>
        </div>
        <div className="section-half">
          <img
            className="section-img-half"
            src="img/image-torniquete-1.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="section section-column section-blue">
        <div className="section-title">
          <h2 className="title2 bold-md">Estas en buenas manos</h2>
          <h3 className="title3 bold-md">Algunos de nuestros proyectos</h3>
        </div>
        <section className="section-img">
          <img
            className="section-img-3"
            src="img/image-torniquete-1.jpg"
            alt=""
          />
          <img
            className="section-img-3"
            src="img/image-torniquete-1.jpg"
            alt=""
          />
          <img
            className="section-img-3"
            src="img/image-torniquete-1.jpg"
            alt=""
          />
        </section>
      </section>
      <section className="section section-top">
        <div className="section-half">
          <h2 className="title3 bold-md">
            Contactanos y un experto te ayudara en cualquier momento
          </h2>
          <p>
            ¿Quieres realizar alguna cotización o necesitas ayuda sobre alguno
            de nuestros servicios? Pónte en contacto con nosotros y con gusto un
            asesor de SERVI COEIN te ayudará.{" "}
          </p>
          <div className="section-info">
            <div className="section-row section-row-img">
              <div className="img-center">
                <img src={location} alt="" />
              </div>
              <p>
                Morelos no.10, San Francisco Tehotihuacan, San Morelos de Puerto
                Rico, Monterrey, C.P. 340943
              </p>
            </div>
            <div className="section-row section-row-img">
              <img src={envelope} alt="" />
              <p>contacto@serviscoein.com</p>
            </div>
            <div className="section-row section-row-img">
              <img src={phone} alt="" />
              <p>22235341545</p>
            </div>
          </div>
        </div>
        <Cuestionario />
      </section>
    </main>
  );
}

function HomeAcordion({ AccordionData, accordion, setAccordion }) {
  return (
    <section className="accordion-container">
      <div className="accordion-top">
        {AccordionData.map((data) => (
          <button
            className="accordion-btn"
            key={data.id}
            onClick={() => setAccordion(data)}
          >
            {data.title}
          </button>
        ))}
      </div>
      <div className="accordion-bottom">
        <img src="img/image-torniquete-2.jpg" alt="image" />
        <div className="accordion-info">
          <h2 className="accordion-title">{accordion.title}</h2>
          <p className="accordion-text">{accordion.description}</p>
        </div>
      </div>
    </section>
  );
}

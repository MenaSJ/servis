import "./Home.css";
import filesolid from "/icons-svg/file-solid.svg";
import headphones from "/icons-svg/headphones-solid.svg";
import comment from "/icons-svg/comment-solid.svg";
import mexico from "/icons/mexico.png";
import Button from "../../components/common/button/Button";
import Cuestionario from "../../components/forms/cuestionario/Cuestionario";

export default function Home() {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Cuestionario />
    </main>
  );
}

function Section1() {
  return (
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
  );
}

function Section2() {
  return (
    <section className="section2">
      <div className="section2-half section2-icons">
        <div>
          <img src={headphones} alt="" />
          <p className="grey">Asesoramiento en todo momento po expertos</p>
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
      <div className="section2-half">
        <h2>
          SERVIS COEIN, tu aliado con mas de una solucion para tu empresa y
          hogar
        </h2>
        <p>
          {" "}
          A lo largo de nuestros años de experiencia, hemos encontrado múltiples
          problemas que presentan las empresas día a día, por lo que un grupo de
          expertos nos hemos reunido para formar SERVIS COEIN, un equipo
          multidisciplinario que te ayudará a encontrar la solución que tanto
          has buscado ya sea si eres un emprendedor o un empresario, queremos
          apoyarte. Aquí encontrarás desde un servicio Contable para tu compañía
          hasta ofrecerte un sistema de acceso para llevar un mejor control de
          tus ingresos. Nuestro principal objetivo es que tus ganancias se vean
          beneficiadas. Además, ayudamos a nuestros clientes con el servicio de
          instalaciones eléctricas residenciales ofreciendo un equipo
          profesional, con experiencia y confiable para que tú no te preocupes
          de problemas de luz a corto o largo plazo, nosotros nos encargamos de
          todo para que vivas tranquilo
        </p>
      </div>
    </section>
  );
}

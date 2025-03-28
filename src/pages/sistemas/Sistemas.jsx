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
          <h2 className="title3 bold-md">
            Por que necesitas sistemas de acceso?
          </h2>
          <p className="section-sistemas-top-txt">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            nisi atque ex voluptates.
          </p>
        </div>
        <div className="section-sistemas-layout1">
          <div className="section-sistemas-layout1-text">
            <h4>title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              veniam aperiam recusandae qui aliquam iste reiciendis ut
            </p>
            <h4>title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              veniam aperiam recusandae qui aliquam iste reiciendis ut
            </p>
            <h4>title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              veniam aperiam recusandae qui aliquam iste reiciendis ut
            </p>
          </div>
          <section className="section-sistemas-layout1-img">
            <img src="img/image-torniquete-3.png" alt="" />
          </section>
        </div>
      </section>
      <secttion className=" section-sistemas section-sistemas-layout2">
        <h2 className="title3 bold-md">
          Por que elegirnos como tus proveedores
        </h2>
        <div className="section-sistemas-container">
          <div className="section-sistemas-row">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              hic veniam cumque aut officiis praesentium explicabo ea quas cum
              officia harum, dolorem, eaque ab eligendi nobis. Tempore
              necessitatibus possimus voluptatum.
            </p>
          </div>
          <div className="section-sistemas-row">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              hic veniam cumque aut officiis praesentium explicabo ea quas cum
              officia harum, dolorem, eaque ab eligendi nobis. Tempore
              necessitatibus possimus voluptatum.
            </p>
          </div>
          <div className="section-sistemas-row">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              hic veniam cumque aut officiis praesentium explicabo ea quas cum
              officia harum, dolorem, eaque ab eligendi nobis. Tempore
              necessitatibus possimus voluptatum.
            </p>
          </div>
          <div className="section-sistemas-row">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              hic veniam cumque aut officiis praesentium explicabo ea quas cum
              officia harum, dolorem, eaque ab eligendi nobis. Tempore
              necessitatibus possimus voluptatum.
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
      <section className="section-sistemas section-sistemas-form">
        <Cuestionario />
      </section>
    </main>
  );
}

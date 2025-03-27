import Cuestionario from "../../components/forms/cuestionario/Cuestionario";
import Button from "../../components/common/button/Button";
import "./Automatizacion.css";

export default function Automatizacion() {
  return (
    <main>
      <section className="section-auto section-sistemas-main">
        <div className="section-sistemas-main-img">
          <h2 className="title3">Automatizacion Industrial</h2>
          <Button text={"solicitar cotizacion"} />
        </div>
      </section>
      <section className="section-auto section-auto-half">
        <div className="section-half">
          <h3 className="title3 bold-md">
            Te ayudamos a dar el siguiente paso en la industria
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            beatae, cum fuga obcaecati quas nam veritatis minima, quia, sint
            excepturi velit nesciunt harum atque quaerat fugiat ea maiores
            repudiandae nulla!
          </p>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="section-half">
          <div>
            <img src="" alt="" />
          </div>
          <div className="section-auto-description">
            <h4>Como te beneficia la utomatizacion Industrial</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, qui corrupti, modi nesciunt repellendus nostrum
              reiciendis doloribus enim aliquid nisi illo. Libero nulla magnam
              deserunt vel beatae. Sint, dolor hic.
            </p>
          </div>
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
      <section className="section-auto">
        <Cuestionario />
      </section>
    </main>
  );
}

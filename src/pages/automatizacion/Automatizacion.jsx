import Cuestionario from "../../components/forms/cuestionario/Cuestionario";
import Button from "../../components/common/button/Button";
import "./Automatizacion.css";
const processSteps = [
  {
    id: 1,
    title: "Para brindarte una solución real",
    description:
      "Conocemos tus complicaciones, objetivos y empresa para detectar puntos débiles y fuertes, lo que nos permitirá generar un proceso de automatización.",
  },
  {
    id: 2,
    title: "Creamos una solución",
    description:
      "Analizamos tu empresa y objetivos para elaborar un plan de automatización a la medida de tus necesidades.",
  },
  {
    id: 3,
    title: "Implementamos",
    description:
      "En la implementación, cada parte del proceso se verá beneficiada, logrando procesos más rápidos y eficientes que aumentan producción e ingresos.",
  },
];

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
          <div className="project-card">
            <div className="project-info">
              <h3>Te ayudamos a dar el siguiente paso en la industria</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, qui corrupti, modi nesciunt repellendus nostrum
                reiciendis doloribus enim aliquid nisi illo. Libero nulla magnam
                deserunt vel beatae. Sint, dolor hic.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5"
              className="project-image"
            />
          </div>
        </div>
        <div className="section-half">
          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              className="project-image"
            />
            <div className="project-info">
              <h3>Como te beneficia la utomatizacion Industrial</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, qui corrupti, modi nesciunt repellendus nostrum
                reiciendis doloribus enim aliquid nisi illo. Libero nulla magnam
                deserunt vel beatae. Sint, dolor hic.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="process-section">
        <h2>Cómo se creará tu proceso automatizado</h2>
        <div className="process-grid">
          {processSteps.map((step) => (
            <div style={{ gap: "20px" }} key={step.id} className="process-card">
              <div className="process-number">{step.id}</div>
              <div className="process-info">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-sistemas section-sistemas-form">
        <Cuestionario />
      </section>
    </main>
  );
}

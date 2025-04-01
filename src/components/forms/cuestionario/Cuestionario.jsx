import "./Cuestionario.css";

export default function Cuestionario() {
  return (
    <div className="form section-half">
      <form action="submit">
        <h1>Dejanos tus datos y te contactaremos en un mínimo de 24 horas</h1>
        <div className="form-top">
          <div className="form-group form-half">
            <label htmlFor="nombre">
              <strong>Nombre</strong>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              className="form-input"
            />
          </div>
          <div className="form-group form-half">
            <label htmlFor="telefono">
              <strong>Teléfono</strong>
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Número de teléfono"
              className="form-input"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <strong>Correo electrónico</strong>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">
            <strong>¿Cómo podemos ayudarte?</strong>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Describe el tipo de servicio que requiere"
            className="form-textarea"
            rows="4"
          ></textarea>
        </div>
        <div className="separator"></div>
        <button
          onClick={(e) => e.preventDefault()}
          type="submit"
          className="submit-button"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

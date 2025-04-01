import React from "react";
import Cuestionario from "../../components/forms/cuestionario/Cuestionario";
import { FaBolt, FaTools, FaHome } from "react-icons/fa";
import "./Instalaciones.css";
import Button from "../../components/common/button/Button";

const Instalaciones = () => {
  const services = [
    {
      title: "Instalaciones eléctricas completas",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit superintax qui odi aut fugit, sed quid imperduntur magni doloresios qui intonar voluptatem.",
      cta: "Learn more",
      icon: <FaBolt className="service-icon" />,
    },
    {
      title: "Mantenimiento",
      description:
        "Amet, consectetur adipiscing elit, sed do eiusmod temps inindiquant ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      cta: "Learn more",
      icon: <FaTools className="service-icon" />,
    },
    {
      title: "Remodelación de instalación eléctrica",
      description:
        "Consequinum magni doloresios qui intonar voluptatem aqui metatur. Nouse porno obliguam est, qui odiorem ipsum quia dolor.",
      cta: "Learn more",
      icon: <FaHome className="service-icon" />,
    },
  ];

  const projects = [
    {
      title: "Instalación residencial",
      description: "Casa moderna con sistema eléctrico completo",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Oficinas corporativas",
      description: "Sistema eléctrico para edificio de oficinas",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Local comercial",
      description: "Instalación eléctrica para tienda retail",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <main className="instalaciones-container">
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="title3">Automatizacion Industrial</h2>
          <Button text={"Solicitar Asesoria"} />
        </div>
      </section>
      <section className="services-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="learn-more-btn">{service.cta}</button>
            </div>
          ))}
        </div>
      </section>

      <section className="expert-section">
        <h2 className="title3 bold-md">
          Los expertos en instalaciones electricas y mantenimiento
        </h2>
        <p className="expert-intro">
          Ofrecemos dos tipos de servicios en este ambito ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore
        </p>

        <div className="expert-services">
          <div className="expert-service">
            <h3>Instalaciones electricas para el hogar</h3>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur.
            </p>
          </div>

          <div className="expert-service">
            <h3>Cotización para instalación comercial</h3>
            <p>
              Amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h2 className="title3 bold-md">Estas en buenas manos</h2>
        <p className="projects-subtitle">Algunos de nuestros proyectos</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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
};

export default Instalaciones;

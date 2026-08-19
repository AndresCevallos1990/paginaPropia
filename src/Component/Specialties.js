import React from 'react'

const Specialties = () => {
  return (
    <section className="specialties" id="especialidades">

      <div className="specialties__container">

        {/* ENCABEZADO */}

        <div className="specialties__heading">

          <span className="specialties__eyebrow">
            ÁREAS PROFESIONALES
          </span>

          <h2>
            Una profesión,
            <span>distintas formas de cuidar.</span>
          </h2>

          <p>
            Un enfoque integral que combina estética, cuidado de la piel,
            bienestar corporal y formación profesional.
          </p>

        </div>


        {/* ESPECIALIDADES */}

        <div className="specialties__grid">

          {/* DERMOCOSMIATRÍA */}

          <article className="specialty-card">

            <span className="specialty-card__number">
              01
            </span>

            <div className="specialty-card__icon">
              ✦
            </div>

            <div className="specialty-card__content">

              <h3>
                Dermocosmiatría
              </h3>

              <p>
                Cuidado profesional de la piel mediante tratamientos
                personalizados según las necesidades de cada persona.
              </p>

              <a href="#tratamientos">
                Conocer tratamientos
                <span>→</span>
              </a>

            </div>

          </article>


          {/* ESTÉTICA */}

          <article className="specialty-card">

            <span className="specialty-card__number">
              02
            </span>

            <div className="specialty-card__icon">
              ✧
            </div>

            <div className="specialty-card__content">

              <h3>
                Estética
              </h3>

              <p>
                Tratamientos faciales y corporales pensados para acompañar
                el cuidado, la apariencia y el bienestar personal.
              </p>

              <a href="#tratamientos">
                Ver tratamientos
                <span>→</span>
              </a>

            </div>

          </article>


          {/* MASOTERAPIA */}

          <article className="specialty-card">

            <span className="specialty-card__number">
              03
            </span>

            <div className="specialty-card__icon">
              ◇
            </div>

            <div className="specialty-card__content">

              <h3>
                Masoterapia
              </h3>

              <p>
                Técnicas manuales orientadas al bienestar, la relajación
                y el cuidado integral del cuerpo.
              </p>

              <a href="#tratamientos">
                Conocer más
                <span>→</span>
              </a>

            </div>

          </article>


          {/* DOCENCIA */}

          <article className="specialty-card specialty-card--featured">

            <span className="specialty-card__number">
              04
            </span>

            <div className="specialty-card__icon">
              ✦
            </div>

            <div className="specialty-card__content">

              <h3>
                Formación
              </h3>

              <p>
                Profesora en formación estética y docente de L'Étoile,
                dedicada también a compartir conocimientos y experiencias.
              </p>

              <a href="#formacion">
                Conocer formación
                <span>→</span>
              </a>

            </div>

          </article>

        </div>

      </div>

    </section>
  )
}

export default Specialties
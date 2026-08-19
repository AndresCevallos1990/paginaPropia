import React from 'react'

const Formation = () => {

  return (
    <section className="formation" id="formacion">

      <div className="formation__container">

        {/* ENCABEZADO */}

        <div className="formation__heading">

          <span className="formation__eyebrow">
            FORMACIÓN Y DOCENCIA
          </span>

          <h2>
            El conocimiento
            <span>también se comparte.</span>
          </h2>

        </div>


        {/* CONTENIDO PRINCIPAL */}

        <div className="formation__content">

          {/* IMAGEN */}

          <div className="formation__visual">

            <div className="formation__image-wrapper">

              <img
                src="/images/patricia-formacion.webp"
                alt="Patricia Calderón - Formación estética"
                className="formation__image"
              />

            </div>

            <span className="formation__visual-label">
              Formación continua
            </span>

          </div>


          {/* INFORMACIÓN */}

          <div className="formation__info">

            <div className="formation__intro">

              <span>
                DOCENCIA
              </span>

              <h3>
                Profesora en
                <br />
                formación estética
              </h3>

              <p>
                La formación es una parte fundamental de mi recorrido
                profesional. Aprender, actualizarse y compartir conocimientos
                permite seguir creciendo dentro de una profesión que se
                encuentra en constante evolución.
              </p>

            </div>


            {/* DATOS */}

            <div className="formation__items">

              <div className="formation__item">

                <span className="formation__item-number">
                  01
                </span>

                <div>
                  <h4>
                    Formación profesional
                  </h4>

                  <p>
                    Formación y actualización constante dentro del área
                    estética y dermocosmética.
                  </p>
                </div>

              </div>


              <div className="formation__item">

                <span className="formation__item-number">
                  02
                </span>

                <div>
                  <h4>
                    Docencia
                  </h4>

                  <p>
                    Docente de L'Étoile y acompañamiento en la formación
                    de nuevos profesionales.
                  </p>
                </div>

              </div>


              <div className="formation__item">

                <span className="formation__item-number">
                  03
                </span>

                <div>
                  <h4>
                    Formación continua
                  </h4>

                  <p>
                    Incorporación permanente de nuevos conocimientos,
                    técnicas y herramientas.
                  </p>
                </div>

              </div>

            </div>


            {/* BOTÓN */}

            <a
              href="#contacto"
              className="formation__button"
            >
              Consultar por capacitaciones

              <span>
                →
              </span>

            </a>

          </div>

        </div>


        {/* FRASE FINAL */}

        <div className="formation__quote">

          <span>“</span>

          <p>
            La formación no termina cuando obtenemos un título;
            continúa cada vez que decidimos seguir aprendiendo.
          </p>

          <small>
            PATRICIA CALDERÓN
          </small>

        </div>

      </div>

    </section>
  )
}

export default Formation
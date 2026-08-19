import React from 'react'

const Timeline = () => {

  const trayectoria = [
    {
      year: '01',
      title: 'Formación estética',
      description:
        'Inicio y desarrollo de la formación profesional dentro del área de estética y cuidado personal.'
    },
    {
      year: '02',
      title: 'Dermocosmiatría',
      description:
        'Especialización y profundización de conocimientos relacionados con el cuidado y tratamiento de la piel.'
    },
    {
      year: '03',
      title: 'Masoterapia',
      description:
        'Incorporación de técnicas de masoterapia orientadas al bienestar y cuidado corporal.'
    },
    {
      year: '04',
      title: 'Docencia',
      description:
        'Desarrollo de la actividad docente y participación en la formación de nuevos profesionales.'
    },
    {
      year: '05',
      title: 'Actualidad',
      description:
        'Formación continua, actualización profesional y desarrollo de nuevos conocimientos.'
    }
  ]

  return (
    <section className="timeline" id="trayectoria">

      <div className="timeline__container">

        {/* ENCABEZADO */}

        <div className="timeline__heading">

          <span className="timeline__eyebrow">
            TRAYECTORIA
          </span>

          <h2>
            Un camino de
            <span>aprendizaje continuo.</span>
          </h2>

          <p>
            La experiencia profesional se construye a través del aprendizaje,
            la práctica y la búsqueda constante de nuevas herramientas.
          </p>

        </div>


        {/* TIMELINE */}

        <div className="timeline__wrapper">

          <div className="timeline__line"></div>

          {trayectoria.map((item, index) => (

            <article
              className={`timeline__item ${
                index % 2 === 0
                  ? 'timeline__item--left'
                  : 'timeline__item--right'
              }`}
              key={item.year}
            >

              {/* PUNTO */}

              <div className="timeline__point">
                <span></span>
              </div>


              {/* CONTENIDO */}

              <div className="timeline__card">

                <span className="timeline__number">
                  {item.year}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </article>

          ))}

        </div>


        {/* FRASE FINAL */}

        <div className="timeline__footer">

          <span>
            ✦
          </span>

          <p>
            Seguir aprendiendo es parte de seguir creciendo.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Timeline
import React from 'react'

const Treatments = () => {

  const treatments = [
    {
      number: '01',
      category: 'Facial',
      title: 'Higiene facial',
      description:
        'Tratamiento orientado a la limpieza, purificación y cuidado de la piel.'
    },
    {
      number: '02',
      category: 'Facial',
      title: 'Hidratación',
      description:
        'Tratamientos destinados a mejorar la hidratación y el aspecto general de la piel.'
    },
    {
      number: '03',
      category: 'Facial',
      title: 'Tratamientos personalizados',
      description:
        'Protocolos adaptados a las características y necesidades particulares de cada piel.'
    },
    {
      number: '04',
      category: 'Corporal',
      title: 'Masoterapia',
      description:
        'Técnicas manuales enfocadas en el bienestar, la relajación y el cuidado corporal.'
    }
  ]

  return (
    <section className="treatments" id="tratamientos">

      <div className="treatments__container">

        {/* ENCABEZADO */}

        <div className="treatments__heading">

          <div>

            <span className="treatments__eyebrow">
              TRATAMIENTOS
            </span>

            <h2>
              Cuidado pensado
              <span>para vos.</span>
            </h2>

          </div>

          <p>
            Cada tratamiento parte de una evaluación y de una mirada
            personalizada, buscando acompañar las necesidades de cada persona.
          </p>

        </div>


        {/* LISTA DE TRATAMIENTOS */}

        <div className="treatments__list">

          {treatments.map((treatment) => (

            <article
              className="treatment"
              key={treatment.number}
            >

              <span className="treatment__number">
                {treatment.number}
              </span>

              <span className="treatment__category">
                {treatment.category}
              </span>

              <div className="treatment__main">

                <h3>
                  {treatment.title}
                </h3>

                <p>
                  {treatment.description}
                </p>

              </div>

              <a
                href="#contacto"
                className="treatment__link"
              >
                <span>
                  Consultar
                </span>

                <strong>
                  →
                </strong>
              </a>

            </article>

          ))}

        </div>


        {/* PIE DE SECCIÓN */}

        <div className="treatments__bottom">

          <p>
            ¿No sabés qué tratamiento es el adecuado para vos?
          </p>

          <a href="#contacto">
            Consultar
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Treatments
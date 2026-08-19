import React from 'react'

const pasos = [
  {
    numero: '01',
    titulo: 'HABLAMOS',
    descripcion:
      'Me contás qué necesitás, qué objetivo tiene tu proyecto y qué querés conseguir con tu sitio web.'
  },
  {
    numero: '02',
    titulo: 'PLANIFICAMOS',
    descripcion:
      'Definimos la estructura, el diseño, las funcionalidades y la mejor tecnología para llevarlo adelante.'
  },
  {
    numero: '03',
    titulo: 'DESARROLLAMOS',
    descripcion:
      'Construyo tu sitio y voy trabajando cada parte para que el resultado sea rápido, moderno y responsive.'
  },
  {
    numero: '04',
    titulo: 'PUBLICAMOS',
    descripcion:
      'Probamos todo, hacemos los últimos ajustes y dejamos tu proyecto funcionando para que puedas empezar.'
  }
]

const Proceso = () => {
  return (
    <section className="proceso" id="proceso">

      <div className="proceso__glow"></div>

      <div className="proceso__container">

        <header className="proceso__header">

          <div className="proceso__eyebrow">
            <span className="proceso__eyebrow-line"></span>
            CÓMO TRABAJO
          </div>

          <h2 className="proceso__title">
            DE LA IDEA
            <span>A LA WEB</span>
          </h2>

          <p className="proceso__description">
            Un proceso simple y transparente para convertir una idea
            en una experiencia digital profesional.
          </p>

        </header>


        <div className="proceso__steps">

          <div className="proceso__line"></div>

          {pasos.map((paso, index) => (

            <article
              className="proceso__step"
              key={paso.numero}
            >

              <div className="proceso__number">
                {paso.numero}
              </div>

              <div className="proceso__dot">
                <span></span>
              </div>

              <div className="proceso__content">

                <span className="proceso__step-label">
                  PASO {paso.numero}
                </span>

                <h3>
                  {paso.titulo}
                </h3>

                <p>
                  {paso.descripcion}
                </p>

              </div>

            </article>

          ))}

        </div>


        <div className="proceso__bottom">

          <span className="proceso__bottom-line"></span>

          <p>
            SIN VUELTAS. SIN COMPLICACIONES.
            <strong> SOLO UN BUEN RESULTADO.</strong>
          </p>

          <span className="proceso__bottom-line"></span>

        </div>

      </div>

    </section>
  )
}

export default Proceso
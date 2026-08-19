import React from 'react'

const proyectos = [
  {
    numero: '01',
    categoria: 'DESARROLLO WEB',
    titulo: 'CleanSAS',
    descripcion:
      'Sitio web moderno, responsive y desarrollado para ofrecer una experiencia clara y profesional.',
    tecnologias: ['React', 'Responsive', 'UI/UX'],
    imagen: '/proyectos/cleansas.jpg',
    url: '#'
  },
  {
    numero: '02',
    categoria: 'SITIO CORPORATIVO',
    titulo: 'Proyecto 02',
    descripcion:
      'Una experiencia digital pensada para presentar una empresa, sus servicios y generar nuevos contactos.',
    tecnologias: ['React', 'CSS', 'SEO'],
    imagen: '/proyectos/proyecto-02.jpg',
    url: '#'
  },
  {
    numero: '03',
    categoria: 'APLICACIÓN WEB',
    titulo: 'Proyecto 03',
    descripcion:
      'Aplicación web dinámica con componentes reutilizables y funcionalidades desarrolladas a medida.',
    tecnologias: ['React', 'Firebase', 'JavaScript'],
    imagen: '/proyectos/proyecto-03.jpg',
    url: '#'
  }
]

const Proyectos = () => {
  return (
    <section className="proyectos" id="proyectos">

      <div className="proyectos__glow proyectos__glow--one"></div>
      <div className="proyectos__glow proyectos__glow--two"></div>

      <div className="proyectos__container">

        <header className="proyectos__header">

          <div className="proyectos__eyebrow">
            <span className="proyectos__eyebrow-line"></span>
            TRABAJOS SELECCIONADOS
          </div>

          <h2 className="proyectos__title">
            PROYECTOS
            <span>REALES</span>
          </h2>

          <p className="proyectos__description">
            Algunos de los proyectos y experiencias digitales que forman
            parte de mi trabajo.
          </p>

        </header>


        <div className="proyectos__grid">

          {proyectos.map((proyecto) => (

            <article className="proyecto" key={proyecto.numero}>

              <div className="proyecto__image">

                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                />

                <div className="proyecto__overlay">
                  <a
                    href={proyecto.url}
                    target="_blank"
                    rel="noreferrer"
                    className="proyecto__view"
                  >
                    VER PROYECTO
                    <span>↗</span>
                  </a>
                </div>

                <div className="proyecto__number">
                  {proyecto.numero}
                </div>

              </div>


              <div className="proyecto__content">

                <span className="proyecto__category">
                  {proyecto.categoria}
                </span>

                <h3>
                  {proyecto.titulo}
                </h3>

                <p>
                  {proyecto.descripcion}
                </p>

                <div className="proyecto__technologies">

                  {proyecto.tecnologias.map((tecnologia) => (
                    <span key={tecnologia}>
                      {tecnologia}
                    </span>
                  ))}

                </div>

              </div>

              <div className="proyecto__line"></div>

            </article>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Proyectos
import React from 'react'

const planes = [
  {
    numero: '01',
    tipo: 'BÁSICO',
    titulo: 'Plan Básico',
    precio: '$500.000',
    descripcion: 'Una presencia web profesional, moderna y lista para empezar a crecer.',
    caracteristicas: [
      'Hasta 3 páginas',
      'Diseño responsive',
      'Formulario de contacto',
      'SEO básico',
      'Diseño moderno'
    ]
  },
  {
    numero: '02',
    tipo: 'PROFESIONAL',
    titulo: 'Plan Profesional',
    precio: '$1.100.000',
    descripcion: 'Una web completa, dinámica y preparada para ofrecer una experiencia superior.',
    destacado: true,
    caracteristicas: [
      'Hasta 6 páginas',
      'React',
      'Componentes reutilizables',
      'Formularios avanzados',
      'Filtros',
      'Animaciones',
      'Integración con WhatsApp',
      'Google Maps',
      'Optimización'
    ]
  },
  {
    numero: '03',
    tipo: 'PREMIUM',
    titulo: 'Plan Premium',
    precio: '$2.500.000',
    descripcion: 'Una solución web completa con sistemas, administración y datos.',
    caracteristicas: [
      'Todo lo del Plan Profesional',
      'Login',
      'Panel administrador',
      'Firebase',
      'Base de datos',
      'Cloudinary',
      'Dashboard',
      'Estadísticas',
      'Roles de usuarios',
      'Hosting'
    ]
  }
]

const Planes = () => {
  return (
    <section className="planes" id="planes">

      <div className="planes__glow planes__glow--one"></div>
      <div className="planes__glow planes__glow--two"></div>

      <div className="planes__container">

        <header className="planes__header">

          <div className="planes__eyebrow">
            <span className="planes__eyebrow-line"></span>
            PRECIOS & SOLUCIONES
          </div>

          <h2 className="planes__title">
            ELEGÍ TU
            <span>PLAN</span>
          </h2>

          <p className="planes__description">
            Diferentes niveles de desarrollo para adaptarnos a las necesidades
            de cada proyecto. Desde una web simple hasta una plataforma
            completa.
          </p>

        </header>

        <div className="planes__grid">

          {planes.map((plan) => (

            <article
              key={plan.numero}
              className={`plan ${plan.destacado ? 'plan--destacado' : ''}`}
            >

              {plan.destacado && (
                <div className="plan__badge">
                  MÁS ELEGIDO
                </div>
              )}


              <div className="plan__top">
                <span className="plan__type">
                  {plan.tipo}
                </span>

                <div className="plan__icon">
                  +
                </div>
              </div>

              <h3 className="plan__title">
                {plan.titulo}
              </h3>

              <p className="plan__description">
                {plan.descripcion}
              </p>


              <div className="plan__separator"></div>

              <ul className="plan__features">
                {plan.caracteristicas.map((caracteristica, index) => (
                  <li key={index}>
                    <span>+</span>
                    {caracteristica}
                  </li>
                ))}
              </ul>

              <button className="plan__button">
                CONSULTAR
                <span>↗</span>
              </button>

              <div className="plan__line"></div>

            </article>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Planes
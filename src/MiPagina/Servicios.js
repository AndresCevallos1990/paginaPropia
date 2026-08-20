import React from 'react'

const Servicios = () => {
  return (
    <section className="servicios">

      <div className="servicios__container">

        <div className="servicios__header">

          <div className="servicios__eyebrow">
            <span className="servicios__eyebrow-line"></span>
            SERVICIOS
          </div>

          <h2 className="servicios__title">
            ¿Qué podemos hacer
            <span>por vos?</span>
          </h2>

          <p className="servicios__description">
            Desarrollo soluciones digitales pensadas para cada proyecto,
            desde sitios web profesionales hasta aplicaciones y sistemas
            personalizados.
          </p>

        </div>


        <div className="servicios__grid">

          <article className="servicio">

            <div className="servicio__number">
              01
            </div>

            <div className="servicio__icon">
              &lt;/&gt;
            </div>

            <h3>
              Desarrollo Web
            </h3>

            <p>
              Sitios web modernos, rápidos y adaptados a cualquier
              dispositivo, pensados para representar tu negocio
              profesionalmente.
            </p>

            <div className="servicio__line"></div>

          </article>


          <article className="servicio">

            <div className="servicio__number">
              02
            </div>

            <div className="servicio__icon">
              ◈
            </div>

            <h3>
              Aplicaciones
            </h3>

            <p>
              Aplicaciones web y sistemas personalizados desarrollados
              según las necesidades específicas de cada proyecto.
            </p>

            <div className="servicio__line"></div>

          </article>


          <article className="servicio">

            <div className="servicio__number">
              03
            </div>

            <div className="servicio__icon">
              ⚙
            </div>

            <h3>
              Automatización
            </h3>

            <p>
              Desarrollo de herramientas y procesos automatizados para
              reducir tareas repetitivas y mejorar el funcionamiento
              de tu negocio.
            </p>

            <div className="servicio__line"></div>

          </article>


          <article className="servicio">

            <div className="servicio__number">
              04
            </div>

            <div className="servicio__icon">
              ↗
            </div>

            <h3>
              Integraciones
            </h3>

            <p>
              Conexión con APIs, bases de datos, servicios externos y
              diferentes herramientas para crear soluciones completas.
            </p>

            <div className="servicio__line"></div>

          </article>

        </div>

      </div>

    </section>
  )
}

export default Servicios
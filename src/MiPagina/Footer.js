import React, { useEffect, useState } from 'react'

const Footer = () => {

  const [hora, setHora] = useState('')

  useEffect(() => {

    const actualizarHora = () => {

      const ahora = new Date()

      setHora(
        ahora.toLocaleTimeString('es-AR', {
          hour: '2-digit',
          minute: '2-digit'
        })
      )

    }

    actualizarHora()

    const intervalo = setInterval(actualizarHora, 1000)

    return () => clearInterval(intervalo)

  }, [])


  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  return (

    <footer className="footer">

      {/* =========================================
          DECORACIÓN
      ========================================= */}

      <div className="footer__grid"></div>

      <div className="footer__glow footer__glow--one"></div>
      <div className="footer__glow footer__glow--two"></div>


      <div className="footer__container">


        {/* =========================================
            CTA PRINCIPAL
        ========================================= */}

        <section className="footer__hero">

          <div className="footer__hero-label">
            <span className="footer__pulse"></span>

            DISPONIBLE PARA NUEVOS PROYECTOS
          </div>


          <h2 className="footer__hero-title">

            ¿TENÉS UNA
            <span>IDEA?</span>

          </h2>


          <p className="footer__hero-description">
            No importa si recién estás empezando o si ya tenés
            un proyecto en marcha. Podemos convertirlo en algo
            que realmente destaque.
          </p>


          <a
            href="#contacto"
            className="footer__cta"
          >

            <span>HABLEMOS DE TU PROYECTO</span>

            <strong>↗</strong>

          </a>

        </section>



        {/* =========================================
            SEPARADOR
        ========================================= */}

        <div className="footer__separator">

          <span>01</span>

          <div></div>

          <span>2026</span>

        </div>



        {/* =========================================
            INFORMACIÓN
        ========================================= */}

        <div className="footer__main">


          {/* BRAND */}

          <div className="footer__brand">

            <div className="footer__logo">

              <span className="footer__logo-mark">
                A
              </span>

              <span className="footer__logo-name">
                ANDRÉS
              </span>

            </div>


            <p>
              Desarrollo web enfocado en crear experiencias
              digitales modernas, rápidas y funcionales.
            </p>


            <div className="footer__status">

              <span className="footer__status-dot"></span>

              <span>
                ONLINE · {hora}
              </span>

            </div>

          </div>



          {/* NAVEGACIÓN */}

          <div className="footer__column">

            <span className="footer__column-title">
              NAVEGACIÓN
            </span>

            <nav>

              <a href="#inicio">
                Inicio
              </a>

              <a href="#servicios">
                Servicios
              </a>

              <a href="#proyectos">
                Proyectos
              </a>

              <a href="#proceso">
                Proceso
              </a>

              <a href="#planes">
                Planes
              </a>

            </nav>

          </div>



          {/* CONTACTO */}

          <div className="footer__column">

            <span className="footer__column-title">
              CONTACTO
            </span>

            <nav>

              <a href="#contacto">
                Hablemos
              </a>

              <a href="mailto:contacto@tudominio.com">
                Email
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>

            </nav>

          </div>



          {/* SOCIAL */}

          <div className="footer__column">

            <span className="footer__column-title">
              SOCIAL
            </span>

            <nav>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

            </nav>

          </div>

        </div>



        {/* =========================================
            TECH STACK
        ========================================= */}

        <div className="footer__tech">

          <span>REACT</span>
          <span>JAVASCRIPT</span>
          <span>CSS</span>
          <span>FIREBASE</span>
          <span>UI / UX</span>
          <span>RESPONSIVE</span>

        </div>



        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="footer__bottom">

          <div>

            <span>
              © 2026 ANDRÉS
            </span>

            <span>
              TODOS LOS DERECHOS RESERVADOS
            </span>

          </div>


          <button
            className="footer__top"
            onClick={volverArriba}
          >

            VOLVER ARRIBA

            <span>↑</span>

          </button>


          <div className="footer__signature">

            BUILT WITH
            <span>PRECISION.</span>

          </div>

        </div>


      </div>


      {/* =========================================
          BIG BACKGROUND TEXT
      ========================================= */}

      <div className="footer__background-text">
        DIGITAL
      </div>

    </footer>

  )
}

export default Footer
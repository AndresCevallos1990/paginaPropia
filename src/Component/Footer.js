import React from 'react'

const Footer = ({ abrirContacto }) => {

  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">

      <div className="footer__container">

        {/* PARTE SUPERIOR */}

        <div className="footer__top">

          <div className="footer__brand">

            <a
              href="#inicio"
              className="footer__logo"
            >
              <span>Patricia</span>
              <strong>Calderón</strong>
            </a>

            <p>
              Dermocosmiatra · Esteticista · Masoterapeuta
            </p>

          </div>


          <div className="footer__contact">

            <span className="footer__eyebrow">
              ¿QUERÉS CONSULTAR?
            </span>

            <button
              type="button"
              onClick={abrirContacto}
            >
              Hablemos
              <span>↗</span>
            </button>

          </div>

        </div>


        {/* PARTE CENTRAL */}

        <div className="footer__middle">

          <nav className="footer__nav">

            <a href="#inicio">
              Inicio
            </a>

            <a href="#sobre-mi">
              Sobre mí
            </a>

            <a href="#tratamientos">
              Tratamientos
            </a>

            <a href="#formacion">
              Formación
            </a>

            <a href="#galeria">
              Galería
            </a>

          </nav>


          <div className="footer__social">

            <a
              href="https://www.instagram.com/patriciacalderonestetica/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              Instagram
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* LÍNEA */}

        <div className="footer__line"></div>


        {/* PARTE INFERIOR */}

        <div className="footer__bottom">

          <span>
            © {new Date().getFullYear()} Patricia Calderón
          </span>

          <span>
            Todos los derechos reservados
          </span>

          <button
            type="button"
            onClick={volverArriba}
            className="footer__top-button"
          >
            Volver arriba
            <span>↑</span>
          </button>

        </div>

      </div>

    </footer>
  )
}

export default Footer
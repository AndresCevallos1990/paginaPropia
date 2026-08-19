import React from 'react'


const Contact = ({ abierto, cerrar }) => {

  if (!abierto) return null

  return (

    <div
      className="contact-modal"
      onClick={cerrar}
    >

      <div
        className="contact-modal__content"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CERRAR */}

        <button
          className="contact-modal__close"
          onClick={cerrar}
          aria-label="Cerrar"
        >
          ×
        </button>


        {/* ENCABEZADO */}

        <div className="contact-modal__heading">

          <span className="contact-modal__eyebrow">
            CONTACTO
          </span>

          <h2>
            Hablemos
            <span>sobre vos.</span>
          </h2>

          <p>
            ¿Querés realizar una consulta, conocer un tratamiento
            o reservar un turno?
          </p>

        </div>


        {/* OPCIONES */}

        <div className="contact-modal__options">

          {/* WHATSAPP */}

          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="contact-option"
          >

            <div className="contact-option__icon">
              W
            </div>

            <div className="contact-option__text">

              <span>
                CONSULTAS Y TURNOS
              </span>

              <strong>
                WhatsApp
              </strong>

            </div>

            <div className="contact-option__arrow">
              ↗
            </div>

          </a>


          {/* INSTAGRAM */}

          <a
            href="https://www.instagram.com/patriciacalderonestetica/"
            target="_blank"
            rel="noreferrer"
            className="contact-option"
          >

            <div className="contact-option__icon">
              I
            </div>

            <div className="contact-option__text">

              <span>
                CONOCÉ MÁS
              </span>

              <strong>
                Instagram
              </strong>

            </div>

            <div className="contact-option__arrow">
              ↗
            </div>

          </a>

        </div>


        {/* FRASE */}

        <div className="contact-modal__footer">

          <span>
            Patricia Calderón
          </span>

          <small>
            Estética · Bienestar · Formación
          </small>

        </div>

      </div>

    </div>

  )
}

export default Contact
import React, { useState } from 'react'

const Navbar = ({ abrirContacto, abrirReserva }) => {

  const [menuAbierto, setMenuAbierto] = useState(false)


  const cerrarMenu = () => {
    setMenuAbierto(false)
  }


  const handleContacto = () => {

    cerrarMenu()

    abrirContacto()

  }


  return (

    <header className="navbar">

      <div className="navbar__container">
        {/* LOGO */}

        <a
          href="#inicio"
          className="navbar__logo"
          onClick={cerrarMenu}
        >

          <span> Patricia
          </span>

          <strong> Calderón
          </strong>

        </a>
        {/* BOTÓN MOBILE */}

        <button
          type="button"
          className={`navbar__toggle ${menuAbierto ? 'activo' : ''
            }`}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
        >

          <span></span>
          <span></span>
          <span></span>

        </button>
        {/* MENÚ */}

        <nav
          className={`navbar__menu ${menuAbierto ? 'abierto' : ''
            }`}
        >

          <a href="/#inicio" onClick={cerrarMenu}> Inicio</a>
          <a href="/#sobre-mi" onClick={cerrarMenu}> Sobre mí</a>
          <a href="/#tratamientos" onClick={cerrarMenu}> Tratamientos</a>
          <a href="/#formacion" onClick={cerrarMenu}> Formación</a>
          <a href="/galeria" onClick={cerrarMenu}> Galería</a>

          <button
            type="button"
            className="navbar__turno"
            onClick={() => {
              cerrarMenu()
              abrirContacto()
            }}
          >
            Contacto
          </button>

          <button
            type="button"
            className="navbar__turno"
            onClick={() => {
              cerrarMenu()
              abrirReserva()
            }}
          >
            Reservar turno
          </button>
        </nav>

      </div>

    </header>

  )

}

export default Navbar
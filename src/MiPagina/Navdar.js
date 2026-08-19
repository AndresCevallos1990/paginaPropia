import React, { useState } from 'react'

const Navbar = ({ abrirContacto }) => {

    const [menuAbierto, setMenuAbierto] = useState(false)

    const cerrarMenu = () => {
        setMenuAbierto(false)
    }

    const toggleMenu = () => {
        setMenuAbierto(prev => !prev)
    }

    const handleContacto = () => {
        cerrarMenu()

        if (abrirContacto) {
            abrirContacto()
        }
    }

    return (

        <>
            <header className="floating-navbar">
                <div className="floating-navbar__inner">
                    <a
                        href="#inicio"
                        className="floating-navbar__brand"
                        onClick={cerrarMenu}
                    >
                        <span className="floating-navbar__symbol">
                            +
                        </span>
                        <span className="floating-navbar__name">
                            ANDRÉS
                        </span>
                    </a>
                    <span className="floating-navbar__separator"></span>
                    <nav className="floating-navbar__links">
                        <a
                            href="#proyectos"
                            onClick={cerrarMenu}
                        >
                            <span>01</span>
                            Proyectos
                        </a>
                        <a
                            href="#servicios"
                            onClick={cerrarMenu}
                        >
                            <span>02</span>
                            Servicios
                        </a>
                        <a
                            href="#proceso"
                            onClick={cerrarMenu}
                        >
                            <span>03</span>
                            Proceso
                        </a>
                    </nav>

                    <span className="floating-navbar__separator"></span>

                    <button
                        type="button"
                        className="floating-navbar__contact"
                        onClick={handleContacto}
                    >
                        <span>
                            Hablemos
                        </span>
                        <strong>
                            ↗
                        </strong>
                    </button>

                    {/* MOBILE */}
                    <button
                        type="button"
                        className={`floating-navbar__menu ${menuAbierto ? 'activo' : ''
                            }`}
                        onClick={toggleMenu}
                        aria-label="Abrir menú"
                        aria-expanded={menuAbierto}
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* =========================================
            MENÚ MOBILE
        ========================================= */}
                <div
                    className={`floating-navbar__mobile ${menuAbierto ? 'abierto' : ''
                        }`}
                >
                    <div className="floating-navbar__mobile-content">
                        <span className="floating-navbar__mobile-label">
                            NAVEGACIÓN
                        </span>

                        <a
                            href="#proyectos"
                            onClick={cerrarMenu}
                        >
                            <small>01</small>
                            Proyectos
                        </a>

                        <a
                            href="#servicios"
                            onClick={cerrarMenu}
                        >
                            <small>02</small>
                            Servicios
                        </a>

                        <a
                            href="#proceso"
                            onClick={cerrarMenu}
                        >
                            <small>03</small>
                            Proceso
                        </a>

                        <button
                            type="button"
                            onClick={handleContacto}
                        >
                            <small>04</small>
                            Contacto
                            <strong>
                                ↗
                            </strong>
                        </button>
                    </div>
                </div>
            </header>

        </>

    )

}

export default Navbar
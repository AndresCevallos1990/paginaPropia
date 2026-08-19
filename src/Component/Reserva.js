import React, { useState } from 'react'

const Reserva = ({ abierto, cerrar }) => {

    const [paso, setPaso] = useState(1)

    const [objetivo, setObjetivo] = useState('')
    const cerrarReserva = () => {
        setPaso(1)
        setObjetivo('')
        cerrar()
    }
    const siguientePaso = () => {
        if (!objetivo) return
        setPaso(2)

    }
    const volver = () => {
        setPaso(1)
    }
    if (!abierto) return null
    return (
        <div
            className="reserva-modal"
            onClick={cerrarReserva}
        >
            <div
                className="reserva-modal__content"
                onClick={(e) => e.stopPropagation()}
            >
                {/* CERRAR */}
                <button
                    type="button"
                    className="reserva-modal__close"
                    onClick={cerrarReserva}
                    aria-label="Cerrar"
                >
                    ×
                </button>

                {/* =================================
            PASO 1
        ================================= */}
                {paso === 1 && (
                    <div className="reserva__step">
                        <span className="reserva__eyebrow">
                            RESERVAR TURNO · 01
                        </span>

                        <h2>
                            ¿Qué te gustaría
                            <span>mejorar?</span>
                        </h2>

                        <p className="reserva__intro">
                            No hace falta que sepas qué tratamiento necesitás.
                            Contame cuál es tu objetivo y podemos orientarte.
                        </p>

                        <div className="reserva__options">
                            <button
                                type="button"
                                className={`reserva__option ${objetivo === 'rostro'
                                        ? 'seleccionado'
                                        : ''
                                    }`}
                                onClick={() => setObjetivo('rostro')}
                            >
                                <span className="reserva__option-number">
                                    01
                                </span>
                                <span className="reserva__option-content">
                                    <strong>
                                        Cuidado facial
                                    </strong>
                                    <small>
                                        Piel, limpieza, hidratación,
                                        luminosidad y bienestar.
                                    </small>
                                </span>
                                <span className="reserva__option-arrow">
                                    →
                                </span>
                            </button>

                            <button
                                type="button"
                                className={`reserva__option ${objetivo === 'cuerpo'
                                        ? 'seleccionado'
                                        : ''
                                    }`}
                                onClick={() => setObjetivo('cuerpo')}
                            >
                                <span className="reserva__option-number">
                                    02
                                </span>
                                <span className="reserva__option-content">
                                    <strong>
                                        Bienestar corporal
                                    </strong>
                                    <small>
                                        Masajes, relajación y cuidado
                                        corporal.
                                    </small>
                                </span>
                                <span className="reserva__option-arrow">
                                    →
                                </span>
                            </button>

                            <button
                                type="button"
                                className={`reserva__option ${objetivo === 'piel'
                                        ? 'seleccionado'
                                        : ''
                                    }`}
                                onClick={() => setObjetivo('piel')}
                            >
                                <span className="reserva__option-number">
                                    03
                                </span>
                                <span className="reserva__option-content">
                                    <strong>
                                        Mejorar mi piel
                                    </strong>
                                    <small>
                                        Quiero trabajar sobre una necesidad
                                        específica de mi piel.
                                    </small>
                                </span>
                                <span className="reserva__option-arrow">
                                    →
                                </span>
                            </button>

                            <button
                                type="button"
                                className={`reserva__option ${objetivo === 'no-se'
                                        ? 'seleccionado'
                                        : ''
                                    }`}
                                onClick={() => setObjetivo('no-se')}
                            >
                                <span className="reserva__option-number">
                                    04
                                </span>
                                <span className="reserva__option-content">
                                    <strong>
                                        No estoy segura/o
                                    </strong>
                                    <small>
                                        Prefiero que me orienten sobre
                                        qué tratamiento necesito.
                                    </small>
                                </span>
                                <span className="reserva__option-arrow">
                                    →
                                </span>
                            </button>
                        </div>

                        <button
                            type="button"
                            className="reserva__continue"
                            onClick={siguientePaso}
                            disabled={!objetivo}
                        >
                            Continuar
                            <span>→</span>
                        </button>
                    </div>
                )}

                {/* =================================
            PASO 2
        ================================= */}
                {paso === 2 && (
                    <div className="reserva__step">
                        <span className="reserva__eyebrow">
                            RESERVAR TURNO · 02
                        </span>

                        <h2>
                            Encontramos el
                            <span>primer paso.</span>
                        </h2>

                        <p className="reserva__intro">
                            Para recomendarte la mejor opción, lo ideal es
                            realizar una consulta personalizada.
                        </p>

                        <div className="reserva__recommendation">
                            <span>
                                ORIENTACIÓN PERSONALIZADA
                            </span>
                            <h3>
                                Consulta inicial
                            </h3>
                            <p>
                                Patricia podrá conocer tus necesidades y
                                orientarte sobre el tratamiento más adecuado
                                para vos.
                            </p>
                        </div>

                        <div className="reserva__actions">
                            <button
                                type="button"
                                className="reserva__back"
                                onClick={volver}
                            >
                                ← Volver
                            </button>

                            <a
                                href="https://wa.me/549XXXXXXXXXX"
                                target="_blank"
                                rel="noreferrer"
                                className="reserva__whatsapp"
                            >
                                Consultar por WhatsApp
                                <span>↗</span>
                            </a>
                        </div>

                        <small className="reserva__note">
                            La recomendación final se realiza de manera
                            personalizada según cada caso.
                        </small>
                    </div>
                )}
            </div>
        </div>

    )

}

export default Reserva
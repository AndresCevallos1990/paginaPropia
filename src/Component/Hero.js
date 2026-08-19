import React from 'react'

const Hero = () => {

    return (
        <section className="hero" id="inicio">

            <div className="hero__container">
                <div className="hero__content">

                    <span className="hero__eyebrow">
                        DERMOCOSMIATRÍA · ESTÉTICA · BIENESTAR
                    </span>

                    <h1>
                        Patricia
                        <span>Calderón</span>
                    </h1>

                    <p className="hero__profession">
                        Dermocosmiatra · Esteticista · Masoterapeuta
                    </p>

                    <p className="hero__description">
                        Cuidado profesional de la piel, estética y bienestar
                        desde una mirada personalizada y consciente.
                    </p>

                    <div className="hero__buttons">

                        <a
                            href="#contacto"
                            className="hero__button hero__button--primary"
                        >
                            Reservar turno
                        </a>

                        <a
                            href="#sobre-mi"
                            className="hero__button hero__button--secondary"
                        >
                            Conocer más
                        </a>

                    </div>

                </div>

                <div className="hero__visual">

                    <div className="hero__image-wrapper">

                        <img
                            src="/images/patricia-hero.webp"
                            alt="Patricia Calderón - Dermocosmiatra"
                            className="hero__image"
                        />

                    </div>

                    <div className="hero__decoration"></div>

                </div>

            </div>


            <a
                href="#sobre-mi"
                className="hero__scroll"
                aria-label="Desplazarse hacia abajo"
            >

                <span></span>

                <small>
                    Descubrir
                </small>

            </a>

        </section>
    )
}

export default Hero
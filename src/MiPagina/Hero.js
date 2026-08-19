import React, { useEffect, useRef } from 'react'

const Hero = () => {

    const cardRef = useRef(null)
    const heroRef = useRef(null)

    useEffect(() => {

        const hero = heroRef.current
        const card = cardRef.current

        if (!hero || !card) return

        const handleMouseMove = (e) => {
            const rect = hero.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2
            const rotateY = ((x - centerX) / centerX) * 8
            const rotateX = ((centerY - y) / centerY) * 8
            card.style.setProperty(
                '--mouse-rotate-x',
                `${rotateX}deg`
            )
            card.style.setProperty(
                '--mouse-rotate-y',
                `${rotateY}deg`
            )
            card.style.setProperty(
                '--mouse-x',
                `${(x / rect.width) * 100}%`
            )
            card.style.setProperty(
                '--mouse-y',
                `${(y / rect.height) * 100}%`
            )

        }
        const handleMouseLeave = () => {
            card.style.setProperty(
                '--mouse-rotate-x',
                '0deg'
            )
            card.style.setProperty(
                '--mouse-rotate-y',
                '0deg'
            )

        }
        hero.addEventListener(
            'mousemove',
            handleMouseMove
        )

        hero.addEventListener(
            'mouseleave',
            handleMouseLeave
        )
        return () => {
            hero.removeEventListener(
                'mousemove',
                handleMouseMove
            )
            hero.removeEventListener(
                'mouseleave',
                handleMouseLeave
            )

        }

    }, [])


    return (

        <section
            id="inicio"
            className="hero"
            ref={heroRef}
        >

            <div className="hero__grid"></div>
            <div className="hero__glow hero__glow--one"></div>
            <div className="hero__glow hero__glow--two"></div>
            <span className="hero__spark hero__spark--one">
                +
            </span>
            <span className="hero__spark hero__spark--two">
                +
            </span>
            <span className="hero__spark hero__spark--three">
                ·
            </span>

            <div className="hero__container">

                <div className="hero__content">
                    <span className="hero__eyebrow">
                        <span className="hero__eyebrow-line"></span>
                        DISEÑO WEB / DESARROLLO
                    </span>
                    <div className="hero__title">

                        <span className="hero__title-line hero__title-line--one">
                            PENSAR.
                        </span>

                        <span className="hero__title-line hero__title-line--two">
                            DISEÑAR.
                        </span>

                        <span className="hero__title-line hero__title-line--three">
                            CREAR.
                        </span>

                    </div>

                    <p className="hero__question">
                        Buscamos que te encuentren
                        <br />
                        y te recuerden.
                    </p>

                    <p className="hero__description">
                        Desarrollo experiencias digitales
                        con identidad propia.
                    </p>
                    <p className="hero__description">
                        Tu próximo cliente puede estar
                        buscándote ahora mismo.
                        <br />
                        <strong>
                            ¿Qué encuentra cuando te busca?
                        </strong>
                    </p>
                    <div className="hero__actions">
                        <a
                            href="#contacto"
                            className="hero__button"
                        >
                            QUIERO MI WEB
                            <span>
                                ↗
                            </span>
                        </a>
                        <a
                            href="#proyectos"
                            className="hero__secondary"
                        >
                            VER PROYECTOS
                            <span>
                                ↓
                            </span>
                        </a>
                    </div>
                </div>

                <div className="hero__visual">                      <div className="hero__orbit hero__orbit--one">
                    <span>
                        DISEÑO
                    </span>
                </div>
                    <div className="hero__orbit hero__orbit--two">
                        <span>
                            EXPERIENCIA
                        </span>
                    </div>
                    <div
                        className="hero__card"
                        ref={cardRef}
                    >
                        <div className="hero__card-shine"></div>
                        <div className="hero__browser">
                            <div className="hero__browser-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="hero__browser-address">
                                yourbusiness.com
                            </div>
                            <span className="hero__browser-menu">
                                ≡
                            </span>
                        </div>
                        <div className="hero__website">
                            <div className="hero__website-top">
                                <span>
                                    YOUR
                                </span>
                                <strong>
                                    BRAND
                                </strong>
                            </div>
                            <div className="hero__website-content">
                                <small>
                                    ESTUDIO DIGITAL
                                </small>
                                <h2>
                                    HACÉ QUE
                                    <br />
                                    TE ENCUENTREN.
                                </h2>
                                <button>
                                    CONOCER MÁS
                                    <span>↗</span>
                                </button>
                            </div>
                            <div className="hero__website-number">
                                01 / 04
                            </div>
                        </div>
                        <div className="hero__card-border"></div>
                    </div>
                    <div className="hero__visual-label">
                        <span className="hero__visual-dot"></span>
                        INTERACTIVE WEB EXPERIENCE
                    </div>
                </div>
            </div>

            <div className="hero__scroll">
                <span>
                    SCROLL
                </span>
                <div className="hero__scroll-line">
                    <span></span>
                </div>
            </div>
        </section>

    )

}

export default Hero
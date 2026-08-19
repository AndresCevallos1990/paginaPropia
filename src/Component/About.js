import React from 'react'

const About = () => {
    return (
        <section className="about" id="sobre-mi">
            <div className="about__container">

                <div className="about__heading">
                    <span className="about__eyebrow">
                        SOBRE MÍ
                    </span>
                    <h2>
                        Una mirada profesional
                        <span>al cuidado y al bienestar.</span>
                    </h2>
                </div>

                <div className="about__content">

                    <div className="about__visual">
                        <div className="about__image-wrapper">
                            <img
                                src="/images/patricia-about.webp"
                                alt="Patricia Calderón"
                                className="about__image"
                            />
                        </div>
                        <div className="about__image-decoration"></div>
                    </div>

                    <div className="about__text">
                        <span className="about__name">
                            Patricia Calderón
                        </span>
                        <h3>
                            Dermocosmiatra,
                            <br />
                            esteticista y masoterapeuta.
                        </h3>
                        <p>
                            Mi trabajo nace de la pasión por el cuidado de la
                            piel, la estética y el bienestar. Cada persona es
                            diferente, por eso considero fundamental brindar una
                            atención personalizada y adaptada a sus necesidades.
                        </p>
                        <p>
                            La formación continua y la actualización profesional
                            son parte esencial de mi manera de trabajar, buscando
                            incorporar conocimientos y herramientas que permitan
                            ofrecer una experiencia de calidad.
                        </p>
                        <p>
                            Además de mi práctica profesional, desarrollo mi
                            faceta docente como profesora en formación estética
                            y docente de L'Étoile, compartiendo conocimientos
                            y acompañando a nuevas generaciones de profesionales.
                        </p>
                        <div className="about__signature">
                            <span>
                                Patricia Calderón
                            </span>
                            <small>
                                Estética · Formación · Bienestar
                            </small>
                        </div>
                    </div>
                </div>


                <div className="about__credentials">
                    <div className="about__credential">
                        <span className="about__credential-number">
                            01
                        </span>
                        <div>
                            <h4>Dermocosmiatría</h4>
                            <p>
                                Cuidado y tratamiento profesional de la piel.
                            </p>
                        </div>
                    </div>

                    <div className="about__credential">
                        <span className="about__credential-number">
                            02
                        </span>
                        <div>
                            <h4>Estética</h4>
                            <p>
                                Tratamientos personalizados para cada necesidad.
                            </p>
                        </div>
                    </div>

                    <div className="about__credential">
                        <span className="about__credential-number">
                            03
                        </span>
                        <div>
                            <h4>Masoterapia</h4>
                            <p>
                                Técnicas orientadas al bienestar corporal.
                            </p>
                        </div>
                    </div>

                    <div className="about__credential">
                        <span className="about__credential-number">
                            04
                        </span>
                        <div>
                            <h4>Docencia</h4>
                            <p>
                                Formación y transmisión de conocimientos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About
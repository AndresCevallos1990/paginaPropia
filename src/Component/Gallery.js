import React from 'react'

const Gallery = () => {

  const images = [
    {
      src: '/images/gallery-01.webp',
      alt: 'Patricia Calderón - Tratamientos estéticos',
      className: 'gallery__item--large'
    },
    {
      src: '/images/gallery-02.webp',
      alt: 'Tratamiento facial',
      className: ''
    },
    {
      src: '/images/gallery-03.webp',
      alt: 'Espacio de trabajo',
      className: ''
    },
    {
      src: '/images/gallery-04.webp',
      alt: 'Cuidado y bienestar',
      className: ''
    },
    {
      src: '/images/gallery-05.webp',
      alt: 'Estética profesional',
      className: 'gallery__item--wide'
    }
  ]

  return (
    <section className="gallery" id="galeria">

      <div className="gallery__container">

        {/* ENCABEZADO */}

        <div className="gallery__heading">

          <div>

            <span className="gallery__eyebrow">
              GALERÍA
            </span>

            <h2>
              Un espacio para
              <span>sentirse bien.</span>
            </h2>

          </div>

          <p>
            Una mirada sobre el trabajo, los tratamientos y los espacios
            donde cada experiencia comienza.
          </p>

        </div>


        {/* GALERÍA */}

        <div className="gallery__grid">

          {images.map((image, index) => (

            <div
              className={`gallery__item ${image.className}`}
              key={index}
            >

              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />

              <div className="gallery__overlay">

                <span>
                  0{index + 1}
                </span>

                <strong>
                  +
                </strong>

              </div>

            </div>

          ))}

        </div>


        {/* FOOTER */}

        <div className="gallery__footer">

          <p>
            Conocé más del trabajo y la actualidad de Patricia.
          </p>

          <a
            href="https://www.instagram.com/patriciacalderonestetica/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Gallery
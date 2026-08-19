import React from 'react'

const publicaciones = [

  {
    id: 1,
    imagen: '/instagram/post1.jpg',
    tipo: 'Tratamientos',
    texto: 'Certificado de asistencia',
    url: 'https://www.instagram.com/p/Db516qxRagN/?utm_source=ig_web_button_share_sheet/'
  },

  {
    id: 2,
    imagen: '/instagram/post2.jpg',
    tipo: 'Estética',
    texto: 'El cuidado de tu piel también es bienestar',
    url: 'https://www.instagram.com/reel/DZH5PcWxpjy/?utm_source=ig_web_button_share_sheet/'
  },

  {
    id: 3,
    imagen: '/instagram/post3.jpg',
    tipo: 'Formación',
    texto: 'Sofisticación y renovación celular',
    url: 'https://www.instagram.com/reel/DX9Z3LuxS4E/?utm_source=ig_web_button_share_sheet/'
  },

  {
    id: 4,
    imagen: '/instagram/post4.jpg',
    tipo: 'Bienestar',
    texto: 'Objetivos',
    url: 'https://www.instagram.com/reel/DXPF5Q_EX-C/?utm_source=ig_web_button_share_sheet/'
  },

  {
    id: 5,
    imagen: '/instagram/post5.jpg',
    tipo: 'Consejos',
    texto: 'Gastos',
    url: 'https://www.instagram.com/reel/DXCUyZIEWS0/?utm_source=ig_web_button_share_sheet/'
  },

  {
    id: 6,
    imagen: '/instagram/post6.jpg',
    tipo: 'Patricia',
    texto: 'Equipo',
    url: 'https://www.instagram.com/reel/DVydYa1DbLc/?utm_source=ig_web_button_share_sheet'
  }

]


const Instagram = () => {

  return (

    <section
      className="instagram"
      id="instagram"
    >

      <div className="instagram__container">


        {/* HEADER */}

        <div className="instagram__header">

          <div>

            <span className="instagram__eyebrow">
              REDES · ACTUALIDAD
            </span>

            <h2>
              Un poco de
              <span>mi trabajo.</span>
            </h2>

          </div>


          <a
            href="https://www.instagram.com/patriciacalderonestetica/"
            target="_blank"
            rel="noreferrer"
            className="instagram__profile"
          >

            <span>
              @patriciacalderonestetica
            </span>

            <strong>
              Instagram ↗
            </strong>

          </a>

        </div>


        {/* GRID */}

        <div className="instagram__grid">

          {publicaciones.map((post, index) => (

            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className={`instagram__post instagram__post--${index + 1}`}
            >

              <img
                src={post.imagen}
                alt={post.texto}
                loading="lazy"
              />


              <div className="instagram__overlay">

                <span>
                  {post.tipo}
                </span>

                <strong>
                  {post.texto}
                </strong>

                <small>
                  Ver publicación ↗
                </small>

              </div>

            </a>

          ))}

        </div>


        {/* CTA */}

        <div className="instagram__bottom">

          <p>
            Seguime en Instagram para conocer
            las novedades, tratamientos y consejos.
          </p>


          <a
            href="https://www.instagram.com/patriciacalderonestetica/"
            target="_blank"
            rel="noreferrer"
            className="instagram__button"
          >
            Visitar Instagram
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>

  )

}

export default Instagram
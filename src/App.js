import { HashRouter, Routes, Route } from 'react-router-dom'
import './AppPropia.css'
import CustomProvider from './Provider'
import Navdar from './MiPagina/Navdar'
import Main from './MiPagina/Main'
import { useState } from 'react'
import Footer from './MiPagina/Footer'


function App() {

  const [contactoAbierto, setContactoAbierto] = useState(false)
  const [reservaAbierta, setReservaAbierta] = useState(false)

  const abrirContacto = () => {
    setContactoAbierto(true)
  }



  const abrirReserva = () => {
    setReservaAbierta(true)
  }



  return (

    <div className="App">

      <HashRouter>
        <Navdar abrirContacto={abrirContacto} abrirReserva={abrirReserva} />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}


function NewApp() {

  return (

    <CustomProvider>

      <App />

    </CustomProvider>

  )

}


export default NewApp




// import { HashRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
// import CustomProvider from './Provider'
// import Navbar from './Component/Navbar'
// import Main from './Component/Main'
// import Gallery from './Component/Gallery'
// import Contact from './Component/Contact'
// import { useState } from 'react'
// import Footer from './Component/Footer'
// import Reserva from './Component/Reserva'


// function App() {

//   const [contactoAbierto, setContactoAbierto] = useState(false)
//   const [reservaAbierta, setReservaAbierta] = useState(false)

//   const abrirContacto = () => {
//     setContactoAbierto(true)
//   }
//   const cerrarContacto = () => {
//     setContactoAbierto(false)
//   }


//   const abrirReserva = () => {
//     setReservaAbierta(true)
//   }

//   const cerrarReserva = () => {
//     setReservaAbierta(false)
//   }

//   return (

//     <div className="App">

//       <HashRouter>
//         <Navbar abrirContacto={abrirContacto} abrirReserva={abrirReserva} /> 
//         <Routes>
//            <Route path="/" element={<Main abrirContacto={abrirContacto} />} />
//           <Route path="/galeria" element={<Gallery />} /> 
//         </Routes>
//          <Contact abierto={contactoAbierto} cerrar={cerrarContacto} />
//         <Reserva abierto={reservaAbierta} cerrar={cerrarReserva} />
//         <Footer /> 
//       </HashRouter>
//     </div>
//   )
// }


// function NewApp() {

//   return (

//     <CustomProvider>

//       <App />

//     </CustomProvider>

//   )

// }


// export default NewApp




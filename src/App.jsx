// * Componentes ************************************************************ //

import Enlace from "./componentes/atomos/enlace.jsx";
import Imagen from "./componentes/atomos/imagen.jsx";
import Texto from "./componentes/atomos/texto.jsx";

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Enlace_R from "./componentes/atomos/enlaces_dinamicos.jsx";

const General = lazy(() => import("./secciones/general.jsx"));
const Visualizacion = lazy(() => import("./secciones/visualizacion.jsx"));
const Simple = lazy(() => import("./secciones/simple.jsx"));

// * Apricacion ************************************************************* //

function App() {
  return (
    <>
      <header className="
      flex items-center gap-4
      justify-between p-2 px-4
      bg-gray-900
      text-gray-200
      border-b-2 border-gray-700
      select-none
      ">
        <div className="
        flex items-center gap-4
        select-none
        ">
          <Imagen
            width={56}
            src="./logo-fravelz.jpg"
            alt="Logo de fravelz"
            className="
            rounded-full
            object-cover
            border-2 border-gray-600
            "
          />

          <h1 className="text-2xl"><strong>Fravelz - Hyprdots</strong></h1>
        </div>

        <div className="
        flex gap-4
        ">
          <Enlace_R to="/">Info. General</Enlace_R>
          <Enlace_R to="/visualizacion">Visualizacion</Enlace_R>
          <Enlace_R to="/simple">Version Simple</Enlace_R>
        </div>
      </header>

      <main className="
      flex flex-col lg:flex-row
      flex-1
      h-fit
      gap-4 lg:gap-6
      p-4
      ">
        <Suspense fallback={<div className="text-gray-400 p-4">Cargando...</div>}>
          <Routes>
            <Route path="/" element={<General />} />
            <Route path='/general' element={<General />} />
            <Route path='/visualizacion' element={<Visualizacion />} />
            <Route path='/simple' element={<Simple />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="
      text-gray-400
      bg-gray-900
      border-t-2 border-gray-700
      p-5 gap-3
      ">
        <div className="
        flex items-center
        justify-between
        ">
          <div className="">
            <Texto select="none"><b>Autor:</b> Fravelz</Texto>

            <Texto select="none"><b>Contacto: </b><span className="select-all">fravelz_@hotmail.com</span></Texto>
          </div>

          <div className="flex gap-6">
            <Enlace target="_blank" href="https://github.com/FraVelz">
              <Imagen width={50} src="./github.png" alt="imagen github" />
            </Enlace>


            <Enlace target="_blank" href="https://www.youtube.com/@fravelz">
              <Imagen width={50} src="./youtube.png" alt="imagen youtube" />
            </Enlace>
          </div>
        </div>

        <Texto className="text-center mt-5" select="none"><b>Ultima Actualizacion:</b> Nov 15 del 2025</Texto>
      </footer>
    </>
  )
}

export default App

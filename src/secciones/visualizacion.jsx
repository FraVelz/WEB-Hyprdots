import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../componentes/organismos/estructura";

import Titulo from "../componentes/moleculas/titulo";
import Lista from "../componentes/moleculas/lista"
import Imagen from "../componentes/atomos/imagen";
import Linea from "../componentes/atomos/linea";
import Enlace from "../componentes/atomos/enlace";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#temas">Temas</Enlace></li>

      <Lista>
        <li><Enlace href="#tema-anime">Tema Anime</Enlace></li>
        <li><Enlace href="#tema-batman">Tema Batman</Enlace></li>
        <li><Enlace href="#tema-hacker">Tema Hacker</Enlace></li>
        <li><Enlace href="#tema-mode-dark">Tema Mode Dark</Enlace></li>
        <li><Enlace href="#tema-new-mode">Tema New Mode</Enlace></li>
        <li><Enlace href="#tema-superman">Tema Superman</Enlace></li>
        <li><Enlace href="#tema-windows">Tema Windows</Enlace></li>
      </Lista>

      <li><Enlace href="#selectores">Selectores</Enlace></li>

      <Lista>
        <li><Enlace href="#selector-temas">Selector Temas</Enlace></li>
        <li><Enlace href="#selector-wallpapers">Selector Wallpapers</Enlace></li>
        <li><Enlace href="#selector-apagar">Selector Apagar</Enlace></li>
      </Lista>

      <li><Enlace href="#terminal">Terminal</Enlace></li>
      <li><Enlace href="#pantalla-inicio">Pantalla de Inicio</Enlace></li>
      <li><Enlace href="#pantalla-bloqueo">Pantalla de Bloqueo</Enlace></li>
      <li><Enlace href="#notificaciones">Notificaciones</Enlace></li>
    </Lista>
  );
}

function Mostrar_Temas({ src, title, id }) {

  return (
    <div className="
        bg-gray-950 rounded-2xl
        flex flex-col lg:flex-row
        gap-3
        my-5 p-3
        select-none
        ">
      <Titulo title="h3" id={id}>{title}</Titulo>

      <div className="px-20 pb-5">
        <Imagen src={src} width="100%" />
      </div>
    </div>
  );
}

export default function Visualizacion() {
  return (
    <>
      <TemarioAsideCompleto temario={Temario} />

      <Estructura>
        <div className="max-w-5xl">
          <Titulo title="h1">Visualizacion</Titulo>

          <TemarioCompleto temario={Temario} />

          <Linea />

          <Titulo title="h2" id="temas">Temas</Titulo>

          <div className="
        bg-gray-950 rounded-2xl
        grid grid-rows-3 grid-cols-3
        sm:grid-cols-4 sm:grid-rows-2
        lg:grid-cols-5 lg:grid-rows-2
        gap-3
        h-fit
        my-5 p-3
        select-none
        ">
            <Imagen src="./imagenes/tema-anime.png" width="100%" />
            <Imagen src="./imagenes/tema-batman.png" width="100%" />
            <Imagen src="./imagenes/tema-hacker.png" width="100%" />
            <Imagen src="./imagenes/tema-mode-dark.png" width="100%" />
            <Imagen src="./imagenes/tema-new-mode.png" width="100%" />
            <Imagen src="./imagenes/tema-superman.png" width="100%" />
            <Imagen src="./imagenes/tema-windows.png" width="100%" />
          </div>

          <Linea />

          <Mostrar_Temas src="./imagenes/tema-anime.png"
            title="Tema Anime" id="tema-anime"
          />

          <Mostrar_Temas src="./imagenes/tema-batman.png"
            title="Tema Batman" id="tema-batman"
          />

          <Mostrar_Temas src="./imagenes/tema-hacker.png"
            title="Tema Hacker" id="tema-hacker"
          />

          <Mostrar_Temas src="./imagenes/tema-mode-dark.png"
            title="Tema Mode Dark" id="tema-mode-dark"
          />

          <Mostrar_Temas src="./imagenes/tema-new-mode.png"
            title="Tema New Mode" id="tema-new-mode"
          />

          <Mostrar_Temas src="./imagenes/tema-superman.png"
            title="Tema Superman" id="tema-superman"
          />

          <Mostrar_Temas src="./imagenes/tema-windows.png"
            title="Tema Windows" id="tema-windows"
          />

          <Linea />

          <Titulo title="h2" id="selectores">Selectores</Titulo>

          <div className="
        bg-gray-950 rounded-2xl
        grid grid-cols-2 grid-rows-2
        sm:grid-cols-3 sm:grid-rows-2
        lg:grid-cols-4 lg:grid-rows-1
        h-fit
        gap-3
        my-5 p-3
        select-none">
            <Imagen src="./imagenes/selector-temas.png" width="100%" className="col-span-2" />
            <Imagen src="./imagenes/selector-wallpapers.png" width="100%" />
            <Imagen src="./imagenes/selector-apagar.png" width="100%" />
          </div>

          <Linea />

          <Mostrar_Temas src="./imagenes/selector-temas.png"
            title="Selector Temas" id="selector-temas"
          />

          <Mostrar_Temas src="./imagenes/selector-wallpapers.png"
            title="Selector Wallpapers" id="selector-wallpapers"
          />

          <Mostrar_Temas src="./imagenes/selector-apagar.png"
            title="Selector Apagar" id="selector-apagar"
          />

          <Linea />

          <Titulo title="h2">Otros</Titulo>

          <Mostrar_Temas src="./imagenes/terminal.png"
            title="Terminal kitty / zsh / fasfetch" id="terminal"
          />

          <Mostrar_Temas src="./imagenes/terminal.png"
            title="Pantalla de Inicio" id="pantalla-inicio"
          />

          <Mostrar_Temas src="./imagenes/terminal.png"
            title="Pantalla de bloque" id="pantalla-bloqueo"
          />

          <Mostrar_Temas src="./imagenes/terminal.png"
            title="Notificaciones" id="notificaciones"
          />
        </div>
      </Estructura>
    </>
  );
}

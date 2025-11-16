import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../componentes/organismos/estructura";

import Titulo from "../componentes/moleculas/titulo";
import Texto from "../componentes/atomos/texto";
import Enlace from "../componentes/atomos/enlace";
import Lista from "../componentes/moleculas/lista"
import Linea from "../componentes/atomos/linea"

function Temario({ className = "" }) {
    return (
        <Lista className={className}>
            <li><Enlace href="#notas">Notas</Enlace></li>
            <li>Organización de archivos y carpetas</li>
            <li>
                Carpeta <code>config</code>
                <ul className="list-disc list-inside ml-6">
                    <li>bin</li>
                    <li>fastfetch</li>
                    <li>hypr</li>
                    <li>kitty</li>
                    <li>nvim</li>
                    <li>themes</li>
                    <li>waybar</li>
                </ul>
            </li>
            <li>Carpeta home</li>
            <li>Carpeta <code>media</code></li>
            <li>Carpeta <code>scripts</code></li>
            <li>Raíz del proyecto</li>
        </Lista>
    );
}

export default function General() {
    return (
        <>
            <TemarioAsideCompleto temario={Temario} />

            <Estructura>
                <div className="p-6 max-w-5xl mx-auto text-gray-200 font-sans space-y-6">
               </div>
            </Estructura>
        </>
    );
};

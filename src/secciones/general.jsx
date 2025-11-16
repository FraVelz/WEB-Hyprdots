import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../componentes/organismos/estructura";

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

                    <Titulo title="h1">Hyprdots</Titulo>
                    <Texto>
                        <b>IMPORTANTE:</b> Hay muchos errores, muchos bugs, configuraciones incompletas,
                        entre otras cosas si quieres probar las configuraciones puedes crear un nuevo usuario
                        y probar las configuraciones en tu arch linux - Hyprland!!
                    </Texto>

                    <Texto>
                        <b>Nota:</b> Configuracion de mi pc, informacion generica. Las configuraciones 
                        estan hechas para usar 1 solo usuario.
                    </Texto>

                    <Texto>
                        Ver demostración de estilos completos en mi canal de YouTube o revisa
                        directamente la configuración de interés.
                    </Texto>
                    
                    <TemarioCompleto temario={Temario} />

                    <Linea/>

                    <Titulo title="h2" id="notas">Notas</Titulo>

                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Repositorio en construcción.</li>
                        <li>Contenido avanzado: requiere conocimientos en Bash y personalización de temas.</li>
                        <li>Se recomienda leer la guía completa antes de ejecutar cualquier script.</li>
                    </ul>

                    <h2 className="text-3xl font-semibold">Organización de archivos y carpetas</h2>
                    <table className="table-auto border-collapse border border-gray-600 w-full text-left">
                        <thead className="bg-gray-800">
                            <tr>
                                <th className="border border-gray-600 px-2 py-1">Carpeta</th>
                                <th className="border border-gray-600 px-2 py-1">Contenido</th>
                                <th className="border border-gray-600 px-2 py-1">Enlace</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-600 px-2 py-1">./config</td>
                                <td className="border border-gray-600 px-2 py-1">Archivos de configuración del sistema (~/.config)</td>
                                <td className="border border-gray-600 px-2 py-1"><a href="#config" className="text-blue-400 underline">Ver configuración</a></td>
                            </tr>
                            <tr>
                                <td className="border border-gray-600 px-2 py-1">./home</td>
                                <td className="border border-gray-600 px-2 py-1">Archivos del directorio personal (~)</td>
                                <td className="border border-gray-600 px-2 py-1"><a href="#home" className="text-blue-400 underline">Ver home</a></td>
                            </tr>
                            <tr>
                                <td className="border border-gray-600 px-2 py-1">./media</td>
                                <td className="border border-gray-600 px-2 py-1">Imágenes y GIFs para documentación</td>
                                <td className="border border-gray-600 px-2 py-1"><a href="#media" className="text-blue-400 underline">Ver media</a></td>
                            </tr>
                            <tr>
                                <td className="border border-gray-600 px-2 py-1">./scripts</td>
                                <td className="border border-gray-600 px-2 py-1">Scripts para automatización de configuraciones</td>
                                <td className="border border-gray-600 px-2 py-1"><a href="#scripts" className="text-blue-400 underline">Ver scripts</a></td>
                            </tr>
                            <tr>
                                <td className="border border-gray-600 px-2 py-1">./</td>
                                <td className="border border-gray-600 px-2 py-1">Archivos generales y documentación</td>
                                <td className="border border-gray-600 px-2 py-1"><a href="#raiz" className="text-blue-400 underline">Ver raíz</a></td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className="text-3xl font-semibold">Carpeta config</h2>

                    <h3 className="text-2xl font-semibold">bin</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><code>autostart.sh</code> - Inicializa ventanas principales al encender PC</li>
                        <li><code>mode-hacker.sh</code> - Inicializa 3 terminales para área de trabajo vistosa</li>
                        <li><code>power-menu.sh</code> - Menú de apagado con rofi</li>
                        <li><code>selector-app.sh</code> - Abrir aplicaciones con rofi</li>
                        <li><code>theme-switcher.sh</code> - Cambiar temas según archivos en <code>themes</code></li>
                    </ul>

                    <h3 className="text-2xl font-semibold">fastfetch</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><code>config.jsonc</code> - Configuración principal</li>
                        <li><code>logo.txt</code> - Logo ASCII</li>
                    </ul>

                    <h3 className="text-2xl font-semibold">hypr</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><code>hyprland.conf</code> - Configuración principal</li>
                        <li><code>colors.conf</code> - Definición de colores</li>
                        <li><code>hyprpaper.conf</code> - Fondos de pantalla</li>
                    </ul>

                    <h3 className="text-2xl font-semibold">kitty</h3>
                    <Texto><code>kitty.conf</code> - Configuración de terminal Kitty</Texto>

                    <h3 className="text-2xl font-semibold">nvim</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><code>init.lua</code> - Archivo principal</li>
                        <li><code>lazy-lock.json</code> - Archivo de gestor de plugins</li>
                        <li><code>./lua/</code> - Scripts modulares en Lua</li>
                        <li><code>./lua/plugin/</code> - Plugins</li>
                        <li><code>./lua/snippets/</code> - Atajos personalizados</li>
                        <li><code>./lua/vim-options.lua</code> - Configuraciones generales</li>
                    </ul>

                    <h3 className="text-2xl font-semibold">themes</h3>
                    <Texto>Contiene directorios de temas generales, con archivos de configuración y estilos.</Texto>

                    <h4 className="text-xl font-semibold">Temas disponibles:</h4>
                    <table className="table-auto border-collapse border border-gray-600 w-full text-left">
                        <thead className="bg-gray-800">
                            <tr>
                                <th className="border border-gray-600 px-2 py-1">N.</th>
                                <th className="border border-gray-600 px-2 py-1">Tema</th>
                                <th className="border border-gray-600 px-2 py-1">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-600 px-2 py-1">1</td>
                                <td className="border border-gray-600 px-2 py-1">Anime</td>
                                <td className="border border-gray-600 px-2 py-1">Tema principal, vistoso y agradable visualmente.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-600 px-2 py-1">2</td>
                                <td className="border border-gray-600 px-2 py-1">Batman</td>
                                <td className="border border-gray-600 px-2 py-1">Colores apagados, diseño sobrio, optimizado para batería.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-600 px-2 py-1">3</td>
                                <td className="border border-gray-600 px-2 py-1">Hacker</td>
                                <td className="border border-gray-600 px-2 py-1">Tonalidades verdes, estilo “terminal hacker”.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-600 px-2 py-1">4</td>
                                <td className="border border-gray-600 px-2 py-1">ModeDark</td>
                                <td className="border border-gray-600 px-2 py-1">Estética minimalista, ideal para Halloween.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-600 px-2 py-1">5</td>
                                <td className="border border-gray-600 px-2 py-1">Superman</td>
                                <td className="border border-gray-600 px-2 py-1">Colores variados, diseño similar a Batman y Hacker.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="text-2xl font-semibold">waybar</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><code>config.jsonc</code> - Configuración de módulos y disposición de barra</li>
                        <li><code>style.css</code> - Estilos visuales</li>
                        <li><code>colors.css</code> - Variables de colores</li>
                    </ul>

                    <h2 className="text-3xl font-semibold">Carpeta home</h2>
                    <Texto>Archivos que se copiarán al directorio personal (~) para personalización y automatización.</Texto>
                    <Texto><code>.zshrc</code> - Configuración inicial de terminal, sintaxis y funcionamiento de kitty.</Texto>

                    <h2 className="text-3xl font-semibold">Carpeta media</h2>
                    <Texto>Imágenes utilizadas en documentación y demostraciones.</Texto>

                    <h2 className="text-3xl font-semibold">Carpeta scripts</h2>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><code>permisos.sh</code> - Solicita permisos para scripts</li>
                        <li><code>actualizar.sh</code> - Ejecuta configuración del repositorio</li>
                    </ul>

                    <pre className="bg-gray-800 p-4 rounded text-sm">
                        chmod +x actualizar.sh
                        chmod +x permisos.sh
                        ./permisos.sh
                        ./actualizar.sh
                    </pre>

                    <h2 className="text-3xl font-semibold">Raíz del proyecto</h2>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><code>readme.md</code> - Documentación principal</li>
                        <li><code>style-formatter.css</code> - Configuración de colores para VS Code</li>
                    </ul>

                </div>
            </Estructura>
        </>
    );
};

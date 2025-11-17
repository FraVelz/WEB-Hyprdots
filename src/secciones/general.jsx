import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../componentes/organismos/estructura";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../componentes/moleculas/tabla";

import Titulo from "../componentes/moleculas/titulo";
import Texto from "../componentes/atomos/texto";
import Enlace from "../componentes/atomos/enlace";
import Lista from "../componentes/moleculas/lista";
import Linea from "../componentes/atomos/linea";
import Codigo from "../componentes/moleculas/codigo";

function Temario({ className = "" }) {
    return (
        <Lista className={className}>
            <li><Enlace href="#notas">Notas</Enlace></li>
            <li><Enlace href="#organización-de-archivos-y-carpetas">Organización de archivos y carpetas</Enlace></li>

            <li>
                <Enlace href="#carpeta-config">Carpeta config</Enlace>
                <ul className="list-disc list-inside ml-6">
                    <li><Enlace href="#bin">bin</Enlace></li>
                    <li><Enlace href="#fastfetch">fastfetch</Enlace></li>
                    <li><Enlace href="#hypr">hypr</Enlace></li>
                    <li><Enlace href="#kitty">kitty</Enlace></li>
                    <li><Enlace href="#nvim">nvim</Enlace></li>
                    <li><Enlace href="#themes">themes</Enlace></li>
                    <li><Enlace href="#waybar">waybar</Enlace></li>
                </ul>
            </li>

            <li><Enlace href="#carpeta-home">Carpeta home</Enlace></li>
            <li><Enlace href="#carpeta-media">Carpeta media</Enlace></li>
            <li><Enlace href="#raíz-del-proyecto">Raíz del proyecto</Enlace></li>
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
                        directamente en la seccion de visualizacion.
                    </Texto>

                    <TemarioCompleto temario={Temario} />

                    <Linea />

                    <Titulo title="h2" id="notas">Notas</Titulo>

                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Repositorio en construcción.</li>
                        <li>Contenido avanzado: requiere conocimientos en Bash y personalización de temas.</li>
                        <li>Se recomienda leer la guía completa antes de ejecutar cualquier script.</li>
                        <li>El archivo ./actualizar.py sirve para configurar todo automaticamente para el usuario actual.</li>
                    </ul>

                    <Titulo title="h2" id="organización-de-archivos-y-carpetas">Organización de archivos y carpetas</Titulo>

                    <Tabla>
                        <TablaCabezera headers={["Carpeta", "Contenido"]} />

                        <tbody>
                            <TablaFila>
                                <TablaUnica>./config</TablaUnica>
                                <TablaUnica>Archivos de configuración del sistema (~/.config)</TablaUnica>
                            </TablaFila>
                            <TablaFila>
                                <TablaUnica>./home</TablaUnica>
                                <TablaUnica>Archivos del directorio personal (~)</TablaUnica>
                            </TablaFila>
                            <TablaFila>
                                <TablaUnica>./media</TablaUnica>
                                <TablaUnica>Imágenes y GIFs para documentación</TablaUnica>
                            </TablaFila>
                            <TablaFila>
                                <TablaUnica>./</TablaUnica>
                                <TablaUnica>Archivos generales, scripts y documentación</TablaUnica>
                            </TablaFila>
                        </tbody>
                    </Tabla>

                    <Linea />

                    <Titulo title="h2" id="carpeta-config">Carpeta config</Titulo>

                    <Titulo title="h3" id="bin" className="text-2xl font-semibold">bin</Titulo>
                    <Lista>
                        <li>autostart.sh - Inicializa ventanas principales al encender PC</li>
                        <li>mode-hacker.sh - Inicializa 3 terminales para área de trabajo vistosa</li>
                        <li>power-menu.sh - Menú de apagado con rofi</li>
                        <li>selector-app.sh - Abrir aplicaciones con rofi</li>
                        <li>theme-switcher.sh - Cambiar temas según archivos en themes</li>
                    </Lista>

                    <Titulo title="h3" id="fastfetch" className="text-2xl font-semibold">fastfetch</Titulo>
                    <Lista>
                        <li>config.jsonc - Configuración principal</li>
                        <li>logo.txt - Logo ASCII</li>
                    </Lista>

                    <Titulo title="h3" id="hypr" className="text-2xl font-semibold">hypr</Titulo>
                    <Lista>
                        <li>hyprland.conf - Configuración principal</li>
                        <li>colors.conf - Definición de colores</li>
                        <li>hyprpaper.conf - Fondos de pantalla</li>
                    </Lista>

                    <Titulo title="h3" id="kitty" className="text-2xl font-semibold">kitty</Titulo>
                    <Texto>kitty.conf - Configuración de terminal Kitty</Texto>

                    <Titulo title="h3" id="nvim" className="text-2xl font-semibold">nvim</Titulo>
                    <Lista>
                        <li>init.lua - Archivo principal</li>
                        <li>lazy-lock.json - Archivo de gestor de plugins</li>
                        <li>./lua/ - Scripts modulares en Lua</li>
                        <li>./lua/plugin/ - Plugins</li>
                        <li>./lua/snippets/ - Atajos personalizados</li>
                        <li>./lua/vim-options.lua - Configuraciones generales</li>
                    </Lista>

                    <Titulo title="h3" id="themes" className="text-2xl font-semibold">themes</Titulo>

                    <Texto>Contiene directorios de temas generales, con archivos de configuración y estilos. 
                        Cada tema tiene una estructura de configuracion similar a la configuracion global con
                        organización similar de carpetas y archivos. Temas generales existentes:</Texto>

                    <Tabla>
                        <TablaCabezera headers={["N.", "Tema", "Descripción"]} />

                        <tbody>
                            <TablaFila>
                                <TablaUnica>1</TablaUnica>
                                <TablaUnica>Anime</TablaUnica>
                                <TablaUnica>Tema principal, vistoso y agradable visualmente.</TablaUnica>
                            </TablaFila>
                            <TablaFila>
                                <TablaUnica>2</TablaUnica>
                                <TablaUnica>Batman</TablaUnica>
                                <TablaUnica>Colores apagados, diseño sobrio, optimizado para batería.</TablaUnica>
                            </TablaFila>
                            <TablaFila>
                                <TablaUnica>3</TablaUnica>
                                <TablaUnica>Hacker</TablaUnica>
                                <TablaUnica>Tonalidades verdes, estilo “terminal hacker”.</TablaUnica>
                            </TablaFila>
                            <TablaFila>
                                <TablaUnica>4</TablaUnica>
                                <TablaUnica>Mode Dark</TablaUnica>
                                <TablaUnica>Estética minimalista, ideal para Halloween.</TablaUnica>
                            </TablaFila>
                            <TablaFila>
                                <TablaUnica>5</TablaUnica>
                                <TablaUnica>Superman</TablaUnica>
                                <TablaUnica>Colores variados, diseño similar a Batman y Hacker.</TablaUnica>
                            </TablaFila>
                            <TablaFila>
                                <TablaUnica>6</TablaUnica>
                                <TablaUnica>New Mode</TablaUnica>
                                <TablaUnica>Estilo inspirado en el escritorio de savitar para pentesting.</TablaUnica>
                            </TablaFila>
                            <TablaFila>
                                <TablaUnica>7</TablaUnica>
                                <TablaUnica>Windows</TablaUnica>
                                <TablaUnica>La idea es que sea similar a windows pero le faltan muchas configuraciones.</TablaUnica>
                            </TablaFila>
                        </tbody>
                    </Tabla>

                    <Titulo title="h3" id="waybar" className="text-2xl font-semibold">waybar</Titulo>
                    <Lista>
                        <li>config.jsonc - Configuración de módulos y disposición de barra</li>
                        <li>style.css - Estilos visuales</li>
                        <li>colors.css - Variables de colores</li>
                    </Lista>

                    <Linea />

                    <Titulo title="h2" id="carpeta-home" className="text-3xl font-semibold">Carpeta home</Titulo>

                    <Texto>Archivos que se copiarán al directorio personal (~) para personalización y automatización.</Texto>
                    <Texto>.zshrc - Configuración inicial de terminal, sintaxis y funcionamiento de kitty.</Texto>

                    <Linea />

                    <Titulo title="h2" id="carpeta-media" className="text-3xl font-semibold">Carpeta media</Titulo>

                    <Texto>Imágenes utilizadas en documentación y demostraciones.</Texto>

                    <Lista>
                        <li>permisos.sh - Solicita permisos para scripts</li>
                        <li>actualizar.sh - Ejecuta configuración del repositorio</li>
                    </Lista>

                    <Codigo language="bash" code="chmod +x actualizar.sh
chmod +x permisos.sh

./permisos.sh
./actualizar.sh" />

                    <Titulo title="h2" id="raíz-del-proyecto" className="text-3xl font-semibold">Raíz del proyecto</Titulo>
                    <Lista>
                        <li>readme.md - Documentación principal</li>
                        <li>style-formatter.css - Configuración de colores para VS Code</li>
                    </Lista>

                </div>
            </Estructura>
        </>
    );
};

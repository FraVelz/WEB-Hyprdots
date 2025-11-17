import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../componentes/organismos/estructura";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../componentes/moleculas/tabla";

import Titulo from "../componentes/moleculas/titulo";
import Texto from "../componentes/atomos/texto";
import Enlace from "../componentes/atomos/enlace";
import Lista from "../componentes/moleculas/lista"
import Linea from "../componentes/atomos/linea"

function Temario({ className = "" }) {
    return (
        <Lista className={className}>
            <li><Enlace href="#modificadores-principales">Modificadores principales</Enlace></li>
            <li><Enlace href="#gestion-de-ventanas">Gestión de ventanas</Enlace></li>
            <li><Enlace href="#menus-personalizados">Menús personalizados</Enlace></li>
            <li><Enlace href="#movimiento-entre-ventanas">Movimiento entre ventanas</Enlace></li>
            <li><Enlace href="#workspaces">Espacios de trabajo (Workspaces)</Enlace></li>
            <li><Enlace href="#gestos-del-raton">Gestos del ratón</Enlace></li>
            <li><Enlace href="#kitty">Comandos básicos dentro de Kitty</Enlace></li>
            <li><Enlace href="#atajos-bash">Atajos básicos (Bash y Zsh)</Enlace></li>
            <li><Enlace href="#comandos-bash-zsh">Bash y Zsh Comandos</Enlace></li>
        </Lista>
    );
}

export default function General() {
    return (
        <>
            <TemarioAsideCompleto temario={Temario} />

            <Estructura>
                <div className="
                p-6 max-w-5xl mx-auto text-gray-200 font-sans space-y-6
                ">
                    <Titulo title="h1">Atajos de Teclado</Titulo>

                    <Linea />

                    <TemarioCompleto temario={Temario} />

                    <Titulo title="h2" id="modificadores-principales">Modificadores principales</Titulo>

                    <Lista>
                        <li><strong>$mainMod = SUPER</strong> {"=>"} tecla Windows / Super</li>
                        <li><strong>$secondMod = SUPER_SHIFT</strong> {"=>"} Windows + Shift</li>
                    </Lista>

                    <Titulo title="h2" id="gestion-de-ventanas">Gestión de ventanas</Titulo>

                    <Tabla>
                        <TablaCabezera headers={["Atajo", "Acción"]} />

                        <tbody>
                            <TablaFila><TablaUnica><strong>Super + Return</strong></TablaUnica><TablaUnica>Abrir terminal (kitty)</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + C</strong></TablaUnica><TablaUnica>Cerrar ventana activa</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + M</strong></TablaUnica><TablaUnica>Salir de sesión Hyprland</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + U</strong></TablaUnica><TablaUnica>Alternar modo flotante</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + P</strong></TablaUnica><TablaUnica>Activar pseudotile (ventana de tamaño original, pero mantiene el orden)</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + O</strong></TablaUnica><TablaUnica>Cambiar modo de división</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + F</strong></TablaUnica><TablaUnica>Abrir Firefox</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + Z</strong></TablaUnica><TablaUnica>Abrir flameshot gui</TablaUnica></TablaFila>
                        </tbody>
                    </Tabla>

                    <Titulo title="h2" id="menus-personalizados">Menús personalizados</Titulo>

                    <Tabla>
                        <TablaCabezera headers={["Atajo", "Acción"]} />

                        <tbody>
                            <TablaFila><TablaUnica><strong>Super + D</strong></TablaUnica><TablaUnica>Rofi drun (Menú Aplicaciones)</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + Q</strong></TablaUnica><TablaUnica>Menú de apagado</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + A</strong></TablaUnica><TablaUnica>Cambiador de temas</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + W</strong></TablaUnica><TablaUnica>Cambiador de fondos</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + E</strong></TablaUnica><TablaUnica>Menú de iconos</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + Shift + Return</strong></TablaUnica><TablaUnica>Modo hacker (abrir 3 ventanas kitty organizadas)</TablaUnica></TablaFila>
                        </tbody>
                    </Tabla>

                    <Titulo title="h2" id="movimiento-entre-ventanas">Movimiento entre ventanas</Titulo>

                    <Tabla>
                        <TablaCabezera headers={["Atajo", "Acción"]} />

                        <tbody>
                            <TablaFila><TablaUnica><strong>Super + ←/→/↑/↓</strong></TablaUnica><TablaUnica>Mover foco</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + H/L/K/J</strong></TablaUnica><TablaUnica>Mover foco (vim style)</TablaUnica></TablaFila>
                        </tbody>
                    </Tabla>

                    <Titulo title="h2" id="workspaces">Espacios de trabajo</Titulo>

                    <Tabla>
                        <thead><TablaFila><th>Atajo</th><th>Acción</th></TablaFila></thead>

                        <tbody>
                            <TablaFila><TablaUnica><strong>Super + 1–0</strong></TablaUnica><TablaUnica>Cambiar workspace</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + Shift + 1–0</strong></TablaUnica><TablaUnica>Mover ventana</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + S</strong></TablaUnica><TablaUnica>Workspace Magic</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + Shift + S</strong></TablaUnica><TablaUnica>Mover ventana a Magic</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + Scroll Up</strong></TablaUnica><TablaUnica>Workspace anterior</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + Scroll Down</strong></TablaUnica><TablaUnica>Siguiente workspace</TablaUnica></TablaFila>
                        </tbody>
                    </Tabla>

                    <Titulo title="h2" id="gestos-del-raton">Gestos del ratón</Titulo>
                    
                    <Tabla>
                        <TablaCabezera headers={["Atajos", "Acción"]} />

                        <tbody>
                            <TablaFila><TablaUnica><strong>Super + click izq</strong></TablaUnica><TablaUnica>Mover ventana</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica><strong>Super + click der</strong></TablaUnica><TablaUnica>Redimensionar</TablaUnica></TablaFila>
                        </tbody>
                    </Tabla>

                    <Titulo title="h2" id="kitty">Comandos básicos dentro de Kitty</Titulo>

                    <Tabla>
                        <TablaCabezera headers={["Acción", "Atajo", "Descripción"]} />

                        <tbody>
                            <TablaFila><TablaUnica>Nueva pestaña</TablaUnica><TablaUnica>Ctrl + Shift + t</TablaUnica><TablaUnica>Abrir pestaña</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Cerrar pestaña</TablaUnica><TablaUnica>Ctrl + Shift + w</TablaUnica><TablaUnica>Cierra pestaña</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Cambiar pestaña</TablaUnica><TablaUnica>Ctrl + Shift + ←/→</TablaUnica><TablaUnica>Navegar</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Dividir vertical</TablaUnica><TablaUnica>Ctrl + Shift + Enter</TablaUnica><TablaUnica>Split vertical</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Dividir horizontal</TablaUnica><TablaUnica>Ctrl + Shift + d</TablaUnica><TablaUnica>Split horizontal</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Mover entre paneles</TablaUnica><TablaUnica>Ctrl + Shift + flechas</TablaUnica><TablaUnica>Foco panel</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Cerrar panel</TablaUnica><TablaUnica>Ctrl + Shift + q</TablaUnica><TablaUnica>Close pane</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Zoom</TablaUnica><TablaUnica>Ctrl + + / -</TablaUnica><TablaUnica>Aumentar/reducir</TablaUnica></TablaFila>
                        </tbody>
                    </Tabla>

                    <Titulo title="h2" id="atajos-bash">Atajos básicos (idénticos a Bash)</Titulo>
                    <Tabla>
                        <TablaCabezera headers={["Atajo", "Acción"]} />

                        <tbody>
                            <TablaFila><TablaUnica>Ctrl + A</TablaUnica><TablaUnica>Inicio línea</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Ctrl + E</TablaUnica><TablaUnica>Final línea</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Ctrl + U</TablaUnica><TablaUnica>Borrar antes del cursor</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Ctrl + K</TablaUnica><TablaUnica>Borrar después del cursor</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Ctrl + W</TablaUnica><TablaUnica>Borrar palabra</TablaUnica></TablaFila>
                        </tbody>
                    </Tabla>

                    <Titulo title="h2" id="comandos-bash-zsh">Atajos especiales de Zsh (ZLE)</Titulo>

                    <Tabla>
                        <TablaCabezera headers={["Atajo", "Acción"]} />

                        <tbody>
                            <TablaFila><TablaUnica>Ctrl + X, Ctrl + E</TablaUnica><TablaUnica>Editar comando actual</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Ctrl + X, Ctrl + U</TablaUnica><TablaUnica>Deshacer</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Alt + .</TablaUnica><TablaUnica>Último argumento</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Esc + /</TablaUnica><TablaUnica>Autocompletar historial</TablaUnica></TablaFila>
                            <TablaFila><TablaUnica>Ctrl + X, *</TablaUnica><TablaUnica>Expandir patrones</TablaUnica></TablaFila>
                        </tbody>
                    </Tabla>
                </div>
            </Estructura>
        </>
    );
};

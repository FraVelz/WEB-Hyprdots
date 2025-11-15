import Estructura, { TemarioAsideCompleto } from "./../componentes/organismos/estructura";
import Titulo from "../componentes/moleculas/titulo";
import Lista from "../componentes/moleculas/lista"

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
    </Lista>
  );
}

export default function Visualizacion() {
    return (
        <>
            <TemarioAsideCompleto temario={Temario} />

            <Estructura>
                <Titulo title="h2">Visualizacion</Titulo>
            </Estructura>
        </>
    );
}

import Paragrafos from "../../components/Paragrafos";
import Titulos from "../../components/Titulos";
import VisaoBasica from "../../components/documentation-app/common/VisaoBasica";

export function Tipografia() {
    return (
        <VisaoBasica nivel={1}>
            <h1 className="my-3">Tipografia</h1>
            <h3 className="my-4">Titulos</h3>
            <Titulos />
            <h3 className="my-4">Paragrafos</h3>
            <Paragrafos />
        </VisaoBasica>
    );
}
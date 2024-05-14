import Paragrafos from "../../components/Paragrafos";
import Titulos from "../../components/Titulos";
import VisaoBasica from "../../components/documentation-app/common/VisaoBasica";

export function Tipografia() {
    return (
        <VisaoBasica nivel={1} titulo="">
            <h1 className="my-3">Tipografia</h1>
            <Titulos />
            <Paragrafos />
        </VisaoBasica>
    );
}
import Paragrafos from "../components/Paragrafos";
import Titulos from "../components/Titulos";
import VisaoBasica from "../components/VisaoBasica";

export default function PaginaTipografia() {
    return (
        <VisaoBasica nivel={1} titulo="Tipografia">
            <Titulos />
            <Paragrafos />
        </VisaoBasica>
    );
}
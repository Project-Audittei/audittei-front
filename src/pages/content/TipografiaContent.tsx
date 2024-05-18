import Paragrafos from "../../components/Tipografia/Paragrafos";
import Titulos from "../../components/Tipografia/Titulos";

export default function TipografiaContent() {
    return (
        <>
            <h1 className="titulo-pagina">03. Tipografia <span>https://fonts.google.com/specimen/Work+Sans</span></h1>
            <div className="row">
                <div className="card mt-3 mb-4">
                    <div className="card-header">FONTE</div>
                    <div className="card-body">Work Sans</div>
                </div>
            </div>
            <Titulos />
            <Paragrafos />
        </>
    );
}
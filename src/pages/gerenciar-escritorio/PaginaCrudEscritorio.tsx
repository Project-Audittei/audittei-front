import VisaoBasica from "../../components/VisaoBasica";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EscritorioModel } from "../../models/EscritorioModel";
import useUsuario from "../../hooks/useUsuario";
import FormularioEditarEscritorio from "../../components/app/Forms/Escritorio/FormularioEditarEscritorio";

interface PaginaCrudEmpresaProps {
    modo: "novo" | "edicao";
}

export default function PaginaCrudEscritorio({modo}: PaginaCrudEmpresaProps) {
    const [escritorio, setEscritorio] = useState<EscritorioModel | null>(null);

    const params = useParams();

    const { usuario } = useUsuario();

    useEffect(() => {
        if(usuario) {
            setEscritorio(usuario.escritorio);
            console.log(usuario.escritorio);
        }

    }, [modo, params, usuario]);

    if(!escritorio) return (<VisaoBasica breadcrumbSecao="Editar Escritório:" menuAtivo="/gerenciar-escritorio/editar"></VisaoBasica>);
    return (
        <VisaoBasica breadcrumbSecao="Editar Escritório:" menuAtivo="/gerenciar-escritorio/editar">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h3>{ "Editando Escritório" }</h3>
                    </div>
                </div>
            </div>
            <hr />
            <div className="card mt-3">
                <div className="card-body">
                    <div className="row row-align-center">
                        <div className="col-6">
                            <FormularioEditarEscritorio escritorio={escritorio} setEscritorio={setEscritorio} />
                        </div>
                    </div>
                </div>
            </div>
        </VisaoBasica>
    );
}
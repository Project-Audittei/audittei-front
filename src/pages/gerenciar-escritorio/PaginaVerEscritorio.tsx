import VisaoBasica from "../../components/VisaoBasica";
import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import { EscritorioModel } from "../../models/EscritorioModel";
import { useNavigate } from "react-router-dom";
import useUsuario from "../../hooks/useUsuario";
import FormularioVerEscritorio from "../../components/app/Forms/Escritorio/FormularioVerEscritorio";
import useAnalytics from "../../analytics/useAnalytics";

export default function PaginaVerEscritorio() {
    const { usuario } = useUsuario();
    const [escritorio, setEscritorio] = useState<EscritorioModel | null>(null);
    const navigate = useNavigate();

    const { enviarAnalise } = useAnalytics();

    useEffect(() => {
        enviarAnalise({
            page: '/gerenciar-escritorio',
            title: 'Gerenciar escritorio'
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(usuario) setEscritorio(usuario.escritorio);
    }, [usuario]);

    if(!escritorio) return (
        <VisaoBasica breadcrumbSecao="Gerenciar Escritório:" menuAtivo="/gerenciar-escritorio"></VisaoBasica>
    );

    return (
        <VisaoBasica breadcrumbSecao="Gerenciar Escritório:" menuAtivo="/gerenciar-escritorio">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h3>Gerenciar Escritório</h3>
                    </div>
                </div>
                <div className="col col-align-center align-right">
                    <div className="row row-align-right gap-0">
                        <Botao
                            className="ml-1"
                            tamanho="ExtraSmall"
                            estilo="Secondary"
                            icone={<Pencil size={16} />}
                            onClick={() => navigate('/gerenciar-escritorio/editar')}
                            label="Editar"
                        />
                    </div>
                </div>
            </div>            
            <FormularioVerEscritorio escritorio={escritorio} />

        </VisaoBasica>
    );
}
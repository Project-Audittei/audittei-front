import VisaoBasica from "../../components/VisaoBasica";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmpresaModel } from "../../models/EmpresaModel";
import { Printer, Pencil, CircleX } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import Tabela from "../../components/Tabela/Tabela";
import AssociarUsuarios from "../../components/app/Inputs/AssociarUsuarios";
import { UsuarioModel } from "../../models/UsuarioModel";
import { useEmpresa } from "../../services/EmpresaService";
import FormularioVerEmpresa from "../../components/app/Forms/Empresa/FormularioVerEmpresa";

export default function PaginaVerEmpresa() {

    const [empresa, setEmpresa] = useState<EmpresaModel>();
    const params = useParams();
    const { ObterEmpresaPorGUID } = useEmpresa();

    useEffect(() => {
        if (params.id) {
            ObterEmpresaPorGUID(params.id)
                        .then( dados => setEmpresa(dados));
        }
    }, [params]);
    
    if (!empresa) {
        return <VisaoBasica breadcrumbSecao="Gerenciar Empresas:" menuAtivo="/gerenciar-empresas"></VisaoBasica>
    }

    return (
        <VisaoBasica breadcrumbSecao="Gerenciar Empresas:" menuAtivo="/gerenciar-empresas">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h3>{empresa.nomeFantasia}</h3>
                    </div>
                </div>
                <div className="col col-align-center align-right">
                    <div className="row row-align-right gap-0">
                        <Botao
                            tamanho="ExtraSmall"
                            estilo="Secondary"
                            icone={<Printer size={16} />}
                            label="Imprimir"
                        />
                        <Botao
                            className="ml-1"
                            tamanho="ExtraSmall"
                            estilo="Secondary"
                            icone={<Pencil size={16} />}
                            label="Editar"
                        />
                        <Botao
                            className="ml-3"
                            tamanho="ExtraSmall"
                            estilo="Danger"
                            icone={<CircleX size={16} />}
                            label="Inativar"
                        />
                    </div>
                </div>
            </div>
            <div className="row mt-4 mb-3">
                <div className="col">
                    <h5 className="mb-3">Time envolvido</h5>
                    <Tabela<UsuarioModel> primeiroCampo="guid" campos={['', 'Nome', 'Perfil']} itens={empresa!.usuarios ?? []} eventos={{ onDeletar: () => { } }} />
                </div>
            </div>
            
            <AssociarUsuarios />
            <FormularioVerEmpresa empresa={empresa!} setEmpresa={setEmpresa} />

        </VisaoBasica>
    );
}
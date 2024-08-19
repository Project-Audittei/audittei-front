import { Plus } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import VisaoBasica from "../../components/VisaoBasica";
import Alerta from "../../components/app/Avisos/Alerta";
import Input from "../../components/Form/Input";
import Selecao from "../../components/Form/Selecao";
import { useNavigate } from "react-router-dom";
import Tabela from "../../components/Tabela/Tabela";
import Paginacao from "../../components/Paginacao/Paginacao";
import { EmpresaModel } from "../../models/EmpresaModel";
import { useEffect, useState } from "react";
import { useEmpresa } from "../../services/EmpresaService";
import Loader from "../../components/Loader/Loader";
import useAnalytics from "../../analytics/useAnalytics";

export default function PaginaListarEmpresas() {
    const { ObterEmpresas } = useEmpresa();
    const navigate = useNavigate();

    const [ carregando, setCarregando ] = useState(false);
    
	const { enviarAnalise } = useAnalytics();

    useEffect(() => {
        enviarAnalise({
            page: '/gerenciar-empresas',
            title: 'Gerenciar Empresas'
        });

        setCarregando(true);
        ObterEmpresas()
            .then( dados => setEmpresas(dados) )
            .finally(() => setCarregando(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const HandleCriarNovaEmpresa = () => navigate('/gerenciar-empresas/nova');
    const HandleEditarEmpresa = (id: string) => navigate('/gerenciar-empresas/editar/' + id);
    const HandleVerNovaEmpresa = (id: string) => navigate('/gerenciar-empresas/visualizar/' + id);

    const [empresas, setEmpresas] = useState<EmpresaModel[]>([]);

    if(carregando) return (
        <VisaoBasica menuAtivo="/gerenciar-empresas">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h3>💼 Gerenciamento de empresas</h3>
                    </div>
                    <div className="row">
                        <p className="subtitulo">Aqui você pode gerenciar, editar, criar e excluir seus clientes.</p>
                    </div>
                </div>
                <div className="col col-align-center align-right">
                    <Botao
                        tamanho="ExtraSmall"
                        estilo="Primary"
                        icone={<Plus size={16} />}
                        label="Adicionar nova Empresa"
                        onClick={HandleCriarNovaEmpresa}
                    />
                </div>
            </div>
            <hr />
            <div className="row filtro">
                <div className="col-4">
                    <div className="row">
                        <div className="subtitulo">Pesquisar</div>
                        <Input
                            type="text"
                            label="Digite o nome ou CNPJ da Empresa"
                        />
                    </div>
                </div>
                <div className="col-6"></div>
                <div className="col-2">
                    <Selecao
                        label="Mostrar 10 resultados"
                        opcoes={[{ id: 1, name: "Mostrar 10 resultados" }]}
                    />
                </div>
            </div>
            <Loader />
        </VisaoBasica>
    );

    return (
        <VisaoBasica menuAtivo="/gerenciar-empresas">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h3>💼 Gerenciamento de empresas</h3>
                    </div>
                    <div className="row">
                        <p className="subtitulo">Aqui você pode gerenciar, editar, criar e excluir seus clientes.</p>
                    </div>
                </div>
                <div className="col col-align-center align-right">
                    <Botao
                        tamanho="ExtraSmall"
                        estilo="Primary"
                        icone={<Plus size={16} />}
                        label="Adicionar nova Empresa"
                        onClick={HandleCriarNovaEmpresa}
                    />
                </div>
            </div>
            <hr />
            <div className="row filtro">
                <div className="col-4">
                    <div className="row">
                        <div className="subtitulo">Pesquisar</div>
                        <Input
                            type="text"
                            label="Digite o nome ou CNPJ da Empresa"
                        />
                    </div>
                </div>
                <div className="col-6"></div>
                <div className="col-2">
                    <Selecao
                        label="Mostrar 10 resultados"
                        opcoes={[{ id: 1, name: "Mostrar 10 resultados" }]}
                    />
                </div>
            </div>
            { empresas.length === 0 ?
                <>
                    <Alerta
                        titulo="Nenhuma Empresa Cadastrada"
                        descricao="Parece que ainda não há empresas cadastradas. Vamos começar a adicionar algumas!"
                    >
                        <Botao
                            tamanho="ExtraSmall"
                            estilo="Primary"
                            icone={<Plus size={16} />}
                            label="Adicionar a primeira Empresa"
                            onClick={HandleCriarNovaEmpresa}
                        />
                    </Alerta>
                </>
                : (
                    <div className="mt-3">
                        <Tabela<EmpresaModel> 
                            campos={["CNPJ", "Razão Social", "UF", "Cadastro"]} 
                            chaves={['cnpj', 'razaoSocial', 'uf', 'created_at']} 
                            itens={empresas} 
                            eventos={{
                                onEditar: HandleEditarEmpresa,
                                onVisualizar: HandleVerNovaEmpresa
                            }}
                        />
                        <div className="row row-align-center mt-2">
                            <div className="col-2">
                                <Paginacao atual={1} quantidade={1} onAvancarPagina={() => { }} onRetrocederPagina={() => { }} onSelecionarNumeroPagina={() => { }} />
                            </div>
                        </div>
                    </div>
                )}
        </VisaoBasica>
    );
}
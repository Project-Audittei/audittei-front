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

const data: EmpresaModel[] = [
    {
        id: 1,
        cnpj: 37764102000193,
        razao_social: "MicroPack LTDA",
        uf: "SP",
        cadastro: "14/05/24",
        bairro: "Perdizes",
        cep: "31837-033",
        cnae: 0,
        email: "joao@micropack.com.br",
        industria: "Indústria",
        logradouro: "Rua ABC",
        municipio: "São Paulo",
        nome_fantasia: "MicroPack",
        numero: "123",
        regimeTributario: "Simples Nacional",
        responsavel: "João Silva",
        complemento: "Frente"
    },
];

export default function PaginaListarEmpresas() {

    const navigate = useNavigate();

    const HandleCriarNovaEmpresa = () => navigate('/gerenciar-empresas/nova');
    const HandleEditarEmpresa = (id: number) => navigate('/gerenciar-empresas/editar/' + id);
    const HandleVerNovaEmpresa = (id: number) => navigate('/gerenciar-empresas/visualizar/' + id);

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
            {data.length === 0 ?
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
                            chaves={['cnpj', 'razao_social', 'uf', 'cadastro']} 
                            itens={data} 
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
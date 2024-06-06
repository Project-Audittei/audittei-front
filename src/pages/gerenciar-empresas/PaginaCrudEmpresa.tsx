import { ArrowRight, Plus } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import VisaoBasica from "../../components/VisaoBasica";
import { useEffect, useState } from "react";
import Input from "../../components/Form/Input";
import FormContainer from "../../components/Form/FormContainer";
import Selecao from "../../components/Form/Selecao";
import useModal from "../../hooks/useModal";
import ImportarPlanilhaEmpresas from "../../components/app/Modais/ImportarPlanilhaEmpresas";
import { useParams } from "react-router-dom";
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

interface PaginaCrudEmpresaProps {
    modo: "novo" | "edicao";
}

export default function PaginaCrudEmpresa({modo}: PaginaCrudEmpresaProps) {
    const [modoEdicao, setModoEdicao] = useState(false);
    const [empresa, setEmpresa] = useState<EmpresaModel>({} as EmpresaModel);

    const { modalOpen } = useModal();
    const params = useParams();

    useEffect(() => {
        if(params.id) {
            setEmpresa(data[parseInt(params.id) - 1] as EmpresaModel)
            setModoEdicao(true);
        }

        if(modo === 'novo') {
            setModoEdicao(false);
            setEmpresa({} as EmpresaModel);
        }

    }, [modo, params]);

    const HandleAbrirImportadorPlanilha = () => {
        modalOpen(<ImportarPlanilhaEmpresas />, true);
    }

    return (
        <VisaoBasica breadcrumbSecao="Gerenciar Empresas:" menuAtivo="/gerenciar-empresas/nova">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h3>{ modoEdicao ? `Editando ${empresa.nome_fantasia}` : "➕ Adicionar nova Empresa" }</h3>
                    </div>
                </div>
                <div className="col col-align-center align-right">
                    { modoEdicao ? '' : <Botao
                        tamanho="ExtraSmall"
                        estilo="Primary"
                        icone={<Plus size={16} />}
                        label="Adicionar muitas Empresas de uma só vez"
                        onClick={HandleAbrirImportadorPlanilha}
                    /> }
                </div>
            </div>
            <hr />
            <div className="card mt-3">
                <div className="card-body">
                    <div className="row row-align-center">
                        <div className="col-6">
                            <FormContainer>
                                <div className="form-element-group">
                                    <h5>Dados cadastrais</h5>
                                    <hr />
                                    <Input
                                        type="number"
                                        label="CNPJ"
                                        className="w-50"
                                        disabled={modoEdicao}
                                    />
                                    <Input
                                        type="text"
                                        label="Razão Social"
                                        value={empresa.razao_social}
                                        onChange={(e) => setEmpresa({...empresa, razao_social: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        label="Nome Fantasia"
                                        value={empresa.nome_fantasia}
                                        onChange={(e) => setEmpresa({...empresa, nome_fantasia: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        label="Responsável Legal"
                                        value={empresa.responsavel}
                                        onChange={(e) => setEmpresa({...empresa, responsavel: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        label="E-mail"
                                        value={empresa.email}
                                        onChange={(e) => setEmpresa({...empresa, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-element-group">
                                    <h5>Dados Tributários</h5>
                                    <hr />
                                    <Selecao
                                        opcoes={[
                                            { id: 1, name: "Regime Tributário" }
                                        ]}
                                    />
                                    <Input
                                        type="number"
                                        label="CNAE"
                                        className="w-50"
                                        disabled={modoEdicao}
                                        value={empresa.cnae}
                                        onChange={(e) => setEmpresa({...empresa, cnae: parseInt(e.target.value) })}
                                    />
                                    <Selecao
                                        opcoes={[
                                            { id: 1, name: "Atividade" }
                                        ]}
                                    />
                                </div>
                                <div className="form-element-group">
                                    <h5>Dados de Localização</h5>
                                    <hr />
                                    <Input
                                        type="number"
                                        label="CEP"
                                        className="w-50"
                                        value={empresa.cep}
                                        onChange={(e) => setEmpresa({...empresa, cep: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        label="Logradouro"
                                        value={empresa.logradouro}
                                        onChange={(e) => setEmpresa({...empresa, logradouro: e.target.value })}
                                    />
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="Bairro"
                                                value={empresa.bairro}
                                                onChange={(e) => setEmpresa({...empresa, bairro: e.target.value })}
                                            />
                                        </div>
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="Município"
                                                value={empresa.municipio}
                                                onChange={(e) => setEmpresa({...empresa, municipio: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <Input
                                        type="number"
                                        label="Número"
                                        className="w-50"
                                        value={empresa.numero}
                                        onChange={(e) => setEmpresa({...empresa, numero: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        label="Complemento"
                                        value={empresa.complemento}
                                        onChange={(e) => setEmpresa({...empresa, complemento: e.target.value })}
                                    />
                                    <Selecao
                                        className="w-50"
                                        opcoes={[
                                            { id: 1, name: "UF" }
                                        ]}
                                    />
                                </div>
                                <div className="form-element-group">
                                    <Botao
                                        className="btn-max"
                                        estilo="Primary"
                                        tamanho="Normal"
                                        label={ modoEdicao ? "Salvar" : "Adicionar nova Empresa" }
                                        icone={<ArrowRight size={24} />}
                                        iconePosicao="direita"
                                    />
                                </div>
                            </FormContainer>
                        </div>
                    </div>
                </div>
            </div>
        </VisaoBasica>
    );
}
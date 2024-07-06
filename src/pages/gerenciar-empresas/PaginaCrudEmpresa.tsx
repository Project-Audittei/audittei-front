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
import { EmpresaModel, IEmpresaAtualizar, IEmpresaCadastro } from "../../models/EmpresaModel";
import InputCNPJ from "../../components/Form/InputCNPJ";
import { CNPJSanitize } from "../../helpers/CNPJSanitize";
import { useEmpresa } from "../../services/EmpresaService";
import { TelefoneMascara, TelefoneSanitize } from "../../helpers/TelefoneSanitize";

interface PaginaCrudEmpresaProps {
    modo: "novo" | "edicao";
}

export default function PaginaCrudEmpresa({modo}: PaginaCrudEmpresaProps) {
    const [modoEdicao, setModoEdicao] = useState(false);
    const [empresa, setEmpresa] = useState<IEmpresaCadastro>({} as IEmpresaCadastro);
    const [carregando, setCarregando] = useState<boolean>(false);

    const { modalOpen } = useModal();
    const params = useParams();

    const { ObterInformacoesCNPJ, CadastrarEmpresa, ObterEmpresaPorGUID, AtualizarEmpresa } = useEmpresa();

    useEffect(() => {
        if(params.id) {
            ObterEmpresaPorGUID(params.id)
                .then( dados => setEmpresa(dados! as IEmpresaCadastro) );
            setModoEdicao(true);
        }

        if(modo === 'novo') {
            setModoEdicao(false);
            setEmpresa({} as IEmpresaCadastro);
        }

    }, [modo, params]);

    const HandleAbrirImportadorPlanilha = () => {
        modalOpen(<ImportarPlanilhaEmpresas />, true);
    }

    const HandleCadastrarEmpresa = async (e: any) => {
        e.preventDefault();

        if(!modoEdicao) {
            return await CadastrarEmpresa(empresa);
        } else {
            const entidade: IEmpresaAtualizar = {
                guid: empresa.guid!,
                complemento: empresa.complemento,
                email: empresa.email,
                nomeFantasia: empresa.nomeFantasia,
                responsavelLegal: empresa.responsavelLegal,
                telefone: empresa.telefone
            };
            return await AtualizarEmpresa(entidade);
        }
    }

    async function HandleCNPJ(e: any) {
        setEmpresa({...empresa, cnpj: e.target.value });
        let entrada = e.target.value;
        if (CNPJSanitize(entrada).split('').length === 14) {
            setCarregando(true);
            entrada = CNPJSanitize(entrada);
            ObterInformacoesCNPJ(entrada)
                .then(data => {
                    setEmpresa( tmp => ({
                        ...tmp,
                        razaoSocial: data.razaoSocial,
                        logradouro: data.logradouro,
                        numero: data.numero,
                        cep: data.cep,
                        bairro: data.bairro,
                        cidade: data.cidade,
                        uf: data.uf,
                    }));
                })
                .finally(() => setCarregando(false));
        }
    }

    return (
        <VisaoBasica breadcrumbSecao="Gerenciar Empresas:" menuAtivo="/gerenciar-empresas/nova">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h3>{ modoEdicao ? `Editando ${empresa.nomeFantasia}` : "➕ Adicionar nova Empresa" }</h3>
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
                                    <InputCNPJ
                                        type="text"
                                        value={ empresa.cnpj }
                                        setValue={(e) => HandleCNPJ(e)}
                                        isCarregando={carregando}
                                        disabled={ modoEdicao }
                                    />
                                    <Input
                                        type="text"
                                        label="Razão Social"
                                        value={empresa.razaoSocial}
                                        onChange={(e) => setEmpresa({...empresa, razaoSocial: e.target.value })}
                                        disabled
                                    />
                                    <Input
                                        type="text"
                                        label="Nome Fantasia"
                                        value={empresa.nomeFantasia}
                                        onChange={(e) => setEmpresa({...empresa, nomeFantasia: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        label="Responsável Legal"
                                        value={empresa.responsavelLegal}
                                        onChange={(e) => setEmpresa({...empresa, responsavelLegal: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        label="E-mail"
                                        value={empresa.email}
                                        onChange={(e) => setEmpresa({...empresa, email: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        label="Telefone"
                                        value={ TelefoneMascara(empresa.telefone ?? '') }
                                        onChange={(e) => setEmpresa({...empresa, telefone: TelefoneSanitize(e.target.value) })}
                                    />
                                </div>
                                {/* <div className="form-element-group">
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
                                </div> */}
                                <div className="form-element-group">
                                    <h5>Dados de Localização</h5>
                                    <hr />
                                    <Input
                                        type="number"
                                        label="CEP"
                                        className="w-50"
                                        value={empresa.cep}
                                        onChange={(e) => setEmpresa({...empresa, cep: e.target.value })}
                                        disabled
                                    />
                                    <Input
                                        type="text"
                                        label="Logradouro"
                                        value={empresa.logradouro}
                                        onChange={(e) => setEmpresa({...empresa, logradouro: e.target.value })}
                                        disabled
                                    />
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="Bairro"
                                                value={empresa.bairro}
                                                onChange={(e) => setEmpresa({...empresa, bairro: e.target.value })}
                                                disabled
                                            />
                                        </div>
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="Município"
                                                value={empresa.cidade}
                                                onChange={(e) => setEmpresa({...empresa, cidade: e.target.value })}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <Input
                                        type="text"
                                        label="Número"
                                        className="w-50"
                                        value={empresa.numero}
                                        onChange={(e) => setEmpresa({...empresa, numero: e.target.value })}
                                        disabled
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
                                        disabled
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
                                        onClick={HandleCadastrarEmpresa}
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
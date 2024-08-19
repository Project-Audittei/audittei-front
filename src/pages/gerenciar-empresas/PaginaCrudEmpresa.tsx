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
import { IEmpresaCadastro } from "../../models/EmpresaModel";
import InputCNPJ from "../../components/Form/InputCNPJ";
import { useEmpresa } from "../../services/EmpresaService";
import { TelefoneMascara, TelefoneSanitize } from "../../helpers/TelefoneSanitize";
import Loader from "../../components/Loader/Loader";
import { ufs } from "../../helpers/UFLista";
import { InputError } from "../../@types/InputErro";
import { ValidarCampos } from "../../helpers/ValidadorCampo";
import InputTelefone from "../../components/Form/InputTelefone";
import { CEPMascara, CEPSanitize } from "../../helpers/CEPHelper";
import useAnalytics from "../../analytics/useAnalytics";

interface PaginaCrudEmpresaProps {
    modo: "novo" | "edicao";
}

export default function PaginaCrudEmpresa({modo}: PaginaCrudEmpresaProps) {
    const [modoEdicao, setModoEdicao] = useState(false);
    const [empresa, setEmpresa] = useState<IEmpresaCadastro>({
        guid: "",
        cnpj: "",
        nomeFantasia: "",
        responsavelLegal: "",
        email: "",
        telefone: "",
        razaoSocial: "",
        cep: "",
        logradouro: "",
        bairro: "",
        cidade: "",
        numero: "",
        complemento: "",
        uf: ""
    });
    const [carregando, setCarregando] = useState<boolean>(false);

    const [erroCNPJ, setErroCNPJ] = useState<InputError | null>(null);
    const [erroResponsavelLegal, setErroResponsavelLegal] = useState<InputError | null>(null);
    const [erroNomeFantasia, setErroNomeFantasia] = useState<InputError | null>(null);
    const [erroEmail, setErroEmail] = useState<InputError | null>(null);
    const [erroTelefone, setErroTelefone] = useState<InputError | null>(null);

    const { modalOpen } = useModal();
    const params = useParams();
    const { enviarAnalise } = useAnalytics();

    const { 
        ObterInformacoesCNPJ, 
        CadastrarEmpresa, 
        ObterEmpresaPorGUID, 
        AtualizarEmpresa 
    } = useEmpresa();

    useEffect(() => {
        

        if(params.id) {
            ObterEmpresaPorGUID(params.id)
                .then( dados => setEmpresa(dados! as IEmpresaCadastro) );
            setModoEdicao(true);
        }

        if(modo === 'novo') {
            enviarAnalise({
                page: '/gerenciar-empresas/nova',
                title: 'Criar nova empresa'
            });

            setModoEdicao(false);
            setEmpresa({
                guid: "",
                cnpj: "",
                nomeFantasia: "",
                responsavelLegal: "",
                email: "",
                telefone: "",
                razaoSocial: "",
                cep: "",
                logradouro: "",
                bairro: "",
                cidade: "",
                numero: "",
                complemento: "",
                uf: ""
            });
        } else {
            enviarAnalise({
                page: '/gerenciar-empresas/editar',
                title: 'Criar editar empresa'
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modo, params]);

    const HandleAbrirImportadorPlanilha = () => {
        modalOpen(<ImportarPlanilhaEmpresas />, true);
    }

    const HandleCadastrarEmpresa = async (e: any) => {
        e.preventDefault();

        setCarregando(true);

        if (!ValidarCampos([
            {
                campo: empresa.cnpj,
                regras: [{ regra: "not-null" }, { regra: "not-empty" }],
                setError: setErroCNPJ
            },
            {
                campo: empresa.responsavelLegal,
                regras: [{ regra: "not-null" }, { regra: "not-empty" }],
                setError: setErroResponsavelLegal
            },
            {
                campo: empresa.nomeFantasia,
                regras: [{ regra: "not-null" }, { regra: "not-empty" }],
                setError: setErroNomeFantasia
            },
            {
                campo: empresa.email,
                regras: [{ regra: "not-null" }, { regra: "not-empty" }],
                setError: setErroEmail
            },
            {
                campo: empresa.telefone,
                regras: [{ regra: "not-null" }, { regra: "not-empty" }],
                setError: setErroTelefone
            }
        ])) {
            return setCarregando(false);
        }

        if(!modoEdicao) {
            return await CadastrarEmpresa(empresa);
        } else {
            return await AtualizarEmpresa({
                guid: empresa.guid!,
                complemento: empresa.complemento,
                email: empresa.email,
                nomeFantasia: empresa.nomeFantasia,
                responsavelLegal: empresa.responsavelLegal,
                telefone: empresa.telefone
            });
        }
    }

    async function HandleCNPJ(cnpj: string) {
        setEmpresa({...empresa, cnpj: cnpj });
        setCarregando(true);
        ObterInformacoesCNPJ(cnpj)
            .then(data => {
                setEmpresa( tmp => ({
                    ...tmp,
                    nomeFantasia: data.nomeFantasia ?? '',
                    razaoSocial: data.razaoSocial,
                    logradouro: data.logradouro,
                    numero: data.numero,
                    complemento: data.complemento ?? '',
                    cep: data.cep,
                    bairro: data.bairro,
                    cidade: data.cidade,
                    telefone: data.telefone,
                    email: data.email,
                    uf: data.uf,
                }));
            })
            .finally(() => setCarregando(false));
    }

    if(empresa.guid === undefined && modoEdicao) return (
        <VisaoBasica breadcrumbSecao="Gerenciar Empresas:" menuAtivo="/gerenciar-empresas/nova">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h3>Editando</h3>
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
                            <Loader />
                        </div>
                    </div>
                </div>
            </div>
        </VisaoBasica>
    );

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
                                        estado={ erroCNPJ?.estado ?? 'padrao' }
                                        mensagensValidacao={{
                                            erro: erroCNPJ?.mensagem
                                        }}
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
                                        estado={ erroNomeFantasia?.estado ?? 'padrao' }
                                        mensagensValidacao={{
                                            erro: erroNomeFantasia?.mensagem
                                        }}
                                    />
                                    <Input
                                        type="text"
                                        label="Responsável Legal"
                                        value={empresa.responsavelLegal}
                                        onChange={(e) => setEmpresa({...empresa, responsavelLegal: e.target.value })}
                                        estado={ erroResponsavelLegal?.estado ?? 'padrao' }
                                        mensagensValidacao={{
                                            erro: erroResponsavelLegal?.mensagem
                                        }}
                                    />
                                    <Input
                                        type="text"
                                        label="E-mail"
                                        value={empresa.email}
                                        onChange={(e) => setEmpresa({...empresa, email: e.target.value })}
                                        estado={ erroEmail?.estado ?? 'padrao' }
                                        mensagensValidacao={{
                                            erro: erroEmail?.mensagem
                                        }}
                                    />
                                    <InputTelefone
                                        value={ TelefoneMascara(empresa.telefone ?? '') }
                                        setValue={telefone => setEmpresa({...empresa, telefone: TelefoneSanitize(telefone) })}
                                        estado={ erroTelefone?.estado ?? 'padrao' }
                                        mensagensValidacao={{
                                            erro: erroTelefone?.mensagem
                                        }}
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
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="CEP"
                                                value={ CEPMascara(empresa.cep) }
                                                onChange={(e) => setEmpresa({...empresa, cep: CEPSanitize(e.target.value) })}
                                                disabled
                                            />
                                        </div>
                                        <div className="col"></div>
                                    </div>
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
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="Número"
                                                value={empresa.numero}
                                                onChange={(e) => setEmpresa({...empresa, numero: e.target.value })}
                                                disabled
                                            />
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                    <Input
                                        type="text"
                                        label="Complemento"
                                        value={empresa.complemento}
                                        onChange={(e) => setEmpresa({...empresa, complemento: e.target.value })}
                                    />
                                    <Selecao
                                        value={empresa.uf}
                                        className="w-50"
                                        opcoes={ufs}
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
                                        isCarregando={ carregando }
                                        disabled={ carregando }
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
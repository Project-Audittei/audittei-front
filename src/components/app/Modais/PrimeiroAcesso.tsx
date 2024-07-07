import { ArrowRight } from "lucide-react";
import Botao from "../../Botoes/Botao";
import FormContainer from "../../Form/FormContainer";
import Input from "../../Form/Input";
import { useEffect, useState } from "react";
import { consumirAPI } from "../../../hooks/consumirAPI";
import { CNPJModel } from "../../../models/CNPJModel";
import useUsuario from "../../../hooks/useUsuario";
import { CNPJMascara, CNPJSanitize } from "../../../helpers/CNPJSanitize";
import { TelefoneMascara, TelefoneSanitize } from "../../../helpers/TelefoneSanitize";
import { InputError } from "../../../@types/InputErro";
import { ValidarCampos } from "../../../helpers/ValidadorCampo";
import { APIConfig } from "../../../api/APIConfig";
import { EscritorioModel } from "../../../models/EscritorioModel";
import InputCNPJ from "../../Form/InputCNPJ";
import { useEmpresa } from "../../../services/EmpresaService";
import { ufs } from "../../../helpers/UFLista";
import Selecao from "../../Form/Selecao";

export default function PrimeiroAcesso() {
    const [cnpj, setCnpj] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [empresa, setEmpresa] = useState<CNPJModel>({} as CNPJModel);
    const [carregandoCNPJ, setCarregandoCNPJ] = useState<boolean>(false);
    const [carregando, setCarregando] = useState<boolean>(false);
    const [erroCNPJ, setErroCNPJ] = useState<InputError | null>(null);
    const [erroEmail, setErroEmail] = useState<InputError | null>(null);
    const [erroTelefone, setErroTelefone] = useState<InputError | null>(null);
    const [isPerfilEmpresa, setIsPerfilEmpresa] = useState(true);

    const { usuario, AtualizarUsuario } = useUsuario();
    const { ObterInformacoesCNPJ } = useEmpresa();

    useEffect(() => {
        if (usuario) {
            setIsPerfilEmpresa(usuario.escritorio !== null);
        }
    }, [usuario]);

    const HandleBuscarEmpresa = async (entrada: string) => {
        setCnpj(CNPJMascara(entrada));
        setCarregandoCNPJ(true);
        ObterInformacoesCNPJ(entrada)
            .then(data => {
                setEmpresa(tmp => ({
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
            .finally(() => setCarregandoCNPJ(false));
    }

    const HandleCriarPerfil = async (e: any) => {
        e.preventDefault();

        setCarregando(true);

        if (!ValidarCampos([
            {
                campo: cnpj,
                regras: [{ regra: "not-null" }, { regra: "not-empty" }],
                setError: setErroCNPJ
            },
            {
                campo: email,
                regras: [{ regra: "not-null" }, { regra: "not-empty" }],
                setError: setErroEmail
            },
            {
                campo: telefone,
                regras: [{ regra: "not-null" }, { regra: "not-empty" }],
                setError: setErroTelefone
            }
        ])) {
            setCarregando(false);
            return setCarregandoCNPJ(false);
        }

        if (empresa.razaoSocial === '') {
            setCarregandoCNPJ(false);
            return setErroCNPJ({
                estado: "erro",
                mensagem: "Informe um CNPJ válido"
            })
        }

        const escritorio: EscritorioModel = {
            cnpj: CNPJSanitize(cnpj),
            razaoSocial: empresa.razaoSocial,
            telefone: TelefoneSanitize(telefone),
            email: email,
            cep: empresa.cep,
            logradouro: empresa.logradouro,
            bairro: empresa.bairro,
            cidade: empresa.cidade,
            numero: empresa.numero,
            uf: empresa.uf
        };

        const { success } = await consumirAPI({
            url: APIConfig.criarPerfilEmpresa,
            authToken: usuario!.access_token,
            dataRequest: escritorio,
            method: 'post'
        });

        if(success) {
            usuario!.escritorio = escritorio;

            AtualizarUsuario(usuario!);
            setCarregandoCNPJ(false);
            setIsPerfilEmpresa(true);
        } else {
            setCarregando(false);
        }
    }

    if (!isPerfilEmpresa) return (
        <div id="modal" className="modal-primeiro-acesso">
            <div className="backdrop"></div>
            <div className="modal-container">
                <div className="modal modal-personalizado">
                    <div className="modal-header">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/cadastro_empresa_header.svg`} alt="" />
                    </div>
                    <div className="modal-content" style={{ padding: "24px 32px" }}>
                        <div className="modal-body">
                            <FormContainer>
                                <h3 className="text-center">🎉 Você acessou a plataforma! Sinta-se em casa! 🎉</h3>
                                <span className="descricao text-center m-medium">Antes de prosseguir, precisamos de algumas informações sobre o seu escritório.</span>
                                <div className="form-element-group">
                                    <div className="row">
                                        <div className="col-6 col-inline">
                                            <InputCNPJ
                                                value={cnpj}
                                                setValue={HandleBuscarEmpresa}
                                                estado={erroCNPJ?.estado ?? 'padrao'}
                                                mensagensValidacao={{
                                                    erro: erroCNPJ?.mensagem
                                                }}
                                                disabled={carregandoCNPJ}
                                            />
                                            {carregandoCNPJ ? <span className="loader"></span> : ''}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="Razão Social"
                                                value={empresa.razaoSocial}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="E-mail do Escritório"
                                                value={email}
                                                onChange={e => setEmail(e.currentTarget.value)}
                                                estado={erroEmail?.estado ?? 'padrao'}
                                                mensagensValidacao={{ erro: erroEmail?.mensagem ?? '' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Input
                                                type="text"
                                                label="Telefone do Escritório"
                                                value={telefone}
                                                onChange={e => setTelefone(TelefoneMascara(e.currentTarget.value))}
                                                estado={erroTelefone?.estado ?? 'padrao'}
                                                mensagensValidacao={{ erro: erroTelefone?.mensagem ?? '' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Input
                                                type="text"
                                                label="CEP"
                                                value={empresa.cep}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="Logradouro"
                                                value={empresa.logradouro}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Input
                                                type="text"
                                                label="Bairro"
                                                value={empresa.bairro}
                                                disabled
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Input
                                                type="text"
                                                label="Cidade"
                                                value={empresa.cidade}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Input
                                                type="text"
                                                label="Número"
                                                value={empresa.numero}
                                                disabled
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Selecao
                                                value={empresa.uf}
                                                opcoes={ufs}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-align-center mt-1">
                                    <Botao
                                        estilo="Primary"
                                        tamanho="Normal"
                                        label="Entrar"
                                        icone={<ArrowRight size={24} />}
                                        iconePosicao="direita"
                                        onClick={HandleCriarPerfil}
                                        isCarregando={carregando}
                                        disabled={ carregando }
                                    />
                                </div>
                            </FormContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return <></>;
}


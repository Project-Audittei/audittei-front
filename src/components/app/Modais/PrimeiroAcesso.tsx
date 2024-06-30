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

export default function PrimeiroAcesso() {
    const [cnpj, setCnpj] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [empresa, setEmpresa] = useState<CNPJModel>({} as CNPJModel);
    const [carregandoCNPJ, setCarregandoCNPJ] = useState<boolean>(false);
    const [erroCNPJ, setErroCNPJ] = useState<InputError | null>(null);
    const [erroEmail, setErroEmail] = useState<InputError | null>(null);
    const [erroTelefone, setErroTelefone] = useState<InputError | null>(null);
    const [isPerfilEmpresa, setIsPerfilEmpresa] = useState(true);

    const { usuario } = useUsuario();

    useEffect(() => {
        if(usuario) {
            setIsPerfilEmpresa(usuario.escritorio !== null);
        }
    }, []);

    const HandleBuscarEmpresa = async (entrada: string) => {
        setCnpj(CNPJMascara(entrada));
        if (CNPJSanitize(entrada).split('').length === 14) {
            setCarregandoCNPJ(true);
            entrada = CNPJSanitize(entrada);
            const { data } = await consumirAPI<object, CNPJModel>({
                url: `${APIConfig.buscarCNPJ}`,
                method: 'post',
                dataRequest: {
                    "cnpj": entrada
                },
                authToken: usuario!.access_token
            }).finally(() => setCarregandoCNPJ(false));

            if (data) {
                setErroCNPJ(null);
                setEmpresa(data);
            } else {
                setErroCNPJ({
                    estado: 'aviso',
                    mensagem: "Nehuma empresa foi encontrada com o CNPJ fornecido"
                })
                setEmpresa({
                    bairro: '',
                    cep: '',
                    cidade: '',
                    estado: '',
                    logadouro: '',
                    razaoSocial: ''
                } as CNPJModel);
            }
        }
    }

    const HandleCriarPerfil = async (e: any) => {
        e.preventDefault();

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
        ])) return setCarregandoCNPJ(false);

        if (empresa.razaoSocial === '') {
            setCarregandoCNPJ(false);
            return setErroCNPJ({
                estado: "erro",
                mensagem: "Informe um CNPJ válido"
            })
        }

        await consumirAPI({
            url: APIConfig.criarPerfilEmpresa,
            authToken: usuario!.access_token,
            dataRequest: {
                cnpj: CNPJSanitize(cnpj),
                razaoSocial: empresa.razaoSocial,
                telefone: TelefoneSanitize(telefone),
                email: email,
                cep: empresa.cep,
                logadouro: empresa.logadouro,
                bairro: empresa.bairro,
                cidade: empresa.cidade,
                estado: empresa.estado
            },
            method: 'post'
        });

        setCarregandoCNPJ(false);
        setIsPerfilEmpresa(true);
    }
    
    if (!isPerfilEmpresa) return (
        <div id="modal">
            <div className="backdrop"></div>
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
                                        <Input
                                            type="text"
                                            label="CNPJ"
                                            max={14}
                                            value={cnpj}
                                            onChange={e => HandleBuscarEmpresa(e.currentTarget.value)}
                                            estado={erroCNPJ?.estado ?? 'padrao'}
                                            mensagensValidacao={{
                                                erro: erroCNPJ?.mensagem ?? '',
                                                aviso: erroCNPJ?.mensagem ?? ''
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
                                            value={empresa.logadouro}
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
                            </div>
                            <div className="row row-align-center mt-1">
                                <Botao
                                    estilo="Primary"
                                    tamanho="Normal"
                                    label="Entrar"
                                    icone={<ArrowRight size={24} />}
                                    iconePosicao="direita"
                                    onClick={HandleCriarPerfil}
                                    isCarregando={carregandoCNPJ}
                                />
                            </div>
                        </FormContainer>
                    </div>
                </div>
            </div>
        </div>
    );

    return <></>;
}


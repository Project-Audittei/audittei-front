import { ArrowRight } from "lucide-react";
import Botao from "../../../components/Botoes/Botao";
import FormContainer from "../../../components/Form/FormContainer";
import Input from "../../../components/Form/Input";
import Notificacao from "../../../components/Notificacao/Notificacao";
import AuthContainer from "../../../components/app/AuthContainer";
import Container from "../../../components/app/Container";
import Logo from "../../../components/app/Logo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputError } from "../../../@types/InputErro";
import { APIResponseErro } from "../../../models/API";
import { TelefoneMascara, TelefoneSanitize } from "../../../helpers/TelefoneSanitize";
import { NovoUsuarioModel } from "../../../models/UsuarioModel";
import { consumirAPI } from "../../../hooks/consumirAPI";
import { RegraValidacaoCampo, ValidarCampos } from "../../../helpers/ValidadorCampo";

export default function Cadastro() {
    const [nomeCompleto, setNomeCompleto] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [nomeEmpresa, setNomeEmpresa] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');

    // Erros
    const [nomeCompletoError, setNomeCompletoError] = useState<InputError | null>(null);
    const [emailError, setEmailError] = useState<InputError | null>(null);
    const [telefoneError, setTelefoneError] = useState<InputError | null>(null);
    const [nomeEmpresaError, setNomeEmpresaError] = useState<InputError | null>(null);
    const [senhaError, setSenhaError] = useState<InputError | null>(null);
    const [confirmarSenhaError, setConfirmarSenhaError] = useState<InputError | null>(null);

    const [feedbackCadastro, setFeedbackCadastro] = useState<APIResponseErro | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
    }, [nomeEmpresa]);

    const VerificaSenha = (senhaInput: string) => {
        setConfirmarSenha(senhaInput);
        if(confirmarSenha.split('').length > 3) {
            if(senhaInput !== senha) {
                setConfirmarSenhaError({
                    estado: "erro",
                    mensagem: 'As senhas devem coincidir'
                });

                return;
            } else setConfirmarSenhaError(null);
        }
    }

    const HandleCadastrarUsuario = async (e: any) => {
        e.preventDefault();

        const regras: RegraValidacaoCampo[] = [
            { regra: "not-null" }, 
            { regra: 'not-empty' }
        ];

        if(confirmarSenha !== senha) return;

        if(!ValidarCampos([
            {
                campo: nomeCompleto,
                regras,
                setError: setNomeCompletoError,
                label: 'Nome Completo'
            },
            {
                campo: email,
                regras,
                setError: setEmailError,
                label: 'Email'
            },
            {
                campo: telefone,
                regras,
                setError: setTelefoneError,
                label: 'Telefone'
            },
            {
                campo: nomeEmpresa,
                regras,
                setError: setNomeEmpresaError,
                label: 'Nome Empresa'
            },
            {
                campo: senha,
                regras,
                setError: setSenhaError,
                label: 'Senha'
            }
        ])) return;

        const usuario: NovoUsuarioModel = {
            nomeCompleto,
            email,
            telefone: TelefoneSanitize(telefone),
            nomeEmpresa,
            senha
        };

        let { message, success } = await consumirAPI({
            url: '/auth/create-user',
            dataRequest: usuario,
            method: "post"
        });

        if(!success) {
            setFeedbackCadastro({
                titulo: "Erro ao realizar login",
                tipo: 'erro',
                mensagem: message
            });

            return;
        }

        setFeedbackCadastro({
            titulo: success ? "Cadastrado com sucesso" : "Erro ao realizar login",
            tipo: success ? 'valido' : 'erro',
            mensagem: message
        })

        return;
    }

    return (
        <Container>
            <div className="row">
                <div className="col">
                    <div className="row row-align-center auth-acoes">
                        <Botao
                            estilo="Primary"
                            tamanho="Small"
                            label="Teste grátis por 15 dias"
                            disabled
                        />
                        <Botao
                            estilo="Primary"
                            tamanho="Small"
                            label="Já tenho conta, quero entrar"
                            onClick={ () => navigate('/login') }
                        />
                    </div>
                    <div className="row row-align-center auth-logo">
                        <Logo />
                    </div>
                </div>
            </div>
            <AuthContainer>
                <h3>Teste grátis por 15 dias!</h3>
                <span className="subtitulo">Não será necessário fornecer dados de cartão de crédito.</span>
                <FormContainer>
                    {
                        feedbackCadastro ? 
                            <Notificacao
                                className="mb-2"
                                mensagem={ feedbackCadastro.mensagem }
                                tamanho="grande"
                                tipo={ feedbackCadastro.tipo }
                                tituloNotificacao={ feedbackCadastro.titulo }
                                bloquearFechar
                            />
                        : ''
                    }
                    <div className="form-element-group">
                        <Input
                            type="text"
                            label="Nome e Sobrenome"
                            value={nomeCompleto}
                            onChange={(e) => setNomeCompleto(e.currentTarget.value)}
                            estado={ nomeCompletoError ? nomeCompletoError.estado : 'padrao' }
                            mensagensValidacao={{
                                erro: nomeCompletoError ? nomeCompletoError.mensagem : ''
                            }}
                        />
                        <Input
                            type="text"
                            label="Email profissional"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            estado={ emailError ? emailError.estado : 'padrao' }
                            mensagensValidacao={{
                                erro: emailError ? emailError.mensagem : ''
                            }}
                        />
                        <Input
                            type="text"
                            label="DDD + Telefone"
                            value={telefone}
                            onChange={e => setTelefone(TelefoneMascara(e.currentTarget.value))}
                            estado={ telefoneError ? telefoneError.estado : 'padrao' }
                            mensagensValidacao={{
                                erro: telefoneError ? telefoneError.mensagem : ''
                            }}
                        />
                    </div>
                    <div className="form-element-group">
                        <Input
                            type="text"
                            label="Nome da Empresa"
                            value={nomeEmpresa}
                            onChange={(e) => setNomeEmpresa(e.currentTarget.value)}
                            estado={ nomeEmpresaError ? nomeEmpresaError.estado : 'padrao' }
                            mensagensValidacao={{
                                erro: nomeEmpresaError ? nomeEmpresaError.mensagem : ''
                            }}
                        />
                        <Input
                            type="password"
                            label="Insira sua senha de acesso"
                            value={senha}
                            onChange={(e) => setSenha(e.currentTarget.value)}
                            estado={ senhaError ? senhaError.estado : 'padrao' }
                            mensagensValidacao={{ erro: senhaError?.mensagem ?? '' }}
                        />
                        <Input
                            type="password"
                            label="Repita a sua senha de acesso"
                            value={confirmarSenha}
                            onChange={(e) => VerificaSenha(e.currentTarget.value)}
                            estado={ confirmarSenhaError ? confirmarSenhaError.estado : 'padrao' }
                            mensagensValidacao={{ erro: confirmarSenhaError?.mensagem ?? '' }}

                        />
                        <span className="form-info">Ao continuar você concorda com os Termos de Uso do Sistema e com as nossas Políticas de Privacidade.</span>
                    </div>
                    <div className="form-element-group-button">
                        <Botao
                            estilo="Primary"
                            tamanho="Normal"
                            label="Testar grátis"
                            icone={<ArrowRight size={24} />}
                            onClick={(e) => HandleCadastrarUsuario(e)}
                            iconePosicao="direita"
                        />
                    </div>
                </FormContainer>
            </AuthContainer>
        </Container>
    );
}
import { ArrowRight } from "lucide-react";
import Botao from "../../../components/Botoes/Botao";
import FormContainer from "../../../components/Form/FormContainer";
import Input from "../../../components/Form/Input";
import AuthContainer from "../../../components/app/AuthContainer";
import Container from "../../../components/app/Container";
import Logo from "../../../components/app/Logo";
import { useEffect, useState } from "react";
import Checkbox from "../../../components/Form/Checkbox";
import { useLocation, useNavigate } from "react-router-dom";
import { consumirAPI } from "../../../hooks/consumirAPI";
import Notificacao from "../../../components/Notificacao/Notificacao";
import { APILoginResponse, APIRequestResponse } from "../../../models/API";
import { InputError } from "../../../@types/InputErro";
import useUsuario from "../../../hooks/useUsuario";

export default function Login() {
    const location = useLocation();

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    
    const [emailError, setEmailError] = useState<InputError | null>(null);
    const [senhaError, setSenhaError] = useState<InputError | null>(null);
    
    const [notificacao, setNotificacao] = useState<APIRequestResponse | null>(null);
    
    const navigate = useNavigate();
    const { HandleSignIn, VerificaSessao, ChecarUsuarioAnonimo } = useUsuario();


    
    useEffect(() => {
        let teste = location.state;

        if(teste !== null) {
            setNotificacao(teste.NotificacaoFeedback);
        }

        VerificaSessao()
            .then( result => {
                return result ? navigate('/') : '';
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const HandleLogin = async (e: any) => {
        e.preventDefault();

        if(email.split('').length < 6) {
            setEmailError({
                estado: 'erro',
                mensagem: 'Este campo deve ser preenchido'
            });
        } else setEmailError(null);

        if(senha.split('').length < 6) {
            setSenhaError({
                estado: 'erro',
                mensagem: 'Este campo deve ser preenchido'
            });
        } else setSenhaError(null);

        if(email.split('').length < 6) return;
        if(senha.split('').length < 6) return;

        if(ChecarUsuarioAnonimo(email, senha)) return navigate('/');
        
        let { data, message, success } = await consumirAPI<unknown, APILoginResponse>({
            url: '/auth/login',
            dataRequest: { email, senha },
            method: "post"
        });

        if(!data) {
            setNotificacao({
                titulo: "Erro ao realizar login",
                tipo: 'erro',
                mensagem: "Um erro ocorreu ao tentar realizar o login"
            })

            return;
        }

        const { user, token } = data;

        if(!success) {
            setNotificacao({
                titulo: "Erro ao realizar login",
                tipo: 'erro',
                mensagem: message
            })

            return;
        }

        if(HandleSignIn(user, token)) {
            navigate('/primeiro-acesso');
        }
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
                            onClick={ () => navigate('/cadastro') }
                        />
                        <Botao
                            estilo="Primary"
                            tamanho="Small"
                            label="Já tenho conta, quero entrar"
                            disabled
                        />
                    </div>
                    <div className="row row-align-center auth-logo">
                        <Logo />
                    </div>
                </div>
            </div>
            <AuthContainer>
                <h3>Entrar</h3>
                <span className="subtitulo">Você já tem conta, digite seus dados de acesso.</span>
                <FormContainer>
                    { notificacao ?
                        <Notificacao
                            className="mb-2"
                            tipo={ notificacao.tipo }
                            mensagem={ notificacao.mensagem }
                            tamanho="grande"
                            tituloNotificacao={ notificacao.titulo }
                            bloquearFechar
                        />

                    : '' }
                    <div className="form-element-group">
                        <Input
                            type="text"
                            label="E-mail profissional"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            estado={ emailError?.estado ?? 'padrao' }
                            mensagensValidacao={{
                                erro: emailError?.mensagem
                            } ?? ''}
                        />
                        <Input
                            type="password"
                            label="Senha de acesso"
                            value={senha}
                            onChange={(e) => setSenha(e.currentTarget.value)}
                            estado={ senhaError?.estado ?? 'padrao' }
                            mensagensValidacao={{
                                erro: senhaError?.mensagem
                            } ?? ''}
                        />
                        <Checkbox
                            label="Salvar meus dados para entrar automaticamente da próxima vez."
                        />
                    </div>
                    <div className="form-element-group-button">
                        <Botao
                            estilo="Primary"
                            tamanho="Normal"
                            label="Entrar"
                            icone={<ArrowRight size={24} />}
                            iconePosicao="direita"
                            onClick={HandleLogin}
                        />
                        <Botao
                            estilo="Danger"
                            tamanho="ExtraSmall"
                            label="Esqueci minha senha"
                            icone={<ArrowRight size={16} />}
                            iconePosicao="direita"
                            className="border-none"
                            onClick={ () => navigate('/esqueci-senha') }
                        />
                    </div>
                </FormContainer>
            </AuthContainer>
        </Container>
    );
}
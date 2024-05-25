import { ArrowRight } from "lucide-react";
import Botao from "../../../components/Botoes/Botao";
import FormContainer from "../../../components/Form/FormContainer";
import Input from "../../../components/Form/Input";
import AuthContainer from "../../../components/app/AuthContainer";
import Container from "../../../components/app/Container";
import Logo from "../../../components/app/Logo";
import { useState } from "react";
import Checkbox from "../../../components/Form/Checkbox";
import { useNavigate } from "react-router-dom";
import { UsuarioLoginModel } from "../../../models/UsuarioModel";
import { EstadosForcaType } from "../../../@types/EstadoForca";
import useUsuario from "../../../hooks/useUsuario";
import { consumirAPI } from "../../../hooks/useAPI";
import Notificacao from "../../../components/Notificacao/Notificacao";
import { APIResponseErro } from "../../../models/API";
import { InputError } from "../../../@types/InputErro";

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const [emailError, setEmailError] = useState<InputError | null>(null);
    const [senhaError, setSenhaError] = useState<InputError | null>(null);

    const [erroLogin, setErroLogin] = useState<APIResponseErro | null>(null);

    const navigate = useNavigate();
    const { setUsuario } = useUsuario();

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

        let usuario: UsuarioLoginModel = { email, senha };
        
        let { statusCode, message, data, success } = await consumirAPI({
            url: '/auth/login',
            dataRequest: usuario,
            method: "post"
        });

        if(!success) {
            setErroLogin({
                titulo: "Erro ao realizar login",
                tipo: 'erro',
                mensagem: message
            })

            return;
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
                    { erroLogin ?
                        <Notificacao
                            className="mb-2"
                            tipo={ erroLogin.tipo }
                            mensagem={ erroLogin.mensagem }
                            tamanho="grande"
                            tituloNotificacao={ erroLogin.titulo }
                        />

                    : '' }
                    <div className="form-element-group">
                        <Input
                            type="text"
                            placeholder="E-mail profissional"
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
                            placeholder="Senha de acesso"
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
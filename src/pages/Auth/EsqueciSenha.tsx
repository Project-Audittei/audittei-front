import { ArrowRight } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import FormContainer from "../../components/Form/FormContainer";
import Input from "../../components/Form/Input";
import AuthContainer from "../../components/app/AuthContainer";
import Container from "../../components/app/Container";
import Logo from "../../components/app/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIRequestResponse, APIResponse } from "../../models/API";
import { consumirAPI } from "../../hooks/consumirAPI";
import { ValidadorCampo } from "../../helpers/ValidadorCampo";
import { InputError } from "../../@types/InputErro";
import Notificacao from "../../components/Notificacao/Notificacao";

export default function EsqueciSenha() {
    const [email, setEmail] = useState<string>('');
    const [emailErro, setEmailErro] = useState<InputError | null>(null);
    const [requestResponse, setRequestResponse] = useState<APIRequestResponse>();
    const navigate = useNavigate();

    const HandleEnviarLinkRecuperacao = async (e:any) => {
        e.preventDefault();

        if(!ValidadorCampo(email, [{ regra: "valid-email" }])) {
            setEmailErro({
                estado: "erro",
                mensagem: "Insira um email válido"
            });
            return;
        } else {
            setEmailErro(null);
        }

        const { success, message } = await consumirAPI<{email: string}, APIResponse<null>>({
            url: '/auth/forgot-password',
            dataRequest: { email },
            method: 'post'
        })

        setRequestResponse({
            tipo: success ? "valido" : "erro",
            titulo: success ? "Sucesso" : "Erro na solicitação",
            mensagem: message
        })
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
                            onClick={ () => navigate('/auth/cadastro') }
                        />
                        <Botao
                            estilo="Primary"
                            tamanho="Small"
                            label="Já tenho conta, quero entrar"
                            onClick={ () => navigate('/auth/login') }
                        />
                    </div>
                    <div className="row row-align-center auth-logo">
                        <Logo />
                    </div>
                </div>
            </div>
            <AuthContainer>
                <h3>Recuperar minha senha</h3>
                <span className="subtitulo">Digite seu e-mail cadastrado, nós vamos te enviar um código para redefinir a sua senha.</span>
                <FormContainer>
                    { requestResponse ?
                            <Notificacao
                                className="mb-2"
                                tipo={ requestResponse.tipo }
                                mensagem={ requestResponse.mensagem }
                                tamanho="grande"
                                tituloNotificacao={ requestResponse.titulo }
                                bloquearFechar
                            />
                        : '' }
                    <div className="form-element-group">
                        <Input
                            type="text"
                            label="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            estado={ emailErro?.estado ?? 'padrao' }
                            mensagensValidacao={{
                                erro: emailErro?.mensagem ?? ''
                            }}
                        />
                    </div>
                    <div className="form-element-group-button">
                        <Botao
                            estilo="Primary"
                            tamanho="Normal"
                            label="Enviar"
                            icone={<ArrowRight size={24} />}
                            iconePosicao="direita"
                            onClick={ e => HandleEnviarLinkRecuperacao(e) }
                        />
                        <Botao
                            estilo="Third"
                            tamanho="ExtraSmall"
                            label="Voltar para login"
                            icone={<ArrowRight size={24} />}
                            iconePosicao="direita"
                            onClick={ () => navigate('/auth/login') }
                        />
                    </div>
                </FormContainer>
            </AuthContainer>
        </Container>
    );
}
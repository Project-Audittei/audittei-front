import { ArrowRight } from "lucide-react";
import Botao from "../../../components/Botoes/Botao";
import FormContainer from "../../../components/Form/FormContainer";
import Input from "../../../components/Form/Input";
import AuthContainer from "../../../components/app/AuthContainer";
import Container from "../../../components/app/Container";
import Logo from "../../../components/app/Logo";
import { useState } from "react";
import Notificacao from "../../../components/Notificacao/Notificacao";
import { APIRequestResponse } from "../../../models/API";
import { consumirAPI } from "../../../hooks/consumirAPI";

export default function LinkRedefinicaoExpirado() {
    const [email, setEmail] = useState<string>('');

    const [feedback, setFeedback] = useState<APIRequestResponse | null>(null);

    const HandleEnviarEmail = async (event: MouseEvent) => {
        event.preventDefault();
        
        const { success, message } = await consumirAPI({
            url: "/auth/new-confirm-register",
            dataRequest: { email: email },
            method: 'post'
        })

        if(!success) {
            setFeedback({
                tipo: 'erro',
                mensagem: message,
                titulo: "Erro"
            });

            return;
        }

        setFeedback({
            tipo: 'valido',
            mensagem: message,
            titulo: "Sucesso!"
        });
    }

    return (
        <Container>
            <div className="row">
                <div className="col">
                    <div className="row row-align-center auth-logo">
                        <Logo />
                    </div>
                </div>
            </div>
            <AuthContainer>
                <h3>Oops! Seu acesso expirou, mas vamos resolver isso.</h3>
                <span className="subtitulo">O prazo para confirmar seu cadastro expirou. <br/><br/> Por favor, insira seu endereço de e-mail novamente e enviaremos um novo link de confirmação para você.</span>
                <FormContainer>
                    <div className="form-element-group">
                        <Input
                            type="text"
                            label="E-mail cadastrado"
                            estado={ "padrao" }
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                        { feedback ? 
                            <Notificacao
                                tamanho="grande"
                                tipo={ feedback.tipo }
                                tituloNotificacao={ feedback.titulo }
                                mensagem={ feedback.mensagem }
                                bloquearFechar
                            /> 
                        : ''}
                    </div>
                    <div className="form-element-group-button">
                        <Botao
                            estilo="Primary"
                            tamanho="Normal"
                            label="Enviar novo link de confirmação"
                            icone={<ArrowRight size={24} />}
                            iconePosicao="direita"
                            onClick={ (event: any) => HandleEnviarEmail(event) }
                        />
                    </div>
                </FormContainer>
            </AuthContainer>
        </Container>
    );
}
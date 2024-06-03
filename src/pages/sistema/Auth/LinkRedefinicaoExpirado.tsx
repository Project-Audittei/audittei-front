import { ArrowRight } from "lucide-react";
import Botao from "../../../components/Botoes/Botao";
import FormContainer from "../../../components/Form/FormContainer";
import Input from "../../../components/Form/Input";
import AuthContainer from "../../../components/app/AuthContainer";
import Container from "../../../components/app/Container";
import Logo from "../../../components/app/Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import Notificacao from "../../../components/Notificacao/Notificacao";
import { EstadosForcaType } from "../../../@types/EstadoForca";

export default function LinkRedefinicaoExpirado() {
    const [email, setEmail] = useState<string>('');
    const [emailValido, setEmailValido] = useState<boolean>(false);
    const [emailEstado, setEmailEstado] = useState<EstadosForcaType>('padrao');
    const [emailEnviado, setEmailEnviado] = useState<boolean>(false);

    const HandleEnviarEmail = (event: MouseEvent) => {
        event.preventDefault();
        const emailCadastrado = "teste@audittei.com";

        setEmailValido(email === emailCadastrado);
        setEmailEnviado(true);
        setEmailEstado(email === emailCadastrado ? 'valido' : 'erro');
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
                            estado={ emailEstado }
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                        { emailEnviado ? 
                            <Notificacao
                                tamanho="grande"
                                tipo={ emailValido ? 'valido' : 'erro' }
                                tituloNotificacao={ emailValido ? 'Novo link enviado com sucesso!' : 'E-mail não cadastrado.' }
                                mensagem={ emailValido ? 
                                    'Ótimo! Enviamos um link de confirmação para o seu e-mail. Por favor, verifique sua caixa de entrada e confirme o seu cadastro.' :
                                    <span>O e-mail inserido não consta em nosso cadastro. Se desejar, pode tentar novamente com outro endereço de e-mail ou realizar o cadastro <Link to={'/cadastro'}>clicando aqui</Link>.</span>
                                }
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
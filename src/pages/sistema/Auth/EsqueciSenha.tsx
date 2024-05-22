import { ArrowRight } from "lucide-react";
import Botao from "../../../components/Botoes/Botao";
import FormContainer from "../../../components/Form/FormContainer";
import Input from "../../../components/Form/Input";
import AuthContainer from "../../../components/app/AuthContainer";
import Container from "../../../components/app/Container";
import Logo from "../../../components/app/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EsqueciSenha() {
    const [email, setEmail] = useState<string>('');
    const navigate = useNavigate();

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
                            onClick={ () => navigate('/login') }
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
                    <div className="form-element-group">
                        <Input
                            type="text"
                            placeholder="Digite seu e-mail"
                            label="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div className="form-element-group-button">
                        <Botao
                            estilo="Primary"
                            tamanho="Normal"
                            label="Enviar"
                            icone={<ArrowRight size={24} />}
                            iconePosicao="direita"
                            onClick={ () => navigate('/redefinir-senha') }
                        />
                        <Botao
                            estilo="Third"
                            tamanho="ExtraSmall"
                            label="Voltar para login"
                            icone={<ArrowRight size={24} />}
                            iconePosicao="direita"
                            onClick={ () => navigate('/login') }
                        />
                    </div>
                </FormContainer>
            </AuthContainer>
        </Container>
    );
}
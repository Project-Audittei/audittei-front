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

export default function Login() {
    const [nomeEmpresa, setNomeEmpresa] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

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
                    <div className="form-element-group">
                        <Input
                            type="text"
                            placeholder="E-mail profissional"
                            label="E-mail profissional"
                            value={nomeEmpresa}
                            onChange={(e) => setNomeEmpresa(e.currentTarget.value)}
                        />
                        <Input
                            type="password"
                            label="Senha de acesso"
                            placeholder="Senha de acesso"
                            value={senha}
                            onChange={(e) => setSenha(e.currentTarget.value)}
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
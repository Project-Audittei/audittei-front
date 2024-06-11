import { ArrowRight } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import FormContainer from "../../components/Form/FormContainer";
import Input from "../../components/Form/Input";
import AuthContainer from "../../components/app/AuthContainer";
import Container from "../../components/app/Container";
import Logo from "../../components/app/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RedefinirSenha() {
    const [chaveAcesso, setChaveAcesso] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');
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
                <h3>Digite uma nova senha</h3>
                <span className="subtitulo">Falta pouco. Digite o código de segurança e uma nova senha.</span>
                <FormContainer>
                    <div className="form-element-group">
                        <Input
                            type="text"
                            label="Digite a chave de segurança que recebeu no seu e-mail"
                            value={chaveAcesso}
                            onChange={(e) => setChaveAcesso(e.currentTarget.value)}
                        />
                        <Input
                            type="password"
                            label="Insira sua senha de acesso"
                            value={senha}
                            onChange={(e) => setSenha(e.currentTarget.value)}
                        />
                        <Input
                            type="password"
                            label="Repita a sua senha de acesso"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.currentTarget.value)}
                            estado={ senha === confirmarSenha ? 'padrao' : 'erro' }
                            mensagensValidacao={{
                                erro: 'As senhas devem coincidir'
                            }}

                        />
                    </div>
                    <div className="form-element-group-button">
                        <Botao
                            estilo="Primary"
                            tamanho="Normal"
                            label="Definir nova senha"
                            icone={<ArrowRight size={24} />}
                            iconePosicao="direita"
                            onClick={ () => navigate('/auth/login') }
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
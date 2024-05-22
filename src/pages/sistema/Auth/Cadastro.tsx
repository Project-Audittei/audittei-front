import { ArrowRight } from "lucide-react";
import Botao from "../../../components/Botoes/Botao";
import FormContainer from "../../../components/Form/FormContainer";
import Input from "../../../components/Form/Input";
import Notificacao from "../../../components/Notificacao/Notificacao";
import AuthContainer from "../../../components/app/AuthContainer";
import Container from "../../../components/app/Container";
import Logo from "../../../components/app/Logo";
import { useEffect, useState } from "react";

export default function Cadastro() {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [nomeEmpresa, setNomeEmpresa] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');
    const [dominioEmpresa, setDominioEmpresa] = useState<string>('');

    useEffect(() => {
        let dominio = nomeEmpresa.replace(" ", '-');
        setDominioEmpresa(dominio.toLowerCase());
    }, [nomeEmpresa]);

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
                    <div className="form-element-group">
                        <Input
                            type="text"
                            placeholder="Nome e Sobrenome"
                            label="Nome e Sobrenome"
                            value={nome}
                            onChange={(e) => setNome(e.currentTarget.value)}
                        />
                        <Input
                            type="text"
                            label="Email profissional"
                            placeholder="Email profissional"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div className="form-element-group">
                        <Input
                            type="text"
                            placeholder="Nome da Empresa"
                            label="Nome da Empresa"
                            value={nomeEmpresa}
                            onChange={(e) => setNomeEmpresa(e.currentTarget.value)}
                        />
                        { nomeEmpresa !== '' ? <Notificacao
                            tituloNotificacao="Seu endereço de acesso ao Audittei será:"
                            tipo="informacao"
                            tamanho="grande"
                            mensagem={`https://${ dominioEmpresa }.audittei.com`}
                        /> : '' }
                        <Input
                            type="password"
                            label="Insira sua senha de acesso"
                            placeholder="Insira sua senha de acesso"
                            value={senha}
                            onChange={(e) => setSenha(e.currentTarget.value)}
                        />
                        <Input
                            type="password"
                            label="Repita a sua senha de acesso"
                            placeholder="Repita a sua senha de acesso"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.currentTarget.value)}
                            estado={ senha === confirmarSenha ? 'padrao' : 'erro' }
                            mensagensValidacao={{
                                erro: 'As senhas devem coincidir'
                            }}

                        />
                        <span className="form-info">Ao continuar você concorda com os Termos de Uso do Sistema e com as nossas Políticas de Privacidade.</span>
                    </div>
                    <div className="form-element-group-button">
                        <Botao
                            estilo="Primary"
                            tamanho="Normal"
                            label="Testar grátis"
                            icone={<ArrowRight size={24} />}
                            iconePosicao="direita"
                        />
                    </div>
                </FormContainer>
            </AuthContainer>
        </Container>
    );
}
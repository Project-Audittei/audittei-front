import { ArrowRight } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import FormContainer from "../../components/Form/FormContainer";
import Input from "../../components/Form/Input";
import AuthContainer from "../../components/app/AuthContainer";
import Container from "../../components/app/Container";
import Logo from "../../components/app/Logo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ValidarCampos } from "../../helpers/ValidadorCampo";
import { InputError } from "../../@types/InputErro";
import { consumirAPI } from "../../hooks/consumirAPI";
import { APIConfig } from "../../api/APIConfig";
import Notificacao, { INotificacao } from "../../components/Notificacao/Notificacao";
import useAnalytics from "../../analytics/useAnalytics";

export default function RedefinirSenha() {
    const [chaveAcesso, setChaveAcesso] = useState<string>('');
    const [chaveAcessoErro, setChaveAcessoErro] = useState<InputError | null>(null);
    
    const [senha, setSenha] = useState<string>('');
    const [senhaErro, setSenhaErro] = useState<InputError | null>(null);
    
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');
    const [confirmarSenhaErro, setConfirmarSenhaErro] = useState<InputError | null>(null);

    const [feedback, setFeedback] = useState<INotificacao | null>(null);
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const { enviarAnalise } = useAnalytics();

    useEffect(() => {
        enviarAnalise({
            page: '/auth/redefinir-senha',
            title: 'Redefinir senha'
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const HandleConfirmarSenha = (confirmarSenha: string) => {
        setConfirmarSenha(confirmarSenha);
        
        if(senha !== confirmarSenha) {
            return setConfirmarSenhaErro({
                estado: 'erro',
                mensagem: "As senhas devem coincidir"
            })
        } else return setConfirmarSenhaErro(null);
    }

    const HandleRedefinirSenha = async (e: any) => {
        e.preventDefault();

        setFeedback(null);
        setCarregando(true);

        if(!ValidarCampos([
            {
                campo: chaveAcesso,
                regras: [ { regra: "not-empty" }, { regra: "not-null" } ],
                setError: setChaveAcessoErro
            },
            {
                campo: senha,
                regras: [ { regra: "not-empty" }, { regra: "not-null" } ],
                setError: setSenhaErro
            },
            {
                campo: confirmarSenha,
                regras: [ { regra: "not-empty" }, { regra: "not-null" } ],
                setError: setConfirmarSenhaErro
            }
        ])) return;

        if(senha !== confirmarSenha) return setConfirmarSenhaErro({
            estado: 'erro',
            mensagem: "As senhas devem coincidir"
        });

        const { success, message } = await consumirAPI({
            url: APIConfig.redefinirSenha,
            method: "post",
            dataRequest: { hash: chaveAcesso, senha }
        });

        if(!success) {
            setCarregando(false);
            return setFeedback({
                tipo: 'erro',
                mensagem: message,
                tamanho: 'pequeno'
            })
        }

        setCarregando(false);
        return setFeedback({
            tipo: 'valido',
            mensagem: message,
            tamanho: 'pequeno'
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
                <h3>Digite uma nova senha</h3>
                <span className="subtitulo">Falta pouco. Digite o código de segurança e uma nova senha.</span>
                <FormContainer>
                    { feedback ? <Notificacao tamanho="pequeno" tipo={ feedback.tipo } mensagem={ feedback.mensagem } bloquearFechar /> : '' }
                    <div className="form-element-group mt-2">
                        <Input
                            type="text"
                            label="Digite a chave de segurança que recebeu no seu e-mail"
                            value={chaveAcesso}
                            onChange={(e) => setChaveAcesso(e.currentTarget.value)}
                            estado={ chaveAcessoErro?.estado ?? 'padrao' }
                            mensagensValidacao={{
                                erro: chaveAcessoErro?.mensagem
                            }}
                        />
                        <Input
                            type="password"
                            label="Insira sua senha de acesso"
                            value={senha}
                            onChange={(e) => setSenha(e.currentTarget.value)}
                            estado={ senhaErro?.estado ?? 'padrao' }
                            mensagensValidacao={{
                                erro: senhaErro?.mensagem
                            }}
                        />
                        <Input
                            type="password"
                            label="Repita a sua senha de acesso"
                            value={confirmarSenha}
                            onChange={(e) => HandleConfirmarSenha(e.currentTarget.value)}
                            estado={ confirmarSenhaErro?.estado ?? 'padrao' }
                            mensagensValidacao={{
                                erro: confirmarSenhaErro?.mensagem
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
                            onClick={ HandleRedefinirSenha }
                            disabled={ carregando }
                            isCarregando={ carregando }
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
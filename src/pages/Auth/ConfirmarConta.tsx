import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { consumirAPI } from "../../hooks/consumirAPI";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import FormContainer from "../../components/Form/FormContainer";
import Input from "../../components/Form/Input";
import AuthContainer from "../../components/app/AuthContainer";
import Logo from "../../components/app/Logo";
import Container from "../../components/app/Container";

export default function ConfirmarConta() {
    
    const { hash } = useParams();

    const [codigoConfirmacao, setCodigoConfirmacao] = useState('');
    const [isContaConfirmada, setIsContaConfirmada] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if(hash) {
            HandleConfirmarConta(hash);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const HandleConfirmarConta = async (hash?: string) => {

        const { success } = await consumirAPI({
            url: "/auth/confirm-register",
            dataRequest: { hash: hash },
            method: "post"
        });

        if(!success) {
            setIsContaConfirmada(false);
            return navigate('/auth/reenviar-confirmar-conta');
        }

        setIsContaConfirmada(true);
    }
    
    if(hash) return (<></>);

    if(isContaConfirmada) return (
        <Container>
            <div className="row">
                <div className="col">
                    <div className="row row-align-center auth-logo">
                        <Logo />
                    </div>
                </div>
            </div>
            <AuthContainer>
                <h3>Conta confirmada</h3>
                <span className="subtitulo">Sua conta foi confirmada com sucesso!</span>
                <FormContainer>
                    <div className="row row-align-center mb-4">
                        <CheckCircle2 color="#439F6E" size={64}/>
                    </div>
                    <div className="form-element-group-button">
                        <Botao
                            estilo="Primary"
                            tamanho="Normal"
                            label="Voltar para login"
                            icone={<ArrowRight size={24} />}
                            iconePosicao="direita"
                        />
                    </div>
                </FormContainer>
            </AuthContainer>
        </Container>
    );

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
                <h3>Confime sua conta</h3>
                <span className="subtitulo">Para confirmar sua conta, insira abaixo o código de confirmação enviado para seu e-mail.</span>
                <FormContainer>
                    <div className="form-element-group">
                        <Input
                            type="text"
                            label="Código de confirmação"
                            value={codigoConfirmacao}
                            onChange={(e) => setCodigoConfirmacao(e.currentTarget.value)}
                        />
                    </div>
                    <div className="form-element-group-button">
                        <Botao
                            estilo="Primary"
                            tamanho="Normal"
                            label="Confirmar conta"
                            icone={<ArrowRight size={24} />}
                            iconePosicao="direita"
                            onClick={e => HandleConfirmarConta(codigoConfirmacao)}
                        />
                    </div>
                </FormContainer>
            </AuthContainer>
        </Container>
    );
}
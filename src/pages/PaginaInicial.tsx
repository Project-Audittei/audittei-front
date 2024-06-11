import CardOnBoarding from "../components/Card/CardOnBoarding";
import VisaoBasica from "../components/VisaoBasica";
import Alerta from "../components/app/Avisos/Alerta";
import PrimeiroAcesso from "../components/app/Modais/PrimeiroAcesso";
import useUsuario from "../hooks/useUsuario";

export default function PaginaInicial() {
    const  { usuario } = useUsuario();

    return (
        <VisaoBasica menuAtivo="/" breadcrumbSecao="Página Inicial">
            <PrimeiroAcesso />
            <h3>👋 Olá, { usuario?.nomeSimples }!</h3>
            <p className="subtitulo">Bem-vind@ de volta.</p>
            <Alerta
                titulo="Esses são os seus próximos passos:"
                descricao="Ainda não temos dados para mostrar nesse dashboard."
            >
                <CardOnBoarding
                    numero={1}
                    imagem="informacoes_clientes_card"
                    texto={<>Registre seus clientes e comece<br/> a inserir suas informações.</>}
                    btnLabel="Registrar meus clientes"
                />
                <CardOnBoarding
                    numero={2}
                    imagem="informacoes_equipe_card"
                    texto={<>Inicie o cadastro da sua equipe<br/> na plataforma.</>}
                    btnLabel="Cadastrar minha equipe"
                />
            </Alerta>
        </VisaoBasica>
    );
}
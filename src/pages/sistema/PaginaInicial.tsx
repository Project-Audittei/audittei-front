import CardOnBoarding from "../../components/Card/CardOnBoarding";
import VisaoBasica from "../../components/VisaoBasica";
import useUsuario from "../../hooks/useUsuario";

export default function PaginaInicial() {

    const { usuario } = useUsuario();

    return (
        <VisaoBasica menuAtivo="Inicio" breadcrumbSecao="Página Inicial">
            <h3>👋 Olá, { usuario.nomeSimples }!</h3>
            <p className="subtitulo">Bem-vind@ de volta.</p>
            <div className="card mt-3">
                <div className="card-header">
                    <h3>⚠️ Esses são os seus próximos passos:</h3>
                    <p className="subtitulo">Ainda não temos dados para mostrar nesse dashboard.</p>
                </div>
                <div className="card-body">
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
                </div>
            </div>
        </VisaoBasica>
    );
}
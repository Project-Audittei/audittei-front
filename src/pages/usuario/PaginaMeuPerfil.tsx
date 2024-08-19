import VisaoBasica from "../../components/VisaoBasica";
import useUsuario from "../../hooks/useUsuario";
import FormularioMeuPerfil from "../../components/app/Forms/MeuPerfil/FormularioMeuPerfil";
import { useEffect } from "react";
import useAnalytics from "../../analytics/useAnalytics";

export default function PaginaMeuPerfil() {

	const { enviarAnalise } = useAnalytics();

    useEffect(() => {
        enviarAnalise({
			page: '/meu-perfil',
			title: 'Meu perfil'
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

	const { usuario } = useUsuario();

	if(!usuario) return <></>;

	return (
		<VisaoBasica breadcrumbSecao="Meu Perfil">
			<div className="row">
				<div className="col">
					<div className="row">
						<h3>Meu Perfil</h3>
					</div>
				</div>
				<div className="col col-align-center align-right"></div>
			</div>

			<FormularioMeuPerfil usuario={usuario} />

		</VisaoBasica>
	);
}
